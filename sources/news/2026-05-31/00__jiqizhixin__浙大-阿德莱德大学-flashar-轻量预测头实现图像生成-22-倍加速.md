---
type: "X Tweet"
title: "浙大+阿德莱德大学 FlashAR：轻量预测头实现图像生成 22 倍加速"
description: "**一句话核心判断** 现有自回归图像生成模型无需重训练，通过追加轻量垂直预测头实现并行双向 token 预测，512×512 生成速度提升最高 22.9 倍，仅增加 0.05% 参数量。  **要点** - 核心创新：垂直预测头（vertical prediction head）动态组合水平+垂直预测，保持原始训练目标不变 - 加速比：22.9 倍（512×512），远超同期扩散模型优化方案 -"
resource: "https://x.com/i/status/2061157010121617743"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-31T19:18:42.635Z"
x_tweet_id: "2061157010121617743"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-31T18:45:00.000Z"
x_engagement:
  likes: 4
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 浙大+阿德莱德大学 FlashAR：轻量预测头实现图像生成 22 倍加速

## 摘要

**一句话核心判断**
现有自回归图像生成模型无需重训练，通过追加轻量垂直预测头实现并行双向 token 预测，512×512 生成速度提升最高 22.9 倍，仅增加 0.05% 参数量。

**要点**
- 核心创新：垂直预测头（vertical prediction head）动态组合水平+垂直预测，保持原始训练目标不变
- 加速比：22.9 倍（512×512），远超同期扩散模型优化方案
- 零重训练成本：直接叠加在现有 AR 模型之上，部署门槛极低

**gakki 锐评**
图像生成进入「推理效率优先」阶段——不是模型变大，而是让现有模型跑得更快。这条路线一旦工程化落地，将直接动摇 diffusion 架构的效率护城河。

## 原文

What if you could speed up AI image generation by 22x without retraining from scratch? 

Researchers from Zhejiang University and the University of Adelaide introduce FlashAR. 

They add a lightweight vertical prediction head to existing autoregressive models, enabling parallel two-way next-token prediction. This preserves the original training objective while dynamically combining horizontal and vertical predictions. 

Result: up to 22.9x speedup for 512x512 image generation, using just 0.05% of the original training data.

FlashAR: Efficient Post-Training Acceleration for Autoregressive Image Generation

Project: https://t.co/SX3AzDmHKS
Paper: https://t.co/AAioG5WRic
Code: https://t.co/baNSMUVYYD

Our report: https://t.co/gBRu5ktZ4q

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-31T18:45:00.000Z
- **抓取时间**: 2026-05-31T19:18:42.635Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 4 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2061157010121617743) — @jiqizhixin (机器之心 JIQIZHIXIN)
