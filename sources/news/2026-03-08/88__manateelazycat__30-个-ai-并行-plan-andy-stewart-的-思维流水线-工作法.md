---
type: "X Tweet"
title: "30 个 AI 并行 Plan：Andy Stewart 的「思维流水线」工作法"
description: "**[人机协作的效率天花板被重新定义]** • 每天同时运行 30+ 个 AI 实例，90% 时间用于「聊天规划」，10% 用于执行 • 核心洞察：用 Guard 机制复盘「为什么代码被改坏」，建立正向反馈循环 • 人脑从「思考-执行-测试」的横跳中解放，效率提升 10 倍  这不是用 AI 写代码，是用 AI 扩展「认知并行度」。"
resource: "https://x.com/i/status/2030323543716814906"
tags:
  - "x-news"
  - "news"
  - "author:manateelazycat"
timestamp: "2026-03-08T01:01:49.750Z"
x_tweet_id: "2030323543716814906"
x_author: "Andy Stewart"
x_handle: "manateelazycat"
x_created_at: "2026-03-07T16:43:49.000Z"
x_engagement:
  likes: 43
  retweets: 10
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 88
x_related_topic:
x_source: "crawler"
---

# 30 个 AI 并行 Plan：Andy Stewart 的「思维流水线」工作法

## 摘要

**[人机协作的效率天花板被重新定义]**
• 每天同时运行 30+ 个 AI 实例，90% 时间用于「聊天规划」，10% 用于执行
• 核心洞察：用 Guard 机制复盘「为什么代码被改坏」，建立正向反馈循环
• 人脑从「思考-执行-测试」的横跳中解放，效率提升 10 倍

这不是用 AI 写代码，是用 AI 扩展「认知并行度」。

## 原文

很多人问我AI编程为什么这么快的原因？

我觉得有三个点：

1. 思路清晰：做为有研发背景的产品经理，我每天无时无刻不在想功能逻辑、内在需求和任务分解，加上懒猫清单高效管理，我在给AI任务之前已经是逻辑清晰目标明确的 “小任务”， 因为任务小，所以上下文小，所以AI精准打击，bug少

2. 善用Plan模式，很多人说Plan模式不就是 /plan 吗，有什么稀奇的？耗费人能量的是思考，AI也是，所以要提高效率，就要用很多 Plan 并行，我每天运行30多个AI，每个AI都用Plan和它聊天，Review它的计划。这样我90%的时间都在聊天，一旦30多个计划细节边界都聊清除，剩下的事情就很简单：执行、测试、Commit。关键是并行 Plan 可以节省你 90% 的时间， 而且把人的精力划分成上午思考，下午执行，这样避免人脑在思考、执行和测试之前来回横跳，效率自然就高得多了

3. 多用Guard，一旦AI把代码写对了，或者好不容易把AI中途改坏的代码又拉回来了，我最喜欢就是和AI盘点，为什么中途被改坏了？是文档需求不明确？还是代码逻辑有冲突？还是测试脚本过期了？这些把事情做对以后的盘点，并把盘点的内容再次融入到文档、代码和CI中的习惯，会减少以后增加功能的时候AI把已有功能改坏的几率，少回归，自然效率就高了

总结一下就是：目标清晰、并行Plan、盘点正确的原因

----------------------------

分享一下，我和AI盘点一次懒猫读书开发过程回归bug后，AI给的最后结论：

  - 这次修好的“正确规则”不是单点改动，而是三层规则组合；旧的 guard 只保护了第一层，所以后续 AI 很容易在第二、三层回归。
  - 从你贴的日志看，很多跳转里 stableCfi 明显早于 effectiveTarget，但随后出现了 epub-note-jump-final-visibility，说明目标标注已经可见。也就是说：笔记跳转成功判定应以“标注是否可见”为准，不应以
    stableCfi 是否逼近 target CFI 为准。
  - 这正好和旧分页微调逻辑冲突：旧逻辑会看到 stableCfi < targetCfi 就继续 nudge，结果把已经可见的标注再推走。

  我看到的冲突

  - 代码历史冲突
      - src/composables/useRenderer.ts:301 现在是“优先 start CFI，其次 range CFI，最后才兜底 end CFI”。
      - 但历史上 3b9e6e1 曾把规则改成“优先 end CFI”。这和更早版本“标注导航默认使用 start CFI”相反，属于直接覆盖旧正确规则。
  - guard 保护不完整
      - tools/epub_jump_guard_baseline.json:31 现在只锁了入口规则：const targetCfi = hasMeaningfulEpubCfi(startCfi) ? startCfi : rangeCfi
      - 但它没有锁下面这些这次证明很关键的行为：
          - annotation 分页对齐优先使用 range CFI
          - annotation 跳转后必须做可见性检查
          - 只要标注已可见，就禁止继续 auto-nudge
          - nudge 方向要基于“目标是否在当前页窗前/后”，不是只基于 stableCfi 与 target 的简单比较
  - 文档缺失
      - 现有只有分页残影文档 docs/epub-pagination-guard.md:1
      - 没有专门固化“EPUB 笔记跳转规则”的文档，所以后面改搜索、TTS、分页对齐时，很容易把 annotation jump 也按搜索/TTS 的思路一起改坏。
  - 库层噪声会误导修复
      - 你日志里的 No startContainer found for ... 来自 epubjs 自己：node_modules/epubjs/src/epubcfi.js:972
      - 这说明“range CFI 解析失败”是常见库层现象，不能据此推导应该继续翻页；否则又会回到这次的回归路径。

  从日志反推出的新规则

  - 入口选择：annotation jump 应优先 start CFI，不是 end CFI
  - 页内对齐：paginated 模式下应优先用 range CFI 做对齐，而不是只拿 start CFI
  - 成功判定：以标注 DOM 或 CFI range 在当前页可见为准
  - 微调条件：仅当“当前页不可见”时才允许 nudge
  - 微调方向：基于当前页窗 vs 目标区间的位置关系，不是简单比较 stableCfi 和 target

  我建议固化到 guard / 文档里的新底线

  - src/composables/useRenderer.ts:301 继续锁死 annotation 入口优先 start CFI
  - src/components/reader/EpubRenderer.vue:9029 附近增加 guard：annotation paginated align 必须允许用 range CFI
  - src/components/reader/EpubRenderer.vue:9047、src/components/reader/EpubRenderer.vue:9314 附近增加 guard：annotation jump 必须存在 post-display visibility check / final visibility check
  - src/components/reader/EpubRenderer.vue:9066、src/components/reader/EpubRenderer.vue:9132 附近增加 guard：visible 时禁止继续 nudge
  - 补一份单独文档，明确 annotation jump 与 search jump / TTS page turn 的规则不同，不能复用“逼近 target CFI”心智模型


## 元信息

- **作者**: Andy Stewart ([@manateelazycat](https://x.com/manateelazycat))
- **发布时间**: 2026-03-07T16:43:49.000Z
- **抓取时间**: 2026-03-08T01:01:49.750Z
- **精选类别**: 📰 头条
- **优先级**: 88
- **互动**: ❤️ 43 · 🔄 10 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2030323543716814906) — @manateelazycat (Andy Stewart)
[2] [Author page](/entities/authors/manateelazycat.md)
