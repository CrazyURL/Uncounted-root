# Evaluation Framework & GPA Framework
Cohesion: 0.20 | Nodes: 10

## Key Nodes
- **Evaluation Framework** (path) -- 8 connections
  - -> implements -> [[gpa-framework]]
  - -> implements -> [[rag-evaluation]]
  - <- related_to <- [[research-command]]
  - <- references <- [[google-cloud-blog]]
  - <- references <- [[libertify]]
  - <- references <- [[openai-docs]]
  - <- references <- [[anthropic-docs]]
  - <- references <- [[microsoft-learn]]
- **GPA Framework** (path) -- 2 connections
  - -> related_to -> [[local-context]]
  - <- implements <- [[evaluation-framework]]
- **Anthropic Docs** (path) -- 1 connections
  - -> references -> [[evaluation-framework]]
- **Google Cloud Blog** (path) -- 1 connections
  - -> references -> [[evaluation-framework]]
- **Libertify** (path) -- 1 connections
  - -> references -> [[evaluation-framework]]
- **Local Context** (path) -- 1 connections
  - <- related_to <- [[gpa-framework]]
- **Microsoft Learn** (path) -- 1 connections
  - -> references -> [[evaluation-framework]]
- **OpenAI Docs** (path) -- 1 connections
  - -> references -> [[evaluation-framework]]
- **RAG Evaluation** (path) -- 1 connections
  - <- implements <- [[evaluation-framework]]
- **Research Command** (path) -- 1 connections
  - -> related_to -> [[evaluation-framework]]

## Internal Relationships
- Anthropic Docs -> references -> Evaluation Framework [EXTRACTED]
- Evaluation Framework -> implements -> GPA Framework [EXTRACTED]
- Evaluation Framework -> implements -> RAG Evaluation [EXTRACTED]
- Google Cloud Blog -> references -> Evaluation Framework [EXTRACTED]
- GPA Framework -> related_to -> Local Context [INFERRED]
- Libertify -> references -> Evaluation Framework [EXTRACTED]
- Microsoft Learn -> references -> Evaluation Framework [EXTRACTED]
- OpenAI Docs -> references -> Evaluation Framework [EXTRACTED]
- Research Command -> related_to -> Evaluation Framework [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Evaluation Framework, GPA Framework, Anthropic Docs를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
