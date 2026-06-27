---
type: "X Tweet"
title: "W-Flow 单步生成击穿 ImageNet 1.29 FID：字节+斯坦福把扩散压成一帧"
description: "**[单步生成首次在 ImageNet 256×256 跑出 1.29 FID 新 SOTA]**，比多步扩散采样快 100 倍。  - 核心思路：Wasserstein 梯度流把整条扩散轨迹压缩成一次前向，模型学会'直接走捷径' - 关键收益：长尾稀有模式覆盖反而更好（多步扩散在分布稀疏处有偏） - 产业含义：实时图像/视频生成的算力门槛继续坍塌，'排队等出图'的经济学根基动摇   gakki "
resource: "https://x.com/i/status/2066531423700373798"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-15T16:18:49.184Z"
x_tweet_id: "2066531423700373798"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-15T14:41:00.000Z"
x_engagement:
  likes: 20
  retweets: 2
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-video-queue-economy"
x_source: "crawler"
---

# W-Flow 单步生成击穿 ImageNet 1.29 FID：字节+斯坦福把扩散压成一帧

## 摘要

**[单步生成首次在 ImageNet 256×256 跑出 1.29 FID 新 SOTA]**，比多步扩散采样快 100 倍。

- 核心思路：Wasserstein 梯度流把整条扩散轨迹压缩成一次前向，模型学会'直接走捷径'
- 关键收益：长尾稀有模式覆盖反而更好（多步扩散在分布稀疏处有偏）
- 产业含义：实时图像/视频生成的算力门槛继续坍塌，'排队等出图'的经济学根基动摇


gakki 锐评：'单步生成'是连续两年 ImageNet 榜单的硬骨头，1.29 FID 意味着画质/速度帕累托边界被推到了新位置——但论文分数≠产品体验，工业落地还要看稳定性与可控性。

## 原文

What if you could generate high-quality images in one step instead of hundreds?

Stanford and ByteDance introduce W-Flow: a single-step generator that turns random noise into target data by following a Wasserstein gradient flow. It compresses a full diffusion-like evolution into a single neural network pass.

The result? A new state-of-the-art for one-step ImageNet 256x256 generation (1.29 FID), with better coverage of rare modes — and 100x faster sampling than multi-step diffusion models of similar quality.

One-Step Generative Modeling via Wasserstein Gradient Flows

Paper: https://t.co/5XBKE8s4Ff

Our report: https://t.co/WVp75M9Zs7

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-15T14:41:00.000Z
- **抓取时间**: 2026-06-15T16:18:49.184Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 20 · 🔄 2 · 💬 3 · 🔖 0 · 👁 0
- **关联主题**: [ai-video-queue-economy](/concepts/ai-video-queue-economy.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2066531423700373798) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/ai-video-queue-economy.md)
