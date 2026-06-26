---
type: "X Tweet"
title: "SubQ 首个亚二次稀疏注意力模型：12M 上下文窗口、比 FlashAttention 快 52 倍、成本不到 Opus 的 5%"
description: "**注意力机制的工程瓶颈正在被亚二次架构撬开。**  - SubQ 是首个基于全亚二次稀疏注意力（SSA）的前沿模型，上下文窗口达 1200 万 token - 在 1M token 场景下比 FlashAttention 快 52 倍，推理成本压缩至 Opus 的 5% 以下 - 核心思路：标准注意力浪费算力在无关词对关系上，SSA 只聚焦真正重要的关联  gakki 锐评：稀疏注意力不是新概念"
resource: "https://x.com/alex_whedon/status/2051663268704636937"
tags:
  - "x-news"
  - "highlights"
  - "author:alex_whedon"
timestamp: "2026-05-05T16:17:38.606Z"
x_tweet_id: "2051663268704636937"
x_author: "Alexander Whedon"
x_handle: "alex_whedon"
x_created_at: "2026-05-05T14:00:15.000Z"
x_engagement:
  likes: 15272
  retweets: 1952
  replies: 1057
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "推理与模型架构"
x_source: "ai-trend-digest"
---

# SubQ 首个亚二次稀疏注意力模型：12M 上下文窗口、比 FlashAttention 快 52 倍、成本不到 Opus 的 5%

## 摘要

**注意力机制的工程瓶颈正在被亚二次架构撬开。**

- SubQ 是首个基于全亚二次稀疏注意力（SSA）的前沿模型，上下文窗口达 1200 万 token
- 在 1M token 场景下比 FlashAttention 快 52 倍，推理成本压缩至 Opus 的 5% 以下
- 核心思路：标准注意力浪费算力在无关词对关系上，SSA 只聚焦真正重要的关联

gakki 锐评：稀疏注意力不是新概念，但能跑出 52 倍加速且保持前沿质量的，这是第一个。如果经得起独立评测验证，Opus 级别的百万上下文叙事可能需要重写——因为成本结构被改写了。

## 原文

Introducing SubQ - a major breakthrough in LLM intelligence.

It is the first model built on a fully sub-quadratic sparse-attention architecture (SSA),

And the first frontier model with a 12 million token context window which is:

- 52x faster than FlashAttention at 1MM tokens
- Less than 5% the cost of Opus

Transformer-based LLMs waste compute by processing every possible relationship between words (standard attention).

Only a small fraction actually matter.

@subquadratic finds and focuses only on the ones that do.

That's nearly 1,000x less compute and a new way for LLMs to scale.


## 元信息

- **作者**: Alexander Whedon ([@alex_whedon](https://x.com/alex_whedon))
- **发布时间**: 2026-05-05T14:00:15.000Z
- **抓取时间**: 2026-05-05T16:17:38.606Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 15272 · 🔄 1952 · 💬 1057 · 🔖 0 · 👁 0
- **关联主题**: [推理与模型架构](/concepts/推理与模型架构.md)

## Citations

[1] [Tweet on X](https://x.com/alex_whedon/status/2051663268704636937) — @alex_whedon (Alexander Whedon)
[2] [Author page](/entities/authors/alex-whedon.md)
[3] [Related topic](/concepts/推理与模型架构.md)
