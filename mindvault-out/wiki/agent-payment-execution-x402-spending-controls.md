# Agent Payment Execution (x402) & Spending Controls
Cohesion: 0.13 | Nodes: 15

## Key Nodes
- **Agent Payment Execution (x402)** (path) -- 8 connections
  - -> implements -> [[x402-protocol]]
  - -> related_to -> [[spending-controls]]
  - -> related_to -> [[non-custodial-wallets]]
  - -> related_to -> [[mcp-integration]]
  - -> related_to -> [[security-review]]
  - -> related_to -> [[audit-trails]]
  - -> related_to -> [[fail-closed]]
  - -> related_to -> [[testnets]]
- **Spending Controls** (path) -- 5 connections
  - -> defines -> [[per-task-budget]]
  - -> defines -> [[per-session-budget]]
  - -> defines -> [[allowlisted-recipients]]
  - -> defines -> [[rate-limits]]
  - <- related_to <- [[agent-payment-execution-x402]]
- **Testnets** (path) -- 3 connections
  - -> is_a -> [[base-sepolia]]
  - -> is_a -> [[base-mainnet]]
  - <- related_to <- [[agent-payment-execution-x402]]
- **Allowlisted Recipients** (path) -- 1 connections
  - <- defines <- [[spending-controls]]
- **Audit Trails** (path) -- 1 connections
  - <- related_to <- [[agent-payment-execution-x402]]
- **Base Mainnet** (path) -- 1 connections
  - <- is_a <- [[testnets]]
- **Base Sepolia** (path) -- 1 connections
  - <- is_a <- [[testnets]]
- **Fail Closed** (path) -- 1 connections
  - <- related_to <- [[agent-payment-execution-x402]]
- **MCP Integration** (path) -- 1 connections
  - <- related_to <- [[agent-payment-execution-x402]]
- **Non-Custodial Wallets** (path) -- 1 connections
  - <- related_to <- [[agent-payment-execution-x402]]
- **Per-session Budget** (path) -- 1 connections
  - <- defines <- [[spending-controls]]
- **Per-task Budget** (path) -- 1 connections
  - <- defines <- [[spending-controls]]
- **Rate Limits** (path) -- 1 connections
  - <- defines <- [[spending-controls]]
- **Security Review** (path) -- 1 connections
  - <- related_to <- [[agent-payment-execution-x402]]
- **x402 Protocol** (path) -- 1 connections
  - <- implements <- [[agent-payment-execution-x402]]

## Internal Relationships
- Agent Payment Execution (x402) -> implements -> x402 Protocol [EXTRACTED]
- Agent Payment Execution (x402) -> related_to -> Spending Controls [EXTRACTED]
- Agent Payment Execution (x402) -> related_to -> Non-Custodial Wallets [EXTRACTED]
- Agent Payment Execution (x402) -> related_to -> MCP Integration [EXTRACTED]
- Agent Payment Execution (x402) -> related_to -> Security Review [EXTRACTED]
- Agent Payment Execution (x402) -> related_to -> Audit Trails [EXTRACTED]
- Agent Payment Execution (x402) -> related_to -> Fail Closed [EXTRACTED]
- Agent Payment Execution (x402) -> related_to -> Testnets [EXTRACTED]
- Spending Controls -> defines -> Per-task Budget [EXTRACTED]
- Spending Controls -> defines -> Per-session Budget [EXTRACTED]
- Spending Controls -> defines -> Allowlisted Recipients [EXTRACTED]
- Spending Controls -> defines -> Rate Limits [EXTRACTED]
- Testnets -> is_a -> Base Sepolia [EXTRACTED]
- Testnets -> is_a -> Base Mainnet [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent Payment Execution (x402), Spending Controls, Testnets를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
