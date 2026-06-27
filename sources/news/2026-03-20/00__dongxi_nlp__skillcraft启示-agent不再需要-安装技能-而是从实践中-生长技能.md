---
type: "X Tweet"
title: "SkillCraft启示：Agent不再需要「安装技能」，而是从实践中「生长技能」"
description: "**[Agent学习范式转变：从被动调用到主动抽象]** • 核心洞见：不预装skills，而是从tool call实践中Observer→Pattern→Save→Reuse自我构建 • MiniMax-M2.7成功复现该流程，证明国产模型已具备meta-learning层面的技能抽象能力 • 与MCP「标准化协议」路线形成张力：Skill是涌现的，还是标准化的？  这触及Agent工具化的根本"
resource: "https://x.com/i/status/2034762982572327347"
tags:
  - "x-news"
  - "news"
  - "author:dongxi_nlp"
timestamp: "2026-03-20T00:42:56.781Z"
x_tweet_id: "2034762982572327347"
x_author: "马东锡 NLP"
x_handle: "dongxi_nlp"
x_created_at: "2026-03-19T22:44:33.000Z"
x_engagement:
  likes: 384
  retweets: 60
  replies: 10
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "skill-vs-mcp-paradigm"
x_source: "crawler"
---

# SkillCraft启示：Agent不再需要「安装技能」，而是从实践中「生长技能」

## 摘要

**[Agent学习范式转变：从被动调用到主动抽象]**
• 核心洞见：不预装skills，而是从tool call实践中Observer→Pattern→Save→Reuse自我构建
• MiniMax-M2.7成功复现该流程，证明国产模型已具备meta-learning层面的技能抽象能力
• 与MCP「标准化协议」路线形成张力：Skill是涌现的，还是标准化的？

这触及Agent工具化的根本分歧。MCP想建「插座标准」，SkillCraft证明Agent可能自己「长出插头」。两条路线不会互斥，但后者的自主性显然更高。

## 原文

如果要为这周的 AI 发展一个关键词，那就是自主进化。

从 Meta-Evolution、AutoHarness、SkillNet、SkillCraft MiniMax-M2.7 等一系列工作可以看到，AI 正在走向自主发现，自主约束，自主学习新 skills，甚至完成模型级别的自我进化。

其中 SkillCraft 给我的启示非常大：我们不需要也不应该为了某一个任务去安装第三方 skills，而应该直接从 tool call 的实践中抽象，构建和复用新的 skills。

今天，用 MiniMax-M2.7 复现了 SkillCraft 关于发现新的 skills 的方法。

几个重要的步骤：
Observer -> 观察 tool call
Pattern -> 从 tool call 中归纳规律，生成新的 skill
Save -> 保存新 skill
Reuse ->遇到类似问题时，直接复用 skill，而不再重复tool call

MiniMax-M2.7 非常出色的完成了这个任务！

Kudos to @MiniMax_AI @SkylerMiao7 

Kudos to 做自主进化的AI 研究员，what a week!


## 元信息

- **作者**: 马东锡 NLP ([@dongxi_nlp](https://x.com/dongxi_nlp))
- **发布时间**: 2026-03-19T22:44:33.000Z
- **抓取时间**: 2026-03-20T00:42:56.781Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 384 · 🔄 60 · 💬 10 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2034762982572327347) — @dongxi_nlp (马东锡 NLP)
