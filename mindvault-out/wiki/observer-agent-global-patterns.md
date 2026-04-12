# Observer Agent & Global Patterns
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Observer Agent** (path) -- 4 connections
  - -> implements -> [[haiku-model]]
  - -> reads -> [[project-scoped-observations-file]]
  - -> creates/updates -> [[instincts-directory]]
  - -> creates -> [[global-patterns]]
- **Global Patterns** (~/.claude/homunculus/instincts/personal/) -- 1 connections
  - <- creates <- [[observer-agent]]
- **Haiku Model** (path) -- 1 connections
  - <- implements <- [[observer-agent]]
- **Instincts Directory** (~/.claude/homunculus/projects/<project-hash>/instincts/personal/) -- 1 connections
  - <- creates/updates <- [[observer-agent]]
- **Project-scoped Observations File** (~/.claude/homunculus/projects/<project-hash>/observations.jsonl) -- 1 connections
  - <- reads <- [[observer-agent]]

## Internal Relationships
- Observer Agent -> implements -> Haiku Model [EXTRACTED]
- Observer Agent -> reads -> Project-scoped Observations File [EXTRACTED]
- Observer Agent -> creates/updates -> Instincts Directory [EXTRACTED]
- Observer Agent -> creates -> Global Patterns [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Observer Agent, Global Patterns, Haiku Model를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 observations.jsonl, path, personal이다.
