# Refresh Token Race Condition 버그픽스

상태: 계획 확정 대기
타입: bugfix
생성일: 2026-03-31
멀티모델 자문: Gemini → Claude planner 검증

## 이전 계획
> A2 CRITICAL+HIGH+메모리 버그픽스 — 완료.

---

## 증상

밤새 앱 실행 → 아침에 로그아웃. 동일 refresh_token으로 2회 refresh → "Already Used" → SIGNED_OUT.

## 근본 원인

`client.ts`의 `_apiFetch()`에 refresh 잠금 없음. 동시 401 → 동시 refresh → Supabase 1회용 토큰이므로 첫 번째만 성공 → 나머지 실패 → 로그아웃.

---

## 구현 계획

### Wave 1: client.ts refresh mutex (app + admin)

#### Fix 1: uncounted-app/src/lib/api/client.ts

모듈 상단에 `_refreshPromise` 변수 추가 + `refreshTokenOnce()` 함수 신규:
- 동시 호출 시 첫 번째만 실제 refresh, 나머지는 같은 Promise 공유
- finally에서 `_refreshPromise = null` (deadlock 방지)
- 새 refresh_token도 저장 (`setRefreshToken`)

401 처리 블록(99-128행) 교체:
- `refreshTokenOnce()` 호출 → 성공 시 원래 요청 재시도
- 실패 시에만 `SIGNED_OUT` 발생
- refresh 실패 시 `setRefreshToken(null)`도 호출

#### Fix 2: uncounted-admin/src/lib/api/client.ts

동일 패턴. 단, admin은 refresh body에 토큰을 넣지 않음 (쿠키 기반).

### Wave 2: MetadataUploadSyncInit 디바운싱

- `visibilitychange` + `network reconnect`가 동시 발생 → 디바운싱으로 하나의 sync만 실행
- interval과 초기 timeout은 기존 유지

### Wave 3: 테스트 + 검증

- client.test.ts에 refresh mutex 테스트 추가 (동시 401 → refresh 1회만)
- 빌드/테스트 검증

---

## 에이전트 배정

| 에이전트 | 담당 | 파일 |
|---------|------|------|
| Agent-Auth | Fix 1 + Fix 2 | client.ts (app + admin) |
| Agent-Sync | Wave 2 + Wave 3 | MetadataUploadSyncInit.tsx + client.test.ts |

## 리스크

1. refresh hang → mutex deadlock → finally 필수 + 타임아웃 고려
2. admin은 쿠키 기반 → body 없이 refresh
3. `apiFetchForm`에는 401 재시도 없음 → 이번 스코프 외
