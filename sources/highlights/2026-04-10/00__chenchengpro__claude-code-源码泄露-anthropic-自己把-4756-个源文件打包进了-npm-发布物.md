---
type: "X Tweet"
title: "Claude Code 源码泄露：Anthropic 自己把 4756 个源文件打包进了 npm 发布物"
description: "**[Anthropic 亲手炸开自己的护城河]**  Claude Code 的 57MB source map 文件被完整暴露，1906 个 TypeScript/TSX 源码 + 完整系统提示词一览无余。React + Ink CLI 架构、REPL 循环、工具调用逻辑全部可视化。  这不是黑客攻击，是工程失误。但泄露即公开——任何人都能完整还原 Claude Code 的所有设计决策。  "
resource: "https://x.com/i/status/2038904406406476195"
tags:
  - "x-news"
  - "highlights"
  - "author:chenchengpro"
timestamp: "2026-04-10T12:45:02.823Z"
x_tweet_id: "2038904406406476195"
x_author: "陈成"
x_handle: "chenchengpro"
x_created_at: "2026-03-31T09:01:06.000Z"
x_engagement:
  likes: 1280
  retweets: 222
  replies: 80
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Claude Code 源码泄露：Anthropic 自己把 4756 个源文件打包进了 npm 发布物

## 摘要

**[Anthropic 亲手炸开自己的护城河]**

Claude Code 的 57MB source map 文件被完整暴露，1906 个 TypeScript/TSX 源码 + 完整系统提示词一览无余。React + Ink CLI 架构、REPL 循环、工具调用逻辑全部可视化。

这不是黑客攻击，是工程失误。但泄露即公开——任何人都能完整还原 Claude Code 的所有设计决策。

gakki：Anthropic 的"克制哲学"在工程层面破功了。代码即思想，source map 不该是发布物的一部分。这次是 Claude Code，下次会不会是 Claude Agent 本身？

## 原文

Claude Code 泄露了全部源码——不是被黑客攻破，是 Anthropic 自己把 source map 打包进了 npm 发布物。

一个 57MB 的 https://t.co/rrsLUlL2Xp 文件，里面藏着 4756 个源文件的完整内容。其中 1906 个是 Claude Code 自身的 TypeScript/TSX 源码，剩下 2850 个是 node_modules 依赖。

提取方法极其简单：https://t.co/rrsLUlL2Xp 本质就是一个 JSON，里面有两个关键数组——sources（文件路径）和 sourcesContent（对应的完整源码）。两者索引一一对应。不需要反编译，不需要反混淆，sourcesContent 里存的就是一字不差的原始代码。提取脚本见文末。

从还原的源码可以看到：Claude Code 用 React + Ink 构建 CLI 界面，核心是一个 REPL 循环，支持自然语言输入和 slash 命令，底层通过工具系统与 LLM API 交互。架构设计、系统提示词、工具调用逻辑，全部一览无余。

这件事的本质是一个经典的安全疏忽：source map 是开发调试用的，包含从变量名到注释的所有信息，不应该出现在生产发布物中。Anthropic 后来意识到了这个问题，移除了 source map，GitHub 上提取源码的仓库也被 DMCA 了。但早期版本的 npm 包已经被存档，源码早就在社区流传。

给所有发布 npm 包的开发者提个醒：发布前检查你的 .map 文件。一行 sourcesContent 就能让你的所有代码公之于众。

https://t.co/pR6792kVsN


## 元信息

- **作者**: 陈成 ([@chenchengpro](https://x.com/chenchengpro))
- **发布时间**: 2026-03-31T09:01:06.000Z
- **抓取时间**: 2026-04-10T12:45:02.823Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 1280 · 🔄 222 · 💬 80 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2038904406406476195) — @chenchengpro (陈成)
[2] [Author page](/entities/authors/chenchengpro.md)
