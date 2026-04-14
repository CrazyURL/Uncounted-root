# PM2 운영 런북 — 자체 VM (uncounted-api + uncounted-admin)

대상: Ubuntu 22.04 LTS 이상, Node.js 20 LTS, PM2.
토폴로지: Nginx(443) → {api:3001 cluster x2, admin:5000 fork}.

## 1. 초기 세팅 (최초 1회)

### 1-1. 시스템 패키지

```bash
sudo apt update
sudo apt install -y curl git build-essential ffmpeg nginx
# Node.js 20 (NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v && npm -v
```

### 1-2. deploy 사용자 + 디렉토리

```bash
sudo useradd -m -s /bin/bash deploy
sudo mkdir -p /srv/uncounted /var/log/pm2
sudo chown -R deploy:deploy /srv/uncounted /var/log/pm2
```

### 1-3. 방화벽 (UFW)

```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
# 3001, 5000은 127.0.0.1 바인딩이므로 외부 개방 금지
```

### 1-4. PM2 + logrotate

```bash
sudo npm i -g pm2
sudo -u deploy pm2 install pm2-logrotate
sudo -u deploy pm2 set pm2-logrotate:max_size 10M
sudo -u deploy pm2 set pm2-logrotate:retain 14
sudo -u deploy pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
sudo -u deploy pm2 set pm2-logrotate:compress true
```

### 1-5. 코드 체크아웃

```bash
sudo -u deploy -i
cd /srv/uncounted
git clone <uncounted-root-repo-url> .
# 또는 서브폴더별로: api, admin 각각 클론
```

### 1-6. 환경변수 주입

```bash
# /srv/uncounted/uncounted-api/.env — 권한 600 필수
cat > /srv/uncounted/uncounted-api/.env <<'EOF'
NODE_ENV=production
PORT=3001
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
S3_ENDPOINT=...
S3_REGION=...
S3_ACCESS_KEY=...
S3_SECRET_KEY=...
S3_AUDIO_BUCKET=...
S3_META_BUCKET=...
CORS_ORIGIN=https://admin.example.com
ENCRYPTION_KEY=...
EOF
chmod 600 /srv/uncounted/uncounted-api/.env
chown deploy:deploy /srv/uncounted/uncounted-api/.env
```

### 1-7. 최초 빌드 & 기동

```bash
cd /srv/uncounted/uncounted-api && npm ci && npm run build
cd /srv/uncounted/uncounted-admin && npm ci && npm run build

cd /srv/uncounted
pm2 start ecosystem.config.cjs --env production
pm2 save
# 부팅 시 자동 시작
pm2 startup systemd -u deploy --hp /home/deploy
# 위 명령이 출력하는 sudo 명령을 그대로 실행
```

### 1-8. Nginx + TLS

```bash
sudo cp /srv/uncounted/scripts/nginx-uncounted.conf /etc/nginx/sites-available/uncounted
# server_name을 실제 도메인으로 수정
sudo ln -s /etc/nginx/sites-available/uncounted /etc/nginx/sites-enabled/uncounted
sudo nginx -t && sudo systemctl reload nginx

# Let's Encrypt
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d admin.example.com
```

## 2. 일상 운영

### 2-1. 배포 (무중단)

```bash
sudo -u deploy /srv/uncounted/scripts/deploy.sh all    # api + admin
sudo -u deploy /srv/uncounted/scripts/deploy.sh api    # api만
sudo -u deploy /srv/uncounted/scripts/deploy.sh admin  # admin만
```

`pm2 reload`는 cluster 모드에서 워커를 하나씩 교체 → zero-downtime.
스크립트가 끝나면 `/health` 체크까지 자동 수행.

### 2-2. 상태 확인

```bash
pm2 ls
pm2 monit                        # 실시간 CPU/메모리
pm2 logs uncounted-api --lines 100
pm2 logs uncounted-admin --lines 100
pm2 describe uncounted-api       # 상세 설정/메모리/재시작 횟수
```

### 2-3. 수동 재시작

```bash
pm2 reload uncounted-api         # 무중단 (권장)
pm2 restart uncounted-api        # 강제 재시작 (downtime 발생)
pm2 stop uncounted-api
pm2 start uncounted-api
```

### 2-4. 설정 변경 후 적용

```bash
# ecosystem.config.cjs 수정 후
pm2 reload ecosystem.config.cjs --update-env
pm2 save
```

## 3. 롤백

### 3-1. cluster → single instance 긴급 롤백

cluster 모드에서 인메모리 상태 불일치로 플래키 버그 발생 시:

```bash
# 방법 A: ecosystem.config.cjs의 instances: 2 → 1로 수정 후
pm2 reload ecosystem.config.cjs --update-env

# 방법 B: 런타임 즉시 조정
pm2 scale uncounted-api 1
pm2 save
```

증상 예: 로그인 직후 401이 간헐적으로 발생 / rate limit이 일관되지 않음 / 업로드 진행률이 리셋됨.

### 3-2. 이전 커밋으로 롤백

```bash
cd /srv/uncounted/uncounted-api
git log --oneline -5
git checkout <prev-sha>
npm ci && npm run build
pm2 reload ecosystem.config.cjs --only uncounted-api --update-env
curl -fsS http://127.0.0.1:3001/health
```

## 4. 헬스체크

| 대상 | 명령 | 기대값 |
|------|------|--------|
| API 로컬 | `curl http://127.0.0.1:3001/health` | `{"status":"ok"}` |
| API 공개 | `curl https://admin.example.com/health` | `{"status":"ok"}` |
| Admin 로컬 | `curl -I http://127.0.0.1:5000/` | `200 OK` |
| PM2 프로세스 | `pm2 ls` | api x2, admin x1 online |
| 부팅 복구 | `sudo reboot` 후 `pm2 ls` | 자동 복구 |

## 5. 로그

```bash
ls -lh /var/log/pm2/
tail -f /var/log/pm2/uncounted-api.out.log
tail -f /var/log/pm2/uncounted-api.err.log
# logrotate는 매일 0시 자동 — 14일 보관
```

## 6. 보안 체크리스트

- [ ] `/srv/uncounted/uncounted-api/.env` 권한 600, 소유자 deploy
- [ ] 3001/5000은 127.0.0.1 바인딩 (외부 노출 금지)
- [ ] UFW 22/80/443만 허용
- [ ] Nginx TLS 활성, HSTS 헤더 존재
- [ ] `ENCRYPTION_KEY` 로테이트 시: 새 키 주입 → `pm2 reload` → 이전 키는 쉘 히스토리에서 제거 (`history -c`)
- [ ] `CORS_ORIGIN` 프로덕션 도메인으로 고정
- [ ] git에 `.env` 커밋 금지 확인 (`git ls-files | grep .env`)

## 7. 트러블슈팅

### API가 `errored` 상태로 반복 재시작

```bash
pm2 logs uncounted-api --err --lines 200
```

흔한 원인:
- `ENCRYPTION_KEY` 누락/형식 오류 → `.env` 확인
- Supabase 연결 실패 → SUPABASE_URL/KEY 확인
- 포트 충돌 → `sudo lsof -i :3001`

### 무중단 reload인데 502가 잠깐 뜸

- `wait_ready: true` 동작 확인: `dist/dev.js`가 `process.send('ready')`를 호출하는지 (src/dev.ts 참조).
- `listen_timeout` (기본 10s) 상향 고려.
- Nginx 쪽 `keepalive` 설정 확인.

### ffmpeg 프로세스 누적

```bash
ps aux | grep -i ffmpeg | grep -v grep
# 좀비 발생 시 해당 api 워커 reload
```

### cluster 상태 불일치 의심

3-1의 단일 인스턴스 롤백으로 전환 후 버그 재현 여부 확인.
