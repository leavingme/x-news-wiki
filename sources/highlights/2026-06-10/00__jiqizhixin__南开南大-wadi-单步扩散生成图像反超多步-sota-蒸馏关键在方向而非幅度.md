---
type: "X Tweet"
title: "南开南大 WaDi：单步扩散生成图像反超多步 SOTA，蒸馏关键在方向而非幅度"
description: "**单步扩散首次在图像生成上系统性追平并超越多步 SOTA，蒸馏范式正被重写。**  - 南开大学、南京大学、NKIARI 联合发布 WaDi，发现扩散模型蒸馏过程中**权重方向变化比幅度更关键** - 设计 LoRaD（低秩旋转适配器）专门建模方向漂移，仅用约 10% 可训练参数 - 在 COCO 2014/2017 上 FID 达到 SOTA，且泛化性得到验证   gakki 锐评：单步生成一"
resource: "https://x.com/i/status/2064687775702483122"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-10T13:18:59.920Z"
x_tweet_id: "2064687775702483122"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-10T12:35:00.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-video-queue-economy"
x_source: "crawler"
---

# 南开南大 WaDi：单步扩散生成图像反超多步 SOTA，蒸馏关键在方向而非幅度

## 摘要

**单步扩散首次在图像生成上系统性追平并超越多步 SOTA，蒸馏范式正被重写。**

- 南开大学、南京大学、NKIARI 联合发布 WaDi，发现扩散模型蒸馏过程中**权重方向变化比幅度更关键**
- 设计 LoRaD（低秩旋转适配器）专门建模方向漂移，仅用约 10% 可训练参数
- 在 COCO 2014/2017 上 FID 达到 SOTA，且泛化性得到验证


gakki 锐评：单步生成一旦稳定，AI 视频与图像的推理成本将再下一个量级——但 ROI 不能只看 FID 数字，还需盯下游任务表现。

## 原文

What if you could generate an image in one step with better quality than multi-step diffusion models?

Researchers from Nankai University, Nanjing University, and NKIARI present WaDi. 

They discovered that during distillation, weight direction changes matter far more than magnitude. So they built LoRaD—a tiny low-rank rotation adapter—to model those shifts efficiently.

WaDi achieves state-of-the-art FID on COCO 2014 and 2017 using only ~10% of the model's trainable parameters. It also generalizes to controllable generation, relation inversion, and high-resolution synthesis.

WaDi: Weight Direction-aware Distillation for One-step Image Synthesis

Paper: https://t.co/xjCNOhPQKw
Code: https://t.co/aJd1eO11CL
Project: https://t.co/lBLYa8ejhL

Our report: https://t.co/hvkLGyv42D

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-10T12:35:00.000Z
- **抓取时间**: 2026-06-10T13:18:59.920Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2064687775702483122) — @jiqizhixin (机器之心 JIQIZHIXIN)
