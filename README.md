---
type: "Readme"
title: "x-news Wiki"
description: "Project-level README for the x-news OKF bundle."
timestamp: "2026-06-27T08:40:42.894Z"
---

# x-news Wiki

Open Knowledge Format (OKF) v0.1 bundle of all AI-selected X/Twitter posts from the [x-news](https://github.com/leavingme/x-news) pipeline.

## 这是什么

x-news 是一个 AI 驱动的 X 资讯 pipeline，每天 8:17 / 20:17 跑 AI 编辑精选 15 条头条 + 少量亮点。本项目把 Turso 数据库里所有 `selected IN (1, 2)` 的推文（含 AI 解析）导出为 [OKF](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) 兼容的 markdown bundle，可被 Obsidian、llm_wiki 桌面应用、任意支持 markdown 的工具直接读取。

## 目录结构

```
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
```

## 重新生成

```bash
cd /data/workspace/x-news-wiki
node scripts/export.js                # 全量
node scripts/export.js --since=2026-06-01   # 增量
```

## 后续计划

- [ ] 接 llm_wiki 桌面应用（两步摄取 → 实体/概念自动交叉）
- [ ] 接 Obsidian（`raw/sources/` 直接放这里 + 自动同步）
- [ ] 定期 cron 增量导出
- [ ] 摘要质量 lint（防止旧 dirty 数据流入）
