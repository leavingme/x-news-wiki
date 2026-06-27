---
type: "X Tweet"
title: "Claude Opus 4.8 诚实度升级：长程 Agent 任务终于不用时时盯着了"
description: "**一句话核心判断：** Opus 4.8 最大的变化不是能力边界扩展，而是「知道自己不知道」的元认知提升，这对需要无人值守运行的复杂 Agent 任务意义重大。  - 更愿意承认不确定，更少为凑答案而硬编，对自身进度能做出真实判断——这是模型从「表演智能」向「工程可靠」转变的信号 - 快速模式（fast mode）速度提升 2.5 倍，价格降至原来的 1/3，Claude Code 内置 /fa"
resource: "https://x.com/i/status/2060051148921323542"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-28T19:18:32.752Z"
x_tweet_id: "2060051148921323542"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-28T17:30:42.000Z"
x_engagement:
  likes: 78
  retweets: 6
  replies: 18
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
---

# Claude Opus 4.8 诚实度升级：长程 Agent 任务终于不用时时盯着了

## 摘要

**一句话核心判断：** Opus 4.8 最大的变化不是能力边界扩展，而是「知道自己不知道」的元认知提升，这对需要无人值守运行的复杂 Agent 任务意义重大。

- 更愿意承认不确定，更少为凑答案而硬编，对自身进度能做出真实判断——这是模型从「表演智能」向「工程可靠」转变的信号
- 快速模式（fast mode）速度提升 2.5 倍，价格降至原来的 1/3，Claude Code 内置 /fast 命令，API 用户需找客户经理申请
- **重头戏 dynamic workflows**：大任务自动拆解，一次性派出数十到数百个并行 subagent，干完由另一批 agent 验证，甚至专门派 agent 挑刺反复迭代，中途断了能接着跑

适合场景：数百文件级代码迁移、跨模块重构等需要数小时甚至数天的长程任务。

gakki 的锐评：dynamic workflows 把「并发 Agent 编排」从概念变成了生产级能力，但真正值得关注的不是它能跑多少个子 Agent，而是这套「验证-迭代-收敛」机制能否真正替代人类的 Review 环节。

## 原文

Anthropic 今天发布了 Claude Opus 4.8，价格和上一代 4.7 持平。https://t.co/TWIpr3SkK2

它最大的变化是更诚实了：更愿意承认自己不确定，更少为了凑个答案而硬编，对自己干到哪一步也能做出更真实的判断。跑长时间的 agent 任务时，它更像一个靠谱的工程师，不用你时时盯着。

同时上线的还有 fast mode【快速模式】，同一个模型，速度大约快 2.5 倍，价格比以前便宜了三倍。在 Claude Code 里用 /fast 打开，API 用户得找客户经理申请或排队。

【重头戏是 dynamic workflows】

跟着 Opus 4.8 一起放出来的，是 Claude Code 的新功能 dynamic workflows（动态工作流），目前是研究预览。

你给它一个大任务，它自己拆解，一次性派出几十到几百个并行的 subagent（子智能体）去干，干完会让另一批 agent 去验证，甚至专门派 agent 去挑刺，反复迭代到结果收敛，最后给你一个整合好的答案。整个过程能跑几小时甚至几天，中途断了还能接着跑。

适合的活：整个代码仓库的 bug 排查、安全审计、性能优化，以及最常见的大规模迁移，框架升级、API 替换、跨语言移植，一次涉及上千个文件那种。

Anthropic 把 Bun 用 Rust 重写当做了宣传安利。Bun 是个跑得很快的 JavaScript 运行时，创始人 Jarred Sumner 用 dynamic workflows 把整个项目从 Zig 移植到 Rust，官方说写了约 75 万行 Rust 代码，通过 99.8% 的原有测试，从第一次提交到合并只花了 11 天。

【代价：它很烧 token】

Anthropic 罕见地主动警告：dynamic workflows 消耗的 token 比普通 Claude Code 会话多得多，建议先拿小任务试水。第一次触发时，Claude Code 会先把要跑的东西摆给你看、让你确认，企业管理员也可以直接禁用。

目前 Max、Team 套餐和 API 用户默认开启，Enterprise 套餐默认关闭，要管理员手动打开。开启方式是直接让 Claude"建个 workflow"，或者打开一个叫 ultracode 的开关。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-28T17:30:42.000Z
- **抓取时间**: 2026-05-28T19:18:32.752Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 78 · 🔄 6 · 💬 18 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2060051148921323542) — @dotey (宝玉)
