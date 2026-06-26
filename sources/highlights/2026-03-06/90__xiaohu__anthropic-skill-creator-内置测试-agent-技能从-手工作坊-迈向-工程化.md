---
type: "X Tweet"
title: "Anthropic Skill Creator 内置测试：Agent 技能从「手工作坊」迈向「工程化」"
description: "**[技能可靠性工程进入官方工具链]** • 内置 Evals：自动跑测试、追踪通过率/耗时/token 用量，模型更新时自动发现「技能退化」 • 多 Agent 并行测试：独立执行互不干扰，每条用例有独立统计 • A/B 对比 + 触发率优化：盲测版本差异，智能建议描述改进以减少误触发  这是 Anthropic 对 Skill 生态的「官方贴膜」——当技能测试成为基础设施，Skill 才能从玩"
resource: "https://x.com/i/status/2029548875263176877"
tags:
  - "x-news"
  - "highlights"
  - "author:xiaohu"
timestamp: "2026-03-06T04:17:49.935Z"
x_tweet_id: "2029548875263176877"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-03-05T13:25:33.000Z"
x_engagement:
  likes: 362
  retweets: 49
  replies: 12
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 90
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
---

# Anthropic Skill Creator 内置测试：Agent 技能从「手工作坊」迈向「工程化」

## 摘要

**[技能可靠性工程进入官方工具链]**
• 内置 Evals：自动跑测试、追踪通过率/耗时/token 用量，模型更新时自动发现「技能退化」
• 多 Agent 并行测试：独立执行互不干扰，每条用例有独立统计
• A/B 对比 + 触发率优化：盲测版本差异，智能建议描述改进以减少误触发

这是 Anthropic 对 Skill 生态的「官方贴膜」——当技能测试成为基础设施，Skill 才能从玩具变成生产工具。

## 原文

Anthropic 发布了 Skill Creator 的重大更新

核心变化：内置测试用例生成

写完一个 Claude 技能，怎么知道它到底能不能被正确触发？以前靠手动试，现在 Skill Creator 内置了测试功能，帮你自动跑评估。

你现在可以给技能定义一组测试提示词，描述"什么样的回答算合格"，然后让系统自动跑测试、出报告。

不需要写代码，不需要搭测试框架。

具体新增了四个能力：

自动化评估（Evals）： 定义测试提示词和预期结果，系统自动运行并追踪通过率、耗时、token 用量。当模型更新或基础设施变化时，你能立刻发现技能是否"退步"了。

多 Agent 并行测试： 测试用例不是排队跑的，而是在独立的 Agent 中并行执行，每条测试互不干扰，各自有独立的 token 和耗时统计。

A/B 对比： 系统用"比较器 Agent"对两个版本的技能做盲测对比，去掉主观偏见。你改了技能描述，想知道新版比旧版好还是差，直接跑一轮对比就有答案。

触发率优化： 这可能是最实用的功能。系统会分析你的技能描述和测试提示词，建议怎么改描述才能减少误触发和漏触发。官方测试中，6 个公开的文档类技能有 5 个的触发准确率得到了提升。


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-03-05T13:25:33.000Z
- **抓取时间**: 2026-03-06T04:17:49.935Z
- **精选类别**: ✨ 亮点
- **优先级**: 90
- **互动**: ❤️ 362 · 🔄 49 · 💬 12 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-ecosystem](/concepts/claude-code-ecosystem.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2029548875263176877) — @xiaohu (小互)
[2] [Author page](/entities/authors/xiaohu.md)
[3] [Related topic](/concepts/claude-code-ecosystem.md)
