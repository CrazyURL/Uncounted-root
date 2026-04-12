# AGENTS.md — Uncounted Client (OpenAI Codex CLI) & 핵심 라이브러리 (`src/lib/`)
Cohesion: 0.09 | Nodes: 24

## Key Nodes
- **AGENTS.md — Uncounted Client (OpenAI Codex CLI)** (uncounted-app/AGENTS.md) -- 9 connections
  - -> contains -> [[codex]]
  - -> contains -> [[multi-agent]]
  - -> contains -> [[mcp]]
  - -> contains -> [[stt-android-java]]
  - -> contains -> [[srctypes]]
  - -> contains -> [[app-srcappapptsx]]
  - -> contains -> [[srclibcollectorts]]
  - -> contains -> [[srclib]]
  - -> contains -> [[localstorage]]
- **핵심 라이브러리 (`src/lib/`)** (uncounted-app/AGENTS.md) -- 7 connections
  - -> contains -> [[stt]]
  - -> contains -> [[srclibautolabel]]
  - -> contains -> [[pii]]
  - -> contains -> [[api-srclibapi]]
  - -> contains -> [[js-vite]]
  - -> contains -> [[android-localproperties]]
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **네이티브 STT 파이프라인 (Android Java)** (uncounted-app/AGENTS.md) -- 4 connections
  - -> contains -> [[java-androidappsrcmainjavacomuncountedapp]]
  - -> contains -> [[stt-onnx]]
  - -> contains -> [[capacitor-js]]
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **localStorage 키 (주요)** (uncounted-app/AGENTS.md) -- 3 connections
  - -> has_code_example -> [[bash]]
  - -> contains -> [[android]]
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **bash** (uncounted-app/AGENTS.md) -- 2 connections
  - <- has_code_example <- [[multi-agent]]
  - <- has_code_example <- [[localstorage]]
- **MCP 서버** (uncounted-app/AGENTS.md) -- 2 connections
  - -> contains -> [[oauth]]
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **Multi-Agent 가이드** (uncounted-app/AGENTS.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **Session (`session.ts`)** (uncounted-app/AGENTS.md) -- 2 connections
  - -> has_code_example -> [[ts]]
  - <- contains <- [[srctypes]]
- **핵심 타입 (`src/types/`)** (uncounted-app/AGENTS.md) -- 2 connections
  - -> contains -> [[session-sessionts]]
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **ts** (uncounted-app/AGENTS.md) -- 1 connections
  - <- has_code_example <- [[session-sessionts]]
- **Android 환경 분리** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[localstorage]]
- **Android (`local.properties`)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[srclib]]
- **API (`src/lib/api/`)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[srclib]]
- **App 초기화 컴포넌트 (`src/app/App.tsx`)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **Capacitor 이벤트 (네이티브 → JS)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[stt-android-java]]
- **Codex 도구 매핑** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **네이티브 Java 패키지 구조 (`android/app/src/main/java/com/uncounted/app/`)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[stt-android-java]]
- **JS (Vite)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[srclib]]
- **OAuth 플로우 (네이티브)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[mcp]]
- **PII/프라이버시** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[srclib]]
- **메타데이터 컬렉터 (`src/lib/*Collector.ts`)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[agentsmd-uncounted-client-openai-codex-cli]]
- **라벨링 (`src/lib/autoLabel/`)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[srclib]]
- **STT/음성** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[srclib]]
- **STT 모델 (ONNX)** (uncounted-app/AGENTS.md) -- 1 connections
  - <- contains <- [[stt-android-java]]

## Internal Relationships
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> Codex 도구 매핑 [EXTRACTED]
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> Multi-Agent 가이드 [EXTRACTED]
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> MCP 서버 [EXTRACTED]
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> 네이티브 STT 파이프라인 (Android Java) [EXTRACTED]
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> 핵심 타입 (`src/types/`) [EXTRACTED]
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> App 초기화 컴포넌트 (`src/app/App.tsx`) [EXTRACTED]
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> 메타데이터 컬렉터 (`src/lib/*Collector.ts`) [EXTRACTED]
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> 핵심 라이브러리 (`src/lib/`) [EXTRACTED]
- AGENTS.md — Uncounted Client (OpenAI Codex CLI) -> contains -> localStorage 키 (주요) [EXTRACTED]
- localStorage 키 (주요) -> has_code_example -> bash [EXTRACTED]
- localStorage 키 (주요) -> contains -> Android 환경 분리 [EXTRACTED]
- MCP 서버 -> contains -> OAuth 플로우 (네이티브) [EXTRACTED]
- Multi-Agent 가이드 -> has_code_example -> bash [EXTRACTED]
- Session (`session.ts`) -> has_code_example -> ts [EXTRACTED]
- 핵심 라이브러리 (`src/lib/`) -> contains -> STT/음성 [EXTRACTED]
- 핵심 라이브러리 (`src/lib/`) -> contains -> 라벨링 (`src/lib/autoLabel/`) [EXTRACTED]
- 핵심 라이브러리 (`src/lib/`) -> contains -> PII/프라이버시 [EXTRACTED]
- 핵심 라이브러리 (`src/lib/`) -> contains -> API (`src/lib/api/`) [EXTRACTED]
- 핵심 라이브러리 (`src/lib/`) -> contains -> JS (Vite) [EXTRACTED]
- 핵심 라이브러리 (`src/lib/`) -> contains -> Android (`local.properties`) [EXTRACTED]
- 핵심 타입 (`src/types/`) -> contains -> Session (`session.ts`) [EXTRACTED]
- 네이티브 STT 파이프라인 (Android Java) -> contains -> 네이티브 Java 패키지 구조 (`android/app/src/main/java/com/uncounted/app/`) [EXTRACTED]
- 네이티브 STT 파이프라인 (Android Java) -> contains -> STT 모델 (ONNX) [EXTRACTED]
- 네이티브 STT 파이프라인 (Android Java) -> contains -> Capacitor 이벤트 (네이티브 → JS) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 AGENTS.md — Uncounted Client (OpenAI Codex CLI), 핵심 라이브러리 (`src/lib/`), 네이티브 STT 파이프라인 (Android Java)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 AGENTS.md이다.
