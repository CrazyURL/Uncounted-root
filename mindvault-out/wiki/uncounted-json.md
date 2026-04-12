# Uncounted 파일럿 데이터셋 기술 사양서 & json
Cohesion: 0.13 | Nodes: 19

## Key Nodes
- **Uncounted 파일럿 데이터셋 기술 사양서** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 6 connections
  - -> contains -> [[1]]
  - -> contains -> [[2]]
  - -> contains -> [[3]]
  - -> contains -> [[4]]
  - -> contains -> [[5]]
  - -> contains -> [[6]]
- **json** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 5 connections
  - <- has_code_example <- [[21-u-a02-5]]
  - <- has_code_example <- [[22-u-a03]]
  - <- has_code_example <- [[23]]
  - <- has_code_example <- [[3]]
  - <- has_code_example <- [[52-manifest]]
- **1. 오디오 기술 사양** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 4 connections
  - -> contains -> [[11]]
  - -> contains -> [[12-a]]
  - -> contains -> [[13]]
  - <- contains <- [[uncounted]]
- **2. 라벨 스키마** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 4 connections
  - -> contains -> [[21-u-a02-5]]
  - -> contains -> [[22-u-a03]]
  - -> contains -> [[23]]
  - <- contains <- [[uncounted]]
- **5. 납품 구조** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 4 connections
  - -> contains -> [[51]]
  - -> contains -> [[52-manifest]]
  - -> contains -> [[53]]
  - <- contains <- [[uncounted]]
- **4. 비식별화 처리 상세** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 3 connections
  - -> contains -> [[41]]
  - -> contains -> [[42]]
  - <- contains <- [[uncounted]]
- **2.1 U-A02: 음성 + 상황 라벨 (5축)** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[2]]
- **2.2 U-A03: 음성 + 대화행위 라벨 (확장)** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[2]]
- **2.3 라벨 파일 형식** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[2]]
- **3. 메타데이터 스키마** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[uncounted]]
- **5.2 Manifest 파일** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[5]]
- **1.1 파일 포맷** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 1 connections
  - <- contains <- [[1]]
- **1.2 품질 필터링 기준 (A등급)** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 1 connections
  - <- contains <- [[1]]
- **1.3 품질 점수 산출 공식** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 1 connections
  - <- contains <- [[1]]
- **4.1 오디오 비식별화 파이프라인** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 1 connections
  - <- contains <- [[4]]
- **4.2 메타데이터 비식별화** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 1 connections
  - <- contains <- [[4]]
- **5.1 디렉토리 레이아웃** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 1 connections
  - <- contains <- [[5]]
- **5.3 납품 방식** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 1 connections
  - <- contains <- [[5]]
- **6. 커스터마이징 옵션** (uncounted-docs/미팅기술 자료/typecast/typecast-dataset-spec.md) -- 1 connections
  - <- contains <- [[uncounted]]

## Internal Relationships
- 1. 오디오 기술 사양 -> contains -> 1.1 파일 포맷 [EXTRACTED]
- 1. 오디오 기술 사양 -> contains -> 1.2 품질 필터링 기준 (A등급) [EXTRACTED]
- 1. 오디오 기술 사양 -> contains -> 1.3 품질 점수 산출 공식 [EXTRACTED]
- 2. 라벨 스키마 -> contains -> 2.1 U-A02: 음성 + 상황 라벨 (5축) [EXTRACTED]
- 2. 라벨 스키마 -> contains -> 2.2 U-A03: 음성 + 대화행위 라벨 (확장) [EXTRACTED]
- 2. 라벨 스키마 -> contains -> 2.3 라벨 파일 형식 [EXTRACTED]
- 2.1 U-A02: 음성 + 상황 라벨 (5축) -> has_code_example -> json [EXTRACTED]
- 2.2 U-A03: 음성 + 대화행위 라벨 (확장) -> has_code_example -> json [EXTRACTED]
- 2.3 라벨 파일 형식 -> has_code_example -> json [EXTRACTED]
- 3. 메타데이터 스키마 -> has_code_example -> json [EXTRACTED]
- 4. 비식별화 처리 상세 -> contains -> 4.1 오디오 비식별화 파이프라인 [EXTRACTED]
- 4. 비식별화 처리 상세 -> contains -> 4.2 메타데이터 비식별화 [EXTRACTED]
- 5. 납품 구조 -> contains -> 5.1 디렉토리 레이아웃 [EXTRACTED]
- 5. 납품 구조 -> contains -> 5.2 Manifest 파일 [EXTRACTED]
- 5. 납품 구조 -> contains -> 5.3 납품 방식 [EXTRACTED]
- 5.2 Manifest 파일 -> has_code_example -> json [EXTRACTED]
- Uncounted 파일럿 데이터셋 기술 사양서 -> contains -> 1. 오디오 기술 사양 [EXTRACTED]
- Uncounted 파일럿 데이터셋 기술 사양서 -> contains -> 2. 라벨 스키마 [EXTRACTED]
- Uncounted 파일럿 데이터셋 기술 사양서 -> contains -> 3. 메타데이터 스키마 [EXTRACTED]
- Uncounted 파일럿 데이터셋 기술 사양서 -> contains -> 4. 비식별화 처리 상세 [EXTRACTED]
- Uncounted 파일럿 데이터셋 기술 사양서 -> contains -> 5. 납품 구조 [EXTRACTED]
- Uncounted 파일럿 데이터셋 기술 사양서 -> contains -> 6. 커스터마이징 옵션 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Uncounted 파일럿 데이터셋 기술 사양서, json, 1. 오디오 기술 사양를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 typecast-dataset-spec.md이다.
