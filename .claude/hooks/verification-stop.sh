#!/bin/bash
# verification-stop.sh
# Stop 훅: 세션 종료 전 변경된 서브프로젝트만 typecheck/lint/test 자동 검증
# 모노레포 구조: uncounted-api(npm), uncounted-app(npm), uncounted-admin(yarn)

set -uo pipefail

WORKING_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"

# 변경 파일 목록
CHANGED=$(git -C "$WORKING_DIR" diff --name-only HEAD 2>/dev/null || echo "")
STAGED=$(git -C "$WORKING_DIR" diff --cached --name-only 2>/dev/null || echo "")
ALL_CHANGED=$(printf '%s\n%s' "$CHANGED" "$STAGED" | sort -u | grep -v '^$' || echo "")

[ -z "$ALL_CHANGED" ] && exit 0

# 변경된 서브프로젝트만 추려냄
PROJECTS=()
echo "$ALL_CHANGED" | grep -q "^uncounted-api/" && PROJECTS+=("uncounted-api")
echo "$ALL_CHANGED" | grep -q "^uncounted-app/" && PROJECTS+=("uncounted-app")
echo "$ALL_CHANGED" | grep -q "^uncounted-admin/" && PROJECTS+=("uncounted-admin")

[ "${#PROJECTS[@]}" -eq 0 ] && exit 0

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  [VerificationStop] 세션 종료 전 자동 검증"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

PASS=0
FAIL=0

run_check() {
  local label="$1"
  local cmd="$2"
  local dir="$3"

  printf "  %-32s ... " "$label"
  if (cd "$dir" && eval "$cmd" > /tmp/verify-out.txt 2>&1); then
    echo "✓ PASS"
    PASS=$((PASS + 1))
  else
    echo "✗ FAIL"
    FAIL=$((FAIL + 1))
    head -10 /tmp/verify-out.txt | sed 's/^/    /'
  fi
}

for PROJECT in "${PROJECTS[@]}"; do
  PROJECT_DIR="$WORKING_DIR/$PROJECT"
  PKG="$PROJECT_DIR/package.json"

  [ -f "$PKG" ] || continue

  # 패키지 매니저 감지 (uncounted-admin은 yarn)
  if [ -f "$PROJECT_DIR/yarn.lock" ]; then
    PM_RUN="yarn"
  else
    PM_RUN="npm run"
  fi

  echo ""
  echo "  [$PROJECT]"

  # TypeScript 타입체크
  if grep -q '"typecheck"' "$PKG" 2>/dev/null; then
    run_check "$PROJECT typecheck" "$PM_RUN typecheck" "$PROJECT_DIR"
  elif [ -f "$PROJECT_DIR/tsconfig.json" ]; then
    run_check "$PROJECT tsc" "npx tsc --noEmit" "$PROJECT_DIR"
  fi

  # Lint
  if grep -q '"lint"' "$PKG" 2>/dev/null; then
    run_check "$PROJECT lint" "$PM_RUN lint" "$PROJECT_DIR"
  fi

  # Tests
  if grep -q '"test"' "$PKG" 2>/dev/null; then
    run_check "$PROJECT test" "$PM_RUN test -- --run --passWithNoTests 2>/dev/null || $PM_RUN test --passWithNoTests" "$PROJECT_DIR"
  fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  결과: PASS $PASS / FAIL $FAIL"
if [ "$FAIL" -gt 0 ]; then
  echo "  ⚠️  실패 항목 있음 — 커밋 전 수정 권장"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

exit 0
