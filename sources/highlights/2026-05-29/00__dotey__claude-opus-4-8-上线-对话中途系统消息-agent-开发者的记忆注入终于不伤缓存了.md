---
type: "source"
title: "Claude Opus 4.8 上线「对话中途系统消息」，Agent 开发者的记忆注入终于不伤缓存了"
description: "**[一句话核心判断]**  Anthropic 终于在 API 层面支持 mid-conversation system messages，这个能力对 Agent 开发者而言是架构级的解放。  **信息增量：** - 4.8 之前 Claude 不能发 type=system 的消息，系统提示词只能在对话最前面注入，导致中途修改只能通过 user message 强压，权重不够 - 新方案类似「"
resource: "https://x.com/i/status/2060404667423596843"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-29T19:18:11.028Z"
x_tweet_id: "2060404667423596843"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-29T16:55:27.000Z"
x_engagement:
  likes: 29
  retweets: 2
  replies: 15
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2060404667423596843"
created: "2026-05-29"
updated: "2026-06-26"
sha256: "9e2bee7276a4623bca04a28c8a0b0150af48a0cf229c3a7f51e3c6d31468f4fb"
sources:
  - "/sources/highlights/2026-05-29/00__dotey__claude-opus-4-8-上线-对话中途系统消息-agent-开发者的记忆注入终于不伤缓存了.md"
---

# Claude Opus 4.8 上线「对话中途系统消息」，Agent 开发者的记忆注入终于不伤缓存了

## 摘要

**[一句话核心判断]**

Anthropic 终于在 API 层面支持 mid-conversation system messages，这个能力对 Agent 开发者而言是架构级的解放。

**信息增量：**
- 4.8 之前 Claude 不能发 type=system 的消息，系统提示词只能在对话最前面注入，导致中途修改只能通过 user message 强压，权重不够
- 新方案类似「后续注入」，可修改原始 System Prompt 且不影响 Prompt Caching，效率与灵活性兼得
- Claude Code 之前用 <system-reminder> 这种 workaround 的历史终于可以终结

**影响：**
- 状态机类 Agent（需要中途切换角色/权限）的实现成本大幅下降
- 轻量级 Agent 编排不再需要为绕过 system prompt 限制而设计奇怪的消息结构


gakki 锐评：Claude Code 那套 workaround 居然撑了这么久，侧面说明 Anthropic 对开发者工作流的感知其实挺迟钝的——好消息是这次补上了。

## 原文

Claude Opus 4.8 发布的同时，Anthropic 还上线了一个 API 层面的新能力：mid-conversation system messages（对话中途系统消息）。对于做 Agent 开发的会很有用。

简单来说它就是类似于后续注入的方式修改原始系统提示词（System Prompt），并且不会影响 Prompt Caching。

4.8 之前 Claude 是不能发送类型是 system 的消息，只能支持 user 或者 assistant 消息，system prompt 只能在最前面。

所以 Claude Code 之前是用的一种特殊的消息内容：<system-reminder>，尝试覆盖系统消息指令。

举个例子，你在初始 system message 指定这个 Agent 是一个系统设计师的角色，擅长做系统设计，但是不允许写代码，只写文档。

然后随着任务推进，现在得让这个 Agent 开始写代码了，但你就算通过 user message 去让它可以写代码，因为权重不够高，它还是会倾向于不写代码写文档。

现在有了 mid-conversation system messages，你就可以新加一条指令，明确要求它转变角色变成一个开发工程师，不必再遵守之前不写代码只写文档的约定，并且 mid-conversation system messages 的优先级更高，能覆盖原始 system message 的设定。

这个功能目前只支持 Claude Opus 4.8，只在 Anthropic 自家 API 和 AWS 上的 Claude Platform 可用，Bedrock、Vertex AI、Microsoft Foundry 都不支持。系统消息不能放在对话开头（开头还是用顶层 system 字段），也不能连续放两条，必须跟在 user 消息后面。

对于普通用户，这功能无需关心。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-29T16:55:27.000Z
- **抓取时间**: 2026-05-29T19:18:11.028Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 29 · 🔄 2 · 💬 15 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-ecosystem](/concepts/claude-code-ecosystem.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2060404667423596843) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/claude-code-ecosystem.md)
