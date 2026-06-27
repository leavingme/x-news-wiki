---
type: Schema
title: x-news Wiki Schema
description: Conventions, structure, frontmatter, and frontmatter-only schema for the simplified x-news LLM Wiki.
updated: 2026-06-27
---

# x-news Wiki Schema

> 简化版 llm-wiki / OKF v0.1 bundle。2026-06-27 砍掉了 entities/、concepts/、synthesis/、queries/ 派生层——所有信息直接来自 Layer 1 raw 推文页面。

## Domain

x-news 是一个 AI 编辑的 X (Twitter) 资讯 pipeline：每天 8:17 / 20:17 跑 AI 编辑精选 15 条头条 + 少量亮点。
本 wiki 把 Turso 里所有 `selected IN (1, 2)` 的推文（含 AI 解析 + 原文）落地为可被 Obsidian、llm-wiki 桌面应用、任意支持 markdown 的工具直接读取的知识库。

数据范围：2026-01-30 → 当前；约 5000+ 推文，每周新增 100-300 条。

## 结构（简化后）

```
x-news-wiki/
├── SCHEMA.md                # 本文件（Layer 3 规约）
├── README.md                # 项目说明
├── index.md                 # 根索引（OKF okf_version: 0.1 + sources TOC）
├── log.md                   # agent 动作日志（追加式，prepend）
├── overview.md              # 全局概要（Top 10 高赞推文 + 数据范围）
└── sources/                 # Layer 1 raw — 1 推文 1 文件
    ├── news/YYYY-MM-DD/     # selected=1 头条（按日分目录）
    └── highlights/YYYY-MM-DD/  # selected=2 亮点
```

| 层 | 路径 | 可变性 | 写入者 |
|---|---|---|---|
| Layer 1 raw | `sources/**` | **不可变** | export.js 全量覆盖、agent 永不编辑 |
| Layer 3 schema | `SCHEMA.md`, `log.md` | 慎改 | agent 改前需用户确认 |
| 入口文档 | `README.md`, `index.md`, `overview.md` | 自动生成 | export.js |

> **不可变规则**：`sources/` 一旦生成不可手改；re-export 时若 sha256 变化即视为 source drift。

## 设计理由

为什么没有 entities/authors、concepts、synthesis、queries：

- **作者页（entities/authors/）**：从 sources/ 反查即可（文件名格式 `<priority>__<handle>__<slug>.md`，grep 即可聚合）。
- **主题页（concepts/）**：跨日聚合是 query 时的视图，不该事先物化；推文里 `x_related_topic` 字段已存 slug。
- **月度综合（synthesis/）**：从 sources/ 按月份 grep 即可，月度 100-500 条不需要单独一页。
- **查询页（queries/）**：完全按需，由用户在 Obsidian / llm-wiki 桌面端动态生成。

"已建即合法"对 sources 仍然适用：1 推文 1 文件，文件名带 handle 和 priority 方便排序。

## Conventions

- **文件名**：lowercase + hyphens，无空格（`agent-memory-optimization.md`）
- **保留名**（OKF §6/§7）：`index.md`、`log.md` — 任何目录下都作为目录索引/日志入口
- **每页必带** YAML frontmatter
- **更新页面** 必 bump `updated` 字段
- **每个动作** 追加 `log.md` 一行

## Frontmatter

### Layer 1 推文

每条推文额外带：

```yaml
---
type: source                          # llm-wiki 标准；OKF 用 "X Tweet" 由 type_okf 保留
title: 中文标题或原文首行
description: AI 摘要前 200 字
tags: [x-news, news|highlights, author:<handle>]
timestamp: ISO8601
resource: "https://x.com/i/status/<id>"   # OKF 原始 URL
source_url: "https://x.com/i/status/<id>" # llm-wiki 别名
x_tweet_id: "..."
x_author: "Andrej Karpathy"
x_handle: "karpathy"
x_created_at: "2026-06-23T22:26:31.000Z"   # 推文原发时间
x_selected: 1 | 2                            # 1=头条 2=亮点
x_priority: 0                                # 数字小 = 排序靠前
x_engagement: { likes: 19443, retweets: 1592, ... }
x_source: "crawler"
type_okf: "X Tweet"                          # OKF 原始类型
---

# 标题

## 摘要

(AI 摘要)

## 原文

(原推文)

## 元信息

- 作者/发布时间/抓取时间/精选类别/优先级/互动数

## Citations

[1] Tweet on X — @handle
```

### 入口文档

- `index.md`：`okf_version: 0.1`，不含 `type:`（OKF §6 例外）
- `overview.md`：`type: Overview`，Top 10 高赞推文 + 数据范围
- `README.md`：`type: Readme`，项目说明

## Tag Taxonomy

所有 tag 必从下列字典取；新 tag 先入字典再使用。

### 顶层 tag

| Tag | 含义 | 用在 |
|---|---|---|
| `x-news` | 来源管道标识 | 所有页面 |
| `source` | Layer 1 推文 | 推文页 |
| `overview` | dashboard 入口 | overview.md |
| `readme` | 项目说明 | README.md |
| `schema` | Layer 3 规约 | SCHEMA.md / log.md |

### 子类 tag

- `news` / `highlights` — selected=1 / selected=2 的推文
- `author:<handle>` — 例如 `author:karpathy`

### 内容领域 tag（按需扩展，使用前先入本字典）

- `ai-tool` / `ai-model` / `ai-org` / `ai-agent` / `ai-crypto` / `ai-infra`
- `fundraising` / `product-launch` / `open-source` / `regulation` / `controversy`

## Page Thresholds

- **推文 (source)**：所有 selected=1/2 全部入库（约 5000+ 文件）

> 不再维护派生页阈值（author/concept/synthesis 已砍）。

## Update Policy

sources 不可手改。如果发现 source drift（sha256 不一致），在 `log.md` 标记并重新 `node scripts/export.js`。

## Agent 接入仪式

任何 session 操作本 wiki 前**必须**：

```bash
WIKI="/data/workspace/x-news-wiki"
read_file "$WIKI/SCHEMA.md"
read_file "$WIKI/index.md"
read_file "$WIKI/log.md"   # 最近 30 行
```

大批量改动（≥ 10 个页面）前先与用户确认范围。

## Related

- 上游数据源：x-news Turso DB (`/data/workspace/x-news/`)
- OKF 0.1 规范：https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
- Karpathy LLM Wiki：https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- llm-wiki skill：`/data/hermes/skills/research/llm-wiki/SKILL.md`
- x-news-architecture skill（cron / fetch / pipeline 细节）