---
type: "X Tweet"
title: "smux：用tmux作为AI代理间消息总线，轻量级多Agent协作的新思路"
description: "**【终端是所有CLI代理的最大公约数——这个洞察价值一套框架】**  smux用tmux窗格作为AI代理之间的共享接口，tmux-bridge CLI实现跨窗格读写。任何能跑bash的代理（Claude Code、Codex、Gemini CLI、shell脚本）都能接入，无需专用通信协议。  • **抽象层级选择精妙**：不发明新协议，用终端作为消息总线，比LangGraph、CrewAI更轻"
resource: "https://x.com/i/status/2038506962275737678"
tags:
  - "x-news"
  - "news"
  - "author:chenchengpro"
timestamp: "2026-03-30T13:25:00.644Z"
x_tweet_id: "2038506962275737678"
x_author: "陈成"
x_handle: "chenchengpro"
x_created_at: "2026-03-30T06:41:48.000Z"
x_engagement:
  likes: 243
  retweets: 29
  replies: 17
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# smux：用tmux作为AI代理间消息总线，轻量级多Agent协作的新思路

## 摘要

**【终端是所有CLI代理的最大公约数——这个洞察价值一套框架】**

smux用tmux窗格作为AI代理之间的共享接口，tmux-bridge CLI实现跨窗格读写。任何能跑bash的代理（Claude Code、Codex、Gemini CLI、shell脚本）都能接入，无需专用通信协议。

• **抽象层级选择精妙**：不发明新协议，用终端作为消息总线，比LangGraph、CrewAI更轻，跨框架协作天然可行。
• **安全盲点**：共享终端本质是无监控通道——一个代理被注入恶意指令，另一个会无条件执行。这是生产级部署的死穴。
• **趋势信号**：Agent间通信正在从「重型框架」向「轻量协议」收敛，但安全边界尚未被认真讨论。

gakki锐评：选对抽象层级是工程上的聪明，但「无监控通道」在加密货币Agent场景里是灾难——你那30亿美元的头寸，靠什么保证不被隔壁Agent误操作？

## 原文

还在手动把 Claude Code 的输出复制粘贴给 Codex？可以停了。

@shawn_pana 做了个叫 smux 的工具，核心思路极简：用 tmux 终端作为 AI 代理之间的共享接口。不需要 API，不需要专门的通信协议，每个代理跑在独立的 tmux 窗格里，通过一个叫 tmux-bridge 的 CLI 读取和写入其他窗格的内容。

你对 Claude Code 说"在新窗格里测试一下"或"跟旁边那个窗格对话"，它就自己去做了。Claude Code、Codex、Gemini CLI，甚至普通 shell 脚本，任何能跑 bash 的代理都能接入，互相组合随意搭配。

精妙之处在于抽象层级选对了——终端是所有 CLI 代理的最大公约数，不用发明新协议就能让代理间通信。有评论说得好：这就像把终端当成了消息总线，比 LangGraph、CrewAI 那些框架级方案更轻，任何两个代理不管底层是什么框架都能协作。

当然也有人提出了尖锐问题：两个代理同时改同一个文件怎么办？共享终端本质上是无监控通道，一个代理被注入恶意指令另一个会无条件执行。目前还是早期，但方向已经很清楚了。

2026 年的趋势：AI 代理之间的协作不再需要复杂的编排框架，一个终端窗口就够了。

https://t.co/VSHON3c4FV


## 元信息

- **作者**: 陈成 ([@chenchengpro](https://x.com/chenchengpro))
- **发布时间**: 2026-03-30T06:41:48.000Z
- **抓取时间**: 2026-03-30T13:25:00.644Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 243 · 🔄 29 · 💬 17 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2038506962275737678) — @chenchengpro (陈成)
[2] [Author page](/entities/authors/chenchengpro.md)
