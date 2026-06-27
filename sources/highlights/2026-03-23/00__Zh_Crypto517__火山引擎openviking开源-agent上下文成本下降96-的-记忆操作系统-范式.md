---
type: "X Tweet"
title: "火山引擎OpenViking开源：Agent上下文成本下降96%的「记忆操作系统」范式"
description: "**[Agent记忆管理从黑盒走向文件系统]** • 火山引擎开源OpenViking已获18k stars，通过L0/L1/L2三层分级加载实现\"按需加载\" • 将记忆、外部资源和技能结构化如本地文件夹，自动压缩无效对话并提取长时记忆 • 与OpenClaw配合使用可解决Token乱烧问题，让Agent\"越用越聪明\"而非\"越用越贵\"  Gakki锐评：这不是简单的成本优化，而是Agent基础设施"
resource: "https://x.com/i/status/2035984413348278317"
tags:
  - "x-news"
  - "highlights"
  - "author:Zh_Crypto517"
timestamp: "2026-03-23T12:43:25.586Z"
x_tweet_id: "2035984413348278317"
x_author: "Z大诗"
x_handle: "Zh_Crypto517"
x_created_at: "2026-03-23T07:38:05.000Z"
x_engagement:
  likes: 81
  retweets: 17
  replies: 27
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# 火山引擎OpenViking开源：Agent上下文成本下降96%的「记忆操作系统」范式

## 摘要

**[Agent记忆管理从黑盒走向文件系统]**
• 火山引擎开源OpenViking已获18k stars，通过L0/L1/L2三层分级加载实现"按需加载"
• 将记忆、外部资源和技能结构化如本地文件夹，自动压缩无效对话并提取长时记忆
• 与OpenClaw配合使用可解决Token乱烧问题，让Agent"越用越聪明"而非"越用越贵"

Gakki锐评：这不是简单的成本优化，而是Agent基础设施层的范式转移——当记忆管理从Prompt工程升级为文件系统语义，Agent才真正具备了长期存续的底层条件。

## 原文

终于有人把 AI Agent 的“上下文记忆管理”做成文件系统了，输入token成本最高可以降低 96% ！

中度使用 OpenClaw 一个月，我的 API 账单直接干爆了 500 美金 🤦‍♂️...

长线任务跑起来，Agent 每执行一步，背后都拖着海量的历史记忆、工具调用和上下文。简单粗暴地把这些全塞进 Prompt 里，Token 消耗剧增；但如果直接截断，Agent 马上就开始“失忆”降智

🎉火山引擎在GitHub上刚开源的 OpenViking 已经斩获了18k stars 能够有效的降低输入token的消耗！

配合 OpenClaw 使用，它完美解决了 Token 乱烧的问题，重点说说它的几个核心优势：

- 三层分级加载：分为 L0/L1/L2 三层上下文结构，实现了真正的“按需加载”。Agent 不需要每次都把所有历史记录全量扔给大模型，极大降低了无效 Token 的消耗

- 像管文件一样管 Agent 大脑 记忆、外部资源和技能不再是黑盒里的一团乱麻，而是像本地电脑的文件夹一样结构化。系统会自动压缩无效对话、提取长时记忆，让 Agent 越用越聪明

- 原生文件系统级的精准检索 传统 RAG 是扁平的，经常召回一堆垃圾信息。OpenViking 支持“目录定位 + 语义搜索”的递归检索，Agent 找上下文极其精准，避免了反复试错带来的 Token 浪费

- 检索轨迹可视化（Debug 救星） 以前大模型胡言乱语，根本不知道是哪段 RAG 召回出了问题。现在检索的路径和逻辑都能清晰看到，排查 Bug 效率翻倍

心疼 OpenClaw 跑出来的天价账单，强烈建议花点时间把这玩意接入进去试试
https://t.co/CZwHDvIihq


## 元信息

- **作者**: Z大诗 ([@Zh_Crypto517](https://x.com/Zh_Crypto517))
- **发布时间**: 2026-03-23T07:38:05.000Z
- **抓取时间**: 2026-03-23T12:43:25.586Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 81 · 🔄 17 · 💬 27 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2035984413348278317) — @Zh_Crypto517 (Z大诗)
