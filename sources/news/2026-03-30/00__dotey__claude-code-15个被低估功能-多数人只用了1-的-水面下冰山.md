---
type: "X Tweet"
title: "Claude Code 15个被低估功能：多数人只用了1%的「水面下冰山」"
description: "[Claude Code的真正价值藏在Boris Cherny的私人清单里]  Claude Code创造者Boris Cherny亲自列了15个被低估的功能：移动端写代码（iOS/Android）、跨设备会话 teleport、远程控制本地会话、自动代码审查、5分钟定时任务……这些功能普通用户几乎不知道，但它们解决的是「真实工作流中的卡点」。  关键洞察：Claude Code的手机端不是让你在"
resource: "https://x.com/i/status/2038481514732691940"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-03-30T13:25:00.383Z"
x_tweet_id: "2038481514732691940"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-03-30T05:00:40.000Z"
x_engagement:
  likes: 858
  retweets: 194
  replies: 26
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Claude Code 15个被低估功能：多数人只用了1%的「水面下冰山」

## 摘要

[Claude Code的真正价值藏在Boris Cherny的私人清单里]

Claude Code创造者Boris Cherny亲自列了15个被低估的功能：移动端写代码（iOS/Android）、跨设备会话 teleport、远程控制本地会话、自动代码审查、5分钟定时任务……这些功能普通用户几乎不知道，但它们解决的是「真实工作流中的卡点」。

关键洞察：Claude Code的手机端不是让你在6寸屏上写复杂逻辑，而是「任务下发」——在地铁上启动一个任务，回到工位时结果已经在终端等着了。这是异步Agent工作流的教科书范式。

gakki：Boris的清单是一份「Agent工程最佳实践」的行业报告。多数人还在用Claude Code当增强版搜索，真正的玩家已经开始用它做跨设备、跨时区的分布式任务编排了。

## 原文

你日常用 Claude Code，用了多少功能？手机上写代码？语音编程？让 Claude 每 5 分钟自动帮你处理代码审查？

Claude Code 的创建者 Boris Cherny 列了 15 个他觉得被低估的功能。

【1】Claude Code 有移动端

Boris 说他有很多代码是在 iOS 上写的，不用开电脑就能改代码。操作方式：下载 Claude App（iOS 或 Android），左侧菜单里有个 Code 标签页。

【手机端更适合轻量级修改和任务下发，比如在地铁上让 Claude 开始跑一个任务，不是真的在 6 寸屏幕上写复杂逻辑。】

【2】会话可以在手机、网页、桌面端和终端之间来回切换

在终端运行 `claude --teleport` 或输入 `/teleport`，可以把云端会话拉到本地继续。反过来，用 `/remote-control` 可以从手机或网页远程控制本地正在运行的会话。

Boris 在设置里开启了"为所有会话启用远程控制"。

文档：https://t.co/E07xvGQM93

【解决的是一个真实痛点：工位上启动了长时间任务，人需要出门，但想随时看进度、追加指令。目前 Remote Control 还是研究预览阶段，同一时间只能远程控制一个会话。】

【3】/loop 和 /schedule：定时自动化

Boris 说这是 Claude Code 最强大的两个功能。可以设定 Claude 按固定间隔自动运行任务，最长持续一周。

他自己在本地跑着一堆循环：

- `/loop 5m /babysit`：每 5 分钟自动处理代码审查意见、自动 rebase、把 PR 护送到合并上线
- `/loop 30m /slack-feedback`：每 30 分钟根据 Slack 反馈自动提 PR
- `/loop /post-merge-sweeper`：自动补提 PR，处理之前审查中遗漏的评论
- `/loop 1h /pr-pruner`：每小时清理过时或不再需要的 PR

Boris 的建议：把工作流变成 skill + loop 的组合。

文档：https://t.co/uF14GJiVmm

【这可能是整个帖子里最有想象力的部分，把 Claude 从"你问它答"变成了后台持续运行的自动化工人。但有几个限制要注意：终端必须保持开启，/loop 任务最长跑三天（一周是通过桌面端的 /schedule 实现的），电脑不能休眠。另外，babysit 这种自动处理审查并推到生产的做法，前提是你有充分的测试覆盖，不建议在测试薄弱的项目里照搬。】

【4】Hooks：在代理生命周期中插入确定性逻辑

Hooks（钩子）可以在 Claude 运行过程中的特定节点自动执行预设逻辑：

- SessionStart：每次启动时动态加载上下文
- PreToolUse：每次执行 bash 命令前记录日志
- PermissionRequest：把权限请求发到 WhatsApp，远程批准或拒绝
- Stop：Claude 停下来时自动催它继续

文档：https://t.co/jPf1XgiR5n

【Hooks 类似 Git 的 pre-commit hook，但作用于 AI 代理的整个生命周期。这是 Claude Code 作为"代理平台"而非"编程助手"的关键设计，高级用户会喜欢，但学习成本不低。】

【5】Cowork Dispatch：远程操控桌面端

Boris 说他每天都用 Dispatch 来处理 Slack 消息、邮件、管理文件，不在电脑前也能用。

Dispatch 是 Claude 桌面应用的安全远程控制功能，可以使用你的 MCP 服务器、浏览器和电脑，前提是授权。

产品页面：https://t.co/2Cu35XFijB

【Dispatch 和前面的 Remote Control 容易混淆。简单区分：Remote Control 控制的是终端里的 Claude Code 会话，Dispatch 控制的是桌面端的 Claude 应用，后者能操作浏览器、文件系统，能做的事更多。Dispatch 目前只支持 macOS。】

【6】前端开发一定要装 Chrome 扩展

Boris 说，用 Claude Code 最重要的一点是给 Claude 一个验证输出的方式。

他的类比：让一个工程师做网站但不让他用浏览器，结果能好看吗？给他浏览器，他会自己写代码、自己看效果、自己迭代到满意。

Boris 每次做前端项目都装 Chrome 扩展，说比其他类似的 MCP 工具更稳定。

下载地址（Chrome/Edge）：https://t.co/AM61sLmG4P

【"给 AI 一个验证自己输出的方式"这条原则不只适用于前端。任何能让 Claude 看到自己工作结果的机制，跑测试、检查编译、预览效果，都能显著提升输出质量。可能是整个帖子里最值得记住的一条。】

【7】桌面端内置 Web 服务器预览

Claude 桌面端可以自动运行 Web 服务器并在内置浏览器里测试，不需要手动配置。命令行和 VSCode 通过 Chrome 扩展也能实现类似效果。

文档：https://t.co/5U0anp73A6

【8】会话分叉

两种方式：在当前会话里运行 `/branch`，或从命令行运行 `claude --resume <session-id> --fork-session`。

【探索不同方案时有用。让 Claude 做到一半，想试另一个方向，分叉出去两边互不影响。】

【9】/btw：边工作边问问题

Claude 执行任务的过程中，用 `/btw` 可以插入快速问题，不打断正在进行的工作。单轮问答，不会调用工具，但能看到当前会话的完整上下文。

【小功能但实用。相当于 Claude 在干活时你在旁边问了一句"顺便问一下……"。】

【10】Git Worktrees：并行开发的基础设施

Git 工作树（worktrees）允许你在同一个仓库里同时检出多个分支到不同目录，互不干扰。Claude Code 对工作树有深度支持。

Boris 说他随时有几十个 Claude 实例在跑，靠的就是工作树。用 `claude -w` 启动新的工作树会话，或在桌面端勾选"worktree"。不用 git 的用户可以通过 WorktreeCreate hook 自定义创建逻辑。

【"几十个实例同时跑"这种用法对订阅额度和机器性能都有要求。但即使只跑 2-3 个并行会话，工作树也比反复切分支高效得多。】

【11】/batch：大规模并行修改

/batch 先和你沟通需求，然后把任务扇出给多个工作树代理并行执行，数量可以是几十个、几百个甚至上千个。适用于大规模代码迁移和其他可并行化的工作。

【对"全仓库 API 改名""所有文件从格式 A 迁移到格式 B"这类批量操作很有价值，前提是你的任务确实可以并行化，而且有足够的测试来验证批量修改没出问题。】

【12】--bare：SDK 启动提速最多 10 倍

默认情况下，`claude -p`（或 TypeScript/Python SDK）启动时会搜索本地的 CLAUDE.md、settings 和 MCP 配置。但在非交互式场景下，你通常会通过 `--system-prompt`、`--mcp-config` 等参数显式指定加载内容，默认的搜索流程就成了浪费。

Boris 说这是最初设计 SDK 时的失误，未来版本会把 --bare 设为默认，现在需要手动加。

【写自动化脚本和 CI/CD 集成的人注意这条。加上 --bare 跳过不必要的配置加载，速度提升明显。】

【13】--add-dir：跨仓库工作

在一个仓库启动 Claude，用 `--add-dir`（或 `/add-dir`）让它看到并操作另一个仓库。也可以在团队的 settings.json 里配置 `additionalDirectories`，所有人启动时自动加载。

文档：https://t.co/PIP2NSAS2G

【14】--agent：自定义代理

在 `.claude/agents` 目录下定义代理，用 `claude --agent=<名字>` 启动。可以给代理设定专属的系统提示词和工具集。

文档：https://t.co/bQLePyxSxi

【自定义代理的价值在于专业化。与其让一个通用 Claude 处理所有事，不如为代码审查、写测试、写文档各创建一个专用代理，每个加载不同的上下文和工具。这和前面 skill + loop 的思路是一脉相承的。】

【15】/voice：语音编程

Boris 说他大部分代码是用语音说给 Claude 的，不是打字。

操作方式：命令行里运行 `/voice` 然后按住空格键说话；桌面端按语音按钮；iOS 上启用听写功能。目前支持 20 种语言。

【语音编程的效果取决于任务类型。描述功能需求、解释 bug、口述重构方案，语音可能比打字更快。但精确描述代码结构或变量命名时，打字更高效。】

Boris 在最后说他其实还想继续写但强迫自己停了，后续会发更多。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-03-30T05:00:40.000Z
- **抓取时间**: 2026-03-30T13:25:00.383Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 858 · 🔄 194 · 💬 26 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2038481514732691940) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
