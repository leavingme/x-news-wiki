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
//   node scripts/export.js                 # full export (uses LLM for CN titles)
//   node scripts/export.js --since=YYYY-MM-DD
//   node scripts/export.js --limit=1000     # for testing
//   node scripts/export.js --no-llm         # skip LLM; use dict + humanized fallback only
//
// Re-runs are idempotent: the script overwrites generated files. Safe to run
// as a cron job after the daily brief publishes.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { cnTitleFor, TITLES: DICT_TITLES } = require('./concept-cn-titles');

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

// ---------- LLM-backed Chinese title resolver ----------
// Filenames stay English (slug) for stable IDs, but the `title:` frontmatter
// field is what Obsidian shows — so we resolve it to Chinese via either:
//   1. Hand-curated dictionary (scripts/concept-cn-titles.js) — instant
//   2. LLM (M3 via MiniMax API) — for new slugs, cached in .cn-title-cache.json
//   3. Humanized slug fallback — if both above fail
//
// Cache key is (slug, hash-of-representative-tweet-text). If the underlying
// tweet content for a concept changes, the cache invalidates and the LLM is
// re-asked. This is cheap and catches silent drift.

const CN_CACHE_FILE = path.join(__dirname, '.cn-title-cache.json');
// NOTE: env vars (CN_TITLE_MODEL / CN_TITLE_API_BASE / MINIMAX_CN_API_KEY) are
// resolved lazily inside getCnConfig() because the .env.local loader runs AFTER
// these module-level consts are evaluated. If we read them eagerly here, we
// would get undefined and the LLM path would silently fall back to humanized
// slugs. Lazy lookup keeps the file load order from mattering.
function getCnConfig() {
    return {
        model: process.env.CN_TITLE_MODEL || 'MiniMax-M3',
        apiBase: process.env.CN_TITLE_API_BASE || 'https://api.minimaxi.com/v1',
        apiKey: process.env.MINIMAX_CN_API_KEY || process.env.LLM_API_KEY || '',
    };
}

function loadCnCache() {
    try {
        if (fs.existsSync(CN_CACHE_FILE)) {
            return JSON.parse(fs.readFileSync(CN_CACHE_FILE, 'utf8'));
        }
    } catch (e) {
        console.warn(`[cn-title] cache file corrupted, ignoring: ${e.message}`);
    }
    return {};
}

function saveCnCache(cache) {
    try {
        fs.writeFileSync(CN_CACHE_FILE, JSON.stringify(cache, null, 2));
    } catch (e) {
        console.warn(`[cn-title] failed to save cache: ${e.message}`);
    }
}

function shortHash(s) {
    return crypto.createHash('sha256').update(s).digest('hex').slice(0, 12);
}

function representativeText(tweets) {
    // Pick the most recent high-priority tweet's ai_title + text snippet
    // to give the LLM semantic context. Falls back to first available.
    if (!tweets || !tweets.length) return '';
    const sorted = [...tweets].sort((a, b) => {
        const ap = Number(a.ai_priority || 99);
        const bp = Number(b.ai_priority || 99);
        if (ap !== bp) return ap - bp;
        return String(b.fetched_at || '').localeCompare(String(a.fetched_at || ''));
    });
    const t = sorted[0];
    const title = t.ai_title || '';
    const summary = t.ai_summary || '';
    const text = t.text || '';
    return [title, summary, text].filter(Boolean).join('\n').slice(0, 800);
}

async function callLlmForTitles(slugTextPairs) {
    const cfg = getCnConfig();
    if (!cfg.apiKey) throw new Error('MINIMAX_CN_API_KEY not set');
    const systemPrompt = [
        '你是一个中英对照词典专家。给定一组英文概念 slug 与代表性推文片段,',
        '为每个 slug 输出一个 2-12 字的中文标题,要求:',
        '1. **翻译 slug 本身,不要把推文里的具体事件/人名/产品名写进标题**',
        '   (slug 是抽象概念,推文只是提供语义上下文,不是标题素材)',
        '2. **slug 中的每个英文单词都要在中文标题里有对应词**,不要省略',
        '   (如 "ai-reasoning-tier" 必须包含 "AI"、"推理"、"分层" 三个概念)',
        '3. 准确反映 slug 的核心概念,不直译、不绕弯',
        '4. 简洁可读,优先用行业惯用译法',
        '   - **"agent" 保持英文不译**(AI 圈通用术语)',
        '   - "llm" / "ai" / "api" / "gpu" 等行业缩写也保持英文',
        '   - 其它英文单词翻译成中文行业惯用译法',
        '5. 允许加少量连词("与"、"与"等),但 12 字以内',
        '6. **严格只返回 JSON 数组**,无任何解释/思考/前缀',
        '',
        '返回格式: [{"slug": "...", "title_zh": "..."}, ...]',
        '数量必须与输入一一对应,顺序保持一致。',
    ].join('\n');

    const userPayload = slugTextPairs.map((p, i) =>
        `[${i + 1}] slug: ${p.slug}\ncontext: ${p.text}`
    ).join('\n\n');

    const resp = await fetch(`${cfg.apiBase}/chat/completions`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + cfg.apiKey,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: cfg.model,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPayload },
            ],
            temperature: 0.2,
            // M3 emits <think>...</think> blocks before its answer; budget
            // enough for both the think block (often 200-500 tokens) and the
            // JSON payload. Per-slug budget = 60 tokens title + 100 tokens
            // thinking overhead + 200 tokens base for system preamble.
            max_tokens: 200 + (60 + 100) * slugTextPairs.length,
            // Try to disable M3's extended thinking — for short structured
            // tasks like "return this JSON" thinking just burns tokens.
            // M3 supports `thinking.type: 'disabled'` via OpenRouter-style
            // extra_body; harmless if the model ignores it.
            ...(cfg.model.includes('M3') ? { thinking: { type: 'disabled' } } : {}),
        }),
    });

    if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(`LLM HTTP ${resp.status}: ${errText.slice(0, 200)}`);
    }
    const data = await resp.json();
    const content = data.choices?.[0]?.message?.content || '';

    // M3 emits <think>...</think> blocks before its answer. Two cases:
    //   (a) Complete think block: full text includes both <think> and JSON
    //   (b) Truncated (max_tokens cut mid-think): no closing </think>, JSON
    //       is missing entirely
    // Strategy: peel away the think prefix by looking for the JSON array's
    // opening bracket. Everything before the first '[' at line start is
    // considered thinking preamble and discarded.
    let cleaned = content;
    const firstBracket = cleaned.indexOf('[');
    if (firstBracket > 0) {
        cleaned = cleaned.slice(firstBracket);
    }
    // Also strip any markdown fences and trim
    cleaned = cleaned
        .replace(/```json\s*/g, '')
        .replace(/```\s*/g, '')
        .trim();

    // Try to find a JSON array substring
    const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
    if (!arrayMatch) {
        throw new Error(`LLM did not return JSON array. First 200 chars: ${cleaned.slice(0, 200)}`);
    }

    let parsed;
    try {
        parsed = JSON.parse(arrayMatch[0]);
    } catch (e) {
        throw new Error(`LLM returned invalid JSON: ${e.message}. First 200: ${arrayMatch[0].slice(0, 200)}`);
    }
    if (!Array.isArray(parsed)) {
        throw new Error('LLM returned non-array JSON');
    }
    return parsed;
}

function humanizeSlug(slug) {
    return slug
        .split('-')
        .map(w => w ? w[0].toUpperCase() + w.slice(1) : w)
        .join(' ');
}

/**
 * Resolve Chinese titles for all concept slugs. Uses 3-tier fallback:
 *   1. Hand-curated dict (instant)
 *   2. LLM (cached by slug+context-hash)
 *   3. Humanized slug
 *
 * Mutates the supplied `titleMap` in place: Map<slug, {title, source}>.
 */
async function resolveCnTitles(slugMap, { useLlm = true } = {}) {
    const titleMap = new Map();
    const cache = loadCnCache();
    const needLlm = [];

    for (const [slug, tweets] of slugMap.entries()) {
        if (!slug) continue;

        // Tier 1: hand-curated dict
        if (DICT_TITLES[slug]) {
            titleMap.set(slug, { title: DICT_TITLES[slug], source: 'dict' });
            continue;
        }

        // Tier 2: cache (keyed by slug + representative-tweet-hash)
        const rep = representativeText(tweets);
        const hash = shortHash(rep);
        const cacheKey = `${slug}::${hash}`;
        if (cache[cacheKey]) {
            titleMap.set(slug, { title: cache[cacheKey].title, source: 'cache' });
            continue;
        }

        // Tier 3 fallback if LLM disabled or no key
        if (!useLlm || !getCnConfig().apiKey) {
            titleMap.set(slug, { title: humanizeSlug(slug), source: 'fallback' });
            continue;
        }

        // Need LLM
        needLlm.push({ slug, text: rep, hash });
    }

    if (needLlm.length > 0) {
        console.log(`[cn-title] Asking LLM for ${needLlm.length} new concept titles...`);
        try {
            // Batch all into one request to amortize prompt overhead
            const pairs = needLlm.map(p => ({ slug: p.slug, text: p.text }));
            const result = await callLlmForTitles(pairs);

            // Map back by slug; tolerate ordering drift
            const bySlug = new Map();
            for (const r of result) {
                if (r && typeof r.slug === 'string' && typeof r.title_zh === 'string') {
                    bySlug.set(r.slug, r.title_zh.trim());
                }
            }

            let resolved = 0;
            for (const p of needLlm) {
                const title = bySlug.get(p.slug);
                if (title) {
                    titleMap.set(p.slug, { title, source: 'llm' });
                    cache[`${p.slug}::${p.hash}`] = { title, ts: new Date().toISOString() };
                    resolved++;
                } else {
                    // LLM didn't return this slug — fallback
                    titleMap.set(p.slug, { title: humanizeSlug(p.slug), source: 'fallback' });
                }
            }
            console.log(`[cn-title] LLM resolved ${resolved}/${needLlm.length} titles.`);
            saveCnCache(cache);
        } catch (e) {
            console.error(`[cn-title] LLM call failed: ${e.message}`);
            console.error('[cn-title] Falling back to humanized slugs for these concepts.');
            for (const p of needLlm) {
                titleMap.set(p.slug, { title: humanizeSlug(p.slug), source: 'fallback' });
            }
        }
    }

    return titleMap;
}


// ---------- Env loading (Turso + LLM) ----------
// Load .env.local from the upstream x-news/ first (TURSO_*), then THIS
// bundle's .env.local on top (MINIMAX_CN_API_KEY etc). The wiki's own
// values take precedence, so any LLM override stays local without editing
// the publisher's env.
const xnewsRoot = '/data/workspace/x-news';
const upstreamEnvFile = path.join(xnewsRoot, '.env.local');
const wikiEnvFile = path.join(__dirname, '..', '.env.local');

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
            // Later load wins, so caller order = precedence. Just set.
            process.env[m[1]] = v;
        }
    });
}
loadEnvFile(upstreamEnvFile);  // base
loadEnvFile(wikiEnvFile);      // overrides
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
const useLlm = !args.includes('--no-llm');

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
function renderConceptPage(slug, tweets, cnTitle, cnSource = 'unknown') {
    const relPath = `concepts/${slug}.md`;
    const sorted = [...tweets].sort((a, b) => {
        const ad = a.fetched_at || a.created_at || '';
        const bd = b.fetched_at || b.created_at || '';
        return bd.localeCompare(ad);
    });

    // Filename stays English (slug) for stable IDs, cross-spec compat, and
    // idempotent re-runs. The `title:` field is what Obsidian shows in the
    // file tree, search, and link previews — so we resolve it to Chinese via
    // 3-tier fallback (dict → LLM → humanized slug). See resolveCnTitles().

    const frontmatter = {
        type: 'Concept',
        title: cnTitle,
        description: `跨日主题 "${cnTitle}" (${slug})，共 ${tweets.length} 条相关精选推文。`,
        tags: ['x-news', 'concept', `topic:${slug}`],
        timestamp: new Date().toISOString(),
        x_topic_slug: slug,
        x_tweet_count: tweets.length,
        x_first_seen: isoOrNull(sorted[sorted.length - 1]?.fetched_at),
        x_last_seen: isoOrNull(sorted[0]?.fetched_at),
        x_cn_title_source: cnSource,
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

# 主题: ${cnTitle}

> slug: \`${slug}\`

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
    // Resolve Chinese titles first (3-tier: dict → LLM cache → humanized).
    // If --no-llm is set or no API key, skips LLM and uses dict/fallback.
    const titleMap = await resolveCnTitles(conceptMap, { useLlm });
    const conceptFiles = [];
    for (const [slug, ts] of conceptMap.entries()) {
        if (!slug) continue;
        const { title, source } = titleMap.get(slug) || { title: slug, source: 'unknown' };
        const { relPath, body } = renderConceptPage(slug, ts, title, source);
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
