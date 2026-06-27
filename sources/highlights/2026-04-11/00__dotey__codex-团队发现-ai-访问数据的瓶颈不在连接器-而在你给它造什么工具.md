---
type: "X Tweet"
title: "Codex 团队发现 AI 访问数据的瓶颈不在连接器，而在你给它造什么工具"
description: "**「MCP 解决能不能访问，但原始数据太大太杂时，更好的做法是封装成 CLI」**  OpenAI Codex 团队的 Nick Baumann 分享核心工作流：与其每次把文档、日志、API 输出直接丢给 AI，不如造专用命令行小工具。逻辑：Codex 本身擅长命令行，会搜索、加 flag 筛选、会把上一个命令结果串到下一个。  他日常用的三个 CLI：(1) codex-threads——本地"
resource: "https://x.com/i/status/2042777337398210713"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-11T12:43:46.639Z"
x_tweet_id: "2042777337398210713"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-11T01:30:44.000Z"
x_engagement:
  likes: 813
  retweets: 133
  replies: 23
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex 团队发现 AI 访问数据的瓶颈不在连接器，而在你给它造什么工具

## 摘要

**「MCP 解决能不能访问，但原始数据太大太杂时，更好的做法是封装成 CLI」**

OpenAI Codex 团队的 Nick Baumann 分享核心工作流：与其每次把文档、日志、API 输出直接丢给 AI，不如造专用命令行小工具。逻辑：Codex 本身擅长命令行，会搜索、加 flag 筛选、会把上一个命令结果串到下一个。

他日常用的三个 CLI：(1) codex-threads——本地建索引检索自己历史 Codex 对话，把做得好的一次对话提炼成 skill；(2) slack-cli——在 Slack 里精准找信息；(3) 第三个未完整展示。

关键范式转变：从「给 AI 喂数据」到「给 AI 造趁手的工具」。CLI 是 AI 的外骨骼，而非数据通道。

gakki：MCP 解决的是连接问题，但 Baumann 的洞察指向更本质的东西——AI 时代的工程纪律不是「如何让 AI 访问更多」，而是「如何让 AI 的每次访问都更高效」。CLI 封装是 Agent 工具化的最小单元。

## 原文

OpenAI Codex 团队的 Nick Baumann 分享了一个他日常用 Codex 干活的心得：与其每次把一堆文档、日志、API 输出丢给 AI 去啃，不如给它造几个专用的命令行小工具。

他的逻辑很直接：MCP 连接器（比如 Slack、Linear、Sentry 这些）解决的是“能不能访问”的问题，但很多时候原始数据太大、太杂，AI 拿到手也处理得费劲。这时候更好的做法是把常用操作封装成一个带参数、输出 JSON、有帮助文档的 CLI 命令。Codex 本身就擅长用命令行，它会搜索、会加 flag 筛选、会把上一个命令的结果串到下一个命令里，不需要你教它怎么调。

他自己实际在用三个这样的 CLI：

【1】codex-threads：检索自己以前的 Codex 对话记录

Codex 的会话存档噪音很多，直接让 AI 读原始记录又慢又乱。他做了个工具在本地建索引，可以搜索、定位、读取历史会话。典型用法是找到一次做得好的对话，然后把里面的模式提炼成 skill（可复用的工作指南）。

【2】slack-cli：在 Slack 里精准找信息

场景很具体：有人在某个 Slack 频道讨论过一个技术决策的理由，你知道讨论过但找不到在哪。这个 CLI 可以让 Codex 搜索、定位到具体的消息链、拉上下文、引用关键消息。它底层还是走 Codex 的授权网关，权限没变，只是把交互方式从扔一坨聊天记录变成了一条命令拿到你要的东西。

【3】typefully-cli：写推文和排期发布

他用 Typefully 管理社交内容，但不想每次都让 Codex 重新学一遍 Typefully 的 API。于是让 Codex 读 API 文档，编译出一个 Rust 写的小 CLI，只暴露他常用的几个操作。配套的 skill 里还写了一条规矩：不许自动发布、排期或删除内容，除非他明确要求。

他把整个方法论总结成了一篇教程发到 OpenAI 开发者文档上，还配了一个 cli-creator skill 帮你用 Codex 自己造 CLI。

这个思路对用 Claude Code 的人同样适用。核心就一句话：如果你发现自己反复在给 AI 喂同一类乱糟糟的数据，那就别再解释了，给它造个命令。

Codex 团队还搞了一个 Skill 叫 cli-creator：https://t.co/nF6K4Ci4tJ


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-11T01:30:44.000Z
- **抓取时间**: 2026-04-11T12:43:46.639Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 813 · 🔄 133 · 💬 23 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2042777337398210713) — @dotey (宝玉)
