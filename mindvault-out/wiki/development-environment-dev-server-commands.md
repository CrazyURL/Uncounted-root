# Development Environment & Dev Server Commands
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **Development Environment** (/Users/gdash/project/uncounted-project/.claude/rules/common/dev-environment.md) -- 5 connections
  - -> contains -> [[environment-separation]]
  - -> contains -> [[dev-server-commands]]
  - -> contains -> [[environment-variables]]
  - -> contains -> [[caveats]]
  - -> contains -> [[db-migrations]]
- **Dev Server Commands** (/Users/gdash/project/uncounted-project/.claude/rules/common/dev-environment.md) -- 3 connections
  - -> has_code_example -> [[bash]]
  - -> has_code_example -> [[bash]]
  - <- contains <- [[development-environment]]
- **bash** (/Users/gdash/project/uncounted-project/.claude/rules/common/dev-environment.md) -- 1 connections
  - <- has_code_example <- [[dev-server-commands]]
- **bash** (.claude/rules/common/dev-environment.md) -- 1 connections
  - <- has_code_example <- [[dev-server-commands]]
- **Caveats** (/Users/gdash/project/uncounted-project/.claude/rules/common/dev-environment.md) -- 1 connections
  - <- contains <- [[development-environment]]
- **DB Migrations** (/Users/gdash/project/uncounted-project/.claude/rules/common/dev-environment.md) -- 1 connections
  - <- contains <- [[development-environment]]
- **Environment Separation** (/Users/gdash/project/uncounted-project/.claude/rules/common/dev-environment.md) -- 1 connections
  - <- contains <- [[development-environment]]
- **Environment Variables** (/Users/gdash/project/uncounted-project/.claude/rules/common/dev-environment.md) -- 1 connections
  - <- contains <- [[development-environment]]

## Internal Relationships
- Dev Server Commands -> has_code_example -> bash [EXTRACTED]
- Dev Server Commands -> has_code_example -> bash [EXTRACTED]
- Development Environment -> contains -> Environment Separation [EXTRACTED]
- Development Environment -> contains -> Dev Server Commands [EXTRACTED]
- Development Environment -> contains -> Environment Variables [EXTRACTED]
- Development Environment -> contains -> Caveats [EXTRACTED]
- Development Environment -> contains -> DB Migrations [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Development Environment, Dev Server Commands, bash를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 dev-environment.md이다.
