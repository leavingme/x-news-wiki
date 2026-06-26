---
type: "X Tweet"
title: "文件系统比 RAG 和 MCP 更懂 AI Agent：Unix 哲学才是 AI 落地的正确抽象"
description: "**[代码幻觉是数据问题，不是模型问题——把整个 Web 挂载成文件系统才是解法]**  AI 写代码出现幻觉，根源在于训练数据滞后（API 每天变更，模型知识停留在数月前）。RAG 有分块丢失关键函数签名的缺陷，MCP 每个工具需要 JSON Schema 消耗上下文。解决方案：将文档网站直接挂载为文件系统，AI 预训练阶段已内化 open/read/write/close 操作。  · Uni"
resource: "https://x.com/i/status/2041330844481053003"
tags:
  - "x-news"
  - "news"
  - "author:shao__meng"
timestamp: "2026-04-07T12:44:24.952Z"
x_tweet_id: "2041330844481053003"
x_author: "meng shao"
x_handle: "shao__meng"
x_created_at: "2026-04-07T01:42:54.000Z"
x_engagement:
  likes: 36
  retweets: 7
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 文件系统比 RAG 和 MCP 更懂 AI Agent：Unix 哲学才是 AI 落地的正确抽象

## 摘要

**[代码幻觉是数据问题，不是模型问题——把整个 Web 挂载成文件系统才是解法]**

AI 写代码出现幻觉，根源在于训练数据滞后（API 每天变更，模型知识停留在数月前）。RAG 有分块丢失关键函数签名的缺陷，MCP 每个工具需要 JSON Schema 消耗上下文。解决方案：将文档网站直接挂载为文件系统，AI 预训练阶段已内化 open/read/write/close 操作。

· Unix「一切皆文件」哲学 50 年后适配 AI Agent
· Web 变成可seek的文件系统，文档即代码，代码即文档
· FilesystemTool 比任何协议层抽象都更接近 LLM 的本质

这个观点把 RAG 和 MCP 的局限性戳穿了——过度工程化的协议层，反而不如最朴素的 UNIX 设计。

## 原文

Unix 哲学延续：为什么文件系统比 RAG 和 MCP 更懂 AI Agent，把整个 Web 装进文件系统是正确方向吗？

# 核心问题：代码幻觉是数据问题，而非模型问题

@arlanr 指出，AI 写代码时出现幻觉，根源不在于模型能力不足，而在于训练数据滞后——API 每天都在变更，而模型的知识停留在数月甚至数年前。
现有解决方案的局限：
· RAG：将文档切片嵌入，检索相关片段。问题在于答案可能分散在多个页面，或关键函数签名在分块过程中丢失。
· MCP：每个工具需要 JSON Schema 和描述，消耗上下文窗口，增加误用风险。

# 核心方案：将文档网站挂载为文件系统

哲学基础：Unix 的"一切皆文件"
Unix 在 50 年前就解决了类似问题——设备、进程、套接字都抽象为文件，统一使用 open/read/write/close 操作。AI Agent 在预训练阶段已经接触了数十亿 token 的文件系统交互数据（tree、grep、find、cat 等），这些不是需要学习的新工具，而是已经内化的能力。
正如 @jerryjliu0 所言：一个拥有文件系统工具和代码解释器的 Agent，比拥有 100+ MCP 工具的 Agent 更具通用性。

实现架构
1. 索引层 - 爬取文档网站，转为文件
尊重 llms.txt，自动检测 OpenAPI 规范，智能裁剪 URL 公共前缀（如 /docs/）
2. 服务层 - 暴露文件系统操作 API
/load（全量加载）、read、grep、ls、tree、find，gzip 压缩，5 分钟缓存
3. 壳层 - 客户端运行
基于 just-bash（TypeScript 实现的 bash 解释器），文件系统为内存中的 JS 对象，命令在进程内执行

关键设计决策：
· 无容器/无沙箱：文档查询是只读的静态文本操作，不需要进程隔离。启动时间从 30-120 秒（冷索引）降至 ~100ms（缓存命中）。
· 共享命名空间：docs.stripe. com 索引一次，全局共享，无需认证（公开文档）。
· 懒加载：大型站点（1000+ 页面）先加载文件树，内容按需获取。


## 元信息

- **作者**: meng shao ([@shao__meng](https://x.com/shao__meng))
- **发布时间**: 2026-04-07T01:42:54.000Z
- **抓取时间**: 2026-04-07T12:44:24.952Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 36 · 🔄 7 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2041330844481053003) — @shao__meng (meng shao)
[2] [Author page](/entities/authors/shao-meng.md)
