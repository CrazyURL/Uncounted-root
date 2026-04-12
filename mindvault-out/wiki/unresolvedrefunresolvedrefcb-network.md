# __unresolved__::ref::__unresolved____ref__cb & network
Cohesion: 0.28 | Nodes: 9

## Key Nodes
- **__unresolved__::ref::__unresolved____ref__cb** () -- 4 connections
  - <- calls <- [[handleonline]]
  - <- calls <- [[handleoffline]]
  - <- calls <- [[handleonline]]
  - <- calls <- [[handleoffline]]
- **network** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/network.ts) -- 3 connections
  - -> contains -> [[handleonline]]
  - -> contains -> [[handleoffline]]
  - -> contains -> [[ensurelisteners]]
- **network** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/network.ts) -- 3 connections
  - -> contains -> [[handleonline]]
  - -> contains -> [[handleoffline]]
  - -> contains -> [[ensurelisteners]]
- **ensureListeners** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/network.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefaddeventlistener]]
  - <- contains <- [[network]]
- **handleOffline** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/network.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefcb]]
  - <- contains <- [[network]]
- **handleOnline** (/Users/gdash/project/uncounted-project/uncounted-admin/src/lib/network.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefcb]]
  - <- contains <- [[network]]
- **ensureListeners** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/network.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefaddeventlistener]]
  - <- contains <- [[network]]
- **handleOffline** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/network.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefcb]]
  - <- contains <- [[network]]
- **handleOnline** (/Users/gdash/project/uncounted-project/uncounted-app/src/lib/network.ts) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefcb]]
  - <- contains <- [[network]]

## Internal Relationships
- network -> contains -> handleOnline [EXTRACTED]
- network -> contains -> handleOffline [EXTRACTED]
- network -> contains -> ensureListeners [EXTRACTED]
- handleOffline -> calls -> __unresolved__::ref::__unresolved____ref__cb [EXTRACTED]
- handleOnline -> calls -> __unresolved__::ref::__unresolved____ref__cb [EXTRACTED]
- network -> contains -> handleOnline [EXTRACTED]
- network -> contains -> handleOffline [EXTRACTED]
- network -> contains -> ensureListeners [EXTRACTED]
- handleOffline -> calls -> __unresolved__::ref::__unresolved____ref__cb [EXTRACTED]
- handleOnline -> calls -> __unresolved__::ref::__unresolved____ref__cb [EXTRACTED]

## Cross-Community Connections
- ensureListeners -> calls -> __unresolved__::ref::__unresolved____ref__addeventlistener (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedrefmin]])
- ensureListeners -> calls -> __unresolved__::ref::__unresolved____ref__addeventlistener (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedrefmin]])

## Context
이 커뮤니티는 __unresolved__::ref::__unresolved____ref__cb, network, network를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 network.ts이다.
