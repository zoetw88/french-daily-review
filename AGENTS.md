# French study workspace

## Purpose

This workspace contains French class notes and the `french-daily-review/` static web app.

## File layout

- `上課筆記/原始紀錄/`: raw lesson and meeting transcripts.
- `上課筆記/整理/`: processed summaries, questions, and mistake notes.
- `上課筆記/圖片與附件/`: images and document attachments.
- `課件PPTX/`: lesson slide decks.
- `教材PDF/`: reference books.
- `法語/`: Obsidian vault; preserve its `.obsidian/` configuration.

## Commands

- Run locally: `npx serve french-daily-review -l 4173`
- Open: `http://localhost:4173`
- No build step is required.

## Boundaries

- Keep class content in `french-daily-review/app.js`.
- Keep the app dependency-free and usable as static files.
- Preserve the original notes and course materials.
