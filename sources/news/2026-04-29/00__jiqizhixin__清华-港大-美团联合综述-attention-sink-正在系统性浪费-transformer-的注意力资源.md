---
type: "source"
title: "清华+港大+美团联合综述：Attention Sink 正在系统性浪费 Transformer 的注意力资源"
description: "**Attention Sink 现象首次获得系统性学术梳理，指向 Transformer 可靠性的结构性缺陷。**  • 清华、港大、美团 LongCat 团队联合发布 Attention Sink 首个全面综述，揭示 Transformer 模型常将注意力浪费在标点、填充词等无意义 token 上 • Attention Sink 行为不仅降低模型可靠性，还直接导致幻觉问题——这是当前推理模型"
resource: "https://x.com/i/status/2049495167913333124"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-29T16:19:06.071Z"
x_tweet_id: "2049495167913333124"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-29T14:25:00.000Z"
x_engagement:
  likes: 1
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2049495167913333124"
created: "2026-04-29"
updated: "2026-06-26"
sha256: "da133aa4b6ffb6b773b7914131f486bfb9505a92ba140f8da70222091162b70a"
sources:
  - "/sources/news/2026-04-29/00__jiqizhixin__清华-港大-美团联合综述-attention-sink-正在系统性浪费-transformer-的注意力资源.md"
---

# 清华+港大+美团联合综述：Attention Sink 正在系统性浪费 Transformer 的注意力资源

## 摘要

**Attention Sink 现象首次获得系统性学术梳理，指向 Transformer 可靠性的结构性缺陷。**

• 清华、港大、美团 LongCat 团队联合发布 Attention Sink 首个全面综述，揭示 Transformer 模型常将注意力浪费在标点、填充词等无意义 token 上
• Attention Sink 行为不仅降低模型可靠性，还直接导致幻觉问题——这是当前推理模型最头疼的工程挑战之一
• 综述系统性分类了"利用、解释、解决"三条路径，为后续模型优化提供了方法论地图

gakki 锐评：注意力浪费不是 bug，是 Transformer 架构的原罪。这篇综述的价值在于把散落的工程经验收敛成了可操作的研究框架，做推理优化的团队值得精读。

## 原文

Why do AI models sometimes obsess over useless words?

Researchers from Tsinghua University, The University of Hong Kong, and Meituan LongCat Team present the first comprehensive survey on Attention Sink.

The problem: Transformers often waste attention on a few meaningless tokens, like punctuation or filler words, instead of focusing on key content. This behavior, called Attention Sink, hurts reliability and causes hallucinations.

The survey systematically categorizes how to use, interpret, and fix this flaw, outperforming prior fragmented research by providing the first unified guide for the entire AI community.

Attention Sink in Transformers: A Survey on Utilization, Interpretation, and Mitigation

Paper: https://t.co/HpiQolQT02
GitHub Project: https://t.co/dQ9AmJWkbM

Our report: https://t.co/IkYDUOYWe3

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-29T14:25:00.000Z
- **抓取时间**: 2026-04-29T16:19:06.071Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2049495167913333124) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
