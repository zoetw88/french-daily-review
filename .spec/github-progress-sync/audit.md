# Audit

## Privacy and retention

- Stored data: study completion, review scheduling, streak, XP, coins, achievements, and short activity logs.
- Third party: GitHub stores the JSON in `zoetw88/french-review-progress-private`.
- Disclosure: no answer text, OpenRouter key, GitHub token, Obsidian content, or other personal files are included.
- Retention: Git history retains prior JSON revisions until commits/repository are deleted.
- Deletion: deleting `progress.json` removes the current file; deleting the private repository removes the GitHub-hosted copy subject to GitHub's own retention policy.

## Security controls

- The target repository must report `private: true` before syncing.
- Fine-grained token scope is limited to one repository and `Contents: Read and write`.
- Token is held in `sessionStorage`, excluded from export payloads, and removed on disconnect or tab close.
- GitHub API errors are shown without logging credentials.
- Writes are serialized and preceded by a current-file read.

## Residual risks

- Any script executing in the page can access a session token; keeping the app dependency-free reduces but does not eliminate browser/XSS risk.
- Simultaneous offline use on two devices can preserve the newest per-card record, but game counters use maxima rather than additive reconciliation.
- Git commit history intentionally preserves old progress versions.
