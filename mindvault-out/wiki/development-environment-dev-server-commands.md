# Development Environment & Dev Server Commands
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **Development Environment** (.claude/rules/common/dev-environment.md) -- 4 connections
  - -> contains -> [[environment-separation]]
  - -> contains -> [[dev-server-commands]]
  - -> contains -> [[environment-variables]]
  - -> contains -> [[caveats]]
- **Dev Server Commands** (.claude/rules/common/dev-environment.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[development-environment]]
- **bash** (.claude/rules/common/dev-environment.md) -- 1 connections
  - <- has_code_example <- [[dev-server-commands]]
- **Caveats** (.claude/rules/common/dev-environment.md) -- 1 connections
  - <- contains <- [[development-environment]]
- **Environment Separation** (.claude/rules/common/dev-environment.md) -- 1 connections
  - <- contains <- [[development-environment]]
- **Environment Variables** (.claude/rules/common/dev-environment.md) -- 1 connections
  - <- contains <- [[development-environment]]

## Internal Relationships
- Dev Server Commands -> has_code_example -> bash [EXTRACTED]
- Development Environment -> contains -> Environment Separation [EXTRACTED]
- Development Environment -> contains -> Dev Server Commands [EXTRACTED]
- Development Environment -> contains -> Environment Variables [EXTRACTED]
- Development Environment -> contains -> Caveats [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Development Environment, Dev Server Commands, bash를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 dev-environment.md이다.
