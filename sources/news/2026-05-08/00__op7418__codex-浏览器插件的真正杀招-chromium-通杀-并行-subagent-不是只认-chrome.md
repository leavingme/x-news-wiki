---
type: "X Tweet"
title: "Codex 浏览器插件的真正杀招：Chromium 通杀 + 并行 SubAgent，不是只认 Chrome"
description: "**歸藏实测发现 Codex Chrome 插件可控制任何 Chromium 内核浏览器（如 Dia），并支持多 SubAgent 并行操作不同页面——这把「浏览器 Agent」的适用范围拉大了一个数量级。**  - Chromium 通杀：Edge、Arc、Dia 等均可被控制，不锁定 Chrome - 并行 SubAgent：可同时启动多个子任务操作不同网页，用户无感知 - Mac + Win"
resource: "https://x.com/i/status/2052576841656099037"
tags:
  - "x-news"
  - "news"
  - "author:op7418"
timestamp: "2026-05-08T04:19:08.724Z"
x_tweet_id: "2052576841656099037"
x_author: "歸藏(guizang.ai)"
x_handle: "op7418"
x_created_at: "2026-05-08T02:30:28.000Z"
x_engagement:
  likes: 46
  retweets: 1
  replies: 25
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex 浏览器插件的真正杀招：Chromium 通杀 + 并行 SubAgent，不是只认 Chrome

## 摘要

**歸藏实测发现 Codex Chrome 插件可控制任何 Chromium 内核浏览器（如 Dia），并支持多 SubAgent 并行操作不同页面——这把「浏览器 Agent」的适用范围拉大了一个数量级。**

- Chromium 通杀：Edge、Arc、Dia 等均可被控制，不锁定 Chrome
- 并行 SubAgent：可同时启动多个子任务操作不同网页，用户无感知
- Mac + Windows 双平台支持，零配置接入

与上一条形成信息叠加：OpenAI 不只是做了个插件，而是在 Chromium 生态层面建立了 Agent 控制层。这对所有做浏览器自动化的项目（Playwright MCP、Puppeteer 方案）都是降维打击。

## 原文

Codex 越来越猛了，昨天更新增加了内置的谷歌浏览器插件，可以直接控制你的谷歌浏览器执行任务。

而且它可以在后台跨浏览器页面并行工作，不耽误你正常使用浏览器。所谓“并行工作”，指的是你可以启动多个子 SubAgent 帮你操作多个网页。

我试了一下，发现最厉害的一点是：它不仅可以控制 Chrome，任何基于 Chromium 的浏览器都是可以的。比如我这里用的是 Dia 浏览器，我在 Dia 浏览器安装了一个插件，它就可以直接控制我的 Dia 浏览器。

具体如何使用呢？

在 Codex 的插件库里找到 Chrome 这个插件。
点击添加，随后它会引导你打开浏览器插件的安装页面。
点击打开并安装即可。

安装完成后就可以直接给它下达任务了。这种支持并发且不影响用户原生操作的体验真的很爽。而且 Mac 和 Windows 都支持。


## 元信息

- **作者**: 歸藏(guizang.ai) ([@op7418](https://x.com/op7418))
- **发布时间**: 2026-05-08T02:30:28.000Z
- **抓取时间**: 2026-05-08T04:19:08.724Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 46 · 🔄 1 · 💬 25 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2052576841656099037) — @op7418 (歸藏(guizang.ai))
[2] [Author page](/entities/authors/op7418.md)
