---
okf_version: "0.1"
type: index
title: x-news Wiki Index
description: Content catalog (llm-wiki) + OKF v0.1 bundle root.
updated: 2026-06-26
---

# x-news Wiki Index

> LLM Wiki 风格内容目录 + OKF v0.1 bundle 根。
> 任何 agent 操作前**必须**先读 [SCHEMA.md](SCHEMA.md)、本文件、[log.md](log.md) 最近 30 行。

- **生成时间**: 2026-06-26
- **数据范围**: 2026-01-30 → 当前
- **OKF 版本**: 0.1
- **llm-wiki 类型**: source / entity / concept / query
- **WIKI_PATH**: `/data/workspace/x-news-wiki`

## 目录

### Layer 1 — Sources (raw, immutable)
- [📰 头条 (News)](sources/news/index.md) — 3466 条推文，按日分目录
- [✨ 亮点 (Highlights)](sources/highlights/index.md) — 1342 条推文，按日分目录

### Layer 2 — Wiki pages (agent-owned)
- [👤 作者 (Entities)](entities/index.md) — 808 位作者实体
- [🧩 主题 (Concepts)](concepts/index.md) — 247 个跨日主题
- [📊 月度综合 (Queries)](queries/index.md) — 6 个月度趋势汇总

### Layer 3 — Schema
- [📐 SCHEMA.md](SCHEMA.md) — 规约 / frontmatter / 标签字典 / 阈值
- [📜 log.md](log.md) — agent 动作日志
- [🗂 overview.md](overview.md) — 全局 dashboard 入口
- [📖 README.md](README.md) — 项目说明

## 阅读建议

1. **看当日精选** → 打开 `sources/news/2026-MM-DD/` 或 `sources/highlights/2026-MM-DD/`
2. **追踪主题** → [concepts/index.md](concepts/index.md) 找主题 slug → 时间线
3. **查作者** → [entities/index.md](entities/index.md) 找 handle → 该作者全部精选
4. **月度趋势** → [queries/index.md](queries/index.md) 看每月高赞推文 / 活跃作者 / 热门主题
5. **全局概览** → [overview.md](overview.md) Top 10 / Top 15

## OKF 合规性

本 bundle 严格遵循 [OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)：

1. ✅ 所有非保留 `.md` 文件均有合法 YAML frontmatter
2. ✅ 所有 frontmatter 均含非空 `type` 字段（llm-wiki 视角存于 `type`，OKF 原值存于 `type_okf`）
3. ✅ 保留文件名 (`index.md`, `log.md`, `README.md`) 符合 §6 / §7
4. ✅ 使用 bundle-relative 绝对路径 `/path` 链接
5. ✅ raw sources 不可变（re-ingest 通过 `sha256` 字段检测 drift）

## llm-wiki 合规性

1. ✅ `SCHEMA.md` 存在，含 domain / conventions / frontmatter / taxonomy / thresholds
2. ✅ 所有 page 含 `type` / `created` / `updated` / `sources`
3. ✅ Layer 1 sources 加 `sha256` / `source_url`
4. ✅ 跨引用通过相对路径 + `[[wikilinks]]`
5. ✅ `index.md` 按 type 分段

## 重新生成 / 维护

```bash
cd /data/workspace/x-news-wiki

# OKF bundle 生成（从 Turso 全量 / 增量导出）
node scripts/export.js                # 全量
node scripts/export.js --since=2026-06-01  # 增量

# llm-wiki 字段对齐（回填 created / updated / sha256 / source_url / sources）
node scripts/ingest.js                # 全量
node scripts/ingest.js --dry           # dry run
```
