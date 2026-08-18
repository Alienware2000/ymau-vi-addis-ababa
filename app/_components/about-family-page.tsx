import Image from "next/image";
import Link from "next/link";
import { ambassadorDirectory } from "../ambassador-directory";
import { EDITORIAL_IMAGE_PLACEHOLDER } from "../image-delivery";
import { careerRoles, secretariatPeople, secretaryGeneralLetter, secretaryGeneralPortrait } from "../public-directory";
import type { InformationPageData } from "../site-content";
import { AnimatedStatGrid } from "./animated-stat-grid";
import { ResourceCards } from "./editorial-content";
import { LineArrow } from "./editorial-page-parts";
import { EditorialMedia } from "./editorial-media";
import { PageShell } from "./page-shell";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { SignedLetter } from "./signed-letter";

function Action({ action }: { action: NonNullable<InformationPageData["action"]> }) {
  const internal = action.href.startsWith("/");
  const content = <><span>{action.label}</span><LineArrow /></>;
  return internal ? <Link className="editorial-action" href={action.href}>{content}</Link> : <a className="editorial-action" href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel={action.href.startsWith("http") ? "noreferrer" : undefined}>{content}</a>;
}

export function AboutFamilyPage({ data, slug }: { data: InformationPageData; slug: string }) {
  const isSecretaryGeneral = slug === "secretary-general";
  const ambassadorColumnLength = Math.ceil(ambassadorDirectory.length / 2);
  const ambassadorColumns = [
    ambassadorDirectory.slice(0, ambassadorColumnLength),
    ambassadorDirectory.slice(ambassadorColumnLength),
  ];

  return (
    <PageShell data={data} slug={slug} heroVariant={isSecretaryGeneral ? "profile" : "default"}>
      {isSecretaryGeneral && (
        <section className="profile-introduction">
          <div className="profile-introduction__portrait profile-introduction__portrait--photo">
            <Image
              src={secretaryGeneralPortrait.src}
              alt={secretaryGeneralPortrait.alt}
              fill
              sizes="(max-width: 980px) 88vw, 32vw"
              quality={90}
              placeholder="blur"
              blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
              style={{ objectPosition: secretaryGeneralPortrait.position }}
            />
          </div>
          <div>
            <span>Secretary-General · YMAU VI</span>
            <h2>Leading a return<br />to her home city.</h2>
            <p>{data.sections[0]?.body?.[0]}</p>
          </div>
        </section>
      )}

      {isSecretaryGeneral && (
        <section className="sg-letter" aria-label="Welcome letter from the Secretary-General">
          <div className="sg-letter__intro">
            <span>From the Secretariat</span>
            <h2>A welcome to Addis.</h2>
            <blockquote>
              <p>{secretaryGeneralLetter.quote}</p>
            </blockquote>
          </div>
          <article className="sg-letter__sheet">
            <SignedLetter />
          </article>
        </section>
      )}

      <div className={`about-family-flow about-family-flow--${data.template ?? "article"}`}>
        {data.sections.slice(isSecretaryGeneral ? 1 : 0).map((section, index) => (
          <ScrollRevealSection className={`about-family-section${section.image ? " about-family-section--media" : ""}${section.stats ? " about-family-section--stats" : ""}`} key={section.heading}>
            <div className="about-family-section__copy">
              <span>{String(index + (isSecretaryGeneral ? 2 : 1)).padStart(2, "0")}</span>
              <h2>{section.heading}</h2>
              {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.note && <p className="about-family-section__note">{section.note}</p>}
              {section.stats && <AnimatedStatGrid stats={section.stats} />}
            </div>
            {section.image && <EditorialMedia asset={section.image} />}
          </ScrollRevealSection>
        ))}
      </div>

      {slug === "careers" && (
        <section className="directory-ledger directory-ledger--roles" aria-label="YMAU VI Secretariat roles">
          <header className="directory-ledger__head">
            <span>Positions</span>
            <h2>Eight Under-Secretary-General posts.</h2>
            <p>Use the YMAU VI descriptions. Copy the application for your role, save a PDF, and email president@yalemodelau.org by 12 September, 11:59pm EST.</p>
          </header>
          <ol className="directory-ledger__list">
            {careerRoles.map((role) => (
              <li className="role-row" key={role.title}>
                <span>{role.openings === 1 ? "One seat" : "Two seats"}</span>
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {slug === "secretariat" && (
        <section className="directory-ledger directory-ledger--secretariat" aria-label="YMAU VI Secretariat">
          <header className="directory-ledger__head">
            <span>Public now</span>
            <h2>Four officers. Ten portraits still to come.</h2>
            <p>Remaining Secretariat portraits and biographies will be released in October 2026.</p>
          </header>
          <div className="directory-ledger__list">
            {secretariatPeople.map((person) => (
              <article className="directory-row directory-row--photo" key={person.email}>
                <figure className="directory-row__portrait">
                  <Image
                    src={person.image.src}
                    alt={person.image.alt}
                    fill
                    sizes="140px"
                    quality={90}
                    placeholder="blur"
                    blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
                    style={{ objectPosition: person.image.position }}
                  />
                </figure>
                <div className="directory-row__copy">
                  <span>{person.role}</span>
                  <h3>{person.name}</h3>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                  {person.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {slug === "ambassadors" && (
        <section className="ambassador-directory" aria-label="YMAU VI Ambassador directory">
          <header className="directory-ledger__head">
            <span>Directory</span>
            <h2>The students carrying YMAU beyond New Haven.</h2>
            <p>Select a name to read the biography supplied by that ambassador.</p>
          </header>
          <div className="ambassador-directory__list">
            {ambassadorColumns.map((column, columnIndex) => (
              <div className="ambassador-directory__column" key={column[0]?.slug}>
                {column.map((ambassador, offset) => {
                  const index = columnIndex * ambassadorColumnLength + offset;

                  return (
                    <details className="ambassador-entry" key={ambassador.slug}>
                      <summary>
                        <span className="ambassador-entry__index">{String(index + 1).padStart(2, "0")}</span>
                        <span className="ambassador-entry__identity">
                          <strong>{ambassador.name}</strong>
                          <small>{ambassador.institution}</small>
                        </span>
                        <i aria-hidden="true" />
                      </summary>
                      <div className={ambassador.photoSrc ? "ambassador-entry__body ambassador-entry__body--photo" : "ambassador-entry__body"}>
                        {ambassador.photoSrc && (
                          <figure className="ambassador-entry__portrait">
                            <Image
                              src={ambassador.photoSrc}
                              alt={`Portrait of ${ambassador.name}`}
                              fill
                              sizes="120px"
                              quality={80}
                              placeholder="blur"
                              blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
                            />
                          </figure>
                        )}
                        <span>{ambassador.institution}</span>
                        <p>{ambassador.bio}</p>
                      </div>
                    </details>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.resources && <ResourceCards resources={data.resources} title="Apply from here." />}
      {data.status && slug !== "secretary-general" && <p className="editorial-holding-note"><span>In progress</span>{data.status}</p>}
      {data.action && slug !== "careers" && <Action action={data.action} />}
    </PageShell>
  );
}
