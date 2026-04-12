# API Response Format & Data Payload
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **API Response Format** (path) -- 4 connections
  - -> related_to -> [[successstatus-indicator]]
  - -> related_to -> [[data-payload]]
  - -> related_to -> [[error-message-field]]
  - -> related_to -> [[metadata-for-paginated-responses]]
- **Data Payload** (path) -- 1 connections
  - <- related_to <- [[api-response-format]]
- **Error Message Field** (path) -- 1 connections
  - <- related_to <- [[api-response-format]]
- **Metadata for Paginated Responses** (path) -- 1 connections
  - <- related_to <- [[api-response-format]]
- **Success/Status Indicator** (path) -- 1 connections
  - <- related_to <- [[api-response-format]]

## Internal Relationships
- API Response Format -> related_to -> Success/Status Indicator [EXTRACTED]
- API Response Format -> related_to -> Data Payload [EXTRACTED]
- API Response Format -> related_to -> Error Message Field [EXTRACTED]
- API Response Format -> related_to -> Metadata for Paginated Responses [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 API Response Format, Data Payload, Error Message Field를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
