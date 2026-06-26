---
type: "X Tweet"
title: "LeCun 点赞 Kaiming He ELF：连续 embedding 空间生成文本，10 倍数据超越离散 diffusion"
description: "**连续 Embedding 空间才是文本生成的正确答案？**  Kaiming He 团队（FAIR）发布 ELF（Embedded Language Flows），核心思路反直觉——不在离散 token 上操作，而是在连续 embedding 空间里完成生成，直到最后一步才解锁。技术上借用了图像 diffusion 领域的 classifier-free guidance 等成熟方法。  **"
resource: "https://x.com/i/status/2054473034640277880"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-13T10:18:13.774Z"
x_tweet_id: "2054473034640277880"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-13T08:05:16.000Z"
x_engagement:
  likes: 24
  retweets: 5
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# LeCun 点赞 Kaiming He ELF：连续 embedding 空间生成文本，10 倍数据超越离散 diffusion

## 摘要

**连续 Embedding 空间才是文本生成的正确答案？**

Kaiming He 团队（FAIR）发布 ELF（Embedded Language Flows），核心思路反直觉——不在离散 token 上操作，而是在连续 embedding 空间里完成生成，直到最后一步才解锁。技术上借用了图像 diffusion 领域的 classifier-free guidance 等成熟方法。

**关键数据：**
- 训练数据量仅为离散或连续 diffusion LM 的 1/10
- 采样步数更少
- 生成质量在多个维度超越两类 baseline

**信息增量：** 这不是又一篇扩散语言模型论文，而是给出了「为什么 embedding 空间生成更好」的系统性解释。LeCun 亲自转发表明学界对此路径的认可。

**边界：** 目前仅限文本生成，尚未扩展到多模态任务；训练 compute 成本 vs 离散 token 方案的实际对比数据未披露。

gakki：如果这个方向被复现和扩展，文本生成和图像生成的技术路径会进一步融合——embedding 空间作为统一生成介质，可能是继自回归和 diffusion 之后的第三种范式。值得持续跟踪。

## 原文

Huge! Language models could generate text as smoothly as AI creates images now!

Kaiming He's team introduces ELF (Embedded Language Flows). 

Instead of operating on discrete tokens, ELF stays in a continuous embedding space until the final step, borrowing proven techniques like classifier-free guidance from image diffusion. 

Result: ELF beats both discrete and continuous diffusion language models, achieving better generation quality with fewer sampling steps and using 10x less training data.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-13T08:05:16.000Z
- **抓取时间**: 2026-05-13T10:18:13.774Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 24 · 🔄 5 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2054473034640277880) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
