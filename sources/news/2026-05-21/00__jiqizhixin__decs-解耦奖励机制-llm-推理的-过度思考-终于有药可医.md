---
type: "X Tweet"
title: "DECS 解耦奖励机制：LLM 推理的「过度思考」终于有药可医"
description: "**[一句话核心判断]** RLVR 模型的思维链存在系统性效率损耗——生成超长推理路径但零收益，根源在于轨迹级奖励与 Token 级优化之间的错位。DECS 首创解耦 Token 级奖励机制，在不损伤性能的前提下精准剪除冗余 Token。  **信息增量：** - 现有长度惩罚机制反向伤害必要探索：它同时压制冗余和有效推理路径 - DECS 首次实现「奖励解耦」，让长度控制与核心推理质量独立优化"
resource: "https://x.com/i/status/2057318215500636510"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-21T07:18:25.232Z"
x_tweet_id: "2057318215500636510"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-21T04:31:00.000Z"
x_engagement:
  likes: 8
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# DECS 解耦奖励机制：LLM 推理的「过度思考」终于有药可医

## 摘要

**[一句话核心判断]**
RLVR 模型的思维链存在系统性效率损耗——生成超长推理路径但零收益，根源在于轨迹级奖励与 Token 级优化之间的错位。DECS 首创解耦 Token 级奖励机制，在不损伤性能的前提下精准剪除冗余 Token。

**信息增量：**
- 现有长度惩罚机制反向伤害必要探索：它同时压制冗余和有效推理路径
- DECS 首次实现「奖励解耦」，让长度控制与核心推理质量独立优化
- 对 RLVR 范式（基于可验证奖励的强化学习）有直接工程价值

**影响方向：**
部署长思维链模型的厂商（如 OpenAI、Anthropic）可直接受益，降低推理成本并提升响应速度。

gakki：Token 效率战争正在从「压缩 Token」升级到「奖励结构重设计」——这条论文比大多数工程补丁高一个层级，值得持续跟踪复现。

## 原文

Overthinking is killing LLM reasoning efficiency. DECS fixes it by surgically cutting redundant tokens without hurting performance.

Current RLVR models generate excessively long reasoning paths with zero gain. Existing length penalties backfire—they penalize essential exploration and inadvertently reward partial redundancy. That misalignment between trajectory-level rewards and token-level optimization breaks everything.

DECS introduces a first-of-its-kind decoupled token-level reward mechanism. It distinguishes redundant from essential tokens and penalizes only the wasteful ones. Combined with a curriculum batch scheduling strategy, it masters the efficiency-efficacy equilibrium.

Result: over 50% reduction in reasoning tokens across 7 benchmarks, with equal or better performance. From Fudan, SJTU, and Shanghai AI Lab. 

Overthinking Reduction with Decoupled Rewards and Curriculum Data Scheduling

Paper: https://t.co/6BpP3hbM98
Project: https://t.co/jp15NxiQ9n

Our report: https://t.co/uC5waopq0e

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-21T04:31:00.000Z
- **抓取时间**: 2026-05-21T07:18:25.232Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 8 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2057318215500636510) — @jiqizhixin (机器之心 JIQIZHIXIN)
