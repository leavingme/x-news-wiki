---
type: "source"
title: "复旦+阿里+百度：Prompt Reinjection 撕开多模态 Diffusion '深层失忆'的口子"
description: "**多模态 Diffusion Transformer 在深层会'忘记'长 prompt，复旦/阿里/百度提出零训练方案：把早期文本特征重新注入到深层。**  - 现象：DiT 类模型随层数加深，文本-图像对齐信号被稀释，导致长 prompt 指令遵循度下降。 - 方案：Prompt Reinjection——在训练-free 前提下，把浅层已提取的文本条件重新注入到中后段 Transformer"
resource: "https://x.com/i/status/2069052283866988797"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-22T16:18:33.755Z"
x_tweet_id: "2069052283866988797"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-22T13:38:00.000Z"
x_engagement:
  likes: 10
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2069052283866988797"
created: "2026-06-22"
updated: "2026-06-26"
sha256: "d5e1127c0fe096afa96f7e268b74b1e1d28f11c21ab69f82bc96696a8a34fdd8"
sources:
  - "/sources/news/2026-06-22/00__jiqizhixin__复旦-阿里-百度-prompt-reinjection-撕开多模态-diffusion-深层失忆-的口子.md"
---

# 复旦+阿里+百度：Prompt Reinjection 撕开多模态 Diffusion '深层失忆'的口子

## 摘要

**多模态 Diffusion Transformer 在深层会'忘记'长 prompt，复旦/阿里/百度提出零训练方案：把早期文本特征重新注入到深层。**

- 现象：DiT 类模型随层数加深，文本-图像对齐信号被稀释，导致长 prompt 指令遵循度下降。
- 方案：Prompt Reinjection——在训练-free 前提下，把浅层已提取的文本条件重新注入到中后段 Transformer block。
- 结果：GenEval、DPG、T2I-CompBench++ 指令遵循度全面提升，美学与整体质量也有正收益。
- 含义：不同于 controlnet / IP-adapter 这类外挂，PR 是模型内部信息流的修补——对长 prompt 工作流（分镜、产品图、连续叙事）尤其关键。

**gakki 锐评：** 零训练补丁是工程友好型研究，但本质是给 DiT 架构的'注意力稀释'打补丁；真正的长期解法是让文本-视觉 token 在每一层都保持对齐——这是一道架构题，不是 trick 题。

## 原文

Why do AI image generators keep forgetting your detailed descriptions?

A team from Fudan University, Alibaba, and Baidu introduces Prompt Reinjection.

They found that multimodal diffusion transformers gradually lose prompt info in deeper layers. Their training-free fix: re-inject early text features into later layers to keep the prompt alive.

Result: consistent gains in instruction-following on GenEval, DPG, and T2I-CompBench++, plus better aesthetics and overall quality.

Prompt Reinjection: Alleviating Prompt Forgetting in Multimodal Diffusion Transformers

Paper: https://t.co/4mmCFBIHUG
Code: https://t.co/dV07iwVjLO

Our report: https://t.co/jbIjpKwnbk

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-22T13:38:00.000Z
- **抓取时间**: 2026-06-22T16:18:33.755Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 10 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2069052283866988797) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
