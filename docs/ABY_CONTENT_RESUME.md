# Resume: Aby public-content pass

Last updated: 16 August 2026

Work in a **new chat**. Do not continue the long planning thread. Read this file, then `HANDOFF.md` only if you will touch the homepage film.

## Git and preview

- Repo: https://github.com/Alienware2000/ymau-vi-addis-ababa
- `main` now includes the Ethiopia hero (`ethiopia-film.mp4?v=11`) via merged PR #4 (`6d6050c`).
- Create a **new branch from `main`** for this pass. Do not start from `codex/hero-video-design`.
- Local only: `npm install` if needed, `npm run dev`, watch http://localhost:3000
- Do not merge to `main` until David asks.

## Do now (public site)

This is the active plan. The Cursor Plan UI file is not in git; this document is.

1. **`/careers`** — replace “forthcoming” in `app/site-content.ts`.
   - Public timeline only: open 30 Aug; optional coffee chats 6–14 Sep; info session week of 7 Sep at AfAm House; close 12 Sep 11:59pm EST; interviews 15–19 Sep; decisions 24 Sep.
   - Omit: reserve Founders Room, billboard, Res Group Bazaar, deliberations, YIRA approvals.
   - Apply now → the instructions doc (copy application, PDF, email `president@yalemodelau.org`).
   - Roles (YMAU VI write-ups only, not leftover V/Ghana copy): USG Business and Sponsorship (1); Co-USG Branding and Marketing (2); Co-USG Delegate Recruitment (2); USG Technology and Digital Infrastructure (1); USG Committees (1); USG Speaker Outreach (1); USG Conference (1); USG Executive Affairs (1).
   - Also: Yale students, all class years, ~8–10 hours/week, YIRA flight stipend and conference board.
2. **`/secretary-general` + homepage letter** — Aby portrait, signature, letter/quotes from the copy doc in the Web Design folder.
3. **`/secretariat`** — Meti, Gumana, Amin portraits next to the four names already listed. Other members stay forthcoming unless the copy doc names them.
4. **`/ambassadors`** — name, institution, bio, photo from the sheet + headshots. No email, phone, or DOB.
5. **`/partners`** — AU Youth Division blurb/logo/`au.int/en/youth-development`; MAU Ethiopia blurb/`mauethiopia.org` (fix “enterpenureship” to “entrepreneurship” unless she wants the typo); V logos from Drive; older logos from yalemodelau.org, labelled as past.
6. **`/committees`** — ten YMAU V rooms already in `committeeArchive`; confirm against the V report; keep “2027 forthcoming.” Do not present V as the VI slate.

## Implementation status — 17 August 2026

Branch: `content/aby-public-pass`. Work remains local and uncommitted; nothing has been merged to `main`.

- [x] **Careers:** public dates, all eight YMAU VI role scopes, eligibility/workload, YIRA support, application instructions, coffee-chat link and `president@yalemodelau.org`.
- [x] **Secretary-General:** Aby portrait, full letter, quote and signature on `/secretary-general`; a compact signed excerpt and clear full-letter link on the homepage.
- [x] **Secretariat:** Aby, Meti, Gumana and Amin bios and portraits.
- [ ] **Ambassadors:** all 90 public names, institutions and supplied bios are present in an expandable directory. The 90 headshot IDs are mapped in `scripts/ambassador-download-map.json`, but the files return “not found” to the authenticated Drive integration and no `photoSrc` values are currently published. The headshot folder/files must be shared with the connected Drive account before this line is complete.
- [x] **Partners:** both current YMAU VI co-organizers are named; the supplied MAU Ethiopia logo is included; the YMAU V archive is organized by the Platinum, Gold, Silver, Bronze, Strategic and Conference groups found in Drive; earlier collaborators and their archived logos are separated on `/past-partners`.
- [x] **Committees:** the ten YMAU V rooms are recorded as a verified archive; the YMAU VI slate remains explicitly forthcoming.
- [x] **Guardrails:** homepage film remains `v=11`; no hero rebuild; no personal phone number; no French/Amharic expansion or operations layer work.
- [ ] **Release:** run the final lint, test and production-build checks after the last content edit, complete a final browser pass, then wait for David’s approval before any commit, PR or merge.

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
- Keep conference dates **15–17 March 2027 (three days)** until Aby confirms otherwise. The copy-doc thumbnail said “four days.”
- Careers: public dates only (open, coffee chats, info session, close, interviews, decisions). Omit reserve-room, billboard, bazaar, deliberations, YIRA approvals.
- Do not publish Aby’s personal phone. Use `president@yalemodelau.org`.
- Ambassadors: name, institution, bio, photo only. No email, phone, or date of birth.
- Use YMAU VI role write-ups, not leftover YMAU V / Ghana paragraphs in the descriptions doc.
- Film stays `v=11`. Do not run `npm run hero:build`.

## Parked (do not start this session)

Full write-up of later work, so it is not trapped in a Cursor-only plan file.

**French and Amharic as the real site (not one landing page each).** English stays `/about`. French `/fr`, `/fr/about`, … Amharic `/am`, `/am/about`, … Language switch stays on the matching page. Same `v=11` film. Forthcoming English pages stay forthcoming, translated. Hidden committee routes stay hidden. First translation marked for native review.

**Knack replacement, quiet operations layer.** Hidden `/apply` and `/review`, not in the nav (same pattern as `/topic-guides`). Public `/registration` stays editorial. Magic-link login for everyone; reviewers are an email allowlist. Key people by email so Google or Yale CAS can be added later. No payments in v1. Rubric: five 1–5 scores; example bands (10–15 housing, 15+ flights) are a **raw sum** (5–25), not a weighted average (max 5) — store raw scores, keep a `sum | weighted` flag. Visual language same as the conference site, not a dashboard.

**Domain:** yalemodelau.org later; archive the V Squarespace site first.

## Paste into a new session

> Read `docs/ABY_CONTENT_RESUME.md` completely. Branch from current `main`. Work locally with `npm run dev`. Implement the Aby public-content pass in the order listed. Do not change the hero film. Do not start French/Amharic or the operations layer. Confirm you have the Drive/docs open before editing.
