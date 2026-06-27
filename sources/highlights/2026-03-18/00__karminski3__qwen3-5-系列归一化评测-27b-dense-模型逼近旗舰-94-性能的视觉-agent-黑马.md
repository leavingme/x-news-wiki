---
type: "source"
title: "Qwen3.5 系列归一化评测：27B Dense 模型逼近旗舰 94% 性能的视觉 Agent 黑马"
description: "**[开源模型性价比版图重新划定]** • 27B Dense 模型在视觉 Agent（浏览器/手机 GUI 操作）能力上超越全系，长上下文与指令遵循表现优异 • 通用 Agent 场景（工具调用）35B-A3B MoE 与 27B 性能持平，但激活参数更少、性价比更高 • 9B 全面优于 4B（即使量化后体积相近），122B-A10B 与 27B 性能差距有限仅胜在知识量  OpenClaw 用"
resource: "https://x.com/i/status/2030814479366434961"
tags:
  - "x-news"
  - "highlights"
  - "author:karminski3"
timestamp: "2026-03-18T16:28:00.973Z"
x_tweet_id: "2030814479366434961"
x_author: "karminski-牙医"
x_handle: "karminski3"
x_created_at: "2026-03-09T01:14:37.000Z"
x_engagement:
  likes: 265
  retweets: 26
  replies: 26
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-capability-benchmark"
x_source: "bookmark"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2030814479366434961"
created: "2026-03-09"
updated: "2026-06-26"
sha256: "585167b893ca8e3ab422b139aebccbf0008fb8014fff4b5cc28da9014768c413"
sources:
  - "/sources/highlights/2026-03-18/00__karminski3__qwen3-5-系列归一化评测-27b-dense-模型逼近旗舰-94-性能的视觉-agent-黑马.md"
---

# Qwen3.5 系列归一化评测：27B Dense 模型逼近旗舰 94% 性能的视觉 Agent 黑马

## 摘要

**[开源模型性价比版图重新划定]**
• 27B Dense 模型在视觉 Agent（浏览器/手机 GUI 操作）能力上超越全系，长上下文与指令遵循表现优异
• 通用 Agent 场景（工具调用）35B-A3B MoE 与 27B 性能持平，但激活参数更少、性价比更高
• 9B 全面优于 4B（即使量化后体积相近），122B-A10B 与 27B 性能差距有限仅胜在知识量

OpenClaw 用户的选型结论已清晰：通用 Agent 无脑 35B-A3B，视觉任务上 27B，边缘场景 9B 是甜点。模型分层正在加速落地场景的精细化匹配。

## 原文

给大家带来归一化的Qwen3.5系列模型分数汇总, 惊喜的发现是 27B dense 这个模型的确不以言, 基本达到了期间模型 Qwen3.5-397B-A17B 94% 的性能. 尤其是视觉Agent能力 (比如操作浏览器/手机等图形界面) 是这些里面最强的. 以及长上下文能力, 指令遵循也很不错.

通用 Agent 能力 (比如工具调用， 就是 OpenClaw 的绝大多数应用场景) 看上去 35B-A3B 和 27B 是一样的, 也有好多朋友问我, 我个人的主观感受是 27B 更强一丢丢, 但是带来的提升完全不值得上个 27B 的 dense 模型 (仅通用Agent能力来说哈), 还是 35B-A3B 这种激活量小的 MoE 更具性价比.

另外9B无论什么时候都是优于4B的, 即使9B量化到5bit, 跟4B的8bit差不多大小了, 我也还是推荐使用9B.

不过122B-A10B 就没太大的性价比了, 从分数上来看跟 27B 没有太大差距. 只不过知识量会大一些.

总结的话, OpenClaw 无脑上 35B-A3B, 传统任务比如文件处理, 写代码, 文本总结等能用27B尽量用27B, 9B 是最后的选择, 宁可 9B-5bit 量化也别 4B. 
#qwen35 #openclaw


## 元信息

- **作者**: karminski-牙医 ([@karminski3](https://x.com/karminski3))
- **发布时间**: 2026-03-09T01:14:37.000Z
- **抓取时间**: 2026-03-18T16:28:00.973Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 265 · 🔄 26 · 💬 26 · 🔖 0 · 👁 0
- **关联主题**: [agent-capability-benchmark](/concepts/agent-capability-benchmark.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2030814479366434961) — @karminski3 (karminski-牙医)
[2] [Author page](/entities/authors/karminski3.md)
[3] [Related topic](/concepts/agent-capability-benchmark.md)
