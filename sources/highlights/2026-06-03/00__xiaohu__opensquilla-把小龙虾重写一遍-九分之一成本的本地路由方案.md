---
type: "X Tweet"
title: "OpenSquilla：把小龙虾重写一遍，九分之一成本的本地路由方案"
description: "**[token分诊台逻辑：简单任务本地跑，复杂任务再上顶级模型]**  本地小模型先对请求极速向量化，判断简单还是复杂，再决定派哪个模型。25个任务实测：纯Claude Opus成本$6.2，OpenSquilla混用Opus+GLM5.1+DS4 Flash，成本仅$0.68，分数几乎一样。token节省不仅在模型调用，还在于90多个Skill的加载优化。  gakki锐评：本地路由层是Age"
resource: "https://x.com/i/status/2062112308126761353"
tags:
  - "x-news"
  - "highlights"
  - "author:xiaohu"
timestamp: "2026-06-03T10:18:22.715Z"
x_tweet_id: "2062112308126761353"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-06-03T10:01:01.000Z"
x_engagement:
  likes: 6
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# OpenSquilla：把小龙虾重写一遍，九分之一成本的本地路由方案

## 摘要

**[token分诊台逻辑：简单任务本地跑，复杂任务再上顶级模型]**

本地小模型先对请求极速向量化，判断简单还是复杂，再决定派哪个模型。25个任务实测：纯Claude Opus成本$6.2，OpenSquilla混用Opus+GLM5.1+DS4 Flash，成本仅$0.68，分数几乎一样。token节省不仅在模型调用，还在于90多个Skill的加载优化。

gakki锐评：本地路由层是Agent成本战的下半场——谁能先解决"分诊台"问题，谁就能让顶级模型从奢侈品变成日用品。但这套方案的前提是分类模型足够准，否则省的是token，废的是效果。

## 原文

被 AI 不听话折磨了大半年，终于找到解法了

发现一个开源项目 OpenSquilla，国内团队做的

他们用 Python 把"小龙虾"重写了一遍

解决了它太费token、不按照规则执行以及安全的问题

100 次对话就能省下 100万 Token

先说省钱：

它集成了一个本地的小模型，你发的每一个请求，在真正发给大模型之前，会被这个小模型极速向量化，分析这个请求到底是简单任务还是复杂任务。简单的发给便宜模型，复杂的才派顶级模型上场。

就跟医院分诊台一个道理，感冒发烧不用挂专家号。

关键是这个分类在本地跑，不花 token，速度极快，基本感知不到。

官方跑了个测试，25 个任务，纯用 Claude Opus 4.7 总成本 6.2 美金，用 OpenSquilla 路由 Opus4.7、GLM5.1、DS4 Flash 混着跑，分数几乎一样，成本只要 0.68 美金。同样的效果，成本砍到九分之一！

这下我终于敢把 Opus 和 GPT 接进去了！每轮对话还会显示本轮省了多少 token。

而且省 token 不只省在模型调用上。

我装了九十多个 Skill，每轮对话都把所有 Skill 的 description 全塞进上下文里，算了一下每轮要消耗 9000 左右 Tokens。

OpenSquilla 会根据当前对话语义只注入匹配度最高的几个 Skill，按我的规模大概 100 次对话就能省 100万 Token


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-06-03T10:01:01.000Z
- **抓取时间**: 2026-06-03T10:18:22.715Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 6 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2062112308126761353) — @xiaohu (小互)
