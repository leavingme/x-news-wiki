---
type: "X Tweet"
title: "宝玉：Claude Design真正杀死 Figma 的不是 UI，而是 data.js + Git 可版本化"
description: "**[一句话核心判断]**宝玉指出 Claude Design输出的 HTML+CSS+React+data.js 是「全文本可 Git」的，这套组合对 AI协作的友好度远胜 Figma。  **要点：** - 输出结构：HTML/CSS（设计系统）/ React（组件结构）/ data.js（数据结构）三件套可解耦 -关键差异化：data.js 是 Figma完全没有的「数据契约」层，直接告诉开"
resource: "https://x.com/i/status/2064863783349317762"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-11T01:18:59.869Z"
x_tweet_id: "2064863783349317762"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-11T00:14:23.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-design-tool"
x_source: "crawler"
---

# 宝玉：Claude Design真正杀死 Figma 的不是 UI，而是 data.js + Git 可版本化

## 摘要

**[一句话核心判断]**宝玉指出 Claude Design输出的 HTML+CSS+React+data.js 是「全文本可 Git」的，这套组合对 AI协作的友好度远胜 Figma。

**要点：**
- 输出结构：HTML/CSS（设计系统）/ React（组件结构）/ data.js（数据结构）三件套可解耦
-关键差异化：data.js 是 Figma完全没有的「数据契约」层，直接告诉开发数据结构长什么样
- 工作流：下载 zip → 解压进项目 →替换旧版 → Git diff直观看到设计变更
-核心洞察：Figma 是「人看」的视觉文件，Claude Design 是「人和 AI一起看」的源代码——后者天然适合 git diff、AI review、CI集成

宝玉把设计资产从「视觉交付物」重新定义为「可入库的代码资产」，这是设计工具从 Figma时代跨入 AI时代的标志性认知跃迁——但前提是团队接受设计稿要进 Git仓库这件事本身。

## 原文

9. 设计结果要用版本管理起来

Claude Design 交付的结果是 HTML + CSS + React + data.js，通过 CSS 一下就可以看清楚设计系统的颜色系统、尺寸规范，通过 React 可以看清楚组件结构，通过 data 可以知道数据结构什么样子。

这几个组合可比 figma 对于 AI 来说友好多了，尤其是 data.jsx，这是一般的设计 App 不会有的，但对开发特别重要的。

还有一个优势就是交付的结果都是文本格式的，可以一起提交到 git 做版本管理，用 git diff 就可以清楚的让 AI 知道设计稿修改了什么。

所以我每次都是下载 zip，本地解压缩后放到项目中，替换项目中旧的版本，配合 git 很好跟踪设计变更。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-11T00:14:23.000Z
- **抓取时间**: 2026-06-11T01:18:59.869Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 2 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2064863783349317762) — @dotey (宝玉)
