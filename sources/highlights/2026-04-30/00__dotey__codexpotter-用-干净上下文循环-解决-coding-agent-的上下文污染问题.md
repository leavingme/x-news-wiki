---
type: "source"
title: "CodexPotter：用「干净上下文循环」解决 Coding Agent 的上下文污染问题"
description: "**[CodexPotter 的设计模式——反复用全新上下文迭代修正——暴露了当前 Coding Agent 的核心痛点：上下文越长越脏。]**  - 工具本身是 CLI，后台启动 Codex CLI，每轮用干净上下文对照 MAIN.md 检查代码、修正、再检查 - 默认 6 轮迭代直到结果与目标文件一致，适合「目标明确的执行型任务」而非交互式开发 - 本质是把「多轮对话」拆成「多轮独立会话」，绕"
resource: "https://x.com/i/status/2049892890323697859"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-30T19:19:18.183Z"
x_tweet_id: "2049892890323697859"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-30T16:45:24.000Z"
x_engagement:
  likes: 53
  retweets: 2
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2049892890323697859"
created: "2026-04-30"
updated: "2026-06-26"
sha256: "2fa52ab15135c3cc87eb46175b0ddf9d381f46621b58b086d9642c345409748c"
sources:
  - "/sources/highlights/2026-04-30/00__dotey__codexpotter-用-干净上下文循环-解决-coding-agent-的上下文污染问题.md"
---

# CodexPotter：用「干净上下文循环」解决 Coding Agent 的上下文污染问题

## 摘要

**[CodexPotter 的设计模式——反复用全新上下文迭代修正——暴露了当前 Coding Agent 的核心痛点：上下文越长越脏。]**

- 工具本身是 CLI，后台启动 Codex CLI，每轮用干净上下文对照 MAIN.md 检查代码、修正、再检查
- 默认 6 轮迭代直到结果与目标文件一致，适合「目标明确的执行型任务」而非交互式开发
- 本质是把「多轮对话」拆成「多轮独立会话」，绕过上下文污染和注意力衰减

gakki 锐评：这是一个典型的「工程 workaround 变成架构范式」的信号。当前 Agent 的上下文管理仍然是最大的工程债务，CodexPotter 的「干净会话循环」思路可能比它本身更值得记住。

## 原文

试用下来 CodexPotter 不错，推荐下。它不是基于 Codex 插件机制，它本身是一个 cli，然后会后台启动 codex cli，把指令传给 codex，同步显示 codex cli 结果。

CodexPotter 先把想要的结果写进一个 MAIN.md 文件，然后工具在后台不停地启动新的 Codex 会话，每一轮都用全新、干净的上下文，对照 MAIN.md 检查代码、修正、再检查、再修正，直到结果跟你写的一致才停。

默认最多是 6 轮，但是你可以通过配置修改数字。

使用上需要注意，CodexPotter 适合目标明确的任务，比如“按照这个设计文档实现订阅系统”，不适合需要来回讨论的交互式开发。它是个任务执行器，不是聊天伙伴。

顺便说一下：Ralph 这个名字的来源是《辛普森一家》那个爱重复同一句话的小孩 Ralph Wiggum pattern。

https://t.co/RTRXbStF67


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-30T16:45:24.000Z
- **抓取时间**: 2026-04-30T19:19:18.183Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 53 · 🔄 2 · 💬 8 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2049892890323697859) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
