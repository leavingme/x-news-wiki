---
type: "source"
title: "Agent 本质祛魅：所谓智能体不过是一个「死循环」"
description: "**[Agent 的幻觉被戳破：不是模型变强了，是循环喂给它更多信息]** • 模型本身没有记忆，每次交互都是「闭卷考试」变「开卷+有人翻书」 • 模型从不执行工具，只会说「帮我跑这个」，真正干活的是 Agent 循环 • DIY Agent 门槛比想象中低：核心就是「提问→模型→命令→执行→回填」的循环   **gakki 的锐评：** 这篇是最诚实的 Agent 科普——没有神秘黑箱，只有工程"
resource: "https://x.com/i/status/2029398632156508586"
tags:
  - "x-news"
  - "news"
  - "author:plantegg"
timestamp: "2026-03-05T09:52:48.744Z"
x_tweet_id: "2029398632156508586"
x_author: "plantegg"
x_handle: "plantegg"
x_created_at: "2026-03-05T03:28:32.000Z"
x_engagement:
  likes: 80
  retweets: 19
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 92
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2029398632156508586"
created: "2026-03-05"
updated: "2026-06-26"
sha256: "3aa50db37a684219faa18d178723d66c722145cff1c26f7ce6ffcd9c7c1bbdea"
sources:
  - "/sources/news/2026-03-05/92__plantegg__agent-本质祛魅-所谓智能体不过是一个-死循环.md"
---

# Agent 本质祛魅：所谓智能体不过是一个「死循环」

## 摘要

**[Agent 的幻觉被戳破：不是模型变强了，是循环喂给它更多信息]**
• 模型本身没有记忆，每次交互都是「闭卷考试」变「开卷+有人翻书」
• 模型从不执行工具，只会说「帮我跑这个」，真正干活的是 Agent 循环
• DIY Agent 门槛比想象中低：核心就是「提问→模型→命令→执行→回填」的循环


**gakki 的锐评：** 这篇是最诚实的 Agent 科普——没有神秘黑箱，只有工程循环。那些焦虑「是不是落后了」的人，看完会发现：原来自己也能写一个。

## 原文

最近全网都在吹小龙虾/Claude Code，朋友圈一半人在晒截图，另一半在焦虑——"我是不是又落后了？"

  说实话，我之前也焦虑。直到我自己动手写了一个。

  写完之后我发现：所谓的"智能体"，本质上就是一个死循环。

  你的问题 → 丢给大模型 → 大模型说"帮我执行个命令" → 执行完把结果塞回去 → 大模型再想想 → 再执行 →
  循环十几轮 → 输出答案。

  就这么简单。

  真正让 AI "变强"的不是模型本身（去年的模型和今年的差别没你想的那么大），而是这个循环——Agent
  不断喂新信息给模型，让它从"闭卷考试"变成"开卷+有人帮你翻书"。

  我把整个过程写成了一篇文章：从零开始，只用几段提示词，让 Claude Code 帮我写了一个 MySQL 运维
  Agent。过程中踩了 8 个坑，全部记录下来。

  看完你会明白三件事：
  1. 模型没有记忆（你以为它记住了，其实是 Agent 每次都把历史重发一遍）
  2. 模型从不执行任何工具（它只会说"帮我跑这个"，真正干活的是 Agent）
  3. 你完全可以自己做一个专属 Agent

  别再焦虑了，与其刷别人的截图，不如花 20 分钟搞懂原理。

  理解了本质，你再去看小龙虾、Claude Code、Kiro……所有 Agent 产品都一样，你看它们的视角会完全不同。

  👇 全文链接（含完整提示词和踩坑记录，拿走就能复现）
https://t.co/CNtIHtvYv5


## 元信息

- **作者**: plantegg ([@plantegg](https://x.com/plantegg))
- **发布时间**: 2026-03-05T03:28:32.000Z
- **抓取时间**: 2026-03-05T09:52:48.744Z
- **精选类别**: 📰 头条
- **优先级**: 92
- **互动**: ❤️ 80 · 🔄 19 · 💬 6 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2029398632156508586) — @plantegg (plantegg)
[2] [Author page](/entities/authors/plantegg.md)
