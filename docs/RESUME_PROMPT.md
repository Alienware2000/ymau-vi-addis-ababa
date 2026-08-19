# Resume prompt for Claude Code

Paste the following into a new Claude Code session opened on this repository:

> Read `HANDOFF.md` completely, then `docs/ABY_CONTENT_RESUME.md`, `AGENTS.md`, and `docs/hero-film-treatment.md` only if you will touch the homepage film. Inspect `git status`, the current branch, and https://ymau-vi-addis-ababa.vercel.app before changing anything. Start from current `main` (PR #4 film, PR #5 public-content pass, PR #6 letter and partner lockups). Install Git LFS and run `git lfs pull` so `public/ethiopia-film*.mp4` are real media files, not pointer files. The live hero is `v=11`; do not run `npm run hero:build`. Public contact is `president@yalemodelau.org`. Ambassadors publish name, institution, bio, and photo only. YMAU V committees are archive only. Do not invent unreleased copy. Do not start French/Amharic expansion or the operations layer unless I ask. Report the exact git, production, and remaining-work state you found, then wait for my next instruction.

Useful first commands:

```bash
git status -sb
git branch --show-current
git lfs pull
git lfs ls-files
npm install
npm run lint
node --test tests/*.test.mjs
npm run build
```
