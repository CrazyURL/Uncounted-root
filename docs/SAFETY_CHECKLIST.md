# SAFETY_CHECKLIST — Uncounted v11 Export v2 자동 검증 명세

> 본 문서는 외부 ZIP 산출물의 안전성을 자동 검증하기 위한 **명세**.
> 실제 스크립트 구현은 **창 C (export-builder)** 작업 범위.
> 검증 기준: [SPEC_EXPORT_V2.md §1 안전선 13개](SPEC_EXPORT_V2.md) + §7 검증 22항목.

---

## 1. 사용 시점

### 1.1 ZIP 빌드 직전 (필수, 빌드 차단)

- export-builder.ts 가 ZIP archive 를 finalize 하기 전에 검증
- 위반 발견 시 ZIP 미생성 + 에러 throw
- 책임: 창 C 작업자

### 1.2 CI/CD 파이프라인 (PR 머지 전)

- export 관련 PR 머지 전 자동 실행
- 위반 시 CI fail → 머지 차단
- 책임: 창 C + 인프라 설정

### 1.3 코드 리뷰 (매핑표 변경 시)

- `docs/SPEC_EXPORT_V2.md` §4 매핑표가 변경된 PR
- 신규 컬럼 추가 시 매핑표 갱신 강제 확인
- 책임: 모든 PR 리뷰어

### 1.4 정기 audit (매월 1회 자동 실행)

- production 다운로드 가능한 모든 ZIP 샘플링
- 위반 발견 시 LeeGoGke 알림
- 책임: 운영 (cron / scheduled task)

### 1.5 새 컬럼 추가 시

- DB 마이그레이션 PR 머지 전
- 매핑표 §4 갱신 강제
- 책임: 마이그레이션 PR 작성자 + 리뷰어

---

## 2. 자동 검증 스크립트 명세

### 2.1 검사 대상 파일 패턴

**스캔 범위는 ZIP 콘텐츠 한정. 프로젝트 트리 전체 스캔 X.**

검사 대상 (Hard Block 적용):
- 최종 외부 ZIP 을 압축 해제한 디렉터리 내부의 다음 확장자만:
  - `*.json`
  - `*.jsonl`
  - `*.md`
  - `*.txt`

실제 흐름:
1. ZIP 빌드 직전 (또는 빌드 후 검증 단계) → ZIP 콘텐츠를 임시 디렉터리로 해제
2. 해제된 디렉터리만 스캔 (예: `.\export_check\`)
3. 검사 완료 후 임시 디렉터리 삭제

### 2.2 검사 대상 제외

다음은 검사 제외:

- `*.wav` (오디오 바이너리)
- `*.zip` (중첩 ZIP, 발생 시 별도 처리)
- **ZIP 외부 산출물 전체** (디버깅 로그, 학습 데이터, 프로젝트 코드/문서)

### 2.3 검사 대상 제외 목록 (참고용 — ZIP-only 스캔이므로 본 목록은 *추가* 방어선)

다음 파일은 **외부 ZIP 미포함 + safety scan 대상 X**:

```
# 본 SPEC 자체 (내부 개발용)
docs/SPEC_EXPORT_V2.md
docs/SAFETY_CHECKLIST.md
docs/WORKSTREAM_DEPENDENCIES.md
docs/CLAUDE.md
docs/CLAUDE_WORKSTREAM_HEADER.md

# 프로젝트 루트 메타
CLAUDE.md
prompt_plan.md

# 내부 산출물
internal_*.json
model_pipeline_report*.json
finetuning_readiness_report*.json
processing_internal_*.json

# 도구 산출물
graphify-out/**

# 마이그레이션 / 코드
uncounted-api/**
uncounted-app/**
uncounted-admin/**
uncounted-voice-api/**
uncounted-docs/**
scripts/**
```

**중요**: 내부 문서에는 안전선 #6 키워드(AI Hub, kcelectra, whisperx 등)가 **설명 목적으로 등장하는 것이 정상**이다. SPEC 작성/리뷰 시 이를 false positive로 처리하지 말 것.

### 2.4 검증 명령 패턴 (PowerShell + ripgrep)

**PowerShell 단독**:

```powershell
# 외부 ZIP 압축 해제 (검사용)
Expand-Archive -Path .\export.zip -DestinationPath .\export_check\ -Force

# 검사 대상 파일 수집
$files = Get-ChildItem -Path .\export_check\ -Recurse -Include *.json,*.jsonl,*.md,*.txt

# 금지 키워드 검색
Select-String -Path $files.FullName -Pattern "(?i)(aihub|kcelectra|whisperx|pyannote|wespeaker|snunlp|KR-ELECTRA|HF_TOKEN|HuggingFace|finetune)"
```

**ripgrep 사용** (더 빠름):

```powershell
# 검사 대상 파일에서만 검색
rg -i --type-add 'data:*.{json,jsonl,md,txt}' -t data `
   '(aihub|kcelectra|whisperx|pyannote|wespeaker|snunlp|KR-ELECTRA|HF_TOKEN|HuggingFace|finetune)' `
   .\export_check\
```

---

## 3. 금지 키워드 (4 카테고리, Hard Block)

### 3.1 데이터셋 출처

| 키워드 | 정규식 | 안전선 |
|---|---|---|
| AI Hub | `(?i)ai\s*hub` | #6 |
| aihub | `(?i)aihub` | #6 |
| AIHUB | `AIHUB` | #6 |

### 3.2 분류기 모델명

| 키워드 | 정규식 | 안전선 |
|---|---|---|
| KcELECTRA | `(?i)kc[-_]?electra` | #6 |
| kcelectra | `(?i)kcelectra` | #6 |
| snunlp | `(?i)snunlp` | #6 |
| KR-ELECTRA | `(?i)kr[-_]?electra` | #6 |

### 3.3 음성 모델명

| 키워드 | 정규식 | 안전선 |
|---|---|---|
| WhisperX | `(?i)whisperx` | #6 |
| whisperx_* | `(?i)whisperx_[a-z0-9]+` | #6 |
| pyannote | `(?i)pyannote` | #6 |
| WeSpeaker | `(?i)wespeaker` | #6 |

### 3.4 인프라 / 학습 (Hard Block)

| 키워드 | 정규식 | 안전선 |
|---|---|---|
| HuggingFace | `(?i)huggingface` | #6 |
| HF_TOKEN | `HF_TOKEN` | #6 |
| finetune | `(?i)finetune\|fine-tune` | #6 |
| finetuning_readiness | `(?i)finetuning_readiness` | #6 |
| model_pipeline_report | `(?i)model_pipeline_report` | #6 |
| internal_ | `internal_[a-z]+` | #7 |
| 구체적 학습 스크립트명 | `(?i)train_(emotion\|speech_age\|dialog_act\|topic)` | #6 |

### 3.5 Warning Only (Hard Block X — false positive 회피)

다음 키워드는 외부 검토 결과 **일반 표현으로 등장 가능** (false positive 위험). Hard Block 대신 **수동 검토 알림** 만 발송.

| 키워드 | 정규식 | 사유 |
|---|---|---|
| train_ (일반) | `\btrain_[a-z]+`  (단, §3.4 의 구체적 학습 스크립트명 제외) | "train_split", "train_data" 등 ML 일반 용어 |
| training | `(?i)\btraining\b` | "training session", "training material" 등 일반 표현 |
| training-ready | `(?i)training[-_]?ready` | 데이터셋 카드 표현으로 등장 가능 |
| train_split, train_data, train_ratio | (위 패턴 포함) | ML 분할 표준 용어 |

처리:
- Hard Block 발견 시 → 빌드 차단 + 에러
- Warning 발견 시 → 빌드 통과 + 로그 기록 + LeeGoGke 알림
- 정기 audit 에서 Warning 누적 시 추가 검토

### 3.6 단일 검증 명령 (Hard Block 통합)

```powershell
rg -i `
   '(aihub|kc[-_]?electra|snunlp|kr[-_]?electra|whisperx|pyannote|wespeaker|huggingface|HF_TOKEN|finetune|fine-tune|finetuning_readiness|model_pipeline_report|internal_|train_(emotion|speech_age|dialog_act|topic))' `
   --type-add 'data:*.{json,jsonl,md,txt}' -t data `
   .\export_check\
```

검출 결과 0건이어야 통과 (Hard Block).

Warning 명령 (별도 실행, 빌드 차단 X):

```powershell
rg -i `
   '\btrain_[a-z]+|\btraining\b|training[-_]?ready' `
   --type-add 'data:*.{json,jsonl,md,txt}' -t data `
   .\export_check\
```

검출 시 로그 기록 + 알림 (빌드는 통과).

---

## 4. 파일 존재 검사

### 4.1 internal_*.json 미포함 검증

```powershell
$internalFiles = Get-ChildItem -Path .\export_check\ -Recurse -Filter "internal_*.json"
if ($internalFiles.Count -gt 0) {
  Write-Error "안전선 #7 위반: internal_*.json 발견 ($($internalFiles.Count)건)"
  $internalFiles | ForEach-Object { Write-Error "  - $($_.FullName)" }
  exit 1
}
```

안전선 #7. 0건이어야 통과.

### 4.2 model_pipeline_report* 미포함 검증

```powershell
$reportFiles = Get-ChildItem -Path .\export_check\ -Recurse -Filter "model_pipeline_report*"
if ($reportFiles.Count -gt 0) {
  Write-Error "안전선 #7 위반: model_pipeline_report* 발견"
  exit 1
}
```

### 4.3 finetuning_readiness_report* 미포함 검증

```powershell
$finetuneFiles = Get-ChildItem -Path .\export_check\ -Recurse -Filter "finetuning_readiness_report*"
if ($finetuneFiles.Count -gt 0) {
  Write-Error "안전선 #7 위반: finetuning_readiness_report* 발견"
  exit 1
}
```

### 4.4 통합 파일 존재 검사

```powershell
$forbiddenPatterns = @(
  "internal_*.json",
  "model_pipeline_report*",
  "finetuning_readiness_report*",
  "processing_internal_*.json"
)

foreach ($pattern in $forbiddenPatterns) {
  $found = Get-ChildItem -Path .\export_check\ -Recurse -Filter $pattern
  if ($found.Count -gt 0) {
    Write-Error "안전선 #7 위반: $pattern ($($found.Count)건)"
    exit 1
  }
}
```

---

## 5. 콘텐츠 검사

### 5.1 pii_intervals.original 키 미존재 (안전선 #3)

```powershell
# JSONL 파일 한 줄씩 파싱하여 .original 키 검사
Get-ChildItem -Path .\export_check\utterances\ -Filter "*.jsonl" | ForEach-Object {
  Get-Content $_.FullName | ForEach-Object {
    $obj = $_ | ConvertFrom-Json
    if ($obj.pii_labels) {
      foreach ($interval in $obj.pii_labels) {
        if ($interval.PSObject.Properties.Name -contains "original") {
          Write-Error "안전선 #3 위반: pii_labels[].original 발견 in $($_.Name)"
          exit 1
        }
      }
    }
  }
}
```

bash + jq 대안:

```bash
for f in export_check/utterances/*.jsonl; do
  count=$(jq -c '.pii_labels // [] | .[] | select(has("original"))' "$f" | wc -l)
  if [ "$count" -gt 0 ]; then
    echo "안전선 #3 위반: $count건 in $f"
    exit 1
  fi
done
```

### 5.2 numeric_patterns.surface_text/normalized 키 미존재 (안전선 #4, 🟡 074 후 유효)

```bash
for f in export_check/utterances/*.jsonl; do
  surface_count=$(jq -c '.numeric_patterns // [] | .[] | select(has("surface_text"))' "$f" | wc -l)
  norm_count=$(jq -c '.numeric_patterns // [] | .[] | select(has("normalized"))' "$f" | wc -l)
  if [ "$surface_count" -gt 0 ] || [ "$norm_count" -gt 0 ]; then
    echo "안전선 #4 위반: numeric_patterns 원문 키 발견 in $f"
    echo "  surface_text: $surface_count, normalized: $norm_count"
    exit 1
  fi
done
```

### 5.3 method 값 일반화 확인 (안전선 #6, #12)

```bash
# 허용된 method 값 외 검출
ALLOWED='^(automatic|supervised_model|rule_based_mvp|heuristic_mvp|not_available)$'

for f in export_check/utterances/*.jsonl export_check/labels/*.jsonl; do
  jq -r '.. | .method? // empty' "$f" | while read method; do
    if [[ ! "$method" =~ $ALLOWED ]]; then
      echo "안전선 #6 위반: 허용되지 않은 method 값 '$method' in $f"
      exit 1
    fi
  done
done
```

### 5.4 label_origin 값 검사 (안전선 #6)

```bash
ALLOWED_ORIGINS='^(user|automatic|admin_reviewed|supervised_model)$'

for f in export_check/utterances/*.jsonl; do
  jq -r '.label_origin // empty' "$f" | while read origin; do
    if [[ ! "$origin" =~ $ALLOWED_ORIGINS ]]; then
      echo "안전선 #6 위반: 허용되지 않은 label_origin '$origin' in $f"
      exit 1
    fi
  done
done
```

### 5.5 speaker_role 확정 단어 검사 (안전선 #1)

**노출 정책 변경 (외부 검토 반영)**: `speaker_role` 키 자체를 외부 ZIP 에 노출 금지. 외부에는 `identity_inference.predicted_role` (candidate 형) 만 노출.

#### 5.5.1 speaker_role 키 미존재 검사

```bash
# 외부 ZIP 에서 "speaker_role" 키 0건 (identity_inference 내부 키는 predicted_role)
hits=$(rg -F '"speaker_role"' export_check/ 2>/dev/null || true)
if [ -n "$hits" ]; then
  echo "안전선 #1 위반: speaker_role 확정 키 노출"
  echo "$hits"
  exit 1
fi
```

#### 5.5.2 predicted_role candidate 형 검사

`predicted_role` 값은 `owner_candidate` / `counterparty_candidate` / `unknown` 만 허용.

```bash
ALLOWED='^(owner_candidate|counterparty_candidate|unknown)$'
FORBIDDEN='^(owner|counterparty|self|other)$'

for f in export_check/**/*.json export_check/**/*.jsonl; do
  jq -r '.. | .predicted_role? // empty' "$f" 2>/dev/null | sort -u | while read role; do
    if [[ -z "$role" ]]; then continue; fi
    if [[ "$role" =~ $FORBIDDEN ]]; then
      echo "안전선 #1 위반: 확정 표현 '$role' in $f"
      exit 1
    fi
    if [[ ! "$role" =~ $ALLOWED ]]; then
      echo "안전선 #1 위반: 허용되지 않은 predicted_role '$role' in $f"
      exit 1
    fi
  done
done
```

#### 5.5.3 disclaimer 동반 검사

`predicted_role` 노출 시 `disclaimer` 필수 동반.

```bash
for f in export_check/**/*.json; do
  jq -e '.. | objects | select(has("predicted_role")) | select(has("disclaimer") | not)' "$f" 2>/dev/null
  if [ $? -eq 0 ]; then
    echo "안전선 #1 위반: predicted_role 노출 시 disclaimer 누락 in $f"
    exit 1
  fi
done
```

#### 5.5.4 speaker_relation 미노출 검사

`speaker_relation` 키 (부모/배우자/친구 등) 외부 ZIP 0건.

```bash
hits=$(rg -F '"speaker_relation"' export_check/ 2>/dev/null || true)
if [ -n "$hits" ]; then
  echo "안전선 #4 위반: speaker_relation 노출"
  exit 1
fi
```

### 5.6 toxicity 관련 필드 0건 (안전선 #2)

```bash
for f in export_check/**/*.json export_check/**/*.jsonl; do
  if grep -i 'toxicity' "$f" > /dev/null 2>&1; then
    echo "안전선 #2 위반: toxicity 관련 필드 발견 in $f"
    exit 1
  fi
done
```

### 5.7 export 부적격 세션 미포함 (안전선 #5 광의)

#### 5.7.1 manifest 통계 검증

```bash
# manifest.json 에 export_eligibility_summary 가 존재
jq -e '.export_eligibility_summary' export_check/manifest.json > /dev/null
if [ $? -ne 0 ]; then
  echo "안전선 #5 위반: manifest.export_eligibility_summary 누락"
  exit 1
fi

# excluded_session_count 의 sessions[] 가 manifest 에 포함되지 않았는지 사후 검증
included=$(jq -r '.sessions[].session_id' export_check/manifest.json | sort -u | wc -l)
eligible=$(jq -r '.export_eligibility_summary.eligible_session_count' export_check/manifest.json)
if [ "$included" != "$eligible" ]; then
  echo "안전선 #5 위반: included($included) != eligible($eligible)"
  exit 1
fi
```

#### 5.7.2 DB 사후 검증 (실측 스키마 기반)

`included` 세션이 실제 DB 에서 export 적격 상태인지 사후 확인:

```sql
-- 안전선 #5 사후 검증 (실측 스키마: sessions.consent_status + sessions.review_status)
SELECT session_id, consent_status, review_status
  FROM sessions
  WHERE id = ANY($1::text[])
    AND NOT (consent_status = 'both_agreed' AND review_status = 'approved');
-- 0 row 여야 통과
```

#### 5.7.3 consent_status 원문 미노출 검증

```bash
# 외부 ZIP 의 어떤 파일에도 consent_status 원문 키가 등장하지 않음
hits=$(rg -i '"consent_status"\s*:' export_check/ 2>/dev/null || true)
if [ -n "$hits" ]; then
  echo "안전선 #5 위반: consent_status 원문 키 노출"
  echo "$hits"
  exit 1
fi
```

#### 5.7.4 utterances.review_status='excluded' 발화 미포함

```bash
# excluded utterance 가 ZIP 에 포함되지 않은지 확인 (review_status 키가 외부에 노출되지 않으므로 DB 사후 검증)
for f in export_check/utterances/*.jsonl; do
  session_id=$(basename "$f" .jsonl | sed 's/utterances_//')
  utterance_ids=$(jq -r '.utterance_id' "$f" | sort -u)
  # DB 에서 excluded utterance 가 위 ID 안에 있으면 위반
  # (실제 구현은 export-builder가 SQL로 검증)
done
```

### 5.8 audio_export_mode 명시 (안전선 #8, #11)

```bash
for f in export_check/utterances/*.jsonl; do
  missing=$(jq -c 'select(.audio.audio_export_mode == null)' "$f" | wc -l)
  if [ "$missing" -gt 0 ]; then
    echo "안전선 #8 위반: audio_export_mode 누락 $missing건 in $f"
    exit 1
  fi
done
```

---

## 6. 통합 실행 예시

### 6.1 전체 검증 스크립트 (예시)

```powershell
# scripts/validate-export-zip.ps1

param (
  [Parameter(Mandatory=$true)]
  [string]$ZipPath
)

$workDir = New-TemporaryFile | ForEach-Object { Remove-Item $_; New-Item -ItemType Directory -Path $_.FullName + "_dir" }
$exitCode = 0

try {
  Expand-Archive -Path $ZipPath -DestinationPath $workDir.FullName -Force

  Write-Host "=== Safety Scan: $ZipPath ===" -ForegroundColor Cyan

  # §3 금지 키워드
  Write-Host "`n[§3] 금지 키워드 검사..."
  $hits = rg -i `
    '(aihub|kc[-_]?electra|snunlp|kr[-_]?electra|whisperx|pyannote|wespeaker|huggingface|HF_TOKEN|finetune|fine-tune|\btrain_)' `
    --type-add 'data:*.{json,jsonl,md,txt}' -t data `
    $workDir.FullName 2>&1
  if ($LASTEXITCODE -eq 0) {
    Write-Error "안전선 #6 위반: 금지 키워드 발견`n$hits"
    $exitCode = 1
  } else {
    Write-Host "  OK - 금지 키워드 0건" -ForegroundColor Green
  }

  # §4 파일 존재
  Write-Host "`n[§4] 금지 파일 패턴 검사..."
  $forbidden = @("internal_*.json", "model_pipeline_report*", "finetuning_readiness_report*", "processing_internal_*.json")
  foreach ($pattern in $forbidden) {
    $found = Get-ChildItem -Path $workDir.FullName -Recurse -Filter $pattern -ErrorAction SilentlyContinue
    if ($found.Count -gt 0) {
      Write-Error "안전선 #7 위반: $pattern ($($found.Count)건)"
      $exitCode = 1
    }
  }
  if ($exitCode -eq 0) { Write-Host "  OK - 금지 파일 0건" -ForegroundColor Green }

  # §5 콘텐츠 검사 (bash + jq 또는 PowerShell 구현)
  # ... (생략, 위 §5 각 항목 통합)

  if ($exitCode -eq 0) {
    Write-Host "`n=== Safety Scan: PASS ===" -ForegroundColor Green
  } else {
    Write-Host "`n=== Safety Scan: FAIL ===" -ForegroundColor Red
  }
}
finally {
  Remove-Item -Path $workDir.FullName -Recurse -Force -ErrorAction SilentlyContinue
}

exit $exitCode
```

### 6.2 CI 실행 (GitHub Actions / Render 빌드 등)

```yaml
# .github/workflows/export-safety.yml (예시)
name: Export Safety Scan
on:
  pull_request:
    paths:
      - 'uncounted-api/src/services/export-builder.ts'
      - 'docs/SPEC_EXPORT_V2.md'

jobs:
  safety-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: |
          # 샘플 ZIP 생성
          npm run build:sample-export
          # 검증
          bash scripts/validate-export-zip.sh sample_export.zip
```

---

## 7. CI 통합 (실패 시 빌드 중단)

### 7.1 export-builder.ts 내부 통합

```typescript
// uncounted-api/src/services/export-builder.ts (창 C 작업 예시)

async function buildSingleSessionZip(sessionId: string): Promise<string> {
  const storagePath = `exports/${sessionId}_${Date.now()}.zip`

  await streamZipToS3(storagePath, async (archive) => {
    // ... ZIP 콘텐츠 populate
  })

  // ZIP finalize 후 검증
  const validation = await validateExportZip(storagePath)
  if (!validation.passed) {
    await deleteS3Object(storagePath)
    throw new Error(`Safety scan failed: ${validation.violations.join(', ')}`)
  }

  return storagePath
}
```

### 7.2 실패 시 처리

- ZIP 즉시 삭제 (S3 + DB 레코드)
- export_jobs_v2.status = 'failed'
- error_message 에 안전선 번호 + 위반 키워드 기록
- 운영자 알림 (선택)

---

## 8. 정기 audit 절차

### 8.1 매월 1일 자동 실행

```powershell
# scripts/monthly-export-audit.ps1
$thirty_days_ago = (Get-Date).AddDays(-30).ToString("yyyy-MM-dd")
$packages = Invoke-RestMethod -Uri "https://api.uncounted.cloud/api/admin/delivery/packages?status=complete&since=$thirty_days_ago" `
  -Headers @{ Authorization = "Bearer $env:ADMIN_TOKEN" }

$failures = @()
foreach ($pkg in $packages.data.packages) {
  $downloadUrl = (Invoke-RestMethod -Uri "https://api.uncounted.cloud/api/admin/delivery/packages/$($pkg.id)/download" `
    -Headers @{ Authorization = "Bearer $env:ADMIN_TOKEN" }).data.download_url

  $localZip = "audit_$($pkg.package_number).zip"
  Invoke-WebRequest -Uri $downloadUrl -OutFile $localZip

  & .\scripts\validate-export-zip.ps1 -ZipPath $localZip
  if ($LASTEXITCODE -ne 0) {
    $failures += $pkg.package_number
  }
  Remove-Item $localZip
}

if ($failures.Count -gt 0) {
  # Slack / 이메일 알림
  Write-Host "정기 audit 위반: $($failures -join ', ')"
}
```

### 8.2 알림 채널

- 위반 발견 시: LeeGoGke 이메일/SMS (`gdash86@gmail.com`)
- 합격 시: 월간 리포트 생성 (Linear / Notion / 사내 채널)

---

## 9. 검증 결과 보고 형식

```json
{
  "zip_path": "exports/session_abc_1234567890.zip",
  "validated_at": "2026-05-18T10:30:00Z",
  "passed": true,
  "checks": [
    { "id": "§3.5", "name": "금지 키워드 통합", "result": "pass", "matches": 0 },
    { "id": "§4.4", "name": "금지 파일 존재", "result": "pass", "matches": 0 },
    { "id": "§5.1", "name": "pii_intervals.original", "result": "pass", "matches": 0 },
    { "id": "§5.2", "name": "numeric_patterns 원문", "result": "pass", "matches": 0 },
    { "id": "§5.3", "name": "method 값 일반화", "result": "pass", "matches": 0 },
    { "id": "§5.4", "name": "label_origin 일반화", "result": "pass", "matches": 0 },
    { "id": "§5.5", "name": "speaker_role 확정 단어", "result": "pass", "matches": 0 },
    { "id": "§5.6", "name": "toxicity 필드", "result": "pass", "matches": 0 },
    { "id": "§5.7", "name": "consent_status locked", "result": "pass", "matches": 0 },
    { "id": "§5.8", "name": "audio_export_mode", "result": "pass", "matches": 0 }
  ],
  "violations": []
}
```

---

## 변경 이력

| 버전 | 일자 | 변경 사항 |
|---|---|---|
| v1.0 | 2026-05-18 | 초안 (창 0). 검사 시점 5종 + 금지 키워드 4 카테고리 + 콘텐츠 검사 8종 + 정기 audit |

---

**문서 끝.** 스크립트 실제 구현은 [WORKSTREAM_DEPENDENCIES.md](WORKSTREAM_DEPENDENCIES.md) §3.3 창 C 작업.
