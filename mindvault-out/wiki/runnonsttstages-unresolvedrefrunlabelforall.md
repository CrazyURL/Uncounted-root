# runNonSttStages & __unresolved__::ref::runlabelforall
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **runNonSttStages** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/pipelineOrchestrator.ts) -- 6 connections
  - -> calls -> [[unresolvedrefpipelineupdatestage]]
  - -> calls -> [[unresolvedrefupdateprocessingtask]]
  - -> calls -> [[unresolvedrefrunpiiforall]]
  - -> calls -> [[unresolvedrefrunlabelforall]]
  - -> calls -> [[unresolvedrefsaveallsessions]]
  - <- contains <- [[pipelineorchestrator]]
- **__unresolved__::ref::runlabelforall** () -- 1 connections
  - <- calls <- [[runnonsttstages]]
- **__unresolved__::ref::runpiiforall** () -- 1 connections
  - <- calls <- [[runnonsttstages]]
- **__unresolved__::ref::saveallsessions** () -- 1 connections
  - <- calls <- [[runnonsttstages]]
- **__unresolved__::ref::updateprocessingtask** () -- 1 connections
  - <- calls <- [[runnonsttstages]]

## Internal Relationships
- runNonSttStages -> calls -> __unresolved__::ref::updateprocessingtask [EXTRACTED]
- runNonSttStages -> calls -> __unresolved__::ref::runpiiforall [EXTRACTED]
- runNonSttStages -> calls -> __unresolved__::ref::runlabelforall [EXTRACTED]
- runNonSttStages -> calls -> __unresolved__::ref::saveallsessions [EXTRACTED]

## Cross-Community Connections
- runNonSttStages -> calls -> __unresolved__::ref::pipelineupdatestage (-> [[unresolvedrefpush-testparseinstinct]])

## Context
이 커뮤니티는 runNonSttStages, __unresolved__::ref::runlabelforall, __unresolved__::ref::runpiiforall를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 pipelineOrchestrator.ts이다.
