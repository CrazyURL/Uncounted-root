# User Interface & getErrorMessage Function
Cohesion: 0.25 | Nodes: 9

## Key Nodes
- **User Interface** (path) -- 5 connections
  - <- implements <- [[formatuser-function]]
  - <- extends <- [[userwithrole-type]]
  - <- references <- [[geterrormessage-function]]
  - <- references <- [[usercardprops-interface]]
  - <- references <- [[loaduser-function]]
- **getErrorMessage Function** (path) -- 3 connections
  - -> references -> [[user-interface]]
  - <- calls <- [[loaduser-function]]
  - <- uses <- [[logger-object]]
- **formatUser Function** (path) -- 2 connections
  - -> implements -> [[user-interface]]
  - -> related_to -> [[userrole-type]]
- **loadUser Function** (path) -- 2 connections
  - -> references -> [[user-interface]]
  - -> calls -> [[geterrormessage-function]]
- **UserCardProps Interface** (path) -- 2 connections
  - -> references -> [[user-interface]]
  - <- implements <- [[usercard-function]]
- **logger Object** (path) -- 1 connections
  - -> uses -> [[geterrormessage-function]]
- **UserCard Function** (path) -- 1 connections
  - -> implements -> [[usercardprops-interface]]
- **UserRole Type** (path) -- 1 connections
  - <- related_to <- [[formatuser-function]]
- **UserWithRole Type** (path) -- 1 connections
  - -> extends -> [[user-interface]]

## Internal Relationships
- formatUser Function -> implements -> User Interface [EXTRACTED]
- formatUser Function -> related_to -> UserRole Type [INFERRED]
- getErrorMessage Function -> references -> User Interface [EXTRACTED]
- loadUser Function -> references -> User Interface [EXTRACTED]
- loadUser Function -> calls -> getErrorMessage Function [EXTRACTED]
- logger Object -> uses -> getErrorMessage Function [INFERRED]
- UserCard Function -> implements -> UserCardProps Interface [EXTRACTED]
- UserCardProps Interface -> references -> User Interface [EXTRACTED]
- UserWithRole Type -> extends -> User Interface [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 User Interface, getErrorMessage Function, formatUser Function를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
