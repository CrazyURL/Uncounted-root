# Hook Types & PostToolUse
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Hook Types** (path) -- 3 connections
  - -> related_to -> [[pretooluse]]
  - -> related_to -> [[posttooluse]]
  - -> related_to -> [[stop]]
- **PostToolUse** (path) -- 1 connections
  - <- related_to <- [[hook-types]]
- **PreToolUse** (path) -- 1 connections
  - <- related_to <- [[hook-types]]
- **Stop** (path) -- 1 connections
  - <- related_to <- [[hook-types]]

## Internal Relationships
- Hook Types -> related_to -> PreToolUse [EXTRACTED]
- Hook Types -> related_to -> PostToolUse [EXTRACTED]
- Hook Types -> related_to -> Stop [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Hook Types, PostToolUse, PreToolUse를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
