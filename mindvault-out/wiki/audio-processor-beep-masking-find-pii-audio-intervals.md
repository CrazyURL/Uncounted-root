# Audio Processor Beep Masking & Find PII Audio Intervals
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **Audio Processor Beep Masking** (AudioProcessor.java) -- 2 connections
  - -> references -> [[upload-chunk]]
  - <- references <- [[find-pii-audio-intervals]]
- **Find PII Audio Intervals** (OnnxSttRunner.java) -- 2 connections
  - -> references -> [[audio-processor-beep-masking]]
  - <- references <- [[onnx-stt-transcription]]
- **Onnx STT Transcription** (OnnxSttRunner.java) -- 2 connections
  - -> references -> [[find-pii-audio-intervals]]
  - <- references <- [[pii-masking-method]]
- **PII Masking Method** (SttProcessingService.java) -- 1 connections
  - -> references -> [[onnx-stt-transcription]]
- **Upload Chunk** (SessionApiClient.java) -- 1 connections
  - <- references <- [[audio-processor-beep-masking]]

## Internal Relationships
- Audio Processor Beep Masking -> references -> Upload Chunk [EXTRACTED]
- Find PII Audio Intervals -> references -> Audio Processor Beep Masking [EXTRACTED]
- Onnx STT Transcription -> references -> Find PII Audio Intervals [EXTRACTED]
- PII Masking Method -> references -> Onnx STT Transcription [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Audio Processor Beep Masking, Find PII Audio Intervals, Onnx STT Transcription를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 AudioProcessor.java, OnnxSttRunner.java, SessionApiClient.java, SttProcessingService.java이다.
