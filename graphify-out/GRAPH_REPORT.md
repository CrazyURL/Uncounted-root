# Graph Report - ./uncounted-docs  (2026-04-15)

## Corpus Check
- 44 files · ~75,420 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 113 nodes · 130 edges · 25 communities detected
- Extraction: 77% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.77)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Data & SKU Pipeline|Data & SKU Pipeline]]
- [[_COMMUNITY_App UI & Design System|App UI & Design System]]
- [[_COMMUNITY_DOCX Generator (Standard)|DOCX Generator (Standard)]]
- [[_COMMUNITY_DOCX Generator (G-Star)|DOCX Generator (G-Star)]]
- [[_COMMUNITY_Core Architecture|Core Architecture]]
- [[_COMMUNITY_Speaker Diarization & Audio ML|Speaker Diarization & Audio ML]]
- [[_COMMUNITY_SKU Card Components|SKU Card Components]]
- [[_COMMUNITY_Consent & Privacy System|Consent & Privacy System]]
- [[_COMMUNITY_Admin & Export Pipeline|Admin & Export Pipeline]]
- [[_COMMUNITY_Accessibility & Motion Design|Accessibility & Motion Design]]
- [[_COMMUNITY_STT & Upload Concurrency Bugs|STT & Upload Concurrency Bugs]]
- [[_COMMUNITY_Storage & Network Restart Bugs|Storage & Network Restart Bugs]]
- [[_COMMUNITY_Auth Token Security|Auth Token Security]]
- [[_COMMUNITY_OAuth & Rate Limiting|OAuth & Rate Limiting]]
- [[_COMMUNITY_Admin Role & RLS Bugs|Admin Role & RLS Bugs]]
- [[_COMMUNITY_SKU Export Blockers|SKU Export Blockers]]
- [[_COMMUNITY_SKU Export API Bugs|SKU Export API Bugs]]
- [[_COMMUNITY_HTTP & Type Errors|HTTP & Type Errors]]
- [[_COMMUNITY_File Read & Overflow Bugs|File Read & Overflow Bugs]]
- [[_COMMUNITY_Audio Memory Bugs|Audio Memory Bugs]]
- [[_COMMUNITY_Scan Status Mismatch|Scan Status Mismatch]]
- [[_COMMUNITY_Status Validation Bug|Status Validation Bug]]
- [[_COMMUNITY_Mock Data Bug|Mock Data Bug]]
- [[_COMMUNITY_Code Limit Bug|Code Limit Bug]]
- [[_COMMUNITY_Lock Issue Bug|Lock Issue Bug]]

## God Nodes (most connected - your core abstractions)
1. `Data Spec v2 - Core Constraints` - 11 edges
2. `create_document()` - 9 edges
3. `create_document()` - 8 edges
4. `Hono REST API Backend` - 7 edges
5. `set_font()` - 6 edges
6. `set_font()` - 6 edges
7. `Scan → Upload Pipeline (Phase 1-4)` - 6 edges
8. `Information Reduction Principle (1 Action Per Screen)` - 6 edges
9. `header_cell()` - 5 edges
10. `BottomNav - 4 Tab Navigation` - 5 edges

## Surprising Connections (you probably didn't know these)
- `User Consent & Voice Profile API` --implements--> `Data Spec v2 - Core Constraints`  [EXTRACTED]
  uncounted-docs/백앤드/BACKEND_API.md → uncounted-docs/백앤드/data-spec-v2.md
- `Real-World Conversational Speech Data Offering` --semantically_similar_to--> `SKU U-A02 - Voice + Context Labels`  [INFERRED] [semantically similar]
  uncounted-docs/미팅기술 자료/typecast/typecast-proposal.md → uncounted-docs/백앤드/data-spec-v2.md
- `Conversational AI with Dialog Act Labels` --semantically_similar_to--> `SKU U-A03 - Voice + Dialog Act Labels`  [INFERRED] [semantically similar]
  uncounted-docs/미팅기술 자료/typecast/typecast-proposal.md → uncounted-docs/백앤드/data-spec-v2.md
- `Label Trust Score Calculation (Anti Click-Farming)` --semantically_similar_to--> `Quality, Trust & Value Aggregation`  [INFERRED] [semantically similar]
  uncounted-docs/미팅기술 자료/typecast/typecast-proposal.md → uncounted-docs/백앤드/sku-data-engine-spec.md
- `Sessions API Endpoints` --shares_data_with--> `SessionDetailPage - Audio + Key Info + Details`  [INFERRED]
  uncounted-docs/백앤드/BACKEND_API.md → uncounted-docs/ux-design-update/07-component-spec.md

## Hyperedges (group relationships)
- **SKU Data Collection Pipeline - All Tiers** — sku_u_a01_voice_raw, sku_u_a02_voice_context, sku_u_a03_dialog_act, audio_scan_pipeline, quality_trust_value_engines [EXTRACTED 1.00]
- **Security & Privacy Enforcement** — aes256_encryption, auth_flow_pkce, pii_masking_enforcement, user_consent_api [EXTRACTED 1.00]
- **Admin Export & Settlement Workflow** — admin_api, billable_units_management, export_requests_workflow, utterance_review_filter_feature [EXTRACTED 0.95]
- **Consent System Flow** —  [1.0]
- **Audio Processing Architecture** —  [1.0]
- **SKU Export Pipeline** —  [1.0]

## Communities

### Community 0 - "Data & SKU Pipeline"
Cohesion: 0.12
Nodes (18): Conversational AI with Dialog Act Labels, Data Spec v2 - Core Constraints, Device Bucket Classification (Wifi/Mobile/Charging), Emotion Synthesis MOS Improvement Scenario, Pseudo ID Generation & Management, Quality, Trust & Value Aggregation, RATIONALE: GPU Inference Ban (Medical Device Risk), RATIONALE: No GPS/WiFi/CellID (PIPA Article 15) (+10 more)

### Community 1 - "App UI & Design System"
Cohesion: 0.19
Nodes (14): AssetsPage - Contact Search + Groups, BottomNav - 4 Tab Navigation, Color Tokens (Light + Dark Mode), Design System - Flat Minimal, HomePage - Status + Next Action + Summary, Information Reduction Principle (1 Action Per Screen), Motion Animation Constraints (Flat, No Loops), ProfilePage - Profile Card + Settings (+6 more)

### Community 2 - "DOCX Generator (Standard)"
Cohesion: 0.36
Nodes (11): add_bullet(), add_dash(), add_p(), add_section_heading(), add_sub_heading(), cell_text(), create_document(), G스타 오디션 예비·초기리그 참가신청서 + 사업계획서 DOCX 생성 양식1 기반: 참가신청서(1p) + 사업계획서(10p 이내) + 기타현황(1 (+3 more)

### Community 3 - "DOCX Generator (G-Star)"
Cohesion: 0.45
Nodes (10): add_heading(), add_p(), content_cell(), create_document(), header_cell(), make_overview_table(), 데이터바우처 사업수행계획서 DOCX 생성 — 극대화 버전 마크다운 원본(데이터바우처_사업수행계획서_초안.md)을 기반으로 서식 1호 양식에 맞춘, read_md() (+2 more)

### Community 4 - "Core Architecture"
Cohesion: 0.24
Nodes (11): AES-256-GCM Encryption System, App Bootstrap Component Sequence, Audio Scan Pipeline with VAD, PKCE OAuth 2.0 Authentication, Hono REST API Backend, Metadata Events NDJSON Batch Upload, PII Masking & Audio Sanitization, Scan → Upload Pipeline (Phase 1-4) (+3 more)

### Community 5 - "Speaker Diarization & Audio ML"
Cohesion: 0.4
Nodes (6): Audio Pipeline Unification, Diarization Improvement Options, MFCC Speaker Similarity, Pyannote Speaker Diarization Accuracy, Voice Enrollment Level 2, WhisperX large-v3-turbo Transition

### Community 6 - "SKU Card Components"
Cohesion: 0.4
Nodes (5): 3-Space Information Architecture, ReadinessSKUCard, RefineryReportCard, ValueRangeCard, VaultCard

### Community 7 - "Consent & Privacy System"
Cohesion: 0.4
Nodes (5): PrivacyControlCenterPage, Batch Apply Consent, Consent Edge Cases, GlobalConsent State Machine, Consent Test Cases

### Community 8 - "Admin & Export Pipeline"
Cohesion: 0.67
Nodes (4): Admin API Endpoints, Billable Units Locking & Settlement, Export Requests Delivery Pipeline, Utterance Review Filter Toggle

### Community 9 - "Accessibility & Motion Design"
Cohesion: 1.0
Nodes (2): WCAG 2.1 AA + Neurodiversity Design, Motion Design Rules

### Community 10 - "STT & Upload Concurrency Bugs"
Cohesion: 1.0
Nodes (2): STT Worker Memory Leak, UploadQueue Concurrency Race Condition

### Community 11 - "Storage & Network Restart Bugs"
Cohesion: 1.0
Nodes (2): StorageInitializer Race Condition, STT Network Restart Missing

### Community 12 - "Auth Token Security"
Cohesion: 1.0
Nodes (2): Access Token Plaintext localStorage (FIXED), Encryption Key localStorage Vulnerability

### Community 13 - "OAuth & Rate Limiting"
Cohesion: 1.0
Nodes (2): OAuth Redirect Unvalidated, Rate Limiting Missing

### Community 14 - "Admin Role & RLS Bugs"
Cohesion: 1.0
Nodes (2): Admin Role Validation Missing (FIXED), RLS Policy Too Permissive (FIXED)

### Community 15 - "SKU Export Blockers"
Cohesion: 1.0
Nodes (2): S3 Chunk Merge Not Implemented, Transcript Coverage Low

### Community 16 - "SKU Export API Bugs"
Cohesion: 1.0
Nodes (2): ESM require Error (FIXED), SKU Inventory API 404 (FIXED)

### Community 17 - "HTTP & Type Errors"
Cohesion: 1.0
Nodes (2): HTTP Method Mismatch (FIXED), inventory.map TypeError (FIXED)

### Community 18 - "File Read & Overflow Bugs"
Cohesion: 1.0
Nodes (2): readFile stat() Pre-Check Missing, upsertBillableUnits Stack Overflow (FIXED)

### Community 19 - "Audio Memory Bugs"
Cohesion: 1.0
Nodes (2): Audio Cleanup Memory Leak (FIXED), Base64 Conversion OOM

### Community 20 - "Scan Status Mismatch"
Cohesion: 1.0
Nodes (1): Scan Status Document-Code Mismatch

### Community 21 - "Status Validation Bug"
Cohesion: 1.0
Nodes (1): Status Validation Error (FIXED)

### Community 22 - "Mock Data Bug"
Cohesion: 1.0
Nodes (1): Mock Data Silent Fallback (FIXED)

### Community 23 - "Code Limit Bug"
Cohesion: 1.0
Nodes (1): admin-exports.ts 800-Line Limit (FIXED)

### Community 24 - "Lock Issue Bug"
Cohesion: 1.0
Nodes (1): handleExecute Double-Lock Issue (FIXED)

## Knowledge Gaps
- **21 isolated node(s):** `데이터바우처 사업수행계획서 DOCX 생성 — 극대화 버전 마크다운 원본(데이터바우처_사업수행계획서_초안.md)을 기반으로 서식 1호 양식에 맞춘`, `G스타 오디션 예비·초기리그 참가신청서 + 사업계획서 DOCX 생성 양식1 기반: 참가신청서(1p) + 사업계획서(10p 이내) + 기타현황(1`, `사업계획서 섹션 제목 (회색 배경 라운드 느낌)`, `PKCE OAuth 2.0 Authentication`, `Pseudo ID Generation & Management` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Accessibility & Motion Design`** (2 nodes): `WCAG 2.1 AA + Neurodiversity Design`, `Motion Design Rules`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `STT & Upload Concurrency Bugs`** (2 nodes): `STT Worker Memory Leak`, `UploadQueue Concurrency Race Condition`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Storage & Network Restart Bugs`** (2 nodes): `StorageInitializer Race Condition`, `STT Network Restart Missing`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Auth Token Security`** (2 nodes): `Access Token Plaintext localStorage (FIXED)`, `Encryption Key localStorage Vulnerability`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `OAuth & Rate Limiting`** (2 nodes): `OAuth Redirect Unvalidated`, `Rate Limiting Missing`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Admin Role & RLS Bugs`** (2 nodes): `Admin Role Validation Missing (FIXED)`, `RLS Policy Too Permissive (FIXED)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `SKU Export Blockers`** (2 nodes): `S3 Chunk Merge Not Implemented`, `Transcript Coverage Low`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `SKU Export API Bugs`** (2 nodes): `ESM require Error (FIXED)`, `SKU Inventory API 404 (FIXED)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `HTTP & Type Errors`** (2 nodes): `HTTP Method Mismatch (FIXED)`, `inventory.map TypeError (FIXED)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `File Read & Overflow Bugs`** (2 nodes): `readFile stat() Pre-Check Missing`, `upsertBillableUnits Stack Overflow (FIXED)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Audio Memory Bugs`** (2 nodes): `Audio Cleanup Memory Leak (FIXED)`, `Base64 Conversion OOM`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scan Status Mismatch`** (1 nodes): `Scan Status Document-Code Mismatch`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Status Validation Bug`** (1 nodes): `Status Validation Error (FIXED)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Mock Data Bug`** (1 nodes): `Mock Data Silent Fallback (FIXED)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Code Limit Bug`** (1 nodes): `admin-exports.ts 800-Line Limit (FIXED)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Lock Issue Bug`** (1 nodes): `handleExecute Double-Lock Issue (FIXED)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Hono REST API Backend` connect `Core Architecture` to `Admin & Export Pipeline`, `App UI & Design System`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Why does `Data Spec v2 - Core Constraints` connect `Data & SKU Pipeline` to `Core Architecture`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `User Consent & Voice Profile API` connect `Core Architecture` to `Data & SKU Pipeline`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **What connects `데이터바우처 사업수행계획서 DOCX 생성 — 극대화 버전 마크다운 원본(데이터바우처_사업수행계획서_초안.md)을 기반으로 서식 1호 양식에 맞춘`, `G스타 오디션 예비·초기리그 참가신청서 + 사업계획서 DOCX 생성 양식1 기반: 참가신청서(1p) + 사업계획서(10p 이내) + 기타현황(1`, `사업계획서 섹션 제목 (회색 배경 라운드 느낌)` to the rest of the system?**
  _21 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Data & SKU Pipeline` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._