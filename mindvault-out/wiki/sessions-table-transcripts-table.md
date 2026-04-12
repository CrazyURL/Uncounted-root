# Sessions Table & Transcripts Table
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Sessions Table** (path) -- 3 connections
  - -> related_to -> [[billable-units-table]]
  - <- references <- [[transcripts-table]]
  - <- related_to <- [[error-logs-table]]
- **Transcripts Table** (path) -- 2 connections
  - -> references -> [[sessions-table]]
  - <- references <- [[transcript-chunks-table]]
- **Billable Units Table** (path) -- 1 connections
  - <- related_to <- [[sessions-table]]
- **Error Logs Table** (path) -- 1 connections
  - -> related_to -> [[sessions-table]]
- **Transcript Chunks Table** (path) -- 1 connections
  - -> references -> [[transcripts-table]]

## Internal Relationships
- Error Logs Table -> related_to -> Sessions Table [INFERRED]
- Sessions Table -> related_to -> Billable Units Table [EXTRACTED]
- Transcript Chunks Table -> references -> Transcripts Table [EXTRACTED]
- Transcripts Table -> references -> Sessions Table [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Sessions Table, Transcripts Table, Billable Units Table를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
