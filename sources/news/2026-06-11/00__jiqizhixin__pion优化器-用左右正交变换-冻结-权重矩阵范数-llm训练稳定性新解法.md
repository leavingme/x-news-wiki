---
type: "source"
title: "Pion优化器：用左右正交变换\"冻结\"权重矩阵范数，LLM训练稳定性新解法"
description: "**Pion走了一条\"不调标量、调几何\"的优化路线，绕开 Adam/Muon 的累加式补丁。**  -来自港中文、Max Planck、西湖大学的研究者提出 Pion：对每个权重矩阵施加左右正交变换，只重塑\"形状\"不改变\"大小\"，奇异值保持不变 - 与 Adam（动量累加）、Muon（Newton-Schulz迭代近似正交）等主流方案相比，Pion 是真正严格的正交化，理论性质更干净 - 在多项基"
resource: "https://x.com/i/status/2065087409268650091"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-11T16:19:07.670Z"
x_tweet_id: "2065087409268650091"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-11T15:03:00.000Z"
x_engagement:
  likes: 3
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2065087409268650091"
created: "2026-06-11"
updated: "2026-06-26"
sha256: "d0fd8b2b7467f9f2efd724de3957c0d35e5803551d10661386e7480517a6c9d1"
sources:
  - "/sources/news/2026-06-11/00__jiqizhixin__pion优化器-用左右正交变换-冻结-权重矩阵范数-llm训练稳定性新解法.md"
---

# Pion优化器：用左右正交变换"冻结"权重矩阵范数，LLM训练稳定性新解法

## 摘要

**Pion走了一条"不调标量、调几何"的优化路线，绕开 Adam/Muon 的累加式补丁。**

-来自港中文、Max Planck、西湖大学的研究者提出 Pion：对每个权重矩阵施加左右正交变换，只重塑"形状"不改变"大小"，奇异值保持不变
- 与 Adam（动量累加）、Muon（Newton-Schulz迭代近似正交）等主流方案相比，Pion 是真正严格的正交化，理论性质更干净
- 在多项基准上跑出稳定且有竞争力的结果，意味着大模型预训练又多一个可选项


Pion 的价值不在"又多了个 SOTA"，而在它换了一个自由度做文章：当所有人都在调学习率、累加项时，它去动权重矩阵的几何结构。短期难撼 Adam 系生态，但给"训练稳定性"这道老题提供了一个更优雅的数学视角。

## 原文

Can a new optimizer keep your LLM training stable without sacrificing performance?

Researchers at Chinese University of Hong Kong, Max Planck Institute, and Westlake University introduce Pion. 

Instead of adding adjustments like Adam or Muon, Pion rotates each weight matrix using left and right orthogonal transformations. This keeps the matrix’s singular values – its core scale – unchanged, letting it reshape the geometry while holding the norm fixed.

Results show Pion is a stable, competitive alternative to standard optimizers for both LLM pretraining and fine-tuning – matching or exceeding performance without the usual training instabilities.

Pion: A Spectrum-Preserving Optimizer via Orthogonal Equivalence Transformation

Paper: https://t.co/7R9EqYRyX6
Code: https://t.co/N5VW8phNTj

Our report: https://t.co/aRB9QJCN6c

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-11T15:03:00.000Z
- **抓取时间**: 2026-06-11T16:19:07.670Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2065087409268650091) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
