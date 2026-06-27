---
type: "X Tweet"
title: "LLM 协作不再靠 prompt 工程：清华 LMNet 把多模型通信拽进可微架构时代"
description: "**LMNet 把 LLM 节点化、边可训练，用稠密向量替代文本协议，实现端到端梯度调优。**  - 节点为 stripped-down LLM，边是 trainable seq2seq 映射，整张网络在「数学语言」层面通信 - 监督效率显著提升，少样本下性能逼近手工协议方案 - 把 LLM-to-LLM 协作从「文本协议工程」拽进「可微架构」范畴  锐评：短期落地难，但「多模型非对话协作」的研究"
resource: "https://x.com/i/status/2065658169096065226"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-13T07:19:07.691Z"
x_tweet_id: "2065658169096065226"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-13T04:51:00.000Z"
x_engagement:
  likes: 11
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# LLM 协作不再靠 prompt 工程：清华 LMNet 把多模型通信拽进可微架构时代

## 摘要

**LMNet 把 LLM 节点化、边可训练，用稠密向量替代文本协议，实现端到端梯度调优。**

- 节点为 stripped-down LLM，边是 trainable seq2seq 映射，整张网络在「数学语言」层面通信
- 监督效率显著提升，少样本下性能逼近手工协议方案
- 把 LLM-to-LLM 协作从「文本协议工程」拽进「可微架构」范畴

锐评：短期落地难，但「多模型非对话协作」的研究范式值得跟进——当协作本身可训练，Agent 群体的能力上限就不再被 prompt 锁死。

## 原文

What if LLMs could talk to each other in a language they actually understand—mathematically speaking? 

Tsinghua University and Beijing Institute researchers present LMNet. 

They connect stripped-down LLMs as nodes with trainable sequence-to-sequence edges, letting them swap dense vectors instead of clunky text. 

Result: faster learning, end-to-end gradient tuning, and better performance under limited supervision—without costly hand-coded protocols.

Language Model Networks: Supervision-Efficient Learning through Dense Communication

Paper: https://t.co/nU1p3cCkZB

Our report: https://t.co/I9c97UWYrw

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-13T04:51:00.000Z
- **抓取时间**: 2026-06-13T07:19:07.691Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 11 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2065658169096065226) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
