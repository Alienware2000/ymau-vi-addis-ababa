import Image from "next/image";
import Link from "next/link";
import { EDITORIAL_IMAGE_PLACEHOLDER, HERO_IMAGE_PLACEHOLDER } from "../image-delivery";
import { pageHeroImages } from "../page-hero-images";
import { routeEditorialMedia } from "../media-library";
import { committeeArchive, committeeReleaseItems } from "../site-content";
import { InnerFooter, LineArrow } from "./editorial-page-parts";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { SiteHeader } from "./site-header";

const [committeeFloor, committeeRecord, committeeCulture] = routeEditorialMedia.committees;

function ArchiveImage({ image }: { image: (typeof routeEditorialMedia.committees)[number] }) {
  return (
    <figure className="committee-page__image">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 760px) 100vw, 50vw"
        quality={90}
        placeholder="blur"
        blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
        style={{ objectPosition: image.position ?? "50% 50%" }}
      />
      <figcaption><span>{image.context}</span><span>{image.credit}</span></figcaption>
    </figure>
  );
}

export function CommitteePage() {
  const heroImage = pageHeroImages.committees;

  return (
    <div className="information-page information-page--family-committees committee-page">
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
          <div className="inner-hero__meta"><span>06</span><span>Committee work</span></div>
          <h1>A continental agenda,<br />being shaped with care.</h1>
          <p>The YMAU VI committee list and agendas are in development.</p>
          <span className="inner-status">Final committee slate forthcoming</span>
          <div className="inner-hero__image-note"><span>{heroImage.context}</span><span>{heroImage.credit}</span></div>
          <span className="inner-hero__glyph" aria-hidden="true">VI</span>
        </section>

        <div className="inner-page-ribbon">
          <span>Committees · YMAU VI</span>
          <strong>Committee work</strong>
          <span>2027 slate in development</span>
        </div>

        <section className="committee-page__premise">
          <div>
            <span>How the room works</span>
            <h2>Research becomes representation. Representation becomes negotiation.</h2>
          </div>
          <p>
            Each committee asks delegates to represent a member state or stakeholder, work within a specific African Union mandate and negotiate a written resolution with their peers. Background guides, experience levels and portfolio allocations will be published only after the final slate is confirmed.
          </p>
        </section>

        <ScrollRevealSection as="div" className="committee-page__visual-pair">
          <ArchiveImage image={committeeFloor} />
          <div className="committee-page__visual-note">
            <span>At the table</span>
            <strong>Procedure is the structure.<br />Persuasion is the work.</strong>
          </div>
        </ScrollRevealSection>

        <section className="committee-page__archive" aria-labelledby="committee-record-title">
          <header>
            <span>The institutional record · YMAU V</span>
            <h2 id="committee-record-title">Ten rooms.<br /><em>Ten continental questions.</em></h2>
            <p>
              The fifth edition’s committees are shown as an archive, not as the final YMAU VI slate. The 2027 names and agendas remain forthcoming.
            </p>
          </header>
          <ol>
            {committeeArchive.map((item, index) => (
              <li key={item.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{item.name}</strong><p>{item.agenda}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <ScrollRevealSection as="div" className="committee-page__record-image">
          <ArchiveImage image={committeeRecord} />
          <p>Historical record verified against the YMAU V Executive Report.</p>
        </ScrollRevealSection>

        <section className="committee-page__release">
          <div>
            <span>What will be released</span>
            <h2>One complete slate,<br />published together.</h2>
            <ul>
              {committeeReleaseItems.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
            </ul>
          </div>
          <ArchiveImage image={committeeCulture} />
        </section>

        <section className="committee-page__actions">
          <a href="https://drive.google.com/file/d/10mxwms6_x02wp_m6zC-PHHUu795KrEEu/view" target="_blank" rel="noreferrer">
            <span>Conference record</span><strong>Open the YMAU V Executive Report</strong><LineArrow />
          </a>
          <Link href="/programme"><span>Continue</span><strong>Explore the YMAU VI programme</strong><LineArrow /></Link>
        </section>
      </main>
      <InnerFooter />
    </div>
  );
}
