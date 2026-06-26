---
type: "X Tweet"
title: "NTU MARS Lab 颠覆机器人控制范式：A2A 流匹配实现 0.56ms 单步动作生成"
description: "**[机器人反应速度突破「实时」临界点]**  南洋理工大学 MARS Lab 提出了 Action-to-Action Flow Matching (A2A) 方法，用机器人自身历史动作直接预测下一步，完全跳过传统扩散模型的慢速随机噪声采样过程。  • **0.56ms** 单步动作生成，相比现有方法速度提升数量级 • 核心改进：用确定性的「动作到动作」流匹配替代随机的去噪扩散，消除了迭代采样延"
resource: "https://x.com/i/status/2039772351416426895"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-02T21:49:22.942Z"
x_tweet_id: "2039772351416426895"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-02T18:30:00.000Z"
x_engagement:
  likes: 97
  retweets: 19
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "textop-humanoid-robot"
x_source: "crawler"
---

# NTU MARS Lab 颠覆机器人控制范式：A2A 流匹配实现 0.56ms 单步动作生成

## 摘要

**[机器人反应速度突破「实时」临界点]**

南洋理工大学 MARS Lab 提出了 Action-to-Action Flow Matching (A2A) 方法，用机器人自身历史动作直接预测下一步，完全跳过传统扩散模型的慢速随机噪声采样过程。

• **0.56ms** 单步动作生成，相比现有方法速度提升数量级
• 核心改进：用确定性的「动作到动作」流匹配替代随机的去噪扩散，消除了迭代采样延迟
• 对需要实时反应的机器人场景（灵巧手、人形机器人）意义重大

A2A 的价值在于，它不是在扩散模型的框架内做优化，而是直接重构了生成范式本身。这一思路若大规模复现，将对具身智能的控制层产生深远影响。

## 原文

What if real-time robot control didn't have to wait for slow, iterative action generation? 

MARS Lab at Nanyang Technological University (Jindou Jia et al.) introduces Action-to-Action Flow Matching (A2A). 

This novel method uses a robot's own historical actions to directly predict the next move, skipping the slow, random noise sampling of traditional diffusion models. A2A enables lightning-fast, single-step action generation (0.56 ms!), vastly outperforming existing methods in speed, training efficiency, robustness to visual noise, and generalization to unseen configurations. It even shows versatility in video generation!

Action-to-Action Flow Matching

Website: https://t.co/uCOwwjLqWr 
arXiv: https://t.co/fEWLxlIblp 
Code: https://t.co/DPLa8jXJge

Our report: https://t.co/sf00sJpiSQ

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-02T18:30:00.000Z
- **抓取时间**: 2026-04-02T21:49:22.942Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 97 · 🔄 19 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [textop-humanoid-robot](/concepts/textop-humanoid-robot.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2039772351416426895) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/textop-humanoid-robot.md)
