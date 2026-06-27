---
type: "source"
title: "用 trash 替代 rm：AI 文件删除的防御性工程规范确立"
description: "**在 CLAUDE.md 中约定使用 `trash` 命令而非 `rm`，防止 AI 误删文件。**  这是一个具体的工程规范建议：将 `alias rm='trash'` 写入配置，AI 执行删除操作时自动进入回收站而非永久删除。从 AI Agent 的错误模式来看，误删文件是高频事故，这个约定的防护成本极低但效果直接。  gakki 锐评：这条信息的价值不在于\"trash vs rm\"本身，"
resource: "https://x.com/i/status/2054937666223739214"
tags:
  - "x-news"
  - "news"
  - "author:gkxspace"
timestamp: "2026-05-14T16:18:43.548Z"
x_tweet_id: "2054937666223739214"
x_author: "余温"
x_handle: "gkxspace"
x_created_at: "2026-05-14T14:51:33.000Z"
x_engagement:
  likes: 15
  retweets: 4
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2054937666223739214"
created: "2026-05-14"
updated: "2026-06-26"
sha256: "6aec5d67d47f8181cb8e6984cbe75b51ef825cc84b6015bf6b9224ecf2348104"
sources:
  - "/sources/news/2026-05-14/00__gkxspace__用-trash-替代-rm-ai-文件删除的防御性工程规范确立.md"
---

# 用 trash 替代 rm：AI 文件删除的防御性工程规范确立

## 摘要

**在 CLAUDE.md 中约定使用 `trash` 命令而非 `rm`，防止 AI 误删文件。**

这是一个具体的工程规范建议：将 `alias rm='trash'` 写入配置，AI 执行删除操作时自动进入回收站而非永久删除。从 AI Agent 的错误模式来看，误删文件是高频事故，这个约定的防护成本极低但效果直接。

gakki 锐评：这条信息的价值不在于"trash vs rm"本身，而在于它揭示了一个规律：当 AI 的行动半径扩大，最有效的工程规范往往是最简单的——把不可逆操作默认软化。这种防御性约定会逐步成为 Agent 开发的标配规范。

## 原文

为了防止 AI 乱删文件，我在 CLAUDE.md 里写了：

使用 `trash` 命令而不是 `rm`，以便恢复误删文件。

或者直接：alias rm='trash'


## 元信息

- **作者**: 余温 ([@gkxspace](https://x.com/gkxspace))
- **发布时间**: 2026-05-14T14:51:33.000Z
- **抓取时间**: 2026-05-14T16:18:43.548Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 15 · 🔄 4 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2054937666223739214) — @gkxspace (余温)
[2] [Author page](/entities/authors/gkxspace.md)
