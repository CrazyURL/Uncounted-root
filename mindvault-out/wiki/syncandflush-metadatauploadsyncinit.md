# syncAndFlush & MetadataUploadSyncInit
Cohesion: 0.17 | Nodes: 13

## Key Nodes
- **syncAndFlush** (src/app/bootstrap/MetadataUploadSyncInit.tsx) -- 6 connections
  - -> calls -> [[unresolvedrefsyncmetadatatouploadqueue]]
  - -> calls -> [[unresolvedrefisonline]]
  - -> calls -> [[unresolvedrefcatch]]
  - -> calls -> [[unresolvedrefflushqueue]]
  - -> calls -> [[unresolvedrefgetuploadendpoint]]
  - <- contains <- [[metadatauploadsyncinit]]
- **MetadataUploadSyncInit** (src/app/bootstrap/MetadataUploadSyncInit.tsx) -- 6 connections
  - -> contains -> [[getuploadendpoint]]
  - -> contains -> [[syncandflush]]
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedreflibmetadatauploadsync]]
  - -> imports -> [[unresolvedreflibuploadqueue]]
  - -> imports -> [[unresolvedreflibnetwork]]
- **ErrorLoggerInit** (src/app/bootstrap/ErrorLoggerInit.tsx) -- 4 connections
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedrefliberrorlogger]]
  - -> imports -> [[unresolvedreflibfunnellogger]]
  - -> imports -> [[unresolvedreflibnetwork]]
- **__unresolved__::ref::_lib_network_** () -- 3 connections
  - <- imports <- [[errorloggerinit]]
  - <- imports <- [[uploadqueueinit]]
  - <- imports <- [[metadatauploadsyncinit]]
- **UploadQueueInit** (src/app/bootstrap/UploadQueueInit.tsx) -- 3 connections
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedreflibuploadqueue]]
  - -> imports -> [[unresolvedreflibnetwork]]
- **__unresolved__::ref::_lib_uploadqueue_** () -- 2 connections
  - <- imports <- [[uploadqueueinit]]
  - <- imports <- [[metadatauploadsyncinit]]
- **__unresolved__::ref::_lib_errorlogger_** () -- 1 connections
  - <- imports <- [[errorloggerinit]]
- **__unresolved__::ref::_lib_metadatauploadsync_** () -- 1 connections
  - <- imports <- [[metadatauploadsyncinit]]
- **__unresolved__::ref::flushqueue** () -- 1 connections
  - <- calls <- [[syncandflush]]
- **__unresolved__::ref::getuploadendpoint** () -- 1 connections
  - <- calls <- [[syncandflush]]
- **__unresolved__::ref::isonline** () -- 1 connections
  - <- calls <- [[syncandflush]]
- **__unresolved__::ref::syncmetadatatouploadqueue** () -- 1 connections
  - <- calls <- [[syncandflush]]
- **getUploadEndpoint** (src/app/bootstrap/MetadataUploadSyncInit.tsx) -- 1 connections
  - <- contains <- [[metadatauploadsyncinit]]

## Internal Relationships
- ErrorLoggerInit -> imports -> __unresolved__::ref::_lib_errorlogger_ [EXTRACTED]
- ErrorLoggerInit -> imports -> __unresolved__::ref::_lib_network_ [EXTRACTED]
- syncAndFlush -> calls -> __unresolved__::ref::syncmetadatatouploadqueue [EXTRACTED]
- syncAndFlush -> calls -> __unresolved__::ref::isonline [EXTRACTED]
- syncAndFlush -> calls -> __unresolved__::ref::flushqueue [EXTRACTED]
- syncAndFlush -> calls -> __unresolved__::ref::getuploadendpoint [EXTRACTED]
- MetadataUploadSyncInit -> contains -> getUploadEndpoint [EXTRACTED]
- MetadataUploadSyncInit -> contains -> syncAndFlush [EXTRACTED]
- MetadataUploadSyncInit -> imports -> __unresolved__::ref::_lib_metadatauploadsync_ [EXTRACTED]
- MetadataUploadSyncInit -> imports -> __unresolved__::ref::_lib_uploadqueue_ [EXTRACTED]
- MetadataUploadSyncInit -> imports -> __unresolved__::ref::_lib_network_ [EXTRACTED]
- UploadQueueInit -> imports -> __unresolved__::ref::_lib_uploadqueue_ [EXTRACTED]
- UploadQueueInit -> imports -> __unresolved__::ref::_lib_network_ [EXTRACTED]

## Cross-Community Connections
- ErrorLoggerInit -> imports -> __unresolved__::ref::_react_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- ErrorLoggerInit -> imports -> __unresolved__::ref::_lib_funnellogger_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- syncAndFlush -> calls -> __unresolved__::ref::catch (-> [[unresolvedrefstring-unresolvedrefgetmonth]])
- MetadataUploadSyncInit -> imports -> __unresolved__::ref::_react_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- UploadQueueInit -> imports -> __unresolved__::ref::_react_ (-> [[unresolvedrefreact-unresolvedreftypessession]])

## Context
이 커뮤니티는 syncAndFlush, MetadataUploadSyncInit, ErrorLoggerInit를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 ErrorLoggerInit.tsx, MetadataUploadSyncInit.tsx, UploadQueueInit.tsx이다.
