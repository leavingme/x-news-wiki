---
type: "X Tweet"
title: "Codex Goals 开启指南：一条指令让 AI 从执行者变成协作者"
description: "**Codex 的 /goal 功能是当前 AI 编程工具里最被低估的协作接口。**  - Goals 本质上是把任务拆解和进度追踪从人脑外部化到 AI 记忆里，减少重复 Prompt 的上下文损耗 - 开启方式极其隐蔽（需手动改 config.toml），说明这不是产品优先级功能，而是给高级用户的\"后门\" - 配合 subagent 状态可见性，Codex 在任务分解和状态管理上的设计已领先很多"
resource: "https://x.com/i/status/2059474429604925946"
tags:
  - "x-news"
  - "news"
  - "author:vista8"
timestamp: "2026-05-27T04:18:21.721Z"
x_tweet_id: "2059474429604925946"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-05-27T03:19:01.000Z"
x_engagement:
  likes: 4
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex Goals 开启指南：一条指令让 AI 从执行者变成协作者

## 摘要

**Codex 的 /goal 功能是当前 AI 编程工具里最被低估的协作接口。**

- Goals 本质上是把任务拆解和进度追踪从人脑外部化到 AI 记忆里，减少重复 Prompt 的上下文损耗
- 开启方式极其隐蔽（需手动改 config.toml），说明这不是产品优先级功能，而是给高级用户的"后门"
- 配合 subagent 状态可见性，Codex 在任务分解和状态管理上的设计已领先很多竞品一个身位

 能用好 Goals 的开发者，AI 编程效率至少提升 30%——不是因为模型更强，是因为减少了任务切换的认知摩擦。

**gakki 锐评：** 这个功能暴露了一个行业现实：大多数 AI 编程工具在"任务管理"上是残缺的，Codex 用 Goals 补上了一块，但产品体验还在故意保持极客感。

## 原文

如果不会用Codex开启Goals（目标）功能，按下面步骤

1. 更新Codex App到最新版本   
2. 打开命令行执行：  
codex features enable goals 

如果手动改的话，配置文件在 ~/.codex/config.toml  
用sublime或VS code或vi打开

确保能看到这样一行
[features] 
goals = true

3. 重启Codex app，在对话中输入 /goal，如果你界面是中文，就输入 /目标  

输入上面的提示词就可以


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-05-27T03:19:01.000Z
- **抓取时间**: 2026-05-27T04:18:21.721Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 4 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2059474429604925946) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
