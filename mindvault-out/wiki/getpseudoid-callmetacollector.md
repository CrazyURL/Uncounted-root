# getPseudoId & callMetaCollector
Cohesion: 0.13 | Nodes: 19

## Key Nodes
- **getPseudoId** (uncounted-app/src/lib/callMetaCollector.ts) -- 8 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefgetitem]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefgenerateuuid]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefsetitem]]
  - -> calls -> [[unresolvedrefgetitem]]
  - -> calls -> [[unresolvedrefgenerateuuid]]
  - -> calls -> [[unresolvedrefsetitem]]
  - <- contains <- [[callmetacollector]]
  - <- contains <- [[callmetacollector]]
- **callMetaCollector** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/callMetaCollector.ts) -- 6 connections
  - -> contains -> [[calllogplugin]]
  - -> contains -> [[getpseudoid]]
  - -> contains -> [[getmetadataconsent]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefcapacitorcore]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedreftypesmetadata]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefuuid]]
- **getMetadataConsent** (uncounted-app/src/lib/callMetaCollector.ts) -- 6 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefgetitem]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefparse]]
  - -> calls -> [[unresolvedrefgetitem]]
  - -> calls -> [[unresolvedrefparse]]
  - <- contains <- [[callmetacollector]]
  - <- contains <- [[callmetacollector]]
- **callMetaCollector** (uncounted-app/src/lib/callMetaCollector.ts) -- 6 connections
  - -> contains -> [[calllogplugin]]
  - -> contains -> [[getpseudoid]]
  - -> contains -> [[getmetadataconsent]]
  - -> imports -> [[unresolvedrefcapacitorcore]]
  - -> imports -> [[unresolvedreftypesmetadata]]
  - -> imports -> [[unresolvedrefuuid]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__getitem** () -- 2 connections
  - <- calls <- [[getpseudoid]]
  - <- calls <- [[getmetadataconsent]]
- **__unresolved__::ref::getitem** () -- 2 connections
  - <- calls <- [[getpseudoid]]
  - <- calls <- [[getmetadataconsent]]
- **CallLogPlugin** (uncounted-app/src/lib/callMetaCollector.ts) -- 2 connections
  - <- contains <- [[callmetacollector]]
  - <- contains <- [[callmetacollector]]
- **__unresolved__::ref::__capacitor_core_** () -- 1 connections
  - <- imports <- [[callmetacollector]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____capacitor_core_** () -- 1 connections
  - <- imports <- [[callmetacollector]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref___types_metadata_** () -- 1 connections
  - <- imports <- [[callmetacollector]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref___uuid_** () -- 1 connections
  - <- imports <- [[callmetacollector]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__generateuuid** () -- 1 connections
  - <- calls <- [[getpseudoid]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__parse** () -- 1 connections
  - <- calls <- [[getmetadataconsent]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref__setitem** () -- 1 connections
  - <- calls <- [[getpseudoid]]
- **__unresolved__::ref::_types_metadata_** () -- 1 connections
  - <- imports <- [[callmetacollector]]
- **__unresolved__::ref::_uuid_** () -- 1 connections
  - <- imports <- [[callmetacollector]]
- **__unresolved__::ref::generateuuid** () -- 1 connections
  - <- calls <- [[getpseudoid]]
- **__unresolved__::ref::parse** () -- 1 connections
  - <- calls <- [[getmetadataconsent]]
- **__unresolved__::ref::setitem** () -- 1 connections
  - <- calls <- [[getpseudoid]]

## Internal Relationships
- callMetaCollector -> contains -> CallLogPlugin [EXTRACTED]
- callMetaCollector -> contains -> getPseudoId [EXTRACTED]
- callMetaCollector -> contains -> getMetadataConsent [EXTRACTED]
- callMetaCollector -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____capacitor_core_ [EXTRACTED]
- callMetaCollector -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___types_metadata_ [EXTRACTED]
- callMetaCollector -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref___uuid_ [EXTRACTED]
- getMetadataConsent -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref__getitem [EXTRACTED]
- getMetadataConsent -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref__parse [EXTRACTED]
- getMetadataConsent -> calls -> __unresolved__::ref::getitem [EXTRACTED]
- getMetadataConsent -> calls -> __unresolved__::ref::parse [EXTRACTED]
- getPseudoId -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref__getitem [EXTRACTED]
- getPseudoId -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref__generateuuid [EXTRACTED]
- getPseudoId -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref__setitem [EXTRACTED]
- getPseudoId -> calls -> __unresolved__::ref::getitem [EXTRACTED]
- getPseudoId -> calls -> __unresolved__::ref::generateuuid [EXTRACTED]
- getPseudoId -> calls -> __unresolved__::ref::setitem [EXTRACTED]
- callMetaCollector -> contains -> CallLogPlugin [EXTRACTED]
- callMetaCollector -> contains -> getPseudoId [EXTRACTED]
- callMetaCollector -> contains -> getMetadataConsent [EXTRACTED]
- callMetaCollector -> imports -> __unresolved__::ref::__capacitor_core_ [EXTRACTED]
- callMetaCollector -> imports -> __unresolved__::ref::_types_metadata_ [EXTRACTED]
- callMetaCollector -> imports -> __unresolved__::ref::_uuid_ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 getPseudoId, callMetaCollector, getMetadataConsent를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 callMetaCollector.ts이다.
