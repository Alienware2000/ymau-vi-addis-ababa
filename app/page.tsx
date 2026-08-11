"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const cityPhoto =
  "https://images.unsplash.com/photo-1686143293611-85158a1a9370?auto=format&fit=crop&fm=jpg&q=86&w=2400";
const audiencePhoto =
  "https://images.pexels.com/photos/5940830/pexels-photo-5940830.jpeg?auto=compress&cs=tinysrgb&w=1800";
const speakerPhoto =
  "https://images.pexels.com/photos/6949925/pexels-photo-6949925.jpeg?auto=compress&cs=tinysrgb&w=1800";
const coffeePhoto =
  "https://images.unsplash.com/photo-1774529233247-d3f34ed11994?auto=format&fit=crop&fm=jpg&q=84&w=1800";
const ethiopiaFilm = "/ethiopia-highlands.mp4";
const ethiopiaMobileFilm = "/ethiopia-highlands-mobile.mp4";
const ethiopiaPoster = "/ethiopia-highlands-poster.jpg";

const committees = [
  {
    number: "01",
    title: "Peace & Security Council",
    agenda: "Securing the Red Sea corridor",
    level: "Advanced",
    copy: "A crisis-driven simulation on maritime security, regional trade and the responsibilities of African institutions.",
  },
  {
    number: "02",
    title: "Pan-African Parliament",
    agenda: "A continental compact for AI",
    level: "Intermediate",
    copy: "Delegates draft a shared framework for education, infrastructure and accountable technology across the continent.",
  },
  {
    number: "03",
    title: "Executive Council",
    agenda: "Climate mobility without borders",
    level: "Intermediate",
    copy: "Ministers negotiate a rights-based approach to displacement, labor mobility and resilient urban planning.",
  },
  {
    number: "04",
    title: "African Youth Assembly",
    agenda: "The 2063 generation",
    level: "Novice",
    copy: "First-time delegates shape a youth charter on civic trust, education and the future of democratic participation.",
  },
];

const programmeDays = [
  {
    date: "11 MAR",
    day: "Thursday",
    phase: "Arrival",
    programme: "Registration, diplomatic welcome and an opening evening beneath the jacarandas.",
  },
  {
    date: "12 MAR",
    day: "Friday",
    phase: "Opening",
    programme: "Plenary, keynote dialogue and the first round of committee sessions.",
  },
  {
    date: "13 MAR",
    day: "Saturday",
    phase: "Deliberation",
    programme: "Negotiations, policy salons and an evening at the African Union precinct.",
  },
  {
    date: "14 MAR",
    day: "Sunday",
    phase: "Resolution",
    programme: "Final votes, closing plenary and a cultural farewell to Addis Ababa.",
  },
];

function Emblem({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`emblem${compact ? " emblem--compact" : ""}`} aria-hidden="true">
      <span>VI</span>
    </span>
  );
}

function TranslationTerm({
  id,
  amharic,
  transliteration,
  meaning,
  pronunciation,
  light = false,
  align = "left",
}: {
  id: string;
  amharic: string;
  transliteration: string;
  meaning: string;
  pronunciation: string;
  light?: boolean;
  align?: "left" | "right";
}) {
  const tooltipId = `${id}-translation`;

  return (
    <button
      type="button"
      className={`translation-term${light ? " translation-term--light" : ""} translation-term--${align}`}
      aria-label={`${amharic}, ${transliteration}, meaning ${meaning}, pronounced approximately ${pronunciation}`}
      aria-describedby={tooltipId}
    >
      <span className="translation-term__surface">
        <span lang="am">{amharic}</span>
      </span>
      <span className="translation-term__popover" id={tooltipId} role="tooltip">
        <span className="translation-term__language">Amharic lexicon</span>
        <span className="translation-term__definition">
          <strong>{transliteration}</strong>
          <em>{meaning}</em>
        </span>
        <span className="translation-term__pronunciation">
          <span>Pronounce</span>
          <b>{pronunciation}</b>
        </span>
      </span>
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filmOpen, setFilmOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
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

    const play = () => {
      video.muted = true;
      video.defaultMuted = true;
      if (video.paused && document.visibilityState === "visible") {
        void video.play().catch(() => undefined);
      }
    };
    const onVisibilityChange = () => play();

    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    window.addEventListener("focus", play);
    window.addEventListener("pageshow", play);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
      window.removeEventListener("focus", play);
      window.removeEventListener("pageshow", play);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      const top = window.scrollY;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(top > 42);
      if (progressRef.current) {
        const progress = distance > 0 ? Math.min(top / distance, 1) : 0;
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
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`announcement${isScrolled ? " is-hidden" : ""}`}>
        <span>Delegation applications open 21 September 2026</span>
        <a href="#delegations">View key dates <span aria-hidden="true">↗</span></a>
      </div>
      <span className="page-progress" aria-hidden="true"><span ref={progressRef} /></span>

      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="YMAU VI home" onClick={closeMenu}>
          <Emblem compact />
          <span className="brand__name">
            Yale Model <span>African Union</span>
          </span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#committees" onClick={closeMenu}>Committees</a>
          <a href="#programme" onClick={closeMenu}>Programme</a>
          <a href="#delegations" onClick={closeMenu}>Delegations</a>
          <a className="nav-cta" href="#interest" onClick={closeMenu}>Request an invitation</a>
        </nav>
      </header>

      <main id="top">
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
              <TranslationTerm
                id="hero-addis"
                amharic="አዲስ አበባ"
                transliteration="Addis Ababa"
                meaning="New Flower"
                pronunciation="ad-DEES AH-buh-bah"
                light
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
              <p>11—14 March 2027</p>
            </div>
          </div>
          <button className="film-link" type="button" onClick={() => setFilmOpen(true)}>
            <span className="film-link__icon" aria-hidden="true" />
            <span>Watch the Ethiopia film</span>
          </button>
          <p className="hero__scene">Ethiopian Highlands <span>Film · Santhosh Peddi</span></p>
          <a className="scroll-cue" href="#about" aria-label="Continue to about the conference">
            <span>Explore</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

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
                Four days in the diplomatic capital of Africa. One room for the
                ideas that will shape the continent next.
              </p>
              <p>
                YMAU VI convenes university delegations from across Africa and
                the diaspora for rigorous committee work, cultural exchange and
                a distinctly African approach to multilateral leadership.
              </p>
              <a className="text-link" href="#programme">
                Discover the programme <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <div className="facts" aria-label="Conference facts" data-reveal>
            <div><strong>36</strong><span>universities</span></div>
            <div><strong>420</strong><span>delegates</span></div>
            <div><strong>18</strong><span>countries</span></div>
            <div><strong>4</strong><span>days in Addis</span></div>
          </div>
        </section>

        <section className="field-notes" aria-labelledby="field-notes-title">
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
              <TranslationTerm
                id="field-selam"
                amharic="ሰላም"
                transliteration="Selam"
                meaning="Hello · Peace"
                pronunciation="seh-LAHM"
              />
              <h3>Selam</h3>
              <p className="field-note__pronunciation"><span>Say it</span> seh-LAHM</p>
              <p>A greeting and a wish in one word: hello, but also peace.</p>
            </article>
            <article className="field-note" data-reveal="delay-1">
              <span className="field-note__index">02 · The city</span>
              <TranslationTerm
                id="field-addis"
                amharic="አዲስ አበባ"
                transliteration="Addis Ababa"
                meaning="New Flower"
                pronunciation="ad-DEES AH-buh-bah"
              />
              <h3>New Flower</h3>
              <p className="field-note__pronunciation"><span>Say it</span> ad-DEES AH-buh-bah</p>
              <p>The city&apos;s Amharic name is an invitation to see Addis anew.</p>
            </article>
            <article className="field-note" data-reveal>
              <span className="field-note__index">03 · Hospitality</span>
              <TranslationTerm
                id="field-buna"
                amharic="ቡና"
                transliteration="Buna"
                meaning="Coffee"
                pronunciation="BOO-nah"
              />
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
            <span className="journey-phrase__amharic" lang="am">አመሰግናለሁ</span>
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
              Read the AU history <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="city-story" aria-label="A message from the Secretary-General">
          <div className="city-story__image" data-reveal>
            <Image
              src={cityPhoto}
              alt="Addis Ababa skyline and Churchill Avenue"
              fill
              sizes="(max-width: 980px) 100vw, 53vw"
            />
            <span className="photo-label">Addis Ababa · 2,355 m</span>
            <span className="photo-label photo-label--right">OAU founded here · 1963</span>
          </div>
          <div className="city-story__letter">
            <div className="section-kicker section-kicker--light" data-reveal>
              <span>02</span>
              <span>From the Secretariat</span>
            </div>
            <blockquote data-reveal>
              “We are not gathering to rehearse the future. We are gathering to
              give it language, structure and courage.”
            </blockquote>
            <p data-reveal>
              In Addis Ababa—the home of African diplomacy—we will ask delegates
              to listen beyond borders, negotiate with care and leave with a more
              demanding idea of leadership.
            </p>
            <div className="signature" data-reveal>
              <span>Nardos Bekele</span>
              <span>Secretary-General, YMAU VI</span>
            </div>
          </div>
        </section>

        <section className="ribbon" aria-label="Conference theme">
          <div className="ribbon__track">
            <span>Rooted in Africa</span><i>◆</i><span>Ready for the world</span><i>◆</i>
            <span>Rooted in Africa</span><i>◆</i><span>Ready for the world</span>
          </div>
        </section>

        <section className="committees" id="committees">
          <div className="section-kicker" data-reveal>
            <span>03</span>
            <span>The committees</span>
          </div>
          <div className="committees__intro">
            <h2 data-reveal>Four rooms.<br />One continental agenda.</h2>
            <p data-reveal="delay-1">
              Research-led simulations designed with clear stakes, credible
              briefs and enough ambiguity for genuine diplomacy.
            </p>
          </div>
          <div className="committee-list" data-reveal>
            {committees.map((committee) => (
              <details className="committee" key={committee.number}>
                <summary>
                  <span className="committee__number">{committee.number}</span>
                  <span className="committee__name">{committee.title}</span>
                  <span className="committee__agenda">{committee.agenda}</span>
                  <span className="committee__toggle" aria-hidden="true">+</span>
                </summary>
                <div className="committee__detail">
                  <p>{committee.copy}</p>
                  <span>{committee.level} · 48–72 delegates</span>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="programme" id="programme">
          <div className="programme__heading">
            <div className="section-kicker section-kicker--light" data-reveal>
              <span>04</span>
              <span>The programme</span>
            </div>
            <h2 data-reveal>Four considered days.<br /><em>One lasting exchange.</em></h2>
          </div>
          <div className="programme__days">
            {programmeDays.map((item, index) => (
              <article className="programme-day" key={item.date} data-reveal={`delay-${index % 2}`}>
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

        <section className="experience" id="experience">
          <div className="experience__image experience__image--audience" data-reveal>
            <Image
              src={audiencePhoto}
              alt="Students engaged in a university conference session"
              fill
              sizes="(max-width: 980px) 100vw, 54vw"
            />
          </div>
          <div className="experience__copy">
            <div className="section-kicker section-kicker--light" data-reveal>
              <span>05</span>
              <span>The experience</span>
            </div>
            <h2 data-reveal>More than a simulation.</h2>
            <p data-reveal>
              Morning committee sessions give way to policy salons, an evening
              at the African Union precinct and conversations over buna that
              continue long after the gavel falls.
            </p>
            <dl data-reveal>
              <div><dt>Venue</dt><dd>UNECA Conference Centre</dd></div>
              <div><dt>Languages</dt><dd>English &amp; French</dd></div>
              <div><dt>Dress</dt><dd>Western business or national attire</dd></div>
            </dl>
          </div>
          <div className="experience__image experience__image--speaker" data-reveal>
            <Image
              src={speakerPhoto}
              alt="A woman delivering a speech at a conference podium"
              fill
              sizes="46vw"
            />
          </div>
          <div className="experience__image experience__image--coffee" data-reveal>
            <Image
              src={coffeePhoto}
              alt="Ethiopian coffee being poured from a traditional pot"
              fill
              sizes="(max-width: 980px) 100vw, 54vw"
            />
            <div className="experience__culture-tag">
              <TranslationTerm
                id="coffee-buna"
                amharic="ቡና"
                transliteration="Buna"
                meaning="Coffee"
                pronunciation="BOO-nah"
                light
              />
            </div>
            <span>Hospitality is part of the programme.</span>
          </div>
        </section>

        <section className="delegations" id="delegations">
          <div className="delegations__header" data-reveal>
            <div className="section-kicker">
              <span>06</span>
              <span>Delegations</span>
            </div>
            <p>Applications open 21 September 2026</p>
          </div>
          <div className="delegations__main">
            <h2 data-reveal>Bring your<br />delegation to<br /><em>Addis.</em></h2>
            <div className="delegations__details" data-reveal="delay-1">
              <p>
                University delegations of six to sixteen students are invited.
                Independent delegates may apply for a limited number of places.
              </p>
              <div className="deadlines">
                <div><span>Priority</span><strong>02 NOV</strong></div>
                <div><span>Final</span><strong>11 JAN</strong></div>
              </div>
              <a className="button-link" href="#interest">Request the invitation pack <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="interest" id="interest">
          <div className="interest__mark" data-reveal><Emblem /></div>
          <div className="interest__copy" data-reveal="delay-1">
            <span className="eyebrow">Addis Ababa · 2027</span>
            <h2>Be in the room.</h2>
            <p>
              Join the first release list for delegation invitations, committee
              briefs and travel guidance.
            </p>
            <div className="interest__status" aria-label="Invitation requests open 21 September 2026">
              <span>Invitation requests</span>
              <strong>Opening 21 September 2026</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__top">
          <div className="brand brand--footer"><Emblem compact /><span className="brand__name">Yale Model <span>African Union</span></span></div>
          <div className="footer__nav">
            <a href="#about">About</a>
            <a href="#committees">Committees</a>
            <a href="#programme">Programme</a>
            <a href="#delegations">Delegations</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Concept prototype · Fictional conference information</p>
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
