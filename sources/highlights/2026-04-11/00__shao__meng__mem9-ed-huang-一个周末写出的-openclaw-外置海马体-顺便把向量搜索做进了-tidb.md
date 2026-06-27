---
type: "X Tweet"
title: "Mem9：Ed Huang 一个周末写出的 OpenClaw「外置海马体」，顺便把向量搜索做进了 TiDB"
description: "**[OpenClaw 记忆基础设施的关键拼图终于补上]**  Mem9 由 TiDB 创始人 Ed Huang 打造，定位为 OpenClaw 的云端持久记忆层。解决了 AI Agent 重启失忆、换机器重建上下文、团队知识无法复用三大痛点。基于 TiDB Cloud Starter（免费 25GB + 2.5 亿请求/月），原生支持向量+关键词混合搜索，无需额外向量数据库。  · 跨设备同步 "
resource: "https://x.com/i/status/2036087756632285518"
tags:
  - "x-news"
  - "highlights"
  - "author:shao__meng"
timestamp: "2026-04-11T00:44:20.448Z"
x_tweet_id: "2036087756632285518"
x_author: "meng shao"
x_handle: "shao__meng"
x_created_at: "2026-03-23T14:28:44.000Z"
x_engagement:
  likes: 125
  retweets: 37
  replies: 9
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "edgeclaw-memory-infrastructure"
x_source: "crawler"
---

# Mem9：Ed Huang 一个周末写出的 OpenClaw「外置海马体」，顺便把向量搜索做进了 TiDB

## 摘要

**[OpenClaw 记忆基础设施的关键拼图终于补上]**

Mem9 由 TiDB 创始人 Ed Huang 打造，定位为 OpenClaw 的云端持久记忆层。解决了 AI Agent 重启失忆、换机器重建上下文、团队知识无法复用三大痛点。基于 TiDB Cloud Starter（免费 25GB + 2.5 亿请求/月），原生支持向量+关键词混合搜索，无需额外向量数据库。

· 跨设备同步 + API Key 一键重连记忆空间——「数字永生」的基础设施版
· 团队多 Agent 共享记忆池——Agent 协作从点对点变成网络效应
· 用已有 SQL 数据库做向量搜索——工程上的务实选择 vs 追新词

**gakki锐评：** 记忆是 Agent 真正从「工具」变成「分身」的前提。Mem9 的价值不在于技术多前沿，而在于它是第一个认真做商业级持久记忆的 OpenClaw 原生组件。

## 原文

Mem9：OpenClaw 的云端持久记忆层 ~ 跨设备同步 · 团队共享 · 一键恢复

核心定位
@mem9_ai 是 OpenClaw 生态的"外置记忆海马体"，据说是数据库大佬 Ed Huang 在一个周末搞出来的。关于这个大佬，他是 TiDB 的联合创始人兼 CTO，全球最知名的开源分布式数据库项目的核心缔造者之一。

今天我们先重点看看 mem9 ——让 AI 助手突破单次会话限制，实现真正的长期记忆，核心解决 OpenClaw 等 AI Agents 的几个痛点：
· 每次重启后失忆：云端持久存储，跨设备同步
· 换机器需重建上下文：API Key 一键重连相同记忆空间
· 本地记忆文件易丢失：云备份 + 本地双保险
· 团队知识无法复用：多 Agent 共享同一记忆池

关键设计亮点
1. 基于 TiDB Cloud Starter
Mem9 选择 TiDB Cloud Starter 作为底层存储，这是一个务实的选择：
· 免费额度：25GB 存储 + 2.5 亿请求/月，足以支撑个人和小团队使用
· 原生向量类型：无需额外的向量数据库，天然支持向量+关键词混合搜索
· 服务器端自动嵌入：使用 EMBED_TEXT 功能，无需自己调用 OpenAI API
· MySQL 兼容：可随时迁移到自建 TiDB 或 MySQL

2. 无状态架构
· 插件端零状态，所有记忆存于云端
· 支持无限水平扩展，任意实例共享同一记忆
· 多 Agent 协作成为可能（Claude Code、OpenCode、OpenClaw 可共享同一记忆池）

3. 安装即用的极简体验（仅需三步）
第一步 获取 API Key：curl -X POST https://api.mem9 .ai/v1alpha1/mem9s
第二步 安装插件：openclaw plugins install @ mem9/mem9
第三步 配置和重启：openclaw.json → 重启 → 完成

4. 全生命周期自动捕获
·每次 LLM 调用前自动注入相关记忆
· /reset 前自动保存会话摘要
· Agent 结束时捕获最后响应

核心工具和集成方式
支持的集成方式
· Claude Code：Hooks + Skills，会话开始时自动加载记忆，结束时自动保存
· OpenCode：插件 SDK，系统变换注入记忆，空闲时自动捕获
· OpenClaw：内存插件，替换内置内存槽位，框架管理生命周期
· 任意 HTTP 客户端：REST API，直接调用 mnemo-server 接口

几个核心工具
· memory_store：持久化存储
· memory_search：混合检索
· memory_get/update/delete：单条管理
· before_prompt_build 等 Hooks：自动注入上下文

差异化竞争力
相比通用记忆方案，Mem9 的精准设计：
· 生态深度集成：针对 OpenClaw 优化，Hooks 自动运行无需人工干预
· 网络感知安装：自动检测大陆网络环境，无缝切换 npm 镜像
· 版本兼容路由：智能识别 OpenClaw 版本，自动应用正确配置格式
· 导入优先流程：引导用户先迁移历史记忆，而非空跑测试

开源地址
https://t.co/A1qKYVsCU2
Skills 地址
https://t.co/swJsKrU7Hp


## 元信息

- **作者**: meng shao ([@shao__meng](https://x.com/shao__meng))
- **发布时间**: 2026-03-23T14:28:44.000Z
- **抓取时间**: 2026-04-11T00:44:20.448Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 125 · 🔄 37 · 💬 9 · 🔖 0 · 👁 0
- **关联主题**: [edgeclaw-memory-infrastructure](/concepts/edgeclaw-memory-infrastructure.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2036087756632285518) — @shao__meng (meng shao)
[2] [Author page](/entities/authors/shao-meng.md)
[3] [Related topic](/concepts/edgeclaw-memory-infrastructure.md)
