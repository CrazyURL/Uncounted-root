# CONTEXT — Uncounted 생태계 크로스레포 맥락 (개발PC 간 공유용)

> **목적**: 여러 레포(voice-api / admin / api)와 배포 워크트리에 걸친 **운영·배포·의존성 맥락**을
> 개발 PC 간에 공유하기 위한 스냅샷. 각 레포 코드에서 자명하지 않은 결정·상태·함정만 기록.
>
> **스냅샷 기준일**: 2026-06-02 · **출처**: GPU 서버 작업 세션 누적 맥락
> **주의**: 시점 스냅샷. 적용 전 `git fetch`로 각 레포 origin/main 재확인.

## 레포 / 워크트리 지도

| 경로 | 원격 | 역할 |
|------|------|------|
| `uncounted-voice-api` | `CrazyURL/uncounted-voice-api` | **정본**. WhisperX STT + 화자/발화분리 + PII. 상세 맥락 → `uncounted-voice-api/docs/CONTEXT_voice-api.md` |
| `uncounted-voice-api-deploy-s2a` | (워크트리) | **라이브 배포 체크아웃** (uvicorn). 특정 커밋 핀. ⚠️ v2/하이브리드 코드 없을 수 있음 |
| `uncounted-voice-api-deploy-s1`, `-d4b`, `-pr-s2a`, `-pii-graded`, `-dev-segv2` | (워크트리) | 배포/실험용 별도 체크아웃들. ⚠️ stale checkout 착시 빈발 |
| `uncounted-admin` | (admin repo) | 운영 admin 프론트. ⚠️ dashboard/reviews/training API **미소비** → 운영 admin 프론트는 이 워크스페이스 밖일 수 있음 |
| `uncounted-api` | (api repo) | 백엔드 API |

## 운영 / 배포

- **운영 baseline 정본**(2026-05-27 승인): 하이픈 repo · **systemd만** 사용 · data-flow 중심 ·
  monitor v3(failed delta primary, health info-only).
- ⚠️ **uvicorn = deploy-s2a 체크아웃 / worker = 메인 체크아웃**, **공용 venv**.
- ⚠️ **admin/api dev 배포는 WSL에서 트리거 불가**(render CLI 미설치 · `RENDER_API_KEY` 없음).
  배포 = **Render 대시보드 Manual Deploy(사용자 수동)**.
- ⚠️ **공유 멀티윈도우 운영**: 프로세스 kill 전 "누가 띄웠나" 확인 필수, freeze 우선.

## 크로스레포 작업 상태

- **H5 training card**(2026-05-26): blocked 아님. 프론트(admin #36) + 백엔드(api #41
  `/emotion-labels/stats`) 이미 e2e 머지·배선 정합. 그간 "blocked"는 전부 **stale checkout 착시**.
  남은 건 dev 배포 + 클릭스루.
- **Admin 처리오류 정합성**: voice-api #47(중복) CLOSED(=#46/#48 3중 중복).
  ⚠️ admin UI 착수 전 **API 소비처 확인 필수**(uncounted-admin이 해당 API 미소비).
- **dev reset 정본 = Mode C 전면 wipe**(Mode B+납품 carve-out 폐기). deliveries 1건도 테스트
  artifact라 삭제. relationship/identity backfill = CANCEL(reset 후 재검토).
  활성 = reset apply 전 백업 게이트 + PGRST205 3테이블 count 확인 → `--apply` 승인 재요청.
- **AI Hub 라벨 통합**(2026-05-26): 13종(`D:\ai hub\AIHUB`, 라벨만) Phase0 검증완료.
  3모델 구조 · emo_free 3-class 직결 · 021 speechAct 15종 · 159 ITN gold. 라벨통합 사전 초안 완료,
  GPU 핸드오프 준비됨. 플랜 = `plans/memoized-jumping-mountain.md`.

## 협업 수칙 (전 레포 공통)

- 구현 착수 전: `git fetch` + origin/main stale 여부 + 이미 머지된 PR 존재 확인 선행.
- 검증 후에만 결론(실측 후 기록, 추정 성공수치 금지).
- "blocked" 판단 전 stale checkout / 워크트리 혼동 먼저 의심.

---

## 부록 — 문서 동기화 메커니즘

voice-api 상세 기술 맥락은 **`uncounted-voice-api/docs/CONTEXT_voice-api.md`** 에 있다.
GPU 서버의 로컬 Claude 메모리(`~/.claude/.../memory/`)는 PC 간 동기화되지 않으므로,
공유 가능한 맥락만 위 두 CONTEXT 문서로 추출하여 git으로 중개한다.
(sudo 비번 등 운영 시크릿은 레포에 커밋하지 않는다.)
