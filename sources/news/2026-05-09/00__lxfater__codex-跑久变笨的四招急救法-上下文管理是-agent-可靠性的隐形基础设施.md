---
type: "source"
title: "Codex 跑久变笨的四招急救法：上下文管理是 Agent 可靠性的隐形基础设施"
description: "**Codex 上下文污染导致性能衰减不是错觉，而是 Agent 工程的系统性问题。**  - 关闭 Process_narration 可省大量输出 token，减少无效信息对上下文的占用 - 协调者模式：主 agent 只做编排，脏活卸给子 agent 的独立上下文窗口 - 先列 task list 再动手，避免调试过程污染主上下文；强制代码库清洁不留垃圾 - 实测每轮可省 40% 上下文消耗"
resource: "https://x.com/i/status/2053147480938971585"
tags:
  - "x-news"
  - "news"
  - "author:lxfater"
timestamp: "2026-05-09T19:18:40.832Z"
x_tweet_id: "2053147480938971585"
x_author: "铁锤人"
x_handle: "lxfater"
x_created_at: "2026-05-09T16:17:59.000Z"
x_engagement:
  likes: 92
  retweets: 16
  replies: 11
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2053147480938971585"
created: "2026-05-09"
updated: "2026-06-26"
sha256: "1066d8e2682463619144a15083c5c08b58d9ebc33e07ae0e951d39cf9d301b13"
sources:
  - "/sources/news/2026-05-09/00__lxfater__codex-跑久变笨的四招急救法-上下文管理是-agent-可靠性的隐形基础设施.md"
---

# Codex 跑久变笨的四招急救法：上下文管理是 Agent 可靠性的隐形基础设施

## 摘要

**Codex 上下文污染导致性能衰减不是错觉，而是 Agent 工程的系统性问题。**

- 关闭 Process_narration 可省大量输出 token，减少无效信息对上下文的占用
- 协调者模式：主 agent 只做编排，脏活卸给子 agent 的独立上下文窗口
- 先列 task list 再动手，避免调试过程污染主上下文；强制代码库清洁不留垃圾
- 实测每轮可省 40% 上下文消耗

Agent 工程的核心矛盾正在从「能不能做」转向「能不能持续做」。上下文管理不是优化技巧，而是 Agent 可靠性的基础设施层。

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

最后一个技巧

规划阶段用 Codex 5.5（超高），方案定了切到 Codex 5.5（高）+ 快速模式执行

规划吃脑子，执行吃速度，分开用更顺


## 元信息

- **作者**: 铁锤人 ([@lxfater](https://x.com/lxfater))
- **发布时间**: 2026-05-09T16:17:59.000Z
- **抓取时间**: 2026-05-09T19:18:40.832Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 92 · 🔄 16 · 💬 11 · 🔖 0 · 👁 0
- **关联主题**: [agent-memory-optimization](/concepts/agent-memory-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2053147480938971585) — @lxfater (铁锤人)
[2] [Author page](/entities/authors/lxfater.md)
[3] [Related topic](/concepts/agent-memory-optimization.md)
