# TestJobStore & test_set_error
Cohesion: 0.36 | Nodes: 9

## Key Nodes
- **TestJobStore** (uncounted-voice-api/tests/test_health.py) -- 5 connections
  - -> contains -> [[testcreatetask]]
  - -> contains -> [[testsetresult]]
  - -> contains -> [[testseterror]]
  - -> contains -> [[testgetnonexistent]]
  - <- contains <- [[testhealth]]
- **test_set_error** (uncounted-voice-api/tests/test_health.py) -- 5 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefjobstore]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefcreate]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefseterror]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefget]]
  - <- contains <- [[testjobstore]]
- **test_set_result** (uncounted-voice-api/tests/test_health.py) -- 5 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefjobstore]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefcreate]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefsetresult]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefget]]
  - <- contains <- [[testjobstore]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__jobstore** () -- 4 connections
  - <- calls <- [[testcreatetask]]
  - <- calls <- [[testsetresult]]
  - <- calls <- [[testseterror]]
  - <- calls <- [[testgetnonexistent]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__create** () -- 3 connections
  - <- calls <- [[testcreatetask]]
  - <- calls <- [[testsetresult]]
  - <- calls <- [[testseterror]]
- **test_create_task** (uncounted-voice-api/tests/test_health.py) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefjobstore]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefcreate]]
  - <- contains <- [[testjobstore]]
- **test_get_nonexistent** (uncounted-voice-api/tests/test_health.py) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefjobstore]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefget]]
  - <- contains <- [[testjobstore]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__set_error** () -- 2 connections
  - <- calls <- [[testseterror]]
  - <- calls <- [[processaudio]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__set_result** () -- 2 connections
  - <- calls <- [[testsetresult]]
  - <- calls <- [[processaudio]]

## Internal Relationships
- TestJobStore -> contains -> test_create_task [EXTRACTED]
- TestJobStore -> contains -> test_set_result [EXTRACTED]
- TestJobStore -> contains -> test_set_error [EXTRACTED]
- TestJobStore -> contains -> test_get_nonexistent [EXTRACTED]
- test_create_task -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__jobstore [EXTRACTED]
- test_create_task -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__create [EXTRACTED]
- test_get_nonexistent -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__jobstore [EXTRACTED]
- test_set_error -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__jobstore [EXTRACTED]
- test_set_error -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__create [EXTRACTED]
- test_set_error -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__set_error [EXTRACTED]
- test_set_result -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__jobstore [EXTRACTED]
- test_set_result -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__create [EXTRACTED]
- test_set_result -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__set_result [EXTRACTED]

## Cross-Community Connections
- test_get_nonexistent -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__get (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- test_set_error -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__get (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])
- test_set_result -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref__get (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-transcribe]])

## Context
이 커뮤니티는 TestJobStore, test_set_error, test_set_result를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 test_health.py이다.
