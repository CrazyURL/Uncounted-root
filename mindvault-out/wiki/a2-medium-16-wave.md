# A2 MEDIUM 16건 버그픽스 & Wave 구성 (초안)
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **A2 MEDIUM 16건 버그픽스** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 8 connections
  - -> contains -> [[a-audiodecoderpluginjava-m6-m8-m9-m10-m11]]
  - -> contains -> [[b-scanenginets-audiofileloaderts-audiodecoderbridgets-m1-m2-m3-m5]]
  - -> contains -> [[c-audioprocessorjava-wavparserjava-m12-m17]]
  - -> contains -> [[d-onnxsttrunnerjava-m16]]
  - -> contains -> [[e-wavencoderts-m18]]
  - -> contains -> [[f-audiodedupets-m21-m22]]
  - -> contains -> [[g-audioscannerts-m23]]
  - -> contains -> [[wave]]
- **Wave 구성 (초안)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 4 connections
  - -> contains -> [[wave-1-3]]
  - -> contains -> [[wave-2]]
  - -> contains -> [[skip]]
  - <- contains <- [[a2-medium-16]]
- **그룹 A: AudioDecoderPlugin.java (M6, M8, M9, M10, M11)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-medium-16]]
- **그룹 B: scanEngine.ts + audioFileLoader.ts + audioDecoderBridge.ts (M1, M2, M3, M5)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-medium-16]]
- **그룹 C: AudioProcessor.java + WavParser.java (M12, M17)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-medium-16]]
- **그룹 D: OnnxSttRunner.java (M16)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-medium-16]]
- **그룹 E: wavEncoder.ts (M18)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-medium-16]]
- **그룹 F: audioDedupe.ts (M21, M22)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-medium-16]]
- **그룹 G: audioScanner.ts (M23)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-medium-16]]
- **Skip** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 1 (병렬 3팀)** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[wave]]
- **Wave 2** (.orchestrate-consult/20260331-162426/prompt_plan.md) -- 1 connections
  - <- contains <- [[wave]]

## Internal Relationships
- A2 MEDIUM 16건 버그픽스 -> contains -> 그룹 A: AudioDecoderPlugin.java (M6, M8, M9, M10, M11) [EXTRACTED]
- A2 MEDIUM 16건 버그픽스 -> contains -> 그룹 B: scanEngine.ts + audioFileLoader.ts + audioDecoderBridge.ts (M1, M2, M3, M5) [EXTRACTED]
- A2 MEDIUM 16건 버그픽스 -> contains -> 그룹 C: AudioProcessor.java + WavParser.java (M12, M17) [EXTRACTED]
- A2 MEDIUM 16건 버그픽스 -> contains -> 그룹 D: OnnxSttRunner.java (M16) [EXTRACTED]
- A2 MEDIUM 16건 버그픽스 -> contains -> 그룹 E: wavEncoder.ts (M18) [EXTRACTED]
- A2 MEDIUM 16건 버그픽스 -> contains -> 그룹 F: audioDedupe.ts (M21, M22) [EXTRACTED]
- A2 MEDIUM 16건 버그픽스 -> contains -> 그룹 G: audioScanner.ts (M23) [EXTRACTED]
- A2 MEDIUM 16건 버그픽스 -> contains -> Wave 구성 (초안) [EXTRACTED]
- Wave 구성 (초안) -> contains -> Wave 1 (병렬 3팀) [EXTRACTED]
- Wave 구성 (초안) -> contains -> Wave 2 [EXTRACTED]
- Wave 구성 (초안) -> contains -> Skip [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 A2 MEDIUM 16건 버그픽스, Wave 구성 (초안), 그룹 A: AudioDecoderPlugin.java (M6, M8, M9, M10, M11)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
