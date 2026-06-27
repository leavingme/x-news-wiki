---
type: "source"
title: "港大+ACE Robotics：消费级GPU上实现机器人实时物理交互的10倍延迟压缩"
description: "**[核心判断]** FASTER重新思考了VLA（视觉-语言-动作）模型的推理范式——不是减少模型复杂度，而是压缩动作生成时延，在消费级GPU上实现乒乓球实时对抗。  - 核心创新：Horizon-Aware Schedule将「全部去噪完成再动作」的传统范式改为单步即时动作压缩，延迟降低10倍。 - 意义：从「演示级」到「实时物理交互」的跨越，具身AI在消费硬件上的可行性窗口已打开。  gak"
resource: "https://x.com/i/status/2058162529172406452"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-23T13:18:42.424Z"
x_tweet_id: "2058162529172406452"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-23T12:26:00.000Z"
x_engagement:
  likes: 4
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "textop-humanoid-robot"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2058162529172406452"
created: "2026-05-23"
updated: "2026-06-26"
sha256: "e51d1705248db77ecae671616c7fd6aa1fcd9c40a562c49bf9017d199b814360"
sources:
  - "/sources/highlights/2026-05-23/00__jiqizhixin__港大-ace-robotics-消费级gpu上实现机器人实时物理交互的10倍延迟压缩.md"
---

# 港大+ACE Robotics：消费级GPU上实现机器人实时物理交互的10倍延迟压缩

## 摘要

**[核心判断]** FASTER重新思考了VLA（视觉-语言-动作）模型的推理范式——不是减少模型复杂度，而是压缩动作生成时延，在消费级GPU上实现乒乓球实时对抗。

- 核心创新：Horizon-Aware Schedule将「全部去噪完成再动作」的传统范式改为单步即时动作压缩，延迟降低10倍。
- 意义：从「演示级」到「实时物理交互」的跨越，具身AI在消费硬件上的可行性窗口已打开。

gakki：具身AI的瓶颈从来不是「能不能想」，而是「能不能快到来得及反应」。FASTER这一压缩范式若可复现，机器人进入实时物理场景的军备竞赛将加速。

## 原文

Why can't robots react instantly to fast-changing environments? 

Researchers from HKU and ACE Robotics introduce FASTER. 

Instead of running all sampling steps before any movement, it uses a Horizon-Aware Schedule to compress the immediate action into a single denoising step. 

Result: 10x faster reaction latency, enabling real-time table tennis on consumer GPUs. 

FASTER: Rethinking Real-Time Flow VLAs

Paper: https://t.co/S5zS3XRQ50
Project: https://t.co/CFfg8dM4gz
Code: https://t.co/K2Eb9sZcKl

Our report: https://t.co/sJXF5XF1l9

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-23T12:26:00.000Z
- **抓取时间**: 2026-05-23T13:18:42.424Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 4 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [textop-humanoid-robot](/concepts/textop-humanoid-robot.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2058162529172406452) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/textop-humanoid-robot.md)
