"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatedStatGrid } from "./_components/animated-stat-grid";
import { CulturalAnnotation } from "./_components/cultural-annotation";
import { SiteHeader } from "./_components/site-header";
import { ymauVConferenceMetrics } from "./conference-metrics";
import { EDITORIAL_IMAGE_PLACEHOLDER } from "./image-delivery";

const cityPhoto = "/ymau-media/home/addis-skyline.jpg";
const audiencePhoto = "/ymau-media/home/conference-audience.jpg";
const speakerPhoto = "/ymau-media/home/conference-speaker.jpg";
const coffeePhoto = "/ymau-media/home/ethiopian-coffee.jpg";
const ethiopiaFilm = "/ethiopia-highlands.mp4";
const ethiopiaMobileFilm = "/ethiopia-highlands-mobile.mp4";
const ethiopiaPoster = "/ethiopia-highlands-poster.jpg";

const programmeDays = [
  {
    date: "15 MAR",
    day: "Monday",
    phase: "Opening",
    programme: "Arrival, delegate orientation and the formal opening of YMAU VI.",
    image: "/ymau-media/programme-opening.webp",
    alt: "Delegates gathered for the YMAU V opening plenary in Accra",
  },
  {
    date: "16 MAR",
    day: "Tuesday",
    phase: "Deliberation",
    programme: "A full day of committee work, leadership programming and cultural exchange.",
    image: "/ymau-media/editorial/programme-deliberation-room.jpg",
    alt: "YMAU V delegates debating across a committee room",
  },
  {
    date: "17 MAR",
    day: "Wednesday",
    phase: "Closing",
    programme: "Final sessions, resolutions and the conference closing programme.",
    image: "/ymau-media/programme-closing.webp",
    alt: "YMAU V delegates and organizers together at the closing ceremony",
  },
];

function ArrowIcon({
  direction = "north-east",
}: {
  direction?: "north-east" | "south-east" | "down";
}) {
  return (
    <span
      className={`link-arrow link-arrow--${direction}`}
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const [filmOpen, setFilmOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroVisibleRef = useRef(true);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFilmOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.toggle("no-scroll", filmOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [filmOpen]);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const syncPlayback = () => {
      video.muted = true;
      video.defaultMuted = true;

      if (filmOpen || document.visibilityState !== "visible" || !heroVisibleRef.current) {
        video.pause();
        return;
      }

      if (video.paused) {
        void video.play().catch(() => undefined);
      }
    };
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisibleRef.current = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.02 },
    );

    syncPlayback();
    visibilityObserver.observe(video);
    video.addEventListener("canplay", syncPlayback);
    window.addEventListener("focus", syncPlayback);
    window.addEventListener("pageshow", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      visibilityObserver.disconnect();
      video.removeEventListener("canplay", syncPlayback);
      window.removeEventListener("focus", syncPlayback);
      window.removeEventListener("pageshow", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, [filmOpen]);

  useEffect(() => {
    let ticking = false;
    let scrollDistance = 1;
    let wasScrolled = false;

    const updateMetrics = () => {
      scrollDistance = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
    };
    const updateScroll = () => {
      const top = window.scrollY;
      const nextScrolled = top > 42;

      if (nextScrolled !== wasScrolled) {
        wasScrolled = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      if (progressRef.current) {
        const progress = Math.min(top / scrollDistance, 1);
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    const onResize = () => {
      updateMetrics();
      onScroll();
    };
    const resizeObserver = new ResizeObserver(updateMetrics);

    updateMetrics();
    updateScroll();
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <div className={`announcement${isScrolled ? " is-hidden" : ""}`}>
        <span>YMAU VI · Addis Ababa · 15–17 March 2027</span>
        <a href="#delegations">Registration update <ArrowIcon /></a>
      </div>
      <span className="page-progress" aria-hidden="true"><span ref={progressRef} /></span>

      <SiteHeader home />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__media" aria-hidden="true">
            <video
              ref={heroVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              poster={ethiopiaPoster}
            >
              <source src={ethiopiaMobileFilm} type="video/mp4" media="(max-width: 680px)" />
              <source src={ethiopiaFilm} type="video/mp4" />
            </video>
          </div>
          <div className="hero__veil" />
          <div className="hero__grain" />
          <span className="hero__roman" aria-hidden="true">VI</span>
          <div className="hero__content">
            <div className="hero__edition">
              <span>Sixth edition</span>
              <CulturalAnnotation
                term="addisAbaba"
                variant="quiet"
                tone="light"
                align="right"
              />
            </div>
            <h1 id="hero-title">
              Yale Model
              <span>African Union VI</span>
            </h1>
            <div className="hero__details">
              <p>Addis Ababa, Ethiopia</p>
              <span aria-hidden="true" />
              <p>15—17 March 2027</p>
            </div>
          </div>
          <button className="film-link" type="button" onClick={() => setFilmOpen(true)}>
            <span className="film-link__icon" aria-hidden="true" />
            <span>Watch the Ethiopia film</span>
          </button>
          <p className="hero__scene">Ethiopian Highlands <span>Film · Santhosh Peddi</span></p>
          <a className="scroll-cue" href="#about" aria-label="Continue to about the conference">
            <span>Explore</span>
            <ArrowIcon direction="down" />
          </a>
        </section>

        <nav className="home-map" aria-label="Choose where to begin on the YMAU VI homepage">
          <div className="home-map__intro">
            <span>Start here</span>
            <strong>Choose where to begin.</strong>
          </div>
          <a href="#about">
            <span>01 · Why YMAU</span>
            <strong>Mission and record</strong>
          </a>
          <a href="#field-notes">
            <span>02 · Meet Addis</span>
            <strong>Language, place and ritual</strong>
          </a>
          <a href="#conference">
            <span>03 · Conference</span>
            <strong>Theme, committees and programme</strong>
          </a>
          <a href="#delegations">
            <span>04 · Attend</span>
            <strong>Registration and delegation guidance</strong>
          </a>
        </nav>

        <section className="manifesto" id="about">
          <div className="section-kicker" data-reveal>
            <span>01</span>
            <span>At a glance</span>
          </div>
          <div className="manifesto__grid">
            <h2 data-reveal>
              Diplomacy,<br />
              reimagined by Africa&apos;s<br />
              <em>next generation.</em>
            </h2>
            <div className="manifesto__copy" data-reveal="delay-1">
              <p className="lead">
                Three days in the diplomatic capital of Africa. One room for the
                ideas that will shape the continent next.
              </p>
              <p>
                YMAU VI convenes university delegations from across Africa and
                the diaspora for rigorous committee work, cultural exchange and
                a distinctly African approach to multilateral leadership.
              </p>
              <Link className="text-link" href="/programme">
                Discover the programme <ArrowIcon direction="south-east" />
              </Link>
            </div>
          </div>
          <div className="facts-context" data-reveal>
            <span>YMAU V · Accra 2026</span>
            <span>Our most recent conference, in numbers</span>
          </div>
          <div data-reveal>
            <AnimatedStatGrid
              stats={ymauVConferenceMetrics}
              className="facts"
              ariaLabel="Historical YMAU V conference statistics"
              itemElement="div"
              showDetail={false}
            />
          </div>
        </section>

        <section className="field-notes" id="field-notes" aria-labelledby="field-notes-title">
          <div className="field-notes__heading">
            <div className="section-kicker" data-reveal>
              <span>Field notes</span>
              <span>Language · place · ritual</span>
            </div>
            <div className="field-notes__intro">
              <h2 id="field-notes-title" data-reveal>A little language<br />for the journey.</h2>
              <p data-reveal="delay-1">
                Addis reveals itself in small exchanges. Begin with three words
                that carry more than their literal translation—and one phrase
                worth taking with you.
              </p>
            </div>
          </div>

          <div className="field-notes__lexicon">
            <article className="field-note" data-reveal>
              <span className="field-note__index">01 · Greeting</span>
              <CulturalAnnotation term="selam" variant="display" tone="warm" />
              <h3>Selam</h3>
              <p className="field-note__pronunciation"><span>Say it</span> seh-LAHM</p>
              <p>A greeting and a wish in one word: hello, but also peace.</p>
            </article>
            <article className="field-note" data-reveal="delay-1">
              <span className="field-note__index">02 · The city</span>
              <CulturalAnnotation term="addisAbaba" variant="display" tone="warm" />
              <h3>New Flower</h3>
              <p className="field-note__pronunciation"><span>Say it</span> ad-DEES AH-buh-bah</p>
              <p>The city&apos;s Amharic name is an invitation to see Addis anew.</p>
            </article>
            <article className="field-note" data-reveal>
              <span className="field-note__index">03 · Hospitality</span>
              <CulturalAnnotation term="buna" variant="display" tone="warm" align="right" />
              <h3>Buna</h3>
              <p className="field-note__pronunciation"><span>Say it</span> BOO-nah</p>
              <p>
                Coffee as hospitality, conversation and time shared—not simply
                a drink between meetings.
              </p>
            </article>
          </div>

          <aside className="journey-phrase" aria-label="Useful Amharic phrase" data-reveal>
            <span className="journey-phrase__label">One phrase to carry</span>
            <CulturalAnnotation term="ameseginalehu" variant="phrase" tone="warm" />
            <span className="journey-phrase__entry">
              <strong>Ameseginalehu</strong>
              <span>ah-meh-seh-gee-NAH-leh-hoo</span>
            </span>
            <p>
              Thank you. Useful with a host, a driver or over a cup of buna.
            </p>
          </aside>
          <p className="pronunciation-note">
            English sound guides are approximate; capitals mark emphasis.
          </p>

          <div className="continental-note" data-reveal>
            <span className="continental-note__year">1963</span>
            <div className="continental-note__copy">
              <span className="eyebrow">Continental memory</span>
              <h3>Africa gathered here.</h3>
              <p>
                Thirty-two heads of independent African states met in Addis
                Ababa in May 1963 to create the Organisation of African Unity.
                Its successor, the African Union, is still headquartered in the
                city today.
              </p>
            </div>
            <a href="https://au.int/en/overview">
              Read the AU history <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="city-story" aria-label="A forthcoming message from the Secretary-General">
          <div className="city-story__image" data-reveal>
            <Image
              src={cityPhoto}
              alt="Addis Ababa skyline and Churchill Avenue"
              fill
              sizes="(max-width: 980px) 100vw, 53vw"
              quality={90}
              placeholder="blur"
              blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
            />
            <span className="photo-label">Addis Ababa · 2,355 m</span>
            <span className="photo-label photo-label--right">OAU founded here · 1963</span>
          </div>
          <div className="city-story__letter">
            <div className="section-kicker section-kicker--light" data-reveal>
              <span>02</span>
              <span>From the Secretariat</span>
            </div>
            <span className="content-status" data-reveal>Letter forthcoming</span>
            <blockquote data-reveal>
              A welcome from the Secretary-General of YMAU VI will be published
              here with the official portrait and biography.
            </blockquote>
            <p data-reveal>
              The final editorial package is being prepared by the Secretariat.
              This space is intentionally reserved rather than filled with
              provisional biographical information.
            </p>
            <div className="signature" data-reveal>
              <span>Abyssinia Haile</span>
              <span>Secretary-General, YMAU VI</span>
            </div>
          </div>
        </section>

        <section className="theme-feature" id="conference" aria-labelledby="theme-title">
          <div className="section-kicker section-kicker--light" data-reveal>
            <span>03</span>
            <span>Conference theme</span>
          </div>
          <div className="theme-feature__grid">
            <h2 id="theme-title" data-reveal>Our Vision,<br /><em>Our Victory.</em></h2>
            <div data-reveal="delay-1">
              <span>Championing African success on African terms</span>
              <p>
                YMAU VI asks who has historically defined development—and what
                becomes possible when Africa sets its own measures of progress,
                prosperity and institutional success.
              </p>
              <Link className="text-link text-link--light" href="/theme">
                Explore the full theme <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="committees" id="committees">
          <div className="section-kicker" data-reveal>
            <span>04</span>
            <span>The committees</span>
          </div>
          <div className="committees__intro">
            <h2 data-reveal>A continental agenda,<br />being shaped with care.</h2>
            <p data-reveal="delay-1">
              The final YMAU VI committee slate and agendas are still under
              development. They will be published with delegate levels and
              background guides once confirmed.
            </p>
          </div>
          <div className="committee-release" data-reveal>
            <span className="committee-release__number">VI</span>
            <div>
              <span className="eyebrow">Release in preparation</span>
              <h3>Committee list forthcoming</h3>
              <p>No provisional committee names are being presented as final.</p>
            </div>
            <Link className="text-link" href="/committees">What to expect <ArrowIcon /></Link>
          </div>
        </section>

        <section className="programme" id="programme">
          <div className="programme__heading">
            <div className="section-kicker section-kicker--light" data-reveal>
              <span>05</span>
              <span>The programme</span>
            </div>
            <h2 data-reveal>Three considered days.<br /><em>One lasting exchange.</em></h2>
          </div>
          <p className="programme-note">This is a conference framework; the detailed running order is forthcoming.</p>
          <div className="programme__days">
            {programmeDays.map((item, index) => (
              <article className="programme-day" key={item.date} data-reveal={`delay-${index % 2}`}>
                <div className="programme-day__image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 980px) 100vw, 33vw"
                    quality={90}
                    placeholder="blur"
                    blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
                  />
                  <span aria-hidden="true" />
                </div>
                <div className="programme-day__top">
                  <span>{item.day}</span>
                  <strong>{item.date}</strong>
                </div>
                <div className="programme-day__main">
                  <span>0{index + 1}</span>
                  <h3>{item.phase}</h3>
                  <p>{item.programme}</p>
                </div>
                <span className="programme-day__rule" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="home-recap" id="recap" aria-labelledby="home-recap-title">
          <div className="home-recap__media" data-reveal>
            <iframe
              className="home-recap__frame"
              src="https://drive.google.com/file/d/1wbKwU7HAs9EpIa-Iq240-TFVvt5rjWpQ/preview"
              title="YMAU V extended highlights"
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
            <span className="home-recap__tag">Film · YMAU V · Accra</span>
          </div>
          <div className="home-recap__copy">
            <div className="section-kicker" data-reveal>
              <span>Archive</span>
              <span>YMAU V · Accra</span>
            </div>
            <h2 id="home-recap-title" data-reveal>A previous room.<br /><em>A living record.</em></h2>
            <p data-reveal>The confirmed YMAU V film now lives here on the homepage as a story in its own right—an immediate view into the room before Addis.</p>
            <div className="home-recap__actions" data-reveal>
              <a className="text-link" href="https://drive.google.com/file/d/1wbKwU7HAs9EpIa-Iq240-TFVvt5rjWpQ/view" target="_blank" rel="noreferrer">
                Watch the full film <ArrowIcon />
              </a>
              <Link className="text-link" href="/recap">
                Explore the archive <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="experience__image experience__image--audience" data-reveal>
            <Image
              src={audiencePhoto}
              alt="Students engaged in a university conference session"
              fill
              sizes="(max-width: 980px) 100vw, 54vw"
              quality={90}
              placeholder="blur"
              blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
            />
          </div>
          <div className="experience__copy">
            <div className="section-kicker section-kicker--light" data-reveal>
              <span>06</span>
              <span>The experience</span>
            </div>
            <h2 data-reveal>More than a simulation.</h2>
            <p data-reveal>
              Committee sessions meet leadership programming, cultural exchange
              and conversations over buna that continue long after the gavel falls.
            </p>
            <dl data-reveal>
              <div><dt>Host city</dt><dd>Addis Ababa, Ethiopia</dd></div>
              <div><dt>Dates</dt><dd>15–17 March 2027</dd></div>
              <div><dt>Venue</dt><dd>To be announced</dd></div>
            </dl>
          </div>
          <div className="experience__image experience__image--speaker" data-reveal>
            <Image
              src={speakerPhoto}
              alt="A woman delivering a speech at a conference podium"
              fill
              sizes="(max-width: 980px) 100vw, 46vw"
              quality={90}
              placeholder="blur"
              blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
            />
          </div>
          <div className="experience__image experience__image--coffee" data-reveal>
            <Image
              src={coffeePhoto}
              alt="Ethiopian coffee being poured from a traditional pot"
              fill
              sizes="(max-width: 980px) 100vw, 54vw"
              quality={90}
              placeholder="blur"
              blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
            />
            <div className="experience__culture-tag">
              <CulturalAnnotation term="buna" variant="image" tone="light" />
            </div>
            <span>Hospitality is part of the programme.</span>
          </div>
        </section>

        <section className="delegations" id="delegations">
          <div className="delegations__header" data-reveal>
            <div className="section-kicker">
              <span>07</span>
              <span>Delegations</span>
            </div>
            <p>Registration schedule forthcoming</p>
          </div>
          <div className="delegations__main">
            <h2 data-reveal>Bring your<br />delegation to<br /><em>Addis.</em></h2>
            <div className="delegations__details" data-reveal="delay-1">
              <p>
                Registration details, eligibility guidance and the final
                application timetable are being prepared by the YMAU team.
              </p>
              <div className="deadlines">
                <div><span>Early registration</span><strong>TBA</strong></div>
                <div><span>Final deadline</span><strong>TBA</strong></div>
              </div>
              <a className="button-link" href="mailto:programs@yalemodelau.org">Ask the programmes team <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="interest" id="interest">
          <div className="interest__mark" data-reveal>
            <div className="interest__identity">
              <Image
                className="interest__wordmark"
                src="/ymau-wordmark-white.png"
                alt="Yale Model African Union"
                width={752}
                height={185}
              />
              <div className="interest__brand-meta" aria-label="YMAU VI, sixth edition, Addis Ababa 2027">
                <strong>VI</strong>
                <span>Sixth edition</span>
                <span>Addis Ababa · 2027</span>
              </div>
            </div>
          </div>
          <div className="interest__copy" data-reveal="delay-1">
            <span className="eyebrow">Addis Ababa · 2027</span>
            <h2>Be in the room.</h2>
            <p>
              Registration dates and committee releases will be posted here as
              soon as they are confirmed.
            </p>
            <div className="interest__status" aria-label="Registration timetable forthcoming">
              <span>Registration timetable</span>
              <strong>Forthcoming</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__top">
          <div className="brand brand--footer">
            <Image className="brand__wordmark" src="/ymau-wordmark-white.png" alt="Yale Model African Union" width={752} height={185} />
          </div>
          <div className="footer__nav">
            <Link href="/about">About</Link>
            <Link href="/committees">Committees</Link>
            <Link href="/programme">Programme</Link>
            <Link href="/registration">Registration</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://www.instagram.com/yalemodelau/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/yale-model-african-union-conf/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>YMAU VI · Addis Ababa · 15–17 March 2027</p>
          <p>
            <a href="mailto:programs@yalemodelau.org">programs@yalemodelau.org</a> · {" "}
            <a href="mailto:operations@yalemodelau.org">operations@yalemodelau.org</a>
          </p>
          <p>
            Film: <a href="https://www.pexels.com/video/lush-forest-and-mountain-scenery-35814373/">Santhosh Peddi</a>. Photography: <a href="https://unsplash.com/@hawi_getachew">Hawi Getachew</a>,
            <a href="https://www.pexels.com/@kampus/"> Kampus Production</a>,
            <a href="https://www.pexels.com/@werner-pfennig-1135354/"> Werner Pfennig</a> &amp;
            <a href="https://unsplash.com/@amen_visuals"> Amanuel Kebede</a>
          </p>
          <p className="footer__sources">
            Cultural notes: <a href="https://au.int/en/overview">African Union</a>,
            <a href="https://ethiopianembassy.org/addis-ababa-city-launches-29-bln-birr-project-to-convert-river-banks-into-public-spaces-february-22-2019/"> Embassy of Ethiopia</a> &amp;
            <a href="https://www.si.edu/object/nmah_1894715"> Smithsonian</a>. Language guide:
            <a href="https://www.fsi-language-courses.org/fsi-amharic-basic-course/"> FSI Amharic course</a>
          </p>
          <p>© 2027 YMAU VI</p>
        </div>
      </footer>

      {filmOpen && (
        <div className="film-modal" role="dialog" aria-modal="true" aria-label="Ethiopian highlands film">
          <button className="film-modal__close" type="button" onClick={() => setFilmOpen(false)} aria-label="Close film">×</button>
          <video src={ethiopiaFilm} poster={ethiopiaPoster} autoPlay controls playsInline muted />
          <div className="film-modal__caption">
            <span>The Ethiopian Highlands</span>
            <span>Film: Santhosh Peddi / Pexels</span>
          </div>
        </div>
      )}
    </>
  );
}
