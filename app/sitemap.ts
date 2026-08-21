import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/history",
  "/founders",
  "/secretary-general",
  "/secretariat",
  "/ambassadors",
  "/careers",
  "/programme",
  "/theme",
  "/mandate-to-market",
  "/pre-conference",
  "/recap",
  "/committees",
  "/committee-preparation",
  "/committee-policies",
  "/registration",
  "/financial-aid",
  "/faq",
  "/travel-guide",
  "/addis-ababa",
  "/city-guide",
  "/partners",
  "/past-partners",
  "/sponsor",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.yalemodelau.org";
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/registration" || route === "/committees" ? 0.9 : 0.6,
  }));
}
