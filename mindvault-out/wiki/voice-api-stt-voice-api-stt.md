# Voice API 서버 모드 STT 파이프라인 & Voice API 서버 모드 STT 파이프라인
Cohesion: 0.08 | Nodes: 25

## Key Nodes
- **Voice API 서버 모드 STT 파이프라인** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 7 connections
  - -> contains -> [[stt-2-way]]
  - -> contains -> [[voice-api]]
  - -> contains -> [[java]]
  - -> contains -> [[ts]]
  - -> contains -> [[capacitor-js]]
  - -> contains -> [[wespeaker]]
  - <- contains <- [[native-stt]]
- **Voice API 서버 모드 STT 파이프라인** (uncounted-app/.claude/rules/native-stt.md) -- 7 connections
  - -> contains -> [[stt-2-way]]
  - -> contains -> [[voice-api]]
  - -> contains -> [[java]]
  - -> contains -> [[ts]]
  - -> contains -> [[capacitor-js]]
  - -> contains -> [[wespeaker]]
  - <- contains <- [[native-stt]]
- **네이티브 Java 패키지 구조** (uncounted-app/.claude/rules/native-stt.md) -- 5 connections
  - -> contains -> [[service]]
  - -> contains -> [[api]]
  - -> contains -> [[audio]]
  - -> contains -> [[labeling]]
  - <- contains <- [[voice-api-stt]]
- **네이티브 Java 패키지 구조** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 5 connections
  - -> contains -> [[service]]
  - -> contains -> [[api]]
  - -> contains -> [[audio]]
  - -> contains -> [[labeling]]
  - <- contains <- [[voice-api-stt]]
- **native-stt** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 2 connections
  - -> contains -> [[voice-api-stt]]
  - -> contains -> [[voice-api-stt]]
- **STT 모드 (2-way)** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 2 connections
  - -> contains -> [[jobpipelineexecutor]]
  - <- contains <- [[voice-api-stt]]
- **STT 모드 (2-way)** (uncounted-app/.claude/rules/native-stt.md) -- 2 connections
  - -> contains -> [[jobpipelineexecutor]]
  - <- contains <- [[voice-api-stt]]
- **파이프라인 병렬 실행 (JobPipelineExecutor)** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[stt-2-way]]
- **화자 분리 (WeSpeaker 임베딩)** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[voice-api-stt]]
- **api/** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[java]]
- **api/** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[java]]
- **audio/** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[java]]
- **audio/** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[java]]
- **Capacitor 이벤트 (네이티브 → JS)** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[voice-api-stt]]
- **Capacitor 이벤트 (네이티브 → JS)** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[voice-api-stt]]
- **파이프라인 병렬 실행 (JobPipelineExecutor)** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[stt-2-way]]
- **labeling/** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[java]]
- **labeling/** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[java]]
- **service/** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[java]]
- **service/** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[java]]
- **TS 모듈** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[voice-api-stt]]
- **TS 모듈** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[voice-api-stt]]
- **Voice API 서버** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[voice-api-stt]]
- **Voice API 서버** (uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[voice-api-stt]]
- **화자 분리 (WeSpeaker 임베딩)** (/Users/gdash/project/uncounted-project/uncounted-app/.claude/rules/native-stt.md) -- 1 connections
  - <- contains <- [[voice-api-stt]]

## Internal Relationships
- native-stt -> contains -> Voice API 서버 모드 STT 파이프라인 [EXTRACTED]
- native-stt -> contains -> Voice API 서버 모드 STT 파이프라인 [EXTRACTED]
- 네이티브 Java 패키지 구조 -> contains -> service/ [EXTRACTED]
- 네이티브 Java 패키지 구조 -> contains -> api/ [EXTRACTED]
- 네이티브 Java 패키지 구조 -> contains -> audio/ [EXTRACTED]
- 네이티브 Java 패키지 구조 -> contains -> labeling/ [EXTRACTED]
- 네이티브 Java 패키지 구조 -> contains -> service/ [EXTRACTED]
- 네이티브 Java 패키지 구조 -> contains -> api/ [EXTRACTED]
- 네이티브 Java 패키지 구조 -> contains -> audio/ [EXTRACTED]
- 네이티브 Java 패키지 구조 -> contains -> labeling/ [EXTRACTED]
- STT 모드 (2-way) -> contains -> 파이프라인 병렬 실행 (JobPipelineExecutor) [EXTRACTED]
- STT 모드 (2-way) -> contains -> 파이프라인 병렬 실행 (JobPipelineExecutor) [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> STT 모드 (2-way) [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> Voice API 서버 [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> 네이티브 Java 패키지 구조 [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> TS 모듈 [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> Capacitor 이벤트 (네이티브 → JS) [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> 화자 분리 (WeSpeaker 임베딩) [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> STT 모드 (2-way) [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> Voice API 서버 [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> 네이티브 Java 패키지 구조 [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> TS 모듈 [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> Capacitor 이벤트 (네이티브 → JS) [EXTRACTED]
- Voice API 서버 모드 STT 파이프라인 -> contains -> 화자 분리 (WeSpeaker 임베딩) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Voice API 서버 모드 STT 파이프라인, Voice API 서버 모드 STT 파이프라인, 네이티브 Java 패키지 구조를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 native-stt.md이다.
