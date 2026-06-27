---
type: "X Tweet"
title: "Codex Computer Use 暴露 Harness 设计缺陷：应用识别仍需人工「喂上下文」"
description: "**一句话核心判断：** Computer Use 的核心瓶颈不是模型不够强，而是 Harness 层无法自动感知运行环境——模型连「网易云音乐在本地叫 netease music app」这种常识都需要人工注入。  **要点：** - Codex 等 Agent 运行时依赖「Harness」（驭能层/胶水层）桥接模型意图与操作系统操作 - 当前 Harness 无法主动探测目标应用的标准命名，导"
resource: "https://x.com/i/status/2047560948530155947"
tags:
  - "x-news"
  - "news"
  - "author:yetone"
timestamp: "2026-04-24T11:32:27.889Z"
x_tweet_id: "2047560948530155947"
x_author: "yetone"
x_handle: "yetone"
x_created_at: "2026-04-24T06:19:06.000Z"
x_engagement:
  likes: 6
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex Computer Use 暴露 Harness 设计缺陷：应用识别仍需人工「喂上下文」

## 摘要

**一句话核心判断：** Computer Use 的核心瓶颈不是模型不够强，而是 Harness 层无法自动感知运行环境——模型连「网易云音乐在本地叫 netease music app」这种常识都需要人工注入。

**要点：**
- Codex 等 Agent 运行时依赖「Harness」（驭能层/胶水层）桥接模型意图与操作系统操作
- 当前 Harness 无法主动探测目标应用的标准命名，导致每次部署新环境都需人工补偿
- 这暴露了「模型能力 vs 工程基建」之间的断层：模型推理强不代表 Agent 能真正无人值守

**gakki 锐评：** Harness 工程才是 Agent 投产的真正门槛，行业过度关注模型参数而忽视了这一层——巧妇难为无米之炊，但有米没锅同样做不了饭。

## 原文

@jakevin7 所以你这边还是要放下手中的活儿去手动提示一下 Codex：「网易云音乐在本地电脑里的应用名字叫 netease music app」，这就是 Computer Use Harness 没做好啊


## 元信息

- **作者**: yetone ([@yetone](https://x.com/yetone))
- **发布时间**: 2026-04-24T06:19:06.000Z
- **抓取时间**: 2026-04-24T11:32:27.889Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 6 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2047560948530155947) — @yetone (yetone)
