---
type: "source"
title: "OSCAR：Together/悉大/UIUC联手把 KV Cache压到2-bit，长上下文推理成本悬崖式下降"
description: "**超低位宽 KV缓存量化的关键障碍被 OSCAR解决：在 Qwen3/GLM-4（最大358B）上2-bit量化相对 BF16 仅掉1–4 分精度。**  -核心方法：离线、注意力感知的协方差分析，预先设计固定旋转矩阵与裁剪阈值，让压缩后的 KV 与 attention真实需求对齐。 -价值：避开 naive旋转导致的精度崩塌，等于把百万级上下文推理的显存与带宽门槛拉低一个数量级。 -配合近期 "
resource: "https://x.com/i/status/2064412964908667052"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-09T19:18:51.722Z"
x_tweet_id: "2064412964908667052"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-09T18:23:00.000Z"
x_engagement:
  likes: 4
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2064412964908667052"
created: "2026-06-09"
updated: "2026-06-26"
sha256: "b6494b093cabde0d4b6990d742fb0399d2ec3b0f12a59c9ec48ababc9f7306db"
sources:
  - "/sources/highlights/2026-06-09/00__jiqizhixin__oscar-together-悉大-uiuc联手把-kv-cache压到2-bit-长上下文推理成本悬崖式下降.md"
---

# OSCAR：Together/悉大/UIUC联手把 KV Cache压到2-bit，长上下文推理成本悬崖式下降

## 摘要

**超低位宽 KV缓存量化的关键障碍被 OSCAR解决：在 Qwen3/GLM-4（最大358B）上2-bit量化相对 BF16 仅掉1–4 分精度。**

-核心方法：离线、注意力感知的协方差分析，预先设计固定旋转矩阵与裁剪阈值，让压缩后的 KV 与 attention真实需求对齐。
-价值：避开 naive旋转导致的精度崩塌，等于把百万级上下文推理的显存与带宽门槛拉低一个数量级。
-配合近期 TurboQuant、JTok 等工作，量化的「免费午餐」叙事正在被一次次坐实。

**gakki锐评**：2-bit KV保住精度，意味着长上下文 Agent 与浏览器/RAG 工作流的边际成本将被持续重估——下一个被波及的，是所有按 token 数定价的中间层。

## 原文

Can LLMs run on ultra-low-bit memory without tanking accuracy?

Researchers from Together AI, University of Sydney, and UIUC present OSCAR — a method that uses offline, attention-aware covariance analysis to design fixed rotations and clipping thresholds for 2-bit KV cache quantization. This aligns the compressed values with what attention actually needs, avoiding the collapse of naive rotation.

Results: On Qwen3 and GLM-4 (up to 358B params), OSCAR stays within 1–4 points of BF16 accuracy, while naive INT2 collapses to near zero. It cuts KV-cache memory by 8x, boosts throughput up to 7x at large batches, and accelerates decoding by 3x over BF16 — all deployable in SGLang and vLLM.

OSCAR: Offline Spectral Covariance-Aware Rotation for 2-bit KV Cache Quantization

Paper: https://t.co/Vaak5AF6Xo
Project: https://t.co/bW6EX7IE40
Code: https://t.co/MptFV9uFaN；
RotationZoo: https://t.co/rxdVAOLjNX

Our report: https://t.co/wnFlygqvNm

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-09T18:23:00.000Z
- **抓取时间**: 2026-06-09T19:18:51.722Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 4 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2064412964908667052) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
