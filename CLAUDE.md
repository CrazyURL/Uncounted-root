AGENTS.md

## ⚠️ Critical operational facts (자주 헷갈림 — 2026-05-19 추가)

### 1. ✓ GPU worker 단일화 완료 (2026-05-19)
- **Python `voice-worker@dev` (GPU 서버) 단독 운영**
- TS gpu-worker (`uncounted-api/src/services/gpu-worker.ts`) 는 비활성:
  - Render Dashboard `GPU_WORKER_ENABLED=false` (dev/prod 둘 다)
  - `render.yaml` 도 `"false"` 로 정정 commit
  - `dev.ts:23-26` 의 가드 (`if (process.env.GPU_WORKER_ENABLED === 'true')`) 가 startGpuWorker() 막음
- TS gpu-worker.ts 코드는 deprecated — 손대지 않음. 새 기능은 Python 측에 반영.
- `.env.live` VOICE_API_URL 도 `localhost:8000` 으로 정정 (이전 `8001` 가 dev-live race 원인).
- 메모리: `[[project-worker-migration-render-to-gpu]]`, `[[reference-gpu-server-architecture]]`

### 2. ✓ voice-api 리포 일원화 완료 (2026-05-20)
- `uncounted-voice-api` (hyphen) 단일 리포로 통합. underscore 리포는 **archived (read-only)** 전환됨.
- worker.py / Stage 14/15/16 ML 파이프라인 / speaker_analysis / topic_segmentation 모두 hyphen main 에 머지.
- GPU 서버 운영 직전 상태는 `archive/gpu-state-2026-05-20` 브랜치에 보존.
  - GPU 로컬 edit 만 있던 train_emotion_model.py (DIALOG_ACT_GROUP, model_card.json, undersampling, 혼합정밀) 가 여기에 있음. main 에는 반영 미루어 둠.
- 머지 commit: `1665762 merge: unify uncounted-voice_api (underscore) into uncounted-voice-api`
- 후속 정리 (2026-05-20):
  - 로컬 underscore clone 위치 변경: `uncounted-voice_api/` → `scratch/legacy-underscore-clone/` (origin/commit/브랜치 보존, robocopy /MOVE 로 이동 — `mv`·PowerShell `Move-Item` 은 Windows 잠금에 거부됨)
  - GitHub https://github.com/CrazyURL/uncounted-voice_api 리포 archive 완료 (`archived: true`). clone/diff/cherry-pick 가능, push/issue/PR 차단.
- **영구 삭제 (DELETE /repos/CrazyURL/uncounted-voice_api)** 는 1~2주 운영 안정 확인 후 별도 승인. 같은 시기에 `scratch/legacy-underscore-clone/` 폴더도 제거.

### 3. sessions 테이블 — 부재 컬럼
- `created_at` **없음** → `updated_at` 사용
- `voice_api_task_id` **없음** → task_id 는 gpu-worker.ts 메모리에서만 존재 (DB 미저장)
- 처리 시각 필터는 `stt_at` 또는 `updated_at`

### 4. session_dataset_eligible — SPEC ↔ migration 불일치
- SPEC `docs/SPEC_EXPORT_V2.md` §4.8.1 L835: `BOOLEAN DEFAULT NULL`
- 실 deploy `074_aihub_aligned_columns.sql` L36: `BOOLEAN DEFAULT false`
- 현재 분포 (412/0/0 = false/true/null) → false 적용 상태
- export-builder 판정은 null/false 모두 부적격 취급 권장

### 5. Voice API `UtteranceResult` — utterance-level pii_intervals 없음
- `uncounted-voice-api/app/models/schemas.py` UtteranceResult schema 에 `pii_intervals` 필드 **없음**
- `transcript_text` 는 이미 마스킹된 상태로 emit. `pii_summary` 는 job-level 에만 존재
- DB 컬럼 `utterances.pii_intervals` 는 존재하지만 input source 부재 → persist 보류 (B2 D4 결정)

### 6. GPU 서버 SSH (Tailscale)
- host: 100.80.44.19 (Tailscale IP), port 2222, user gdash
- 자동화: `plink -P 2222 -hostkey "SHA256:IxN1SGuSyV1Jl3Sx1SJdQxHfKKo0q5B4BCSs4fk9s8I" -pw <pw> -batch gdash@100.80.44.19 "..."`
- Render `uncounted-api` 컨테이너도 Tailscale 안 (100.112.x.x) — 환경변수 `VOICE_API_URL=http://100.80.44.19:8001` 으로 호출 가능

### 7. GitHub PAT — 환경변수와 credential helper 불일치
- 환경변수 `GITHUB_TOKEN` / `GH_TOKEN` 은 **만료** 상태 (`Bad credentials` 응답). 직접 `curl -H "Authorization: token $GITHUB_TOKEN" ...` 호출 금지.
- 유효한 PAT 는 Windows Credential Manager 안. `printf 'protocol=https\nhost=github.com\n\n' | git credential fill` 로 추출 가능.
  - 검증 계정: `CrazyURL` (`gh api /user` 조회 결과)
- GitHub API 자동화 권장 패턴:
  ```bash
  PAT=$(printf 'protocol=https\nhost=github.com\n\n' | git credential fill 2>/dev/null | grep '^password=' | sed 's/^password=//')
  curl -H "Authorization: token $PAT" -H "Accept: application/vnd.github+json" "https://api.github.com/..."
  ```
- 다른 자동화/CI 가 `GITHUB_TOKEN` 환경변수 의존하면 따로 갱신 필요. 본 워크스테이션 우선순위는 credential helper.

### 8. uncounted-admin 빌드 검증 — `tsc -b` 사용 (`tsc --noEmit` 는 헛검증) (2026-05-21)
- 빌드/타입 검증은 **`npm run build` (= `tsc -b && vite build`)** 또는 최소 **`tsc -b`**. **`npx tsc --noEmit` 는 헛검증** — 루트 tsconfig 가 `references` 구조(files 빈 배열 + `tsconfig.app.json` 참조)라 실제 소스 0개를 검사하고 항상 exit 0 반환.
- Render admin dev 는 **auto-deploy 안 됨 → Manual Deploy 필요** (#7 위 Render 정책과 동일). 빌드 실패 시 **옛 번들이 그대로 서빙**되어 "새 UI 가 안 보임" 으로 나타남.
- 배포 반영 의심 시: `curl <admin-url>/assets/index-*.js | grep <코드의 고유 한글 문자열>` 로 번들 포함 여부 직접 확인.
- 다른 워크스트림이 main 에 타입에러 코드를 머지해 두면, 내 PR 머지 후 **첫 빌드에서 그 에러가 노출**되어 빌드가 막힐 수 있음 — 빌드 실패 로그의 에러 파일이 내 변경 파일인지부터 확인 (2026-05-20 delivery-ui 타입에러가 라벨 badge PR 빌드를 막은 사례).

### 9. utterance 자동라벨 emit — 학습 고도화 중 null 정상 (2026-05-21)
- GPU 서버 emotion/dialog_act 모델 **학습 고도화 진행 중** → Voice API utterance 응답에 `emotion`/`dialog_act` 가 미emit 될 수 있음. 이 경우 `utterances` 회귀 SQL 에서 `has_emotion=0`/`has_dialog_act=0` 은 **정상**. 학습 완료 후 자동 채워짐.
- worker.py 는 `numeric_patterns`/`utterance_form`/`clipping_ratio`/`snr_db`/`speech_ratio` 를 audio·transcript 에서 **직접 계산** (Voice API 의존 X) → 학습 무관하게 채워짐.
- `honorific_level`/`confidence_tier` 도 아직 미채움 가능 (Voice API emit 시작 시 자동). admin 발화 라벨 badge 는 값 null 이면 미렌더.

### 10. 화자 성별/목소리연령 "미상" = voice-api venv 의 librosa 누락 (2026-05-21)
- `speaker_gender` / `speaker_voice_age_range` 는 voice-api `app/services/speaker_analysis_service.py` 의 `_detect_gender_and_voice_age()` 가 **librosa F0(pyin) 중앙값**으로 산출 (male<165, ≥165 female, 겹침 None). `_MALE_F0_MAX=180`, `_FEMALE_F0_MIN=165`.
- 이 함수는 **함수 안에서 `import librosa`** 하고 실패 시 `(None, None)` 반환 → 화자 패널 성별·목소리연령이 전부 **"미상"**. `requirements.txt` 에 `librosa>=0.10.0` 명시돼 있으나 **venv 재생성 시 설치 누락되면 재발**. 증상 진단: `journalctl -u voice-api@dev | grep 'F0 분석 실패'` → `No module named 'librosa'`.
- 복구: `venv/bin/pip install 'librosa>=0.10.0'` (numpy/scipy/torch 불변, 신규 9패키지 추가). 함수내 lazy import 라 **voice-api restart 없이** 다음 신규 세션부터 적용됨(2026-05-21 적용 확인). 기존 미상 세션은 재처리 전까지 null 유지.
- `말투연령`(speech_age, 텍스트 기반)은 librosa 무관하게 채워지므로, "말투연령은 나오는데 목소리연령/성별만 미상" 이면 librosa 누락 신호.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
