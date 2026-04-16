# Uncounted Platform — Workspace Root

음성 파일 + 휴대폰 메타데이터(비식별·버킷 기반)를 디지털 자산으로 스캔·관리·패키징하는 플랫폼.
사용자가 동의(consent ON)한 데이터만 SKU 기준으로 클라이언트에 납품한다.

## 워크스페이스 구조

```
uncounted-project/
├── uncounted-api/          # Hono REST API (백엔드)
├── uncounted-voice-api/    # FastAPI STT 서버 (Python)
├── uncounted-app/          # React + Capacitor (모바일 앱)
├── uncounted-admin/        # React + Vite (관리자 웹)
├── uncounted-docs/         # 기능정의서, UX, 와이어프레임, DB 스키마
└── uncounted-env/          # 환경변수 백업 (zip)
```

## 기술 스택 요약

| 항목 | API | Voice API | App | Admin |
|------|-----|-----------|-----|-------|
| 프레임워크 | Hono 4 + Node.js | FastAPI + Uvicorn | React 19 + Capacitor 8 | React 19 + Vite 6 |
| 언어 | TypeScript (tsx) | Python 3.12 | TypeScript + Java (Android) | TypeScript |
| DB | Supabase (service_role) | -- (인메모리 job store) | -- | -- |
| 스토리지 | iwinv S3 호환 | RAM disk (/dev/shm) | IndexedDB + localStorage | -- |
| 암호화 | AES-256-GCM | -- | AES-256-GCM (@noble/ciphers) | AES-256-GCM (@noble/ciphers) |
| 테스트 | Vitest 3 | pytest | Vitest 3 | -- |
| 배포 | Render.com | systemd (GPU 서버) | Android APK (flavor별) | Vite build |

## 핵심 비즈니스 규칙 (절대 준수)

1. **GPU 기반 AI 추론 결과 저장/표시/판매 금지** — 모델 산출값 필드 추가 금지
2. **라벨은 사용자 입력만** — AI 자동 판정값을 라벨로 쓰지 않음
3. **₩ 단일 확정값 표시 금지** — ValuePage에서만 "범위(₩X~₩Y) + 조건부"
4. **정밀 데이터 저장 금지** — 위치/정밀타임스탬프/연락처/텍스트원문/화면내용/앱명
5. **UI 톤** — 라이트 테마(화이트 + 연보라 1색 + 그레이스케일)

## 개발 서버

```bash
cd uncounted-api && npm run dev        # port 3001
cd uncounted-voice-api && ./run.sh dev # port 8001
cd uncounted-app && npm run dev        # port 5173
cd uncounted-admin && yarn dev         # port 15173
```

## 상세 참조

- 서브프로젝트별: `uncounted-{api,voice-api,app,admin}/AGENTS.md`
- 공통 규칙: `.claude/rules/common/*.md` (architecture, dev-environment, agents, DB 마이그레이션)
- 작업 시작 전 반드시 `.claude/rules/` 관련 규칙 파일을 확인할 것

## 크로스 프로젝트 규칙

- API 엔드포인트 추가/변경 → App과 Admin의 API 클라이언트도 업데이트
- Voice API 엔드포인트/파라미터 변경 → App의 voiceApi.ts + Android VoiceApiClient.java 동기화
- DB 스키마 변경 → API migration + `uncounted-docs/` 문서 업데이트
- 암호화 키/로직 변경 → API, App (JS+Java), Admin 3곳 동기화 (Voice API는 암호화 미적용)
- 타입 변경 → `src/types/` 일관성 확인

## 코딩 규칙 요약

- **불변성**: 항상 새 객체 생성, 원본 변경 금지
- **TDD**: RED → GREEN → IMPROVE, 80%+ 커버리지
- **수술적 변경**: 요청된 것만 변경, 주변 코드 "개선" 금지
- **검증 필수**: 완료 주장 전 실행 증거 필수 (빌드, 테스트 결과)
- **파일 크기**: 800줄 max, 함수 50줄 max, 중첩 4레벨 max
- **시크릿**: 하드코딩 금지, 환경변수만 사용
- **커밋 형식**: `<type>: <description>` (feat, fix, refactor, docs, test, chore, perf, ci)

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
