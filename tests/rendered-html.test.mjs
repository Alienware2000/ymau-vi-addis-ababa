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
  assert.match(page, /11—14 March 2027/);
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
  assert.match(page, /Opening 21 September 2026/);
  assert.doesNotMatch(page, /example\.org|codex-preview|Your site is taking shape/i);
  assert.doesNotMatch(page, /[→←↑↓↗↘➜➝➞➔➤⟶⇢›»]/, "link icons must not render as iOS emoji glyphs");

  const internalTargets = [...page.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
  assert.ok(internalTargets.length > 0);
  for (const target of new Set(internalTargets)) {
    assert.match(page, new RegExp(`id=["']${target}["']`), `missing section for #${target}`);
  }
});

test("ships the local cinematic assets and responsive design system", async () => {
  const [page, css, video, mobileVideo] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    stat(new URL("../public/ethiopia-highlands.mp4", import.meta.url)),
    stat(new URL("../public/ethiopia-highlands-mobile.mp4", import.meta.url)),
    access(new URL("../public/ethiopia-highlands-poster.jpg", import.meta.url)),
    access(new URL("../public/cormorant-garamond.woff2", import.meta.url)),
    access(new URL("../public/cormorant-garamond-italic.woff2", import.meta.url)),
    access(new URL("../public/manrope.woff2", import.meta.url)),
    access(new URL("../public/noto-sans-ethiopic.woff2", import.meta.url)),
  ]);

  assert.ok(video.size < 15_000_000, "desktop hero film should stay below 15 MB");
  assert.ok(mobileVideo.size < 8_000_000, "mobile hero film should stay below 8 MB");
  assert.match(page, /video\.play\(\)/);
  assert.match(page, /video\.pause\(\)/);
  assert.match(page, /visibilitychange/);
  assert.match(page, /IntersectionObserver/);
  assert.match(css, /@font-face/);
  assert.match(css, /Noto Sans Ethiopic/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.programme__days/);
  assert.match(css, /@media \(max-width: 680px\)/);
  assert.doesNotMatch(css, /backdrop-filter/, "fixed navigation should not force blurred scroll repaints");
});
