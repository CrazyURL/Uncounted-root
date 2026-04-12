# MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션 & bash
Cohesion: 0.27 | Nodes: 10

## Key Nodes
- **MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션** (prompt_plan.md) -- 7 connections
  - -> contains -> [[llm-wiki]]
  - -> contains -> [[mindvault]]
  - -> contains -> [[phase-1]]
  - -> contains -> [[phase-2-wiki-mindvault]]
  - -> contains -> [[phase-3]]
  - -> contains -> [[phase-4-claudemd]]
  - -> contains -> [[phase-5]]
- **bash** (prompt_plan.md) -- 3 connections
  - <- has_code_example <- [[phase-1]]
  - <- has_code_example <- [[phase-2-wiki-mindvault]]
  - <- has_code_example <- [[phase-3]]
- **__unresolved__::ref::wikilinks** () -- 2 connections
  - <- references <- [[mindvault]]
  - <- references <- [[phase-5]]
- **도입 대상: MindVault** (prompt_plan.md) -- 2 connections
  - -> references -> [[unresolvedrefwikilinks]]
  - <- contains <- [[mindvault-llm-wiki-mindvault]]
- **Phase 1: 설치 및 초기 설정** (prompt_plan.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[mindvault-llm-wiki-mindvault]]
- **Phase 2: 기존 wiki → MindVault 인제스트** (prompt_plan.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[mindvault-llm-wiki-mindvault]]
- **Phase 3: 코드베이스 인덱싱** (prompt_plan.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[mindvault-llm-wiki-mindvault]]
- **Phase 5: 검증 및 정리** (prompt_plan.md) -- 2 connections
  - -> references -> [[unresolvedrefwikilinks]]
  - <- contains <- [[mindvault-llm-wiki-mindvault]]
- **현재 상태: llm-wiki (수동 운영)** (prompt_plan.md) -- 1 connections
  - <- contains <- [[mindvault-llm-wiki-mindvault]]
- **Phase 4: CLAUDE.md 및 워크플로우 통합** (prompt_plan.md) -- 1 connections
  - <- contains <- [[mindvault-llm-wiki-mindvault]]

## Internal Relationships
- 도입 대상: MindVault -> references -> __unresolved__::ref::wikilinks [EXTRACTED]
- MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션 -> contains -> 현재 상태: llm-wiki (수동 운영) [EXTRACTED]
- MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션 -> contains -> 도입 대상: MindVault [EXTRACTED]
- MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션 -> contains -> Phase 1: 설치 및 초기 설정 [EXTRACTED]
- MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션 -> contains -> Phase 2: 기존 wiki → MindVault 인제스트 [EXTRACTED]
- MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션 -> contains -> Phase 3: 코드베이스 인덱싱 [EXTRACTED]
- MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션 -> contains -> Phase 4: CLAUDE.md 및 워크플로우 통합 [EXTRACTED]
- MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션 -> contains -> Phase 5: 검증 및 정리 [EXTRACTED]
- Phase 1: 설치 및 초기 설정 -> has_code_example -> bash [EXTRACTED]
- Phase 2: 기존 wiki → MindVault 인제스트 -> has_code_example -> bash [EXTRACTED]
- Phase 3: 코드베이스 인덱싱 -> has_code_example -> bash [EXTRACTED]
- Phase 5: 검증 및 정리 -> references -> __unresolved__::ref::wikilinks [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 MindVault 도입 계획 — 기존 llm-wiki → MindVault 마이그레이션, bash, __unresolved__::ref::wikilinks를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
