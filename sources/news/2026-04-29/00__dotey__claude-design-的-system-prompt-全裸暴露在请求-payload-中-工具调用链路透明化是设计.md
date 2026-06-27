---
type: "source"
title: "Claude Design 的 System Prompt 全裸暴露在请求 Payload 中：工具调用链路透明化是设计缺陷还是有意开放"
description: "**Claude Design 的完整 System Prompt 和工具调用定义直接暴露在 API Payload 中，逆向成本趋近于零。**  - 宝玉实测发现，Claude Design 的 System Prompt、调用工具列表等全部信息均可从请求 Payload 中直接读取 - 这意味着任何具备抓包能力的开发者都可以完整复现 Claude Design 的工作方式 - 对比 Claud"
resource: "https://x.com/i/status/2049586049907667168"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-04-29T22:18:35.597Z"
x_tweet_id: "2049586049907667168"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-29T20:26:08.000Z"
x_engagement:
  likes: 21
  retweets: 0
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "claude-code-source-leak"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2049586049907667168"
created: "2026-04-29"
updated: "2026-06-26"
sha256: "e3631c21fdfbd0a95e222cce74be7e2a638b015eb54896585775fa02e8060dc9"
sources:
  - "/sources/news/2026-04-29/00__dotey__claude-design-的-system-prompt-全裸暴露在请求-payload-中-工具调用链路透明化是设计.md"
---

# Claude Design 的 System Prompt 全裸暴露在请求 Payload 中：工具调用链路透明化是设计缺陷还是有意开放

## 摘要

**Claude Design 的完整 System Prompt 和工具调用定义直接暴露在 API Payload 中，逆向成本趋近于零。**

- 宝玉实测发现，Claude Design 的 System Prompt、调用工具列表等全部信息均可从请求 Payload 中直接读取
- 这意味着任何具备抓包能力的开发者都可以完整复现 Claude Design 的工作方式
- 对比 Claude Code 的闭源策略，Design 工具的暴露程度暗示 Anthropic 内部对不同产品线的安全策略存在差异

gakki 锐评：Anthropic 在 Claude Code 上严防死守，在 Claude Design 上却门户大开——这种不一致要么是灰度阶段的工程疏忽，要么是 Design 产品还不够重要到值得加密。无论哪种，都给了竞品免费的逆向素材。

## 原文

我就说你们咋逆向 Claude Design 的 System Prompt 的，原来都在请求的 Payload 里面，包括调用啥工具都有。

可惜额度太少了，用几次就没了 https://t.co/cV3zgH18yx


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-29T20:26:08.000Z
- **抓取时间**: 2026-04-29T22:18:35.597Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 21 · 🔄 0 · 💬 3 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-source-leak](/concepts/claude-code-source-leak.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2049586049907667168) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/claude-code-source-leak.md)
