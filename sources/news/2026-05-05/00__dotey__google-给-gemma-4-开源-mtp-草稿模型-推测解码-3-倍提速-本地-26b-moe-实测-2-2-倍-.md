---
type: "X Tweet"
title: "Google 给 Gemma 4 开源 MTP 草稿模型：推测解码 3 倍提速，本地 26B MoE 实测 2.2 倍，端侧推理瓶颈从算力转向带宽"
description: "**Gemma 4 的 MTP drafter 是 Google 对端侧推理效率的一次精准手术。** - 推测解码机制：轻量小模型一次猜多个 token，大模型并行验证，把闲置算力利用起来 - Apple Silicon 跑 26B MoE，batch 4-8 时本地实测约 2.2 倍提速 - 核心洞察：LLM 推理瓶颈不在算力而在内存带宽，推测解码恰好切在这个痛点上  gakki 锐评：这不只是"
resource: "https://x.com/i/status/2051717367164518467"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-05-05T19:18:44.983Z"
x_tweet_id: "2051717367164518467"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-05T17:35:14.000Z"
x_engagement:
  likes: 26
  retweets: 5
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Google 给 Gemma 4 开源 MTP 草稿模型：推测解码 3 倍提速，本地 26B MoE 实测 2.2 倍，端侧推理瓶颈从算力转向带宽

## 摘要

**Gemma 4 的 MTP drafter 是 Google 对端侧推理效率的一次精准手术。**
- 推测解码机制：轻量小模型一次猜多个 token，大模型并行验证，把闲置算力利用起来
- Apple Silicon 跑 26B MoE，batch 4-8 时本地实测约 2.2 倍提速
- 核心洞察：LLM 推理瓶颈不在算力而在内存带宽，推测解码恰好切在这个痛点上

gakki 锐评：这不只是「快了 3 倍」的营销话术——推测解码把端侧推理的经济学重写了。当 26B 模型能在笔记本上跑出可用速度，MoE 架构的边缘部署才算真正进入实用区。配合 Gemma 4 上线几周 6000 万下载量，Google 的开源端侧战略正在形成闭环。

## 原文

Google 为自家开源模型 Gemma 4 发布了 MTP drafter（多 token 预测草稿模型），推理速度最高提升 3 倍，输出质量保持不变。https://t.co/2skub5Q1HM 

Gemma 4 是 Google 几周前发布的开源模型系列，从手机端的 E2B、E4B 一直到工作站的 26B MoE 和 31B Dense，官方称上线几周下载量已经突破 6000 万。MTP drafter 用的是 speculative decoding（推测解码）：让一个轻量级的小模型先“猜”出接下来好几个 token，再让大模型一次性并行验证，验证通过的部分一口气全部输出。

这套机制对本地跑模型的场景特别有用。LLM 推理之所以慢，瓶颈往往不在算力，而在内存带宽，处理器大部分时间都在把几十亿参数从显存搬到计算单元，只为了挤出下一个 token。推测解码把闲置算力利用起来，让小模型一次预测多个 token，大模型只做验证，等于把流水线拉满。

实际效果上，在 Apple Silicon 跑 26B MoE 模型，批量大小开到 4 到 8 时本地能拿到约 2.2 倍提速。因为最终验证仍由大模型完成，输出和原版逐字一致，没有质量取舍。

drafter 沿用 Gemma 4 的 Apache 2.0 协议，权重已经上传到 Hugging Face 和 Kaggle，transformers、MLX、vLLM、SGLang、Ollama 都已支持。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-05T17:35:14.000Z
- **抓取时间**: 2026-05-05T19:18:44.983Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 26 · 🔄 5 · 💬 3 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2051717367164518467) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
