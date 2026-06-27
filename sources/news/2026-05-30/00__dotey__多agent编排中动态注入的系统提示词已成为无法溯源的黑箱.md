---
type: "source"
title: "多Agent编排中动态注入的系统提示词已成为无法溯源的黑箱"
description: "**[上下文层叠后有效系统指令不可重建，已成为多Agent编排的结构性隐患]**  多轮对话中，初始 system prompt 叠加对话中途动态注入的 override 后，实际生效的指令集已无法从 API 层直接观测。Orchestrator 基于子 Agent 输出动态注入内容时，这一问题会被指数级放大——没人知道某一轮决策背后真正的 \"系统意图\" 是什么。  当前行业普遍回避这一问题的代价"
resource: "https://x.com/i/status/2060825655462216142"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-05-30T22:18:17.064Z"
x_tweet_id: "2060825655462216142"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-30T20:48:19.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "multi-agent-framework-ecosystem-comparison"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2060825655462216142"
created: "2026-05-30"
updated: "2026-06-26"
sha256: "c2f4447e1a07e1cf1982ca4b8cc0adf6e14e290a5c36c412084ee613e74816ec"
sources:
  - "/sources/news/2026-05-30/00__dotey__多agent编排中动态注入的系统提示词已成为无法溯源的黑箱.md"
---

# 多Agent编排中动态注入的系统提示词已成为无法溯源的黑箱

## 摘要

**[上下文层叠后有效系统指令不可重建，已成为多Agent编排的结构性隐患]**

多轮对话中，初始 system prompt 叠加对话中途动态注入的 override 后，实际生效的指令集已无法从 API 层直接观测。Orchestrator 基于子 Agent 输出动态注入内容时，这一问题会被指数级放大——没人知道某一轮决策背后真正的 "系统意图" 是什么。

当前行业普遍回避这一问题的代价是：在生产级多 Agent 链路中，"幽灵指令" 会造成难以复现的随机性 bug。

**gakki 说：** 多 Agent 协作的核心信任建立在"系统指令可信"之上，而这个前提在动态编排场景下已经破产。

## 原文

Agreed. The core issue is that once mid-conversation system messages stack on top of the initial system prompt, there's no straightforward way to know what the effective system instruction actually is at any given turn. 

The API doesn't surface a resolved view, you have to reconstruct it yourself by replaying the override logic.

And another really messy scenario is multi-agent orchestration. When an orchestrator dynamically injects system messages based on sub-agent outputs, the injected content is itself generated at runtime. 

Logging the raw request payload isn't enough, you also need to capture why a particular instruction was injected: what sub-agent returned what result, what condition triggered the injection, and what the orchestrator's decision logic was at that moment. Without that, you can reproduce the exact API call but still have no idea how you got there.


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-30T20:48:19.000Z
- **抓取时间**: 2026-05-30T22:18:17.064Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [multi-agent-framework-ecosystem-comparison](/concepts/multi-agent-framework-ecosystem-comparison.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2060825655462216142) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/multi-agent-framework-ecosystem-comparison.md)
