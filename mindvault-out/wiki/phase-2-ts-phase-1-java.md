# Phase 2: TS 브릿지 확장 & Phase 1: Java 브릿지 확장
Cohesion: 0.25 | Nodes: 9

## Key Nodes
- **Phase 2: TS 브릿지 확장** (path) -- 4 connections
  - -> precedes -> [[phase-3-audiosanitizerts]]
  - -> precedes -> [[phase-4]]
  - <- implements <- [[typescript]]
  - <- responsible_for <- [[agent-2-ts-bridge]]
- **Phase 1: Java 브릿지 확장** (path) -- 3 connections
  - -> precedes -> [[phase-3-audiosanitizerts]]
  - <- implements <- [[java-audioprocessor]]
  - <- responsible_for <- [[agent-1-java]]
- **Phase 3: audioSanitizer.ts 교체** (path) -- 3 connections
  - -> precedes -> [[phase-4]]
  - <- precedes <- [[phase-1-java]]
  - <- precedes <- [[phase-2-ts]]
- **Phase 4: 조정** (path) -- 3 connections
  - <- precedes <- [[phase-2-ts]]
  - <- precedes <- [[phase-3-audiosanitizerts]]
  - <- responsible_for <- [[agent-3-ts-scan]]
- **Agent 1 (Java)** (path) -- 1 connections
  - -> responsible_for -> [[phase-1-java]]
- **Agent 2 (TS bridge)** (path) -- 1 connections
  - -> responsible_for -> [[phase-2-ts]]
- **Agent 3 (TS scan)** (path) -- 1 connections
  - -> responsible_for -> [[phase-4]]
- **Java AudioProcessor** (path) -- 1 connections
  - -> implements -> [[phase-1-java]]
- **TypeScript 오디오 전처리** (path) -- 1 connections
  - -> implements -> [[phase-2-ts]]

## Internal Relationships
- Agent 1 (Java) -> responsible_for -> Phase 1: Java 브릿지 확장 [EXTRACTED]
- Agent 2 (TS bridge) -> responsible_for -> Phase 2: TS 브릿지 확장 [EXTRACTED]
- Agent 3 (TS scan) -> responsible_for -> Phase 4: 조정 [EXTRACTED]
- Java AudioProcessor -> implements -> Phase 1: Java 브릿지 확장 [EXTRACTED]
- Phase 1: Java 브릿지 확장 -> precedes -> Phase 3: audioSanitizer.ts 교체 [EXTRACTED]
- Phase 2: TS 브릿지 확장 -> precedes -> Phase 3: audioSanitizer.ts 교체 [EXTRACTED]
- Phase 2: TS 브릿지 확장 -> precedes -> Phase 4: 조정 [EXTRACTED]
- Phase 3: audioSanitizer.ts 교체 -> precedes -> Phase 4: 조정 [EXTRACTED]
- TypeScript 오디오 전처리 -> implements -> Phase 2: TS 브릿지 확장 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Phase 2: TS 브릿지 확장, Phase 1: Java 브릿지 확장, Phase 3: audioSanitizer.ts 교체를 중심으로 precedes 관계로 연결되어 있다. 주요 소스 파일은 path이다.
