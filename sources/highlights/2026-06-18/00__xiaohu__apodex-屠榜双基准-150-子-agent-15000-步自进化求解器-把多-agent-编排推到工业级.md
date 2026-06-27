---
type: "source"
title: "Apodex 屠榜双基准：150 子 Agent + 15000 步自进化求解器，把多 Agent 编排推到工业级"
description: "**[Deep Research Agent 出新物种：自进化重型求解器在多 Agent 编排上做出工程级实证]** - 单任务最多派 150 个子 Agent 异步并行，总步数上限 15000；共享报告池 + 编排器异步读取，不被最慢的子任务拖垮 - 三层自我验证机制：冲突审查员、事实检查员、草稿审查员，最后全局把关；工作流为「深度研究—自我校验—撰写」 - 基准成绩亮眼：BrowseComp "
resource: "https://x.com/i/status/2067487053953294574"
tags:
  - "x-news"
  - "highlights"
  - "author:xiaohu"
timestamp: "2026-06-18T07:19:13.632Z"
x_tweet_id: "2067487053953294574"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-06-18T05:58:20.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "deep-research-agent"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2067487053953294574"
created: "2026-06-18"
updated: "2026-06-26"
sha256: "6416184eea1007b1f1d914a43af50c8be85b0b988492f9da9daf16248abf588c"
sources:
  - "/sources/highlights/2026-06-18/00__xiaohu__apodex-屠榜双基准-150-子-agent-15000-步自进化求解器-把多-agent-编排推到工业级.md"
---

# Apodex 屠榜双基准：150 子 Agent + 15000 步自进化求解器，把多 Agent 编排推到工业级

## 摘要

**[Deep Research Agent 出新物种：自进化重型求解器在多 Agent 编排上做出工程级实证]**
- 单任务最多派 150 个子 Agent 异步并行，总步数上限 15000；共享报告池 + 编排器异步读取，不被最慢的子任务拖垮
- 三层自我验证机制：冲突审查员、事实检查员、草稿审查员，最后全局把关；工作流为「深度研究—自我校验—撰写」
- 基准成绩亮眼：BrowseComp 超越 GPT-5.5-pro，DeepSearchQA 超越 Claude-Opus-4.8 和 Kimi-K2.6
- 落地科研与金融场景，主打「没有现成答案、需要大量调研」的硬问题

Apodex 给出了一种与 MiroThinker 完全不同的解题路径——把工程纪律（异步调度、冲突仲裁）作为核心护城河，而不是堆模型。

gakki 锐评：多 Agent 编排正从「框架演示」走向「工业级求解器」。但 150 × 15000 步的算力账本没人公开——这把「工程红利」与「成本黑洞」摆在了同一张牌桌上，benchmark 上的屠榜不能等同于 ROI 上的屠榜。

## 原文

Apodex ：一个面向深度研究而打造的 Self-evolving heavy-duty solver

专门解决那种"没有现成答案、需要大量调研才能搞定"的硬问题

可一次最多派出 150 个子 Agent 并行探索，总共能跑 15,000 步

在 BrowseComp 上超越了 GPT-5.5-pro，在 DeepSearchQA 上超越了 Claude-Opus-4.8 和 Kimi-K2.6...

在科研和金融领域具有强大的研究能力 ...

它的工作步骤是：深度研究—自我校验—撰写

主要特点：

1、多 Agent 团队协作：主 Agent 接到任务后拆解成子问题，异步派发给专业化的子 Agent，每个子 Agent 有自己独立的上下文、提示词和工具集。

子 Agent 的报告汇入共享报告池，编排器异步读取，不会被最慢的那个卡住。单任务最高可调度 150 个子 Agent，执行超过 15,000 步。

2、内置三层自我验证机制： 当子 Agent 报告出现分歧时，冲突审查员介入；具体声明需要落地时，事实检查员介入；草稿完成时，草稿审查员过一遍。

最后还有一个全局验证器对所有汇集的证据做终审。验证器在结构上是独立于推理器的，被提示去"评估"而不是"继续推理"，可以推翻前面的结论。

3、由一个专门的 AgentOS 驱动：与执行任务严格分离，它只负责通用的底层事务：

- Agent调度 — 150 个子 Agent 谁先跑谁后跑，资源怎么分配。

- 模型和工具路由 — 这个子任务该调哪个模型、该用哪个工具（搜索引擎、代码执行器、数据库等）。
 
- 事件流 — 子 Agent 之间怎么传递消息和状态更新。
 
- 检查点和追踪 — 跑到哪一步了，出错了能不能回滚。
 
- 成本记账 — 这个任务总共调了多少次 API，花了多少钱。

 - 权限管理 — 哪些工具允许用，哪些数据允许访问。

这种设计好处是：当你添加新应用时候，只需一个插件代码文件夹，底下的调度、路由、记账、追踪这些基础设施全都现成的，不用动内核一行代码。


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-06-18T05:58:20.000Z
- **抓取时间**: 2026-06-18T07:19:13.632Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 6 · 🔖 0 · 👁 0
- **关联主题**: [deep-research-agent](/concepts/deep-research-agent.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2067487053953294574) — @xiaohu (小互)
[2] [Author page](/entities/authors/xiaohu.md)
[3] [Related topic](/concepts/deep-research-agent.md)
