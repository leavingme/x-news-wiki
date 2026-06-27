---
type: "source"
title: "SFT不是学新东西，是在去噪：上海交大研究颠覆微调认知"
description: "**SFT的本质是'减法'而非'加法'，过度训练反而引入过拟合交互。**  上海交大及合作团队发现：监督微调主要移除噪声式的 token 交互，而非学习新的有用模式  这一短暂去噪阶段是 SFT 有效的关键；继续训练会引入过拟合交互，解释了为何 SFT 有时反而损害 LLM  实操意义：早期停止（early stopping）比延长训练更重要，为微调策略提供明确方向    gakki 锐评：这是一"
resource: "https://x.com/i/status/2066580245202038796"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-15T19:19:08.025Z"
x_tweet_id: "2066580245202038796"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-15T17:55:00.000Z"
x_engagement:
  likes: 14
  retweets: 1
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2066580245202038796"
created: "2026-06-15"
updated: "2026-06-26"
sha256: "2066f092ccbb2c23d062d56869aade61e0acd87d9334421293d817fd20ce29bf"
sources:
  - "/sources/highlights/2026-06-15/00__jiqizhixin__sft不是学新东西-是在去噪-上海交大研究颠覆微调认知.md"
---

# SFT不是学新东西，是在去噪：上海交大研究颠覆微调认知

## 摘要

**SFT的本质是'减法'而非'加法'，过度训练反而引入过拟合交互。**

上海交大及合作团队发现：监督微调主要移除噪声式的 token 交互，而非学习新的有用模式

这一短暂去噪阶段是 SFT 有效的关键；继续训练会引入过拟合交互，解释了为何 SFT 有时反而损害 LLM

实操意义：早期停止（early stopping）比延长训练更重要，为微调策略提供明确方向


 gakki 锐评：这是一个反直觉但扎实的结论——'少即是多'在微调领域再次被验证。对正在调模型的人来说，这条研究可能比一个新 benchmark 更实用。

## 原文

Why does supervised fine-tuning sometimes harm LLMs? 

Researchers at Shanghai Jiao Tong U and collaborators found SFT mostly removes noise-like token interactions, not learns new ones. 

This brief denoising stage is key; further training introduces overfitted interactions. Their insight reconciles contradictory views and guides early stopping.

Reconciling Contradictory Views on the Effectiveness of SFT in LLMs: An Interaction Perspective

Paper: https://t.co/vQLZshHV1T

Our report: https://t.co/dQAEGvWQJY

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-15T17:55:00.000Z
- **抓取时间**: 2026-06-15T19:19:08.025Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 14 · 🔄 1 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2066580245202038796) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
