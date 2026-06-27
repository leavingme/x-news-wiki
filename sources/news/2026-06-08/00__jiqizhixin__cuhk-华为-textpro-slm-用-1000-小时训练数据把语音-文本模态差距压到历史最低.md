---
type: "source"
title: "CUHK+华为 TextPro-SLM：用 1000 小时训练数据把语音/文本模态差距压到历史最低"
description: "**[语音 AI 落后文本 AI 的根本原因找到了——不是输出端，是输入端的表征设计]**  - CUHK 联合华为提出 TextPro-SLM，反共识地从'输入侧重构'入手而非调输出 - 核心方法：统一语音编码器同时抽取 text token 和韵律 embedding，让 spoken input 在表征层就更像 text input - 3B/7B 规模下模态差距历史最低，韵律理解 SOTA"
resource: "https://x.com/i/status/2063939847459581991"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-08T13:18:56.716Z"
x_tweet_id: "2063939847459581991"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-08T11:03:00.000Z"
x_engagement:
  likes: 8
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2063939847459581991"
created: "2026-06-08"
updated: "2026-06-26"
sha256: "5c2abe25019a0d3c61925309eca6b140f3040bda75e6e02a9d1f99a252b4f029"
sources:
  - "/sources/news/2026-06-08/00__jiqizhixin__cuhk-华为-textpro-slm-用-1000-小时训练数据把语音-文本模态差距压到历史最低.md"
---

# CUHK+华为 TextPro-SLM：用 1000 小时训练数据把语音/文本模态差距压到历史最低

## 摘要

**[语音 AI 落后文本 AI 的根本原因找到了——不是输出端，是输入端的表征设计]**

- CUHK 联合华为提出 TextPro-SLM，反共识地从'输入侧重构'入手而非调输出
- 核心方法：统一语音编码器同时抽取 text token 和韵律 embedding，让 spoken input 在表征层就更像 text input
- 3B/7B 规模下模态差距历史最低，韵律理解 SOTA，且只用了约 1000 小时训练音频


这条路的真正价值不是又一个 SOTA，而是验证了一个方法论：**多模态对齐的瓶颈往往在表征同构，不在模型容量**。1000 小时就能打平，说明这个方向的成本曲线被严重低估——对做语音 Agent、做端侧多模态的团队都是强信号。

## 原文

Why do speech AI models still lag behind text AI?  

Researchers at CUHK and Huawei propose TextPro-SLM — an approach that shrinks the gap by making spoken input look more like text input. 

Instead of tweaking the output, they redesign the input side with a unified speech encoder that extracts both text tokens and prosody embeddings.  

Result: the lowest modality gap yet at both 3B and 7B scales, strong performance on paralinguistic understanding, and all with just ~1,000 hours of training audio. Input-side thinking wins.

Minimizing Modality Gap from the Input Side: Your Speech LLM can be a Prosody-Aware Text LLM

Paper: https://t.co/hVBUs9KHIk

Our report: https://t.co/9UDNykEAbF

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-08T11:03:00.000Z
- **抓取时间**: 2026-06-08T13:18:56.716Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 8 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2063939847459581991) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
