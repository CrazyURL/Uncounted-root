# E2E Testing & Playwright
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **E2E Testing** (path) -- 2 connections
  - -> extends -> [[commontestingmd]]
  - <- implements <- [[playwright]]
- **Playwright** (path) -- 2 connections
  - -> implements -> [[e2e-testing]]
  - <- references <- [[e2e-runner]]
- **common/testing.md** (path) -- 1 connections
  - <- extends <- [[e2e-testing]]
- **e2e-runner** (path) -- 1 connections
  - -> references -> [[playwright]]

## Internal Relationships
- e2e-runner -> references -> Playwright [EXTRACTED]
- E2E Testing -> extends -> common/testing.md [EXTRACTED]
- Playwright -> implements -> E2E Testing [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 E2E Testing, Playwright, common/testing.md를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
