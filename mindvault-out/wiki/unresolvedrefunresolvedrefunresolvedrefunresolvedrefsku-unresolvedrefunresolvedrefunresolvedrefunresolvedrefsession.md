# __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_ & __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___session_
Cohesion: 0.25 | Nodes: 9

## Key Nodes
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_** () -- 7 connections
  - <- imports <- [[dataset]]
  - <- imports <- [[eventunit]]
  - <- imports <- [[audioasset]]
  - <- imports <- [[admin]]
  - <- imports <- [[dataset]]
  - <- imports <- [[eventunit]]
  - <- imports <- [[audioasset]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___session_** () -- 2 connections
  - <- imports <- [[dataset]]
  - <- imports <- [[dataset]]
- **dataset** (uncounted-admin/src/types/dataset.ts) -- 2 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsession]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsku]]
- **dataset** (uncounted-app/src/types/dataset.ts) -- 2 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsession]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsku]]
- **admin** (uncounted-admin/src/types/admin.ts) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsku]]
- **audioAsset** (uncounted-admin/src/types/audioAsset.ts) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsku]]
- **eventUnit** (uncounted-admin/src/types/eventUnit.ts) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsku]]
- **audioAsset** (uncounted-app/src/types/audioAsset.ts) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsku]]
- **eventUnit** (uncounted-app/src/types/eventUnit.ts) -- 1 connections
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsku]]

## Internal Relationships
- admin -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_ [EXTRACTED]
- audioAsset -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_ [EXTRACTED]
- dataset -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___session_ [EXTRACTED]
- dataset -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_ [EXTRACTED]
- eventUnit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_ [EXTRACTED]
- audioAsset -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_ [EXTRACTED]
- dataset -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___session_ [EXTRACTED]
- dataset -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_ [EXTRACTED]
- eventUnit -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___sku_, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref___session_, dataset를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 admin.ts, audioAsset.ts, dataset.ts, eventUnit.ts이다.
