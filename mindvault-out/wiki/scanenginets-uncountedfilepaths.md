# scanEngine.ts & uncounted_file_paths
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **scanEngine.ts** (path) -- 2 connections
  - -> related_to -> [[uncountedfilepaths]]
  - -> references -> [[filesystemdirectoryhandle]]
- **uncounted_file_paths** (path) -- 2 connections
  - -> related_to -> [[capacitor-secure-storage]]
  - <- related_to <- [[scanenginets]]
- **Capacitor Secure Storage** (path) -- 1 connections
  - <- related_to <- [[uncountedfilepaths]]
- **FileSystemDirectoryHandle** (path) -- 1 connections
  - <- references <- [[scanenginets]]

## Internal Relationships
- scanEngine.ts -> related_to -> uncounted_file_paths [EXTRACTED]
- scanEngine.ts -> references -> FileSystemDirectoryHandle [EXTRACTED]
- uncounted_file_paths -> related_to -> Capacitor Secure Storage [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 scanEngine.ts, uncounted_file_paths, Capacitor Secure Storage를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
