import type { InformationPageData } from "../site-content";
import { EditorialAction, NumberedList } from "./editorial-content";
import { EditorialMedia } from "./editorial-media";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";

export function InstitutionalPage({ data, slug }: { data: InformationPageData; slug: "partners" | "past-partners" | "sponsor" | "contact" }) {
  return (
    <PageShell data={data} slug={slug}>
      <section className={`institutional-opening institutional-opening--${slug}`}>
        <span>{data.number} · Institutional relations</span>
        <h2>{slug === "partners" ? "Partnership is part of the architecture." : slug === "past-partners" ? "The record should name who made it possible." : slug === "sponsor" ? "Support that changes who can enter the room." : "One question. The right desk."}</h2>
        <p>{data.intro}</p>
      </section>
      <div className={`institutional-flow institutional-flow--${slug}`}>
        {data.sections.map((section, index) => (
          <ScrollRevealSection className={`institutional-section${section.image ? " institutional-section--media" : ""}`} key={section.heading}>
            <div><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items && <NumberedList items={section.items} />}{section.note && <p className="institutional-note">{section.note}</p>}</div>
            {section.image && <EditorialMedia asset={section.image} />}
          </ScrollRevealSection>
        ))}
      </div>
      {data.status && <p className="editorial-holding-note"><span>In progress</span>{data.status}</p>}
      {data.action && <EditorialAction action={data.action} />}
    </PageShell>
  );
}
