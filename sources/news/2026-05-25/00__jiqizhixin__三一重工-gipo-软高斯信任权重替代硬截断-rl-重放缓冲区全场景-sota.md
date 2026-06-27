---
type: "source"
title: "三一重工 GIPO：软高斯信任权重替代硬截断，RL 重放缓冲区全场景 SOTA"
description: "**【一句话核心判断】**  三一重工研究团队提出 GIPO（Gaussian Importance Sampling Policy Optimization），用软高斯信任权重替代传统硬截断（hard clipping），在 replay buffer 从新鲜到陈旧的全场景下均达 SOTA，bias-variance  trade-off 更优、梯度保持活跃、样本效率显著提升。  **信息增量："
resource: "https://x.com/i/status/2058831968448679962"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-25T10:18:39.543Z"
x_tweet_id: "2058831968448679962"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-25T08:46:07.000Z"
x_engagement:
  likes: 6
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2058831968448679962"
created: "2026-05-25"
updated: "2026-06-26"
sha256: "e42d5b9a25abef9b4d47e5055ad5cd8c916f1c69afe4e257fd775427f765429e"
sources:
  - "/sources/news/2026-05-25/00__jiqizhixin__三一重工-gipo-软高斯信任权重替代硬截断-rl-重放缓冲区全场景-sota.md"
---

# 三一重工 GIPO：软高斯信任权重替代硬截断，RL 重放缓冲区全场景 SOTA

## 摘要

**【一句话核心判断】**

三一重工研究团队提出 GIPO（Gaussian Importance Sampling Policy Optimization），用软高斯信任权重替代传统硬截断（hard clipping），在 replay buffer 从新鲜到陈旧的全场景下均达 SOTA，bias-variance  trade-off 更优、梯度保持活跃、样本效率显著提升。

**信息增量：**
- 解决了 RL 中长期存在的「灾难性遗忘」与「极端更新」难以平衡的问题
- 方法论上从「约束边界」转向「概率软衰减」，工程可复现性强
- 实验覆盖全 replay buffer 尺寸，泛化性有说服力

**影响评估：**
该研究直接利好需要持续从历史数据学习的 Agent 场景（机器人控制、长期决策 Agent），但尚未形成明确商业化路径，属基础研究突破。


**gakki 锐评：** GIPO 的软截断思路本质上是把「约束」变成「概率」，和 RLHF 里用 KL 散度做 trust region 的逻辑一脉相承——工程直觉是对的，但能不能 Scale 是另一回事。三一重工这种重型制造业玩家在 RL 机器人控制上押注，说明具身智能的落地窗口正在从实验室向工厂前移。

## 原文

What if your AI agent could learn faster from older data without forgetting or crashing? 

Researchers from Sany Group present GIPO (Gaussian Importance Sampling Policy Optimization).

Instead of hard clipping, it uses a soft Gaussian trust weight to gently limit extreme updates while keeping gradients alive. 

Result: state-of-the-art performance across all replay buffer sizes, from fresh to stale data, with better bias-variance trade-off, higher stability, and improved sample efficiency.

GIPO: Gaussian Importance Sampling Policy Optimization

Paper: https://t.co/xwFKG0WOva

Our report: https://t.co/zcRov3hlcE

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-25T08:46:07.000Z
- **抓取时间**: 2026-05-25T10:18:39.543Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 6 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2058831968448679962) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
