import type { Metadata } from "next";
import { headers } from "next/headers";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

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
    "Yale Model African Union VI convenes in Addis Ababa, Ethiopia, from 15–17 March 2027.";

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
          url: `${origin}/social-preview-ymau-vi.png`,
          width: 1640,
          height: 923,
          alt: "Yale Model African Union VI — Addis Ababa, 15–17 March 2027",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Yale Model African Union VI",
      description,
      images: [`${origin}/social-preview-ymau-vi.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
