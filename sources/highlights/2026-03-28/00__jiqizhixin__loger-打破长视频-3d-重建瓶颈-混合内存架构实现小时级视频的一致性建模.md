---
type: "X Tweet"
title: "LoGeR 打破长视频 3D 重建瓶颈：混合内存架构实现小时级视频的一致性建模"
description: "**[长视频 3D 重建的内存瓶颈被攻破]**  • Google DeepMind 与 UC Berkeley 联合发布 LoGeR，采用全局+局部混合内存系统，首次实现从短视频学习到小时级长视频扩展的 3D 一致性重建 • 核心突破在于双内存机制：全局内存保证场景整体一致性，局部内存确保片段间无缝过渡，解决了长视频 3D 建模的时序漂移难题 • 性能大幅超越 SOTA， tracking er"
resource: "https://x.com/i/status/2037910332015042608"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-03-28T18:12:50.417Z"
x_tweet_id: "2037910332015042608"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-03-28T15:11:00.000Z"
x_engagement:
  likes: 123
  retweets: 15
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "3d-visualization-model-capabilities"
x_source: "crawler"
---

# LoGeR 打破长视频 3D 重建瓶颈：混合内存架构实现小时级视频的一致性建模

## 摘要

**[长视频 3D 重建的内存瓶颈被攻破]**

• Google DeepMind 与 UC Berkeley 联合发布 LoGeR，采用全局+局部混合内存系统，首次实现从短视频学习到小时级长视频扩展的 3D 一致性重建
• 核心突破在于双内存机制：全局内存保证场景整体一致性，局部内存确保片段间无缝过渡，解决了长视频 3D 建模的时序漂移难题
• 性能大幅超越 SOTA， tracking error 显著降低，为自动驾驶、影视制作、数字孪生等需要长时序 3D 数据的场景扫清技术障碍

这不是又一个 3D 生成模型，而是针对「长视频一致性」这个硬骨头的基础设施级突破。混合内存的设计思路可能迁移到视频生成、世界模型等其他需要长时序建模的领域，值得持续关注架构细节的公开。

## 原文

How do you build a perfectly consistent 3D model from hours of video?

Researchers from Google DeepMind and UC Berkeley unveil LoGeR. 

This new architecture processes video in chunks, using a clever hybrid memory system. It combines a global memory for overall scene consistency and a local memory for seamless, detailed transitions between video segments, allowing it to learn from short clips and scale to very long ones.

It dramatically outperforms previous state-of-the-art, reducing tracking error on KITTI by over 74% and achieving robust, globally consistent 3D reconstructions from video sequences up to 19,000 frames long!

LoGeR: Long-Context Geometric Reconstruction with Hybrid Memory

Paper: https://t.co/jn7sdoMhhR
Project: https://t.co/hAUc9Psq4v

Our report: https://t.co/3hOLDGbdw4


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-03-28T15:11:00.000Z
- **抓取时间**: 2026-03-28T18:12:50.417Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 123 · 🔄 15 · 💬 2 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2037910332015042608) — @jiqizhixin (机器之心 JIQIZHIXIN)
