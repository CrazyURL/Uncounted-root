# Claude 추가 발견 (Gemini 미감지) & Gemini 주장 검증 (Claude 교차 확인)
Cohesion: 0.13 | Nodes: 15

## Key Nodes
- **Claude 추가 발견 (Gemini 미감지)** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 5 connections
  - -> contains -> [[high-extractwavchunk]]
  - -> contains -> [[medium-applybeepmask]]
  - -> contains -> [[medium-callrecordid]]
  - -> contains -> [[low]]
  - <- contains <- [[orchestration-synthesis-a2]]
- **Gemini 주장 검증 (Claude 교차 확인)** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 4 connections
  - -> contains -> [[wave-1]]
  - -> contains -> [[wave-2-t1]]
  - -> contains -> [[wave-3]]
  - <- contains <- [[orchestration-synthesis-a2]]
- **일치점 (Gemini + Claude Agreement)** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 4 connections
  - -> contains -> [[critical-oom]]
  - -> contains -> [[high-localstorage]]
  - -> contains -> [[medium-wav]]
  - <- contains <- [[orchestration-synthesis-a2]]
- **Orchestration Synthesis: A2. 파일 스캔 & 품질 분석 — 보안 체크 및 검수** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 4 connections
  - -> contains -> [[gemini-claude-agreement]]
  - -> contains -> [[claude-gemini]]
  - -> contains -> [[gemini-claude]]
  - -> contains -> [[type-review]]
- **CRITICAL: 대용량 오디오 OOM 위험** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[gemini-claude-agreement]]
- **HIGH: extractWavChunk 범위 검증 부재** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[claude-gemini]]
- **HIGH: localStorage에 전체 파일 경로 저장** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[gemini-claude-agreement]]
- **LOW: 타입 안전성 위반** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[claude-gemini]]
- **MEDIUM: applyBeepMask 입력 검증 부재** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[claude-gemini]]
- **MEDIUM: callRecordId를 통한 경로 서버 유출** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[claude-gemini]]
- **MEDIUM: WAV 헤더 파싱 경계 검증 부재** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[gemini-claude-agreement]]
- **팀 구성 권장 (--type review)** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[orchestration-synthesis-a2]]
- **Wave 1 — 병렬 실행 가능 (독립)** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[gemini-claude]]
- **Wave 2 — T1 완료 후** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[gemini-claude]]
- **Wave 3 — 코드 품질 (독립)** (.orchestrate-consult/20260327-210056/orchestrate-synthesis.md) -- 1 connections
  - <- contains <- [[gemini-claude]]

## Internal Relationships
- Claude 추가 발견 (Gemini 미감지) -> contains -> HIGH: extractWavChunk 범위 검증 부재 [EXTRACTED]
- Claude 추가 발견 (Gemini 미감지) -> contains -> MEDIUM: applyBeepMask 입력 검증 부재 [EXTRACTED]
- Claude 추가 발견 (Gemini 미감지) -> contains -> MEDIUM: callRecordId를 통한 경로 서버 유출 [EXTRACTED]
- Claude 추가 발견 (Gemini 미감지) -> contains -> LOW: 타입 안전성 위반 [EXTRACTED]
- Gemini 주장 검증 (Claude 교차 확인) -> contains -> Wave 1 — 병렬 실행 가능 (독립) [EXTRACTED]
- Gemini 주장 검증 (Claude 교차 확인) -> contains -> Wave 2 — T1 완료 후 [EXTRACTED]
- Gemini 주장 검증 (Claude 교차 확인) -> contains -> Wave 3 — 코드 품질 (독립) [EXTRACTED]
- 일치점 (Gemini + Claude Agreement) -> contains -> CRITICAL: 대용량 오디오 OOM 위험 [EXTRACTED]
- 일치점 (Gemini + Claude Agreement) -> contains -> HIGH: localStorage에 전체 파일 경로 저장 [EXTRACTED]
- 일치점 (Gemini + Claude Agreement) -> contains -> MEDIUM: WAV 헤더 파싱 경계 검증 부재 [EXTRACTED]
- Orchestration Synthesis: A2. 파일 스캔 & 품질 분석 — 보안 체크 및 검수 -> contains -> 일치점 (Gemini + Claude Agreement) [EXTRACTED]
- Orchestration Synthesis: A2. 파일 스캔 & 품질 분석 — 보안 체크 및 검수 -> contains -> Claude 추가 발견 (Gemini 미감지) [EXTRACTED]
- Orchestration Synthesis: A2. 파일 스캔 & 품질 분석 — 보안 체크 및 검수 -> contains -> Gemini 주장 검증 (Claude 교차 확인) [EXTRACTED]
- Orchestration Synthesis: A2. 파일 스캔 & 품질 분석 — 보안 체크 및 검수 -> contains -> 팀 구성 권장 (--type review) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Claude 추가 발견 (Gemini 미감지), Gemini 주장 검증 (Claude 교차 확인), 일치점 (Gemini + Claude Agreement)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 orchestrate-synthesis.md이다.
