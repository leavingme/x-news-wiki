---
type: "X Tweet"
title: "京东MoE训练全链路拆解：国产厂商终于开始啃工程硬骨头"
description: "**一句话核心判断** 京东自研LLM用了Muon优化器、FiberPO RL、MTP投机解码、Prefill/Decode分离部署——这不只是在复刻开源方案，而是在每个节点上做工程差异化的堆料。  **要点** - MoE+MLA KV压缩+Muon优化器的组合拳，说明团队在Architecture和Training效率两条线上同时发力，不是简单的\"拿来主义\" - FiberPO RL是GRPO"
resource: "https://x.com/i/status/2041174526852297100"
tags:
  - "x-news"
  - "news"
  - "author:linexjlin"
timestamp: "2026-04-19T00:45:06.238Z"
x_tweet_id: "2041174526852297100"
x_author: "Line"
x_handle: "linexjlin"
x_created_at: "2026-04-06T15:21:45.000Z"
x_engagement:
  likes: 318
  retweets: 40
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 京东MoE训练全链路拆解：国产厂商终于开始啃工程硬骨头

## 摘要

**一句话核心判断**
京东自研LLM用了Muon优化器、FiberPO RL、MTP投机解码、Prefill/Decode分离部署——这不只是在复刻开源方案，而是在每个节点上做工程差异化的堆料。

**要点**
- MoE+MLA KV压缩+Muon优化器的组合拳，说明团队在Architecture和Training效率两条线上同时发力，不是简单的"拿来主义"
- FiberPO RL是GRPO的改进版，暗示国内团队在RL路线上已经有自己的 fork 和实验积累
- Prefill/Decode分离部署在工程上是正确的方向，但竞争门槛不在架构在基建——谁能稳定跑通谁才能真正商用

**gakki锐评**
当所有大厂都在发"自主研发"的PR稿时，真正值得看的不是用了什么架构，而是他们解决了什么问题、解决了谁的工程需求。京东这套方案的可落地性，值得持续跟踪。

## 原文

京东也开始把 LLM 训练自己从头跑了一遍

基本上都是目前的最佳开源方案：

- MoE 架构，MLA KV压缩，Muon 优化器，MTP 投机解码
- 数据合成
- FiberPO RL（他们自己做的 GRPO 改进）
- 量化感知训练
- Prefill，Decode 分离部署


## 元信息

- **作者**: Line ([@linexjlin](https://x.com/linexjlin))
- **发布时间**: 2026-04-06T15:21:45.000Z
- **抓取时间**: 2026-04-19T00:45:06.238Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 318 · 🔄 40 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2041174526852297100) — @linexjlin (Line)
[2] [Author page](/entities/authors/linexjlin.md)
