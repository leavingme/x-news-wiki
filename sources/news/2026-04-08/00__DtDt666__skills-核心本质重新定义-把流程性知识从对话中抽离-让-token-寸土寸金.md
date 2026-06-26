---
type: "X Tweet"
title: "Skills 核心本质重新定义：把流程性知识从对话中抽离，让 Token 寸土寸金"
description: "**【一句话核心判断】** Skills 的本质价值不是工具集成，而是把「不想一遍遍重新解释」的知识从对话窗口抽离，按需调取，永久复用。  **信息增量：** - Token 节省是 Skills 的隐性红利，不是主要卖点 - 职场版 Skills 结构：SKILL.md（岗位定义）+ scripts/ + references/ + assets/ - 判断标准：任何不想重复解释的工作流，都值得"
resource: "https://x.com/i/status/2030817117847818270"
tags:
  - "x-news"
  - "news"
  - "author:DtDt666"
timestamp: "2026-04-08T00:43:36.814Z"
x_tweet_id: "2030817117847818270"
x_author: "看不懂的SOL"
x_handle: "DtDt666"
x_created_at: "2026-03-09T01:25:06.000Z"
x_engagement:
  likes: 689
  retweets: 209
  replies: 19
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "skill-vs-mcp-paradigm"
x_source: "crawler"
---

# Skills 核心本质重新定义：把流程性知识从对话中抽离，让 Token 寸土寸金

## 摘要

**【一句话核心判断】**
Skills 的本质价值不是工具集成，而是把「不想一遍遍重新解释」的知识从对话窗口抽离，按需调取，永久复用。

**信息增量：**
- Token 节省是 Skills 的隐性红利，不是主要卖点
- 职场版 Skills 结构：SKILL.md（岗位定义）+ scripts/ + references/ + assets/
- 判断标准：任何不想重复解释的工作流，都值得写成 Skill

**影响范围：**
OpenClaw/Claude Code 用户，尤其是多项目并行、需要频繁切换上下文的开发者。

**gakki 锐评：**
这篇把 Skills 的工程逻辑讲清楚了，但大部分人还在用「收藏 prompt」的方式理解 Skills。维度不一样，结论就不一样。

## 原文

养龙虾你必须搞懂Skills！！

Skills 到底是什么？？？

一句话：把你的流程性知识，变成可复用的能力包，让Agent随叫随到，稳定发挥。

Skills本质就是一个文件夹。

文件夹里装的东西很清楚，如果你是职场人士：
`SKILL.md` 相当于告诉你这个岗位是做什么的
`scripts/` 是常用到的工具软件
`references/` 是业务流程涉及的知识库
`assets/` 是工作模板库

把这些东西打包放好后，让Claude干活的时候自己去查、去用、去执行。

你不用每次开新对话都从头交代一遍“我要什么格式”“我的风格”“按什么流程处理"等等。只需要调用这个skills就行。

这里有一个很容易被忽略的好处：省Token。

以往，在大模型的交互中，对话越长，模型越笨。且越耗费Token。

Token确实又寸土寸金（尤其像claude这种）。

而Skills呢把大量背景知识从对话中抽离出来。需要时按需调取，主对话窗口始终保持干净。这就间接省了不少Token。

什么时候该用 Skills
有一条判断标准特别好用：任何你不想一遍遍重新解释的东西，都值得写成Skill。

官方给了三类典型场景：
1. 组织级工作流。品牌规范、法务合规流程、标准化文档模板。这些东西公司里每个人都要遵守，但每次找AI帮忙都得重新说一遍。此时写成Skill就能一劳永逸。

2. 专业领域经验。比如Excel公式套路、数据分析流程、PDF处理方法、代码 标准、安全审计清单等。类似这些是你在某个领域摸爬滚打攒下来的经验。

3. 个人偏好和习惯。你的笔记结构、代码风格、研究方法论。每个人干活都有自己的一套讲究，Skill能让AI记住你的偏好和风格。

根据这几个标准。我盘点了自己的习惯，并安装上了claude官方出的几个与自身工作贴近的skills。同时根据自己需求，又自制了几个skills。

怎么安装和创建 Skills
安装方式（2种）
1. 命令行直接装。直接告诉Claude："帮我安装这个skill，skill项目地址为 xxx"，它自己就能搞定。

2. 手动放置。把Skills文件夹拖到本地目录 `~/.claude/skills` 即可。

创建方法
1. 基础版（非程序员推荐）：直接跟Claude说："我要创建 skill，一步步引导我"，它会一步步带你走完流程，最后生成一个zip包，上传安装即可。

2. 进阶版：先安装官方出的`skill-creator`，提出需求时让它调用这个skill帮你做设计，产出的Skill结构更规范稳定。

把 GitHub 项目打包成 Skill：一个被低估的用法

这个思路来自卡兹克，是整个Skills生态里最值得关注的玩法。
Skills最正确的用法，是将整个GitHub项目压缩成你自己的超级技能库。

原本需要读文档、装环境、跑命令的事情，变成了一句话的事。

操作步骤
1. 复制目标 GitHub 项目链接；
2. 给Claude Code提需求：“帮我把这个开源工具 https://... 打包成一个 Skill，实现xxx功能”；
3. 让claude开启计划模式做规划，再写Skill，提升稳定性；
4. 若skill使用中遇问题，解决后告诉claude：“把这些经验更新到这个skill里”。

第四步是关键。每次踩坑、每次修复，都喂回给Skill，它就会成为持续进化的skills。

如果对这个部分感兴趣，可以搜索卡兹克这篇文章：《Skills的最正确用法，是将整个Github压缩成你自己的超级技能库》。

Skills 不只是文档，还能跑代码
很多人以为Skills只是一堆提示词文件，其实不是。
Skills里还可以包含可执行脚本，比如Python脚本。

解决AI生成代码的痛点
AI生成代码的老问题：不稳定。
- 调用库不固定：今天用 `requests` 库，明天可能换成 `axios`；
- 代码输出不统一：同一个任务每次生成的代码不同，调试成本高。

而Skill里的脚本是提前写好、验证过的，逻辑固定，结果可预期。

同时，大量参考资料可放在 `references/` 目录里，Claude 需要的时候自己去查，不占主对话的上下文。

这就像给员工配了一个资料柜，不用把所有文件都摊在桌面上。

五步框架：把工作流变成可进化的 Skill
这个方法论来自宝玉AI，观点激进且有说服力：
几乎所有能用workflow完成的AI任务，都可以用Agent + Skills实现。

我很认可这个观点。连lenny's newsletter里面赠送的n8n（一种搭建流程的AI工具）我都转手出去了。因为真的不需要了（Lenny's Newsletter白送18个AI工具，我只激活了4个）。

第一步：拆分
把工作流拆成单一职责的skill或subagent。每个模块只做一件事，做好一件事。

第二步：编排
在主skill里用自然语言描述整个流程。不需要写代码，像给同事交代任务一样说清楚就行。一个skill可以调用另一个skill，组合出复杂工作流。

第三步：存储
所有中间结果都保存成本地文件，而不是留在内存或上下文里。

第四步：分摊
Subagent之间只传文件路径，不传内容。这条规则很重要。直接把一大段内容塞给 subagent，上下文窗口很快就撑满了。
传路径的话，subagent会自己去读文件，上下文保持得很干净。

第五步：迭代
这是Agent + Skills相比传统workflow最大的优势——可以持续进化。

当skill的提示词你觉得不好的时候，可以让Claude帮你改。它甚至可以自己迭代 subagent的system prompt，实现自我进化。

这五步看似简单，但贯穿了一个核心思想：拆得开、存得住、传得轻、改得动。

 一条最重要的认知
研究了这么多，最想说的其实是这一句：

Skills一定是你本身实践过或者沉淀好的工作流，只是把它自动化。不是让AI帮你从零发明流程，而是把你已经验证过的流程固化下来**。

好的组织，会把经验变成可复用的 skill。好的个人，也一样。
这也是为什么同样用 Skills，有人效率翻倍，有人折腾半天没效果。差距不在工具，在于你自己有没有值得固化的东西。

最后我安装了哪些skills呢？
最终探索后安装了以下13个skills，供参考。

这仅仅是第一次尝试装skills，后续应该会沉淀更多，欢迎交流。

1. `podcast-reader`：英文播客文字稿 → 结构化中文大纲（自制）

2. `github-to-skills`：自动将 GitHub 仓库转换为 AI Skills

3. `skill-manager`：Skills 生命周期管理

4. `obsidian-markdown`：Obsidian 风格 Markdown 创建与编辑（来自obsidian官网）

5. `pdf`：PDF 文件处理（读取、合并、分割、旋转）

6. `skill-evolution-manager`：根据反馈优化迭代现有 Skills

7. `skill-creator`：创建 Skills 的官方指南

8. `pptx`：PowerPoint 文件处理

9. `obsidian-bases`：Obsidian Bases 文件创建与编辑

10. `video-transcribe`：录制并转写视频音频为文字（自制）

11. `frontend-design`：生产级前端界面创建

12. `mcp-builder`：创建高质量 MCP（Model Context Protocol）服务器的指南

13. `json-canvas`：JSON Canvas 文件创建与编辑（来自obsidian官网）

▷ 来源说明：5、7、8、11、12均来自anthropic官网；2、3、6来自卡兹克文章，文末资源清单附有仓库链接。

补充说明（Claude Code查询结果）
1. podcast-reader -播客阅读器工具,将英文播客文字稿转化为结构化中文大纲、支持标注解释和文章生成

2. github-to-skills -自动将GitHub 仓库转换为 AI sills 的工厂

3. skill-manager - GitHub-based skills 的生命周期管理器(刚安装的)

4. obsidian-markdown -创建和编辑 Obsidian Flavored Markdown

5. pdf -PDF文件处理(读取、合并、分割、旋转等)

6. vibe-writing -Vibe Writing写作系统,创建高质量、低AI 检测率的中文文章

7. skill-evolution-manager -根据用户反馈和对话内容优化并迭代现有 Skills

8. skill-creator-创建有效skills的指南

9. pptx - PowerPoint文件处理

10. obsidian-bases -创建和编辑 Obsidian Bases (.base 文件)

11. video-transcribe-录制并转写视频音频为文字

12. .claude-plugin -无描述

13. frontend-design -创建独特的、生产级的前端界面

14. mcp-builder-创建高质量MCP(Model Context Protocol服务器的指南)

15. json-canvas-创建和编辑JSON Canvas文件


## 元信息

- **作者**: 看不懂的SOL ([@DtDt666](https://x.com/DtDt666))
- **发布时间**: 2026-03-09T01:25:06.000Z
- **抓取时间**: 2026-04-08T00:43:36.814Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 689 · 🔄 209 · 💬 19 · 🔖 0 · 👁 0
- **关联主题**: [skill-vs-mcp-paradigm](/concepts/skill-vs-mcp-paradigm.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2030817117847818270) — @DtDt666 (看不懂的SOL)
[2] [Author page](/entities/authors/dtdt666.md)
[3] [Related topic](/concepts/skill-vs-mcp-paradigm.md)
