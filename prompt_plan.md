# 환경별 암호화 키 분리

상태: 완료
타입: feature
생성일: 2026-03-25

## 목표

VITE_ENCRYPTION_KEY, VITE_SESSION_HMAC_KEY 값을 개발(dev)과 라이브(live) 환경에서 서로 다른 값으로 분리한다.

## 현재 상태

모든 환경(local/dev/live)이 동일한 키를 사용 중:
- ENCRYPTION_KEY: `1c6ea996...06720b` (모든 곳 동일)
- SESSION_HMAC_KEY: `4d255e63...e654cd` (uncounted-app만 사용, 모든 환경 동일)

## 변경 계획

기존 키는 **dev 환경용으로 유지**, 새 키를 **live 환경용으로 생성**.

### Task 목록

- [ ] Task 1: live 환경용 새 암호화 키 2개 생성 (ENCRYPTION_KEY, SESSION_HMAC_KEY)
- [ ] Task 2: uncounted-app/.env.production 키 교체 (depends: Task 1)
- [ ] Task 3: uncounted-admin/.env.production 키 교체 (depends: Task 1)
- [ ] Task 4: uncounted-app/android/local.properties ENCRYPTION_KEY_LIVE 교체 (depends: Task 1)
- [ ] Task 5: uncounted-api Render.com prod 환경변수 변경 가이드 (depends: Task 1)
- [ ] Task 6: .env.example 파일 환경별 분리 안내 추가

## 영향 범위

| 프로젝트 | 파일 | 변경 |
|---------|------|------|
| uncounted-app | `.env.production` | VITE_ENCRYPTION_KEY, VITE_SESSION_HMAC_KEY → 새 값 |
| uncounted-app | `android/local.properties` | ENCRYPTION_KEY_LIVE → 새 값 |
| uncounted-admin | `.env.production` | VITE_ENCRYPTION_KEY → 새 값 |
| uncounted-api | Render.com prod | ENCRYPTION_KEY → 새 값 (수동) |

## 주의사항

- **dev 환경 키는 변경하지 않음** — 기존 dev 데이터와 호환성 유지
- Render.com prod의 ENCRYPTION_KEY는 수동으로 변경해야 함
- 키 변경 후 live 환경의 기존 암호화 데이터는 복호화 불가 → live 데이터 존재 여부 확인 필요
- Android local.properties는 gitignore 대상
