# Uncounted Platform — Workspace Root

음성 파일 + 휴대폰 메타데이터(비식별·버킷 기반)를 디지털 자산으로 스캔·관리·패키징하는 플랫폼.
사용자가 동의(consent ON)한 데이터만 SKU 기준으로 클라이언트에 납품한다.

## 워크스페이스 구조

```
uncounted-project/          <- 여기서 claude 실행
├── uncounted-api/          # Hono REST API (백엔드)
├── uncounted-app/          # React + Capacitor (모바일 앱)
├── uncounted-admin/        # React + Vite (관리자 웹)
├── uncounted-docs/         # 기능정의서, UX, 와이어프레임, DB 스키마
└── uncounted-env/          # 환경변수 백업 (zip)
```

## 기술 스택 요약

| 항목 | API | App | Admin |
|------|-----|-----|-------|
| 프레임워크 | Hono 4 + Node.js | React 19 + Capacitor 8 | React 19 + Vite 6 |
| 언어 | TypeScript (tsx) | TypeScript + Java (Android) | TypeScript |
| DB | Supabase (service_role) | -- | -- |
| 스토리지 | iwinv S3 호환 | IndexedDB + localStorage | -- |
| 암호화 | AES-256-GCM | AES-256-GCM (@noble/ciphers) | AES-256-GCM (@noble/ciphers) |
| 테스트 | Vitest 3 | Vitest 3 | -- |
| 배포 | Render.com | Android APK (flavor별) | Vite build |

## 핵심 비즈니스 규칙 (절대 준수)

1. **GPU 기반 AI 추론 결과 저장/표시/판매 금지** — 모델 산출값 필드 추가 금지
2. **라벨은 사용자 입력만** — AI 자동 판정값을 라벨로 쓰지 않음
3. **₩ 단일 확정값 표시 금지** — ValuePage에서만 "범위(₩X~₩Y) + 조건부"
4. **정밀 데이터 저장 금지** — 위치/정밀타임스탬프/연락처/텍스트원문/화면내용/앱명
5. **UI 톤** — 라이트 테마(화이트 + 연보라 1색 + 그레이스케일)

## 개발 서버

```bash
cd uncounted-api && npm run dev        # port 3001
cd uncounted-app && npm run dev        # port 5173
cd uncounted-admin && yarn dev         # port 15173
```

## DB 마이그레이션

`uncounted-api/supabase/migrations/` — 번호 순차 증가. 컬럼 변경 시 `uncounted-docs/` 문서도 업데이트.

## 상세 참조

| 문서 | 내용 |
|------|------|
| `uncounted-api/CLAUDE.md` | 엔드포인트 목록, 미들웨어 체인, 인증 상세 |
| `uncounted-app/CLAUDE.md` | 라우트, 네이티브 STT 파이프라인, 타입, localStorage |
| `uncounted-admin/CLAUDE.md` | 관리자 라우트, 디렉토리 구조 |
| `.claude/rules/common/architecture.md` | 암호화 통신, 인증 흐름, API 클라이언트 패턴 |
| `.claude/rules/common/dev-environment.md` | 환경 분리, 환경변수, 주의사항 |
| `.claude/rules/common/agents.md` | 에이전트 소유권, 크로스 프로젝트 규칙 |
