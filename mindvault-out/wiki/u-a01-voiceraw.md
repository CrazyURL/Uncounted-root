# U-A01 — VoiceRaw & 사용자 입력 라벨 허용
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **U-A01 — VoiceRaw** (Uncounted Data Spec v2) -- 3 connections
  - -> implements -> [[]]
  - <- references <- [[u-a02-voicecontext]]
  - <- references <- [[u-a03-voicedialogact-lite]]
- **사용자 입력 라벨 허용** (Uncounted Data Spec v2) -- 1 connections
  - <- implements <- [[u-a01-voiceraw]]
- **U-A02 — Voice+Context** (Uncounted Data Spec v2) -- 1 connections
  - -> references -> [[u-a01-voiceraw]]
- **U-A03 — Voice+DialogAct Lite** (Uncounted Data Spec v2) -- 1 connections
  - -> references -> [[u-a01-voiceraw]]

## Internal Relationships
- U-A01 — VoiceRaw -> implements -> 사용자 입력 라벨 허용 [EXTRACTED]
- U-A02 — Voice+Context -> references -> U-A01 — VoiceRaw [EXTRACTED]
- U-A03 — Voice+DialogAct Lite -> references -> U-A01 — VoiceRaw [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 U-A01 — VoiceRaw, 사용자 입력 라벨 허용, U-A02 — Voice+Context를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 Uncounted Data Spec v2이다.
