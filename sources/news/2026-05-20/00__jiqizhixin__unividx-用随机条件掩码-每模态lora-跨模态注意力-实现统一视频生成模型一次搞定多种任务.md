---
type: "source"
title: "UniVidX：用随机条件掩码+每模态LoRA+跨模态注意力，实现统一视频生成模型一次搞定多种任务"
description: "**[视频生成大一统：UniVidX用三项trick合并多条模型]**  来自港科大、斯坦福、清华等机构的研究提出UniVidX，用三项简单方法解决视频生成多任务统一问题：随机条件掩码让模型学习任意输入输出映射、每模态LoRA保护核心模型能力、跨模态注意力保持视频层一致性。  - 论文核心贡献是证明了用LoRA而非微调整个模型，可以实现多任务视频生成的参数高效协同 - 三所顶级机构联合背书，预示这"
resource: "https://x.com/i/status/2056908515780727079"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-20T04:18:24.519Z"
x_tweet_id: "2056908515780727079"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-20T01:23:00.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2056908515780727079"
created: "2026-05-20"
updated: "2026-06-26"
sha256: "1e0e203d010f3a2b3418e5553e5a21a14fed9ff9d29004a6ab9464db3774b303"
sources:
  - "/sources/news/2026-05-20/00__jiqizhixin__unividx-用随机条件掩码-每模态lora-跨模态注意力-实现统一视频生成模型一次搞定多种任务.md"
---

# UniVidX：用随机条件掩码+每模态LoRA+跨模态注意力，实现统一视频生成模型一次搞定多种任务

## 摘要

**[视频生成大一统：UniVidX用三项trick合并多条模型]**

来自港科大、斯坦福、清华等机构的研究提出UniVidX，用三项简单方法解决视频生成多任务统一问题：随机条件掩码让模型学习任意输入输出映射、每模态LoRA保护核心模型能力、跨模态注意力保持视频层一致性。

- 论文核心贡献是证明了用LoRA而非微调整个模型，可以实现多任务视频生成的参数高效协同
- 三所顶级机构联合背书，预示这是视频生成领域的重要工程路径
- 有意思的是，它解决的痛点是"每个视频生成任务单独训练一个模型"的资源浪费问题

**gakki: 视频生成领域正在重演NLP里"一个大模型统一所有任务"的故事。但LoRA化的代价是——各任务能力天花板受限于核心模型的基座上限，UniVidX的统一性换的是灵活性。**

## 原文

What if one AI could handle multiple video generation tasks without needing separate models for each? 

Researchers from HKUST, Stanford, Tsinghua, and other top labs present UniVidX. 

It uses three simple tricks: random condition masking to let the model learn any input-output mapping, per-modality LoRAs that protect the core model’s strengths, and cross-modal attention to keep video layers consistent. 

The result? It matches or beats state-of-the-art on generating intrinsic maps (like lighting and normals) from RGB video and separating blended RGBA layers.

UniVidX: A Unified Multimodal Framework for Versatile Video Generation via Diffusion Priors

Paper: https://t.co/WkqPyTLLzk
Code: https://t.co/7PlZ88NyO2
Project: https://t.co/EK9FcxxDia

Our report: https://t.co/1zsGhNY1OX

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-20T01:23:00.000Z
- **抓取时间**: 2026-05-20T04:18:24.519Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2056908515780727079) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
