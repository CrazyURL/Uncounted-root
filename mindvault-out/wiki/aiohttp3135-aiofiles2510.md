# aiohttp==3.13.5 & aiofiles==25.1.0
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **aiohttp==3.13.5** (path) -- 3 connections
  - <- related_to <- [[aiofiles2510]]
  - <- references <- [[fastapi01353]]
  - <- related_to <- [[requests2331]]
- **aiofiles==25.1.0** (path) -- 1 connections
  - -> related_to -> [[aiohttp3135]]
- **fastapi==0.135.3** (path) -- 1 connections
  - -> references -> [[aiohttp3135]]
- **requests==2.33.1** (path) -- 1 connections
  - -> related_to -> [[aiohttp3135]]

## Internal Relationships
- aiofiles==25.1.0 -> related_to -> aiohttp==3.13.5 [EXTRACTED]
- fastapi==0.135.3 -> references -> aiohttp==3.13.5 [EXTRACTED]
- requests==2.33.1 -> related_to -> aiohttp==3.13.5 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 aiohttp==3.13.5, aiofiles==25.1.0, fastapi==0.135.3를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
