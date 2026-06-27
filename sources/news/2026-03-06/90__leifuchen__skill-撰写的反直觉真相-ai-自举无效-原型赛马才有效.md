---
type: "source"
title: "Skill 撰写的反直觉真相：AI 自举无效，原型赛马才有效"
description: "**[Skill 工程的核心方法论被验证：蒸馏不如迭代]**  • Anthropic Skill-Creator 的实践揭示：AI 自发生成的 Skill 只是训练数据重述，信息增益趋近于零 • 有效路径是：人工草拟思路 → 批量生成 10-20 个原型 → AI 筛选迭代 → 择优固化 • 这与 Claude Code「用几十组原型验证代替需求说明」的开发哲学一致  **gakki 锐评**："
resource: "https://x.com/i/status/2029538793552789916"
tags:
  - "x-news"
  - "news"
  - "author:leifuchen"
timestamp: "2026-03-06T04:17:50.058Z"
x_tweet_id: "2029538793552789916"
x_author: "leifu _/"
x_handle: "leifuchen"
x_created_at: "2026-03-05T12:45:30.000Z"
x_engagement:
  likes: 48
  retweets: 5
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 90
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2029538793552789916"
created: "2026-03-05"
updated: "2026-06-26"
sha256: "c10ebd4f3c074203f6d5f396be487f3c7655f1e0560860a6a90e4a1c82a587a5"
sources:
  - "/sources/news/2026-03-06/90__leifuchen__skill-撰写的反直觉真相-ai-自举无效-原型赛马才有效.md"
---

# Skill 撰写的反直觉真相：AI 自举无效，原型赛马才有效

## 摘要

**[Skill 工程的核心方法论被验证：蒸馏不如迭代]**

• Anthropic Skill-Creator 的实践揭示：AI 自发生成的 Skill 只是训练数据重述，信息增益趋近于零
• 有效路径是：人工草拟思路 → 批量生成 10-20 个原型 → AI 筛选迭代 → 择优固化
• 这与 Claude Code「用几十组原型验证代替需求说明」的开发哲学一致

**gakki 锐评**：「赛马不相马」正在从口号变成工程纪律——在 Agent 时代，需求的最好表达方式不是文档，而是可运行的候选集。

## 原文

前两天一直在研究怎么给 agent 写 Skill 更有效，因为 agent 自举的 Skill 感觉作用有限。看了 SkillsBench 发现，果然原因很简单：AI 生成的 Skill 只是把训练数据蒸馏一遍，模型本来就知道这些，信息增益趋近于零。

看了Anthropic 内置的 Skill-Creator，发现其实不用想的太复杂，先自己写一个大概思路，然后大力出奇迹，让 AI 直接搞他 10-20 个 ABCDEFG TEST，然后指点 AI 择其善者而从之，其不善者而改之，最后一个 Skill 就成型了。这和 Claude Code 开发的思路一致，用几十组原型验证代替需求说明，赛马不相马。


## 元信息

- **作者**: leifu _/ ([@leifuchen](https://x.com/leifuchen))
- **发布时间**: 2026-03-05T12:45:30.000Z
- **抓取时间**: 2026-03-06T04:17:50.058Z
- **精选类别**: 📰 头条
- **优先级**: 90
- **互动**: ❤️ 48 · 🔄 5 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2029538793552789916) — @leifuchen (leifu _/)
[2] [Author page](/entities/authors/leifuchen.md)
