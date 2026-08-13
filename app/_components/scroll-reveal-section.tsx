"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScrollRevealSection({
  children,
  className,
  as = "section",
}: {
  children: ReactNode;
  className: string;
  as?: "section" | "article" | "div";
}) {
  const ref = useRef<HTMLElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    setEnhanced(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12%", threshold: 0.14 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealClassName = `${className} scroll-reveal-section${enhanced && !visible ? " is-pending" : ""}${visible ? " is-visible" : ""}`;
  const setElement = (element: HTMLElement | null) => {
    ref.current = element;
  };

  if (as === "article") {
    return <article ref={setElement} className={revealClassName}>{children}</article>;
  }

  if (as === "div") {
    return <div ref={setElement} className={revealClassName}>{children}</div>;
  }

  return <section ref={setElement} className={revealClassName}>{children}</section>;
}
