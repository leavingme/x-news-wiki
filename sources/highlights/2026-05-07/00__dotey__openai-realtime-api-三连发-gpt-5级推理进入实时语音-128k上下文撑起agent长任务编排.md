---
type: "X Tweet"
title: "OpenAI Realtime API 三连发：GPT-5级推理进入实时语音，128K上下文撑起Agent长任务编排"
description: "**OpenAI 把实时语音API从「能用」推到了「能干活」的级别。**  - GPT-Realtime-2 在 Big Bench Audio 上从 81.4% 跳到 96.6%，Audio MultiChallenge 指令跟随从 34.7% 涨到 48.5%——这不是迭代，是代际跃迁 - 上下文窗口从 32K 扩到 128K，配合五档推理强度可调（minimal → xhigh），意味着实时"
resource: "https://x.com/i/status/2052440968863887715"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-07T19:19:15.337Z"
x_tweet_id: "2052440968863887715"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-07T17:30:34.000Z"
x_engagement:
  likes: 24
  retweets: 2
  replies: 5
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "chatbot-experience-evolution"
x_source: "crawler"
---

# OpenAI Realtime API 三连发：GPT-5级推理进入实时语音，128K上下文撑起Agent长任务编排

## 摘要

**OpenAI 把实时语音API从「能用」推到了「能干活」的级别。**

- GPT-Realtime-2 在 Big Bench Audio 上从 81.4% 跳到 96.6%，Audio MultiChallenge 指令跟随从 34.7% 涨到 48.5%——这不是迭代，是代际跃迁
- 上下文窗口从 32K 扩到 128K，配合五档推理强度可调（minimal → xhigh），意味着实时语音Agent终于能处理复杂多步任务
- 工具调用透明化：Agent执行过程中会主动播报「正在查日历」「正在搜索」，解决了语音交互中最致命的「黑屏焦虑」

gakki锐评：Realtime API 的真正野心不是做语音助手，而是把语音变成Agent的原生交互层。当语音Agent能调工具、能推理、能播报进度，GUI就从「必须」变成了「可选」。

## 原文

OpenAI 在 Realtime API 里上线了三款新语音模型：GPT-Realtime-2、GPT-Realtime-Translate 和 GPT-Realtime-Whisper，分别管对话、翻译和实时转录。

【1】主角：GPT-Realtime-2

号称带 GPT-5 级别的推理能力。比上一代 GPT-Realtime-1.5，在 Big Bench Audio 智能测试上从 81.4% 涨到 96.6%，Audio MultiChallenge 多轮对话指令跟随从 34.7% 涨到 48.5%。

几个实际变化：

开口前会先垫一句。执行长任务前先说"我查一下""稍等一下"，避免用户对着空气以为它死机了。

工具调用透明化。能同时调多个工具，过程会被念出来，比如"正在查你的日历""正在搜索"，让用户听到 agent 在干什么。

上下文窗口从 32K 扩到 128K，能撑更长的对话和更复杂的任务编排。

开发者可以在 minimal 到 xhigh 五档推理强度里选，默认 low。简单问答用低延迟，复杂任务挂高推理。

出错时会说"这块我现在处理不了"，不再直接卡死或乱讲。

【2】Translate 和 Whisper

GPT-Realtime-Translate 支持 70 多种输入语言、13 种输出语言的实时语音翻译，主打跨境客服、教育、直播场景。德国电信已经在测；BolnaAI 在印地语、泰米尔语、泰卢固语等印度方言场景下报告错词率比其他模型低 12.5%。

GPT-Realtime-Whisper 是流式版 Whisper，边说边出字幕，主打会议、直播、客服转录。

【3】价格

GPT-Realtime-2：每百万音频输入 token $32（缓存 $0.40），输出 token $64。

GPT-Realtime-Translate：每分钟 $0.034。

GPT-Realtime-Whisper：每分钟 $0.017。

三款都已在 Realtime API 上线，Playground 可以直接试 GPT-Realtime-2。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-07T17:30:34.000Z
- **抓取时间**: 2026-05-07T19:19:15.337Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 24 · 🔄 2 · 💬 5 · 🔖 0 · 👁 0
- **关联主题**: [chatbot-experience-evolution](/concepts/chatbot-experience-evolution.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2052440968863887715) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/chatbot-experience-evolution.md)
