---
title: "health 엔드포인트에 버전 정보 추가"
status: active
created: 2026-04-16
type: feature
---

# health 엔드포인트에 버전 정보 추가

## 현재 상태

- **`/`** (루트): `service`, `version: '1.0.0'` (하드코딩), `status`, `timestamp` 반환
- **`/health`**: `{ status: 'ok' }` 만 반환
- **package.json**: `version: "0.1.0"`

## 문제점

1. `/health`에 버전 정보 없음 — 배포 확인 불가
2. 루트 `version: '1.0.0'`이 package.json `0.1.0`과 불일치
3. 버전이 하드코딩 — 배포마다 수동 변경 필요

## 계획

### 변경 파일: `uncounted-api/src/index.ts` + `uncounted-api/src/openapi.ts` (2개)

**Step 1** — package.json에서 버전을 읽는 방식 도입 (`index.ts`)

```typescript
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const pkg = JSON.parse(
  readFileSync(resolve(import.meta.dirname ?? '.', '../package.json'), 'utf-8')
)
```

**Step 2** — 루트 엔드포인트의 하드코딩 `'1.0.0'` → `pkg.version`

**Step 3** — `/health` 응답에 버전 추가

```typescript
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    version: pkg.version,
  })
})
```

**Step 4** — OpenAPI 스펙(`openapi.ts`)의 `/health` 스키마에 `version` 필드 반영

## 리스크

- **LOW**: `import.meta.dirname` Node 버전 호환성 — 대안 존재
- **LOW**: package.json 읽기 실패 시 fallback 필요

## 복잡도: LOW

파일 2개, 5분 이내 작업.
