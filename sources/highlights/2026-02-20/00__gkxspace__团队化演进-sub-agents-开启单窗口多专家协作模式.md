---
type: "source"
title: "团队化演进：sub-agents 开启单窗口多专家协作模式"
description: "**[核心逻辑]** 通过 sessions_spawn 与 sessions_send 实现从“单模型对话”到“专家团队并行”的架构升级。 - 无需复杂多 Bot 编排，在单一私聊窗口即可完成总指挥调度与子任务并行。 - 临时专家（sessions_spawn）处理特定子任务，任务结束后数据回传主会话，保持上下文整洁。 - 将 Agent 管理从“运维配置”转化为“指令流控制”。  [gakki"
resource: "https://x.com/i/status/2024625293202468984"
tags:
  - "x-news"
  - "highlights"
  - "author:gkxspace"
timestamp: "2026-02-20T01:00:37.791Z"
x_tweet_id: "2024625293202468984"
x_author: "余温"
x_handle: "gkxspace"
x_created_at: "2026-02-19T23:21:00.000Z"
x_engagement:
  likes: 24
  retweets: 9
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2024625293202468984"
created: "2026-02-19"
updated: "2026-06-26"
sha256: "d963764b0f6689fa3fbf38341d8f04681cd96b22a7f540c0782ebe7f106454d5"
sources:
  - "/sources/highlights/2026-02-20/00__gkxspace__团队化演进-sub-agents-开启单窗口多专家协作模式.md"
---

# 团队化演进：sub-agents 开启单窗口多专家协作模式

## 摘要

**[核心逻辑]** 通过 sessions_spawn 与 sessions_send 实现从“单模型对话”到“专家团队并行”的架构升级。
- 无需复杂多 Bot 编排，在单一私聊窗口即可完成总指挥调度与子任务并行。
- 临时专家（sessions_spawn）处理特定子任务，任务结束后数据回传主会话，保持上下文整洁。
- 将 Agent 管理从“运维配置”转化为“指令流控制”。

[gakki 的锐评]：这才是 Agent 该有的样子：需要时招之即来，干完活挥之即去。让模型各司其职，而不是逼着一个模型当全能冠军。

## 原文

配置多只🦞让他们协作起来，确实比较麻烦，想体验多 agent 协作也可以先试一试 sub-agents。

可以创建临时/长期专家，并且不需要人为进行复杂配置和维护。

在一个私聊窗口里就能完成“总指挥调度 + 子任务并行”：

需要时用 sessions_spawn 拉起临时子会话（可指定模型、超时、是否保留）

任务结束后再用 sessions_send 继续追问、补充、迭代。

复杂任务能拆分并行、上下文更干净、主会话只做收口，像一个小团队协作。

而且不用搭复杂的多bot编排：
先用已有 agent + 临时专家就够。高频场景再升级成长期 agent（独立人格/权限/路由）。

当然，能把sessions_spawn、sessions_send等掌握，配置一些规则，也能拓展很多玩法，等我研究和实践一下，再出一期教程。


## 元信息

- **作者**: 余温 ([@gkxspace](https://x.com/gkxspace))
- **发布时间**: 2026-02-19T23:21:00.000Z
- **抓取时间**: 2026-02-20T01:00:37.791Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 24 · 🔄 9 · 💬 8 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2024625293202468984) — @gkxspace (余温)
[2] [Author page](/entities/authors/gkxspace.md)
