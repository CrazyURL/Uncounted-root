# Device ID Initialization & Storage Initialization
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Device ID Initialization** (src/app/bootstrap/) -- 2 connections
  - -> references -> [[stt-recovery-initialization]]
  - <- references <- [[storage-initialization]]
- **Storage Initialization** (src/app/bootstrap/) -- 2 connections
  - -> references -> [[device-id-initialization]]
  - <- references <- [[error-logger-initialization]]
- **Error Logger Initialization** (src/app/bootstrap/) -- 1 connections
  - -> references -> [[storage-initialization]]
- **STT Recovery Initialization** (src/app/bootstrap/) -- 1 connections
  - <- references <- [[device-id-initialization]]

## Internal Relationships
- Device ID Initialization -> references -> STT Recovery Initialization [EXTRACTED]
- Error Logger Initialization -> references -> Storage Initialization [EXTRACTED]
- Storage Initialization -> references -> Device ID Initialization [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Device ID Initialization, Storage Initialization, Error Logger Initialization를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 bootstrap이다.
