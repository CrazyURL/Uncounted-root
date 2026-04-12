# backend-expert & Feature Team
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **backend-expert** (path) -- 3 connections
  - -> related_to -> [[db]]
  - -> related_to -> [[api]]
  - <- implements <- [[feature-team]]
- **Feature Team** (path) -- 3 connections
  - -> implements -> [[backend-expert]]
  - -> implements -> [[app-expert]]
  - -> implements -> [[admin-expert]]
- **app-expert** (path) -- 2 connections
  - -> related_to -> [[app-java]]
  - <- implements <- [[feature-team]]
- **서버 API** (path) -- 1 connections
  - <- related_to <- [[backend-expert]]
- **admin-expert** (path) -- 1 connections
  - <- implements <- [[feature-team]]
- **App Java 엔진** (path) -- 1 connections
  - <- related_to <- [[app-expert]]
- **DB 마이그레이션** (path) -- 1 connections
  - <- related_to <- [[backend-expert]]

## Internal Relationships
- app-expert -> related_to -> App Java 엔진 [EXTRACTED]
- backend-expert -> related_to -> DB 마이그레이션 [EXTRACTED]
- backend-expert -> related_to -> 서버 API [EXTRACTED]
- Feature Team -> implements -> backend-expert [EXTRACTED]
- Feature Team -> implements -> app-expert [EXTRACTED]
- Feature Team -> implements -> admin-expert [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 backend-expert, Feature Team, app-expert를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
