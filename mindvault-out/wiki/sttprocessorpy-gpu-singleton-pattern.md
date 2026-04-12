# stt_processor.py & GPU Singleton Pattern
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **stt_processor.py** (app/stt_processor.py) -- 5 connections
  - -> implements -> [[gpu-singleton-pattern]]
  - <- references <- [[whisperxservicepy]]
  - <- references <- [[utterancesegmenterpy]]
  - <- references <- [[piimaskerpy]]
  - <- related_to <- [[gpu-singleton-pattern]]
- **GPU Singleton Pattern** (N/A) -- 2 connections
  - -> related_to -> [[sttprocessorpy]]
  - <- implements <- [[sttprocessorpy]]
- **pii_masker.py** (app/services/pii_masker.py) -- 1 connections
  - -> references -> [[sttprocessorpy]]
- **utterance_segmenter.py** (app/services/utterance_segmenter.py) -- 1 connections
  - -> references -> [[sttprocessorpy]]
- **whisperx_service.py** (app/services/whisperx_service.py) -- 1 connections
  - -> references -> [[sttprocessorpy]]

## Internal Relationships
- GPU Singleton Pattern -> related_to -> stt_processor.py [INFERRED]
- pii_masker.py -> references -> stt_processor.py [EXTRACTED]
- stt_processor.py -> implements -> GPU Singleton Pattern [EXTRACTED]
- utterance_segmenter.py -> references -> stt_processor.py [EXTRACTED]
- whisperx_service.py -> references -> stt_processor.py [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 stt_processor.py, GPU Singleton Pattern, pii_masker.py를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 A, pii_masker.py, stt_processor.py, utterance_segmenter.py, whisperx_service.py이다.
