# For PM/PO — Using the Wiki & Common Workflows
Cohesion: 0.15 | Nodes: 14

## Key Nodes
- **For PM/PO — Using the Wiki** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 5 connections
  - -> contains -> [[what-is-this]]
  - -> contains -> [[how-to-add-documents]]
  - -> contains -> [[how-to-ask-questions]]
  - -> contains -> [[how-to-review-wiki-pages]]
  - -> contains -> [[common-workflows]]
- **Common Workflows** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 4 connections
  - -> contains -> [[i-have-meeting-notes]]
  - -> contains -> [[i-need-a-status-update]]
  - -> contains -> [[i-want-to-check-wiki-health]]
  - <- contains <- [[for-pmpo-using-the-wiki]]
- **How to Add Documents** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 4 connections
  - -> contains -> [[option-a-use-your-ai-tool]]
  - -> contains -> [[option-b-command-line]]
  - -> contains -> [[categories]]
  - <- contains <- [[for-pmpo-using-the-wiki]]
- **bash** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 2 connections
  - <- has_code_example <- [[option-b-command-line]]
  - <- has_code_example <- [[i-want-to-check-wiki-health]]
- **How to Review Wiki Pages** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 2 connections
  - -> has_code_example -> [[yaml]]
  - <- contains <- [[for-pmpo-using-the-wiki]]
- **"I want to check wiki health"** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[common-workflows]]
- **Option B: Command line** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[how-to-add-documents]]
- **yaml** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 1 connections
  - <- has_code_example <- [[how-to-review-wiki-pages]]
- **Categories** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 1 connections
  - <- contains <- [[how-to-add-documents]]
- **How to Ask Questions** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 1 connections
  - <- contains <- [[for-pmpo-using-the-wiki]]
- **"I have meeting notes"** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 1 connections
  - <- contains <- [[common-workflows]]
- **"I need a status update"** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 1 connections
  - <- contains <- [[common-workflows]]
- **Option A: Use your AI tool** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 1 connections
  - <- contains <- [[how-to-add-documents]]
- **What Is This?** (/Users/gdash/project/uncounted-project/.claude/skills/llm-wiki/docs/for-pm-po.md) -- 1 connections
  - <- contains <- [[for-pmpo-using-the-wiki]]

## Internal Relationships
- Common Workflows -> contains -> "I have meeting notes" [EXTRACTED]
- Common Workflows -> contains -> "I need a status update" [EXTRACTED]
- Common Workflows -> contains -> "I want to check wiki health" [EXTRACTED]
- For PM/PO — Using the Wiki -> contains -> What Is This? [EXTRACTED]
- For PM/PO — Using the Wiki -> contains -> How to Add Documents [EXTRACTED]
- For PM/PO — Using the Wiki -> contains -> How to Ask Questions [EXTRACTED]
- For PM/PO — Using the Wiki -> contains -> How to Review Wiki Pages [EXTRACTED]
- For PM/PO — Using the Wiki -> contains -> Common Workflows [EXTRACTED]
- How to Add Documents -> contains -> Option A: Use your AI tool [EXTRACTED]
- How to Add Documents -> contains -> Option B: Command line [EXTRACTED]
- How to Add Documents -> contains -> Categories [EXTRACTED]
- How to Review Wiki Pages -> has_code_example -> yaml [EXTRACTED]
- "I want to check wiki health" -> has_code_example -> bash [EXTRACTED]
- Option B: Command line -> has_code_example -> bash [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 For PM/PO — Using the Wiki, Common Workflows, How to Add Documents를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 for-pm-po.md이다.
