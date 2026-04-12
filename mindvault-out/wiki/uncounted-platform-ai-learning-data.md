# Uncounted Platform & AI Learning Data
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **Uncounted Platform** (path) -- 12 connections
  - -> implements -> [[ai-learning-data]]
  - -> related_to -> [[marketing-insights]]
  - -> offers -> [[voice-ux-benchmark-report]]
  - -> offers -> [[voice-behavior-analysis-api]]
  - -> offers -> [[digital-wellbeing-score-api]]
  - -> offers -> [[anonymous-aggregated-insight-report]]
  - -> offers -> [[opt-in-survey-panel]]
  - -> offers -> [[panel-data-supply]]
  - <- related_to <- [[nielsen]]
  - <- related_to <- [[dataai]]
  - <- related_to <- [[kdx-big-value]]
  - <- describes <- [[decision-making-criteria]]
- **AI Learning Data** (path) -- 1 connections
  - <- implements <- [[uncounted-platform]]
- **Anonymous Aggregated Insight Report** (path) -- 1 connections
  - <- offers <- [[uncounted-platform]]
- **data.ai** (path) -- 1 connections
  - -> related_to -> [[uncounted-platform]]
- **Decision Making Criteria** (path) -- 1 connections
  - -> describes -> [[uncounted-platform]]
- **Digital Wellbeing Score API** (path) -- 1 connections
  - <- offers <- [[uncounted-platform]]
- **KDX / Big Value** (path) -- 1 connections
  - -> related_to -> [[uncounted-platform]]
- **Marketing Insights** (path) -- 1 connections
  - <- related_to <- [[uncounted-platform]]
- **Nielsen** (path) -- 1 connections
  - -> related_to -> [[uncounted-platform]]
- **Opt-in Survey Panel** (path) -- 1 connections
  - <- offers <- [[uncounted-platform]]
- **Panel Data Supply** (path) -- 1 connections
  - <- offers <- [[uncounted-platform]]
- **Voice Behavior Analysis API** (path) -- 1 connections
  - <- offers <- [[uncounted-platform]]
- **Voice UX Benchmark Report** (path) -- 1 connections
  - <- offers <- [[uncounted-platform]]

## Internal Relationships
- data.ai -> related_to -> Uncounted Platform [INFERRED]
- Decision Making Criteria -> describes -> Uncounted Platform [EXTRACTED]
- KDX / Big Value -> related_to -> Uncounted Platform [INFERRED]
- Nielsen -> related_to -> Uncounted Platform [INFERRED]
- Uncounted Platform -> implements -> AI Learning Data [EXTRACTED]
- Uncounted Platform -> related_to -> Marketing Insights [EXTRACTED]
- Uncounted Platform -> offers -> Voice UX Benchmark Report [EXTRACTED]
- Uncounted Platform -> offers -> Voice Behavior Analysis API [EXTRACTED]
- Uncounted Platform -> offers -> Digital Wellbeing Score API [EXTRACTED]
- Uncounted Platform -> offers -> Anonymous Aggregated Insight Report [EXTRACTED]
- Uncounted Platform -> offers -> Opt-in Survey Panel [EXTRACTED]
- Uncounted Platform -> offers -> Panel Data Supply [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Uncounted Platform, AI Learning Data, Anonymous Aggregated Insight Report를 중심으로 offers 관계로 연결되어 있다. 주요 소스 파일은 path이다.
