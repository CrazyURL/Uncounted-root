# __unresolved__::ref::__unresolved____ref__l & pipelineState
Cohesion: 0.15 | Nodes: 15

## Key Nodes
- **__unresolved__::ref::__unresolved____ref__l** () -- 6 connections
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
- **pipelineState** (uncounted-admin/src/lib/pipelineState.ts) -- 5 connections
  - -> contains -> [[makeidle]]
  - -> contains -> [[persist]]
  - -> contains -> [[restore]]
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefunresolvedrefreact]]
- **pipelineState** (uncounted-app/src/lib/pipelineState.ts) -- 5 connections
  - -> contains -> [[makeidle]]
  - -> contains -> [[persist]]
  - -> contains -> [[restore]]
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefunresolvedrefreact]]
- **notify** (uncounted-admin/src/lib/pipelineState.ts) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefpersist]]
  - -> calls -> [[unresolvedrefunresolvedrefl]]
  - <- contains <- [[pipelinestate]]
- **notify** (uncounted-app/src/lib/pipelineState.ts) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefpersist]]
  - -> calls -> [[unresolvedrefunresolvedrefl]]
  - <- contains <- [[pipelinestate]]
- **__unresolved__::ref::__unresolved____ref___shareprepengine_** () -- 2 connections
  - <- imports <- [[shareprepstore]]
  - <- imports <- [[shareprepstore]]
- **__unresolved__::ref::__unresolved____ref__persist** () -- 2 connections
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
- **sharePrepStore** (uncounted-admin/src/lib/sharePrepStore.ts) -- 2 connections
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefunresolvedrefshareprepengine]]
- **notify** (uncounted-admin/src/lib/sharePrepStore.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefl]]
  - <- contains <- [[shareprepstore]]
- **notify** (uncounted-admin/src/lib/verificationEngine.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefl]]
  - <- contains <- [[verificationengine]]
- **sharePrepStore** (uncounted-app/src/lib/sharePrepStore.ts) -- 2 connections
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefunresolvedrefshareprepengine]]
- **notify** (uncounted-app/src/lib/sharePrepStore.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefl]]
  - <- contains <- [[shareprepstore]]
- **notify** (uncounted-app/src/lib/verificationEngine.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefl]]
  - <- contains <- [[verificationengine]]
- **makeIdle** (uncounted-admin/src/lib/pipelineState.ts) -- 1 connections
  - <- contains <- [[pipelinestate]]
- **makeIdle** (uncounted-app/src/lib/pipelineState.ts) -- 1 connections
  - <- contains <- [[pipelinestate]]

## Internal Relationships
- pipelineState -> contains -> makeIdle [EXTRACTED]
- pipelineState -> contains -> notify [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref__persist [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref__l [EXTRACTED]
- sharePrepStore -> contains -> notify [EXTRACTED]
- sharePrepStore -> imports -> __unresolved__::ref::__unresolved____ref___shareprepengine_ [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref__l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref__l [EXTRACTED]
- pipelineState -> contains -> makeIdle [EXTRACTED]
- pipelineState -> contains -> notify [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref__persist [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref__l [EXTRACTED]
- sharePrepStore -> contains -> notify [EXTRACTED]
- sharePrepStore -> imports -> __unresolved__::ref::__unresolved____ref___shareprepengine_ [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref__l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::__unresolved____ref__l [EXTRACTED]

## Cross-Community Connections
- pipelineState -> contains -> persist (-> [[unresolvedrefunresolvedrefgetitem-unresolvedrefunresolvedrefpush]])
- pipelineState -> contains -> restore (-> [[unresolvedrefunresolvedrefgetitem-unresolvedrefunresolvedrefpush]])
- pipelineState -> imports -> __unresolved__::ref::__unresolved____ref___react_ (-> [[unresolvedrefunresolvedrefreact-unresolvedrefunresolvedreftypessession]])
- pipelineState -> contains -> persist (-> [[unresolvedrefunresolvedrefgetitem-unresolvedrefunresolvedrefpush]])
- pipelineState -> contains -> restore (-> [[unresolvedrefunresolvedrefgetitem-unresolvedrefunresolvedrefpush]])
- pipelineState -> imports -> __unresolved__::ref::__unresolved____ref___react_ (-> [[unresolvedrefunresolvedrefreact-unresolvedrefunresolvedreftypessession]])

## Context
이 커뮤니티는 __unresolved__::ref::__unresolved____ref__l, pipelineState, pipelineState를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 pipelineState.ts, sharePrepStore.ts, verificationEngine.ts이다.
