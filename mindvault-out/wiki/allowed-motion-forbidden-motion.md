# Allowed Motion & Forbidden Motion
Cohesion: 0.17 | Nodes: 12

## Key Nodes
- **Allowed Motion** (path) -- 9 connections
  - -> related_to -> [[forbidden-motion]]
  - <- related_to <- [[pr-review-check]]
  - <- references <- [[motiontokensts]]
  - <- implements <- [[assetcardtsx]]
  - <- implements <- [[skucardtsx]]
  - <- implements <- [[bottomsheetlabelertsx]]
  - <- implements <- [[badgestamptsx]]
  - <- implements <- [[rangevaluebartsx]]
  - <- references <- [[motionplaygroundpagetsx]]
- **Forbidden Motion** (path) -- 3 connections
  - <- related_to <- [[allowed-motion]]
  - <- related_to <- [[performance-check]]
  - <- references <- [[apptsx]]
- **App.tsx** (src/app/App.tsx) -- 1 connections
  - -> references -> [[forbidden-motion]]
- **AssetCard.tsx** (src/components/motion/AssetCard.tsx) -- 1 connections
  - -> implements -> [[allowed-motion]]
- **BadgeStamp.tsx** (src/components/motion/BadgeStamp.tsx) -- 1 connections
  - -> implements -> [[allowed-motion]]
- **BottomSheetLabeler.tsx** (src/components/motion/BottomSheetLabeler.tsx) -- 1 connections
  - -> implements -> [[allowed-motion]]
- **MotionPlaygroundPage.tsx** (src/pages/MotionPlaygroundPage.tsx) -- 1 connections
  - -> references -> [[allowed-motion]]
- **motionTokens.ts** (src/lib/motionTokens.ts) -- 1 connections
  - -> references -> [[allowed-motion]]
- **Performance Check** (path) -- 1 connections
  - -> related_to -> [[forbidden-motion]]
- **PR Review Check** (path) -- 1 connections
  - -> related_to -> [[allowed-motion]]
- **RangeValueBar.tsx** (src/components/motion/RangeValueBar.tsx) -- 1 connections
  - -> implements -> [[allowed-motion]]
- **SKUCard.tsx** (src/components/motion/SKUCard.tsx) -- 1 connections
  - -> implements -> [[allowed-motion]]

## Internal Relationships
- Allowed Motion -> related_to -> Forbidden Motion [EXTRACTED]
- App.tsx -> references -> Forbidden Motion [EXTRACTED]
- AssetCard.tsx -> implements -> Allowed Motion [EXTRACTED]
- BadgeStamp.tsx -> implements -> Allowed Motion [EXTRACTED]
- BottomSheetLabeler.tsx -> implements -> Allowed Motion [EXTRACTED]
- MotionPlaygroundPage.tsx -> references -> Allowed Motion [EXTRACTED]
- motionTokens.ts -> references -> Allowed Motion [EXTRACTED]
- Performance Check -> related_to -> Forbidden Motion [EXTRACTED]
- PR Review Check -> related_to -> Allowed Motion [EXTRACTED]
- RangeValueBar.tsx -> implements -> Allowed Motion [EXTRACTED]
- SKUCard.tsx -> implements -> Allowed Motion [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Allowed Motion, Forbidden Motion, App.tsx를 중심으로 implements 관계로 연결되어 있다. 주요 소스 파일은 App.tsx, AssetCard.tsx, BadgeStamp.tsx, BottomSheetLabeler.tsx, MotionPlaygroundPage.tsx이다.
