# JobStore & create
Cohesion: 0.20 | Nodes: 12

## Key Nodes
- **JobStore** (uncounted-voice-api/app/core/job_store.py) -- 12 connections
  - -> contains -> [[init]]
  - -> contains -> [[ensureresultsdir]]
  - -> contains -> [[getresultsdir]]
  - -> contains -> [[create]]
  - -> contains -> [[get]]
  - -> contains -> [[updatestatus]]
  - -> contains -> [[setresult]]
  - -> contains -> [[seterror]]
  - -> contains -> [[setaudio]]
  - -> contains -> [[getaudio]]
  - -> contains -> [[cleanupexpired]]
  - <- contains <- [[jobstore]]
- **create** (uncounted-voice-api/app/core/job_store.py) -- 4 connections
  - -> calls -> [[unresolvedrefunresolvedreftaskinfo]]
  - -> calls -> [[unresolvedrefunresolvedreftime]]
  - -> calls -> [[unresolvedrefunresolvedrefcleanupexpired]]
  - <- contains <- [[jobstore]]
- **__unresolved__::ref::__unresolved____ref__model_copy** () -- 3 connections
  - <- calls <- [[updatestatus]]
  - <- calls <- [[setresult]]
  - <- calls <- [[seterror]]
- **__init__** (uncounted-voice-api/app/core/job_store.py) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedreflock]]
  - -> calls -> [[unresolvedrefunresolvedrefensureresultsdir]]
  - <- contains <- [[jobstore]]
- **get** (uncounted-voice-api/app/core/job_store.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefget]]
  - <- contains <- [[jobstore]]
- **set_error** (uncounted-voice-api/app/core/job_store.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefmodelcopy]]
  - <- contains <- [[jobstore]]
- **set_result** (uncounted-voice-api/app/core/job_store.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefmodelcopy]]
  - <- contains <- [[jobstore]]
- **update_status** (uncounted-voice-api/app/core/job_store.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefmodelcopy]]
  - <- contains <- [[jobstore]]
- **__unresolved__::ref::__unresolved____ref___cleanup_expired** () -- 1 connections
  - <- calls <- [[create]]
- **__unresolved__::ref::__unresolved____ref___ensure_results_dir** () -- 1 connections
  - <- calls <- [[init]]
- **__unresolved__::ref::__unresolved____ref__lock** () -- 1 connections
  - <- calls <- [[init]]
- **__unresolved__::ref::__unresolved____ref__taskinfo** () -- 1 connections
  - <- calls <- [[create]]

## Internal Relationships
- JobStore -> contains -> __init__ [EXTRACTED]
- JobStore -> contains -> create [EXTRACTED]
- JobStore -> contains -> get [EXTRACTED]
- JobStore -> contains -> update_status [EXTRACTED]
- JobStore -> contains -> set_result [EXTRACTED]
- JobStore -> contains -> set_error [EXTRACTED]
- __init__ -> calls -> __unresolved__::ref::__unresolved____ref__lock [EXTRACTED]
- __init__ -> calls -> __unresolved__::ref::__unresolved____ref___ensure_results_dir [EXTRACTED]
- create -> calls -> __unresolved__::ref::__unresolved____ref__taskinfo [EXTRACTED]
- create -> calls -> __unresolved__::ref::__unresolved____ref___cleanup_expired [EXTRACTED]
- set_error -> calls -> __unresolved__::ref::__unresolved____ref__model_copy [EXTRACTED]
- set_result -> calls -> __unresolved__::ref::__unresolved____ref__model_copy [EXTRACTED]
- update_status -> calls -> __unresolved__::ref::__unresolved____ref__model_copy [EXTRACTED]

## Cross-Community Connections
- JobStore -> contains -> _ensure_results_dir (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- JobStore -> contains -> _get_results_dir (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- JobStore -> contains -> set_audio (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- JobStore -> contains -> get_audio (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- JobStore -> contains -> _cleanup_expired (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])
- create -> calls -> __unresolved__::ref::__unresolved____ref__time (-> [[transcribe-unresolvedrefunresolvedrefmin]])
- get -> calls -> __unresolved__::ref::__unresolved____ref__get (-> [[unresolvedrefunresolvedrefpush-unresolvedrefunresolvedreflen]])

## Context
이 커뮤니티는 JobStore, create, __unresolved__::ref::__unresolved____ref__model_copy를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 job_store.py이다.
