---
type: "source"
title: "上交+美团AgentConductor：让多智能体学会「看人下菜」，难度动态决定通信拓扑"
description: "**[一句话核心判断]**  多Agent系统的瓶颈从来不是单个Agent够不够强，而是「谁该跟谁说话、说什么」。AgentConductor用RL训练了一个动态调度层，让这个问题第一次有了自适应解法。  **信息增量：** - 核心创新：不再预设固定通信模式，由LLM Orchestrator根据任务难度和Agent角色实时构建最优通信路径 - 传统Multi-Agent是「全连通图」，Agen"
resource: "https://x.com/i/status/2045132923834118451"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-18T00:47:03.782Z"
x_tweet_id: "2045132923834118451"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-17T13:31:00.000Z"
x_engagement:
  likes: 49
  retweets: 6
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "multi-agent-framework-ecosystem-comparison"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2045132923834118451"
created: "2026-04-17"
updated: "2026-06-26"
sha256: "e6a5d6ec68b2636391312c0d90448915dfcbf6141ccf29c5af4497544ade6c07"
sources:
  - "/sources/news/2026-04-18/00__jiqizhixin__上交-美团agentconductor-让多智能体学会-看人下菜-难度动态决定通信拓扑.md"
---

# 上交+美团AgentConductor：让多智能体学会「看人下菜」，难度动态决定通信拓扑

## 摘要

**[一句话核心判断]**

多Agent系统的瓶颈从来不是单个Agent够不够强，而是「谁该跟谁说话、说什么」。AgentConductor用RL训练了一个动态调度层，让这个问题第一次有了自适应解法。

**信息增量：**
- 核心创新：不再预设固定通信模式，由LLM Orchestrator根据任务难度和Agent角色实时构建最优通信路径
- 传统Multi-Agent是「全连通图」，AgentConductor是「动态路由」，降低通信复杂度同时提升任务适配度
- 上海交大+美团联合出品，工程落地导向明确，不是纯学术玩具

**为什么重要：**
目前多Agent框架最大的工程噩梦就是「谁调用谁」。固定拓扑要么冗余要么不够用，AgentConductor提供了一个可学习、可泛化的调度框架范本。

gakki锐评：这才是多Agent该解决的问题——不是让每个Agent更强，是让它们学会协作的「社交礼仪」。

## 原文

What if multi-agent LLMs could dynamically reconfigure their communication for any task? 

Researchers from Shanghai Jiao Tong University and Meituan present AgentConductor. 

This new system uses an LLM orchestrator and reinforcement learning to build smart, adaptive communication pathways between agents on the fly, tailoring them to task difficulty and agent roles. 

Think of it as giving your LLM team a dynamic blueprint for collaboration, optimizing how they share information. 

It achieves state-of-the-art results in competition-level code generation, boosting accuracy by up to 14.6% while drastically cutting communication density by 13% and token costs by 68%.

AgentConductor: Topology Evolution for Multi-Agent Competition-Level Code Generation

Paper: https://t.co/TfrqqUJR46

Our report: https://t.co/6xCXQgD0lq

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-17T13:31:00.000Z
- **抓取时间**: 2026-04-18T00:47:03.782Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 49 · 🔄 6 · 💬 6 · 🔖 0 · 👁 0
- **关联主题**: [multi-agent-framework-ecosystem-comparison](/concepts/multi-agent-framework-ecosystem-comparison.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2045132923834118451) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/multi-agent-framework-ecosystem-comparison.md)
