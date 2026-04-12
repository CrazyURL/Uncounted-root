# Voice Processing Pipeline & Diarization
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Voice Processing Pipeline** (path) -- 8 connections
  - -> references -> [[stt]]
  - -> references -> [[diarization]]
  - -> references -> [[pii-masking]]
  - -> references -> [[utterance-segmentation]]
  - -> references -> [[moonshine-ko-onnx]]
  - -> references -> [[whisperx-large-v3]]
  - -> references -> [[pyannote]]
  - -> references -> [[typescript-client]]
- **Diarization** (path) -- 1 connections
  - <- references <- [[voice-processing-pipeline]]
- **Moonshine-ko ONNX** (path) -- 1 connections
  - <- references <- [[voice-processing-pipeline]]
- **PII Masking** (path) -- 1 connections
  - <- references <- [[voice-processing-pipeline]]
- **pyannote** (path) -- 1 connections
  - <- references <- [[voice-processing-pipeline]]
- **STT** (path) -- 1 connections
  - <- references <- [[voice-processing-pipeline]]
- **TypeScript client** (path) -- 1 connections
  - <- references <- [[voice-processing-pipeline]]
- **Utterance Segmentation** (path) -- 1 connections
  - <- references <- [[voice-processing-pipeline]]
- **WhisperX large-v3** (path) -- 1 connections
  - <- references <- [[voice-processing-pipeline]]

## Internal Relationships
- Voice Processing Pipeline -> references -> STT [EXTRACTED]
- Voice Processing Pipeline -> references -> Diarization [EXTRACTED]
- Voice Processing Pipeline -> references -> PII Masking [EXTRACTED]
- Voice Processing Pipeline -> references -> Utterance Segmentation [EXTRACTED]
- Voice Processing Pipeline -> references -> Moonshine-ko ONNX [EXTRACTED]
- Voice Processing Pipeline -> references -> WhisperX large-v3 [EXTRACTED]
- Voice Processing Pipeline -> references -> pyannote [EXTRACTED]
- Voice Processing Pipeline -> references -> TypeScript client [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Voice Processing Pipeline, Diarization, Moonshine-ko ONNX를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
