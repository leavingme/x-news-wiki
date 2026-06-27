---
type: "source"
title: "Crypto Agent的幻觉危机：QMD如何用「记忆减法」拯救交易AI"
description: "**[币安AI交易Agent的致命伤不是策略，是上下文过载导致的幻觉胡编]** • 实测：长上下文输入让AI生成「充满Bug、连基础回测都跑不通的半成品」 • QMD（Shopify创始人开发的本地语义搜索引擎）方案：BM25+向量+LLM重排序，只喂2-3段精华 • 效果：Token消耗降低95%，提速5-50倍，成本砍掉90%  gakki 锐评：Agent金融化的瓶颈不在交易所API，在记忆"
resource: "https://x.com/i/status/2032301129204449622"
tags:
  - "x-news"
  - "highlights"
  - "author:biquanliergou"
timestamp: "2026-03-13T12:42:48.380Z"
x_tweet_id: "2032301129204449622"
x_author: "币圈李二狗"
x_handle: "biquanliergou"
x_created_at: "2026-03-13T03:42:02.000Z"
x_engagement:
  likes: 57
  retweets: 11
  replies: 47
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 88
x_related_topic: "ai-crypto-agent-infra"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2032301129204449622"
created: "2026-03-13"
updated: "2026-06-26"
sha256: "d36410f62e7e8ab6fb8205e5254b4b133ae8e94badf0a814ba2bbd67605d65fc"
sources:
  - "/sources/highlights/2026-03-13/88__biquanliergou__crypto-agent的幻觉危机-qmd如何用-记忆减法-拯救交易ai.md"
---

# Crypto Agent的幻觉危机：QMD如何用「记忆减法」拯救交易AI

## 摘要

**[币安AI交易Agent的致命伤不是策略，是上下文过载导致的幻觉胡编]**
• 实测：长上下文输入让AI生成「充满Bug、连基础回测都跑不通的半成品」
• QMD（Shopify创始人开发的本地语义搜索引擎）方案：BM25+向量+LLM重排序，只喂2-3段精华
• 效果：Token消耗降低95%，提速5-50倍，成本砍掉90%

gakki 锐评：Agent金融化的瓶颈不在交易所API，在记忆架构。给AI「减肥」比给AI「投喂」更难，但这是交易Agent从玩具变工具的关键一跃。

## 原文

我来个直接的！怎么用OpenClaw + QMD在币安交易所赚钱！

大家看到这个肯定想的是怎么让OpenClaw帮你去赚钱，余额加加加

但是其实大多数人安装完发现的是：余额减减减，哈哈哈

很多人用AI写代码或做项目，结果框框一顿操作，最后出来的是一堆充满Bug、连基础回测都跑不通的半成品。

大部分都是这样，所以问题出在哪？不是OpenClaw不好用

而是你没给它装上他的眼睛，精准的思维系统

怎么解决这个问题？：给AI的记忆做减法，别每次都塞一堆长上下文，容易幻觉、胡编乱造。

真正高效的做法是用QMD（由Shopify创始人Tobi开发的本地语义搜索引擎），专为OpenClaw这类AI Agent设计。

QMD像一个超级图书管理员：它先在本地用混合搜索（BM25全文+向量语义+LLM重排序）快速检索出最相关的2-3段精华内容，再精准喂给模型。

实测能降低95% Token消耗、提速5-50倍、成本砍掉90%以上，还零API隐私风险。拒绝瞎折腾，从今天开始给你的AI配上QMD这个导航。

安装简单（Bun一键或直接集成OpenClaw），效果立竿见影：代码质量飙升、上下文清晰、产出就能用了。

具体流程：

阶段一：环境部署（4步横向流程）

📦 安装 SQLitemacOS: brew install sqlite
Ubuntu: sudo apt install sqlite3
验证: sqlite3 --version

🔧 安装 QMDBun: bun install -g github:tobi/qmd
npm: npm install -g @tobilu/qmd
验证: qmd --version

⚙️ 配置 OpenClaw编辑 ~/.openclaw/openclaw.json
启用 backend: "qmd"
设置 timeoutMs: 8000

🚀 重启并建立索引openclaw gateway restart
qmd update --dir .
测试: qmd search "测试"

阶段二：核心工作流（4步纵向流程）

📚 本地固化（喂养）下载官方 API 文档
Clone GitHub 文档到本地
执行 qmd update 固化知识库

🔍 提纯报告（消化）AI 通过 QMD 检索工具深度阅读
提炼鉴权、订单薄、下单核心逻辑
生成重点报告并保存

🏗️ 制定框架（骨架）根据提炼内容制定 Python 开发框架
拆解详细开发步骤
框架记录固化保存

💻 编写代码（实现）按框架逐模块编写代码
进行回测调试
避免一次性写几百行

右侧 - 核心优势：
✅ 精准记忆提取
✅ 大幅节省 Token
✅ 减少 AI 幻觉

✅ 代码质量提升
✅ 官方文档锚定

最后在由自己发布指令去币安交易

#Binance #OpenClaw


## 元信息

- **作者**: 币圈李二狗 ([@biquanliergou](https://x.com/biquanliergou))
- **发布时间**: 2026-03-13T03:42:02.000Z
- **抓取时间**: 2026-03-13T12:42:48.380Z
- **精选类别**: ✨ 亮点
- **优先级**: 88
- **互动**: ❤️ 57 · 🔄 11 · 💬 47 · 🔖 0 · 👁 0
- **关联主题**: [ai-crypto-agent-infra](/concepts/ai-crypto-agent-infra.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2032301129204449622) — @biquanliergou (币圈李二狗)
[2] [Author page](/entities/authors/biquanliergou.md)
[3] [Related topic](/concepts/ai-crypto-agent-infra.md)
