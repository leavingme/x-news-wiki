---
type: "X Tweet"
title: "CARPRT：零训练成本的类感知提示词重加权，黑箱视觉语言模型也能做精准分类"
description: "**[提示词工程正在从「经验艺术」走向「可计算优化」——这次连训练都不需要了]**  - 墨尔本大学+东南大学+RIKEN 提出 CARPRT，核心思路：不同类别应使用不同提示词权重，而非一刀切 - 通过对预测图像取均值来评估每个提示词与各类别的相关性，零训练即插即用 - 在多个基准测试上超越 class-independent 方法，证明 prompt-class 依赖关系是被严重低估的信号  "
resource: "https://x.com/i/status/2051869562937680289"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-06T04:18:53.151Z"
x_tweet_id: "2051869562937680289"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-06T03:40:00.000Z"
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

# CARPRT：零训练成本的类感知提示词重加权，黑箱视觉语言模型也能做精准分类

## 摘要

**[提示词工程正在从「经验艺术」走向「可计算优化」——这次连训练都不需要了]**

- 墨尔本大学+东南大学+RIKEN 提出 CARPRT，核心思路：不同类别应使用不同提示词权重，而非一刀切
- 通过对预测图像取均值来评估每个提示词与各类别的相关性，零训练即插即用
- 在多个基准测试上超越 class-independent 方法，证明 prompt-class 依赖关系是被严重低估的信号

gakki 锐评：这个工作的价值不在于 SOTA 分数，而在于它揭示了一个朴素但被忽视的事实——把「类别」和「提示词」当独立变量处理是偷懒。零训练方案意味着它能直接嵌入任何黑箱 VLM 工作流，落地成本极低。

## 原文

Why treat all classes equally when picking prompt weights? 

Researchers from Univ. of Melbourne, Southeast Univ., & RIKEN present CARPRT. 

It scores each prompt’s relevance per class by averaging over predicted images—no training needed. 

Outperforms class-independent methods on benchmarks, proving prompt-class dependencies matter.

CARPRT: Class-Aware Zero-Shot Prompt Reweighting for Black-Box Vision-Language Models

Paper: https://t.co/3ds5JS7m7X
GitHub: https://t.co/uEnWI04X34

Our report: https://t.co/XVMv9f8AGe

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-06T03:40:00.000Z
- **抓取时间**: 2026-05-06T04:18:53.151Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2051869562937680289) — @jiqizhixin (机器之心 JIQIZHIXIN)
