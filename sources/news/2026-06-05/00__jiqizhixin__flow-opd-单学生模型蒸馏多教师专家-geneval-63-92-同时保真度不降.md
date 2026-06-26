---
type: "X Tweet"
title: "Flow-OPD：单学生模型蒸馏多教师专家，GenEval 63→92 同时保真度不降"
description: "**[一句话核心判断]**  Flow-OPD 通过 on-policy  learning 将多个专精教师的知识蒸馏进单一学生模型，在 GenEval 基准上从 63 提升至 92，OCR 从 59 提升至 94，且图像保真度维持不变。  **信息增量：** - 解决了 text-to-image 模型「多任务必取舍」的传统困境，one student 顶多个 specialized teach"
resource: "https://x.com/i/status/2062723331065778438"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-05T04:18:42.917Z"
x_tweet_id: "2062723331065778438"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-05T02:29:00.000Z"
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

# Flow-OPD：单学生模型蒸馏多教师专家，GenEval 63→92 同时保真度不降

## 摘要

**[一句话核心判断]**

Flow-OPD 通过 on-policy  learning 将多个专精教师的知识蒸馏进单一学生模型，在 GenEval 基准上从 63 提升至 92，OCR 从 59 提升至 94，且图像保真度维持不变。

**信息增量：**
- 解决了 text-to-image 模型「多任务必取舍」的传统困境，one student 顶多个 specialized teachers
- 核心创新：on-policy learning + quality regularizer 双管齐下，防止蒸馏过程知识退化
- 覆盖 USTC、UCLA、CUHK、小红书多机构联合研究，有工程落地场景

**影响评估：**
- 对 AI 图像生成工具的工程化部署有直接意义——一个模型搞定多个任务，降低推理成本
- 小红书出现在作者列表里，值得关注其产品化意图

gakki：蒸馏即分发。当「一个模型学多个任务」不再是取舍题，AI 图像生成的工程门槛又低了一档——但护城河从来不在技术，在于谁先把技术用到人手里。

## 原文

What if your text-to-image model could master every task without trade-offs?

Researchers from USTC, UCLA, CUHK, and Xiaohongshu present Flow-OPD. 

They distill specialized teachers into one student via on-policy learning, plus a regularizer to protect image quality. 

Result: GenEval jumps 63→92, OCR 59→94, while keeping fidelity intact.

Flow-OPD: On-Policy Distillation for Flow Matching Models

Paper: https://t.co/0jqf5TWNyq
Project: https://t.co/ucbQJpUdsI
Code: https://t.co/KjPnGo8Baq

Our report: https://t.co/dWx5iTX1Tt

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-05T02:29:00.000Z
- **抓取时间**: 2026-06-05T04:18:42.917Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2062723331065778438) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
