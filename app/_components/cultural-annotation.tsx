"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { culturalLexicon, type CulturalTermKey } from "../cultural-lexicon";

type PopoverPosition = {
  left: number;
  placement: "above" | "below";
  top: number;
  width: number;
};

const VIEWPORT_MARGIN = 14;
const POPOVER_GAP = 10;
const POPOVER_MAX_WIDTH = 360;
const POPOVER_ESTIMATED_HEIGHT = 250;

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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLSpanElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<PopoverPosition | null>(null);

  const cancelClose = useCallback(() => {
    if (!closeTimerRef.current) return;
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      setPosition(null);
    }, 120);
  }, [cancelClose]);

  const openPopover = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const closePopover = useCallback(() => {
    cancelClose();
    setOpen(false);
    setPosition(null);
  }, [cancelClose]);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger || typeof window === "undefined") return;

    const triggerBox = trigger.getBoundingClientRect();
    const width = Math.min(POPOVER_MAX_WIDTH, window.innerWidth - VIEWPORT_MARGIN * 2);
    const measuredHeight = popoverRef.current?.offsetHeight ?? POPOVER_ESTIMATED_HEIGHT;
    const availableBelow = window.innerHeight - triggerBox.bottom - POPOVER_GAP - VIEWPORT_MARGIN;
    const availableAbove = triggerBox.top - POPOVER_GAP - VIEWPORT_MARGIN;
    const placement = availableBelow >= measuredHeight || availableBelow >= availableAbove ? "below" : "above";
    const desiredLeft = align === "right" ? triggerBox.right - width : triggerBox.left;
    const left = Math.min(
      Math.max(desiredLeft, VIEWPORT_MARGIN),
      Math.max(VIEWPORT_MARGIN, window.innerWidth - width - VIEWPORT_MARGIN),
    );
    const desiredTop = placement === "below"
      ? triggerBox.bottom + POPOVER_GAP
      : triggerBox.top - measuredHeight - POPOVER_GAP;
    const top = Math.min(
      Math.max(desiredTop, VIEWPORT_MARGIN),
      Math.max(VIEWPORT_MARGIN, window.innerHeight - measuredHeight - VIEWPORT_MARGIN),
    );

    setPosition((current) => {
      if (
        current
        && Math.abs(current.left - left) < 1
        && Math.abs(current.top - top) < 1
        && current.width === width
        && current.placement === placement
      ) return current;
      return { left, placement, top, width };
    });
  }, [align]);

  useEffect(() => {
    return () => cancelClose();
  }, [cancelClose]);

  useEffect(() => {
    if (!open) return;

    updatePosition();
    const animationFrame = window.requestAnimationFrame(updatePosition);
    const observer = new ResizeObserver(updatePosition);
    if (triggerRef.current) observer.observe(triggerRef.current);
    if (popoverRef.current) observer.observe(popoverRef.current);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    const isInsideAnnotation = (target: EventTarget | null) => {
      const node = target as Node;
      return rootRef.current?.contains(node) || popoverRef.current?.contains(node);
    };
    const closeOutside = (event: PointerEvent) => {
      if (isInsideAnnotation(event.target)) return;
      closePopover();
    };
    const closeOnFocusAway = (event: FocusEvent) => {
      if (isInsideAnnotation(event.target)) return;
      closePopover();
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopover();
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOnFocusAway);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOnFocusAway);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [closePopover, open]);

  const popover = open && typeof document !== "undefined" && createPortal(
    <span
      className="cultural-annotation__popover"
      data-open="true"
      data-placement={position?.placement ?? "below"}
      data-positioned={position ? "true" : undefined}
      id={popoverId}
      onPointerEnter={cancelClose}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") scheduleClose();
      }}
      ref={popoverRef}
      role="note"
      style={{
        left: position?.left ?? VIEWPORT_MARGIN,
        top: position?.top ?? -9999,
        width: position?.width ?? Math.min(POPOVER_MAX_WIDTH, 320),
      }}
    >
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
    </span>,
    document.body,
  );

  return (
    <>
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
        onPointerEnter={(event) => {
          if (event.pointerType !== "mouse") return;
          openPopover();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") scheduleClose();
        }}
      >
        <button
          type="button"
          className="cultural-annotation__trigger"
          aria-expanded={open}
          aria-controls={popoverId}
          aria-label={`${entry.script}. ${entry.transliteration}. ${entry.meaning}. Pronounced approximately ${entry.pronunciation}. Open language note.`}
          onFocus={() => {
            openPopover();
          }}
          onClick={() => {
            openPopover();
          }}
          ref={triggerRef}
        >
          <span className="cultural-annotation__script" lang="am">{entry.script}</span>
          <span className="cultural-annotation__signal" aria-hidden="true" />
        </button>
      </span>
      {popover}
    </>
  );
}
