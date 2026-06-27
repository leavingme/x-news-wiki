#!/usr/bin/env node
// scripts/lint.js — Audit x-news-wiki for llm-wiki + OKF compliance.
//
// Usage:
//   node scripts/lint.js
//
// Checks per file (sources/, entities/, concepts/, queries/):
//   1. Has frontmatter
//   2. Has required keys: type, created, updated, sources
//   3. type is one of: source | entity | concept | query | schema | readme | overview
//   4. source files: has sha256 + source_url
//   5. layer 2 pages: sources list is non-empty (or empty with reason)
//   6. tags present
//   7. created date is ISO YYYY-MM-DD
//
// Reports orphan raw sources (entity/concept page references a missing path)
// and broken sources[] entries.

const fs = require('fs');
const path = require('path');

const WIKI = process.env.WIKI_PATH || path.resolve(__dirname, '..');
const LAYER1 = ['sources/news', 'sources/highlights'];
const LAYER2 = ['entities', 'concepts', 'queries'];
const VALID_TYPES = new Set(['source', 'entity', 'concept', 'query', 'schema', 'readme', 'overview']);

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
    const m = text.match(/^---\n([\s\S]*?)\n---/);
    if (!m) return null;
    return m[1];
}

function flattenFM(yaml) {
    // very loose: only top-level scalar keys + list-of-string detection
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

function isISODate(s) { return /^\d{4}-\d{2}-\d{2}$/.test(s || ''); }

const issues = { missing_frontmatter: [], missing_type: [], bad_type: [], missing_created: [], missing_updated: [], missing_sources: [], missing_sha256: [], missing_source_url: [], missing_tags: [], bad_date: [] };
const stats = { layer1: 0, layer2: 0, by_type: {} };
const allFiles = new Set();
const brokenRef = [];
const refTargets = new Set();

const dirs = [...LAYER1, ...LAYER2].map(d => path.join(WIKI, d));
const all = [];
for (const d of dirs) all.push(...walk(d));

for (const fp of all) {
    const rel = path.relative(WIKI, fp);
    if (rel === 'SCHEMA.md' || rel === 'README.md' || rel === 'log.md' || rel === 'index.md') continue;
    if (rel.endsWith('/index.md') || rel.endsWith('overview.md')) continue;
    allFiles.add(rel);
    const text = fs.readFileSync(fp, 'utf8');
    const yml = parseFM(text);
    if (!yml) { issues.missing_frontmatter.push(rel); continue; }
    const fm = flattenFM(yml);
    if (LAYER1.some(d => rel.startsWith(d))) stats.layer1++;
    if (LAYER2.some(d => rel.startsWith(d))) stats.layer2++;

    if (!fm.type) { issues.missing_type.push(rel); }
    else {
        if (!VALID_TYPES.has(fm.type)) issues.bad_type.push(`${rel}: ${fm.type}`);
        stats.by_type[fm.type] = (stats.by_type[fm.type] || 0) + 1;
    }
    if (!fm.created) issues.missing_created.push(rel);
    else if (!isISODate(fm.created)) issues.bad_date.push(`${rel}: created=${fm.created}`);
    if (!fm.updated) issues.missing_updated.push(rel);
    else if (!isISODate(fm.updated)) issues.bad_date.push(`${rel}: updated=${fm.updated}`);
    if (!fm.tags_list) issues.missing_tags.push(rel);

    if (LAYER1.some(d => rel.startsWith(d))) {
        if (!fm.sha256) issues.missing_sha256.push(rel);
        if (!fm.source_url) issues.missing_source_url.push(rel);
    } else {
        // layer 2: sources list
        const srcs = fm.sources_list || [];
        if (srcs.length === 0) {
            // accept pages with empty sources if they are index/overview/etc
            // entity/concept/query should have sources filled
            issues.missing_sources.push(rel);
        } else {
            for (const s of srcs) {
                const target = path.normalize(path.join(path.dirname(fp), s));
                refTargets.add(path.relative(WIKI, target));
            }
        }
    }
}

// check layer2 sources[] references
for (const fp of all) {
    const rel = path.relative(WIKI, fp);
    if (rel === 'SCHEMA.md' || rel === 'README.md' || rel === 'log.md' || rel === 'index.md') continue;
    if (rel.endsWith('/index.md') || rel.endsWith('overview.md')) continue;
    if (LAYER1.some(d => rel.startsWith(d))) continue;
    const text = fs.readFileSync(fp, 'utf8');
    const yml = parseFM(text);
    if (!yml) continue;
    const fm = flattenFM(yml);
    for (const s of (fm.sources_list || [])) {
        // backfill stores bundle-relative absolute `/sources/...`.
        // Resolve against wiki root.
        const rel2 = s.replace(/^\//, '');
        const target = path.join(WIKI, rel2);
        const relT = path.relative(WIKI, target);
        if (!allFiles.has(relT)) brokenRef.push(`${rel} -> ${s} (resolved: ${relT})`);
    }
}

console.log('='.repeat(60));
console.log('LINT REPORT — x-news-wiki');
console.log('='.repeat(60));
console.log(`Wiki: ${WIKI}`);
console.log(`Layer 1 (raw): ${stats.layer1}`);
console.log(`Layer 2 (wiki): ${stats.layer2}`);
console.log(`By type:`, stats.by_type);
console.log();
console.log('--- Issues ---');
const order = ['missing_frontmatter','missing_type','bad_type','missing_created','missing_updated','bad_date','missing_sources','missing_sha256','missing_source_url','missing_tags'];
let anyIssue = false;
for (const k of order) {
    const v = issues[k];
    if (v.length === 0) { console.log(`✓ ${k}: 0`); continue; }
    anyIssue = true;
    console.log(`✗ ${k}: ${v.length}`);
    for (const s of v.slice(0, 5)) console.log(`    - ${s}`);
    if (v.length > 5) console.log(`    ... +${v.length - 5} more`);
}
console.log();
console.log(`Broken sources[] refs: ${brokenRef.length}`);
for (const s of brokenRef.slice(0, 5)) console.log(`  - ${s}`);
console.log();
console.log(anyIssue ? 'STATUS: ISSUES' : 'STATUS: CLEAN');
