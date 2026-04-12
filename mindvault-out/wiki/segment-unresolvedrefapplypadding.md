# segment & __unresolved__::ref::_apply_padding
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **segment** (uncounted-voice-api/app/services/utterance_segmenter.py) -- 5 connections
  - -> calls -> [[unresolvedrefsplitbyboundaries]]
  - -> calls -> [[unresolvedrefmergeshortutterances]]
  - -> calls -> [[unresolvedrefsplitlongutterances]]
  - -> calls -> [[unresolvedrefapplypadding]]
  - <- contains <- [[utterancesegmenter]]
- **__unresolved__::ref::_apply_padding** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::_merge_short_utterances** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::_split_by_boundaries** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::_split_long_utterances** () -- 1 connections
  - <- calls <- [[segment]]

## Internal Relationships
- segment -> calls -> __unresolved__::ref::_split_by_boundaries [EXTRACTED]
- segment -> calls -> __unresolved__::ref::_merge_short_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::_split_long_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::_apply_padding [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 segment, __unresolved__::ref::_apply_padding, __unresolved__::ref::_merge_short_utterances를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 utterance_segmenter.py이다.
