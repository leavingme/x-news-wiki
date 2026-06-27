---
type: "source"
title: "Artificial Analysis推出Coding Agent综合评测指数：工具链组合性能首次被独立量化"
description: "**一句话核心判断：** 评测Coding Agent的正确单位不是「模型」，而是「Harness+模型」的组合——这个常识终于有了系统性基准。  新指数涵盖3个主流Benchmark、Token消耗、成本和综合表现，覆盖当前主流Coding Agent场景。  gakki 锐评：这是行业走向成熟的信号——当市场开始用「组合评测」替代「模型跑分」，说明大家终于意识到Coding Agent的瓶颈在"
resource: "https://x.com/ArtificialAnlys/status/2053865095076438427"
tags:
  - "x-news"
  - "news"
  - "author:ArtificialAnlys"
timestamp: "2026-05-12T16:18:13.891Z"
x_tweet_id: "2053865095076438427"
x_author: "Artificial Analysis"
x_handle: "ArtificialAnlys"
x_created_at: "2026-05-11T15:49:32.000Z"
x_engagement:
  likes: 1324
  retweets: 156
  replies: 102
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "ai-trend-digest"
type_okf: "X Tweet"
source_url: "https://x.com/ArtificialAnlys/status/2053865095076438427"
created: "2026-05-11"
updated: "2026-06-26"
sha256: "271b66a86936072bafb966daa21abbf1e18baaeb3d4b7bea9bd13948fd47fa95"
sources:
  - "/sources/news/2026-05-12/00__ArtificialAnlys__artificial-analysis推出coding-agent综合评测指数-工具链组合性能首次被独立量化.md"
---

# Artificial Analysis推出Coding Agent综合评测指数：工具链组合性能首次被独立量化

## 摘要

**一句话核心判断：** 评测Coding Agent的正确单位不是「模型」，而是「Harness+模型」的组合——这个常识终于有了系统性基准。

新指数涵盖3个主流Benchmark、Token消耗、成本和综合表现，覆盖当前主流Coding Agent场景。

gakki 锐评：这是行业走向成熟的信号——当市场开始用「组合评测」替代「模型跑分」，说明大家终于意识到Coding Agent的瓶颈在工程层而非模型层。但Benchmark本身也会成为新的博弈空间：优化Benchmark分数和优化真实编程体验，可能完全不是一回事。

## 原文

Announcing the Artificial Analysis Coding Agent Index! Our new coding agent benchmarks measure how combinations of agent harnesses and models perform on 3 leading benchmarks, token usage, cost and more

When developers use AI to code they’re choosing a model, but also pairing it with a specific harness. It makes sense to benchmark that combination to understand and compare performance.

The Artificial Analysis Coding Agent Index includes 3 leading benchmarks that represent a broad spectrum of coding agent use:
➤ SWE-Bench-Pro-Hard-AA, 150 realistic coding tasks that frontier models struggle with, sampled from Scale AI’s SWE-Bench Pro
➤ Terminal-Bench v2, 84 agentic terminal tasks from the Laude Institute and that range from system administration and cryptography to machine learning. 5 tasks were filtered due to environment incompatibility
➤ SWE-Atlas-QnA, 124 technical questions developed by Scale AI about how code behaves, root causes of issues, and more, requiring agents to explore codebases and give text answers

Analysis of results:
➤ Opus 4.7 and GPT-5.5 lead the Index: Opus 4.7 in Cursor CLI scores 61, followed closely by GPT-5.5 in Codex and Opus 4.7 in Claude Code at 60. GPT-5.5 in Cursor CLI follows at 58.

➤ Open weights models are competitive, but still trail the leaders: GLM-5.1 in Claude Code is the top open-weight result at 53, followed by Kimi K2.6 and DeepSeek V4 Pro in Claude Code at 50. These are strong results, but still meaningfully behind the top proprietary models.

➤ Gemini 3.1 Pro in Gemini CLI underperforms: Gemini 3.1 Pro in Gemini CLI scores 43, well below where Gemini 3.1 Pro sits on our Intelligence Index, highlighting that Gemini’s performance in Gemini CLI remains a relative weak spot for Google’s offering.

➤ Cost per task (API token pricing) varies >30x: Composer 2 in Cursor CLI is cheapest at $0.07/task, followed by DeepSeek V4 Pro in Claude Code at $0.35/task and Kimi K2.6 in Claude Code at $0.76/task. At the high end, GPT-5.5 in Codex costs $2.21/task, while GLM-5.1 in Claude Code costs $2.26/task. For both models this was contributed to by high token usage, and in GPT-5.5’s case by a relatively higher per token cost.

➤ Token usage varies >3x: GLM-5.1 in Claude Code uses the most tokens at 4.8M/task, followed by Kimi K2.6 at 3.7M/task and DeepSeek V4 Pro at 3.5M/task. GPT-5.5 in Codex uses 2.8M tokens/task, substantially more than Opus 4.7 in Claude Code at 1.7M/task. In GLM-5.1’s case, higher token usage, cost and execution time were partly driven by the model entering loops on some tasks.

➤ Cache hit rates remain high but vary materially: Cache hit rates range from 80% to 96% across combinations. Provider routing, harness prompt structure and cache behavior can materially change the economics of running the same model given cached inputs are typically <50% the API price of regular input tokens.

➤ Time per task varies >7x: Opus 4.7 in Claude Code is fastest at ~6 minutes/task, while Kimi K2.6 in Claude Code is slowest at ~40 minutes/task. This is contributed to by differences in average turns per task, token usage and API serving speed. Opus 4.7 had materially lower amount of turns to complete a task than all other models while Kimi K2.6 had the most.

➤ Cursor made real progress with Composer 2: Composer 2 in Cursor CLI scores 48, near the leading open-weight model results, while being the cheapest combination measured at $0.07/task. Cursor has stated Composer 2 is built from Kimi K2.5, showcasing they have made substantial post-training gains.

This is just the start. We are planning to add additional agents (both harnesses and models). Let us know what you would like to see added next.


## 元信息

- **作者**: Artificial Analysis ([@ArtificialAnlys](https://x.com/ArtificialAnlys))
- **发布时间**: 2026-05-11T15:49:32.000Z
- **抓取时间**: 2026-05-12T16:18:13.891Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1324 · 🔄 156 · 💬 102 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/ArtificialAnlys/status/2053865095076438427) — @ArtificialAnlys (Artificial Analysis)
[2] [Author page](/entities/authors/artificialanlys.md)
