---
type: Schema
title: x-news Wiki Schema
description: Conventions, structure, frontmatter, taxonomy, and page thresholds for the x-news LLM Wiki.
updated: 2026-06-26
---

# x-news Wiki Schema

> llm-wiki 接入说明：本目录是一个 [Karpathy LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)，
> 同时是 [OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) bundle。
> 任何 agent 在写入前**必须**先读本文件 + `index.md` + `log.md` 最近 30 行。

## Domain

x-news 是一个 AI 编辑的 X (Twitter) 资讯 pipeline：每天 8:17 / 20:17 跑 AI 编辑精选 15 条头条 + 少量亮点。
本 wiki 把 Turso 里所有 `selected IN (1, 2)` 的推文（含 AI 解析）落地为可被 Obsidian、llm-wiki 桌面应用、任意支持 markdown 的工具直接读取的知识库。

数据范围：2026-01-30 → 当前；约 5000+ 推文 / 800+ 作者 / 247 主题 / 6 月度综合，每周日增。

## 三层架构

```
x-news-wiki/
├── SCHEMA.md                # 本文件（Layer 3 规约）
├── index.md                 # 内容目录（按 type 分段 + one-liner summary）
├── log.md                   # agent 动作日志（追加式）
├── overview.md              # 全局 dashboard 入口（Top 推文 / 作者 / 主题）
├── README.md                # 项目说明（OKF 0.1 bundle 入口）
├── sources/                 # Layer 1（immutable raw）
│   ├── news/YYYY-MM-DD/     # selected=1 头条（按日分目录）
│   └── highlights/YYYY-MM-DD/  # selected=2 亮点
├── entities/                # Layer 2 派生
│   ├── index.md
│   └── authors/<handle>.md  # 作者页（从推文派生）
├── concepts/                # Layer 2 派生
│   ├── index.md
│   └── <topic-slug>.md      # 跨日主题（从推文派生）
├── queries/                 # Layer 2 派生（按需落盘的高价值查询）
│   ├── index.md
│   └── monthly-<YYYY-MM>.md # 月度综合（按月趋势汇总）
└── scripts/
    ├── export.js            # 从 Turso 全量 / 增量导出（OKF bundle 生成器）
    └── ingest.js            # 回填 frontmatter (source_url / created / sha256) + lint
```

| 层 | 路径 | 可变性 | 写入者 |
|---|---|---|---|
| Layer 1 raw | `sources/**` | **不可变** | export.js 全量覆盖、agent 永不编辑 |
| Layer 2 wiki | `entities/`, `concepts/`, `queries/`, `index.md`, `overview.md` | 可更新 | export.js 全量覆盖 / agent 增量 |
| Layer 3 schema | `SCHEMA.md`, `log.md` | 慎改 | agent 改前需用户确认 |

> **不可变规则**：`sources/` 一旦生成不可手改；re-ingest 时若 sha256 变化即视为 source drift，需在 `log.md` 标记。

## Conventions

- **文件名**：lowercase + hyphens，无空格（`agent-memory-optimization.md`）
- **保留名**（OKF §6/§7）：`index.md`、`log.md` — 任何目录下都作为目录索引/日志入口
- **每页必带** YAML frontmatter（见下）
- **跨引用**：使用 `[[wikilinks]]` 或相对路径 `[label](path.md)`；最少 2 条 outbound
- **更新页面** 必 bump `updated` 字段
- **每页必登记** `index.md`（按 type 分段）
- **每个动作** 追加 `log.md` 一行
- **Provenance**：合成 3+ 源的页面，段落末尾用 `^[raw/path/file.md]` 标注来源
- **slug 规则**：推文文件 `<priority>__<handle>__<slug>.md`（priority 数字小 = 排序靠前）
- **handle 规则**：去掉前导 `@`，保留原始大小写与下划线

## Frontmatter

### 标准字段（必填）

```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: source | entity | concept | synthesis | query | schema | readme | overview
tags: [from taxonomy below]
sources: [sources/news/2026-06-25/<file>.md]   # 必填，引用了哪些 raw 源
---
```

### 可选质量信号

```yaml
confidence: high | medium | low       # 主张的可信度（单源 / 多源 / 业内争议）
contested: true                       # 当页面包含未解决矛盾时
contradictions: [other-page-slug]     # 与哪些页面冲突
```

### Layer 1 (raw) 字段

每条推文额外带：

```yaml
type: source                          # OKF 用 "X Tweet"；llm-wiki 视角统一 source
x_tweet_id: "2069547676849557725"
x_handle: "karpathy"
x_author: "Andrej Karpathy"
x_created_at: "2026-06-23T22:26:31.000Z"   # 推文原发时间
x_selected: 1 | 2                      # 1=头条 2=亮点
x_engagement: { likes: 19443, retweets: 1592, replies: 1001, ... }
x_source: "crawler"
resource: "https://x.com/i/status/2069547676849557725"   # OKF 原始 URL
source_url: "https://x.com/i/status/2069547676849557725" # llm-wiki 别名
sha256: "<hex of body>"

# OKF 兼容字段
type_okf: "X Tweet"                    # 原始 OKF 类型（llm-wiki `type: source` 不破坏 OKF）
```

> `type` 在双规约之间取 llm-wiki 标准（`source/entity/concept/synthesis/query`）；
> OKF 原值以 `type_okf` 保留。Obsidian / 第三方工具可读两者任一。

### Layer 2 字段

- **entity (author) 页**：
  - `type: entity`
  - `x_handle`、`x_tweet_count`、`x_first_seen`、`x_last_seen`
  - `sources` 列出该作者被收录的全部推文相对路径
- **concept 页**：
  - `type: concept`
  - `x_topic_slug`、`x_tweet_count`、`x_first_seen`、`x_last_seen`
  - `sources` 列出该主题下全部推文
- **query (synthesis / monthly) 页**：
  - `type: query` （llm-wiki 标准）/ `type: synthesis` （OKF 兼容，由 type_okf 保留）
  - `x_month`、`x_tweet_count`
  - 总结该月活跃作者、热门主题

## Tag Taxonomy

所有 tag 必从下列字典取；新 tag 先入字典再使用。

### 顶层 tag

| Tag | 含义 | 用在 |
|---|---|---|
| `x-news` | 来源管道标识 | 所有页面 |
| `source` | Layer 1 推文 | 推文页 |
| `entity` | Layer 2 实体（人/组织/产品/模型） | author/company 页面 |
| `concept` | Layer 2 主题/概念 | topic 页面 |
| `query` | Layer 2 高价值查询结果 | synthesis / monthly 页面 |
| `schema` | Layer 3 规约 | SCHEMA.md / log.md |
| `readme` | 项目说明 | README.md |
| `overview` | dashboard 入口 | overview.md |
| `author` | 作者派生页 | entity 子类 |

### 子类标签（按 handle / topic / month）

- `author:<handle>` — 例如 `author:karpathy`
- `topic:<slug>` — 例如 `topic:claude-code-ecosystem`
- `month:<YYYY-MM>` — 例如 `month:2026-06`
- `highlights` — selected=2 的推文 / 目录

> 子类 tag 可无限扩展但**必须**以 `author:` / `topic:` / `month:` 前缀开头，便于 lint 兜底。

### 内容领域 tag（按需扩展，使用前先入本字典）

- `ai-tool` — AI 产品/工具（Claude Code, Codex, Cursor, ...）
- `ai-model` — 模型（GPT-5, Claude Opus, DeepSeek-V4, ...）
- `ai-org` — 公司/实验室（Anthropic, OpenAI, xAI, ...）
- `ai-agent` — Agent 范式
- `ai-crypto` — AI + 区块链交叉
- `ai-infra` — 算力 / GPU / 数据中心
- `fundraising` — 融资 / 估值
- `product-launch` — 新产品 / 新版本发布
- `open-source` — 开源动作
- `regulation` — 监管 / 政策
- `controversy` — 争议 / 公开冲突

## Page Thresholds

x-news 的源密度极高（每天 15-50 条精选），按 llm-wiki 默认 "2+ 提及" 会爆页。采用**已建即合法**策略：

| 页面 | 创建阈值 | 数量（2026-06-26） |
|---|---|---|
| Author (entity) | 推文 ≥ 1 条精选 | 810 |
| Concept | 推文 ≥ 1 条精选 且 slug 非临时 | 247 |
| Monthly synthesis | 月份有精选 | 6 |
| Comparison | 按需（用户明确要"对比 X vs Y"时建） | 0 |
| Query (ad-hoc) | 答案 ≥ 5 条 raw 支撑且用户确认值得落盘 | 0 |

> 长期策略：当 `entities/authors/` 超过 1500 / `concepts/` 超过 500 时，重新评估阈值，
> 候选冷数据（< 3 推文 / < 5 likes）移入 `_archive/`，从 `index.md` 移除但保留页面以便回查。

## Update Policy

新信息与现有内容冲突时：

1. 检查时间戳 — 新源覆盖旧源
2. 真矛盾则两方都列，附日期 + 来源
3. 页面 frontmatter 加 `contradictions: [other-page-slug]`、`contested: true`
4. lint 报告里点出待用户复核

## Agent 接入仪式

任何 session 操作本 wiki 前**必须**：

```bash
WIKI="/data/workspace/x-news-wiki"
read_file "$WIKI/SCHEMA.md"        # 本文件
read_file "$WIKI/index.md"          # 已有页面目录
read_file "$WIKI/log.md"            # 最近 30 行
```

大批量改动（≥ 10 个页面）前先与用户确认范围。

## Related

- 上游数据源：x-news Turso DB (`/data/workspace/x-news/`)
- OKF 0.1 规范：https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
- Karpathy LLM Wiki：https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- llm-wiki skill：`/data/hermes/skills/research/llm-wiki/SKILL.md`
- x-news-architecture skill（cron / fetch / pipeline 细节）
