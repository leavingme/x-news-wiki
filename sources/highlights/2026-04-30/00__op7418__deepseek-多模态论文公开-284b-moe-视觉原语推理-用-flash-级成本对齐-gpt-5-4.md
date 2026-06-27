---
type: "source"
title: "DeepSeek 多模态论文公开：284B MoE + 视觉原语推理，用 Flash 级成本对齐 GPT-5.4"
description: "**DeepSeek 多模态底座正式亮相，用「视觉原语」而非传统 patch 对齐的路线向 GPT-5.4/Claude/Gemini 发起挑战。** - 底座为 DeepSeek-V4-Flash，MoE 架构 284B 总参/13B 激活，自研 ViT 编码器配合 3×3 空间压缩 - 核心创新：回答时同时生成画框、打点等「视觉原语」进行推理，非纯文本 CoT - 论文声称在极低 Token "
resource: "https://x.com/i/status/2049823491017592924"
tags:
  - "x-news"
  - "highlights"
  - "author:op7418"
timestamp: "2026-04-30T13:18:29.123Z"
x_tweet_id: "2049823491017592924"
x_author: "歸藏(guizang.ai)"
x_handle: "op7418"
x_created_at: "2026-04-30T12:09:38.000Z"
x_engagement:
  likes: 36
  retweets: 3
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "deepseek-v4-open-source"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2049823491017592924"
created: "2026-04-30"
updated: "2026-06-26"
sha256: "6688bfe43a21d54d95cc9d2d8c190c05944945fb410db5e8ff9dfe325cb1c022"
sources:
  - "/sources/highlights/2026-04-30/00__op7418__deepseek-多模态论文公开-284b-moe-视觉原语推理-用-flash-级成本对齐-gpt-5-4.md"
---

# DeepSeek 多模态论文公开：284B MoE + 视觉原语推理，用 Flash 级成本对齐 GPT-5.4

## 摘要

**DeepSeek 多模态底座正式亮相，用「视觉原语」而非传统 patch 对齐的路线向 GPT-5.4/Claude/Gemini 发起挑战。**
- 底座为 DeepSeek-V4-Flash，MoE 架构 284B 总参/13B 激活，自研 ViT 编码器配合 3×3 空间压缩
- 核心创新：回答时同时生成画框、打点等「视觉原语」进行推理，非纯文本 CoT
- 论文声称在极低 Token 成本下，多项前沿指标对齐甚至反超 GPT-5.4 和 Claude

gakki 锐评：视觉原语思路值得关注，但「对齐 GPT-5.4」的说法需要第三方评测验证——自家论文里的 benchmark 永远最好看。真正值得关注的是 13B 激活参数这个成本结构，它意味着多模态能力的推理成本可能被压到 Flash 级别。

## 原文

DeepSeek 多模态大语言模型的论文《Thinking with Visual Primitives》已经公开

底座是 DeepSeek-V4-Flash，MoE架构，总参数量 284B，激活参数量 13B。

自研 DeepSeek‑ViT 视觉编码模型，14×14 patch，输出后 3×3 空间压缩，再接入 LLM。

模型在回答时不仅进行文字推理，还会同时通过画框、打点等“视觉原语”进行思考。

在极低的 Token 成本下，其效果能和 GPT-5.4、Claude 以及 Gemini 在一些前沿指标上对齐，甚至有的指标能反超。


## 元信息

- **作者**: 歸藏(guizang.ai) ([@op7418](https://x.com/op7418))
- **发布时间**: 2026-04-30T12:09:38.000Z
- **抓取时间**: 2026-04-30T13:18:29.123Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 36 · 🔄 3 · 💬 3 · 🔖 0 · 👁 0
- **关联主题**: [deepseek-v4-open-source](/concepts/deepseek-v4-open-source.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2049823491017592924) — @op7418 (歸藏(guizang.ai))
[2] [Author page](/entities/authors/op7418.md)
[3] [Related topic](/concepts/deepseek-v4-open-source.md)
