---
type: "source"
title: "Claude Code创建者Boris揭秘：并行5-10个会话+Plan Mode才是正确打开方式"
description: "**[Claude Code的工程化用法被官方「认证」]** • Boris 同时开 5-10 个 Claude 跑不同任务，在它们之间来回切换——第一个 Tab 出计划时跳去第二个开新任务，「不等做完就跳」的并行策略颠覆单线程使用惯性 • 每个 session 强制从 Plan Mode 开始：先出计划 → 人工审一遍 → 满意了再切自动执行，「计划对了，代码就对了」 • Cowork 与 Cl"
resource: "https://x.com/i/status/2036424206385029468"
tags:
  - "x-news"
  - "highlights"
  - "author:xiaohu"
timestamp: "2026-03-25T12:44:13.803Z"
x_tweet_id: "2036424206385029468"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-03-24T12:45:40.000Z"
x_engagement:
  likes: 453
  retweets: 110
  replies: 13
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2036424206385029468"
created: "2026-03-24"
updated: "2026-06-26"
sha256: "06d976ce6b386a856fad4de190c0cdf1531b923f53175c0fcc38b4efea881690"
sources:
  - "/sources/highlights/2026-03-25/00__xiaohu__claude-code创建者boris揭秘-并行5-10个会话-plan-mode才是正确打开方式.md"
---

# Claude Code创建者Boris揭秘：并行5-10个会话+Plan Mode才是正确打开方式

## 摘要

**[Claude Code的工程化用法被官方「认证」]**
• Boris 同时开 5-10 个 Claude 跑不同任务，在它们之间来回切换——第一个 Tab 出计划时跳去第二个开新任务，「不等做完就跳」的并行策略颠覆单线程使用惯性
• 每个 session 强制从 Plan Mode 开始：先出计划 → 人工审一遍 → 满意了再切自动执行，「计划对了，代码就对了」
• Cowork 与 Claude Code 共享同一套 Agent SDK，只是换了图形界面，能力无差异

Claude Code 的「正确用法」一直是个黑箱，官方文档过于克制，社区摸索碎片化。Boris 这次「官方漏底」把并行编排和计划优先推成最佳实践——这本质上是在教用户如何用「人做决策、AI 做执行」的分层逻辑驾驭工具，而非被工具牵着走。

## 原文

Claude Code 的创建者Boris 

教你如何用好Claude Code 和 Claude CoWork

Claude Code的创造者Boris最近上播客分享了他自己的工作流。

看完之后我觉得，比起官方文档，他嘴里漏出来的实操经验有意思太多了。

1、Cowork底层就是Claude Code

很多人以为Cowork是个新产品。

其实它跑的是Claude Code同一套Agent SDK，同一个大脑，只是换了个图形界面。

你之前觉得Claude Code太技术了？现在直接试Cowork，能力一样，门槛低很多。

2、别一个个串行，要并行

Boris同时开5-10个Claude跑不同任务，在它们之间来回切换。

第一个Tab给任务出计划，不等做完就跳第二个开新的，一圈转回来第一个计划已经出了。

有人说"Claude好慢我自己更快"。单个确实，但你同时跑五个试试？

3先出计划，再让它动手

Boris几乎每个session都从Plan Mode开始。

先让Claude出计划 → 你审一遍 → 满意了再切自动执行。
他说了句很精辟的话："计划对了，代码就对了。"

花两分钟审计划，能省二十分钟返工。Cowork同理，它提方案你再确认。

4、给Claude"眼睛"

Boris说提升效果三板斧：最强模型 + CLAUDE.md + 让Claude验证自己的输出。

第三个最容易被忽略。

他的比方：蒙着眼睛画画，画得再好也有限。让Claude看到自己的输出（跑代码、看渲染、检查表格），质量直接上一个档。

5、用最贵的模型反而省钱

Opus虽然单价最贵，但一次搞定不用来回纠正，实际token消耗更少。

用小模型看着便宜，花在引导和修正上的时间算下来可能更贵。

直接上最强的，省的是你的时间。

6、现在就值得上手

Boris说Cowork现在像一年前Claude Code刚出来，"还早期但已经每天在用了"。

他的起步建议：别折腾配置。装好桌面端 + Chrome插件，挂个文件夹，从简单任务开始玩。

"没有正确的使用方式，找到适合你的路就行。"


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-03-24T12:45:40.000Z
- **抓取时间**: 2026-03-25T12:44:13.803Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 453 · 🔄 110 · 💬 13 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-ecosystem](/concepts/claude-code-ecosystem.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2036424206385029468) — @xiaohu (小互)
[2] [Author page](/entities/authors/xiaohu.md)
[3] [Related topic](/concepts/claude-code-ecosystem.md)
