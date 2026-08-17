# YMAU VI website handoff

Last updated: 14 August 2026

This document is the durable resume point for the Yale Model African Union VI website. Read it before changing the homepage film or deploying a new version.

## Start here

- Repository: <https://github.com/Alienware2000/ymau-vi-addis-ababa>
- Working branch: `codex/hero-video-design`
- Open draft PR: <https://github.com/Alienware2000/ymau-vi-addis-ababa/pull/4>
- Production site: <https://ymau-vi-addis-ababa.vercel.app>
- Hero implementation commit: `8f1aa9b` (`Polish Ethiopia hero film and responsive playback`)
- Vercel project: `alienware2000s-projects/ymau-vi-addis-ababa`
- Node.js requirement: 22 or newer

The production alias currently points to the manually promoted build from the working branch. The branch has not been merged into `main`; clone or switch to `codex/hero-video-design` until PR #4 is approved and merged.

## Restore on another computer

Install Git LFS before pulling the media files.

```bash
git lfs install
git clone https://github.com/Alienware2000/ymau-vi-addis-ababa.git
cd ymau-vi-addis-ababa
git switch codex/hero-video-design
git lfs pull
npm install
npm run dev
```

Open <http://localhost:3000>. The old proof query parameters are no longer needed; the current film is the default homepage hero.

To reconnect the Vercel CLI, sign into the `alienware2000` account and run:

```bash
vercel link --project ymau-vi-addis-ababa
```

The app has no required application secrets at this stage. Do not copy `.vercel`, shell credentials, GitHub tokens, or the old machine's entire `.codex` directory.

## Current approved-for-now experience

The team has not given final media approval. The current selection is a polished review version that David considered good enough to redeploy, subject to later feedback.

The visual sequence is:

1. Lush Ethiopian highlands, beginning near the crisp green portion rather than the earlier grey-blue foliage.
2. The original camel shot requested from approximately `00:00:11–00:00:20` of the downloaded 1080p Ethiopia film.
3. Person on the Gheralta ledge and mountains from approximately `00:02:49–00:03:02`.
4. The longer person-and-mountains passage from approximately `00:15:00–00:15:41`; the handoff into Lalibela should occur around the frame with the white-clad figure at the rock doorway.
5. Lalibela, retained in the sequence.
6. The current moving Addis Ababa night/panorama passage.
7. A smooth return to the lush highlands, then the complete sequence loops.

Editorial decisions already made:

- Use fades, never hard cuts.
- Current dissolves are about 1.2 seconds: noticeable and smooth without the earlier abruptness.
- Keep an original-film pace; the earlier `transitions=slow` experiment felt too slow.
- Let the longer Gheralta passage breathe before Lalibela.
- Preserve distinct desktop and portrait renders so mobile does not simply crop the desktop delivery at runtime.
- Keep the homepage overlay restrained because the earlier blue-grey tint made mobile footage appear softer and flatter.
- The old “WATCH THE ETHIOPIA FILM” interaction now opens the stitched film rather than the former highlands-only clip.
- Temporary proof labels were removed from the promoted experience.

## Current media delivery

The exact reviewed files are committed through Git LFS:

| File | Dimensions | Duration | Approximate bitrate | Size |
| --- | ---: | ---: | ---: | ---: |
| `public/ethiopia-film.mp4` | 1920×1080 | 89.0 s | 9.92 Mbps | 110,386,401 bytes |
| `public/ethiopia-film-mobile.mp4` | 1080×1920 | 89.0 s | 13.68 Mbps | 152,211,527 bytes |
| `public/ethiopia-film-poster.jpg` | desktop poster | — | — | 688,833 bytes |

The homepage references these as media version `v=11` in `app/page.tsx`. Vercel serves the committed MP4 bytes and supports HTTP range requests; it is not resizing or transcoding them.

Quality limitation: several requested shots originated in an already-compressed 1920×1080 landscape file. A 9:16 crop uses only about 608×1080 of that frame and then enlarges it to 1080×1920. The mobile delivery has a high bitrate, but encoding cannot restore detail absent from the source. The 4K highlands holds up better because its portrait crop is reduced rather than enlarged.

The next quality/performance exploration should be a landscape-and-portrait adaptive streaming ladder (HLS or DASH) from licensed high-resolution masters. Keep a high-quality archive master, then generate several resolutions and bitrates instead of making every visitor load one very large MP4.

## Proof edit versus production-master workflow

The checked-in web MP4s are the exact live proof edit. They are recoverable from Git LFS on a new machine.

`config/hero-film.json`, `scripts/hero-film.mjs`, `docs/hero-film-treatment.md`, and `docs/hero-film-source-register.md` describe the stricter future workflow for licensed UHD masters. They do **not** currently reproduce the 89-second `v=11` proof edit:

- Only the approved highlands master exists locally in `.hero-film-sources/`.
- The remaining manifest sources are purchase/licensing candidates.
- The build intentionally fails until every configured source is licensed, present, and meets its native-resolution requirement.
- The manifest currently describes a shorter future treatment, not the exact proof timeline.

Do not run `npm run hero:build` expecting it to recreate the live film. First update the manifest and acquire approved production masters.

## Local-only material that is not backed up by the repository

- `.hero-film-sources/01-highlands-master.mp4` — ignored 4K Pexels source, approximately 83.5 MB. It can be downloaded again from the source URL recorded in `config/hero-film.json`.
- The downloaded source film in `~/Downloads` — approximately 1.44 GB, not committed and not a production-licensed asset. The requested timestamps and public reference URL are documented, so it should be reacquired only if its intended use is legally authorized.
- `.vercel/` — machine-specific project link, intentionally ignored and recreated with `vercel link`.
- Build outputs and dependencies (`node_modules`, `.next`, `dist`, and `outputs`) — intentionally disposable.

Do not place raw third-party footage, credentials, or licenses containing personal billing details in the public repository. Keep licensed masters and receipts in an access-controlled client asset store.

## Verification performed

The current branch passed:

```bash
npm run lint
node --test tests/*.test.mjs
npm run build
```

At the time of handoff:

- 12 Node tests passed.
- The Next.js production build passed.
- Desktop and mobile files returned `206 Partial Content` with `video/mp4` from production.
- The poster returned `200 OK`.
- Black-frame, transition, loop, and responsive visual checks passed.
- PR #4's Vercel checks passed.

Re-run the three commands above after any code or media change. For media changes, also inspect the opening, every dissolve, the Gheralta-to-Lalibela handoff, the final-to-opening loop, and portrait crops on a real phone-sized viewport.

## Deployment procedure

Normal path after approval:

1. Review and merge PR #4 into `main`.
2. Confirm the Vercel Git integration deploys `main` successfully.
3. Verify the production homepage, desktop MP4, mobile MP4, and poster.

For an intentionally staged manual deployment:

```bash
vercel deploy --prod --skip-domain --yes
vercel inspect <deployment-url>
vercel promote <deployment-url> --yes
```

Do not promote an unverified build. Git LFS support is already enabled for the Vercel project.

## Remaining decisions

1. Collect team feedback on the current live sequence and pacing.
2. Decide whether the Addis night shot stays or is replaced with a clearer moving view featuring the CBE Headquarters tower.
3. Confirm commercial reuse rights for every non-Pexels proof shot before treating the media as final.
4. Obtain native UHD masters for the camel, Gheralta, Lalibela, and Addis scenes.
5. Reconcile `config/hero-film.json` with the final approved timeline.
6. Consider HLS/DASH adaptive streaming and a delivery CDN to reduce the current large initial transfer while retaining high-quality portrait and landscape variants.
7. Merge PR #4 only after the design/media owner accepts the current state or after the licensed replacements are ready.

## Design guardrails

- Professional, editorial, restrained and culturally grounded—not a generic tourism montage.
- Maintain excellent legibility and composition on both wide desktop and narrow mobile screens.
- Avoid excessive navy/grey overlays, crushed blacks, over-saturation, whip pans, hard cuts and fast montage pacing.
- Keep authentic attribution and credits accurate.
- Never silently swap footage or lower source quality to reduce file size.

## Copy/paste resume instruction

The shorter prompt in `docs/RESUME_PROMPT.md` can be pasted into a fresh Codex task after cloning the repository.
