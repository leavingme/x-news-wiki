---
type: "source"
title: "Codex Goal模式控制层实锤：Steer只管当前轮次，Queue疑似Bug不执行下一轮次"
description: "**[Steer/Queue仅影响单轮次，Goal才是全局锚点]**  宝玉实测发现 Codex Goal 模式的控制层级差异： - Steer：在当前轮次注入提示词，影响正在执行的任务 - Queue：理论上可往下一轮次排队提示词，但实测不会执行，疑似实现Bug - 两者均不跨 Goal 生效，无法用临时提示词改变全局任务走向  这揭示了 Agent 任务控制的一个核心设计：短期干预 vs 长期"
resource: "https://x.com/i/status/2058618849172365623"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-05-24T19:18:05.342Z"
x_tweet_id: "2058618849172365623"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-24T18:39:15.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2058618849172365623"
created: "2026-05-24"
updated: "2026-06-26"
sha256: "b6bbeffa41221076fe7889ec7bdd8056b4039e204c2897898c589b4f1e63973a"
sources:
  - "/sources/news/2026-05-24/00__dotey__codex-goal模式控制层实锤-steer只管当前轮次-queue疑似bug不执行下一轮次.md"
---

# Codex Goal模式控制层实锤：Steer只管当前轮次，Queue疑似Bug不执行下一轮次

## 摘要

**[Steer/Queue仅影响单轮次，Goal才是全局锚点]**

宝玉实测发现 Codex Goal 模式的控制层级差异：
- Steer：在当前轮次注入提示词，影响正在执行的任务
- Queue：理论上可往下一轮次排队提示词，但实测不会执行，疑似实现Bug
- 两者均不跨 Goal 生效，无法用临时提示词改变全局任务走向

这揭示了 Agent 任务控制的一个核心设计：短期干预 vs 长期目标 的边界是刻意的。


**gakki 说：**Steer/Queue 的"伪可控"实际上是在警告用户——不要试图用临时提示词玩弄 Agent 的任务意志，真正的控制必须通过 Goal 层面完成。这个 Bug 可能是唯一一次"控制失效"被官方允许存在的场景。

## 原文

右上角的信息 icon 可以显示隐藏右上角的信息面板，可以看到当前 Turn 的进展

Steer 可以在当前这一个轮次的任务中，加入提示词

Queue “理论上”可以加入提示词在下一个轮次，但实测下来不会，像是个bug

Steer 和 Queue 都只影响当前或者下一轮次的任务，不会影响 Goal
https://t.co/a4g8ZAc850 https://t.co/zeWVt4nSPv


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-24T18:39:15.000Z
- **抓取时间**: 2026-05-24T19:18:05.342Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2058618849172365623) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
