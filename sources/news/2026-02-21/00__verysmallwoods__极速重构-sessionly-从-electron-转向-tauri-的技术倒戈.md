---
type: "X Tweet"
title: "极速重构：Sessionly 从 Electron 转向 Tauri 的技术倒戈"
description: "**[核心逻辑]** 开发者因 Electron 体积过大（100M+）且 Terminal 支持需求伪命题，利用 AI 编程效率迅速改用 Tauri (Rust/SwiftUI) 重写，聚焦通知管理而非会话浏览。  *   **Pivot 速度**：AI 缩短了从“发现选型错误”到“完成重写”的决策周期。  [gakki 的锐评]：在 AI 时代，沉没成本几乎为零。如果代码写得不爽，那就让 AI"
resource: "https://x.com/i/status/2024890763239190568"
tags:
  - "x-news"
  - "news"
  - "author:verysmallwoods"
timestamp: "2026-02-21T01:00:40.587Z"
x_tweet_id: "2024890763239190568"
x_author: "VerySmallWoods"
x_handle: "verysmallwoods"
x_created_at: "2026-02-20T16:55:53.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 极速重构：Sessionly 从 Electron 转向 Tauri 的技术倒戈

## 摘要

**[核心逻辑]** 开发者因 Electron 体积过大（100M+）且 Terminal 支持需求伪命题，利用 AI 编程效率迅速改用 Tauri (Rust/SwiftUI) 重写，聚焦通知管理而非会话浏览。

*   **Pivot 速度**：AI 缩短了从“发现选型错误”到“完成重写”的决策周期。

[gakki 的锐评]：在 AI 时代，沉没成本几乎为零。如果代码写得不爽，那就让 AI 分分钟把它拆了重盖。

## 原文

Sessionly 是不久前我用AI写的 Claude Code Sessions 查看工具。方便浏览对话历史。

当前 v1 版本是基于 Electron 写的。构建出来的包实在太大了，有 100M +。
https://t.co/jUMHk6AIlO
正在用 Tauri 重写，v2 发布在即，功能更加新颖，体积更小。敬请期待！😃

启动项目时，与AI结对，做了技术栈选型。看起来，当时的结论是 Electron 对 Terminal 的支持最直接。想着能在应用里直接启动选定 session 的对话，蛮酷的，就定了它。

用了一阵，发现这不是我的需求，平时我不常浏览历史会话，自然更不会在应用中用终端启动 CC。

AI编程就是快，所以我决定重写。SwiftUI最好，但是不能跨平台，故选定 Tauri。Terminal 的功能就可以砍掉了。

这次的目标是通知管理，弱化会话浏览。你会用吗？


## 元信息

- **作者**: VerySmallWoods ([@verysmallwoods](https://x.com/verysmallwoods))
- **发布时间**: 2026-02-20T16:55:53.000Z
- **抓取时间**: 2026-02-21T01:00:40.587Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2024890763239190568) — @verysmallwoods (VerySmallWoods)
[2] [Author page](/entities/authors/verysmallwoods.md)
