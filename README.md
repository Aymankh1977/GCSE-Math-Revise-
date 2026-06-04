# Mohammed's Revision Hub — Y8 Summer Big Test

A private AI revision app for Mohammed, covering all Year 8 Big Test subjects
(8–19 June 2026). Built from the same codebase as Juri's hub: adaptive practice,
step-by-step marking, a hint-first AI tutor with handout photo/PDF upload, a
weak-area dashboard, dark mode, and practical checklists for Art, Drama and DT.

Subjects: Maths, English, Science, History, Geography, RE, French, Spanish,
Computing, Food Technology, Music, Art, Drama, Design Technology.

## Run locally

```bash
NODE_ENV=development npm install --include=dev   # first time only
NODE_ENV=development netlify dev --port 8899     # open http://localhost:8899
```

The Anthropic API key lives in `.env` (never committed):

```
ANTHROPIC_API_KEY=sk-ant-...
CLAUDE_MODEL=claude-sonnet-4-6
```

## Deploy (one time)

1. Create an **empty** repo on github.com (no README/.gitignore), e.g. `Mohammed-Revise`.
2. Push it:
   ```bash
   bash scripts/push-to-github.sh https://github.com/<you>/Mohammed-Revise.git
   ```
3. In Netlify: **Add new site → Import from Git → pick the repo.**
   Build command `npm run build`, publish directory `dist` (auto-detected from `netlify.toml`).
4. In Netlify **Site settings → Environment variables**, add `ANTHROPIC_API_KEY`
   (and optionally `CLAUDE_MODEL`). Redeploy.

After the first push, `bash scripts/push-to-github.sh` (no URL) pushes future changes.
