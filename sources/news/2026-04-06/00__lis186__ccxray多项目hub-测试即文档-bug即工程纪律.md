---
type: "X Tweet"
title: "ccxray多项目Hub：测试即文档，bug即工程纪律"
description: "**[一句话核心判断]**  ccxray v1.1.0的多项目Hub不只是功能迭代，是「工程纪律」范式的产品化。  - 核心价值：多个终端/项目自动共用一个proxy+dashboard，Hub挂了5秒自愈，用户无感知。这是典型的「工程问题被产品包装后消失」——好架构的用户体验就是没有体验。 - 关键洞察（来自真实打脸）：「写不出测试的地方，通常就是production会炸的地方」。98→155"
resource: "https://x.com/i/status/2040860856968515735"
tags:
  - "x-news"
  - "news"
  - "author:lis186"
timestamp: "2026-04-06T00:42:54.663Z"
x_tweet_id: "2040860856968515735"
x_author: "Justin Lee"
x_handle: "lis186"
x_created_at: "2026-04-05T18:35:20.000Z"
x_engagement:
  likes: 43
  retweets: 4
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# ccxray多项目Hub：测试即文档，bug即工程纪律

## 摘要

**[一句话核心判断]**

ccxray v1.1.0的多项目Hub不只是功能迭代，是「工程纪律」范式的产品化。

- 核心价值：多个终端/项目自动共用一个proxy+dashboard，Hub挂了5秒自愈，用户无感知。这是典型的「工程问题被产品包装后消失」——好架构的用户体验就是没有体验。
- 关键洞察（来自真实打脸）：「写不出测试的地方，通常就是production会炸的地方」。98→155个测试用例，覆盖率背后是4个真实bug的暴露。
- 值得关注：测试驱动开发的回归——当Agent能快速生成代码，「代码能不能写」退居次要，「代码能不能测」才是真正的工程瓶颈。

**gakki 说：** 测试从98到155这个数字本身就说明问题：多数人的代码不是「写得太少」而是「测得太少」。当AI让写代码变得廉价，测试的质量才是工程师的真实水平。

## 原文

你在 project A 開了 ccxray，切到 project B 再開一個⋯⋯
Error: port 5577 is already in use 

以前的解法：
手動 kill process、換 port、重開。

現在：
npx ccxray claude    不管開幾個 terminal、幾個專案，自動共用同一個 proxy + dashboard。 

v1.1.0 加了 Multi-project Hub：
* 第一個 terminal 啟動 hub，後面的自動連上
*Hub 掛了？5 秒內自動恢復，你不會感覺到
* ccxray status一行看所有連線中的專案 
 
v1.1.1 是被自己的測試打臉後的修正：
* 寫測試時發現 4 個真實 bug 
* Upstream 斷線會讓 client 永遠掛住 → 修了
* 跑久了記憶體會爆 → 修了 
* Hub lockfile 消失就再也連不上 → 修了
* 測試從 98 → 155

最有趣的發現：寫不出測試的地方，通常就是 production 會炸的地方。   

https://t.co/j2VOa98iEm

#ClaudeCode #MCP #AI #DevTools #ccxray


## 元信息

- **作者**: Justin Lee ([@lis186](https://x.com/lis186))
- **发布时间**: 2026-04-05T18:35:20.000Z
- **抓取时间**: 2026-04-06T00:42:54.663Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 43 · 🔄 4 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2040860856968515735) — @lis186 (Justin Lee)
[2] [Author page](/entities/authors/lis186.md)
