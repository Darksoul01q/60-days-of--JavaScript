# Copilot / AI Agent Instructions

This is a tiny static practice repo: a single HTML page (`dark.html`) that loads a small JavaScript file (`dark.js`). The code contains short learning snippets and minor bugs; changes should be minimal and explicit.

## Big picture
- Single-page static site: [dark.html](dark.html) loads [dark.js](dark.js) via a `defer` script tag. There is also an unused `script.js` file containing practice variants.
- Data flow: variables are computed in `*.js` then written to the DOM via `document.getElementById(...).innerHTML`.

## Key files to inspect
- [dark.html](dark.html) — page template, includes `h1` with id `demo` and `script src="dark.js" defer`.
- [dark.js](dark.js) — primary JS used by the page (DOM updates, practice logic).
- [script.js](script.js) — additional practice code; not referenced by `dark.html`.

## Conventions & patterns (project-specific)
- DOM writes should use `.innerHTML` (or `.textContent`) on the element reference. Example correct pattern in this repo: `document.getElementById("demo").innerHTML = text;` (see `dark.js`).
- Avoid replacing the `defer` attribute when modifying `dark.html`; the page assumes the script runs after parsing.
- Preserve commented practice blocks — they're intentionally illustrative. Remove only with explicit justification.

## Common issues to look for
- Incorrect DOM assignment: `document.getElementById("dark") = text;` (in `script.js`) is a bug — the element reference is being overwritten instead of setting `.innerHTML` or `.textContent`. Fix by targeting the correct element id and using `.innerHTML`.
- Mismatched IDs: ensure any id used in JS exists in `dark.html`.

## Developer workflows (how to run & debug)
- No build step. To preview, open `dark.html` in a browser or use a lightweight dev server / Live Server extension.
- Debugging: use browser DevTools console and DOM inspector. Check console for syntax errors arising from incorrect DOM usage.

## What tasks an AI agent should do (practical examples)
- Make a small, focused fix: e.g., change `document.getElementById("dark") = text;` to `document.getElementById("demo").innerHTML = text;` and run the page in a browser.
- When refactoring, update both `dark.html` and `*.js` consistently (IDs, script attributes). Keep PRs minimal and explain the change in 1–2 lines.

## Safety / style
- Keep changes minimal and clearly justified in commit/PR messages. This repo is educational; preserve examples and comments unless asked to remove them.

If any specific behaviors or a preferred workflow are missing, tell me which area to expand (testing, CI, or coding style enforcement).
