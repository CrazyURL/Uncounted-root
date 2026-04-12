# Code Review & Review Workflow
Cohesion: 0.10 | Nodes: 21

## Key Nodes
- **Code Review** (path) -- 10 connections
  - -> related_to -> [[quality]]
  - -> related_to -> [[security]]
  - -> related_to -> [[maintainability]]
  - -> related_to -> [[pull-requests]]
  - -> references -> [[review-checklist]]
  - -> references -> [[agent-usage]]
  - -> references -> [[review-workflow]]
  - -> references -> [[common-issues]]
  - -> references -> [[approval-criteria]]
  - -> references -> [[integration-with-other-rules]]
- **Review Workflow** (path) -- 7 connections
  - -> uses -> [[code-reviewer]]
  - -> uses -> [[security-reviewer]]
  - -> uses -> [[typescript-reviewer]]
  - -> uses -> [[python-reviewer]]
  - -> uses -> [[go-reviewer]]
  - -> uses -> [[rust-reviewer]]
  - <- references <- [[code-review]]
- **Review Checklist** (path) -- 5 connections
  - -> related_to -> [[critical-issues]]
  - -> related_to -> [[high-issues]]
  - -> related_to -> [[medium-issues]]
  - -> related_to -> [[low-issues]]
  - <- references <- [[code-review]]
- **Agent Usage** (path) -- 1 connections
  - <- references <- [[code-review]]
- **Approval Criteria** (path) -- 1 connections
  - <- references <- [[code-review]]
- **code-reviewer** (path) -- 1 connections
  - <- uses <- [[review-workflow]]
- **Common Issues** (path) -- 1 connections
  - <- references <- [[code-review]]
- **CRITICAL Issues** (path) -- 1 connections
  - <- related_to <- [[review-checklist]]
- **go-reviewer** (path) -- 1 connections
  - <- uses <- [[review-workflow]]
- **HIGH Issues** (path) -- 1 connections
  - <- related_to <- [[review-checklist]]
- **Integration with Other Rules** (path) -- 1 connections
  - <- references <- [[code-review]]
- **LOW Issues** (path) -- 1 connections
  - <- related_to <- [[review-checklist]]
- **Maintainability** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **MEDIUM Issues** (path) -- 1 connections
  - <- related_to <- [[review-checklist]]
- **Pull Requests** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **python-reviewer** (path) -- 1 connections
  - <- uses <- [[review-workflow]]
- **Quality** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **rust-reviewer** (path) -- 1 connections
  - <- uses <- [[review-workflow]]
- **Security** (path) -- 1 connections
  - <- related_to <- [[code-review]]
- **security-reviewer** (path) -- 1 connections
  - <- uses <- [[review-workflow]]
- **typescript-reviewer** (path) -- 1 connections
  - <- uses <- [[review-workflow]]

## Internal Relationships
- Code Review -> related_to -> Quality [EXTRACTED]
- Code Review -> related_to -> Security [EXTRACTED]
- Code Review -> related_to -> Maintainability [EXTRACTED]
- Code Review -> related_to -> Pull Requests [EXTRACTED]
- Code Review -> references -> Review Checklist [EXTRACTED]
- Code Review -> references -> Agent Usage [EXTRACTED]
- Code Review -> references -> Review Workflow [EXTRACTED]
- Code Review -> references -> Common Issues [EXTRACTED]
- Code Review -> references -> Approval Criteria [EXTRACTED]
- Code Review -> references -> Integration with Other Rules [EXTRACTED]
- Review Checklist -> related_to -> CRITICAL Issues [EXTRACTED]
- Review Checklist -> related_to -> HIGH Issues [EXTRACTED]
- Review Checklist -> related_to -> MEDIUM Issues [EXTRACTED]
- Review Checklist -> related_to -> LOW Issues [EXTRACTED]
- Review Workflow -> uses -> code-reviewer [EXTRACTED]
- Review Workflow -> uses -> security-reviewer [EXTRACTED]
- Review Workflow -> uses -> typescript-reviewer [EXTRACTED]
- Review Workflow -> uses -> python-reviewer [EXTRACTED]
- Review Workflow -> uses -> go-reviewer [EXTRACTED]
- Review Workflow -> uses -> rust-reviewer [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Code Review, Review Workflow, Review Checklist를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
