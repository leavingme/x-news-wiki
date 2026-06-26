---
type: "X Tweet"
title: "Hermes Agent 推出 Curator：Agent 自建技能的垃圾抽屉问题终于有了第一版解法"
description: "**Agent 技能膨胀是所有长期运行 Agent 的必经之痛，Curator 是行业内首个针对此问题的原生治理机制。**  - Agent 的「自我进化」机制会产生大量冗余技能——重复、过时、过于碎片化的技能文件堆积成数字垃圾 - Curator 默认每周自动运行：统计使用频率、合并重叠技能、清理冷门技能、将小技能降级为模板/脚本 - 外部安装、内置、手动锁定的技能不受影响，只治理 Agent "
resource: "https://x.com/i/status/2049735038560842186"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-04-30T07:18:51.987Z"
x_tweet_id: "2049735038560842186"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-30T06:18:10.000Z"
x_engagement:
  likes: 21
  retweets: 2
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# Hermes Agent 推出 Curator：Agent 自建技能的垃圾抽屉问题终于有了第一版解法

## 摘要

**Agent 技能膨胀是所有长期运行 Agent 的必经之痛，Curator 是行业内首个针对此问题的原生治理机制。**

- Agent 的「自我进化」机制会产生大量冗余技能——重复、过时、过于碎片化的技能文件堆积成数字垃圾
- Curator 默认每周自动运行：统计使用频率、合并重叠技能、清理冷门技能、将小技能降级为模板/脚本
- 外部安装、内置、手动锁定的技能不受影响，只治理 Agent 自生成的内容——这是对「自主性边界」的合理设计

锐评：技能治理是 Agent 长期运行的隐性基建，谁先解决这个问题谁就占据「Agent 记忆管理」的范式定义权。Hermes 这步走得比多数 Agent 框架都早。

## 原文

Hermes Agent 加了一个新功能：Curator（策展人）。

Hermes Agent 有个“自我进化”机制，用着用着会自己创建各种技能文件来优化工作流。但技能攒多了就成了数字垃圾抽屉，重复的、过时的、太细碎的全堆在一起。Curator 干的就是定期收拾这个抽屉。

它默认每周自动跑一次，做几件事：统计每个技能的使用频率和更新时间，把功能重叠的技能合并，把太久没用的清理掉，把过于具体的小技能降级成模板或脚本、塞进更通用的技能里。外部安装的技能、内置技能、以及你手动"钉住"的技能它不会碰，只动智能体自己生成的和用户手写的。

不想让它自动跑也行，在 config.yaml 里关掉就好，或者用 hermes curator run 手动触发。

也算是对于技能越来越多的一个痛点解决方案，至于效果如何，可以观察看看。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-30T06:18:10.000Z
- **抓取时间**: 2026-04-30T07:18:51.987Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 21 · 🔄 2 · 💬 4 · 🔖 0 · 👁 0
- **关联主题**: [agent-memory-optimization](/concepts/agent-memory-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2049735038560842186) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/agent-memory-optimization.md)
