export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  links: NavigationLink[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "About",
    links: [
      { label: "Our mission", href: "/about" },
      { label: "Our history", href: "/history" },
      { label: "Our founders", href: "/founders" },
      { label: "Secretary-General", href: "/secretary-general" },
      { label: "Secretariat", href: "/secretariat" },
      { label: "Ambassadors", href: "/ambassadors" },
      { label: "Careers for Yale students", href: "/careers" },
    ],
  },
  {
    label: "Conference",
    links: [
      { label: "Programme", href: "/programme" },
      { label: "Conference theme", href: "/theme" },
      { label: "Mandate to Market", href: "/mandate-to-market" },
      { label: "Pre-conference events", href: "/pre-conference" },
      { label: "YMAU V recap", href: "/recap" },
    ],
  },
  {
    label: "Committees",
    links: [
      { label: "Committee overview", href: "/committees" },
    ],
  },
  {
    label: "Attend",
    links: [
      { label: "Registration", href: "/registration" },
      { label: "Financial aid", href: "/financial-aid" },
      { label: "Frequently asked questions", href: "/faq" },
      { label: "Travel and visa guide", href: "/travel-guide" },
    ],
  },
  {
    label: "Addis Ababa",
    links: [
      { label: "Our host city", href: "/addis-ababa" },
      { label: "Delegate city guide", href: "/city-guide" },
    ],
  },
  {
    label: "Partners",
    links: [
      { label: "Co-organizers", href: "/partners" },
      { label: "Past sponsors", href: "/past-partners" },
      { label: "Become a sponsor", href: "/sponsor" },
    ],
  },
];

const contactGroup: NavigationGroup = {
  label: "Contact",
  links: [{ label: "Contact YMAU", href: "/contact" }],
};

export function findNavigationGroup(slug: string) {
  const visibleGroup = navigationGroups.find((group) =>
    group.links.some((link) => link.href === `/${slug}`),
  );

  if (visibleGroup) return visibleGroup;

  if (["committee-preparation", "topic-guides", "committee-policies"].includes(slug)) {
    return navigationGroups.find((group) => group.label === "Committees") ?? contactGroup;
  }

  return contactGroup;
}
