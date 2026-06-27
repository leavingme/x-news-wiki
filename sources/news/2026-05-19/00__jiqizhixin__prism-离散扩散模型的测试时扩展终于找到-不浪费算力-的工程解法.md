---
type: "X Tweet"
title: "PRISM：离散扩散模型的测试时扩展终于找到「不浪费算力」的工程解法"
description: "**一句话核心判断：** PRISM 提出分层搜索 + 局部分支 + 自验证的组合，首次让离散扩散语言模型在数学推理和代码生成任务上以更低计算代价追上 Best-of-N 基线。  **信息增量：** - 来自 NUS、Georgia Tech 等机构的联合研究，针对 dLLM 的测试时扩展难题给出具体工程路径 - 核心突破：早停（early pruning）机制避免了在低质量 token 上的无"
resource: "https://x.com/i/status/2056802316129321168"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-19T19:18:53.710Z"
x_tweet_id: "2056802316129321168"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-19T18:21:00.000Z"
x_engagement:
  likes: 2
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "reasoning-and-model-architecture"
x_source: "crawler"
---

# PRISM：离散扩散模型的测试时扩展终于找到「不浪费算力」的工程解法

## 摘要

**一句话核心判断：** PRISM 提出分层搜索 + 局部分支 + 自验证的组合，首次让离散扩散语言模型在数学推理和代码生成任务上以更低计算代价追上 Best-of-N 基线。

**信息增量：**
- 来自 NUS、Georgia Tech 等机构的联合研究，针对 dLLM 的测试时扩展难题给出具体工程路径
- 核心突破：早停（early pruning）机制避免了在低质量 token 上的无效算力消耗
- 在数学推理和代码生成 benchmark 上验证有效，具备落地价值

**gakki 锐评：** 扩散模型做语言生成的「推理效率」一直是工程缺口，PRISM 的方向如果可复现，将动摇「只有自回归模型才能做好推理」的既有认知——但 4B/8B 参数规模的生产环境表现仍待验证。

## 原文

What if AI could scale its reasoning without wasting compute? 

Researchers from NUS, Georgia Tech, and other institutions present PRISM — a test-time scaling method for discrete diffusion language models (dLLMs). 

It uses hierarchical search to prune and reallocate compute early, local branching to explore diverse outputs while keeping confident tokens, and self-verification instead of external checks. 

On math reasoning and code generation benchmarks, PRISM matches best-of-N performance with far fewer function evaluations. Efficient reasoning, unlocked.

Prism: Efficient Test-Time Scaling via Hierarchical Search and Self-Verification for Discrete Diffusion Language Models

arXiv: https://t.co/9E8uITuMhX
Code: https://t.co/yH3qVdAicb

Our report: https://t.co/ydAa1bLTAw

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-19T18:21:00.000Z
- **抓取时间**: 2026-05-19T19:18:53.710Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2056802316129321168) — @jiqizhixin (机器之心 JIQIZHIXIN)
