---
type: "X Tweet"
title: "Google 开源扩散架构 DiffusionGemma：18GB 显存跑 26B，1000+ tokens/s 改写 Transformer 逐字范式"
description: "**[核心判断]** Google 开源扩散架构 DiffusionGemma，用\"先打草稿再通读改错\"取代 Transformer 逐字生成，26B 模型 18GB 显存即可跑出 1000+ tokens/s。  - H100 跑出 1000+ tokens/s，RTX 5090 也有 700+，相对自回归生成是数量级提升 - 每轮迭代都会重新审视整块文本并修订，避免 Transformer 写"
resource: "https://x.com/i/status/2064898950986133832"
tags:
  - "x-news"
  - "news"
  - "author:xiaohu"
timestamp: "2026-06-11T04:19:22.016Z"
x_tweet_id: "2064898950986133832"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-06-11T02:34:08.000Z"
x_engagement:
  likes: 17
  retweets: 0
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Google 开源扩散架构 DiffusionGemma：18GB 显存跑 26B，1000+ tokens/s 改写 Transformer 逐字范式

## 摘要

**[核心判断]** Google 开源扩散架构 DiffusionGemma，用"先打草稿再通读改错"取代 Transformer 逐字生成，26B 模型 18GB 显存即可跑出 1000+ tokens/s。

- H100 跑出 1000+ tokens/s，RTX 5090 也有 700+，相对自回归生成是数量级提升
- 每轮迭代都会重新审视整块文本并修订，避免 Transformer 写错第 10 个字就锁死的硬伤
- 一次可同时生成 256 个 token，扩散式并行是范式跳跃

gakki 锐评：Transformer 统治 LLM 八年，但"逐字打字"对长文写作、代码生成本身就是反人性的——扩散 LLM 用空间换时间，可能才是真正适合 Agent 长程任务的底层架构。

## 原文

Google 开源其扩散架构模型：DiffusionGemma

区别于Transformers 模型像打字机一样逐词一个一个生成

DiffusionGemma 可一次性生成大段或者整篇内容，然后再逐步优化

大幅度提高生成的速度：

在H100 上可实现 1000+ tokens/s，RTX 5090 上 700+ tokens/s

26B，18GB 显存能跑
一次可同时生成 256 个 tokens

自己检查自己，写完还能改：

普通 AI 写完一个字就锁死了，不会回头改。就算第 10 个字写错了，到第 100 个字的时候它也改不了前面的。

DiffusionGemma 的生成过程本身就是多轮迭代，每一轮它会重新审视整块文本，发现哪里不对就改掉。就像写作文先打草稿，再通读一遍改错别字，再读一遍调语句，几轮下来质量就上去了。


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-06-11T02:34:08.000Z
- **抓取时间**: 2026-06-11T04:19:22.016Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 17 · 🔄 0 · 💬 6 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2064898950986133832) — @xiaohu (小互)
