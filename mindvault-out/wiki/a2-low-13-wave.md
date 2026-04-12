# A2 LOW 13건 버그픽스 & Wave 구성
Cohesion: 0.25 | Nodes: 8

## Key Nodes
- **A2 LOW 13건 버그픽스** (.orchestrate-consult/20260331-182141/prompt_plan.md) -- 6 connections
  - -> contains -> [[a-ts-scanhelpers-l1-l2-l16-l17]]
  - -> contains -> [[b-ts-audio-l3-l11-l14-l15]]
  - -> contains -> [[c-ts-bridge-l4]]
  - -> contains -> [[d-java-audio-l5-l7-l8-l9]]
  - -> contains -> [[skip]]
  - -> contains -> [[wave]]
- **Wave 구성** (.orchestrate-consult/20260331-182141/prompt_plan.md) -- 2 connections
  - -> contains -> [[wave-1-2]]
  - <- contains <- [[a2-low-13]]
- **그룹 A: TS Scan/Helpers (L1, L2, L16, L17)** (.orchestrate-consult/20260331-182141/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-low-13]]
- **그룹 B: TS Audio (L3, L11, L14, L15)** (.orchestrate-consult/20260331-182141/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-low-13]]
- **그룹 C: TS Bridge (L4)** (.orchestrate-consult/20260331-182141/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-low-13]]
- **그룹 D: Java Audio (L5, L7, L8, L9)** (.orchestrate-consult/20260331-182141/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-low-13]]
- **Skip** (.orchestrate-consult/20260331-182141/prompt_plan.md) -- 1 connections
  - <- contains <- [[a2-low-13]]
- **Wave 1 (병렬 2팀)** (.orchestrate-consult/20260331-182141/prompt_plan.md) -- 1 connections
  - <- contains <- [[wave]]

## Internal Relationships
- A2 LOW 13건 버그픽스 -> contains -> 그룹 A: TS Scan/Helpers (L1, L2, L16, L17) [EXTRACTED]
- A2 LOW 13건 버그픽스 -> contains -> 그룹 B: TS Audio (L3, L11, L14, L15) [EXTRACTED]
- A2 LOW 13건 버그픽스 -> contains -> 그룹 C: TS Bridge (L4) [EXTRACTED]
- A2 LOW 13건 버그픽스 -> contains -> 그룹 D: Java Audio (L5, L7, L8, L9) [EXTRACTED]
- A2 LOW 13건 버그픽스 -> contains -> Skip [EXTRACTED]
- A2 LOW 13건 버그픽스 -> contains -> Wave 구성 [EXTRACTED]
- Wave 구성 -> contains -> Wave 1 (병렬 2팀) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 A2 LOW 13건 버그픽스, Wave 구성, 그룹 A: TS Scan/Helpers (L1, L2, L16, L17)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
