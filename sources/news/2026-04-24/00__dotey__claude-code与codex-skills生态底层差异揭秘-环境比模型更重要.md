---
type: "X Tweet"
title: "Claude Code与Codex Skills生态底层差异揭秘：环境比模型更重要"
description: "**一句话核心判断：** Skills的本质不是\"提示词\"，而是\"执行环境\"的封装——不同Agent间的壁垒在Harness层而非模型层。  **信息增量：** - Codex用GPT模型，Claude Code用Claude模型，提示词偏好和能力边界本就不同 - 真正的差异在工具集、AskUserQuestion等环境能力，Skills必须做Agent感知定制 - 跨Agent的Skills复用"
resource: "https://x.com/i/status/2047388496944361834"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-04-24T00:42:29.925Z"
x_tweet_id: "2047388496944361834"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-23T18:53:50.000Z"
x_engagement:
  likes: 9
  retweets: 1
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Claude Code与Codex Skills生态底层差异揭秘：环境比模型更重要

## 摘要

**一句话核心判断：** Skills的本质不是"提示词"，而是"执行环境"的封装——不同Agent间的壁垒在Harness层而非模型层。

**信息增量：**
- Codex用GPT模型，Claude Code用Claude模型，提示词偏好和能力边界本就不同
- 真正的差异在工具集、AskUserQuestion等环境能力，Skills必须做Agent感知定制
- 跨Agent的Skills复用需要检测环境能力而非简单复制提示词

**gakki锐评：** 这篇文章点破了一个幻觉——以为抄了SKILL.md就能跨Agent无缝迁移。Skills是带"运行环境"的，不是纯文本。写Skills的人必须懂Agent的系统设计，否则就是给错误的机器写说明书。

## 原文

Claude Code 和 Codex 或者其他 Agent 使用 Skills 的主要差别：

1. 执行 Skills 的模型不一样
CC 会用 Claude 模型，Codex 会用 GPT 模型，如果接 API 可能还会选择其他模型；不同模型的偏好和能力不一样，所以 Skills 里面的提示词也会有差异

2. 环境（Harness）不一样
不同的 agent 有不同的工具，以及不同的访问环境的限制。比如说：
- Codex 能用内置的 imagegen Skill 画图，CC 不行
- CC 和 Codex 都能执行脚本访问网络，但是 Cowork 可能不行
- CC 有一个方便好用的 AskUserQuestion 收集用户反馈，还支持一次多个问题，但是其他 Agent 大多只能一次一个问题，甚至没有

所以写 Skills，可能需要针对不同 Agent/模型做一些定制化，比如我在 baoyu-skills 里面，就需要去检测当前 agent 有哪些能力，再去让 agent 选择正确的工具


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-23T18:53:50.000Z
- **抓取时间**: 2026-04-24T00:42:29.925Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 9 · 🔄 1 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2047388496944361834) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
