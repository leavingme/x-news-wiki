---
type: "X Tweet"
title: "SxS Interleaved Reasoning：让大模型在公开 token 流之外保留私密推演空间"
description: "**[私密推演+选择性披露：浙大等联合提出 Side-by-Side 推理范式]**  当前 Chain-of-Thought 范式要求所有思考步骤强制公开化，形成不可逆的 token 输出流——这不仅浪费算力，更迫使模型在不确定时被迫\"猜答案\"。SxS 的核心创新在于：模型在内部维持私有推理轨道，仅在内部置信度足够高时才对外释放部分结论，实现\"深思熟虑后的精准披露\"而非\"边想边说\"。  该研究由"
resource: "https://x.com/i/status/2059609312486695137"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-27T13:18:32.573Z"
x_tweet_id: "2059609312486695137"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-27T12:15:00.000Z"
x_engagement:
  likes: 9
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "reasoning-and-model-architecture"
x_source: "crawler"
---

# SxS Interleaved Reasoning：让大模型在公开 token 流之外保留私密推演空间

## 摘要

**[私密推演+选择性披露：浙大等联合提出 Side-by-Side 推理范式]**

当前 Chain-of-Thought 范式要求所有思考步骤强制公开化，形成不可逆的 token 输出流——这不仅浪费算力，更迫使模型在不确定时被迫"猜答案"。SxS 的核心创新在于：模型在内部维持私有推理轨道，仅在内部置信度足够高时才对外释放部分结论，实现"深思熟虑后的精准披露"而非"边想边说"。

该研究由浙大、William & Mary、UIUC、UBC、CUHK、复旦、Stony Brook 跨机构联合完成，采用 SFT 训练，目前聚焦方法论验证。

gakki：私密推理空间的价值在于解决"强制公开即强迫表态"的工程悖论——但披露阈值的训练数据谁来定义？这才是真正的主权问题。

## 原文

Your AI could think silently before speaking—and only share what it’s certain of!

Researchers from Zhejiang University, William & Mary, UIUC, UBC, CUHK, Fudan, and Stony Brook University introduce Side-by-Side (SxS) Interleaved Reasoning. 

Instead of forcing every thought into an irreversible public token stream, SxS lets the model interleave private reasoning with partial disclosures—releasing content only when it’s backed by enough internal deliberation.

Trained with supervised fine-tuning and reinforcement learning, SxS outperforms standard autoregressive methods on both in-domain (AIME25 math) and out-of-domain (GPQA-Diamond science) benchmarks, improving the accuracy–latency Pareto trade-off across two Qwen3 model scales.

When to Think, When to Speak: Learning Disclosure Policies for LLM Reasoning

Paper: https://t.co/xHKOjV16cK

Our report: https://t.co/e1IfjntiAZ

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-27T12:15:00.000Z
- **抓取时间**: 2026-05-27T13:18:32.573Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 9 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [reasoning-and-model-architecture](/concepts/reasoning-and-model-architecture.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2059609312486695137) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/reasoning-and-model-architecture.md)
