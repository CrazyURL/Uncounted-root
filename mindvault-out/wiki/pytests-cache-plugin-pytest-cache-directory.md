# pytest's cache plugin & pytest cache directory
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **pytest's cache plugin** (path) -- 5 connections
  - -> implements -> [[cache-fixture]]
  - -> provides -> [[lf-option]]
  - -> provides -> [[ff-option]]
  - -> related_to -> [[pytest-documentation]]
  - <- references <- [[pytest-cache-directory]]
- **pytest cache directory** (path) -- 2 connections
  - -> references -> [[pytests-cache-plugin]]
  - -> not_committed_to -> [[version-control]]
- **--ff option** (path) -- 1 connections
  - <- provides <- [[pytests-cache-plugin]]
- **--lf option** (path) -- 1 connections
  - <- provides <- [[pytests-cache-plugin]]
- **cache fixture** (path) -- 1 connections
  - <- implements <- [[pytests-cache-plugin]]
- **pytest documentation** (path) -- 1 connections
  - <- related_to <- [[pytests-cache-plugin]]
- **version control** (path) -- 1 connections
  - <- not_committed_to <- [[pytest-cache-directory]]

## Internal Relationships
- pytest cache directory -> references -> pytest's cache plugin [EXTRACTED]
- pytest cache directory -> not_committed_to -> version control [EXTRACTED]
- pytest's cache plugin -> implements -> cache fixture [EXTRACTED]
- pytest's cache plugin -> provides -> --lf option [EXTRACTED]
- pytest's cache plugin -> provides -> --ff option [EXTRACTED]
- pytest's cache plugin -> related_to -> pytest documentation [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 pytest's cache plugin, pytest cache directory, --ff option를 중심으로 provides 관계로 연결되어 있다. 주요 소스 파일은 path이다.
