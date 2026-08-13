import Link from "next/link";
import { routeEditorialMedia } from "../media-library";
import type { InformationPageData } from "../site-content";
import { EditorialMedia } from "./editorial-media";
import { CulturalAnnotation } from "./cultural-annotation";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";

const cityFacts = [
  ["2,355 m", "Approximate elevation"],
  ["Amharic", "A language heard across the capital"],
  ["UTC+3", "East Africa Time"],
  ["ETB", "Ethiopian birr"],
];

export function AddisPage({ data }: { data: InformationPageData }) {
  const [night, market, cathedral] = routeEditorialMedia.addisAbaba;
  return (
    <PageShell data={data} slug="addis-ababa" heroVariant="city">
      <section className="addis-opening">
        <div>
          <CulturalAnnotation term="addisAbaba" variant="display" tone="warm" />
          <small>Open the language note · meaning, sound and context</small>
        </div>
        <h2>A highland capital.<br />A continental address.</h2>
        <p>Home to the African Union and the United Nations Economic Commission for Africa, Addis is where diplomacy sits alongside an everyday city of markets, worship, coffee and constant change.</p>
      </section>
      <div className="addis-facts">{cityFacts.map(([value, label]) => <div key={label}><div className="addis-facts__value">{value === "Amharic" ? <CulturalAnnotation term="amharic" variant="fact" tone="light" /> : <strong>{value}</strong>}</div><span>{label}</span></div>)}</div>
      <ScrollRevealSection className="addis-institution">
        <EditorialMedia asset={cathedral} />
        <div><span>Diplomatic capital</span><h2>Institutions live inside a city.</h2><p>{data.sections[0]?.body?.[0]}</p></div>
      </ScrollRevealSection>
      <ScrollRevealSection className="addis-street">
        <div><span>At street level</span><h2>Movement, memory<br />and modernity.</h2><p>{data.sections.find((section) => section.heading === "The city at street level")?.body?.[0]}</p></div>
        <EditorialMedia asset={market} />
      </ScrollRevealSection>
      <ScrollRevealSection className="addis-night"><EditorialMedia asset={night} annotation="addisAbaba" /><blockquote>“New flower” is not only a translation. It is a useful way to read a city still becoming itself.</blockquote></ScrollRevealSection>
      <section className="addis-guide-link"><span>Continue the journey</span><h2>Language, coffee, arrival and the practical city.</h2><Link href="/city-guide">Open the delegate city guide</Link></section>
    </PageShell>
  );
}
