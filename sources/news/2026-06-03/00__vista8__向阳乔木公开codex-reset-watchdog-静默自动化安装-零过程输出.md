---
type: "X Tweet"
title: "向阳乔木公开codex-reset-watchdog：静默自动化安装+零过程输出"
description: "**[一句话核心判断]**  codex-reset-watchdog 登场，标志 Agent 工程正在从「督战模式」进化到「无人值守模式」。  **信息增量：** - 静默安装 + 只在阻塞时汇报，Agent 执行流开始追求「零噪音」 - skill installation workflow 优先，clone 降级为 fallback——skill 生态正在吞噬传统 repo 模式 - 脚本 "
resource: "https://x.com/i/status/2062020999143706780"
tags:
  - "x-news"
  - "news"
  - "author:vista8"
timestamp: "2026-06-03T04:18:40.431Z"
x_tweet_id: "2062020999143706780"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-06-03T03:58:11.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 向阳乔木公开codex-reset-watchdog：静默自动化安装+零过程输出

## 摘要

**[一句话核心判断]**

codex-reset-watchdog 登场，标志 Agent 工程正在从「督战模式」进化到「无人值守模式」。

**信息增量：**
- 静默安装 + 只在阻塞时汇报，Agent 执行流开始追求「零噪音」
- skill installation workflow 优先，clone 降级为 fallback——skill 生态正在吞噬传统 repo 模式
- 脚本 check_once.mjs + .codex/config.toml 组合，说明有人在认真封装 Codex 可靠性补丁

**影响：**
- 受益者：高频使用 Codex 的独立开发者，可减少 70%+ 人工介入
- 信号意义：Agent 输出的「克制设计」正在从理念变成工程规范


gakki 锐评：又一个工程师用脚本投票——人类只该出现在 Agent 真正卡住的时候。过程即噪音，沉默才是美德。但「只在阻塞时回复」这个设计边界很微妙：谁来定义什么是阻塞？

## 原文

请静默安装、初始化并启用 codex-reset-watchdog：
https://t.co/fzKH8I1sBa

只在两种情况中途回复我：需要我授权某个操作，或遇到必须由我处理的阻塞。
除此之外，不要输出过程进度、工具参数细节、命令尝试、重试过程、原始 JSON 或 state 文件内容。请自己完成下面任务，最后只给一段简洁 setup 总结。

任务：
1. 优先使用 Codex 的 skill installation workflow 安装这个 GitHub repo，skill 名称用 codex-reset-watchdog。没有 installer 时再 clone repo。
2. 找到已安装或克隆出来的源目录，确认其中包含 SKILL.md、scripts/check_once.mjs、references/automation-prompt.md、.codex/config.toml。
3. 将运行所需文件准备到当前 workspace 根目录：SKILL.md、README.md、README.zh-CN.md、env.example、.codex/、agents/、references/、scripts/、images/。保留现有 .git，不要创建嵌套 repo，不要覆盖本地 env 或 .env。
4. 在当前 workspace 根目录确认存在 SKILL.md、scripts/check_once.mjs、references/automation-prompt.md、.codex/config.toml。
5. 在当前 workspace 根目录运行 node scripts/self_test.mjs。
6. 运行 node scripts/check_once.mjs --prime-state --json 创建基线 state。
7. 运行 node scripts/check_once.mjs --dry-run --json 确认 Dayclaw public source、JSON 解析和 state 去重正常。
8. 如果 node scripts/check_once.mjs 因 sandbox/network 权限失败，只请求允许 node scripts/check_once.mjs 这个窄入口重跑；不要请求 full access。若仍是 DNS/HTTPS 或 state 写入问题，按运行级问题总结，不要当成 reset/no-reset 结论。
9. 读取 references/automation-prompt.md 的完整内容作为 Automation prompt。
10. 使用 `automation_update` 创建或更新名为 Codex Reset Watchdog 的 cron/project Automation。若当前工具列表没有 Automation 工具，先搜索 `automation_update`。先查找同名或同 id 的现有 Automation，有则 update，不要创建重复项。创建/更新时使用这些字段，字段名和值不要替换成 UI 文案：`mode=create` 或 `mode=update`、`kind=cron`、`name=Codex Reset Watchdog`、`rrule=FREQ=HOURLY;INTERVAL=1`、`status=ACTIVE`、`executionEnvironment=local`、`cwds=[当前 workspace 根目录]`、`prompt=[references/automation-prompt.md 的完整内容]`、`reasoningEffort=medium`。不要传 `command`、`permissions`、`cwd`、`frequency`、`schedule`、`destination` 或 thread/heartbeat 字段。若工具要求 `model`，使用当前 Codex 默认模型。若这套字段仍被拒绝，请把它作为 setup blocker 总结，不要反复试错创建无效 Automation。
11. 最终总结只包含：运行目录、安装源目录、self-test、prime/dry-run 状态、state.path、source health、Automation 名称/状态/频率/execution/cwd/prompt 来源，以及 Run Now 预期。不要贴原始 JSON。


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-06-03T03:58:11.000Z
- **抓取时间**: 2026-06-03T04:18:40.431Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2062020999143706780) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
