# 엣지케이스 정의 (5개) & EC-01: GlobalConsent=ON + SKU 참여 OFF 후 신규 데이터 생성
Cohesion: 0.33 | Nodes: 6

## Key Nodes
- **엣지케이스 정의 (5개)** (uncounted-docs/앱/consent-design-spec.md) -- 5 connections
  - -> contains -> [[ec-01-globalconsenton-sku-off]]
  - -> contains -> [[ec-02-private-globalconsent-on]]
  - -> contains -> [[ec-03]]
  - -> contains -> [[ec-04-globalconsent-off]]
  - -> contains -> [[ec-05-supabase]]
- **EC-01: GlobalConsent=ON + SKU 참여 OFF 후 신규 데이터 생성** (uncounted-docs/앱/consent-design-spec.md) -- 1 connections
  - <- contains <- [[5]]
- **EC-02: 수동 PRIVATE 설정 후 GlobalConsent ON 전환 + 일괄 적용** (uncounted-docs/앱/consent-design-spec.md) -- 1 connections
  - <- contains <- [[5]]
- **EC-03: 동의 버전 변경 시 과거 레코드 처리** (uncounted-docs/앱/consent-design-spec.md) -- 1 connections
  - <- contains <- [[5]]
- **EC-04: 일괄 적용 중 GlobalConsent OFF 전환** (uncounted-docs/앱/consent-design-spec.md) -- 1 connections
  - <- contains <- [[5]]
- **EC-05: Supabase 미연결 환경에서 일괄 적용 시도** (uncounted-docs/앱/consent-design-spec.md) -- 1 connections
  - <- contains <- [[5]]

## Internal Relationships
- 엣지케이스 정의 (5개) -> contains -> EC-01: GlobalConsent=ON + SKU 참여 OFF 후 신규 데이터 생성 [EXTRACTED]
- 엣지케이스 정의 (5개) -> contains -> EC-02: 수동 PRIVATE 설정 후 GlobalConsent ON 전환 + 일괄 적용 [EXTRACTED]
- 엣지케이스 정의 (5개) -> contains -> EC-03: 동의 버전 변경 시 과거 레코드 처리 [EXTRACTED]
- 엣지케이스 정의 (5개) -> contains -> EC-04: 일괄 적용 중 GlobalConsent OFF 전환 [EXTRACTED]
- 엣지케이스 정의 (5개) -> contains -> EC-05: Supabase 미연결 환경에서 일괄 적용 시도 [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 엣지케이스 정의 (5개), EC-01: GlobalConsent=ON + SKU 참여 OFF 후 신규 데이터 생성, EC-02: 수동 PRIVATE 설정 후 GlobalConsent ON 전환 + 일괄 적용를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 consent-design-spec.md이다.
