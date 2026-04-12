# EmailSender & NotificationService
Cohesion: 1.00 | Nodes: 2

## Key Nodes
- **EmailSender** (path) -- 1 connections
  - -> implements -> [[notificationservice]]
- **NotificationService** (path) -- 1 connections
  - <- implements <- [[emailsender]]

## Internal Relationships
- EmailSender -> implements -> NotificationService [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 EmailSender, NotificationService를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
