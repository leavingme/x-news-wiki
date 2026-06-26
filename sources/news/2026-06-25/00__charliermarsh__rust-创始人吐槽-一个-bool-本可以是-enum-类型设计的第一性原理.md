---
type: "X Tweet"
title: "Rust 创始人吐槽：一个 bool 本可以是 enum——类型设计的第一性原理"
description: "**Charie Marsh 一句话点破类型设计浪费：用 bool 表达本应是有限状态集合的语义，是 API 设计的隐性技术债。**  - bool 只能表达 true/false，但业务语义往往是多状态（如 tri-state、error 类型、permission 模式），强转 bool 会丢失信息 - 这类小决策在大型代码库中累积成\"模糊 API\"——调用方被迫依赖注释或外部文档理解真实意图"
resource: "https://x.com/i/status/2069796668506042584"
tags:
  - "x-news"
  - "news"
  - "author:charliermarsh"
timestamp: "2026-06-25T19:20:30.557Z"
x_tweet_id: "2069796668506042584"
x_author: "Charlie Marsh"
x_handle: "charliermarsh"
x_created_at: "2026-06-24T14:55:55.000Z"
x_engagement:
  likes: 1922
  retweets: 68
  replies: 72
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Rust 创始人吐槽：一个 bool 本可以是 enum——类型设计的第一性原理

## 摘要

**Charie Marsh 一句话点破类型设计浪费：用 bool 表达本应是有限状态集合的语义，是 API 设计的隐性技术债。**

- bool 只能表达 true/false，但业务语义往往是多状态（如 tri-state、error 类型、permission 模式），强转 bool 会丢失信息
- 这类小决策在大型代码库中累积成"模糊 API"——调用方被迫依赖注释或外部文档理解真实意图
- enum/ADT 才是表达有限状态空间的第一性原理，bool 应该是 enum 的退化特例而非默认选项

## 原文

This bool could've been an enum


## 元信息

- **作者**: Charlie Marsh ([@charliermarsh](https://x.com/charliermarsh))
- **发布时间**: 2026-06-24T14:55:55.000Z
- **抓取时间**: 2026-06-25T19:20:30.557Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1922 · 🔄 68 · 💬 72 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2069796668506042584) — @charliermarsh (Charlie Marsh)
[2] [Author page](/entities/authors/charliermarsh.md)
