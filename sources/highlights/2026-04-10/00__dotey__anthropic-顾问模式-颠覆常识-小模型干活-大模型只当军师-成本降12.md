---
type: "X Tweet"
title: "Anthropic「顾问模式」颠覆常识：小模型干活、大模型只当军师，成本降12%"
description: "**[「大模型指挥、小模型执行」被反转了——Anthropic用Advisor API重新定义Agent分工]**  Anthropic新推出的Advisor API彻底翻转了行业惯例：Sonnet/Haiku作为执行者全程跑任务，Opus只在决策节点被请出来当顾问，全程不碰工具、不直接输出。  实际效果：Sonnet+Opus顾问模式比Sonnet单干SWE-bench分数高2.7%，每个任务成"
resource: "https://x.com/i/status/2042324560700154312"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-10T00:44:38.541Z"
x_tweet_id: "2042324560700154312"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-09T19:31:34.000Z"
x_engagement:
  likes: 477
  retweets: 91
  replies: 59
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Anthropic「顾问模式」颠覆常识：小模型干活、大模型只当军师，成本降12%

## 摘要

**[「大模型指挥、小模型执行」被反转了——Anthropic用Advisor API重新定义Agent分工]**

Anthropic新推出的Advisor API彻底翻转了行业惯例：Sonnet/Haiku作为执行者全程跑任务，Opus只在决策节点被请出来当顾问，全程不碰工具、不直接输出。

实际效果：Sonnet+Opus顾问模式比Sonnet单干SWE-bench分数高2.7%，每个任务成本降低11.9%。更惊人的是Haiku——配Opus顾问后BrowseComp从19.7%跃升至41.2%，翻了一倍多，成本却只有Sonnet单干的零头。

这意味着「贵的模型负责决策、便宜的模型负责执行」成为可能，Token成本结构被根本性重构。


**gakki：** 当所有人还在讨论「用哪个模型」时，Anthropic已经在解决「谁来决策」的问题了。顾问模式把Opus从执行者变成了裁判，这对需要长上下文记忆的复杂Agent任务意义重大——裁判只需要看到关键帧，不需要看完整部电影。

## 原文

Anthropic 推出了一个叫“顾问工具”（advisor tool）的新 API 功能，核心思路是：让便宜的模型干活，遇到难题时请贵的模型出主意。

具体来说，Sonnet 或 Haiku 作为"执行者"全程跑任务、调工具、处理结果。碰到自己搞不定的决策，就把上下文递给 Opus，Opus 给出方案或纠正，执行者接着干。Opus 全程不碰工具、不直接输出给用户，只充当幕后军师。

这跟很多人熟悉的“大模型拆任务、小模型干活”的模式正好反过来。以前是大模型当指挥官，把任务拆成小块分配下去。现在是小模型自己跑，只在关键节点向大模型请教。好处很直接：大部分 Token 消耗在便宜的模型上，贵的模型只在刀刃上用。

效果方面，Sonnet 配 Opus 顾问在 SWE-bench 多语言测试上比 Sonnet 单干高了 2.7 个百分点，同时每个任务的成本还降了 11.9%。更有意思的是 Haiku 的表现：配上 Opus 顾问后，Haiku 在 BrowseComp 测试上从 19.7% 跳到 41.2%，翻了一倍多。虽然分数还是比 Sonnet 单干低 29%，但成本只有 Sonnet 的 15%，适合跑量大但对智能要求没那么极端的场景。

用起来也简单，在 Messages API 的 tools 里加一个 advisor_20260301 类型就行，一个 API 请求内部完成模型切换，不需要额外管理上下文或做多次调用。可以设 max_uses 控制每次请求最多咨询几次顾问，账单里顾问和执行者的 Token 分开计费。

对开发者来说，这提供了一个新的性价比选项：不用在"全程跑 Opus 太贵"和"只用 Sonnet 不够聪明"之间二选一了。你的 Agent 可以 95% 的时间跑 Sonnet 的价格，5% 的关键决策享受 Opus 的判断力。目前是 beta 阶段，需要加 anthropic-beta: advisor-tool-2026-03-01 请求头才能用。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-09T19:31:34.000Z
- **抓取时间**: 2026-04-10T00:44:38.541Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 477 · 🔄 91 · 💬 59 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2042324560700154312) — @dotey (宝玉)
