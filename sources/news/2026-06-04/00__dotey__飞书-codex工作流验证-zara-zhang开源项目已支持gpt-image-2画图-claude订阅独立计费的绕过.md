---
type: "X Tweet"
title: "飞书+Codex工作流验证：Zara Zhang开源项目已支持GPT Image 2画图，Claude订阅独立计费的绕过方案"
description: "**一句话核心判断**  Zara Zhang维护的feishu-claude-code-bridge项目在6月15日Claude订阅独立计费前紧急升级，追加Codex支持，用户可用飞书控制Codex调用GPT Image 2完成「抓取翻译→生成中文手绘信息图→落地飞书文档」的全流程。  **信息增量** - 绕过Claude订阅涨价的新路径：Codex CLI + 飞书bridge可完全替代Cl"
resource: "https://x.com/i/status/2062415262893134321"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-04T07:18:20.231Z"
x_tweet_id: "2062415262893134321"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-04T06:04:51.000Z"
x_engagement:
  likes: 16
  retweets: 1
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 飞书+Codex工作流验证：Zara Zhang开源项目已支持GPT Image 2画图，Claude订阅独立计费的绕过方案

## 摘要

**一句话核心判断**

Zara Zhang维护的feishu-claude-code-bridge项目在6月15日Claude订阅独立计费前紧急升级，追加Codex支持，用户可用飞书控制Codex调用GPT Image 2完成「抓取翻译→生成中文手绘信息图→落地飞书文档」的全流程。

**信息增量**
- 绕过Claude订阅涨价的新路径：Codex CLI + 飞书bridge可完全替代Claude Code的文档处理能力，且不走Claude订阅额度
- AI画图能力首次被纳入飞书协作流：GPT Image 2的手绘教育风图片直出飞书，验证了「多模型路由+飞书作为统一协作层」的可行性
- 项目从Claude Code单支持扩展到Codex双支持，体现了在API政策收紧下的快速适配能力

**gakki锐评**
这个案例的真正价值不在于绕过了Claude的订阅费，而在于它验证了一个更底层的逻辑：当官方工具变贵，下游工作流（飞书bridge）会自发地长出替代节点。绕路本身是信号，说明工具层的商业化正在加速推动开源工作流的横向整合。


## 原文

上次推荐的 Zara Zhang 的开源项目 feishu-claude-code-bridge ，可以把飞书和你本机的 Claude Code 连接起来，解决了用飞书保存所有消息历史，以及随时将飞书的信息转发给Claude的问题，相当使用的一个功能。

现在有个问题是再过几天到 6 月 15 日，Claude 订阅计划对 claude -p 和 Agent SDK 的使用将独立计费，不走订阅额度。

好在 Zara Zhang 这几天刚把项目升级了，也能支持飞书连接 Codex 了，只要你本机装了 codex cli，登录了 ChatGPT 账号或者配置了 API，就能使用，不用担心 claude -p 收费的问题了。另外还带来一个好处，就是 Codex 是有调用 GPT Image 2 画图能力的，所以你现在可以从飞书指挥 Codex 画图，画完的图片直接就到飞书，插入文档。

比如我的一个常用指令如下：
> 请帮我抓取并翻译 {url}
> 然后根据翻译的内容画一张中文手绘教育风信息图 
> 最后把文章和图片一起创建一份飞书文档

连接步骤和之前介绍的连接 Claude Code 方法一致，只是运行的命令行变成了：

> lark-channel-bridge run --profile codex

具体可以看项目的说明说，中英文版都有，写的很详细：
https://t.co/PS44XaFjFv


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-04T06:04:51.000Z
- **抓取时间**: 2026-06-04T07:18:20.231Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 16 · 🔄 1 · 💬 4 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2062415262893134321) — @dotey (宝玉)
