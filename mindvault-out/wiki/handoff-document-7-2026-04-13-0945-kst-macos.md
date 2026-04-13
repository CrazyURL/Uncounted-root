# Handoff Document & 7. 검증 실행 결과 (2026-04-13 09:45 KST, 로컬 macOS)
Cohesion: 0.13 | Nodes: 16

## Key Nodes
- **Handoff Document** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 7 connections
  - -> contains -> [[1]]
  - -> contains -> [[2]]
  - -> contains -> [[3]]
  - -> contains -> [[4-todo]]
  - -> contains -> [[5]]
  - -> contains -> [[6]]
  - -> contains -> [[7-2026-04-13-0945-kst-macos]]
- **7. 검증 실행 결과 (2026-04-13 09:45 KST, 로컬 macOS)** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 4 connections
  - -> contains -> [[pass]]
  - -> contains -> [[pending-wsl-gpu]]
  - -> contains -> [[wsl]]
  - <- contains <- [[handoff-document]]
- **2. 변경 파일 요약** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 3 connections
  - -> contains -> [[uncounted-voice-api]]
  - -> contains -> [[uncounted-app-android]]
  - <- contains <- [[handoff-document]]
- **3. 테스트 필요 사항** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 3 connections
  - -> contains -> [[wsl-gpu]]
  - -> contains -> [[android]]
  - <- contains <- [[handoff-document]]
- **bash** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 2 connections
  - <- has_code_example <- [[wsl-gpu]]
  - <- has_code_example <- [[wsl]]
- **WSL 실행 명령** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[7-2026-04-13-0945-kst-macos]]
- **서버 (WSL GPU 머신에서 실행 필수)** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[3]]
- **1. 완료한 작업** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[handoff-document]]
- **4. 알려진 이슈 / TODO** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[handoff-document]]
- **5. 주의사항** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[handoff-document]]
- **6. 검증 권장 설정** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[handoff-document]]
- **Android** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[3]]
- **✅ PASS — 로컬 검증 완료** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[7-2026-04-13-0945-kst-macos]]
- **⏳ PENDING — WSL GPU 머신에서 실행 필요** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[7-2026-04-13-0945-kst-macos]]
- **uncounted-app (Android)** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[2]]
- **uncounted-voice-api** (/Users/gdash/project/uncounted-project/.claude/handoff.md) -- 1 connections
  - <- contains <- [[2]]

## Internal Relationships
- 2. 변경 파일 요약 -> contains -> uncounted-voice-api [EXTRACTED]
- 2. 변경 파일 요약 -> contains -> uncounted-app (Android) [EXTRACTED]
- 3. 테스트 필요 사항 -> contains -> 서버 (WSL GPU 머신에서 실행 필수) [EXTRACTED]
- 3. 테스트 필요 사항 -> contains -> Android [EXTRACTED]
- 7. 검증 실행 결과 (2026-04-13 09:45 KST, 로컬 macOS) -> contains -> ✅ PASS — 로컬 검증 완료 [EXTRACTED]
- 7. 검증 실행 결과 (2026-04-13 09:45 KST, 로컬 macOS) -> contains -> ⏳ PENDING — WSL GPU 머신에서 실행 필요 [EXTRACTED]
- 7. 검증 실행 결과 (2026-04-13 09:45 KST, 로컬 macOS) -> contains -> WSL 실행 명령 [EXTRACTED]
- Handoff Document -> contains -> 1. 완료한 작업 [EXTRACTED]
- Handoff Document -> contains -> 2. 변경 파일 요약 [EXTRACTED]
- Handoff Document -> contains -> 3. 테스트 필요 사항 [EXTRACTED]
- Handoff Document -> contains -> 4. 알려진 이슈 / TODO [EXTRACTED]
- Handoff Document -> contains -> 5. 주의사항 [EXTRACTED]
- Handoff Document -> contains -> 6. 검증 권장 설정 [EXTRACTED]
- Handoff Document -> contains -> 7. 검증 실행 결과 (2026-04-13 09:45 KST, 로컬 macOS) [EXTRACTED]
- WSL 실행 명령 -> has_code_example -> bash [EXTRACTED]
- 서버 (WSL GPU 머신에서 실행 필수) -> has_code_example -> bash [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Handoff Document, 7. 검증 실행 결과 (2026-04-13 09:45 KST, 로컬 macOS), 2. 변경 파일 요약를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 handoff.md이다.
