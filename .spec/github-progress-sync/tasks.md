# GitHub private progress sync

## Acceptance criteria

- [x] Learning progress remains saved locally after every mutation.
- [x] A separate private GitHub repository stores `progress.json`.
- [x] The static app never embeds or exports the GitHub token.
- [x] The token lives only for the current browser tab session.
- [x] A user can connect, sync now, load cloud progress, and disconnect.
- [x] Automatic saves debounce into serialized GitHub commits.
- [x] Local and cloud card progress is merged before a write.
- [ ] Complete a live browser-to-GitHub smoke test with a fine-grained token.

## Blocker

The live API smoke test requires Zoe to create and enter a fine-grained token restricted to `zoetw88/french-review-progress-private` with `Contents: Read and write`.
