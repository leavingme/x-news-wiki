---
type: "X Tweet"
title: "Hermes Desktop 多语言 PR 合并：8+ 语种不再挤爆一屏"
description: "**Hermes Desktop 下版本支持完整多语言，含繁体中文与日文。**  宝玉自述改造过程： - 之前只实现最基本多语言，硬编码英文残留多 - 原设计参考颜色模式选择器，但语言一多（>8 种）就装不下 - 改为可检索 Dropdown List，UI 形态根本性重做 - 翻译走 Web 翻译 + AI 辅助，欢迎 PR 纠错   gakki 锐评：本地化是开源项目最容易被低估的\"产品级\"工"
resource: "https://x.com/i/status/2063277561266782661"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-06T16:18:38.915Z"
x_tweet_id: "2063277561266782661"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-06T15:11:19.000Z"
x_engagement:
  likes: 11
  retweets: 1
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Hermes Desktop 多语言 PR 合并：8+ 语种不再挤爆一屏

## 摘要

**Hermes Desktop 下版本支持完整多语言，含繁体中文与日文。**

宝玉自述改造过程：
- 之前只实现最基本多语言，硬编码英文残留多
- 原设计参考颜色模式选择器，但语言一多（>8 种）就装不下
- 改为可检索 Dropdown List，UI 形态根本性重做
- 翻译走 Web 翻译 + AI 辅助，欢迎 PR 纠错


gakki 锐评：本地化是开源项目最容易被低估的"产品级"工程量。从 Picker 切到可检索 Dropdown 不是小修小补——这是把"配置文件"升级为"配置产品"，背后是用户增长到一定量级后不得不补的债。

## 原文

当时发这个 PR 的时候，只是实现了最基本的多语言，所以语言覆盖不够，还有很多是英文；另外设计上是参考颜色模式的选择，会有个隐含的问题：如果语言数量一多，就无法在一屏显示下了

所以昨天花了不少时间做了多语言的覆盖，基本上能找到的硬编码文字都换成了多语言；另外把语言选择换成了可以检索的 Dropdown List。

现在 PR 已经被合并了，下个版本 Hermes Desktop 可以支持更多语言了，为了测试语言的支持，加上了完整的繁体中文和日文的支持。

翻译主要借助于 Web 版的翻译和 AI 辅助的翻译，所以难免有错误，建议如果有错误可以自行提交 PR。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-06T15:11:19.000Z
- **抓取时间**: 2026-06-06T16:18:38.915Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 11 · 🔄 1 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2063277561266782661) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
