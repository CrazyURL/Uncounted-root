# Feature Development Team & Admin Expert
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Feature Development Team** (path) -- 3 connections
  - -> has_member -> [[backend-expert]]
  - -> has_member -> [[app-expert]]
  - -> has_member -> [[admin-expert]]
- **Admin Expert** (path) -- 1 connections
  - <- has_member <- [[feature-development-team]]
- **App Expert** (path) -- 1 connections
  - <- has_member <- [[feature-development-team]]
- **Backend Expert** (path) -- 1 connections
  - <- has_member <- [[feature-development-team]]

## Internal Relationships
- Feature Development Team -> has_member -> Backend Expert [EXTRACTED]
- Feature Development Team -> has_member -> App Expert [EXTRACTED]
- Feature Development Team -> has_member -> Admin Expert [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Feature Development Team, Admin Expert, App Expert를 중심으로 has_member 관계로 연결되어 있다. 주요 소스 파일은 path이다.
