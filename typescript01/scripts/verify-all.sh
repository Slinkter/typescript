#!/usr/bin/env bash
# Verificación global del workspace typescript01.
# Uso: ./scripts/verify-all.sh
# Requiere Node, npm y (opcionalmente) pnpm.

set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 1

FAIL=0
PASS=0

run() {
  local label="$1"
  shift
  printf '\n\033[1;34m▶ %s\033[0m\n' "$label"
  if "$@"; then
    printf '\033[1;32m✔ %s\033[0m\n' "$label"
    PASS=$((PASS + 1))
  else
    printf '\033[1;31m✘ %s\033[0m\n' "$label"
    FAIL=$((FAIL + 1))
  fi
}

typecheck() {
  local dir="$1"
  (cd "$dir" && npx --no-install tsc --noEmit)
}

build_npm() {
  local dir="$1"
  (cd "$dir" && npm run build)
}

build_pnpm() {
  local dir="$1"
  (cd "$dir" && pnpm build)
}

echo "Verificación de typescript01 — $(date '+%Y-%m-%d %H:%M:%S')"

# --- Capítulos TypeScript puros -------------------------------------------
for dir in \
  chapter01 chapter02 chapter03 chapter04 chapter05 \
  chapter06 chapter06a \
  chapter08/drag-drop chapter09/drag-drop; do
  run "tsc --noEmit · $dir" typecheck "$dir"
done

# --- Ejecución de demos con Node -----------------------------------------
run "node · chapter01" bash -c 'cd chapter01 && node main.js >/dev/null && node ejercicios.js >/dev/null'
run "node · chapter02" bash -c 'cd chapter02 && node basicsDemo.js >/dev/null && node ejercicios.js >/dev/null'
run "node · chapter04" bash -c 'cd chapter04 && node classDemo.js >/dev/null && node interfaceDemo.js >/dev/null && node ejercicios.js >/dev/null'
run "node · chapter06" bash -c 'cd chapter06 && node genericDemo.js >/dev/null'
run "node · chapter06a" bash -c 'cd chapter06a && node decoratorsDemo.js >/dev/null'

# --- Compilación de chapter03 y chapter05 --------------------------------
run "tsc build · chapter03" bash -c 'cd chapter03 && npx --no-install tsc'
run "tsc build · chapter05" bash -c 'cd chapter05 && npx --no-install tsc'
run "node · chapter03" bash -c 'cd chapter03 && node dist/main.js >/dev/null && node dist/ejercicios.js >/dev/null'

# --- Aplicaciones ---------------------------------------------------------
if command -v pnpm >/dev/null 2>&1; then
  run "pnpm build · chapter07" build_pnpm chapter07/to-do-list
  run "pnpm build · chapter09" build_pnpm chapter09/drag-drop
else
  run "npm build · chapter07" build_npm chapter07/to-do-list
  run "npm build · chapter09" build_npm chapter09/drag-drop
fi
run "npm build · chapter08" build_npm chapter08/drag-drop
run "npm build · chapter10" build_npm chapter10/party-app
run "npm build · chapter11" build_npm chapter11/redux-app

printf '\n\033[1mResultado: %d correctos, %d fallos\033[0m\n' "$PASS" "$FAIL"
exit "$FAIL"
