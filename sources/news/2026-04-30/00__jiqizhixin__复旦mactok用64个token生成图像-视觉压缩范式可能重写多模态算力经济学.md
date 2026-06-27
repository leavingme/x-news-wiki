---
type: "source"
title: "复旦MacTok用64个Token生成图像：视觉压缩范式可能重写多模态算力经济学"
description: "**连续Token化可能是图像生成领域成本压缩的下一条主线。**  - 复旦团队提出MacTok，用掩码增强+表征对齐的1D连续Token化方案，将图像Token用量压缩64倍 - ImageNet 256×256 gFID达1.44，512×512达1.52（SiT-XL），在大幅压缩的同时保持SOTA质量 - 核心思路是用不完整数据强迫模型学习鲁棒视觉表征——这与当前主流离散VQ范式形成路线分"
resource: "https://x.com/i/status/2049708825318748500"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-30T07:18:51.995Z"
x_tweet_id: "2049708825318748500"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-30T04:34:00.000Z"
x_engagement:
  likes: 6
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2049708825318748500"
created: "2026-04-30"
updated: "2026-06-26"
sha256: "b2a9bc7c323fb41aadd93d2dd295688fd5efcc1dffc91bb1e80a8e8efbbfd157"
sources:
  - "/sources/news/2026-04-30/00__jiqizhixin__复旦mactok用64个token生成图像-视觉压缩范式可能重写多模态算力经济学.md"
---

# 复旦MacTok用64个Token生成图像：视觉压缩范式可能重写多模态算力经济学

## 摘要

**连续Token化可能是图像生成领域成本压缩的下一条主线。**

- 复旦团队提出MacTok，用掩码增强+表征对齐的1D连续Token化方案，将图像Token用量压缩64倍
- ImageNet 256×256 gFID达1.44，512×512达1.52（SiT-XL），在大幅压缩的同时保持SOTA质量
- 核心思路是用不完整数据强迫模型学习鲁棒视觉表征——这与当前主流离散VQ范式形成路线分歧

64倍压缩如果能工程化落地，意味着多模态Agent的推理成本结构会被重写。但学术SOTA到生产可用之间的鸿沟，从来不是数字能填平的。

## 原文

Can AI generate images with just 64 tokens instead of thousands? 

Researchers from Fudan University introduce MacTok, a new continuous tokenizer. 

It uses clever image masking and representation alignment to prevent information loss, forcing the model to learn robust visuals from incomplete data. 

The result? MacTok achieves a top gFID of 1.44 on ImageNet at 256x256 and a record 1.52 at 512x512 with SiT-XL, all while slashing token usage by up to 64 times.

MacTok: Masked Augmenting 1D Continuous Tokenizer for Efficient Image Generation

Paper: https://t.co/lLyVvrQUbT

Our report: https://t.co/2Q5tzUqWqy

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-30T04:34:00.000Z
- **抓取时间**: 2026-04-30T07:18:51.995Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 6 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2049708825318748500) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
