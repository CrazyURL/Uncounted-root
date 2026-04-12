# Row Level Security & Utterances Table
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Row Level Security** (Phase_4_Issue_Analysis) -- 2 connections
  - -> related_to -> [[service-role]]
  - <- references <- [[utterances-table]]
- **Utterances Table** (Phase_4_Issue_Analysis) -- 2 connections
  - -> references -> [[row-level-security]]
  - -> related_to -> [[speaker-diarization]]
- **Service Role** (Phase_4_Issue_Analysis) -- 1 connections
  - <- related_to <- [[row-level-security]]
- **Speaker Diarization** (Phase_4_Issue_Analysis) -- 1 connections
  - <- related_to <- [[utterances-table]]

## Internal Relationships
- Row Level Security -> related_to -> Service Role [EXTRACTED]
- Utterances Table -> references -> Row Level Security [EXTRACTED]
- Utterances Table -> related_to -> Speaker Diarization [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Row Level Security, Utterances Table, Service Role를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 Phase_4_Issue_Analysis이다.
