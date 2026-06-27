---
type: "X Tweet"
title: "Claude Code源码泄漏：Anthropic的工程化System Prompt与多Agent权限队列首次曝光"
description: "**[Claude Code逆向工程揭示的生产级设计]**  Anthropic的System Prompt采用工程化约束而非模糊原则：工具约束精确到\"读文件必须用FileReadTool\"、风险控制要求\"删除数据前必须二次确认\"、输出规范强制\"先给结论再解释\"。这套体系让AI行为真正可预测、可控、可上线。  多Agent编排采用三层架构：Coordinator Mode主Agent分配任务并行给"
resource: "https://x.com/i/status/2038940065523552263"
tags:
  - "x-news"
  - "highlights"
  - "author:ScarlettWeb3"
timestamp: "2026-04-09T10:17:45.033Z"
x_tweet_id: "2038940065523552263"
x_author: "Jingle Bell 初号机"
x_handle: "ScarlettWeb3"
x_created_at: "2026-03-31T11:22:47.000Z"
x_engagement:
  likes: 427
  retweets: 88
  replies: 31
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-leaked-architecture"
x_source: "crawler"
---

# Claude Code源码泄漏：Anthropic的工程化System Prompt与多Agent权限队列首次曝光

## 摘要

**[Claude Code逆向工程揭示的生产级设计]**

Anthropic的System Prompt采用工程化约束而非模糊原则：工具约束精确到"读文件必须用FileReadTool"、风险控制要求"删除数据前必须二次确认"、输出规范强制"先给结论再解释"。这套体系让AI行为真正可预测、可控、可上线。

多Agent编排采用三层架构：Coordinator Mode主Agent分配任务并行给Worker执行；危险操作通过Mailbox权限队列向leader申请审批；原子认领机制防止多Worker竞争同一资源。等于把RLHF对齐经验固化成工程规范。

**gakki：源码泄漏暴露的不是功能，是Anthropic对"可预测性"近乎洁癖的执念。这套约束体系反过来解释了他们400报错的底层逻辑——不是控制欲，是在给不确定的Agent行为打补丁。**

## 原文

Claude 今日收入来源是大家都在用 Claude 分析 Claude 源码，Claudecode 源码泄漏，更准确说是逆向提取

深扒了一遍代码，以下是你可以解析源码做的 4 件事：
（你可以直接喂给你的龙虾，让他学习）

1、学 Anthropic 怎么写 System Prompt

传统写法（错误示范）：“尽量帮助用户，提供详细回答”
Anthropic 写法（工程化）
工具约束： “读文件必须用 FileReadTool，不允许用 bash”
风险控制：“删除数据前必须二次确认”
输出规范：“先给结论，再解释”

可以直接套用到你在编程的产品
这样 AI 行为会更加可预测、可控、可上线

2、拆解多 Agent 协作架构（Swarm）

源码里有完整的多 Agent 编排系统
▪️Coordinator Mode：一个主 Agent 分配任务给多个 Worker，Worker 并行执行后汇报
▪️权限队列（Mailbox）：Worker 需要执行危险操作时，通过 mailbox 向 leader 请求权限，leader 审批后才执行
▪️原子认领机制：createResolveOnce 防止多个 Worker 同时处理同一个权限请求
▪️Team Memory：跨 Agent 共享记忆空间

如果你想做多 Agent 系统，这是 Anthropic 自己的最佳实践。特别是权限队列的设计—— 如何在给 Agent 自主权的同时保持人类控制

3、偷师上下文压缩策略

这是 Claude Code 最精妙的工程之一
三层压缩机制：
▪️微压缩（MicroCompact）：不触发 API 调用，直接在本地编辑缓存内容，移除旧的工具输出。两种策略——基于缓存的和基于时间的。
▪️自动压缩（AutoCompact）：接近上下文窗口上限时触发。预留 13,000 token 缓冲区，最多生成 20,000 token 的摘要。内置断路器——连续失败 3 次就停止重试，防止死循环
▪️全量压缩（Full Compact）：把整段对话压成摘要，然后重新注入最近访问的文件（每文件 5,000 token 上限）、活跃的 plan、用过的 skill schema。压缩后预算 50,000 token

如果你在做任何长对话 AI 应用，这套三层压缩策略可以直接用，特别是微压缩，不调 API 就能释放上下文空间

4、复制 AutoDream 记忆整理机制

这个最有意思。Claude Code 会在后台自动整理记忆：

触发条件（四个全部触发才执行）：
1. 距上次整理 ≥ 24 小时
2.之后又有 ≥ 5 个新会话
3. 没有其他整理进程在跑
4. 距上次扫描 ≥ 10 分钟

整理流程（4 阶段）：
1. Orient — 读 MEMORY.md，扫描现有记忆文件
2. Gather — 检查日志，找到已过时的记忆，grep 对话记录
3. Consolidate — 合并、更新、修正矛盾、转换相对日期
4. Prune — 保持 MEMORY.md ≤ 200 行 / 25KB

任何需要长期记忆的 AI 应用都能用这个模式
记忆需要定期整理，不能只增不减
————

😎 还有几个搞笑的是：

1、Anthropic 居然在做虚拟宠物
从 userId 哈希确定性生成，别是要发nft？还是愚人节玩笑？

2、源码里列出了所有工具和命令，包括大量未公开的 41 个内置工具 + 80 个斜杠命令

🔧 未公开工具：WebBrowserTool（浏览器自动化）、MonitorTool（监控）、PushNotificationTool（推送）、SubscribePRTool（PR 订阅）、SnipTool（截图）、ListPeersTool（查看同伴）

🪓 未公开命令：/teleport（会话传送）、/thinkback（回放思维链）、/ultraplan（超级规划模式）、/passes（多轮执行）、/stickers（贴纸？？）

这些都还在 feature flag 后面，但知道它们的存在，等正式发布时你就是第一批用上的人

3、看懂 Feature Flags = 看懂 Anthropic 的产品路线图
源码里藏着大量未上线的 feature flag。这是产品经理的水晶球——代码写了但没开放的功能，就是团队接下来要做的事

大致的路线是：CLI → 长驻服务 → 主动模式 → 多Agent协作 → 操作系统级Agent

不仅仅是功能迭代，是产品范式切换

目前已经增加到夸张的 6.5k stars、10k forks，Fork:Star 比 1.7:1 确实离谱——大家都在悄悄存副本怕被删。。。


## 元信息

- **作者**: Jingle Bell 初号机 ([@ScarlettWeb3](https://x.com/ScarlettWeb3))
- **发布时间**: 2026-03-31T11:22:47.000Z
- **抓取时间**: 2026-04-09T10:17:45.033Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 427 · 🔄 88 · 💬 31 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2038940065523552263) — @ScarlettWeb3 (Jingle Bell 初号机)
