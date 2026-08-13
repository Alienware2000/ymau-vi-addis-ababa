import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HERO_IMAGE_PLACEHOLDER } from "../image-delivery";
import { pageHeroImages } from "../page-hero-images";
import type { InformationPageData } from "../site-content";
import { findNavigationGroup } from "../site-navigation";
import { InnerFooter } from "./editorial-page-parts";
import { CulturalAnnotation } from "./cultural-annotation";
import { SiteHeader } from "./site-header";

export function PageShell({
  data,
  slug,
  children,
  heroVariant = "default",
}: {
  data: InformationPageData;
  slug: string;
  children: ReactNode;
  heroVariant?: "default" | "profile" | "statement" | "city";
}) {
  const group = findNavigationGroup(slug);
  const heroImage = pageHeroImages[slug] ?? pageHeroImages.about;
  const currentIndex = Math.max(group.links.findIndex((link) => link.href === `/${slug}`), 0);

  return (
    <div className={`information-page editorial-page editorial-page--${slug} editorial-page--${group.label.toLowerCase().replaceAll(" ", "-")}`}>
      <SiteHeader />
      <main id="main-content">
        <section className={`editorial-hero editorial-hero--${heroVariant}`}>
          <Image
            className="editorial-hero__image"
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="100vw"
            quality={90}
            preload
            placeholder="blur"
            blurDataURL={HERO_IMAGE_PLACEHOLDER}
            style={{ objectPosition: heroImage.position }}
          />
          <span className="editorial-hero__veil" />
          <div className="editorial-hero__meta"><span>{data.number}</span><span>{data.eyebrow}</span></div>
          {heroImage.nativeLabel && (
            <div className="editorial-hero__native">
              <CulturalAnnotation term={heroImage.nativeLabel.term} variant="hero" tone="light" align="right" />
            </div>
          )}
          <div className="editorial-hero__copy">
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
            {data.status && <span className="editorial-hero__status">{data.status}</span>}
          </div>
          <div className="editorial-hero__credit"><span>{heroImage.context}</span><span>{heroImage.credit}</span></div>
        </section>
        <div className="editorial-ribbon">
          <span>{group.label}</span><strong>{data.eyebrow}</strong><span>{String(currentIndex + 1).padStart(2, "0")} / {String(group.links.length).padStart(2, "0")}</span>
        </div>
        <div className="editorial-family-nav">
          <span>Explore {group.label}</span>
          <nav aria-label={`${group.label} pages`}>
            {group.links.map((link) => <Link key={link.href} href={link.href} aria-current={link.href === `/${slug}` ? "page" : undefined}>{link.label}</Link>)}
          </nav>
        </div>
        {children}
      </main>
      <InnerFooter />
    </div>
  );
}
