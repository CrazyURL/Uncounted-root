# Strategic Compact Skill & Suggest Compact Script
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **Strategic Compact Skill** (path) -- 7 connections
  - -> implements -> [[manual-compaction]]
  - -> contrasts_with -> [[auto-compaction]]
  - -> uses -> [[suggest-compact-script]]
  - -> defines -> [[compact-threshold]]
  - -> provides -> [[best-practices-for-compaction]]
  - -> references -> [[the-longform-guide]]
  - -> related_to -> [[memory-persistence-hooks]]
- **Suggest Compact Script** (path) -- 4 connections
  - -> tracks -> [[tool-calls-tracking]]
  - -> implements -> [[threshold-detection]]
  - -> includes -> [[periodic-reminders]]
  - <- uses <- [[strategic-compact-skill]]
- **Auto-Compaction** (path) -- 1 connections
  - <- contrasts_with <- [[strategic-compact-skill]]
- **Best Practices for Compaction** (path) -- 1 connections
  - <- provides <- [[strategic-compact-skill]]
- **Compact Threshold** (path) -- 1 connections
  - <- defines <- [[strategic-compact-skill]]
- **Manual Compaction** (path) -- 1 connections
  - <- implements <- [[strategic-compact-skill]]
- **Memory Persistence Hooks** (path) -- 1 connections
  - <- related_to <- [[strategic-compact-skill]]
- **Periodic Reminders** (path) -- 1 connections
  - <- includes <- [[suggest-compact-script]]
- **The Longform Guide** (path) -- 1 connections
  - <- references <- [[strategic-compact-skill]]
- **Threshold Detection** (path) -- 1 connections
  - <- implements <- [[suggest-compact-script]]
- **Tool Calls Tracking** (path) -- 1 connections
  - <- tracks <- [[suggest-compact-script]]

## Internal Relationships
- Strategic Compact Skill -> implements -> Manual Compaction [EXTRACTED]
- Strategic Compact Skill -> contrasts_with -> Auto-Compaction [INFERRED]
- Strategic Compact Skill -> uses -> Suggest Compact Script [EXTRACTED]
- Strategic Compact Skill -> defines -> Compact Threshold [EXTRACTED]
- Strategic Compact Skill -> provides -> Best Practices for Compaction [EXTRACTED]
- Strategic Compact Skill -> references -> The Longform Guide [EXTRACTED]
- Strategic Compact Skill -> related_to -> Memory Persistence Hooks [INFERRED]
- Suggest Compact Script -> tracks -> Tool Calls Tracking [EXTRACTED]
- Suggest Compact Script -> implements -> Threshold Detection [EXTRACTED]
- Suggest Compact Script -> includes -> Periodic Reminders [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Strategic Compact Skill, Suggest Compact Script, Auto-Compaction를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
