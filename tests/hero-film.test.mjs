import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const manifest = JSON.parse(
  await readFile(new URL("../config/hero-film.json", import.meta.url), "utf8"),
);

test("hero film manifest has one authoritative source for each movement", () => {
  const ids = manifest.sources.map((source) => source.id);
  assert.deepEqual(ids, [
    "highlands",
    "danakil-camels",
    "gheralta-person",
    "gheralta-landscape",
    "addis-night",
  ]);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(
    new Set(manifest.sources.map((source) => source.file)).size,
    manifest.sources.length,
  );
  assert.ok(manifest.sources.every((source) => source.sourceUrl.startsWith("https://")));
});

test("hero film timing is calm, concise, and loops back to green", () => {
  const sourceIds = new Set(manifest.sources.map((source) => source.id));
  assert.ok(manifest.timeline.every((shot) => sourceIds.has(shot.source)));
  assert.equal(manifest.timeline.at(0).source, "highlands");
  assert.equal(manifest.timeline.at(-1).source, "highlands");
  assert.ok(manifest.transitionSeconds >= 0.7 && manifest.transitionSeconds <= 1.2);

  const runtime = manifest.timeline.reduce((sum, shot) => sum + shot.duration, 0)
    - manifest.transitionSeconds * (manifest.timeline.length - 1);
  assert.ok(runtime >= 27 && runtime <= 30);

  for (const [source, minimum] of [
    ["danakil-camels", manifest.creativeRequirements.camelsMinimumVisibleSeconds],
    ["gheralta-person", manifest.creativeRequirements.gheraltaPersonMinimumVisibleSeconds],
    ["gheralta-landscape", manifest.creativeRequirements.gheraltaLandscapeMinimumVisibleSeconds],
    ["addis-night", manifest.creativeRequirements.addisNightMinimumVisibleSeconds],
  ]) {
    assert.ok(manifest.timeline.find((shot) => shot.source === source).duration >= minimum);
  }
  assert.equal(manifest.creativeRequirements.addisNightMustMove, true);
  assert.match(manifest.creativeRequirements.addisNightLandmark, /Commercial Bank of Ethiopia/i);
});

test("client video references are treated as a shot brief, never as source media", () => {
  assert.equal(manifest.creativeReferences.length, 3);
  assert.ok(manifest.creativeReferences.every((reference) => {
    return reference.usage === "visual_reference_only"
      && reference.sourceMediaAllowed === false;
  }));
  assert.ok(manifest.creativeReferences.some((reference) => {
    return reference.notes.some((note) => /African Union/i.test(note));
  }));
  assert.ok(manifest.creativeReferences.some((reference) => {
    return reference.notes.some((note) => /Commercial Bank of Ethiopia/i.test(note));
  }));
});

test("delivery contract retains a 4K master and intentional mobile crop", () => {
  assert.deepEqual(
    [manifest.outputs.archive.width, manifest.outputs.archive.height],
    [3840, 2160],
  );
  assert.deepEqual(
    [manifest.outputs.mobile.width, manifest.outputs.mobile.height],
    [1080, 1920],
  );
  assert.ok(manifest.sources.every((source) => source.minimumWidth >= 3840));
  assert.ok(manifest.sources.every((source) => source.focal.desktop && source.focal.mobile));
});
