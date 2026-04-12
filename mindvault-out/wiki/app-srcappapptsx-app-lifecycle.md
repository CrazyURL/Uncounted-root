# App 초기화 컴포넌트 (`src/app/App.tsx`) & app-lifecycle
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **App 초기화 컴포넌트 (`src/app/App.tsx`)** (uncounted-app/.claude/rules/app-lifecycle.md) -- 2 connections
  - -> contains -> [[srclibcollectorts]]
  - <- contains <- [[app-lifecycle]]
- **app-lifecycle** (uncounted-app/.claude/rules/app-lifecycle.md) -- 1 connections
  - -> contains -> [[app-srcappapptsx]]
- **메타데이터 컬렉터 (`src/lib/*Collector.ts`)** (uncounted-app/.claude/rules/app-lifecycle.md) -- 1 connections
  - <- contains <- [[app-srcappapptsx]]

## Internal Relationships
- app-lifecycle -> contains -> App 초기화 컴포넌트 (`src/app/App.tsx`) [EXTRACTED]
- App 초기화 컴포넌트 (`src/app/App.tsx`) -> contains -> 메타데이터 컬렉터 (`src/lib/*Collector.ts`) [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 App 초기화 컴포넌트 (`src/app/App.tsx`), app-lifecycle, 메타데이터 컬렉터 (`src/lib/*Collector.ts`)를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 app-lifecycle.md이다.
