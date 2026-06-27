---
type: "X Tweet"
title: "清华阿里联合发布 ViT^3：测试时在线学习将视觉模型推理复杂度降为线性"
description: "**[测试时训练范式突破：ViT^3 用层内在线学习回路替代全量点积注意力，绕过二次复杂度障碍]**  清华与阿里提出 ViT^3，核心创新是在测试时从 key-value 对动态构建紧凑模型，而非计算完整点积注意力。结果：线性复杂度 + 可并行计算 + 无需额外数据或标签。  这意味着视觉模型在推理阶段可自我适应新场景，边缘部署的算力门槛显著降低。"
resource: "https://x.com/i/status/2059319653717987404"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-26T19:18:40.698Z"
x_tweet_id: "2059319653717987404"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-26T17:04:00.000Z"
x_engagement:
  likes: 21
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "model-capabilities"
x_source: "crawler"
---

# 清华阿里联合发布 ViT^3：测试时在线学习将视觉模型推理复杂度降为线性

## 摘要

**[测试时训练范式突破：ViT^3 用层内在线学习回路替代全量点积注意力，绕过二次复杂度障碍]**

清华与阿里提出 ViT^3，核心创新是在测试时从 key-value 对动态构建紧凑模型，而非计算完整点积注意力。结果：线性复杂度 + 可并行计算 + 无需额外数据或标签。

这意味着视觉模型在推理阶段可自我适应新场景，边缘部署的算力门槛显著降低。

## 原文

What if your vision model could train itself on the fly, without extra data or labels?

Researchers from Tsinghua University and Alibaba Group just unveiled ViT^3 — a pure Test-Time Training architecture that turns attention into a tiny online learning loop inside each layer.

The core idea: instead of computing full dot-product attention, ViT3 builds a compact model from key-value pairs at test time, achieving linear complexity and parallelizable computation — no more quadratic scaling.

Results speak loud: ViT3 consistently matches or beats advanced linear models like Mamba and linear attention variants across image classification, generation, object detection, and semantic segmentation, while narrowing the gap to optimized vision Transformers.

ViT^3: Unlocking Test-Time Training in Vision

Paper: https://t.co/6rjAj3XnQP
Code: https://t.co/rX5XttYJeg

Our report: https://t.co/k5hzs5sw45

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-26T17:04:00.000Z
- **抓取时间**: 2026-05-26T19:18:40.698Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 21 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2059319653717987404) — @jiqizhixin (机器之心 JIQIZHIXIN)
