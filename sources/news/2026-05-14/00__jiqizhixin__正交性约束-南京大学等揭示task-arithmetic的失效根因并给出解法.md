---
type: "X Tweet"
title: "正交性约束：南京大学等揭示Task Arithmetic的失效根因并给出解法"
description: "**南京大学、卧龙岗大学、新加坡南洋理工联合提出 OrthoReg 方法。核心发现：当前 Task Arithmetic 失败的根本原因在于权重更新时缺乏正交性约束，导致任务向量纠缠。OrthoReg 通过在微调期间对权重更新施加正交性约束，实现权重解耦，在多个 Task Arithmetic 方法上一致性提升表现。**  信息增量： - 首次从权重几何结构角度解释了为什么简单任务向量加减在实践中"
resource: "https://x.com/i/status/2054974773831102500"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-14T19:18:11.453Z"
x_tweet_id: "2054974773831102500"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-14T17:19:00.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 正交性约束：南京大学等揭示Task Arithmetic的失效根因并给出解法

## 摘要

**南京大学、卧龙岗大学、新加坡南洋理工联合提出 OrthoReg 方法。核心发现：当前 Task Arithmetic 失败的根本原因在于权重更新时缺乏正交性约束，导致任务向量纠缠。OrthoReg 通过在微调期间对权重更新施加正交性约束，实现权重解耦，在多个 Task Arithmetic 方法上一致性提升表现。**

信息增量：
- 首次从权重几何结构角度解释了为什么简单任务向量加减在实践中不稳定
- 正交性约束作为通用增强模块，可叠加到现有方法而无需改变架构
- Code、Model、Paper 均已开源

空一行

gakki 锐评：Task Arithmetic 这个问题在 Agent 记忆复用场景里很常见——多个能力叠加时互相干扰。OrthoReg 的正交性思路本质上是给权重空间「分区」，这和 Agent 记忆隔离的工程需求高度相关，可能是 Agent 记忆优化方向的一个有效工具级思路。

## 原文

What makes task arithmetic actually work? 

Researchers from Nanjing University, U. Wollongong, and NTU Singapore introduce OrthoReg: a simple method that enforces orthogonality in weight updates during fine-tuning. 

This promotes weight disentanglement and consistently boosts performance across multiple task arithmetic methods. 

Understanding and Enforcing Weight Disentanglement in Task Arithmetic

Paper: https://t.co/QsdHkB20EV
Code: https://t.co/cpN1ZWHLnd
Model: https://t.co/mgGB3HU4hy

Our report: https://t.co/zEaW0XU3e4

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-14T17:19:00.000Z
- **抓取时间**: 2026-05-14T19:18:11.453Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2054974773831102500) — @jiqizhixin (机器之心 JIQIZHIXIN)
