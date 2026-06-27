---
type: "source"
title: "SubQ：稀疏注意力范式打破FlashAttention，1M tokens预填充快52倍、成本低于Opus的5%"
description: "**[稀疏注意力才是长上下文的正确答案——Subquadratic用SSA让百万级Token真正可用]**  1. 核心突破：SSA（Subquadratic Sparse Attention）不再做全量Token两两对比，只路由真正相关的连接，12M Token上下文窗口首次在生产级模型上实现。 2. 性能数据：1M tokens预填充速度比FlashAttention快52倍，成本低于Opus"
resource: "https://x.com/i/status/2054279190195691572"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-12T19:18:52.500Z"
x_tweet_id: "2054279190195691572"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-12T19:15:00.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2054279190195691572"
created: "2026-05-12"
updated: "2026-06-26"
sha256: "fd405d0752b3ec9d13cc2413f25fdfcd5461770d23cc5a9cd113627b074aa47b"
sources:
  - "/sources/highlights/2026-05-12/00__jiqizhixin__subq-稀疏注意力范式打破flashattention-1m-tokens预填充快52倍-成本低于opus的5.md"
---

# SubQ：稀疏注意力范式打破FlashAttention，1M tokens预填充快52倍、成本低于Opus的5%

## 摘要

**[稀疏注意力才是长上下文的正确答案——Subquadratic用SSA让百万级Token真正可用]**

1. 核心突破：SSA（Subquadratic Sparse Attention）不再做全量Token两两对比，只路由真正相关的连接，12M Token上下文窗口首次在生产级模型上实现。
2. 性能数据：1M tokens预填充速度比FlashAttention快52倍，成本低于Opus的5%。这意味着长程记忆类Agent任务的Token成本将出现结构性下跌。
3. 工程信号：SubQ匹配Dense Attention质量，但推理资源需求曲线从二次方变成次二次方——这是算力民主化在模型架构层的实质性进展。

gakki锐评：12M上下文配合超低Token成本，Agent做长程规划时"记忆压缩"的工程难题将被绕过而非解决——上下文窗口够大，谁还做蒸馏？但这反而会让Agent的规划能力瓶颈从基础设施转向目标对齐，因为机器记住一切之后，"记住什么目标"才真正成为问题。

## 原文

What if LLMs could read a million tokens without exploding in cost?

Subquadratic, an AI research startup, just unveiled SubQ — the first model built on fully subquadratic sparse attention (SSA). 

Instead of comparing every token pair, SSA routes attention only to the truly relevant connections, no matter where they appear in the sequence.

Result: 52x faster prefill than FlashAttention at 1M tokens, costs less than 5% of Opus, and boasts a 12M-token context window. SubQ matches dense attention on long-context retrieval tasks while slashing compute by nearly 1000x. A new path beyond Transformer scaling.

How SSA Makes Long Context Practical

blog: https://t.co/H8pMlTnKad

Our report: https://t.co/AGpWoTf7Pd


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-12T19:15:00.000Z
- **抓取时间**: 2026-05-12T19:18:52.500Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2054279190195691572) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
