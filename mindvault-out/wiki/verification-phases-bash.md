# Verification Phases & bash
Cohesion: 0.18 | Nodes: 15

## Key Nodes
- **Verification Phases** (.claude/skills/verification-loop/SKILL.md) -- 7 connections
  - -> contains -> [[phase-1-build-verification]]
  - -> contains -> [[phase-2-type-check]]
  - -> contains -> [[phase-3-lint-check]]
  - -> contains -> [[phase-4-test-suite]]
  - -> contains -> [[phase-5-security-scan]]
  - -> contains -> [[phase-6-diff-review]]
  - <- contains <- [[verification-loop-skill]]
- **bash** (.claude/skills/verification-loop/SKILL.md) -- 6 connections
  - <- has_code_example <- [[phase-1-build-verification]]
  - <- has_code_example <- [[phase-2-type-check]]
  - <- has_code_example <- [[phase-3-lint-check]]
  - <- has_code_example <- [[phase-4-test-suite]]
  - <- has_code_example <- [[phase-5-security-scan]]
  - <- has_code_example <- [[phase-6-diff-review]]
- **Verification Loop Skill** (.claude/skills/verification-loop/SKILL.md) -- 6 connections
  - -> contains -> [[when-to-use]]
  - -> contains -> [[verification-phases]]
  - -> contains -> [[output-format]]
  - -> contains -> [[continuous-mode]]
  - -> contains -> [[integration-with-hooks]]
  - <- contains <- [[skill]]
- **Continuous Mode** (.claude/skills/verification-loop/SKILL.md) -- 2 connections
  - -> has_code_example -> [[markdown]]
  - <- contains <- [[verification-loop-skill]]
- **Phase 1: Build Verification** (.claude/skills/verification-loop/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[verification-phases]]
- **Phase 2: Type Check** (.claude/skills/verification-loop/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[verification-phases]]
- **Phase 3: Lint Check** (.claude/skills/verification-loop/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[verification-phases]]
- **Phase 4: Test Suite** (.claude/skills/verification-loop/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[verification-phases]]
- **Phase 5: Security Scan** (.claude/skills/verification-loop/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[verification-phases]]
- **Phase 6: Diff Review** (.claude/skills/verification-loop/SKILL.md) -- 2 connections
  - -> has_code_example -> [[bash]]
  - <- contains <- [[verification-phases]]
- **markdown** (.claude/skills/verification-loop/SKILL.md) -- 1 connections
  - <- has_code_example <- [[continuous-mode]]
- **SKILL** (.claude/skills/verification-loop/SKILL.md) -- 1 connections
  - -> contains -> [[verification-loop-skill]]
- **Integration with Hooks** (.claude/skills/verification-loop/SKILL.md) -- 1 connections
  - <- contains <- [[verification-loop-skill]]
- **Output Format** (.claude/skills/verification-loop/SKILL.md) -- 1 connections
  - <- contains <- [[verification-loop-skill]]
- **When to Use** (.claude/skills/verification-loop/SKILL.md) -- 1 connections
  - <- contains <- [[verification-loop-skill]]

## Internal Relationships
- SKILL -> contains -> Verification Loop Skill [EXTRACTED]
- Continuous Mode -> has_code_example -> markdown [EXTRACTED]
- Phase 1: Build Verification -> has_code_example -> bash [EXTRACTED]
- Phase 2: Type Check -> has_code_example -> bash [EXTRACTED]
- Phase 3: Lint Check -> has_code_example -> bash [EXTRACTED]
- Phase 4: Test Suite -> has_code_example -> bash [EXTRACTED]
- Phase 5: Security Scan -> has_code_example -> bash [EXTRACTED]
- Phase 6: Diff Review -> has_code_example -> bash [EXTRACTED]
- Verification Loop Skill -> contains -> When to Use [EXTRACTED]
- Verification Loop Skill -> contains -> Verification Phases [EXTRACTED]
- Verification Loop Skill -> contains -> Output Format [EXTRACTED]
- Verification Loop Skill -> contains -> Continuous Mode [EXTRACTED]
- Verification Loop Skill -> contains -> Integration with Hooks [EXTRACTED]
- Verification Phases -> contains -> Phase 1: Build Verification [EXTRACTED]
- Verification Phases -> contains -> Phase 2: Type Check [EXTRACTED]
- Verification Phases -> contains -> Phase 3: Lint Check [EXTRACTED]
- Verification Phases -> contains -> Phase 4: Test Suite [EXTRACTED]
- Verification Phases -> contains -> Phase 5: Security Scan [EXTRACTED]
- Verification Phases -> contains -> Phase 6: Diff Review [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Verification Phases, bash, Verification Loop Skill를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 SKILL.md이다.
