---
type: "X Tweet"
title: "华南理工+鹏城实验室提出 LCA：在压缩潜空间内做 query-aware pooling，128K 长上下文 prefill 提速 2.5x 且零额外参数"
description: "**[长上下文推理的算力瓶颈正在被「潜空间内压缩」思路绕开，而非硬扛注意力复杂度]**  - LCA（Latent-Condensed Attention）直接在模型压缩后的潜空间内按 query 相关性聚组 token，位置信息单独保留，不引入额外参数 - 128K 上下文场景 prefill 速度提升 2.5x，对 Agent 长会话和文档级推理场景有直接工程价值 - 华南理工 + 鹭鹏城实验"
resource: "https://x.com/i/status/2051718064711020936"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-05T19:18:44.987Z"
x_tweet_id: "2051718064711020936"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-05T17:38:00.000Z"
x_engagement:
  likes: 1
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 华南理工+鹏城实验室提出 LCA：在压缩潜空间内做 query-aware pooling，128K 长上下文 prefill 提速 2.5x 且零额外参数

## 摘要

**[长上下文推理的算力瓶颈正在被「潜空间内压缩」思路绕开，而非硬扛注意力复杂度]**

- LCA（Latent-Condensed Attention）直接在模型压缩后的潜空间内按 query 相关性聚组 token，位置信息单独保留，不引入额外参数
- 128K 上下文场景 prefill 速度提升 2.5x，对 Agent 长会话和文档级推理场景有直接工程价值
- 华南理工 + 鹭鹏城实验室的组合再次证明国产机构在推理优化层的持续输出

锐评：注意力优化论文满天飞，但「零额外参数 + 潜空间内操作」这个约束条件让 LCA 的工程可落地性显著高于多数同类工作——Agent 场景下 context window 就是成本，省 token 就是省钱。

## 原文

Can’t process 128K tokens without your model grinding to a halt?  

Researchers from South China University of Technology, Pengcheng Laboratory, and collaborators introduce Latent-Condensed Attention (LCA).  

Instead of treating memory and computation as separate problems, LCA works directly inside the model’s compressed latent space—grouping meaning tokens together by query-aware pooling while keeping position info separate. No extra parameters needed.  

Result: up to 2.5x faster prefilling and 90% less KV cache at 128K context, with competitive accuracy.

Latent-Condensed Transformer for Efficient Long Context Modeling

Paper: https://t.co/RKV9zuAKxz
Code: https://t.co/GaRiMdjKFS

Our report: https://t.co/mmwcr0uUEv

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-05T17:38:00.000Z
- **抓取时间**: 2026-05-05T19:18:44.987Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2051718064711020936) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
