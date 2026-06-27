---
type: "X Tweet"
title: "用 Chrome DevTools 调试 Codex App：AI 编程工具的「黑箱」正在被打开"
description: "**通过 remote-debugging-port 参数启动 Codex App，即可用 Chrome DevTools 检查其内部状态。**  - 启动命令：`open /Applications/Codex.app --args --remote-debugging-port=8315 --remote-allow-origins=http://localhost:8315` - 然后在 C"
resource: "https://x.com/i/status/2052200047278739457"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-05-07T04:19:21.973Z"
x_tweet_id: "2052200047278739457"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-07T01:33:13.000Z"
x_engagement:
  likes: 77
  retweets: 10
  replies: 5
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 用 Chrome DevTools 调试 Codex App：AI 编程工具的「黑箱」正在被打开

## 摘要

**通过 remote-debugging-port 参数启动 Codex App，即可用 Chrome DevTools 检查其内部状态。**

- 启动命令：`open /Applications/Codex.app --args --remote-debugging-port=8315 --remote-allow-origins=http://localhost:8315`
- 然后在 Chrome 输入 `chrome://inspect` 即可连接调试
- 这意味着 Codex App 底层是 Electron 架构，其内部通信、状态管理都可以被外部观测

gakki 锐评：AI 编程工具越强大，用户越需要理解它在做什么。能被调试的工具才值得信任——这不只是开发技巧，更是 Agent 透明度的一个小切口。

## 原文

一个用 Chrome Dev Tool 学习调试 Codex App 的技巧：

1. 退出 Codex App，从命令行打开：
&gt; open /Applications/Codex.app --args --remote-debugging-port=8315 --remote-allow-origins=http://localhost:8315

2. Chrome 中输入 chrome://inspect

3. 点击其中的链接即可打开 Chrome Debug Tool https://t.co/xSN48WPzfX


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-07T01:33:13.000Z
- **抓取时间**: 2026-05-07T04:19:21.973Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 77 · 🔄 10 · 💬 5 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2052200047278739457) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
