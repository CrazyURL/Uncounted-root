# A2 파일 스캔 & 품질 분석 & C1. PII 마스킹 순서 오류
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **A2 파일 스캔 & 품질 분석** (path/to/file) -- 13 connections
  - -> references -> [[c1-pii]]
  - -> references -> [[c2-resolvefilepath]]
  - -> references -> [[c3-getordecodewav]]
  - -> references -> [[c4-decodeaudiototempwav]]
  - -> references -> [[c5-3]]
  - -> references -> [[h1-export]]
  - -> references -> [[h2-consolelog-uri]]
  - -> references -> [[h3-dos]]
  - -> references -> [[h4]]
  - -> references -> [[m1-entryname]]
  - -> references -> [[m2]]
  - -> references -> [[l1]]
  - -> references -> [[l2]]
- **C1. PII 마스킹 순서 오류** (uncounted-app/src/lib/audioSanitizer.ts) -- 1 connections
  - <- references <- [[a2]]
- **C2. 경로 순회 무검증 - resolveFilePath()** (uncounted-app/android/.../audio/AudioDecoderPlugin.java) -- 1 connections
  - <- references <- [[a2]]
- **C3. 경로 순회 무검증 - getOrDecodeWav()** (uncounted-app/android/.../audio/AudioDecoderPlugin.java) -- 1 connections
  - <- references <- [[a2]]
- **C4. 경로 순회 무검증 - decodeAudioToTempWav()** (uncounted-app/src/lib/audioDecoderBridge.ts) -- 1 connections
  - <- references <- [[a2]]
- **C5. 등급 기준 3원화 불일치** (uncounted-app/src/lib/audioScanner.ts) -- 1 connections
  - <- references <- [[a2]]
- **H1. 경로 검증 없는 export 함수** (uncounted-app/src/lib/audioFileLoader.ts) -- 1 connections
  - <- references <- [[a2]]
- **H2. console.log에 전체 경로/URI 노출** (uncounted-app/src/lib/audioFileLoader.ts) -- 1 connections
  - <- references <- [[a2]]
- **H3. 디코딩 타임아웃/크기 제한 없음 (DoS)** (uncounted-app/android/.../audio/AudioDecoderPlugin.java) -- 1 connections
  - <- references <- [[a2]]
- **H4. 에러 메시지에 파일 경로 노출** (uncounted-app/android/.../audio/AudioDecoderPlugin.java) -- 1 connections
  - <- references <- [[a2]]
- **L1. 진행률 콜백에 전체 경로 전달** (scanEngine.ts) -- 1 connections
  - <- references <- [[a2]]
- **L2. 웹 재귀 스캔 깊이 제한 없음** (scanEngine.ts) -- 1 connections
  - <- references <- [[a2]]
- **M1. entry.name 경로 정규화 없음** (scanEngine.ts) -- 1 connections
  - <- references <- [[a2]]
- **M2. 권한 거부 무시 후 스캔 진행** (scanEngine.ts) -- 1 connections
  - <- references <- [[a2]]

## Internal Relationships
- A2 파일 스캔 & 품질 분석 -> references -> C1. PII 마스킹 순서 오류 [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> C2. 경로 순회 무검증 - resolveFilePath() [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> C3. 경로 순회 무검증 - getOrDecodeWav() [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> C4. 경로 순회 무검증 - decodeAudioToTempWav() [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> C5. 등급 기준 3원화 불일치 [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> H1. 경로 검증 없는 export 함수 [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> H2. console.log에 전체 경로/URI 노출 [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> H3. 디코딩 타임아웃/크기 제한 없음 (DoS) [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> H4. 에러 메시지에 파일 경로 노출 [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> M1. entry.name 경로 정규화 없음 [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> M2. 권한 거부 무시 후 스캔 진행 [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> L1. 진행률 콜백에 전체 경로 전달 [EXTRACTED]
- A2 파일 스캔 & 품질 분석 -> references -> L2. 웹 재귀 스캔 깊이 제한 없음 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 A2 파일 스캔 & 품질 분석, C1. PII 마스킹 순서 오류, C2. 경로 순회 무검증 - resolveFilePath()를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 AudioDecoderPlugin.java, audioDecoderBridge.ts, audioFileLoader.ts, audioSanitizer.ts, audioScanner.ts이다.
