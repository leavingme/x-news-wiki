---
type: "X Tweet"
title: "阿里 page-agent.js 撕开浏览器自动化的「低代码假象」：纯文本 DOM + LLM 原生嵌入才是终态"
description: "**一句话核心判断** page-agent.js 证明 GUI 自动化根本不需要 GUI——一行 script 标签 + 纯文本 DOM 读取，干掉 Selenium/Puppeteer 全家桶。  **信息增量** • 纯文本读取 DOM，不依赖截图或多模态，Token 消耗比 Playwright/MCP 方案低 1-2 个数量级 • 天然嵌入网页，SaaS 集成 AI 助手、语音驱动 ER"
resource: "https://x.com/i/status/2040974251310846131"
tags:
  - "x-news"
  - "news"
  - "author:billtheinvestor"
timestamp: "2026-04-06T12:43:19.606Z"
x_tweet_id: "2040974251310846131"
x_author: "Bill The Investor"
x_handle: "billtheinvestor"
x_created_at: "2026-04-06T02:05:55.000Z"
x_engagement:
  likes: 81
  retweets: 18
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 阿里 page-agent.js 撕开浏览器自动化的「低代码假象」：纯文本 DOM + LLM 原生嵌入才是终态

## 摘要

**一句话核心判断**
page-agent.js 证明 GUI 自动化根本不需要 GUI——一行 script 标签 + 纯文本 DOM 读取，干掉 Selenium/Puppeteer 全家桶。

**信息增量**
• 纯文本读取 DOM，不依赖截图或多模态，Token 消耗比 Playwright/MCP 方案低 1-2 个数量级
• 天然嵌入网页，SaaS 集成 AI 助手、语音驱动 ERP 流程、遗留系统自然语言访问——三个场景一张牌
• 12K stars，MIT 协议，阿里这次没有重复造轮子，而是直接重新定义了轮子的形状

**影响评估**
浏览器自动化赛道长期被「模拟人类操作」的思路绑架。page-agent.js 用「让 AI 直接读网页文本」撕开了一道口子——这不是渐进优化，是范式转移。

gakki 的锐评：browser-use 和 Playwright 们还在教 AI 模仿鼠标点击，阿里已经在教 AI 读 HTML 了。路线之争，高下立判。

## 原文

Alibaba 推出 page-agent.js，彻底重构浏览器自动化方式。**page-agent.js** 是一个直接嵌入网页的 GUI 代理，无需 Selenium、Puppeteer、Chrome 插件或 Python 后端，仅需一个 script 标签。它以纯文本读取 DOM，不依赖截图或多模态处理，自带 LLM，可执行如“填写表单”“点击登录”等自然语言指令，直接在页面内运行。实际应用已突破想象：

→ 用几行代码在 SaaS 中集成 AI 助手  
→ 将 20 步 ERP/CRM 流程简化为一句指令  
→ 通过语音或自然语言访问任何遗留 Web 应用

12k 星标，MIT 协议，基于浏览器底层机制构建，无需复杂配置。这是“AI


## 元信息

- **作者**: Bill The Investor ([@billtheinvestor](https://x.com/billtheinvestor))
- **发布时间**: 2026-04-06T02:05:55.000Z
- **抓取时间**: 2026-04-06T12:43:19.606Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 81 · 🔄 18 · 💬 3 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2040974251310846131) — @billtheinvestor (Bill The Investor)
