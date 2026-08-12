import Image from "next/image";
import Link from "next/link";
import { EditorialImageNote, InnerFooter, LineArrow, PageFamilyNav } from "./editorial-page-parts";
import { SiteHeader } from "./site-header";

const focusAreas = [
  {
    number: "01",
    title: "Diplomacy in practice",
    copy: "Negotiation, coalition-building and consensus become practised skills—not abstract ideas.",
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
    title: "Africa-rooted, globally connected",
    copy: "The conference joins rigorous policy work to the lived realities, histories and ambitions of the continent.",
  },
];

const aboutLinks = [
  ["Our history", "/history", "How a Yale idea moved onto African ground."],
  ["Secretary-General", "/secretary-general", "Meet the student leading the sixth edition."],
  ["Our Secretariat", "/secretariat", "The team building the conference from the inside."],
  ["YMAU VI Ambassadors", "/ambassadors", "A network carrying the invitation across borders."],
] as const;

export function AboutPage() {
  return (
    <div className="information-page about-page">
      <SiteHeader />
      <main>
        <section className="about-hero">
          <Image
            src="/ymau-media/pages/about.webp"
            alt="YMAU V delegates gathered for the official conference portrait in Accra"
            fill
            sizes="100vw"
            preload
            className="about-hero__image"
          />
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
                From 15–17 March 2027, the sixth edition convenes in Addis Ababa—the city at the diplomatic centre of the continent—in partnership with the African Union Commission’s Youth Division.
              </p>
            </div>
          </div>
        </section>

        <section className="about-focus">
          <header>
            <span>What the conference is designed to build</span>
            <h2>Four commitments.<br /><em>One continental room.</em></h2>
          </header>
          <div className="about-focus__grid">
            {focusAreas.map((area) => (
              <article key={area.number}>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-network">
          <div className="about-network__image">
            <Image
              src="/ymau-media/pages/ambassadors.webp"
              alt="YMAU V delegates wearing coordinated African-print dress on stage"
              fill
              sizes="(max-width: 820px) 100vw, 48vw"
            />
            <EditorialImageNote context="African Soirée · YMAU V" />
          </div>
          <div className="about-network__copy">
            <span>Across borders</span>
            <h2>A conference in Addis. A network far beyond it.</h2>
            <p>
              Ninety-seven student ambassadors across more than fifteen countries are helping YMAU VI reach campuses, communities and prospective delegates around the world.
            </p>
            <dl>
              <div><dt>97</dt><dd>YMAU VI ambassadors</dd></div>
              <div><dt>15+</dt><dd>countries represented</dd></div>
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
            <strong>Read the YMAU VI concept note</strong>
            <LineArrow />
          </a>
        </section>
      </main>
      <InnerFooter />
    </div>
  );
}
