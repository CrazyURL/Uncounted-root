# Configuration & PII Masking

## Environment Variables

| Variable | Default | Notes |
|----------|---------|-------|
| `ENV` | `dev` | Environment (`dev` / `live`) |
| `PORT` | `8001`(dev) / `8000`(live) | Server port |
| `MODEL_SIZE` | `large-v3` | WhisperX model size |
| `DEVICE` | `cuda` | `cuda` or `cpu` |
| `COMPUTE_TYPE` | `float16` | Model precision |
| `LANGUAGE` | `ko` | Target language |
| `BATCH_SIZE` | `4` | Transcription batch size |
| `HF_TOKEN` | (none) | HuggingFace token; required for speaker diarization |
| `HOTWORDS` | (none) | Proper noun hints (comma-separated, quotes required) |
| `INITIAL_PROMPT` | (none) | STT initial prompt (quotes required) |
| `TEMP_DIR` | `/dev/shm/stt-temp` | Upload temp storage (RAM disk) |
| `RESULTS_DIR` | `/dev/shm/stt-results` | Result JSON storage |
| `MAX_UPLOAD_SIZE` | `524288000` | Upload size limit (500MB) |

## PII Masking Details

`pii_masker.py` handles Korean-specific PII: resident registration numbers, driver's license, passport, card numbers, email, phone, bank accounts, IP addresses. Korean name masking is opt-in (`enable_name_masking`) and uses a surname list + context heuristics with an extensive exclude-prefix set to avoid false positives on common Korean words that start with surname characters.
