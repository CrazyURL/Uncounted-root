#!/bin/bash
# cleanup-pass.sh
# Stop 훅: 구현 완료 후 불필요한 방어 코드 패턴 감지
# autonomous-loops "cleanup pass" 개념 기반

set -uo pipefail

WORKING_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"

# git 변경 파일만 검사
CHANGED_FILES=$(git -C "$WORKING_DIR" diff --name-only HEAD 2>/dev/null)
STAGED_FILES=$(git -C "$WORKING_DIR" diff --cached --name-only 2>/dev/null)
ALL_FILES=$(echo -e "$CHANGED_FILES\n$STAGED_FILES" | sort -u | grep -E '\.(ts|tsx|js|jsx|py)$' | grep -v 'test\|spec\|\.d\.ts' | head -20)

[ -z "$ALL_FILES" ] && exit 0

ISSUES=()

check_file() {
  local file="$WORKING_DIR/$1"
  [ -f "$file" ] || return

  # 1. 빈 catch 블록 (에러 삼킴)
  if grep -nE 'catch\s*\([^)]*\)\s*\{\s*\}' "$file" 2>/dev/null | grep -q .; then
    local line
    line=$(grep -nE 'catch\s*\([^)]*\)\s*\{\s*\}' "$file" | head -1 | cut -d: -f1)
    ISSUES+=("[$1:$line] 빈 catch 블록 — 에러 삼킴")
  fi

  # 2. 중복 null 가드 (이미 타입이 보장된 경우)
  if grep -nE 'if\s*\(.*!=\s*null.*!=\s*null' "$file" 2>/dev/null | grep -q .; then
    local line
    line=$(grep -nE 'if\s*\(.*!=\s*null.*!=\s*null' "$file" | head -1 | cut -d: -f1)
    ISSUES+=("[$1:$line] 중복 null 체크 패턴")
  fi

  # 3. TODO/FIXME/HACK 잔류 (구현 완료 표시인데 남은 것)
  local todo_count
  todo_count=$(grep -cE '(TODO|FIXME|HACK):' "$file" 2>/dev/null || echo 0)
  if [ "$todo_count" -gt 0 ]; then
    ISSUES+=("[$1] TODO/FIXME/HACK $todo_count 개 잔류")
  fi

  # 4. console.log 잔류 (디버그용)
  if grep -nE '^\s*console\.(log|debug|warn)\(' "$file" 2>/dev/null | grep -v '\.test\.' | grep -q .; then
    local line
    line=$(grep -nE '^\s*console\.(log|debug|warn)\(' "$file" | head -1 | cut -d: -f1)
    ISSUES+=("[$1:$line] console.log/debug 잔류")
  fi

  # 5. any 타입 남용 (TypeScript)
  if [[ "$file" == *.ts || "$file" == *.tsx ]]; then
    local any_count
    any_count=$(grep -cE ':\s*any(\s|[,;)\]>])' "$file" 2>/dev/null || echo 0)
    if [ "$any_count" -gt 2 ]; then
      ISSUES+=("[$1] any 타입 $any_count 개 — 타입 좁히기 고려")
    fi
  fi
}

while IFS= read -r file; do
  [ -n "$file" ] && check_file "$file"
done <<< "$ALL_FILES"

[ "${#ISSUES[@]}" -eq 0 ] && exit 0

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  [CleanupPass] 코드 정리 제안 (${#ISSUES[@]}건)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
for issue in "${ISSUES[@]}"; do
  echo "  ⚠  $issue"
done
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

exit 0
