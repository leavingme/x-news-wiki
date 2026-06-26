---
type: "X Tweet"
title: "RMS-MoE 用「专家记忆」把 MoE 延迟砍掉 26%，路由稳定性还提升了 3.3%"
description: "**MoE 的核心缺陷被找到了：相似输入反复重算同一批专家。**  南京大学 + 马上消费金融 + 阿里团队提出 Co-Activation Memory 机制——记住历史最优专家组合，配合可学习门控与实时预测融合。在大规模搜索和对话任务上：26% 延迟降低、2.7 点精度提升、3.3% 路由稳定性提升。  **信息增量：** 这是第一篇把 MoE 路由重复计算问题当成核心问题来解决并有量化收益的"
resource: "https://x.com/i/status/2055844504855265319"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-17T04:18:53.123Z"
x_tweet_id: "2055844504855265319"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-17T02:55:00.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "moe-edge-compute-monopoly"
x_source: "crawler"
---

# RMS-MoE 用「专家记忆」把 MoE 延迟砍掉 26%，路由稳定性还提升了 3.3%

## 摘要

**MoE 的核心缺陷被找到了：相似输入反复重算同一批专家。**

南京大学 + 马上消费金融 + 阿里团队提出 Co-Activation Memory 机制——记住历史最优专家组合，配合可学习门控与实时预测融合。在大规模搜索和对话任务上：26% 延迟降低、2.7 点精度提升、3.3% 路由稳定性提升。

**信息增量：** 这是第一篇把 MoE 路由重复计算问题当成核心问题来解决并有量化收益的论文，且来自工业场景验证而非学术 toy task。



**gakki：** 26% 延迟改善在推理成本敏感的当下不是小数字——阿里背景团队做这个，实用导向明显。

## 原文

Why do Mixture-of-Experts models keep re-computing the same expert choices for similar inputs? 

Researchers from Mashang Consumer Finance, Nanjing University, and Alibaba Group introduce RMS-MoE: they add a Co-Activation Memory that remembers which expert teams worked best for past queries, then blends that memory with live predictions using a learnable gate. 

Result: 26% less latency, 2.7-point accuracy gain, and 3.3% better routing stability on large-scale search and dialogue tasks.

Rethinking MoE with Retrieval-Memory  Synergy: Towards Efficient Expert Coordination

Paper: https://t.co/Q7tqwd5WMI

Our report: https://t.co/1XivLv5rzo

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-17T02:55:00.000Z
- **抓取时间**: 2026-05-17T04:18:53.123Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [moe-edge-compute-monopoly](/concepts/moe-edge-compute-monopoly.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2055844504855265319) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/moe-edge-compute-monopoly.md)
