---
type: "source"
title: "Claude Mythos5 以「Fable5」之名前置开放：Anthropic 把网络安全级能力扔进通用 API"
description: "**Anthropic罕见地把内部最高安全级别的 Mythos 模型，以「带护栏」版本 Fable5 直接对 Pro/Max/Team/企业全量开放，输入价砍半（$10/M tokens）。**  - 同底座双胞胎架构：Mythos5仍锁给200+ 网络安全/生命科学合作方；Fable5 用同一基座 + 安全分类器覆盖通用用户。 - 安全机制从「拒绝回答」转向「降级」：触发网络攻击/生化/蒸馏请求"
resource: "https://x.com/i/status/2064397772103528771"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-09T19:18:51.584Z"
x_tweet_id: "2064397772103528771"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-09T17:22:38.000Z"
x_engagement:
  likes: 82
  retweets: 11
  replies: 13
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-security-governance"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2064397772103528771"
created: "2026-06-09"
updated: "2026-06-26"
sha256: "63e69e6d7e041f5f23b193ea22b876807f5fe3bbf091524691dfe8b523353070"
sources:
  - "/sources/highlights/2026-06-09/00__dotey__claude-mythos5-以-fable5-之名前置开放-anthropic-把网络安全级能力扔进通用-api.md"
---

# Claude Mythos5 以「Fable5」之名前置开放：Anthropic 把网络安全级能力扔进通用 API

## 摘要

**Anthropic罕见地把内部最高安全级别的 Mythos 模型，以「带护栏」版本 Fable5 直接对 Pro/Max/Team/企业全量开放，输入价砍半（$10/M tokens）。**

- 同底座双胞胎架构：Mythos5仍锁给200+ 网络安全/生命科学合作方；Fable5 用同一基座 + 安全分类器覆盖通用用户。
- 安全机制从「拒绝回答」转向「降级」：触发网络攻击/生化/蒸馏请求时自动降级到 Opus4.8，Anthropic 自承误报偏严需迭代。
-实际能力侧 Stripe、Anthropic内部攻防等案例被作为「强于 Opus4.8」的论据，Coding/Agent/工具调用基准显著领先。

**gakki锐评**：Mythos→Fable 的「同一基座+分级访问」模式，是 Anthropic 在 AGI 前夜跑通的一条中间路线：既不锁死能力、也不裸奔开源，分类器降级代替硬拒绝——但分类器的精度与解释权，将成为下一个被围攻的边界。

## 原文

Anthropic 今天同时发布了两个模型：Claude Fable 5 和 Claude Mythos 5。

两个模型用的是同一个底座，区别在于 Fable 5 加了一套安全分类器，面向所有用户开放；Mythos 5 去掉了部分安全限制，只给 Project Glasswing 的网络安全合作伙伴用。

简单说，Fable 5 就是"带护栏的 Mythos"。两个月前，Mythos Preview 还锁在大约 200 家防御机构手里，现在普通开发者也能用到同级别的能力了。

【Fable 5 的安全机制】

Fable 5 的安全机制不是传统的"拒绝回答"，而是降级：当分类器检测到请求涉及网络安全攻击、生物化学武器相关内容或模型蒸馏行为时，会自动切换到 Opus 4.8 来回答，并告知用户发生了降级。Anthropic 给出的数据是，超过 95% 的对话不会触发降级。

Anthropic 也坦承分类器目前调得偏严，会误伤正常请求，后续会持续优化降低误报率。

【能力到底有多强】

Anthropic 列了一堆 benchmark，但几个实际案例更能说明问题。

Stripe 拿 Fable 5 在一个 5000 万行的 Ruby 代码库里做了一次全库迁移，一天完成，原本需要一整个团队花两个多月。在 Cognition 的 FrontierCode 测试中，Fable 5 在中等算力消耗下就拿到了最高分，Token 效率比之前的 Claude 模型明显更好。

视觉能力上，之前的 Claude 模型玩宝可梦火红版需要各种辅助工具才能推进，Fable 5 只靠最基础的视觉接口就通关了。还能从截图直接还原一个 Web 应用的源代码。

在生命科学方向，Mythos 5 让 Anthropic 内部的蛋白质设计专家把药物设计流程中的部分环节加速了约 10 倍。在一项基因组学研究中，Mythos 5 在几乎完全自主的情况下工作了一周多，训练出的模型表现超过了发表在 Science 上的模型，而体量只有后者的百分之一。

【价格和可用性】

Fable 5 和 Mythos 5 的 API 定价是每百万输入 Token 10 美元、输出 50 美元。对比 Mythos Preview 的 25/125 美元，降了 60%。但比 Opus 4.8 的 5/25 美元贵了一倍，和 OpenAI 的 GPT-5.5（5/30 美元）相比，输入贵一倍，输出贵了约 67%。

订阅用户要注意一个时间窗口：从今天到 6 月 22 日，Pro、Max、Team 和企业版用户可以免费使用 Fable 5。6 月 23 日开始，使用 Fable 5 需要额外购买 usage credits。Anthropic 说等产能充足后会把 Fable 5 恢复为订阅计划的标配，但没给具体时间。

API 和按量付费的企业用户不受影响，今天起就能正常调用。

【一个容易被忽略的政策变化】

Anthropic 同时宣布，从 Fable 5 开始，所有 Mythos 级别模型的流量将强制保留 30 天，覆盖第一方和第三方平台。Anthropic 承诺不会用这些数据训练模型，仅用于安全监控，比如检测新型越狱攻击和跨请求的复杂攻击模式。但对于注重数据隐私的企业用户来说，这是一个需要评估的变化，尤其是那些之前选择 Anthropic 正是因为其零留存政策的客户。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-09T17:22:38.000Z
- **抓取时间**: 2026-06-09T19:18:51.584Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 82 · 🔄 11 · 💬 13 · 🔖 0 · 👁 0
- **关联主题**: [agent-security-governance](/concepts/agent-security-governance.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2064397772103528771) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/agent-security-governance.md)
