# __unresolved__::ref::l & pipelineState
Cohesion: 0.15 | Nodes: 15

## Key Nodes
- **__unresolved__::ref::l** () -- 6 connections
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
- **pipelineState** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/pipelineState.ts) -- 5 connections
  - -> contains -> [[makeidle]]
  - -> contains -> [[persist]]
  - -> contains -> [[restore]]
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefreact]]
- **pipelineState** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/pipelineState.ts) -- 5 connections
  - -> contains -> [[makeidle]]
  - -> contains -> [[persist]]
  - -> contains -> [[restore]]
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefreact]]
- **notify** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/pipelineState.ts) -- 3 connections
  - -> calls -> [[unresolvedrefpersist]]
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[pipelinestate]]
- **notify** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/pipelineState.ts) -- 3 connections
  - -> calls -> [[unresolvedrefpersist]]
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[pipelinestate]]
- **__unresolved__::ref::_shareprepengine_** () -- 2 connections
  - <- imports <- [[shareprepstore]]
  - <- imports <- [[shareprepstore]]
- **__unresolved__::ref::persist** () -- 2 connections
  - <- calls <- [[notify]]
  - <- calls <- [[notify]]
- **notify** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/sharePrepStore.ts) -- 2 connections
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[shareprepstore]]
- **sharePrepStore** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/sharePrepStore.ts) -- 2 connections
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefshareprepengine]]
- **notify** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/verificationEngine.ts) -- 2 connections
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[verificationengine]]
- **notify** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/sharePrepStore.ts) -- 2 connections
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[shareprepstore]]
- **sharePrepStore** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/sharePrepStore.ts) -- 2 connections
  - -> contains -> [[notify]]
  - -> imports -> [[unresolvedrefshareprepengine]]
- **notify** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/verificationEngine.ts) -- 2 connections
  - -> calls -> [[unresolvedrefl]]
  - <- contains <- [[verificationengine]]
- **makeIdle** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/pipelineState.ts) -- 1 connections
  - <- contains <- [[pipelinestate]]
- **makeIdle** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/pipelineState.ts) -- 1 connections
  - <- contains <- [[pipelinestate]]

## Internal Relationships
- notify -> calls -> __unresolved__::ref::persist [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- pipelineState -> contains -> makeIdle [EXTRACTED]
- pipelineState -> contains -> notify [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- sharePrepStore -> contains -> notify [EXTRACTED]
- sharePrepStore -> imports -> __unresolved__::ref::_shareprepengine_ [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- notify -> calls -> __unresolved__::ref::persist [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- pipelineState -> contains -> makeIdle [EXTRACTED]
- pipelineState -> contains -> notify [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]
- sharePrepStore -> contains -> notify [EXTRACTED]
- sharePrepStore -> imports -> __unresolved__::ref::_shareprepengine_ [EXTRACTED]
- notify -> calls -> __unresolved__::ref::l [EXTRACTED]

## Cross-Community Connections
- pipelineState -> contains -> persist (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- pipelineState -> contains -> restore (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- pipelineState -> imports -> __unresolved__::ref::_react_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- pipelineState -> contains -> persist (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- pipelineState -> contains -> restore (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- pipelineState -> imports -> __unresolved__::ref::_react_ (-> [[unresolvedrefreact-unresolvedreftypessession]])

## Context
이 커뮤니티는 __unresolved__::ref::l, pipelineState, pipelineState를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 pipelineState.ts, sharePrepStore.ts, verificationEngine.ts이다.
