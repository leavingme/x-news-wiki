---
type: "source"
title: "Memory是背景而非指令：LLM只做翻译，执行全归脚本"
description: "**【一句话核心判断】** Memory与Skill+Script的本质区别被普遍误解，前者只能提供背景信息而无法驱动执行流程，导致Agent每次都重新规划，token消耗是真正瓶颈。  **要点：** - Memory本质是\"背景信息\"而非\"执行指令\"，Agent每次对话都会重新理解意图、重新规划步骤，这个思考过程本身才是token消耗的大头 - 正确解法：LLM只做翻译（自然语言→SQL），确"
resource: "https://x.com/i/status/2060538728011927954"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-30T04:18:46.048Z"
x_tweet_id: "2060538728011927954"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-30T01:48:10.000Z"
x_engagement:
  likes: 56
  retweets: 7
  replies: 12
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2060538728011927954"
created: "2026-05-30"
updated: "2026-06-26"
sha256: "8a71a4a111239dc2bcba3599af61d569786d4e855e98afa147672b68b3637865"
sources:
  - "/sources/highlights/2026-05-30/00__dotey__memory是背景而非指令-llm只做翻译-执行全归脚本.md"
---

# Memory是背景而非指令：LLM只做翻译，执行全归脚本

## 摘要

**【一句话核心判断】**
Memory与Skill+Script的本质区别被普遍误解，前者只能提供背景信息而无法驱动执行流程，导致Agent每次都重新规划，token消耗是真正瓶颈。

**要点：**
- Memory本质是"背景信息"而非"执行指令"，Agent每次对话都会重新理解意图、重新规划步骤，这个思考过程本身才是token消耗的大头
- 正确解法：LLM只做翻译（自然语言→SQL），确定性步骤（执行SQL、格式化、上传）全部用Python/Shell脚本，Skill内嵌表结构说明和SQL模板让Agent填空而非从零推理
- 效果：改完token消耗降一个数量级

gakki锐评：这条值得反复读。太多人在Memory里堆工作流描述，期待AI"记住流程"，本质上是用错武器。Script才是确定性，执行归脚本；LLM只负责翻译不负责执行——这是AI Agent工程化的第一性原理。

## 原文

Q：我把数据库接入了 AI Agent，每次用手机发消息让它帮我查数据、导出文件，但 token 消耗特别大。我已经把工作流写进了 Agent 的 Memory 里，但它就是不按流程走，该怎么办？

A：这是一个非常典型的问题。根本原因在于：Memory 只是“背景信息”，不是“执行指令”。Agent 每次对话都会重新理解意图、重新规划步骤，这个思考过程本身就是 token 消耗的大头。

解决方案：用 Agent Skill + Script 替代 Memory 里的工作流。

核心思路是把任务拆成两部分：
- LLM 只做它擅长的事——把自然语言翻译成 SQL 查询语句
- 确定性的步骤全部用脚本——执行 SQL、格式化结果、上传文件，这些不需要 AI 思考，写成 Python/Shell 脚本直接跑

再进一步，在 Skill 里内嵌你的表结构说明和常用 SQL 模板，Agent 只需要填空而不是从零推理。

改完之后 token 消耗能降一个数量级。

一句话总结：能用脚本干的事别让 LLM 干，LLM 只负责翻译，不负责执行。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-30T01:48:10.000Z
- **抓取时间**: 2026-05-30T04:18:46.048Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 56 · 🔄 7 · 💬 12 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2060538728011927954) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
