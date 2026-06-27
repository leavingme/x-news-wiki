---
type: "source"
title: "30B模型摘金IMO：两阶段RL+可验证奖励路径验证「小模型大推理」可行性"
description: "**[一句话核心判断]** 上海AI Lab等联合团队发布的SU-01模型证明，30B参数模型通过「证明搜索+自检查行为预训练+两阶段RL」路径，可在IMO 2025、USAMO 2026、IPhO 2024/2025上斩获金牌，且泛化至其他科学推理任务。  **信息增量：** - 两阶段RL（可验证奖励→证明级奖励）是关键设计，而非直接堆推理时计算 - 测试时Scaling（test-time "
resource: "https://x.com/i/status/2060117409907061029"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-28T22:18:32.644Z"
x_tweet_id: "2060117409907061029"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-28T21:54:00.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2060117409907061029"
created: "2026-05-28"
updated: "2026-06-26"
sha256: "a8e4603982ae6b7ea6408ae7f3e1dd0ee36b2dc25da4dc0778eb2311dea852a4"
sources:
  - "/sources/news/2026-05-28/00__jiqizhixin__30b模型摘金imo-两阶段rl-可验证奖励路径验证-小模型大推理-可行性.md"
---

# 30B模型摘金IMO：两阶段RL+可验证奖励路径验证「小模型大推理」可行性

## 摘要

**[一句话核心判断]**
上海AI Lab等联合团队发布的SU-01模型证明，30B参数模型通过「证明搜索+自检查行为预训练+两阶段RL」路径，可在IMO 2025、USAMO 2026、IPhO 2024/2025上斩获金牌，且泛化至其他科学推理任务。

**信息增量：**
- 两阶段RL（可验证奖励→证明级奖励）是关键设计，而非直接堆推理时计算
- 测试时Scaling（test-time scaling）与训练Scaling协同，突破纯后训练困境
- 跨学科泛化能力（数学→物理）暗示「推理元技能」可迁移

**影响：**
- 对「o1类推理必须大参数」路线形成挑战，验证「架构+数据+RL范式」优先于参数规模
- 科学推理benchmark竞争进入工程化深水区，评测指标从「答对」走向「证明路径质量」


gakki锐评：证明级RL这条路线把「答案验证」前置为「路径学习」，比单纯reward hacking更有壁垒——但金牌performance能否迁移到真实科研场景，还需排除IMO题目与科研问题的结构差异。

## 原文

Cool! AI can win gold at the International Math Olympiad via Simple and Unified Scaling!

Researchers from Shanghai AI Lab, CUHK, Tsinghua and PKU introduce SU-01. 

Their simple recipe: first train on proof-search and self-checking behaviors, then scale via two-stage reinforcement learning (verifiable rewards then proof-level), plus test-time scaling. 

The 30B model achieves gold-medal performance on IMO 2025, USAMO 2026, and IPhO 2024/2025 — and generalizes to other scientific reasoning tasks.

Achieving Gold-Medal-Level Olympiad Reasoning via Simple and Unified Scaling

Paper: https://t.co/TRpIo21FUd
Code: https://t.co/kDTqNcByNQ

Our report: https://t.co/NUCvzJf00G

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-28T21:54:00.000Z
- **抓取时间**: 2026-05-28T22:18:32.644Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2060117409907061029) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
