import Link from "next/link";
import { routeEditorialMedia } from "../media-library";
import type { InformationPageData } from "../site-content";
import { LineArrow } from "./editorial-page-parts";
import { EditorialMedia } from "./editorial-media";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";

function Action({ action }: { action: NonNullable<InformationPageData["action"]> }) {
  const internal = action.href.startsWith("/");
  const content = <><span>{action.label}</span><LineArrow /></>;
  return internal ? <Link className="editorial-action" href={action.href}>{content}</Link> : <a className="editorial-action" href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel={action.href.startsWith("http") ? "noreferrer" : undefined}>{content}</a>;
}

export function AboutFamilyPage({ data, slug }: { data: InformationPageData; slug: string }) {
  const media = routeEditorialMedia[slug === "secretary-general" ? "secretaryGeneral" : slug as keyof typeof routeEditorialMedia] ?? [];
  const isSecretaryGeneral = slug === "secretary-general";

  return (
    <PageShell data={data} slug={slug} heroVariant={isSecretaryGeneral ? "profile" : "default"}>
      {isSecretaryGeneral && (
        <section className="profile-introduction">
          <div className="profile-introduction__portrait" aria-label="Official portrait reserved">
            <span>Portrait reserved</span><strong>AH</strong><p>Official Secretary-General portrait forthcoming</p>
          </div>
          <div>
            <span>Secretary-General · YMAU VI</span>
            <h2>Leading a return<br />to her home city.</h2>
            <p>{data.sections[0]?.body?.[0]}</p>
          </div>
        </section>
      )}

      <div className={`about-family-flow about-family-flow--${data.template ?? "article"}`}>
        {data.sections.slice(isSecretaryGeneral ? 1 : 0).map((section, index) => (
          <ScrollRevealSection className={`about-family-section${section.image ? " about-family-section--media" : ""}`} key={section.heading}>
            <div className="about-family-section__copy">
              <span>{String(index + (isSecretaryGeneral ? 2 : 1)).padStart(2, "0")}</span>
              <h2>{section.heading}</h2>
              {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.note && <p className="about-family-section__note">{section.note}</p>}
            </div>
            {section.image && <EditorialMedia asset={section.image} />}
          </ScrollRevealSection>
        ))}
      </div>

      {data.status && slug !== "secretary-general" && <p className="editorial-holding-note"><span>In progress</span>{data.status}</p>}
      {data.action && <Action action={data.action} />}
      {media.length > data.sections.filter((section) => section.image).length && <span className="visually-hidden">Additional approved archive media available for this page.</span>}
    </PageShell>
  );
}
