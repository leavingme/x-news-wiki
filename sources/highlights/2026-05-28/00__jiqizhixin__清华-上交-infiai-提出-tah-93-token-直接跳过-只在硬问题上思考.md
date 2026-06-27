---
type: "source"
title: "清华/上交/InfiAI 提出 TaH：93% Token 直接跳过，只在硬问题上思考"
description: "**一句话核心判断：** Think-at-Hard（TaH）证明了一个反直觉的结论——让模型「少想」反而更强，核心洞察是把推理算力从均匀分配改为按问题难度动态调度。  - 轻量级 decider 网络判断每个 Token 是否需要推理，对 93% 的 Token 直接跳过，只在难题上触发深度思考 - Depth-aware LoRA 模块和 duo-causal attention 机制在不过度"
resource: "https://x.com/i/status/2060057766711193664"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-28T19:18:32.755Z"
x_tweet_id: "2060057766711193664"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-28T17:57:00.000Z"
x_engagement:
  likes: 11
  retweets: 4
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2060057766711193664"
created: "2026-05-28"
updated: "2026-06-26"
sha256: "6b8d85b7b1611270aea1b71e767b2b6a03c9b39ddab061fbee52dce5ebbfc71b"
sources:
  - "/sources/highlights/2026-05-28/00__jiqizhixin__清华-上交-infiai-提出-tah-93-token-直接跳过-只在硬问题上思考.md"
---

# 清华/上交/InfiAI 提出 TaH：93% Token 直接跳过，只在硬问题上思考

## 摘要

**一句话核心判断：** Think-at-Hard（TaH）证明了一个反直觉的结论——让模型「少想」反而更强，核心洞察是把推理算力从均匀分配改为按问题难度动态调度。

- 轻量级 decider 网络判断每个 Token 是否需要推理，对 93% 的 Token 直接跳过，只在难题上触发深度思考
- Depth-aware LoRA 模块和 duo-causal attention 机制在不过度增加算力消耗的前提下提升区分度
- 数学基准测试比「始终迭代」基线高 3.8-4.4 个百分点

这意味着现有 MoE 架构和推理优化路线出现了新的收敛点——不是堆更多参数，而是让「思考预算」智能分配。

gakki 的锐评：TaH 的思路本质上是对 CoT 计算量的经济学优化，但 93% 跳过率也暗示大量现有推理路径实际上是在「表演思考」，真正的推理有效Token可能远低于行业假设。

## 原文

Your AI model is thinking too much, and skipping a few steps makes it smarter!

Tsinghua University, Infinigence AI, and Shanghai Jiao Tong University introduce Think-at-Hard (TaH).  

Instead of looping every token through extra reasoning, TaH uses a lightweight decider to skip iterations on 93% of tokens—only re-thinking the hard ones. Depth-aware LoRA modules and a duo-causal attention mechanism sharpen focus without extra cost.  

Result: TaH beats always-iterate baselines by 3.8–4.4% on math, QA, and coding benchmarks, and surpasses single-pass Qwen3 by 3.0–3.8%. With <3% more parameters, gains jump to 6.8%.

Think-at-Hard: Selective Latent Iterations to Improve Reasoning Language Models

Code: https://t.co/4KAyzRJSeN
Project: https://t.co/ztkh8noCXh
Paper: https://t.co/wktNg0mn2Q

Our report: https://t.co/XM9POdSPxC

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-28T17:57:00.000Z
- **抓取时间**: 2026-05-28T19:18:32.755Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 11 · 🔄 4 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2060057766711193664) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
