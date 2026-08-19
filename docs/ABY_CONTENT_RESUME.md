# Resume: Aby public-content pass

Last updated: 19 August 2026

Work in a **new chat**. Read `HANDOFF.md` first, then this file. Do not continue a long planning thread.

## Git and preview

- Repo: https://github.com/Alienware2000/ymau-vi-addis-ababa
- Production: https://ymau-vi-addis-ababa.vercel.app
- `main` includes the Ethiopia hero (`ethiopia-film.mp4?v=11`) via PR #4, the public-content pass via PR #5, and the letter/lockup pass via PR #6.
- Create a **new branch from `main`** for new work. Do not start from `codex/hero-video-design`.
- Local: `npm install` if needed, `git lfs pull`, `npm run dev`, watch http://localhost:3000
- Do not merge, push, or deploy until David asks.

## Implementation status — 19 August 2026

The original public-content pass is on `main`. Do not re-implement it.

- [x] **Careers:** public dates, eight YMAU VI role scopes, eligibility/workload, YIRA support, application instructions, coffee-chat link and `president@yalemodelau.org`.
- [x] **Secretary-General:** Aby portrait, full letter, quote and signature on `/secretary-general`; compact signed excerpt on the homepage. Letter layout uses production measurements and a paper-light sheet. Em dashes removed from public copy.
- [x] **Secretariat:** Aby, Meti, Gumana and Amin bios and portraits.
- [ ] **Ambassadors:** public names, institutions and supplied bios are in `app/ambassador-directory.ts`. Headshots are still unpublished (`photoSrc` unused) because the Drive files were not available to the connected account. Do not invent photos or rewrite bios.
- [x] **Partners:** current YMAU VI co-organizers on `/partners`; YMAU V archive and earlier collaborators on `/past-partners`. AU uses the white official lockup. KCB Group and Model Conferences Ghana are not in the V archive.
- [x] **Committees:** ten YMAU V rooms recorded as archive; YMAU VI slate remains forthcoming.
- [x] **Guardrails:** homepage film remains `v=11`; no hero rebuild; no personal phone number.

## Sources

- Web Design / portraits / signature / website copy doc: https://drive.google.com/drive/folders/1Z9gJptF27R_jLaKL8xZcM-bX53IOGeuA
- USG position descriptions: https://docs.google.com/document/d/13VV6HPeiqypli2-RNKbu9CjfaigkBcDw8CrOL4vUXt8/edit
- Apply now (instructions doc, not a form): https://docs.google.com/document/d/1hCqkFPQTWZ5tCuQQKbAJCVP2CSfQwU92l6ObfiQnTqk/edit
- Ambassador directory: https://docs.google.com/spreadsheets/d/1q93jh2avBCb-w2dWb-GRWvy5AyW8gxBVeq_pLjAyBWo/edit?gid=895888792
- YMAU V partner logos: https://drive.google.com/drive/u/1/folders/1GIsfpsYz3jrkFvgmwNfPs_HCWUYxJ3Ml
- AU Youth blurb as provided; link https://au.int/en/youth-development
- MAU Ethiopia blurb as provided; link https://mauethiopia.org/
- Older logos: https://www.yalemodelau.org/

## Guardrails

- Editorial, restrained, no generic admin/card-grid slop. Reuse existing page templates.
- Do not invent unreleased copy. Forthcoming rooms stay forthcoming.
- Keep conference dates **15-17 March 2027 (three days)** until Aby confirms otherwise. The copy-doc thumbnail said “four days.”
- Careers: public dates only (open, coffee chats, info session, close, interviews, decisions). Omit reserve-room, billboard, bazaar, deliberations, YIRA approvals.
- Do not publish Aby’s personal phone. Use `president@yalemodelau.org`.
- Ambassadors: name, institution, bio, photo only. No email, phone, or date of birth.
- Use YMAU VI role write-ups, not leftover YMAU V / Ghana paragraphs in the descriptions doc.
- Film stays `v=11`. Do not run `npm run hero:build`.
- AU logo stays the white official lockup. Homepage letter stays on production measurements.

## Parked (do not start this session)

**French and Amharic as the real site (not one landing page each).** English stays `/about`. French `/fr`, `/fr/about`, … Amharic `/am`, `/am/about`, … Language switch stays on the matching page. Same `v=11` film. Forthcoming English pages stay forthcoming, translated. Hidden committee routes stay hidden. First translation marked for native review.

**Knack replacement, quiet operations layer.** Hidden `/apply` and `/review`, not in the nav (same pattern as `/topic-guides`). Public `/registration` stays editorial. Magic-link login for everyone; reviewers are an email allowlist. Key people by email so Google or Yale CAS can be added later. No payments in v1. Rubric: five 1–5 scores; example bands (10–15 housing, 15+ flights) are a **raw sum** (5–25), not a weighted average (max 5) — store raw scores, keep a `sum | weighted` flag. Visual language same as the conference site, not a dashboard.

**Domain:** yalemodelau.org later; archive the V Squarespace site first.

## Paste into a new session

Use the prompt in [`docs/RESUME_PROMPT.md`](RESUME_PROMPT.md).
