---
type: "X Tweet"
title: "百度 Unlimited OCR 破解长文档 KV 缓存困局：让模型'眼睛只盯最近 128 个 token'，算力成本不随页数爆炸"
description: "百度 Unlimited OCR 用'滑动窗口 + 全局参考 token'架构，把长文档 OCR 从'逐页切分推理'变成'一口气读完'，KV 缓存容量恒定，计算成本不再随页数线性增长。  要点： - 传统 OCR：每页单独推理一次，模型记忆清空，KV 缓存随输出线性增长，长文档内存吃不消 - 百度方案：每个 token 生成时都看完整图像视觉 token + 提示词（全局参考），但只回看前 128"
resource: "https://x.com/i/status/2069211653460066393"
tags:
  - "x-news"
  - "highlights"
  - "author:vista8"
timestamp: "2026-06-23T01:18:41.370Z"
x_tweet_id: "2069211653460066393"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-06-23T00:11:16.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 百度 Unlimited OCR 破解长文档 KV 缓存困局：让模型'眼睛只盯最近 128 个 token'，算力成本不随页数爆炸

## 摘要

百度 Unlimited OCR 用'滑动窗口 + 全局参考 token'架构，把长文档 OCR 从'逐页切分推理'变成'一口气读完'，KV 缓存容量恒定，计算成本不再随页数线性增长。

要点：
- 传统 OCR：每页单独推理一次，模型记忆清空，KV 缓存随输出线性增长，长文档内存吃不消
- 百度方案：每个 token 生成时都看完整图像视觉 token + 提示词（全局参考），但只回看前 128 个已输出 token（局部回顾）
- KV 缓存变成固定容量队列，老 token 被新 token 挤出，内存和算力随页数恒定
- 类比人类抄书：眼睛盯原文 + 刚写的几行 + 下一个要写的字，不需要回看整本书

hakki 锐评：这是把'人怎么抄书'翻译成 attention mask 的工程胜利，技术思路聪明但别吹成 AGI——OCR 任务的'长程依赖'本质是局部连贯，全局参考 token 只是兜底。真正的多模态长文档理解，还得看跨页实体关联、指代消解和版面结构能不能做对，否则只是把'分页 bug'换成了'长上下文 bug'。

## 原文

主流OCR解析方案是把多页文档切成一页一页，每页单独跑一次推理，最后把结果拼起来。

每处理一页，模型记忆清空一次。
为啥？因注意力机制问题，输出越长，KV缓存越大，内存吃不消。

对比人类抄书，眼睛只盯三个地方：原书全文、刚写下的几行、下一个要写的字。
人只需最近的上下文，就能在低认知负荷下完成超长任务。

百度这个 Unlimited OCR，就想模拟人类抄书的注意力模式。

每生成一个 token，模型都会看完整的「参考 token」，也就是整张图像的视觉 token 加提示词，原文始终全局可见。

但在输出侧，只回看前面 128 个 token，就像抄书时只瞄一眼刚写的那几行。

这样每生成一个新 token，最老的就被挤出去，KV 缓存变成一个固定容量队列，这样就能确保生成过程中计算成本和内存占用都不会逐步增加。

这个做法真的很聪明！怪不得效果这么好。

新智元原始文章：
https://t.co/EcCX3I0LT4

GitHub：
https://t.co/E0myXcEaXY

Hugging Face：
https://t.co/OwI1WBdDKr


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-06-23T00:11:16.000Z
- **抓取时间**: 2026-06-23T01:18:41.370Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2069211653460066393) — @vista8 (向阳乔木)
