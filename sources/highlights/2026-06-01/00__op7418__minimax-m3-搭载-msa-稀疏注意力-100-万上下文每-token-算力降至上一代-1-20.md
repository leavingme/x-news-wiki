---
type: "X Tweet"
title: "MiniMax M3 搭载 MSA 稀疏注意力：100 万上下文每 Token 算力降至上一代 1/20"
description: "**[一句话核心判断]**  MiniMax M3 终于把上下文做到了真正的实用级别——不是数字上的 1M，而是工程上\"跑得动\"的 1M。  **信息增量：** - MSA（MoE with Segment-wise Attention）稀疏注意力架构在 100 万 token 下，每 token 计算量只有上一代的约 1/20，这意味着长上下文不再是算力黑洞 - 原生多模态从训练阶段融合，文本、"
resource: "https://x.com/i/status/2061327301644861608"
tags:
  - "x-news"
  - "highlights"
  - "author:op7418"
timestamp: "2026-06-01T07:18:36.226Z"
x_tweet_id: "2061327301644861608"
x_author: "歸藏(guizang.ai)"
x_handle: "op7418"
x_created_at: "2026-06-01T06:01:40.000Z"
x_engagement:
  likes: 12
  retweets: 0
  replies: 12
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "reasoning-and-model-architecture"
x_source: "crawler"
---

# MiniMax M3 搭载 MSA 稀疏注意力：100 万上下文每 Token 算力降至上一代 1/20

## 摘要

**[一句话核心判断]**

MiniMax M3 终于把上下文做到了真正的实用级别——不是数字上的 1M，而是工程上"跑得动"的 1M。

**信息增量：**
- MSA（MoE with Segment-wise Attention）稀疏注意力架构在 100 万 token 下，每 token 计算量只有上一代的约 1/20，这意味着长上下文不再是算力黑洞
- 原生多模态从训练阶段融合，文本、图片、视频、桌面操作统一建模，不是后加的拼接
- 价格策略激进：小于 512k 的 API 五折七天限时，侧面说明市场压力已经传导到定价端

**影响评估：**
对国内大模型竞争格局影响深远——当 1M 上下文有了可落地的推理成本，长程 Agent 任务（代码库理解、长文档分析、多轮对话记忆）的技术门槛被实质性压低。


gakki 锐评：MSA 架构的意义不在于刷榜，而在于让「上下文长度」从营销数字变成真正的工程参数。国内厂商终于开始在架构效率上动真格，而不是单纯堆参数。

## 原文

MiniMax 这次终于发布了他们的大版本号模型升级 MiniMax M3。

主要是三个核心能力：

1. 标配了 1M 的超长上下文

2. 采用新的 MSA（MoE with Segment-wise Attention）稀疏注意力架构

3. 从训练起就融合了原生多模态能力，包括强化了文本、图片、视频和桌面操作这些多模态的训练。

MSA 超上下文在算力和速度上更可落地，在 100 万上下文下每 token 计算量只有上一代的约 1/20。。

所以他们这一次的价格也比较给力，Token Plan 更新了新的价格。

在 API 上，小于512k 的 API 现在有为期 7 天的限时五折。


## 元信息

- **作者**: 歸藏(guizang.ai) ([@op7418](https://x.com/op7418))
- **发布时间**: 2026-06-01T06:01:40.000Z
- **抓取时间**: 2026-06-01T07:18:36.226Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 12 · 🔄 0 · 💬 12 · 🔖 0 · 👁 0
- **关联主题**: [reasoning-and-model-architecture](/concepts/reasoning-and-model-architecture.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2061327301644861608) — @op7418 (歸藏(guizang.ai))
[2] [Author page](/entities/authors/op7418.md)
[3] [Related topic](/concepts/reasoning-and-model-architecture.md)
