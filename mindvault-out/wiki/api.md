# 리스크 & API 계약 확정
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **리스크** (path) -- 3 connections
  - <- related_to <- [[api]]
  - <- related_to <- [[zip]]
  - <- related_to <- [[e2e]]
- **API 계약 확정** (path) -- 1 connections
  - -> related_to -> [[]]
- **E2E 통합 검증** (path) -- 1 connections
  - -> related_to -> [[]]
- **ZIP 엔진** (path) -- 1 connections
  - -> related_to -> [[]]

## Internal Relationships
- API 계약 확정 -> related_to -> 리스크 [INFERRED]
- E2E 통합 검증 -> related_to -> 리스크 [INFERRED]
- ZIP 엔진 -> related_to -> 리스크 [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 리스크, API 계약 확정, E2E 통합 검증를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
