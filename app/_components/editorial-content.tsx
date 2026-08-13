import Link from "next/link";
import type { ContentResource, InformationPageData } from "../site-content";
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

export function NumberedList({ items }: { items: string[] }) {
  return <ol className="editorial-numbered-list">{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>;
}
