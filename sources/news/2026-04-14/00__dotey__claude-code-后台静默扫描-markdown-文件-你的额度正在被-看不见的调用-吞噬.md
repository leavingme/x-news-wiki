---
type: "X Tweet"
title: "Claude Code 后台静默扫描 Markdown 文件：你的额度正在被「看不见的调用」吞噬"
description: "**[Claude Code 后台行为暴露 AI 工具的隐性成本危机]**  宝玉在测试一款 Markdown 编辑器时发现，Claude Code 在 5 小时内悄无声息地将目录下所有 Markdown 文档纳入了分析范围，导致 5 小时额度快速耗尽。这一问题关键在于：  - **感知盲区**：`--resume` 之外用户毫无察觉，这是工具设计层面的严重透明度缺失 - **成本结构扭曲**：C"
resource: "https://x.com/i/status/2043714137985790412"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-04-14T00:45:14.582Z"
x_tweet_id: "2043714137985790412"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-13T15:33:15.000Z"
x_engagement:
  likes: 143
  retweets: 4
  replies: 45
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Claude Code 后台静默扫描 Markdown 文件：你的额度正在被「看不见的调用」吞噬

## 摘要

**[Claude Code 后台行为暴露 AI 工具的隐性成本危机]**

宝玉在测试一款 Markdown 编辑器时发现，Claude Code 在 5 小时内悄无声息地将目录下所有 Markdown 文档纳入了分析范围，导致 5 小时额度快速耗尽。这一问题关键在于：

- **感知盲区**：`--resume` 之外用户毫无察觉，这是工具设计层面的严重透明度缺失
- **成本结构扭曲**：Claude Code 调用成本极高，但自动触发逻辑用户无法控制
- **信任侵蚀**：软件在后台「偷偷」调用昂贵 API 而不被告知，这比恶意行为更具破坏性

AI 工具正在变得越来越「自主」，但配套的可见性机制完全没有跟上。

gakki：「Claude Code 暴露的不是安全问题，是 AI 工具设计的一个根本矛盾——越自主的工具，越需要把控制权交还给用户。否则『工具偷偷干活』和『工具偷你钱』之间没有界限。」

## 原文

昨天在测试一款 Markdown 编辑器，结果发现我的 claude code 5小时额度很快没了，一开始我没联系起来，还在想是不是我自己用多了，然后刚才用 claude --resume 发现了一大坨 claude code cli 的请求，它在尝试用 claude code 分析我目录下所有的 markdown 文档！

我不觉得它这是恶意，但是 claude code 调用很贵的呀！另外现在这种软件偷摸着调用一下 cli 我居然一点感知都没有，要不是偶然用了 --resume 都不知道，这也很可怕！


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-13T15:33:15.000Z
- **抓取时间**: 2026-04-14T00:45:14.582Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 143 · 🔄 4 · 💬 45 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2043714137985790412) — @dotey (宝玉)
