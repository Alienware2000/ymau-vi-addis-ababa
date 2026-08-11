# YMAU VI — Addis Ababa

A fictional design concept for the sixth Yale Model African Union conference,
set in Addis Ababa, Ethiopia, from 11–14 March 2027.

The site is intentionally editorial and focused: one immersive conference page,
real cultural references, adaptive background film, programme information,
committee concepts, and delegation guidance.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Production checks:

```bash
npm test
npm run lint
```

## Navigation strategy

The current navigation points only to sections that exist. The invitation CTA
uses an explicit opening-date state instead of a fictional contact address.

This first release deliberately remains a single-page experience. If the
project expands, the strongest candidates for real routes are:

- `/about` — mission, leadership and secretariat
- `/conference` — venue, travel guidance and detailed schedule
- `/committees` — committee briefs and topic guides
- `/delegations` — eligibility, fees, deadlines and applications

Routes should be introduced only when they contain useful content. Any linked
route that is not yet ready should ship as a designed “Coming soon” page with a
clear expected release window; navigation should never lead to an empty or
broken destination.

## Credits

Film and photography credits, along with the cultural and language references,
are listed in the site footer.
