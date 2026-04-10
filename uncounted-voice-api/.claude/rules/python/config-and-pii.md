# Configuration & PII Masking

## Environment Variables

| Variable | Default | Notes |
|----------|---------|-------|
| `MODEL_SIZE` | `large-v3` | WhisperX model size |
| `DEVICE` | `cuda` | `cuda` or `cpu` |
| `COMPUTE_TYPE` | `float16` | Model precision |
| `LANGUAGE` | `ko` | Target language |
| `BATCH_SIZE` | `4` | Transcription batch size |
| `HF_TOKEN` | (none) | HuggingFace token; required for speaker diarization |
| `TEMP_DIR` | `/dev/shm/stt-temp` | Upload temp storage (RAM disk) |
| `RESULTS_DIR` | `/dev/shm/stt-results` | Result JSON storage |
| `MAX_UPLOAD_SIZE` | 100MB | Upload size limit |

## PII Masking Details

`pii_masker.py` handles Korean-specific PII: resident registration numbers, driver's license, passport, card numbers, email, phone, bank accounts, IP addresses. Korean name masking is opt-in (`enable_name_masking`) and uses a surname list + context heuristics with an extensive exclude-prefix set to avoid false positives on common Korean words that start with surname characters.
