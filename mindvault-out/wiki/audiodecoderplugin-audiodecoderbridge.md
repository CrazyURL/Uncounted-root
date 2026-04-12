# AudioDecoderPlugin & audioDecoderBridge
Cohesion: 0.67 | Nodes: 3

## Key Nodes
- **AudioDecoderPlugin** (uncounted-app/android/app/src/main/java/com/uncounted/app/audio/AudioDecoderPlugin.java) -- 3 connections
  - -> implements -> [[audiodecoderplugintest]]
  - -> related_to -> [[audiodecoderbridge]]
  - <- references <- [[audiodecoderbridge]]
- **audioDecoderBridge** (uncounted-app/src/lib/audioDecoderBridge.ts) -- 2 connections
  - -> references -> [[audiodecoderplugin]]
  - <- related_to <- [[audiodecoderplugin]]
- **AudioDecoderPluginTest** (uncounted-app/src/test/java/com/uncounted/app/audio/AudioDecoderPluginTest.java) -- 1 connections
  - <- implements <- [[audiodecoderplugin]]

## Internal Relationships
- AudioDecoderPlugin -> implements -> AudioDecoderPluginTest [EXTRACTED]
- AudioDecoderPlugin -> related_to -> audioDecoderBridge [EXTRACTED]
- audioDecoderBridge -> references -> AudioDecoderPlugin [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 AudioDecoderPlugin, audioDecoderBridge, AudioDecoderPluginTest를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 AudioDecoderPlugin.java, AudioDecoderPluginTest.java, audioDecoderBridge.ts이다.
