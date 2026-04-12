# SttProcessingService.java & Audio File Loader
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **SttProcessingService.java** (android/.../service/SttProcessingService.java) -- 8 connections
  - <- implements <- [[moonshine-ko-onnx]]
  - <- utilizes <- [[piimasker]]
  - <- utilizes <- [[utterancesegmenter]]
  - <- utilizes <- [[voicelabeler]]
  - <- utilizes <- [[textlabeler]]
  - <- utilizes <- [[audioprocessor]]
  - <- related_to <- [[audio-file-loader]]
  - <- monitors <- [[pipeline-state]]
- **Audio File Loader** (audioFileLoader.ts) -- 1 connections
  - -> related_to -> [[sttprocessingservicejava]]
- **AudioProcessor** (AudioProcessor) -- 1 connections
  - -> utilizes -> [[sttprocessingservicejava]]
- **Moonshine-ko ONNX** (on_device) -- 1 connections
  - -> implements -> [[sttprocessingservicejava]]
- **PiiMasker** (PiiMasker.java) -- 1 connections
  - -> utilizes -> [[sttprocessingservicejava]]
- **Pipeline State** (pipelineState.ts) -- 1 connections
  - -> monitors -> [[sttprocessingservicejava]]
- **TextLabeler** (TextLabeler.java) -- 1 connections
  - -> utilizes -> [[sttprocessingservicejava]]
- **UtteranceSegmenter** (UtteranceSegmenter.java) -- 1 connections
  - -> utilizes -> [[sttprocessingservicejava]]
- **VoiceLabeler** (VoiceLabeler.java) -- 1 connections
  - -> utilizes -> [[sttprocessingservicejava]]

## Internal Relationships
- Audio File Loader -> related_to -> SttProcessingService.java [INFERRED]
- AudioProcessor -> utilizes -> SttProcessingService.java [EXTRACTED]
- Moonshine-ko ONNX -> implements -> SttProcessingService.java [EXTRACTED]
- PiiMasker -> utilizes -> SttProcessingService.java [EXTRACTED]
- Pipeline State -> monitors -> SttProcessingService.java [EXTRACTED]
- TextLabeler -> utilizes -> SttProcessingService.java [EXTRACTED]
- UtteranceSegmenter -> utilizes -> SttProcessingService.java [EXTRACTED]
- VoiceLabeler -> utilizes -> SttProcessingService.java [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 SttProcessingService.java, Audio File Loader, AudioProcessor를 중심으로 utilizes 관계로 연결되어 있다. 주요 소스 파일은 AudioProcessor, PiiMasker.java, SttProcessingService.java, TextLabeler.java, UtteranceSegmenter.java이다.
