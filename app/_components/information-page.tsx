import Image from "next/image";
import Link from "next/link";
import { pageHeroImages } from "../page-hero-images";
import type { InformationPageData } from "../site-content";
import { findNavigationGroup } from "../site-navigation";
import { SiteHeader } from "./site-header";

function LineArrow() {
  return <span className="line-arrow" aria-hidden="true" />;
}

export function InformationPage({ data, slug }: { data: InformationPageData; slug: string }) {
  const group = findNavigationGroup(slug);
  const heroImage = pageHeroImages[slug] ?? pageHeroImages.about;

  return (
    <div className="information-page">
      <SiteHeader />

      <main>
        <section className="inner-hero">
          <Image
            className="inner-hero__image"
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="100vw"
            priority
            style={{ objectPosition: heroImage.position }}
          />
          <span className="inner-hero__veil" />
          <div className="inner-hero__meta">
            <span>{data.number}</span>
            <span>{data.eyebrow}</span>
          </div>
          {heroImage.nativeLabel && (
            <div className="inner-hero__native" aria-label={`${heroImage.nativeLabel.text}, ${heroImage.nativeLabel.translation}`}>
              <span lang="am">{heroImage.nativeLabel.text}</span>
              <small>{heroImage.nativeLabel.translation}</small>
            </div>
          )}
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          {data.status && <span className="inner-status">{data.status}</span>}
          <div className="inner-hero__image-note">
            <span>{heroImage.context}</span>
            {heroImage.creditHref ? (
              <a href={heroImage.creditHref} target="_blank" rel="noreferrer">{heroImage.credit}</a>
            ) : (
              <span>{heroImage.credit}</span>
            )}
          </div>
          <span className="inner-hero__glyph" aria-hidden="true">VI</span>
        </section>

        <div className="inner-content">
          <aside className="section-sidebar">
            <span>In this section</span>
            <h2>{group.label}</h2>
            <nav aria-label={`${group.label} pages`}>
              {group.links.map((link) => (
                <Link href={link.href} key={link.href} aria-current={link.href === `/${slug}` ? "page" : undefined}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className={`inner-main${data.portraitPending ? " inner-main--with-placeholder" : ""}`}>
            {data.portraitPending && (
              <aside className="portrait-placeholder" aria-label="Editorial image placeholder">
                <span className="portrait-placeholder__mark">VI</span>
                <div>
                  <span>Image reserved</span>
                  <p>Official photography will appear here once approved.</p>
                </div>
              </aside>
            )}

            <article className="inner-article">
            {data.sections.map((section, index) => (
              <section className="inner-section" key={section.heading}>
                <span className="inner-section__index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{section.heading}</h2>
                  {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items && (
                    <ul>
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {section.note && <p className="inner-section__note">{section.note}</p>}
                </div>
              </section>
            ))}

            {data.action && (
              data.action.href.startsWith("/") ? (
                <Link className="inner-action" href={data.action.href}>
                  <span>{data.action.label}</span>
                  <LineArrow />
                </Link>
              ) : (
                <a className="inner-action" href={data.action.href}>
                  <span>{data.action.label}</span>
                  <LineArrow />
                </a>
              )
            )}
            </article>
          </div>
        </div>
      </main>

      <footer className="inner-footer">
        <Image src="/ymau-wordmark-white.png" alt="Yale Model African Union" width={752} height={185} />
        <p>Addis Ababa, Ethiopia<br />15–17 March 2027</p>
        <p><a href="mailto:president@yalemodelau.org">president@yalemodelau.org</a><br />© 2027 YMAU VI</p>
      </footer>
    </div>
  );
}
