---
type: "X Tweet"
title: "Skills 设计的反直觉：核心价值是「不写」"
description: "**[Skill 的本质不是塞知识，而是画边界——把确定性逻辑全部下沉到脚本，让 Agent 只做理解决策]**  • Skill ≠ 长 Prompt：它是业务团队在 AI 时代的新交付形态，过去交付页面接口，现在交付「让 Agent 稳定完成某件事的方法论包」。 • 签名计算、渠道映射、错误分类、重试策略——全部从 Agent 手里拿回来，写成脚本。 • SKILL.md 是写给 Agent "
resource: "https://x.com/i/status/2039707154371018930"
tags:
  - "x-news"
  - "highlights"
  - "author:chenchengpro"
timestamp: "2026-04-03T00:42:40.437Z"
x_tweet_id: "2039707154371018930"
x_author: "陈成"
x_handle: "chenchengpro"
x_created_at: "2026-04-02T14:10:56.000Z"
x_engagement:
  likes: 195
  retweets: 42
  replies: 9
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Skills 设计的反直觉：核心价值是「不写」

## 摘要

**[Skill 的本质不是塞知识，而是画边界——把确定性逻辑全部下沉到脚本，让 Agent 只做理解决策]**

• Skill ≠ 长 Prompt：它是业务团队在 AI 时代的新交付形态，过去交付页面接口，现在交付「让 Agent 稳定完成某件事的方法论包」。
• 签名计算、渠道映射、错误分类、重试策略——全部从 Agent 手里拿回来，写成脚本。
• SKILL.md 是写给 Agent 的操作指南，不是技术文档：description 写触发场景，主文档做轻索引，细节下沉到 references/ 按需加载。

「文档写出来了，不等于 Agent 学会了」——这条坑最多人踩。

## 原文

看了内部某团队的 Skills 实战分享，两篇加起来一万多字，最大的收获不是怎么写 Skill，而是怎么「不写」。

几个反直觉的工程判断：

1/ Skill 的核心价值不是让模型"知道更多"，而是让模型在明确边界里知道该按什么顺序做、什么结果必须停下来。Skill ≠ 长 Prompt，它是业务团队在 AI 时代的一种新交付形态——过去交付页面和接口，现在交付"让 Agent 稳定完成某件事的方法论包"。

2/ 架构设计的第一优先级：把确定性逻辑从 Agent 手里拿回来。签名计算、渠道映射、错误分类、重试策略、跨能力数据格式——全部下沉到脚本。让 Agent 负责"理解用户想做什么"就够了，让它再负责拼接确定性流程，就是问题开始的地方。

3/ SKILL.md 不是技术文档，是 Agent 的操作指南。写给 Agent 看和写给人看完全是两回事——description 要写触发场景而不是功能简介，主文档做轻索引而非百科全书，细节下沉到 references/ 按需加载。"文档写出来了，不等于 Agent 学会了。"

4/ 多人协作写 Skill，最先统一的不是代码风格，而是边界。新增一个能力的最小交付必须四件齐套：可执行入口、业务逻辑、能力文档、总入口注册。少任何一个都不完整。

5/ 安全是门，不是分。存在硬编码凭证的 Skill，其他维度全满分也直接归零——安全不参与加权，它是准入门槛。

6/ 测试时执行体绝不能提前知道预期结果。他们早期把 expected outcome 传给了子 Agent，pass rate 虚高——模型在"迎合评测"而不是在执行 Skill。后来做了严格的 executor/grader 分离才解决。

7/ pass@k ≠ pass^k。单次成功率 75%，跑 3 次全部成功的概率只有 42%。"有能力但不稳定"是一种需要被识别的状态——你不敢在生产环境托付的那种。

8/ 最容易被忽视的假象：在强模型上拿高分。强模型会替写得不好的 Skill 兜底，真正的质量应该看中等模型上还能不能稳定工作。如果只有最强模型才能跑通，这个高分是借来的，不是 Skill 自己挣的。

一句话总结：不要再把 Skill 写成长 Prompt。真正好的 Skill，应该让 Agent 少猜一点，让系统多保证一点，让团队经验能留下来一点。


## 元信息

- **作者**: 陈成 ([@chenchengpro](https://x.com/chenchengpro))
- **发布时间**: 2026-04-02T14:10:56.000Z
- **抓取时间**: 2026-04-03T00:42:40.437Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 195 · 🔄 42 · 💬 9 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2039707154371018930) — @chenchengpro (陈成)
