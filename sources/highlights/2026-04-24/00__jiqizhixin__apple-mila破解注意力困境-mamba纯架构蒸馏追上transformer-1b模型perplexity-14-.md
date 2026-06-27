---
type: "X Tweet"
title: "Apple+MILA破解注意力困境：Mamba纯架构蒸馏追上Transformer，1B模型Perplexity 14.11"
description: "**一句话核心判断** 无需注意力机制的纯Mamba架构，通过两阶段蒸馏（线性化Attention→蒸馏至Mamba）即可匹配Transformer性能，困惑度达14.11，证明架构选择并非性能瓶颈。  **信息增量** - 传统观点认为Attention是Transformer性能核心，但这项研究用数学技巧将Attention转为线性形式再蒸馏，绕过了硬性需求 - 1B参数规模验证了\"小模型+大"
resource: "https://x.com/i/status/2047589950133289417"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-04-24T11:32:27.950Z"
x_tweet_id: "2047589950133289417"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-24T08:14:21.000Z"
x_engagement:
  likes: 25
  retweets: 2
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Apple+MILA破解注意力困境：Mamba纯架构蒸馏追上Transformer，1B模型Perplexity 14.11

## 摘要

**一句话核心判断**
无需注意力机制的纯Mamba架构，通过两阶段蒸馏（线性化Attention→蒸馏至Mamba）即可匹配Transformer性能，困惑度达14.11，证明架构选择并非性能瓶颈。

**信息增量**
- 传统观点认为Attention是Transformer性能核心，但这项研究用数学技巧将Attention转为线性形式再蒸馏，绕过了硬性需求
- 1B参数规模验证了"小模型+大模型蒸馏"的工程可行性，为端侧MoE架构提供了新路径
- 不需要混合结构（Mamba+Attention块），纯Mamba即可，这降低了部署复杂度

**影响评估**
纯Mamba架构追上Transformer，意味着推理成本结构可能重构——Mamba的O(N)线性复杂度对比Attention的O(N²)，在长上下文场景优势显著。端侧AI芯片的基础架构选择可能因此偏移。

**gakki锐评**
这项研究的边界要厘清：蒸馏Recipe是方法创新而非理论否定——Attention仍是高质量推理的"教师"，只是学生不再需要照搬教师的全部结构。商业落地要看能否在保持14.11 perplexity的同时，推理速度提升50%以上，否则工程意义打折。

## 原文

Can you get a Mamba model to perform like a Transformer without adding Attention? 

Researchers from Apple, MILA, and Flat Iron Institute (including Abhinav Moudgil and Ningyuan Huang) have a breakthrough answer.

They introduce a two-step distillation recipe: first, they convert a Transformer’s Attention mechanism into a linear form using a mathematical trick, then distill that into an adapted Mamba model. No hybrid blocks needed.

The result? A pure Mamba-1B model reaches a perplexity of 14.11, nearly matching its Transformer teacher’s 13.86, while keeping Mamba’s speed and memory advantages.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-24T08:14:21.000Z
- **抓取时间**: 2026-04-24T11:32:27.950Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 25 · 🔄 2 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2047589950133289417) — @jiqizhixin (机器之心 JIQIZHIXIN)
