---
okf_version: "0.1"
---

# x-news Wiki Bundle

> Open Knowledge Format (OKF) v0.1 bundle of all AI-selected X/Twitter posts from the [x-news](https://github.com/leavingme/x-news) pipeline.

- **生成时间**: 2026-06-27T09:40:51.402Z
- **数据范围**: 2026-01-30 → 2026-06-27 (4829 条精选)
- **OKF 版本**: 0.1

## 目录

- [📰 头条 (News)](sources/news/index.md) — 3482 条，按日分目录
- [✨ 亮点 (Highlights)](sources/highlights/index.md) — 1347 条，按日分目录

## 阅读建议

1. **浏览当日精选**: 打开 `sources/news/2026-06-27/` 看今天选出的内容
2. **翻历史**: 从 [头条索引](sources/news/index.md) / [亮点索引](sources/highlights/index.md) 按日期回看
3. **看统计**: [全局概要](overview.md) 给出了 Top 10 高赞推文

## OKF 合规性

本 bundle 严格遵循 [OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)：

1. ✅ 所有非保留 `.md` 文件均有合法 YAML frontmatter
2. ✅ 所有 frontmatter 均含非空 `type` 字段
3. ✅ 保留文件名 (`index.md`, `log.md`) 符合 §6 / §7
4. ✅ 使用 bundle-relative 绝对路径 `/path` 链接

## 重新生成

```bash
cd /data/workspace/x-news-wiki
node scripts/export.js
```

增量导出：

```bash
node scripts/export.js --since=2026-06-01
```
