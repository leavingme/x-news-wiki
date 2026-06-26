---
type: "X Tweet"
title: "NVIDIA 融合 AR+Diffusion+自推测三模解码：一次架构手术同时解决精度与吞吐"
description: "**一句话核心判断**：NVIDIA 研究院（联合佐治亚理工、港大、MIT）发布的 Nemotron-Labs-Diffusion 证明了\"一次模型、多模解码\"路线可行，AR 模式负责高并发云端服务，Diffusion 模式负责并行生成极限速度，Self-Speculation 模式处理投机加速——三条技术路径不再是非此即彼，而是可以动态切换。  要点： - 训练阶段采用 AR-Diffusion"
resource: "https://x.com/i/status/2060730198207738266"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-30T16:19:07.899Z"
x_tweet_id: "2060730198207738266"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-30T14:29:00.000Z"
x_engagement:
  likes: 7
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# NVIDIA 融合 AR+Diffusion+自推测三模解码：一次架构手术同时解决精度与吞吐

## 摘要

**一句话核心判断**：NVIDIA 研究院（联合佐治亚理工、港大、MIT）发布的 Nemotron-Labs-Diffusion 证明了"一次模型、多模解码"路线可行，AR 模式负责高并发云端服务，Diffusion 模式负责并行生成极限速度，Self-Speculation 模式处理投机加速——三条技术路径不再是非此即彼，而是可以动态切换。

要点：
- 训练阶段采用 AR-Diffusion 联合目标函数，模型学会在运行时根据任务类型切换解码模式
- 这意味着同一套参数可以同时服务"快速响应"和"深度推理"两种场景，无需部署两个模型
- 如果落地验证稳定，将动摇当前"小模型负责推理、大模型负责生成"的分层架构假设

**gakki 锐评**：三模解码本质上是把 LPU 的编译时优化和 Diffusion 的并行采样做了一次架构层融合。这条路线如果成气候，推理芯片格局会比模型本身更有戏剧性。

## 原文

Can one model switch between three decoding modes to crush both accuracy and throughput?

NVIDIA researchers (with Georgia Tech, HKU, and MIT) introduce Nemotron-Labs-Diffusion — a tri-mode language model that unifies autoregressive (AR), diffusion, and self-speculation decoding in a single architecture. 

The trick? Train with a joint AR-diffusion objective so the model can switch modes on the fly: AR for high-concurrency cloud serving, diffusion for maximum parallel decoding potential, and self-speculation where diffusion drafts tokens and AR verifies them — beating multi-token prediction methods on acceptance rate and real-device efficiency.

Result: The 8B model decodes 6x more tokens per forward pass than Qwen3-8B with comparable accuracy, delivering 4x higher throughput on SPEED-Bench running on an NVIDIA GB200. Under optimal sampling, diffusion mode can generate up to 76.5% more tokens per forward than self-speculation.

Nemotron-Labs-Diffusion: A Tri-Mode Language Model Unifying Autoregressive, Diffusion, and Self-peculation Decoding

HuggingFace: https://t.co/COGQln6c2E
Project: https://t.co/E8Gk0YWgNf
Paper: https://t.co/DgzwfjtwFR

Our report: https://t.co/6HCGD0TUQX


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-30T14:29:00.000Z
- **抓取时间**: 2026-05-30T16:19:07.899Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 7 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2060730198207738266) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
