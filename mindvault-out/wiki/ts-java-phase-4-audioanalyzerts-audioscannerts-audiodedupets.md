# 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화 & Phase 4: audioAnalyzer.ts / audioScanner.ts / audioDedupe.ts 조정
Cohesion: 0.12 | Nodes: 19

## Key Nodes
- **오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 7 connections
  - -> contains -> [[context]]
  - -> contains -> [[phase-1-java-audiodecoderpluginjava]]
  - -> contains -> [[phase-2-ts-audiodecoderbridgets]]
  - -> contains -> [[phase-3-audiosanitizerts]]
  - -> contains -> [[phase-4-audioanalyzerts-audioscannerts-audiodedupets]]
  - -> contains -> [[phase-5]]
  - -> contains -> [[phase-6]]
- **Phase 4: audioAnalyzer.ts / audioScanner.ts / audioDedupe.ts 조정** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 4 connections
  - -> contains -> [[4-1-audioanalyzerts]]
  - -> contains -> [[4-2-audioscannerts]]
  - -> contains -> [[4-3-audiodedupets]]
  - <- contains <- [[ts-java]]
- **typescript** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 3 connections
  - <- has_code_example <- [[2-1]]
  - <- has_code_example <- [[2-2]]
  - <- has_code_example <- [[3-1-sanitizeaudio]]
- **Phase 1: Java 브릿지 확장 (AudioDecoderPlugin.java)** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 3 connections
  - -> contains -> [[1-1-processaudio-pluginmethod]]
  - -> contains -> [[1-2-getaudiometrics-pluginmethod]]
  - <- contains <- [[ts-java]]
- **Phase 2: TS 브릿지 확장 (audioDecoderBridge.ts)** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 3 connections
  - -> contains -> [[2-1]]
  - -> contains -> [[2-2]]
  - <- contains <- [[ts-java]]
- **Phase 3: audioSanitizer.ts 교체** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 3 connections
  - -> contains -> [[3-1-sanitizeaudio]]
  - -> contains -> [[3-2]]
  - <- contains <- [[ts-java]]
- **2-1. 새 브릿지 함수 추가** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[phase-2-ts-audiodecoderbridgets]]
- **2-2. 타입 정의** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[phase-2-ts-audiodecoderbridgets]]
- **3-1. sanitizeAudio() 리라이트** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[phase-3-audiosanitizerts]]
- **Context** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 2 connections
  - -> contains -> [[d]]
  - <- contains <- [[ts-java]]
- **1-1. `processAudio` @PluginMethod 추가** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[phase-1-java-audiodecoderpluginjava]]
- **1-2. `getAudioMetrics` @PluginMethod 추가** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[phase-1-java-audiodecoderpluginjava]]
- **3-2. 제거 대상 함수들** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[phase-3-audiosanitizerts]]
- **4-1. audioAnalyzer.ts** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[phase-4-audioanalyzerts-audioscannerts-audiodedupets]]
- **4-2. audioScanner.ts** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[phase-4-audioanalyzerts-audioscannerts-audiodedupets]]
- **4-3. audioDedupe.ts** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[phase-4-audioanalyzerts-audioscannerts-audiodedupets]]
- **해소되는 불일치 (D 시리즈)** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[context]]
- **Phase 5: 테스트 업데이트** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[ts-java]]
- **Phase 6: 문서 업데이트** (uncounted-docs/bugfix/A2-audio-pipeline-unification-plan.md) -- 1 connections
  - <- contains <- [[ts-java]]

## Internal Relationships
- 2-1. 새 브릿지 함수 추가 -> has_code_example -> typescript [EXTRACTED]
- 2-2. 타입 정의 -> has_code_example -> typescript [EXTRACTED]
- 3-1. sanitizeAudio() 리라이트 -> has_code_example -> typescript [EXTRACTED]
- Context -> contains -> 해소되는 불일치 (D 시리즈) [EXTRACTED]
- Phase 1: Java 브릿지 확장 (AudioDecoderPlugin.java) -> contains -> 1-1. `processAudio` @PluginMethod 추가 [EXTRACTED]
- Phase 1: Java 브릿지 확장 (AudioDecoderPlugin.java) -> contains -> 1-2. `getAudioMetrics` @PluginMethod 추가 [EXTRACTED]
- Phase 2: TS 브릿지 확장 (audioDecoderBridge.ts) -> contains -> 2-1. 새 브릿지 함수 추가 [EXTRACTED]
- Phase 2: TS 브릿지 확장 (audioDecoderBridge.ts) -> contains -> 2-2. 타입 정의 [EXTRACTED]
- Phase 3: audioSanitizer.ts 교체 -> contains -> 3-1. sanitizeAudio() 리라이트 [EXTRACTED]
- Phase 3: audioSanitizer.ts 교체 -> contains -> 3-2. 제거 대상 함수들 [EXTRACTED]
- Phase 4: audioAnalyzer.ts / audioScanner.ts / audioDedupe.ts 조정 -> contains -> 4-1. audioAnalyzer.ts [EXTRACTED]
- Phase 4: audioAnalyzer.ts / audioScanner.ts / audioDedupe.ts 조정 -> contains -> 4-2. audioScanner.ts [EXTRACTED]
- Phase 4: audioAnalyzer.ts / audioScanner.ts / audioDedupe.ts 조정 -> contains -> 4-3. audioDedupe.ts [EXTRACTED]
- 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화 -> contains -> Context [EXTRACTED]
- 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화 -> contains -> Phase 1: Java 브릿지 확장 (AudioDecoderPlugin.java) [EXTRACTED]
- 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화 -> contains -> Phase 2: TS 브릿지 확장 (audioDecoderBridge.ts) [EXTRACTED]
- 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화 -> contains -> Phase 3: audioSanitizer.ts 교체 [EXTRACTED]
- 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화 -> contains -> Phase 4: audioAnalyzer.ts / audioScanner.ts / audioDedupe.ts 조정 [EXTRACTED]
- 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화 -> contains -> Phase 5: 테스트 업데이트 [EXTRACTED]
- 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화 -> contains -> Phase 6: 문서 업데이트 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 오디오 전처리 아키텍처 통합 — TS 중복 로직 제거, Java 파이프라인 단일화, Phase 4: audioAnalyzer.ts / audioScanner.ts / audioDedupe.ts 조정, typescript를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 A2-audio-pipeline-unification-plan.md이다.
