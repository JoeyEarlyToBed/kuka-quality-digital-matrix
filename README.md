# 库卡质量数字员工矩阵

> 基于 Harness 工程理念的智能化质量管理架构

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://joeyearlytobed.github.io/kuka-quality-digital-matrix/)

## 📖 项目简介

库卡机器人质量部门数字员工矩阵是一个创新的质量管理架构设计方案，采用 Harness 工程理念，将传统的被动质量管理转变为主动智能编排系统。

### 核心特性

- 🤖 **5大业务场景编排器** - CQ/SQ/DQ/PQ/External 全流程覆盖
- 🧠 **15+ 智能Agent** - 数据检索、智能分析、文档生成、系统集成
- 📊 **实时数据看板** - 质量指标动态监控、Agent活动热力图
- ⚙️ **Harness工程机制** - 流程编排引擎、状态机管理、全流程可观测
- 🎨 **库卡品牌设计** - 橙色 #FF6600 + 工业深灰 #1E293B + 科技蓝 #0066CC

## 🚀 快速开始

### 在线预览

访问 GitHub Pages 部署版本：[在线演示](https://joeyearlytobed.github.io/kuka-quality-digital-matrix/)

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/JoeyEarlyToBed/kuka-quality-digital-matrix.git

# 进入项目目录
cd kuka-quality-digital-matrix

# 启动本地服务器（任选其一）
# Python 3
python -m http.server 8080

# Node.js
npx serve

# 访问 http://localhost:8080
```

## 📁 项目结构

```
kuka-quality-digital-matrix/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件（库卡品牌配色）
├── js/
│   └── main.js         # 交互逻辑（图表、动画、热力图）
├── README.md           # 项目文档
└── .gitignore          # Git忽略文件
```

## 🏗️ 架构设计

### 5层分离式架构

```
┌─────────────────────────────────────┐
│  01 统一接入层                       │
│  身份识别 · 场景路由 · 权限控制      │
├─────────────────────────────────────┤
│  02 场景编排层                       │
│  CQ/SQ/DQ/PQ/External Orchestrator  │
├─────────────────────────────────────┤
│  03 能力中台层                       │
│  数据检索 · 智能分析 · 文档生成      │
├─────────────────────────────────────┤
│  04 数据标准化层                     │
│  去重 · 字段映射 · 风险标准化        │
├─────────────────────────────────────┤
│  05 人机协同界面层                   │
│  管理层 · 质量工程师 · 供应商/客户  │
└─────────────────────────────────────┘
```

### 5大业务场景编排器

| 编排器 | 场景 | 功能 |
|--------|------|------|
| **CQ Orchestrator** | 客户质量闭环 | 客诉分流 → 失效分析 → 改进措施 → 满意度管理 |
| **SQ Orchestrator** | 供应商质量管控 | 准入评估 → 来料监控 → 月度评价 → 协同改善 |
| **DQ Orchestrator** | 研发质量保障 | 门禁守门 → G1-G5评审 → 跨门禁追溯 → 决策支持 |
| **PQ Orchestrator** | 生产质量控制 | 数字孪生 → 异常响应 → 快速决策 → 出货检验 |
| **External Orchestrator** | 外部协同 | 意图识别 → 证据收集 → 关联分析 → 响应决策 |

## 📊 实时数据看板

### 质量指标监控
- **CQ** - 客户投诉趋势 + 响应时间 + 关闭率
- **SQ** - 来料合格率 + 红黄牌供应商 + 改善进度
- **DQ** - 设计变更次数 + 门禁状态 + FMEA完成度
- **PQ** - 过程CPK + 不良率 + 返工率

### Agent活动热力图
- 24小时活动分布可视化
- 5个Agent实时监控
- 颜色深浅表示活动频率

## 🛠️ 技术栈

- **前端**: HTML5 + CSS3 + Vanilla JavaScript
- **图表**: Canvas API (无外部依赖)
- **动画**: CSS Transitions + Intersection Observer API
- **响应式**: CSS Grid + Flexbox
- **部署**: GitHub Pages

## 🎨 设计规范

### 品牌色彩
```css
--kuka-orange: #FF6600;      /* 主色调 */
--industrial-gray: #1E293B;  /* 背景色 */
--tech-blue: #0066CC;        /* 辅助色 */
```

### 图标系统
- 自定义SVG图标（库卡品牌配色）
- 支持悬停动画效果
- 阴影与渐变增强视觉层次

## 📈 核心功能

### 动态数据可视化
- ✅ 实时折线图（Canvas绘制）
- ✅ 趋势指示器（上升/下降）
- ✅ 活动热力图（5级颜色映射）
- ✅ 自动数据更新（30秒周期）

### 交互体验
- ✅ 平滑滚动导航
- ✅ 标签页切换
- ✅ 滚动触发动画
- ✅ 悬停卡片效果
- ✅ 移动端适配

## 📝 使用场景

### 管理层汇报
- 质量数据总览
- 风险清单呈现
- 趋势分析展示
- 决策建议支持

### 技术分享
- Harness工程理念介绍
- Agent编排架构讲解
- 质量数字化转型方案
- 智能化质量管理实践

### 项目提案
- 向管理层展示创新方案
- 技术团队内部评审
- 客户/供应商协同界面演示

## 🔧 浏览器支持

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

## 👤 作者

**Joey You**
- GitHub: [@JoeyEarlyToBed](https://github.com/JoeyEarlyToBed)
- Email: youxiaoyi_joey@163.com

## 🙏 致谢

- 设计灵感来源于 Harness 工程理念
- 库卡机器人质量部门业务流程支持
- 现代化B端产品设计最佳实践

## 📞 反馈与支持

如有问题或建议，请通过以下方式联系：
- 提交 [GitHub Issue](https://github.com/JoeyEarlyToBed/kuka-quality-digital-matrix/issues)
- 发送邮件至 youxiaoyi_joey@163.com

---

**© 2024 库卡机器人质量部门. All rights reserved.**
