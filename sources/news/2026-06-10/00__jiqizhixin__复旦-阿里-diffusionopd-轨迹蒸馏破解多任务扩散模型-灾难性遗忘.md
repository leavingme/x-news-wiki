---
type: "X Tweet"
title: "复旦+阿里 DiffusionOPD：轨迹蒸馏破解多任务扩散模型「灾难性遗忘」"
description: "**多任务 T2I 模型的训练范式，从 joint training 转向轨迹蒸馏成为新的解题路径。**  要点： - 复旦+阿里提出 DiffusionOPD：先分别训练多个专家教师，再沿自身 rollout 轨迹把知识蒸馏进单一学生模型 - 核心机制：解耦学习过程，从根本上规避跨任务干扰，绕过 multi-reward RL 与 cascade RL 的天花板 - 结果：所有 benchmar"
resource: "https://x.com/i/status/2064566476024254631"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-10T07:19:19.877Z"
x_tweet_id: "2064566476024254631"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-10T04:33:00.000Z"
x_engagement:
  likes: 5
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 复旦+阿里 DiffusionOPD：轨迹蒸馏破解多任务扩散模型「灾难性遗忘」

## 摘要

**多任务 T2I 模型的训练范式，从 joint training 转向轨迹蒸馏成为新的解题路径。**

要点：
- 复旦+阿里提出 DiffusionOPD：先分别训练多个专家教师，再沿自身 rollout 轨迹把知识蒸馏进单一学生模型
- 核心机制：解耦学习过程，从根本上规避跨任务干扰，绕过 multi-reward RL 与 cascade RL 的天花板
- 结果：所有 benchmark 取得 SOTA，全面超过联合训练与多奖励强化学习基线


学术价值之外，对工业界真正的意义是「多任务 T2I」从「联合训练赌博」变成「可组合的专家+蒸馏流水线」——这类方法学接下来半年会被快速复刻到视频、3D 方向。

## 原文

Can one diffusion model master multiple text-to-image tasks without forgetting?

Researchers from Fudan University & Alibaba Group present DiffusionOPD. 

Instead of joint training, they first train separate expert teachers, then distill their knowledge into a single student along its own rollout. This decouples learning and avoids cross-task interference.

Result: Outperforms both multi-reward RL and cascade RL baselines, achieving state-of-the-art on all benchmarks.

DiffusionOPD: A Unified Perspective of On-Policy Distillation in Diffusion Models 

Paper: https://t.co/j0ehhYqLOC
Project: https://t.co/JSUN5xMRUR
Code: https://t.co/yOJC1Ndm32

Our report: https://t.co/WjqtQhGfD0

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-10T04:33:00.000Z
- **抓取时间**: 2026-06-10T07:19:19.877Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 5 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2064566476024254631) — @jiqizhixin (机器之心 JIQIZHIXIN)
