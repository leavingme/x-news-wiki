---
type: "X Tweet"
title: "APO 算法：把多模型分歧变约束条件，7B 参数超越闭源专有模型"
description: "**[一句话核心判断]** UTS 团队提出 APO（自主偏好优化），将模型间分歧从「噪声」重新定义为「动态约束」，实现了小模型对顶级闭源模型的局部超越。  - 核心洞察：多模型 disagreement 不是坏事——它可以成为对齐优化的信号源，APO 将其提炼为约束条件而非噪音过滤掉。 - 两阶段流程：先找最优分歧源，再压制目标模型漂移，7B 模型在胸片判读任务上超过专有模型。 - 行业意义：这"
resource: "https://x.com/i/status/2057831347931189321"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-22T16:18:51.546Z"
x_tweet_id: "2057831347931189321"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-22T14:30:00.000Z"
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
---

# APO 算法：把多模型分歧变约束条件，7B 参数超越闭源专有模型

## 摘要

**[一句话核心判断]**
UTS 团队提出 APO（自主偏好优化），将模型间分歧从「噪声」重新定义为「动态约束」，实现了小模型对顶级闭源模型的局部超越。

- 核心洞察：多模型 disagreement 不是坏事——它可以成为对齐优化的信号源，APO 将其提炼为约束条件而非噪音过滤掉。
- 两阶段流程：先找最优分歧源，再压制目标模型漂移，7B 模型在胸片判读任务上超过专有模型。
- 行业意义：这是「小模型蒸馏大模型」路径上的新证据，且方法论层面可迁移到其他垂直领域。

gakki：蒸馏专有模型的能力边界正在被系统性突破，开闭源差距将以任务维度而非全面能力被重新度量。

## 原文

What if shifting reasoning patterns from multiple AI models could be turned into constraints instead of noise?

Researchers from UTS’s Australian AI Institute (AAII) introduce Autonomous Preference Optimization (APO).

Their approach treats disagreements between models as dynamic constraints, then uses a two-stage process to align a target model with the best of all sources while suppressing drift.

Results: Their 7B model outperforms even proprietary models on chest X-ray interpretation. They also release CXR-MAX, a massive benchmark of 170K+ reasoning trajectories.

Turning Drift into Constraint: Robust Reasoning Alignment in Non-Stationary Multi-Stream Environments

Paper: https://t.co/5IZcGgDFhs
Project: https://t.co/peVnBYmJll
Code: https://t.co/gcXzfjO5E3

Our report: https://t.co/uWdEIQj6uX

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-22T14:30:00.000Z
- **抓取时间**: 2026-05-22T16:18:51.546Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2057831347931189321) — @jiqizhixin (机器之心 JIQIZHIXIN)
