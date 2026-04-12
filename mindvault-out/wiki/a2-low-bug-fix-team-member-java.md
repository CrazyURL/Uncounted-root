# A2 LOW Bug Fix & Team Member Java
Cohesion: 0.19 | Nodes: 14

## Key Nodes
- **A2 LOW Bug Fix** (unrecorded-path) -- 11 connections
  - -> references -> [[scanenginets]]
  - -> references -> [[autoscanhelpersts]]
  - -> references -> [[audioscannerts]]
  - -> references -> [[wavencoderts]]
  - -> references -> [[audiosanitizerts]]
  - -> references -> [[audioanalyzerts]]
  - -> references -> [[audiodecoderbridgets]]
  - -> references -> [[audiodecoderpluginjava]]
  - -> references -> [[mfccextractorjava]]
  - -> references -> [[embeddingextractorjava]]
  - -> references -> [[onnxsttrunnerjava]]
- **Team Member Java** (unrecorded-path) -- 4 connections
  - -> related_to -> [[audiodecoderpluginjava]]
  - -> related_to -> [[mfccextractorjava]]
  - -> related_to -> [[embeddingextractorjava]]
  - -> related_to -> [[onnxsttrunnerjava]]
- **AudioDecoderPlugin.java** (path/to/AudioDecoderPlugin.java) -- 2 connections
  - <- references <- [[a2-low-bug-fix]]
  - <- related_to <- [[team-member-java]]
- **autoScanHelpers.ts** (path/to/autoScanHelpers.ts) -- 2 connections
  - <- references <- [[a2-low-bug-fix]]
  - <- related_to <- [[team-member-ts]]
- **EmbeddingExtractor.java** (path/to/EmbeddingExtractor.java) -- 2 connections
  - <- references <- [[a2-low-bug-fix]]
  - <- related_to <- [[team-member-java]]
- **MfccExtractor.java** (path/to/MfccExtractor.java) -- 2 connections
  - <- references <- [[a2-low-bug-fix]]
  - <- related_to <- [[team-member-java]]
- **OnnxSttRunner.java** (path/to/OnnxSttRunner.java) -- 2 connections
  - <- references <- [[a2-low-bug-fix]]
  - <- related_to <- [[team-member-java]]
- **scanEngine.ts** (path/to/scanEngine.ts) -- 2 connections
  - <- references <- [[a2-low-bug-fix]]
  - <- related_to <- [[team-member-ts]]
- **Team Member TS** (unrecorded-path) -- 2 connections
  - -> related_to -> [[scanenginets]]
  - -> related_to -> [[autoscanhelpersts]]
- **audioAnalyzer.ts** (path/to/audioAnalyzer.ts) -- 1 connections
  - <- references <- [[a2-low-bug-fix]]
- **audioDecoderBridge.ts** (path/to/audioDecoderBridge.ts) -- 1 connections
  - <- references <- [[a2-low-bug-fix]]
- **audioSanitizer.ts** (path/to/audioSanitizer.ts) -- 1 connections
  - <- references <- [[a2-low-bug-fix]]
- **audioScanner.ts** (path/to/audioScanner.ts) -- 1 connections
  - <- references <- [[a2-low-bug-fix]]
- **wavEncoder.ts** (path/to/wavEncoder.ts) -- 1 connections
  - <- references <- [[a2-low-bug-fix]]

## Internal Relationships
- A2 LOW Bug Fix -> references -> scanEngine.ts [EXTRACTED]
- A2 LOW Bug Fix -> references -> autoScanHelpers.ts [EXTRACTED]
- A2 LOW Bug Fix -> references -> audioScanner.ts [EXTRACTED]
- A2 LOW Bug Fix -> references -> wavEncoder.ts [EXTRACTED]
- A2 LOW Bug Fix -> references -> audioSanitizer.ts [EXTRACTED]
- A2 LOW Bug Fix -> references -> audioAnalyzer.ts [EXTRACTED]
- A2 LOW Bug Fix -> references -> audioDecoderBridge.ts [EXTRACTED]
- A2 LOW Bug Fix -> references -> AudioDecoderPlugin.java [EXTRACTED]
- A2 LOW Bug Fix -> references -> MfccExtractor.java [EXTRACTED]
- A2 LOW Bug Fix -> references -> EmbeddingExtractor.java [EXTRACTED]
- A2 LOW Bug Fix -> references -> OnnxSttRunner.java [EXTRACTED]
- Team Member Java -> related_to -> AudioDecoderPlugin.java [INFERRED]
- Team Member Java -> related_to -> MfccExtractor.java [INFERRED]
- Team Member Java -> related_to -> EmbeddingExtractor.java [INFERRED]
- Team Member Java -> related_to -> OnnxSttRunner.java [INFERRED]
- Team Member TS -> related_to -> scanEngine.ts [INFERRED]
- Team Member TS -> related_to -> autoScanHelpers.ts [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 A2 LOW Bug Fix, Team Member Java, AudioDecoderPlugin.java를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 AudioDecoderPlugin.java, EmbeddingExtractor.java, MfccExtractor.java, OnnxSttRunner.java, audioAnalyzer.ts이다.
