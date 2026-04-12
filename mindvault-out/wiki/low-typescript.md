# 🔵 Low — 장기 개선 & typescript
Cohesion: 0.28 | Nodes: 9

## Key Nodes
- **🔵 Low — 장기 개선** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 7 connections
  - -> contains -> [[13-storage-api]]
  - -> contains -> [[14-pipelinestatets]]
  - -> contains -> [[15]]
  - -> contains -> [[16-readfile-does-not-exist-json]]
  - -> contains -> [[17-readdir-does-not-exist]]
  - -> contains -> [[18-readfile-oom]]
  - -> contains -> [[50mb]]
- **typescript** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 3 connections
  - <- has_code_example <- [[16-readfile-does-not-exist-json]]
  - <- has_code_example <- [[18-readfile-oom]]
  - <- has_code_example <- [[50mb]]
- **16. readFile "does not exist" — JSON 초기화 파일** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[low]]
- **18. readFile OOM — 대용량 오디오 파일** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[low]]
- **50MB 이상 파일 지원 로드맵** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[low]]
- **13. Storage API 메모리 오버헤드** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[low]]
- **14. pipelineState.ts 런타임 타입 검증 미흡** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[low]]
- **15. 문서 미기재 항목 보강** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[low]]
- **17. readdir "does not exist" — 스캔 루트 디렉토리** (uncounted-docs/앱/스캔_업로드_코드_개선사항.md) -- 1 connections
  - <- contains <- [[low]]

## Internal Relationships
- 16. readFile "does not exist" — JSON 초기화 파일 -> has_code_example -> typescript [EXTRACTED]
- 18. readFile OOM — 대용량 오디오 파일 -> has_code_example -> typescript [EXTRACTED]
- 50MB 이상 파일 지원 로드맵 -> has_code_example -> typescript [EXTRACTED]
- 🔵 Low — 장기 개선 -> contains -> 13. Storage API 메모리 오버헤드 [EXTRACTED]
- 🔵 Low — 장기 개선 -> contains -> 14. pipelineState.ts 런타임 타입 검증 미흡 [EXTRACTED]
- 🔵 Low — 장기 개선 -> contains -> 15. 문서 미기재 항목 보강 [EXTRACTED]
- 🔵 Low — 장기 개선 -> contains -> 16. readFile "does not exist" — JSON 초기화 파일 [EXTRACTED]
- 🔵 Low — 장기 개선 -> contains -> 17. readdir "does not exist" — 스캔 루트 디렉토리 [EXTRACTED]
- 🔵 Low — 장기 개선 -> contains -> 18. readFile OOM — 대용량 오디오 파일 [EXTRACTED]
- 🔵 Low — 장기 개선 -> contains -> 50MB 이상 파일 지원 로드맵 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 🔵 Low — 장기 개선, typescript, 16. readFile "does not exist" — JSON 초기화 파일를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 스캔_업로드_코드_개선사항.md이다.
