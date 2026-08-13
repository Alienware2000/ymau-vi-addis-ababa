import assert from "node:assert/strict";
import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import sharp from "sharp";

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(fullPath) : [fullPath];
  }))).flat();
}

async function perceptualHash(file) {
  const { data } = await sharp(file).rotate().greyscale().resize(9, 8, { fit: "fill" }).raw().toBuffer({ resolveWithObject: true });
  let hash = 0n;
  let bit = 1n;

  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      if (data[(y * 9) + x] > data[(y * 9) + x + 1]) hash |= bit;
      bit <<= 1n;
    }
  }

  return hash;
}

function hammingDistance(left, right) {
  let difference = left ^ right;
  let distance = 0;
  while (difference) {
    distance += Number(difference & 1n);
    difference >>= 1n;
  }
  return distance;
}

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
  assert.match(page, /CulturalAnnotation/);
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
  assert.match(page, /ymauVConferenceMetrics/);
  assert.match(page, /AnimatedStatGrid/);
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

test("uses one accessible and culturally contextual Amharic annotation system", async () => {
  const [annotation, lexicon, homepage, pageShell, informationPage, addisPage, cityGuide, themePage, mediaLibrary] = await Promise.all([
    readFile(new URL("../app/_components/cultural-annotation.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/cultural-lexicon.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/page-shell.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/information-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/addis-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/city-guide-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/theme-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/media-library.ts", import.meta.url), "utf8"),
  ]);

  assert.match(annotation, /aria-expanded=\{open\}/);
  assert.match(annotation, /aria-controls=\{popoverId\}/);
  assert.match(annotation, /onFocus/);
  assert.match(annotation, /onClick/);
  assert.match(annotation, /event\.key === "Escape"/);
  assert.match(annotation, /document\.addEventListener\("pointerdown"/);
  assert.match(annotation, /English sound guide · approximate/);
  assert.match(lexicon, /አዲስ አበባ/);
  assert.match(lexicon, /አመሰግናለሁ/);
  assert.match(lexicon, /ሰላም/);
  assert.match(lexicon, /ቡና/);
  assert.match(lexicon, /አንድነት/);
  assert.doesNotMatch(homepage, /function TranslationTerm/);
  for (const source of [homepage, pageShell, informationPage, addisPage, cityGuide, themePage]) {
    assert.match(source, /CulturalAnnotation/);
  }
  assert.doesNotMatch(mediaLibrary, /archivePlenaryRoom|plenary-room\.jpg/);
  await assert.rejects(access(new URL("../public/ymau-media/archive/plenary-room.jpg", import.meta.url)));
});

test("uses one accessible count-up system for every conference metric surface", async () => {
  const [metrics, animatedNumber, animatedGrid, homePage, recapPage, aboutPage, content] = await Promise.all([
    readFile(new URL("../app/conference-metrics.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/animated-number.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/animated-stat-grid.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/recap-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/about-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site-content.ts", import.meta.url), "utf8"),
  ]);

  assert.match(metrics, /ymauVConferenceMetrics/);
  assert.match(metrics, /ymauVIAmbassadorMetrics/);
  assert.match(metrics, /financialAidMetrics/);
  assert.match(animatedNumber, /IntersectionObserver/);
  assert.match(animatedNumber, /prefers-reduced-motion/);
  assert.match(animatedNumber, /delay = 0/);
  assert.match(animatedNumber, /aria-label=\{finalValue\}/);
  assert.match(animatedNumber, /data-animated-number="true"/);
  assert.match(animatedGrid, /index \* 115/);
  assert.match(homePage, /stats=\{ymauVConferenceMetrics\}/);
  assert.match(recapPage, /stats=\{ymauVConferenceMetrics\}/);
  assert.match(aboutPage, /ymauVIAmbassadorMetrics\.map/);
  assert.match(content, /stats: ymauVIAmbassadorMetrics/);
  assert.match(content, /stats: financialAidMetrics/);
  assert.doesNotMatch(homePage, /const historicalStats/);
  assert.doesNotMatch(recapPage, /const recapStats/);
});

test("keeps the full client change brief represented without inventing unreleased material", async () => {
  const [content, navigation, homepage, aboutPage, committeePage, themePage, attendPage, visaChecker, resourceCards, css] = await Promise.all([
    readFile(new URL("../app/site-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/site-navigation.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/about-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/committee-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/theme-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/attend-family-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/visa-pathway-checker.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/editorial-content.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(aboutPage, /about-editorial-rhythm/);
  assert.match(aboutPage, /routeEditorialMedia\.about/);
  assert.match(committeePage, /committee-page__visual-pair/);
  assert.match(committeePage, /committee-page__record-image/);
  assert.match(committeePage, /committee-page__release/);
  assert.match(themePage, /ScrollRevealSection/);
  assert.match(homepage, /home-recap/);
  assert.match(homepage, /YMAU V extended highlights/);

  for (const phrase of [
    "Mandate to Market application pack",
    "Awaiting the approved application pack",
    "Pre-conference webinar events",
    "Delegate training",
    "Position-paper writing",
    "Your application checklist",
    "Delegate Registration and Financial Aid Information Pack",
    "Application requirements",
    "Who is eligible",
    "How applications are reviewed",
    "Types of packages",
    "Addis Ababa Bole International Airport",
    "tourist category",
    "Applications to join the YMAU VI Secretariat are due 12 September",
    "Attend a YMAU information session or watch the Zoom recording",
    "Sign up for an optional coffee chat",
    "Receive a decision by late September",
  ]) {
    assert.match(content, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.doesNotMatch(navigation, /label: "Delegate preparation"/);
  assert.doesNotMatch(navigation, /label: "Topic guides"/);
  assert.doesNotMatch(navigation, /label: "Rules and policies"/);
  assert.match(attendPage, /AnimatedStatGrid/);
  assert.match(attendPage, /VisaPathwayChecker/);
  assert.match(visaChecker, /Visa-free/);
  assert.match(visaChecker, /Visa on arrival available/);
  assert.match(visaChecker, /Check advance eVisa/);
  assert.match(visaChecker, /www\.evisa\.gov\.et/);
  assert.match(resourceCards, /Not yet released/);
  assert.match(resourceCards, /aria-label/);
  assert.match(homepage, /id="main-content"/);
  const siteHeader = await readFile(new URL("../app/_components/site-header.tsx", import.meta.url), "utf8");
  assert.match(siteHeader, /className="skip-link"/);
  assert.match(siteHeader, /href="#main-content"/);
  assert.match(css, /calc\(100svh - 86px\)/);
  assert.match(css, /max-height: 800px/);
});

test("provides real secondary routes and localized landing editions", async () => {
  const [content, route, french, amharic, informationPage, siteHeader, heroImages, mediaLibrary, aboutPage, committeePage, homePage] = await Promise.all([
    readFile(new URL("../app/site-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/fr/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/am/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/information-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page-hero-images.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/media-library.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/about-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/committee-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);

  const slugs = [
    "about", "history", "secretary-general", "secretariat", "ambassadors", "careers",
    "programme", "theme", "mandate-to-market", "pre-conference", "recap",
    "committees", "committee-preparation", "topic-guides", "committee-policies",
    "registration", "financial-aid", "faq", "travel-guide",
    "addis-ababa", "city-guide", "partners", "past-partners", "sponsor", "contact",
  ];

  for (const slug of slugs) {
    assert.match(content, new RegExp(`["']?${slug}["']?\\s*:`));
    assert.match(heroImages, new RegExp(`["']?${slug}["']?\\s*:`), `missing image direction for ${slug}`);
  }
  const localHeroSources = [...heroImages.matchAll(/src: "(\/ymau-media\/[^"]+)"/g)].map((match) => match[1]);
  assert.ok(new Set(localHeroSources).size >= slugs.length, "every secondary route should have its own local hero treatment");
  for (const source of localHeroSources) {
    await access(new URL(`../public${source}`, import.meta.url));
  }
  const editorialSources = [...mediaLibrary.matchAll(/src: "(\/ymau-media\/[^"]+)"/g)].map((match) => match[1]);
  assert.ok(editorialSources.length >= 8, "the editorial catalogue should include a varied approved image pool");
  assert.equal(new Set(editorialSources).size, editorialSources.length, "catalogued media paths must remain unique");
  assert.equal(new Set([...localHeroSources, ...editorialSources]).size, localHeroSources.length + editorialSources.length, "hero and editorial assignments must not reuse photographs");
  for (const source of editorialSources) {
    await access(new URL(`../public${source}`, import.meta.url));
  }
  assert.match(mediaLibrary, /defineRouteMediaPlan/);
  assert.doesNotMatch(content, /image:\s*\{\s*src:\s*["']\/ymau-media/s, "page content should use the central media plan");
  assert.doesNotMatch(aboutPage, /src=["']\/ymau-media\/editorial\//, "About editorial images should use the central media plan");
  assert.match(route, /generateStaticParams/);
  assert.match(informationPage, /section-sidebar/);
  assert.match(informationPage, /inner-hero__image/);
  assert.match(informationPage, /inner-hero__image-note/);
  assert.match(informationPage, /inner-hero__native/);
  assert.doesNotMatch(informationPage, /images\.pexels\.com|images\.unsplash\.com/);
  assert.match(informationPage, /Official photography will appear here once approved/);
  assert.match(informationPage, /VisaPathwayChecker/);
  assert.match(informationPage, /AnimatedStatGrid/);
  assert.match(committeePage, /committeeArchive/);
  assert.match(committeePage, /Ten continental questions/);
  assert.match(homePage, /home-recap/);
  assert.match(homePage, /YMAU V extended highlights/);
  assert.match(siteHeader, /openGroup/);
  assert.match(siteHeader, /name="primary-navigation-group"/);
  assert.match(siteHeader, /setOpenGroup\(null\)/);
  assert.match(french, /Notre vision, notre victoire/);
  assert.match(amharic, /ራዕያችን፣ ድላችን/);
});

test("does not ship renamed or re-encoded copies of the same assigned photograph", async () => {
  const appDirectory = new URL("../app/", import.meta.url).pathname;
  const publicDirectory = new URL("../public/", import.meta.url).pathname;
  const sourceFiles = (await collectFiles(appDirectory)).filter((file) => /\.(?:ts|tsx)$/.test(file));
  const localImageSources = new Set();

  for (const file of sourceFiles) {
    const source = await readFile(file, "utf8");
    for (const match of source.matchAll(/["'](\/ymau-media\/[^"']+\.(?:jpe?g|png|webp))["']/gi)) {
      localImageSources.add(match[1]);
    }
  }

  const images = await Promise.all([...localImageSources].map(async (source) => ({
    source,
    hash: await perceptualHash(path.join(publicDirectory, source.slice(1))),
  })));

  for (let left = 0; left < images.length; left += 1) {
    for (let right = left + 1; right < images.length; right += 1) {
      assert.ok(
        hammingDistance(images[left].hash, images[right].hash) > 3,
        `${images[left].source} and ${images[right].source} appear to be duplicate photographs`,
      );
    }
  }
});

test("keeps party photography out of the editorial system and preserves full-resolution replacements", async () => {
  const mediaLibrary = await readFile(new URL("../app/media-library.ts", import.meta.url), "utf8");
  const removedPartyAssets = [
    "archive/soiree-conversation.jpg",
    "archive/soiree-dance.jpg",
    "editorial/ymau-v-soiree-gathering.jpg",
    "editorial/ymau-v-cultural-portrait.webp",
  ];

  assert.doesNotMatch(mediaLibrary, /Soirée|Soiree|soiree|dancing together/i);
  for (const asset of removedPartyAssets) {
    await assert.rejects(access(new URL(`../public/ymau-media/${asset}`, import.meta.url)));
  }

  const replacements = [
    "theme-practitioner-forum.jpg",
    "registration-information-pack.jpg",
    "committee-delegate-award.jpg",
  ];
  for (const asset of replacements) {
    const metadata = await sharp(new URL(`../public/ymau-media/editorial/${asset}`, import.meta.url).pathname).metadata();
    assert.ok(metadata.width >= 2400, `${asset} must retain its full-resolution source width`);
    assert.ok(metadata.height >= 2400, `${asset} must retain its full-resolution source height`);
    assert.match(mediaLibrary, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("ships the local cinematic assets and responsive design system", async () => {
  const [page, css, video, mobileVideo, programmeOpening, programmeDeliberation, programmeClosing] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    stat(new URL("../public/ethiopia-highlands.mp4", import.meta.url)),
    stat(new URL("../public/ethiopia-highlands-mobile.mp4", import.meta.url)),
    stat(new URL("../public/ymau-media/programme-opening.webp", import.meta.url)),
    stat(new URL("../public/ymau-media/editorial/programme-deliberation-room.jpg", import.meta.url)),
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
  assert.ok(programmeDeliberation.size > 3_000_000, "the deliberation source should retain the full-resolution archive original");
  assert.ok(programmeClosing.size < 1_200_000, "closing photograph should be web optimized");
  assert.match(page, /ymau-media\/programme-opening\.webp/);
  assert.match(page, /ymau-media\/editorial\/programme-deliberation-room\.jpg/);
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
  assert.match(css, /\.attend-metrics\s*\{[^}]*container-type:\s*inline-size/s);
  assert.match(css, /\.attend-metrics strong\s*\{[^}]*white-space:\s*nowrap/s);
  assert.doesNotMatch(css, /min-height:\s*max\(680px/, "the hero must not force short laptop viewports to scroll");
  assert.doesNotMatch(css, /backdrop-filter/, "fixed navigation should not force blurred scroll repaints");
});
