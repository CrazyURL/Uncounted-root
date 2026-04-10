#!/bin/bash
# Migration Guard - PostToolUse Write Hook
# 마이그레이션 파일 작성 시 위험 패턴 감지
#
# Hook trigger: PostToolUse Write
# Exit codes: 0 = 허용, 2 = 경고 (차단하지 않고 피드백만)

INPUT=$(cat)

FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('file_path', ''))
except:
    print('')
" 2>/dev/null)

# 마이그레이션 SQL 파일인지 확인
if [[ "$FILE_PATH" != *"migrations/"* ]] || [[ "$FILE_PATH" != *.sql ]]; then
    exit 0
fi

CONTENT=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('content', ''))
except:
    print('')
" 2>/dev/null)

if [ -z "$CONTENT" ]; then
    exit 0
fi

WARNINGS=()

# 1. 컬럼 직접 RENAME — Expand-Contract 미적용 위험
if echo "$CONTENT" | grep -iqE "RENAME\s+COLUMN"; then
    WARNINGS+=("RENAME COLUMN 감지 — Expand-Contract 패턴 적용 필요: 새 컬럼 추가 → 백필 → 이전 컬럼 제거")
fi

# 2. DROP COLUMN — 데이터 손실 위험
if echo "$CONTENT" | grep -iqE "DROP\s+COLUMN"; then
    WARNINGS+=("DROP COLUMN 감지 — 이전 단계(백필/이관 완료)가 별도 마이그레이션으로 선행됐는지 확인")
fi

# 3. DROP TABLE — 데이터 손실 위험
if echo "$CONTENT" | grep -iqE "DROP\s+TABLE"; then
    WARNINGS+=("DROP TABLE 감지 — 참조 무결성 및 다운타임 영향 확인 필요")
fi

# 4. NOT NULL 컬럼 추가 without DEFAULT — 기존 행 실패 위험
if echo "$CONTENT" | grep -iqE "ADD\s+COLUMN.+NOT\s+NULL" && ! echo "$CONTENT" | grep -iqE "ADD\s+COLUMN.+DEFAULT"; then
    WARNINGS+=("NOT NULL 컬럼 추가에 DEFAULT 없음 — 기존 행이 있으면 마이그레이션 실패. DEFAULT 또는 nullable 후 백필 권장")
fi

# 5. 컬럼 타입 변경 — 암묵적 캐스트 실패 위험
if echo "$CONTENT" | grep -iqE "ALTER\s+COLUMN.+(TYPE|SET\s+DATA\s+TYPE)"; then
    WARNINGS+=("컬럼 타입 변경 감지 — 기존 데이터 캐스트 실패 가능. USING 절 또는 단계별 마이그레이션 검토")
fi

# 6. CREATE INDEX without CONCURRENTLY — 테이블 잠금 위험
if echo "$CONTENT" | grep -iE "CREATE\s+(UNIQUE\s+)?INDEX" | grep -iv "CONCURRENTLY" | grep -q .; then
    WARNINGS+=("CREATE INDEX without CONCURRENTLY — 대용량 테이블 잠금 발생. CREATE INDEX CONCURRENTLY 사용 필요")
fi

# 7. DDL + DML 혼용 — 스키마/데이터 마이그레이션 분리 원칙 위반
HAS_DDL=$(echo "$CONTENT" | grep -icE "^\s*(CREATE|ALTER|DROP)\s+(TABLE|INDEX)" 2>/dev/null || echo 0)
HAS_DML=$(echo "$CONTENT" | grep -icE "^\s*(INSERT|UPDATE|DELETE)\s+" 2>/dev/null || echo 0)
if [ "$HAS_DDL" -gt 0 ] && [ "$HAS_DML" -gt 0 ]; then
    WARNINGS+=("DDL과 DML 혼용 감지 — 스키마 변경과 데이터 마이그레이션은 별도 파일로 분리 필요")
fi

# 8. 대량 UPDATE without LIMIT — 배치 처리 누락
if echo "$CONTENT" | grep -iqE "^\s*UPDATE\s+"; then
    if ! echo "$CONTENT" | grep -iqE "\bLIMIT\b"; then
        WARNINGS+=("UPDATE without LIMIT — 대량 업데이트 시 LIMIT 배치 처리 필요 (예: WHERE ctid IN (SELECT ctid ... LIMIT 1000))")
    fi
fi

# 경고 출력
if [ ${#WARNINGS[@]} -gt 0 ]; then
    echo "" >&2
    echo "[MigrationGuard] ⚠️  $(basename "$FILE_PATH") — 위험 패턴 감지:" >&2
    for w in "${WARNINGS[@]}"; do
        echo "  → $w" >&2
    done
    echo "" >&2
    echo "  참고: database-migrations 스킬의 Expand-Contract 패턴을 확인하세요." >&2
    echo "" >&2
fi

exit 0
