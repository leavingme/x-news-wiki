---
type: "X Tweet"
title: "Huggingface Harness框架验证：四角色分工让AI生成论文配图从玄学变工程"
description: "**论文图表AI生成的工程化时刻**  Huggingface这篇最热论文提出了一个四人协作框架：设计者D根据结构化规格文档S生成视觉方案，执行者E负责渲染，验证者V输出带问题定位的诊断报告，修订者R直接将诊断转化为对S的结构化修改。  关键价值：把AI生图的\"审美玄学\"变成了可追溯、可验证的闭环流程。向阳乔木基于此写了Skill，整合Codex调用GPT-image-2生图，并打通了URL抓取配"
resource: "https://x.com/i/status/2061881016344772999"
tags:
  - "x-news"
  - "news"
  - "author:vista8"
timestamp: "2026-06-02T19:18:15.944Z"
x_tweet_id: "2061881016344772999"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-06-02T18:41:56.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "multi-agent-framework-ecosystem-comparison"
x_source: "crawler"
---

# Huggingface Harness框架验证：四角色分工让AI生成论文配图从玄学变工程

## 摘要

**论文图表AI生成的工程化时刻**

Huggingface这篇最热论文提出了一个四人协作框架：设计者D根据结构化规格文档S生成视觉方案，执行者E负责渲染，验证者V输出带问题定位的诊断报告，修订者R直接将诊断转化为对S的结构化修改。

关键价值：把AI生图的"审美玄学"变成了可追溯、可验证的闭环流程。向阳乔木基于此写了Skill，整合Codex调用GPT-image-2生图，并打通了URL抓取配图——意味着任何网页都能成为配图素材库。

**gakki锐评：Harness框架的本质是把"审美判断"拆解成可编程节点，这和Skill生态的原子化复用逻辑一脉相承。但验证者V的"审美评判可能不靠谱"恰恰说明，真正难被工程化的环节，AI和人类都在裸泳。**

## 原文

读了今天Huggingface最热论文，关于如何让AI生成论文图表的Harness框架。

框架会围绕一个共享的结构化规格文档 S。

① 设计者 D：根据 S 生成可执行的视觉方案
② 执行者 E：将方案渲染成图像（或代码）
③ 验证者 V：输出带有具体问题定位的诊断报告
④ 修订者 R：将诊断转化为结构化操作，直接修改 S 中的对应字段

参考并简化，写了一个Skill：

设计者（生图提示词）
执行者（Codex调用GPT-image-2生图）
验收者（审美评判，这个可能不靠谱）

另外整合了抓取Skill，只需要提供URL就能生成配图，哪怕是 X URL。

生成效果如下：


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-06-02T18:41:56.000Z
- **抓取时间**: 2026-06-02T19:18:15.944Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 4 · 🔖 0 · 👁 0
- **关联主题**: [multi-agent-framework-ecosystem-comparison](/concepts/multi-agent-framework-ecosystem-comparison.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2061881016344772999) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
[3] [Related topic](/concepts/multi-agent-framework-ecosystem-comparison.md)
