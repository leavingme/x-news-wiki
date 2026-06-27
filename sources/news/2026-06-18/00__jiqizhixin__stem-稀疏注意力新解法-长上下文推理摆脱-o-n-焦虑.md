---
type: "X Tweet"
title: "Stem 稀疏注意力新解法：长上下文推理摆脱 O(n²) 焦虑"
description: "**[Stem 用位置衰减 + 输出感知重新设计稀疏注意力流，长上下文推理成本曲线被改写]**  - 核心机制：保留早期 token 维持递归依赖 + 输出感知度量优先保留高影响 token，\"即插即用\"的稀疏模块 - 效果：精度持平或更好，预填充延迟显著降低，重新思考因果信息流 - 落地价值：长上下文 Agent、文档级代码理解、百万 token 检索的算力账本可被压一档  锐评：长上下文赛道的"
resource: "https://x.com/i/status/2067423803639030017"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-18T04:19:03.558Z"
x_tweet_id: "2067423803639030017"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-18T01:47:00.000Z"
x_engagement:
  likes: 8
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Stem 稀疏注意力新解法：长上下文推理摆脱 O(n²) 焦虑

## 摘要

**[Stem 用位置衰减 + 输出感知重新设计稀疏注意力流，长上下文推理成本曲线被改写]**

- 核心机制：保留早期 token 维持递归依赖 + 输出感知度量优先保留高影响 token，"即插即用"的稀疏模块
- 效果：精度持平或更好，预填充延迟显著降低，重新思考因果信息流
- 落地价值：长上下文 Agent、文档级代码理解、百万 token 检索的算力账本可被压一档

锐评：长上下文赛道的"工程补丁"越来越密，Stem 属于那种"不性感但能用"的渐进改进。真正的范式跳跃要等线性注意力或状态空间模型跑通工程化，Stem 更像是 Claude 1M context 时代的必备脚手架。

## 原文

What if your LLM could process long contexts without the quadratic attention bottleneck? 

Enter Stem: a plug-and-play sparsity module that rethinks causal information flow. 

It uses a token position‑decay strategy (keeping early tokens for recursive dependencies) and an output‑aware metric (prioritizing high‑impact tokens). 

Result: Stem achieves superior accuracy with less computation and lower pre‑filling latency.

Stem: Rethinking Causal Information Flow in Sparse Attention

Paper: https://t.co/EPLHHYfNDa
Code: https://t.co/nZ6Wiwi3vG
HPC Ops Code: https://t.co/fPQzSUKeDz

Our report: https://t.co/FmsIfT0WHg

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-18T01:47:00.000Z
- **抓取时间**: 2026-06-18T04:19:03.558Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 8 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2067423803639030017) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
