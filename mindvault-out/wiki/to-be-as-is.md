# 목표 구조 (TO-BE) & 현재 프로젝트 구조 (AS-IS)
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **목표 구조 (TO-BE)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 6 connections
  - -> contains -> [[phase-1]]
  - -> contains -> [[phase-2]]
  - -> contains -> [[phase-3]]
  - -> contains -> [[phase-4]]
  - -> contains -> [[phase-5-docker]]
  - <- contains <- [[uncounted-voice-api]]
- **현재 프로젝트 구조 (AS-IS)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 5 connections
  - -> contains -> [[appmainpy]]
  - -> contains -> [[appconfigpy]]
  - -> contains -> [[appsttprocessorpy]]
  - -> contains -> [[apppiimaskerpy]]
  - <- contains <- [[uncounted-voice-api]]
- **uncounted-voice-api — 프로젝트 재구성 계획** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 3 connections
  - -> contains -> [[as-is]]
  - -> contains -> [[to-be]]
  - -> contains -> [[api]]
- **API 엔드포인트 (기존 유지)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[uncounted-voice-api]]
- **app/config.py (양호)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[as-is]]
- **app/main.py (문제점)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[as-is]]
- **app/pii_masker.py (양호)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[as-is]]
- **app/stt_processor.py (양호, 리팩토링 필요)** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[as-is]]
- **Phase 1: 프로젝트 스캐폴딩** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[to-be]]
- **Phase 2: 코어 계층 분리** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[to-be]]
- **Phase 3: 서비스 계층 분리** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[to-be]]
- **Phase 4: 라우터 분리** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[to-be]]
- **Phase 5: 테스트 + Docker** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/prompt_plan.md) -- 1 connections
  - <- contains <- [[to-be]]

## Internal Relationships
- 현재 프로젝트 구조 (AS-IS) -> contains -> app/main.py (문제점) [EXTRACTED]
- 현재 프로젝트 구조 (AS-IS) -> contains -> app/config.py (양호) [EXTRACTED]
- 현재 프로젝트 구조 (AS-IS) -> contains -> app/stt_processor.py (양호, 리팩토링 필요) [EXTRACTED]
- 현재 프로젝트 구조 (AS-IS) -> contains -> app/pii_masker.py (양호) [EXTRACTED]
- 목표 구조 (TO-BE) -> contains -> Phase 1: 프로젝트 스캐폴딩 [EXTRACTED]
- 목표 구조 (TO-BE) -> contains -> Phase 2: 코어 계층 분리 [EXTRACTED]
- 목표 구조 (TO-BE) -> contains -> Phase 3: 서비스 계층 분리 [EXTRACTED]
- 목표 구조 (TO-BE) -> contains -> Phase 4: 라우터 분리 [EXTRACTED]
- 목표 구조 (TO-BE) -> contains -> Phase 5: 테스트 + Docker [EXTRACTED]
- uncounted-voice-api — 프로젝트 재구성 계획 -> contains -> 현재 프로젝트 구조 (AS-IS) [EXTRACTED]
- uncounted-voice-api — 프로젝트 재구성 계획 -> contains -> 목표 구조 (TO-BE) [EXTRACTED]
- uncounted-voice-api — 프로젝트 재구성 계획 -> contains -> API 엔드포인트 (기존 유지) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 목표 구조 (TO-BE), 현재 프로젝트 구조 (AS-IS), uncounted-voice-api — 프로젝트 재구성 계획를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
