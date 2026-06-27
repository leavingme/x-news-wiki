---
type: "X Tweet"
title: "Clawdbot实战方法论：子代理分工+模型路由的「项目经理」模式"
description: "**[单体Agent的瓶颈与分层解耦实践]**  • 模型分层策略：费脑任务用Opus/Claude，资料检索用廉价模型，长文档用Gemini Pro(100万上下文省60%成本) • 竞品分析实战：拆分为3个子代理并行处理，5分钟完成原本30分钟的工作，主代理只看摘要避免信息过载 • 角色定位反转：让Clawd当「项目经理」而非「程序员」，通过SOUL.md规则触发专用代理执行编码任务  关键洞"
resource: "https://x.com/i/status/2015639040251535484"
tags:
  - "x-news"
  - "news"
  - "author:ruiapp"
timestamp: "2026-03-18T16:28:01.003Z"
x_tweet_id: "2015639040251535484"
x_author: "Mr.Candy.AI"
x_handle: "ruiapp"
x_created_at: "2026-01-26T04:12:50.000Z"
x_engagement:
  likes: 20
  retweets: 4
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "bookmark"
---

# Clawdbot实战方法论：子代理分工+模型路由的「项目经理」模式

## 摘要

**[单体Agent的瓶颈与分层解耦实践]**

• 模型分层策略：费脑任务用Opus/Claude，资料检索用廉价模型，长文档用Gemini Pro(100万上下文省60%成本)
• 竞品分析实战：拆分为3个子代理并行处理，5分钟完成原本30分钟的工作，主代理只看摘要避免信息过载
• 角色定位反转：让Clawd当「项目经理」而非「程序员」，通过SOUL.md规则触发专用代理执行编码任务

关键洞察：Agent效率不在于单点能力，而在于「知道什么时候该把任务丢给谁」。

## 原文

肝了一个周末深度用了 #Clawdbot，说说真正有用的技巧

别被教程骗了。多数人配完 Clawdbot 就当 ChatGPT 用，完全浪费。

这里是实战验证过的方法。

1️⃣ 💰 模型别乱选

Opus 4.5 确实最强，但 API 烧钱快。我的方案：Google Antigravity connector 免费用 Opus。国内的话 MiniMax M2 和 GLM 4.7 够用，便宜。

长文档分析用 Gemini Pro，100万上下文，处理那种几十页的研究报告，成本能省60%。

2️⃣ ⚡️ 子代理才是真正的加速器

别让 Clawd 一个人干所有活。

上次做竞品分析，我让它拆成3个子代理：一个抓 Cursor 资料，一个看 Windsurf，一个整理 Copilot。5分钟全搞定，以前要半小时。

关键是给不同任务分配不同模型。费脑子的用 Opus，查资料的用便宜模型。主代理只看摘要，不会被一堆细节塞满。

3️⃣ 🚫 别让它写代码

这个反直觉，但真的管用。

Clawd 应该当项目经理，不是程序员。我在 SOUL.​md 里写了规则：涉及编程就启动 Claude Code，你负责监督。

实际效果：它规划方案、启动编码代理、跑测试、汇报结果。我只审核，不用盯着改来改去。代码质量反而更好，因为专业工具干专业事。

4️⃣ 📱 手机上用才是王道

配置 Telegram 只需5分钟，找 @BotFather 就行。

以前：坐电脑前 → 打开浏览器 → 登录 → 问问题
现在：掏手机 → 发 TG → 秒回

路上突然想起要查的东西，直接问。"明天北京天气？"、"2小时后提醒我打电话"。

把它拉进家庭群也挺好玩，虽然要小心别让它话太多。

5️⃣ 🔓 权限要敢给

Clawdbot 的价值来自"它懂你"。但很多人配完就停了，结果只是个贵点的聊天机器人。

我的做法：

• 先给文件读取、日历只读
• 然后 Git 操作、邮件读取（非核心邮箱）
• 最后通过 1Password 访问特定密码
给了 Obsidian 权限后，它每天自动整理会议笔记、提取待办、睡前总结工作。节省半小时不夸张。

当然要设边界：SOUL.​md 里写清楚：发邮件、发推特必须先问我；删东西用 trash 不用 rm；财务操作永远别碰。

6️⃣ 🧠 教一次，永久记住

这是最杀手的功能。

传统 AI：教了10次还是不记得
Clawdbot：聊完问它"这些内容你该永久记住什么？写成 skill"

我教过一次报销流程处理，它做成 skill。现在只需说"处理报销"，自动提取发票 → 分类 → 填表 → 发财务。

每周五问一次："这周对话里有什么值得永久记住？"三个月下来，它记住了我的工作习惯、项目背景、各种偏好。

你的 Clawd 会跟别人的完全不同，因为它学会了你的方式。

7️⃣ 🔍 Grok 比 Google 靠谱

默认的 Brave Search 对实时信息反应慢，中文也一般。

换成 Grok API 后：搜 Twitter + 网页，实时性强，便宜。

上次查"AI Agent 最新进展"，Grok 返回24小时内的 Twitter 讨论和 GitHub 新项目。Google 还在给我看3个月前的文章。

配置简单：http://x.​ai 注册拿 key，告诉 Clawd "需要实时信息时用 Grok"。$25 credit 免费送，够用很久。

8️⃣ 💓 让它主动找你

配置 HEARTBEAT.​md，让 Clawd 每天主动检查几次：重要邮件、即将开始的会议、天气。

早上9点自动提醒今天有3个会议。11点发现客户的未读邮件，提醒我回复。

但要设好规则，别让它半夜三点发消息，也别什么鸡毛蒜皮都报告。

9️⃣ 📦 ClawdHub 上有现成的

别重复造轮子。需要 GitHub 统计？clawdhub install github 就行。天气、Notion、Apple Notes 等常用功能都有人做好了。

装完就能用，省得自己折腾半天。

🔟 🍎 Apple 生态无缝接入

Notes + Reminders 自动同步所有设备。

"记到 Notes" → iPhone/iPad/Mac 都能看
"明天9点提醒我开会" → 所有设备同步提醒

macOS 上用 memo 管理 Notes，remindctl 管理提醒。

1️⃣1️⃣ 🎯 多渠道识别

Clawd 知道你在哪个平台跟它说话。

Discord 不用表格，自动用 bullet list；私聊详细讨论时，切换成完整段落。

可以设置规则："Telegram 简洁回复"、"Discord 不用表格"。

1️⃣2️⃣ ⏰ 定时任务 vs 心跳

心跳适合批量检查（每半小时查邮件+日历+天气）
Cron 适合精确定时（每周五18:00生成周报）

心跳省 token，Cron 保精确。选对工具很重要。

1️⃣3️⃣ ⚡️ 大写指令永久生效

你跟 Clawd 说"带⚡️的指令要永久记住， 并写入 MEMORY.​md"
后续用法：
"⚡️ 以后写周报用这个格式" → Clawd 存入记忆，永久遵守

"⚡️ 总结文章时，先列3个核心观点，再展开" → 以后每次都这样，不用重复提醒

养成习惯：重要指令前加⚡️，提醒 Clawd 写入 MEMORY.​md。

下次自动遵守，不用重复提醒。

1️⃣4️⃣ 🖥️ 树莓派部署

不一定要买 Mac Mini。

Clawdbot gateway 能跑在 $100 的树莓派上。用 Tailscale 把手机、电脑、服务器连起来，Clawd 无处不在。

树莓派当 gateway，Macbook 做节点（需要摄像头/屏幕录制时用），服务器跑长任务。成本低，灵活度高。

1️⃣5️⃣ 🎭 技能市场站在巨人肩膀上

ClawdHub 搜索安装别人做好的 skills：

• clawdhub search weather
• clawdhub install github
• clawdhub install notion
别重复造轮子，常用技能直接装。

💡 实战组合拳

场景1：自动化日报生成

• 心跳检查 Git 提交（git-daily-report skill）
• 读取 Obsidian 今日笔记
• 汇总成钉钉格式日报
• 自动发送到你的消息渠道

场景2：智能信息过滤

• Grok 搜索 AI 行业动态
• 子代理并行分析5个话题
• MEMORY.​md 记录偏好（比如不要中国新闻源）
• 生成个性化推荐列表

场景3：会议全流程管理

• 心跳提醒即将开始的会议
• 会后提取录音文字稿（summarize skill）
• 整理待办到 Apple Reminders
• 更新项目进度到 Obsidian

🎯 新手检查清单

• [ ] 配了手机渠道（Telegram/WhatsApp）
• [ ] 给了基础权限（文件、日历）
• [ ] 创建了 MEMORY.​md 和每日笔记
• [ ] 试过子代理并行任务
• [ ] 让 Clawd 把对话转成 skill
• [ ] 配了实时搜索（Grok/Brave）

💬 说到底

Clawdbot 不是工具，是伙伴。

它该主动提醒，不该等你问。
它该越来越懂你，不该每次从零开始。
它该无处不在，不该只能在电脑上用。

三个月后，你的 Clawd 跟别人的完全不一样。

因为它学会了你的节奏。


## 元信息

- **作者**: Mr.Candy.AI ([@ruiapp](https://x.com/ruiapp))
- **发布时间**: 2026-01-26T04:12:50.000Z
- **抓取时间**: 2026-03-18T16:28:01.003Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 20 · 🔄 4 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2015639040251535484) — @ruiapp (Mr.Candy.AI)
[2] [Author page](/entities/authors/ruiapp.md)
