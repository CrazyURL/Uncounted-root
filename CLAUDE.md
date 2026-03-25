# Uncounted Platform — Workspace Root

음성 파일 + 휴대폰 메타데이터(비식별·버킷 기반)를 디지털 자산으로 스캔·관리·패키징하는 플랫폼.
사용자가 동의(consent ON)한 데이터만 SKU 기준으로 클라이언트에 납품한다.

## 워크스페이스 구조

```
uncounted-project/          ← 여기서 claude 실행
├── uncounted-api/          # Hono REST API (백엔드)
├── uncounted-app/          # React + Capacitor (모바일 앱)
├── uncounted-admin/        # React + Vite (관리자 웹)
├── uncounted-docs/         # 기능정의서, UX, 와이어프레임, DB 스키마
└── uncounted-env/          # 환경변수 백업 (zip)
```

각 하위 프로젝트에 상세 CLAUDE.md가 존재한다. 루트는 공통 컨텍스트만 담는다.

## 기술 스택 요약

| 항목 | API | App | Admin |
|------|-----|-----|-------|
| 프레임워크 | Hono 4 + Node.js | React 19 + Capacitor 8 | React 19 + Vite 6 |
| 언어 | TypeScript (tsx) | TypeScript + Java (Android) | TypeScript |
| DB | Supabase (service_role) | — | — |
| 스토리지 | iwinv S3 호환 | IndexedDB + localStorage | — |
| 암호화 | AES-256-GCM (crypto) | AES-256-GCM (@noble/ciphers) | AES-256-GCM (@noble/ciphers) |
| 테스트 | Vitest 3 | Vitest 3 | — |
| 배포 | Render.com | Android APK (flavor별) | Vite build |

## 공통 아키텍처 패턴

### 암호화 통신 (전 프로젝트 공통)

모든 API 요청/응답은 AES-256-GCM으로 암호화된다. 키는 `ENCRYPTION_KEY` 환경변수로 공유.

```
요청: { enc_data: "<base64url(IV|AuthTag|Ciphertext)>" }
응답: base64url(IV|AuthTag|Ciphertext)@enc_uncounted
```

### 인증 흐름

- Supabase SDK 미사용 — 모든 인증은 `/api/auth/*` 백엔드 경유
- 토큰: httpOnly Cookie (`uncounted_session` 1h, `uncounted_refresh` 90d) + in-memory Bearer
- 401 수신 → 자동 refresh 1회 → 실패 시 로그아웃
- 어드민 판별: `app_metadata.role === 'admin'`

### API 클라이언트 패턴

App/Admin 모두 동일한 `apiFetch<T>()` 래퍼 사용:
- AES-256-GCM 자동 암호화/복호화
- `Authorization: Bearer` 헤더 자동 첨부
- 401 자동 갱신 내장

## 핵심 비즈니스 규칙 (절대 준수)

1. **GPU 기반 AI 추론 결과 저장/표시/판매 금지** — 스트레스/우울/인지 예측 등 모델 산출값 필드 추가 금지
2. **라벨은 사용자 입력만** — 체크/칩/슬라이더로 수집, AI 자동 판정값을 라벨로 쓰지 않음
3. **₩ 단일 확정값 표시 금지** — ValuePage에서만 "범위(₩X~₩Y) + 조건부"로 표시
4. **정밀 데이터 저장 금지** — 위치/정밀타임스탬프/연락처/텍스트원문/화면내용/앱명
5. **UI 톤** — 라이트 테마(화이트 + 연보라 1색 + 그레이스케일), 상태는 아이콘/텍스트/배지로

## 개발 환경

### 환경 분리

| 환경 | API | App | Admin |
|------|-----|-----|-------|
| local | `localhost:3001` | `localhost:5173` | `localhost:15173` |
| dev | Render dev | Android dev flavor | — |
| live | Render prod | Android live flavor | Vite prod build |

### 개발 서버 실행

```bash
# API
cd uncounted-api && npm run dev        # port 3001

# App (웹 개발 서버)
cd uncounted-app && npm run dev        # port 5173

# Admin
cd uncounted-admin && yarn dev         # port 15173
```

### 환경변수

- API: `.env` (SUPABASE_URL, S3 설정, ENCRYPTION_KEY, CORS_ORIGIN)
- App: `.env` / `.env.development` / `.env.production` (VITE_API_URL, VITE_ENCRYPTION_KEY)
- App 네이티브: `android/local.properties` (flavor별 API_URL, ENCRYPTION_KEY, 서명 키스토어)
- Admin: `.env` (VITE_API_URL)
- 모든 환경변수 파일은 `.gitignore` 처리됨

## DB 마이그레이션

`uncounted-api/supabase/migrations/` — 001~017번 SQL 파일.
새 마이그레이션 추가 시 번호 순차 증가 (예: `018_xxx.sql`).
컬럼 변경 시 `uncounted-docs/` 내 DB 스키마 문서도 함께 업데이트.

## 오케스트레이션 가이드

### 에이전트 소유권

| 에이전트 | 담당 디렉토리 | 역할 |
|---------|-------------|------|
| backend-expert | `uncounted-api/` | API 라우트, DB 쿼리, 마이그레이션 |
| app-expert | `uncounted-app/` | React UI, Capacitor, Android Java |
| admin-expert | `uncounted-admin/` | 관리자 웹 UI |
| architect-lead | 전체 (읽기 전용) | 계획 수립, 크로스 프로젝트 조율 |

### 크로스 프로젝트 작업 규칙

- API 엔드포인트 추가/변경 시 → App과 Admin의 API 클라이언트도 함께 수정
- DB 스키마 변경 시 → API 마이그레이션 + `uncounted-docs/` 문서 동시 업데이트
- 암호화 키/로직 변경 시 → API, App(JS+Java), Admin 3곳 모두 동기화 필수
- 타입 변경 시 → 각 프로젝트의 `src/types/` 일관성 확인

### 주의사항

- 각 하위 폴더는 독립 Git 저장소 — 커밋/PR은 프로젝트별로 분리
- `uncounted-env/`는 환경변수 백업용 — 직접 수정하지 말 것
- ONNX 모델 파일(`*.onnx`)은 git 제외 — App의 `android/app/src/main/assets/stt/`에 로컬 보관

## 상세 참조

| 프로젝트 | 상세 문서 |
|---------|----------|
| API | `uncounted-api/CLAUDE.md` — 엔드포인트 전체 목록, 미들웨어 체인, 인증 상세 |
| App | `uncounted-app/CLAUDE.md` — 라우트, 네이티브 STT 파이프라인, 타입, localStorage 키 |
| Admin | `uncounted-admin/CLAUDE.md` — 관리자 라우트, 디렉토리 구조 |
| 문서 | `uncounted-docs/` — 기능정의서, 와이어프레임, DB 스키마, 마이그레이션 현황 |
