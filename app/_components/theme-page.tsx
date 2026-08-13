import Link from "next/link";
import { routeEditorialMedia } from "../media-library";
import type { InformationPageData } from "../site-content";
import { EditorialMedia } from "./editorial-media";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { CulturalAnnotation } from "./cultural-annotation";

export function ThemePage({ data }: { data: InformationPageData }) {
  const [deliberation, culture] = routeEditorialMedia.theme;
  return (
    <PageShell data={data} slug="theme" heroVariant="statement">
      <section className="theme-manifesto">
        <div className="theme-manifesto__language"><span>The question behind every room</span><CulturalAnnotation term="andinet" variant="quiet" tone="light" align="right" /></div>
        <h2>Who defines<br /><em>African success?</em></h2>
        <p>{data.sections[0]?.body?.[0]}</p>
      </section>
      <ScrollRevealSection className="theme-image-break"><EditorialMedia asset={deliberation} /></ScrollRevealSection>
      <div className="theme-principles">
        {data.sections[1]?.items?.map((item, index) => (
          <ScrollRevealSection as="article" className="theme-principle" key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></ScrollRevealSection>
        ))}
      </div>
      <ScrollRevealSection className="theme-closing">
        <div><span>From theme to practice</span><h2>Vision matters when it survives the room.</h2><p>{data.sections[2]?.body?.[0]}</p><Link href="/programme">Explore the programme</Link></div>
        <EditorialMedia asset={culture} />
      </ScrollRevealSection>
    </PageShell>
  );
}
