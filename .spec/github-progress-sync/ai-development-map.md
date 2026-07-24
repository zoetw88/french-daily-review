# AI development map

## Production changes

- `french-daily-review/app.js`
  - GitHub Contents API client
  - private-repository validation
  - local/cloud merge
  - debounced automatic sync
  - session-only token handling
- `french-daily-review/index.html`
  - gear-button entry point and GitHub sync settings drawer
- `french-daily-review/styles.css`
  - responsive drawer layout, motion, and sync status states

## External resource

- Private repository: `zoetw88/french-review-progress-private`
- Cloud file: `progress.json` on `main`

## Verification

- Static JavaScript syntax check
- Local HTTP desktop/mobile drawer, Escape close, and localized auth-error smoke tests
- Live GitHub write/read smoke test remains blocked until a restricted token is entered
