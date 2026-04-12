# Agent Payment Execution (x402) & How It Works
Cohesion: 0.13 | Nodes: 15

## Key Nodes
- **Agent Payment Execution (x402)** (.claude/skills/agent-payment-x402/SKILL.md) -- 7 connections
  - -> contains -> [[when-to-use]]
  - -> contains -> [[how-it-works]]
  - -> contains -> [[mcp-integration]]
  - -> contains -> [[examples]]
  - -> contains -> [[best-practices]]
  - -> contains -> [[production-reference]]
  - <- contains <- [[skill]]
- **How It Works** (.claude/skills/agent-payment-x402/SKILL.md) -- 4 connections
  - -> contains -> [[x402-protocol]]
  - -> contains -> [[spending-controls]]
  - -> contains -> [[non-custodial-wallets]]
  - <- contains <- [[agent-payment-execution-x402]]
- **MCP Integration** (.claude/skills/agent-payment-x402/SKILL.md) -- 3 connections
  - -> has_code_example -> [[json]]
  - -> contains -> [[available-tools-agent-callable]]
  - <- contains <- [[agent-payment-execution-x402]]
- **Budget enforcement in an MCP client** (.claude/skills/agent-payment-x402/SKILL.md) -- 2 connections
  - -> has_code_example -> [[typescript]]
  - <- contains <- [[examples]]
- **Examples** (.claude/skills/agent-payment-x402/SKILL.md) -- 2 connections
  - -> contains -> [[budget-enforcement-in-an-mcp-client]]
  - <- contains <- [[agent-payment-execution-x402]]
- **json** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- has_code_example <- [[mcp-integration]]
- **typescript** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- has_code_example <- [[budget-enforcement-in-an-mcp-client]]
- **SKILL** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - -> contains -> [[agent-payment-execution-x402]]
- **Available Tools (agent-callable)** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- contains <- [[mcp-integration]]
- **Best Practices** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- contains <- [[agent-payment-execution-x402]]
- **Non-Custodial Wallets** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- contains <- [[how-it-works]]
- **Production Reference** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- contains <- [[agent-payment-execution-x402]]
- **Spending Controls** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- contains <- [[how-it-works]]
- **When to Use** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- contains <- [[agent-payment-execution-x402]]
- **x402 Protocol** (.claude/skills/agent-payment-x402/SKILL.md) -- 1 connections
  - <- contains <- [[how-it-works]]

## Internal Relationships
- SKILL -> contains -> Agent Payment Execution (x402) [EXTRACTED]
- Agent Payment Execution (x402) -> contains -> When to Use [EXTRACTED]
- Agent Payment Execution (x402) -> contains -> How It Works [EXTRACTED]
- Agent Payment Execution (x402) -> contains -> MCP Integration [EXTRACTED]
- Agent Payment Execution (x402) -> contains -> Examples [EXTRACTED]
- Agent Payment Execution (x402) -> contains -> Best Practices [EXTRACTED]
- Agent Payment Execution (x402) -> contains -> Production Reference [EXTRACTED]
- Budget enforcement in an MCP client -> has_code_example -> typescript [EXTRACTED]
- Examples -> contains -> Budget enforcement in an MCP client [EXTRACTED]
- How It Works -> contains -> x402 Protocol [EXTRACTED]
- How It Works -> contains -> Spending Controls [EXTRACTED]
- How It Works -> contains -> Non-Custodial Wallets [EXTRACTED]
- MCP Integration -> has_code_example -> json [EXTRACTED]
- MCP Integration -> contains -> Available Tools (agent-callable) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Agent Payment Execution (x402), How It Works, MCP Integration를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
