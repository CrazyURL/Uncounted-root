# OrderService & CreateOrderRequest
Cohesion: 0.40 | Nodes: 5

## Key Nodes
- **OrderService** (path) -- 4 connections
  - -> related_to -> [[createorderrequest]]
  - -> related_to -> [[ordersummary]]
  - <- implements <- [[orderrepository]]
  - <- implements <- [[paymentgateway]]
- **CreateOrderRequest** (path) -- 1 connections
  - <- related_to <- [[orderservice]]
- **OrderRepository** (path) -- 1 connections
  - -> implements -> [[orderservice]]
- **OrderSummary** (path) -- 1 connections
  - <- related_to <- [[orderservice]]
- **PaymentGateway** (path) -- 1 connections
  - -> implements -> [[orderservice]]

## Internal Relationships
- OrderRepository -> implements -> OrderService [EXTRACTED]
- OrderService -> related_to -> CreateOrderRequest [EXTRACTED]
- OrderService -> related_to -> OrderSummary [EXTRACTED]
- PaymentGateway -> implements -> OrderService [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 OrderService, CreateOrderRequest, OrderRepository를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 path이다.
