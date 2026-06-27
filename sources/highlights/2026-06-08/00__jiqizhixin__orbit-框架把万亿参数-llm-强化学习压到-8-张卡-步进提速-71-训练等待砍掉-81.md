---
type: "source"
title: "Orbit 框架把万亿参数 LLM 强化学习压到 8 张卡：步进提速 71%、训练等待砍掉 81%"
description: "**8 张 GPU 就能 RL 训万亿参数 LLM，RL 训练的算力门槛被打穿。**  - 核心机制：base model 冻结只训轻量 BF16 adapter，把同步 RL 改成稳定高效调度 - 实测指标：step time 提速 71%、rollout 吞吐提升 50%、训练等待时间下降 81% - 已落地验证：Kimi-K2.6、DeepSeek V4-Pro、Qwen3 MoE 三大国产"
resource: "https://x.com/i/status/2064062152961659161"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-08T19:19:03.122Z"
x_tweet_id: "2064062152961659161"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-08T19:09:00.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2064062152961659161"
created: "2026-06-08"
updated: "2026-06-26"
sha256: "aa5207400ea127cbc95674a20d1061387e2a6c05b7ce3cca850dba3886f013d6"
sources:
  - "/sources/highlights/2026-06-08/00__jiqizhixin__orbit-框架把万亿参数-llm-强化学习压到-8-张卡-步进提速-71-训练等待砍掉-81.md"
---

# Orbit 框架把万亿参数 LLM 强化学习压到 8 张卡：步进提速 71%、训练等待砍掉 81%

## 摘要

**8 张 GPU 就能 RL 训万亿参数 LLM，RL 训练的算力门槛被打穿。**

- 核心机制：base model 冻结只训轻量 BF16 adapter，把同步 RL 改成稳定高效调度
- 实测指标：step time 提速 71%、rollout 吞吐提升 50%、训练等待时间下降 81%
- 已落地验证：Kimi-K2.6、DeepSeek V4-Pro、Qwen3 MoE 三大国产模型


gakki 锐评：RLHF/DPO 不再是大厂专属游戏。Orbit 把对齐迭代成本压到中小团队可承受范围，AGI 训练民主化的下一个拐点就在这条路线上。

## 原文

What if you could RL-train trillion-parameter LLMs on just 8 GPUs? 

Enter Orbit, an open-source framework that keeps the base model fixed and trains only a tiny BF16 adapter. 

It outperforms standard sync RL: 71% faster step times, 50% higher rollout throughput, 81% less train waiting. Already proven on Kimi-K2.6, DeepSeek V4-Pro, and Qwen3 MoE. 

Orbit: Stable and Efficient Reinforcement Learning for Trillion-Parameter LLMs

Blog: https://t.co/It3Ya1WtGT
Github: https://t.co/04KFm1D9Dy

Our report: https://t.co/pfy6iXtBG0

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-08T19:09:00.000Z
- **抓取时间**: 2026-06-08T19:19:03.122Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2064062152961659161) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
