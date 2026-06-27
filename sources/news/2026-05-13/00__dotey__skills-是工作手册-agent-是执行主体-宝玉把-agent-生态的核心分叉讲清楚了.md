---
type: "X Tweet"
title: "Skills 是工作手册，Agent 是执行主体：宝玉把 Agent 生态的核心分叉讲清楚了"
description: "**[Skills 和 Agent 的边界定义，决定了 Agent 架构的可维护性上限]**  宝玉给出了目前中文圈最清晰的 Skills vs Agent 定义：Skill 是给 Claude 看的工作手册（包含领域知识、工作流、判断标准），本身不执行；Agent 才是真正执行任务的主体，其中 Subagent 负责并行分摊上下文压力，结果汇总回主 Agent。  核心洞察：Subagent 不"
resource: "https://x.com/i/status/2054383106115678639"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-05-13T04:18:49.786Z"
x_tweet_id: "2054383106115678639"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-13T02:07:55.000Z"
x_engagement:
  likes: 102
  retweets: 17
  replies: 13
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Skills 是工作手册，Agent 是执行主体：宝玉把 Agent 生态的核心分叉讲清楚了

## 摘要

**[Skills 和 Agent 的边界定义，决定了 Agent 架构的可维护性上限]**

宝玉给出了目前中文圈最清晰的 Skills vs Agent 定义：Skill 是给 Claude 看的工作手册（包含领域知识、工作流、判断标准），本身不执行；Agent 才是真正执行任务的主体，其中 Subagent 负责并行分摊上下文压力，结果汇总回主 Agent。

核心洞察：Subagent 不是为了"多"，是为了解决上下文爆炸问题——当一个任务需要并发处理数百份文档时，让主对话逐份读入是工程自杀，分而治之才是正确姿势。

**影响**：对所有正在自建 Agent 系统的人，这个分叉直接决定了代码库是"可组合"还是"屎山"。没有清晰的 Skill/Agent 边界，所有所谓 Multi-Agent 协作都是空中楼阁。

gakki 锐评：宝玉这个定义最精准的地方在于指出了 Subagent 的存在理由不是"能力分工"，而是"上下文管理"——这是 Agent 工程化的第一性原理，比任何框架讨论都基础。

## 原文

1. Skills 是技能，领域知识，工作流等等，相当于怎么干好一件事的说明书。

比如 https://t.co/WFUR6qkd5g 仓库里有个 skill 叫 nda-review，在 commercial-legal/skills/ 文件夹里。里面是一份 SKILL.md，写清楚：审 NDA 时先比对哪些条款、按团队 playbook 打绿黄红三档、什么情况要升级、输出格式是 Word 修订模式。

它就是一份给 Claude 看的工作手册，本身不干活。

2. Agent 是真正执行任务的主题，除了主要执行的 Agent，通常自定义的 Agent 分两种：Subagent 和 Scheduled agent

2.1 Subagent 是单独派出去干一摊子活的“分身”

举个仓库里的例子：corporate-legal:tabular-review 这个 skill 要对一个数据室里几百份合同做表格化尽调。如果让主对话一份份读，上下文很快爆掉。所以它派 subagent，一个 subagent 负责一份文档，并行跑，最后把结果汇总回主对话。

主 Agent 看到的只是最终表格，中间几百次读取的信息被隔离在外。

2.2 Scheduled agent 是定时自己跑的后台任务

renewal-watcher 这个就是。每周自动扫一遍合同库，把 90 天内到期的合同列出来，发到指定 Slack 频道。你不用记日子，它替你盯。

docket-watcher（盯法院案件动态）、reg-feed-watcher（盯监管新规）都是这种。

3. MCP connector 是把外面的数据接进来的连接器

Skill 写得再好，也得有合同可审。仓库里配了 Ironclad（合同库）、DocuSign（已签合同）、iManage（文档管理）几个 MCP connector。

Agent 通过这些 MCP connector 去读公司真实的合同库，而不是让你手动复制粘贴。

类似地，诉讼那个 plugin 接的是 Everlaw（电子取证）、CourtListener（联邦法院判决数据库）、Trellis（州法院数据库）。换个执业方向，换一套数据连接器。

4. Plugin 是把上面这些打包到一起的容器

commercial-legal 这个 plugin 文件夹里装着：
- 一堆 skill（nda-review、vendor-agreement-review、escalation-flagger……）
- 几个 scheduled agent（renewal-watcher、deal-debrief）
- 一份 .mcp.json，告诉 Claude 要连哪些外部系统
- 一份 CLAUDE.md 模板，用来记你团队的 playbook

你装上这一个 plugin，整套企业合同审查的能力就一次性配齐了。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-13T02:07:55.000Z
- **抓取时间**: 2026-05-13T04:18:49.786Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 102 · 🔄 17 · 💬 13 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2054383106115678639) — @dotey (宝玉)
