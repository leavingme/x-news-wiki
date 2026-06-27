---
type: "X Tweet"
title: "统一图像迁移新范式：DRDD 解耦噪声与残差扩散，用更少数据跑赢主流模型"
description: "**港大与中科院等团队提出 DRDD：把图像迁移任务拆成「噪声扩散对齐域」+「确定��映射学核心」两阶段，避免过早擦除有效信号。**  - 关键设计：用丰富的无配对数据做噪声扩散做域对齐，再用确定性阶段学习核心映射，不再做「贪心」一步到位 - 在统一、低数据量的图像到图像迁移场景下，DRDD 优于主流扩散模型 - 对多任务统一模型和少样本微调路径有方法论参考价值   gakki 锐评：把 diff"
resource: "https://x.com/i/status/2069481865027654036"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-23T19:18:27.108Z"
x_tweet_id: "2069481865027654036"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-23T18:05:00.000Z"
x_engagement:
  likes: 2
  retweets: 1
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 统一图像迁移新范式：DRDD 解耦噪声与残差扩散，用更少数据跑赢主流模型

## 摘要

**港大与中科院等团队提出 DRDD：把图像迁移任务拆成「噪声扩散对齐域」+「确定��映射学核心」两阶段，避免过早擦除有效信号。**

- 关键设计：用丰富的无配对数据做噪声扩散做域对齐，再用确定性阶段学习核心映射，不再做「贪心」一步到位
- 在统一、低数据量的图像到图像迁移场景下，DRDD 优于主流扩散模型
- 对多任务统一模型和少样本微调路径有方法论参考价值


gakki 锐评：把 diffusion 拆成"对齐"和"映射"两阶段并不性感，但它解决的是 image-to-image 任务里数据稀缺的真实痛点——比堆数据的 SOTA 更值得工程团队关注。

## 原文

What if one diffusion model could handle any image-to-image task, even with limited data?

Researchers from University of Hong Kong, Chinese Academy of Sciences, and partners present DRDD: a new approach that decouples noise and residual diffusion. 

First, noise diffusion aligns image domains using abundant unpaired data. Then, a deterministic stage learns the core mapping — no premature erasure.

Result: DRDD outperforms mainstream diffusion models in unified, data-efficient image-to-image translation, especially under limited paired data.

Decoupled Residual Denoising Diffusion Models for Unified and Data Efficient Image-to-Image Translation

Project: https://t.co/V4r4ATZGqF
arXiv: https://t.co/PAE6Vry8Sx
CVPR: https://t.co/E4u6Nt329H

Our report: https://t.co/UsieHczFzh

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-23T18:05:00.000Z
- **抓取时间**: 2026-06-23T19:18:27.108Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 1 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2069481865027654036) — @jiqizhixin (机器之心 JIQIZHIXIN)
