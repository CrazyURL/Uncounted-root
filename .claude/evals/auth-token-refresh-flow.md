## EVAL: auth-token-refresh-flow
Created: 2026-04-09

---

## 대상 코드

| 컴포넌트 | 파일 |
|---------|------|
| API refresh 엔드포인트 | `uncounted-api/src/routes/auth.ts` (POST /auth/refresh, L242~) |
| App API 클라이언트 | `uncounted-app/src/lib/api/client.ts` (refreshTokenOnce, L72~) |
| App auth 유틸 | `uncounted-app/src/lib/api/auth.ts` |

---

## Capability Evals

### CE-1: 정상 refresh
- [ ] 유효한 refresh_token(쿠키 또는 body)으로 POST /auth/refresh 요청 시
      → 200 응답 + 새 access_token + 새 uncounted_session 쿠키 설정

### CE-2: 만료된 refresh_token 거부
- [ ] 만료된 refresh_token으로 요청 시
      → 401 응답 + 쿠키 초기화 없음

### CE-3: refresh_token 없음 거부
- [ ] body와 쿠키 모두 refresh_token 없을 때
      → 400 응답

### CE-4: App 클라이언트 401 자동 재시도
- [ ] API 요청에서 401 수신 시 refreshTokenOnce() 호출
      → refresh 성공 시 원래 요청 재시도 (isRetry=true로)

### CE-5: refresh mutex (중복 호출 방지)
- [ ] 동시에 여러 401이 발생해도 refreshTokenOnce()는 한 번만 실행
      → _refreshPromise 공유로 직렬화 확인

### CE-6: refresh 실패 시 로그아웃
- [ ] refresh 실패 + 새 로그인이 없을 때
      → 토큰 클리어 + 로그아웃 처리

### CE-7: 새 로그인 발생 시 경합 방지
- [ ] refresh 도중 새 로그인이 완료된 경우 (로그인 세대 카운터 변경)
      → 새 토큰으로 재시도 (refresh 결과 무시)

---

## Regression Evals

### RE-1: 기존 로그인 흐름 정상 동작
- [ ] POST /auth/login → access_token + refresh_token 반환

### RE-2: 암호화 통신 유지
- [ ] refresh 요청/응답 모두 AES-256-GCM enc_data 포맷 유지

### RE-3: 기존 테스트 통과
- [ ] `uncounted-app/src/lib/api/client.test.ts` 전체 통과
- [ ] `uncounted-app/src/lib/auth.test.ts` 전체 통과

### RE-4: Admin 동일 동작
- [ ] uncounted-admin의 apiFetch도 동일한 401 → refresh 흐름 유지

---

## Graders

### Code-Based
```bash
# RE-3: 기존 테스트 실행
cd uncounted-app && npm test -- --testPathPattern="client|auth" --passWithNoTests

# CE-3: refresh_token 없음 시 400 확인 (API 실행 중일 때)
curl -s -X POST http://localhost:3001/api/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{}' | jq '.error'
```

### Human Review Required
- CE-5 (mutex) — 비동기 경합 조건은 코드 리뷰로 확인
- CE-7 (로그인 세대 카운터) — 동시성 로직 직접 검토 필요

---

## Success Criteria

- **Capability**: pass@3 > 90%
- **Regression**: pass^3 = 100% (기존 흐름 절대 깨지면 안 됨)

---

## Run Log

| Date | Capability | Regression | Status |
|------|-----------|-----------|--------|
| _(미실행)_ | — | — | NOT STARTED |
