---
type: "source"
title: "CAPER++ 把「关节物体位姿感知」做成 50FPS 实时框架，具身智能补齐通用拼图"
description: "**一项关节物体位姿感知框架 CAPER++ 被提出，把具身 AI 抓取/操作的最大障碍之一——铰接物体（机械臂、工具、家具）的形变追踪——压到 50 FPS 实时可用。**  - 用 root + 关节连接部件的层级建模表示铰接物体，区别于传统整体位姿估计 - 用 SE(3) 流形数学方法避免旋转跟踪误差，关键帧策略防漂移 - 在合成、半合成、真实世界 benchmark 全面 SOTA，推理 "
resource: "https://x.com/i/status/2063335365474467992"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-06T19:18:47.066Z"
x_tweet_id: "2063335365474467992"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-06T19:01:00.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2063335365474467992"
created: "2026-06-06"
updated: "2026-06-26"
sha256: "fe90ae671387dbd8ca28401ec76603b972295224514c8022216ebda24d964f55"
sources:
  - "/sources/news/2026-06-06/00__jiqizhixin__caper-把-关节物体位姿感知-做成-50fps-实时框架-具身智能补齐通用拼图.md"
---

# CAPER++ 把「关节物体位姿感知」做成 50FPS 实时框架，具身智能补齐通用拼图

## 摘要

**一项关节物体位姿感知框架 CAPER++ 被提出，把具身 AI 抓取/操作的最大障碍之一——铰接物体（机械臂、工具、家具）的形变追踪——压到 50 FPS 实时可用。**

- 用 root + 关节连接部件的层级建模表示铰接物体，区别于传统整体位姿估计
- 用 SE(3) 流形数学方法避免旋转跟踪误差，关键帧策略防漂移
- 在合成、半合成、真实世界 benchmark 全面 SOTA，推理 50 FPS 无需 GPU 专用算子


gakki 锐评：感知层终于开始从「刚性物体」过渡到「铰接物体」，这是具身智能走向通用操作必须跨过的门槛——但目前 demo 仍是离线 benchmark，离真实机器人闭环还有半步。

## 原文

Can AI really grasp how articulated objects like robot arms or tools move and change shape?

Enter CAPER++: a unified framework for category-level articulated object pose perception. 

It models objects as root and connected parts linked by joints, uses a clever math trick (SE(3) manifold) for error-free rotation tracking, and a keyframe strategy to prevent drift.

Outperforms existing methods across synthetic, semi-synthetic, and real-world benchmarks. Achieves 50 FPS real-time inference without any post-processing—a leap toward practical embodied AI.

Probing Effective and Efficient Category-Level Articulated Object Pose Perception

Paper: https://t.co/wL436TiBrK
Project: https://t.co/nRuxAmHxnl
Code: https://t.co/RMfXOSaTsa

Our report: https://t.co/kA5tpt8LKV

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-06T19:01:00.000Z
- **抓取时间**: 2026-06-06T19:18:47.066Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2063335365474467992) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
