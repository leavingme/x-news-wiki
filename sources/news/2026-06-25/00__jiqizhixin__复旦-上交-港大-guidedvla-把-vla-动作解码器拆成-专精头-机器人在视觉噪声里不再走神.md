---
type: "X Tweet"
title: "复旦/上交/港大 GuidedVLA：把 VLA 动作解码器拆成\"专精头\"，机器人在视觉噪声里不再走神"
description: "**视觉-语言-动作（VLA）模型在真实场景中最大的杀手不是推理能力，而是被背景干扰带偏注意力。**  - 复旦、上交、港大联合提出 GuidedVLA，核心改动：把传统 VLA 的单一动作解码器拆成多个专精 Attention Head，分别负责物体定位、空间几何、任务时序三件事 - 在仿真和真实机器人实验中，域内与域外任务的成功率均超过强基线 - 意义不在分数，而在把\"黑盒动作生成\"拆解成可解"
resource: "https://x.com/i/status/2070142468033548479"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-25T16:20:54.667Z"
x_tweet_id: "2070142468033548479"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-25T13:50:00.000Z"
x_engagement:
  likes: 8
  retweets: 1
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 复旦/上交/港大 GuidedVLA：把 VLA 动作解码器拆成"专精头"，机器人在视觉噪声里不再走神

## 摘要

**视觉-语言-动作（VLA）模型在真实场景中最大的杀手不是推理能力，而是被背景干扰带偏注意力。**

- 复旦、上交、港大联合提出 GuidedVLA，核心改动：把传统 VLA 的单一动作解码器拆成多个专精 Attention Head，分别负责物体定位、空间几何、任务时序三件事
- 在仿真和真实机器人实验中，域内与域外任务的成功率均超过强基线
- 意义不在分数，而在把"黑盒动作生成"拆解成可解释的子能力，为后续注入世界模型或安全约束打开了接口


gakki 的锐评：VLA 领域的论文堆叠越来越多，但多数只在仿真里刷点。GuidedVLA 的可解释性拆分思路值得工程团队关注——它指向的是"如何给机器人装上可调试的执行回路"，而不是又一个 benchmark 第一。

## 原文

Can robots stop getting distracted by visual clutter and actually focus on what matters for the task? 

Researchers from Fudan, SJTU, and HKU present GuidedVLA. 

Instead of treating the action decoder as a single black box, they split it into specialized “attention heads”—each trained to separately track object location, spatial geometry, and task timing. 

In both simulation and real-robot tests, GuidedVLA beats strong baselines on success rates for in-domain and out-of-domain tasks. Smarter focus, better generalization.

GuidedVLA: Specifying Task-Relevant Factors via Plug-and-Play Action Attention Specialization

Paper: https://t.co/xicj5nomzS
Project: https://t.co/zMd3CzfRd6

Our report: https://t.co/TsjFHv0xWH

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-25T13:50:00.000Z
- **抓取时间**: 2026-06-25T16:20:54.667Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 8 · 🔄 1 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2070142468033548479) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
