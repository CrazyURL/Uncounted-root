"""GPU 서버 환경 점검 — fine-tune 가능성"""
import sys
print(f"python={sys.version.split()[0]}")
try:
    import transformers, torch
    print(f"transformers={transformers.__version__}")
    print(f"torch={torch.__version__}")
    print(f"cuda_available={torch.cuda.is_available()}")
    if torch.cuda.is_available():
        print(f"device={torch.cuda.get_device_name(0)}")
        print(f"vram_gb={torch.cuda.get_device_properties(0).total_memory/1e9:.1f}")
        print(f"vram_free_gb={torch.cuda.mem_get_info()[0]/1e9:.1f}")
except Exception as e:
    print(f"import_err: {e}")
for pkg in ("peft", "datasets", "evaluate", "accelerate", "bitsandbytes"):
    try:
        m = __import__(pkg)
        print(f"{pkg}={m.__version__}")
    except Exception:
        print(f"{pkg}=MISSING")
