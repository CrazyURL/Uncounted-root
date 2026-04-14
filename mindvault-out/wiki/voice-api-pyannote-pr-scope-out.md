# voice-api 화자 분리(pyannote) 정확도 이슈 & 후속 작업 (이번 PR scope out)
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **voice-api 화자 분리(pyannote) 정확도 이슈** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 7 connections
  - -> contains -> [[utterance-431]]
  - -> contains -> [[a-pyannote]]
  - -> contains -> [[b-wespeaker]]
  - -> contains -> [[c-id]]
  - -> contains -> [[d-minspeakers2-maxspeakers2-hint]]
  - -> contains -> [[e]]
  - -> contains -> [[pr-scope-out]]
- **후속 작업 (이번 PR scope out)** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 4 connections
  - -> contains -> [[c-id-hungarian-matching]]
  - -> contains -> [[a-pyannote-31]]
  - -> contains -> [[spectral-clustering]]
  - <- contains <- [[voice-api-pyannote]]
- **증상 — utterance 431** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[voice-api-pyannote]]
- **json** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- has_code_example <- [[utterance-431]]
- **옵션 A — pyannote 모델 업그레이드** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **옵션 A — pyannote 3.1 모델 업그레이드** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[pr-scope-out]]
- **옵션 B — 서버 사이드 WeSpeaker 후처리 (권장)** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **옵션 C — 청크 간 화자 ID 매핑** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **옵션 C — 청크 간 화자 ID Hungarian matching** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[pr-scope-out]]
- **옵션 D — `min_speakers=2, max_speakers=2` hint** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **옵션 E — 스트리밍 모드로 전환** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **spectral clustering 실험** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[pr-scope-out]]

## Internal Relationships
- 후속 작업 (이번 PR scope out) -> contains -> 옵션 C — 청크 간 화자 ID Hungarian matching [EXTRACTED]
- 후속 작업 (이번 PR scope out) -> contains -> 옵션 A — pyannote 3.1 모델 업그레이드 [EXTRACTED]
- 후속 작업 (이번 PR scope out) -> contains -> spectral clustering 실험 [EXTRACTED]
- 증상 — utterance 431 -> has_code_example -> json [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 증상 — utterance 431 [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 A — pyannote 모델 업그레이드 [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 B — 서버 사이드 WeSpeaker 후처리 (권장) [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 C — 청크 간 화자 ID 매핑 [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 D — `min_speakers=2, max_speakers=2` hint [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 E — 스트리밍 모드로 전환 [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 후속 작업 (이번 PR scope out) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 voice-api 화자 분리(pyannote) 정확도 이슈, 후속 작업 (이번 PR scope out), 증상 — utterance 431를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 화자분리_정확도_이슈.md이다.
