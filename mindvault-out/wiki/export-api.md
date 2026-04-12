# Export 파이프라인 API & 발화 재분할 엔진
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **Export 파이프라인 API** (SKU 데이터셋 추출 시스템) -- 4 connections
  - -> implements -> [[export]]
  - <- references <- [[wav]]
  - <- related_to <- [[]]
  - <- informs <- [[]]
- **발화 재분할 엔진** (SKU 데이터셋 추출 시스템) -- 2 connections
  - -> related_to -> [[export-api]]
  - <- related_to <- [[]]
- **Export 위저드 확장** (SKU 데이터셋 추출 시스템) -- 2 connections
  - <- implements <- [[export-api]]
  - <- related_to <- [[]]
- **노이즈 억제** (SKU 데이터셋 추출 시스템) -- 1 connections
  - -> related_to -> [[]]
- **프론트엔드 기술 스택** (SKU 데이터셋 추출 시스템) -- 1 connections
  - -> related_to -> [[export]]
- **서버사이드 오디오 처리** (SKU 데이터셋 추출 시스템) -- 1 connections
  - -> informs -> [[export-api]]
- **WAV 품질 분석** (SKU 데이터셋 추출 시스템) -- 1 connections
  - -> references -> [[export-api]]

## Internal Relationships
- 노이즈 억제 -> related_to -> 발화 재분할 엔진 [INFERRED]
- 발화 재분할 엔진 -> related_to -> Export 파이프라인 API [INFERRED]
- 프론트엔드 기술 스택 -> related_to -> Export 위저드 확장 [INFERRED]
- 서버사이드 오디오 처리 -> informs -> Export 파이프라인 API [INFERRED]
- Export 파이프라인 API -> implements -> Export 위저드 확장 [EXTRACTED]
- WAV 품질 분석 -> references -> Export 파이프라인 API [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Export 파이프라인 API, 발화 재분할 엔진, Export 위저드 확장를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 SKU 데이터셋 추출 시스템이다.
