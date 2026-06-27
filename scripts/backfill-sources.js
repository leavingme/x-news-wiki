#!/usr/bin/env node
// scripts/backfill-sources.js — For every entity / concept / query page,
// parse markdown links of the form [..](../sources/...md) or relative
// sources/...md, and add the list of relative paths to frontmatter.sources.
//
// Idempotent. Re-runnable.

const fs = require('fs');
const path = require('path');

const WIKI = process.env.WIKI_PATH || path.resolve(__dirname, '..');
const DIRS = ['entities', 'concepts', 'queries'];

function walk(d) {
    const out = [];
    if (!fs.existsSync(d)) return out;
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        if (e.name === '.git') continue;
        const p = path.join(d, e.name);
        if (e.isDirectory()) out.push(...walk(p));
        else if (e.isFile() && p.endsWith('.md')) out.push(p);
    }
    return out;
}

function parseFM(text) {
    const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!m) return null;
    return { yaml: m[1], body: text.slice(m[0].length), full: text };
}

function flattenFM(yaml) {
    const fm = {};
    let curKey = null;
    for (const line of yaml.split('\n')) {
        const km = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
        if (km) {
            curKey = km[1];
            fm[curKey] = km[2].trim().replace(/^["']|["']$/g, '');
        } else if (line.startsWith('  - ') && curKey) {
            const k = curKey + '_list';
            fm[k] = fm[k] || [];
            fm[k].push(line.slice(4).trim().replace(/^["']|["']$/g, ''));
        }
    }
    return fm;
}

function toYaml(obj, indent = 0) {
    const pad = '  '.repeat(indent);
    const lines = [];
    for (const [k, v] of Object.entries(obj)) {
        if (v === null || v === undefined) lines.push(`${pad}${k}:`);
        else if (Array.isArray(v)) {
            if (v.length === 0) lines.push(`${pad}${k}: []`);
            else if (v.every(x => typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean')) {
                lines.push(`${pad}${k}:`);
                for (const x of v) lines.push(`${pad}  - ${yamlScalar(x)}`);
            } else {
                lines.push(`${pad}${k}:`);
                for (const item of v) {
                    if (item && typeof item === 'object') {
                        const inner = toYaml(item, indent + 2);
                        const first = inner.split('\n')[0];
                        lines.push(`${pad}  - ${first.trimStart()}`);
                        const rest = inner.split('\n').slice(1).join('\n');
                        if (rest) lines.push(rest);
                    } else lines.push(`${pad}  - ${yamlScalar(item)}`);
                }
            }
        } else if (typeof v === 'object') {
            lines.push(`${pad}${k}:`);
            lines.push(toYaml(v, indent + 1));
        } else lines.push(`${pad}${k}: ${yamlScalar(v)}`);
    }
    return lines.join('\n');
}

function yamlScalar(v) {
    if (v === null || v === undefined) return 'null';
    if (typeof v === 'boolean' || typeof v === 'number') return String(v);
    return `"${String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function sha256(s) { return require('crypto').createHash('sha256').update(s, 'utf8').digest('hex'); }

// Extract markdown links pointing into sources/ (relative)
function extractSourceLinks(body) {
    const re = /\[[^\]]*\]\(([^)]+\.md)\)/g;
    const out = new Set();
    let m;
    while ((m = re.exec(body))) {
        const href = m[1].split('#')[0].split('?')[0];
        if (href.startsWith('http')) continue;
        if (href.includes('sources/')) {
            // Normalize to bundle-relative absolute path (OKF §6).
            // `../sources/...` or `sources/...` → `sources/...`
            let rel = href.replace(/^\.\.\//, '').replace(/^\.\//, '');
            // Strip leading slash for consistency
            out.add('/' + rel);
        }
    }
    return [...out];
}

const files = DIRS.flatMap(d => walk(path.join(WIKI, d)));
let updated = 0, skipped = 0;
for (const fp of files) {
    const text = fs.readFileSync(fp, 'utf8');
    const p = parseFM(text);
    if (!p) { skipped++; continue; }
    const rel = path.relative(WIKI, fp);
    if (rel.endsWith('/index.md') || rel === 'index.md') { skipped++; continue; }
    const fm = flattenFM(p.yaml);
    const body = p.body;
    const existing = new Set(fm.sources_list || []);
    const linked = extractSourceLinks(body);
    const merged = [...new Set([...existing, ...linked])].sort();
    if (merged.length === existing.size && merged.every((x, i) => x === [...existing][i])) {
        skipped++; continue;
    }
    // rebuild frontmatter: keep original scalar keys, replace list with merged
    // Detect list form: sources: [...] vs scalar `sources: foo`
    const yamlLines = p.yaml.split('\n');
    const out = [];
    let inSources = false, sourcesWritten = false;
    for (let i = 0; i < yamlLines.length; i++) {
        const line = yamlLines[i];
        if (line.match(/^sources:\s*(.*)$/)) {
            // write our own
            if (merged.length === 0) {
                out.push('sources: []');
            } else {
                out.push('sources:');
                for (const s of merged) out.push(`  - "${s}"`);
            }
            sourcesWritten = true;
            inSources = false;
        } else if (line.startsWith('  - ') && inSources) {
            // skip existing list items under sources
            continue;
        } else {
            if (!sourcesWritten) {
                // check whether we are inside a `sources:` block (look-back)
                inSources = false;
            }
            out.push(line);
        }
        // crude: if previous line is `sources:` with empty value, this `- ` belongs to it
        if (i > 0 && yamlLines[i-1].match(/^sources:\s*$/)) inSources = line.startsWith('  - ');
    }
    if (!sourcesWritten) out.push(merged.length === 0 ? 'sources: []' : 'sources:\n' + merged.map(s => `  - "${s}"`).join('\n'));

    const newYaml = out.join('\n');
    const newText = `---\n${newYaml}\n---\n${body}`;
    fs.writeFileSync(fp, newText);
    updated++;
}
console.log(`backfill-sources: ${updated} updated, ${skipped} skipped (out of ${files.length})`);
