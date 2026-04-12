# __init__ & __unresolved__::ref::_ensure_results_dir
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **__init__** (/Users/gdash/project/uncounted-project/uncounted-voice-api/app/core/job_store.py) -- 3 connections
  - -> calls -> [[unresolvedreflock]]
  - -> calls -> [[unresolvedrefensureresultsdir]]
  - <- contains <- [[jobstore]]
- **__unresolved__::ref::_ensure_results_dir** () -- 1 connections
  - <- calls <- [[init]]
- **__unresolved__::ref::lock** () -- 1 connections
  - <- calls <- [[init]]

## Internal Relationships
- __init__ -> calls -> __unresolved__::ref::lock [EXTRACTED]
- __init__ -> calls -> __unresolved__::ref::_ensure_results_dir [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 __init__, __unresolved__::ref::_ensure_results_dir, __unresolved__::ref::lock를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 job_store.py이다.
