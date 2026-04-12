# syncAndFlush & __unresolved__::ref::__unresolved____ref__flushqueue
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **syncAndFlush** (uncounted-app/src/app/bootstrap/MetadataUploadSyncInit.tsx) -- 6 connections
  - -> calls -> [[unresolvedrefunresolvedrefsyncmetadatatouploadqueue]]
  - -> calls -> [[unresolvedrefunresolvedrefisonline]]
  - -> calls -> [[unresolvedrefunresolvedrefcatch]]
  - -> calls -> [[unresolvedrefunresolvedrefflushqueue]]
  - -> calls -> [[unresolvedrefunresolvedrefgetuploadendpoint]]
  - <- contains <- [[metadatauploadsyncinit]]
- **__unresolved__::ref::__unresolved____ref__flushqueue** () -- 1 connections
  - <- calls <- [[syncandflush]]
- **__unresolved__::ref::__unresolved____ref__getuploadendpoint** () -- 1 connections
  - <- calls <- [[syncandflush]]
- **__unresolved__::ref::__unresolved____ref__isonline** () -- 1 connections
  - <- calls <- [[syncandflush]]
- **__unresolved__::ref::__unresolved____ref__syncmetadatatouploadqueue** () -- 1 connections
  - <- calls <- [[syncandflush]]

## Internal Relationships
- syncAndFlush -> calls -> __unresolved__::ref::__unresolved____ref__syncmetadatatouploadqueue [EXTRACTED]
- syncAndFlush -> calls -> __unresolved__::ref::__unresolved____ref__isonline [EXTRACTED]
- syncAndFlush -> calls -> __unresolved__::ref::__unresolved____ref__flushqueue [EXTRACTED]
- syncAndFlush -> calls -> __unresolved__::ref::__unresolved____ref__getuploadendpoint [EXTRACTED]

## Cross-Community Connections
- syncAndFlush -> calls -> __unresolved__::ref::__unresolved____ref__catch (-> [[unresolvedrefunresolvedrefgetitem-unresolvedrefunresolvedrefpush]])

## Context
이 커뮤니티는 syncAndFlush, __unresolved__::ref::__unresolved____ref__flushqueue, __unresolved__::ref::__unresolved____ref__getuploadendpoint를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 MetadataUploadSyncInit.tsx이다.
