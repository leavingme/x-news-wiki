---
type: "X Tweet"
title: "Pretext：Cheng Lou 三十年一遇的排版「尺子」，让浏览器不再需要「搬家具」"
description: "**一句话核心判断：浏览器测量文字尺寸的方式正在被一把数学「尺子」替代，Web 渲染范式出现裂缝。**  • 前 React 核心成员 Cheng Lou（ReasonML 作者、现 Midjourney 工程师）开源 Pretext，纯 TS 文本测量引擎 • 核心洞察：浏览器测量文字占用空间的方式等同于「把书架搬进客厅再试」，而 Pretext 用纯数学计算替代这种物理模拟 • 实测性能：50"
resource: "https://x.com/i/status/2038437154322628736"
tags:
  - "x-news"
  - "news"
  - "author:xiaohu"
timestamp: "2026-03-30T13:25:00.451Z"
x_tweet_id: "2038437154322628736"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-03-30T02:04:24.000Z"
x_engagement:
  likes: 78
  retweets: 6
  replies: 7
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Pretext：Cheng Lou 三十年一遇的排版「尺子」，让浏览器不再需要「搬家具」

## 摘要

**一句话核心判断：浏览器测量文字尺寸的方式正在被一把数学「尺子」替代，Web 渲染范式出现裂缝。**

• 前 React 核心成员 Cheng Lou（ReasonML 作者、现 Midjourney 工程师）开源 Pretext，纯 TS 文本测量引擎
• 核心洞察：浏览器测量文字占用空间的方式等同于「把书架搬进客厅再试」，而 Pretext 用纯数学计算替代这种物理模拟
• 实测性能：500 段文字 0.09 毫秒，比浏览器快数百倍，且不依赖 DOM 渲染

这把「尺子」若被纳入主流框架，Web 布局的「闪跳」问题将成为历史，但对依赖 DOM 测量的一切 UI 框架是破坏性替代。

## 原文

Pretext: 纯 TypeScript 文本测量引擎  

解锁了 30 年来 Web 做不到的排版问题

前 React 核心团队成员、ReasonML 作者、现 Midjourney 工程师 Cheng Lou 开源了 Pretext，一个纯 TypeScript 写的文本测量和排版库。

能让你不用真的把文字放到网页上，就能提前知道文字会占多大空间。

先打个比方。

你装修房子，买了一个书架，想知道放在客厅那面墙能不能放得下。正常人会拿尺子量一下墙的宽度和书架的宽度，对比一下就知道了。

但浏览器不是这么干的。浏览器的做法是：把书架搬过去，塞进客厅，然后看看放不放得下。放不下？搬走，换个位置再塞一次。每次你想知道"放不放得下"，它就搬一次家具。

这就是为什么网页有时候会"闪"一下，聊天列表滑着滑着会"跳"一下。

浏览器在反复搬家具。

Pretext 做的事情就是给浏览器一把尺子。量一下就知道了，不用搬。

它用纯数学计算文字的高度和行数，不需要真的把文字放到网页上去排版。

500 段文字的计算只要 0.09 毫秒，比浏览器"搬家具"快几百倍。


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-03-30T02:04:24.000Z
- **抓取时间**: 2026-03-30T13:25:00.451Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 78 · 🔄 6 · 💬 7 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2038437154322628736) — @xiaohu (小互)
[2] [Author page](/entities/authors/xiaohu.md)
