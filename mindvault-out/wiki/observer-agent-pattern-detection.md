# Observer Agent & Pattern Detection
Cohesion: 0.11 | Nodes: 20

## Key Nodes
- **Observer Agent** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 11 connections
  - -> contains -> [[when-to-run]]
  - -> contains -> [[input]]
  - -> contains -> [[pattern-detection]]
  - -> contains -> [[output]]
  - -> contains -> [[scope-decision-guide]]
  - -> contains -> [[confidence-calculation]]
  - -> contains -> [[instinct-promotion-project-global]]
  - -> contains -> [[important-guidelines]]
  - -> contains -> [[example-analysis-session]]
  - -> contains -> [[integration-with-skill-creator]]
  - <- contains <- [[observer]]
- **Pattern Detection** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 5 connections
  - -> contains -> [[1-user-corrections]]
  - -> contains -> [[2-error-resolutions]]
  - -> contains -> [[3-repeated-workflows]]
  - -> contains -> [[4-tool-preferences]]
  - <- contains <- [[observer-agent]]
- **Output** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 3 connections
  - -> contains -> [[project-scoped-instinct-default]]
  - -> contains -> [[global-instinct-universal-patterns]]
  - <- contains <- [[observer-agent]]
- **jsonl** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 2 connections
  - <- has_code_example <- [[input]]
  - <- has_code_example <- [[example-analysis-session]]
- **yaml** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 2 connections
  - <- has_code_example <- [[project-scoped-instinct-default]]
  - <- has_code_example <- [[global-instinct-universal-patterns]]
- **Example Analysis Session** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 2 connections
  - -> has_code_example -> [[jsonl]]
  - <- contains <- [[observer-agent]]
- **Global Instinct (universal patterns)** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 2 connections
  - -> has_code_example -> [[yaml]]
  - <- contains <- [[output]]
- **Input** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 2 connections
  - -> has_code_example -> [[jsonl]]
  - <- contains <- [[observer-agent]]
- **Project-Scoped Instinct (default)** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 2 connections
  - -> has_code_example -> [[yaml]]
  - <- contains <- [[output]]
- **observer** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - -> contains -> [[observer-agent]]
- **1. User Corrections** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[pattern-detection]]
- **2. Error Resolutions** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[pattern-detection]]
- **3. Repeated Workflows** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[pattern-detection]]
- **4. Tool Preferences** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[pattern-detection]]
- **Confidence Calculation** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[observer-agent]]
- **Important Guidelines** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[observer-agent]]
- **Instinct Promotion (Project → Global)** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[observer-agent]]
- **Integration with Skill Creator** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[observer-agent]]
- **Scope Decision Guide** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[observer-agent]]
- **When to Run** (.claude/skills/continuous-learning-v2/agents/observer.md) -- 1 connections
  - <- contains <- [[observer-agent]]

## Internal Relationships
- observer -> contains -> Observer Agent [EXTRACTED]
- Example Analysis Session -> has_code_example -> jsonl [EXTRACTED]
- Global Instinct (universal patterns) -> has_code_example -> yaml [EXTRACTED]
- Input -> has_code_example -> jsonl [EXTRACTED]
- Observer Agent -> contains -> When to Run [EXTRACTED]
- Observer Agent -> contains -> Input [EXTRACTED]
- Observer Agent -> contains -> Pattern Detection [EXTRACTED]
- Observer Agent -> contains -> Output [EXTRACTED]
- Observer Agent -> contains -> Scope Decision Guide [EXTRACTED]
- Observer Agent -> contains -> Confidence Calculation [EXTRACTED]
- Observer Agent -> contains -> Instinct Promotion (Project → Global) [EXTRACTED]
- Observer Agent -> contains -> Important Guidelines [EXTRACTED]
- Observer Agent -> contains -> Example Analysis Session [EXTRACTED]
- Observer Agent -> contains -> Integration with Skill Creator [EXTRACTED]
- Output -> contains -> Project-Scoped Instinct (default) [EXTRACTED]
- Output -> contains -> Global Instinct (universal patterns) [EXTRACTED]
- Pattern Detection -> contains -> 1. User Corrections [EXTRACTED]
- Pattern Detection -> contains -> 2. Error Resolutions [EXTRACTED]
- Pattern Detection -> contains -> 3. Repeated Workflows [EXTRACTED]
- Pattern Detection -> contains -> 4. Tool Preferences [EXTRACTED]
- Project-Scoped Instinct (default) -> has_code_example -> yaml [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Observer Agent, Pattern Detection, Output를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 observer.md이다.
