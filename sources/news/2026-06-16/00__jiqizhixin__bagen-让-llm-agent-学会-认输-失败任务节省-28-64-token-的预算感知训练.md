---
type: "X Tweet"
title: "BAGEN：让 LLM Agent 学会'认输'，失败任务节省 28-64% token 的预算感知训练"
description: "Northwestern、Michigan、Cornell、Stanford 等联合发布 BAGEN 框架，核心问题：Agent 怎么学会及时止损？  方法：训练 Agent 预测任务剩余预算区间并提前告警，而非盲目烧 token。  关键发现： - 强 Agent 普遍缺乏预算感知（r≈0.35） - 前沿模型过度乐观 - BAGEN 提前停止可在失败轨迹上节省 28-64% token - S"
resource: "https://x.com/i/status/2066933826740535440"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-16T19:19:25.367Z"
x_tweet_id: "2066933826740535440"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-16T17:20:00.000Z"
x_engagement:
  likes: 8
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# BAGEN：让 LLM Agent 学会'认输'，失败任务节省 28-64% token 的预算感知训练

## 摘要

Northwestern、Michigan、Cornell、Stanford 等联合发布 BAGEN 框架，核心问题：Agent 怎么学会及时止损？

方法：训练 Agent 预测任务剩余预算区间并提前告警，而非盲目烧 token。

关键发现：
- 强 Agent 普遍缺乏预算感知（r≈0.35）
- 前沿模型过度乐观
- BAGEN 提前停止可在失败轨迹上节省 28-64% token
- SFT+RL 改善告警能力，但精确校准上限仅 47%

Gakki 锐评：Agent 烧 token 的本质是'不肯认输'——这和人类死磕难题的心理一致。BAGEN 的价值不在于多省 30% 算力，而在于把'该不该放弃'这个判断从 prompt 层面下沉到了模型能力层。47% 校准上限说明这条路还远。

## 原文

Can AI agents learn to stop wasting resources on doomed tasks? 

Researchers from Northwestern, Michigan, Cornell, Stanford & others introduce BAGEN. 

It trains agents to predict remaining budget intervals and alert users early, instead of blindly overspending. 

Key results: strong agents lack budget-awareness (r≈0.35), frontier models are over-optimistic. BAGEN early stops save 28-64% tokens on failing trajectories; SFT+RL improves alerts but precise calibration caps at 47%.

BAGEN: Are LLM Agents Budget-Aware?

Project: https://t.co/vNi9dADyzB
Code: https://t.co/NZzWPi1vu0
Dataset: https://t.co/S4PUVqgX2B
Paper: https://t.co/BcUxaUTszv

Our report: https://t.co/MFa300mLyk

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-16T17:20:00.000Z
- **抓取时间**: 2026-06-16T19:19:25.367Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 8 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2066933826740535440) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
