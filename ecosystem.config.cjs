/**
 * PM2 ecosystem — uncounted-api + uncounted-admin
 * 배포 대상: 자체 VM (/srv/uncounted)
 * 기동: pm2 start ecosystem.config.cjs --env production
 * 무중단 재배포: pm2 reload ecosystem.config.cjs --update-env
 */
module.exports = {
  apps: [
    {
      name: 'uncounted-api',
      cwd: '/home/gdash/project/Uncounted-root/uncounted-api',
      script: 'dist/dev.js',
      // export packaging이 수백 MB ZIP buffer를 메모리에 누적하므로
      // fork + 단일 인스턴스 + 4GB heap으로 백그라운드 task 안정성 확보.
      // cluster 모드에서 워커가 max_memory_restart에 걸려 죽으면
      // 진행 중인 packaging 작업이 status='packaging'으로 영구 고착됨.
      exec_mode: 'fork',
      instances: 1,
      max_memory_restart: '4G',
      node_args: ['--max-old-space-size=4096'],
      wait_ready: true,
      listen_timeout: 10000,
      kill_timeout: 5000,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
      error_file: 'log/pm2/uncounted-api.err.log',
      out_file: 'log/pm2/uncounted-api.out.log',
      merge_logs: true,
      time: true,
    },
    {
      name: 'uncounted-admin',
      cwd: '/home/gdash/project/Uncounted-root/uncounted-admin',
      script: 'npx',
      args: 'serve -s dist -l 5000 --no-clipboard',
      exec_mode: 'fork',
      instances: 1,
      max_memory_restart: '256M',
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      env: {
        NODE_ENV: 'production',
      },
      error_file: 'log/pm2/uncounted-admin.err.log',
      out_file: 'log/pm2/uncounted-admin.out.log',
      merge_logs: true,
      time: true,
    },
  ],
};
