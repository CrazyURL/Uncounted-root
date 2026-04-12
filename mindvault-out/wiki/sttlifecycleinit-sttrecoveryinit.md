# SttLifecycleInit & SttRecoveryInit
Cohesion: 0.14 | Nodes: 19

## Key Nodes
- **SttLifecycleInit** (/Users/gdash/project/uncounted-project/uncounted-app/src/app/bootstrap/SttLifecycleInit.tsx) -- 14 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefcapacitorcore]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefcapacitorapp]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedreflibsttengine]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedreflibpipelineorchestrator]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedreftypessession]]
  - -> imports -> [[unresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedrefcapacitorcore]]
  - -> imports -> [[unresolvedrefunresolvedrefcapacitorapp]]
  - -> imports -> [[unresolvedrefunresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedrefunresolvedreflibsttengine]]
  - -> imports -> [[unresolvedrefunresolvedreflibpipelineorchestrator]]
  - -> imports -> [[unresolvedrefunresolvedreftypessession]]
- **SttRecoveryInit** (/Users/gdash/project/uncounted-project/uncounted-app/src/app/bootstrap/SttRecoveryInit.tsx) -- 6 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedreflibsttengine]]
  - -> imports -> [[unresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedrefunresolvedreflibsttengine]]
- **UtteranceReviewTable** (/Users/gdash/project/uncounted-project/uncounted-admin/src/components/domain/UtteranceReviewTable.tsx) -- 4 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedreftypesexport]]
  - -> imports -> [[unresolvedrefunresolvedrefreact]]
  - -> imports -> [[unresolvedrefunresolvedreftypesexport]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref___react_** () -- 3 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
  - <- imports <- [[utterancereviewtable]]
- **__unresolved__::ref::__unresolved____ref___react_** () -- 3 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
  - <- imports <- [[utterancereviewtable]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref___lib_sessionmapper_** () -- 2 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref___lib_sttengine_** () -- 2 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref___lib_sessionmapper_** () -- 2 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref___lib_sttengine_** () -- 2 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref____capacitor_app_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref____capacitor_core_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____capacitor_app_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____capacitor_core_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref___lib_pipelineorchestrator_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref___types_export_** () -- 1 connections
  - <- imports <- [[utterancereviewtable]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref___types_session_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref___lib_pipelineorchestrator_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__unresolved____ref___types_export_** () -- 1 connections
  - <- imports <- [[utterancereviewtable]]
- **__unresolved__::ref::__unresolved____ref___types_session_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]

## Internal Relationships
- UtteranceReviewTable -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___react_ [EXTRACTED]
- UtteranceReviewTable -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___types_export_ [EXTRACTED]
- UtteranceReviewTable -> imports -> __unresolved__::ref::__unresolved____ref___react_ [EXTRACTED]
- UtteranceReviewTable -> imports -> __unresolved__::ref::__unresolved____ref___types_export_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___react_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____capacitor_core_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____capacitor_app_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___lib_sessionmapper_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___lib_sttengine_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___lib_pipelineorchestrator_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___types_session_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___react_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____capacitor_core_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref____capacitor_app_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_sessionmapper_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_sttengine_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_pipelineorchestrator_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__unresolved____ref___types_session_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___react_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___lib_sessionmapper_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___lib_sttengine_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref___react_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_sessionmapper_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::__unresolved____ref___lib_sttengine_ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SttLifecycleInit, SttRecoveryInit, UtteranceReviewTable를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 SttLifecycleInit.tsx, SttRecoveryInit.tsx, UtteranceReviewTable.tsx이다.
