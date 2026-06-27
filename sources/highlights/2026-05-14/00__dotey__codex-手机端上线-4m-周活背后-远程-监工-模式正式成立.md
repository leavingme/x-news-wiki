---
type: "source"
title: "Codex 手机端上线：4M 周活背后，远程\"监工\"模式正式成立"
description: "**OpenAI 把 Codex 装进了 ChatGPT 手机 App，iOS/安卓同步开启 preview，免费版和 Go 套餐均可用。**  关键设计：手机只是远程窗口，代码和凭证留在原设备上，通过 secure relay 保持跨设备可达而不直接暴露公网。文件、上下文、会话状态随登录账号迁移。  当前硬限制：手机端仅支持连接 macOS 上的 Codex，Windows 支持\"据说\"在路线图"
resource: "https://x.com/i/status/2055029251762422196"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-14T22:18:52.451Z"
x_tweet_id: "2055029251762422196"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-14T20:55:28.000Z"
x_engagement:
  likes: 29
  retweets: 3
  replies: 7
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2055029251762422196"
created: "2026-05-14"
updated: "2026-06-26"
sha256: "2d9fdbdba6c72029e02636edac065e1d50121b2a21e207002a055d1158c2d879"
sources:
  - "/sources/highlights/2026-05-14/00__dotey__codex-手机端上线-4m-周活背后-远程-监工-模式正式成立.md"
---

# Codex 手机端上线：4M 周活背后，远程"监工"模式正式成立

## 摘要

**OpenAI 把 Codex 装进了 ChatGPT 手机 App，iOS/安卓同步开启 preview，免费版和 Go 套餐均可用。**

关键设计：手机只是远程窗口，代码和凭证留在原设备上，通过 secure relay 保持跨设备可达而不直接暴露公网。文件、上下文、会话状态随登录账号迁移。

当前硬限制：手机端仅支持连接 macOS 上的 Codex，Windows 支持"据说"在路线图上。

gakki 锐评：4M 周活是 Codex 的成人礼——当 Agent 跑长任务变成常态，"人盯着屏幕等"就成了沉没成本。手机端不是让你在地铁上写代码，而是让你在碎片时间里保留拍板权。这个入口一旦打开，Codex 的使用时长会被显著拉长，商业价值也随之重估。

## 原文

OpenAI 把 Codex 搬进了 ChatGPT 手机 App，今天在 iOS 和安卓上同步开启 preview，所有 ChatGPT 用户都能用，包括免费版和最低价的 Go 套餐。

手机端不是让你在手机上写代码。真正干活的 Codex 还是跑在你的笔记本、Mac mini 或者 devbox 上，手机只是一个远程窗口：地铁上能看 Codex 跑到哪一步、审一眼它改的 diff 和跑的测试结果、批准下一步操作，或者临时换个方向走。文件、凭证、权限都留在原来那台机器上，不上传到手机。

OpenAI 的解释是底层走了一层 secure relay 中继,让跑着 Codex 的机器能跨设备保持可达,又不直接暴露在公网上。你在哪台设备登录 ChatGPT，会话状态和上下文就跟到哪里。

为什么现在做。OpenAI 自己公布的数字是 Codex 每周活跃用户已经过 400 万。当 agent 越来越多地跑长任务，几十分钟甚至几小时的那种，人坐在电脑前盯着就很傻，你需要随手能看一眼、能拍板的能力。

一个明显限制：手机端目前只能连 macOS 上的 Codex，Windows 支持据说”很快”。

另一层意思是，OpenAI 没给 Codex 单独做手机 App，而是塞进 ChatGPT 主 App。这跟他们之前透露过的”超级 App”路线一致，把 ChatGPT、Codex、Atlas 浏览器整合成一个入口。桌面端是独立的 Codex App，手机端直接合并进 ChatGPT。

参照系是 Anthropic。Claude Code 从去年秋天起就支持手机远程查看和介入正在跑的任务，后面的 Cowork 配套移动端走的也是类似 dispatch 思路。Codex 这次把覆盖范围扩到了 devbox 和远程企业环境（支持 remote SSH 接入），算是追平加扩张。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-14T20:55:28.000Z
- **抓取时间**: 2026-05-14T22:18:52.451Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 29 · 🔄 3 · 💬 7 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2055029251762422196) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
