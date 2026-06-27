---
type: "X Tweet"
title: "北大+盛大等机构提出MSA：100M Token线性效率处理，长记忆不再是奢侈品"
description: "**[一句话核心判断]** Evermind、盛大集团、北大联合发布Memory Sparse Attention（MSA）框架，用稀疏注意力架构在2×A800上实现1亿Token线性效率处理，精度损失不足9%——这意味着「终身记忆」正式进入可工程化阶段。  - 传统长上下文方案的痛点：计算复杂度随Token数量平方增长，上下文窗口再大也是奢侈 - MSA的稀疏注意力架构实现线性效率，100M T"
resource: "https://x.com/i/status/2039710695235698738"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-04-02T21:49:22.942Z"
x_tweet_id: "2039710695235698738"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-02T14:25:00.000Z"
x_engagement:
  likes: 13
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 北大+盛大等机构提出MSA：100M Token线性效率处理，长记忆不再是奢侈品

## 摘要

**[一句话核心判断]**
Evermind、盛大集团、北大联合发布Memory Sparse Attention（MSA）框架，用稀疏注意力架构在2×A800上实现1亿Token线性效率处理，精度损失不足9%——这意味着「终身记忆」正式进入可工程化阶段。

- 传统长上下文方案的痛点：计算复杂度随Token数量平方增长，上下文窗口再大也是奢侈
- MSA的稀疏注意力架构实现线性效率，100M Token仅需2×A800 GPU
- 精度损失控制在9%以内——对于记忆类任务，这是可接受的工程代价
- 端到端可训练，非冻结的RAG方案，记忆可以随模型一同优化

对Agent记忆基础设施的影响：当前Agent的记忆系统依赖外部向量数据库，本质上是「外挂」。MSA若工程可行，Agent的内生记忆将能跨越长程任务，不再受限于固定上下文窗口。这是记忆基础设施的范式转移。

gakki 的锐评： 9%的精度损失换线性扩展，听起来是划算的。但我更关注的是：这是端到端可训练的——意味着记忆本身可以被学习、被精炼。如果与EdgeClaw等开源记忆基础设施结合，Agent将真正拥有「经验」而非只是「数据」。

## 原文

Can AI models finally process context the size of a lifetime? 

Evermind, Shanda Group, and Peking University present Memory Sparse Attention (MSA)! 

This new framework gives AI a massively scalable, end-to-end trainable long-term memory. 

It uses an innovative sparse attention architecture and other techniques to handle hundreds of millions of tokens with linear efficiency, maintaining exceptional precision. MSA processes 100M tokens on 2xA800 GPUs with less than 9% precision degradation from 16K. It significantly outperforms frontier LLMs, SOTA RAG systems, and leading memory agents in long-context benchmarks, paving the way for lifetime-scale AI memory.

MSA: Memory Sparse Attention for Efficient End-to-End Memory Model Scaling to 100M Tokens

Code: https://t.co/wIIv6wVjtT
Paper: https://t.co/era6PO9Z9g

Our report: https://t.co/AYrROWE2ES

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-02T14:25:00.000Z
- **抓取时间**: 2026-04-02T21:49:22.942Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 13 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2039710695235698738) — @jiqizhixin (机器之心 JIQIZHIXIN)
