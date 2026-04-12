# Security Review Plan & A2. 파일 스캔 & 품질 분석
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Security Review Plan** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 11 connections
  - -> covers -> [[a2]]
  - -> includes -> [[mobile-app-security]]
  - -> includes -> [[audio-processing]]
  - -> employs -> [[stride-threat-modeling]]
  - -> generates -> [[review-tasks]]
  - -> necessitates -> [[dependency-analysis]]
  - -> requires -> [[team-composition-recommendation]]
  - -> details -> [[wave-execution-plan]]
  - -> outlines -> [[security-focus-areas]]
  - -> includes -> [[risk-assessment]]
  - -> assesses -> [[confidence-level]]
- **A2. 파일 스캔 & 품질 분석** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- covers <- [[security-review-plan]]
- **Audio Processing** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- includes <- [[security-review-plan]]
- **Confidence Level** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- assesses <- [[security-review-plan]]
- **Dependency Analysis** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- necessitates <- [[security-review-plan]]
- **Mobile App Security** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- includes <- [[security-review-plan]]
- **Review Tasks** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- generates <- [[security-review-plan]]
- **Risk Assessment** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- includes <- [[security-review-plan]]
- **Security Focus Areas** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- outlines <- [[security-review-plan]]
- **STRIDE Threat Modeling** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- employs <- [[security-review-plan]]
- **Team Composition Recommendation** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- requires <- [[security-review-plan]]
- **Wave Execution Plan** (/Users/gdash/project/uncounted-project/prompt_plan.md) -- 1 connections
  - <- details <- [[security-review-plan]]

## Internal Relationships
- Security Review Plan -> covers -> A2. 파일 스캔 & 품질 분석 [EXTRACTED]
- Security Review Plan -> includes -> Mobile App Security [INFERRED]
- Security Review Plan -> includes -> Audio Processing [INFERRED]
- Security Review Plan -> employs -> STRIDE Threat Modeling [EXTRACTED]
- Security Review Plan -> generates -> Review Tasks [EXTRACTED]
- Security Review Plan -> necessitates -> Dependency Analysis [INFERRED]
- Security Review Plan -> requires -> Team Composition Recommendation [EXTRACTED]
- Security Review Plan -> details -> Wave Execution Plan [EXTRACTED]
- Security Review Plan -> outlines -> Security Focus Areas [INFERRED]
- Security Review Plan -> includes -> Risk Assessment [EXTRACTED]
- Security Review Plan -> assesses -> Confidence Level [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Security Review Plan, A2. 파일 스캔 & 품질 분석, Audio Processing를 중심으로 includes 관계로 연결되어 있다. 주요 소스 파일은 prompt_plan.md이다.
