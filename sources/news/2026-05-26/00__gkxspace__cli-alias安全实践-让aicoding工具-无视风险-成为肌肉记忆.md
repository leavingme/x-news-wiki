---
type: "source"
title: "CLI Alias安全实践：让AICoding工具「无视风险」成为肌肉记忆"
description: "**[别名配置正在成为AI编程的刚需安全实践]**  余温分享了一套实用的CLI alias配置方案：将`--dangerously-skip-permissions`和`--dangerously-bypass-approvals-and-sandbox`封装为短别名，同时把危险的`rm`替换为可恢复的`trash`。这不只是一个技巧，而是AI编程时代的一种新型安全范式——在提升效率的同时建立容"
resource: "https://x.com/i/status/2059231824707236114"
tags:
  - "x-news"
  - "news"
  - "author:gkxspace"
timestamp: "2026-05-26T13:18:24.360Z"
x_tweet_id: "2059231824707236114"
x_author: "余温"
x_handle: "gkxspace"
x_created_at: "2026-05-26T11:15:00.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2059231824707236114"
created: "2026-05-26"
updated: "2026-06-26"
sha256: "7fdf6e7db60f32f91cf809061d89b3fceb06a4d06a8a9c70d2a42e8f0a6c27a6"
sources:
  - "/sources/news/2026-05-26/00__gkxspace__cli-alias安全实践-让aicoding工具-无视风险-成为肌肉记忆.md"
---

# CLI Alias安全实践：让AICoding工具「无视风险」成为肌肉记忆

## 摘要

**[别名配置正在成为AI编程的刚需安全实践]**

余温分享了一套实用的CLI alias配置方案：将`--dangerously-skip-permissions`和`--dangerously-bypass-approvals-and-sandbox`封装为短别名，同时把危险的`rm`替换为可恢复的`trash`。这不只是一个技巧，而是AI编程时代的一种新型安全范式——在提升效率的同时建立容错层。

**gakki锐评：** 当「无脑信任AI」成为默认姿势时，真正的工程纪律反而体现在「如何优雅地绕过安全检查」。这个看似矛盾的需求正在重写终端工具哲学。

## 原文

alias 确实很好用，就比如我们 vibecoding 时候熟悉的：
claude --dangerously-skip-permissions

codex --dangerously-bypass-approvals-and-sandbox

如果每次都打这么一长串，我是真记不住。。。

那么就可以配一下：
alias claude-danger="claude --dangerously-skip-permissions"

alias codex-danger="codex --dangerously-bypass-approvals-and-sandbox"

那之后你就能很方便的“无视风险”了。

还有，像是 rm 命令，对 AI 来说确实比较危险，那么你就可以把 rm 替换成 trash：
alias rm='trash'


## 元信息

- **作者**: 余温 ([@gkxspace](https://x.com/gkxspace))
- **发布时间**: 2026-05-26T11:15:00.000Z
- **抓取时间**: 2026-05-26T13:18:24.360Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 3 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2059231824707236114) — @gkxspace (余温)
[2] [Author page](/entities/authors/gkxspace.md)
