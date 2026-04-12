# PaymentResult & PaymentFailure
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **PaymentResult** (path) -- 2 connections
  - -> related_to -> [[paymentsuccess]]
  - -> related_to -> [[paymentfailure]]
- **PaymentFailure** (path) -- 1 connections
  - <- related_to <- [[paymentresult]]
- **PaymentSuccess** (path) -- 1 connections
  - <- related_to <- [[paymentresult]]

## Internal Relationships
- PaymentResult -> related_to -> PaymentSuccess [EXTRACTED]
- PaymentResult -> related_to -> PaymentFailure [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 PaymentResult, PaymentFailure, PaymentSuccess를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
