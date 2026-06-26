---
type: "X Tweet"
title: "实测 Karpathy 的 LLM 纯文本知识库：<1000 文件规模下，Embedding 根本不需要"
description: "**【一句话核心判断】** 在中小规模知识库场景，纯文本编译 + 双层 Markdown 的检索路径，比 Embedding 方案更轻、更快、更可控。  **信息增量：** • 实测验证：2层 Markdown 结构（索引层 index.md + 摘要层 document.summary.md），无需任何 Embedding 工具，文件数量 <1000 时完全够用 • 索引层设计：每行对应一个文件"
resource: "https://x.com/i/status/2040271533973938399"
tags:
  - "x-news"
  - "news"
  - "author:timyangnet"
timestamp: "2026-04-05T02:14:39.778Z"
x_tweet_id: "2040271533973938399"
x_author: "Tim✨"
x_handle: "timyangnet"
x_created_at: "2026-04-04T03:33:34.000Z"
x_engagement:
  likes: 272
  retweets: 31
  replies: 5
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 实测 Karpathy 的 LLM 纯文本知识库：<1000 文件规模下，Embedding 根本不需要

## 摘要

**【一句话核心判断】**
在中小规模知识库场景，纯文本编译 + 双层 Markdown 的检索路径，比 Embedding 方案更轻、更快、更可控。

**信息增量：**
• 实测验证：2层 Markdown 结构（索引层 index.md + 摘要层 document.summary.md），无需任何 Embedding 工具，文件数量 <1000 时完全够用
• 索引层设计：每行对应一个文件，包含 Path | Summary | Tags，LLM 加载后直接决定是否需要读取原文
• 主动 Pass 掉 Tag 索引：因 Tag 过于稀疏、维护成本高，体现了一种「不追完整只追有效」的工程纪律
• 舍弃项透明：Claude Code 曾建议增加 Tag/Topic 索引，作者明确拒绝并给出了理由

**gakki 锐评：** Embedding 是万能钥匙，但不是所有锁都需要用钥匙——有时候一个目录索引就够了。这套方法论的核心价值在于：把 LLM 的推理能力当成检索引擎本身，而不是把检索外包给一个独立系统。

## 原文

花了半天时间实测 Andrej Karpathy 提到的 LLM 知识库玩法，分享一些实操细节：

【架构设计】 我采用了简单的 2 层 Markdown 结构，完全没用 Embedding 工具。我觉得在文件数量 < 1,000 的规模下，这种“纯文本编译”的思路完全够用。

1. 索引层 (wiki/index.md)： 核心索引文件。每一行对应一个文件，包含：Path | Summary | Tags。

2. 摘要层 (wiki/document.summary.md)： 由 LLM 根据原文增量构建的摘要文件。

3. （舍弃项）： Claude Code 曾建议增加一个 Tag/Topic 索引，但考虑到 Tag 过于稀疏且文件方式维护复杂，被我 Pass 掉了。

【工作流】

- 数据入库： 索引项目文档 →→ 写入 index.md →→ 构建 Summary。

- 检索逻辑： 1. 搜索某 Topic 时，LLM 先加载 index.md 获取相关文件列表。 2. LLM 读取相关文件的 Summary，判断是否需要进一步加载“原文”。

【实测效果】 我导入了某个研究领域的数篇文章，让 LLM 针对其中一个观点输出论证。 在关键词文件命中不多（< 10）的情况下，输出非常有条理。它不是简单的 grep 组合，而是完全按照逻辑重新组织过的观点，通常能给出 3 到 4 个核心要点，不知道这个试验是否属于 Andrej 说的合成数据的玩法。

【一个意外发现】 输出结果中居然包含了一个还没被 index.md 索引的文件内容，并用它辅助了观点。推测是因为该文件之前被加载过，信息存在于 Claude Code 的 memory 文件中 😂

【后续】接下来会继续增加库的容量，等关注领域积累到上百个文件后再观察效果。

目前的原理非常简单，有兴趣的朋友也自己去尝试下，低成本跑通自己的 agent 知识库。


## 元信息

- **作者**: Tim✨ ([@timyangnet](https://x.com/timyangnet))
- **发布时间**: 2026-04-04T03:33:34.000Z
- **抓取时间**: 2026-04-05T02:14:39.778Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 272 · 🔄 31 · 💬 5 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2040271533973938399) — @timyangnet (Tim✨)
[2] [Author page](/entities/authors/timyangnet.md)
