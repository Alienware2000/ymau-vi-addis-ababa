import Link from "next/link";
import type { ContentResource, InformationPageData, ScheduleRow } from "../site-content";
import { LineArrow } from "./editorial-page-parts";

export function EditorialAction({ action }: { action: NonNullable<InformationPageData["action"]> }) {
  const contents = <><span>{action.label}</span><LineArrow /></>;
  if (action.href.startsWith("/")) return <Link className="editorial-action" href={action.href}>{contents}</Link>;
  return <a className="editorial-action" href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel={action.href.startsWith("http") ? "noreferrer" : undefined}>{contents}</a>;
}

export function ResourceCards({ resources, title = "The material, in one place." }: { resources: ContentResource[]; title?: string }) {
  return (
    <section className="editorial-resources">
      <header><span>Files and official links</span><h2>{title}</h2></header>
      <div>
        {resources.map((resource) => resource.href ? (
          <a href={resource.href} target="_blank" rel="noreferrer" key={resource.label}>
            <small>{resource.status ?? "Open resource"}</small><strong>{resource.label}</strong><p>{resource.detail}</p><LineArrow />
          </a>
        ) : (
          <article key={resource.label} aria-label={`${resource.label}, forthcoming`}>
            <small>{resource.status ?? "Forthcoming"}</small><strong>{resource.label}</strong><p>{resource.detail}</p><span>Not yet released</span>
          </article>
        ))}
      </div>
    </section>
  );
}

const EMAIL_SPLIT = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i;

export function LinkedParagraph({ children, className }: { children: string; className?: string }) {
  const parts = children.split(EMAIL_SPLIT);
  if (parts.length === 1) return <p className={className}>{children}</p>;
  return (
    <p className={className}>
      {parts.map((part, index) => index % 2 === 1
        ? <a className="inline-email" href={`mailto:${part}`} key={`${part}-${index}`}>{part}</a>
        : part)}
    </p>
  );
}

export function NumberedList({ items }: { items: string[] }) {
  return <ol className="editorial-numbered-list">{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>;
}

export function ScheduleLedger({ rows }: { rows: ScheduleRow[] }) {
  return (
    <dl className="schedule-ledger">
      {rows.map((row) => (
        <div className="schedule-ledger__row" key={row.label}>
          <dt>{row.label}</dt>
          <dd>
            <strong>{row.primary}</strong>
            {row.secondary && <small>{row.secondary}</small>}
          </dd>
          {row.value && <dd className="schedule-ledger__value">{row.value}</dd>}
        </div>
      ))}
    </dl>
  );
}
