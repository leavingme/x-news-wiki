---
type: "source"
title: "单步扩散突破 0.75 FID 极限：直接优化目标函数的算法红利来了"
description: "**单步扩散生成的 FID 极限正在被重新定义，推理成本有望降一个数量级。**  - Jiawei Yang 两个月前公布 0.9 FID 的单步像素空间扩散，现在降至 0.75，且仍在优化中 - 核心方法是直接优化 FID 指标本身（FD-loss），而非依赖传统对抗训练或扩散步数堆叠 - 单步生成意味着图像/视频生成的推理成本可降一个数量级，对排队经济和实时生成场景有直接冲击  gakki 锐"
resource: "https://x.com/JiaweiYang118/status/2050032859155734743"
tags:
  - "x-news"
  - "highlights"
  - "author:JiaweiYang118"
timestamp: "2026-05-01T07:17:35.193Z"
x_tweet_id: "2050032859155734743"
x_author: "Jiawei Yang"
x_handle: "JiaweiYang118"
x_created_at: "2026-05-01T02:01:36.000Z"
x_engagement:
  likes: 675
  retweets: 115
  replies: 43
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-video-queue-economy"
x_source: "ai-trend-digest"
type_okf: "X Tweet"
source_url: "https://x.com/JiaweiYang118/status/2050032859155734743"
created: "2026-05-01"
updated: "2026-06-26"
sha256: "43a35ebd3d5bc8609a3925781865730bcac852d3e813935de9c579425fd037eb"
sources:
  - "/sources/highlights/2026-05-01/00__JiaweiYang118__单步扩散突破-0-75-fid-极限-直接优化目标函数的算法红利来了.md"
---

# 单步扩散突破 0.75 FID 极限：直接优化目标函数的算法红利来了

## 摘要

**单步扩散生成的 FID 极限正在被重新定义，推理成本有望降一个数量级。**

- Jiawei Yang 两个月前公布 0.9 FID 的单步像素空间扩散，现在降至 0.75，且仍在优化中
- 核心方法是直接优化 FID 指标本身（FD-loss），而非依赖传统对抗训练或扩散步数堆叠
- 单步生成意味着图像/视频生成的推理成本可降一个数量级，对排队经济和实时生成场景有直接冲击

gakki 锐评：当所有人都在堆模型规模时，有人在优化目标函数本身——这才是真正的算法红利，比参数竞赛有营养得多。

## 原文

Two months ago, I vaguely posted a number: 0.9 FID, one-step, pixel space.

Now it is 0.75, and can be even lower.

Many wonder how.

I thought it might end as a small FID prank: simple and deliberate.

It started with one question: can FID be optimized directly, and what does it reveal?

Introducing FD-loss.


## 元信息

- **作者**: Jiawei Yang ([@JiaweiYang118](https://x.com/JiaweiYang118))
- **发布时间**: 2026-05-01T02:01:36.000Z
- **抓取时间**: 2026-05-01T07:17:35.193Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 675 · 🔄 115 · 💬 43 · 🔖 0 · 👁 0
- **关联主题**: [ai-video-queue-economy](/concepts/ai-video-queue-economy.md)

## Citations

[1] [Tweet on X](https://x.com/JiaweiYang118/status/2050032859155734743) — @JiaweiYang118 (Jiawei Yang)
[2] [Author page](/entities/authors/jiaweiyang118.md)
[3] [Related topic](/concepts/ai-video-queue-economy.md)
