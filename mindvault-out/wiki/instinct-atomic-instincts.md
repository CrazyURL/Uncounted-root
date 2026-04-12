# Instinct & Atomic Instincts
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **Instinct** (path) -- 10 connections
  - -> related_to -> [[project-scoped-instincts]]
  - -> references -> [[atomic-instincts]]
  - -> related_to -> [[confidence-scoring]]
  - -> references -> [[skill-evolution]]
  - -> references -> [[observation-hooks]]
  - -> related_to -> [[promote-instincts]]
  - -> references -> [[instinct-commands]]
  - -> related_to -> [[observations]]
  - -> related_to -> [[scope-decision-guide]]
  - <- references <- [[continuous-learning-v21]]
- **Atomic Instincts** (path) -- 1 connections
  - <- references <- [[instinct]]
- **Confidence Scoring** (path) -- 1 connections
  - <- related_to <- [[instinct]]
- **Continuous Learning v2.1** (path) -- 1 connections
  - -> references -> [[instinct]]
- **Instinct Commands** (path) -- 1 connections
  - <- references <- [[instinct]]
- **Observation Hooks** (path) -- 1 connections
  - <- references <- [[instinct]]
- **Observations** (path) -- 1 connections
  - <- related_to <- [[instinct]]
- **Project-scoped Instincts** (path) -- 1 connections
  - <- related_to <- [[instinct]]
- **Promote Instincts** (path) -- 1 connections
  - <- related_to <- [[instinct]]
- **Scope Decision Guide** (path) -- 1 connections
  - <- related_to <- [[instinct]]
- **Skill Evolution** (path) -- 1 connections
  - <- references <- [[instinct]]

## Internal Relationships
- Continuous Learning v2.1 -> references -> Instinct [EXTRACTED]
- Instinct -> related_to -> Project-scoped Instincts [EXTRACTED]
- Instinct -> references -> Atomic Instincts [EXTRACTED]
- Instinct -> related_to -> Confidence Scoring [EXTRACTED]
- Instinct -> references -> Skill Evolution [EXTRACTED]
- Instinct -> references -> Observation Hooks [EXTRACTED]
- Instinct -> related_to -> Promote Instincts [EXTRACTED]
- Instinct -> references -> Instinct Commands [EXTRACTED]
- Instinct -> related_to -> Observations [EXTRACTED]
- Instinct -> related_to -> Scope Decision Guide [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Instinct, Atomic Instincts, Confidence Scoring를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
