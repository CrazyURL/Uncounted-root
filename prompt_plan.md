# 다음 작업 대기 중

현재 진행 중인 작업 없음. turbo 전환 완료 (2026-04-13).

---

## 이전 계획

<details>
<summary>WhisperX large-v3 → large-v3-turbo 전환 (2026-04-13, 완료)</summary>

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
- [x] Phase 1: 벤치마크 샘플 4개 선별 (`sample_data/Call` → `~/voice-api-bench/long/`)
- [x] Phase 2: baseline 측정 (평균 RTF 0.114, 피크 VRAM 7792 MiB)
- [x] Phase 3: turbo 로드 테스트 (idle VRAM 3685 MiB)
- [x] Phase 4: turbo 측정 + diff (평균 RTF 0.048, 육안 검토 통과)
- [x] Phase 5: dev 배포 (.env.dev + systemctl restart)
- [x] Phase 6: 1시간 실트래픽 모니터링 (139건 처리, 에러 0건)
- [x] Phase 7: 문서 업데이트

### Backlog (future)

- live 환경 전환 (dev 안정화 후 별도 의사결정)
- `~/voice-api-bench/` 정리 (로컬 원본 통화 음성 — 벤치마크 종료 후 삭제)
- `uncounted-api/benchmark-samples/` 정리 (Mac 로컬 복사본)

</details>

<details>
<summary>Voice API 큐 안정화 3종 패치 (2026-04-13, 완료)</summary>

서버 MAX_ACTIVE_JOBS=5 + 503 백프레셔, Android polling 15분, 실패 쿨다운.
관련 문서: `uncounted-docs/voice-api/큐_병목_및_폴링_타임아웃_이슈.md`

</details>

<details>
<summary>음성 처리 파이프라인 서버 전환 (2026-04-10, 완료)</summary>

온디바이스 Moonshine-ko ONNX 제거, Voice API (WhisperX + pyannote) 전면 전환.

</details>
