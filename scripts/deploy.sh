#!/usr/bin/env bash
# uncounted 자체 VM 배포 스크립트
# 사용: sudo -u deploy /srv/uncounted/scripts/deploy.sh [api|admin|all]
set -euo pipefail

TARGET="${1:-all}"
ROOT="/home/gdash/project/Uncounted-root"
API_DIR="$ROOT/uncounted-api"
ADMIN_DIR="$ROOT/uncounted-admin"
ECOSYSTEM="$ROOT/ecosystem.config.cjs"
PM2_CMD="/home/gdash/.yarn/bin/pm2"

log() { printf '\033[1;34m[deploy]\033[0m %s\n' "$*"; }
fail() { printf '\033[1;31m[deploy][FAIL]\033[0m %s\n' "$*" >&2; exit 1; }

deploy_api() {
  log "uncounted-api: pull & build"
  cd "$API_DIR"
  git pull --ff-only
  #npm ci
  yarn build
  [ -f dist/dev.js ] || fail "build artifact missing: dist/dev.js"

  log "uncounted-api: reload (zero-downtime)"
  $PM2_CMD reload "$ECOSYSTEM" --only uncounted-api --update-env

  log "uncounted-api: health check"
  sleep 2
  curl -fsS --max-time 5 http://127.0.0.1:3001/health >/dev/null \
    || fail "health check failed — rolling back requires manual check"
  log "uncounted-api: OK"
}

deploy_admin() {
  log "uncounted-admin: pull & build"
  cd "$ADMIN_DIR"
  git pull --ff-only
  #npm ci
  yarn build
  [ -d dist ] || fail "build artifact missing: dist/"

  log "uncounted-admin: reload"
  $PM2_CMD reload "$ECOSYSTEM" --only uncounted-admin --update-env

  log "uncounted-admin: smoke"
  sleep 1
  curl -fsS --max-time 5 http://127.0.0.1:5000/ -o /dev/null \
    || fail "admin smoke failed"
  log "uncounted-admin: OK"
}

case "$TARGET" in
  api) deploy_api ;;
  admin) deploy_admin ;;
  all) deploy_api; deploy_admin ;;
  *) fail "unknown target: $TARGET (api|admin|all)" ;;
esac

log "pm2 save"
pm2 save
log "done."
