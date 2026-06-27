---
type: "source"
title: "Hermes Agent + Autobrowse：浏览器 Agent 用 JS 直出替代逐步点击，效率提升 3-5 倍"
description: "**浏览器 Agent 的效率瓶颈不在模型能力，而在交互策略。** - Hermes Agent 通过 Autobrowse 实现浏览器自动化技能自学习：2 次迭代后，耗时从 102s 降至 35s，交互轮次从 23 轮降至 8 轮，成本从 $1.46 降至 $0.28 - 核心机制：Agent 不再逐步点击 DOM，而是直接 eval JS 获取页面数据并缓存为 Skill - 这是 Agent"
resource: "https://x.com/kylejeong/status/2052497318017208470"
tags:
  - "x-news"
  - "highlights"
  - "author:kylejeong"
timestamp: "2026-05-08T07:17:36.131Z"
x_tweet_id: "2052497318017208470"
x_author: "Kyle Jeong"
x_handle: "kylejeong"
x_created_at: "2026-05-07T21:14:28.000Z"
x_engagement:
  likes: 1382
  retweets: 96
  replies: 40
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-browser-token-efficiency"
x_source: "ai-trend-digest"
type_okf: "X Tweet"
source_url: "https://x.com/kylejeong/status/2052497318017208470"
created: "2026-05-07"
updated: "2026-06-26"
sha256: "a13def52a66cc4a6d25e3613ebf9cbec02cfeb3ae3f8fd42b0cde5aafd7cf5f9"
sources:
  - "/sources/highlights/2026-05-08/00__kylejeong__hermes-agent-autobrowse-浏览器-agent-用-js-直出替代逐步点击-效率提升-3-5-倍.md"
---

# Hermes Agent + Autobrowse：浏览器 Agent 用 JS 直出替代逐步点击，效率提升 3-5 倍

## 摘要

**浏览器 Agent 的效率瓶颈不在模型能力，而在交互策略。**
- Hermes Agent 通过 Autobrowse 实现浏览器自动化技能自学习：2 次迭代后，耗时从 102s 降至 35s，交互轮次从 23 轮降至 8 轮，成本从 $1.46 降至 $0.28
- 核心机制：Agent 不再逐步点击 DOM，而是直接 eval JS 获取页面数据并缓存为 Skill
- 这是 Agent 浏览器 Token 效率优化的实证案例，验证了「技能缓存」范式的成本优势

锐评：浏览器 Agent 最烧钱的不是推理，而是反复与 DOM 交互的 Token 开销。Autobrowse 的「JS 直出 + Skill 缓存」路径，本质上是在用确定性代码替代概率性对话。

## 原文

Hermes Agent can use Autobrowse to make better browser skills.

In this HN example, 2 iterations take us from:

102 seconds -&gt; 35
23 turns -&gt; 8
$1.46 -&gt; $0.28

Instead of clicking step by step it decides to eval JS directly on the page and save that workflow to a skill. https://t.co/9qiMkbWhM8


## 元信息

- **作者**: Kyle Jeong ([@kylejeong](https://x.com/kylejeong))
- **发布时间**: 2026-05-07T21:14:28.000Z
- **抓取时间**: 2026-05-08T07:17:36.131Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 1382 · 🔄 96 · 💬 40 · 🔖 0 · 👁 0
- **关联主题**: [agent-browser-token-efficiency](/concepts/agent-browser-token-efficiency.md)

## Citations

[1] [Tweet on X](https://x.com/kylejeong/status/2052497318017208470) — @kylejeong (Kyle Jeong)
[2] [Author page](/entities/authors/kylejeong.md)
[3] [Related topic](/concepts/agent-browser-token-efficiency.md)
