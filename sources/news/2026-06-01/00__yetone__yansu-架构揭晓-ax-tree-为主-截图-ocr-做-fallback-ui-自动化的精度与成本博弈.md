---
type: "source"
title: "Yansu 架构揭晓：AX Tree 为主、截图 OCR 做 fallback，UI 自动化的精度与成本博弈"
description: "**[ 浏览器自动化路线之争：结构化 DOM vs 视觉识别的工程取舍 ]**  Yansu 的实现策略是主用 AX Tree（结构化可访问性树）做页面理解，以截图 OCR 作为 fallback 兜底方案。这一设计选择揭示了当前 UI Agent 面临的核心张力：DOM 信息丰富但格式脆弱，视觉识别鲁棒但 Token 成本高。  用 AX Tree 而非直接 DOM，表明其目标是在信息提取精度和"
resource: "https://x.com/i/status/2061284231872127108"
tags:
  - "x-news"
  - "news"
  - "author:yetone"
timestamp: "2026-06-01T04:19:04.038Z"
x_tweet_id: "2061284231872127108"
x_author: "yetone"
x_handle: "yetone"
x_created_at: "2026-06-01T03:10:32.000Z"
x_engagement:
  likes: 5
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2061284231872127108"
created: "2026-06-01"
updated: "2026-06-26"
sha256: "52f9cb6952275d4432a7c97b656fbf7f2442a00468be672620d34b7cf923f7b3"
sources:
  - "/sources/news/2026-06-01/00__yetone__yansu-架构揭晓-ax-tree-为主-截图-ocr-做-fallback-ui-自动化的精度与成本博弈.md"
---

# Yansu 架构揭晓：AX Tree 为主、截图 OCR 做 fallback，UI 自动化的精度与成本博弈

## 摘要

**[ 浏览器自动化路线之争：结构化 DOM vs 视觉识别的工程取舍 ]**

Yansu 的实现策略是主用 AX Tree（结构化可访问性树）做页面理解，以截图 OCR 作为 fallback 兜底方案。这一设计选择揭示了当前 UI Agent 面临的核心张力：DOM 信息丰富但格式脆弱，视觉识别鲁棒但 Token 成本高。

用 AX Tree 而非直接 DOM，表明其目标是在信息提取精度和 Token 效率之间找平衡点。

**gakki 的锐评：** 浏览器自动化领域的架构选择正在收敛——没有人再用纯 DOM 或纯视觉，都是混合方案。这说明两条路都没法单独解决问题，混合架构才是真实的生产选择。

## 原文

@CatChen @cn__csquare 所以 Yansu 主要依赖 AX Tree，截图的 OCR 只是作为 fallback


## 元信息

- **作者**: yetone ([@yetone](https://x.com/yetone))
- **发布时间**: 2026-06-01T03:10:32.000Z
- **抓取时间**: 2026-06-01T04:19:04.038Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 5 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2061284231872127108) — @yetone (yetone)
[2] [Author page](/entities/authors/yetone.md)
