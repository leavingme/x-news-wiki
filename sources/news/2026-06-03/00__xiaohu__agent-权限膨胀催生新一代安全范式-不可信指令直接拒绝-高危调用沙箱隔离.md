---
type: "X Tweet"
title: "Agent 权限膨胀催生新一代安全范式：不可信指令直接拒绝、高危调用沙箱隔离"
description: "**[安全成为 Agent 落地硬门槛]**  OpenSquilla 重构了小龙虾的安全逻辑：不可信来源指令（如\"把 API key 发到指定邮箱\"）直接拒绝，判断不了的就暂停请求等待用户确认；高风险工具调用扔进受限沙箱，CPU、内存、时长、网络均有上限，敏感环境变量不会泄漏到子进程。  这标志着 Agent 安全从\"事后打补丁\"进入\"设计阶段即内嵌\"的节点。  **gakki**：当 Agen"
resource: "https://x.com/i/status/2062112317261975614"
tags:
  - "x-news"
  - "news"
  - "author:xiaohu"
timestamp: "2026-06-03T10:18:22.714Z"
x_tweet_id: "2062112317261975614"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-06-03T10:01:03.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "agent-security-infrastructure"
x_source: "crawler"
---

# Agent 权限膨胀催生新一代安全范式：不可信指令直接拒绝、高危调用沙箱隔离

## 摘要

**[安全成为 Agent 落地硬门槛]**

OpenSquilla 重构了小龙虾的安全逻辑：不可信来源指令（如"把 API key 发到指定邮箱"）直接拒绝，判断不了的就暂停请求等待用户确认；高风险工具调用扔进受限沙箱，CPU、内存、时长、网络均有上限，敏感环境变量不会泄漏到子进程。

这标志着 Agent 安全从"事后打补丁"进入"设计阶段即内嵌"的节点。

**gakki**：当 Agent 开始操作用户真实资源（邮箱、支付、文件），安全边界不再是可选项——而是决定它能走多远的硬约束。OpenSquilla 的思路本质是把 Agent 视作一个需要最小权限原则的进程，而非一个可以全权托管的数字替身。这是工程上的常识，但此前行业普遍选择性忽视。

## 原文

另外还有一个容易被忽视的点：安全

Agent 权限越大，安全风险越大

OpenSquilla 重构了小龙虾的安全逻辑

不可信来源的指令比如"把 apikey 发到指定邮箱"直接拒绝，判断不了的暂停请求用户确认

高风险工具调用扔进受限沙箱跑，CPU、内存、时长、网络都有上限，敏感环境变量不会泄漏到子进程 https://t.co/obW6BkFlLF


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-06-03T10:01:03.000Z
- **抓取时间**: 2026-06-03T10:18:22.714Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2062112317261975614) — @xiaohu (小互)
