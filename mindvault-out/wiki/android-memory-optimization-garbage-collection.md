# Android Memory Optimization & Garbage Collection
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Android Memory Optimization** (/Users/gdash/project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/topic.txt) -- 10 connections
  - -> related_to -> [[garbage-collection]]
  - -> references -> [[memory-profiler]]
  - -> references -> [[leak-canary]]
  - -> related_to -> [[native-memory-allocation]]
  - -> related_to -> [[bitmap-memory-management]]
  - -> related_to -> [[resource-management]]
  - -> references -> [[proguard]]
  - -> related_to -> [[jvm-options]]
  - -> related_to -> [[object-pooling]]
  - <- related_to <- [[view-recycling]]
- **Garbage Collection** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 2 connections
  - -> related_to -> [[memory-leaks]]
  - <- related_to <- [[android-memory-optimization]]
- **Bitmap Memory Management** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- related_to <- [[android-memory-optimization]]
- **JVM Options** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- related_to <- [[android-memory-optimization]]
- **Leak Canary** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- references <- [[android-memory-optimization]]
- **Memory Leaks** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- related_to <- [[garbage-collection]]
- **Memory Profiler** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- references <- [[android-memory-optimization]]
- **Native Memory Allocation** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- related_to <- [[android-memory-optimization]]
- **Object Pooling** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- related_to <- [[android-memory-optimization]]
- **ProGuard** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- references <- [[android-memory-optimization]]
- **Resource Management** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - <- related_to <- [[android-memory-optimization]]
- **View Recycling** (/Users/gdash/project/uncounted-project/uncounted-app/.research/20260323-001909-안드로이드-메모리-최적화를-위해서-해야되는-부분이-무엇인지-조사해주세요/gemini_prompt.txt) -- 1 connections
  - -> related_to -> [[android-memory-optimization]]

## Internal Relationships
- Android Memory Optimization -> related_to -> Garbage Collection [EXTRACTED]
- Android Memory Optimization -> references -> Memory Profiler [EXTRACTED]
- Android Memory Optimization -> references -> Leak Canary [EXTRACTED]
- Android Memory Optimization -> related_to -> Native Memory Allocation [INFERRED]
- Android Memory Optimization -> related_to -> Bitmap Memory Management [INFERRED]
- Android Memory Optimization -> related_to -> Resource Management [EXTRACTED]
- Android Memory Optimization -> references -> ProGuard [EXTRACTED]
- Android Memory Optimization -> related_to -> JVM Options [INFERRED]
- Android Memory Optimization -> related_to -> Object Pooling [INFERRED]
- Garbage Collection -> related_to -> Memory Leaks [INFERRED]
- View Recycling -> related_to -> Android Memory Optimization [INFERRED]

## Cross-Community Connections

## Context
이 커뮤니티는 Android Memory Optimization, Garbage Collection, Bitmap Memory Management를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 gemini_prompt.txt, topic.txt이다.
