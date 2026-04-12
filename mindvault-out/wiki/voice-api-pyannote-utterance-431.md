# voice-api 화자 분리(pyannote) 정확도 이슈 & 증상 — utterance 431
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **voice-api 화자 분리(pyannote) 정확도 이슈** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 6 connections
  - -> contains -> [[utterance-431]]
  - -> contains -> [[a-pyannote]]
  - -> contains -> [[b-wespeaker]]
  - -> contains -> [[c-id]]
  - -> contains -> [[d-minspeakers2-maxspeakers2-hint]]
  - -> contains -> [[e]]
- **증상 — utterance 431** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[voice-api-pyannote]]
- **json** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- has_code_example <- [[utterance-431]]
- **옵션 A — pyannote 모델 업그레이드** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **옵션 B — 서버 사이드 WeSpeaker 후처리 (권장)** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **옵션 C — 청크 간 화자 ID 매핑** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **옵션 D — `min_speakers=2, max_speakers=2` hint** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]
- **옵션 E — 스트리밍 모드로 전환** (/Users/gdash/project/uncounted-project/uncounted-docs/voice-api/화자분리_정확도_이슈.md) -- 1 connections
  - <- contains <- [[voice-api-pyannote]]

## Internal Relationships
- 증상 — utterance 431 -> has_code_example -> json [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 증상 — utterance 431 [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 A — pyannote 모델 업그레이드 [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 B — 서버 사이드 WeSpeaker 후처리 (권장) [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 C — 청크 간 화자 ID 매핑 [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 D — `min_speakers=2, max_speakers=2` hint [EXTRACTED]
- voice-api 화자 분리(pyannote) 정확도 이슈 -> contains -> 옵션 E — 스트리밍 모드로 전환 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 voice-api 화자 분리(pyannote) 정확도 이슈, 증상 — utterance 431, json를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 화자분리_정확도_이슈.md이다.
