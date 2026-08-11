"use client";

import { useEffect, useState } from "react";

const cityPhoto =
  "https://images.unsplash.com/photo-1686143293611-85158a1a9370?auto=format&fit=crop&fm=jpg&q=86&w=2400";
const audiencePhoto =
  "https://images.pexels.com/photos/5940830/pexels-photo-5940830.jpeg?auto=compress&cs=tinysrgb&w=1800";
const speakerPhoto =
  "https://images.pexels.com/photos/6949925/pexels-photo-6949925.jpeg?auto=compress&cs=tinysrgb&w=1800";
const coffeePhoto =
  "https://images.unsplash.com/photo-1774529233247-d3f34ed11994?auto=format&fit=crop&fm=jpg&q=84&w=1800";
const addisFilm =
  "https://videos.pexels.com/video-files/26436247/11952181_1280_720_25fps.mp4";

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

function Emblem({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`emblem${compact ? " emblem--compact" : ""}`} aria-hidden="true">
      <span>VI</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filmOpen, setFilmOpen] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
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
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#delegations" onClick={closeMenu}>Delegations</a>
          <a className="nav-cta" href="#interest" onClick={closeMenu}>Request an invitation</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <video
            className="hero__media"
            autoPlay
            loop
            muted
            playsInline
            poster={cityPhoto}
            aria-hidden="true"
          >
            <source src={addisFilm} type="video/mp4" />
          </video>
          <div className="hero__veil" />
          <div className="hero__content">
            <div className="hero__edition">
              <span>Sixth edition</span>
              <span>አዲስ አበባ</span>
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
            <span>Watch the city film</span>
          </button>
          <a className="scroll-cue" href="#about" aria-label="Continue to about the conference">
            <span>Explore</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="manifesto" id="about">
          <div className="section-kicker">
            <span>01</span>
            <span>At a glance</span>
          </div>
          <div className="manifesto__grid">
            <h2>
              Diplomacy,
              <br />
              reimagined by Africa&apos;s
              <br />
              <em>next generation.</em>
            </h2>
            <div className="manifesto__copy">
              <p className="lead">
                Four days in the diplomatic capital of Africa. One room for the
                ideas that will shape the continent next.
              </p>
              <p>
                YMAU VI convenes university delegations from across Africa and
                the diaspora for rigorous committee work, cultural exchange and
                a distinctly African approach to multilateral leadership.
              </p>
              <a className="text-link" href="#committees">
                Discover the programme <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <div className="facts" aria-label="Conference facts">
            <div><strong>36</strong><span>universities</span></div>
            <div><strong>420</strong><span>delegates</span></div>
            <div><strong>18</strong><span>countries</span></div>
            <div><strong>4</strong><span>days in Addis</span></div>
          </div>
        </section>

        <section className="city-story" aria-label="A message from the Secretary-General">
          <div className="city-story__image">
            <img src={cityPhoto} alt="Addis Ababa skyline and Churchill Avenue" />
            <span className="photo-label">Addis Ababa · 2,355 m</span>
          </div>
          <div className="city-story__letter">
            <div className="section-kicker section-kicker--light">
              <span>02</span>
              <span>From the Secretariat</span>
            </div>
            <blockquote>
              “We are not gathering to rehearse the future. We are gathering to
              give it language, structure and courage.”
            </blockquote>
            <p>
              In Addis Ababa—the home of African diplomacy—we will ask delegates
              to listen beyond borders, negotiate with care and leave with a more
              demanding idea of leadership.
            </p>
            <div className="signature">
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
          <div className="section-kicker">
            <span>03</span>
            <span>The committees</span>
          </div>
          <div className="committees__intro">
            <h2>Four rooms.<br />One continental agenda.</h2>
            <p>
              Research-led simulations designed with clear stakes, credible
              briefs and enough ambiguity for genuine diplomacy.
            </p>
          </div>
          <div className="committee-list">
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

        <section className="experience" id="experience">
          <div className="experience__image experience__image--audience">
            <img src={audiencePhoto} alt="Students engaged in a university conference session" />
          </div>
          <div className="experience__copy">
            <div className="section-kicker section-kicker--light">
              <span>04</span>
              <span>The experience</span>
            </div>
            <h2>More than a simulation.</h2>
            <p>
              Morning committee sessions give way to policy salons, an evening
              at the African Union precinct and conversations over buna that
              continue long after the gavel falls.
            </p>
            <dl>
              <div><dt>Venue</dt><dd>UNECA Conference Centre</dd></div>
              <div><dt>Languages</dt><dd>English & French</dd></div>
              <div><dt>Dress</dt><dd>Western business or national attire</dd></div>
            </dl>
          </div>
          <div className="experience__image experience__image--speaker">
            <img src={speakerPhoto} alt="A woman delivering a speech at a conference podium" />
          </div>
          <div className="experience__image experience__image--coffee">
            <img src={coffeePhoto} alt="Ethiopian coffee being poured from a traditional pot" />
            <span>Hospitality is part of the programme.</span>
          </div>
        </section>

        <section className="delegations" id="delegations">
          <div className="delegations__header">
            <div className="section-kicker">
              <span>05</span>
              <span>Delegations</span>
            </div>
            <p>Applications open 21 September 2026</p>
          </div>
          <div className="delegations__main">
            <h2>Bring your<br />delegation to<br /><em>Addis.</em></h2>
            <div className="delegations__details">
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
          <div className="interest__mark"><Emblem /></div>
          <div className="interest__copy">
            <span className="eyebrow">Addis Ababa · 2027</span>
            <h2>Be in the room.</h2>
            <p>
              Join the first release list for delegation invitations, committee
              briefs and travel guidance.
            </p>
            <a href="mailto:delegations@example.org?subject=YMAU%20VI%20Invitation%20Pack">
              Request an invitation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__top">
          <div className="brand brand--footer"><Emblem compact /><span className="brand__name">Yale Model <span>African Union</span></span></div>
          <div className="footer__nav">
            <a href="#about">About</a>
            <a href="#committees">Committees</a>
            <a href="#experience">Experience</a>
            <a href="#delegations">Delegations</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Concept prototype · Fictional conference information</p>
          <p>
            Photography: <a href="https://unsplash.com/@hawi_getachew">Hawi Getachew</a>,
            <a href="https://www.pexels.com/@kampus/"> Kampus Production</a>,
            <a href="https://www.pexels.com/@werner-pfennig-1135354/"> Werner Pfennig</a> &amp;
            <a href="https://unsplash.com/@amen_visuals"> Amanuel Kebede</a>
          </p>
          <p>© 2027 YMAU VI</p>
        </div>
      </footer>

      {filmOpen && (
        <div className="film-modal" role="dialog" aria-modal="true" aria-label="Addis Ababa city film">
          <button className="film-modal__close" type="button" onClick={() => setFilmOpen(false)} aria-label="Close film">×</button>
          <video src={addisFilm} poster={cityPhoto} autoPlay controls playsInline />
          <div className="film-modal__caption">
            <span>Addis Ababa after dark</span>
            <span>Film: Gift Habeshaw / Pexels</span>
          </div>
        </div>
      )}
    </>
  );
}
