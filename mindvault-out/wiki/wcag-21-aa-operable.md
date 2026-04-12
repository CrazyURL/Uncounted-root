# WCAG 2.1 AA & Operable
Cohesion: 0.18 | Nodes: 11

## Key Nodes
- **WCAG 2.1 AA** (accessibility_checklist.md) -- 4 connections
  - -> related_to -> [[perceivable]]
  - -> related_to -> [[operable]]
  - -> related_to -> [[understandable]]
  - -> related_to -> [[robust]]
- **Operable** (accessibility_checklist.md) -- 3 connections
  - -> references -> [[keyboard-accessibility]]
  - -> references -> [[touch-target-size]]
  - <- related_to <- [[wcag-21-aa]]
- **Perceivable** (accessibility_checklist.md) -- 3 connections
  - -> references -> [[color-contrast]]
  - -> references -> [[text-alternatives]]
  - <- related_to <- [[wcag-21-aa]]
- **Robust** (accessibility_checklist.md) -- 2 connections
  - -> references -> [[semantic-html]]
  - <- related_to <- [[wcag-21-aa]]
- **Understandable** (accessibility_checklist.md) -- 2 connections
  - -> references -> [[error-handling]]
  - <- related_to <- [[wcag-21-aa]]
- **Color Contrast** (accessibility_checklist.md) -- 1 connections
  - <- references <- [[perceivable]]
- **Error Handling** (accessibility_checklist.md) -- 1 connections
  - <- references <- [[understandable]]
- **Keyboard Accessibility** (accessibility_checklist.md) -- 1 connections
  - <- references <- [[operable]]
- **Semantic HTML** (accessibility_checklist.md) -- 1 connections
  - <- references <- [[robust]]
- **Text Alternatives** (accessibility_checklist.md) -- 1 connections
  - <- references <- [[perceivable]]
- **Touch Target Size** (accessibility_checklist.md) -- 1 connections
  - <- references <- [[operable]]

## Internal Relationships
- Operable -> references -> Keyboard Accessibility [EXTRACTED]
- Operable -> references -> Touch Target Size [EXTRACTED]
- Perceivable -> references -> Color Contrast [EXTRACTED]
- Perceivable -> references -> Text Alternatives [EXTRACTED]
- Robust -> references -> Semantic HTML [EXTRACTED]
- Understandable -> references -> Error Handling [EXTRACTED]
- WCAG 2.1 AA -> related_to -> Perceivable [EXTRACTED]
- WCAG 2.1 AA -> related_to -> Operable [EXTRACTED]
- WCAG 2.1 AA -> related_to -> Understandable [EXTRACTED]
- WCAG 2.1 AA -> related_to -> Robust [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 WCAG 2.1 AA, Operable, Perceivable를 중심으로 references 관계로 연결되어 있다. 주요 소스 파일은 accessibility_checklist.md이다.
