---
type: "source"
title: "Codex/Cursor 开放 Web View API：将网页变成 Agent 的前端交互层"
description: "**一句话：让 AI Agent 逆向调用网页——这是浏览器自动化从「Agent 控制浏览器」到「网页反向注入 Agent」的关键一步。**  宝玉提出的这个设想本质上是在构建一个双向通信协议：网页不只是 Agent 的输出端，还可以成为 Agent 的输入端。如果落地，Claude Design 这类工具的边界将被彻底打破——任何第三方网页都可以内嵌一个输入框，通过 `window.codex."
resource: "https://x.com/i/status/2061565621360337132"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-01T22:18:08.311Z"
x_tweet_id: "2061565621360337132"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-01T21:48:40.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2061565621360337132"
created: "2026-06-01"
updated: "2026-06-26"
sha256: "101b1b2d8d1de7f15e79a7aa40058de5c320da5c898e79a3ce717994f988dfeb"
sources:
  - "/sources/highlights/2026-06-01/00__dotey__codex-cursor-开放-web-view-api-将网页变成-agent-的前端交互层.md"
---

# Codex/Cursor 开放 Web View API：将网页变成 Agent 的前端交互层

## 摘要

**一句话：让 AI Agent 逆向调用网页——这是浏览器自动化从「Agent 控制浏览器」到「网页反向注入 Agent」的关键一步。**

宝玉提出的这个设想本质上是在构建一个双向通信协议：网页不只是 Agent 的输出端，还可以成为 Agent 的输入端。如果落地，Claude Design 这类工具的边界将被彻底打破——任何第三方网页都可以内嵌一个输入框，通过 `window.codex.sendPrompt(text, attachments)` 直接把内容推进 Agent 的上下文。这意味着 AI 编程工具不再是独立的应用层，而是可以嵌入任意网页的「智能内核」。

平台战争的下一个焦点正在从「哪个 Agent 更好用」转移到「谁先开放了最彻底的 API 协议」。


**gakki 说：** 这个提案的真正价值不在于 Claude Design，而在于它暗示了 AI Native 开发工具的最终形态——不是工具，是协议。谁先把 API 这件事做成了，谁就变成了浏览器里的 JavaScript。

## 原文

It would be great if AI agents like Codex and Cursor could expose an API to web views. This would allow a webpage opened in the right pane to send prompts (including text and images) directly back to the agent.

For instance, if I build a webpage similar to Claude Design, I could add an in-page input box. When a user enters a prompt and clicks "send", the webpage would call an API like "window.codex.sendPrompt(text, attachments)" to push that content straight into the chat interface on the left. This would enable much deeper interaction between the agent and the webpage, unlocking a lot more possibilities.

cc @thsottiaux @jxnlco @Dimillian


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-01T21:48:40.000Z
- **抓取时间**: 2026-06-01T22:18:08.311Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2061565621360337132) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
