---
type: "X Tweet"
title: "Claude Design 用 Protobuf 替代 JSON：协议层省流量，schema 藏在客户端 JS"
description: "**宝玉披露 Claude Design 与服务器通信采用 Protocol Buffers 而非 JSON，传输更省、更快；schema 仅存于客户端 JS，可作为协议逆向入口。**  • 架构选择：二进制序列化替代文本 JSON，传输效率显著提升 • 封闭性：协议无 schema 公开，普通用户难以观察通信内容 • 逆向路径：客户端 JS 保留 schema，是少有的协议层分析样本  设计工具"
resource: "https://x.com/i/status/2063480178362224725"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-07T07:19:12.782Z"
x_tweet_id: "2063480178362224725"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-07T04:36:26.000Z"
x_engagement:
  likes: 8
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-design-disruption"
x_source: "crawler"
---

# Claude Design 用 Protobuf 替代 JSON：协议层省流量，schema 藏在客户端 JS

## 摘要

**宝玉披露 Claude Design 与服务器通信采用 Protocol Buffers 而非 JSON，传输更省、更快；schema 仅存于客户端 JS，可作为协议逆向入口。**

• 架构选择：二进制序列化替代文本 JSON，传输效率显著提升
• 封闭性：协议无 schema 公开，普通用户难以观察通信内容
• 逆向路径：客户端 JS 保留 schema，是少有的协议层分析样本

设计工具类产品在「传输效率」和「协议黑盒」之间的权衡值得持续观察——尤其当客户端 JS 留出可分析的入口时，独立研究者就多了一个低成本观察窗口。

## 原文

Claude Design 跟服务器的通信协议不是 JSON 文本，而是 Protocol Buffers（protobuf），这样可以省流量、传得快，没有 schema 看不到传的是啥。不过它客户端 js 有 schema，花点心思就能找得到


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-07T04:36:26.000Z
- **抓取时间**: 2026-06-07T07:19:12.782Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 8 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [claude-design-disruption](/concepts/claude-design-disruption.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2063480178362224725) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/claude-design-disruption.md)
