import type { InformationPageData } from "../site-content";
import { EditorialAction, NumberedList, ResourceCards } from "./editorial-content";
import { EditorialMedia } from "./editorial-media";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";

export function ConferenceFamilyPage({ data, slug }: { data: InformationPageData; slug: "mandate-to-market" | "pre-conference" }) {
  return (
    <PageShell data={data} slug={slug} heroVariant="statement">
      <section className={`conference-brief conference-brief--${slug}`}>
        <header><span>{data.number} · {data.eyebrow}</span><h2>{slug === "mandate-to-market" ? <>Policy is only the<br /><em>beginning.</em></> : <>Preparation changes<br /><em>the room.</em></>}</h2></header>
        <p>{data.intro}</p>
      </section>

      <div className="conference-brief__flow">
        {data.sections.map((section, index) => (
          <ScrollRevealSection className={`conference-brief__section${section.image ? " conference-brief__section--media" : ""}`} key={section.heading}>
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.heading}</h2>
              {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <NumberedList items={section.items} />}
              {section.note && <p className="conference-brief__note">{section.note}</p>}
            </div>
            {section.image && <EditorialMedia asset={section.image} />}
          </ScrollRevealSection>
        ))}
      </div>
      {data.resources && <ResourceCards resources={data.resources} title={slug === "mandate-to-market" ? "The application pack will live here." : undefined} />}
      {data.action && <EditorialAction action={data.action} />}
    </PageShell>
  );
}
