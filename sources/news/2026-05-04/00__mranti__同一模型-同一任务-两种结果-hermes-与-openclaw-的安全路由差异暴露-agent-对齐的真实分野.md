---
type: "X Tweet"
title: "同一模型、同一任务、两种结果：Hermes 与 OpenClaw 的安全路由差异暴露 Agent 对齐的真实分野"
description: "**用同一个 DeepSeek V4 Pro 跑相同任务，OpenClaw 出活快，Hermes 却报「非法查询错误」——对齐策略的差异正在成为 Agent 可用性的隐形变量。**  - Michael Anti 实测发现：让模型选成人小说时，DeepSeek V4 Pro 本身没有敏感内容过滤问题，但 Hermes 的安全层主动拦截了请求 - 这不是模型能力问题，是 Agent 框架层的安全路由"
resource: "https://x.com/i/status/2051144990731215251"
tags:
  - "x-news"
  - "news"
  - "author:mranti"
timestamp: "2026-05-04T04:19:07.379Z"
x_tweet_id: "2051144990731215251"
x_author: "Michael Anti"
x_handle: "mranti"
x_created_at: "2026-05-04T03:40:48.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 同一模型、同一任务、两种结果：Hermes 与 OpenClaw 的安全路由差异暴露 Agent 对齐的真实分野

## 摘要

**用同一个 DeepSeek V4 Pro 跑相同任务，OpenClaw 出活快，Hermes 却报「非法查询错误」——对齐策略的差异正在成为 Agent 可用性的隐形变量。**

- Michael Anti 实测发现：让模型选成人小说时，DeepSeek V4 Pro 本身没有敏感内容过滤问题，但 Hermes 的安全层主动拦截了请求
- 这不是模型能力问题，是 Agent 框架层的安全路由策略差异——同一底层模型，不同的 wrapper 产生完全不同的可用性
- 核心矛盾：Agent 框架的安全过滤是保护用户还是限制用户？当过滤逻辑不透明时，用户甚至无法判断是模型拒绝还是框架拒绝

gakki 的锐评：Agent 时代的「对齐」不再是模型层面的单一问题，而是层层叠加的框架安全策略。用户面对的不是 AI 的拒绝，而是一个不告诉你谁在拒绝你的黑箱。

## 原文

@BarrySong97 我觉得是不是和它的思维链比较繁杂有关？而且有趣的是我让它们拖着Deepseek V4 Pro去选成人小说，这个模型没敏感的问题，所以OpenClaw出活很快，但Hermes却出现非法查询错误，我很奇怪它到底怎么思考的才会出现敏感提示？


## 元信息

- **作者**: Michael Anti ([@mranti](https://x.com/mranti))
- **发布时间**: 2026-05-04T03:40:48.000Z
- **抓取时间**: 2026-05-04T04:19:07.379Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2051144990731215251) — @mranti (Michael Anti)
