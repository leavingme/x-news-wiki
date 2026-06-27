---
type: "X Tweet"
title: "Agentic Engineer 的极简主义法则：工具越裸，输出越强"
description: "**[核心判断：上下文污染是Agent性能的头号杀手，裸机CLI反而产出最佳]**  • 工具精简 > 工具堆砌：复杂插件、harness、记忆系统反而带来上下文污染，@systematicls 用近乎裸机的 Claude Code + Codex 做出迄今最佳工作 • 模型进化速度被低估：今天为缺陷设计的复杂方案，可能在下个模型版本直接失效或内置实现 • 研究与实现必须物理隔离：不要让 Agen"
resource: "https://x.com/i/status/2028833958230933729"
tags:
  - "x-news"
  - "highlights"
  - "author:shao__meng"
timestamp: "2026-03-04T01:02:26.193Z"
x_tweet_id: "2028833958230933729"
x_author: "meng shao"
x_handle: "shao__meng"
x_created_at: "2026-03-03T14:04:44.000Z"
x_engagement:
  likes: 154
  retweets: 45
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-natural-language-workflow"
x_source: "crawler"
---

# Agentic Engineer 的极简主义法则：工具越裸，输出越强

## 摘要

**[核心判断：上下文污染是Agent性能的头号杀手，裸机CLI反而产出最佳]**

• 工具精简 > 工具堆砌：复杂插件、harness、记忆系统反而带来上下文污染，@systematicls 用近乎裸机的 Claude Code + Codex 做出迄今最佳工作
• 模型进化速度被低估：今天为缺陷设计的复杂方案，可能在下个模型版本直接失效或内置实现
• 研究与实现必须物理隔离：不要让 Agent 边查边做，而是先研究再执行，避免认知负载爆炸

---

**gakki 锐评：** 这篇文章撕开了「工具焦虑」的遮羞布——当你还在折腾第18个MCP插件时，真正的高手已经在裸机上交付了。Agentic Engineering 的本质不是拼装备，而是拼「信息节食」的自律。

## 原文

如何成为世界级的「Agentic Engineer」

-- 你可以把大量的设计和实现交给 Agent，但结果你必须自己负责。

工具不是越多越好，而是越精简越强
大多数人陷入了"工具崇拜"的误区：以为安装越多的插件、harness、记忆系统，就能让 Agent 更强。实际上，这些外部依赖带来的是上下文污染，Agent 表现反而下降。
@systematicls 现在用的是近乎裸机的 CLI（Claude Code + Codex），并且做出了迄今为止最好的工作。

理解"模型在飞速进化"这件事
· 几个版本前，在 CLAUDE. md 里写"先读这个文件"，Agent 有 50% 概率会无视你
· 现在，它能理解嵌套的条件指令（"如果 C，则读 D"）

今天为某个缺陷设计的复杂解决方案，可能在下一个模型版本中直接失效，或直接被模型实现。这和 @bcherny 面向 6 个月后模型开发产品有异曲同工之妙。

上下文管理：最被低估的工程能力
> "你只需要给 Agent 完成任务所需的确切信息，不多也不少。"

研究与实现必须分离：
· 错误做法："去帮我构建一个认证系统。" — Agent 会去查所有方案，上下文被各种备选实现细节填满，实现时容易混乱或幻觉。
· 正确做法："用 bcrypt-12 实现 JWT 认证，refresh token 7 天过期……" — 上下文直接聚焦在实现细节上。

如果你自己不确定实现方案，流程应该是：
1. 开一个 Agent 做调研，输出方案对比
2. 你或 Agent 决策选哪个
3. 另开一个全新上下文的 Agent 来实现

巧用 Agent 的"奉承性"
Agent 被设计为"取悦用户"——你让它找 bug，它会找到 bug，哪怕需要编造一个。这不是 Agent 的错，这是你的提示词问题。

解决方案一：中性提示词
别说"找 bug"，而说"梳理各模块的逻辑，报告所有发现"。
中性提示不预设结论，Agent 会如实汇报，有 bug 说 bug，没有就说没有。

解决方案二：利用奉承性设计多 Agent 对抗系统
作者设计了一个三 Agent 的 bug 验证机制：
· Bug 发现者：低/中/高影响 bug 分别得 +1/+5/+10 分
· 对抗者：成功反驳得对应分，反驳错误扣 2 倍
· 裁判：告知有真实答案参照，对错各 ±1

明确任务的"终点"
Agent 很擅长开始任务，却不知道何时结束——这是当前模型的固有限制。

两种可靠的终点定义方式：
· 测试套件：明确告知 Agent "X 个测试全部通过才算完成，且不得修改测试文件"。测试是确定性的，Agent 无法糊弄。
· 截图 + 视觉验证：实现功能后让 Agent 截图，并验证设计或行为是否符合预期。Agent 可以根据截图反复迭代，直到视觉结果满足要求。

更高阶的做法：为每个任务创建 {TASK}_CONTRACT.md ，其中列出所有验收条件（测试、截图验证等），结合 stop-hook 机制，强制 Agent 在合同完成前不得退出。

长期运行 Agent 的正确姿势
作者明确反对"24 小时连续运行的超长会话"，原因正是上下文污染——多个不相关合同的上下文混在一起，会导致漂移。

推荐方案：
· 每个合约开一个新会话
· 用一个编排层负责创建合同、分发新会话
会话完成即关闭，下个任务开新会话

规则与技能的管理
CLAUDE. md 的定位：不是一份完整文档，而是一个条件跳转目录。它只告诉 Agent "在什么场景下，去读哪个文件"。

格式示例：
· 如果你在写代码，先读 coding-rules. md
· 如果你在写测试，先读 coding-test-rules. md
· 如果测试失败，先读 coding-test-failing-rules. md

规则（Rules）：编码偏好——"不要做 X"、"总是做 Y"。看到 Agent 做了你不满意的事，就写成规则。
技能（Skills）：编码方法——"按照这个流程做 Z"。如果你想让某件事的做法确定可控，先让 Agent 研究如何做，把方案写成 Skill 文件，然后你审阅修正——这样在真实场景出现前，你就已经掌握了 Agent 的解法。
维护原则：规则和技能积累到一定程度会出现矛盾和冗余，导致性能再次下降。此时需要定期"清理"——让 Agent 整合并去重，向你确认最新偏好。这是一个需要周期性执行的维护动作。


## 元信息

- **作者**: meng shao ([@shao__meng](https://x.com/shao__meng))
- **发布时间**: 2026-03-03T14:04:44.000Z
- **抓取时间**: 2026-03-04T01:02:26.193Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 154 · 🔄 45 · 💬 1 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-natural-language-workflow](/concepts/claude-code-natural-language-workflow.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2028833958230933729) — @shao__meng (meng shao)
[2] [Author page](/entities/authors/shao-meng.md)
[3] [Related topic](/concepts/claude-code-natural-language-workflow.md)
