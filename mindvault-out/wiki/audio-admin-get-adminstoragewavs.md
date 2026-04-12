# Audio admin & GET /admin/storage/wavs
Cohesion: 0.50 | Nodes: 4

## Key Nodes
- **Audio admin** (path) -- 3 connections
  - -> related_to -> [[get-adminstoragewavs]]
  - -> related_to -> [[post-adminstoragesigned-url]]
  - -> related_to -> [[post-adminsync-audio-urls]]
- **GET /admin/storage/wavs** (path) -- 1 connections
  - <- related_to <- [[audio-admin]]
- **POST /admin/storage/signed-url** (path) -- 1 connections
  - <- related_to <- [[audio-admin]]
- **POST /admin/sync-audio-urls** (path) -- 1 connections
  - <- related_to <- [[audio-admin]]

## Internal Relationships
- Audio admin -> related_to -> GET /admin/storage/wavs [EXTRACTED]
- Audio admin -> related_to -> POST /admin/storage/signed-url [EXTRACTED]
- Audio admin -> related_to -> POST /admin/sync-audio-urls [EXTRACTED]

## Cross-Community Connections

## Context
이 커뮤니티는 Audio admin, GET /admin/storage/wavs, POST /admin/storage/signed-url를 중심으로 related_to 관계로 연결되어 있다. 주요 소스 파일은 path이다.
