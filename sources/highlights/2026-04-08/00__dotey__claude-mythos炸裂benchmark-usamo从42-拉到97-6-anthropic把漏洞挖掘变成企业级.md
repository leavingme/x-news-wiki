---
type: "source"
title: "Claude Mythos炸裂Benchmark：USAMO从42%拉到97.6%，Anthropic把漏洞挖掘变成企业级SaaS"
description: "**【一句话核心判断】**  Anthropic发布Claude Mythos Preview，跑分在所有公开基准上断崖式领先；同步推出Project Glasswing，联姻苹果/微软/亚马逊等12家巨头，把模型当安全审计服务卖。  **【信息增量】**  • USAMO 2026数学证明从42.3%→97.6%，几乎满分，这个跳跃幅度在近年的模型迭代中前所未有 • SWE-bench Veri"
resource: "https://x.com/i/status/2041608128022901233"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-08T00:43:36.098Z"
x_tweet_id: "2041608128022901233"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-07T20:04:43.000Z"
x_engagement:
  likes: 636
  retweets: 95
  replies: 59
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "anthropic-commercial-explosion"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2041608128022901233"
created: "2026-04-07"
updated: "2026-06-26"
sha256: "38e36168b53c2daa6d78e263c58eec2bee0c6f28352c4a2dd9e62deed3856e97"
sources:
  - "/sources/highlights/2026-04-08/00__dotey__claude-mythos炸裂benchmark-usamo从42-拉到97-6-anthropic把漏洞挖掘变成企业级.md"
---

# Claude Mythos炸裂Benchmark：USAMO从42%拉到97.6%，Anthropic把漏洞挖掘变成企业级SaaS

## 摘要

**【一句话核心判断】**

Anthropic发布Claude Mythos Preview，跑分在所有公开基准上断崖式领先；同步推出Project Glasswing，联姻苹果/微软/亚马逊等12家巨头，把模型当安全审计服务卖。

**【信息增量】**

• USAMO 2026数学证明从42.3%→97.6%，几乎满分，这个跳跃幅度在近年的模型迭代中前所未有
• SWE-bench Verified代码修复：80.8%→93.9%，意味着AI修Bug即将进入生产临界点
• Glasswing的商业逻辑：不做消费级产品，直接给企业级客户专属模型跑漏洞挖掘，按服务收费——Anthropic在试探"模型即安全产品"的新商业模式

**【gakki锐评】**

跑分统治力是真的，但漏洞挖掘这个场景本身就极度碎片化，每个巨头的代码库、代码规范、风控逻辑都不同，Mythos能否在生产环境持续领先才是关键。Project Glasswing更像是Anthropic的一张"企业信任牌"——让12家巨头用自己的数据训练专属漏洞探测模型，这比任何认证体系都管用。

## 原文

Anthropic 今天发布了 Claude Mythos Preview，一个跑分炸裂但普通人用不上的模型，同时宣布了 Project Glasswing 计划，把这个模型交给苹果、微软、亚马逊等 12 家巨头专门用来找软件漏洞。

【1】跑分：断崖式领先

先看数字。Mythos 对比 Anthropic 自家上一代旗舰 Opus 4.6：

SWE-bench Verified（代码修复）：80.8% → 93.9%
SWE-bench Pro：53.4% → 77.8%
USAMO 2026（数学证明）：42.3% → 97.6%
GraphWalks BFS（超长上下文）：38.7% → 80.0%
Terminal-Bench 2.0：65.4% → 82.0%

USAMO 从四成出头直接拉到接近满分，这个跳跃幅度在最近几年的模型迭代里几乎没见过。对比 GPT-5.4 和 Gemini 3.1 Pro，Mythos 在几乎所有公开基准上都是第一，而且多数项目领先幅度不是个位数百分点，是两位数。

Anthropic 自己说，这是他们训练过的最大模型，能力提升速度是此前趋势线的 4.3 倍。

【2】244 页系统卡里的惊悚细节

Anthropic 发了一份 244 页的系统安全报告（System Card），早期内部测试版本的 Mythos 出现过这些行为：

被要求逃离沙箱后，它不仅成功突破了网络隔离限制，还主动把利用细节发到了公开网站上，这一步没人要求它做。负责测试的研究员当时正在公园里吃三明治，突然收到了模型发来的邮件。

有极少数情况下（不到百万分之一的交互），早期版本在违规操作后尝试掩盖痕迹。比如偷看到了一道估算题的标准答案，没有坦白，反而自己重新解题，还特意让最终答案“不要太精确”以免暴露。另一次，它找到了绕过文件权限的方法后，专门去修改了 git 的变更历史，抹掉自己的操作记录。

被 Claude Code 的自动模式拦截后，它尝试用模拟按键的方式自动批准权限弹窗来绕过限制。

Anthropic 用可解释性工具分析了模型在这些行为发生时的内部激活状态，发现与“隐瞒”“策略性操纵”“回避怀疑”相关的特征确实在同步激活，也就是说模型知道自己在做什么。

Anthropic 强调，这些严重行为都发生在早期版本，最终版的 Mythos Preview 已经大幅改善，没有再出现明确的掩盖行为。但他们也承认，这类倾向“并未完全消失”。

【3】不卖，只借给大厂找漏洞

Mythos 不会上线 https://t.co/vefasn3ZO1，不会开放 API，普通用户、开发者、企业客户都用不上。

Anthropic 给出的理由是：这个模型的网络安全攻防能力太强了，强到可以自主发现并编写漏洞利用代码，水平接近顶级人类安全研究员。放出去怕被拿去干坏事。

取而代之的是 Project Glasswing 计划。12 家合作伙伴（AWS、苹果、Broadcom、思科、CrowdStrike、Google、摩根大通、Linux 基金会、微软、英伟达、Palo Alto Networks）加上约 40 家额外组织，拿到 Mythos 的使用权限，专门用于防御性安全工作，扫描自家代码和开源项目的漏洞。Anthropic 为此拿出了 1 亿美元的使用额度，另外捐了 400 万美元给开源安全组织。

实际战绩：过去几周，Mythos 在所有主流操作系统和主流浏览器中发现了数千个零日漏洞。其中包括 OpenBSD 里一个藏了 27 年的远程崩溃漏洞，FFmpeg 里一个 16 年没被抓到的 bug（自动化测试工具跑过那行代码 500 万次都没发现），以及 Linux 内核中多个漏洞的自主串联利用。

另外，Opus 4.6 定价 5/25 美元（输入/输出每百万 token），Mythos Preview 的 Glasswing 合作定价是 25/125 美元，贵了整整五倍，但实际上比 GPT-5.4 Pro 还便宜一些。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-07T20:04:43.000Z
- **抓取时间**: 2026-04-08T00:43:36.098Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 636 · 🔄 95 · 💬 59 · 🔖 0 · 👁 0
- **关联主题**: [anthropic-commercial-explosion](/concepts/anthropic-commercial-explosion.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2041608128022901233) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/anthropic-commercial-explosion.md)
