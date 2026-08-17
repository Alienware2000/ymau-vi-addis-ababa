#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = join(projectRoot, "config/hero-film.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const command = process.argv[2] ?? "report";
const sourceRoot = join(projectRoot, manifest.sourceRoot);
const workRoot = join(projectRoot, manifest.workRoot);
const deliveryRoot = join(projectRoot, manifest.deliveryRoot);
const sourceById = new Map(manifest.sources.map((source) => [source.id, source]));

function run(binary, args, options = {}) {
  return execFileSync(binary, args, {
    cwd: projectRoot,
    encoding: "utf8",
    stdio: options.capture ? ["ignore", "pipe", "pipe"] : "inherit",
  });
}

function probe(file) {
  try {
    const output = run(
      "ffprobe",
      [
        "-v",
        "error",
        "-select_streams",
        "v:0",
        "-show_entries",
        "stream=width,height,r_frame_rate,duration:format=duration",
        "-of",
        "json",
        file,
      ],
      { capture: true },
    );
    const parsed = JSON.parse(output);
    const stream = parsed.streams?.[0] ?? {};
    return {
      width: Number(stream.width ?? 0),
      height: Number(stream.height ?? 0),
      duration: Number(stream.duration ?? parsed.format?.duration ?? 0),
      frameRate: stream.r_frame_rate ?? "unknown",
    };
  } catch {
    return null;
  }
}

function sourcePath(source) {
  return join(sourceRoot, source.file);
}

function formatSeconds(seconds) {
  return `${Number(seconds).toFixed(1)}s`;
}

function timelineDuration() {
  return manifest.timeline.reduce((total, shot) => total + shot.duration, 0)
    - manifest.transitionSeconds * (manifest.timeline.length - 1);
}

function audit() {
  const rows = manifest.sources.map((source) => {
    const file = sourcePath(source);
    const metadata = existsSync(file) ? probe(file) : null;
    const dimensions = metadata ? `${metadata.width}×${metadata.height}` : "—";
    const resolutionOkay = Boolean(
      metadata
      && metadata.width >= source.minimumWidth
      && metadata.height >= source.minimumHeight,
    );
    const licensed = source.licenseStatus === "approved";
    const ready = licensed && resolutionOkay;
    return { source, file, metadata, dimensions, resolutionOkay, licensed, ready };
  });

  console.log(`\n${manifest.title}`);
  console.log(`Target runtime: ${formatSeconds(timelineDuration())} · ${manifest.fps} fps · ${manifest.transitionSeconds}s dissolves\n`);
  console.table(
    rows.map(({ source, dimensions, metadata, licensed, ready }) => ({
      shot: source.id,
      provider: source.provider,
      license: source.licenseStatus,
      file: metadata ? "present" : "missing",
      dimensions,
      duration: metadata ? formatSeconds(metadata.duration) : "—",
      licensed,
      ready,
    })),
  );
  return rows;
}

function validate() {
  const rows = audit();
  const errors = [];
  const sourceIds = manifest.sources.map((source) => source.id);

  if (new Set(sourceIds).size !== sourceIds.length) {
    errors.push("manifest: every source id must be unique");
  }
  if (manifest.transitionSeconds < 0.7 || manifest.transitionSeconds > 1.2) {
    errors.push("manifest: transitions must stay between 0.7 and 1.2 seconds");
  }

  for (const row of rows) {
    const { source, file, metadata } = row;
    if (source.licenseStatus !== "approved") {
      errors.push(`${source.id}: license status is ${source.licenseStatus}`);
    }
    if (!existsSync(file)) {
      errors.push(`${source.id}: missing ${file}`);
      continue;
    }
    if (!metadata) {
      errors.push(`${source.id}: ffprobe could not read the master`);
      continue;
    }
    if (metadata.width < source.minimumWidth || metadata.height < source.minimumHeight) {
      errors.push(
        `${source.id}: ${metadata.width}×${metadata.height} is below the required ${source.minimumWidth}×${source.minimumHeight}`,
      );
    }
    const uses = manifest.timeline
      .filter((shot) => shot.source === source.id)
      .map((shot) => shot.in + shot.duration);
    const finalUse = uses.length > 0 ? Math.max(...uses) : 0;
    if (finalUse > 0 && metadata.duration < finalUse) {
      errors.push(`${source.id}: master ends at ${formatSeconds(metadata.duration)} but the edit needs ${formatSeconds(finalUse)}`);
    }
  }

  for (const shot of manifest.timeline) {
    if (!sourceById.has(shot.source)) {
      errors.push(`timeline: unknown source ${shot.source}`);
    }
    if (shot.duration <= manifest.transitionSeconds) {
      errors.push(`timeline: ${shot.source} must be longer than the transition`);
    }
  }

  if (errors.length > 0) {
    console.error("\nHero film is not build-ready:");
    for (const error of errors) console.error(`  • ${error}`);
    return false;
  }

  console.log("\nAll masters are licensed, present, and meet the native-resolution gate.");
  return true;
}

function cropFilter(source, outputName, output) {
  const focal = source.focal?.[outputName] ?? { x: 0.5, y: 0.5 };
  return [
    `fps=${manifest.fps}`,
    `scale=${output.width}:${output.height}:force_original_aspect_ratio=increase:flags=lanczos`,
    `crop=${output.width}:${output.height}:(iw-${output.width})*${focal.x}:(ih-${output.height})*${focal.y}`,
    "setsar=1",
    "format=yuv420p",
  ].join(",");
}

function encodeArgs(output) {
  if (output.codec === "prores") {
    return ["-c:v", "prores_ks", "-profile:v", "3", "-pix_fmt", "yuv422p10le"];
  }
  return [
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    String(output.crf ?? 15),
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
  ];
}

function renderOutput(outputName, output) {
  const renderRoot = join(workRoot, outputName);
  mkdirSync(renderRoot, { recursive: true });
  const segmentFiles = [];

  manifest.timeline.forEach((shot, index) => {
    const source = sourceById.get(shot.source);
    const input = sourcePath(source);
    const segment = join(renderRoot, `segment-${String(index + 1).padStart(2, "0")}.mov`);
    segmentFiles.push(segment);
    run("ffmpeg", [
      "-hide_banner",
      "-loglevel",
      "warning",
      "-y",
      "-ss",
      String(shot.in),
      "-i",
      input,
      "-t",
      String(shot.duration),
      "-an",
      "-vf",
      cropFilter(source, outputName, output),
      "-c:v",
      "prores_ks",
      "-profile:v",
      "2",
      "-pix_fmt",
      "yuv422p10le",
      segment,
    ]);
  });

  const inputs = segmentFiles.flatMap((file) => ["-i", file]);
  const filters = [];
  let current = "0:v";
  let currentDuration = manifest.timeline[0].duration;

  for (let index = 1; index < segmentFiles.length; index += 1) {
    const outputLabel = `v${index}`;
    const offset = currentDuration - manifest.transitionSeconds;
    filters.push(
      `[${current}][${index}:v]xfade=transition=fade:duration=${manifest.transitionSeconds}:offset=${offset.toFixed(3)}[${outputLabel}]`,
    );
    current = outputLabel;
    currentDuration += manifest.timeline[index].duration - manifest.transitionSeconds;
  }

  mkdirSync(deliveryRoot, { recursive: true });
  const outputFile = join(deliveryRoot, output.file);
  run("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "warning",
    "-y",
    ...inputs,
    "-filter_complex",
    filters.join(";"),
    "-map",
    `[${current}]`,
    "-an",
    ...encodeArgs(output),
    outputFile,
  ]);
  console.log(`Rendered ${outputName}: ${outputFile}`);
  return outputFile;
}

function build() {
  if (!validate()) process.exit(1);
  rmSync(workRoot, { recursive: true, force: true });
  mkdirSync(workRoot, { recursive: true });

  const rendered = new Map();
  for (const outputName of ["archive", "desktop", "mobile"]) {
    rendered.set(outputName, renderOutput(outputName, manifest.outputs[outputName]));
  }

  const poster = manifest.outputs.poster;
  const posterSource = rendered.get(poster.from);
  const posterFile = join(deliveryRoot, poster.file);
  run("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "warning",
    "-y",
    "-ss",
    String(poster.time),
    "-i",
    posterSource,
    "-frames:v",
    "1",
    "-q:v",
    "1",
    posterFile,
  ]);
  console.log(`Rendered poster: ${posterFile}`);
  console.log("\nDelivery is staged under outputs/hero-film/delivery; no public site asset was replaced.");
}

if (command === "report") {
  audit();
} else if (command === "validate") {
  if (!validate()) process.exit(1);
} else if (command === "build") {
  build();
} else {
  console.error(`Unknown command: ${command}. Use report, validate, or build.`);
  process.exit(1);
}
