# audio scanning platform & HIGH-priority bugfix plan
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **audio scanning platform** (N/A) -- 4 connections
  - -> related_to -> [[android]]
  - -> related_to -> [[typescript]]
  - -> related_to -> [[api]]
  - <- references <- [[high-priority-bugfix-plan]]
- **HIGH-priority bugfix plan** (.orchestrate-consult/20260330-182051/prompt_plan.md) -- 2 connections
  - -> references -> [[audio-scanning-platform]]
  - -> references -> [[15-securityquality-issues]]
- **15 security/quality issues** (N/A) -- 1 connections
  - <- references <- [[high-priority-bugfix-plan]]
- **Android** (N/A) -- 1 connections
  - <- related_to <- [[audio-scanning-platform]]
- **API** (N/A) -- 1 connections
  - <- related_to <- [[audio-scanning-platform]]
- **TypeScript** (N/A) -- 1 connections
  - <- related_to <- [[audio-scanning-platform]]

## Internal Relationships
- audio scanning platform -> related_to -> Android [INFERRED]
- audio scanning platform -> related_to -> TypeScript [INFERRED]
- audio scanning platform -> related_to -> API [INFERRED]
- HIGH-priority bugfix plan -> references -> audio scanning platform [EXTRACTED]
- HIGH-priority bugfix plan -> references -> 15 security/quality issues [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 audio scanning platform, HIGH-priority bugfix plan, 15 security/quality issues를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 A, prompt_plan.md이다.
