import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "localhost:3000";
  const protocol =
    headerList.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description =
    "A fictional concept for the sixth Yale Model African Union conference in Addis Ababa, Ethiopia.";

  return {
    metadataBase: new URL(origin),
    title: "YMAU VI — Addis Ababa 2027",
    description,
    openGraph: {
      title: "Yale Model African Union VI",
      description,
      type: "website",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1640,
          height: 923,
          alt: "Yale Model African Union VI — Addis Ababa, 11–14 March 2027",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Yale Model African Union VI",
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
