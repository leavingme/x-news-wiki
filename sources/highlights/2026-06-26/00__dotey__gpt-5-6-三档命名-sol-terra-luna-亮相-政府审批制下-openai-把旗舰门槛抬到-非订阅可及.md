---
type: "X Tweet"
title: "GPT-5.6 三档命名（Sol/Terra/Luna）亮相：政府审批制下，OpenAI 把旗舰门槛抬到「非订阅可及」"
description: "**[OpenAI 用审批制锁住 GPT-5.6 旗舰供给，模型层却在用太阳系命名加速分层商业化]**  - **核心信息增量**：6月26日 OpenAI 发布 GPT-5.6，命名升级为「代际+档位」结构（Sol 旗舰 / Terra 日常 / Luna 经济），Sol 新增 max 深度推理与 ultra 多 Agent 并行两种模式，官方 Terminal-Bench 2.1 跑分 Sol"
resource: "https://x.com/i/status/2070589767608144370"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-26T22:20:10.731Z"
x_tweet_id: "2070589767608144370"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-26T19:27:24.000Z"
x_engagement:
  likes: 49
  retweets: 3
  replies: 5
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-reasoning-tier-strategy"
x_source: "crawler"
---

# GPT-5.6 三档命名（Sol/Terra/Luna）亮相：政府审批制下，OpenAI 把旗舰门槛抬到「非订阅可及」

## 摘要

**[OpenAI 用审批制锁住 GPT-5.6 旗舰供给，模型层却在用太阳系命名加速分层商业化]**

- **核心信息增量**：6月26日 OpenAI 发布 GPT-5.6，命名升级为「代际+档位」结构（Sol 旗舰 / Terra 日常 / Luna 经济），Sol 新增 max 深度推理与 ultra 多 Agent 并行两种模式，官方 Terminal-Bench 2.1 跑分 Sol Ultra 91.9% / Sol 88.8%，对标 Claude Mythos 5（88%）和 Gemini 3.1 Pro Preview。
- **真正的看点不是模型而是分发**：应美国政府要求，GPT-5.6 目前只开放给约 20 家经审批的合作伙伴，普通开发者与 ChatGPT 用户暂不可用，OpenAI 首次把旗舰模型从大众订阅里剥离出来。
- **影响判断**：对 C 端感知而言是一次「降级式发布」——最强的 Sol/Ultra 实际上锁在政府/企业白名单里，市场短期只能消费 Terra 与 Luna，等同于变相倒逼企业走 B 端采购；对标 Claude Mythos、Gemini 3.1 Pro 的跑分格局表明顶级模型差距已被压到 1-4 个百分点的窄区间。

## 原文

OpenAI 今天（6月26日）发布了新一代模型 GPT-5.6，包含三个版本：旗舰级 Sol、日常级 Terra 和经济级 Luna。但这条新闻最值得关注的地方不在模型本身，而在发布方式：应美国政府要求，GPT-5.6 目前只向大约 20 家经过政府审批的合作伙伴开放，普通开发者和 ChatGPT 用户暂时用不上。

GPT-5.6 用了一套新的命名规则：数字代表代际，Sol、Terra、Luna 代表三个固定的能力档位，灵感来自太阳、地球、月亮。Sol 是最强的旗舰，Terra 性能接近上一代 GPT-5.5 但价格砍半，Luna 主打便宜快速。

Sol 新增了两个模式：max 模式让模型花更长时间深度推理，ultra 模式则调用多个子 agent 并行处理复杂任务，相当于一个 AI 自己拆分工作给一组 AI 干活。

在 OpenAI 公布的 Terminal-Bench 2.1（测试命令行工作流的编程基准）上，Sol Ultra 得分 91.9%，Sol 为 88.8%，Claude Mythos 5 为 88%，Google Gemini 3.1 Pro Preview 为 70.7%。网络安全方面，Sol 在 ExploitBench 上用大约三分之一的 token 就达到了 Mythos Preview 的水平。

API 定价：
Sol 每百万 token 输入 5 美元、输出 30 美元；
Terra 分别是 2.5 和 15 美元；
Luna 是 1 和 6 美元。

7 月还会上线 Cerebras 硬件加速版本，推理速度可达每秒 750 个 token。

OpenAI 这次花了大量篇幅讲安全。投入超过 70 万 A100 等效 GPU 小时做自动化红队测试，专门寻找能跨场景通用的越狱攻击。模型内置了拒绝机制，实时分类器会在生成过程中检测网络安全和生物领域的滥用行为，可疑输出会被暂停，交给一个更大的推理模型复审。

按照 OpenAI 自己的准备框架评估，Sol 的网络安全能力被定级为“高”，但没有达到“关键”级别。它能找到浏览器漏洞和利用原语（exploit primitive，也就是构建攻击的基础组件），但在测试条件下无法自主完成完整的攻击链。

OpenAI 把这解读为一个积极信号：模型更擅长帮防守方找洞和修补，而不是帮攻击方搞破坏。但这个判断是否经得起现实世界的检验，预览期就是用来回答这个问题的。

如果你是 API 用户，短期内最实际的变化是：Terra 的性价比。性能接近 GPT-5.5，价格只有一半，对跑大量推理任务的团队来说值得关注。Luna 则适合对成本极度敏感的高吞吐场景。

Sol 的 ultra 模式如果真能稳定运行，意味着复杂的多步骤任务可以甩给模型自己拆解、分配、汇总，开发者不用自己搭 agent 编排框架。这跟 Anthropic 在 Claude 上做的 agent 能力、Cursor 在 IDE 里做的 background agent，方向一致，都在抢占"AI 自己管理 AI"这个位置。

但眼下，大多数人还用不上。OpenAI 说几周内会扩大开放，据 Axios 报道下周就会增加更多客户。ChatGPT 用户什么时候能用，还没有明确时间表。

完整报告：https://t.co/gHKuwPkbQk


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-26T19:27:24.000Z
- **抓取时间**: 2026-06-26T22:20:10.731Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 49 · 🔄 3 · 💬 5 · 🔖 0 · 👁 0
- **关联主题**: [ai-reasoning-tier-strategy](/concepts/ai-reasoning-tier-strategy.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2070589767608144370) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/ai-reasoning-tier-strategy.md)
