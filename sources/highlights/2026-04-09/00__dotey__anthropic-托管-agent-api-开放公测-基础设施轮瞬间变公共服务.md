---
type: "X Tweet"
title: "Anthropic 托管 Agent API 开放公测：基础设施轮瞬间变公共服务"
description: "**【一句话核心判断】** Anthropic 把「沙箱+状态管理+权限+链路追踪」这套基础设施打包成托管服务，意味着做 Agent 基础设施的第三方团队直接被降维打击——以前花几个月搭的东西，现在 API 调用就送。  **要点：** - Notion 用户可直接在工作区把任务丢给 Claude，并行跑几十个任务 - Sentry 把 bug 诊断到写补丁、提 PR 全链路自动化，集成几周就上线"
resource: "https://x.com/i/status/2041949451053400353"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-09T00:44:24.628Z"
x_tweet_id: "2041949451053400353"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-08T18:41:01.000Z"
x_engagement:
  likes: 542
  retweets: 77
  replies: 41
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Anthropic 托管 Agent API 开放公测：基础设施轮瞬间变公共服务

## 摘要

**【一句话核心判断】**
Anthropic 把「沙箱+状态管理+权限+链路追踪」这套基础设施打包成托管服务，意味着做 Agent 基础设施的第三方团队直接被降维打击——以前花几个月搭的东西，现在 API 调用就送。

**要点：**
- Notion 用户可直接在工作区把任务丢给 Claude，并行跑几十个任务
- Sentry 把 bug 诊断到写补丁、提 PR 全链路自动化，集成几周就上线
- 内部测试：结构化文件生成任务成功率比标准提示循环高 10 个百分点
- 多 Agent 协调能力还在研究预览阶段，但野心明显

**gakki 锐评：** Claude Managed Agents 的出现验证了一个判断——基础设施层终将被模型厂商「原生化」。第三方框架的生存空间被持续压缩，这不是狼来了，是狼已经把门踹开了。

## 原文

Anthropic 今天发布了 Claude Managed Agents，一套托管式 Agent 构建和部署 API，现已开放公测。

核心卖点一句话说清楚：以前做一个生产级 Agent，光基础设施（沙箱、状态管理、权限、链路追踪）就要搭几个月，现在这些全交给 Anthropic 的云端搞定，开发者只管定义任务、工具和规则。官方说法是"从原型到上线，几天而不是几个月"。

具体提供三样东西：生产级沙箱执行环境，支持长时间运行的 Agent 会话（断线也不丢进度），以及多 Agent 协调能力（一个 Agent 可以拉起其他 Agent 并行干活，这部分还在研究预览阶段）。内部测试中，在结构化文件生成任务上，Managed Agents 的成功率比标准提示循环高了最多 10 个百分点。

已经有一批公司在用了。

Notion 让用户直接在工作区里把任务丢给 Claude，写代码、做 PPT、做网页都行，几十个任务可以并行跑。

Sentry 把自家的 bug 诊断工具 Seer 跟 Claude Agent 串起来，从定位根因到写补丁、提 PR 一条龙，整个集成几周就上线了。

Rakuten 在产品、销售、营销、财务、HR 各条线部署了专用 Agent，每个 Agent 一周内就能上线。

Asana 用它加速了 AI Teammates 功能的开发。Vibecode 则把它作为默认集成，让用户从 prompt 直接到部署完成的应用。

定价方面，token 费用按 Claude 平台标准收，另外每个活跃会话按每小时 0.08 美元计费。

对开发者来说，这是 Anthropic 正式入局"Agent 即服务"赛道。之前不管用 Claude 还是 GPT 做 Agent，基础设施都得自己搭或者找第三方。现在 Anthropic 自己把这层包了，逻辑很清楚：降低开发门槛、锁定开发者在 Claude 生态里。跟 OpenAI 最近推 Codex 的思路类似，都在从"卖模型"往"卖完整开发平台"走。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-08T18:41:01.000Z
- **抓取时间**: 2026-04-09T00:44:24.628Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 542 · 🔄 77 · 💬 41 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2041949451053400353) — @dotey (宝玉)
