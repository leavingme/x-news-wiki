---
type: "source"
title: "复旦团队 HERMES：零训练实时视频流理解，GPU 内存不再是瓶颈"
description: "**实时视频理解的内存效率问题有了新解法，但商业化路径尚不清晰。**  • 复旦、上海创新院、NUS 联合提出 HERMES，将模型内部记忆重构为分层结构，按细节粒度组织视频信息 • 核心创新：通过紧凑记忆缓存复用实现连续视频流处理，用户提问时无需额外计算 • 训练无关（training-free）设计降低了落地门槛，但论文细节未充分展开  锐评：技术思路有价值——分层记忆缓存是对 Agent 实"
resource: "https://x.com/i/status/2049909648816246870"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-30T19:19:18.188Z"
x_tweet_id: "2049909648816246870"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-30T17:52:00.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "cerul-video-search-agent"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2049909648816246870"
created: "2026-04-30"
updated: "2026-06-26"
sha256: "615538da2b71caceafc12cfe738b25e0c56d3651f4a291b13a9782066555dc91"
sources:
  - "/sources/news/2026-04-30/00__jiqizhixin__复旦团队-hermes-零训练实时视频流理解-gpu-内存不再是瓶颈.md"
---

# 复旦团队 HERMES：零训练实时视频流理解，GPU 内存不再是瓶颈

## 摘要

**实时视频理解的内存效率问题有了新解法，但商业化路径尚不清晰。**

• 复旦、上海创新院、NUS 联合提出 HERMES，将模型内部记忆重构为分层结构，按细节粒度组织视频信息
• 核心创新：通过紧凑记忆缓存复用实现连续视频流处理，用户提问时无需额外计算
• 训练无关（training-free）设计降低了落地门槛，但论文细节未充分展开

锐评：技术思路有价值——分层记忆缓存是对 Agent 实时感知场景的有意义探索，但论文阶段距离产品化还有距离，且「HERMES」命名容易与开源 Agent 框架混淆。

## 原文

How can we make AI understand live video streams in real-time without draining GPU memory?

Researchers from Fudan University, Shanghai Innovation Institute, and the National University of Singapore introduce HERMES.

This training-free system reimagines the model internal memory as a smart hierarchy, organizing video information into different levels of detail. By reusing a compact memory cache, it processes continuous video streams efficiently without needing extra calculations when a user asks a question.

The results are massive: HERMES delivers 10x faster response times than previous state-of-the-art models. Even while using 68% fewer video tokens, it achieves superior accuracy with up to 11.4% gains on streaming benchmarks.

HERMES:KV Cache as HiERarchical Memory for Efficient Streaming Video Understanding

Paper:  https://t.co/HaHV0Kbj17
Code:  https://t.co/VklCV4zxGK
Project:  https://t.co/k6kE3crWi5

Our report: https://t.co/wcpEPtjEc0

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-30T17:52:00.000Z
- **抓取时间**: 2026-04-30T19:19:18.188Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [cerul-video-search-agent](/concepts/cerul-video-search-agent.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2049909648816246870) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/cerul-video-search-agent.md)
