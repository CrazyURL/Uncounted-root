# metadataExportResolver & metadataExportResolver
Cohesion: 0.29 | Nodes: 12

## Key Nodes
- **metadataExportResolver** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/metadataExportResolver.ts) -- 14 connections
  - -> contains -> [[loaddevicecontextrecords]]
  - -> imports -> [[unresolvedreftypessku]]
  - -> imports -> [[unresolvedreftypessession]]
  - -> imports -> [[unresolvedreftypesmetadata]]
  - -> imports -> [[unresolvedrefaudioenvironmentcollector]]
  - -> imports -> [[unresolvedrefcalltimepatterncollector]]
  - -> imports -> [[unresolvedrefscreensessioncollector]]
  - -> imports -> [[unresolvedrefbatterycollector]]
  - -> imports -> [[unresolvedrefnetworkcollector]]
  - -> imports -> [[unresolvedrefactivitystatecollector]]
  - -> imports -> [[unresolvedrefambientlightcollector]]
  - -> imports -> [[unresolvedrefdevicemotioncollector]]
  - -> imports -> [[unresolvedrefapplifecyclecollector]]
  - -> imports -> [[unresolvedrefmediaplaybackcollector]]
- **metadataExportResolver** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/metadataExportResolver.ts) -- 14 connections
  - -> contains -> [[loaddevicecontextrecords]]
  - -> imports -> [[unresolvedreftypessku]]
  - -> imports -> [[unresolvedreftypessession]]
  - -> imports -> [[unresolvedreftypesmetadata]]
  - -> imports -> [[unresolvedrefaudioenvironmentcollector]]
  - -> imports -> [[unresolvedrefcalltimepatterncollector]]
  - -> imports -> [[unresolvedrefscreensessioncollector]]
  - -> imports -> [[unresolvedrefbatterycollector]]
  - -> imports -> [[unresolvedrefnetworkcollector]]
  - -> imports -> [[unresolvedrefactivitystatecollector]]
  - -> imports -> [[unresolvedrefambientlightcollector]]
  - -> imports -> [[unresolvedrefdevicemotioncollector]]
  - -> imports -> [[unresolvedrefapplifecyclecollector]]
  - -> imports -> [[unresolvedrefmediaplaybackcollector]]
- **__unresolved__::ref::_audioenvironmentcollector_** () -- 3 connections
  - <- imports <- [[audioenvironmentcollectortest]]
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **__unresolved__::ref::_activitystatecollector_** () -- 2 connections
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **__unresolved__::ref::_ambientlightcollector_** () -- 2 connections
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **__unresolved__::ref::_applifecyclecollector_** () -- 2 connections
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **__unresolved__::ref::_batterycollector_** () -- 2 connections
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **__unresolved__::ref::_calltimepatterncollector_** () -- 2 connections
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **__unresolved__::ref::_devicemotioncollector_** () -- 2 connections
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **__unresolved__::ref::_mediaplaybackcollector_** () -- 2 connections
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **__unresolved__::ref::_screensessioncollector_** () -- 2 connections
  - <- imports <- [[metadataexportresolver]]
  - <- imports <- [[metadataexportresolver]]
- **audioEnvironmentCollector.test** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/audioEnvironmentCollector.test.ts) -- 2 connections
  - -> imports -> [[unresolvedrefvitest]]
  - -> imports -> [[unresolvedrefaudioenvironmentcollector]]

## Internal Relationships
- metadataExportResolver -> imports -> __unresolved__::ref::_audioenvironmentcollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_calltimepatterncollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_screensessioncollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_batterycollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_activitystatecollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_ambientlightcollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_devicemotioncollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_applifecyclecollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_mediaplaybackcollector_ [EXTRACTED]
- audioEnvironmentCollector.test -> imports -> __unresolved__::ref::_audioenvironmentcollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_audioenvironmentcollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_calltimepatterncollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_screensessioncollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_batterycollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_activitystatecollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_ambientlightcollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_devicemotioncollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_applifecyclecollector_ [EXTRACTED]
- metadataExportResolver -> imports -> __unresolved__::ref::_mediaplaybackcollector_ [EXTRACTED]

## Cross-Community Connections
- metadataExportResolver -> contains -> loadDeviceContextRecords (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- metadataExportResolver -> imports -> __unresolved__::ref::_types_sku_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- metadataExportResolver -> imports -> __unresolved__::ref::_types_session_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- metadataExportResolver -> imports -> __unresolved__::ref::_types_metadata_ (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- metadataExportResolver -> imports -> __unresolved__::ref::_networkcollector_ (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- audioEnvironmentCollector.test -> imports -> __unresolved__::ref::_vitest_ (-> [[unresolvedrefjs-unresolvedrefvitest]])
- metadataExportResolver -> contains -> loadDeviceContextRecords (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- metadataExportResolver -> imports -> __unresolved__::ref::_types_sku_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- metadataExportResolver -> imports -> __unresolved__::ref::_types_session_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- metadataExportResolver -> imports -> __unresolved__::ref::_types_metadata_ (-> [[unresolvedrefgetitem-unresolvedrefpush]])
- metadataExportResolver -> imports -> __unresolved__::ref::_networkcollector_ (-> [[unresolvedrefgetitem-unresolvedrefpush]])

## Context
이 커뮤니티는 metadataExportResolver, metadataExportResolver, __unresolved__::ref::_audioenvironmentcollector_를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 audioEnvironmentCollector.test.ts, metadataExportResolver.ts이다.
