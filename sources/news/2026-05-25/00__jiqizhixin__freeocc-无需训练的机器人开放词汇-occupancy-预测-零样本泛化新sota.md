---
type: "source"
title: "FreeOcc：无需训练的机器人开放词汇 occupancy 预测，零样本泛化新SOTA"
description: "**[机器人空间理解范式转移：SLAM+3DGS+VLM三合一，无标注数据也能泛化]**  HKUST与MBZUAI联合发布的FreeOcc，提出完全无需训练、无需3D标签的开放词汇occupancy预测方法。核心思路是用4层地图结构融合SLAM定位、高斯溅射（GS）和视觉语言模型（VLM），在IoU/mIoU指标上相对自监督方法提升2倍，且零样本迁移到全新场景。  技术路线价值：颠覆了「大数据+"
resource: "https://x.com/i/status/2058678680654598318"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-25T01:18:20.077Z"
x_tweet_id: "2058678680654598318"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-24T22:37:00.000Z"
x_engagement:
  likes: 5
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "textop-humanoid-robot"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2058678680654598318"
created: "2026-05-24"
updated: "2026-06-26"
sha256: "136331c3536d86c9c50805ea703d20981713723ec8d4bb30cd42ab5a19deba2c"
sources:
  - "/sources/news/2026-05-25/00__jiqizhixin__freeocc-无需训练的机器人开放词汇-occupancy-预测-零样本泛化新sota.md"
---

# FreeOcc：无需训练的机器人开放词汇 occupancy 预测，零样本泛化新SOTA

## 摘要

**[机器人空间理解范式转移：SLAM+3DGS+VLM三合一，无标注数据也能泛化]**

HKUST与MBZUAI联合发布的FreeOcc，提出完全无需训练、无需3D标签的开放词汇occupancy预测方法。核心思路是用4层地图结构融合SLAM定位、高斯溅射（GS）和视觉语言模型（VLM），在IoU/mIoU指标上相对自监督方法提升2倍，且零样本迁移到全新场景。

技术路线价值：颠覆了「大数据+强监督=好泛化」的既有假设，证明了VLM的空间推理能力可通过后接地图模块直接转化为机器人感知层，而无需任何微调。


**gakki：具身智能的数据成本问题终于有了「绕过它」的思路——不是降低标注成本，而是彻底消灭标注需求。这条路线若经得住复现，将是具身AI工业化落地的重要加速器。**

## 原文

What if a robot could map without training or 3D labels? 

HKUST & MBZUAI researchers present FreeOcc – a training-free open-vocabulary occupancy predictor. It builds a 4-layer map using SLAM, Gaussians, and VLMs. 

Outperforms self-supervised by 2x in IoU/mIoU, zero-shot to new scenes.

FreeOcc: Training-Free Embodied Open-Vocabulary Occupancy Prediction

Paper: https://t.co/cBUqlxpn58
Project: https://t.co/2tXuBi7Y4P
Code: https://t.co/wqbPBjSGkH

Our report: https://t.co/9YSmTYgXMw

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-24T22:37:00.000Z
- **抓取时间**: 2026-05-25T01:18:20.077Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 5 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [textop-humanoid-robot](/concepts/textop-humanoid-robot.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2058678680654598318) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/textop-humanoid-robot.md)
