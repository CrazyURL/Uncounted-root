# runNonSttStages & __unresolved__::ref::__unresolved____ref__runlabelforall
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **runNonSttStages** (uncounted-app/src/lib/pipelineOrchestrator.ts) -- 6 connections
  - -> calls -> [[unresolvedrefunresolvedrefpipelineupdatestage]]
  - -> calls -> [[unresolvedrefunresolvedrefupdateprocessingtask]]
  - -> calls -> [[unresolvedrefunresolvedrefrunpiiforall]]
  - -> calls -> [[unresolvedrefunresolvedrefrunlabelforall]]
  - -> calls -> [[unresolvedrefunresolvedrefsaveallsessions]]
  - <- contains <- [[pipelineorchestrator]]
- **__unresolved__::ref::__unresolved____ref__runlabelforall** () -- 1 connections
  - <- calls <- [[runnonsttstages]]
- **__unresolved__::ref::__unresolved____ref__runpiiforall** () -- 1 connections
  - <- calls <- [[runnonsttstages]]
- **__unresolved__::ref::__unresolved____ref__saveallsessions** () -- 1 connections
  - <- calls <- [[runnonsttstages]]
- **__unresolved__::ref::__unresolved____ref__updateprocessingtask** () -- 1 connections
  - <- calls <- [[runnonsttstages]]

## Internal Relationships
- runNonSttStages -> calls -> __unresolved__::ref::__unresolved____ref__updateprocessingtask [EXTRACTED]
- runNonSttStages -> calls -> __unresolved__::ref::__unresolved____ref__runpiiforall [EXTRACTED]
- runNonSttStages -> calls -> __unresolved__::ref::__unresolved____ref__runlabelforall [EXTRACTED]
- runNonSttStages -> calls -> __unresolved__::ref::__unresolved____ref__saveallsessions [EXTRACTED]

## Cross-Community Connections
- runNonSttStages -> calls -> __unresolved__::ref::__unresolved____ref__pipelineupdatestage (-> [[unresolvedrefunresolvedrefgetitem-unresolvedrefunresolvedrefpush]])

## Context
이 커뮤니티는 runNonSttStages, __unresolved__::ref::__unresolved____ref__runlabelforall, __unresolved__::ref::__unresolved____ref__runpiiforall를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 pipelineOrchestrator.ts이다.
