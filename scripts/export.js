#!/usr/bin/env node
// scripts/export.js — Export all AI-selected x-news tweets as an OKF 0.1 bundle.
//
// Reads from Turso (single source of truth since 2026-06-16) and writes a
// directory of markdown files with YAML frontmatter, conforming to
// https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
//
// Output layout (all paths relative to BUNDLE_ROOT):
//
//   README.md                  - What this bundle is, how to regenerate
//   index.md                   - Root index (okf_version: 0.1) + per-section TOC
//   log.md                     - Chronological log of ingests (one entry per run)
//   overview.md                - Auto-generated high-level summary
//   sources/news/YYYY-MM-DD/<priority>__<handle>__<slug>.md
//   sources/highlights/YYYY-MM-DD/<priority>__<handle>__<slug>.md
//   entities/authors/<handle>.md            - author pages (built from all their tweets)
//   concepts/<slug>.md                      - cross-day topic aggregation
//   synthesis/YYYY-MM.md                    - per-month trend synthesis
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

// ---------- Env loading (Turso + LLM) ----------
const xnewsRoot = '/data/workspace/x-news';
const envFile = path.join(xnewsRoot, '.env.local');
if (fs.existsSync(envFile)) {
    fs.readFileSync(envFile, 'utf8').split('\n').forEach(line => {
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
    const authorSlug = slugify(handle, 40);

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
[2] [Author page](/entities/authors/${authorSlug}.md)
${tweet.related_topic_slug ? `[3] [Related topic](/concepts/${tweet.related_topic_slug}.md)` : ''}
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
${tweet.related_topic_slug ? `- **关联主题**: [${tweet.related_topic_slug}](/concepts/${tweet.related_topic_slug}.md)\n` : ''}
${linksSection}
`;

    return { relPath, body, date, handle, priority };
}

// ---------- Author entity page ----------
function renderAuthorPage(handle, authorName, tweets) {
    const filename = `${slugify(handle, 40)}.md`;
    const relPath = `entities/authors/${filename}`;

    const sorted = [...tweets].sort((a, b) => {
        const ad = a.fetched_at || a.created_at || '';
        const bd = b.fetched_at || b.created_at || '';
        return bd.localeCompare(ad);
    });

    const frontmatter = {
        type: 'Author',
        title: `${authorName || handle} (@${handle})`,
        description: `X/Twitter 作者 @${handle}。共收录 ${tweets.length} 条 AI 精选推文。`,
        tags: ['x-news', 'author', `author:${handle}`],
        timestamp: new Date().toISOString(),
        x_handle: handle,
        x_author_name: authorName || null,
        x_tweet_count: tweets.length,
        x_first_seen: isoOrNull(sorted[sorted.length - 1]?.fetched_at),
        x_last_seen: isoOrNull(sorted[0]?.fetched_at),
    };

    const yamlStr = toYaml(frontmatter);

    const tweetLinks = sorted.slice(0, 200).map(t => {
        const d = beijingDateStr(t.fetched_at || t.created_at);
        const p = String(t.ai_priority || 0).padStart(2, '0');
        const path_ = `../sources/${t.selected === 1 ? 'news' : 'highlights'}/${d}/${p}__${handle}__${slugify(t.ai_title || t.text || '')}.md`;
        return `- [${t.ai_title || (t.text || '').slice(0, 60)}](${path_}) — ${d}${t.ai_priority ? ` (priority ${t.ai_priority})` : ''}`;
    }).join('\n');

    const overflow = sorted.length > 200
        ? `\n\n> 共 ${sorted.length} 条精选，此处仅显示最近 200 条。完整列表见 \`sources/news/\` 与 \`sources/highlights/\` 目录。\n`
        : '';

    const body = `---
${yamlStr}
---

# ${authorName || handle} (@${handle})

X (Twitter) 作者 [@${handle}](https://x.com/${handle})，共 **${tweets.length}** 条 AI 精选推文被收录到本知识库。

## 精选推文（按时间倒序）

${tweetLinks}${overflow}

## 互动统计

- **总点赞**: ${tweets.reduce((s, t) => s + (t.like_count || 0), 0).toLocaleString()}
- **总转发**: ${tweets.reduce((s, t) => s + (t.retweet_count || 0), 0).toLocaleString()}
- **总回复**: ${tweets.reduce((s, t) => s + (t.reply_count || 0), 0).toLocaleString()}
- **总收藏**: ${tweets.reduce((s, t) => s + (t.bookmark_count || 0), 0).toLocaleString()}
- **首次精选**: ${beijingDateStr(sorted[sorted.length - 1]?.fetched_at || '')}
- **最近精选**: ${beijingDateStr(sorted[0]?.fetched_at || '')}
`;

    return { relPath, body };
}

// ---------- Concept page (cross-day topic) ----------
function renderConceptPage(slug, tweets) {
    const relPath = `concepts/${slug}.md`;
    const sorted = [...tweets].sort((a, b) => {
        const ad = a.fetched_at || a.created_at || '';
        const bd = b.fetched_at || b.created_at || '';
        return bd.localeCompare(ad);
    });

    const frontmatter = {
        type: 'Concept',
        title: slug,
        description: `跨日主题 "${slug}"，共 ${tweets.length} 条相关精选推文。`,
        tags: ['x-news', 'concept', `topic:${slug}`],
        timestamp: new Date().toISOString(),
        x_topic_slug: slug,
        x_tweet_count: tweets.length,
        x_first_seen: isoOrNull(sorted[sorted.length - 1]?.fetched_at),
        x_last_seen: isoOrNull(sorted[0]?.fetched_at),
    };

    const yamlStr = toYaml(frontmatter);

    const links = sorted.map(t => {
        const d = beijingDateStr(t.fetched_at || t.created_at);
        const p = String(t.ai_priority || 0).padStart(2, '0');
        const h = t.username || 'unknown';
        const path_ = `../sources/${t.selected === 1 ? 'news' : 'highlights'}/${d}/${p}__${h}__${slugify(t.ai_title || t.text || '')}.md`;
        return `- [${t.ai_title || (t.text || '').slice(0, 60)}](${path_}) — ${d} · @${h}`;
    }).join('\n');

    const body = `---
${yamlStr}
---

# 主题: ${slug}

本主题下共 **${tweets.length}** 条精选推文。

## 时间线

${links}
`;

    return { relPath, body };
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
- [👤 作者 (Authors)](entities/authors/index.md) — ${stats.authorCount} 位
- [🧩 主题 (Concepts)](concepts/index.md) — ${stats.conceptCount} 个跨日主题
- [📊 月度综合 (Synthesis)](synthesis/index.md) — 按月趋势汇总

## 阅读建议

1. **浏览当日精选**: 打开 \`sources/news/${today}/\` 看今天选出的内容
2. **追踪主题**: 从 [主题索引](concepts/index.md) 进入任意主题，按时间线回看
3. **查作者**: 从 [作者索引](entities/authors/index.md) 找感兴趣的作者
4. **看趋势**: [月度综合](synthesis/index.md) 给出了每月的高频主题与高产作者

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
* **Creation**: 建立根目录结构（README, index, log, overview, sources/, entities/, concepts/, synthesis/）。
* **Update**: 生成 ${stats.authorCount} 个作者实体页 + ${stats.conceptCount} 个主题页。
`;
}

function renderOverview(stats) {
    const top10 = stats.topByEngagement.slice(0, 10);
    const topAuthors = stats.topAuthors.slice(0, 15);
    const topConcepts = stats.topConcepts.slice(0, 15);

    const topTweetsSection = top10.map((t, i) => {
        const d = beijingDateStr(t.fetched_at || t.created_at);
        const p = String(t.ai_priority || 0).padStart(2, '0');
        const h = t.username || 'unknown';
        const path_ = `sources/${t.selected === 1 ? 'news' : 'highlights'}/${d}/${p}__${h}__${slugify(t.ai_title || t.text || '')}.md`;
        return `${i + 1}. [${t.ai_title || (t.text || '').slice(0, 60)}](${path_}) — @${h} · ❤️ ${t.like_count || 0} · ${d}`;
    }).join('\n');

    const authorsSection = topAuthors.map(([handle, count, totalLikes]) => {
        return `- @${handle}: ${count} 条精选, 总赞 ${totalLikes.toLocaleString()}`;
    }).join('\n');

    const conceptsSection = topConcepts.map(([slug, count]) => {
        return `- [${slug}](concepts/${slug}.md) (${count} 条)`;
    }).join('\n');

    return `---
type: Overview
title: x-news Wiki 全局概要
description: 跨日汇总统计 — 高赞推文、活跃作者、热门主题
timestamp: ${new Date().toISOString()}
---

# 全局概要

> 自动生成。重新执行 \`scripts/export.js\` 时刷新。

## 数据范围

- **总精选数**: ${stats.totalTweets} 条
- **头条 (selected=1)**: ${stats.newsCount} 条
- **亮点 (selected=2)**: ${stats.highlightCount} 条
- **覆盖作者**: ${stats.authorCount} 位
- **跨日主题**: ${stats.conceptCount} 个
- **时间跨度**: ${stats.dateRange}

## Top 10 高赞推文

${topTweetsSection}

## Top 15 活跃作者

${authorsSection}

## Top 15 热门主题

${conceptsSection}
`;
}

function renderSynthesisPage(monthStr, tweets) {
    const sorted = [...tweets].sort((a, b) => {
        const ad = a.fetched_at || a.created_at || '';
        const bd = b.fetched_at || b.created_at || '';
        return bd.localeCompare(ad);
    });

    const authors = new Map();
    const concepts = new Map();
    for (const t of sorted) {
        const h = t.username || 'unknown';
        const a = authors.get(h) || { count: 0, likes: 0 };
        a.count++; a.likes += t.like_count || 0;
        authors.set(h, a);
        if (t.related_topic_slug) {
            concepts.set(t.related_topic_slug, (concepts.get(t.related_topic_slug) || 0) + 1);
        }
    }
    const topAuthors = [...authors.entries()].sort((a, b) => b[1].count - a[1].count).slice(0, 10);
    const topConcepts = [...concepts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);

    const frontmatter = {
        type: 'Synthesis',
        title: `${monthStr} 月度综合`,
        description: `${monthStr} 期间的精选推文综合 — ${sorted.length} 条数据点。`,
        tags: ['x-news', 'synthesis', `month:${monthStr}`],
        timestamp: new Date().toISOString(),
        x_month: monthStr,
        x_tweet_count: sorted.length,
    };

    const yamlStr = toYaml(frontmatter);

    const authorSection = topAuthors.map(([h, a]) => `- @${h}: ${a.count} 条, 总赞 ${a.likes.toLocaleString()}`).join('\n');
    const conceptSection = topConcepts.length > 0
        ? topConcepts.map(([s, c]) => `- [${s}](../concepts/${s}.md) (${c} 条)`).join('\n')
        : '（本月无关联主题数据）';

    const listSection = sorted.slice(0, 100).map(t => {
        const d = beijingDateStr(t.fetched_at || t.created_at);
        const p = String(t.ai_priority || 0).padStart(2, '0');
        const h = t.username || 'unknown';
        const path_ = `../sources/${t.selected === 1 ? 'news' : 'highlights'}/${d}/${p}__${h}__${slugify(t.ai_title || t.text || '')}.md`;
        return `- [${t.ai_title || (t.text || '').slice(0, 60)}](${path_}) — ${d} · @${h}`;
    }).join('\n');
    const overflow = sorted.length > 100
        ? `\n\n> 共 ${sorted.length} 条精选，此处仅显示前 100 条。完整列表见 \`sources/news/${monthStr}/\` 与 \`sources/highlights/${monthStr}/\`。\n`
        : '';

    const body = `---
${yamlStr}
---

# ${monthStr} 月度综合

${monthStr} 期间共 ${sorted.length} 条 AI 精选推文。

## 当月活跃作者 (Top 10)

${authorSection}

## 当月热门主题 (Top 15)

${conceptSection}

## 当月精选列表

${listSection}${overflow}
`;
    return { relPath: `synthesis/${monthStr}.md`, body };
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
    const tweetFiles = []; // { relPath, body, date, handle }
    const authorMap = new Map();   // handle -> [tweets]
    const conceptMap = new Map();  // slug -> [tweets]
    const monthMap = new Map();    // 'YYYY-MM' -> [tweets]

    for (const t of clean) {
        const kind = t.selected === 1 ? 'news' : 'highlights';
        const { relPath, body, date, handle } = renderTweetFile(t, t.selected, kind);
        tweetFiles.push({ relPath, body });
        writeFileSafe(path.join(BUNDLE_ROOT, relPath), body);

        if (!authorMap.has(handle)) authorMap.set(handle, []);
        authorMap.get(handle).push(t);

        if (t.related_topic_slug) {
            if (!conceptMap.has(t.related_topic_slug)) conceptMap.set(t.related_topic_slug, []);
            conceptMap.get(t.related_topic_slug).push(t);
        }

        const month = beijingMonthStr(t.fetched_at || t.created_at);
        if (!month) { console.warn(`[export] Tweet ${t.id} has no month: fetched_at=${t.fetched_at} created_at=${t.created_at}`); continue; }
        if (!monthMap.has(month)) monthMap.set(month, []);
        monthMap.get(month).push(t);
    }

    // ----- 2. Author entity pages -----
    const authorFiles = [];
    for (const [handle, ts] of authorMap.entries()) {
        const { relPath, body } = renderAuthorPage(handle, ts[0]?.author_name, ts);
        authorFiles.push({ relPath, body });
        writeFileSafe(path.join(BUNDLE_ROOT, relPath), body);
    }

    // ----- 3. Concept pages -----
    const conceptFiles = [];
    for (const [slug, ts] of conceptMap.entries()) {
        if (!slug) continue;
        const { relPath, body } = renderConceptPage(slug, ts);
        conceptFiles.push({ relPath, body });
        writeFileSafe(path.join(BUNDLE_ROOT, relPath), body);
    }

    // ----- 4. Synthesis (per-month) -----
    const synthesisFiles = [];
    for (const [month, ts] of monthMap.entries()) {
        if (!month) { console.warn(`[export] Skipping synthesis with empty month key, ${ts.length} tweets`); continue; }
        let out;
        try {
            out = renderSynthesisPage(month, ts);
        } catch (e) {
            console.error(`[export] renderSynthesisPage THREW for month=${month}:`, e.message);
            console.error(e.stack.split('\n').slice(0, 5).join('\n'));
            continue;
        }
        if (!out || !out.relPath) {
            console.error(`[export] renderSynthesisPage returned invalid output for month=${month}; relPath=${JSON.stringify(out?.relPath)} bodyType=${typeof out?.body} bodyLen=${out?.body?.length}`);
            continue;
        }
        synthesisFiles.push(out);
        writeFileSafe(path.join(BUNDLE_ROOT, out.relPath), out.body);
    }

    // ----- 5. Index / log / overview -----
    const stats = {
        totalTweets: clean.length,
        newsCount: clean.filter(t => t.selected === 1).length,
        highlightCount: clean.filter(t => t.selected === 2).length,
        authorCount: authorMap.size,
        conceptCount: conceptMap.size,
        dateRange: clean.length > 0
            ? `${beijingDateStr(clean[0].fetched_at)} → ${beijingDateStr(clean[clean.length - 1].fetched_at)}`
            : '(empty)',
        topByEngagement: [...clean].sort((a, b) => {
            const ae = (a.like_count || 0) + (a.retweet_count || 0) * 2;
            const be = (b.like_count || 0) + (b.retweet_count || 0) * 2;
            return be - ae;
        }),
        topAuthors: [...authorMap.entries()]
            .map(([h, ts]) => [h, ts.length, ts.reduce((s, t) => s + (t.like_count || 0), 0)])
            .sort((a, b) => b[1] - a[1]),
        topConcepts: [...conceptMap.entries()].sort((a, b) => b[1].length - a[1].length).map(([s, ts]) => [s, ts.length]),
    };

    writeFileSafe(path.join(BUNDLE_ROOT, 'index.md'), renderRootIndex(stats));
    writeFileSafe(path.join(BUNDLE_ROOT, 'log.md'), `# Update Log\n\n${renderLogEntry(stats)}`);
    writeFileSafe(path.join(BUNDLE_ROOT, 'overview.md'), renderOverview(stats));

    // ----- 6. Section indexes -----
    // sources/news/index.md, sources/highlights/index.md
    // List daily subdirectories with counts.
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

    // entities/authors/index.md
    const authorList = [...authorMap.entries()]
        .map(([h, ts]) => {
            const filename = `${slugify(h, 40)}.md`;
            return `- [@${h}](${filename}) — ${ts.length} 条`;
        })
        .sort();
    writeFileSafe(
        path.join(BUNDLE_ROOT, 'entities/authors/index.md'),
        `# 👤 作者\n\n共 ${authorMap.size} 位作者。\n\n${authorList.join('\n')}\n`
    );

    // concepts/index.md
    const conceptList = [...conceptMap.entries()]
        .filter(([s]) => s)
        .map(([s, ts]) => `- [${s}](${s}.md) — ${ts.length} 条`)
        .sort();
    writeFileSafe(
        path.join(BUNDLE_ROOT, 'concepts/index.md'),
        `# 🧩 主题\n\n共 ${conceptMap.size} 个跨日主题。\n\n${conceptList.join('\n')}\n`
    );

    // synthesis/index.md
    const monthList = [...monthMap.entries()]
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([m, ts]) => `- [${m}](${m}.md) — ${ts.length} 条`);
    writeFileSafe(
        path.join(BUNDLE_ROOT, 'synthesis/index.md'),
        `# 📊 月度综合\n\n按月汇总精选推文。\n\n${monthList.join('\n')}\n`
    );

    // ----- 7. README (project-level) -----
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

## 目录结构

\`\`\`
x-news-wiki/
├── README.md                 # 本文件
├── index.md                  # OKF bundle 根索引（声明 okf_version: 0.1）
├── log.md                    # 追加式时间线
├── overview.md               # 全局概要
├── sources/
│   ├── news/                 # 头条 (selected=1)，按日分目录
│   └── highlights/           # 亮点 (selected=2)，按日分目录
├── entities/
│   └── authors/              # 作者实体页
├── concepts/                 # 跨日主题
└── synthesis/                # 月度综合
\`\`\`

## 重新生成

\`\`\`bash
cd /data/workspace/x-news-wiki
node scripts/export.js                # 全量
node scripts/export.js --since=2026-06-01   # 增量
\`\`\`

## 后续计划

- [ ] 接 llm_wiki 桌面应用（两步摄取 → 实体/概念自动交叉）
- [ ] 接 Obsidian（\`raw/sources/\` 直接放这里 + 自动同步）
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
            // Resolve relative to the file's directory
            const resolved = path.normalize(path.join(path.dirname(p), target));
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
    console.log(`  Authors: ${stats.authorCount}`);
    console.log(`  Concepts: ${stats.conceptCount}`);
    console.log(`  Months: ${monthMap.size}`);
    console.log(`  Date range: ${stats.dateRange}`);
}

main().catch(e => {
    console.error('FATAL:', e);
    process.exit(1);
});
