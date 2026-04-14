# 1. 완료한 작업 & [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성
Cohesion: 0.40 | Nodes: 10

## Key Nodes
- **1. 완료한 작업** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 8 connections
  - -> contains -> [[1]]
  - -> contains -> [[2]]
  - -> contains -> [[3]]
  - -> contains -> [[4]]
  - <- contains <- [[3-2000]]
  - <- contains <- [[2-export]]
  - <- contains <- [[handoff-document]]
  - <- contains <- [[1]]
- **[세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 7 connections
  - -> contains -> [[1]]
  - -> contains -> [[2]]
  - -> contains -> [[3]]
  - -> contains -> [[4]]
  - -> contains -> [[5-2026-04-13]]
  - -> contains -> [[6]]
  - <- contains <- [[handoff-document]]
- **[세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 7 connections
  - -> contains -> [[1]]
  - -> contains -> [[2]]
  - -> contains -> [[3]]
  - -> contains -> [[4]]
  - -> contains -> [[5]]
  - -> contains -> [[6]]
  - <- contains <- [[handoff-document]]
- **2. 변경 파일 요약** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 3 connections
  - <- contains <- [[3-2000]]
  - <- contains <- [[2-export]]
  - <- contains <- [[1]]
- **3. 테스트 필요 사항** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 3 connections
  - <- contains <- [[3-2000]]
  - <- contains <- [[2-export]]
  - <- contains <- [[1]]
- **4. 알려진 이슈** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 3 connections
  - <- contains <- [[3-2000]]
  - <- contains <- [[2-export]]
  - <- contains <- [[1]]
- **Handoff Document** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 3 connections
  - -> contains -> [[3-2000]]
  - -> contains -> [[2-export]]
  - -> contains -> [[1]]
- **6. 검증 권장 설정** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 2 connections
  - <- contains <- [[3-2000]]
  - <- contains <- [[2-export]]
- **5. 주의사항** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 1 connections
  - <- contains <- [[3-2000]]
- **5. 검증 결과 (2026-04-13)** (/Users/gdash/project/uncounted-project/uncounted-api/.claude/handoff.md) -- 1 connections
  - <- contains <- [[2-export]]

## Internal Relationships
- 1. 완료한 작업 -> contains -> 1. 완료한 작업 [EXTRACTED]
- 1. 완료한 작업 -> contains -> 2. 변경 파일 요약 [EXTRACTED]
- 1. 완료한 작업 -> contains -> 3. 테스트 필요 사항 [EXTRACTED]
- 1. 완료한 작업 -> contains -> 4. 알려진 이슈 [EXTRACTED]
- [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성 -> contains -> 1. 완료한 작업 [EXTRACTED]
- [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성 -> contains -> 2. 변경 파일 요약 [EXTRACTED]
- [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성 -> contains -> 3. 테스트 필요 사항 [EXTRACTED]
- [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성 -> contains -> 4. 알려진 이슈 [EXTRACTED]
- [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성 -> contains -> 5. 검증 결과 (2026-04-13) [EXTRACTED]
- [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성 -> contains -> 6. 검증 권장 설정 [EXTRACTED]
- [세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정 -> contains -> 1. 완료한 작업 [EXTRACTED]
- [세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정 -> contains -> 2. 변경 파일 요약 [EXTRACTED]
- [세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정 -> contains -> 3. 테스트 필요 사항 [EXTRACTED]
- [세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정 -> contains -> 4. 알려진 이슈 [EXTRACTED]
- [세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정 -> contains -> 5. 주의사항 [EXTRACTED]
- [세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정 -> contains -> 6. 검증 권장 설정 [EXTRACTED]
- Handoff Document -> contains -> [세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정 [EXTRACTED]
- Handoff Document -> contains -> [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성 [EXTRACTED]
- Handoff Document -> contains -> 1. 완료한 작업 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 1. 완료한 작업, [세션 2] Export 파이프라인 에러 가시성 + 트랜잭션 안전성, [세션 3] 메타데이터 익스포트 2000건+ 페이지네이션 수정를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 handoff.md이다.
