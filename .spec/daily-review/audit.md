# Audit

## Browser verification

- Desktop at the default browser viewport: homepage loaded with all primary sections visible.
- Review flow: start session → reveal answer → grade "答對了" → question 2 rendered.
- Mobile at 390 × 844: no horizontal overflow (`scrollWidth === clientWidth`).
- Found and fixed a mobile navigation positioning issue caused by `backdrop-filter` creating a containing block for the fixed navigation.

## Adaptive review verification

- JavaScript syntax: `node --check app.js` passed.
- Typed-answer flow: answer input enabled checking only after text entry.
- Exact answer produced a visible 100% similarity score.
- "記住了" advanced to question 2 and scheduled the card three days later.
- Due count changed from 30 to 29; next review displayed as 7/26.
- Daily adaptive session displayed the correct total of seven cards.
- 2026-07-22 `Il est comment ?` opened its five-card passé composé set.
- TCF Canada B2 route rendered on desktop with no horizontal overflow.
- Mobile 390 × 844 check: `scrollWidth === clientWidth`; bottom navigation remained at the viewport bottom.
- Browser console contained zero error-level messages.
