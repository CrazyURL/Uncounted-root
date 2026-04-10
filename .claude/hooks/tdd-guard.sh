#!/bin/bash
# tdd-guard.sh
# PostToolUse Write 훅: 새 구현 파일 작성 시 대응 테스트 파일 존재 여부 체크
# 테스트 없이 구현 파일만 만들면 경고

set -uo pipefail

# stdin에서 tool_input JSON 읽기
INPUT=$(cat)

# 작성된 파일 경로 추출
FILE_PATH=$(echo "$INPUT" | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    print(data.get('tool_input', {}).get('file_path', ''))
except:
    print('')
" 2>/dev/null || echo "")

# 경로가 없으면 스킵
[ -z "$FILE_PATH" ] && exit 0

# 파일명 추출
BASENAME=$(basename "$FILE_PATH")
DIRNAME=$(dirname "$FILE_PATH")
EXTENSION="${BASENAME##*.}"
NAME="${BASENAME%.*}"

# 테스트/설정/타입 파일이면 스킵
case "$BASENAME" in
  *.test.*|*.spec.*|*.d.ts|*.config.*|*.stories.*) exit 0 ;;
  index.*|types.*|constants.*|env.*) exit 0 ;;
esac

# 확장자 필터: 구현 파일만 체크
case "$EXTENSION" in
  ts|tsx|js|jsx|py|go|rs) ;;
  *) exit 0 ;;
esac

# 숨김 파일, node_modules, dist 등 스킵
case "$FILE_PATH" in
  */node_modules/*|*/dist/*|*/.next/*|*/build/*|*/__pycache__/*) exit 0 ;;
  */migrations/*|*/supabase/*) exit 0 ;;
esac

# 대응 테스트 파일 경로 후보 목록
TEST_CANDIDATES=(
  "${DIRNAME}/${NAME}.test.${EXTENSION}"
  "${DIRNAME}/${NAME}.spec.${EXTENSION}"
  "${DIRNAME}/__tests__/${NAME}.test.${EXTENSION}"
  "${DIRNAME}/__tests__/${NAME}.spec.${EXTENSION}"
)

# TypeScript의 경우 .tsx/.ts 교차 체크
if [ "$EXTENSION" = "tsx" ]; then
  TEST_CANDIDATES+=(
    "${DIRNAME}/${NAME}.test.ts"
    "${DIRNAME}/${NAME}.spec.ts"
  )
elif [ "$EXTENSION" = "ts" ]; then
  TEST_CANDIDATES+=(
    "${DIRNAME}/${NAME}.test.tsx"
    "${DIRNAME}/${NAME}.spec.tsx"
  )
fi

# 테스트 파일 존재 여부 확인
for TEST_FILE in "${TEST_CANDIDATES[@]}"; do
  if [ -f "$TEST_FILE" ]; then
    exit 0  # 테스트 파일 있음, 정상
  fi
done

# 테스트 파일 없음 → 경고
echo "" >&2
echo "[TDDGuard] ⚠️  테스트 파일 없음: $FILE_PATH" >&2
echo "[TDDGuard] 대응 테스트 파일을 작성하세요:" >&2
echo "[TDDGuard]   → ${DIRNAME}/${NAME}.test.${EXTENSION}" >&2
echo "[TDDGuard] TDD 워크플로우: 테스트 먼저(RED) → 구현(GREEN) → 리팩토링" >&2
echo "" >&2

exit 0  # 경고만, 블록하지 않음
