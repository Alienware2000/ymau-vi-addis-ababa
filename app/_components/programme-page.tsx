import Image from "next/image";
import Link from "next/link";
import { EditorialImageNote, InnerFooter, LineArrow, PageFamilyNav } from "./editorial-page-parts";
import { SiteHeader } from "./site-header";

const days = [
  {
    number: "01",
    day: "Monday",
    date: "15 March",
    title: "Opening",
    copy: "Arrival, delegate orientation and the formal opening of YMAU VI.",
    image: "/ymau-media/programme-opening.webp",
    alt: "Delegates seated in the auditorium during the YMAU V opening programme",
    position: "50% 50%",
  },
  {
    number: "02",
    day: "Tuesday",
    date: "16 March",
    title: "Deliberation",
    copy: "A full day of committee work, leadership programming and cultural exchange.",
    image: "/ymau-media/programme-deliberation.webp",
    alt: "A delegate speaking during a YMAU V committee session",
    position: "50% 48%",
  },
  {
    number: "03",
    day: "Wednesday",
    date: "17 March",
    title: "Resolution",
    copy: "Final negotiations, adoption of resolutions and a closing assembly for the full delegation.",
    image: "/ymau-media/programme-closing.webp",
    alt: "The YMAU V delegation gathered on stage for the closing assembly",
    position: "50% 44%",
  },
];

const programmeLayers = [
  ["Panels", "Practitioners and policy leaders connect committee questions to choices being made across the continent now."],
  ["Leadership workshops", "Small, applied sessions turn broad ambitions into tools delegates can take back to their institutions."],
  ["Career fair", "Delegates meet organizations working across public service, development, finance, research and continental institutions."],
  ["Pre-conference webinars", "A digital preparation series introduces the African Union, procedure and the policy context needed before Addis."],
] as const;

export function ProgrammePage() {
  return (
    <div className="information-page programme-page">
      <SiteHeader />
      <main>
        <section className="programme-hero">
          <Image
            src="/ymau-media/pages/programme.webp"
            alt="A committee chair addressing delegates during YMAU V"
            fill
            sizes="100vw"
            preload
            className="programme-hero__image"
          />
          <span className="programme-hero__veil" />
          <div className="programme-hero__meta">
            <span>05 · The Programme</span>
            <span>Three days · Addis Ababa</span>
          </div>
          <div className="programme-hero__copy">
            <h1>Policy fluency meets <em>practical leadership.</em></h1>
            <p>15–17 March 2027</p>
          </div>
          <EditorialImageNote context="Committee session · YMAU V" />
        </section>

        <PageFamilyNav slug="programme" />

        <section className="programme-overview">
          <span>At a glance</span>
          <h2>Three movements through one conference.</h2>
          <p>
            The detailed running order will be published when sessions and speakers are confirmed. This is the architecture delegates can prepare around now.
          </p>
        </section>

        <section className="programme-days" aria-label="Three-day programme overview">
          {days.map((item) => (
            <article key={item.number} className="programme-day-card">
              <div className="programme-day-card__image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                  style={{ objectPosition: item.position }}
                />
                <span className="programme-day-card__shade" />
                <div className="programme-day-card__date"><span>{item.day}</span><strong>{item.date}</strong></div>
                <span className="programme-day-card__number">{item.number}</span>
              </div>
              <div className="programme-day-card__copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="programme-layers">
          <header>
            <span>Beyond the committee room</span>
            <h2>A conference is more than its schedule.</h2>
          </header>
          <div>
            {programmeLayers.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="programme-mandate">
          <div className="programme-mandate__mark" aria-hidden="true">M2M</div>
          <div>
            <span>Signature programme</span>
            <h2>Mandate<br /><em>to Market</em></h2>
            <p>
              Participants take an African Union mandate beyond the meeting room and shape it into an actionable, locally grounded proposal. Implementation—not presentation alone—is the measure.
            </p>
            <Link href="/mandate-to-market" className="text-link text-link--light">Explore the programme <LineArrow /></Link>
          </div>
        </section>

        <section className="programme-actions">
          <Link href="/committees"><span>Committee work</span><strong>See how deliberation is structured.</strong><LineArrow /></Link>
          <Link href="/pre-conference"><span>Before Addis</span><strong>Prepare through the digital series.</strong><LineArrow /></Link>
        </section>
      </main>
      <InnerFooter />
    </div>
  );
}
