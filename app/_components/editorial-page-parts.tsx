import Image from "next/image";
import Link from "next/link";
import { findNavigationGroup } from "../site-navigation";

export function LineArrow() {
  return <span className="line-arrow" aria-hidden="true" />;
}

export function PageFamilyNav({ slug }: { slug: string }) {
  const group = findNavigationGroup(slug);

  return (
    <nav className="page-family-nav" aria-label={`${group.label} pages`}>
      <span className="page-family-nav__label">Explore {group.label}</span>
      <div>
        {group.links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            aria-current={link.href === `/${slug}` ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function EditorialImageNote({
  context,
  credit = "Official YMAU V media archive",
}: {
  context: string;
  credit?: string;
}) {
  return (
    <div className="editorial-image-note">
      <span>{context}</span>
      <span>{credit}</span>
    </div>
  );
}

export function InnerFooter() {
  return (
    <footer className="inner-footer">
      <Image src="/ymau-wordmark-white.png" alt="Yale Model African Union" width={752} height={185} />
      <p>Addis Ababa, Ethiopia<br />15–17 March 2027</p>
      <p><a href="mailto:president@yalemodelau.org">president@yalemodelau.org</a><br />© 2027 YMAU VI</p>
    </footer>
  );
}
