---
type: "X Tweet"
title: "DeepSeek V4-Pro/Flash 紧急上线：1M上下文+OpenAI兼容接口，三月后旧API强制下线"
description: "**[DeepSeek V4系列正式登陆API，1M上下文+双接口兼容意味着什么]**  • V4-Pro 与 V4-Flash 同步上线，最大上下文1M，同时支持 OpenAI ChatCompletions 与 Anthropic 接口，迁移成本几乎为零 • 思考模式支持 reasoning_effort 参数（high/max），复杂Agent场景建议直接拉满，释放了\"推理强度可弹性调节\"的"
resource: "https://x.com/i/status/2047514944158020048"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-24T11:32:27.775Z"
x_tweet_id: "2047514944158020048"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-24T03:16:18.000Z"
x_engagement:
  likes: 4
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "deepseek-v4-open-source"
x_source: "crawler"
---

# DeepSeek V4-Pro/Flash 紧急上线：1M上下文+OpenAI兼容接口，三月后旧API强制下线

## 摘要

**[DeepSeek V4系列正式登陆API，1M上下文+双接口兼容意味着什么]**

• V4-Pro 与 V4-Flash 同步上线，最大上下文1M，同时支持 OpenAI ChatCompletions 与 Anthropic 接口，迁移成本几乎为零
• 思考模式支持 reasoning_effort 参数（high/max），复杂Agent场景建议直接拉满，释放了"推理强度可弹性调节"的工程信号
• 旧模型名 deepseek-chat 与 deepseek-reasoner 三个月后（2026-07-24）强制停用，当前指向 Flash 非思考/思考模式——这是一次强制迁移，存量用户需立即规划切换
• Flash 输入缓存命中仅0.2元/元，Pro输出24元/元，价格分层清晰，印证了"推理成本正在被精细化定价"的大趋势

DeepSeek用兼容性换迁移门槛，用分层定价换商业空间。这次不是追赶，是卡位。

## 原文

API 访问

目前，DeepSeek API 已同步上线 V4-Pro 与 V4-Flash，支持 OpenAI ChatCompletions 接口与 Anthropic 接口。访问新模型时，base_url 不变, model 参数需要改为 deepseek-v4-pro 或 deepseek-v4-flash。

V4-Pro 与 V4-Flash 最大上下文长度为 1M，均同时支持非思考模式与思考模式，其中思考模式支持 reasoning_effort 参数设置思考强度（high/max）。对于复杂的 Agent 场景建议使用思考模式，并设置强度为 max。模型调用与参数调整方法请参考 API 文档：

https://t.co/mK2FkxOkfQ

请大家注意：旧有的 API 接口的两个模型名 deepseek-chat 与deepseek-reasoner 将于三个月后（2026-07-24）停止使用。当前阶段内，这两个模型名分别指向deepseek-v4-flash 的非思考模式与思考模式。

开源权重和本地部署
DeepSeek-V4 模型开源链接：

https://t.co/Q8iiIYBPx5

https://t.co/45FuKnH3ZP

DeepSeek-V4 技术报告：

https://t.co/2ZAuREHBfJ


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-24T03:16:18.000Z
- **抓取时间**: 2026-04-24T11:32:27.775Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 4 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
- **关联主题**: [deepseek-v4-open-source](/concepts/deepseek-v4-open-source.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2047514944158020048) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/deepseek-v4-open-source.md)
