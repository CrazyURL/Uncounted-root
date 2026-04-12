# Uncounted 관리자 운영 매뉴얼 & DB 테이블 참조
Cohesion: 0.15 | Nodes: 13

## Key Nodes
- **Uncounted 관리자 운영 매뉴얼** (uncounted-docs/어드민/admin-operations-manual.md) -- 9 connections
  - -> contains -> [[1]]
  - -> contains -> [[2]]
  - -> contains -> [[3]]
  - -> contains -> [[4]]
  - -> contains -> [[5]]
  - -> contains -> [[6]]
  - -> contains -> [[7]]
  - -> contains -> [[8]]
  - -> contains -> [[db]]
- **DB 테이블 참조** (uncounted-docs/어드민/admin-operations-manual.md) -- 3 connections
  - -> contains -> [[0]]
  - -> contains -> [[estimated-entry]]
  - <- contains <- [[uncounted]]
- **7. 중복 납품 방지** (uncounted-docs/어드민/admin-operations-manual.md) -- 2 connections
  - -> contains -> [[per-client]]
  - <- contains <- [[uncounted]]
- **"연결된 원장: 0건" 표시** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[db]]
- **1. 데이터 빌드 (추출)** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[uncounted]]
- **2. 납품 및 결제 수령** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[uncounted]]
- **3. 납품 확정 (정산 시작)** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[uncounted]]
- **4. 정산 배치 처리** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[uncounted]]
- **5. 지급 완료 처리** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[uncounted]]
- **6. 사용자 앱 반영 확인** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[uncounted]]
- **8. 캠페인 보상** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[uncounted]]
- **estimated entry 취소 필요** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[db]]
- **Per-client 모델** (uncounted-docs/어드민/admin-operations-manual.md) -- 1 connections
  - <- contains <- [[7]]

## Internal Relationships
- 7. 중복 납품 방지 -> contains -> Per-client 모델 [EXTRACTED]
- DB 테이블 참조 -> contains -> "연결된 원장: 0건" 표시 [EXTRACTED]
- DB 테이블 참조 -> contains -> estimated entry 취소 필요 [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> 1. 데이터 빌드 (추출) [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> 2. 납품 및 결제 수령 [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> 3. 납품 확정 (정산 시작) [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> 4. 정산 배치 처리 [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> 5. 지급 완료 처리 [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> 6. 사용자 앱 반영 확인 [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> 7. 중복 납품 방지 [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> 8. 캠페인 보상 [EXTRACTED]
- Uncounted 관리자 운영 매뉴얼 -> contains -> DB 테이블 참조 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Uncounted 관리자 운영 매뉴얼, DB 테이블 참조, 7. 중복 납품 방지를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 admin-operations-manual.md이다.
