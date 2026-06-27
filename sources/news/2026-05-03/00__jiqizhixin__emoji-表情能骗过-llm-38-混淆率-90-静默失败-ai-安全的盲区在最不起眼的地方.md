---
type: "X Tweet"
title: "Emoji 表情能骗过 LLM：38% 混淆率 + 90% 静默失败，AI 安全的盲区在最不起眼的地方"
description: "**当攻击面藏在一个微笑表情里，安全团队的威胁模型需要重写了。**\\n\\n- 西安交大、NTU、UMass 联合研究：ASCII 表情符号（如 :-)）可触发 LLM 语义混淆，6 个模型 3757 个测试用例中混淆率超 38%\\n- 更危险的是 90% 以上混淆响应是「静默失败」——语法正确但语义偏离，且可迁移到 Agent 框架\\n- 这不是边缘案例：表情符号在企业邮件、客服对话、社交媒体中无"
resource: "https://x.com/i/status/2050929623572140227"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-03T16:18:42.900Z"
x_tweet_id: "2050929623572140227"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-03T13:25:01.000Z"
x_engagement:
  likes: 4
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Emoji 表情能骗过 LLM：38% 混淆率 + 90% 静默失败，AI 安全的盲区在最不起眼的地方

## 摘要

**当攻击面藏在一个微笑表情里，安全团队的威胁模型需要重写了。**\n\n- 西安交大、NTU、UMass 联合研究：ASCII 表情符号（如 :-)）可触发 LLM 语义混淆，6 个模型 3757 个测试用例中混淆率超 38%\n- 更危险的是 90% 以上混淆响应是「静默失败」——语法正确但语义偏离，且可迁移到 Agent 框架\n- 这不是边缘案例：表情符号在企业邮件、客服对话、社交媒体中无处不在\n\ngakki 锐评：AI 安全社区把大量精力放在越狱和对抗样本上，但最致命的漏洞往往来自最日常的输入。Emoji 攻击的本质是 token 化过程中的语义断裂——这个问题比表情符号本身深得多。

## 原文

Can smiley faces break AI? 😮

Researchers from Xi’an Jiaotong University, NTU, and UMass Amherst reveal a new LLM vulnerability: emoticon semantic confusion. ASCII emoticons like :-) can trick models into misinterpreting intent, leading to harmful code generation.

Their study, covering 6 LLMs and 3,757 test cases, found the confusion rate exceeds 38%. Worse, over 90% of confused responses are "silent failures" — syntactically valid but dangerously off-target. The flaw even transfers to agent frameworks, and current defenses barely work. The team calls for urgent mitigation to keep human-AI interactions safe.

False Friends in the Shell: Unveiling the Emoticon Semantic Confusion in Large Language Models

Paper: https://t.co/FzNMWQ6cpH

Our report: https://t.co/DUg8l2gzir

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-03T13:25:01.000Z
- **抓取时间**: 2026-05-03T16:18:42.900Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 4 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2050929623572140227) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
