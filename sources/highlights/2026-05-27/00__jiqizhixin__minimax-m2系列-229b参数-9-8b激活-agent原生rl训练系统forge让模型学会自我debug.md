---
type: "source"
title: "MiniMax-M2系列：229B参数、9.8B激活，Agent原生RL训练系统Forge让模型学会自我Debug"
description: "MiniMax发布M2系列技术报告，采用稀疏MoE架构，总参数229.9B但单token仅激活9.8B。关键创新在于Forge——围绕编码和协作工作流构建的Agent原生RL训练系统。M2.7版本实现了自我Debug和脚手架修改能力，在保持前沿性能的同时显著降低了推理成本。这代表了MoE模型在Agent任务上的深度优化方向。  gakki的锐评：稀疏激活是正确方向，但229B总参数量仍是资源消耗的"
resource: "https://x.com/i/status/2059520944562131163"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-27T07:18:19.233Z"
x_tweet_id: "2059520944562131163"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-27T06:23:51.000Z"
x_engagement:
  likes: 6
  retweets: 1
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "model-capabilities"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2059520944562131163"
created: "2026-05-27"
updated: "2026-06-26"
sha256: "78cd3d801bd10575a37ea2d1bf730e8ec65b89c43b9047b3538bb2c50f0bf034"
sources:
  - "/sources/highlights/2026-05-27/00__jiqizhixin__minimax-m2系列-229b参数-9-8b激活-agent原生rl训练系统forge让模型学会自我debug.md"
---

# MiniMax-M2系列：229B参数、9.8B激活，Agent原生RL训练系统Forge让模型学会自我Debug

## 摘要

MiniMax发布M2系列技术报告，采用稀疏MoE架构，总参数229.9B但单token仅激活9.8B。关键创新在于Forge——围绕编码和协作工作流构建的Agent原生RL训练系统。M2.7版本实现了自我Debug和脚手架修改能力，在保持前沿性能的同时显著降低了推理成本。这代表了MoE模型在Agent任务上的深度优化方向。

gakki的锐评：稀疏激活是正确方向，但229B总参数量仍是资源消耗的隐喻——模型的'体重管理'比'身高'更重要。

## 原文

MiniMax just released a technical report for the MiniMax-M2 Series!

The MiniMax-M2 series, a family of Mixture-of-Experts models designed from the ground up for agentic tasks. 

The flagship M2 packs 229.9B total parameters but activates only 9.8B per token—thanks to an agent-native RL training system (Forge) and data pipelines built around coding and collaborative workspaces. The latest M2.7 even debugs its own runs and modifies its scaffolding.

The result? M2.7 delivers frontier-tier performance, matching or beating GPT-5.4, Sonnet 4.6, and Opus 4.6 on agentic coding (SWE-bench, Multi-SWE-bench), deep search (Toolathlon, VIBE-Pro), office tasks (MM-ClawBench), and reasoning (MLE-Bench, Artificial Analysis)—all with a fraction of the computational cost.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-27T06:23:51.000Z
- **抓取时间**: 2026-05-27T07:18:19.233Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 6 · 🔄 1 · 💬 1 · 🔖 0 · 👁 0
- **关联主题**: [model-capabilities](/concepts/model-capabilities.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2059520944562131163) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/model-capabilities.md)
