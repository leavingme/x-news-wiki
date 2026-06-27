---
type: "source"
title: "Squeeze Evolve：贵模型只用在刀刃上，多阶段分级调度降本提效横扫六大基准"
description: "**推理成本的分级调度范式正在成型——不是所有步骤都值得用顶级模型。**  - UC Berkeley/Stanford/Together AI 等提出 Squeeze Evolve 框架：强模型仅分配至高影响阶段，廉价模型处理其余环节，无需验证器即可提升多样性并大幅降低成本 - 覆盖 AIME 2025、LiveCodeBench V6、GPQA-Diamond、ARC-AGI-V2 等数学/编"
resource: "https://x.com/i/status/2050061650095452574"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-01T04:19:20.737Z"
x_tweet_id: "2050061650095452574"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-01T03:56:00.000Z"
x_engagement:
  likes: 2
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2050061650095452574"
created: "2026-05-01"
updated: "2026-06-26"
sha256: "4626d77bdce285fcac3f22f7b6baa1b465d4ae175b122310751654a94096ff50"
sources:
  - "/sources/news/2026-05-01/00__jiqizhixin__squeeze-evolve-贵模型只用在刀刃上-多阶段分级调度降本提效横扫六大基准.md"
---

# Squeeze Evolve：贵模型只用在刀刃上，多阶段分级调度降本提效横扫六大基准

## 摘要

**推理成本的分级调度范式正在成型——不是所有步骤都值得用顶级模型。**

- UC Berkeley/Stanford/Together AI 等提出 Squeeze Evolve 框架：强模型仅分配至高影响阶段，廉价模型处理其余环节，无需验证器即可提升多样性并大幅降低成本
- 覆盖 AIME 2025、LiveCodeBench V6、GPQA-Diamond、ARC-AGI-V2 等数学/编码/推理/多模态六大基准，全面超越单模型进化
- 对 Agent 编排的直接启示：工具调用链中并非每个节点都需要 Opus 级推理，分层路由是 Token 经济学的必然方向

gakki 锐评：这篇论文的真正价值不在算法本身，而在它给 Agent 工程师提供了一个可复用的成本心智模型——「贵的用在关键路径，便宜的扫平重复劳动」，这比任何 benchmark 数字都实用。

## 原文

Why waste compute on expensive models for every step of evolution? 

UC Berkeley, UT Austin, Stanford, Princeton, and Together AI introduce Squeeze Evolve: a framework that assigns the strongest models only to high-impact stages while cheaper models handle the rest. 

This verifier-free approach boosts diversity and slashes costs. It outperforms single-model evolution across math (AIME 2025, HMMT 2025), coding (LiveCodeBench V6), reasoning (GPQA-Diamond, ARC-AGI-V2), and multimodal benchmarks (MMMU-Pro, BabyVision). 

Result: up to 3x lower API cost, 10x higher throughput, and the first verifier-free method to match verifier-based evolution on discovery tasks.

Squeeze Evolve: Unified Multi-Model Orchestration for Verifier-Free Evolution

Paper: https://t.co/IwlVaIPrmy
Project: https://t.co/ptTJFYtil6
Code: https://t.co/3LAKn2ASXH

Our report: https://t.co/7vr9euJpOs

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-01T03:56:00.000Z
- **抓取时间**: 2026-05-01T04:19:20.737Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2050061650095452574) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
