# A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 & 2. CRITICAL 발견 (즉시 수정 필요)
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트** (.orchestrate-consult/20260327-211546/final-report.md) -- 8 connections
  - -> contains -> [[1]]
  - -> contains -> [[2-critical]]
  - -> contains -> [[3-high-sprint]]
  - -> contains -> [[4-medium]]
  - -> contains -> [[5-stride]]
  - -> contains -> [[6]]
  - -> contains -> [[7]]
  - -> contains -> [[8]]
- **2. CRITICAL 발견 (즉시 수정 필요)** (.orchestrate-consult/20260327-211546/final-report.md) -- 4 connections
  - -> contains -> [[c1-pii-pii]]
  - -> contains -> [[c2-c4]]
  - -> contains -> [[c5-3]]
  - <- contains <- [[a2]]
- **7. 우선순위별 수정 로드맵** (.orchestrate-consult/20260327-211546/final-report.md) -- 2 connections
  - -> contains -> [[sprint]]
  - <- contains <- [[a2]]
- **1. 종합 요약** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[a2]]
- **3. HIGH 발견 (Sprint 내 수정 권장)** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[a2]]
- **4. MEDIUM 발견 (계획적 수정)** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[a2]]
- **5. STRIDE 위협 매핑** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[a2]]
- **6. 비즈니스 규칙 준수 현황** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[a2]]
- **8. 파일별 발견 밀도** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[a2]]
- **C1. PII 마스킹 순서 오류 — PII 음성 노출 위험** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[2-critical]]
- **C2-C4. 경로 순회 무검증 — 앱 샌드박스 탈출** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[2-critical]]
- **C5. 등급 기준 3원화 불일치** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[2-critical]]
- **즉시 (이번 Sprint)** (.orchestrate-consult/20260327-211546/final-report.md) -- 1 connections
  - <- contains <- [[7]]

## Internal Relationships
- 2. CRITICAL 발견 (즉시 수정 필요) -> contains -> C1. PII 마스킹 순서 오류 — PII 음성 노출 위험 [EXTRACTED]
- 2. CRITICAL 발견 (즉시 수정 필요) -> contains -> C2-C4. 경로 순회 무검증 — 앱 샌드박스 탈출 [EXTRACTED]
- 2. CRITICAL 발견 (즉시 수정 필요) -> contains -> C5. 등급 기준 3원화 불일치 [EXTRACTED]
- 7. 우선순위별 수정 로드맵 -> contains -> 즉시 (이번 Sprint) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 -> contains -> 1. 종합 요약 [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 -> contains -> 2. CRITICAL 발견 (즉시 수정 필요) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 -> contains -> 3. HIGH 발견 (Sprint 내 수정 권장) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 -> contains -> 4. MEDIUM 발견 (계획적 수정) [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 -> contains -> 5. STRIDE 위협 매핑 [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 -> contains -> 6. 비즈니스 규칙 준수 현황 [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 -> contains -> 7. 우선순위별 수정 로드맵 [EXTRACTED]
- A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트 -> contains -> 8. 파일별 발견 밀도 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 A2. 파일 스캔 & 품질 분석 — 보안 검수 최종 리포트, 2. CRITICAL 발견 (즉시 수정 필요), 7. 우선순위별 수정 로드맵를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 final-report.md이다.
