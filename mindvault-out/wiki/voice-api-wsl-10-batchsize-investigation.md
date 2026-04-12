# Voice API 성능 최적화 계획 (WSL 단일 워커 환경) & 10. BATCH_SIZE 튜닝 (INVESTIGATION)
Cohesion: 0.14 | Nodes: 14

## Key Nodes
- **Voice API 성능 최적화 계획 (WSL 단일 워커 환경)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 13 connections
  - -> contains -> [[1-high]]
  - -> contains -> [[2-backgroundtasks-high]]
  - -> contains -> [[3-cpu-high]]
  - -> contains -> [[4-torchcudaemptycache-medium]]
  - -> contains -> [[5-audiocopy-medium]]
  - -> contains -> [[6-pii-low-medium]]
  - -> contains -> [[7-wav-low]]
  - -> contains -> [[8-jobstore-low]]
  - -> contains -> [[9-ompnumthreads4-investigation]]
  - -> contains -> [[10-batchsize-investigation]]
  - -> contains -> [[wave-1]]
  - -> contains -> [[wave-2-wave-1]]
  - -> contains -> [[wave-3]]
- **10. BATCH_SIZE 튜닝 (INVESTIGATION)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **1. 파일 업로드 — 메모리 전체 로드 (HIGH)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **2. BackgroundTasks 동기 실행 (HIGH)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **3. CPU 전처리 병목 (HIGH)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **4. torch.cuda.empty_cache() 매 요청 호출 (MEDIUM)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **5. audio.copy() 전체 배열 복사 (MEDIUM)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **6. PII 마스킹 — 이름 탐지 성능 (LOW-MEDIUM)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **7. WAV 인코딩 반복 (LOW)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **8. JobStore 결과 인메모리 보관 (LOW)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **9. OMP_NUM_THREADS=4 튜닝 (INVESTIGATION)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **Wave 1: 즉시 효과, 낮은 위험 (독립 작업)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **Wave 2: 처리량 개선 (Wave 1 완료 후)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]
- **Wave 3: 고급 최적화 (조사 필요)** (.orchestrate-consult/20260411-104534/prompt_plan.md) -- 1 connections
  - <- contains <- [[voice-api-wsl]]

## Internal Relationships
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 1. 파일 업로드 — 메모리 전체 로드 (HIGH) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 2. BackgroundTasks 동기 실행 (HIGH) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 3. CPU 전처리 병목 (HIGH) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 4. torch.cuda.empty_cache() 매 요청 호출 (MEDIUM) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 5. audio.copy() 전체 배열 복사 (MEDIUM) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 6. PII 마스킹 — 이름 탐지 성능 (LOW-MEDIUM) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 7. WAV 인코딩 반복 (LOW) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 8. JobStore 결과 인메모리 보관 (LOW) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 9. OMP_NUM_THREADS=4 튜닝 (INVESTIGATION) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> 10. BATCH_SIZE 튜닝 (INVESTIGATION) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> Wave 1: 즉시 효과, 낮은 위험 (독립 작업) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> Wave 2: 처리량 개선 (Wave 1 완료 후) [EXTRACTED]
- Voice API 성능 최적화 계획 (WSL 단일 워커 환경) -> contains -> Wave 3: 고급 최적화 (조사 필요) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Voice API 성능 최적화 계획 (WSL 단일 워커 환경), 10. BATCH_SIZE 튜닝 (INVESTIGATION), 1. 파일 업로드 — 메모리 전체 로드 (HIGH)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
