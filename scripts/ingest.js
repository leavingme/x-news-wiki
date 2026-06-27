#!/usr/bin/env node
// scripts/ingest.js — Aligns x-news-wiki frontmatter to llm-wiki standard.
//
// Idempotent. For every file under sources/, entities/, concepts/, queries/:
//   1. Parse YAML frontmatter (regex — our emitter is controlled, OKF safe)
//   2. Compute sha256 of body (everything after closing `---`)
//   3. Add/refresh llm-wiki fields:
//        - type:        "X Tweet" → "source"   (OKF type kept in type_okf)
//        - source_url:  alias of `resource` (canonical X URL)
//        - created:     from x_created_at (raw) or first_seen / tweet_count sort
//        - updated:     file mtime (ISO date)
//        - sha256:      hex of body
//        - sources:     list of relative raw paths the page cites
//   4. Reparse + write back, preserving field order (OKF + llm-wiki compatible)
//
// Usage:
//   node scripts/ingest.js                     # all files
//   node scripts/ingest.js --dry              # report only, no writes
//   node scripts/ingest.js --path=sources     # only sources/

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const WIKI = process.env.WIKI_PATH || path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const pathArg = args.find(a => a.startsWith('--path='));
const ONLY_PATH = pathArg ? pathArg.slice('--path='.length) : null;

const TYPE_MAP_OKF_TO_LLM = {
    'X Tweet': 'source',
    'Author': 'entity',
    'Concept': 'concept',
    'Synthesis': 'query',
    'Schema': 'schema',
    'Readme': 'readme',
    'Overview': 'overview',
    // already llm-wiki
    'source': 'source',
    'entity': 'entity',
    'concept': 'concept',
    'query': 'query',
    'schema': 'schema',
    'readme': 'readme',
    'overview': 'overview',
};

// ---------- minimal YAML frontmatter parser ----------
// Handles the subset our export.js emits: string/number/bool/null scalar values,
// flat string/number lists, and one-level-deep maps (used for x_engagement).
function parseFrontmatter(text) {
    const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!m) return null;
    const body = text.slice(m[0].length);
    const lines = m[1].split('\n');
    const root = {};
    // stack entries: { container: obj|array, key?: string, indent: number }
    // When `key` is set, `container[key]` will be filled; otherwise container is the
    // target (root map or list we're currently appending to).
    const stack = [{ container: root, indent: -1 }];
    let i = 0;
    while (i < lines.length) {
        const raw = lines[i];
        if (raw.trim() === '' || raw.trim().startsWith('#')) { i++; continue; }
        const indent = raw.match(/^ */)[0].length;
        const content = raw.slice(indent);

        // pop stale frames
        while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
        const top = stack[stack.length - 1];

        if (content.startsWith('- ')) {
            // list item — only flat scalar items in our schema
            const v = parseScalar(content.slice(2).trim());
            if (Array.isArray(top.container)) top.container.push(v);
            i++;
            continue;
        }
        const km = content.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
        if (!km) { i++; continue; }
        const key = km[1];
        const valRaw = km[2];

        if (valRaw === '' || valRaw === undefined) {
            // Peek next non-empty line to decide: list (`- ...`) or map (`key: ...`)
            let j = i + 1;
            while (j < lines.length && (lines[j].trim() === '' || lines[j].trim().startsWith('#'))) j++;
            const next = lines[j] || '';
            if (next && /^\s+-\s/.test(next)) {
                const arr = [];
                top.container[key] = arr;
                // Frame handles anything strictly deeper than this key — children indent > indent
                stack.push({ container: arr, indent: indent });
            } else {
                const obj = {};
                top.container[key] = obj;
                stack.push({ container: obj, indent: indent });
            }
        } else {
            top.container[key] = parseScalar(valRaw);
        }
        i++;
    }
    return { frontmatter: root, body, raw: m[1] };
}

function parseScalar(v) {
    if (v === '' || v === 'null' || v === '~') return null;
    if (v === 'true') return true;
    if (v === 'false') return false;
    if (/^-?\d+$/.test(v)) return parseInt(v, 10);
    if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v);
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        return v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    return v;
}

// ---------- minimal YAML emitter (mirror of export.js) ----------
function toYaml(obj, indent = 0) {
    const pad = '  '.repeat(indent);
    const lines = [];
    for (const [k, v] of Object.entries(obj)) {
        if (v === null || v === undefined) {
            lines.push(`${pad}${k}:`);
        } else if (Array.isArray(v)) {
            if (v.length === 0) lines.push(`${pad}${k}: []`);
            else if (v.every(x => typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean')) {
                lines.push(`${pad}${k}:`);
                for (const item of v) lines.push(`${pad}  - ${yamlScalar(item)}`);
            } else {
                lines.push(`${pad}${k}:`);
                for (const item of v) {
                    if (item && typeof item === 'object') {
                        const inner = toYaml(item, indent + 2);
                        const first = inner.split('\n')[0];
                        const rest = inner.split('\n').slice(1).join('\n');
                        lines.push(`${pad}  - ${first.trimStart()}`);
                        if (rest) lines.push(rest);
                    } else lines.push(`${pad}  - ${yamlScalar(item)}`);
                }
            }
        } else if (typeof v === 'object') {
            lines.push(`${pad}${k}:`);
            lines.push(toYaml(v, indent + 1));
        } else {
            lines.push(`${pad}${k}: ${yamlScalar(v)}`);
        }
    }
    return lines.join('\n');
}

function yamlScalar(v) {
    if (v === null || v === undefined) return 'null';
    if (typeof v === 'boolean' || typeof v === 'number') return String(v);
    const s = String(v);
    return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function sha256(s) { return crypto.createHash('sha256').update(s, 'utf8').digest('hex'); }

// ---------- file processing ----------
function walk(dir) {
    const out = [];
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        if (ent.name === '.git' || ent.name === 'node_modules') continue;
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) out.push(...walk(p));
        else if (ent.isFile() && p.endsWith('.md')) out.push(p);
    }
    return out;
}

function processFile(fp) {
    const text = fs.readFileSync(fp, 'utf8');
    const parsed = parseFrontmatter(text);
    if (!parsed) return { skipped: true, reason: 'no frontmatter' };
    const fm = parsed.frontmatter;
    const body = parsed.body;
    const stat = fs.statSync(fp);

    // skip root files (README, index, log, overview, SCHEMA)
    const rel = path.relative(WIKI, fp);
    if (rel === 'SCHEMA.md' || rel === 'README.md' || rel === 'log.md' || rel === 'index.md') return { skipped: true, reason: 'root file' };
    // Skip directory-level index.md (e.g. entities/index.md, entities/authors/index.md,
    // concepts/index.md) but NOT files whose name happens to end in 'index.md'
    // (there are no such files in our schema, but be explicit anyway).
    if (rel.endsWith('/index.md') || rel.endsWith('overview.md')) return { skipped: true, reason: 'index/overview' };

    const okfType = fm.type;
    const llmType = TYPE_MAP_OKF_TO_LLM[okfType] || 'source';

    // sha256 of body
    const bodyHash = sha256(body);

    // created from various fields
    let created = fm.created;
    if (!created) {
        if (fm.x_created_at) created = String(fm.x_created_at).slice(0, 10);
        else if (fm.x_first_seen) created = String(fm.x_first_seen).slice(0, 10);
        else if (fm.timestamp) created = String(fm.timestamp).slice(0, 10);
    }
    if (!created) created = stat.mtime.toISOString().slice(0, 10);

    // updated = mtime date
    const updated = stat.mtime.toISOString().slice(0, 10);

    // source_url = resource alias
    let source_url = fm.source_url;
    if (!source_url && fm.resource) source_url = fm.resource;

    // build sources list (relative path to this file)
    const sources = fm.sources;
    let sourcesList = sources;
    if (!Array.isArray(sourcesList) || sourcesList.length === 0) {
        if (llmType === 'source') {
            // a raw page cites itself (bundle-relative absolute)
            sourcesList = [`/${rel}`];
        } else {
            sourcesList = []; // agent will fill on next curation pass
        }
    } else {
        // normalize all entries to bundle-relative absolute `/path`
        sourcesList = sourcesList.map(s => {
            if (typeof s !== 'string') return s;
            if (s.startsWith('/')) return s;
            return '/' + s.replace(/^\.\.\//, '').replace(/^\.\//, '');
        });
    }

    // build new frontmatter: keep original keys, add/refresh llm-wiki keys
    const next = { ...fm };
    next.type = llmType;
    if (okfType && okfType !== llmType) next.type_okf = okfType;
    if (source_url) next.source_url = source_url;
    next.created = created;
    next.updated = updated;
    next.sha256 = bodyHash;
    next.sources = sourcesList;

    // ensure tags present
    if (!Array.isArray(next.tags) || next.tags.length === 0) {
        next.tags = ['x-news'];
    }

    // write back
    const out = `---\n${toYaml(next)}\n---\n${body}`;
    if (!DRY) fs.writeFileSync(fp, out);

    return { skipped: false, type: llmType, okfType };
}

// ---------- main ----------
const dirs = ONLY_PATH
    ? [path.join(WIKI, ONLY_PATH)]
    : ['sources', 'entities', 'concepts', 'queries']
        .map(d => path.join(WIKI, d))
        .filter(d => fs.existsSync(d));

let files = [];
for (const d of dirs) files.push(...walk(d));

let processed = 0, skipped = 0, errors = 0;
const byType = {};
for (const fp of files) {
    try {
        const r = processFile(fp);
        if (r.skipped) { skipped++; continue; }
        processed++;
        byType[r.type] = (byType[r.type] || 0) + 1;
    } catch (e) {
        errors++;
        console.error(`ERROR ${fp}: ${e.message}`);
    }
}

console.log(`${DRY ? '[DRY] ' : ''}ingest: ${processed} processed, ${skipped} skipped, ${errors} errors`);
console.log(`by type:`, byType);
console.log(`wiki: ${WIKI}`);
