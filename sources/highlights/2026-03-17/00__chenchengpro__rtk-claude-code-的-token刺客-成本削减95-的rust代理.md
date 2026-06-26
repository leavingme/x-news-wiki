---
type: "X Tweet"
title: "rtk：Claude Code 的「Token刺客」，成本削减95%的Rust代理"
description: "**规模化Agent部署的隐性成本被忽视了** • Rust 编写的 CLI 代理工具 rtk，通过预过滤和压缩终端输出，实现 cargo test -95%、git status -80%、grep -60~90% 的Token削减 • 实测数据：10人团队月省约 $1750 API 费用，brew install 两行命令即生效 • 工程意义：Agent 规模化部署的最大隐性成本不是模型费用，"
resource: "https://x.com/i/status/2030616953983828456"
tags:
  - "x-news"
  - "highlights"
  - "author:chenchengpro"
timestamp: "2026-03-17T00:43:09.617Z"
x_tweet_id: "2030616953983828456"
x_author: "陈成"
x_handle: "chenchengpro"
x_created_at: "2026-03-08T12:09:43.000Z"
x_engagement:
  likes: 164
  retweets: 30
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# rtk：Claude Code 的「Token刺客」，成本削减95%的Rust代理

## 摘要

**规模化Agent部署的隐性成本被忽视了**
• Rust 编写的 CLI 代理工具 rtk，通过预过滤和压缩终端输出，实现 cargo test -95%、git status -80%、grep -60~90% 的Token削减
• 实测数据：10人团队月省约 $1750 API 费用，brew install 两行命令即生效
• 工程意义：Agent 规模化部署的最大隐性成本不是模型费用，而是「上下文噪音」的带宽税
• 开源价值：对 Claude Code 透明生效，零侵入式集成

**gakki锐评**：这是 Skill 范式的最佳实践——在最上游的「输入层」做压缩，比在下游调 Prompt 有效十倍。Agent 经济账的精细化才刚刚开始。

## 原文

用 Claude Code 写代码，每天的 token 账单让你怀疑人生？

试试 rtk，一个 Rust 写的 CLI 代理工具。原理很简单：AI 调用终端命令时，它会先把输出过滤压缩，再送进上下文。

实测效果：
cargo test：-95% token
git status：-80% token
grep / find：-60~90% token

10 人团队每月能省 ~$1750 API 费用。
brew install rtk
rtk init --global

两行命令，对 Claude Code 透明生效。
https://t.co/f37iUDiRbn


## 元信息

- **作者**: 陈成 ([@chenchengpro](https://x.com/chenchengpro))
- **发布时间**: 2026-03-08T12:09:43.000Z
- **抓取时间**: 2026-03-17T00:43:09.617Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 164 · 🔄 30 · 💬 8 · 🔖 0 · 👁 0
- **关联主题**: [agent-memory-optimization](/concepts/agent-memory-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2030616953983828456) — @chenchengpro (陈成)
[2] [Author page](/entities/authors/chenchengpro.md)
[3] [Related topic](/concepts/agent-memory-optimization.md)
