# Narrow Retry Logic & Cost-Aware LLM Pipeline
Cohesion: 0.12 | Nodes: 16

## Key Nodes
- **Narrow Retry Logic** (path) -- 6 connections
  - -> related_to -> [[transient-errors]]
  - -> related_to -> [[authentication-errors]]
  - -> related_to -> [[apiconnectionerror]]
  - -> related_to -> [[internalservererror]]
  - -> related_to -> [[ratelimiterror]]
  - <- references <- [[cost-aware-llm-pipeline]]
- **Cost-Aware LLM Pipeline** (path) -- 4 connections
  - -> references -> [[model-routing-by-task-complexity]]
  - -> references -> [[immutable-cost-tracking]]
  - -> references -> [[narrow-retry-logic]]
  - -> references -> [[prompt-caching]]
- **Immutable Cost Tracking** (path) -- 4 connections
  - -> implements -> [[costrecord]]
  - -> implements -> [[costtracker]]
  - -> related_to -> [[budget-exceeded]]
  - <- references <- [[cost-aware-llm-pipeline]]
- **Model Routing by Task Complexity** (path) -- 4 connections
  - -> related_to -> [[haiku-45]]
  - -> related_to -> [[sonnet-46]]
  - -> related_to -> [[opus-45]]
  - <- references <- [[cost-aware-llm-pipeline]]
- **APIConnectionError** (path) -- 1 connections
  - <- related_to <- [[narrow-retry-logic]]
- **Authentication Errors** (path) -- 1 connections
  - <- related_to <- [[narrow-retry-logic]]
- **Budget Exceeded** (path) -- 1 connections
  - <- related_to <- [[immutable-cost-tracking]]
- **CostRecord** (path) -- 1 connections
  - <- implements <- [[immutable-cost-tracking]]
- **CostTracker** (path) -- 1 connections
  - <- implements <- [[immutable-cost-tracking]]
- **Haiku 4.5** (path) -- 1 connections
  - <- related_to <- [[model-routing-by-task-complexity]]
- **InternalServerError** (path) -- 1 connections
  - <- related_to <- [[narrow-retry-logic]]
- **Opus 4.5** (path) -- 1 connections
  - <- related_to <- [[model-routing-by-task-complexity]]
- **Prompt Caching** (path) -- 1 connections
  - <- references <- [[cost-aware-llm-pipeline]]
- **RateLimitError** (path) -- 1 connections
  - <- related_to <- [[narrow-retry-logic]]
- **Sonnet 4.6** (path) -- 1 connections
  - <- related_to <- [[model-routing-by-task-complexity]]
- **Transient Errors** (path) -- 1 connections
  - <- related_to <- [[narrow-retry-logic]]

## Internal Relationships
- Cost-Aware LLM Pipeline -> references -> Model Routing by Task Complexity [EXTRACTED]
- Cost-Aware LLM Pipeline -> references -> Immutable Cost Tracking [EXTRACTED]
- Cost-Aware LLM Pipeline -> references -> Narrow Retry Logic [EXTRACTED]
- Cost-Aware LLM Pipeline -> references -> Prompt Caching [EXTRACTED]
- Immutable Cost Tracking -> implements -> CostRecord [EXTRACTED]
- Immutable Cost Tracking -> implements -> CostTracker [EXTRACTED]
- Immutable Cost Tracking -> related_to -> Budget Exceeded [INFERRED]
- Model Routing by Task Complexity -> related_to -> Haiku 4.5 [INFERRED]
- Model Routing by Task Complexity -> related_to -> Sonnet 4.6 [INFERRED]
- Model Routing by Task Complexity -> related_to -> Opus 4.5 [INFERRED]
- Narrow Retry Logic -> related_to -> Transient Errors [EXTRACTED]
- Narrow Retry Logic -> related_to -> Authentication Errors [EXTRACTED]
- Narrow Retry Logic -> related_to -> APIConnectionError [EXTRACTED]
- Narrow Retry Logic -> related_to -> InternalServerError [EXTRACTED]
- Narrow Retry Logic -> related_to -> RateLimitError [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Narrow Retry Logic, Cost-Aware LLM Pipeline, Immutable Cost Tracking를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
