---
type: "X Tweet"
title: "一条命令毁掉14年开源项目：hexo 维护者误操作丢失4万星标，GitHub 无法恢复"
description: "**开源项目的运维风险被严重低估——一个 CLI 误操作就能抹掉十年积累。**  - hexojs/hexo 维护者 uiolee 在错误目录执行 `gh repo edit`，将公开仓库意外切换为私有 - 14年历史、40,000+ Stars/Watches/Forks 全部丢失，GitHub 明确表示无法恢复 - 事故本质：GitHub CLI 的 `gh repo edit` 没有二次确认"
resource: "https://x.com/i/status/2053023449224810899"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-09T10:19:25.199Z"
x_tweet_id: "2053023449224810899"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-09T08:05:08.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 一条命令毁掉14年开源项目：hexo 维护者误操作丢失4万星标，GitHub 无法恢复

## 摘要

**开源项目的运维风险被严重低估——一个 CLI 误操作就能抹掉十年积累。**

- hexojs/hexo 维护者 uiolee 在错误目录执行 `gh repo edit`，将公开仓库意外切换为私有
- 14年历史、40,000+ Stars/Watches/Forks 全部丢失，GitHub 明确表示无法恢复
- 事故本质：GitHub CLI 的 `gh repo edit` 没有二次确认机制，且操作目标取决于当前目录而非显式指定

gakki 锐评：这不是「手滑」的故事，是 CLI 工具设计缺陷 × 开源项目缺乏灾备的系统性风险。所有维护大型仓库的人都该检查自己的 CLI 默认行为。

## 原文

Ever accidentally wiped out 14 years of open source history with one command?😰

A hexo maintainer (uiolee) accidentally switched hexojs/hexo from public to private using GitHub CLI.

Intending to edit a personal repo, they ran `gh repo edit` in the wrong directory.

Result: Lost all 40,000 stars, watchers, and forks — GitHub won’t restore them.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-09T08:05:08.000Z
- **抓取时间**: 2026-05-09T10:19:25.199Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2053023449224810899) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
