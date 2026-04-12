# Session ID for audio file & Upload Queue Initialization
Cohesion: 0.40 | Nodes: 6

## Key Nodes
- **Session ID for audio file** (pipeline) -- 4 connections
  - -> processes -> [[whisperx-stt-engine]]
  - <- triggers <- [[auto-scan-on-launch]]
  - <- implements <- [[whisperx-stt-engine]]
  - <- related_to <- [[pii-status]]
- **Upload Queue Initialization** (src/app/bootstrap/) -- 3 connections
  - -> references -> [[upload-queue-item]]
  - -> related_to -> [[auto-scan-on-launch]]
  - <- affects <- [[pii-status]]
- **Auto Scan on Launch** (src/app/bootstrap/) -- 2 connections
  - -> triggers -> [[session-id-for-audio-file]]
  - <- related_to <- [[upload-queue-initialization]]
- **PII Status** (pipeline) -- 2 connections
  - -> related_to -> [[session-id-for-audio-file]]
  - -> affects -> [[upload-queue-initialization]]
- **WhisperX STT Engine** (src/lib/sttEngine.ts) -- 2 connections
  - -> implements -> [[session-id-for-audio-file]]
  - <- processes <- [[session-id-for-audio-file]]
- **Upload Queue Item** (upload queue) -- 1 connections
  - <- references <- [[upload-queue-initialization]]

## Internal Relationships
- Auto Scan on Launch -> triggers -> Session ID for audio file [EXTRACTED]
- PII Status -> related_to -> Session ID for audio file [EXTRACTED]
- PII Status -> affects -> Upload Queue Initialization [INFERRED]
- Session ID for audio file -> processes -> WhisperX STT Engine [INFERRED]
- Upload Queue Initialization -> references -> Upload Queue Item [EXTRACTED]
- Upload Queue Initialization -> related_to -> Auto Scan on Launch [INFERRED]
- WhisperX STT Engine -> implements -> Session ID for audio file [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Session ID for audio file, Upload Queue Initialization, Auto Scan on Launch를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 bootstrap, pipeline, sttEngine.ts, upload queue이다.
