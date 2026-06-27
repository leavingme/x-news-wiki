---
type: "X Tweet"
title: "Meta×Princeton VLM³：标准 VLM 本就是 3D 学习器，无需复杂架构"
description: "**VLM 不需要专门改造就能原生理解 3D，关键是数据配方而非架构。**  - 三个简单改动统一焦距 + 文本像素引用 + 数据扩展，免去复杂增广和回归损失 - 深度估计精度 0.84 → 0.9，像素对应、相机位姿、物体级 3D 任务对齐专家模型 - 推翻\"3D 理解需要专门架构\"的隐含假设，VLM 的 2D 训练已内含 3D 几何先验  锐评：3D 视觉又一次被\"基础模型 + 数据工程\"路线"
resource: "https://x.com/i/status/2069222153342402951"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-23T01:18:42.333Z"
x_tweet_id: "2069222153342402951"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-23T00:53:00.000Z"
x_engagement:
  likes: 2
  retweets: 1
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Meta×Princeton VLM³：标准 VLM 本就是 3D 学习器，无需复杂架构

## 摘要

**VLM 不需要专门改造就能原生理解 3D，关键是数据配方而非架构。**

- 三个简单改动统一焦距 + 文本像素引用 + 数据扩展，免去复杂增广和回归损失
- 深度估计精度 0.84 → 0.9，像素对应、相机位姿、物体级 3D 任务对齐专家模型
- 推翻"3D 理解需要专门架构"的隐含假设，VLM 的 2D 训练已内含 3D 几何先验

锐评：3D 视觉又一次被"基础模型 + 数据工程"路线收编，但工业落地仍取决于像素级标注和传感器闭环，纯算法红利正在边际递减。

## 原文

What if standard vision-language models already understand 3D—without complex architecture changes or special losses?

Meta and Princeton University present VLM³, showing that VLMs are native 3D learners.

Their recipe: unify camera focal lengths, use text-based pixel references, and scale data—no heavy augmentations or regression losses needed.

Result: VLM³ boosts depth estimation accuracy (0.84 → 0.9) and matches expert models on pixel correspondence, camera pose, and object-level 3D—all with standard VLM architecture. A new paradigm for simple, scalable 3D learning.

VLM³: Vision Language Models Are Native 3D Learners

Paper: https://t.co/NMNRFlqKHJ
Code: https://t.co/RYlx1kykoY

Our report: https://t.co/svUxWBawdg

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-23T00:53:00.000Z
- **抓取时间**: 2026-06-23T01:18:42.333Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 1 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2069222153342402951) — @jiqizhixin (机器之心 JIQIZHIXIN)
