---
type: "X Tweet"
title: "CDP直取浏览器：Agent自动化告别Puppeteer的「登录态难题」终结方案"
description: "**[浏览器自动化进入「原生接管」时代]** • 无需扩展、无需新开浏览器，直接通过Chrome DevTools Protocol复用用户当前标签页，带全量Cookie与登录态 • 100+标签页稳定运行，daemon自动回收，零npm依赖，兼容Claude Code/Cursor/Amp等主流Agent • 价值：解决了Agent浏览器操作最大痛点——身份状态隔离导致的重复登录与人工介入  *"
resource: "https://x.com/i/status/2032806514692599813"
tags:
  - "x-news"
  - "highlights"
  - "author:TokenMore"
timestamp: "2026-03-15T00:42:34.781Z"
x_tweet_id: "2032806514692599813"
x_author: "（TokenMore)萌小主🍣"
x_handle: "TokenMore"
x_created_at: "2026-03-14T13:10:15.000Z"
x_engagement:
  likes: 151
  retweets: 31
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 90
x_related_topic: "agent-browser-token-efficiency"
x_source: "crawler"
---

# CDP直取浏览器：Agent自动化告别Puppeteer的「登录态难题」终结方案

## 摘要

**[浏览器自动化进入「原生接管」时代]**
• 无需扩展、无需新开浏览器，直接通过Chrome DevTools Protocol复用用户当前标签页，带全量Cookie与登录态
• 100+标签页稳定运行，daemon自动回收，零npm依赖，兼容Claude Code/Cursor/Amp等主流Agent
• 价值：解决了Agent浏览器操作最大痛点——身份状态隔离导致的重复登录与人工介入

**gakki锐评**：这不是又一个爬虫工具，而是Agent「数字身份继承」的关键基建——当Agent能无缝接管你的浏览器上下文，「无人值守」才算真正落地。

## 原文

给 AI Agent 装上眼睛和手——chrome-cdp-skill

不用 Puppeteer，不装扩展，不新开浏览器。
直接连你正在用的 Chrome，带登录态、带 Cookie、带所有上下文。

原理：通过 Chrome 原生远程调试 WebSocket（CDP）接管 tab，每个 tab 起一个轻量 daemon 持久保持连接，弹一次「Allow debugging」，之后静默复用。

支持的操作覆盖日常 agent 所需的全部场景

运行时只依赖 Node.js 22+，零 npm install。
100+ 标签页稳定运行，daemon 20 分钟无活动自动退出不泄漏。

兼容 Claude Code、Cursor、Amp 等主流 agent。

➜ https://t.co/tnCuWB0Jfk

#AI #Agent #ChromeDevTools #ClaudeCode


## 元信息

- **作者**: （TokenMore)萌小主🍣 ([@TokenMore](https://x.com/TokenMore))
- **发布时间**: 2026-03-14T13:10:15.000Z
- **抓取时间**: 2026-03-15T00:42:34.781Z
- **精选类别**: ✨ 亮点
- **优先级**: 90
- **互动**: ❤️ 151 · 🔄 31 · 💬 4 · 🔖 0 · 👁 0
- **关联主题**: [agent-browser-token-efficiency](/concepts/agent-browser-token-efficiency.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2032806514692599813) — @TokenMore (（TokenMore)萌小主🍣)
[2] [Author page](/entities/authors/tokenmore.md)
[3] [Related topic](/concepts/agent-browser-token-efficiency.md)
