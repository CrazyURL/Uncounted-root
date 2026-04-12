# UploadQueueInit & __unresolved__::ref::_lib_network_
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **UploadQueueInit** (/Users/gdash/project/uncounted-project/uncounted-app/src/app/bootstrap/UploadQueueInit.tsx) -- 3 connections
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedreflibuploadqueue]]
  - -> imports -> [[unresolvedreflibnetwork]]
- **__unresolved__::ref::_lib_network_** () -- 1 connections
  - <- imports <- [[uploadqueueinit]]
- **__unresolved__::ref::_lib_uploadqueue_** () -- 1 connections
  - <- imports <- [[uploadqueueinit]]
- **__unresolved__::ref::_react_** () -- 1 connections
  - <- imports <- [[uploadqueueinit]]

## Internal Relationships
- UploadQueueInit -> imports -> __unresolved__::ref::_react_ [EXTRACTED]
- UploadQueueInit -> imports -> __unresolved__::ref::_lib_uploadqueue_ [EXTRACTED]
- UploadQueueInit -> imports -> __unresolved__::ref::_lib_network_ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 UploadQueueInit, __unresolved__::ref::_lib_network_, __unresolved__::ref::_lib_uploadqueue_를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 UploadQueueInit.tsx이다.
