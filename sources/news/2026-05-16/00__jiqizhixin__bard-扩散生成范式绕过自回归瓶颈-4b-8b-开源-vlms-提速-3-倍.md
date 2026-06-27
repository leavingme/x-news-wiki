---
type: "X Tweet"
title: "BARD：扩散生成范式绕过自回归瓶颈，4B/8B 开源 VLMs 提速 3 倍"
description: "**[扩散模型+渐进块合并实现 VLMs 推理速度突破，不损失质量]**  技术要点：上海 AI 研究院与复旦联合提出 BARD，通过渐进块合并（progressive block merging）和阶段性蒸馏，将标准自回归 VLM 转换为扩散架构，在 4B 和 8B 规模下实现最高 3 倍解码加速，同时刷新开源扩散 VLM 的 SOTA。  信息增量：这代表了一个重要的技术方向——用扩散模型替代"
resource: "https://x.com/i/status/2055723205487395259"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-16T19:18:38.285Z"
x_tweet_id: "2055723205487395259"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-16T18:53:00.000Z"
x_engagement:
  likes: 2
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# BARD：扩散生成范式绕过自回归瓶颈，4B/8B 开源 VLMs 提速 3 倍

## 摘要

**[扩散模型+渐进块合并实现 VLMs 推理速度突破，不损失质量]**

技术要点：上海 AI 研究院与复旦联合提出 BARD，通过渐进块合并（progressive block merging）和阶段性蒸馏，将标准自回归 VLM 转换为扩散架构，在 4B 和 8B 规模下实现最高 3 倍解码加速，同时刷新开源扩散 VLM 的 SOTA。

信息增量：这代表了一个重要的技术方向——用扩散模型替代自回归生成，从而突破推理速度瓶颈。对需要实时多模态理解的 Agent 场景（机器人视觉、实时对话）有直接影响。


**gakki 锐评：** 3 倍加速是数字，但真正的信号是——开源社区正在系统性地解构"大模型必须慢"这个默认假设。当推理成本下降，Agent 部署的物理约束就会跟着松动。

## 原文

What if you could get the smarts of an autoregressive AI model but with much faster generation? 

Researchers from Shanghai Academy of AI for Science and Fudan University present BARD. 

They convert a standard autoregressive VLM into a diffusion-based one using progressive block merging and stage-wise distillation — no quality drop, just speed. 

The result: BARD-VL achieves up to 3x faster decoding while setting a new SOTA among open diffusion VLMs at 4B and 8B scales.

BARD: Bridging AutoRegressive and Diffusion Vision-Language Models Via Highly Efficient Progressive Block Merging and Stage-Wise Distillation

Paper: https://t.co/tS4wDqgNEN
Code: https://t.co/t0NR1zKOfv
Huggingface: https://t.co/u8Wa4h6OBX

Our report: https://t.co/WU1aIlkIDm

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-16T18:53:00.000Z
- **抓取时间**: 2026-05-16T19:18:38.285Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2055723205487395259) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
