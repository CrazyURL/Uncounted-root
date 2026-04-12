# SessionApiClient.java & PiiMaskingEditor.tsx
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **SessionApiClient.java** (uncounted-app/android/.../SessionApiClient.java) -- 2 connections
  - -> related_to -> [[piimaskingeditortsx]]
  - <- implements <- [[utterancesegmenterjava]]
- **PiiMaskingEditor.tsx** (uncounted-admin/src/components/domain/PiiMaskingEditor.tsx) -- 1 connections
  - <- related_to <- [[sessionapiclientjava]]
- **UtteranceSegmenter.java** (uncounted-app/android/.../UtteranceSegmenter.java) -- 1 connections
  - -> implements -> [[sessionapiclientjava]]

## Internal Relationships
- SessionApiClient.java -> related_to -> PiiMaskingEditor.tsx [INFERRED]
- UtteranceSegmenter.java -> implements -> SessionApiClient.java [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SessionApiClient.java, PiiMaskingEditor.tsx, UtteranceSegmenter.java를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 PiiMaskingEditor.tsx, SessionApiClient.java, UtteranceSegmenter.java이다.
