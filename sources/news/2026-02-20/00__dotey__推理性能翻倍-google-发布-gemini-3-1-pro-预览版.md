---
type: "X Tweet"
title: "推理性能翻倍：Google 发布 Gemini 3.1 Pro 预览版"
description: "**[核心逻辑]** Google 通过架构优化实现推理能力阶梯式跨越，ARC-AGI-2 得分翻倍（77.1%），全面反超 GPT-5.2 与 Claude 4.6。 - 推理基准测试 ARC-AGI-2 从 31.1% 飙升至 77.1%，解决全新逻辑模式能力极强。 - 针对 Agent 场景新增自定义工具端点，长链专业任务表现接近翻倍。 - 保持原价：能力大幅提升但 API 计费标准维持不变"
resource: "https://x.com/i/status/2024611287091589499"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-02-20T01:00:36.483Z"
x_tweet_id: "2024611287091589499"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-02-19T22:25:20.000Z"
x_engagement:
  likes: 232
  retweets: 30
  replies: 34
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 推理性能翻倍：Google 发布 Gemini 3.1 Pro 预览版

## 摘要

**[核心逻辑]** Google 通过架构优化实现推理能力阶梯式跨越，ARC-AGI-2 得分翻倍（77.1%），全面反超 GPT-5.2 与 Claude 4.6。
- 推理基准测试 ARC-AGI-2 从 31.1% 飙升至 77.1%，解决全新逻辑模式能力极强。
- 针对 Agent 场景新增自定义工具端点，长链专业任务表现接近翻倍。
- 保持原价：能力大幅提升但 API 计费标准维持不变，显著提升开发者性价比。

[gakki 的锐评]：Gemini 终于不再是‘那个追赶者’了。ARC-AGI 得分翻倍是什么概念？这意味着它开始真正具备了‘理解未知规律’的直觉，而不是单纯靠语料堆砌。Google 这次价格不变的背刺，压力全给到了 OpenAI 和 Anthropic。

## 原文

Google 发布 Gemini 3.1 Pro：推理能力翻倍，重回 AI 模型第一梯队

2026 年 2 月 19 日，距离 Gemini 3 Pro 上线仅三个月，Google 就发布了 Gemini 3.1 Pro。这次升级的核心卖点：推理能力翻倍，价格不变。目前以 Preview 形式向开发者、企业和消费者全面开放。

Gemini 3 Pro 去年 11 月上线时曾短暂登顶，随后被 OpenAI 和 Anthropic 反超。这次从第三方评测机构 Artificial Analysis 的数据看，Google 重新拿回了综合智能指数的榜首。

推理能力：核心突破

3.1 Pro 最大的亮点在推理。ARC-AGI-2（测试模型解决全新逻辑模式的能力）得分从 Gemini 3 Pro 的 31.1% 跳到 77.1%，翻了一倍多。对比竞品：Claude Opus 4.6 得分 68.8%，GPT-5.2 为 52.9%。

Humanity's Last Exam（高级学术推理）上 3.1 Pro 得分 44.4%，也高于 GPT-5.2 的 34.5% 和 Claude Sonnet 4.6 的 33.2%。GPQA Diamond（科学知识）拿到 94.3%，同样是所有模型最高。

编码和 Agent：全面提升

LiveCodeBench Pro（竞赛级编程）的 Elo 从 2439 提升到 2887，大幅领先 GPT-5.2 的 2393。SWE-Bench Verified（实际代码修复）上得分 80.6%，与 Claude Opus 4.6 的 80.8% 基本持平——头部模型在工程编码上已非常接近。

Agent 方面提升更为显著。APEX-Agents（长链专业任务）从 18.4% 跳到 33.5%，接近翻倍，超过 Claude Opus 4.6 的 29.8%。BrowseComp（Agent 搜索）以 85.9% 排名第一。Google 还专门推出了 gemini-3.1-pro-preview-customtools 端点，针对混合使用 bash 命令和自定义函数的Agent场景做了优化。

不过 3.1 Pro 并非所有维度都领先。在 LM Arena 用户投票排名中，Claude Opus 4.6 在文本和编码类别仍然靠前。GDPval-AA（专家任务）上 Claude Sonnet 4.6 以 1633 大幅领先 3.1 Pro 的 1317。不同测试反映不同维度，没有哪个模型在所有任务上占绝对优势。

开发者关注点

API 层面有几个实用更新：文件上传限制从 20MB 提升到 100MB，支持直接传入 YouTube URL 分析视频，新增 medium 级别的 thinking level 方便在推理深度和成本间灵活切换。

注意一个破坏性变更：total_reasoning_tokens 字段已更名为 total_thought_tokens。

模型支持最多 100 万 token 输入上下文和 6.4 万 token 输出，原生多模态（文本、图片、音频、视频、代码仓库）。

定价和使用

定价与 Gemini 3 Pro 完全一致：200k token 以内输入 $2/百万 token，输出 $12/百万 token；超过 200k 则为 $4/$18。能力大幅提升但价格不变，性价比明显提高。对比参考：Claude Opus 4.6 为 $5/$25，GPT-5.2 为 $1.25/$10。

普通用户可以通过 Gemini app 和 NotebookLM 使用，需 Google AI Pro（$19.99/月）或 Ultra（$124.99/月）订阅。
开发者可通过 AI Studio、Gemini API、Gemini CLI、Google Antigravity、Vertex AI 和 Android Studio 访问，模型标识符为 gemini-3.1-pro-preview。

目前处于 Preview 阶段，稳定版将在进一步验证后发布。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-02-19T22:25:20.000Z
- **抓取时间**: 2026-02-20T01:00:36.483Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 232 · 🔄 30 · 💬 34 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2024611287091589499) — @dotey (宝玉)
