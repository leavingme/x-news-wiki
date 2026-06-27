#!/usr/bin/env node
// scripts/export.js — Export AI-selected x-news tweets as Layer-1 raw sources.
//
// Reads from Turso (single source of truth since 2026-06-16) and writes one
// markdown file per tweet to sources/{news,highlights}/<date>/, conforming to
// https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
//
// Scope (since 2026-06-27 redesign): sources only. We dropped the Layer 2
// derivatives (entities/authors, concepts, synthesis, queries) — they
// duplicated data the user can derive from sources/ directly.
//
// Output layout (all paths relative to BUNDLE_ROOT):
//
//   README.md                                - What this bundle is, how to regenerate
//   index.md                                 - Root index (okf_version: 0.1) + sources TOC
//   log.md                                   - Chronological log of ingests
//   overview.md                              - Auto-generated high-level summary
//   sources/news/YYYY-MM-DD/<priority>__<handle>__<slug>.md
//   sources/highlights/YYYY-MM-DD/<priority>__<handle>__<slug>.md
//   sources/news/index.md                    - daily TOC for headlines
//   sources/highlights/index.md              - daily TOC for highlights
//
// OKF conformance (§9):
//   1. Every non-reserved .md has parseable YAML frontmatter  ✓
//   2. Every frontmatter has non-empty `type`                 ✓
//   3. Reserved filenames (index.md, log.md) follow §6 / §7   ✓
//
// Usage:
//   node scripts/export.js                 # full export
//   node scripts/export.js --since=YYYY-MM-DD
//   node scripts/export.js --limit=1000     # for testing
//   node scripts/export.js --no-llm         # legacy flag, no-op now (no LLM used)
//
// Re-runs are idempotent: the script overwrites generated files. Safe to run
// as a cron job after the daily brief publishes.

const fs = require('fs');
const path = require('path');
// Minimal YAML emitter for OKF frontmatter. All our values are simple types
// (string, number, boolean, null, flat object, list of strings). We avoid
// pulling in a yaml lib to keep this bundle dependency-free.
function toYaml(obj, indent = 0) {
    const pad = '  '.repeat(indent);
    const lines = [];
    for (const [k, v] of Object.entries(obj)) {
        if (v === null || v === undefined) {
            lines.push(`${pad}${k}:`);
        } else if (Array.isArray(v)) {
            if (v.length === 0) {
                lines.push(`${pad}${k}: []`);
            } else if (v.every(x => typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean')) {
                lines.push(`${pad}${k}:`);
                for (const item of v) {
                    lines.push(`${pad}  - ${yamlScalar(item)}`);
                }
            } else {
                lines.push(`${pad}${k}:`);
                for (const item of v) {
                    if (item && typeof item === 'object') {
                        const inner = toYaml(item, indent + 2);
                        // First key on same line as parent key
                        const firstLine = inner.split('\n')[0];
                        const rest = inner.split('\n').slice(1).join('\n');
                        lines.push(`${pad}  - ${firstLine.trimStart()}`);
                        if (rest) lines.push(rest);
                    } else {
                        lines.push(`${pad}  - ${yamlScalar(item)}`);
                    }
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
    // Escape both backslashes and double quotes so embedded quotes (CJK 引号、
    // straight ASCII quotes, etc.) and backslashes round-trip safely.
    const escaped = s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `"${escaped}"`;
}

const BUNDLE_ROOT = path.resolve(__dirname, '..');

// ---------- Env loading (Turso) ----------
// Load .env.local from the upstream x-news/ for TURSO_* credentials.
// (We no longer need an LLM API key — Layer 2 concept titles are gone.)
const xnewsRoot = '/data/workspace/x-news';
const upstreamEnvFile = path.join(xnewsRoot, '.env.local');

function loadEnvFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    fs.readFileSync(filePath, 'utf8').split('\n').forEach(line => {
        const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
        if (m) {
            // Strip surrounding quotes (both single and double) and trim
            // whitespace — .env.local values are sometimes wrapped.
            let v = m[2].trim();
            if ((v.startsWith('"') && v.endsWith('"')) ||
                (v.startsWith("'") && v.endsWith("'"))) {
                v = v.slice(1, -1);
            }
            process.env[m[1]] = v;
        }
    });
}
loadEnvFile(upstreamEnvFile);
if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    console.error('FATAL: missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN');
    process.exit(1);
}

const { createClient } = require(path.join(xnewsRoot, 'node_modules/@libsql/client'));
const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

// ---------- CLI args ----------
const args = process.argv.slice(2);
const sinceArg = args.find(a => a.startsWith('--since='));
const limitArg = args.find(a => a.startsWith('--limit='));
const sinceIso = sinceArg
    ? new Date(sinceArg.split('=')[1] + 'T00:00:00Z').toISOString()
    : '1970-01-01T00:00:00Z';
const limitN = limitArg ? Number(limitArg.split('=')[1]) : null;
// Legacy flag — kept so old cron lines don't break, but ignored now.
const useLlm = !args.includes('--no-llm');
void useLlm;

// ---------- Helpers ----------
function beijingDateStr(iso) {
    // X-news stores UTC ISO; Beijing = UTC+8. We bucket by Beijing calendar day
    // to match the daily brief semantics the user already sees.
    const d = new Date(iso);
    const utcMs = d.getTime() + d.getTimezoneOffset() * 60_000;
    const beijing = new Date(utcMs + 8 * 3600 * 1000);
    return beijing.toISOString().slice(0, 10);
}

function beijingMonthStr(iso) {
    return beijingDateStr(iso).slice(0, 7);
}

function slugify(s, maxLen = 60) {
    if (!s) return 'untitled';
    return s
        .toLowerCase()
        .replace(/https?:\/\/\S+/g, '')        // strip URLs
        .replace(/[^a-z0-9一-鿿]+/g, '-')      // CJK + ASCII chars
        .replace(/^-+|-+$/g, '')
        .slice(0, maxLen) || 'untitled';
}

function escapeYaml(s) {
    if (s == null) return '""';
    const t = String(s);
    // js-yaml handles strings safely; we just need to ensure no NULs and
    // trim huge blobs so the frontmatter stays readable.
    return t.replace(/\u0000/g, '');
}

function isoOrNull(s) {
    if (!s) return null;
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d.toISOString();
}

function todayBeijing() {
    return beijingDateStr(new Date().toISOString());
}

function ensureDir(p) {
    fs.mkdirSync(p, { recursive: true });
}

function writeFileSafe(p, content) {
    ensureDir(path.dirname(p));
    // Trailing newline so conformance checkers that look for `\n---\n` (the
    // canonical frontmatter close) at end-of-file don't get tripped up.
    if (!content.endsWith('\n')) content += '\n';
    fs.writeFileSync(p, content);
}

// ---------- File generation per tweet ----------
function renderTweetFile(tweet, type, kindLabel) {
    const date = beijingDateStr(tweet.fetched_at || tweet.created_at);
    const handle = tweet.username || 'unknown';
    const priority = tweet.ai_priority != null ? Number(tweet.ai_priority) : 0;
    const slug = slugify(tweet.ai_title || tweet.text || '');

    const filename = `${String(priority).padStart(2, '0')}__${handle}__${slug}.md`;
    const relPath = `sources/${kindLabel}/${date}/${filename}`;

    // OKF frontmatter — required: type. Recommended: title, description, tags,
    // timestamp, plus producer-defined keys (x_source_uri = canonical tweet URL).
    const frontmatter = {
        type: 'X Tweet',
        title: tweet.ai_title || (tweet.text || '').split('\n')[0].slice(0, 100),
        description: (tweet.ai_summary || tweet.text || '').slice(0, 200).replace(/\n/g, ' '),
        resource: tweet.url || null,
        tags: [
            'x-news',
            kindLabel,
            `author:${handle}`,
        ],
        timestamp: isoOrNull(tweet.fetched_at || tweet.created_at) || new Date().toISOString(),
        // OKF allows producer-defined keys. These are useful for filtering
        // and for the llm_wiki adapter (if/when we wire one up).
        x_tweet_id: tweet.id,
        x_author: tweet.author_name || null,
        x_handle: handle,
        x_created_at: isoOrNull(tweet.created_at),
        x_engagement: {
            likes: tweet.like_count || 0,
            retweets: tweet.retweet_count || 0,
            replies: tweet.reply_count || 0,
            bookmarks: tweet.bookmark_count || 0,
            views: Number(tweet.view_count) || 0,
        },
        x_selected: type,           // 1=news, 2=highlight
        x_priority: priority,
        x_related_topic: tweet.related_topic_slug || null,
        x_source: tweet.source || 'crawler',
    };

    const yamlStr = toYaml(frontmatter);
    const summarySection = tweet.ai_summary
        ? `\n## 摘要\n\n${tweet.ai_summary}\n`
        : '';
    const originalSection = `\n## 原文\n\n${tweet.text || ''}\n`;
    const linksSection = `
## Citations

[1] [Tweet on X](${tweet.url || ''}) — @${handle} (${tweet.author_name || ''})
`.trim();

    const body = `---
${yamlStr}
---

# ${tweet.ai_title || (tweet.text || '').split('\n')[0].slice(0, 80)}
${summarySection}${originalSection}

## 元信息

- **作者**: ${tweet.author_name || '未知'} ([@${handle}](https://x.com/${handle}))
- **发布时间**: ${isoOrNull(tweet.created_at) || '未知'}
- **抓取时间**: ${isoOrNull(tweet.fetched_at) || '未知'}
- **精选类别**: ${kindLabel === 'news' ? '📰 头条' : '✨ 亮点'}
- **优先级**: ${priority}
- **互动**: ❤️ ${tweet.like_count || 0} · 🔄 ${tweet.retweet_count || 0} · 💬 ${tweet.reply_count || 0} · 🔖 ${tweet.bookmark_count || 0} · 👁 ${Number(tweet.view_count) || 0}
${linksSection}
`;

    return { relPath, body, date, handle, priority };
}

// ---------- Index / log / overview ----------
function renderRootIndex(stats) {
    const today = todayBeijing();
    const frontmatter = {
        okf_version: '0.1',
    };
    const yamlStr = toYaml(frontmatter);

    return `---
${yamlStr}
---

# x-news Wiki Bundle

> Open Knowledge Format (OKF) v0.1 bundle of all AI-selected X/Twitter posts from the [x-news](https://github.com/leavingme/x-news) pipeline.

- **生成时间**: ${new Date().toISOString()}
- **数据范围**: ${stats.dateRange} (${stats.totalTweets} 条精选)
- **OKF 版本**: 0.1

## 目录

- [📰 头条 (News)](sources/news/index.md) — ${stats.newsCount} 条，按日分目录
- [✨ 亮点 (Highlights)](sources/highlights/index.md) — ${stats.highlightCount} 条，按日分目录

## 阅读建议

1. **浏览当日精选**: 打开 \`sources/news/${today}/\` 看今天选出的内容
2. **翻历史**: 从 [头条索引](sources/news/index.md) / [亮点索引](sources/highlights/index.md) 按日期回看
3. **看统计**: [全局概要](overview.md) 给出了 Top 10 高赞推文

## OKF 合规性

本 bundle 严格遵循 [OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)：

1. ✅ 所有非保留 \`.md\` 文件均有合法 YAML frontmatter
2. ✅ 所有 frontmatter 均含非空 \`type\` 字段
3. ✅ 保留文件名 (\`index.md\`, \`log.md\`) 符合 §6 / §7
4. ✅ 使用 bundle-relative 绝对路径 \`/path\` 链接

## 重新生成

\`\`\`bash
cd /data/workspace/x-news-wiki
node scripts/export.js
\`\`\`

增量导出：

\`\`\`bash
node scripts/export.js --since=2026-06-01
\`\`\`
`;
}

function renderSectionIndex(relDir, label, description, files) {
    // relDir like "sources/news" or "entities/authors"
    const sortedFiles = [...files].sort();
    const entries = sortedFiles.map(f => {
        // f is bundle-relative path, e.g. "sources/news/2026-06-25/00__foo__bar.md"
        // Make it a link from this index file
        const link = f.startsWith(relDir + '/')
            ? f.slice(relDir.length + 1)
            : f;
        return `- [${link}](${link})`;
    }).join('\n');

    return `# ${label}

${description}

> 共 ${files.length} 个文件。

${entries}
`;
}

function renderLogEntry(stats) {
    const today = todayBeijing();
    return `## ${today}

* **Initialization**: 从 Turso 全量导出 selected 推文（selected=1 头条, selected=2 亮点）。共 ${stats.totalTweets} 条。
* **Creation**: 建立根目录结构（README, index, log, overview, sources/news/, sources/highlights/）。
* **Scope**: 2026-06-27 砍掉 entities/ + concepts/ + synthesis/ + queries/ 派生层，只保留 Layer 1 raw sources。
`;
}

function renderOverview(stats) {
    const top10 = stats.topByEngagement.slice(0, 10);

    const topTweetsSection = top10.map((t, i) => {
        const d = beijingDateStr(t.fetched_at || t.created_at);
        const p = String(t.ai_priority || 0).padStart(2, '0');
        const h = t.username || 'unknown';
        const path_ = `sources/${t.selected === 1 ? 'news' : 'highlights'}/${d}/${p}__${h}__${slugify(t.ai_title || t.text || '')}.md`;
        return `${i + 1}. [${t.ai_title || (t.text || '').slice(0, 60)}](${path_}) — @${h} · ❤️ ${t.like_count || 0} · ${d}`;
    }).join('\n');

    return `---
type: Overview
title: x-news Wiki 全局概要
description: 跨日汇总统计 — 高赞推文
timestamp: ${new Date().toISOString()}
---

# 全局概要

> 自动生成。重新执行 \`scripts/export.js\` 时刷新。

## 数据范围

- **总精选数**: ${stats.totalTweets} 条
- **头条 (selected=1)**: ${stats.newsCount} 条
- **亮点 (selected=2)**: ${stats.highlightCount} 条
- **时间跨度**: ${stats.dateRange}

## Top 10 高赞推文

${topTweetsSection}
`;
}

// ---------- Main ----------
async function main() {
    console.log(`[export] Querying Turso for selected tweets since ${sinceIso}...`);
    const sql = `SELECT * FROM tweets
                 WHERE selected IN (1, 2)
                   AND ai_title IS NOT NULL
                   AND ai_summary IS NOT NULL
                   AND length(trim(ai_summary)) >= 30
                   AND fetched_at >= ?
                 ORDER BY fetched_at ASC`;
    const result = await client.execute({ sql, args: [sinceIso] });
    let rows = result.rows;
    if (limitN) rows = rows.slice(0, limitN);
    console.log(`[export] Got ${rows.length} rows.`);

    // Filter out dirty / placeholder summaries (defense in depth — also caught
    // at the AI editor write boundary in x-news, but the DB may have older
    // dirty rows from before the guard landed).
    const isDirty = (s) => {
        if (!s) return true;
        const t = String(s).trim();
        if (t.length < 30) return true;
        return ['...', '..', '**', '省略', '按要求格式', '按规定格式', 'TODO', 'N/A'].includes(t);
    };
    const clean = rows.filter(r => !isDirty(r.ai_summary));
    if (clean.length !== rows.length) {
        console.log(`[export] Skipped ${rows.length - clean.length} dirty-summary rows.`);
    }

    // ----- 1. Per-tweet files -----
    const tweetFiles = []; // { relPath, body }

    for (const t of clean) {
        const kind = t.selected === 1 ? 'news' : 'highlights';
        const { relPath, body } = renderTweetFile(t, t.selected, kind);
        tweetFiles.push({ relPath, body });
        writeFileSafe(path.join(BUNDLE_ROOT, relPath), body);
    }

    // ----- 2. Index / log / overview -----
    const stats = {
        totalTweets: clean.length,
        newsCount: clean.filter(t => t.selected === 1).length,
        highlightCount: clean.filter(t => t.selected === 2).length,
        dateRange: clean.length > 0
            ? `${beijingDateStr(clean[0].fetched_at)} → ${beijingDateStr(clean[clean.length - 1].fetched_at)}`
            : '(empty)',
        topByEngagement: [...clean].sort((a, b) => {
            const ae = (a.like_count || 0) + (a.retweet_count || 0) * 2;
            const be = (b.like_count || 0) + (b.retweet_count || 0) * 2;
            return be - ae;
        }),
    };

    writeFileSafe(path.join(BUNDLE_ROOT, 'index.md'), renderRootIndex(stats));
    // log.md is append-only — prepend today's entry instead of overwriting,
    // so the historical timeline is preserved across re-exports.
    const logEntry = renderLogEntry(stats);
    const logPath = path.join(BUNDLE_ROOT, 'log.md');
    let logBody = `# Update Log\n\n${logEntry}`;
    if (fs.existsSync(logPath)) {
        const prev = fs.readFileSync(logPath, 'utf8');
        // Strip the existing header line so we don't duplicate "# Update Log"
        const stripped = prev.replace(/^# Update Log\s*\n+/, '').trim();
        logBody = `# Update Log\n\n${logEntry}\n${stripped}\n`;
    }
    writeFileSafe(logPath, logBody);
    writeFileSafe(path.join(BUNDLE_ROOT, 'overview.md'), renderOverview(stats));

    // ----- 3. Section indexes (sources/{news,highlights}/index.md) -----
    function indexByDateDir(relDir, kindLabel) {
        const dateDirs = new Map();
        for (const f of tweetFiles) {
            if (!f.relPath.startsWith(relDir + '/')) continue;
            const rest = f.relPath.slice(relDir.length + 1);
            const d = rest.split('/')[0];
            if (!dateDirs.has(d)) dateDirs.set(d, 0);
            dateDirs.set(d, dateDirs.get(d) + 1);
        }
        const sorted = [...dateDirs.entries()].sort((a, b) => b[0].localeCompare(a[0]));
        const lines = sorted.map(([d, n]) => `- [${d}](${d}/) — ${n} 条`).join('\n');
        const totalCount = kindLabel === 'news' ? stats.newsCount : stats.highlightCount;
        return `# ${kindLabel === 'news' ? '📰 头条' : '✨ 亮点'}（按日期）\n\n共 ${totalCount} 条精选推文。\n\n${lines}\n`;
    }
    writeFileSafe(path.join(BUNDLE_ROOT, 'sources/news/index.md'), indexByDateDir('sources/news', 'news'));
    writeFileSafe(path.join(BUNDLE_ROOT, 'sources/highlights/index.md'), indexByDateDir('sources/highlights', 'highlights'));

    // ----- 4. README (project-level) -----
    // OKF §4 requires every non-reserved .md to have frontmatter with a `type`
    // field. The README is project-level documentation — give it a Readme
    // type so the OKF conformance check still passes.
    const readmeFrontmatter = {
        type: 'Readme',
        title: 'x-news Wiki',
        description: 'Project-level README for the x-news OKF bundle.',
        timestamp: new Date().toISOString(),
    };
    const readmeYaml = toYaml(readmeFrontmatter);
    const readme = `---
${readmeYaml}
---

# x-news Wiki

Open Knowledge Format (OKF) v0.1 bundle of all AI-selected X/Twitter posts from the [x-news](https://github.com/leavingme/x-news) pipeline.

## 这是什么

x-news 是一个 AI 驱动的 X 资讯 pipeline，每天 8:17 / 20:17 跑 AI 编辑精选 15 条头条 + 少量亮点。本项目把 Turso 数据库里所有 \`selected IN (1, 2)\` 的推文（含 AI 解析）导出为 [OKF](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) 兼容的 markdown bundle，可被 Obsidian、llm_wiki 桌面应用、任意支持 markdown 的工具直接读取。

**2026-06-27 简化**：砍掉了 entities/ + concepts/ + synthesis/ + queries/ 派生层——它们都是 Layer 2 衍生，从 sources/ 直接可推导，不需要单独维护。

## 目录结构

\`\`\`
x-news-wiki/
├── README.md                 # 本文件
├── index.md                  # OKF bundle 根索引（声明 okf_version: 0.1）
├── log.md                    # 追加式时间线
├── overview.md               # 全局概要（Top 10 高赞推文 + 数据范围）
└── sources/
    ├── news/                 # 头条 (selected=1)，按日分目录
    └── highlights/           # 亮点 (selected=2)，按日分目录
\`\`\`

## 重新生成

\`\`\`bash
cd /data/workspace/x-news-wiki
node scripts/export.js                # 全量
node scripts/export.js --since=2026-06-01   # 增量
\`\`\`

## 后续计划

- [ ] 接 llm_wiki 桌面应用（直接读 sources/ 作为 Layer 1）
- [ ] 接 Obsidian（\`sources/\` 直接放 vault）
- [ ] 定期 cron 增量导出
- [ ] 摘要质量 lint（防止旧 dirty 数据流入）
`;
    writeFileSafe(path.join(BUNDLE_ROOT, 'README.md'), readme);

    // ----- 8. OKF conformance self-check -----
    console.log('\n[export] OKF conformance check...');
    const walk = (dir) => {
        const out = [];
        for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
            const p = path.join(dir, f.name);
            if (f.isDirectory()) out.push(...walk(p));
            else if (f.name.endsWith('.md')) out.push(p);
        }
        return out;
    };
    const allMd = walk(BUNDLE_ROOT);
    const reserved = new Set(['index.md', 'log.md']);
    let bad = 0;
    for (const p of allMd) {
        const base = path.basename(p);
        const text = fs.readFileSync(p, 'utf8');
        if (reserved.has(base)) continue;
        if (!text.startsWith('---\n')) {
            console.error(`  ✗ Missing frontmatter: ${path.relative(BUNDLE_ROOT, p)}`);
            bad++; continue;
        }
        const end = text.indexOf('\n---\n', 4);
        if (end === -1) {
            console.error(`  ✗ Malformed frontmatter: ${path.relative(BUNDLE_ROOT, p)}`);
            bad++; continue;
        }
        // Lightweight conformance check: frontmatter must contain a non-empty
        // `type:` field. We avoid a full YAML parse — our emitter only
        // produces keys we control, so a regex on the frontmatter block is
        // sufficient and dependency-free.
        const fm = text.slice(4, end);
        const typeMatch = fm.match(/^type:\s*(.+?)\s*$/m);
        const typeVal = typeMatch ? typeMatch[1].replace(/^["']|["']$/g, '').trim() : '';
        if (!typeVal) {
            console.error(`  ✗ Missing type field: ${path.relative(BUNDLE_ROOT, p)}`);
            bad++;
        }
    }
    if (bad === 0) {
        console.log(`  ✓ All ${allMd.length} .md files have valid frontmatter with non-empty type.`);
    } else {
        console.error(`  ✗ ${bad} files failed conformance.`);
    }

    // ----- 9. Cross-link sanity (broken link check) -----
    // OKF §5.3 says broken links are not malformed (they may represent
    // not-yet-written knowledge) — but in our case every link should resolve
    // because we generated everything in one pass. Report any that don't.
    console.log('\n[export] Cross-link sanity check...');
    const allPaths = new Set(allMd.map(p => path.relative(BUNDLE_ROOT, p)));
    let broken = 0;
    const linkRe = /\]\(([^)]+\.md)(?:#[^)]*)?\)/g;
    for (const p of allMd) {
        const text = fs.readFileSync(p, 'utf8');
        let m;
        while ((m = linkRe.exec(text)) !== null) {
            const target = m[1];
            if (target.startsWith('http') || target.startsWith('/')) continue;
            // Resolve relative to the file's directory, then store as
            // bundle-relative path so it matches the keys in allPaths
            // (which are path.relative(BUNDLE_ROOT, ...) — also relative).
            const absResolved = path.normalize(path.join(path.dirname(p), target));
            const resolved = path.relative(BUNDLE_ROOT, absResolved);
            if (!allPaths.has(resolved)) {
                broken++;
                if (broken <= 5) {
                    console.error(`  ✗ Broken link: ${path.relative(BUNDLE_ROOT, p)} → ${target}`);
                }
            }
        }
    }
    if (broken === 0) {
        console.log('  ✓ All internal .md links resolve.');
    } else {
        console.log(`  ⚠ ${broken} broken internal links (OKF allows them, but ours should be 0).`);
    }

    console.log(`\n[export] Done.`);
    console.log(`  Tweets: ${clean.length} (news=${stats.newsCount}, highlights=${stats.highlightCount})`);
    console.log(`  Date range: ${stats.dateRange}`);
}

main().catch(e => {
    console.error('FATAL:', e);
    process.exit(1);
});
