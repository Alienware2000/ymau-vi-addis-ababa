import Image from "next/image";
import Link from "next/link";

export type LanguageLandingData = {
  locale: "fr" | "am";
  edition: string;
  title: string;
  location: string;
  date: string;
  theme: string;
  themeBody: string;
  belief: string;
  aboutTitle: string;
  aboutBody: string;
  programmeTitle: string;
  programmeBody: string;
  registrationTitle: string;
  registrationBody: string;
  homeLabel: string;
  reviewNote: string;
};

export function LanguageLanding({ data }: { data: LanguageLandingData }) {
  return (
    <div className={`locale-page locale-page--${data.locale}`} lang={data.locale}>
      <header className="locale-header">
        <Link href="/" aria-label="YMAU VI home">
          <Image src="/ymau-wordmark-white.png" alt="Yale Model African Union" width={752} height={185} />
        </Link>
        <nav aria-label="Language">
          <Link href="/">EN</Link>
          <Link href="/fr" aria-current={data.locale === "fr" ? "page" : undefined}>FR</Link>
          <Link href="/am" aria-current={data.locale === "am" ? "page" : undefined} lang="am">አማ</Link>
        </nav>
      </header>

      <main id="main-content">
        <section className="locale-hero">
          <video autoPlay loop muted playsInline preload="metadata" poster="/ethiopia-highlands-poster.jpg" aria-hidden="true">
            <source src="/ethiopia-highlands-mobile.mp4" type="video/mp4" media="(max-width: 680px)" />
            <source src="/ethiopia-highlands.mp4" type="video/mp4" />
          </video>
          <span className="locale-hero__veil" />
          <div className="locale-hero__copy">
            <span>{data.edition}</span>
            <h1>{data.title}</h1>
            <div><p>{data.location}</p><p>{data.date}</p></div>
          </div>
        </section>

        <section className="locale-statement">
          <span>YMAU VI · 2027</span>
          <h2>{data.belief}</h2>
        </section>

        <section className="locale-theme">
          <span>01</span>
          <div>
            <p>{data.locale === "fr" ? "THÈME DE LA CONFÉRENCE" : "የጉባኤው መሪ ሐሳብ"}</p>
            <h2>{data.theme}</h2>
            <p>{data.themeBody}</p>
          </div>
        </section>

        <section className="locale-columns">
          <article><span>02</span><h2>{data.aboutTitle}</h2><p>{data.aboutBody}</p></article>
          <article><span>03</span><h2>{data.programmeTitle}</h2><p>{data.programmeBody}</p></article>
          <article><span>04</span><h2>{data.registrationTitle}</h2><p>{data.registrationBody}</p></article>
        </section>

        <aside className="locale-review">
          <span>{data.reviewNote}</span>
          <Link href="/">{data.homeLabel}</Link>
        </aside>
      </main>
    </div>
  );
}
