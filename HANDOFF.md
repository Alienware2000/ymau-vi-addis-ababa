# YMAU VI website handoff

Last updated: 21 August 2026

This is the source of truth for a new Claude Code session. Read this file completely, then [`docs/ABY_CONTENT_RESUME.md`](docs/ABY_CONTENT_RESUME.md). Film-only detail lives in the Film section below and in [`docs/hero-film-treatment.md`](docs/hero-film-treatment.md).

## Start here

- Repository: https://github.com/Alienware2000/ymau-vi-addis-ababa
- Production: https://ymau-vi-addis-ababa.vercel.app
- Vercel project: `alienware2000s-projects/ymau-vi-addis-ababa`
- Stack: Next.js 16.3 App Router. Node 22+.
- Branch from current `main`. Do not start from `codex/hero-video-design`.

`main` already includes:

| Merge | What it shipped |
| --- | --- |
| PR #4 (`6d6050c`) | Ethiopia homepage film, `v=11` |
| PR #5 (`357873a`) | Aby public-content pass: careers, letter, secretariat, ambassadors directory, partners, committee archive |
| PR #6 (`f653050`) | Welcome-letter layout, YaleNew letter typography, AU white lockup, enlarged partner logo wells |
| PR #7 (`661ef2a`) | Partner archive trim: KCB Group and Model Conferences Ghana removed |
| Merge `0782334` (20 Aug 2026, deployed) | Recruitment-brief content pass (registration windows and fees, financial aid deadlines and packages, careers timeline ledger), the ten-committee YMAU VI slate, the serif-by-default typography system, real YMAU V homepage photos, sitewide UX/QA fixes, contact-desk routing |

Paste [`docs/RESUME_PROMPT.md`](docs/RESUME_PROMPT.md) into a fresh Claude Code session after cloning.

## Do this first in a new session

1. Read this file and `docs/ABY_CONTENT_RESUME.md`.
2. Run `git status -sb` and confirm you are on current `main` (or a new branch from it).
3. `git lfs install && git lfs pull`. Confirm `public/ethiopia-film.mp4` and `public/ethiopia-film-mobile.mp4` are real MP4s, not Git LFS pointer files.
4. `npm install && npm run dev`. Open http://localhost:3000.
5. Report git, production, and remaining-work state. Wait for David’s next instruction.

Do not invent the next feature. Do not start parked work.

## Guardrails

- Film stays `v=11` in `app/page.tsx`. Do not run `npm run hero:build`.
- Contact desks (all clickable mailto links on `/contact`): registration and financial aid → `programs@yalemodelau.org`; marketing and partnership inquiries → `operations@yalemodelau.org`; conference programming and committees logistics → `committees@yalemodelau.org`; Office of the Secretary-General → `president@yalemodelau.org`. Do not publish personal phone numbers or personal email addresses.
- Ambassadors: name, institution, bio, photo only. No email, phone, or date of birth.
- The YMAU VI committee slate (ten rooms) is published; only the bolded "Description (for website)" text from the committees doc is public. Agendas, delegate levels, background guides and portfolio allocations remain forthcoming — do not invent them. The internal "link to theme" notes in the doc stay off the site.
- Do not invent unreleased copy. Forthcoming pages stay forthcoming.
- Conference dates stay **15-17 March 2027** until Aby confirms otherwise. Registration: opens 5 October 2026 (9:00 AM EAT); early bird $60 to 15 Nov; regular $80 to 10 Jan 2027; late $100 to 1 Feb 2027. Financial aid: Africa-based applicants only; priority review by 16 Nov 2026 (only window for flight/visa support); regular by 31 Dec 2026.
- African Union logo on the site is the opaque white official lockup: `public/ymau-media/partners/african-union-lockup.png`. Do not restore a black plate behind it.
- Follow the typography system (see Typography). Content text is the display serif by default; do not add per-element sans "fixes", and never let reader-facing text drop below 14px.
- Caveats/notes use the accent-colored 15px serif recipe with 44px clear air (`.attend-section__note` and siblings). No vertical-bar callouts, no "NOTE" labels, no boxes — David has rejected those repeatedly.
- Do not commit `next-env.d.ts` when `next dev` rewrites it to `.next/dev/types/`.
- Do not commit, push, or deploy unless David asks. (Vercel auto-deploys pushes to `main`.)

## Typography system (added 20 Aug 2026)

The class of "this text is the wrong font/size" bugs was closed by inverting the default:

- `body` in `app/globals.css` sets the display serif (`--font-display`: `"YaleNew", "Cormorant Garamond Local"`) at 17px. All reader-facing content inherits it. YaleNew has no webfont — visitors without it installed see Cormorant Garamond.
- Interface micro-labels (eyebrows, kickers, tags, status pills, credits, ribbons, the desktop nav bar, buttons) opt back into `--font-sans` in ONE grouped rule at the end of `globals.css`. Add new interface furniture there; never sprinkle per-element sans.
- Serif for reading and display-scale text; sans for compact horizontal interface. That is why the desktop nav bar is sans 11.5px while the mobile menu (display-scale) is serif.
- Size floors: body copy ~16.5-21px, fine print/captions >= 14px, interface labels 10-13px. The serif runs visually small — compensate, never shrink.
- Structured data uses `.schedule-ledger` (small-caps label / serif primary / italic serif secondary rows: registration fees, financial aid deadlines, aid packages, careers timeline, history editions, ways to register). Checklists use `.editorial-numbered-list`. Fold caveat content into these structures where possible instead of dangling notes.
- Shared `LinkedParagraph` (in `app/_components/editorial-content.tsx`) auto-links every email address in body copy.

## Letter

Homepage `.city-story` matches the approved production layout:

- Grid: `minmax(360px, 0.78fr) minmax(0, 1.22fr)`
- Padding: `clamp(72px, 7vw, 108px) clamp(46px, 7vw, 112px)`
- Quote: `clamp(34px, 3.4vw, 54px)`, `line-height: 1.04`, `margin: 58px 0 30px`, `max-width: 760px`
- Home letter + CTA: `max-width: 680px`, body `17px` / `1.72` / `opacity: .85` (raised from the original 14px/.8 at David's direction on 20 Aug 2026)

Full letter `/secretary-general`: two-column sticky intro (title + quote stay; letter scrolls). Sheet color is `var(--paper-light)` (`#f7f4ed`), matching the following section. Sign-off titles use the same serif as the name. Public copy uses hyphens and middots, not em dashes.

Key files: `app/globals.css` (`.city-story*`, `.sg-letter*`, `.signed-letter*`), `app/page.tsx`, `app/_components/signed-letter.tsx`, `app/public-directory.ts`.

## Committees

The YMAU VI slate is live on `/committees` (`ymauVICommittees` in `app/site-content.ts`): ECOSOCC, PSC, ACHPR, and seven STCs, each with the bolded for-website description from the committees doc (https://docs.google.com/document/d/1_wlS0SWbwdq0A8ADPW5Oj5bg1t8FFtsJQRlvrkWUgJE/, second tab). Theme: Our Vision, Our Victory · championing African success on African terms. The doc's heading says "ECOSOC"; the site uses the official "Economic, Social and Cultural Council (ECOSOCC)" — confirm with Aby if she prefers the doc spelling. YMAU V rooms remain below as archive. Still forthcoming: agendas, delegate levels, background guides, portfolio allocations (`committeeReleaseItems`).

## Registration and financial aid

Sourced from the 2026-27 Recruitment Brief (https://docs.google.com/document/d/1zFkQHdpDCe7g9PqVmzFvKWiuLPTsIB_HGK92CfNVG6M/, all three tabs; the late-registration year typo in the doc was fixed to 2027 in the doc itself). Public on `/registration` and `/financial-aid` as schedule ledgers: the three fee windows, eligibility (16-25, minors with a 21+ chaperone and consent form), ways to register (individual / delegation 2-25 / advisor, no advisor fee), aid batches with decision dates, and the three aid packages. Internal-only and NOT published: regional flight quotas, budgets, the scoring rubric, reviewer pods, bed capacities. The doc's at-a-glance venue ("African Union Headquarters") and 500+ delegate goal are also unpublished pending David's call — the site still says venue TBA.

## Partners

Current co-organizers live on `/partners`. The YMAU V archive and earlier collaborators live on `/past-partners`.

KCB Group and Model Conferences Ghana LBG were removed from `ymauVPartners` in `app/public-directory.ts`. Unused logos `kcb-group.png` and `model-conferences-ghana.png` were deleted.

Archive ledger layout in `app/_components/institutional-page.tsx` and `app/globals.css`:

- One organization: `.partner-wall__grid--solo` (narrow tile, not a stretched banner and not an empty 3-column hole).
- Two or four organizations: `.partner-wall__grid--pair` (complete 2-column / 2×2 ledger).
- Other counts keep the 3-column grid. Below 560px every grid is one column.

Current YMAU V counts after the removal: Platinum 1, Gold 8, Silver 4, Bronze 4, Strategic 2, Conference 1 (Kenya Airways). Gateway copy on `/partners` uses `ymauVPartners.length`.

## Ambassadors

`app/ambassador-directory.ts` holds the public names, institutions, and supplied bios. `photoSrc` is still unpublished; Drive headshots returned “not found” to the connected account. Do not add photos until the folder is shared and David asks. Do not rewrite supplied bios.

Known mismatch awaiting David/Aby: the site copy and stats say 97 ambassadors but the directory lists 91, unsorted with mixed name casing. Source spreadsheet: https://docs.google.com/spreadsheets/d/1q93jh2avBCb-w2dWb-GRWvy5AyW8gxBVeq_pLjAyBWo/ (contains phone numbers and DOBs — publish name/institution/bio/photo only).

## Photography

Homepage experience photos are real YMAU V shots from Fred Sebowa's Drive folder (537 photos: https://drive.google.com/drive/folders/19V4efY8SdfE4cPwEfpfnlqYjMK5Hzr-V): `home/ymau-v-plenary-applause.jpg` and `home/ymau-v-committee-negotiation.jpg`, optimized to 2400px. The test suite's perceptual-hash guard blocks re-using the same scene twice — and a human reads two frames of one session as "the same photo", so pick visually distinct scenes, not just distinct files. The generic Pexels conference stock is deleted.

## Known backlog (small, low severity)

- History page ledger: YMAU III · Johannesburg · 2024 and IV · Nairobi · 2025 are inferred from the annual sequence, not sourced — confirm the years.
- `/contact` social rows (Instagram/LinkedIn) are plain text, not links.
- Several site-content.ts entries are silently unrendered because their pages are hand-built components (`/recap`, `/programme`, `/addis-ababa`, `/city-guide`, partner pages) — a content-drift trap for editors.
- FAQ fee answer could cross-link the registration ledger.
- The old "Delegate recruitment and external operations" contact desk (Gumana's personal Yale email) was removed in the 20 Aug contact routing; restore only if David asks.

## Restore on another computer

Install Git LFS before pulling the media files.

```bash
git lfs install
git clone https://github.com/Alienware2000/ymau-vi-addis-ababa.git
cd ymau-vi-addis-ababa
git lfs pull
npm install
npm run dev
```

Open http://localhost:3000. The current film is the default homepage hero.

To reconnect the Vercel CLI, sign into the `alienware2000` account and run:

```bash
vercel link --project ymau-vi-addis-ababa
```

The app has no required application secrets at this stage. Do not copy `.vercel`, shell credentials, GitHub tokens, or another machine’s agent directory.

## Parked (do not start unless asked)

**French and Amharic as the real site.** English stays `/about`. French `/fr`, `/fr/about`, … Amharic `/am`, `/am/about`, … Language switch stays on the matching page. Same `v=11` film. Forthcoming English pages stay forthcoming, translated. Hidden committee routes stay hidden. First translation marked for native review.

**Knack replacement, quiet operations layer.** Hidden `/apply` and `/review`, not in the nav (same pattern as `/topic-guides`). Public `/registration` stays editorial. Magic-link login; reviewers are an email allowlist. No payments in v1. Visual language matches the conference site, not a dashboard.

**Domain:** yalemodelau.org later; archive the V Squarespace site first.

## Verification

After code changes:

```bash
npm run lint
node --test tests/*.test.mjs
npm run build
```

Do not merge or deploy until David asks.

## Film

Do not change the film unless David explicitly asks.

Hero files: `public/ethiopia-film.mp4` / `ethiopia-film-mobile.mp4` / `ethiopia-film-poster.jpg` (`v=11` in `app/page.tsx`).

The team has not given final media approval. The current selection is a polished review version, subject to later feedback.

Visual sequence:

1. Lush Ethiopian highlands, beginning near the crisp green portion rather than the earlier grey-blue foliage.
2. The original camel shot requested from approximately `00:00:11–00:00:20` of the downloaded 1080p Ethiopia film.
3. Person on the Gheralta ledge and mountains from approximately `00:02:49–00:03:02`.
4. The longer person-and-mountains passage from approximately `00:15:00–00:15:41`; the handoff into Lalibela should occur around the frame with the white-clad figure at the rock doorway.
5. Lalibela, retained in the sequence.
6. The current moving Addis Ababa night/panorama passage.
7. A smooth return to the lush highlands, then the complete sequence loops.

Editorial decisions already made:

- Use fades, never hard cuts.
- Current dissolves are about 1.2 seconds.
- Keep an original-film pace; the earlier `transitions=slow` experiment felt too slow.
- Let the longer Gheralta passage breathe before Lalibela.
- Preserve distinct desktop and portrait renders.
- Keep the homepage overlay restrained.
- The old “WATCH THE ETHIOPIA FILM” interaction now opens the stitched film.

Current media delivery (Git LFS):

| File | Dimensions | Duration | Approximate bitrate | Size |
| --- | ---: | ---: | --- | ---: |
| `public/ethiopia-film.mp4` | 1920×1080 | 89.0 s | 9.92 Mbps | 110,386,401 bytes |
| `public/ethiopia-film-mobile.mp4` | 1080×1920 | 89.0 s | 13.68 Mbps | 152,211,527 bytes |
| `public/ethiopia-film-poster.jpg` | desktop poster | — | — | 688,833 bytes |

Vercel serves the committed MP4 bytes and supports HTTP range requests; it is not resizing or transcoding them.

Quality limitation: several requested shots originated in an already-compressed 1920×1080 landscape file. A 9:16 crop uses only about 608×1080 of that frame and then enlarges it to 1080×1920. Encoding cannot restore detail absent from the source.

The next quality/performance exploration should be a landscape-and-portrait adaptive streaming ladder (HLS or DASH) from licensed high-resolution masters.

`config/hero-film.json`, `scripts/hero-film.mjs`, `docs/hero-film-treatment.md`, and `docs/hero-film-source-register.md` describe a stricter future workflow for licensed UHD masters. They do **not** currently reproduce the 89-second `v=11` proof edit. Do not run `npm run hero:build` expecting it to recreate the live film.

Local-only material that is not backed up by the repository:

- `.hero-film-sources/01-highlands-master.mp4` — ignored 4K Pexels source. It can be downloaded again from the source URL in `config/hero-film.json`.
- Downloaded source film in `~/Downloads` — not committed and not a production-licensed asset.
- `.vercel/` — machine-specific project link.
- `node_modules`, `.next`, `dist`, and `outputs`.

Do not place raw third-party footage, credentials, or licenses containing personal billing details in the public repository.

Film remaining decisions:

1. Collect team feedback on the current live sequence and pacing.
2. Decide whether the Addis night shot stays or is replaced with a clearer moving view featuring the CBE Headquarters tower.
3. Confirm commercial reuse rights for every non-Pexels proof shot before treating the media as final.
4. Obtain native UHD masters for the camel, Gheralta, Lalibela, and Addis scenes.
5. Reconcile `config/hero-film.json` with the final approved timeline.
6. Consider HLS/DASH adaptive streaming.

Design guardrails for film work: professional, editorial, restrained and culturally grounded. Maintain legibility on desktop and mobile. Avoid excessive navy overlays, crushed blacks, over-saturation, whip pans, hard cuts and fast montage. Never silently swap footage or lower source quality to reduce file size.
