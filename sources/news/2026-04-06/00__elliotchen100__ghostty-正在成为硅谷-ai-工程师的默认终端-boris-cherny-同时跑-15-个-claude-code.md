---
type: "source"
title: "Ghostty 正在成为硅谷 AI 工程师的默认终端：Boris Cherny 同时跑 15 个 Claude Code 实例选它不是偶然"
description: "**【一句话核心判断】** 当 OpenAI 的发布会和 Anthropic 的创始团队同时选了 Ghostty，这不是 UX 品味问题，而是性能敏感型用户对 terminal 本质功能的一次集体投票。  **后续要点：** • Boris Cherny 对 terminal 性能要求极度变态（10-15 个并发 Claude Code session），他选 Ghostty 是压力测试后的结论 "
resource: "https://x.com/i/status/2040799136367477189"
tags:
  - "x-news"
  - "news"
  - "author:elliotchen100"
timestamp: "2026-04-06T00:42:54.664Z"
x_tweet_id: "2040799136367477189"
x_author: "艾略特"
x_handle: "elliotchen100"
x_created_at: "2026-04-05T14:30:04.000Z"
x_engagement:
  likes: 175
  retweets: 17
  replies: 14
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2040799136367477189"
created: "2026-04-05"
updated: "2026-06-26"
sha256: "17f68595531a5170ba3d81ef9ce4ed71a187fd94a63e1e77b849c5b8a7c7403c"
sources:
  - "/sources/news/2026-04-06/00__elliotchen100__ghostty-正在成为硅谷-ai-工程师的默认终端-boris-cherny-同时跑-15-个-claude-code.md"
---

# Ghostty 正在成为硅谷 AI 工程师的默认终端：Boris Cherny 同时跑 15 个 Claude Code 实例选它不是偶然

## 摘要

**【一句话核心判断】**
当 OpenAI 的发布会和 Anthropic 的创始团队同时选了 Ghostty，这不是 UX 品味问题，而是性能敏感型用户对 terminal 本质功能的一次集体投票。

**后续要点：**
• Boris Cherny 对 terminal 性能要求极度变态（10-15 个并发 Claude Code session），他选 Ghostty 是压力测试后的结论
• iTerm2/Warp/WezTerm/Alacritty 各有特色，但开发者最终用脚投票回归渲染性能和原生体验
• 映射出一个更大的趋势：AI 工具链正在快速收敛到「极简底层 + 强大上层」的结构

**gakki 锐评：**
Ghostty 的崛起是一个风向标——它说明在 AI 编程时代，底层工具的稳定性与性能比功能密度更稀缺。这对做 AI 工具的人是一个提醒：别在花哨的功能上内卷，把性能做到极致才是护城河。

## 原文

去年 10 月 OpenAI 开发布会的时候，发过一条帖子说他们演示用的是 Ghostty Terminal，当时也没觉得这个 terminal 能活多久。

今天又刷到 Claude Code 的创始人 Boris Cherny 分享他怎么用 Claude Code，他和整个团队用的也是 Ghostty。Boris 这人同时开 10 到 15 个 Claude Code session，对 terminal 性能要求很变态的，他选 Ghostty 说明这东西确实扛得住。

OpenAI 在用，Anthropic 也在用，感觉整个硅谷都在用。

现在市面上 terminal 其实挺多的，每个风格都不太一样。iTerm2 走功能全家桶路线，Warp 搞 AI 集成，WezTerm 玩 Lua 可编程，Alacritty 走极简主义。但大家最后都选了 Ghostty，这说明一件事：在硅谷开发者眼里，渲染性能和原生体验才是 terminal 最核心的东西，花哨的功能反而不是第一优先级。

又扒了一下 Ghostty 的背景，确实有 sense。

创始人 Mitchell Hashimoto，HashiCorp 联合创始人，做过 Terraform 和 Vagrant。2024 年 IBM 花了 64 亿美金收购 HashiCorp 之后，他就出来了，想搞点不一样的，不做服务端了，做桌面软件。上个月刚加入了 Vercel 董事会，这人在开发者圈子里的影响力不用多说

Ghostty 一开始是他拿 Zig 语言写着玩的 side project，结果越写越上头，写了两年多才公开发布

有个很头铁的细节：他 70% 的开发时间花在字体渲染上。

Unicode、Emoji、肤色 Emoji、中日韩字体，全部从头撸。你打开 Ghostty 第一眼就会觉得字体特别舒服，这不是错觉，是真花了功夫的。

技术上最值得说的一点：Ghostty 不是那种一套代码跑所有平台的思路。核心用 Zig 写了个叫 libghostty 的库，但 macOS 的界面是 Swift 原生写的，Linux 那边用 GTK4。所以在 Mac 上跟苹果自家 app 一模一样，Mission Control、字体平滑、快捷键全部对得上，没有那种"套壳感"。

之前唯一的硬伤是没有搜索功能，我上条帖子评论区就有人吐槽不能 Ctrl+F。上个月 1.3 版本补上了，Cmd+F 直接搜，独立线程实现的，不卡渲染。

顺便把主流 terminal 对比一下，给个参考：
Ghostty：快、原生、开箱即用，兼容性强，macOS 上体验最好。缺点是不支持 Windows。但说实话 terminal 要什么 AI？值得试，大概率试了就不想换回去。

iTerm2：老牌选手，功能最全，但 CPU 渲染，启动慢，2026 年了用起来有点显老。

Warp：AI 功能不错，但核心不开源，要登录才能用。一个 terminal 还要注册账号？

WezTerm：Rust 写的，功能强，但配置要写 Lua，学习成本高，作者维护节奏也不太稳定。

Alacritty：快是真快，但连 tab 都没有，得配 tmux。适合折腾党。

现在 Ghostty macOS 每周下载 100 万，GitHub 15 个月 45K star。在 AI coding 时代，terminal 反而成了开发者的主战场，大家对它的要求更高了。

Ghostty 刚好踩在这个节点上。


## 元信息

- **作者**: 艾略特 ([@elliotchen100](https://x.com/elliotchen100))
- **发布时间**: 2026-04-05T14:30:04.000Z
- **抓取时间**: 2026-04-06T00:42:54.664Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 175 · 🔄 17 · 💬 14 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2040799136367477189) — @elliotchen100 (艾略特)
[2] [Author page](/entities/authors/elliotchen100.md)
