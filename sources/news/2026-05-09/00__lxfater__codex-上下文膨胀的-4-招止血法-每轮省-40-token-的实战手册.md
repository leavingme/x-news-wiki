---
type: "source"
title: "Codex 上下文膨胀的 4 招止血法：每轮省 40% Token 的实战手册"
description: "**Codex 跑久了变笨不是幻觉，是上下文被垃圾撑爆——解法是架构层面的优化而非提示词微调。**  - 关掉 Process_narration：默认输出的规划步骤全是无效 token，关掉直接止损 - Codex 当协调者而非苦力：并行开 5 个 sub-agent，每个有独立上下文窗口，主上下文只留干净协调任务 - 强制先列 task list 再动手，防止调试过程污染上下文 - 禁止留临时"
resource: "https://x.com/i/status/2053146640694005862"
tags:
  - "x-news"
  - "news"
  - "author:lxfater"
timestamp: "2026-05-09T16:18:41.634Z"
x_tweet_id: "2053146640694005862"
x_author: "铁锤人"
x_handle: "lxfater"
x_created_at: "2026-05-09T16:14:39.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2053146640694005862"
created: "2026-05-09"
updated: "2026-06-26"
sha256: "0e5b2f494e94e03c7e75a7c02dbc9b1952a0193e3304c89f7b5313a7da8e383c"
sources:
  - "/sources/news/2026-05-09/00__lxfater__codex-上下文膨胀的-4-招止血法-每轮省-40-token-的实战手册.md"
---

# Codex 上下文膨胀的 4 招止血法：每轮省 40% Token 的实战手册

## 摘要

**Codex 跑久了变笨不是幻觉，是上下文被垃圾撑爆——解法是架构层面的优化而非提示词微调。**

- 关掉 Process_narration：默认输出的规划步骤全是无效 token，关掉直接止损
- Codex 当协调者而非苦力：并行开 5 个 sub-agent，每个有独立上下文窗口，主上下文只留干净协调任务
- 强制先列 task list 再动手，防止调试过程污染上下文
- 禁止留临时文件和死代码，从代码库层面堵住上下文泄漏

gakki 锐评：这四招的共同逻辑是"上下文是稀缺资源，必须架构化管理"。和 Manus 的 Context Engineering 原则一脉相承。Token 优化正在从"省钱技巧"进化为 Agent 工程的核心纪律。

## 原文

Codex 跑久了越来越笨越来越慢，是不是？

不是你的错觉，是它自己把上下文撑爆了

下面 4 招我自己在用，每轮省 40% 上下文，差距很明显

第一招，设 Process_narration=false
Codex 默认把所有规划步骤甩给你看，全是输出 token
你又不会真的逐条审，关掉就是了

第二招，让 Codex 当协调者，不当苦力

用下面这段提示词：
充当协调者，用并行 agents 做研究和执行，给每个 agent 写详细任务，强制它们行动、迭代、完成，带回深入报告，你的工作是分析、反馈、给持续任务

核心是把吃上下文的脏活全卸给 agents
每个 agent 有自己的上下文窗口，你同时开 5 个就相当于 5 个上下文一起用
主上下文只留干净的协调任务

第三招：先想清楚再动手

调试和修补本来就乱，不强制规划的话 Codex 会一边乱试一边污染上下文
但不是让你开 plan mode，那玩意太重
让它每个任务先列 task list 再动手，进度可追、可迭代就够了

第四招，不许在代码库里留垃圾

使用下面提示词：
保持代码库干净，没有临时文件，没有死代码，没有死文件，始终保持组织化，没有不必要的文件夹、子文件夹、文件

Claude 把脏东西藏缓存里，臃肿但代码库整洁
但 Codex 不一样，输出贼重，几轮会话你的工作目录就一团乱
目录一乱上下文跟着脏，性能就掉下去了
所以要强制它跟着既有的文件结构走

最后一个技巧：

规划阶段用 Codex 5.5（超高），方案定了切到 Codex 5.5（高）+ 快速模式执行

规划吃脑子，执行吃速度，分开用更顺


## 元信息

- **作者**: 铁锤人 ([@lxfater](https://x.com/lxfater))
- **发布时间**: 2026-05-09T16:14:39.000Z
- **抓取时间**: 2026-05-09T16:18:41.634Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2053146640694005862) — @lxfater (铁锤人)
[2] [Author page](/entities/authors/lxfater.md)
