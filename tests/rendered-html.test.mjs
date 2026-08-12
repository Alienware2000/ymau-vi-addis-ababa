import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

test("defines the complete YMAU VI conference homepage", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /YMAU VI — Addis Ababa 2027/);
  assert.match(page, /Yale Model/);
  assert.match(page, /African Union VI/);
  assert.match(page, /Addis Ababa, Ethiopia/);
  assert.match(page, /15—17 March 2027/);
  assert.match(page, /id="committees"/);
  assert.match(page, /id="programme"/);
  assert.match(page, /id="delegations"/);
  assert.match(page, /Field notes/);
  assert.match(page, /አዲስ አበባ/);
  assert.match(page, /Pronounce/);
  assert.match(page, /ad-DEES AH-buh-bah/);
  assert.match(page, /አመሰግናለሁ/);
  assert.match(page, /Ameseginalehu/);
  assert.match(page, /One phrase to carry/);
  assert.match(page, /Africa gathered here/);
  assert.match(page, /ethiopia-highlands-mobile\.mp4/);
  assert.match(page, /ethiopia-highlands\.mp4/);
  assert.match(page, /autoPlay/);
  assert.match(page, /muted/);
  assert.match(page, /playsInline/);
  assert.match(page, /Registration timetable/);
  assert.match(page, /interest__wordmark/);
  assert.match(page, /ymau-wordmark-white\.png/);
  assert.match(page, /Sixth edition/);
  assert.match(page, /historicalStats/);
  assert.match(page, /AnimatedNumber/);
  assert.match(page, /YMAU V · Accra 2026/);
  assert.doesNotMatch(page, /11—14 March 2027|21 September 2026/);
  assert.doesNotMatch(page, /example\.org|codex-preview|Your site is taking shape/i);
  assert.doesNotMatch(page, /[→←↑↓↗↘➜➝➞➔➤⟶⇢›»]/, "link icons must not render as iOS emoji glyphs");

  const internalTargets = [...page.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
  assert.ok(internalTargets.length > 0);
  for (const target of new Set(internalTargets)) {
    assert.match(page, new RegExp(`id=["']${target}["']`), `missing section for #${target}`);
  }
});

test("provides real secondary routes and localized landing editions", async () => {
  const [content, route, french, amharic, informationPage, siteHeader, heroImages] = await Promise.all([
    readFile(new URL("../app/site-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/fr/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/am/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/information-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page-hero-images.ts", import.meta.url), "utf8"),
  ]);

  const slugs = [
    "about", "history", "secretary-general", "secretariat", "ambassadors",
    "programme", "theme", "mandate-to-market", "pre-conference", "recap",
    "committees", "committee-preparation", "topic-guides", "committee-policies",
    "registration", "financial-aid", "faq", "travel-guide",
    "addis-ababa", "city-guide", "partners", "past-partners", "sponsor", "contact",
  ];

  for (const slug of slugs) {
    assert.match(content, new RegExp(`["']?${slug}["']?\\s*:`));
    assert.match(heroImages, new RegExp(`["']?${slug}["']?\\s*:`), `missing image direction for ${slug}`);
    await access(new URL(`../public/ymau-media/pages/${slug}.webp`, import.meta.url));
  }
  assert.equal(new Set([...heroImages.matchAll(/src: "\/ymau-media\/pages\/([^"]+)\.webp"/g)].map((match) => match[1])).size, slugs.length);
  assert.match(route, /generateStaticParams/);
  assert.match(informationPage, /section-sidebar/);
  assert.match(informationPage, /inner-hero__image/);
  assert.match(informationPage, /inner-hero__image-note/);
  assert.match(informationPage, /inner-hero__native/);
  assert.doesNotMatch(informationPage, /images\.pexels\.com|images\.unsplash\.com/);
  assert.match(informationPage, /Official photography will appear here once approved/);
  assert.match(siteHeader, /openGroup/);
  assert.match(siteHeader, /name="primary-navigation-group"/);
  assert.match(siteHeader, /setOpenGroup\(null\)/);
  assert.match(french, /Notre vision, notre victoire/);
  assert.match(amharic, /ራዕያችን፣ ድላችን/);
});

test("ships the local cinematic assets and responsive design system", async () => {
  const [page, css, video, mobileVideo, programmeOpening, programmeDeliberation, programmeClosing] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    stat(new URL("../public/ethiopia-highlands.mp4", import.meta.url)),
    stat(new URL("../public/ethiopia-highlands-mobile.mp4", import.meta.url)),
    stat(new URL("../public/ymau-media/programme-opening.webp", import.meta.url)),
    stat(new URL("../public/ymau-media/programme-deliberation.webp", import.meta.url)),
    stat(new URL("../public/ymau-media/programme-closing.webp", import.meta.url)),
    access(new URL("../public/ethiopia-highlands-poster.jpg", import.meta.url)),
    access(new URL("../public/cormorant-garamond.woff2", import.meta.url)),
    access(new URL("../public/cormorant-garamond-italic.woff2", import.meta.url)),
    access(new URL("../public/manrope.woff2", import.meta.url)),
    access(new URL("../public/noto-sans-ethiopic.woff2", import.meta.url)),
  ]);

  assert.ok(video.size < 15_000_000, "desktop hero film should stay below 15 MB");
  assert.ok(mobileVideo.size < 8_000_000, "mobile hero film should stay below 8 MB");
  assert.ok(programmeOpening.size < 1_200_000, "opening photograph should be web optimized");
  assert.ok(programmeDeliberation.size < 1_200_000, "deliberation photograph should be web optimized");
  assert.ok(programmeClosing.size < 1_200_000, "closing photograph should be web optimized");
  assert.match(page, /ymau-media\/programme-opening\.webp/);
  assert.match(page, /ymau-media\/programme-deliberation\.webp/);
  assert.match(page, /ymau-media\/programme-closing\.webp/);
  assert.doesNotMatch(page, /ribbon/);
  assert.match(page, /video\.play\(\)/);
  assert.match(page, /video\.pause\(\)/);
  assert.match(page, /visibilitychange/);
  assert.match(page, /IntersectionObserver/);
  assert.match(css, /@font-face/);
  assert.match(css, /Noto Sans Ethiopic/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.programme__days/);
  assert.match(css, /@media \(max-width: 680px\)/);
  assert.match(css, /min-height:\s*100svh/);
  assert.match(css, /min\(9\.3vw, 18svh\)/);
  assert.doesNotMatch(css, /min-height:\s*max\(680px/, "the hero must not force short laptop viewports to scroll");
  assert.doesNotMatch(css, /backdrop-filter/, "fixed navigation should not force blurred scroll repaints");
});
