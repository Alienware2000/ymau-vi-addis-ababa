import Image from "next/image";
import Link from "next/link";
import { currentPartners, pastPartners, ymauVPartners, type PartnerRecord } from "../public-directory";
import type { InformationPageData } from "../site-content";
import { EditorialAction, NumberedList } from "./editorial-content";
import { EditorialMedia } from "./editorial-media";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";

function PartnerLogo({ partner, sizes = "160px" }: { partner: PartnerRecord; sizes?: string }) {
  if (!partner.logoSrc) return null;

  return (
    <figure className={`partner-logo${partner.logoFormat === "poster" ? " partner-logo--poster" : ""}`}>
      <Image
        src={partner.logoSrc}
        alt={partner.logoAlt ?? `${partner.name} logo`}
        fill
        sizes={sizes}
        quality={90}
      />
    </figure>
  );
}

function CurrentPartners() {
  return (
    <section className="partner-current" aria-labelledby="current-partners-title">
      <header>
        <span>YMAU VI · Current</span>
        <h2 id="current-partners-title">Co-organizers in Addis.</h2>
        <p>These relationships belong to the sixth edition. Historical support is recorded separately below.</p>
      </header>
      <div className="partner-current__list">
        {currentPartners.map((partner, index) => (
          <article className="partner-current__item" key={partner.name}>
            <span className="partner-current__number">{String(index + 1).padStart(2, "0")}</span>
            <PartnerLogo partner={partner} sizes="220px" />
            <div>
              <span>Co-organizer · YMAU VI</span>
              <h3>{partner.name}</h3>
              <p>{partner.blurb}</p>
              {partner.href && <a href={partner.href} target="_blank" rel="noreferrer">Visit organization <i aria-hidden="true" /></a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PartnerArchiveGateway() {
  return (
    <section className="partner-archive-gateway" aria-labelledby="partner-archive-gateway-title">
      <div>
        <span>Edition archive</span>
        <h2 id="partner-archive-gateway-title">Past support, named in the right place.</h2>
      </div>
      <div>
        <p>The archive records {ymauVPartners.length} YMAU V sponsors and partners by tier, followed by {pastPartners.length} collaborators from earlier editions. None are presented as current YMAU VI commitments.</p>
        <Link href="/past-partners">Explore the partner archive <i aria-hidden="true" /></Link>
      </div>
    </section>
  );
}

function PartnerWall({ partners }: { partners: PartnerRecord[] }) {
  const archiveGroups = [
    "Platinum sponsor",
    "Gold sponsor",
    "Silver sponsor",
    "Bronze sponsor",
    "Strategic partner",
    "Conference partner",
  ] as const;

  return (
    <section className="partner-wall" aria-labelledby="ymau-v-partners-title">
      <header>
        <span>Past · YMAU V · Accra</span>
        <h2 id="ymau-v-partners-title">The fifth-edition record.</h2>
        <p>Organizations acknowledged for supporting YMAU V. This archive does not imply a current YMAU VI commitment.</p>
      </header>
      <div className="partner-wall__tiers">
        {archiveGroups.map((group, groupIndex) => {
          const groupedPartners = partners.filter((partner) => partner.archiveGroup === group);
          if (groupedPartners.length === 0) return null;
          const groupLabel = groupedPartners.length === 1 ? group : `${group}s`;

          return (
            <section className="partner-tier" key={group}>
              <header className="partner-tier__head">
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <h3>{groupLabel}</h3>
                <p>{groupedPartners.length} {groupedPartners.length === 1 ? "organization" : "organizations"}</p>
              </header>
              <div className="partner-wall__grid">
                {groupedPartners.map((partner) => (
                  <article className={partner.logoSrc ? "partner-tile partner-tile--logo" : "partner-tile"} key={partner.name}>
                    <span>YMAU V · Accra</span>
                    <PartnerLogo partner={partner} sizes="180px" />
                    <h4>{partner.name}</h4>
                    <p>{partner.blurb}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

function PartnerIndex({ partners }: { partners: PartnerRecord[] }) {
  const columnLength = Math.ceil(partners.length / 2);
  const columns = [
    partners.slice(0, columnLength),
    partners.slice(columnLength),
  ];

  return (
    <section className="partner-index" aria-labelledby="past-partners-title">
      <header>
        <span>Earlier editions · Past</span>
        <h2 id="past-partners-title">Earlier collaborators.</h2>
        <p>Select an organization to read its archive note.</p>
      </header>
      <div className="partner-index__list">
        {columns.map((column, columnIndex) => (
          <div className="partner-index__column" key={column[0]?.name}>
            {column.map((partner, offset) => (
              <details className="partner-index__entry" key={partner.name}>
                <summary>
                  <span>{String(columnIndex * columnLength + offset + 1).padStart(2, "0")}</span>
                  <strong>{partner.name}</strong>
                  <i aria-hidden="true" />
                </summary>
                <div>
                  <PartnerLogo partner={partner} sizes="130px" />
                  <p>{partner.blurb}</p>
                </div>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function InstitutionalPage({ data, slug }: { data: InformationPageData; slug: "partners" | "past-partners" | "sponsor" | "contact" }) {
  const isPartnerArchive = slug === "partners" || slug === "past-partners";

  return (
    <PageShell data={data} slug={slug}>
      <section className={`institutional-opening institutional-opening--${slug}`}>
        <span>{data.number} · Institutional relations</span>
        <h2>{slug === "partners" ? "Partnership is part of the architecture." : slug === "past-partners" ? "The record should name who made it possible." : slug === "sponsor" ? "Support that changes who can enter the room." : "One question. The right desk."}</h2>
        <p>{data.intro}</p>
      </section>
      {slug === "partners" ? (
        <>
          <CurrentPartners />
          <PartnerArchiveGateway />
        </>
      ) : isPartnerArchive ? (
        <>
          <PartnerWall partners={ymauVPartners} />
          <PartnerIndex partners={pastPartners} />
        </>
      ) : (
        <div className={`institutional-flow institutional-flow--${slug}`}>
          {data.sections.map((section, index) => (
            <ScrollRevealSection className={`institutional-section${section.image ? " institutional-section--media" : ""}`} key={section.heading}>
              <div><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items && <NumberedList items={section.items} />}{section.note && <p className="institutional-note">{section.note}</p>}</div>
              {section.image && <EditorialMedia asset={section.image} />}
            </ScrollRevealSection>
          ))}
        </div>
      )}
      {data.status && <p className="editorial-holding-note"><span>In progress</span>{data.status}</p>}
      {data.action && <EditorialAction action={data.action} />}
    </PageShell>
  );
}
