---
type: "source"
title: "阿里×浙大 ECHO：将投机解码重新定义为预算调度问题，Qwen3-235B 实测提速 5.35 倍"
description: "**一句话核心判断** 投机解码在高并发下反而减速的根源找到了——SGLang 集成 ECHO 框架，把投机执行建模为预算调度问题，用稀疏置信门控动态平衡深度与宽度。  **信息增量** - 突破传统投机解码依赖固定 draft model 的范式，将问题抽象为 batch 级资源调度 - 在 Qwen3-235B 等大模型上，低负载和高负载场景均实现 5.35 倍 walltime 加速 - 与"
resource: "https://x.com/i/status/2057526588326170926"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-21T19:18:12.598Z"
x_tweet_id: "2057526588326170926"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-21T18:19:00.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "ai-multimodel-routing"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2057526588326170926"
created: "2026-05-21"
updated: "2026-06-26"
sha256: "004e1fb342443c1e126bad614de1a38d0b1fd9b8284e26bcfdf80ad7176e7294"
sources:
  - "/sources/news/2026-05-21/00__jiqizhixin__阿里-浙大-echo-将投机解码重新定义为预算调度问题-qwen3-235b-实测提速-5-35-倍.md"
---

# 阿里×浙大 ECHO：将投机解码重新定义为预算调度问题，Qwen3-235B 实测提速 5.35 倍

## 摘要

**一句话核心判断**
投机解码在高并发下反而减速的根源找到了——SGLang 集成 ECHO 框架，把投机执行建模为预算调度问题，用稀疏置信门控动态平衡深度与宽度。

**信息增量**
- 突破传统投机解码依赖固定 draft model 的范式，将问题抽象为 batch 级资源调度
- 在 Qwen3-235B 等大模型上，低负载和高负载场景均实现 5.35 倍 walltime 加速
- 与 SGLang 原生集成，工程落地路径清晰

**影响分析**
对 Agent 工具链的推理延迟优化意义重大——尤其是需要多模型路由的编排层，ECHO 的调度思路可迁移至 Agent 请求调度。

---

**gakki 锐评**
投机解码的性能诅咒本质是"预测对了算赚，预测错了白干"的朴素逻辑，ECHO 的贡献是把这份白干的代价做进了调度预算里——工程化的胜利，而非算法的革命。但对国产大模型（Qwen 系列）的推理优化有直接价值。

## 原文

Why does speculative decoding slow down under heavy traffic? 

Alibaba and Zhejiang University researchers introduce ECHO, a framework integrated into SGLang that treats speculative execution like a budgeted scheduling problem. 

It uses sparse confidence gating to dynamically balance depth vs. width across the entire batch.

Result: up to 5.35x walltime speedup and over 20% relative gain over state-of-the-art methods on models like Qwen3-235B, in both low and high load scenarios.

ECHO: Elastic Speculative Decoding with Sparse Gating for High-Concurrency Scenarios

Paper:  https://t.co/FbUCyAPPxj

Our report: https://t.co/AsI2AosnFB

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-21T18:19:00.000Z
- **抓取时间**: 2026-05-21T19:18:12.598Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
- **关联主题**: [ai-multimodel-routing](/concepts/ai-multimodel-routing.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2057526588326170926) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/ai-multimodel-routing.md)
