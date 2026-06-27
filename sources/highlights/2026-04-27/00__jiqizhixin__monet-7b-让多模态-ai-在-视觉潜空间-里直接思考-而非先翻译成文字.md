---
type: "X Tweet"
title: "Monet-7B：让多模态 AI 在「视觉潜空间」里直接思考，而非先翻译成文字"
description: "**[视觉原生推理：多模态 AI 的一次路线切换]**  北京大学、Kling 团队与 Amazon AGI 联合推出 Monet-7B，核心突破是让多模态模型在视觉潜空间（visual latent space）内直接进行推理——不再依赖文本中转或调用外部图像生成器。模型生成连续的视觉嵌入作为「心理图像」，配合三阶段蒸馏 SFT 流程克服对齐成本。  这意味着 AI 看图时的推理路径，从「图→文"
resource: "https://x.com/i/status/2048598010649530847"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-04-27T04:20:06.805Z"
x_tweet_id: "2048598010649530847"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-27T03:00:01.000Z"
x_engagement:
  likes: 11
  retweets: 1
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Monet-7B：让多模态 AI 在「视觉潜空间」里直接思考，而非先翻译成文字

## 摘要

**[视觉原生推理：多模态 AI 的一次路线切换]**

北京大学、Kling 团队与 Amazon AGI 联合推出 Monet-7B，核心突破是让多模态模型在视觉潜空间（visual latent space）内直接进行推理——不再依赖文本中转或调用外部图像生成器。模型生成连续的视觉嵌入作为「心理图像」，配合三阶段蒸馏 SFT 流程克服对齐成本。

这意味着 AI 看图时的推理路径，从「图→文字描述→文字推理→生成文字结论」，压缩为「图→视觉推理→直接输出」。

gakki：路线之争的本质是：多模态 AI 到底是增强版文本推理器，还是真正的视觉优先智能？Monet-7B 代表后者——如果这条路走通，现有所有依赖 VLM 架构的产品都面临重构压力。

## 原文

What if your AI could truly “think in pictures,” not just describe them? 

Researchers from Peking University, Kling Team, and Amazon AGI introduce Monet-7B, a new framework that lets multimodal AI reason directly inside visual latent space—no external tools needed.

Instead of relying on text or image generators for intermediate steps, Monet generates continuous visual embeddings as “mental images.” It uses a three-stage distillation SFT pipeline to overcome high alignment costs and weak embedding supervision.

To boost latent reasoning, the team created VLPO, a reinforcement learning method that updates policy gradients with latent embeddings—unlike standard GRPO which mainly improves text reasoning. They also built Monet-SFT-125K, a high-quality dataset of 125K real-world, chart, OCR, and geometry chain-of-thought examples.

Monet-7B achieves consistent gains across real-world perception and reasoning benchmarks and demonstrates strong out-of-distribution performance on abstract visual reasoning tasks. Code, data, and model available at the link above.

Monet: Reasoning in Latent Visual Space Beyond Images and Language

Paper: https://t.co/5JDTL1Ebs1
Code: https://t.co/VBa5K7aLe4
Model: https://t.co/rLWiTuadMo
Dataset: https://t.co/nsuxZFvGs7

Our report: https://t.co/KB26rDx00c

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-27T03:00:01.000Z
- **抓取时间**: 2026-04-27T04:20:06.805Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 11 · 🔄 1 · 💬 3 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2048598010649530847) — @jiqizhixin (机器之心 JIQIZHIXIN)
