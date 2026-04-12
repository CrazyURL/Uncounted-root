# 🟡 Medium — 개선 권장 & ts
Cohesion: 0.13 | Nodes: 16

## Key Nodes
- **🟡 Medium — 개선 권장** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 6 connections
  - -> contains -> [[7]]
  - -> contains -> [[8-localstorage]]
  - -> contains -> [[9-3]]
  - -> contains -> [[10-piilabel-ui]]
  - -> contains -> [[11-scanenginets]]
  - -> contains -> [[12-vs-pii]]
- **ts** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 4 connections
  - <- has_code_example <- [[1-stt-worker]]
  - <- has_code_example <- [[2-uploadqueue]]
  - <- has_code_example <- [[3-storageinitializer-race-condition]]
  - <- has_code_example <- [[8-localstorage]]
- **🟠 High — 조기 수정 권장** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 4 connections
  - -> contains -> [[3-storageinitializer-race-condition]]
  - -> contains -> [[4-vs-status]]
  - -> contains -> [[5-stt]]
  - -> contains -> [[6-localstorage]]
- **1. STT Worker 메모리 누수** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 2 connections
  - -> has_code_example -> [[ts]]
  - <- contains <- [[critical]]
- **2. uploadQueue 동시성 버그** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 2 connections
  - -> has_code_example -> [[ts]]
  - <- contains <- [[critical]]
- **3. StorageInitializer race condition** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 2 connections
  - -> has_code_example -> [[ts]]
  - <- contains <- [[high]]
- **8. localStorage 키 중앙화 미흡** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 2 connections
  - -> has_code_example -> [[ts]]
  - <- contains <- [[medium]]
- **🔴 Critical — 즉시 수정 필요** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 2 connections
  - -> contains -> [[1-stt-worker]]
  - -> contains -> [[2-uploadqueue]]
- **10. PII/Label 단계 UI 양보 전략 불일치** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[medium]]
- **11. scanEngine.ts 조용한 실패** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[medium]]
- **12. 문서 vs 코드 불일치 — PII 배치 저장** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[medium]]
- **4. 문서 vs 코드 불일치 — 스캔 status** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[high]]
- **5. STT 네트워크 자동 재시작 누락** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[high]]
- **6. 암호화 키 localStorage 평문 저장** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[high]]
- **7. 중복 코드 — 스캔 후처리 로직** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[medium]]
- **9. 글로벌 동의 저장소 3중화** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[medium]]

## Internal Relationships
- 1. STT Worker 메모리 누수 -> has_code_example -> ts [EXTRACTED]
- 2. uploadQueue 동시성 버그 -> has_code_example -> ts [EXTRACTED]
- 3. StorageInitializer race condition -> has_code_example -> ts [EXTRACTED]
- 8. localStorage 키 중앙화 미흡 -> has_code_example -> ts [EXTRACTED]
- 🔴 Critical — 즉시 수정 필요 -> contains -> 1. STT Worker 메모리 누수 [EXTRACTED]
- 🔴 Critical — 즉시 수정 필요 -> contains -> 2. uploadQueue 동시성 버그 [EXTRACTED]
- 🟠 High — 조기 수정 권장 -> contains -> 3. StorageInitializer race condition [EXTRACTED]
- 🟠 High — 조기 수정 권장 -> contains -> 4. 문서 vs 코드 불일치 — 스캔 status [EXTRACTED]
- 🟠 High — 조기 수정 권장 -> contains -> 5. STT 네트워크 자동 재시작 누락 [EXTRACTED]
- 🟠 High — 조기 수정 권장 -> contains -> 6. 암호화 키 localStorage 평문 저장 [EXTRACTED]
- 🟡 Medium — 개선 권장 -> contains -> 7. 중복 코드 — 스캔 후처리 로직 [EXTRACTED]
- 🟡 Medium — 개선 권장 -> contains -> 8. localStorage 키 중앙화 미흡 [EXTRACTED]
- 🟡 Medium — 개선 권장 -> contains -> 9. 글로벌 동의 저장소 3중화 [EXTRACTED]
- 🟡 Medium — 개선 권장 -> contains -> 10. PII/Label 단계 UI 양보 전략 불일치 [EXTRACTED]
- 🟡 Medium — 개선 권장 -> contains -> 11. scanEngine.ts 조용한 실패 [EXTRACTED]
- 🟡 Medium — 개선 권장 -> contains -> 12. 문서 vs 코드 불일치 — PII 배치 저장 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 🟡 Medium — 개선 권장, ts, 🟠 High — 조기 수정 권장를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 스캔_업로드_코드_개선사항.md이다.
