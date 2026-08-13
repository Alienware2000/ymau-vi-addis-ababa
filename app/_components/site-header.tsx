"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigationGroups } from "../site-navigation";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

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
        menuToggleRef.current?.focus();
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
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header ref={headerRef} className={`site-header site-header--shared${home ? " site-header--home" : " site-header--inner"}${scrolled ? " is-scrolled" : ""}${menuOpen ? " has-open-menu" : ""}`}>
      <Link className="brand" href="/" aria-label="YMAU VI home" onClick={closeMenu}>
        <Image
          className="brand__wordmark"
          src="/ymau-wordmark-white.png"
          alt="Yale Model African Union"
          width={752}
          height={185}
        />
      </Link>

      <button
        ref={menuToggleRef}
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
        <div className="nav-mobile-intro" aria-hidden="true">
          <span>Explore YMAU VI</span>
          <p>Addis Ababa · 15–17 March 2027</p>
        </div>

        <Link className="nav-mobile-home" href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMenu}>
          <span>Homepage</span>
          <span aria-hidden="true" />
        </Link>

        {navigationGroups.map((group, index) => (
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
            <summary>
              <span className="nav-group__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="nav-group__label">{group.label}</span>
              <span className="nav-group__chevron" aria-hidden="true" />
            </summary>
            <div className="nav-group__menu">
              <span>{group.label}</span>
              {group.links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        <div className="nav-utility">
          <div className="nav-languages" aria-label="Language">
            <span className="nav-languages__label">Language</span>
            <span>
              <Link href="/" aria-label="English" aria-current={pathname !== "/fr" && pathname !== "/am" ? "page" : undefined}>EN</Link>
              <Link href="/fr" aria-label="Français" aria-current={pathname === "/fr" ? "page" : undefined}>FR</Link>
              <Link href="/am" lang="am" aria-label="Amharic" aria-current={pathname === "/am" ? "page" : undefined}>አማ</Link>
            </span>
          </div>
          <Link className="nav-cta" href="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        <p className="nav-mobile-note">Yale Model African Union · Sixth Edition</p>
      </nav>
      </header>
    </>
  );
}
