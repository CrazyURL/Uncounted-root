# Testing Requirements & Test Structure (AAA Pattern)
Cohesion: 0.29 | Nodes: 8

## Key Nodes
- **Testing Requirements** (.claude/rules/common/testing.md) -- 5 connections
  - -> contains -> [[minimum-test-coverage-80]]
  - -> contains -> [[test-driven-development]]
  - -> contains -> [[troubleshooting-test-failures]]
  - -> contains -> [[agent-support]]
  - -> contains -> [[test-structure-aaa-pattern]]
- **Test Structure (AAA Pattern)** (.claude/rules/common/testing.md) -- 3 connections
  - -> has_code_example -> [[typescript]]
  - -> contains -> [[test-naming]]
  - <- contains <- [[testing-requirements]]
- **typescript** (.claude/rules/common/testing.md) -- 2 connections
  - <- has_code_example <- [[test-structure-aaa-pattern]]
  - <- has_code_example <- [[test-naming]]
- **Test Naming** (.claude/rules/common/testing.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[test-structure-aaa-pattern]]
- **Agent Support** (.claude/rules/common/testing.md) -- 1 connections
  - <- contains <- [[testing-requirements]]
- **Minimum Test Coverage: 80%** (.claude/rules/common/testing.md) -- 1 connections
  - <- contains <- [[testing-requirements]]
- **Test-Driven Development** (.claude/rules/common/testing.md) -- 1 connections
  - <- contains <- [[testing-requirements]]
- **Troubleshooting Test Failures** (.claude/rules/common/testing.md) -- 1 connections
  - <- contains <- [[testing-requirements]]

## Internal Relationships
- Test Naming -> has_code_example -> typescript [EXTRACTED]
- Test Structure (AAA Pattern) -> has_code_example -> typescript [EXTRACTED]
- Test Structure (AAA Pattern) -> contains -> Test Naming [EXTRACTED]
- Testing Requirements -> contains -> Minimum Test Coverage: 80% [EXTRACTED]
- Testing Requirements -> contains -> Test-Driven Development [EXTRACTED]
- Testing Requirements -> contains -> Troubleshooting Test Failures [EXTRACTED]
- Testing Requirements -> contains -> Agent Support [EXTRACTED]
- Testing Requirements -> contains -> Test Structure (AAA Pattern) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Testing Requirements, Test Structure (AAA Pattern), typescript를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 testing.md이다.
