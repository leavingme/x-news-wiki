---
type: "X Tweet"
title: "Agent = Model + Harness：Harness 层才是 AI 工具分化的真正护城河"
description: "**Claude Code、Cursor、Codex 底层模型可能完全相同，但 Agent 表现天差地别——区别不在模型，在 Harness。**  - Addy Osmani 提出框架：Agent = Model + Harness，凡是「不是模型本身」的部分都属于外壳 - Harness 拆解为六层：指令层（CLAUDE.md/skills）、能力层（tools/MCP）、基础设施（沙箱/浏览"
resource: "https://x.com/i/status/2053456173622530407"
tags:
  - "x-news"
  - "highlights"
  - "author:shao__meng"
timestamp: "2026-06-24T22:27:59.955Z"
x_tweet_id: "2053456173622530407"
x_author: "meng shao"
x_handle: "shao__meng"
x_created_at: "2026-05-10T12:44:37.000Z"
x_engagement:
  likes: 130
  retweets: 31
  replies: 9
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "harness-engineering"
x_source: "crawler"
---

# Agent = Model + Harness：Harness 层才是 AI 工具分化的真正护城河

## 摘要

**Claude Code、Cursor、Codex 底层模型可能完全相同，但 Agent 表现天差地别——区别不在模型，在 Harness。**

- Addy Osmani 提出框架：Agent = Model + Harness，凡是「不是模型本身」的部分都属于外壳
- Harness 拆解为六层：指令层（CLAUDE.md/skills）、能力层（tools/MCP）、基础设施（沙箱/浏览器）、编排层（子 agent 路由）、执行控制（hooks/中间件）、可观测性（trace/成本监控）
- 裸模型不是 Agent；只有外壳提供了状态、工具、反馈回路、强制约束，它才成为 Agent
- 范式切换：「不是模型问题，是配置问题」——行业应停止追问模型分数，转向 Harness 工程化


gakki 锐评：这与查重参考中 DeepSeek 急招 Harness 人才、字节三 Layer 验证 Skills 形成同一条主线——国产模型补课 Agent 工��化的本质，是补课 Harness。Anthropic 路线正在被全面对标。

## 原文

Claude Code、Cursor、Codex、Aider、Cline 部分底层模型可能完全相同，但 Agent 表现却不一样，为什么？

@addyosmani 认为：是因为模型之上的那层“外壳” —— Harness，它包括「提示词、工具、上下文策略、钩子、沙箱、子智能体、反馈回路、恢复路径」等。

Agent = Model + Harness

重新系统看看什么是 Harness？
凡是"不是模型本身"的部分都属于外壳：
· 指令层：System prompt、CLAUDE.md、AGENTS.md、skill 文件、子 agent 指令
· 能力层：工具、skills、MCP servers 及其描述
· 基础设施：文件系统、沙箱、无头浏览器
· 编排层：子 agent 派发、任务交接、模型路由
· 执行控制：hooks、中间件（lint、上下文压缩等确定性逻辑）
· 可观测性：日志、trace、成本与延迟监控

裸模型不是 agent。只有当外壳为它提供了状态、工具执行、反馈回路和强制约束，它才成为 agent。

思维范式的切换：不是"模型问题"，是"配置问题"
行业默认反应是：agent 出错 → 等下一代模型。 Harness Engineering 拒绝这个默认。
每一类失败都是可定位的工程信号：
· 忽略代码规范：写进 AGENTS.md
· 执行破坏性命令：加 hook 阻止
· 长任务中途失焦：拆分为 planner + executor
· 写出无法编译的代码：把 type-check 作为反压信号注入回路

同一个模型，放在精调过的外壳里，性能可以远高于跑在通用框架上。当前模型理论能力与你实际看到的能力之间的差距，主要是 harness gap。

最关键的工作方法：棘轮（The Ratchet）
每一次失误都变成一条永久规则。
· 一次"提交了被注释掉的测试"的事故 → AGENTS.md 增加"绝不注释测试"，pre-commit hook 检测 .skip(，reviewer 子 agent 拦截。
· 约束只在观察到真实失败时加入，只在更强模型让它冗余时才移除。
· 系统提示词里每一行都应能追溯到一次具体的历史失败。

推论：没有通用最优 harness。 一个 harness 是一个代码库的"失败史"塑造出来的，是工程纪律而非框架。

设计方法：从行为反推组件
1. 文件系统 + Git —— 持久化状态
模型只能操作进入上下文窗口的内容。文件系统是工作区、暂存区、多 agent 协调面。Git 提供免费版本控制、分支实验、回滚。

2. Bash + 代码执行 —— 通用工具
ReAct 循环（reason → act → observe → repeat）。与其为每个动作预建工具，不如让 agent 用 bash 现场组装。Agent 在 shell 上表现普遍很强。

3. 沙箱 + 默认工具链
Bash 必须安全运行。好沙箱预装运行时、测试 CLI、无头浏览器，让 agent 能"自我验证"。

4. 记忆 + 搜索 —— 持续学习
模型不知道训练之后的世界。AGENTS.md 在每次会话注入领域知识；web search 和 MCP 工具补足实时信息。

5. 对抗 Context Rot
上下文越满，推理越退化。三种主要手法：
· Compaction：智能压缩与卸载旧上下文
· Tool-call offloading：长输出（如 2000 行日志）落盘，只在上下文里保留头尾
· Progressive disclosure：按需披露指令和工具，而不是启动时全量加载

6. 长程执行
应对"过早停止"和"分解失败"：
· Loops：拦截模型的退出意图，在新上下文窗口里强制继续推进完成目标
· Planning：强制写出步骤计划文件，每步后用 self-verification hook 检查
· Splits：生成与评估拆给不同 agent，规避模型自评的正向偏差

7. Hooks —— 强制层
连接"请求行为"和"强制行为"。生命周期挂载点：工具调用前、文件编辑后、提交前。
成功应当沉默，失败应当冗长。typecheck 通过则无声；失败则把错误直接注入回路供自纠。

8. 规则手册和工具选择
· AGENTS.md 仍是仓库根部最高杠杆的配置点。但要把它当飞行员检查清单，不是风格指南——简短，每条都有失败史背书。
· 十个高度聚焦的工具，永远胜过五十个互相重叠的工具。
· 工具描述会进入 prompt，所以未审计的 MCP server 等同于 prompt 注入风险面。

生产中的样子
把对 Claude Code 架构的推测性拆解作为成熟外壳的参照
· 上下文注入 = 知识层
· 循环状态 = memory store + worktree 隔离器
· 破坏性动作 hook = 权限闸
· 子 agent 上下文防火墙 = 多 agent 层
· 工具 dispatch registry = MCP 与 bash 的统一插槽

外壳不会消失，只会迁移
模型变强不会让外壳消失，而是让它位移：
· 老一代模型催生的"上下文焦虑缓解层"已经被新模型大幅淘汰
· 但能力上限抬高的同时，新的失败模式也随之出现
· 外壳里每一块脚手架都编码了"模型当前不能独立做到什么"——模型变强，过时的拆掉，新的搭起来去够下一条地平线

训练循环的反馈
模型 post-training 时通常会带特定 harness 入环 → 模型对这些 harness 偏向的动作（文件系统操作、bash、子 agent 派发）格外擅长 → 形成一定程度的过拟合。

最佳 harness 是为你具体任务和工作流定制的那个。

Harness-as-a-Service
行业从"在 LLM API（提供 completion）上构建"转向"在 Harness API（提供 runtime）上构建"。SDK 直接交付循环、工具、上下文管理、hooks、沙箱。

新默认范式：选一个 harness 框架 → 配置其核心支柱 → 只专注于领域特定的 prompt 与工具设计。 这让排错变成"调一个良好分层的配置面"，而不是"重造整个 agent 架构"。

未来方向
· 顶尖编码 agent 之间的相似度，已经高于它们底层模型之间的相似度——外壳模式在收敛
· 开放问题正在越过"单 agent"：多 agent 并行编排、agent 分析自身 trace 修复 harness 级故障、按需即时组装工具的环境
· 下一阶段：harness 不再是静态配置文件，而越来越像编译器。


## 元信息

- **作者**: meng shao ([@shao__meng](https://x.com/shao__meng))
- **发布时间**: 2026-05-10T12:44:37.000Z
- **抓取时间**: 2026-06-24T22:27:59.955Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 130 · 🔄 31 · 💬 9 · 🔖 0 · 👁 0
- **关联主题**: [harness-engineering](/concepts/harness-engineering.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2053456173622530407) — @shao__meng (meng shao)
[2] [Author page](/entities/authors/shao-meng.md)
[3] [Related topic](/concepts/harness-engineering.md)
