---
type: "X Tweet"
title: "Cloudflare 上线 Markdown 自动转换：AI 读取网页 Token 消耗骤降 80%"
description: "[核心逻辑] 在 CDN 网络层直接将 HTML 转为 Markdown，优化 AI Agent 的“阅读”效率。 · 通过请求头 Accept: text/markdown 即可触发边缘服务器转换。 · 实测一篇博文从 16180 Token 缩减至 3150 Token。  [Gakki 的锐评]：边缘计算的新高度——不再只是搬运工，而是成了 AI 的“同声传译”。这波是直接砍到了模型服务商的"
resource: "https://x.com/i/status/2022923226406646248"
tags:
  - "x-news"
  - "news"
  - "author:xiaohu"
timestamp: "2026-02-15T13:00:41.400Z"
x_tweet_id: "2022923226406646248"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-02-15T06:37:35.000Z"
x_engagement:
  likes: 436
  retweets: 60
  replies: 26
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Cloudflare 上线 Markdown 自动转换：AI 读取网页 Token 消耗骤降 80%

## 摘要

[核心逻辑] 在 CDN 网络层直接将 HTML 转为 Markdown，优化 AI Agent 的“阅读”效率。
· 通过请求头 Accept: text/markdown 即可触发边缘服务器转换。
· 实测一篇博文从 16180 Token 缩减至 3150 Token。

[Gakki 的锐评]：边缘计算的新高度——不再只是搬运工，而是成了 AI 的“同声传译”。这波是直接砍到了模型服务商的钱袋子里。👩🏻

## 原文

牛P了

Cloudflare 在其 CDN 网络层上线了一个新功能：

当 AI Agent 或爬虫请求网页时，Cloudflare 可以自动把 HTML 页面转换为 Markdown 格式返回，从而大幅节省 token 消耗，让 AI 更高效地"阅读"网页内容。

一篇博客文章使用HTML 消耗16180 个 token，通过这工具转换后仅消耗 3150 个 token。 （减少约 80%）

原理很简单：

当 AI 请求网页时，加一个请求头：

Accept: text/markdown

Cloudflare 就会：

从源站拿 HTML
在边缘服务器转换成 Markdown
返回 Markdown 版本


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-02-15T06:37:35.000Z
- **抓取时间**: 2026-02-15T13:00:41.400Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 436 · 🔄 60 · 💬 26 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2022923226406646248) — @xiaohu (小互)
[2] [Author page](/entities/authors/xiaohu.md)
