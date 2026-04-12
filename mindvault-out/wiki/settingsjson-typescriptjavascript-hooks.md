# settings.json & TypeScript/JavaScript Hooks
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **settings.json** (~/.claude/settings.json) -- 4 connections
  - -> implements -> [[prettier]]
  - -> implements -> [[typescript-check]]
  - -> implements -> [[consolelog-warning]]
  - <- references <- [[typescriptjavascript-hooks]]
- **TypeScript/JavaScript Hooks** (common/hooks.md) -- 2 connections
  - -> references -> [[settingsjson]]
  - -> related_to -> [[consolelog-audit]]
- **Console.log Audit** (/Users/gdash/project/uncounted-project/.claude/rules/typescript/hooks.md) -- 1 connections
  - <- related_to <- [[typescriptjavascript-hooks]]
- **Console.log Warning** (/Users/gdash/project/uncounted-project/.claude/rules/typescript/hooks.md) -- 1 connections
  - <- implements <- [[settingsjson]]
- **Prettier** (/Users/gdash/project/uncounted-project/.claude/rules/typescript/hooks.md) -- 1 connections
  - <- implements <- [[settingsjson]]
- **TypeScript Check** (/Users/gdash/project/uncounted-project/.claude/rules/typescript/hooks.md) -- 1 connections
  - <- implements <- [[settingsjson]]

## Internal Relationships
- settings.json -> implements -> Prettier [EXTRACTED]
- settings.json -> implements -> TypeScript Check [EXTRACTED]
- settings.json -> implements -> Console.log Warning [EXTRACTED]
- TypeScript/JavaScript Hooks -> references -> settings.json [EXTRACTED]
- TypeScript/JavaScript Hooks -> related_to -> Console.log Audit [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 settings.json, TypeScript/JavaScript Hooks, Console.log Audit를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 hooks.md, settings.json이다.
