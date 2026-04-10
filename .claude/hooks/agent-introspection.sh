#!/bin/bash
# Agent Introspection - TaskCompleted Hook
# 태스크 완료 시 실패/이상 신호 감지 후 디버깅 힌트 출력
#
# Hook trigger: TaskCompleted
# Exit codes: 0 = 완료 허용

INPUT=$(cat)

echo "$INPUT" | python3 -c "
import sys, json, re

try:
    data = json.load(sys.stdin)
except:
    sys.exit(0)

ti = data.get('tool_input', {})
task_id = ti.get('task_id', 'unknown')
subject = ti.get('task_subject', ti.get('subject', 'unknown'))
teammate = ti.get('teammate_name', data.get('teammate_name', 'unknown'))
team = ti.get('team_name', data.get('team_name', 'unknown'))

output = str(data.get('tool_result', '')) + str(ti.get('output', ''))

print(f'[agent-introspection] Task #{task_id} \"{subject}\" by {teammate} (team: {team})', file=sys.stderr)

failure_signals = [
    (r'error|exception|failed|traceback|undefined|cannot|cannot find', 'error'),
    (r'infinite loop|timeout|hung|unresponsive', 'timeout'),
    (r'context.*contaminated|wrong.*assumption|misunderstood', 'context'),
    (r'hallucinated|made up|incorrect assumption', 'hallucination'),
]

hints = {
    'error':        '에러 발생 — 스택트레이스 확인 후 /agent-introspection-debugging 실행',
    'timeout':      '루프/타임아웃 의심 — 에이전트 입력 컨텍스트 크기 확인',
    'context':      '컨텍스트 오염 의심 — /compact 후 재실행 권장',
    'hallucination':'잘못된 가정 감지 — 전제 조건을 명시적으로 지정 후 재실행',
}

detected = set()
for pattern, signal_type in failure_signals:
    if re.search(pattern, output, re.IGNORECASE):
        detected.add(signal_type)

if detected:
    print('', file=sys.stderr)
    print('[AgentIntrospection] ⚠️  이상 신호 감지:', file=sys.stderr)
    for signal in detected:
        print(f'  → {hints[signal]}', file=sys.stderr)
    print('', file=sys.stderr)
" 2>/dev/null

exit 0
