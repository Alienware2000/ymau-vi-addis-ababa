import Image from "next/image";
import Link from "next/link";
import { EditorialImageNote, InnerFooter, LineArrow, PageFamilyNav } from "./editorial-page-parts";
import { SiteHeader } from "./site-header";

const recapStats = [
  ["350+", "delegates"],
  ["30+", "nationalities"],
  ["80%", "received financial aid"],
  ["22", "workshop and panel speakers"],
] as const;

export function RecapPage() {
  return (
    <div className="information-page recap-page">
      <SiteHeader />
      <main>
        <section className="recap-hero">
          <Image
            src="/ymau-media/pages/recap.webp"
            alt="YMAU V delegates and organizers gathered on stage in Accra"
            fill
            sizes="100vw"
            preload
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

        <section className="recap-stats" aria-label="YMAU V at a glance">
          {recapStats.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </section>

        <section className="recap-film">
          <header>
            <span>Extended highlights</span>
            <h2>Inside the room.</h2>
            <p>The final on-site film presentation will be added after the video edit is complete.</p>
          </header>
          <a
            className="recap-film__card"
            href="https://drive.google.com/drive/folders/1eJKTLiy9V1jEdbLdS0hPzU-nkF2pD_sZ"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the YMAU V media archive in Google Drive"
          >
            <div className="recap-film__poster">
              <Image
                src="/ymau-media/programme-closing.webp"
                alt="The full YMAU V delegation gathered on stage in Accra"
                fill
                sizes="(max-width: 820px) 100vw, 70vw"
              />
              <span className="recap-film__shade" />
              <span className="recap-film__play" aria-hidden="true" />
              <span className="recap-film__tag">Film · 2026</span>
            </div>
            <div className="recap-film__details">
              <div><span>Yale Model African Union V</span><strong>Extended highlights</strong></div>
              <div><span>Location</span><strong>Accra, Ghana</strong></div>
              <div><span>Current access</span><strong>Open media archive</strong></div>
              <LineArrow />
            </div>
          </a>
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
