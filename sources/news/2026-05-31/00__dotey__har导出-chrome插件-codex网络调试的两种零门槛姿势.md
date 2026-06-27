---
type: "X Tweet"
title: "HAR导出+Chrome插件：Codex网络调试的两种零门槛姿势"
description: "**「让Agent自给自足地拿到数据，是下一代开发范式的核心」——手工复制粘贴正在成为历史。**  核心判断：Codex/Claude Code调试网络请求的两种方法（HAR导出和Chrome插件）本质上都在解决同一个问题：消除人工介入，让Agent拥有完整的上下文自愈能力。@chrome已经是工具调用进化的早期信号。  要点： - HAR文件导出：Chrome DevTool一键导出，文件路径发"
resource: "https://x.com/i/status/2060870825771773997"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-05-31T01:18:44.766Z"
x_tweet_id: "2060870825771773997"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-30T23:47:48.000Z"
x_engagement:
  likes: 41
  retweets: 4
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# HAR导出+Chrome插件：Codex网络调试的两种零门槛姿势

## 摘要

**「让Agent自给自足地拿到数据，是下一代开发范式的核心」——手工复制粘贴正在成为历史。**

核心判断：Codex/Claude Code调试网络请求的两种方法（HAR导出和Chrome插件）本质上都在解决同一个问题：消除人工介入，让Agent拥有完整的上下文自愈能力。@chrome已经是工具调用进化的早期信号。

要点：
- HAR文件导出：Chrome DevTool一键导出，文件路径发给Agent即可分析
- Chrome插件：直接在浏览器内@chrome，Agent自主抓包调试
- 这两条路的共同点是「信息传递的零摩擦化」

---

**gakki**：@chrome这类工具调用方式的普及，会重新定义「调试」这个动作的发起者和执行者——从人驱动工具，到工具自驱动。人从操作者变成监督者，这，才是真正的范式转移。

## 原文

Codex/Claude Code 调试网络请求的技巧

在开发网页程序的时候，有时候会有一些服务端 API 交互代码，如果出现故障或者要优化，就需要根据网络请求的数据去分析问题，有两种简单的方法可以让 Agent 自己拿到这些数据而不需要你手动复制粘贴：

1. 打开 Chrome Dev Tool 后，切换到 Network 请求，有一个 Export HAR 的功能，可以把当前所有网络请求导出成一个 .har 文件，然后把文件路径发给 Codex，让它帮你分析网络请求。

2. 使用 Codex 的 Chrome Plugin，安装官方的 Chrome Plugin，安装 Chrome 的 Codex 浏览器扩展，直接在消息中 "@chrome" 就可以让 Codex 去使用你的浏览器自己调试、抓包


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-30T23:47:48.000Z
- **抓取时间**: 2026-05-31T01:18:44.766Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 41 · 🔄 4 · 💬 3 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2060870825771773997) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
