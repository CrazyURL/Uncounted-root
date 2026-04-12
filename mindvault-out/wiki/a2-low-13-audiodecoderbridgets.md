# A2 LOW 13건 버그픽스 실행계획 & audioDecoderBridge.ts
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **A2 LOW 13건 버그픽스 실행계획** (A2-file-scan-quality-review.md) -- 12 connections
  - -> includes -> [[scanenginets]]
  - -> includes -> [[autoscanhelpersts]]
  - -> includes -> [[audioscannerts]]
  - -> includes -> [[audiodecoderbridgets]]
  - -> includes -> [[wavencoderts]]
  - -> includes -> [[audiosanitizerts]]
  - -> includes -> [[audioanalyzerts]]
  - -> includes -> [[audiodecoderpluginjava]]
  - -> includes -> [[mfccextractorjava]]
  - -> includes -> [[embeddingextractorjava]]
  - -> includes -> [[onnxsttrunnerjava]]
  - -> suggests -> [[gemini]]
- **audioDecoderBridge.ts** (A2-file-scan-quality-review.md) -- 2 connections
  - -> tested_by -> [[vitest]]
  - <- includes <- [[a2-low-13]]
- **audioAnalyzer.ts** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **AudioDecoderPlugin.java** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **audioSanitizer.ts** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **audioScanner.ts** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **autoScanHelpers.ts** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **EmbeddingExtractor.java** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **Gemini** (A2-file-scan-quality-review.md) -- 1 connections
  - <- suggests <- [[a2-low-13]]
- **MfccExtractor.java** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **OnnxSttRunner.java** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **scanEngine.ts** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]
- **vitest** (A2-file-scan-quality-review.md) -- 1 connections
  - <- tested_by <- [[audiodecoderbridgets]]
- **wavEncoder.ts** (A2-file-scan-quality-review.md) -- 1 connections
  - <- includes <- [[a2-low-13]]

## Internal Relationships
- A2 LOW 13건 버그픽스 실행계획 -> includes -> scanEngine.ts [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> autoScanHelpers.ts [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> audioScanner.ts [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> audioDecoderBridge.ts [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> wavEncoder.ts [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> audioSanitizer.ts [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> audioAnalyzer.ts [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> AudioDecoderPlugin.java [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> MfccExtractor.java [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> EmbeddingExtractor.java [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> includes -> OnnxSttRunner.java [EXTRACTED]
- A2 LOW 13건 버그픽스 실행계획 -> suggests -> Gemini [EXTRACTED]
- audioDecoderBridge.ts -> tested_by -> vitest [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 A2 LOW 13건 버그픽스 실행계획, audioDecoderBridge.ts, audioAnalyzer.ts를 중심으로 includes 관계로 연결되어 있다. 주요 소스 파일은 A2-file-scan-quality-review.md이다.
