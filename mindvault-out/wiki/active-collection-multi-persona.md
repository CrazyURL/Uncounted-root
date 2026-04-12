# Active Collection & Multi Persona
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **Active Collection** (path) -- 6 connections
  - -> implements -> [[multi-persona]]
  - -> implements -> [[dialect-certification]]
  - -> implements -> [[elderly-voice]]
  - -> implements -> [[sleep-voice]]
  - -> implements -> [[extreme-emotion]]
  - <- related_to <- [[uncounted-campaign-system-v10]]
- **Multi Persona** (path) -- 4 connections
  - -> uses -> [[web-mediarecorder-api]]
  - -> integrates_with -> [[audio-analyzer]]
  - -> related_to -> [[emotional-analysis]]
  - <- implements <- [[active-collection]]
- **Uncounted Campaign System v1.0** (path) -- 2 connections
  - -> related_to -> [[passive-collection]]
  - -> related_to -> [[active-collection]]
- **Audio Analyzer** (path) -- 1 connections
  - <- integrates_with <- [[multi-persona]]
- **Dialect Certification** (path) -- 1 connections
  - <- implements <- [[active-collection]]
- **Elderly Voice** (path) -- 1 connections
  - <- implements <- [[active-collection]]
- **Emotional Analysis** (path) -- 1 connections
  - <- related_to <- [[multi-persona]]
- **Extreme Emotion** (path) -- 1 connections
  - <- implements <- [[active-collection]]
- **Passive Collection** (path) -- 1 connections
  - <- related_to <- [[uncounted-campaign-system-v10]]
- **Sleep Voice** (path) -- 1 connections
  - <- implements <- [[active-collection]]
- **Web MediaRecorder API** (path) -- 1 connections
  - <- uses <- [[multi-persona]]

## Internal Relationships
- Active Collection -> implements -> Multi Persona [EXTRACTED]
- Active Collection -> implements -> Dialect Certification [EXTRACTED]
- Active Collection -> implements -> Elderly Voice [EXTRACTED]
- Active Collection -> implements -> Sleep Voice [EXTRACTED]
- Active Collection -> implements -> Extreme Emotion [EXTRACTED]
- Multi Persona -> uses -> Web MediaRecorder API [EXTRACTED]
- Multi Persona -> integrates_with -> Audio Analyzer [EXTRACTED]
- Multi Persona -> related_to -> Emotional Analysis [EXTRACTED]
- Uncounted Campaign System v1.0 -> related_to -> Passive Collection [EXTRACTED]
- Uncounted Campaign System v1.0 -> related_to -> Active Collection [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Active Collection, Multi Persona, Uncounted Campaign System v1.0를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
