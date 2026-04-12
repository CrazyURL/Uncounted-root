# SttLifecycleInit & __unresolved__::ref::_react_
Cohesion: 0.22 | Nodes: 11

## Key Nodes
- **SttLifecycleInit** (/Users/gdash/project/uncounted-project/uncounted-app/src/app/bootstrap/SttLifecycleInit.tsx) -- 7 connections
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedrefcapacitorcore]]
  - -> imports -> [[unresolvedrefcapacitorapp]]
  - -> imports -> [[unresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedreflibsttengine]]
  - -> imports -> [[unresolvedreflibpipelineorchestrator]]
  - -> imports -> [[unresolvedreftypessession]]
- **__unresolved__::ref::_react_** () -- 3 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
  - <- imports <- [[utterancereviewtable]]
- **SttRecoveryInit** (/Users/gdash/project/uncounted-project/uncounted-app/src/app/bootstrap/SttRecoveryInit.tsx) -- 3 connections
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedreflibsessionmapper]]
  - -> imports -> [[unresolvedreflibsttengine]]
- **__unresolved__::ref::_lib_sessionmapper_** () -- 2 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::_lib_sttengine_** () -- 2 connections
  - <- imports <- [[sttrecoveryinit]]
  - <- imports <- [[sttlifecycleinit]]
- **UtteranceReviewTable** (/Users/gdash/project/uncounted-project/uncounted-admin/src/components/domain/UtteranceReviewTable.tsx) -- 2 connections
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedreftypesexport]]
- **__unresolved__::ref::__capacitor_app_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::__capacitor_core_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::_lib_pipelineorchestrator_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]
- **__unresolved__::ref::_types_export_** () -- 1 connections
  - <- imports <- [[utterancereviewtable]]
- **__unresolved__::ref::_types_session_** () -- 1 connections
  - <- imports <- [[sttlifecycleinit]]

## Internal Relationships
- UtteranceReviewTable -> imports -> __unresolved__::ref::_react_ [EXTRACTED]
- UtteranceReviewTable -> imports -> __unresolved__::ref::_types_export_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::_react_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__capacitor_core_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::__capacitor_app_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::_lib_sessionmapper_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::_lib_sttengine_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::_lib_pipelineorchestrator_ [EXTRACTED]
- SttLifecycleInit -> imports -> __unresolved__::ref::_types_session_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::_react_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::_lib_sessionmapper_ [EXTRACTED]
- SttRecoveryInit -> imports -> __unresolved__::ref::_lib_sttengine_ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SttLifecycleInit, __unresolved__::ref::_react_, SttRecoveryInit를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 SttLifecycleInit.tsx, SttRecoveryInit.tsx, UtteranceReviewTable.tsx이다.
