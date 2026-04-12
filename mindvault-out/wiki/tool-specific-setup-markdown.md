# Tool-Specific Setup & markdown
Cohesion: 0.25 | Nodes: 9

## Key Nodes
- **Tool-Specific Setup** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 6 connections
  - -> contains -> [[claude-code]]
  - -> contains -> [[cursor]]
  - -> contains -> [[github-copilot]]
  - -> contains -> [[gemini-cli]]
  - -> contains -> [[any-other-tool]]
  - -> contains -> [[generic-workflow]]
- **markdown** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 2 connections
  - <- has_code_example <- [[github-copilot]]
  - <- has_code_example <- [[gemini-cli]]
- **Claude Code** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[tool-specific-setup]]
- **Gemini CLI** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[tool-specific-setup]]
- **GitHub Copilot** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[tool-specific-setup]]
- **bash** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 1 connections
  - <- has_code_example <- [[claude-code]]
- **Any Other Tool** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 1 connections
  - <- contains <- [[tool-specific-setup]]
- **Cursor** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 1 connections
  - <- contains <- [[tool-specific-setup]]
- **Generic Workflow** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/tool-specific-setup.md) -- 1 connections
  - <- contains <- [[tool-specific-setup]]

## Internal Relationships
- Claude Code -> has_code_example -> bash [EXTRACTED]
- Gemini CLI -> has_code_example -> markdown [EXTRACTED]
- GitHub Copilot -> has_code_example -> markdown [EXTRACTED]
- Tool-Specific Setup -> contains -> Claude Code [EXTRACTED]
- Tool-Specific Setup -> contains -> Cursor [EXTRACTED]
- Tool-Specific Setup -> contains -> GitHub Copilot [EXTRACTED]
- Tool-Specific Setup -> contains -> Gemini CLI [EXTRACTED]
- Tool-Specific Setup -> contains -> Any Other Tool [EXTRACTED]
- Tool-Specific Setup -> contains -> Generic Workflow [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Tool-Specific Setup, markdown, Claude Code를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 tool-specific-setup.md이다.
