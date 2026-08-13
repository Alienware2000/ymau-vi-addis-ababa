"use client";

import { useEffect, useId, useRef, useState } from "react";
import { culturalLexicon, type CulturalTermKey } from "../cultural-lexicon";

export function CulturalAnnotation({
  term,
  variant = "inline",
  tone = "ink",
  align = "left",
  className = "",
}: {
  term: CulturalTermKey;
  variant?: "inline" | "display" | "hero" | "image" | "phrase" | "fact" | "quiet";
  tone?: "ink" | "light" | "warm";
  align?: "left" | "right";
  className?: string;
}) {
  const entry = culturalLexicon[term];
  const generatedId = useId();
  const popoverId = `cultural-note-${generatedId.replaceAll(":", "")}`;
  const rootRef = useRef<HTMLSpanElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOutside = (event: PointerEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return;
      closeTimerRef.current = setTimeout(() => setOpen(false), 0);
    };
    const closeOnFocusAway = (event: FocusEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return;
      closeTimerRef.current = setTimeout(() => setOpen(false), 0);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOnFocusAway);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOnFocusAway);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <span
      ref={rootRef}
      className={[
        "cultural-annotation",
        `cultural-annotation--${variant}`,
        `cultural-annotation--${tone}`,
        `cultural-annotation--align-${align}`,
        className,
      ].filter(Boolean).join(" ")}
      data-open={open ? "true" : undefined}
    >
      <button
        type="button"
        className="cultural-annotation__trigger"
        aria-expanded={open}
        aria-controls={popoverId}
        aria-label={`${entry.script}. ${entry.transliteration}. ${entry.meaning}. Pronounced approximately ${entry.pronunciation}. Open language note.`}
        onFocus={() => {
          if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
          setOpen(true);
        }}
        onClick={() => {
          if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
          setOpen(true);
        }}
      >
        <span className="cultural-annotation__script" lang="am">{entry.script}</span>
        <span className="cultural-annotation__signal" aria-hidden="true" />
      </button>
      <span className="cultural-annotation__popover" id={popoverId} role="note">
        <span className="cultural-annotation__overline">Amharic · አማርኛ</span>
        <span className="cultural-annotation__definition">
          <strong>{entry.transliteration}</strong>
          <em>{entry.meaning}</em>
        </span>
        <span className="cultural-annotation__pronunciation">
          <small>Say it</small>
          <b>{entry.pronunciation}</b>
        </span>
        <span className="cultural-annotation__note">{entry.note}</span>
        <span className="cultural-annotation__approximation">English sound guide · approximate</span>
      </span>
    </span>
  );
}
