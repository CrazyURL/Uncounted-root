# Supabase 테이블 & 2. DB 스키마 정의서 (v1.6)
Cohesion: 0.10 | Nodes: 20

## Key Nodes
- **Supabase 테이블** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 16 connections
  - -> contains -> [[1-sessions]]
  - -> contains -> [[2-usersprofile]]
  - -> contains -> [[3-billableunits]]
  - -> contains -> [[4-clients]]
  - -> contains -> [[5-deliveryprofiles]]
  - -> contains -> [[6-clientskurules-sku]]
  - -> contains -> [[7-skupresets-sku]]
  - -> contains -> [[8-exportjobs]]
  - -> contains -> [[9-userassetledger]]
  - -> contains -> [[10-deliveryrecords-per-client]]
  - -> contains -> [[11-sessionchunks-wav]]
  - -> contains -> [[12-transcriptchunks-stt]]
  - -> contains -> [[13-transcripts-stt]]
  - -> contains -> [[14-errorlogs]]
  - -> contains -> [[15-funnelevents]]
  - <- contains <- [[2-db-v16]]
- **2. DB 스키마 정의서 (v1.6)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 3 connections
  - -> contains -> [[supabase]]
  - -> contains -> [[migration]]
  - -> contains -> [[er]]
- **1. sessions (핵심 세션 테이블)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 2 connections
  - -> has_code_example -> [[json]]
  - <- contains <- [[supabase]]
- **json** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- has_code_example <- [[1-sessions]]
- **10. delivery_records (Per-client 납품 이력)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **11. session_chunks (WAV 물리 청크 업로드 이력)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **12. transcript_chunks (청크별 STT 텍스트 + 오디오 통계)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **13. transcripts (STT 텍스트 테이블)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **14. error_logs (에러 로그)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **15. funnel_events (퍼널 이벤트)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **2. users_profile (사용자 프로필 + 동의 관리)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **3. billable_units (빌링 유닛 테이블)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **4. clients (납품처 테이블)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **5. delivery_profiles (납품 프로필 테이블)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **6. client_sku_rules (납품처별 SKU 규칙)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **7. sku_presets (SKU 프리셋 테이블)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **8. export_jobs (내보내기 작업 테이블)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **9. user_asset_ledger (정산 원장)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[supabase]]
- **ER 다이어그램 (관계도)** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[2-db-v16]]
- **Migration 히스토리** (uncounted-docs/백앤드/schema/DB스키마_v1.6.md) -- 1 connections
  - <- contains <- [[2-db-v16]]

## Internal Relationships
- 1. sessions (핵심 세션 테이블) -> has_code_example -> json [EXTRACTED]
- 2. DB 스키마 정의서 (v1.6) -> contains -> Supabase 테이블 [EXTRACTED]
- 2. DB 스키마 정의서 (v1.6) -> contains -> Migration 히스토리 [EXTRACTED]
- 2. DB 스키마 정의서 (v1.6) -> contains -> ER 다이어그램 (관계도) [EXTRACTED]
- Supabase 테이블 -> contains -> 1. sessions (핵심 세션 테이블) [EXTRACTED]
- Supabase 테이블 -> contains -> 2. users_profile (사용자 프로필 + 동의 관리) [EXTRACTED]
- Supabase 테이블 -> contains -> 3. billable_units (빌링 유닛 테이블) [EXTRACTED]
- Supabase 테이블 -> contains -> 4. clients (납품처 테이블) [EXTRACTED]
- Supabase 테이블 -> contains -> 5. delivery_profiles (납품 프로필 테이블) [EXTRACTED]
- Supabase 테이블 -> contains -> 6. client_sku_rules (납품처별 SKU 규칙) [EXTRACTED]
- Supabase 테이블 -> contains -> 7. sku_presets (SKU 프리셋 테이블) [EXTRACTED]
- Supabase 테이블 -> contains -> 8. export_jobs (내보내기 작업 테이블) [EXTRACTED]
- Supabase 테이블 -> contains -> 9. user_asset_ledger (정산 원장) [EXTRACTED]
- Supabase 테이블 -> contains -> 10. delivery_records (Per-client 납품 이력) [EXTRACTED]
- Supabase 테이블 -> contains -> 11. session_chunks (WAV 물리 청크 업로드 이력) [EXTRACTED]
- Supabase 테이블 -> contains -> 12. transcript_chunks (청크별 STT 텍스트 + 오디오 통계) [EXTRACTED]
- Supabase 테이블 -> contains -> 13. transcripts (STT 텍스트 테이블) [EXTRACTED]
- Supabase 테이블 -> contains -> 14. error_logs (에러 로그) [EXTRACTED]
- Supabase 테이블 -> contains -> 15. funnel_events (퍼널 이벤트) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Supabase 테이블, 2. DB 스키마 정의서 (v1.6), 1. sessions (핵심 세션 테이블)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 DB스키마_v1.6.md이다.
