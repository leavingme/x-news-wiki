---
type: "X Tweet"
title: "Skillgrade：给Agent Skills生态量身定做的单元测试框架，70%确定性+30% LLM裁判"
description: "**[Skillgrade让Agent Skills从手工试错升级为可量化、可CI集成的工程闭环]**  @mgechev发布的Skillgrade是Agent Skills生态的第一个官方测试框架：混合评分（70%确定性代码检查+30% LLM裁判工作流质量）、Docker沙盒隔离防止Agent误操作、一键AI初始化支持三种测试粒度（烟雾5次、可靠15次、回归30次）。  这意味着SKILL.m"
resource: "https://x.com/i/status/2033704407129542798"
tags:
  - "x-news"
  - "news"
  - "author:shao__meng"
timestamp: "2026-04-05T00:42:57.349Z"
x_tweet_id: "2033704407129542798"
x_author: "meng shao"
x_handle: "shao__meng"
x_created_at: "2026-03-17T00:38:09.000Z"
x_engagement:
  likes: 84
  retweets: 15
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "skill-automation-engineering"
x_source: "crawler"
---

# Skillgrade：给Agent Skills生态量身定做的单元测试框架，70%确定性+30% LLM裁判

## 摘要

**[Skillgrade让Agent Skills从手工试错升级为可量化、可CI集成的工程闭环]**

@mgechev发布的Skillgrade是Agent Skills生态的第一个官方测试框架：混合评分（70%确定性代码检查+30% LLM裁判工作流质量）、Docker沙盒隔离防止Agent误操作、一键AI初始化支持三种测试粒度（烟雾5次、可靠15次、回归30次）。

这意味着SKILL.md的迭代从"人肉试错"变成"CI跑分"，Skills生态的可维护性提升了一个工程量级。


**gakki锐评：** 当一个框架开始有测试框架了，说明它已经渡过了"玩具阶段"。Skills生态正在工程化。

## 原文

Skills Best Practices 作者 @mgechev 最新发布了 Skillgrade：Agent Skills 的单元测试框架

Skillgrade 这个单元测试框架，用来验证 Codex / Claude Code / OpenClaw 等 AI Agents 能否正确发现并使用 Agent Skills 生态中的 Skills（基于 agentskills. io 标准，以 SKILL.md 为入口的指令+资源包）。

项目主要作用
传统提示词/技能迭代依赖人工试错，Skillgrade 提供可量化、可复现、可 CI 集成的评估闭环：
· 混合评分：70% 确定性（代码检查）+ 30% LLM 裁判（工作流质量），加权得出最终通过率
· 沙盒隔离（Docker 默认 / local CI），防止 Agent 误操作
· 一键生成测试（AI init），支持烟雾测试（5 次）、可靠评估（15 次）、回归检测（30 次）

典型使用流程（3 分钟上手）
1. 在含 SKILL.md 的 Skills 目录下：skillgrade init（需 API Key，自动生成带任务与 grader 的 eval.yaml）
2. 定制 eval.yaml
3. skillgrade --smoke（或 --reliable / --regression）运行
4. skillgrade preview（CLI）或 preview browser（http://localhost:3847 可视报告）

关键选项支持 --ci（阈值退出）、--parallel、指定 eval/grader/agent/provider，环境变量或 .env 注入 Key，报告自动存至临时目录。

项目提供的两个示例
· superlint（简易）：Agent 须发现自定义 superlint 工具，按“检查→修复→验证” 3 步 workflow 修复 app.js；70% 文件+内容检查，30% LLM 评 workflow 效率。
· angular-modern（进阶）：TS grader（regex 静态分析 5 项现代 Angular API 迁移），setup 动态装依赖，剩余 30% LLM 评代码质量——展示复杂 Skills 的精细评分能力。

技术与架构亮点
· CLI + 模板驱动：templates/ 实现 AI init，src/ 核心引擎，graders/ 内置实现。
· 安全+灵活：Docker 构建（base + setup）、资源限、local CI 优化。
· 生态兼容：直接对接 agentskills. io，支持主流 Agents，浏览器 UI 审阅 transcript。
· CI 友好：GitHub Action 示例，--provider=local --ci --threshold=0.8。

开源地址
https://t.co/3k3tYpzwNl


## 元信息

- **作者**: meng shao ([@shao__meng](https://x.com/shao__meng))
- **发布时间**: 2026-03-17T00:38:09.000Z
- **抓取时间**: 2026-04-05T00:42:57.349Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 84 · 🔄 15 · 💬 3 · 🔖 0 · 👁 0
- **关联主题**: [skill-automation-engineering](/concepts/skill-automation-engineering.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2033704407129542798) — @shao__meng (meng shao)
[2] [Author page](/entities/authors/shao-meng.md)
[3] [Related topic](/concepts/skill-automation-engineering.md)
