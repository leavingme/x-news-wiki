---
type: "source"
title: "Skill工程化指南：上下文管理的「渐进式披露」原则"
description: "**【Agent工具链的工程纪律正在成型】** • 元数据优先：SKILL.md作为「技能大脑」需<500行，描述明确触发条件 • 目录隔离策略：scripts/references/assets分层存放，按需加载避免token浪费 • 命名规范与版本控制：小写连字符、64字符限制，降低AI调用歧义  Skill不是脚本堆砌，而是AI可理解的「能力接口设计」。"
resource: "https://x.com/i/status/2027308710394233042"
tags:
  - "x-news"
  - "news"
  - "author:aigclink"
timestamp: "2026-03-10T03:12:01.617Z"
x_tweet_id: "2027308710394233042"
x_author: "AIGCLINK"
x_handle: "aigclink"
x_created_at: "2026-02-27T09:03:56.000Z"
x_engagement:
  likes: 150
  retweets: 33
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 78
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2027308710394233042"
created: "2026-02-27"
updated: "2026-06-26"
sha256: "13fb21c44f489c0669e340b4c6a62d1c952e30cdebae7f4037ddf50833c154f9"
sources:
  - "/sources/news/2026-03-10/78__aigclink__skill工程化指南-上下文管理的-渐进式披露-原则.md"
---

# Skill工程化指南：上下文管理的「渐进式披露」原则

## 摘要

**【Agent工具链的工程纪律正在成型】**
• 元数据优先：SKILL.md作为「技能大脑」需<500行，描述明确触发条件
• 目录隔离策略：scripts/references/assets分层存放，按需加载避免token浪费
• 命名规范与版本控制：小写连字符、64字符限制，降低AI调用歧义

Skill不是脚本堆砌，而是AI可理解的「能力接口设计」。

## 原文

构建AI Agent Skill的最佳实践指南，核心是让AI高效且准确使用这些技能，同时保持上下文的精简

否则浪费Token，还容易引发AI幻觉

这份指南可以喂给AI，让AI按这个标准生成修改或重构其他skill

1、首先目录结构
https://t.co/G0U6RRYXxh：技能的大脑，元数据+指令，小于500行
scripts/：工具，具体的代码脚本
references/：参考资料，API文档、备忘录（扁平化禁止子目录）
assets/：存放输出模板或静态文件

AI上下文有限，不能什么都塞给它，把详细资料放子目录，需要时再让AI读取，保持主文件精简

2、优化元数据
AI完全依赖https://t.co/G0U6RRYXxh顶部的元数据来决定是否调用该技能

命名规范
1-64字符，仅小写字母、数字和连字符（无连续连字符）；必须与目录名完全一致

描述优化，最多1024字符
第三人称描述，明确指出“何时该用”以及“何时不该用”，避免表述模糊不清

3、渐进式披露与资源管理
为了保持上下文窗口纯净，只在需要时才加载信息

保持https://t.co/G0U6RRYXxh精简：<500行，仅用于导航和高级流程

即时加载（JiT）：明确指示AI在特定步骤才读取子文件
示例："查看 references/auth-flow.md 获取具体错误码"（始终使用正斜杠/，即使在Windows上）

外部化细节：将复杂规则、大段模板、配置文件schema 移到references/或 assets/，https://t.co/G0U6RRYXxh 中只保留读取指令

4、需避免
不要包含 https://t.co/DQc0JR4CJO 或安装指南等人类文档，也不要包含冗余的库代码

5、使用程序化指令
指令是写给AI看的，需要极其精确

分步骤编号
严格按时间顺序定义工作流，决策树要清晰（如"步骤2：如需source map则执行X，否则跳到步骤3"）

提供具体模板
AI擅长模式匹配，将JSON结构、配置模板放到assets/，让AI复制而非用文字描述

第三人称祈使句
直接下达命令，比如“提取文本…”，而不是“你应该提取…”
或者"我们将提取…"

术语一致且专业
在整个技能中使用统一且特定领域的专业术语，比如Angular中用"template"非"html"

6、封装确定性脚本
不要让AI每次都从头编写复杂的解析逻辑或样板代码

将脆弱/重复任务（像查询数据库、解析复杂数据集）交给scripts/目录下的Python/Bash/Node脚本执行

脚本必须返回高度描述性人类可读的错误信息，以便AI能够自行纠错

7、验证流程
可与LLM一起测试和验证技能

发现性验证，只把元数据发给LLM，让它生成会触发和不会触发该技能的用户提示词，以此来检查描述是否准确

逻辑验证，把整个https://t.co/G0U6RRYXxh发给LLM，让它模拟执行步骤并写出“内心独白”，找出模糊或会导致AI幻觉的地方

边缘情况测试，让LLM扮演QA，找出逻辑漏洞、不支持的配置和失败状态

架构优化，根据测试结果，让LLM重写指令，强制执行渐进式披露，把长篇大论移到外部文件中，减少token占用

好的Skill都是企业内部资产一般不会公开，行业标准作者建议可以参考研究Anthropic的

感谢作者 @mgechev 

#skill #AIAgentSkill #openclaw


## 元信息

- **作者**: AIGCLINK ([@aigclink](https://x.com/aigclink))
- **发布时间**: 2026-02-27T09:03:56.000Z
- **抓取时间**: 2026-03-10T03:12:01.617Z
- **精选类别**: 📰 头条
- **优先级**: 78
- **互动**: ❤️ 150 · 🔄 33 · 💬 6 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2027308710394233042) — @aigclink (AIGCLINK)
[2] [Author page](/entities/authors/aigclink.md)
