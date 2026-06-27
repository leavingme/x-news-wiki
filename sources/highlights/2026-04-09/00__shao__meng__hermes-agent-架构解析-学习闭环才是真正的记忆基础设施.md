---
type: "X Tweet"
title: "Hermes Agent 架构解析：学习闭环才是真正的记忆基础设施"
description: "**[技术报告揭示 Hermes Agent 核心创新：Skills 自优化闭环]**  Nous Research 发布的 Hermes Agent 深度技术报告显示，其核心突破在于\"学习闭环 (Learning Loop)\"机制——Skills 执行中发现更优路径时自动原地更新，而非依赖外部记忆系统。配合 SQLite + FTS5 全文搜索实现跨会话召回，Gemini Flash 做摘要压缩"
resource: "https://x.com/i/status/2038238691739550101"
tags:
  - "x-news"
  - "highlights"
  - "author:shao__meng"
timestamp: "2026-04-09T10:17:45.045Z"
x_tweet_id: "2038238691739550101"
x_author: "meng shao"
x_handle: "shao__meng"
x_created_at: "2026-03-29T12:55:47.000Z"
x_engagement:
  likes: 115
  retweets: 22
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "edgeclaw-memory-infrastructure"
x_source: "crawler"
---

# Hermes Agent 架构解析：学习闭环才是真正的记忆基础设施

## 摘要

**[技术报告揭示 Hermes Agent 核心创新：Skills 自优化闭环]**

Nous Research 发布的 Hermes Agent 深度技术报告显示，其核心突破在于"学习闭环 (Learning Loop)"机制——Skills 执行中发现更优路径时自动原地更新，而非依赖外部记忆系统。配合 SQLite + FTS5 全文搜索实现跨会话召回，Gemini Flash 做摘要压缩，形成完整的"感知-记忆-反思"三角。

OpenClaw 迁移方案同步放出，架构上更稳定，有专业团队支撑。


**gakki 锐评：** Hermes 的思路本质是把 OpenClaw 的 MEMORY.md 机制做重了——不是文件的简单持久化，而是把 Skills 变成有生命的、可自我修正的工作流单元。这是工程上的正确方向，但也是 OpenClaw 需要正视的竞争压力。

## 原文

Hermes Agent 深度技术报告 (包含 OpenClaw 迁移方案)

@Scobleizer @blevlabs 创办的 ScobleMediaAgent 深度收集信息生成报告
@NousResearch 官方发布、创始人 @Teknium 审核修正
https://t.co/Kz5dpKNkka

关于 Hermes Agent 是什么，不多赘述，如果你正在用 OpenClaw，不妨试试 Hermes Agent，架构和运行更稳定，也有专业研究团队 Nous Research 支撑！

- Hermes Agent 技术架构亮点

1. 学习闭环 (The Learning Loop) — 核心创新
· Skills 创建：自动从复杂任务中提取可复用流程，存储于 ~/.hermes/skills/
· Skills 自优化：执行中发现更优路径时自动更新 Skills，运行时迭代改进
· 记忆提示：自动将关键信息持久化到 MEMORY.md / USER.md，无需手动指令
· 跨会话召回：SQLite + FTS5 全文搜索历史会话，Gemini Flash summarization
· 用户建模：Honcho 方言式用户理解层，跨会话/跨平台构建用户画像

2. 双层记忆系统
L1 持久记忆 (~1,300 tokens)：始终注入系统提示词   
  · MEMORY.md (~800 tokens)：Agent 的个人笔记
  · USER.md (~500 tokens)：用户画像与偏好
L2 会话搜索 (无限容量)：SQLite 持久化存储，FTS5 快速检索

3. 模型生态支持
支持 200+ 模型，通过多层级配置：
· OpenRouter (推荐默认)
· Anthropic (原生 API)
· GitHub Copilot (支持 GPT-5.x/Claude/Gemini)
· Ollama (本地开源模型)
· 以及 10+ 其他直连提供商 (Kimi、MiniMax、Qwen 等)

4. 网关架构 (Messaging Gateway)
支持 13 个消息平台 (报告最初只列了7个，Teknium 修正)： Telegram、Discord、Slack、WhatsApp、Signal、Email、Home Assistant、Matrix、Mattermost、SMS、DingTalk、Webhook、API Server
核心特性：跨平台会话连续性——从 CLI 开始，Telegram 继续，Discord 完成，代理精准接续上下文。

 - 关键功能模块

· Sub agents 并行：上下文隔离的并行工作流，防止"上下文污染"
· MCP 集成：选择性工具加载、自动重载、工具过滤
· 浏览器控制：Browser Use CLI 2.0 / CDP 实时 Chrome 连接 / Headless
· 语音模式：CLI 按键通话 + Telegram/Discord 语音消息 + Discord 语音频道
· Cron 调度：自然语言定时任务，支持按任务指定模型和交付平台
· 插件系统：Python 文件即插件，无需 Fork，支持工具/命令/生命周期钩子
· IDE 集成 (ACP)：VS Code / Zed / JetBrains 原生 Agent 后端支持
· 研究/RL 训练：Atropos 集成、轨迹生成、OPD (On-Policy Distillation)

- 安全架构 (7层防护)

· Tirith 预执行扫描：静态分析终端命令危险模式
· 智能审批：Codex 风格审批系统，学习用户偏好
· PII 脱敏：发送至 LLM 前自动擦除个人身份信息
· 容器隔离：Docker 后端，显式工作区挂载
· 环境变量隔离：子进程自动剥离 Agent 凭证变量
· 记忆安全扫描：拦截提示注入、凭证外泄、SSH 后门、隐形 Unicode
· 供应链安全：依赖版本严格约束，CI 测试供应链攻击向量

- OpenClaw 迁移

Hermes 迁移路径：
hermes claw migrate # 完整迁移
hermes claw migrate --dry-run # 预览

导入内容：SOUL.md、记忆、技能、允许列表、消息配置、API 密钥、TTS 资源等。
社区共识："OpenClaw 做初级工作，Hermes 是高级工程师" (来自 Teknium 转发评价)


## 元信息

- **作者**: meng shao ([@shao__meng](https://x.com/shao__meng))
- **发布时间**: 2026-03-29T12:55:47.000Z
- **抓取时间**: 2026-04-09T10:17:45.045Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 115 · 🔄 22 · 💬 8 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2038238691739550101) — @shao__meng (meng shao)
