# 과거 파이프라인 구조 (온디바이스 Android) & java
Cohesion: 0.28 | Nodes: 9

## Key Nodes
- **과거 파이프라인 구조 (온디바이스 Android)** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 7 connections
  - -> contains -> [[1-pcm]]
  - -> contains -> [[2-changethreshold]]
  - -> contains -> [[3]]
  - -> contains -> [[4-speakerid]]
  - -> contains -> [[5-mfcc]]
  - -> contains -> [[6-level-2]]
  - <- contains <- [[speaker-diarization]]
- **java** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 3 connections
  - <- has_code_example <- [[1-pcm]]
  - <- has_code_example <- [[2-changethreshold]]
  - <- has_code_example <- [[4-speakerid]]
- **방향 1: PCM 에너지 기반 단어 경계 추정 (단기, 효과 높음)** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 2 connections
  - -> has_code_example -> [[java]]
  - <- contains <- [[android]]
- **방향 2: CHANGE_THRESHOLD 적응형 조정 (단기, 쉬움)** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 2 connections
  - -> has_code_example -> [[java]]
  - <- contains <- [[android]]
- **방향 4: 청크 경계 speakerId 전파 버그 수정 (즉시, 버그 수정)** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 2 connections
  - -> has_code_example -> [[java]]
  - <- contains <- [[android]]
- **방향 3: 세그먼트 단위로 화자 배정 후 단어 매핑 (단기, 안정성 향상)** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 1 connections
  - <- contains <- [[android]]
- **방향 5: MFCC 기반 화자 유사도 비교 (중기, 효과 매우 높음)** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 1 connections
  - <- contains <- [[android]]
- **방향 6: 보이스 엔롤먼트 Level 2 연동 (중기, 계획됨)** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 1 connections
  - <- contains <- [[android]]
- **화자 분리(Speaker Diarization) 개선 방향** (uncounted-docs/앱/스피커_다이어리제이션_개선방향.md) -- 1 connections
  - -> contains -> [[android]]

## Internal Relationships
- 방향 1: PCM 에너지 기반 단어 경계 추정 (단기, 효과 높음) -> has_code_example -> java [EXTRACTED]
- 방향 2: CHANGE_THRESHOLD 적응형 조정 (단기, 쉬움) -> has_code_example -> java [EXTRACTED]
- 방향 4: 청크 경계 speakerId 전파 버그 수정 (즉시, 버그 수정) -> has_code_example -> java [EXTRACTED]
- 과거 파이프라인 구조 (온디바이스 Android) -> contains -> 방향 1: PCM 에너지 기반 단어 경계 추정 (단기, 효과 높음) [EXTRACTED]
- 과거 파이프라인 구조 (온디바이스 Android) -> contains -> 방향 2: CHANGE_THRESHOLD 적응형 조정 (단기, 쉬움) [EXTRACTED]
- 과거 파이프라인 구조 (온디바이스 Android) -> contains -> 방향 3: 세그먼트 단위로 화자 배정 후 단어 매핑 (단기, 안정성 향상) [EXTRACTED]
- 과거 파이프라인 구조 (온디바이스 Android) -> contains -> 방향 4: 청크 경계 speakerId 전파 버그 수정 (즉시, 버그 수정) [EXTRACTED]
- 과거 파이프라인 구조 (온디바이스 Android) -> contains -> 방향 5: MFCC 기반 화자 유사도 비교 (중기, 효과 매우 높음) [EXTRACTED]
- 과거 파이프라인 구조 (온디바이스 Android) -> contains -> 방향 6: 보이스 엔롤먼트 Level 2 연동 (중기, 계획됨) [EXTRACTED]
- 화자 분리(Speaker Diarization) 개선 방향 -> contains -> 과거 파이프라인 구조 (온디바이스 Android) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 과거 파이프라인 구조 (온디바이스 Android), java, 방향 1: PCM 에너지 기반 단어 경계 추정 (단기, 효과 높음)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 스피커_다이어리제이션_개선방향.md이다.
