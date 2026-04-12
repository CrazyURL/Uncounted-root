# _apiFetch & refreshTokenOnce
Cohesion: 0.18 | Nodes: 16

## Key Nodes
- **_apiFetch** (uncounted-app/src/lib/api/client.ts) -- 12 connections
  - -> calls -> [[unresolvedrefparse]]
  - -> calls -> [[unresolvedrefstringify]]
  - -> calls -> [[unresolvedrefencryptdata]]
  - -> calls -> [[unresolvedreffetch]]
  - -> calls -> [[unresolvedrefapifetch]]
  - -> calls -> [[unresolvedrefrefreshtokenonce]]
  - -> calls -> [[unresolvedrefsetauthtoken]]
  - -> calls -> [[unresolvedrefsetrefreshtoken]]
  - -> calls -> [[unresolvedrefdispatchevent]]
  - -> calls -> [[unresolvedrefjson]]
  - -> calls -> [[unresolvedrefdecryptresponse]]
  - <- contains <- [[client]]
- **refreshTokenOnce** (uncounted-app/src/lib/api/client.ts) -- 9 connections
  - -> calls -> [[unresolvedrefrefreshtokenifnewtokensetauthtokennewtokenifnewrefreshtokensetrefreshtokennewrefreshtokenreturntruereturnfalsecatchreturnfalsefinallyrefreshpromisenull]]
  - -> calls -> [[unresolvedreffetch]]
  - -> calls -> [[unresolvedrefstringify]]
  - -> calls -> [[unresolvedrefencryptdata]]
  - -> calls -> [[unresolvedrefjson]]
  - -> calls -> [[unresolvedrefdecryptresponse]]
  - -> calls -> [[unresolvedrefsetauthtoken]]
  - -> calls -> [[unresolvedrefsetrefreshtoken]]
  - <- contains <- [[client]]
- **client** (uncounted-app/src/lib/api/client.ts) -- 3 connections
  - -> contains -> [[refreshtokenonce]]
  - -> contains -> [[apifetch]]
  - -> imports -> [[unresolvedrefcrypto]]
- **__unresolved__::ref::decryptresponse** () -- 2 connections
  - <- calls <- [[refreshtokenonce]]
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::encryptdata** () -- 2 connections
  - <- calls <- [[refreshtokenonce]]
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::fetch** () -- 2 connections
  - <- calls <- [[refreshtokenonce]]
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::json** () -- 2 connections
  - <- calls <- [[refreshtokenonce]]
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::setauthtoken** () -- 2 connections
  - <- calls <- [[refreshtokenonce]]
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::setrefreshtoken** () -- 2 connections
  - <- calls <- [[refreshtokenonce]]
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::stringify** () -- 2 connections
  - <- calls <- [[refreshtokenonce]]
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::_apifetch** () -- 1 connections
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::_crypto_** () -- 1 connections
  - <- imports <- [[client]]
- **__unresolved__::ref::dispatchevent** () -- 1 connections
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::parse** () -- 1 connections
  - <- calls <- [[apifetch]]
- **__unresolved__::ref::refresh_token_________if__newtoken______________setauthtoken_newtoken____________if__newrefreshtoken__setrefreshtoken_newrefreshtoken____________return_true_________________________return_false_______catch_________return_false_______finally__________refreshpromise___null___________** () -- 1 connections
  - <- calls <- [[refreshtokenonce]]
- **__unresolved__::ref::refreshtokenonce** () -- 1 connections
  - <- calls <- [[apifetch]]

## Internal Relationships
- _apiFetch -> calls -> __unresolved__::ref::parse [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::stringify [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::encryptdata [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::fetch [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::_apifetch [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::refreshtokenonce [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::setauthtoken [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::setrefreshtoken [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::dispatchevent [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::json [EXTRACTED]
- _apiFetch -> calls -> __unresolved__::ref::decryptresponse [EXTRACTED]
- refreshTokenOnce -> calls -> __unresolved__::ref::refresh_token_________if__newtoken______________setauthtoken_newtoken____________if__newrefreshtoken__setrefreshtoken_newrefreshtoken____________return_true_________________________return_false_______catch_________return_false_______finally__________refreshpromise___null___________ [EXTRACTED]
- refreshTokenOnce -> calls -> __unresolved__::ref::fetch [EXTRACTED]
- refreshTokenOnce -> calls -> __unresolved__::ref::stringify [EXTRACTED]
- refreshTokenOnce -> calls -> __unresolved__::ref::encryptdata [EXTRACTED]
- refreshTokenOnce -> calls -> __unresolved__::ref::json [EXTRACTED]
- refreshTokenOnce -> calls -> __unresolved__::ref::decryptresponse [EXTRACTED]
- refreshTokenOnce -> calls -> __unresolved__::ref::setauthtoken [EXTRACTED]
- refreshTokenOnce -> calls -> __unresolved__::ref::setrefreshtoken [EXTRACTED]
- client -> contains -> refreshTokenOnce [EXTRACTED]
- client -> contains -> _apiFetch [EXTRACTED]
- client -> imports -> __unresolved__::ref::_crypto_ [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 _apiFetch, refreshTokenOnce, client를 중심으로 calls 관계로 연결되어 있다. 주요 소스 파일은 client.ts이다.
