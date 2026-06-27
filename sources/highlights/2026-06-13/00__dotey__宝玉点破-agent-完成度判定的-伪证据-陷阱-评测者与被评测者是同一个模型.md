---
type: "X Tweet"
title: "宝玉点破 Agent 完成度判定的'伪证据'陷阱：评测者与被评测者是同一个模型"
description: "**宝玉点破 Agent 完成度判定的'伪证据'循环** - 提出 completion 应该依赖 evidence 而非 model 自觉，但被追问后发现 evidence 仍由模型自己判断 - 这是当前 Agent 评测的根本困境：评测者和被评测者是同一个 LLM - 真正可信的 evidence 需要外部锚点（单测通过、API 返回、用户确认），不是模型自我汇报  Gakki 锐评：短期内无"
resource: "https://x.com/i/status/2065836586831388747"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-13T19:18:19.216Z"
x_tweet_id: "2065836586831388747"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-13T16:39:58.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 宝玉点破 Agent 完成度判定的'伪证据'陷阱：评测者与被评测者是同一个模型

## 摘要

**宝玉点破 Agent 完成度判定的'伪证据'循环**
- 提出 completion 应该依赖 evidence 而非 model 自觉，但被追问后发现 evidence 仍由模型自己判断
- 这是当前 Agent 评测的根本困境：评测者和被评测者是同一个 LLM
- 真正可信的 evidence 需要外部锚点（单测通过、API 返回、用户确认），不是模型自我汇报

Gakki 锐评：短期内无解，但工程上能缓解——把'可执行验证'嵌入完成度判定（单测、HTTP 状态码、文件系统状态），让模型判断和真实信号形成双轨，而不是让模型自证清白。

## 原文

@dongxi_nlp &gt; completion 应该依赖 evidence，而非 model 觉得已经完成。

这个证据还是模型去判断的吧？不还是模型决定？


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-13T16:39:58.000Z
- **抓取时间**: 2026-06-13T19:18:19.216Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2065836586831388747) — @dotey (宝玉)
