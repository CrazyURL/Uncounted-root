# Task Decomposition & Task 10: Add packaging and deployment assets after code structure stabilizes
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **Task Decomposition** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 10 connections
  - -> contains -> [[task-1-capture-the-current-contract-and-runtime-baseline]]
  - -> contains -> [[task-2-create-the-target-package-skeleton-without-changing-behavior]]
  - -> contains -> [[task-3-extract-schemas-and-job-state-types-from-mainpy]]
  - -> contains -> [[task-4-extract-job-management-into-jobstore]]
  - -> contains -> [[task-5-refactor-configuration-into-a-settings-class]]
  - -> contains -> [[task-6-extract-piimaskerpy-into-a-service-wrapper-with-logic-preservation]]
  - -> contains -> [[task-7-extract-sttprocessorpy-into-whisperxservice]]
  - -> contains -> [[task-8-split-routers-and-reduce-mainpy-to-composition-only]]
  - -> contains -> [[task-9-reorganize-and-harden-tests-around-preserved-behavior]]
  - -> contains -> [[task-10-add-packaging-and-deployment-assets-after-code-structure-stabilizes]]
- **Task 10: Add packaging and deployment assets after code structure stabilizes** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 1: Capture the current contract and runtime baseline** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 2: Create the target package skeleton without changing behavior** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 3: Extract schemas and job state types from `main.py`** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 4: Extract job management into `JobStore`** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 5: Refactor configuration into a `Settings` class** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 6: Extract `pii_masker.py` into a service wrapper with logic preservation** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 7: Extract `stt_processor.py` into `WhisperXService`** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 8: Split routers and reduce `main.py` to composition only** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]
- **Task 9: Reorganize and harden tests around preserved behavior** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.orchestrate-consult/20260410-112151/codex.md) -- 1 connections
  - <- contains <- [[task-decomposition]]

## Internal Relationships
- Task Decomposition -> contains -> Task 1: Capture the current contract and runtime baseline [EXTRACTED]
- Task Decomposition -> contains -> Task 2: Create the target package skeleton without changing behavior [EXTRACTED]
- Task Decomposition -> contains -> Task 3: Extract schemas and job state types from `main.py` [EXTRACTED]
- Task Decomposition -> contains -> Task 4: Extract job management into `JobStore` [EXTRACTED]
- Task Decomposition -> contains -> Task 5: Refactor configuration into a `Settings` class [EXTRACTED]
- Task Decomposition -> contains -> Task 6: Extract `pii_masker.py` into a service wrapper with logic preservation [EXTRACTED]
- Task Decomposition -> contains -> Task 7: Extract `stt_processor.py` into `WhisperXService` [EXTRACTED]
- Task Decomposition -> contains -> Task 8: Split routers and reduce `main.py` to composition only [EXTRACTED]
- Task Decomposition -> contains -> Task 9: Reorganize and harden tests around preserved behavior [EXTRACTED]
- Task Decomposition -> contains -> Task 10: Add packaging and deployment assets after code structure stabilizes [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Task Decomposition, Task 10: Add packaging and deployment assets after code structure stabilizes, Task 1: Capture the current contract and runtime baseline를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 codex.md이다.
