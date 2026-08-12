"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigationGroups } from "../site-navigation";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <header ref={headerRef} className={`site-header site-header--shared${home ? " site-header--home" : " site-header--inner"}${scrolled ? " is-scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="YMAU VI home" onClick={closeMenu}>
        <Image
          className="brand__wordmark"
          src="/ymau-wordmark-white.png"
          alt="Yale Model African Union"
          width={752}
          height={185}
          priority
        />
      </Link>

      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => {
          setMenuOpen((value) => !value);
          setOpenGroup(null);
        }}
      >
        <span />
        <span />
      </button>

      <nav className={`primary-nav primary-nav--shared${menuOpen ? " is-open" : ""}`} id="primary-navigation" aria-label="Primary navigation">
        {navigationGroups.map((group) => (
          <details
            className="nav-group"
            key={group.label}
            name="primary-navigation-group"
            open={openGroup === group.label}
            onToggle={(event) => {
              const isOpen = event.currentTarget.open;
              setOpenGroup((current) => isOpen ? group.label : current === group.label ? null : current);
            }}
          >
            <summary>{group.label}<span aria-hidden="true" /></summary>
            <div className="nav-group__menu">
              <span>{group.label}</span>
              {group.links.map((link) => (
                <Link href={link.href} key={link.href} onClick={closeMenu}>{link.label}</Link>
              ))}
            </div>
          </details>
        ))}
        <div className="nav-utility">
          <span className="nav-languages" aria-label="Language">
            <Link href="/" aria-label="English">EN</Link>
            <Link href="/fr" aria-label="Français">FR</Link>
            <Link href="/am" lang="am" aria-label="Amharic">አማ</Link>
          </span>
          <Link className="nav-cta" href="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}
