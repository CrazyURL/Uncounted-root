# ShareProgressPanel & SharePrepModal
Cohesion: 0.29 | Nodes: 8

## Key Nodes
- **ShareProgressPanel** (src/components/domain/ShareProgressPanel.tsx) -- 8 connections
  - -> contains -> [[formatelapsed]]
  - -> contains -> [[calcweightedpct]]
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedrefreactrouterdom]]
  - -> imports -> [[unresolvedreflibshareprepengine]]
  - -> imports -> [[unresolvedreflibshareprepstore]]
  - -> imports -> [[unresolvedrefmotionstepperprogress]]
  - -> imports -> [[unresolvedrefmotioncountupnumber]]
- **SharePrepModal** (src/components/domain/SharePrepModal.tsx) -- 6 connections
  - -> contains -> [[summaryrow]]
  - -> imports -> [[unresolvedrefreact]]
  - -> imports -> [[unresolvedrefframermotion]]
  - -> imports -> [[unresolvedreftypessession]]
  - -> imports -> [[unresolvedreflibshareprepengine]]
  - -> imports -> [[unresolvedreflibshareprepstore]]
- **__unresolved__::ref::_lib_shareprepengine_** () -- 2 connections
  - <- imports <- [[shareprogresspanel]]
  - <- imports <- [[shareprepmodal]]
- **__unresolved__::ref::_lib_shareprepstore_** () -- 2 connections
  - <- imports <- [[shareprogresspanel]]
  - <- imports <- [[shareprepmodal]]
- **calcWeightedPct** (src/components/domain/ShareProgressPanel.tsx) -- 2 connections
  - -> calls -> [[unresolvedrefround]]
  - <- contains <- [[shareprogresspanel]]
- **__unresolved__::ref::_motion_countupnumber_** () -- 1 connections
  - <- imports <- [[shareprogresspanel]]
- **__unresolved__::ref::_motion_stepperprogress_** () -- 1 connections
  - <- imports <- [[shareprogresspanel]]
- **SummaryRow** (src/components/domain/SharePrepModal.tsx) -- 1 connections
  - <- contains <- [[shareprepmodal]]

## Internal Relationships
- SharePrepModal -> contains -> SummaryRow [EXTRACTED]
- SharePrepModal -> imports -> __unresolved__::ref::_lib_shareprepengine_ [EXTRACTED]
- SharePrepModal -> imports -> __unresolved__::ref::_lib_shareprepstore_ [EXTRACTED]
- ShareProgressPanel -> contains -> calcWeightedPct [EXTRACTED]
- ShareProgressPanel -> imports -> __unresolved__::ref::_lib_shareprepengine_ [EXTRACTED]
- ShareProgressPanel -> imports -> __unresolved__::ref::_lib_shareprepstore_ [EXTRACTED]
- ShareProgressPanel -> imports -> __unresolved__::ref::_motion_stepperprogress_ [EXTRACTED]
- ShareProgressPanel -> imports -> __unresolved__::ref::_motion_countupnumber_ [EXTRACTED]

## Cross-Community Connections
- SharePrepModal -> imports -> __unresolved__::ref::_react_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- SharePrepModal -> imports -> __unresolved__::ref::_framer_motion_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- SharePrepModal -> imports -> __unresolved__::ref::_types_session_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- calcWeightedPct -> calls -> __unresolved__::ref::round (-> [[unresolvedrefpush-unresolvedrefmin]])
- ShareProgressPanel -> contains -> formatElapsed (-> [[unresolvedrefpush-unresolvedrefmin]])
- ShareProgressPanel -> imports -> __unresolved__::ref::_react_ (-> [[unresolvedrefreact-unresolvedreftypessession]])
- ShareProgressPanel -> imports -> __unresolved__::ref::_react_router_dom_ (-> [[unresolvedrefreact-unresolvedreftypessession]])

## Context
이 커뮤니티는 ShareProgressPanel, SharePrepModal, __unresolved__::ref::_lib_shareprepengine_를 중심으로 imports 관계로 연결되어 있다. 주요 소스 파일은 SharePrepModal.tsx, ShareProgressPanel.tsx이다.
