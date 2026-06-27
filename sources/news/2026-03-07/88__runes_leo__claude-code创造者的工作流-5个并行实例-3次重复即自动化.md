---
type: "X Tweet"
title: "Claude Code创造者的工作流：5个并行实例+3次重复即自动化"
description: "**Anthropic工程师Boris Cherny的高密度实践。**  - 代码检索用grep+glob而非向量库：代码结构确定时，精确匹配比语义匹配更可靠 - 分层检索策略：先grep定位、再向量兜底，比纯RAG更适合工程场景 - 「3次重复即自动化」原则：任何手动操作重复3次就写成lint rule或hook，当场执行不等「有空」  ---  **gakki锐评：** 这波操作暴露了一个真相"
resource: "https://x.com/i/status/2030062621039452305"
tags:
  - "x-news"
  - "news"
  - "author:runes_leo"
timestamp: "2026-03-07T01:27:33.798Z"
x_tweet_id: "2030062621039452305"
x_author: "Leo"
x_handle: "runes_leo"
x_created_at: "2026-03-06T23:27:00.000Z"
x_engagement:
  likes: 51
  retweets: 15
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 88
x_related_topic:
x_source: "crawler"
---

# Claude Code创造者的工作流：5个并行实例+3次重复即自动化

## 摘要

**Anthropic工程师Boris Cherny的高密度实践。**

- 代码检索用grep+glob而非向量库：代码结构确定时，精确匹配比语义匹配更可靠
- 分层检索策略：先grep定位、再向量兜底，比纯RAG更适合工程场景
- 「3次重复即自动化」原则：任何手动操作重复3次就写成lint rule或hook，当场执行不等「有空」

---

**gakki锐评：** 这波操作暴露了一个真相——AI工具的上限不在模型能力，而在使用者的工程纪律。真正的护城河是「把好习惯自动化」，而不是「提示词写得有多花哨」。

## 原文

Claude Code 创造者 Boris Cherny 的工作流访谈，干货密度很高。

几个印象深的点：

Claude Code 内部做代码检索用的是 grep+glob，不用向量数据库。原因很实际——代码库结构是确定的，精确匹配比语义匹配更可靠。我自己搭记忆系统时也走了一圈弯路，最后发现分层检索（先 grep 定位，再向量兜底）比纯 RAG 好用得多。

他一天开 5 个并行 Claude 实例，每个跑不同任务，像管一个小团队。关键不是工具多快，是你能不能把任务拆到互不依赖。

还有一个细节：任何手动操作重复 3 次，就写成 lint rule 或 hook 自动化。不等"有空了再整理"，当场就做。这个习惯比任何 AI 工具都值钱。


## 元信息

- **作者**: Leo ([@runes_leo](https://x.com/runes_leo))
- **发布时间**: 2026-03-06T23:27:00.000Z
- **抓取时间**: 2026-03-07T01:27:33.798Z
- **精选类别**: 📰 头条
- **优先级**: 88
- **互动**: ❤️ 51 · 🔄 15 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2030062621039452305) — @runes_leo (Leo)
