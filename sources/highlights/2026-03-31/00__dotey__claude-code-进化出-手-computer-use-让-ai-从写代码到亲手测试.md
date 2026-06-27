---
type: "source"
title: "Claude Code 进化出「手」：Computer Use 让 AI 从写代码到亲手测试"
description: "**[AI 编码工具正式跨越「写完即走」的边界，进入「写完即测」的闭环时代]**  • Anthropic 将 Computer Use 能力原生集成进 Claude Code，支持 macOS 桌面操控：编译、启动、点击、截图、修 bug 全流程自动化 • 安全机制设计成熟：单应用授权、终端窗口屏蔽、Esc 中断、高权限应用额外警告，体现对生产环境的敬畏 • 研究预览阶段仅限 Pro/Max 订"
resource: "https://x.com/i/status/2038671395631108220"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-03-31T00:43:33.833Z"
x_tweet_id: "2038671395631108220"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-03-30T17:35:12.000Z"
x_engagement:
  likes: 180
  retweets: 30
  replies: 17
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2038671395631108220"
created: "2026-03-30"
updated: "2026-06-26"
sha256: "47c525cbb8955f5bd4afd4609ab8bddb4ad8a3255a8a2ccf947977fd69c5c0cc"
sources:
  - "/sources/highlights/2026-03-31/00__dotey__claude-code-进化出-手-computer-use-让-ai-从写代码到亲手测试.md"
---

# Claude Code 进化出「手」：Computer Use 让 AI 从写代码到亲手测试

## 摘要

**[AI 编码工具正式跨越「写完即走」的边界，进入「写完即测」的闭环时代]**

• Anthropic 将 Computer Use 能力原生集成进 Claude Code，支持 macOS 桌面操控：编译、启动、点击、截图、修 bug 全流程自动化
• 安全机制设计成熟：单应用授权、终端窗口屏蔽、Esc 中断、高权限应用额外警告，体现对生产环境的敬畏
• 研究预览阶段仅限 Pro/Max 订阅，暗示这是高端功能分层策略，进一步拉大与免费/低价竞品的体验鸿沟

Claude Code 正在从「代码生成器」进化为「端到端交付代理」。这不是功能叠加，而是角色跃迁——AI 开始拥有「手」了。

## 原文

Claude Code 新增"电脑操控（computer use）"功能：写完代码直接帮你点鼠标测试

Anthropic 给 Claude Code 加了一个新能力：直接操控你的 Mac 桌面。写完代码之后，Claude 可以自己编译、启动应用、点击按钮、截图验证，整个流程不用你碰鼠标。

这个功能叫 computer use，目前是研究预览阶段，仅限 macOS，需要 Pro 或 Max 订阅。

具体能干什么？比如你让 Claude 写一个 macOS 菜单栏应用，它可以自己写 Swift 代码、编译、启动、逐个点击界面上的按钮，发现 bug 就修，修完再验证。再比如一个 Electron 应用的注册流程有问题，你只需要告诉 Claude 去测，它会自己打开应用、点击注册、逐屏截图。

安全机制上做了几层限制：每个应用需要单独授权，终端窗口不会被截图（防止 Claude 看到自己的输出），按 Esc 随时中断，同一时间只允许一个 Claude 会话控制屏幕。涉及终端、Finder、系统设置这类高权限应用时，会额外弹出警告。

启用方式是在 Claude Code 里输入 /mcp，启用 computer-use 服务器，首次使用时 macOS 会要求授予辅助功能和屏幕录制权限。

这个功能填补了一个明显的缺口：之前 Claude Code 能写代码、跑命令行，但涉及图形界面的操作就束手无策。现在等于把"写代码"和"测代码"串成了一个完整循环。对于做桌面应用、本地 Electron 应用、iOS 模拟器测试的开发者来说，省掉了手动验证 UI 的时间。

不过目前限制也不少：只支持 macOS，不支持 Linux 和 Windows；必须是交互式会话，不能用 -p 参数的非交互模式；Team 和 Enterprise 计划也暂时用不了。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-03-30T17:35:12.000Z
- **抓取时间**: 2026-03-31T00:43:33.833Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 180 · 🔄 30 · 💬 17 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-ecosystem](/concepts/claude-code-ecosystem.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2038671395631108220) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/claude-code-ecosystem.md)
