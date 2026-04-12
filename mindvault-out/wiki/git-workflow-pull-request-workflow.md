# Git Workflow & Pull Request Workflow
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Git Workflow** (.claude/rules/common/git-workflow.md) -- 2 connections
  - -> contains -> [[commit-message-format]]
  - -> contains -> [[pull-request-workflow]]
- **Pull Request Workflow** (.claude/rules/common/git-workflow.md) -- 2 connections
  - -> references -> [[unresolvedrefunresolvedrefdevelopmentworkflow]]
  - <- contains <- [[git-workflow]]
- **__unresolved__::ref::__unresolved____ref__development_workflow** () -- 1 connections
  - <- references <- [[pull-request-workflow]]
- **Commit Message Format** (.claude/rules/common/git-workflow.md) -- 1 connections
  - <- contains <- [[git-workflow]]

## Internal Relationships
- Git Workflow -> contains -> Commit Message Format [EXTRACTED]
- Git Workflow -> contains -> Pull Request Workflow [EXTRACTED]
- Pull Request Workflow -> references -> __unresolved__::ref::__unresolved____ref__development_workflow [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Git Workflow, Pull Request Workflow, __unresolved__::ref::__unresolved____ref__development_workflow를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 git-workflow.md이다.
