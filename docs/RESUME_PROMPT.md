# Resume prompt for a new Codex task

Paste the following into a new Codex task opened on this repository:

> I am resuming the YMAU VI Addis Ababa website from another computer. Read `HANDOFF.md` completely, then inspect the current branch, PR #4, and the live production site before changing anything. The intended starting branch is `codex/hero-video-design`; run `git lfs pull`, confirm the two `public/ethiopia-film*.mp4` files are real LFS objects, and run the documented checks. The current `v=11` Ethiopia hero sequence is approved for now but remains subject to team feedback. Preserve the lush-highlands opening, original camels, both Gheralta passages, the roughly `00:15:41` handoff into Lalibela, current pacing, 1.2-second fades, portrait-specific render, and seamless return to the highlands unless I explicitly request a change. Distinguish the live 89-second proof assets from the shorter licensed-master workflow in `config/hero-film.json`; do not claim that the manifest recreates the live edit. Before replacing third-party footage, confirm licensing and native source quality. Start by reporting the exact repository, media, PR, deployment and remaining-decision state you found.

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
