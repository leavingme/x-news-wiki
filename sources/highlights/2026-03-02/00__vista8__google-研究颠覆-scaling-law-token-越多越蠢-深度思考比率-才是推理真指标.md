---
type: "X Tweet"
title: "Google 研究颠覆 Scaling Law：Token 越多越蠢，「深度思考比率」才是推理真指标"
description: "**[推理质量与 Token 长度脱钩]** - 实验发现生成 Token 数与准确率呈 -0.54 负相关，「写满卷子」不等于高分 - 提出「深度思考比率(DTR)」新指标：衡量每个 Token 在模型内部的迭代修改层数，与准确率强相关 0.83 - 仅用 DTR 筛选答案即可减半推理成本并获得更好效果  这项研究给「长思考=高质量」的迷信泼了冷水。未来推理模型的优化方向，可能从「堆长度」转向「"
resource: "https://x.com/i/status/2028376109235245490"
tags:
  - "x-news"
  - "highlights"
  - "author:vista8"
timestamp: "2026-03-02T08:04:57.045Z"
x_tweet_id: "2028376109235245490"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-03-02T07:45:24.000Z"
x_engagement:
  likes: 119
  retweets: 14
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Google 研究颠覆 Scaling Law：Token 越多越蠢，「深度思考比率」才是推理真指标

## 摘要

**[推理质量与 Token 长度脱钩]**
- 实验发现生成 Token 数与准确率呈 -0.54 负相关，「写满卷子」不等于高分
- 提出「深度思考比率(DTR)」新指标：衡量每个 Token 在模型内部的迭代修改层数，与准确率强相关 0.83
- 仅用 DTR 筛选答案即可减半推理成本并获得更好效果

这项研究给「长思考=高质量」的迷信泼了冷水。未来推理模型的优化方向，可能从「堆长度」转向「精炼度」——这对算力成本敏感的本地 Agent 部署是重大利好。

## 原文

Google最新论文Think Deep, Not Just Long (2026)有意思！

对比测试了GPT-OSS/DeepSeek-R1等推理模型，发现：

① 生成token越多，准确率反而越低（相关性-0.54）

就像考试时，写满卷子的人不一定分高

② 提出"深度思考比率"（DTR）概念

不看生成多少token，看每个token在内部经历多少层修改才稳定。

DTR和准确率强相关0.83，真是一个好指标啊，主要看模型的深度思考占比。

而且只看前50个token就能做出预测答案准确率。

另外，用深度思考比率DTR筛选答案，只需一半推理成本就能达到更好效果。

根据跟人很像，关键问题上的深度思考最重要，避免表面勤奋的“过度思考”。

地址见评论


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-03-02T07:45:24.000Z
- **抓取时间**: 2026-03-02T08:04:57.045Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 119 · 🔄 14 · 💬 3 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2028376109235245490) — @vista8 (向阳乔木)
