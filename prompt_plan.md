# 가변형 문장경계 청킹 (Variable-Length Sentence-Aware Chunking)

상태: 구현 완료 (테스트 실행 대기)
타입: feature
생성일: 2026-04-06

## 요약

고정 60초 절삭 → STT 워드 타이밍 기반 문장 경계 분할로 변경.
청크 파일의 문장 끊김 해소 → 데이터 상품 품질 향상.

## 변경 파일

| 파일 | 변경 |
|------|------|
| `SentenceBoundaryDetector.java` | **신규** — 문장경계 탐지 알고리즘 |
| `WavParser.java` | 수정 — `splitAtBoundaries()` 추가, `ChunkInfo` 생성자 public |
| `SttProcessingService.java` | 수정 — STT→업로드 사이에 재청킹 삽입 |
| `SentenceBoundaryDetectorTest.java` | **신규** — 15개 단위 테스트 |

## 파이프라인

```
[기존] splitChunks(60s) → STT → 업로드
[변경] splitChunks(60s) → STT → ★경계탐지 → 재분할 → 업로드
```

## 검증

- 메인 소스 컴파일: `BUILD SUCCESSFUL`
- 테스트 소스: 에러 없음 (기존 다른 테스트의 pre-existing 에러로 실행 차단)
- 기존 코드 동작 영향 없음 (최악의 경우 고정 60초 fallback)

---

## 이전 계획

---

# SKU 데이터셋 추출 시스템 — Phase 1 구현 계획

상태: 진행 중
타입: feature
생성일: 2026-04-05

## 확정된 기술 결정

1. **노이즈 억제 + 묵음 트리밍 + 음량 정규화**: 서버사이드 FFmpeg (`fluent-ffmpeg` + `ffmpeg-static`)
   - `afftdn` (노이즈), `silenceremove` (묵음), `loudnorm` (음량) 필터 체인
   - Render.com `runtime: node` 그대로 사용 (ffmpeg-static이 바이너리 번들)
2. **STT**: 서버사이드 STT 미구현 — 모바일 앱에서 이미 STT 완료된 세션(DB transcript 존재)만 대상
   - transcript 없는 세션은 Phase 1 추출 대상에서 제외
3. **파일 구조**: `src/lib/export/` + `src/lib/audio/` (기존 프로젝트 패턴 준수)
4. **라우트 분리**: 기존 admin.ts에서 export 전용 라우트 분리 (`admin-exports.ts`)

## 목표

CLOVA Speech 샘플 대응: 어드민에서 **U-A01 1시간 패키지**를 생성하여 즉시 전달 가능한 상태 구현.

**완료 기준**: 어드민에서 U-A01 선택 → 1시간 입력 → 발화 검수 → 패키징 확정 → ZIP 다운로드 (utterance WAV + transcript + metadata 포함)

## 프로젝트 구조

```
uncounted-project/
├── uncounted-api/      # Hono REST API (백엔드, TypeScript, Supabase, iwinv S3)
├── uncounted-app/      # React + Capacitor (모바일 앱) — Phase 1에서 변경 없음
├── uncounted-admin/    # React + Vite (관리자 웹, TypeScript)
└── uncounted-docs/     # 기능정의서, DB 스키마
```

## 기존 구현 현황 (재사용 가능)

### DB (이미 존재)
- `export_jobs` — 추출 요청 관리 (status 상태머신 포함)
- `billable_units` — BU별 품질/동의/잠금 추적
- `delivery_records` — 납품 이력
- `user_asset_ledger` — 정산 원장

### 백엔드 API (이미 존재)
- `GET/POST /api/admin/export-jobs` — CRUD
- `GET/POST /api/admin/billable-units` — 조회/일괄생성
- `POST /api/admin/billable-units/lock|unlock|mark-delivered` — BU 잠금/해제/배달
- `GET/POST /api/admin/ledger-entries` — 정산

### 어드민 프론트엔드 (이미 존재)
- `AdminBuildWizardPage.tsx` — 4단계 위저드 (클라이언트→SKU→수량/필터→시뮬레이션)
- `AdminExportJobsPage.tsx` / `AdminExportJobDetailPage.tsx` — 목록/상세
- `billableUnitEngine.ts` — BU 필터/샘플링 (quality_first, stratified 등)
- `wavEncoder.ts` — WAV 인코딩, 리샘플링, beep 마스킹, 묵음 제거
- `audioScanner.ts` — 클라이언트 품질 분석 (SNR, silence ratio, clipping)
- `diarizationEngine.ts` — 화자분리 프레임워크 (pub/sub, 실제 알고리즘 미구현)
- `sttEngine.ts` — Whisper-tiny WASM (클라이언트 STT)
- `adminHelpers.ts` — jszip 기반 ZIP 패키징, JSONL/CSV 내보내기

## Phase 1 신규 개발 항목

### Layer 1: DB 마이그레이션

| ID | 항목 | 설명 |
|----|------|------|
| D2 | `export_package_items` | 패키지 내 개별 파일(utterance) 추적 |
| D4 | `bu_quality_metrics` | BU별 서버 실측 품질 (SNR, speech_ratio, clipping, beep_mask, LUFS) |
| D6 | exports 스토리지 버킷 | S3에 `exports/` 버킷 또는 prefix 생성 |
| D-ext | export_jobs 컬럼 확장 | utterance_count, package_size_bytes, package_storage_path, download_url 등 추가 |

### Layer 2: 백엔드 — 오디오 처리 파이프라인

| ID | 항목 | 설명 | 의존성 |
|----|------|------|--------|
| B1 | WAV 품질 분석 잡 | S3 WAV → SNR/speech_ratio/clipping/beep_mask 실측 → bu_quality_metrics 저장 | D4 |
| B2 | 노이즈 억제 | spectral gating (Node.js) 또는 RNNoise (WASM/native) | — |
| B3 | 묵음 트리밍 | 3초+ 연속 묵음 제거/압축 (서버사이드) | — |
| B5 | 발화 재분할 엔진 | diarization + VAD → utterance별 WAV 생성 (5~30초) | B2, B3 |
| B6 | 서버사이드 일괄 STT | Faster-Whisper 또는 Whisper.cpp로 미처리 세션 일괄 처리 | — |
| B7 | PII 마스킹 동기화 | beep 구간 ↔ transcript [MASKED] 정합성 검증/보정 | B6 |

### Layer 3: 백엔드 — Export 파이프라인 API

| ID | 항목 | 설명 | 의존성 |
|----|------|------|--------|
| B9-preview | 미리보기 API | `GET /api/admin/export-requests/:id/preview` — 적격 BU 수, 품질 분포 | B1, B11 |
| B9-process | 처리 트리거 API | `POST /api/admin/export-requests/:id/process` — BU 풀링 → 발화 재분할 → 후처리 | B5, B11 |
| B9-utterances | 발화 목록 API | `GET /api/admin/export-requests/:id/utterances` — 검수용 발화 리스트 | B9-process |
| B9-review | 발화 검수 API | `PUT /api/admin/export-requests/:id/utterances/review` — 제외/포함 상태 업데이트 | B9-utterances |
| B9-finalize | 패키징 확정 API | `POST /api/admin/export-requests/:id/finalize` — 검수 완료 → ZIP 생성 시작 | B9-review, B10 |
| B9-download | 패키지 다운로드 API | `GET /api/admin/export-requests/:id/download` — 서명 URL 반환 | B10 |
| B10 | ZIP 패키징 엔진 | SKU별 디렉토리 구조 + manifest.json + quality_summary.json 생성 → S3 업로드 | D6 |
| B11 | BU 풀링 & 랭킹 강화 | ~~기존 필터 + 품질점수 랭킹 + 다양성 제약~~ **완료**: 품질점수 랭킹 + 화자 다양성(40%/2명) + demographicTargets 버케팅(성별/연령/지역 비율 균형) + demographicActual 달성비율 리포트 | B1 |
| B9-inventory | 재고 현황 API | `GET /api/admin/inventory` — SKU별 가용 BU/이벤트 수 | B1 |

### Layer 4: 프론트엔드 — 어드민 UI

| ID | 항목 | 설명 | 의존성 |
|----|------|------|--------|
| F1-ext | Export 위저드 확장 | 기존 4단계에 미리보기 + 처리진행 + 발화검수 + 다운로드 추가 | B9-* |
| F7 | 발화 검수 UI | 발화 목록 테이블 + 재생(audio element) + 자동필터(3초/C/beep30%) + 체크박스 + 검수 가이드 패널 + 제외 사유 표시 | B9-utterances, B9-review |
| F4 | 벌크 라벨링 UI | 세션 청취 → BU 단위 라벨 일괄 입력 (relationship, purpose, domain, tone, noise) | — |
| F2-mini | SKU 재고 카드 | Export 위저드 Step 1에 SKU별 가용 BU/화자 수 표시 | B9-inventory |

## 의존성 그래프 (실행 순서)

```
Wave 1 (병렬): D2, D4, D6, D-ext, B2, B3, B6
Wave 2 (병렬): B1(→D4), B5(→B2,B3), B7(→B6)
Wave 3 (병렬): B11(→B1), B10(→D6), B9-inventory(→B1)
Wave 4 (병렬): B9-preview(→B11), B9-process(→B5,B11)
Wave 5 (순차): B9-utterances → B9-review → B9-finalize(→B10) → B9-download
Wave 6 (병렬): F1-ext, F7, F4, F2-mini (→ API들 완료 후)
```

## 기술 스택 참고

- **백엔드**: Hono 4 + Node.js, Supabase (service_role), iwinv S3 호환, AES-256-GCM 암호화
- **프론트엔드**: React 19 + Vite 6, TypeScript
- **인증**: httpOnly Cookie + Bearer, admin = app_metadata.role === 'admin'
- **테스트**: Vitest 3
- **API 클라이언트**: apiFetch<T>() 래퍼 (자동 암호화/복호화 + 401 갱신)

## 핵심 비즈니스 규칙

1. GPU 기반 AI 추론 결과 저장/표시/판매 금지
2. 라벨은 사용자 입력만 (AI 자동 판정 라벨 사용 금지)
3. 정밀 데이터 저장 금지 (위치/정밀타임스탬프/연락처/텍스트원문)
4. consent ON 데이터만 SKU로 납품 가능
5. BU 이중 판매 방지 (lock_status 기반)

## 서버사이드 오디오 처리 고려사항

- 현재 오디오 처리(품질분석, 묵음제거, STT)가 모두 **클라이언트(어드민 브라우저)**에 있음
- Phase 1에서 서버사이드로 이관해야 하는 핵심: WAV 품질 분석, 발화 재분할, ZIP 패키징
- Node.js에서 오디오 처리: `audiobuffer-to-wav`, `node-vad`, `ffmpeg` (child_process), 또는 WASM 기반
- STT는 Faster-Whisper(Python) 또는 Whisper.cpp(native) subprocess 호출 검토
