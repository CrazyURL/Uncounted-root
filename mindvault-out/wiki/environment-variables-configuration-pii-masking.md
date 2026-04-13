# Environment Variables & Configuration & PII Masking
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Environment Variables** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 7 connections
  - -> contains -> [[core]]
  - -> contains -> [[whisperx-model]]
  - -> contains -> [[storage-upload]]
  - -> contains -> [[audio-preprocessing]]
  - -> contains -> [[large-audio-chunking]]
  - -> contains -> [[queue-backpressure]]
  - <- contains <- [[configuration-pii-masking]]
- **Configuration & PII Masking** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 2 connections
  - -> contains -> [[environment-variables]]
  - -> contains -> [[pii-masking-details]]
- **Audio Preprocessing** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 1 connections
  - <- contains <- [[environment-variables]]
- **Core** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 1 connections
  - <- contains <- [[environment-variables]]
- **Large Audio Chunking** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 1 connections
  - <- contains <- [[environment-variables]]
- **PII Masking Details** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 1 connections
  - <- contains <- [[configuration-pii-masking]]
- **Queue Backpressure** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 1 connections
  - <- contains <- [[environment-variables]]
- **Storage & Upload** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 1 connections
  - <- contains <- [[environment-variables]]
- **WhisperX Model** (/Users/gdash/project/uncounted-project/uncounted-voice-api/.claude/rules/python/config-and-pii.md) -- 1 connections
  - <- contains <- [[environment-variables]]

## Internal Relationships
- Configuration & PII Masking -> contains -> Environment Variables [EXTRACTED]
- Configuration & PII Masking -> contains -> PII Masking Details [EXTRACTED]
- Environment Variables -> contains -> Core [EXTRACTED]
- Environment Variables -> contains -> WhisperX Model [EXTRACTED]
- Environment Variables -> contains -> Storage & Upload [EXTRACTED]
- Environment Variables -> contains -> Audio Preprocessing [EXTRACTED]
- Environment Variables -> contains -> Large Audio Chunking [EXTRACTED]
- Environment Variables -> contains -> Queue Backpressure [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Environment Variables, Configuration & PII Masking, Audio Preprocessing를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 config-and-pii.md이다.
