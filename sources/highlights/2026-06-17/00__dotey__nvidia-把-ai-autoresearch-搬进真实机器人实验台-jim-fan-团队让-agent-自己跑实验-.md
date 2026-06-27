---
type: "X Tweet"
title: "NVIDIA 把 AI AutoResearch 搬进真实机器人实验台：Jim Fan 团队让 Agent 自己跑实验、改代码、查论文"
description: "**[Jim Fan 的 ENPIRE 第一次把「AI 自主科研」从数字世界推进到真实物理机器人，科研闭环从算法自进化升级为具身自进化。]** - ENPIRE（Agentic Robot Policy Self-Improvement in the Real World）由 NVIDIA GEAR 联合 CMU、UC Berkeley 开发，给 AI 编程 agent 分配机器人、GPU、tok"
resource: "https://x.com/i/status/2067027033431875699"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-17T01:19:21.091Z"
x_tweet_id: "2067027033431875699"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-16T23:30:22.000Z"
x_engagement:
  likes: 17
  retweets: 5
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# NVIDIA 把 AI AutoResearch 搬进真实机器人实验台：Jim Fan 团队让 Agent 自己跑实验、改代码、查论文

## 摘要

**[Jim Fan 的 ENPIRE 第一次把「AI 自主科研」从数字世界推进到真实物理机器人，科研闭环从算法自进化升级为具身自进化。]**
- ENPIRE（Agentic Robot Policy Self-Improvement in the Real World）由 NVIDIA GEAR 联合 CMU、UC Berkeley 开发，给 AI 编程 agent 分配机器人、GPU、token 预算
- 关键流程：自动重置场景 → 跑实验 → 判断成败 → 查论文 → 改代码 → 迭代，人类只需早晨看报告
- 训练方法覆盖启发式学习、行为克隆到强化学习的全谱
- 范式拐点：之前 AutoResearch 只在沙盒里跑通，ENPIRE 第一次把「试错-失败-读论文-改代码」压进真实物理世界

gakki 锐评：瓶颈从此不再是算法，而是机器人安全护栏与单次实验成本。Jim Fan 团队等于把「AI 科学家」概念工程化了。

## 原文

NVIDIA GEAR 实验室发布了 ENPIRE，一套让 AI 编程 agent 自主操控真实机器人做实验的系统。是在真实物理世界里跑，让 AI 自己重置场景、跑实验、判断成败、查论文、改代码、再来一轮，人类只需要早上起来看报告就行。

ENPIRE 的全称是 Agentic Robot Policy Self-Improvement in the Real World，由 NVIDIA GEAR 实验室联合 CMU、UC Berkeley 共同开发。Jim Fan 是 GEAR 实验室的联合负责人，他把这个方向叫 AutoResearch，意思是让 AI 来做科研。之前这个概念只在纯数字环境里跑通过，ENPIRE 是第一次把它搬到了物理世界。

系统的运作方式是这样的：给一组 AI 编程 agent 分配一队机器人、一批 GPU 和足够的 token 预算，然后设定一个目标，比如“尽快完成这个任务，让机器人保持忙碌但别出事”。接下来人就可以走了。

agent 会自动做四件事：

1. 搭建环境：包括自动重置场景和自动判断成败
2. 改进操控策略：从启发式学习到行为克隆到强化学习都会尝试
3. 在真实机器人上跑实验收集数据
4. 分析失败原因并迭代改进代码

整个循环完全自主，不需要人参与。

ENPIRE 测试了几个相当刁钻的操作任务：把细小的 pin 脚精确插入盒子、穿扎带、用剪刀剪扎带、把 GPU 插到主板上。这些都是需要高精度灵巧操作的任务，不是简单的抓取搬运。最终 agent 自主训练出的策略达到了 99% 的成功率（pass@8 标准）。

项目同时测试了三款编程 agent：
1. OpenAI 的 Codex（搭配 GPT-5.5）
2. Anthropic 的 Claude Code（搭配 Opus 4.7）
3. 月之暗面的 Kimi Code（搭配 Kimi K2.6）。

三家的 agent 都能跑通整个流程，但在不同任务上的研究进展速度有差异。

一个比较有意思的发现是他们所谓的“物理 scaling law”：8 台机器人并行探索，比 1 台或 4 台的研究推进速度快得多。

更多机器人意味着更多并行实验，agent 之间还能互相参考对方的成功策略，类似于多个研究者同时攻关同一个问题。不过扩大规模也有代价，token 消耗会显著增加，而且 agent 花在总结同伴进展上的时间会变多，机器人的实际利用率反而下降。

所有代码会开源，让你在家也能搭一个自运行的机器人实验室，但你至少得有一队机器人臂和一批 GPU。开源本身的意义在于，其他机器人实验室可以直接复用这套 agent 驱动的实验框架，省掉大量人工盯实验的时间。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-16T23:30:22.000Z
- **抓取时间**: 2026-06-17T01:19:21.091Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 17 · 🔄 5 · 💬 4 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2067027033431875699) — @dotey (宝玉)
