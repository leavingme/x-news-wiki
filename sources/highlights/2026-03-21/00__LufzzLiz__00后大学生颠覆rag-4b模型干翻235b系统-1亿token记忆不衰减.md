---
type: "X Tweet"
title: "00后大学生颠覆RAG：4B模型干翻235B系统，1亿token记忆不衰减"
description: "**[记忆架构的范式转移已来]** • MSA 用稀疏注意力+Document-wise RoPE 解耦位置编码与记忆规模，64K训练即可外推到1亿token • 核心洞察：不给AI发小抄，而是根治失忆症——让模型自己学会挑重点看 • 2张A800即可跑1亿token推理，创业公司买得起，大模型降智问题有望解决  开源地址已公布，这可能是RAG时代的终结者。"
resource: "https://x.com/i/status/2035256731178344801"
tags:
  - "x-news"
  - "highlights"
  - "author:LufzzLiz"
timestamp: "2026-03-21T12:43:07.785Z"
x_tweet_id: "2035256731178344801"
x_author: "岚叔"
x_handle: "LufzzLiz"
x_created_at: "2026-03-21T07:26:32.000Z"
x_engagement:
  likes: 98
  retweets: 9
  replies: 15
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# 00后大学生颠覆RAG：4B模型干翻235B系统，1亿token记忆不衰减

## 摘要

**[记忆架构的范式转移已来]**
• MSA 用稀疏注意力+Document-wise RoPE 解耦位置编码与记忆规模，64K训练即可外推到1亿token
• 核心洞察：不给AI发小抄，而是根治失忆症——让模型自己学会挑重点看
• 2张A800即可跑1亿token推理，创业公司买得起，大模型降智问题有望解决

开源地址已公布，这可能是RAG时代的终结者。

## 原文

一个 4B 模型在 QA 任务上平均超越了用 235B 生成器的 SOTA RAG 系统👍

看完论文觉得这将是一个非常值得期待的技术，有可能会颠覆RAG范式。据说还是00 后大四学生发明的，之前还vibe 了非常热门的MiroFish 

MSA 的核心：为记忆库中每个文档生成压缩 KV 和路由键，query 进来时通过路由器打分选 Top-k 文档，只对选中文档做注意力计算

最巧妙的设计是 Document-wise RoPE：每个文档位置 ID 独立从 0 编号(如图一)，彻底解耦了位置编码与记忆规模，使得在 64K 上训练就能外推到 1 亿 token

配合分层存储策略（路由键放 GPU，内容 KV 放 CPU 按需加载）

实验结果很亮眼：一个 4B 模型在 QA 任务上平均超越了用 235B 生成器的 SOTA RAG 系统，在 NIAH 上 1M token 仍保持 95% 精度，从 16K 扩到 100M token 性能衰减仅 8.8%

你不需要为了自己的文档去做微调(图四)。只需要花费一点时间让模型为你现有的文档生成“压缩记忆（KV Cache 和路由键）”并存起来

在之后的实际使用和问答中，得益于它的稀疏路由机制，推理速度会非常快，体验上就像在和一个拥有过目不忘能力的超大内存模型在实时对话


## 元信息

- **作者**: 岚叔 ([@LufzzLiz](https://x.com/LufzzLiz))
- **发布时间**: 2026-03-21T07:26:32.000Z
- **抓取时间**: 2026-03-21T12:43:07.785Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 98 · 🔄 9 · 💬 15 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2035256731178344801) — @LufzzLiz (岚叔)
