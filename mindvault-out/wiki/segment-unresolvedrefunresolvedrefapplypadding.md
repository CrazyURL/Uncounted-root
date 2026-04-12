# segment & __unresolved__::ref::__unresolved____ref___apply_padding
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **segment** (/Users/gdash/project/uncounted-project/uncounted-voice-api/app/services/utterance_segmenter.py) -- 10 connections
  - -> calls -> [[unresolvedrefunresolvedrefsplitbyboundaries]]
  - -> calls -> [[unresolvedrefunresolvedrefmergeshortutterances]]
  - -> calls -> [[unresolvedrefunresolvedrefsplitlongutterances]]
  - -> calls -> [[unresolvedrefunresolvedrefapplypadding]]
  - -> calls -> [[unresolvedrefsplitbyboundaries]]
  - -> calls -> [[unresolvedrefmergeshortutterances]]
  - -> calls -> [[unresolvedrefsplitlongutterances]]
  - -> calls -> [[unresolvedrefapplypadding]]
  - <- contains <- [[utterancesegmenter]]
  - <- contains <- [[utterancesegmenter]]
- **__unresolved__::ref::__unresolved____ref___apply_padding** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref___merge_short_utterances** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref___split_by_boundaries** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref___split_long_utterances** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::_apply_padding** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::_merge_short_utterances** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::_split_by_boundaries** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::_split_long_utterances** () -- 1 connections
  - <- calls <- [[segment]]

## Internal Relationships
- segment -> calls -> __unresolved__::ref::__unresolved____ref___split_by_boundaries [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref___merge_short_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref___split_long_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref___apply_padding [EXTRACTED]
- segment -> calls -> __unresolved__::ref::_split_by_boundaries [EXTRACTED]
- segment -> calls -> __unresolved__::ref::_merge_short_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::_split_long_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::_apply_padding [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 segment, __unresolved__::ref::__unresolved____ref___apply_padding, __unresolved__::ref::__unresolved____ref___merge_short_utterances를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 utterance_segmenter.py이다.
