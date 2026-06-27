---
type: "X Tweet"
title: "oh my codex：给失控的 Codex CLI 装上工作流安全带"
description: "**[ Codex 终于有了自己的「工程层」 ]**  oh my codex 开源项目为 OpenAI Codex CLI 添加了完整的工作流层，包括需求澄清（deep-interview）、架构规划（ralplan）、持久执行（ralph）、多 Agent 并行（team）四大模式，以及 33 个角色提示词体系。  • 这是对 Codex 「散着跑」状态的工程化补救——说明纯 CLI 模式的自"
resource: "https://x.com/i/status/2040574686875287626"
tags:
  - "x-news"
  - "news"
  - "author:MindfulReturn"
timestamp: "2026-04-05T00:42:57.283Z"
x_tweet_id: "2040574686875287626"
x_author: "MindfulReturn 身心修复局"
x_handle: "MindfulReturn"
x_created_at: "2026-04-04T23:38:12.000Z"
x_engagement:
  likes: 121
  retweets: 22
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# oh my codex：给失控的 Codex CLI 装上工作流安全带

## 摘要

**[ Codex 终于有了自己的「工程层」 ]**

oh my codex 开源项目为 OpenAI Codex CLI 添加了完整的工作流层，包括需求澄清（deep-interview）、架构规划（ralplan）、持久执行（ralph）、多 Agent 并行（team）四大模式，以及 33 个角色提示词体系。

• 这是对 Codex 「散着跑」状态的工程化补救——说明纯 CLI 模式的自然交互在复杂任务上存在根本性体验缺陷
• /ralph 持久执行循环是核心创新：解决了 CLI 会话无法跨轮次保持状态的核心痛点
• 33 个角色体系对标 oh-my-claudecode，Codex 和 Claude Code 的生态竞争正式进入「框架层」

**gakki：** CLI 的问题是它太诚实了——一个不会拐弯的接口，会让模型的所有缺陷暴露无遗。工作流层是遮羞布，也是工程化的第一步。

## 原文

抛弃Claude吧，老是封号真烦人
我发现个好东西，如果你用codex开发，这下终于有类似oh my opencode的东西出来了：oh my codex插件。

一个给 OpenAI Codex CLI 加工作流层的开源项目，给你的 Codex 加一套标准工作流，而不是每次都"打开终端 → 问问题 → 得到答案"这样散着跑。

支持拉尔夫循环：
/deep-interview  需求还没清楚时，帮你澄清边界和意图
/ralplan  把澄清的需求变成可执行的架构和实现计划
/ralph 持久执行循环——一个负责人持续推进直到完成
/team   多 Agent 并行执行——把任务拆给多个 executor 同时跑 

Agent 角色体系（33 个角色提示词）
| architect | 系统架构设计 | 
| planner | 执行计划制定 | 
| executor | 执行代码 | 
| debugger | 定位修复 bug | 
| verifier | 验证结果正确性 |

质量保证类
style / quality / api / security / performance 五个专项评审
领域专家类
dependency-expert · test-engineer · build-fixer · designer · writer · qa-tester
产品策略类
product-manager · ux-researcher · product-analyst · information-architect
Team 模式的架构：
每个 worker 自动获取独立 git worktree，无需手动建分支
支持混合模型：
可配置 Codex / Claude / Gemini 同时并行
完整 staged pipeline：plan → prd → exec → verify → fix

集成能力
Discord / Slack / Telegram：可以发消息触发 workflow、接收构建状态通知
OpenClaw：官方支持，可作为通知网关，可以一起用：OmX 负责代码任务执行，OpenClaw 负责把结果投喂到你的聊天工具。
Webhook：统一投递到多平台

https://t.co/PFcSYnVxo0


## 元信息

- **作者**: MindfulReturn 身心修复局 ([@MindfulReturn](https://x.com/MindfulReturn))
- **发布时间**: 2026-04-04T23:38:12.000Z
- **抓取时间**: 2026-04-05T00:42:57.283Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 121 · 🔄 22 · 💬 6 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2040574686875287626) — @MindfulReturn (MindfulReturn 身心修复局)
