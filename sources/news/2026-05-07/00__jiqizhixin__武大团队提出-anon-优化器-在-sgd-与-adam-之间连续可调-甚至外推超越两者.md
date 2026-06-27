---
type: "X Tweet"
title: "武大团队提出 Anon 优化器：在 SGD 与 Adam 之间连续可调，甚至外推超越两者"
description: "**优化器不再是非此即彼的选择题，Anon 把适应性变成了连续旋钮。**  - Anon 的核心创新是「连续可调适应性」，能在类 SGD 与类 Adam 行为之间平滑插值，并外推到两者都未覆盖的区域 - 新增增量延迟更新（IDU）机制，确保整个适应性谱系上的鲁棒收敛 - 在图像分类、扩散模型和语言建模任务上一致性超越 SOTA 优化器  gakki 锐评：优化器领域长期被 Adam 家族垄断，An"
resource: "https://x.com/i/status/2052270752616050852"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-07T07:18:44.833Z"
x_tweet_id: "2052270752616050852"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-07T06:14:11.000Z"
x_engagement:
  likes: 17
  retweets: 1
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "推理与模型架构"
x_source: "crawler"
---

# 武大团队提出 Anon 优化器：在 SGD 与 Adam 之间连续可调，甚至外推超越两者

## 摘要

**优化器不再是非此即彼的选择题，Anon 把适应性变成了连续旋钮。**

- Anon 的核心创新是「连续可调适应性」，能在类 SGD 与类 Adam 行为之间平滑插值，并外推到两者都未覆盖的区域
- 新增增量延迟更新（IDU）机制，确保整个适应性谱系上的鲁棒收敛
- 在图像分类、扩散模型和语言建模任务上一致性超越 SOTA 优化器

gakki 锐评：优化器领域长期被 Adam 家族垄断，Anon 的「连续谱」思路打破了二元对立，但论文尚未公开代码，真正的考验在复现。

## 原文

Wow, a new and better optimizer!

Researchers from Wuhan University, University of Macau, and University of Calgary present Anon. 

It features continuously tunable adaptivity, allowing it to interpolate between SGD-like and Adam-like behavior and even extrapolate beyond both. A new incremental delay update (IDU) mechanism ensures robust convergence across the entire adaptivity spectrum.

Anon consistently outperforms state-of-the-art optimizers on image classification, diffusion, and language modeling tasks, bridging the gap between classical and modern optimizers.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-07T06:14:11.000Z
- **抓取时间**: 2026-05-07T07:18:44.833Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 17 · 🔄 1 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2052270752616050852) — @jiqizhixin (机器之心 JIQIZHIXIN)
