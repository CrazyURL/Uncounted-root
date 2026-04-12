# Environment Variables & Development Environment
Cohesion: 0.12 | Nodes: 16

## Key Nodes
- **Environment Variables** (path) -- 8 connections
  - -> references -> [[supabaseurl]]
  - -> references -> [[encryptionkey]]
  - -> references -> [[corsorigin]]
  - -> references -> [[hftoken]]
  - -> references -> [[hotwords]]
  - -> references -> [[initialprompt]]
  - -> references -> [[viteapiurl]]
  - <- related_to <- [[development-environment]]
- **Development Environment** (path) -- 4 connections
  - -> related_to -> [[environment-separation]]
  - -> related_to -> [[dev-server-commands]]
  - -> related_to -> [[environment-variables]]
  - -> related_to -> [[caveats]]
- **Caveats** (path) -- 3 connections
  - -> related_to -> [[gitignore]]
  - -> related_to -> [[onnx-model-files]]
  - <- related_to <- [[development-environment]]
- **ONNX model files** (path) -- 2 connections
  - -> references -> [[androidappsrcmainassetsstt]]
  - <- related_to <- [[caveats]]
- **SUPABASE_URL** (path) -- 2 connections
  - <- implements <- [[unresolvedrefeapi]]
  - <- references <- [[environment-variables]]
- **__unresolved__::ref::eapi** () -- 1 connections
  - -> implements -> [[supabaseurl]]
- **.gitignore** (path) -- 1 connections
  - <- related_to <- [[caveats]]
- **android/app/src/main/assets/stt/** (path) -- 1 connections
  - <- references <- [[onnx-model-files]]
- **CORS_ORIGIN** (path) -- 1 connections
  - <- references <- [[environment-variables]]
- **Dev Server Commands** (path) -- 1 connections
  - <- related_to <- [[development-environment]]
- **ENCRYPTION_KEY** (path) -- 1 connections
  - <- references <- [[environment-variables]]
- **Environment Separation** (path) -- 1 connections
  - <- related_to <- [[development-environment]]
- **HF_TOKEN** (path) -- 1 connections
  - <- references <- [[environment-variables]]
- **HOTWORDS** (path) -- 1 connections
  - <- references <- [[environment-variables]]
- **INITIAL_PROMPT** (path) -- 1 connections
  - <- references <- [[environment-variables]]
- **VITE_API_URL** (path) -- 1 connections
  - <- references <- [[environment-variables]]

## Internal Relationships
- __unresolved__::ref::eapi -> implements -> SUPABASE_URL [EXTRACTED]
- Caveats -> related_to -> .gitignore [EXTRACTED]
- Caveats -> related_to -> ONNX model files [EXTRACTED]
- Development Environment -> related_to -> Environment Separation [EXTRACTED]
- Development Environment -> related_to -> Dev Server Commands [EXTRACTED]
- Development Environment -> related_to -> Environment Variables [EXTRACTED]
- Development Environment -> related_to -> Caveats [EXTRACTED]
- Environment Variables -> references -> SUPABASE_URL [EXTRACTED]
- Environment Variables -> references -> ENCRYPTION_KEY [EXTRACTED]
- Environment Variables -> references -> CORS_ORIGIN [EXTRACTED]
- Environment Variables -> references -> HF_TOKEN [EXTRACTED]
- Environment Variables -> references -> HOTWORDS [EXTRACTED]
- Environment Variables -> references -> INITIAL_PROMPT [EXTRACTED]
- Environment Variables -> references -> VITE_API_URL [EXTRACTED]
- ONNX model files -> references -> android/app/src/main/assets/stt/ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Environment Variables, Development Environment, Caveats를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 path이다.
