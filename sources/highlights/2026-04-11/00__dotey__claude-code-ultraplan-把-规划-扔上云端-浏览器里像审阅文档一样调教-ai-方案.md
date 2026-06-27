---
type: "X Tweet"
title: "Claude Code ultraplan：把「规划」扔上云端，浏览器里像审阅文档一样调教 AI 方案"
description: "**[规划与执行分离，Claude Code 工作流的一次范式升级]**  Claude Code 新增 ultraplan 功能：终端发起规划任务，AI 在云端起草方案，用户在浏览器里像审阅文档一样对具体段落加批注、表情、在大纲跳转，然后选择云端执行或拉回本地。核心思路——实现代码需要本地环境，但规划只需要读代码和理解意图。  · 终端审阅复杂方案的体验痛点被精准解决 · 云端起草期间终端可继续"
resource: "https://x.com/i/status/2042675917927977084"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-11T00:44:20.078Z"
x_tweet_id: "2042675917927977084"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-10T18:47:44.000Z"
x_engagement:
  likes: 247
  retweets: 42
  replies: 19
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-natural-language-workflow"
x_source: "crawler"
---

# Claude Code ultraplan：把「规划」扔上云端，浏览器里像审阅文档一样调教 AI 方案

## 摘要

**[规划与执行分离，Claude Code 工作流的一次范式升级]**

Claude Code 新增 ultraplan 功能：终端发起规划任务，AI 在云端起草方案，用户在浏览器里像审阅文档一样对具体段落加批注、表情、在大纲跳转，然后选择云端执行或拉回本地。核心思路——实现代码需要本地环境，但规划只需要读代码和理解意图。

· 终端审阅复杂方案的体验痛点被精准解决
· 云端起草期间终端可继续工作——上下文并行成为可能
· 规划-执行循环的分离意味着更快的迭代周期

**gakki锐评：** 这是 Anthropic 对「AI 编程工具应该怎么做」的又一次正确判断——不是让 AI 更快，而是让人更舒服。浏览器做 UI、终端做执行，这个分离会变成标配。

## 原文

Claude Code 新增了一个叫 ultraplan 的功能：你在终端里发起一个规划任务，Claude 会在云端帮你起草实现方案，你在浏览器里审阅、批注、修改，满意之后选择在云端执行或者拉回本地终端执行。

这个功能解决的是一个很实际的痛点：在终端里审阅一份复杂的实施计划，体验很差。你只能上下滚动，没法针对某一段提意见。ultraplan 把"规划"这件事搬到了浏览器里，你可以像审阅文档一样，对具体段落加批注、打表情、在大纲里跳转，然后让 Claude 根据你的反馈修改方案，反复迭代到满意为止。

用法很简单，在 Claude Code 终端里输入 /ultraplan 加上你的需求描述就行，比如"/ultraplan 把认证服务从 session 迁移到 JWT"。云端会开始分析你的代码库、起草方案，这期间终端不占用，你可以继续干别的活。方案写好后，你在浏览器里审阅，最后二选一：让云端直接执行并开 PR，或者把方案传回终端在本地执行。

Anthropic 工程师 Thariq 说，这个功能的核心思路是：实现代码有时候需要本地环境，但规划本身只需要读代码和理解意图，完全可以放在云端做。ultraplan 消耗的 token 量和本地 plan 模式差不多，不会额外多花钱。

这个功能今天开始对所有开启了 Claude Code 网页版的用户开放预览，需要 Claude Code v2.1.91 或更新版本。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-10T18:47:44.000Z
- **抓取时间**: 2026-04-11T00:44:20.078Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 247 · 🔄 42 · 💬 19 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2042675917927977084) — @dotey (宝玉)
