# Performance Optimization & Build Troubleshooting
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Performance Optimization** (.claude/rules/common/performance.md) -- 4 connections
  - -> contains -> [[model-selection-strategy]]
  - -> contains -> [[context-window-management]]
  - -> contains -> [[extended-thinking-plan-mode]]
  - -> contains -> [[build-troubleshooting]]
- **Build Troubleshooting** (.claude/rules/common/performance.md) -- 1 connections
  - <- contains <- [[performance-optimization]]
- **Context Window Management** (.claude/rules/common/performance.md) -- 1 connections
  - <- contains <- [[performance-optimization]]
- **Extended Thinking + Plan Mode** (.claude/rules/common/performance.md) -- 1 connections
  - <- contains <- [[performance-optimization]]
- **Model Selection Strategy** (.claude/rules/common/performance.md) -- 1 connections
  - <- contains <- [[performance-optimization]]

## Internal Relationships
- Performance Optimization -> contains -> Model Selection Strategy [EXTRACTED]
- Performance Optimization -> contains -> Context Window Management [EXTRACTED]
- Performance Optimization -> contains -> Extended Thinking + Plan Mode [EXTRACTED]
- Performance Optimization -> contains -> Build Troubleshooting [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Performance Optimization, Build Troubleshooting, Context Window Management를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 performance.md이다.
