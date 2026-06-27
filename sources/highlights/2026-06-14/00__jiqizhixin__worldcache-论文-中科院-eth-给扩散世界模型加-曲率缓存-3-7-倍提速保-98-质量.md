---
type: "X Tweet"
title: "WorldCache 论文：中科院+ETH 给扩散世界模型加「曲率缓存」，3.7 倍提速保 98% 质量"
description: "**世界模型的工程重心从「堆参数」转向「按需重算」，推理侧优化开始反超训练侧。**  要点： - 中科院自动化所与 ETH Zurich 联合发布 WorldCache 框架，瞄准扩散类世界模型的 token 级冗余 - 用曲率引导分数（curvature-guided score）识别可预测 token，用阻尼预测器处理混沌 token，仅在瓶颈 token 出现漂移时才触发重算 - 端到端推理"
resource: "https://x.com/i/status/2066213327563313507"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-14T19:18:26.119Z"
x_tweet_id: "2066213327563313507"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-14T17:37:00.000Z"
x_engagement:
  likes: 5
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# WorldCache 论文：中科院+ETH 给扩散世界模型加「曲率缓存」，3.7 倍提速保 98% 质量

## 摘要

**世界模型的工程重心从「堆参数」转向「按需重算」，推理侧优化开始反超训练侧。**

要点：
- 中科院自动化所与 ETH Zurich 联合发布 WorldCache 框架，瞄准扩散类世界模型的 token 级冗余
- 用曲率引导分数（curvature-guided score）识别可预测 token，用阻尼预测器处理混沌 token，仅在瓶颈 token 出现漂移时才触发重算
- 端到端推理速度提升最高 3.7 倍，rollout 质量保留 98%（在主流扩散世界模型上）

---

gakki 锐评：LeCun 把世界模型当作 AGI 路线之争的圣杯，但商业落地的真实瓶颈是 inference cost。WorldCache 这类「不重训、只精算」的路子，比拼参数规模更接近可用性。

## 原文

What if your AI world model could run 3.7x faster without sacrificing quality?

Researchers from the Chinese Academy of Sciences and ETH Zurich introduce WorldCache—a caching framework for diffusion world models. Instead of naively skipping steps, it uses a curvature-guided score to identify predictable tokens and a damping predictor for chaotic ones, only recomputing when bottleneck tokens start to drift.

Result: up to 3.7x end-to-end speedup while maintaining 98% rollout quality on models like HunyuanVoyager and Aether. Faster simulations, same fidelity. Code released.

WorldCache: Accelerating World Models for Free via Heterogeneous Token Caching

arXiv: https://t.co/SXBwZkLBT4 
Code: https://t.co/1jG65p0zhz

Our report: https://t.co/55gyGlkQvW

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-14T17:37:00.000Z
- **抓取时间**: 2026-06-14T19:18:26.119Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 5 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2066213327563313507) — @jiqizhixin (机器之心 JIQIZHIXIN)
