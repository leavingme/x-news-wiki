---
type: "X Tweet"
title: "阿里I²B-LPO：信息瓶颈定向剪枝推理分支，数学准确率提升5.3%同时增加7.4%解法多样性"
description: "**[核心判断：推理多样性终于有工程解法，而非玄学]**  阿里巴巴DAMO Academy联合中科大、上交、浙大、东北大学发布I²B-LPO，在关键混淆点分支推理路径，用信息瓶颈保留信息量最大的路径。  - 数学基准测试准确率提升最高5.3%，解法多样性提升7.4% - 核心突破：不是随机扰动词Tokens，而是在\"推理卡点\"处主动分支 - 传统LPO（Latent Policy Optimiz"
resource: "https://x.com/i/status/2058040474175479996"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-23T07:19:03.683Z"
x_tweet_id: "2058040474175479996"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-23T04:21:00.000Z"
x_engagement:
  likes: 5
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "推理与模型架构"
x_source: "crawler"
---

# 阿里I²B-LPO：信息瓶颈定向剪枝推理分支，数学准确率提升5.3%同时增加7.4%解法多样性

## 摘要

**[核心判断：推理多样性终于有工程解法，而非玄学]**

阿里巴巴DAMO Academy联合中科大、上交、浙大、东北大学发布I²B-LPO，在关键混淆点分支推理路径，用信息瓶颈保留信息量最大的路径。

- 数学基准测试准确率提升最高5.3%，解法多样性提升7.4%
- 核心突破：不是随机扰动词Tokens，而是在"推理卡点"处主动分支
- 传统LPO（Latent Policy Optimization）随机性过高，该工作首次引入信息瓶颈做定向优化

**gakki锐评：** 模型推理"一条道走到黑"是已知缺陷，但行业长期只能用"多生成几次取最优"这种暴力方式绕过去。I²B-LPO给出了第一个有理论支撑的工程路径——在混淆点判断"该分叉了"比在所有点随机分叉聪明太多。这对Agent的长程任务执行有直接意义。

## 原文

Are your AI models stuck in a rut, repeating the same narrow reasoning? 

Alibaba's DAMO Academy and partners (USTC, SJTU, Zhejiang, Northeastern) introduce I²B-LPO. 

Instead of randomly tweaking words, it branches reasoning at key confusion points and uses an information bottleneck to keep only the most informative paths. 

Result: up to 5.3% better accuracy and 7.4% more diverse solutions on math benchmarks. 

I²B-LPO: Latent Policy Optimization via Iterative Information Bottleneck

Paper: https://t.co/zbRcP5Dsmx
Code: https://t.co/I7pBJUhQKJ

Our report: https://t.co/sIdDt0Ltii

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-23T04:21:00.000Z
- **抓取时间**: 2026-05-23T07:19:03.683Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 5 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2058040474175479996) — @jiqizhixin (机器之心 JIQIZHIXIN)
