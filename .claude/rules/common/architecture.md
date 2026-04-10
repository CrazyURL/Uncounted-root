# Architecture Patterns

## Encrypted Communication (All Projects)

All API requests/responses are encrypted with AES-256-GCM. Key shared via `ENCRYPTION_KEY` env var.

```
Request: { enc_data: "<base64url(IV|AuthTag|Ciphertext)>" }
Response: base64url(IV|AuthTag|Ciphertext)@enc_uncounted
```

## Auth Flow

- No Supabase SDK client-side — all auth goes through `/api/auth/*` backend
- Tokens: httpOnly Cookie (`uncounted_session` 1h, `uncounted_refresh` 90d) + in-memory Bearer
- On 401 → auto refresh once → logout on failure
- Admin check: `app_metadata.role === 'admin'`

## API Client Pattern

App and Admin share the same `apiFetch<T>()` wrapper:
- AES-256-GCM auto encrypt/decrypt
- `Authorization: Bearer` header auto-attached
- Built-in 401 auto-refresh
