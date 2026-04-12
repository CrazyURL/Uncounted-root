# Integration Test & Skill Reference
Cohesion: 0.67 | Nodes: 4

## Key Nodes
- **Integration Test** (path) -- 2 connections
  - -> related_to -> [[skill-reference]]
  - <- implements <- [[testing-framework]]
- **Skill Reference** (path) -- 2 connections
  - <- related_to <- [[unit-test]]
  - <- related_to <- [[integration-test]]
- **Testing Framework** (common/testing.md) -- 2 connections
  - -> implements -> [[unit-test]]
  - -> implements -> [[integration-test]]
- **Unit Test** (path) -- 2 connections
  - -> related_to -> [[skill-reference]]
  - <- implements <- [[testing-framework]]

## Internal Relationships
- Integration Test -> related_to -> Skill Reference [INFERRED]
- Testing Framework -> implements -> Unit Test [EXTRACTED]
- Testing Framework -> implements -> Integration Test [EXTRACTED]
- Unit Test -> related_to -> Skill Reference [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Integration Test, Skill Reference, Testing Framework를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path, testing.md이다.
