---
type: "source"
title: "Claude Code的/btw机制：单循环Agent如何实现「插嘴模式」"
description: "**[交互范式突破]** /btw在不破坏ReAct单循环简洁性的前提下，通过「降级调用」（无工具、单次响应）实现轻量级侧信道交互——这是sub-agent的「逆运算」。  **信息增量：** • 该功能最早出现于2025年12月二进制中（v2.0.73），2026年3月正式完善 • /btw能看到完整对话上下文，但无工具访问权限，形成「只读并行认知」 • 为长任务执行中的即时干预提供了优雅的架构"
resource: "https://x.com/i/status/2031737194910761396"
tags:
  - "x-news"
  - "highlights"
  - "author:blackanger"
timestamp: "2026-03-12T00:42:31.340Z"
x_tweet_id: "2031737194910761396"
x_author: "AlexZ 🦀"
x_handle: "blackanger"
x_created_at: "2026-03-11T14:21:09.000Z"
x_engagement:
  likes: 143
  retweets: 21
  replies: 9
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 88
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2031737194910761396"
created: "2026-03-11"
updated: "2026-06-26"
sha256: "e188ccd34fd3c2fc3b33eaa7d34ab0b1789b9c906778ba394462fcfbd32720c9"
sources:
  - "/sources/highlights/2026-03-12/88__blackanger__claude-code的-btw机制-单循环agent如何实现-插嘴模式.md"
---

# Claude Code的/btw机制：单循环Agent如何实现「插嘴模式」

## 摘要

**[交互范式突破]** /btw在不破坏ReAct单循环简洁性的前提下，通过「降级调用」（无工具、单次响应）实现轻量级侧信道交互——这是sub-agent的「逆运算」。

**信息增量：**
• 该功能最早出现于2025年12月二进制中（v2.0.73），2026年3月正式完善
• /btw能看到完整对话上下文，但无工具访问权限，形成「只读并行认知」
• 为长任务执行中的即时干预提供了优雅的架构方案

**gakki锐评：** 这是「不中断的打断」——Agent设计开始从「批处理思维」向「流式协作思维」进化，预示人机交互的下一站在哪。

## 原文

学习一下 /btw 的实现机制。

因为 claude code agent 采用的是经典的 ReAct（Reasoning and Acting）单循环。所以我很好奇这个 /btw 是如何在 单 loop 中优雅实现的。

以下内容是通过结合Piebald-AI 逆向工程项目、OutSight AI 的 MITM 代理分析，以及claude code 官方文档整理而来。

---

/btw 在不破坏 claude code 单 Loop 简洁性的前提下，通过"降级调用"（无工具、单次响应）实现轻量级的侧信道交互。

该功能最早在 2025 年 12 月前后出现在二进制中（约 v2.0.73），经过多版本迭代后于 2026 年 3 月正式完善，现已在官方文档中有明确说明。

根据 Claude Code 官方文档（https://t.co/96MDZSg6MM），/btw 被明确定位为 sub-agent 的"逆运算"：

/btw is the inverse of a subagent: it sees your full conversation but has no tools, while a subagent has full tools but starts with an empty context.

主 Loop 是"有上下文 + 有工具"的完整 Agent；/btw 和 sub-agent 分别是它在两个维度上的降维投影。

三者形成了一个完整的能力矩阵。

我主要是在想，/btw 实现机制是什么样的，才不会破坏 kv 缓存。

Claude Code 使用一套统一的 `<system-reminder>` XML 标签机制来动态修改模型行为。这不是 /btw 独有的，而是一个被约 40 个不同功能共用的基础设施（包括 Plan Mode、文件修改通知、Token 用量提醒等）。

根据 OutSight AI 通过 LiteLLM 代理拦截实际 API 调用的分析，system reminder 是作为 user 角色消息中的额外 text content block 注入的，而不是修改 system prompt。

结合官方文档确认"Claude cannot read files, run commands, or search when answering a side question"，工具禁用很可能采用了双重保险策略：

API 层： 通过设置 tool_choice: "none" 或省略 tools 数组，从 API 层面彻底阻断工具调用
Prompt 层： System reminder 中明确指示"you have NO tools available"，从模型行为层面强化约束

正常情况下 Claude Code 提供 18 个内置工具（Bash、Read、Write、Edit、MultiEdit、Glob、Grep、LS、WebFetch、TodoRead、TodoWrite、Task 等），在 btw 调用中全部被禁用。

/btw 不是在主 loop 中"插队"，而是发起了一个独立的 API 调用。主任务继续处理，btw 的调用并行执行。这解释了为什么它能在 Claude 还在工作的时候响应 side question。

/btw 的问答以可关闭的 overlay 形式展示，绝不写入主对话的 messages 数组。这意味着主任务恢复时，对话状态和 btw 之前完全一样，没有任何上下文污染。

由于 btw 调用复用了主对话的完整历史作为上下文，而 system prompt 和前面的对话 turn 都不变，只有最后一条 user message 是新的，因此前缀部分自然命中缓存。额外成本仅为 172 tokens 的 system reminder + 用户问题 + 模型响应。

用户按 Space、Enter 或 Escape 关闭 overlay 并返回主提示符。整个交互在终端的叠加层中完成，不影响底层的主对话流。

由于 btw 的问答完全不写入主对话历史，主任务恢复时发送的 messages 数组和 btw 之前完全一致。因此，主对话的 prompt cache 零损耗。这是整个设计中最优雅的部分。


## 元信息

- **作者**: AlexZ 🦀 ([@blackanger](https://x.com/blackanger))
- **发布时间**: 2026-03-11T14:21:09.000Z
- **抓取时间**: 2026-03-12T00:42:31.340Z
- **精选类别**: ✨ 亮点
- **优先级**: 88
- **互动**: ❤️ 143 · 🔄 21 · 💬 9 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-ecosystem](/concepts/claude-code-ecosystem.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2031737194910761396) — @blackanger (AlexZ 🦀)
[2] [Author page](/entities/authors/blackanger.md)
[3] [Related topic](/concepts/claude-code-ecosystem.md)
