# Verification Loop Skill & Build Verification
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Verification Loop Skill** (path) -- 8 connections
  - -> references -> [[build-verification]]
  - -> references -> [[type-check]]
  - -> references -> [[lint-check]]
  - -> references -> [[test-suite]]
  - -> references -> [[security-scan]]
  - -> references -> [[diff-review]]
  - -> references -> [[continuous-mode]]
  - -> complements -> [[integration-with-hooks]]
- **Build Verification** (path) -- 1 connections
  - <- references <- [[verification-loop-skill]]
- **Continuous Mode** (path) -- 1 connections
  - <- references <- [[verification-loop-skill]]
- **Diff Review** (path) -- 1 connections
  - <- references <- [[verification-loop-skill]]
- **Integration with Hooks** (path) -- 1 connections
  - <- complements <- [[verification-loop-skill]]
- **Lint Check** (path) -- 1 connections
  - <- references <- [[verification-loop-skill]]
- **Security Scan** (path) -- 1 connections
  - <- references <- [[verification-loop-skill]]
- **Test Suite** (path) -- 1 connections
  - <- references <- [[verification-loop-skill]]
- **Type Check** (path) -- 1 connections
  - <- references <- [[verification-loop-skill]]

## Internal Relationships
- Verification Loop Skill -> references -> Build Verification [EXTRACTED]
- Verification Loop Skill -> references -> Type Check [EXTRACTED]
- Verification Loop Skill -> references -> Lint Check [EXTRACTED]
- Verification Loop Skill -> references -> Test Suite [EXTRACTED]
- Verification Loop Skill -> references -> Security Scan [EXTRACTED]
- Verification Loop Skill -> references -> Diff Review [EXTRACTED]
- Verification Loop Skill -> references -> Continuous Mode [EXTRACTED]
- Verification Loop Skill -> complements -> Integration with Hooks [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Verification Loop Skill, Build Verification, Continuous Mode를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
