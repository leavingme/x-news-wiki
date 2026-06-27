---
type: "source"
title: "宝玉公开Claude Code /goal两种高阶工作流：分批Commit是Agent工程化的最小单位"
description: "**【一句话核心判断】**  宝玉的/goal用法揭示了一个核心事实——Agent工程化的最小单位不是工具，是Commit节奏。  **关键要点：** - Checklist驱动：用JSON文件记录任务进度，Agent分批处理，每批处理完更新文件 - 设计文档分阶段：与AI共创详细设计，划分Phases，设定每个Phase的验收条件，逐阶段执行，每Turn自行commit - 这本质上是把Agen"
resource: "https://x.com/i/status/2061260768729809096"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-01T04:19:04.034Z"
x_tweet_id: "2061260768729809096"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-01T01:37:18.000Z"
x_engagement:
  likes: 115
  retweets: 11
  replies: 29
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2061260768729809096"
created: "2026-06-01"
updated: "2026-06-26"
sha256: "3ac383c4b389949f06fffe0b224bb8c335c65e09e8d20e439f71bffd8d178ca1"
sources:
  - "/sources/news/2026-06-01/00__dotey__宝玉公开claude-code-goal两种高阶工作流-分批commit是agent工程化的最小单位.md"
---

# 宝玉公开Claude Code /goal两种高阶工作流：分批Commit是Agent工程化的最小单位

## 摘要

**【一句话核心判断】**

宝玉的/goal用法揭示了一个核心事实——Agent工程化的最小单位不是工具，是Commit节奏。

**关键要点：**
- Checklist驱动：用JSON文件记录任务进度，Agent分批处理，每批处理完更新文件
- 设计文档分阶段：与AI共创详细设计，划分Phases，设定每个Phase的验收条件，逐阶段执行，每Turn自行commit
- 这本质上是把Agent任务做成了可观测、可回滚的工程节点

**gakki锐评：**
这套工作流的价值不在于技巧，在于把Agent的模糊执行变成了可度量的工程过程——这才是生产级Agent和非生产级Agent的分水岭。

## 原文

我经常用 /goal ，主要用法：

1. 写一个 Checklist，让它一条条勾选
比如我逆向代码，会先用脚本做语法解析把完整的list整理成个json文件，让它分批去处理，每次处理完一批就更新json文件

2. 写一个设计文档，分成几个阶段
跟AI一起写一份详细设计文档，设计好了后让 AI 划分好 Phases，设定好每个 Phase 的验收条件，一个 Phase 一个 Phase 的执行，每个 Turn 都让它自己 commit


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-01T01:37:18.000Z
- **抓取时间**: 2026-06-01T04:19:04.034Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 115 · 🔄 11 · 💬 29 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2061260768729809096) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
