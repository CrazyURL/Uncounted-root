# 이슈 1: utterances 테이블 RLS 차단 & PHASE 4 발화 업로드 이슈 정리
Cohesion: 0.33 | Nodes: 7

## Key Nodes
- **이슈 1: utterances 테이블 RLS 차단** (uncounted-docs/bugfix/Phase4-utterance-upload-issues.md) -- 3 connections
  - -> has_code_example -> [[sql]]
  - -> contains -> [[026utterancessql]]
  - <- contains <- [[phase-4]]
- **PHASE 4 발화 업로드 이슈 정리** (uncounted-docs/bugfix/Phase4-utterance-upload-issues.md) -- 3 connections
  - -> contains -> [[1-utterances-rls]]
  - -> contains -> [[2-1]]
  - -> contains -> [[3-phase-4]]
- **sql** (uncounted-docs/bugfix/Phase4-utterance-upload-issues.md) -- 2 connections
  - <- has_code_example <- [[1-utterances-rls]]
  - <- has_code_example <- [[026utterancessql]]
- **참고: 026_utterances.sql 기존 정책** (uncounted-docs/bugfix/Phase4-utterance-upload-issues.md) -- 2 connections
  - -> has_code_example -> [[sql]]
  - <- contains <- [[1-utterances-rls]]
- **이슈 3: PHASE 4 로그가 안 보이는 것으로 오인** (uncounted-docs/bugfix/Phase4-utterance-upload-issues.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[phase-4]]
- **bash** (uncounted-docs/bugfix/Phase4-utterance-upload-issues.md) -- 1 connections
  - <- has_code_example <- [[3-phase-4]]
- **이슈 2: 청크당 발화 1개만 생성** (uncounted-docs/bugfix/Phase4-utterance-upload-issues.md) -- 1 connections
  - <- contains <- [[phase-4]]

## Internal Relationships
- 참고: 026_utterances.sql 기존 정책 -> has_code_example -> sql [EXTRACTED]
- 이슈 1: utterances 테이블 RLS 차단 -> has_code_example -> sql [EXTRACTED]
- 이슈 1: utterances 테이블 RLS 차단 -> contains -> 참고: 026_utterances.sql 기존 정책 [EXTRACTED]
- 이슈 3: PHASE 4 로그가 안 보이는 것으로 오인 -> has_code_example -> bash [EXTRACTED]
- PHASE 4 발화 업로드 이슈 정리 -> contains -> 이슈 1: utterances 테이블 RLS 차단 [EXTRACTED]
- PHASE 4 발화 업로드 이슈 정리 -> contains -> 이슈 2: 청크당 발화 1개만 생성 [EXTRACTED]
- PHASE 4 발화 업로드 이슈 정리 -> contains -> 이슈 3: PHASE 4 로그가 안 보이는 것으로 오인 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 이슈 1: utterances 테이블 RLS 차단, PHASE 4 발화 업로드 이슈 정리, sql를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 Phase4-utterance-upload-issues.md이다.
