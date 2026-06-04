# 📒 작업 위키 허브 — scripts/analysis/ (창 간 공유)

> **모든 창(GPU/API/ADMIN/voice-api) 공용.** 새 작업 시작 전 이 INDEX + CLAUDE.md `## Critical operational facts` 를 먼저 확인하라 — 다른 창이 이미 한 일을 중복(뻘짓)하지 않기 위함.
> 새 설계·진단·상태 문서를 만들면 **여기 한 줄 등록**. read-only 조사·설계는 자유, 코드/DB/배포는 각자 승인 게이트 유지.
> 갱신: QA 모니터 tick 시 자동 점검(신규 .md 있으면 등록). 최종 갱신 2026-05-24.

## 상태 범례
✅ 완료·해소 · 🔄 롤링(계속 갱신) · 📐 설계확정(구현 대기) · ⚠️ stale(대체됨)

## 문서 목록

| 문서 | 내용 | 상태 | 트랙/후속 |
|------|------|------|-----------|
| [delivery_status_latest_20260523.md](delivery_status_latest_20260523.md) | **납품 가능 여부 종합 상태**(export/품질/PII/라벨/STT) | 🔄 허브 | 납품 게이트 추적 |
| [qa_monitor_baseline.md](qa_monitor_baseline.md) | QA 모니터 베이스라인·추적신호·회귀기준 | 🔄 (QA tick 갱신) | GPU/API/ADMIN 회귀 감시 |
| [model_inference_wiring_audit_20260523.md](model_inference_wiring_audit_20260523.md) | 자동라벨 모델 추론 배선 감사 + dialog_act 100% 기타 근본원인(데이터 라벨 부재) | ✅ 진단완료 | emotion 분리 재학습 |
| [export_autolabels_mapping_bug_20260523.md](export_autolabels_mapping_bug_20260523.md) | export-builder 가 flat 대신 labels JSONB 읽어 auto_labels null | ✅ 해소(PR #28) | — |
| [pii_track0_live_verify_20260524.md](pii_track0_live_verify_20260524.md) | PII Track0 denylist 마스킹 live 검증 (25/5000, 2세션 2·3) | ✅ RESOLVED | denylist 미등재 surface-form 잔여 |
| [design_pii_name_pipeline_20260524.md](design_pii_name_pipeline_20260524.md) | PII 이름 후보 자동탐지+승인 루프 갭분석·로드맵(PII-1A 가동~1B/3/4) | 📐 설계 | PII-1A 가동·1B 구현 |
| [design_pii_annotation_learning_loop_20260524.md](design_pii_annotation_learning_loop_20260524.md) | candidate(탐지큐) vs annotation(확정라벨) 분리 + 수동 span 등록 + 검수→학습 export 루프. name 파이프라인 일반화 | 📐 설계 | PR-P2A부터 (PR-N과 매핑) |
| [design_pii_queue_stoprule_cleanup_20260524.md](design_pii_queue_stoprule_cleanup_20260524.md) | PR#36 stop rule 후 기존 pending 305 중 drop 70만 정리(soft reject) | ✅ 실행완료 | 305→235, stoprule-v1 마커 70 |
| [design_structured_pii_auto_confirm_policy_20260524.md](design_structured_pii_auto_confirm_policy_20260524.md) | 트랙2: 구조PII IP/전화/계좌 정규식 오탐 + auto_confirmed 정책. PR-S1(mask_pii dedup) live·PR-S2A(tier) 머지·미배포 | 🔄 진행중 | S2B/S2C 통과 후 S2A 배포 |
| [s2bc_structured_pii_api_admin_readiness_20260525.md](s2bc_structured_pii_api_admin_readiness_20260525.md) | S2B/S2C 갭분석: api는 구조PII 수용 준비됨(무변경), admin UI는 "이름 맞음"/토스트 2곳 하드코딩 → 소PR 필요. S2A 배포 선결 | ✅ 분석완료 | PR-S2C(admin 문구) 후 S2A 배포 |
| [design_quality_review_queue_20260523.md](design_quality_review_queue_20260523.md) | 저품질(C) 필터 → 납품 품질 검수 큐 | 📐 설계확정 | PR1→PR2/PR3 |
| [design_human_emotion_label_loop_20260524.md](design_human_emotion_label_loop_20260524.md) | 사람 emotion 라벨 수집 루프(2단 체계·예외검수큐) | 🔄 구현중 | **H1a 머지(api#41) · H1b=dev N/A · H2a-api 머지(api#42) · H2a-admin 머지/클릭스루(admin#29 `d307953`) · H2b-api 머지/배포/live검증 완료(api#44 `8974840`, 10/10 PASS, `h2b_api_live_contract_verify.mjs`) · H2b-admin 머지/배포/배포본검증 완료(admin#30 squash `5ddda5e`, dev deploy `dep-d8a7d8ugvqtc73cjrjqg`, 배포본 클릭스루 13/13 PASS `h2b_admin_browser_clickthrough.mjs` — 번들 `index-Db8twFcE.js` = 로컬빌드 해시 일치, 부정 nudge 문구 번들 포함; 배지 server-init→새로고침 유지, emotion 불변)** — human_pending 큐는 H2b-queue 로 분리 → **다음: H2b-queue(human_pending 기본필터) → H2c(PATCH 차단) → H5(training 카드)** |
| [h1b_admin_confirmed_backfill_dryrun_20260525.md](h1b_admin_confirmed_backfill_dryrun_20260525.md) | PR-H1b 역마이그 read-only dry-run + write 스크립트 초안. 재현: `h1b_admin_confirmed_backfill_dryrun.mjs`(SELECT-only) | ✅ dev N/A(대상 0) | prod 대상 있으면 별도 dry-run·승인 |
| [admin_pii_review_operation_guide_20260525.md](admin_pii_review_operation_guide_20260525.md) | **PII 후보 검수 운영 안내문(관리자용)** — /admin/calls 판정 기준·게이트·주의. P2E 후 병목=positive 50건(사람 검수). AI 대리 클릭 금지(reviewed_by=사람 provenance) | 🔄 운영 | positive 10→Gate2, 50→Gate3 |
| [b60_quality_backfill_dryrun_20260525.md](b60_quality_backfill_dryrun_20260525.md) | **B-60 품질값 backfill — Phase 1 APPLY 완료(dev)** — 납품후보 손상 utterance **357건/3세션** 재측정. snr `0→16~21dB`, grade B(357) → **A65/B279/C13**. 스냅샷 `scratch/b60_backup_20260525.json`, writer `backfill_b60_quality.py`, 롤백 `rollback_b60_quality.py`. snr=0 잔여 0 검증 | ✅ dev 적용·검증 완료 | prod·신규세션 운영검증은 별도. Phase 2(전체 23,148건) 별도 승인 |
| [h2a_admin_contract_probe.mjs](h2a_admin_contract_probe.mjs) · [h2a_admin_ui_payload_verify.mjs](h2a_admin_ui_payload_verify.mjs) · [h2a_admin_browser_clickthrough.mjs](h2a_admin_browser_clickthrough.mjs) | **PR-H2a-admin 검수 스크립트** — (1) 계약 probe (2) 버튼 payload live (3) **배포본 실브라우저 클릭스루**(Playwright, localStorage 토큰 주입으로 OAuth 우회). 성공 **200** `{success,data}`, resolved⇒fine+cat 필수(400), source=manual 서버강제. emotion 불변·stats resolvedManual Δ+1·console error 0·테스트행 cleanup | ✅ **머지·배포·클릭스루 검증 완료** | admin#29 squash `d307953`, dev deploy `dep-d8a502e7r5hc73e3c0v0` live |
| [delivery_readiness_20260523.md](delivery_readiness_20260523.md) | 초기 단건 납품 리포트(b70edeb) | ⚠️ stale | delivery_status_latest 가 대체. "납품 가능"/auto_labels null 표현은 구버전(매핑버그·B-60 미반영) |

## 교차 참조
- CLAUDE.md `## Critical operational facts §1~15` — 운영 사실·함정(모든 창 자동 로드).
- 메모리: `[[project-model-inference-wiring]]`, `[[project-pii-candidate-pipeline]]`, `[[project-data-asset-reality]]`, `[[project-export-v2-verification-state]]`.
- graphify `graphify-out/wiki/` = **코드 구조 그래프(Apr 18 stale)** — 코드 탐색용. 발견/결정 기록은 본 INDEX 사용.

## 현재 열린 트랙 (요약)
- 🟡 B-60 신규세션 운영검증 1건 (기존 backfill **Phase 1 357건/3세션 dev 적용 완료 2026-05-25**; Phase 2 전체 23,148건 별도 승인)
- 🔴 PII denylist 미등재 surface-form 수동 후보 처리
- ✅ emotion 정식 emotion-only 재학습 — **`v20260524_095713`(1.87M, f1 0.5254) promoted(05-25 12:21)**. 토이런 종료, dialog_act 붕괴 구조적 불가. (품질 개선은 human-label 루프 PR-H로)
- 🟡 speech_age 로더버그 수정 / speech_act shadow 배선 / 오염 2,999건 재라벨
