# Update Log

> LLM Wiki 动作日志（追加式）。格式：`## [YYYY-MM-DD] action | subject`
> Actions: create / update / query / lint / archive / migrate / reset

## [2026-06-26] create | Wiki initialized
- 4808 条推文、808 作者、247 主题、6 月度综合
- 建立根目录结构（README, index, log, overview, sources/, entities/, concepts/, synthesis/）
- 跑 `node scripts/export.js` 从 Turso 全量导出 OKF v0.1 bundle
- Generated: 809 entities/authors/, 247 concepts/, 6 synthesis/YYYY-MM.md

## [2026-06-26] migrate | LLM Wiki 接入
- 创建 `SCHEMA.md`（9KB）— domain / conventions / frontmatter / 标签字典 / 阈值
- 在 `/data/hermes/.env` 追加 `WIKI_PATH=/data/workspace/x-news-wiki`
- 创建 `scripts/ingest.js`（9.6KB）— 回填 created/updated/sha256/source_url，type 映射 OKF→llm-wiki
- 跑 `node scripts/ingest.js` — 5868 files processed, 0 errors
  - source: 4807（推文 frontmatter 加 type: source + type_okf: "X Tweet" + source_url + sha256）
  - entity: 808（作者页加 created/updated/sources 数组）
  - concept: 247（主题页加 created/updated/sources 数组）
  - query: 6（迁自 synthesis/，type: query + type_okf: "Synthesis"）
- 删除 `synthesis/` 目录，迁入 `queries/`
- 新增 `entities/index.md`、`queries/index.md`（无则建）
- 重组根 `index.md` — Layer 1/2/3 分段 + OKF / llm-wiki 双合规声明
- 创建 `queries/index.md` 月度综合表格
- 创建 `entities/index.md` Top 15 作者 + 全量入口
- 推文 `[[wikilinks]]` 暂未批量改写（已有 `../concepts/...md` 相对链接 + `entities/authors/<handle>.md` 引用，OKF / Obsidian / llm-wiki 都能解析）

## [2026-06-26] update | Frontmatter 收尾
- 创建 `scripts/backfill-sources.js`（5.9KB）— 从 markdown body 反查 sources 链接，回填 frontmatter `sources` 列表
- 跑 backfill：1061 个 layer 2 页面 backfill 成功
- 创建 `scripts/lint.js`（5.8KB）— 0 issues 校验
- 修 `ingest.js` bug：原来 `endsWith('index.md')` 误把 `spectatorindex.md` 等 name-含-`index` 的文件 skip 了
- 修 backfill 路径规范化：sources[] 改存 bundle-relative 绝对路径 `/sources/...`（OKF §6）
- 跑 `node scripts/lint.js` 最终报告：

```
============================================================
LINT REPORT — x-news-wiki
============================================================
Layer 1 (raw): 4807
Layer 2 (wiki): 1062
By type: { source: 4807, entity: 809, concept: 247, query: 6 }
✓ missing_frontmatter: 0
✓ missing_type: 0
✓ bad_type: 0
✓ missing_created: 0
✓ missing_updated: 0
✓ bad_date: 0
✓ missing_sources: 0
✓ missing_sha256: 0
✓ missing_source_url: 0
✓ missing_tags: 0
Broken sources[] refs: 0
STATUS: CLEAN
```

## [2026-06-26] query | Karpathy 2026 H1 关注点
- 问："Karpathy 这半年在关注什么？"
- 流程：读 `entities/authors/karpathy.md` → 提取 16 条 sources 链接 → 反查 `x_related_topic` + `x_selected` + `title`
- 归纳 5 条主线：Harness Engineering / Anthropic 路线 / OpenClaw 时刻 / 创业地图 / AI 时代人的处境
- 落盘到 `queries/karpathy-2026-h1-focus.md`（5.5KB），confidence: high
- 工具细节：karpathy 16 条全在 2026-06-25 单日抓取，半年覆盖实际很薄，结论附数据局限说明
