---
type: "X Tweet"
title: "Qwen 发布 FlashQLA：线性注意力内核 2-3x 加速，边缘 Agent 推理瓶颈松动"
description: "**边缘 AI 的真正瓶颈不是模型大小，而是注意力计算复杂度——FlashQLA 从内核层突破。**  - 基于 TileLang 构建的高性能线性注意力内核，前向 2-3x 加速，反向 2x 加速 - 三大技术亮点：Gate 驱动的自动卡内 CP、硬件友好代数重排、TileLang 融合 warp 专用内核 - 明确定位为「个人设备上的 agentic AI」，对 TP 配置、小模型、长上下文场"
resource: "https://x.com/Alibaba_Qwen/status/2049462666734026923"
tags:
  - "x-news"
  - "highlights"
  - "author:Alibaba_Qwen"
timestamp: "2026-04-29T19:18:00.841Z"
x_tweet_id: "2049462666734026923"
x_author: "Qwen"
x_handle: "Alibaba_Qwen"
x_created_at: "2026-04-29T12:15:51.000Z"
x_engagement:
  likes: 1198
  retweets: 142
  replies: 28
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "ai-trend-digest"
---

# Qwen 发布 FlashQLA：线性注意力内核 2-3x 加速，边缘 Agent 推理瓶颈松动

## 摘要

**边缘 AI 的真正瓶颈不是模型大小，而是注意力计算复杂度——FlashQLA 从内核层突破。**

- 基于 TileLang 构建的高性能线性注意力内核，前向 2-3x 加速，反向 2x 加速
- 三大技术亮点：Gate 驱动的自动卡内 CP、硬件友好代数重排、TileLang 融合 warp 专用内核
- 明确定位为「个人设备上的 agentic AI」，对 TP 配置、小模型、长上下文场景增益最显著

gakki 锐评：当行业还在卷模型参数量时，Qwen 在卷内核效率。线性注意力 + 端侧优化的组合拳，意味着未来手机上的 Agent 不只是「能跑」，而是「跑得快到可以用」。这是算力民主化的底层基建。

## 原文

🚀 Introducing FlashQLA: high-performance linear attention kernels built on TileLang.

⚡ 2–3× forward speedup. 2× backward speedup.
💻 Purpose-built for agentic AI on your personal devices.

💡Key insights:
1. Gate-driven automatic intra-card CP.
2. Hardware-friendly algebraic reformulation.
3. TileLang fused warp-specialized kernels.

FlashQLA boosts SM utilization via automatic intra-device CP. The gains are especially pronounced for TP setups, small models, and long-context workloads.

Instead of fusing the entire GDN flow into a single kernel, we split it into two kernels optimized for CP and backward efficiency. At large batch sizes this incurs extra memory I/O overhead vs. a fully fused approach, but it delivers better real-world performance on edge devices and long-context workloads.

The backward pass was the hardest part: we built a 16-stage warp-specialized pipeline under extremely tight on-chip memory constraints, ultimately achieving 2×+ kernel-level speedups. 

We hope this is useful to the community!🫶🫶
Learn more:
📖 Blog: https://t.co/HF6opiR4yf
💻 Code: https://t.co/G3oaf5L1AZ


## 元信息

- **作者**: Qwen ([@Alibaba_Qwen](https://x.com/Alibaba_Qwen))
- **发布时间**: 2026-04-29T12:15:51.000Z
- **抓取时间**: 2026-04-29T19:18:00.841Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 1198 · 🔄 142 · 💬 28 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/Alibaba_Qwen/status/2049462666734026923) — @Alibaba_Qwen (Qwen)
