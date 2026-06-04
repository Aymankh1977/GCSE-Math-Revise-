#!/usr/bin/env bash
# One-step GitHub setup + push for Mohammed's Revision Hub.
#
# Usage:
#   bash scripts/push-to-github.sh https://github.com/<you>/<repo>.git
#
# Create an EMPTY repo on github.com first (no README/.gitignore), then run this
# with its URL. Re-running later (no URL) just pushes the latest commits.

set -e
cd "$(dirname "$0")/.."

URL="$1"

if [ -n "$URL" ]; then
  if git remote | grep -q "^origin$"; then
    git remote set-url origin "$URL"
  else
    git remote add origin "$URL"
  fi
  echo "origin -> $URL"
fi

if ! git remote | grep -q "^origin$"; then
  echo "No 'origin' remote set yet. Run again with your repo URL:"
  echo "  bash scripts/push-to-github.sh https://github.com/<you>/<repo>.git"
  exit 1
fi

git add -A
git commit -m "Update Mohammed's Revision Hub" || echo "(nothing new to commit)"
git branch -M main
GIT_TERMINAL_PROMPT=0 git push -u origin main
echo "Pushed. Now connect this repo in Netlify and add the ANTHROPIC_API_KEY env var."
