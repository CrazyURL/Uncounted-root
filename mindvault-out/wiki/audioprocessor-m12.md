# AudioProcessor & M12
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **AudioProcessor** (uncounted-app/android/app/src/main/java/com/uncounted/app/audio/AudioProcessor.java) -- 2 connections
  - <- related_to <- [[m16]]
  - <- related_to <- [[m12]]
- **M12** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - -> related_to -> [[audioprocessor]]
- **M16** (/Users/gdash/project/uncounted-project/.orchestrate-consult/20260331-162426/codex.md) -- 1 connections
  - -> related_to -> [[audioprocessor]]

## Internal Relationships
- M12 -> related_to -> AudioProcessor [EXTRACTED]
- M16 -> related_to -> AudioProcessor [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 AudioProcessor, M12, M16를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 AudioProcessor.java, codex.md이다.
