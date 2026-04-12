# 불일치 D 시리즈 & 리스크
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **불일치 D 시리즈** (path) -- 3 connections
  - <- references <- [[a2]]
  - <- addresses <- [[audiodedupets]]
  - <- documents <- [[]]
- **리스크** (path) -- 1 connections
  - -> documents -> [[d]]
- **A2 보안/품질 리뷰** (path) -- 1 connections
  - -> references -> [[d]]
- **audioDedupe.ts** (path) -- 1 connections
  - -> addresses -> [[d]]

## Internal Relationships
- 리스크 -> documents -> 불일치 D 시리즈 [EXTRACTED]
- A2 보안/품질 리뷰 -> references -> 불일치 D 시리즈 [EXTRACTED]
- audioDedupe.ts -> addresses -> 불일치 D 시리즈 [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 불일치 D 시리즈, 리스크, A2 보안/품질 리뷰를 중심으로 documents 관계로 연결되어 있다. 주요 소스 파일은 path이다.
