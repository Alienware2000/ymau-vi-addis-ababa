import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { EDITORIAL_IMAGE_PLACEHOLDER } from "../image-delivery";
import { routeEditorialMedia } from "../media-library";
import { ymauVIAmbassadorMetrics } from "../conference-metrics";
import { AnimatedNumber } from "./animated-number";
import { EditorialImageNote, InnerFooter, LineArrow, PageFamilyNav } from "./editorial-page-parts";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { SiteHeader } from "./site-header";

const focusAreas = [
  {
    number: "01",
    title: "Diplomacy in practice",
    copy: "Negotiation, coalition-building and consensus become practised skills, not abstract ideas.",
  },
  {
    number: "02",
    title: "Continental integration",
    copy: "Committee rooms ask what cooperation across institutions, borders and sectors can make possible.",
  },
  {
    number: "03",
    title: "Youth as architects",
    copy: "Delegates are treated as authors of the continent’s next chapter, not an audience waiting outside it.",
  },
  {
    number: "04",
    title: "Access by design",
    copy: "Diverse representation, affordability and financial support have been part of YMAU’s stated mission since its founding.",
  },
];

const aboutLinks = [
  ["Our history", "/history", "How a Yale idea moved onto African ground."],
  ["Our founders", "/founders", "The student leaders who began the institution."],
  ["Secretary-General", "/secretary-general", "Meet the student leading the sixth edition."],
  ["Our Secretariat", "/secretariat", "The team building the conference from the inside."],
  ["YMAU VI Ambassadors", "/ambassadors", "A network carrying the invitation across borders."],
  ["Careers for Yale students", "/careers", "Join the student team building the sixth edition."],
] as const;

const [addisMissionImage, committeeMissionImage, networkImage] = routeEditorialMedia.about;

export function AboutPage() {
  const sharedHeroProps = {
    alt: "YMAU V delegates gathered for the official conference portrait in Accra",
    quality: 90,
    sizes: "100vw",
  } as const;
  const { props: { srcSet: aboutDesktopSrcSet } } = getImageProps({
    ...sharedHeroProps,
    src: "/ymau-media/pages/about.webp",
    width: 2400,
    height: 1350,
  });
  const { props: { srcSet: aboutMobileSrcSet, alt: aboutMobileAlt, ...aboutMobileProps } } = getImageProps({
    ...sharedHeroProps,
    src: "/ymau-media/editorial/about-mobile-portrait.png",
    width: 900,
    height: 1350,
  });

  return (
    <div className="information-page about-page">
      <SiteHeader />
      <main id="main-content">
        <section className="about-hero">
          <picture>
            <source media="(min-width: 701px)" srcSet={aboutDesktopSrcSet} />
            <source media="(max-width: 700px)" srcSet={aboutMobileSrcSet} />
            <img
              {...aboutMobileProps}
              alt={aboutMobileAlt}
              className="about-hero__image"
              fetchPriority="high"
            />
          </picture>
          <span className="about-hero__veil" />
          <div className="about-hero__topline">
            <span>01 · About YMAU</span>
            <span>Founded at Yale · Convening in Africa</span>
          </div>
          <div className="about-hero__copy">
            <p>Our mission</p>
            <h1>Africa’s next leaders will not wait for a seat at the table.</h1>
            <strong>They will build the table.</strong>
          </div>
          <EditorialImageNote context="The YMAU V delegation · Accra, Ghana" />
        </section>

        <PageFamilyNav slug="about" />

        <section className="about-introduction">
          <div className="about-introduction__index">
            <span>Why YMAU</span>
            <span aria-hidden="true">VI</span>
          </div>
          <div className="about-introduction__copy">
            <p className="about-introduction__lead">
              YMAU is a student-run simulation of the African Union, built for young people who want to understand power by practising how it moves.
            </p>
            <div>
              <p>
                Delegates research continental questions, represent member states, negotiate across difference and draft policy in committee rooms modelled on the institutions of the African Union.
              </p>
              <p>
                The experience has always extended beyond debate: curated speakers, leadership training and workshops help delegates find their voices and carry practical skills beyond the conference.
              </p>
              <p>
                From 15-17 March 2027, the sixth edition convenes in Addis Ababa, the city at the diplomatic centre of the continent, in partnership with the African Union Commission’s Youth Division.
              </p>
            </div>
          </div>
        </section>

        <section className="about-editorial-rhythm" aria-label="Mission in context">
          <ScrollRevealSection as="article" className="about-editorial-rhythm__story">
            <figure>
              <Image
                src={addisMissionImage.src}
                alt={addisMissionImage.alt}
                fill
                sizes="(max-width: 760px) 100vw, 56vw"
                quality={90}
                placeholder="blur"
                blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
              />
              <figcaption>
                <span>{addisMissionImage.context}</span>
                <a href={addisMissionImage.creditHref} target="_blank" rel="noreferrer">{addisMissionImage.credit}</a>
              </figcaption>
            </figure>
            <div>
              <span>Place changes the question</span>
              <h2>Policy begins in lived experience.</h2>
              <p>
                Convening in Addis asks delegates to connect continental policy to the people, streets and institutions it is meant to serve.
              </p>
            </div>
          </ScrollRevealSection>
          <ScrollRevealSection as="article" className="about-editorial-rhythm__story">
            <figure>
              <Image
                src={committeeMissionImage.src}
                alt={committeeMissionImage.alt}
                fill
                sizes="(max-width: 760px) 100vw, 48vw"
                quality={90}
                placeholder="blur"
                blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
              />
              <figcaption>
                <span>{committeeMissionImage.context}</span>
                <span>{committeeMissionImage.credit}</span>
              </figcaption>
            </figure>
            <div>
              <span>Practice changes the student</span>
              <h2>A mission you can rehearse.</h2>
              <p>
                Research becomes argument, argument becomes coalition and coalition becomes a resolution another person must be willing to sign.
              </p>
            </div>
          </ScrollRevealSection>
        </section>

        <section className="about-focus">
          <header>
            <span>What the conference is designed to build</span>
            <h2>Four commitments.<br /><em>One continental room.</em></h2>
          </header>
          <div className="about-focus__grid">
            {focusAreas.map((area) => (
              <ScrollRevealSection as="article" className="about-focus__item" key={area.number}>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </ScrollRevealSection>
            ))}
          </div>
          <p className="about-family-section__note">Final YMAU VI fees and financial-aid details will be published once confirmed.</p>
        </section>

        <section className="about-network">
          <div className="about-network__image">
            <Image
              src={networkImage.src}
              alt={networkImage.alt}
              fill
              sizes="(max-width: 820px) 100vw, 48vw"
              quality={90}
              placeholder="blur"
              blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
            />
            <EditorialImageNote context={networkImage.context} />
          </div>
          <div className="about-network__copy">
            <span>Across borders</span>
            <h2>A conference in Addis. A network far beyond it.</h2>
            <p>
              Ninety-seven student ambassadors across more than fifteen countries are helping YMAU VI reach campuses, communities and prospective delegates around the world.
            </p>
            <dl>
              {ymauVIAmbassadorMetrics.map((metric, index) => (
                <div key={metric.id}>
                  <dt>
                    <AnimatedNumber
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      delay={index * 115}
                    />
                  </dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
            <Link href="/ambassadors" className="text-link">Meet the network <LineArrow /></Link>
          </div>
        </section>

        <section className="about-directory">
          <header>
            <span>Continue the story</span>
            <h2>Built by people,<br />edition by edition.</h2>
          </header>
          <div>
            {aboutLinks.map(([title, href, copy], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <LineArrow />
              </Link>
            ))}
          </div>
          <a
            className="about-note"
            href="https://drive.google.com/file/d/1FtCJW-F1l1cHvzgOIH3SPaOd8NKoCRit/view"
            target="_blank"
            rel="noreferrer"
          >
            <span>Conference record</span>
            <strong>YMAU VI concept note</strong>
            <span className="about-note__action">Read the document <LineArrow /></span>
          </a>
        </section>
      </main>
      <InnerFooter />
    </div>
  );
}
