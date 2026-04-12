# Mandatory Base CSS & Preset Catalog
Cohesion: 0.22 | Nodes: 9

## Key Nodes
- **Mandatory Base CSS** (path) -- 3 connections
  - -> related_to -> [[density-limits]]
  - -> references -> [[validation-sizes]]
  - <- implements <- [[viewport-fit]]
- **Preset Catalog** (path) -- 3 connections
  - -> related_to -> [[animation-feel-mapping]]
  - -> related_to -> [[anti-patterns]]
  - <- references <- [[mood-to-preset-mapping]]
- **Density Limits** (path) -- 2 connections
  - -> references -> [[mood-to-preset-mapping]]
  - <- related_to <- [[mandatory-base-css]]
- **Mood to Preset Mapping** (path) -- 2 connections
  - -> references -> [[preset-catalog]]
  - <- references <- [[density-limits]]
- **Viewport Fit** (path) -- 2 connections
  - -> references -> [[golden-rule]]
  - -> implements -> [[mandatory-base-css]]
- **Animation Feel Mapping** (path) -- 1 connections
  - <- related_to <- [[preset-catalog]]
- **Anti-Patterns** (path) -- 1 connections
  - <- related_to <- [[preset-catalog]]
- **Golden Rule** (path) -- 1 connections
  - <- references <- [[viewport-fit]]
- **Validation Sizes** (path) -- 1 connections
  - <- references <- [[mandatory-base-css]]

## Internal Relationships
- Density Limits -> references -> Mood to Preset Mapping [EXTRACTED]
- Mandatory Base CSS -> related_to -> Density Limits [INFERRED]
- Mandatory Base CSS -> references -> Validation Sizes [EXTRACTED]
- Mood to Preset Mapping -> references -> Preset Catalog [EXTRACTED]
- Preset Catalog -> related_to -> Animation Feel Mapping [INFERRED]
- Preset Catalog -> related_to -> Anti-Patterns [INFERRED]
- Viewport Fit -> references -> Golden Rule [EXTRACTED]
- Viewport Fit -> implements -> Mandatory Base CSS [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Mandatory Base CSS, Preset Catalog, Density Limits를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
