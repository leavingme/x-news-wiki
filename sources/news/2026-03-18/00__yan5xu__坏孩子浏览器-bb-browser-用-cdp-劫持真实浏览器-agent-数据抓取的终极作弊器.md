---
type: "source"
title: "「坏孩子浏览器」bb-browser：用 CDP 劫持真实浏览器，Agent 数据抓取的终极作弊器"
description: "**不是无头浏览器，不是偷 Cookie，而是直接操控你的真实浏览器。**  • bb-browser 通过 Chrome 插件 + CDP（Chrome DevTools Protocol）直接在用户已登录的浏览器中执行 eval，绕过所有登录态和鉴权反爬机制 • 支持 Reddit、Twitter、GitHub、小红书、知乎、B站等 50+ 平台，将「已登录用户」变成 Agent 的数据接口 "
resource: "https://x.com/i/status/2032858943874281782"
tags:
  - "x-news"
  - "news"
  - "author:yan5xu"
timestamp: "2026-03-18T16:28:00.965Z"
x_tweet_id: "2032858943874281782"
x_author: "yan5xu"
x_handle: "yan5xu"
x_created_at: "2026-03-14T16:38:35.000Z"
x_engagement:
  likes: 2675
  retweets: 557
  replies: 215
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "agent-data-intelligence-infra"
x_source: "bookmark"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2032858943874281782"
created: "2026-03-14"
updated: "2026-06-26"
sha256: "658a227f5dfb7d534ef9906bb67557a7b0d5b00cae50adc7e71fc1242b06ffb6"
sources:
  - "/sources/news/2026-03-18/00__yan5xu__坏孩子浏览器-bb-browser-用-cdp-劫持真实浏览器-agent-数据抓取的终极作弊器.md"
---

# 「坏孩子浏览器」bb-browser：用 CDP 劫持真实浏览器，Agent 数据抓取的终极作弊器

## 摘要

**不是无头浏览器，不是偷 Cookie，而是直接操控你的真实浏览器。**

• bb-browser 通过 Chrome 插件 + CDP（Chrome DevTools Protocol）直接在用户已登录的浏览器中执行 eval，绕过所有登录态和鉴权反爬机制
• 支持 Reddit、Twitter、GitHub、小红书、知乎、B站等 50+ 平台，将「已登录用户」变成 Agent 的数据接口
• 作者坦言「真的很丧良心」——这种方式几乎无法被传统前端防护检测

——

这是 Agent 数据情报基础设施的「黑暗进化」。当 Agent 可以直接「寄生」在人类用户的真实会话中，数据围墙的合法性正在被重新定义。大厂的前端防爬团队，遇到了降维打击。

## 原文

😅嗯，bb-browser，badboy browser，坏孩子浏览器来了，真的很丧良心，但真的很好用。

现在你可以用 bb-browser site 的方式直接拉到任何网站的信息，目前支持 Reddit、Twitter、GitHub、Hacker News、小红书、知乎、B站、微博、豆瓣、YouTube，50+ 个命令，我会持续更新。

当然能做到信息获取这件事不稀奇，我也是看到 @jakevin7  的 twitter-cli 的启发，才做的。但 bb-browser 的实现方式非常丧良心 — 我是通过 Chrome 插件 + CDP 直接操控你真实的浏览器。不是无头浏览器，不是偷 Cookie，不是模拟请求。你已登录了，它就直接用你的登录态。它直接在浏览器 console 里面跑 eval，以前爬虫最麻烦的登录态、还有各种鉴权都没有了😂。（这种方式真的。。。太作弊了，我都能想到哪些大厂前端发现我在这么搞，会怎么骂我，因为真的很难防）

另外我还在命令行里面埋了 guide 命令，也就是说你只要装了 bb-browser CLI 或 MCP，跟你的 Agent 说"我需要把 XX 网站 CLI 化"，它就能帮你做了！！


## 元信息

- **作者**: yan5xu ([@yan5xu](https://x.com/yan5xu))
- **发布时间**: 2026-03-14T16:38:35.000Z
- **抓取时间**: 2026-03-18T16:28:00.965Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2675 · 🔄 557 · 💬 215 · 🔖 0 · 👁 0
- **关联主题**: [agent-data-intelligence-infra](/concepts/agent-data-intelligence-infra.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2032858943874281782) — @yan5xu (yan5xu)
[2] [Author page](/entities/authors/yan5xu.md)
[3] [Related topic](/concepts/agent-data-intelligence-infra.md)
