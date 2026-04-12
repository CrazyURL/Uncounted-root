# SttProcessingService & WavParser
Cohesion: 0.28 | Nodes: 9

## Key Nodes
- **SttProcessingService** (/Users/gdash/project/uncounted-app/android/app/src/main/java/com/uncounted/app/service/SttProcessingService.java) -- 5 connections
  - -> references -> [[onnxsttrunner]]
  - -> references -> [[wavparser]]
  - -> implements -> [[embeddingextractor]]
  - -> references -> [[baseapiclient]]
  - <- guides <- [[android-documentation]]
- **WavParser** (/Users/gdash/project/uncounted-app/android/app/src/main/java/com/uncounted/app/audio/WavParser.java) -- 4 connections
  - -> uses -> [[okhttpclient]]
  - <- references <- [[sttprocessingservice]]
  - <- references <- [[onnxsttrunner]]
  - <- references <- [[audiodecoderplugin]]
- **BaseApiClient** (/Users/gdash/project/uncounted-app/android/app/src/main/java/com/uncounted/app/api/BaseApiClient.java) -- 3 connections
  - -> uses -> [[okhttpclient]]
  - <- references <- [[sttprocessingservice]]
  - <- inherits <- [[sessionapiclient]]
- **OkHttpClient** (https://square.github.io/okhttp/5.x/okhttp/okhttp3/-ok-http-client/index.html) -- 2 connections
  - <- uses <- [[baseapiclient]]
  - <- uses <- [[wavparser]]
- **OnnxSttRunner** (/Users/gdash/project/uncounted-app/android/app/src/main/java/com/uncounted/app/audio/OnnxSttRunner.java) -- 2 connections
  - -> references -> [[wavparser]]
  - <- references <- [[sttprocessingservice]]
- **Android Documentation** (https://developer.android.com/topic/performance/memory-management) -- 1 connections
  - -> guides -> [[sttprocessingservice]]
- **AudioDecoderPlugin** (/Users/gdash/project/uncounted-app/android/app/src/main/java/com/uncounted/app/audio/AudioDecoderPlugin.java) -- 1 connections
  - -> references -> [[wavparser]]
- **EmbeddingExtractor** (/Users/gdash/project/uncounted-app/android/app/src/main/java/com/uncounted/app/audio/EmbeddingExtractor.java) -- 1 connections
  - <- implements <- [[sttprocessingservice]]
- **SessionApiClient** (/Users/gdash/project/uncounted-app/android/app/src/main/java/com/uncounted/app/api/SessionApiClient.java) -- 1 connections
  - -> inherits -> [[baseapiclient]]

## Internal Relationships
- Android Documentation -> guides -> SttProcessingService [EXTRACTED]
- AudioDecoderPlugin -> references -> WavParser [EXTRACTED]
- BaseApiClient -> uses -> OkHttpClient [EXTRACTED]
- OnnxSttRunner -> references -> WavParser [EXTRACTED]
- SessionApiClient -> inherits -> BaseApiClient [EXTRACTED]
- SttProcessingService -> references -> OnnxSttRunner [EXTRACTED]
- SttProcessingService -> references -> WavParser [EXTRACTED]
- SttProcessingService -> implements -> EmbeddingExtractor [EXTRACTED]
- SttProcessingService -> references -> BaseApiClient [EXTRACTED]
- WavParser -> uses -> OkHttpClient [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 SttProcessingService, WavParser, BaseApiClient를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 AudioDecoderPlugin.java, BaseApiClient.java, EmbeddingExtractor.java, OnnxSttRunner.java, SessionApiClient.java이다.
