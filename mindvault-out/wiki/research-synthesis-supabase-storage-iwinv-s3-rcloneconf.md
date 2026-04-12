# Research Synthesis: Supabase Storage → iwinv S3 마이그레이션 & rclone.conf 권장 구성
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **Research Synthesis: Supabase Storage → iwinv S3 마이그레이션** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 6 connections
  - -> contains -> [[agreement]]
  - -> contains -> [[disagreement]]
  - -> contains -> [[unique-insights]]
  - -> contains -> [[gaps]]
  - -> contains -> [[recommendation]]
  - -> contains -> [[sources]]
- **rclone.conf 권장 구성** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 3 connections
  - -> has_code_example -> [[ini]]
  - -> has_code_example -> [[bash]]
  - <- contains <- [[recommendation]]
- **통합 권장사항 (Recommendation)** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 3 connections
  - -> contains -> [[8]]
  - -> contains -> [[rcloneconf]]
  - <- contains <- [[research-synthesis-supabase-storage-iwinv-s3]]
- **고유 인사이트 (Unique Insights)** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 3 connections
  - -> contains -> [[gemini]]
  - -> contains -> [[codex]]
  - <- contains <- [[research-synthesis-supabase-storage-iwinv-s3]]
- **bash** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- has_code_example <- [[rcloneconf]]
- **ini** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- has_code_example <- [[rcloneconf]]
- **실행계획 (8단계)** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- contains <- [[recommendation]]
- **일치점 (Agreement)** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- contains <- [[research-synthesis-supabase-storage-iwinv-s3]]
- **Codex만 발견한 내용** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- contains <- [[unique-insights]]
- **불일치점 (Disagreement)** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- contains <- [[research-synthesis-supabase-storage-iwinv-s3]]
- **갭 (Gaps)** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- contains <- [[research-synthesis-supabase-storage-iwinv-s3]]
- **Gemini만 발견한 내용** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- contains <- [[unique-insights]]
- **소스 (Sources)** (uncounted-api/.research/20260322-183741-기존-supabase-storage에-있는-데이터를-iwinv-s3-스토/synthesis.md) -- 1 connections
  - <- contains <- [[research-synthesis-supabase-storage-iwinv-s3]]

## Internal Relationships
- rclone.conf 권장 구성 -> has_code_example -> ini [EXTRACTED]
- rclone.conf 권장 구성 -> has_code_example -> bash [EXTRACTED]
- 통합 권장사항 (Recommendation) -> contains -> 실행계획 (8단계) [EXTRACTED]
- 통합 권장사항 (Recommendation) -> contains -> rclone.conf 권장 구성 [EXTRACTED]
- Research Synthesis: Supabase Storage → iwinv S3 마이그레이션 -> contains -> 일치점 (Agreement) [EXTRACTED]
- Research Synthesis: Supabase Storage → iwinv S3 마이그레이션 -> contains -> 불일치점 (Disagreement) [EXTRACTED]
- Research Synthesis: Supabase Storage → iwinv S3 마이그레이션 -> contains -> 고유 인사이트 (Unique Insights) [EXTRACTED]
- Research Synthesis: Supabase Storage → iwinv S3 마이그레이션 -> contains -> 갭 (Gaps) [EXTRACTED]
- Research Synthesis: Supabase Storage → iwinv S3 마이그레이션 -> contains -> 통합 권장사항 (Recommendation) [EXTRACTED]
- Research Synthesis: Supabase Storage → iwinv S3 마이그레이션 -> contains -> 소스 (Sources) [EXTRACTED]
- 고유 인사이트 (Unique Insights) -> contains -> Gemini만 발견한 내용 [EXTRACTED]
- 고유 인사이트 (Unique Insights) -> contains -> Codex만 발견한 내용 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Research Synthesis: Supabase Storage → iwinv S3 마이그레이션, rclone.conf 권장 구성, 통합 권장사항 (Recommendation)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 synthesis.md이다.
