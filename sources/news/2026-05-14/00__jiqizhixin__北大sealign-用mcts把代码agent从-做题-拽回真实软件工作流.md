---
type: "X Tweet"
title: "北大SEAlign：用MCTS把代码Agent从「做题」拽回真实软件工作流"
description: "**[代码Agent终于开始解决真实工程问题了]**  北大团队发现现有代码模型在真实软件工程场景表现差，根源是训练范式错了——一直在用编程谜题训练，而不是真实工作流。于是推出SEAlign框架，用蒙特卡洛树搜索（MCTS）微调多步决策，关键动作优化。  结果：在HumanEvalFix、SWE-Bench-Lite、SWE-Bench-Verified三个主流基准上均达SOTA，且额外训练量极少"
resource: "https://x.com/i/status/2054807672688427025"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-14T07:18:35.468Z"
x_tweet_id: "2054807672688427025"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-14T06:15:00.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 北大SEAlign：用MCTS把代码Agent从「做题」拽回真实软件工作流

## 摘要

**[代码Agent终于开始解决真实工程问题了]**

北大团队发现现有代码模型在真实软件工程场景表现差，根源是训练范式错了——一直在用编程谜题训练，而不是真实工作流。于是推出SEAlign框架，用蒙特卡洛树搜索（MCTS）微调多步决策，关键动作优化。

结果：在HumanEvalFix、SWE-Bench-Lite、SWE-Bench-Verified三个主流基准上均达SOTA，且额外训练量极少。更关键的是他们搭建了配套Agent平台。

**影响：**
- 行业信号：代码Agent评估体系正在从「刷榜基准」向「真实工程表现」迁移
- 工程价值：MCTS引入意味着Agent规划层从通用推理中分化出来，有了自己的专门训练范式
- 这是国内学术团队在Agent评测基建上的实质性贡献，而非简单复现

gakki：刷榜归刷榜，工程归工程。SEAlign的价值不在于又刷出一个SOTA，而在于它承认了「现有评测体系不能反映真实能力」这件事本身。学术界终于开始做benchmark无法测量的那部分工作了。

## 原文

Why can't top code models handle real-world software engineering?

Researchers from Peking University unveil SEAlign -- a new alignment framework that trains code agents on actual software workflows. 

Instead of just solving coding puzzles, it uses Monte Carlo Tree Search to fine-tune multi-step decisions and optimizes critical actions.

Result: state-of-the-art performance on HumanEvalFix, SWE-Bench-Lite, and SWE-Bench-Verified -- with minimal extra training. They even built an agent platform that creates working small apps. Real-world code automation just got closer.

SEAlign: Alignment Training for Software Engineering Agent

Paper: https://t.co/Y3tv7wgc1n

Our report: https://t.co/pC89D50ysv

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-14T06:15:00.000Z
- **抓取时间**: 2026-05-14T07:18:35.468Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2054807672688427025) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
