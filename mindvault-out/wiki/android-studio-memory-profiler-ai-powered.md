# Android Studio Memory Profiler & AI-Powered 프로파일링
Cohesion: 0.29 | Nodes: 7

## Key Nodes
- **Android Studio Memory Profiler** (path) -- 4 connections
  - <- related_to <- [[lifecycle-aware]]
  - <- references <- [[webview]]
  - <- related_to <- [[ai-powered]]
  - <- related_to <- [[disco-load-and-cost]]
- **AI-Powered 프로파일링** (path) -- 2 connections
  - -> related_to -> [[android-studio-memory-profiler]]
  - <- related_to <- [[low-ram]]
- **Lifecycle-aware 리소스 관리** (path) -- 2 connections
  - -> related_to -> [[android-studio-memory-profiler]]
  - <- related_to <- [[ontrimmemory]]
- **disco load and cost** (path) -- 1 connections
  - -> related_to -> [[android-studio-memory-profiler]]
- **low-RAM 기기 대응** (path) -- 1 connections
  - -> related_to -> [[ai-powered]]
- **onTrimMemory()** (path) -- 1 connections
  - -> related_to -> [[lifecycle-aware]]
- **WebView 메모리** (path) -- 1 connections
  - -> references -> [[android-studio-memory-profiler]]

## Internal Relationships
- AI-Powered 프로파일링 -> related_to -> Android Studio Memory Profiler [EXTRACTED]
- disco load and cost -> related_to -> Android Studio Memory Profiler [EXTRACTED]
- Lifecycle-aware 리소스 관리 -> related_to -> Android Studio Memory Profiler [EXTRACTED]
- low-RAM 기기 대응 -> related_to -> AI-Powered 프로파일링 [INFERRED]
- onTrimMemory() -> related_to -> Lifecycle-aware 리소스 관리 [EXTRACTED]
- WebView 메모리 -> references -> Android Studio Memory Profiler [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Android Studio Memory Profiler, AI-Powered 프로파일링, Lifecycle-aware 리소스 관리를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
