# TestPIIMasking & __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text
Cohesion: 0.23 | Nodes: 13

## Key Nodes
- **TestPIIMasking** (uncounted-voice-api/tests/test_pii.py) -- 9 connections
  - -> contains -> [[testphonenumber]]
  - -> contains -> [[testresidentnumber]]
  - -> contains -> [[testemail]]
  - -> contains -> [[testcardnumber]]
  - -> contains -> [[testnamemaskingenabled]]
  - -> contains -> [[testnamemaskingdisabled]]
  - -> contains -> [[testexcludecommonwords]]
  - -> contains -> [[testsegmentsmasking]]
  - <- contains <- [[testpii]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text** () -- 7 connections
  - <- calls <- [[testphonenumber]]
  - <- calls <- [[testresidentnumber]]
  - <- calls <- [[testemail]]
  - <- calls <- [[testcardnumber]]
  - <- calls <- [[testnamemaskingenabled]]
  - <- calls <- [[testnamemaskingdisabled]]
  - <- calls <- [[testexcludecommonwords]]
- **test_segments_masking** (uncounted-voice-api/tests/test_pii.py) -- 3 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmasksegments]]
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedreflen]]
  - <- contains <- [[testpiimasking]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_segments** () -- 2 connections
  - <- calls <- [[testsegmentsmasking]]
  - <- calls <- [[transcribe]]
- **test_pii** (uncounted-voice-api/tests/test_pii.py) -- 2 connections
  - -> contains -> [[testpiimasking]]
  - -> imports -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpiiservice]]
- **test_card_number** (uncounted-voice-api/tests/test_pii.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmasktext]]
  - <- contains <- [[testpiimasking]]
- **test_email** (uncounted-voice-api/tests/test_pii.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmasktext]]
  - <- contains <- [[testpiimasking]]
- **test_exclude_common_words** (uncounted-voice-api/tests/test_pii.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmasktext]]
  - <- contains <- [[testpiimasking]]
- **test_name_masking_disabled** (uncounted-voice-api/tests/test_pii.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmasktext]]
  - <- contains <- [[testpiimasking]]
- **test_name_masking_enabled** (uncounted-voice-api/tests/test_pii.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmasktext]]
  - <- contains <- [[testpiimasking]]
- **test_phone_number** (uncounted-voice-api/tests/test_pii.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmasktext]]
  - <- contains <- [[testpiimasking]]
- **test_resident_number** (uncounted-voice-api/tests/test_pii.py) -- 2 connections
  - -> calls -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefmasktext]]
  - <- contains <- [[testpiimasking]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__pii_service** () -- 1 connections
  - <- imports <- [[testpii]]

## Internal Relationships
- TestPIIMasking -> contains -> test_phone_number [EXTRACTED]
- TestPIIMasking -> contains -> test_resident_number [EXTRACTED]
- TestPIIMasking -> contains -> test_email [EXTRACTED]
- TestPIIMasking -> contains -> test_card_number [EXTRACTED]
- TestPIIMasking -> contains -> test_name_masking_enabled [EXTRACTED]
- TestPIIMasking -> contains -> test_name_masking_disabled [EXTRACTED]
- TestPIIMasking -> contains -> test_exclude_common_words [EXTRACTED]
- TestPIIMasking -> contains -> test_segments_masking [EXTRACTED]
- test_pii -> contains -> TestPIIMasking [EXTRACTED]
- test_pii -> imports -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__pii_service [EXTRACTED]
- test_card_number -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text [EXTRACTED]
- test_email -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text [EXTRACTED]
- test_exclude_common_words -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text [EXTRACTED]
- test_name_masking_disabled -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text [EXTRACTED]
- test_name_masking_enabled -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text [EXTRACTED]
- test_phone_number -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text [EXTRACTED]
- test_resident_number -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text [EXTRACTED]
- test_segments_masking -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_segments [EXTRACTED]

## Cross-Community Connections
- test_segments_masking -> calls -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__len (-> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefpush-unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedreflen]])

## Context
이 커뮤니티는 TestPIIMasking, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__mask_text, test_segments_masking를 중심으로 contains 관계로 연결되어 있다. 주요 소스 파일은 test_pii.py이다.
