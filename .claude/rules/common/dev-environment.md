# Development Environment

## Environment Separation

| Env | API | App | Admin |
|-----|-----|-----|-------|
| local | `localhost:3001` | `localhost:5173` | `localhost:15173` |
| dev | Render dev | Android dev flavor | -- |
| live | Render prod | Android live flavor | Vite prod build |

## Dev Server Commands

```bash
cd uncounted-api && npm run dev        # port 3001
cd uncounted-app && npm run dev        # port 5173
cd uncounted-admin && yarn dev         # port 15173
```

## Environment Variables

- API: `.env` (SUPABASE_URL, S3 settings, ENCRYPTION_KEY, CORS_ORIGIN)
- App: `.env` / `.env.development` / `.env.production` (VITE_API_URL, VITE_ENCRYPTION_KEY)
- App native: `android/local.properties` (flavor API_URL, ENCRYPTION_KEY, signing keystore)
- Admin: `.env` (VITE_API_URL)
- All env files are `.gitignore`d

## Caveats

- Each subfolder is an independent Git repo — commit/PR per project
- `uncounted-env/` is env backup only — do not edit directly
- ONNX model files (`*.onnx`) are git-excluded — stored locally at `android/app/src/main/assets/stt/`
