---
type: "X Tweet"
title: "Karpathy 实践：LLM 知识库正在替代代码操作成为 Token 消耗主力"
description: "**[一句话核心判断]** LLM 的 Token 消耗重心正在从「代码操作」迁移到「知识操作」，Obsidian + LLM 编译 wiki 是新一代个人知识管理的主流范式。  - 流程：raw/ 目录 → LLM「编译」为 wiki（总结 + 反向链接 + 概念归类 + 互链） - Obsidian Web Clipper + 本地图片抓取，实现完整上下文保留 - 意义：LLM 从「编程工具」"
resource: "https://x.com/i/status/2039825154478326131"
tags:
  - "x-news"
  - "news"
  - "author:verysmallwoods"
timestamp: "2026-04-03T00:42:40.431Z"
x_tweet_id: "2039825154478326131"
x_author: "VerySmallWoods"
x_handle: "verysmallwoods"
x_created_at: "2026-04-02T21:59:49.000Z"
x_engagement:
  likes: 192
  retweets: 31
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Karpathy 实践：LLM 知识库正在替代代码操作成为 Token 消耗主力

## 摘要

**[一句话核心判断]**
LLM 的 Token 消耗重心正在从「代码操作」迁移到「知识操作」，Obsidian + LLM 编译 wiki 是新一代个人知识管理的主流范式。

- 流程：raw/ 目录 → LLM「编译」为 wiki（总结 + 反向链接 + 概念归类 + 互链）
- Obsidian Web Clipper + 本地图片抓取，实现完整上下文保留
- 意义：LLM 从「编程工具」进化为「认知外脑」，知识管理已变成 token 管理

gakki 说：当你花 token 比花代码还多的时候，LLM 的定位就变了——它是你的第一大脑，而不只是编码助手。

## 原文

Andrej Karpathy 对于 LLM 知识库的个人经验分享，受教了 👍

---

LLM 知识库

最近我发现一件非常有用的事情：用大语言模型（LLM）为各种研究主题构建个人知识库。

现在，我最近的大部分 token 使用量，已经不再主要用于操作代码，而是更多用于操作知识（以 markdown 和图片形式存储）。而最新的 LLM 在这方面表现得相当不错。所以我的流程大概是这样的：

数据导入
我会把各种来源的资料（文章、论文、代码仓库、数据集、图片等）整理并放入一个 raw/ 目录中。
然后使用 LLM 逐步“编译”出一个 wiki，本质上就是一个按目录结构组织的 .md 文件集合。

这个 wiki 会包括：
- 对 raw/ 中所有数据的总结
- 反向链接（backlinks）
- 将数据归类为不同概念
- 为这些概念撰写文章
- 并把所有内容相互链接起来

在把网页文章转换成 .md 文件时，我喜欢用 Obsidian 的 Web Clipper 插件，同时我也会用快捷键把相关图片全部下载到本地，这样 LLM 就可以更方便地引用这些图片。

IDE
我使用 Obsidian 作为 IDE 的“前端”，在里面查看：
- 原始数据
- 编译后的 wiki
- 以及衍生出的可视化内容

需要强调的是：wiki 中的所有内容都是由 LLM 生成和维护的，我几乎不会手动修改。

我也尝试过一些 Obsidian 插件来用不同方式展示数据（例如用 Marp 来做幻灯片）。

问答
真正有趣的地方在于：当你的 wiki 足够大（比如我最近的一个研究已经有约 100 篇文章、40 万字），你就可以对这个 wiki 提各种复杂问题。

LLM agent 会：
- 自动查找相关内容
- 进行研究
- 给出答案

我原本以为需要用复杂的 RAG，但实际上在这个“中等规模”下，LLM 已经可以很好地：
- 自动维护索引文件
- 写简要摘要
- 并轻松读取相关重要数据

输出
相比在终端里看纯文本答案，我更喜欢让它输出：
- markdown 文件
- 幻灯片（Marp 格式）
- matplotlib 图像

然后再在 Obsidian 中查看。

根据不同问题，还可以想象更多可视化输出形式。

而且我经常会把这些输出“归档”回 wiki 中，让知识库不断增强。

也就是说，我的探索和提问会持续积累进知识库本身。

质量检查
我还会用 LLM 对整个 wiki 做“健康检查”，例如：
- 找出不一致的数据
- 补全缺失信息（结合网络搜索）
- 挖掘新的潜在主题（生成新文章）

这样可以逐步清理 wiki，并提升整体数据质量。

LLM 在提出“下一步该问什么问题”方面也非常强。

额外工具
我也会开发一些额外工具来处理数据。例如：
- 我“随手 vibe coding”做了一个简单的搜索引擎

它既可以直接通过网页界面使用，也可以作为工具通过 CLI 提供给 LLM，用于更复杂的查询

进一步探索
随着仓库越来越大，很自然会开始考虑：
- 合成数据生成
- 微调

让 LLM 把这些知识“学进参数里”，而不是仅依赖上下文窗口。

总结
从多个来源收集原始数据 →
由 LLM 编译成 .md wiki →
再由 LLM 通过各种 CLI 工具进行问答和持续优化 →
所有内容在 Obsidian 中查看。

你几乎不需要手动编写或编辑 wiki——这基本是 LLM 的工作领域。

我觉得这里有机会诞生一个非常强大的新产品，而不是现在这种“拼拼凑凑的脚本集合”。


## 元信息

- **作者**: VerySmallWoods ([@verysmallwoods](https://x.com/verysmallwoods))
- **发布时间**: 2026-04-02T21:59:49.000Z
- **抓取时间**: 2026-04-03T00:42:40.431Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 192 · 🔄 31 · 💬 6 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2039825154478326131) — @verysmallwoods (VerySmallWoods)
