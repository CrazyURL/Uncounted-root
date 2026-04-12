# 화자 분리 & CHANGE_THRESHOLD
Cohesion: 0.27 | Nodes: 10

## Key Nodes
- **화자 분리** (historical_document) -- 9 connections
  - -> references -> [[onnxsttrunner]]
  - -> references -> [[speakerdiarizer]]
  - -> references -> [[sttprocessingservice]]
  - -> related_to -> [[pcm]]
  - -> related_to -> [[moonshine-stt]]
  - -> related_to -> [[changethreshold]]
  - -> related_to -> [[mfcc]]
  - -> related_to -> [[voiceenrollmentpage]]
  - -> references -> [[audioprocessor]]
- **CHANGE_THRESHOLD** (path) -- 3 connections
  - <- related_to <- [[]]
  - <- modifies <- [[speakerdiarizer]]
  - <- modifies <- [[sttprocessingservice]]
- **OnnxSttRunner** (path) -- 2 connections
  - -> implements -> [[pcm]]
  - <- references <- [[]]
- **PCM 오디오** (path) -- 2 connections
  - <- related_to <- [[]]
  - <- implements <- [[onnxsttrunner]]
- **SpeakerDiarizer** (path) -- 2 connections
  - -> modifies -> [[changethreshold]]
  - <- references <- [[]]
- **SttProcessingService** (path) -- 2 connections
  - -> modifies -> [[changethreshold]]
  - <- references <- [[]]
- **AudioProcessor** (path) -- 1 connections
  - <- references <- [[]]
- **MFCC 기반 화자 유사도** (path) -- 1 connections
  - <- related_to <- [[]]
- **Moonshine STT** (path) -- 1 connections
  - <- related_to <- [[]]
- **VoiceEnrollmentPage** (path) -- 1 connections
  - <- related_to <- [[]]

## Internal Relationships
- 화자 분리 -> references -> OnnxSttRunner [EXTRACTED]
- 화자 분리 -> references -> SpeakerDiarizer [EXTRACTED]
- 화자 분리 -> references -> SttProcessingService [EXTRACTED]
- 화자 분리 -> related_to -> PCM 오디오 [EXTRACTED]
- 화자 분리 -> related_to -> Moonshine STT [EXTRACTED]
- 화자 분리 -> related_to -> CHANGE_THRESHOLD [EXTRACTED]
- 화자 분리 -> related_to -> MFCC 기반 화자 유사도 [EXTRACTED]
- 화자 분리 -> related_to -> VoiceEnrollmentPage [EXTRACTED]
- 화자 분리 -> references -> AudioProcessor [INFERRED]
- OnnxSttRunner -> implements -> PCM 오디오 [EXTRACTED]
- SpeakerDiarizer -> modifies -> CHANGE_THRESHOLD [EXTRACTED]
- SttProcessingService -> modifies -> CHANGE_THRESHOLD [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 화자 분리, CHANGE_THRESHOLD, OnnxSttRunner를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 historical_document, path이다.
