---
type: "X Tweet"
title: "LLM 时代「代码拆分」可能是个伪需求"
description: "**[AI 编程范式下，文件粒度需要重新被定义]** • 多文件结构增加 LLM tool calling 次数，每次调用都是心智负担 • 单文件内上下文紧凑，一次 Read 即可覆盖完整逻辑，修改更安全 • 若代码仅被单一入口使用，拆分的必要性在 AI 工作流下存疑  — 传统软件工程的「模块化最佳实践」在 LLM 语境下需要重新校准。 yetone 的观察点出了一个反直觉的趋势：AI 编程时代"
resource: "https://x.com/i/status/2035248424438649266"
tags:
  - "x-news"
  - "news"
  - "author:yetone"
timestamp: "2026-03-21T09:05:18.723Z"
x_tweet_id: "2035248424438649266"
x_author: "yetone"
x_handle: "yetone"
x_created_at: "2026-03-21T06:53:32.000Z"
x_engagement:
  likes: 24
  retweets: 3
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "agent-engineering-vs-product"
x_source: "crawler"
---

# LLM 时代「代码拆分」可能是个伪需求

## 摘要

**[AI 编程范式下，文件粒度需要重新被定义]**
• 多文件结构增加 LLM tool calling 次数，每次调用都是心智负担
• 单文件内上下文紧凑，一次 Read 即可覆盖完整逻辑，修改更安全
• 若代码仅被单一入口使用，拆分的必要性在 AI 工作流下存疑

—
传统软件工程的「模块化最佳实践」在 LLM 语境下需要重新校准。 yetone 的观察点出了一个反直觉的趋势：AI 编程时代，「少文件大文件」可能比「多文件小文件」更高效。

## 原文

有区别。

首先关于怎么拆，你怎么在一开始把它拆分成多个文件以及在以后的迭代过程中保持这个拆分呢？在一开始你起码要让 LLM 消耗心智去整理规划。其次在每次迭代的时候 LLM 都要消耗心智以保证这个规划不被破坏。

其次关于怎么合，如果一段逻辑被分散到多个文件的话，LLM  心智负担会很重的，关于整段逻辑的一次修改最乐观的情况：one Grep tool  + multiple Read tools + multiple/one MultiEdit tools（可能只需要修改一个文件） + multiple Read tools（二次验证这次修改让这个逻辑不崩溃）

如果是只有一个文件的最乐观情况：one Grep tool + one Read tool（上下文紧凑到一个窗口可以装下） + one MultiEdit tool + one Read tool（二次验证这次修改让这个逻辑不崩溃）

每多一个 tool calling 对 LLM 来说就是一个大的心智消耗。

最后但又是最重要的：既然这个文件里的内容从来没被别的文件用到的话，拆出去的必要又是什么呢？


## 元信息

- **作者**: yetone ([@yetone](https://x.com/yetone))
- **发布时间**: 2026-03-21T06:53:32.000Z
- **抓取时间**: 2026-03-21T09:05:18.723Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 24 · 🔄 3 · 💬 4 · 🔖 0 · 👁 0
- **关联主题**: [agent-engineering-vs-product](/concepts/agent-engineering-vs-product.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2035248424438649266) — @yetone (yetone)
[2] [Author page](/entities/authors/yetone.md)
[3] [Related topic](/concepts/agent-engineering-vs-product.md)
