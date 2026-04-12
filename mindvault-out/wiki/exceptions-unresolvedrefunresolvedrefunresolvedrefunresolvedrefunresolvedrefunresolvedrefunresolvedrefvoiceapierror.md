# exceptions & __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__voiceapierror
Cohesion: 0.38 | Nodes: 7

## Key Nodes
- **exceptions** (uncounted-voice-api/app/core/exceptions.py) -- 4 connections
  - -> contains -> [[voiceapierror]]
  - -> contains -> [[tasknotfounderror]]
  - -> contains -> [[unsupportedformaterror]]
  - -> contains -> [[filetoolargeerror]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__voiceapierror** () -- 3 connections
  - <- extends <- [[tasknotfounderror]]
  - <- extends <- [[unsupportedformaterror]]
  - <- extends <- [[filetoolargeerror]]
- **FileTooLargeError** (uncounted-voice-api/app/core/exceptions.py) -- 2 connections
  - -> extends -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefvoiceapierror]]
  - <- contains <- [[exceptions]]
- **TaskNotFoundError** (uncounted-voice-api/app/core/exceptions.py) -- 2 connections
  - -> extends -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefvoiceapierror]]
  - <- contains <- [[exceptions]]
- **UnsupportedFormatError** (uncounted-voice-api/app/core/exceptions.py) -- 2 connections
  - -> extends -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefvoiceapierror]]
  - <- contains <- [[exceptions]]
- **VoiceAPIError** (uncounted-voice-api/app/core/exceptions.py) -- 2 connections
  - -> extends -> [[unresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefunresolvedrefexception]]
  - <- contains <- [[exceptions]]
- **__unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__exception** () -- 1 connections
  - <- extends <- [[voiceapierror]]

## Internal Relationships
- FileTooLargeError -> extends -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__voiceapierror [EXTRACTED]
- TaskNotFoundError -> extends -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__voiceapierror [EXTRACTED]
- UnsupportedFormatError -> extends -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__voiceapierror [EXTRACTED]
- VoiceAPIError -> extends -> __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__exception [EXTRACTED]
- exceptions -> contains -> VoiceAPIError [EXTRACTED]
- exceptions -> contains -> TaskNotFoundError [EXTRACTED]
- exceptions -> contains -> UnsupportedFormatError [EXTRACTED]
- exceptions -> contains -> FileTooLargeError [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 exceptions, __unresolved__::ref::__unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref____unresolved____ref__voiceapierror, FileTooLargeError를 중심으로 extends 관계로 연결되어 있다. 주요 소스 파일은 exceptions.py이다.
