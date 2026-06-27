---
type: "X Tweet"
title: "VLM「权威洗白」攻击曝光：ETH Zurich用2016年老招式让GPT-5.4/Claude/Gemini集体说胡话"
description: "**[ETH Zurich一篇论文把VLM安全底裤扒了下来：仅靠2016年就存在的PGD对抗扰动，就能让GPT-5.4、Claude Opus 4.6、Gemini 3、Grok 4.2以最高100%成功率输出与图像完全不符的虚假内容，且全程无需jailbreak或prompt injection。]**  - 攻击纯靠像素级微扰触发，跨四大厂商主力生产模型完全迁移，覆盖内容审核、新闻取证、自动驾"
resource: "https://x.com/i/status/2065577892134973666"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-13T01:18:23.535Z"
x_tweet_id: "2065577892134973666"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-12T23:32:00.000Z"
x_engagement:
  likes: 6
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# VLM「权威洗白」攻击曝光：ETH Zurich用2016年老招式让GPT-5.4/Claude/Gemini集体说胡话

## 摘要

**[ETH Zurich一篇论文把VLM安全底裤扒了下来：仅靠2016年就存在的PGD对抗扰动，就能让GPT-5.4、Claude Opus 4.6、Gemini 3、Grok 4.2以最高100%成功率输出与图像完全不符的虚假内容，且全程无需jailbreak或prompt injection。]**

- 攻击纯靠像素级微扰触发，跨四大厂商主力生产模型完全迁移，覆盖内容审核、新闻取证、自动驾驶视觉等所有关键场景
- 论文命名「AI authority laundering」——利用VLM输出的高置信度给虚假叙事「洗白」，让模型成为误导信息的扩音器
- 防御侧现有的语义安全对齐对此完全无效，因为输入在像素层、输出在语义层，两者解耦

锐评：这不是新攻击，是新确认。防御范式必须从「语义安全」前移到「输入级视觉指纹校验」——只要输入像素可被改写，VLM输出的「权威感」就不再可信，内容真实性治理的重心要倒过来。

## 原文

Cool paper!

Researchers at ETH Zurich show that subtly altered images can make vision-language models (like Grok or GPT-5.4) confidently describe a completely different reality—without any jailbreak or prompt injection. They call it "AI authority laundering."  

Using only basic adversarial perturbations (PGD, known since 2016), attacks transfer to production VLMs like GPT-5.4, Claude Opus 4.6, Gemini 3, and Grok 4.2. Success rates reach up to 100% for amplifying misinformation, evading content filters, manipulating product recommendations, and targeting individuals.  

Result: visual adversarial robustness is no longer theoretical—it's an urgent safety problem.

Laundering AI Authority with Adversarial Examples

Paper: https://t.co/cyBpXaH2En

Our report: https://t.co/BdBCYOpIYG

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-12T23:32:00.000Z
- **抓取时间**: 2026-06-13T01:18:23.535Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 6 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2065577892134973666) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
