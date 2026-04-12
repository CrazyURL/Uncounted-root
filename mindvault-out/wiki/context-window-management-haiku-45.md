# Context Window Management & Haiku 4.5
Cohesion: 0.47 | Nodes: 6

## Key Nodes
- **Context Window Management** (path) -- 3 connections
  - -> references -> [[haiku-45]]
  - -> references -> [[sonnet-46]]
  - <- related_to <- [[build-troubleshooting]]
- **Haiku 4.5** (path) -- 3 connections
  - -> related_to -> [[sonnet-46]]
  - -> related_to -> [[opus-45]]
  - <- references <- [[context-window-management]]
- **Sonnet 4.6** (path) -- 3 connections
  - -> related_to -> [[opus-45]]
  - <- related_to <- [[haiku-45]]
  - <- references <- [[context-window-management]]
- **Build Troubleshooting** (path) -- 2 connections
  - -> implements -> [[build-error-resolver]]
  - -> related_to -> [[context-window-management]]
- **Opus 4.5** (path) -- 2 connections
  - <- related_to <- [[haiku-45]]
  - <- related_to <- [[sonnet-46]]
- **Build Error Resolver** (path) -- 1 connections
  - <- implements <- [[build-troubleshooting]]

## Internal Relationships
- Build Troubleshooting -> implements -> Build Error Resolver [EXTRACTED]
- Build Troubleshooting -> related_to -> Context Window Management [INFERRED]
- Context Window Management -> references -> Haiku 4.5 [EXTRACTED]
- Context Window Management -> references -> Sonnet 4.6 [EXTRACTED]
- Haiku 4.5 -> related_to -> Sonnet 4.6 [INFERRED]
- Haiku 4.5 -> related_to -> Opus 4.5 [INFERRED]
- Sonnet 4.6 -> related_to -> Opus 4.5 [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Context Window Management, Haiku 4.5, Sonnet 4.6를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
