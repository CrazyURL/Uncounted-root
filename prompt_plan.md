---
title: "계획 파일 관리 시스템"
status: active
created: 2026-04-16
type: chore
---

# 계획 파일 관리 시스템

상태: **구현 진행 중** (2026-04-16)

## 요약

`/plan` 명령의 저장 방식을 단일 파일(`prompt_plan.md`)에서 `plans/` 디렉토리 개별 파일로 변경.
`prompt_plan.md`는 활성 계획의 복사본으로 하위 호환 유지.

## 변경 사항

- [x] `plans/` 디렉토리 생성
- [x] 기존 계획 마이그레이션 (agent-sync, labeling-ui)
- [ ] `/plan` 명령 후처리 섹션 수정

## 파일 네이밍: `YYYYMMDD-HHMM-slug.md`

## 워크플로우
1. `/plan` → 계획 수립
2. 확인 → `plans/YYYYMMDD-HHMM-slug.md` 저장
3. `prompt_plan.md`에 복사 (하위 호환)
4. Gemini에게 핸드오프
