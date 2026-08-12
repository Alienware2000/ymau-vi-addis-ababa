import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InformationPage } from "../_components/information-page";
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
  return <InformationPage data={data} slug={slug} />;
}
