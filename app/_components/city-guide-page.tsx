import Link from "next/link";
import type { InformationPageData } from "../site-content";
import { EditorialMedia } from "./editorial-media";
import { CulturalAnnotation } from "./cultural-annotation";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";

export function CityGuidePage({ data }: { data: InformationPageData }) {
  const [language, institutions, coffee, practical] = data.sections;
  return (
    <PageShell data={data} slug="city-guide" heroVariant="city">
      <section className="city-guide-intro"><CulturalAnnotation term="melkamGuzo" variant="display" tone="warm" /><div><small>Open the language note · a wish for the road</small><h2>Arrive with context,<br />not only an itinerary.</h2></div></section>
      <ScrollRevealSection className="city-language">
        <EditorialMedia asset={language.image!} annotation="andinet" />
        <div><span>Language for the journey</span><h2>Three phrases.<br />One warmer arrival.</h2><ul className="city-language__terms"><li><CulturalAnnotation term="selam" variant="inline" tone="warm" /></li><li><CulturalAnnotation term="ameseginalehu" variant="inline" tone="warm" /></li><li><CulturalAnnotation term="addisAbaba" variant="inline" tone="warm" align="right" /></li></ul></div>
      </ScrollRevealSection>
      <ScrollRevealSection className="city-guide-feature city-guide-feature--institutions"><div><span>Institutions and culture</span><h2>Diplomacy has an address.</h2><p>{institutions.body?.[0]}</p></div><EditorialMedia asset={institutions.image!} /></ScrollRevealSection>
      <ScrollRevealSection className="city-guide-feature city-guide-feature--coffee"><EditorialMedia asset={coffee.image!} annotation="buna" /><div><CulturalAnnotation term="buna" variant="quiet" tone="warm" /><h2>Coffee is welcome,<br />conversation and time.</h2><p>{coffee.body?.[0]}</p></div></ScrollRevealSection>
      <ScrollRevealSection className="city-practical"><EditorialMedia asset={practical.image!} /><div><span>Practical layer</span><h2>The details that make the city easier.</h2><ul>{practical.items?.map((item) => <li key={item}>{item}</li>)}</ul></div></ScrollRevealSection>
      <section className="city-guide-return"><span>Return to the map</span><Link href="/addis-ababa">Meet the host city</Link></section>
    </PageShell>
  );
}
