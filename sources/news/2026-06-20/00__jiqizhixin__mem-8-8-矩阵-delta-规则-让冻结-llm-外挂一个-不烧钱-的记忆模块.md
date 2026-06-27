---
type: "X Tweet"
title: "δ-mem：8×8 矩阵+Delta 规则，让冻结 LLM 外挂一个「不烧钱」的记忆模块"
description: "[NTU×复旦×Mind Lab 给出 Agent 记忆的轻量新解]  - δ-mem 是一个独立小模块，把历史信息压缩进固定大小矩阵，通过 delta 规则增量更新 - 矩阵再通过调整 LLM 的 attention 召回相关历史，无需重训模型 - 8×8 状态就能在 MemoryAgent 任务上比冻结基线提升 1.31x，比其他记忆方法也高出 1.15x  锐评：比 RAG 和上下文摘要都更"
resource: "https://x.com/i/status/2068189599504175262"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-20T07:18:13.335Z"
x_tweet_id: "2068189599504175262"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-20T04:30:00.000Z"
x_engagement:
  likes: 12
  retweets: 7
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# δ-mem：8×8 矩阵+Delta 规则，让冻结 LLM 外挂一个「不烧钱」的记忆模块

## 摘要

[NTU×复旦×Mind Lab 给出 Agent 记忆的轻量新解]

- δ-mem 是一个独立小模块，把历史信息压缩进固定大小矩阵，通过 delta 规则增量更新
- 矩阵再通过调整 LLM 的 attention 召回相关历史，无需重训模型
- 8×8 状态就能在 MemoryAgent 任务上比冻结基线提升 1.31x，比其他记忆方法也高出 1.15x

锐评：比 RAG 和上下文摘要都更省 Token，「冻结 LLM + 外挂矩阵」路线是 Agent 长期记忆的潜在解法。但论文数据到生产部署还有距离——真正的考验是 100K+ 长程任务里的稳定性，以及和向量检索的混合策略能不能搭。

## 原文

What if your LLM could remember everything without rewriting its entire memory?

Researchers from NTU, Fudan, and Mind Lab present δ-mem.

It’s a tiny memory module that compresses past info into a fixed-size matrix, updated via a simple delta rule. This matrix then tweaks the LLM’s attention to recall relevant history.

With just an 8x8 state, δ-mem beats the frozen backbone by 1.10x and outperforms other memory methods by 1.15x. Gains are even bigger on memory-heavy tasks: 1.31x on MemoryAgentBench, 1.20x on LoCoMo. All without fine-tuning!

δ-mem: Efficient Online Memory for Large Language Models

Paper: https://t.co/iND2TBh6Qz
Code: https://t.co/wQkTWj5IPH

Our report: https://t.co/s9bTS24SvN

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-20T04:30:00.000Z
- **抓取时间**: 2026-06-20T07:18:13.335Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 12 · 🔄 7 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2068189599504175262) — @jiqizhixin (机器之心 JIQIZHIXIN)
