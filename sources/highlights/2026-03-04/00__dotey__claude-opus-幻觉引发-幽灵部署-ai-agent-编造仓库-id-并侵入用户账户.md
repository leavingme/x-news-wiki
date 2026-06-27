---
type: "X Tweet"
title: "Claude Opus 幻觉引发「幽灵部署」：AI Agent 编造仓库 ID 并侵入用户账户"
description: "**[Agent 幻觉已造成真实安全风险，不能再当笑话看]** • Claude Opus 4.6 在未调用 GitHub API 的情况下凭空捏造仓库 ID \"913939401\"，恰好命中真实公开仓库并被部署到用户 Vercel 团队账户 • 事件暴露 Agent 「自信胡编」与工程系统「默认信任」的危险组合——AI 不需要恶意就能造成安全事件 • Vercel CEO 亲自披露，说明此类事故"
resource: "https://x.com/i/status/2028934937894653976"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-03-04T01:02:22.817Z"
x_tweet_id: "2028934937894653976"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-03-03T20:45:59.000Z"
x_engagement:
  likes: 179
  retweets: 12
  replies: 16
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-security-infrastructure"
x_source: "crawler"
---

# Claude Opus 幻觉引发「幽灵部署」：AI Agent 编造仓库 ID 并侵入用户账户

## 摘要

**[Agent 幻觉已造成真实安全风险，不能再当笑话看]**
• Claude Opus 4.6 在未调用 GitHub API 的情况下凭空捏造仓库 ID "913939401"，恰好命中真实公开仓库并被部署到用户 Vercel 团队账户
• 事件暴露 Agent 「自信胡编」与工程系统「默认信任」的危险组合——AI 不需要恶意就能造成安全事件
• Vercel CEO 亲自披露，说明此类事故已引起基础设施层高度关注

**gakki 锐评：** 这是 Agent 时代的「误击友军」——AI 不会故意害你，但会认真搞砸。当幻觉遇上自动化部署，等于给错误装上了火箭推进器。

## 原文

Claude Opus 4.6 凭空编造了一个 GitHub 仓库 ID，然后通过 Vercel API 把这个陌生仓库部署到了用户的团队账户上。

Vercel CEO Guillermo Rauch 披露了这起事件的经过：一位用户发现自己团队里突然出现了一个完全不认识的开源项目部署，吓得立刻报告。

Vercel 安全团队介入调查后发现，这不是黑客入侵，而是 AI 智能体（agent）在执行部署任务时"编了个数字"。

具体来说，这个 AI 智能体知道用户的项目名称和项目 ID，但在需要填写 GitHub 仓库 ID 时，它没有调用 GitHub API 去查询真实的 ID，而是自己捏造了一个看起来很像真的数字"913939401"。这个编造的 ID 恰好对应了 GitHub 上一个真实存在的公开仓库，于是这个毫不相关的代码就被部署到了用户的环境中。

好在这个仓库本身无害，没有造成安全事故。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-03-03T20:45:59.000Z
- **抓取时间**: 2026-03-04T01:02:22.817Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 179 · 🔄 12 · 💬 16 · 🔖 0 · 👁 0
- **关联主题**: [agent-security-infrastructure](/concepts/agent-security-infrastructure.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2028934937894653976) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/agent-security-infrastructure.md)
