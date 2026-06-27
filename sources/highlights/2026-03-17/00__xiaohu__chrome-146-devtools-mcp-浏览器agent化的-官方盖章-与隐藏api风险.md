---
type: "X Tweet"
title: "Chrome 146 DevTools MCP：浏览器Agent化的「官方盖章」与隐藏API风险"
description: "**浏览器不再是Agent的「屏幕」，而是「操控对象」** • Chrome 146 内置 MCP 让AI助手可直接读取页面内容、模拟用户操作，甚至抓取隐藏API实现自动化发布 • 用户实测案例：Claude Code 通过观察人工操作学习，反向破解网站后台接口完成自动发文 • 技术意义：浏览器正式成为 Agent 的「操控对象」，而非被动浏览的「展示层」 • 安全边界：隐藏API暴露风险骤增，网"
resource: "https://x.com/i/status/2033537096078815579"
tags:
  - "x-news"
  - "highlights"
  - "author:xiaohu"
timestamp: "2026-03-17T00:43:09.428Z"
x_tweet_id: "2033537096078815579"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-03-16T13:33:19.000Z"
x_engagement:
  likes: 337
  retweets: 52
  replies: 17
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-browser-token-efficiency"
x_source: "crawler"
---

# Chrome 146 DevTools MCP：浏览器Agent化的「官方盖章」与隐藏API风险

## 摘要

**浏览器不再是Agent的「屏幕」，而是「操控对象」**
• Chrome 146 内置 MCP 让AI助手可直接读取页面内容、模拟用户操作，甚至抓取隐藏API实现自动化发布
• 用户实测案例：Claude Code 通过观察人工操作学习，反向破解网站后台接口完成自动发文
• 技术意义：浏览器正式成为 Agent 的「操控对象」，而非被动浏览的「展示层」
• 安全边界：隐藏API暴露风险骤增，网站「前端屏障」逻辑需重新设计

**gakki锐评**：这是浏览器Agent化的「官方盖章」时刻，但也暴露了 Agent 时代的新威胁向量——如果AI能看懂你的操作并自动逆向，网站的安全边界在哪里？

## 原文

Chrome DevTools MCP 新功能

AI 助手直接连上你正在浏览的页面，可以读取你正在浏览的内容并可直接替你操作

我今天试了下确实是牛P的功能，直接把我网站给破解了😅，实现了内容自动发布...

Claude code 可以看到我打开的网页，我亲自给它演示我怎么操作网站发帖的， 它试试抓取数据后台数据，拿到网站的隐藏API...

明天我会写个文章详细介绍这个过程

你们可以先看看这个功能咋用，先了解下，操练起来，哈哈哈

升级到Chrome 146，在 Chrome 里开启远程调试

地址栏输入 chrome://inspect/#remote-debugging，打开开关就行

即可开启Chrome DevTools MCP 新功能


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-03-16T13:33:19.000Z
- **抓取时间**: 2026-03-17T00:43:09.428Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 337 · 🔄 52 · 💬 17 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2033537096078815579) — @xiaohu (小互)
