import Image from "next/image";
import Link from "next/link";
import { EDITORIAL_IMAGE_PLACEHOLDER, HERO_IMAGE_PLACEHOLDER } from "../image-delivery";
import { pageHeroImages } from "../page-hero-images";
import type { InformationPageData } from "../site-content";
import { findNavigationGroup } from "../site-navigation";
import { AnimatedStatGrid } from "./animated-stat-grid";
import { CulturalAnnotation } from "./cultural-annotation";
import { LinkedParagraph } from "./editorial-content";
import { InnerFooter, LineArrow } from "./editorial-page-parts";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { SiteHeader } from "./site-header";
import { VisaPathwayChecker } from "./visa-pathway-checker";


export function InformationPage({ data, slug }: { data: InformationPageData; slug: string }) {
  const group = findNavigationGroup(slug);
  const heroImage = pageHeroImages[slug] ?? pageHeroImages.about;
  const currentIndex = group.links.findIndex((link) => link.href === `/${slug}`);
  const visibleCurrentIndex = Math.max(currentIndex, 0);
  const previousPage = currentIndex > 0 ? group.links[currentIndex - 1] : null;
  const nextPage = currentIndex >= 0 && currentIndex < group.links.length - 1 ? group.links[currentIndex + 1] : null;
  const family = group.label.toLowerCase().replaceAll(" ", "-");

  return (
    <div className={`information-page information-page--family-${family} information-page--template-${data.template ?? "article"} information-page--${slug}`}>
      <SiteHeader />

      <main id="main-content">
        <section className="inner-hero">
          <Image
            className="inner-hero__image"
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
          <span className="inner-hero__veil" />
          <div className="inner-hero__meta">
            <span>{data.number}</span>
            <span>{data.eyebrow}</span>
          </div>
          {heroImage.nativeLabel && (
            <div className="inner-hero__native">
              <CulturalAnnotation term={heroImage.nativeLabel.term} variant="hero" tone="light" align="right" />
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

        <div className="inner-page-ribbon">
          <span>{group.label} · YMAU VI</span>
          <strong>{data.eyebrow}</strong>
          <span>{String(visibleCurrentIndex + 1).padStart(2, "0")} / {String(group.links.length).padStart(2, "0")}</span>
        </div>

        <div className="inner-content">
          {group.links.length > 1 && <aside className="section-sidebar">
            <span>In this section</span>
            <h2>{group.label}</h2>
            <nav aria-label={`${group.label} pages`}>
              {group.links.map((link) => (
                <Link href={link.href} key={link.href} aria-current={link.href === `/${slug}` ? "page" : undefined}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>}

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
            {data.template === "faq" ? (
              <section className="faq-list" aria-label="Frequently asked questions">
                {data.sections.map((section, index) => (
                  <details key={section.heading} className="faq-item">
                    <summary>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{section.heading}</strong>
                      <span className="faq-item__toggle" aria-hidden="true" />
                    </summary>
                    <div>
                      {section.body?.map((paragraph) => <LinkedParagraph key={paragraph}>{paragraph}</LinkedParagraph>)}
                      {section.note && <p className="inner-section__note">{section.note}</p>}
                    </div>
                  </details>
                ))}
              </section>
            ) : data.sections.map((section, index) => {
              const sectionClassName = [
                "inner-section",
                section.image ? "inner-section--with-image" : "",
                section.image && index % 2 ? "inner-section--image-right" : "",
                section.variant === "checklist" ? "inner-section--checklist" : "",
                section.presentation ? `inner-section--${section.presentation}` : "",
              ].filter(Boolean).join(" ");
              const contents = (
                <>
                <span className="inner-section__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="inner-section__copy">
                  <h2>{section.heading}</h2>
                  {section.body?.map((paragraph) => <LinkedParagraph key={paragraph}>{paragraph}</LinkedParagraph>)}
                  {section.items && (
                    <ul>
                      {section.items.map((item) => {
                        const socialLink = item.startsWith("Instagram")
                          ? "https://www.instagram.com/yalemodelau/"
                          : item.startsWith("LinkedIn")
                            ? "https://www.linkedin.com/company/yale-model-african-union-conf/"
                            : null;
                        return (
                          <li key={item}>
                            {socialLink ? <a href={socialLink} target="_blank" rel="noreferrer">{item}</a> : item}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {section.stats && <AnimatedStatGrid stats={section.stats} />}
                  {section.note && <p className="inner-section__note">{section.note}</p>}
                </div>
                {section.image && (
                  <figure className="inner-section__media">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1100px) 55vw, 34vw"
                      quality={90}
                      placeholder="blur"
                      blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
                      style={{ objectPosition: section.image.position ?? "50% 50%" }}
                    />
                    <figcaption>
                      <span>{section.image.context}</span>
                      {section.image.creditHref ? (
                        <a href={section.image.creditHref} target="_blank" rel="noreferrer">{section.image.credit}</a>
                      ) : <span>{section.image.credit}</span>}
                    </figcaption>
                  </figure>
                )}
                </>
              );

              return data.template === "story" || slug === "theme" || slug === "about" || slug === "committees" ? (
                <ScrollRevealSection className={sectionClassName} key={section.heading}>{contents}</ScrollRevealSection>
              ) : (
                <section className={sectionClassName} key={section.heading}>{contents}</section>
              );
            })}

            {slug === "travel-guide" && <VisaPathwayChecker />}

            {data.resources && (
              <section className="resource-shelf" aria-labelledby={`${slug}-resources`}>
                <header>
                  <span>Files and official links</span>
                  <h2 id={`${slug}-resources`}>Keep the practical material together.</h2>
                </header>
                <div>
                  {data.resources.map((resource) => resource.href ? (
                    <a href={resource.href} target="_blank" rel="noreferrer" key={resource.label}>
                      <span>{resource.status ?? "Open resource"}</span>
                      <strong>{resource.label}</strong>
                      <p>{resource.detail}</p>
                      <LineArrow />
                    </a>
                  ) : (
                    <article className="resource-shelf__pending" key={resource.label}>
                      <span>{resource.status ?? "Forthcoming"}</span>
                      <strong>{resource.label}</strong>
                      <p>{resource.detail}</p>
                      <small>Not yet released</small>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {data.action && (
              data.action.href.startsWith("/") ? (
                <Link className="inner-action" href={data.action.href}>
                  <span>{data.action.label}</span>
                  <LineArrow />
                </Link>
              ) : (
                <a className="inner-action" href={data.action.href} target={data.action.href.startsWith("http") ? "_blank" : undefined} rel={data.action.href.startsWith("http") ? "noreferrer" : undefined}>
                  <span>{data.action.label}</span>
                  <LineArrow />
                </a>
              )
            )}

            {(previousPage || nextPage) && (
              <nav className="inner-traverse" aria-label={`More ${group.label} pages`}>
                <span>Continue in {group.label}</span>
                <div>
                  {previousPage && (
                    <Link href={previousPage.href} className="inner-traverse__previous">
                      <span aria-hidden="true" className="inner-traverse__back" />
                      <span><small>Previous</small><strong>{previousPage.label}</strong></span>
                    </Link>
                  )}
                  {nextPage && (
                    <Link href={nextPage.href} className="inner-traverse__next">
                      <span><small>Next</small><strong>{nextPage.label}</strong></span>
                      <LineArrow />
                    </Link>
                  )}
                </div>
              </nav>
            )}
            </article>
          </div>
        </div>
      </main>
      <InnerFooter />
    </div>
  );
}
