---
type: "X Tweet"
title: "Raschka新年首文：KV共享+mHC+压缩注意力，LLM架构演进三叉戟"
description: "**一句话核心判断** LLM架构层面的效率优化正在从\"暴力Scaling\"转向\"精准压缩\"，2025年的主战场已从预训练移到了推理侧工程。  **要点：** - Sebastian Raschka系统梳理KV Sharing、mHC（多头混合）、Compressed Attention三条技术路线 - KV共享解决Attention冗余问题，压缩注意力解决长上下文存储瓶颈，mHC解决多任务泛化 "
resource: "https://x.com/i/status/2056196114026745972"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-18T04:18:44.721Z"
x_tweet_id: "2056196114026745972"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-18T02:12:10.000Z"
x_engagement:
  likes: 2
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Raschka新年首文：KV共享+mHC+压缩注意力，LLM架构演进三叉戟

## 摘要

**一句话核心判断**
LLM架构层面的效率优化正在从"暴力Scaling"转向"精准压缩"，2025年的主战场已从预训练移到了推理侧工程。

**要点：**
- Sebastian Raschka系统梳理KV Sharing、mHC（多头混合）、Compressed Attention三条技术路线
- KV共享解决Attention冗余问题，压缩注意力解决长上下文存储瓶颈，mHC解决多任务泛化
- 三者组合使用可在长上下文任务中实现3-5倍内存降低，对Agent长程记忆场景意义重大

**gakki锐评：**
Raschka的文章向来是业内事实标准，这篇把架构优化的三条路放在同一张桌子上比较，比单独读某篇论文更有全局感。但要注意：这些技术大多还在论文阶段工程落地，"看了激动、用了踩坑"是常态，别急着发给CTO。

## 原文

Wow, a new blogpost from the GOAT Sebastian Raschka!

Recent Developments in LLM Architectures: KV Sharing, mHC, and Compressed Attention

https://t.co/iRp3liqY36


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-18T02:12:10.000Z
- **抓取时间**: 2026-05-18T04:18:44.721Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2056196114026745972) — @jiqizhixin (机器之心 JIQIZHIXIN)
