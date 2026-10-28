# 📚 Repositorio TypeScript & React (`typescript`)

Repositorio principal de prácticas y proyectos con **TypeScript, React, Next.js, Vite y Redux**.

> **Estado actual:** ✅ **11/11 capítulos completados y verificados** (`22 correctos, 0 fallos`).

## 📂 Estructura Principal

- **[`typescript01/`](./typescript01/)** — Estudio completo (Capítulos 1 al 11) del libro *TypeScript Basics: Learn TypeScript from Scratch and Solidify Your Skills with Projects* (Nabendu Biswas, 2023):
  - 📖 [Guía y Estado de los 11 Capítulos (`typescript01/README.md`)](./typescript01/README.md)
  - 🤖 [Memoria del Agente (`typescript01/AGENTS.md`)](./typescript01/AGENTS.md)
  - 📘 [Libro en Markdown (`typescript01/LIBRO-REACT-2023.md`)](./typescript01/LIBRO-REACT-2023.md)
- **[`AGENTS.md`](./AGENTS.md)** — Puente de memoria en la raíz del repositorio Git para que Antigravity (`agy`) cargue automáticamente las reglas sin importar si abres la sesión desde la raíz o desde `typescript01/`.
- **Playgrounds personales** (fuera del recorrido del libro):
  - [`typescript02/`](./typescript02/) — Conditional types, `infer`, utility types, clases y `static`. Ver [README](./typescript02/README.md).
  - [`typescript04/`](./typescript04/) — Mapped types (en progreso). Ver [README](./typescript04/README.md).

## 🗺️ Resumen de Capítulos (`typescript01/`)

| Cap. | Tema / Proyecto | Carpeta | Stack | Estado |
| :---: | :--- | :--- | :--- | :---: |
| **01–05** | Fundamentos, Compilador, Clases, Interfaces y Tipos Avanzados | [`typescript01/chapter01`](./typescript01/chapter01) .. [`chapter05`](./typescript01/chapter05) | TypeScript + `tsc` | ✅ |
| **06 / 06a** | Genéricos y Decoradores | [`typescript01/chapter06`](./typescript01/chapter06) / [`chapter06a`](./typescript01/chapter06a) | TS + `experimentalDecorators` | ✅ |
| **07** | Proyecto: To-Do List | [`typescript01/chapter07/to-do-list`](./typescript01/chapter07/to-do-list) | Next.js 16 + React 19 + Tailwind 4 | ✅ |
| **08** | Proyecto: Drag-and-Drop | [`typescript01/chapter08/drag-drop`](./typescript01/chapter08/drag-drop) | TypeScript + DOM | ✅ |
| **09** | Proyecto: Drag-and-Drop Modular | [`typescript01/chapter09/drag-drop`](./typescript01/chapter09/drag-drop) | ES6 Modules + Webpack 5 | ✅ |
| **10** | Proyecto: Party App | [`typescript01/chapter10/party-app`](./typescript01/chapter10/party-app) | Vite 6 + React 18 + TS | ✅ |
| **11** | Proyecto: Bank App con React Redux | [`typescript01/chapter11/redux-app`](./typescript01/chapter11/redux-app) | Vite 6 + React 18 + Redux 4 + Thunk | ✅ |

## ✅ Verificación Global

```bash
./typescript01/scripts/verify-all.sh
```

---

# 🌿 Git para estudiar y repasar

Chuleta de los conceptos que se usaron al resolver la divergencia `local ↔ remoto` de este repositorio (28/10/2026). Sirve como material de repaso, no como sustituto de `git help <comando>`.

## 1. El modelo mental (todo lo demás se deduce de aquí)

- Un **commit** es una **fotografía completa** del proyecto + un puntero a su **commit padre**.
- Una **rama** (`main`, `origin/main`) es solo una **etiqueta pegajosa** que apunta a un commit.
- **`HEAD`** dice en qué rama/commit estás parado.
- **`origin/main`** es tu copia local de "cómo estaba `main` en GitHub la última vez que hablé con el remoto". No es la rama del servidor: es una foto de ella.

```
[b4da] ← [ba3d] ← [e91a] ← [01ce] ← ... ← [aed6]
                                          ↑
                                    main = HEAD
```

## 2. Consultar antes de tocar

```bash
git status -sb                 # rama, ahead/behind, archivos modificados
git log --oneline --graph --decorate --all   # el grafo completo
git diff                       # cambios sin preparar
git diff --staged              # cambios ya en el índice (git add)
git show <hash> --stat         # qué archivos toca un commit
```

## 3. `ahead / behind`: qué significan de verdad

```
## main...origin/main [ahead 11, behind 1]
```

- Se calculan desde el **merge-base** (`git merge-base main origin/main`): el último commit que **ambas** ramas comparten.
- `ahead 11` → tienes 11 commits que el remoto no tiene.
- `behind 1` → el remoto tiene 1 commit que tú no tienes.
- **No miden tiempo**: miden commits a cada lado del punto de separación.

## 4. Las tres formas de integrar

| Estrategia | Qué hace | Crea commits | Reescribe hashes | Cuándo usarla |
| :--- | :--- | :---: | :---: | :--- |
| **Fast-forward** | Desliza la etiqueta hacia delante | ❌ | ❌ | Tu rama no tiene trabajo propio |
| **Merge** | Crea un commit con **dos padres** | ✅ 1 | ❌ | Ramas ya publicadas / trabajo compartido |
| **Rebase** | Reaplica tus commits **encima** del otro | ❌ | ✅ | Trabajo local aún no publicado |

**Fast-forward** — solo si tu rama es ancestro del destino:

```
antes:    A ← B(origin/main)        después:  A ← B(main, origin/main)
              ↑ main
```

**Merge** — une dos líneas y las deja registradas:

```
        C ← D ──┐
      /         ├── M   (commit de fusión, dos padres)
A ← B           │
      \        /
        E ────┘
```

**Rebase** — reescribe tu trabajo como si hubiera empezado después:

```
antes:   A ← B ← C ← D (main)
después: A ← B ← E ← C' ← D' (main)
```

> 🔑 **Regla de oro:** rebase **solo** sobre commits que nunca has subido. Si ya están en `origin`, reescribirlos rompe el repo de quien los tenga.

## 5. `fetch` ≠ `pull`

```bash
git fetch origin     # descarga y actualiza origin/main. NO toca tu main
git pull             # fetch + integrar (merge por defecto)
git pull --rebase    # fetch + rebase
```

Separarlos te deja **ver qué va a entrar** antes de que pase. Es la diferencia entre mirar antes de cruzar y cruzar con los ojos cerrados.

Recomendado una sola vez por repo:

```bash
git config pull.rebase true
```

## 6. Flujo diario recomendado

```bash
# 1. Al empezar a trabajar
git fetch --prune
git status -sb

# 2. Si hay behind: traer antes de escribir código
git pull --rebase

# 3. Trabajar y commitear en pasos pequeños
git add <archivos>
git commit -m "tipo(scope): descripción en imperativo"

# 4. Antes de subir, comprobar el grafo
git log --oneline --graph -10

# 5. Publicar
git push
```

## 7. Conflictos: cómo se ven y cómo se resuelven

Un conflicto ocurre cuando **ambas ramas modificaron las mismas líneas**. Git para y marca el archivo:

```
<<<<<<< HEAD
const precio = 100;
=======
const precio = 120;
>>>>>>> origin/main
```

1. Edita el archivo y deja la versión correcta (borra los marcadores).
2. `git add archivo.ts`
3. `git rebase --continue` (o `git commit` si era un merge).

Si te pierdes: `git rebase --abort` deja todo **exactamente** como estaba antes de empezar.

## 8. Red de seguridad: `reflog` y ramas de respaldo

```bash
git branch backup/pre-rebase   # poste de amarre al estado actual
git reflog                     # historial de TODOS los movimientos de HEAD
git reset --hard HEAD@{2}      # volver a un punto del reflog
git reset --hard backup/pre-rebase
```

`reflog` conserva 90 días de movimientos: **es casi imposible perder trabajo de verdad** en Git si sabes usarlo.

## 9. Deshacer, según el caso

| Quiero deshacer… | Comando |
| :--- | :--- |
| Cambios en un archivo (sin `add`) | `git restore archivo.ts` |
| Un `git add` | `git restore --staged archivo.ts` |
| El último commit, manteniendo cambios | `git reset --soft HEAD~1` |
| El último commit y sus cambios | `git reset --hard HEAD~1` ⚠️ destructivo |
| Un commit ya publicado | `git revert <hash>` (crea uno nuevo que lo anula) |

## 10. Commits semánticos (Conventional Commits)

```
tipo(scope): descripción en imperativo, minúscula, sin punto final
```

| Tipo | Uso |
| :--- | :--- |
| `feat` | funcionalidad nueva |
| `fix` | corrección de bug |
| `docs` | solo documentación |
| `chore` | mantenimiento: deps, configs, scripts |
| `refactor` | reestructurar sin cambiar comportamiento |
| `test` | pruebas |
| `build` / `ci` | build o integración continua |

Con cuerpo explicando el **por qué**:

```bash
git commit -m "fix(ts02): unión sexo corregida" -m "Decía 'feminio'; ahora 'femenino'. Afecta al literal type de Usuario."
```

## 11. Caso real resuelto en este repo (28/10/2026)

Situación: `ahead 11, behind 1` → divergencia desde `bd4da44`. El remoto tenía `e91a884` (añadía `typescript04/`); en local había 11 commits del libro.

```bash
git branch backup/pre-rebase     # red de seguridad
git fetch origin                 # solo actualiza origin/main
git log --oneline HEAD..origin/main    # ¿qué entra? → e91a884
git show --stat e91a884                # ¿qué archivos toca? → solo typescript04/
git rebase origin/main                 # 11 commits reaplicados, 0 conflictos
git diff backup/pre-rebase..HEAD --stat    # prueba: solo se añadió typescript04/
git push                                # fast-forward, sin --force
```

Lección: **antes de integrar, mira qué archivos toca el otro lado**. Si no hay solapamiento, el conflicto es matemáticamente imposible.

## 12. Errores comunes y su traducción

| Mensaje de Git | Significado |
| :--- | :--- |
| `! [rejected] main -> main (fetch first)` | Te falta trabajo del remoto: haz `git pull --rebase` |
| `! [rejected] ... (non-fast-forward)` | Hay divergencia: integra antes de empujar |
| `Your branch is ahead of 'origin/main' by N commits` | Todo bien, solo falta `git push` |
| `Your branch is behind ... can be fast-forwarded` | No tienes commits propios: `git pull` basta |
| `diverged ... have N and M different commits` | Ambas ramas avanzaron: rebase o merge |
| `fatal: not possible to fast-forward, aborting` | `git pull --rebase` o `git pull --no-rebase` |
| `You are in the middle of a rebase` | Termina con `--continue` o sal con `--abort` |

## 13. Chuleta mínima

```bash
git status -sb                        # dónde estoy
git fetch && git log --oneline HEAD..origin/main   # qué entra
git pull --rebase                     # integrar en línea recta
git add -A && git commit -m "feat(x): ..."
git push
git reflog                            # el botón de deshacer
```
