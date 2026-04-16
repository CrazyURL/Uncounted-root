---
title: "WhisperX large-v3 → large-v3-turbo 전환"
status: completed
created: 2026-04-13
type: feature
---


WhisperX large-v3 → large-v3-turbo 전환 (2026-04-13, 완료)

상태: 완료 — dev 환경 전환, 1시간 실트래픽 검증 통과
리포트: [uncounted-docs/voice-api/large-v3-turbo-전환.md](uncounted-docs/voice-api/large-v3-turbo-전환.md)

### 핵심 수치

| 지표 | baseline (large-v3) | turbo | 개선 |
|---|---|---|---|
| idle VRAM | 5393 MiB | 3685 MiB | −1708 (−31.7%) |
| 추론 VRAM (운영) | 7792 MiB | 4469 MiB | −3323 (−42.6%) |
| 평균 RTF | 0.114 | 0.048 | 2.4x 빠름 |
| 품질 | baseline이 "Q." 환각 생성 | 환각 없음 | turbo 우위 |

### 확정된 결정값

| # | 항목 | 값 | 결과 |
|---|---|---|---|
| 1 | 벤치마크 샘플 | dev DB user_only 4건 (로컬 익명화) → `sample_data/Call`로 변경 (S3 전환 후 원본 세션 미저장) | 완료 |
| 2 | 의존성 업그레이드 | 불가 | Phase 0 통과 (faster-whisper 1.2.1이 turbo 지원) |
| 3 | 배포 대상 | dev 환경만 | 완료 |
| 4 | WER 임계값 | 2%p | 부적절 metric → 육안 검토로 대체 |

### Phase 완료 현황

- [x] Phase 0: faster-whisper/ctranslate2 turbo 지원 확인
- [x] Phase 1: 벤치마크 샘플 4개 선별
- [x] Phase 2: baseline 측정
- [x] Phase 3: turbo 로드 테스트
- [x] Phase 4: turbo 측정 + diff
- [x] Phase 5: dev 배포
- [x] Phase 6: 1시간 실트래픽 모니터링
- [x] Phase 7: 문서 업데이트



