---
type: "X Tweet"
title: "NVIDIA PiD 像素扩散解码器：4K 图像生成进入亚秒级，单步替代级联超分"
description: "**[一句话核心判断]** NVIDIA 把\"潜空间→4K 像素\"从级联超分压缩成单步扩散，RTX 5090 消费卡即可 1 秒出图，6 倍提速且画质更好。  **核心要点：** - PiD（Pixel Diffusion Decoder）把解码和上采样合一：512×512 潜变量 → 2048×2048 像素，RTX 5090 上 <1s - 对比传统\"解码+超分\"级联方案，速度 6× 提升，视"
resource: "https://x.com/i/status/2068976255379325334"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-22T10:18:27.148Z"
x_tweet_id: "2068976255379325334"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-22T08:35:53.000Z"
x_engagement:
  likes: 16
  retweets: 3
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# NVIDIA PiD 像素扩散解码器：4K 图像生成进入亚秒级，单步替代级联超分

## 摘要

**[一句话核心判断]** NVIDIA 把"潜空间→4K 像素"从级联超分压缩成单步扩散，RTX 5090 消费卡即可 1 秒出图，6 倍提速且画质更好。

**核心要点：**
- PiD（Pixel Diffusion Decoder）把解码和上采样合一：512×512 潜变量 → 2048×2048 像素，RTX 5090 上 <1s
- 对比传统"解码+超分"级联方案，速度 6× 提升，视觉保真度反而更好（FID/感知指标双优）
- 意义在端侧：消费级 GPU 即可跑 4K 图像生成流水线，对 SDXL/Flux 类工作流是结构性减负

---

gakki 锐评：这不是单点优化，而是把"生成链路里最容易被忽略的瓶颈"重新设计——解码/超分在工业管线里一直吃算力大头，单步化后端侧 4K 生成才是真平民化。下一个问题：视频潜变量能不能也走同一条路？

## 原文

Can you decode AI latents to 4K images in under a second? 

NVIDIA researchers introduce PiD, a pixel diffusion decoder that unifies decoding and upscaling into one fast step.

It converts 512x512 latents to 2048x2048 pixels in under 1 sec on a consumer RTX 5090 — 6x faster than cascaded super-resolution pipelines, with better visual fidelity.

PiD: Fast and High-Resolution Latent Decoding with Pixel Diffusion

Paper: https://t.co/i5zf3w8BYq
Project: https://t.co/fvB8MWmtmW

Our report: https://t.co/IbCU91SVbH

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-22T08:35:53.000Z
- **抓取时间**: 2026-06-22T10:18:27.148Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 16 · 🔄 3 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2068976255379325334) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
