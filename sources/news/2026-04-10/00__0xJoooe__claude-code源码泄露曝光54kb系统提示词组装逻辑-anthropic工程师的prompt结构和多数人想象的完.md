---
type: "X Tweet"
title: "Claude Code源码泄露曝光54KB系统提示词组装逻辑：Anthropic工程师的prompt结构和多数人想象的完全相反"
description: "**[Claude Code被泄露的system prompt揭示了一个多数人不知道的prompt工程原理]**  54KB的system prompt不是一整段文字，而是由getSimpleSystemSection()、getSimpleDoingTasksSection()、getSimpleToneAndStyleSection()等十几个独立函数分别生成后拼接的。每个section用#标"
resource: "https://x.com/i/status/2038962572519723317"
tags:
  - "x-news"
  - "news"
  - "author:0xJoooe"
timestamp: "2026-04-10T00:44:39.254Z"
x_tweet_id: "2038962572519723317"
x_author: "Joooe｜NodeZ"
x_handle: "0xJoooe"
x_created_at: "2026-03-31T12:52:14.000Z"
x_engagement:
  likes: 393
  retweets: 64
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Claude Code源码泄露曝光54KB系统提示词组装逻辑：Anthropic工程师的prompt结构和多数人想象的完全相反

## 摘要

**[Claude Code被泄露的system prompt揭示了一个多数人不知道的prompt工程原理]**

54KB的system prompt不是一整段文字，而是由getSimpleSystemSection()、getSimpleDoingTasksSection()、getSimpleToneAndStyleSection()等十几个独立函数分别生成后拼接的。每个section用#标题开头，彼此不重叠、不矛盾。

核心工程原则：超过500字的prompt，结构化成多个section的效果远好于一段长文——section标题本身就是分类锚点，让模型更容易判断「这条规则属于哪个范畴」。更反直觉的是，Claude Code大量使用负面指令（negative instructions）来约束行为边界，而非正向规则。


**gakki：** 这个泄露的信息量超过很多官方文档。它解释了为什么很多用户的超长prompt效果不如结构化的短prompt——不是内容不够，是组织形式让模型无法精准定位规则归属。用#标题做语义分块+负面约束边界，这个组合拳是Anthropic工程师写了十几年prompt后的经验沉淀。

## 原文

今天 Claude Code CLI 的原始码意外泄漏，里面有一份 54KB 的 system prompt（系统提示词）组装逻辑。发现 Anthropic 工程师写 prompt 的方式跟多数人想的很不一样。

一、把 prompt 拆成独立段落区块，每段只管一件事

Claude Code 的 system prompt 不是一整段文字，而是由 getSimpleSystemSection()、getSimpleDoingTasksSection()、getSimpleToneAndStyleSection() 等十几个函式各自产生，最后拼接起来。

每个 section 用 # 标题 开头，像 # System、# Doing tasks、# Tone and style、# Output efficiency。彼此不重叠、不矛盾。

这代表什么？当你的 prompt 超过 500 字，把它结构化成多个 section 的效果会远好于一段长文。因为模型在处理指令时，section 标题本身就是一个分类锚点（anchor），让它更容易判断「这条规则属于哪个范畴」。

二、负面指令要带反例（counter-example），不要只说「不要」

原始码里有一段：
Don't add features, refactor code, or make "improvements" beyond what was asked. Don't create helpers, utilities, or abstractions for one-time operations.
（不要添加功能、重构代码、或做超出要求范围的「改进」。不要为一次性操作建立辅助函式、工具或抽象层。）

注意它不是写「保持简单」这种抽象指令，而是列出具体的「不要做 X、不要做 Y」。每一条都是一个可被客观判断的行为。

写「语气不要太浮夸」几乎没用，但写「不要用感叹号、不要用『震惊』『颠覆』『史诗级』等词」就很有效。模型需要的是可以做二元判断（binary judgment）的边界，不是模糊的形容词。

三、用 "X is better than Y"（X 比 Y 好）帮模型做取舍

原始码里有一句设计哲学：
Three similar lines of code is better than a premature abstraction.
（三行相似的代码，比一个过早的抽象化更好。）

这不是规则，是价值判断。它告诉模型「在两个都合理的选项之间，选这边」。

这个技巧的核心是：很多时候模型不是不会写好的内容，而是不知道你的偏好方向。给它一个明确的取舍原则（trade-off principle），比给十条规则更有效。

四、量化限制比形容词有效 10 倍

Claude Code 内部有一段只对 Anthropic 员工启用的指令：
Keep text between tool calls to ≤25 words. Keep final responses to ≤100 words unless the task requires more detail.
（工具调用之间的文字保持在 25 字以内。最终回复保持在 100 字以内，除非任务需要更多细节。）

25 字、100 字，这是具体的数字。不是「简洁」、不是「精炼」、不是「尽量短」。

但要注意：数字不是越严越好，而是要匹配你的实际需求。先跑几次不带限制的版本，看看自然长度落在哪个区间，然后用数字去固定那个区间。

五、用 scenario → action（情境 → 动作）取代模糊规则

Claude Code 不写「遇到错误要冷静处理」，它写的是：
If an approach fails, diagnose why before switching tactics — read the error, check your assumptions, try a focused fix. Don't retry the identical action blindly, but don't abandon a viable approach after a single failure either.
（如果一个方法失败了，先诊断原因再换策略——读错误信息、检查你的假设、尝试针对性修复。不要盲目重试同样的动作，但也不要因为一次失败就放弃一个可行的方法。）

这是一个完整的决策树：失败 → 先诊断 → 再修正 → 不盲目重试 → 也不轻易放弃。

套到文案场景：「如果素材是数据报告 → 用数据做开头。如果素材是产品更新 → 用功能变化做开头。如果素材是市场事件 → 用时间线做开头。」

这比写「根据素材类型调整开头」有效得多，因为模型不需要自己判断「调整」是什么意思。

六、把输出风格拆成两层：结构层和语气层

Claude Code 把「怎么组织内容」和「用什么语气」分成两个独立的 section。
# Output efficiency（输出效率）管结构——先说结论、跳过铺垫。
# Tone and style（语气与风格）管语气——不用 emoji、引用要标路径。

这两层不互相干扰。你可以要求「结构用倒金字塔（inverted pyramid）」但「语气用对话式（conversational）」，不会矛盾。

一个 section 定义「这篇推文的信息架构（information architecture）是什么」，另一个定义「用什么人设口吻说」。分开调整的弹性比混在一起大很多。

Anthropic 的工程师不是靠「写出聪明的话」来让模型听话，而是靠结构设计。每一条指令都是可以被单独验证、单独替换的模块。

如果你也在用 LLM 做内容生产，试试把你的 prompt 用这个框架重写一次。通常不需要加更多指令，只需要把现有的指令整理得更清楚。

@AnthropicAI @claudeai


## 元信息

- **作者**: Joooe｜NodeZ ([@0xJoooe](https://x.com/0xJoooe))
- **发布时间**: 2026-03-31T12:52:14.000Z
- **抓取时间**: 2026-04-10T00:44:39.254Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 393 · 🔄 64 · 💬 6 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2038962572519723317) — @0xJoooe (Joooe｜NodeZ)
[2] [Author page](/entities/authors/0xjoooe.md)
