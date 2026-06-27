---
type: "source"
title: "港科大&港中文用二元占用标签撬动开放词汇3D场景理解，室内机器人「看见未知物体」的路被打通了一段"
description: "**[仅用occupied/free二元标签训练语言嵌入3D高斯，开放词汇3D占用预测在Occ-ScanNet刷到59.50 IoU新SOTA]**  • 创新点：opacity-aware Poisson稳定几何 + Progressive Temperature Decay渐进式语义对齐，把极简监督信号的天花板大幅抬高 • 核心突破：机器人第一次能用纯几何标签（不依赖密集语义标注）识别训练中从"
resource: "https://x.com/i/status/2053481937423974853"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-10T16:18:34.480Z"
x_tweet_id: "2053481937423974853"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-10T14:27:00.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "embodied-ai-and-robotics"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2053481937423974853"
created: "2026-05-10"
updated: "2026-06-26"
sha256: "722c09bd49c6706cbef595e935d2443f0fab270bc9033d15a7c4b1bed42ad419"
sources:
  - "/sources/news/2026-05-10/00__jiqizhixin__港科大-港中文用二元占用标签撬动开放词汇3d场景理解-室内机器人-看见未知物体-的路被打通了一段.md"
---

# 港科大&港中文用二元占用标签撬动开放词汇3D场景理解，室内机器人「看见未知物体」的路被打通了一段

## 摘要

**[仅用occupied/free二元标签训练语言嵌入3D高斯，开放词汇3D占用预测在Occ-ScanNet刷到59.50 IoU新SOTA]**

• 创新点：opacity-aware Poisson稳定几何 + Progressive Temperature Decay渐进式语义对齐，把极简监督信号的天花板大幅抬高
• 核心突破：机器人第一次能用纯几何标签（不依赖密集语义标注）识别训练中从未见过的物体类别
• 成本信号：二元标签 >> 像素级语义标注，数据标注成本可能降一个数量级

gakki：开放词汇3D占用是具身智能落地最难啃的骨头之一。用二元标签撬动语言嵌入，思路极其聪明——本质上是把「标注成本」转化为「模型架构设计」。但Occ-ScanNet到真实家庭场景之间还隔着一个工程深渊，真实环境中遮挡、光照变化、动态物体会把几何稳定性打回原形。

## 原文

Why can’t your home robot identify a “plush toy” it’s never seen before?

Researchers from HKUST Guangzhou & CUHK Shenzhen crack open-vocabulary 3D occupancy for indoor scenes. 

Their method uses only binary occupancy labels (occupied vs. free) to train language-embedded 3D Gaussians. A novel opacity-aware Poisson approach stabilizes geometry, while a Progressive Temperature Decay schedule sharpens semantic alignment.

On Occ-ScanNet: 59.50 IoU (beats all existing occupancy methods) and 21.05 mIoU (outperforms prior open-vocab approaches by a large margin). Code: https://t.co/ee8B7YDZBv

Monocular Open Vocabulary Occupancy Prediction for Indoor Scenes

Paper: https://t.co/DxaXwaN5CF

Our report: https://t.co/O8UEeEubKi

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-10T14:27:00.000Z
- **抓取时间**: 2026-05-10T16:18:34.480Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [embodied-ai-and-robotics](/concepts/embodied-ai-and-robotics.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2053481937423974853) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/embodied-ai-and-robotics.md)
