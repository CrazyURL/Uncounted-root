# SttLifecycleInit & __unresolved__::ref::__unresolved____ref___react_
Cohesion: 0.22 | Nodes: 11

## Key Nodes
- **SttLifecycleInit** (uncounted-app/src/app/bootstrap/SttLifecycleInit.tsx) -- 7 connections
  - -> imports -> [[unresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedrefcapacitorcore]]
  - -> imports -> [[unresolvedrefunresolvedrefcapacitorapp]]
  - -> imports -> [[unresolvedrefunresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedrefunresolvedreflibsttengine]]
  - -> imports -> [[unresolvedrefunresolvedreflibpipelineorchestrator]]
  - -> imports -> [[unresolvedrefunresolvedreftypessession]]
- **__unresolved__::ref::__unresolved____ref___react_** () -- 3 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
  - <- imports <- [[utterancereviewtable]]
- **SttRecoveryInit** (uncounted-app/src/app/bootstrap/SttRecoveryInit.tsx) -- 3 connections
  - -> imports -> [[unresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedrefunresolvedreflibsttengine]]
- **__unresolved__::ref::__unresolved____ref___lib_sessionmapper_** () -- 2 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref___lib_sttengine_** () -- 2 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
- **UtteranceReviewTable** (uncounted-admin/src/components/domain/UtteranceReviewTable.tsx) -- 2 connections
  - -> imports -> [[unresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedreftypesexport]]
- **__unresolved__::ref::__unresolved____ref____capacitor_app_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref____capacitor_core_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref___lib_pipelineorchestrator_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref___types_export_** () -- 1 connections
  - <- imports <- [[utterancereviewtable]]
- **__unresolved__::ref::__unresolved____ref___types_session_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]

## Internal Relationships
- UtteranceReviewTable -> imports -> __unresolved__::ref::__unresolved____ref___react_ [EXTRACTED]
- UtteranceReviewTable -> imports -> __unresolved__::ref::__unresolved____ref___types_export_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___react_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____capacitor_core_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____capacitor_app_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_sessionmapper_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_sttengine_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_pipelineorchestrator_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___types_session_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref___react_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_sessionmapper_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_sttengine_ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SttLifecycleInit, __unresolved__::ref::__unresolved____ref___react_, SttRecoveryInit를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 SttLifecycleInit.tsx, SttRecoveryInit.tsx, UtteranceReviewTable.tsx이다.
