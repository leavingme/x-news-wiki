---
type: "source"
title: "Claude Code官方「多平台入口」战略落地：Telegram/Discord插件正式发布"
description: "**[Anthropic正式下场Agent多平台入口争夺战]** • Claude Code官方发布Telegram和Discord插件，提供完整配置流程与权限锁定机制（allowlist策略） • 支持通过Unix域套接字本地签名，实现「本地Agent + 云端模型」的混合部署架构 • 标志着Anthropic从「编辑器插件」向「IM原生Agent」的战略扩张，与Telegram Bot生态正面"
resource: "https://x.com/i/status/2034819697858978070"
tags:
  - "x-news"
  - "highlights"
  - "author:op7418"
timestamp: "2026-03-20T12:43:02.533Z"
x_tweet_id: "2034819697858978070"
x_author: "歸藏(guizang.ai)"
x_handle: "op7418"
x_created_at: "2026-03-20T02:29:55.000Z"
x_engagement:
  likes: 63
  retweets: 10
  replies: 22
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-multi-platform"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2034819697858978070"
created: "2026-03-20"
updated: "2026-06-26"
sha256: "29bd3dad017cc12efabc602922b27d49ead41c1be6c324ae646c427e8eb1abf9"
sources:
  - "/sources/highlights/2026-03-20/00__op7418__claude-code官方-多平台入口-战略落地-telegram-discord插件正式发布.md"
---

# Claude Code官方「多平台入口」战略落地：Telegram/Discord插件正式发布

## 摘要

**[Anthropic正式下场Agent多平台入口争夺战]**
• Claude Code官方发布Telegram和Discord插件，提供完整配置流程与权限锁定机制（allowlist策略）
• 支持通过Unix域套接字本地签名，实现「本地Agent + 云端模型」的混合部署架构
• 标志着Anthropic从「编辑器插件」向「IM原生Agent」的战略扩张，与Telegram Bot生态正面交锋

**gakki锐评：** 官方插件的发布意味着「入口层」竞争进入白热化——不再只是开发者玩CLI，而是直接抢占普通用户的IM入口。谁控制了对话界面，谁就控制了Agent的分发权。

## 原文

Claude Code 官方远程连接 Telegram 和 Discord 插件配置流程。

具体的操作方式 - Telegram：

创建机器人：
在 Telegram 中打开 BotFather，创建后复制他给你的 Token

安装插件：
/plugin install telegram@claude-plugins-official

配置 Token：
/telegram:configure <token>

使用命令启动：
claude --channels plugin:telegram@claude-plugins-official

Telegram 配对：
打开 Telegram 发送任何信息获取到配对码；
在 Claude Code 里面发送 /telegram:access pair <code>

锁定访问权限：
/telegram:access policy allowlist

具体的操作方式 - Discord：

创建 Discord Bot 并加进自己的服务器
 ▫ 去 ￼ → New Application
 ▫ 创建 Bot，点「Reset Token」拿到 token
 ▫ 在 Bot 设置里打开 Message Content Intent
 ▫ 在 OAuth2 → URL Generator 里勾选 `bot`
 ▫ 然后给它这些权限：View Channels / Send Messages / Send Messages in Threads / Read Message History / Attach Files / Add Reactions
 ▫ 打开生成的链接，把 bot 邀请进自己的服务器

安装插件：
/plugin install discord@claude-plugins-official

配置 Token：
/discord:configure <Discord Bot token>

命令启动 ClaudeCode：
claude --channels plugin:discord@claude-plugins-official

配对 Discord 机器人：
私信你的机器人发配对码；

回到 Claude Code 发：
/discord:access pair <配对码>
/discord:access policy allowlist


## 元信息

- **作者**: 歸藏(guizang.ai) ([@op7418](https://x.com/op7418))
- **发布时间**: 2026-03-20T02:29:55.000Z
- **抓取时间**: 2026-03-20T12:43:02.533Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 63 · 🔄 10 · 💬 22 · 🔖 0 · 👁 0
- **关联主题**: [agent-multi-platform](/concepts/agent-multi-platform.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2034819697858978070) — @op7418 (歸藏(guizang.ai))
[2] [Author page](/entities/authors/op7418.md)
[3] [Related topic](/concepts/agent-multi-platform.md)
