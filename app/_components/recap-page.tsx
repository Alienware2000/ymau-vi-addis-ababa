import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE_PLACEHOLDER } from "../image-delivery";
import { ymauVConferenceMetrics } from "../conference-metrics";
import { AnimatedStatGrid } from "./animated-stat-grid";
import { EditorialImageNote, InnerFooter, LineArrow, PageFamilyNav } from "./editorial-page-parts";
import { SiteHeader } from "./site-header";

export function RecapPage() {
  return (
    <div className="information-page recap-page">
      <SiteHeader />
      <main id="main-content">
        <section className="recap-hero">
          <Image
            src="/ymau-media/editorial/recap-community-wide.jpg"
            alt="YMAU V delegates, organizers and guests gathered after the closing assembly in Accra"
            fill
            sizes="100vw"
            quality={90}
            preload
            placeholder="blur"
            blurDataURL={HERO_IMAGE_PLACEHOLDER}
            className="recap-hero__image"
          />
          <span className="recap-hero__veil" />
          <div className="recap-hero__meta"><span>Conference archive</span><span>Accra · 2026</span></div>
          <div className="recap-hero__copy">
            <span aria-hidden="true">V</span>
            <div>
              <p>The fifth edition</p>
              <h1>YMAU V,<br /><em>in record.</em></h1>
            </div>
          </div>
          <EditorialImageNote context="Closing assembly · Accra, Ghana" />
        </section>

        <PageFamilyNav slug="recap" />

        <section className="recap-intro">
          <div>
            <span>13–15 March 2026</span>
            <h2>The conference before Addis.</h2>
          </div>
          <p>
            YMAU V gathered delegates in Accra for three days of committee work, practitioner exchange and cultural programming. Its report is both a record of that room and a starting point for the sixth edition.
          </p>
        </section>

        <AnimatedStatGrid
          stats={ymauVConferenceMetrics}
          className="recap-stats"
          ariaLabel="YMAU V at a glance"
          itemElement="div"
          showDetail={false}
        />

        <section className="recap-film">
          <header>
            <span>Extended highlights</span>
            <h2>Inside the room.</h2>
            <p>The official YMAU V extended-highlights film is preserved in the conference media archive.</p>
          </header>
          <div className="recap-film__card">
            <div className="recap-film__poster">
              <iframe
                className="recap-film__frame"
                src="https://drive.google.com/file/d/1wbKwU7HAs9EpIa-Iq240-TFVvt5rjWpQ/preview"
                title="YMAU V extended highlights"
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="lazy"
              />
              <span className="recap-film__tag">Film · 2026</span>
            </div>
            <a
              className="recap-film__details"
              href="https://drive.google.com/file/d/1wbKwU7HAs9EpIa-Iq240-TFVvt5rjWpQ/view"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the official YMAU V extended-highlights film in Google Drive"
            >
              <div><span>Yale Model African Union V</span><strong>Extended highlights</strong></div>
              <div><span>Location</span><strong>Accra, Ghana</strong></div>
              <div><span>Current access</span><strong>Watch the film</strong></div>
              <LineArrow />
            </a>
          </div>
        </section>

        <section className="recap-report">
          <div className="recap-report__cover" aria-hidden="true">
            <span>YMAU</span>
            <strong>V</strong>
            <p>Executive<br />Report</p>
          </div>
          <div className="recap-report__copy">
            <span>The written record</span>
            <h2>What was built in Accra should remain useful after Accra.</h2>
            <p>
              The YMAU V Executive Report documents the programme, committee outcomes, financial-aid reach, partners and the decisions that shaped the fifth edition.
            </p>
            <a
              href="https://drive.google.com/file/d/10mxwms6_x02wp_m6zC-PHHUu795KrEEu/view"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Read the executive report <LineArrow />
            </a>
          </div>
        </section>

        <section className="recap-next">
          <span>From Accra to Addis Ababa</span>
          <h2>The next room is already taking shape.</h2>
          <Link href="/programme">Explore the YMAU VI programme <LineArrow /></Link>
        </section>
      </main>
      <InnerFooter />
    </div>
  );
}
