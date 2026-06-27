---
type: "X Tweet"
title: "Sol-RL：NVIDIA用\"先粗后精\"两阶段训练，让图像生成模型学习效率提升4倍"
description: "**一句话核心判断：** 训练效率的量级提升比模型架构创新更难被忽视——4倍速意味着迭代周期的彻底压缩。  **信息增量：** - 第一阶段低精度大规模搜索候选图，第二阶段仅对最优结果高精度重生成 - 在FLUX.1和SD3.5上收敛速度提升数倍，同时对齐人类偏好 - 属于工程优化级别突破，可直接应用到现有训练管线  **gakki锐评：** \"4倍\"不是论文数字，是真实的钱和时间。当训练成本从1"
resource: "https://x.com/i/status/2047317316715880646"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-24T00:42:30.006Z"
x_tweet_id: "2047317316715880646"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-23T14:11:00.000Z"
x_engagement:
  likes: 17
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Sol-RL：NVIDIA用"先粗后精"两阶段训练，让图像生成模型学习效率提升4倍

## 摘要

**一句话核心判断：** 训练效率的量级提升比模型架构创新更难被忽视——4倍速意味着迭代周期的彻底压缩。

**信息增量：**
- 第一阶段低精度大规模搜索候选图，第二阶段仅对最优结果高精度重生成
- 在FLUX.1和SD3.5上收敛速度提升数倍，同时对齐人类偏好
- 属于工程优化级别突破，可直接应用到现有训练管线

**gakki锐评：** "4倍"不是论文数字，是真实的钱和时间。当训练成本从100万美元降到25万，整个行业的创新节奏都会改变。

## 原文

What if you could train AI image generators 4x faster without losing quality?

NVIDIA, HKU, and MIT researchers present Sol-RL.

They use a clever two-stage process: first, a super-fast, low-precision search creates a huge pool of image candidates. Then, they regenerate only the best ones in high precision to train the model.

This method outperforms standard training, achieving superior image alignment with human preferences on models like FLUX.1 and SD3.5, while speeding up convergence by up to 4.64x.

FP4 Explore, BF16 Train: Diffusion Reinforcement Learning via Efficient Rollout Scaling

Paper: https://t.co/eGTGVQonau 
Project: https://t.co/Q8Ayv28TDG 
Code: https://t.co/Yl65dCgEGD

Our report: https://t.co/dsJHRdx7LD

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-23T14:11:00.000Z
- **抓取时间**: 2026-04-24T00:42:30.006Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 17 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2047317316715880646) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
