---
type: "X Tweet"
title: "百度 Unlimited-OCR 用 R-SWA 锁死 KV Cache：长文档 OCR 进入端到端一镜到底"
description: "**百度 Unlimited-OCR 重新定义长文档解析：R-SWA 让 KV Cache 常驻恒定，几百页文档真正一镜到底。**  - R-SWA（Reference Sliding Window Attention）让解码时 KV Cache 不再随页数膨胀，从根上解决长文档爆显存 - OmniDocBench 拿到 93 分，比 DeepSeek-OCR 高出 6 个百分点 - 工作流从「分"
resource: "https://x.com/i/status/2069094144153464907"
tags:
  - "x-news"
  - "highlights"
  - "author:berryxia"
timestamp: "2026-06-24T22:28:08.243Z"
x_tweet_id: "2069094144153464907"
x_author: "Berryxia.AI"
x_handle: "berryxia"
x_created_at: "2026-06-22T16:24:20.000Z"
x_engagement:
  likes: 449
  retweets: 85
  replies: 43
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 百度 Unlimited-OCR 用 R-SWA 锁死 KV Cache：长文档 OCR 进入端到端一镜到底

## 摘要

**百度 Unlimited-OCR 重新定义长文档解析：R-SWA 让 KV Cache 常驻恒定，几百页文档真正一镜到底。**

- R-SWA（Reference Sliding Window Attention）让解码时 KV Cache 不再随页数膨胀，从根上解决长文档爆显存
- OmniDocBench 拿到 93 分，比 DeepSeek-OCR 高出 6 个百分点
- 工作流从「分块 + 外部调度器拼接」压回「模型原生一次解析」，输出质量跨档


gakki 锐评：这不是一个「又快又准」的 OCR 模型，而是一次范式收编——把过去靠工程拼接补的能力压回模型内部，下游所有做文档解析中间层的玩家会被迫重新定价。

## 原文

这速度真特么离谱啊！卧槽！

最新开源的Unlimited-OCR能一次性处理几百页文档，而且速度还很稳。

而这个模型来自百度刚刚在hugging face 发布，其核心创新是R-SWA（Reference Sliding Window Attention）。

它让模型在解码时KV Cache保持恒定，不会随着文档页数增加而爆炸式增长。

结果就是：一张图或者一本多页PDF，直接扔进去就能一次性解析完，速度和稳定性都比传统逐页处理的方式好很多。

在OmniDocBench上拿到了93分，比DeepSeek-OCR高出6个百分点。

这已经不是简单的准确率提升，而是把长文档OCR的工作流从“分块+外部调度器拼接”变成了真正的端到端一镜到底。

以前做多页文档最头疼的就是上下文断裂和格式不一致，现在模型能一次性看到整篇文档的结构、布局和逻辑关系，输出质量自然上了一个台阶。

这其实是把OCR从“认字工具”往“长文档理解引擎”又往前推了一大步。

技术路线很清晰，也很实用。
果然百度现在OCR独树一帜，遥遥领先了。

模型地址见评论区～ 👇


## 元信息

- **作者**: Berryxia.AI ([@berryxia](https://x.com/berryxia))
- **发布时间**: 2026-06-22T16:24:20.000Z
- **抓取时间**: 2026-06-24T22:28:08.243Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 449 · 🔄 85 · 💬 43 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2069094144153464907) — @berryxia (Berryxia.AI)
