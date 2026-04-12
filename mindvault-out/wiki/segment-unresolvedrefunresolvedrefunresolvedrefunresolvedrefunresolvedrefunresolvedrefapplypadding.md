# segment & __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___apply_padding
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **segment** (/Users/gdash/project/uncounted-project/uncounted-voice-api/app/services/utterance_segmenter.py) -- 9 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefsplitbyboundaries]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmergeshortutterances]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefsplitlongutterances]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefapplypadding]]
  - -> calls -> [[unresolvedrefunresolvedrefsplitbyboundaries]]
  - -> calls -> [[unresolvedrefunresolvedrefmergeshortutterances]]
  - -> calls -> [[unresolvedrefunresolvedrefsplitlongutterances]]
  - -> calls -> [[unresolvedrefunresolvedrefapplypadding]]
  - <- contains <- [[utterancesegmenter]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___apply_padding** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___merge_short_utterances** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___split_by_boundaries** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___split_long_utterances** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref___apply_padding** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref___merge_short_utterances** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref___split_by_boundaries** () -- 1 connections
  - <- calls <- [[segment]]
- **__unresolved__::ref::__unresolved____ref___split_long_utterances** () -- 1 connections
  - <- calls <- [[segment]]

## Internal Relationships
- segment -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___split_by_boundaries [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___merge_short_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___split_long_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___apply_padding [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref___split_by_boundaries [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref___merge_short_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref___split_long_utterances [EXTRACTED]
- segment -> calls -> __unresolved__::ref::__unresolved____ref___apply_padding [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 segment, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___apply_padding, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref___merge_short_utterances를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 utterance_segmenter.py이다.
