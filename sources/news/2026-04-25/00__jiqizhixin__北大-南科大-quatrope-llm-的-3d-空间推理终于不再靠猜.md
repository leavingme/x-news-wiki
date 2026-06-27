---
type: "source"
title: "北大+南科大 QuatRoPE：LLM 的 3D 空间推理终于不再靠猜"
description: "**[一句话核心判断]**  QuatRoPE 用四元数旋转编码替代传统位置编码，让 LLM 首次高效处理 3D 物体关系，线性复杂度取代二次复杂度，具身智能的空间理解终于有了数学地基。  **信息增量：** - 3D 空间推理是具身 AI 的公认难题——现有 LLM 大多在 2D 平面爬行 - 二次复杂度（O(n²)）是 Transformer 的固有痛点，QuatRoPE 做到了 O(n) 规"
resource: "https://x.com/i/status/2047945707492114527"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-25T12:42:27.589Z"
x_tweet_id: "2047945707492114527"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-25T07:48:00.000Z"
x_engagement:
  likes: 13
  retweets: 4
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "textop-humanoid-robot"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2047945707492114527"
created: "2026-04-25"
updated: "2026-06-26"
sha256: "a5d3035c3cdc4b00f3773cf8dad3b0ba9efd21cc33ee211f6e66af739feaa204"
sources:
  - "/sources/news/2026-04-25/00__jiqizhixin__北大-南科大-quatrope-llm-的-3d-空间推理终于不再靠猜.md"
---

# 北大+南科大 QuatRoPE：LLM 的 3D 空间推理终于不再靠猜

## 摘要

**[一句话核心判断]**

QuatRoPE 用四元数旋转编码替代传统位置编码，让 LLM 首次高效处理 3D 物体关系，线性复杂度取代二次复杂度，具身智能的空间理解终于有了数学地基。

**信息增量：**
- 3D 空间推理是具身 AI 的公认难题——现有 LLM 大多在 2D 平面爬行
- 二次复杂度（O(n²)）是 Transformer 的固有痛点，QuatRoPE 做到了 O(n) 规模
- 在embodied AI专项基准上显著超越之前所有方法

**影响：**
- 人形机器人室内导航、物体操作的空间计算将直接受益
- 对「世界模型」路线是利好——空间推理是世界模型的核心组件
- 论文方法若被主流框架采纳，MoE 的通信瓶颈问题也能缓解

gakki 锐评：四元数不是新东西，但敢用在 LLM 位置编码上并跑通，是把数学直觉变成了工程事实——这个团队大概率被大厂溢价收购。

## 原文

How can we teach AI to truly understand 3D space? 

Researchers from Peking University & SUSTech present QuatRoPE. 

It's a new method that efficiently encodes the 3D relationships between objects for Large Language Models, using a scalable linear approach instead of a messy quadratic one. 

It significantly outperforms previous methods in 3D spatial reasoning tasks for embodied AI.

Scalable Object Relation Encoding for Better 3D Spatial Reasoning in Large Language Models

Paper: https://t.co/LSPXW2jw61
Code: https://t.co/fyKi6HEbdf
Project: https://t.co/ujQSEFpprl

Our report: https://t.co/nxr3HZAbzW

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-25T07:48:00.000Z
- **抓取时间**: 2026-04-25T12:42:27.589Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 13 · 🔄 4 · 💬 1 · 🔖 0 · 👁 0
- **关联主题**: [textop-humanoid-robot](/concepts/textop-humanoid-robot.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2047945707492114527) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/textop-humanoid-robot.md)
