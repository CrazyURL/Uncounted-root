# CRITICAL 버그 목록 & A2 파일 스캔 & 품질 분석 — CRITICAL 5건 버그픽스 실행계획
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **CRITICAL 버그 목록** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 9 connections
  - -> contains -> [[c1-pii-pii]]
  - -> contains -> [[c2-resolvefilepath]]
  - -> contains -> [[c3-getordecodewav]]
  - -> contains -> [[c4-decodeaudiototempwav]]
  - -> contains -> [[c5-3]]
  - -> contains -> [[typescript-uncounted-appsrclib]]
  - -> contains -> [[android-java-uncounted-appandroidaudio]]
  - -> contains -> [[api-uncounted-api]]
  - <- contains <- [[a2-critical-5]]
- **A2 파일 스캔 & 품질 분석 — CRITICAL 5건 버그픽스 실행계획** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - -> contains -> [[critical]]
- **Android Java (uncounted-app/android/.../audio/)** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - <- contains <- [[critical]]
- **API (uncounted-api/)** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - <- contains <- [[critical]]
- **C1. PII 마스킹 순서 오류 — PII 음성 노출 위험** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - <- contains <- [[critical]]
- **C2. 경로 순회 무검증 — resolveFilePath()** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - <- contains <- [[critical]]
- **C3. 경로 순회 무검증 — getOrDecodeWav()** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - <- contains <- [[critical]]
- **C4. 경로 순회 무검증 — decodeAudioToTempWav()** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - <- contains <- [[critical]]
- **C5. 등급 기준 3원화 불일치 — 클라이언트-서버 등급 불일치** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - <- contains <- [[critical]]
- **TypeScript (uncounted-app/src/lib/)** (.orchestrate-consult/20260330-174936/prompt_plan.md) -- 1 connections
  - <- contains <- [[critical]]

## Internal Relationships
- A2 파일 스캔 & 품질 분석 — CRITICAL 5건 버그픽스 실행계획 -> contains -> CRITICAL 버그 목록 [EXTRACTED]
- CRITICAL 버그 목록 -> contains -> C1. PII 마스킹 순서 오류 — PII 음성 노출 위험 [EXTRACTED]
- CRITICAL 버그 목록 -> contains -> C2. 경로 순회 무검증 — resolveFilePath() [EXTRACTED]
- CRITICAL 버그 목록 -> contains -> C3. 경로 순회 무검증 — getOrDecodeWav() [EXTRACTED]
- CRITICAL 버그 목록 -> contains -> C4. 경로 순회 무검증 — decodeAudioToTempWav() [EXTRACTED]
- CRITICAL 버그 목록 -> contains -> C5. 등급 기준 3원화 불일치 — 클라이언트-서버 등급 불일치 [EXTRACTED]
- CRITICAL 버그 목록 -> contains -> TypeScript (uncounted-app/src/lib/) [EXTRACTED]
- CRITICAL 버그 목록 -> contains -> Android Java (uncounted-app/android/.../audio/) [EXTRACTED]
- CRITICAL 버그 목록 -> contains -> API (uncounted-api/) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 CRITICAL 버그 목록, A2 파일 스캔 & 품질 분석 — CRITICAL 5건 버그픽스 실행계획, Android Java (uncounted-app/android/.../audio/)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
