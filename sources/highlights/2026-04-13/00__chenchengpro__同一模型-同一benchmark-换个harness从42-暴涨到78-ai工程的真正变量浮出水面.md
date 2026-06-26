---
type: "X Tweet"
title: "同一模型、同一Benchmark，换个Harness从42%暴涨到78%——AI工程的真正变量浮出水面"
description: "**[一句话核心判断]** MIT/Harvard联合研究发现：包裹在模型外的规则、工具、技能文件和反馈循环（即「Harness」）才是决定AI表现的关键变量，而非模型本身。  **要点：** - 核心发现：Harness Engineering是AI工程的新学科，不完全依赖模型能力 - 五个配置杠杆：系统提示(60行以内硬规则)、Skills(渐进式知识披露)、MCP(≤3个)、Sub-agen"
resource: "https://x.com/i/status/2037332209003282747"
tags:
  - "x-news"
  - "highlights"
  - "author:chenchengpro"
timestamp: "2026-04-13T00:45:08.173Z"
x_tweet_id: "2037332209003282747"
x_author: "陈成"
x_handle: "chenchengpro"
x_created_at: "2026-03-27T00:53:45.000Z"
x_engagement:
  likes: 272
  retweets: 48
  replies: 17
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 同一模型、同一Benchmark，换个Harness从42%暴涨到78%——AI工程的真正变量浮出水面

## 摘要

**[一句话核心判断]**
MIT/Harvard联合研究发现：包裹在模型外的规则、工具、技能文件和反馈循环（即「Harness」）才是决定AI表现的关键变量，而非模型本身。

**要点：**
- 核心发现：Harness Engineering是AI工程的新学科，不完全依赖模型能力
- 五个配置杠杆：系统提示(60行以内硬规则)、Skills(渐进式知识披露)、MCP(≤3个)、Sub-agents、Feedback循环
- ETH Zurich验证：AI生成的配置文件反而拉低性能并浪费20% token
- Terraform创始人定义本质：每当agent犯错，工程化确保永远不再犯——不祈祷更好的模型，修系统

**gakki锐评：**
这研究把AI行业「堆参数赌模型」的路子给了一记闷棍。42%到78%的差距不是模型造成的，是人造成的——这才是工程师真正该卷的方向。

## 原文

同一个 AI 模型，同一个基准测试，跑两次。

第一次 42%，第二次 78%。

什么都没换——不是 prompt，不是温度参数，不是模型版本。唯一变的是 harness：包裹在模型外面的规则、工具、技能文件和反馈循环。

这可能是 2026 年 AI 工程领域最重要的发现。它有了一个正式名字：Harness Engineering。

核心哲学一句话说清——Terraform 创始人 Mitchell Hashimoto 的定义：每当 agent 犯一个错，你就工程化地确保它永远不再犯同样的错。不祈祷更好的模型，修系统。

五个配置杠杆：

① 系统提示文件（CLAUDE.md）— 控制在 60 行以内，只写硬规则。ETH Zurich 测了 138 个 agent 配置文件，发现 AI 生成的反而拉低性能还多耗 20% token
② Skills — 渐进式知识披露，agent 按需加载指令模块，不把上下文窗口塞满无关信息
③ MCP 服务器 — 连接外部工具扩展能力，但别超过 3 个，否则 agent 会陷入"tool thrash"，纠结选哪个工具而不是干活
④ Sub-agents — 不是分前后端角色，是做上下文防火墙。长任务委派给子 agent 隔离执行，主线程保持干净。Chroma 研究证实模型在长上下文下表现显著下降
⑤ Hooks — 在工作流关键节点插入确定性检查。LangChain 加了一个 PreCompletionChecklistMiddleware，成了他们整个 harness 里提升最大的单一改动

实战数据：LangChain 靠 harness 优化，coding agent 从 Terminal Bench 2.0 排行榜 30 名开外直接冲进前 5。OpenAI Codex 团队用这套思路构建了超 100 万行代码的生产应用，零行人类手写。

关键洞察：模型正在商品化，所有公司都能调用同样的前沿模型。但 harness 不可复制——它根植于你的代码库、团队模式和领域边界，是靠周复一周把真实失败编码进系统积累出来的。

Prompt engineering 是 2023，Context engineering 是 2025，Harness engineering 是 2026。

零成本，零新工具。只需要改一个习惯：agent 出错时别手动修完就算了，问自己"怎么让它永远不再犯这个错"，然后把答案写进 harness。每周五花 5 分钟回顾本周失败，每个失败加一条规则。你的 agent 会每周变强——不是因为模型升级了，是因为你的系统升级了。


## 元信息

- **作者**: 陈成 ([@chenchengpro](https://x.com/chenchengpro))
- **发布时间**: 2026-03-27T00:53:45.000Z
- **抓取时间**: 2026-04-13T00:45:08.173Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 272 · 🔄 48 · 💬 17 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2037332209003282747) — @chenchengpro (陈成)
[2] [Author page](/entities/authors/chenchengpro.md)
