import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "../_components/about-page";
import { AboutFamilyPage } from "../_components/about-family-page";
import { AddisPage } from "../_components/addis-page";
import { CommitteePage } from "../_components/committee-page";
import { ConferenceFamilyPage } from "../_components/conference-family-page";
import { AttendFamilyPage } from "../_components/attend-family-page";
import { CityGuidePage } from "../_components/city-guide-page";
import { InformationPage } from "../_components/information-page";
import { InstitutionalPage } from "../_components/institutional-page";
import { ProgrammePage } from "../_components/programme-page";
import { RecapPage } from "../_components/recap-page";
import { ThemePage } from "../_components/theme-page";
import { informationPages, informationPageSlugs } from "../site-content";

export function generateStaticParams() {
  return informationPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = informationPages[slug];
  if (!data) return {};
  return {
    title: `${data.eyebrow} — YMAU VI`,
    description: data.intro,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = informationPages[slug];
  if (!data) notFound();
  if (slug === "about") return <AboutPage />;
  if (["history", "founders", "secretary-general", "secretariat", "ambassadors", "careers"].includes(slug)) {
    return <AboutFamilyPage data={data} slug={slug} />;
  }
  if (slug === "programme") return <ProgrammePage />;
  if (slug === "theme") return <ThemePage data={data} />;
  if (slug === "mandate-to-market" || slug === "pre-conference") return <ConferenceFamilyPage data={data} slug={slug} />;
  if (slug === "recap") return <RecapPage />;
  if (slug === "committees") return <CommitteePage />;
  if (slug === "addis-ababa") return <AddisPage data={data} />;
  if (slug === "city-guide") return <CityGuidePage data={data} />;
  if (slug === "registration" || slug === "financial-aid" || slug === "faq" || slug === "travel-guide") return <AttendFamilyPage data={data} slug={slug} />;
  if (slug === "partners" || slug === "past-partners" || slug === "sponsor" || slug === "contact") return <InstitutionalPage data={data} slug={slug} />;
  return <InformationPage data={data} slug={slug} />;
}
