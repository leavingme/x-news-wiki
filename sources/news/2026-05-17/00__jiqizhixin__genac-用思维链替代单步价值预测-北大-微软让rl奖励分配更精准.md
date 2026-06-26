---
type: "X Tweet"
title: "GenAC：用思维链替代单步价值预测，北大&微软让RL奖励分配更精准"
description: "**[LLM强化学习奖励估计的范式升级：CoT推理先于价值预测]**  北京大学与微软亚洲研究院联合发布GenAC，提出用生成式批评家替代单步价值预测——在估计奖励前先进行链式思维推理。这一设计解决了传统actor-critic架构中 critic 与不断演化的 actor 对齐难、排名可靠性差的问题。  关键突破： - 价值近似更强，排名可靠性提升，下游RL任务泛化性改善 - 将CoT推理嵌入奖"
resource: "https://x.com/i/status/2056072003921285188"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-17T19:18:10.094Z"
x_tweet_id: "2056072003921285188"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-17T17:59:00.000Z"
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
---

# GenAC：用思维链替代单步价值预测，北大&微软让RL奖励分配更精准

## 摘要

**[LLM强化学习奖励估计的范式升级：CoT推理先于价值预测]**

北京大学与微软亚洲研究院联合发布GenAC，提出用生成式批评家替代单步价值预测——在估计奖励前先进行链式思维推理。这一设计解决了传统actor-critic架构中 critic 与不断演化的 actor 对齐难、排名可靠性差的问题。

关键突破：
- 价值近似更强，排名可靠性提升，下游RL任务泛化性改善
- 将CoT推理嵌入奖励估计环节，而非仅在策略层面做思维链

**gakki锐评：** 这条paper值得追——GenAC的本质是把"让模型先解释再打分"工程化为可学习的组件，是process supervision思路的深化。但离落地还有距离，先收藏。

## 原文

What if LLM reinforcement learning could assign credit more accurately by thinking step by step? 

Researchers from Peking University and Microsoft Research Asia introduce GenAC: a generative critic that replaces one-shot value predictions with chain-of-thought reasoning before estimating rewards, plus a method that keeps the critic aligned with the evolving actor. 

The result? Stronger value approximation, better ranking reliability, improved generalization, and downstream RL performance that beats both value-based and value-free baselines.

Bringing Value Models Back: Generative Critics for Value Modeling in LLM Reinforcement Learning

Paper: https://t.co/G1dMLI5W2L

Our report: https://t.co/1YCPPolTTd

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-17T17:59:00.000Z
- **抓取时间**: 2026-05-17T19:18:10.094Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2056072003921285188) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
