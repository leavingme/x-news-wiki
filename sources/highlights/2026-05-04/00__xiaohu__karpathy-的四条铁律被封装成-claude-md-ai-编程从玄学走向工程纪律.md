---
type: "X Tweet"
title: "Karpathy 的四条铁律被封装成 CLAUDE.md：AI 编程从玄学走向工程纪律"
description: "**Karpathy 对 AI 编程常见问题的观察被社区结构化为可直接嵌入项目的 CLAUDE.md 文档。**  - 四条原则：Think Before Coding（禁止默默假设）、Simplicity First（200 行能缩到 50 行就重写）、Surgical Changes（只改必须改的）、Goal-Driven Exec - 核心洞察：AI 编程最烦人的不是写错，而是「修一个 bu"
resource: "https://x.com/i/status/2051292100067729623"
tags:
  - "x-news"
  - "highlights"
  - "author:xiaohu"
timestamp: "2026-05-04T16:19:13.234Z"
x_tweet_id: "2051292100067729623"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-05-04T13:25:22.000Z"
x_engagement:
  likes: 30
  retweets: 4
  replies: 9
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Karpathy 的四条铁律被封装成 CLAUDE.md：AI 编程从玄学走向工程纪律

## 摘要

**Karpathy 对 AI 编程常见问题的观察被社区结构化为可直接嵌入项目的 CLAUDE.md 文档。**

- 四条原则：Think Before Coding（禁止默默假设）、Simplicity First（200 行能缩到 50 行就重写）、Surgical Changes（只改必须改的）、Goal-Driven Exec
- 核心洞察：AI 编程最烦人的不是写错，而是「修一个 bug 顺手改半个项目」的过度操作
- 这是从 prompt 工程到 agent 工程纪律的关键跃迁——把人的判断力编码进系统提示词

gakki 锐评：当社区开始自发地把专家经验封装成标准配置文件，说明 AI 编程工具链已经过了「能用」阶段，进入「怎么用好」的工程化时代。CLAUDE.md 正在成为新的 .gitignore。

## 原文

Claude code有时候会替你做错误假设，不主动要求澄清；该反驳时不反驳...敷衍迎合奉承你...

有人把 Karpathy 对 AI 写代码常见问题的观察，整理成一份可以直接放进项目里的 CLAUDE.md 文档。

压缩成了四条原则，让AI能更认真干活：

第一，Think Before Coding

写代码前先想清楚。不要默默假设，不要隐藏不确定性。遇到歧义时要明确列出可能解释，必要时要求澄清。如果存在更简单的方案，也要主动指出。

第二，Simplicity First

优先用最少代码解决问题。不要加用户没要求的功能，不要为了单次使用写抽象，不要为了所谓“灵活性”搞配置化。项目里有一句判断标准很实用：如果 200 行可以变成 50 行，那就重写。

第三，Surgical Changes

只改必须改的地方。不要顺手优化旁边的代码、注释和格式，不要重构没坏的东西。每一行 diff 都应该能对应到用户的需求。这个原则对 Claude Code 特别关键，因为很多 AI 编程工具最烦人的地方就是“修一个 bug，顺手改半个项目”。

第四，Goal-Driven Execution

不要只给命令，要给可验证目标。比如“修复 bug”应该变成“先写一个能复现 bug 的测试，再让测试通过”；“加 validation”应该变成“先写非法输入测试，再实现逻辑”。项目强调，LLM 很擅长围绕明确目标反复循环，关键是你要给它成功标准。

这套规则真正解决的，是现在 AI 编程里最让人头疼的问题：

模型太积极
太自信
太爱脑补
太喜欢顺手“优化”
最后修一个 bug，diff 改得像重写项目

它的价值不是让 AI 更会写代码，而是让 AI 更像一个靠谱工程师。

对 Claude Code 用户来说，这类 CLAUDE.md 其实就是项目宪法。

把它放进项目根目录，相当于先给 AI 立规矩：

少废话
少脑补
少加戏
先澄清
再动手
最后验证

现在 AI 写代码已经不缺执行力，真正稀缺的是工程纪律。


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-05-04T13:25:22.000Z
- **抓取时间**: 2026-05-04T16:19:13.234Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 30 · 🔄 4 · 💬 9 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2051292100067729623) — @xiaohu (小互)
