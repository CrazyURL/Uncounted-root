# HIGH 버그 목록 & A2 파일 스캔 & 품질 분석 — HIGH 15건 버그픽스 실행계획
Cohesion: 0.10 | Nodes: 20

## Key Nodes
- **HIGH 버그 목록** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 19 connections
  - -> contains -> [[h1-export-cwe-22]]
  - -> contains -> [[h2-consolelog-uri-cwe-532]]
  - -> contains -> [[h3-dos-cwe-400]]
  - -> contains -> [[h4-cwe-209]]
  - -> contains -> [[h5-mime-cwe-20]]
  - -> contains -> [[h6-checkwavexists-cwe-200]]
  - -> contains -> [[h7-onnx-embeddingextractor-cwe-502]]
  - -> contains -> [[h8-onnx-onnxsttrunner-cwe-502]]
  - -> contains -> [[h9-wav-chunksize-cwe-190]]
  - -> contains -> [[h10-cwe-190]]
  - -> contains -> [[h11-cwe-345]]
  - -> contains -> [[h12-classifyqualitygrade-cwe-682]]
  - -> contains -> [[h13-localstorage-poisoning-cwe-922]]
  - -> contains -> [[h14-audiodedupets]]
  - -> contains -> [[h15-race-condition]]
  - -> contains -> [[typescript-uncounted-appsrclib]]
  - -> contains -> [[typescript-uncounted-appsrcappbootstrap]]
  - -> contains -> [[android-java-uncounted-appandroidaudio]]
  - <- contains <- [[a2-high-15]]
- **A2 파일 스캔 & 품질 분석 — HIGH 15건 버그픽스 실행계획** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - -> contains -> [[high]]
- **Android Java (uncounted-app/android/.../audio/)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H10. 배열 크기 계산 정수 오버플로우 (CWE-190)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H11. 품질 점수 서버 측 재검증 없음 (CWE-345)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H12. classifyQualityGrade 입력 도메인 불일치 (CWE-682)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H13. localStorage 캐시 poisoning (CWE-922)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H14. audioDedupe.ts 테스트 파일 부재** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H15. 동시 스캔 잠금 없음 — 경쟁 조건 (Race Condition)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H1. 경로 검증 없는 export 함수 (CWE-22)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H2. console.log에 전체 경로/URI 노출 (CWE-532)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H3. 디코딩 타임아웃/크기 제한 없음 — DoS (CWE-400)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H4. 에러 메시지에 파일 경로 노출 (CWE-209)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H5. 파일 확장자/MIME 검증 없음 (CWE-20)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H6. checkWavExists — 임의 경로 존재 확인 오라클 (CWE-200)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H7. ONNX 모델 체크섬 검증 없음 — EmbeddingExtractor (CWE-502)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H8. ONNX 모델 체크섬 검증 없음 — OnnxSttRunner (CWE-502)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **H9. WAV chunkSize 정수 오버플로우 (CWE-190)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **TypeScript (uncounted-app/src/app/bootstrap/)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]
- **TypeScript (uncounted-app/src/lib/)** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 1 connections
  - <- contains <- [[high]]

## Internal Relationships
- A2 파일 스캔 & 품질 분석 — HIGH 15건 버그픽스 실행계획 -> contains -> HIGH 버그 목록 [EXTRACTED]
- HIGH 버그 목록 -> contains -> H1. 경로 검증 없는 export 함수 (CWE-22) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H2. console.log에 전체 경로/URI 노출 (CWE-532) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H3. 디코딩 타임아웃/크기 제한 없음 — DoS (CWE-400) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H4. 에러 메시지에 파일 경로 노출 (CWE-209) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H5. 파일 확장자/MIME 검증 없음 (CWE-20) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H6. checkWavExists — 임의 경로 존재 확인 오라클 (CWE-200) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H7. ONNX 모델 체크섬 검증 없음 — EmbeddingExtractor (CWE-502) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H8. ONNX 모델 체크섬 검증 없음 — OnnxSttRunner (CWE-502) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H9. WAV chunkSize 정수 오버플로우 (CWE-190) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H10. 배열 크기 계산 정수 오버플로우 (CWE-190) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H11. 품질 점수 서버 측 재검증 없음 (CWE-345) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H12. classifyQualityGrade 입력 도메인 불일치 (CWE-682) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H13. localStorage 캐시 poisoning (CWE-922) [EXTRACTED]
- HIGH 버그 목록 -> contains -> H14. audioDedupe.ts 테스트 파일 부재 [EXTRACTED]
- HIGH 버그 목록 -> contains -> H15. 동시 스캔 잠금 없음 — 경쟁 조건 (Race Condition) [EXTRACTED]
- HIGH 버그 목록 -> contains -> TypeScript (uncounted-app/src/lib/) [EXTRACTED]
- HIGH 버그 목록 -> contains -> TypeScript (uncounted-app/src/app/bootstrap/) [EXTRACTED]
- HIGH 버그 목록 -> contains -> Android Java (uncounted-app/android/.../audio/) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 HIGH 버그 목록, A2 파일 스캔 & 품질 분석 — HIGH 15건 버그픽스 실행계획, Android Java (uncounted-app/android/.../audio/)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
