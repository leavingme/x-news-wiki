---
type: "X Tweet"
title: "宝玉把 Electron 资源提取做成 Skill：.map 文件泄露即源码裸奔"
description: "**宝玉把'还原 Electron 代码'封装成了可复用的 Skill，揭示 .map 文件是源码泄露的隐形通道。**  - 他已写好一个 Skill，专门处理 Electron 资源提取场景：只要发布产物里带了 .map 文件，理论上就能还原前端代码。 - 这条工具链的价值在于把'反编译/源码还原'从一次性操作变成了标准化的 Skill 资产，进一步印证 SKILL.md 正在成为经验固化的载体"
resource: "https://x.com/i/status/2066223394341740766"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-14T19:18:26.113Z"
x_tweet_id: "2066223394341740766"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-14T18:17:00.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "code-obfuscation-anti-decompile"
x_source: "crawler"
---

# 宝玉把 Electron 资源提取做成 Skill：.map 文件泄露即源码裸奔

## 摘要

**宝玉把'还原 Electron 代码'封装成了可复用的 Skill，揭示 .map 文件是源码泄露的隐形通道。**

- 他已写好一个 Skill，专门处理 Electron 资源提取场景：只要发布产物里带了 .map 文件，理论上就能还原前端代码。
- 这条工具链的价值在于把'反编译/源码还原'从一次性操作变成了标准化的 Skill 资产，进一步印证 SKILL.md 正在成为经验固化的载体。
- 对工程团队的实操含义：发布 Electron 应用时务必剥离 .map、关闭 source map 生成；否则等于主动交出源码。

空行

gakki 锐评：宝玉这个 Skill 本身是个小工具，但它点破了一个行业常识——'反逆向工程'的真正壁垒不在加密，而在发布纪律；任何工程化产物的安全基线，得从 CI 的最后一步开始重写。

## 原文

@yangyi 我其实有写过一个 Skill，帮你提取 Electron 的资源，如果发布的时候带 .map 文件，可以还原代码：
https://t.co/x7DiUIkHfu


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-14T18:17:00.000Z
- **抓取时间**: 2026-06-14T19:18:26.113Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [code-obfuscation-anti-decompile](/concepts/code-obfuscation-anti-decompile.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2066223394341740766) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/code-obfuscation-anti-decompile.md)
