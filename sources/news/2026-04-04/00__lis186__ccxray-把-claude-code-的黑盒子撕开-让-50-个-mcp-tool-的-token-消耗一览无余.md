---
type: "X Tweet"
title: "ccxray：把 Claude Code 的黑盒子撕开，让 50 个 MCP tool 的 token 消耗一览无余"
description: "**[Claude Code 的不透明正在催生一个全新的\"调试层\"基础设施赛道]**  Claude Code 装了 50 多个 MCP server 和各种 skill，但用户根本不知道哪些被真正调用、每个 tool call 烧了多少 token、system prompt 里塞了什么。ccxray 通过透明 proxy 卡在 Claude Code 和 Anthropic API 中间，即时"
resource: "https://x.com/i/status/2039988456055869576"
tags:
  - "x-news"
  - "news"
  - "author:lis186"
timestamp: "2026-04-04T12:42:55.962Z"
x_tweet_id: "2039988456055869576"
x_author: "Justin Lee"
x_handle: "lis186"
x_created_at: "2026-04-03T08:48:43.000Z"
x_engagement:
  likes: 151
  retweets: 31
  replies: 9
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# ccxray：把 Claude Code 的黑盒子撕开，让 50 个 MCP tool 的 token 消耗一览无余

## 摘要

**[Claude Code 的不透明正在催生一个全新的"调试层"基础设施赛道]**

Claude Code 装了 50 多个 MCP server 和各种 skill，但用户根本不知道哪些被真正调用、每个 tool call 烧了多少 token、system prompt 里塞了什么。ccxray 通过透明 proxy 卡在 Claude Code 和 Anthropic API 中间，即时 dashboard 展示：每个 tool call 的 token 消耗、system prompt 版本追踪与 diff 对比、session 按项目自动分组。

**这不只是调试工具——它揭示了一个根本矛盾：Claude Code 越强大，用户对它的理解越少。ccxray 填补的空白，恰恰是 Agent 规模化后最需要的可观测性基础设施。**

gakki锐评：当社区开始自己造"透视眼镜"看 Claude Code，说明官方文档和可观测性已经严重滞后于实际使用规模。这是痛点，也是机会。

## 原文

用 Claude Code 接了一堆 MCP server、裝了各種 skill，但你知道哪些真的有在用嗎？
你：「我裝了 GitHub MCP、裝了 5 個 skill⋯⋯」
Claude Code：（黑盒子，什麼都看不到）
你不知道：
— 50 幾個 MCP tool 到底哪些被呼叫過
— 每個 tool call 燒掉多少 token
— system prompt 塞了多少你不知道的東西
— 200K context window 到底被什麼吃掉
一行指令，黑盒子變透明箱：

npx ccxray claude

ccxray 是一個透明 proxy，卡在 Claude Code 和 Anthropic API 中間，錄下每一筆 request/response，即時 dashboard 讓你看到裡面到底發生什麼事。

— 每個 tool call 一目瞭然：誰被呼叫、花多少 token
— System prompt 版本追蹤：自動偵測變更、diff 比對
— Token 精算：input/output/cache 拆解，花費到分
— Session 自動分組：依專案、目錄整理

GitHub: https://t.co/Vu8OXNdUUZ
#ClaudeCode #MCP #AI #DevTools #ccxray


## 元信息

- **作者**: Justin Lee ([@lis186](https://x.com/lis186))
- **发布时间**: 2026-04-03T08:48:43.000Z
- **抓取时间**: 2026-04-04T12:42:55.962Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 151 · 🔄 31 · 💬 9 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2039988456055869576) — @lis186 (Justin Lee)
[2] [Author page](/entities/authors/lis186.md)
