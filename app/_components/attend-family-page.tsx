import type { InformationPageData } from "../site-content";
import { AnimatedStatGrid } from "./animated-stat-grid";
import { EditorialAction, NumberedList, ResourceCards } from "./editorial-content";
import { EditorialMedia } from "./editorial-media";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { VisaPathwayChecker } from "./visa-pathway-checker";

export function AttendFamilyPage({ data, slug }: { data: InformationPageData; slug: "registration" | "financial-aid" | "faq" | "travel-guide" }) {
  const isFaq = slug === "faq";
  return (
    <PageShell data={data} slug={slug} heroVariant="default">
      <section className={`attend-opening attend-opening--${slug}`}>
        <span>{data.number} · Attend YMAU VI</span>
        <h2>{slug === "registration" ? "One clear route from interest to arrival." : slug === "financial-aid" ? "Access belongs inside the conference design." : slug === "travel-guide" ? "Plan with official information, not guesswork." : "Practical answers without the scavenger hunt."}</h2>
        <p>{data.intro}</p>
      </section>

      {isFaq ? (
        <section className="attend-faq">
          {data.sections.map((section, index) => <details key={section.heading}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{section.heading}</strong><i /></summary><div>{section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></details>)}
        </section>
      ) : (
        <div className={`attend-flow attend-flow--${slug}`}>
          {data.sections.map((section, index) => (
            <ScrollRevealSection className={`attend-section${section.image ? " attend-section--media" : ""}${section.stats ? " attend-section--stats" : ""}`} key={section.heading}>
              <div className="attend-section__copy">
                <span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>
                {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && <NumberedList items={section.items} />}
                {section.stats && <AnimatedStatGrid stats={section.stats} className="attend-metrics" />}
                {section.note && <p className="attend-section__note">{section.note}</p>}
              </div>
              {section.image && <EditorialMedia asset={section.image} sizes="(max-width: 820px) 100vw, (max-width: 1800px) 56vw, 960px" />}
            </ScrollRevealSection>
          ))}
        </div>
      )}
      {slug === "travel-guide" && <VisaPathwayChecker />}
      {data.resources && <ResourceCards resources={data.resources} />}
      {data.action && <EditorialAction action={data.action} />}
    </PageShell>
  );
}
