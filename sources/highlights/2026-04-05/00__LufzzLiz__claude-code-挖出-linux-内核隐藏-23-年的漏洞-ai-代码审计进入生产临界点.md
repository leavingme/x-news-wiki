---
type: "X Tweet"
title: "Claude Code 挖出 Linux 内核隐藏 23 年的漏洞：AI 代码审计进入生产临界点"
description: "**Anthropic 研究员 Nicholas Carlini 用 Claude Code 扫描 Linux 内核源码，自动发现多个可远程利用的堆缓冲区溢出漏洞，其中一个在 NFS 驱动里藏了 23 年（2003 年引入，比 Git 诞生还早）。**  漏洞原理：NFS 服务端用 112 字节缓冲区接收最多 1056 字节响应，攻击者可覆盖内核内存。  结果：已提交 5 个漏洞修复，数百个待验证"
resource: "https://x.com/i/status/2040578742410768536"
tags:
  - "x-news"
  - "highlights"
  - "author:LufzzLiz"
timestamp: "2026-04-05T02:14:39.736Z"
x_tweet_id: "2040578742410768536"
x_author: "岚叔"
x_handle: "LufzzLiz"
x_created_at: "2026-04-04T23:54:18.000Z"
x_engagement:
  likes: 4
  retweets: 0
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Claude Code 挖出 Linux 内核隐藏 23 年的漏洞：AI 代码审计进入生产临界点

## 摘要

**Anthropic 研究员 Nicholas Carlini 用 Claude Code 扫描 Linux 内核源码，自动发现多个可远程利用的堆缓冲区溢出漏洞，其中一个在 NFS 驱动里藏了 23 年（2003 年引入，比 Git 诞生还早）。**

漏洞原理：NFS 服务端用 112 字节缓冲区接收最多 1056 字节响应，攻击者可覆盖内核内存。

结果：已提交 5 个漏洞修复，数百个待验证。Claude Opus 4.6 比 8 个月前的 Opus 4.1 强出几个量级。Carlini 原话："我这辈子从没找到过 Linux 内核堆溢出，这非常非常难。"

**方法论验证意义：逐文件喂给 Claude Code 问"这里有漏洞吗"，几乎无需人工引导。**

gakki：AI 代码审计不是"有望突破"，是已经突破了。23 年的漏洞躺在 NFS 驱动里，Claude Code 一个人 + 脚本跑出来——这比任何 Benchmark 都有说服力。

## 原文

安全行业的游戏规则要变天了
Claude Code 挖出 Linux 内核隐藏 23 年的漏洞

Anthropic 研究员 Nicholas Carlini 用 Claude Code 扫描 Linux 内核源码，发现了多个可远程利用的堆缓冲区溢出漏洞，其中一个在 NFS 驱动里藏了 23 年（2003 年引入）。 

🤯 这个漏洞比 Git 还老——2003 年引入，Git 2005 年才诞生，连代码托管都还没进版本控制时代。  

方法很简单： 用脚本逐文件喂给 Claude Code，问"这里有漏洞吗？"——AI 几乎不需要人工引导就完成了定位。
循环让claude找漏洞脚本见评论，值得收藏下

 漏洞原理： NFS 服务端拒绝锁请求时，用 112 字节缓冲区去装最多 1056 字节的响应 → 攻击者可覆盖内核内存  

📊 结果： 
• 已提交 5 个漏洞修复 
• 还有数百个待验证，人手跟不上 AI 的速度 
• Claude Opus 4.6 比 8 个月前的 Opus 4.1 强出几个量级  

他原话： "我这辈子从没找到过 Linux 内核堆溢出，这非常非常难。但有了这些模型，我找到了一堆。"  

一波 AI 挖洞潮即将到来。开源世界的安全范式要变了。  🔗 https://t.co/FaerGO3kX0


## 元信息

- **作者**: 岚叔 ([@LufzzLiz](https://x.com/LufzzLiz))
- **发布时间**: 2026-04-04T23:54:18.000Z
- **抓取时间**: 2026-04-05T02:14:39.736Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 4 · 🔄 0 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2040578742410768536) — @LufzzLiz (岚叔)
[2] [Author page](/entities/authors/lufzzliz.md)
