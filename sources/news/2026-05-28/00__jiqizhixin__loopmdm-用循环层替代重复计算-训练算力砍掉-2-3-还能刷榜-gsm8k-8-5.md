---
type: "source"
title: "LoopMDM：用循环层替代重复计算，训练算力砍掉 2/3 还能刷榜 GSM8K +8.5"
description: "**[一句话核心判断]**  KAIST、KRAFTON、UC Berkeley 联合发布 LoopMDM，在 Masked Diffusion 语言模型中选择性循环重复早期-中期 Transformer 层，实现无新增参数的计算复用。  **信息增量：** - 训练算力直降 3.3x（同等性能下） - GSM8K 推理基准提升 8.5 分 - 架构思路类似 LoRA 但作用于扩散模型的中间层  "
resource: "https://x.com/i/status/2059843990435078276"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-28T04:18:32.669Z"
x_tweet_id: "2059843990435078276"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-28T03:47:32.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2059843990435078276"
created: "2026-05-28"
updated: "2026-06-26"
sha256: "212421a2ff4a6996b29e3df5255607ca3a22a0eec10b926d9f13fad8a168adab"
sources:
  - "/sources/news/2026-05-28/00__jiqizhixin__loopmdm-用循环层替代重复计算-训练算力砍掉-2-3-还能刷榜-gsm8k-8-5.md"
---

# LoopMDM：用循环层替代重复计算，训练算力砍掉 2/3 还能刷榜 GSM8K +8.5

## 摘要

**[一句话核心判断]**

KAIST、KRAFTON、UC Berkeley 联合发布 LoopMDM，在 Masked Diffusion 语言模型中选择性循环重复早期-中期 Transformer 层，实现无新增参数的计算复用。

**信息增量：**
- 训练算力直降 3.3x（同等性能下）
- GSM8K 推理基准提升 8.5 分
- 架构思路类似 LoRA 但作用于扩散模型的中间层

**影响范围：**
对需要高效训练的场景（边缘部署、低算力环境）有直接价值，且证明"层循环复用"在非自回归模型同样有效。

空

**gakki 锐评：** 扩散模型+循环层复用是个冷门组合，这个 +8.5 的数字如果能被复现，会成为 MoE 之外又一个"算力焦虑解药"——但先别激动，KAIST 的 benchmark 游戏大家懂的。

## 原文

What if you could make AI language models smarter by reusing the same layers over and over?

Researchers from KAIST, KRAFTON, and UC Berkeley present LoopMDM（Looped Diffusion Language Models）. 

They selectively loop early-middle transformer layers in masked diffusion models—no extra parameters, just smart recycling of computation.

The result? LoopMDM matches standard models with 3.3x less training compute, then beats them on reasoning benchmarks like GSM8K by up to +8.5 points. It even outperforms deeper models trained with equal compute, and can scale performance at inference by looping more. Simplicity that punches above its weight.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-28T03:47:32.000Z
- **抓取时间**: 2026-05-28T04:18:32.669Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2059843990435078276) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
