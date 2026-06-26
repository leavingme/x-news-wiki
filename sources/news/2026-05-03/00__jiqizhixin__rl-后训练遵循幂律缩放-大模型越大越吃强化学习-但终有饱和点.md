---
type: "X Tweet"
title: "RL 后训练遵循幂律缩放：大模型越大越吃强化学习，但终有饱和点"
description: "**大模型 RL 后训练存在可预测的幂律关系，但效率天花板清晰可见。**  - 中科大、牛津、上海 AI Lab 联合测试 Qwen2.5 系列（0.5B-72B），发现大模型在 RL 训练中计算效率和数据效率均显著更高 - 性能随资源投入呈可预测幂律增长，但大模型 RL 效率最终会饱和 - 数据受限时，总数据量比样本多样性更重要——这对小团队 RL 训练策略有直接指导意义  锐评：这篇论文的价值"
resource: "https://x.com/i/status/2051006376722436409"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-03T19:18:31.058Z"
x_tweet_id: "2051006376722436409"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-03T18:30:00.000Z"
x_engagement:
  likes: 9
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "推理与模型架构"
x_source: "crawler"
---

# RL 后训练遵循幂律缩放：大模型越大越吃强化学习，但终有饱和点

## 摘要

**大模型 RL 后训练存在可预测的幂律关系，但效率天花板清晰可见。**

- 中科大、牛津、上海 AI Lab 联合测试 Qwen2.5 系列（0.5B-72B），发现大模型在 RL 训练中计算效率和数据效率均显著更高
- 性能随资源投入呈可预测幂律增长，但大模型 RL 效率最终会饱和
- 数据受限时，总数据量比样本多样性更重要——这对小团队 RL 训练策略有直接指导意义

锐评：这篇论文的价值不在于"大模型更好"这个废话结论，而在于给出了可量化的缩放曲线。对正在做 RL post-training 的团队来说，知道"投入到哪条线开始边际递减"比盲目堆数据有意义得多。

## 原文

Why do larger LLMs get even better with reinforcement learning post-training?

Researchers from USTC, Oxford, and Shanghai AI Lab reveal how scaling RL training works for math reasoning.

They tested the Qwen2.5 series (0.5B to 72B) and found:

- Larger models are more compute- and data-efficient.
- Performance follows a predictable power law as you scale up resources.
- RL efficiency eventually saturates with bigger models.
- When data is limited, total data volume matters more than sample uniqueness.

Scaling Behaviors of LLM Reinforcement Learning Post-Training: An Empirical Study in Mathematical Reasoning

Paper: https://t.co/wTMJvkHgqt
Code: https://t.co/SVqTdpTNP1

Our report: https://t.co/kLwiQvr3uW

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-03T18:30:00.000Z
- **抓取时间**: 2026-05-03T19:18:31.058Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 9 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
- **关联主题**: [推理与模型架构](/concepts/推理与模型架构.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2051006376722436409) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/推理与模型架构.md)
