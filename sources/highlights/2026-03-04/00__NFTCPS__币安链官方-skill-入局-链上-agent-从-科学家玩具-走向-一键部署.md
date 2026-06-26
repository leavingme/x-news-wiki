---
type: "X Tweet"
title: "币安链官方 Skill 入局：链上 Agent 从「科学家玩具」走向「一键部署」"
description: "**[主流公链正式拥抱 Agent 入口，区块链自动化进入「自然语言操作」时代]**  • BNB Chain 官方发布 OpenClaw Skill，覆盖查询、转账、代币操作、合约交互全链路 • 将 MCP 协议能力结构化喂给 AI，用户无需手动查文档即可链上操作 • 信号：公链竞争从「开发者生态」转向「Agent 生态」，「科学家」门槛被 AI 抹平  — **gakki 锐评：** 链上自动"
resource: "https://x.com/i/status/2028738705859702909"
tags:
  - "x-news"
  - "highlights"
  - "author:NFTCPS"
timestamp: "2026-03-04T01:02:28.037Z"
x_tweet_id: "2028738705859702909"
x_author: "鸟哥 | 蓝鸟会🕊️"
x_handle: "NFTCPS"
x_created_at: "2026-03-03T07:46:14.000Z"
x_engagement:
  likes: 206
  retweets: 106
  replies: 19
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-economic-autonomy"
x_source: "crawler"
---

# 币安链官方 Skill 入局：链上 Agent 从「科学家玩具」走向「一键部署」

## 摘要

**[主流公链正式拥抱 Agent 入口，区块链自动化进入「自然语言操作」时代]**

• BNB Chain 官方发布 OpenClaw Skill，覆盖查询、转账、代币操作、合约交互全链路
• 将 MCP 协议能力结构化喂给 AI，用户无需手动查文档即可链上操作
• 信号：公链竞争从「开发者生态」转向「Agent 生态」，「科学家」门槛被 AI 抹平

—
**gakki 锐评：** 链上自动化一直是有门槛的黑客游戏，现在 grandma 可以用自然语言「科学家」了。这标志着区块链交互范式的质变——从「写脚本」到「说人话」。

## 原文

币安链BNB Chain官方也出Skill了，可以在OpenClaw上部署使用制作批量撸毛脚本！秒变科学家！

这个仓库 bnb-chain/bnbchain-skills 是 BNB Chain 官方为 AI 代理（特别是OpenClaw龙虾、 Cursor、Claude 等中的 AI 助手）提供的技能包，主要目的是让大模型能更方便地理解和操作 BNB Chain MCP（Model Context Protocol）服务器。

仓库地址：https://t.co/st4lHWHvWA

核心只有一个主要技能：bnbchain-mcp-skill

它本质上是把 BNB Chain MCP 提供的全部工具能力，以结构化知识 + 安装指引的形式喂给 AI，让 AI 能自动帮你完成区块链相关操作，而不需要你自己到处查文档或手动配置。

这个 skill 主要能做什么（核心能力分类）

链上基本查询：最新区块、历史区块、交易详情、receipt、日志等

钱包相关：查询余额（BNB + 所有代币）、发起转账

代币操作（ERC-20 / BEP-20）：余额查询、转账、批准（approve）、查询符号/精度/总量

NFT 操作（ERC-721 / ERC-1155）：持有查询、转账、查询 metadata

智能合约交互：读方法（call）、写方法（send transaction）、部署合约、查询合约代码/ABI

ERC-8004 Agent 相关（BNB Chain 特有）：注册 AI Agent、解析 agent 地址、更新 agent 信息

Greenfield 去中心化存储：创建/列出/删除 bucket，上传/下载/查询 object，支付、group 管理等

简单来说，就是几乎所有常见的 EVM 链上操作 + BNB Chain 特有的 Greenfield 和 Agent 功能，都可以通过自然语言让 AI 帮你执行（前提是你本地跑了 MCP server，或者用官方的）。

一些特别实用的应用场景（2026 年视角）

1️⃣快速链上数据查询 / 监控
“给我查一下 BSC 上 0x... 这个地址最近 50 笔交易”  
“opBNB 上这个 PancakeSwap 池子现在的 TVL 和 APR 是多少？”  
“Greenfield 上我有哪些 bucket，每个里面有多少 object？”

2️⃣批量转账 / 空投小工具
“用我的钱包把 100 USDT 分别转给这 20 个地址，每人 5 USDT”  
“写个脚本给我 500 个测试地址发 0.1 test BNB”

3️⃣智能合约快速调试 / 调用
“调用 0x... 这个合约的 getUserInfo 方法，参数是 123”  
“帮我 estimateGas，然后把这个方法发到链上，参数是 xxx”  
“这个合约的源代码是什么？有没有漏洞？”

4️⃣AI Agent 身份注册与管理（ERC-8004 相关，最有 BNB Chain 特色）
“把我当前 MCP 注册成一个 ERC-8004 Agent，名字叫 GrokOnBNB”  
“解析 0xabc... 这个地址对应的 agent 信息是什么？”
→ 以后你的 AI 助手可以拥有链上身份，能被其他 dApp 发现和调用。

5️⃣去中心化存储快速操作（Greenfield）
“在 Greenfield 上创建一个叫 my-nft-metadata 的 bucket，公开访问”  
“把本地文件夹 ./images 里的所有图片上传到 bucket my-nft，生成链接给我”  
“查询我这个 object 的支付状态，还有多少没付”

6️⃣开发 / 教学 / Demo 场景  
Cursor / Claude 里直接说：“教我怎么在 opBNB 上部署一个 ERC-20 代币” → AI 会一步步写代码、部署、验证  
“分析这个交易为什么失败，gas 用完了吗？”  
写文档、生成测试脚本、批量验证 NFT 元数据是否上传成功

7️⃣DeFi 组合操作（稍微复杂一点但很实用）  
“把我钱包里所有 BNB 换成 USDT，然后通过 PancakeSwap 加到 CAKE-BNB 池子里”  
“监控这个地址，只要收到超过 10 BNB 就自动转到冷钱包”


## 元信息

- **作者**: 鸟哥 | 蓝鸟会🕊️ ([@NFTCPS](https://x.com/NFTCPS))
- **发布时间**: 2026-03-03T07:46:14.000Z
- **抓取时间**: 2026-03-04T01:02:28.037Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 206 · 🔄 106 · 💬 19 · 🔖 0 · 👁 0
- **关联主题**: [agent-economic-autonomy](/concepts/agent-economic-autonomy.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2028738705859702909) — @NFTCPS (鸟哥 | 蓝鸟会🕊️)
[2] [Author page](/entities/authors/nftcps.md)
[3] [Related topic](/concepts/agent-economic-autonomy.md)
