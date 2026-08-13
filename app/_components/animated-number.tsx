"use client";

import { useEffect, useRef, useState } from "react";

export type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
};

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1550,
  delay = 0,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(value);
          observer.disconnect();
          return;
        }

        timer = window.setTimeout(() => {
          setIsCounting(true);
          const startedAt = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setDisplay(Math.round(value * eased));
            if (progress < 1) {
              frame = requestAnimationFrame(tick);
            } else {
              setIsCounting(false);
            }
          };

          frame = requestAnimationFrame(tick);
        }, delay);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -6%", threshold: 0.24 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [delay, duration, value]);

  const finalValue = `${prefix}${value.toLocaleString("en-US")}${suffix}`;
  const visibleValue = `${prefix}${display.toLocaleString("en-US")}${suffix}`;

  return (
    <strong
      ref={ref}
      className="animated-number"
      aria-label={finalValue}
      data-animated-number="true"
      data-state={isCounting ? "counting" : display === value ? "complete" : "waiting"}
    >
      {visibleValue}
    </strong>
  );
}
