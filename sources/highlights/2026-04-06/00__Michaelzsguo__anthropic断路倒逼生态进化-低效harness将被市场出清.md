---
type: "source"
title: "Anthropic断路倒逼生态进化：低效harness将被市场出清"
description: "**[一句话核心判断]**  Anthropic切断第三方Agent接入，本质上是一场针对「harness工程质量」的市场淘汰赛。  - 罗福莉的核心论点：多数Token浪费来自设计低劣的harness而非模型本身，OpenClaw是典型反面教材——高频上下文调用拉低cache hit rate，暴殄天物。 - 约束反推工程纪律：context management、prompt caching、"
resource: "https://x.com/i/status/2040844920475287733"
tags:
  - "x-news"
  - "highlights"
  - "author:Michaelzsguo"
timestamp: "2026-04-06T00:42:54.671Z"
x_tweet_id: "2040844920475287733"
x_author: "Michael Guo"
x_handle: "Michaelzsguo"
x_created_at: "2026-04-05T17:32:00.000Z"
x_engagement:
  likes: 12
  retweets: 0
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2040844920475287733"
created: "2026-04-05"
updated: "2026-06-26"
sha256: "e102c37c79c5e385cecd503ad97a9197c0646aeec0241b1417539a708e7bce21"
sources:
  - "/sources/highlights/2026-04-06/00__Michaelzsguo__anthropic断路倒逼生态进化-低效harness将被市场出清.md"
---

# Anthropic断路倒逼生态进化：低效harness将被市场出清

## 摘要

**[一句话核心判断]**

Anthropic切断第三方Agent接入，本质上是一场针对「harness工程质量」的市场淘汰赛。

- 罗福莉的核心论点：多数Token浪费来自设计低劣的harness而非模型本身，OpenClaw是典型反面教材——高频上下文调用拉低cache hit rate，暴殄天物。
- 约束反推工程纪律：context management、prompt caching、token效率优化将从「可选项」变成「生存技能」。这将催生一批专业harness开发者岗位。
- 值得追踪：被切断的第三方生态（OpenClaw等）如何找到新的Claude接入路径，或被迫转向本地模型。Token economics已成开发者最核心焦虑，「3 a.m. session refreshed」是悬在所有重度用户头上的剑。

**gakki 说：** 「菜市场讨价还价」这个比喻太精准了——现在用Claude就像在抢菜，焦虑的是「我能抢到多少」而非「我怎么用好」。当资源稀缺变成新常态，性价比工程才会真正被重视。

## 原文

罗福莉刚刚写了一篇很不错的文章。即使 Anthropic 正在切断 OpenClaw 这类第三方 agent 对 Claude 订阅的接入，罗福莉依然给整个 AI 生态提供了一个相对乐观的视角。

我很同意罗福莉说的很多浪费其实都来自设计不佳的 harness，小龙虾就是一个例子。它们在每次查询时发起多次高上下文 API 调用，拉低 cache hit rate，又白白烧掉大量 tokens。Anthropic 的这个决定，反而会倒逼整个生态在 context management、prompt caching 和整体效率上做得更好。这样的约束，往往最终会催生出真正的工程纪律，也会逼出新的创造力。

现在用 Claude，或者想办法给 Claude Code “薅到一个划算的 deal”，有时候真的像在菜市场里讨价还价，因为 token economics 已经成了最核心的问题。大家都在焦虑，自己的 tokens 或订阅额度到底会以多快的速度被烧光。我们也都害怕看到那句提示：“Your session will be refreshed at 3 a.m.” 也许，真正的后备方案只有本地模型，而最近 Gemma 4 这样的模型也说明了，这条路正在一天比一天更有吸引力。


## 元信息

- **作者**: Michael Guo ([@Michaelzsguo](https://x.com/Michaelzsguo))
- **发布时间**: 2026-04-05T17:32:00.000Z
- **抓取时间**: 2026-04-06T00:42:54.671Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 12 · 🔄 0 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2040844920475287733) — @Michaelzsguo (Michael Guo)
[2] [Author page](/entities/authors/michaelzsguo.md)
