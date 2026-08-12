export type PageHeroImage = {
  src: string;
  alt: string;
  context: string;
  credit: string;
  creditHref?: string;
  position?: string;
  nativeLabel?: {
    text: string;
    translation: string;
  };
};

const ymauArchiveCredit = "Official YMAU V media archive";

export const pageHeroImages: Record<string, PageHeroImage> = {
  about: {
    src: "/ymau-media/pages/about.webp",
    alt: "YMAU V delegates gathered for a full conference portrait in Accra",
    context: "The YMAU V delegation · Accra, Ghana",
    credit: ymauArchiveCredit,
    position: "50% 38%",
  },
  history: {
    src: "/ymau-media/pages/history.webp",
    alt: "Delegates gathered in the aisle at the close of YMAU V",
    context: "The conference record · Accra, Ghana",
    credit: ymauArchiveCredit,
    position: "50% 46%",
  },
  "secretary-general": {
    src: "/ymau-media/pages/secretary-general.webp",
    alt: "A facilitator leading a YMAU V leadership session",
    context: "Leadership in practice · YMAU V",
    credit: ymauArchiveCredit,
    position: "72% 42%",
  },
  secretariat: {
    src: "/ymau-media/pages/secretariat.webp",
    alt: "A YMAU V facilitator leading a room of delegates",
    context: "Leadership training · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 42%",
  },
  ambassadors: {
    src: "/ymau-media/pages/ambassadors.webp",
    alt: "Delegates in coordinated African-print dress on the YMAU V stage",
    context: "African Soirée · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 44%",
  },
  programme: {
    src: "/ymau-media/pages/programme.webp",
    alt: "A committee chair addressing delegates during YMAU V",
    context: "Committee session · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 48%",
  },
  theme: {
    src: "/ymau-media/pages/theme.webp",
    alt: "Stone windows carved into Biete Amanuel in Lalibela, Ethiopia",
    context: "Biete Amanuel · Lalibela, Ethiopia",
    credit: "Francesco Bandarin / UNESCO · CC BY-SA 3.0 IGO",
    creditHref: "https://commons.wikimedia.org/wiki/File:Rock-Hewn_Churches,_Lalibela-107575.jpg",
    position: "50% 52%",
    nativeLabel: { text: "ላሊበላ", translation: "Lalibela" },
  },
  "mandate-to-market": {
    src: "/ymau-media/pages/mandate-to-market.webp",
    alt: "A participant pitching an idea on the YMAU V stage",
    context: "Pitch contest · YMAU V",
    credit: ymauArchiveCredit,
    position: "54% 42%",
  },
  "pre-conference": {
    src: "/ymau-media/pages/pre-conference.webp",
    alt: "Delegates raising their hands during YMAU V leadership training",
    context: "Leadership training · YMAU V",
    credit: ymauArchiveCredit,
    position: "60% 40%",
  },
  recap: {
    src: "/ymau-media/pages/recap.webp",
    alt: "YMAU V delegates and organizers gathered on stage in Accra",
    context: "Closing assembly · Accra, Ghana",
    credit: ymauArchiveCredit,
    position: "50% 40%",
  },
  committees: {
    src: "/ymau-media/pages/committees.webp",
    alt: "Delegates seated around a committee room during YMAU V",
    context: "Committee session · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 50%",
  },
  "committee-preparation": {
    src: "/ymau-media/pages/committee-preparation.webp",
    alt: "Delegates exchanging ideas across a YMAU V committee table",
    context: "Delegate exchange · YMAU V",
    credit: ymauArchiveCredit,
    position: "44% 44%",
  },
  "topic-guides": {
    src: "/ymau-media/pages/topic-guides.webp",
    alt: "Country placards and research notes on a YMAU V committee table",
    context: "At the committee table · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 50%",
  },
  "committee-policies": {
    src: "/ymau-media/pages/committee-policies.webp",
    alt: "Delegates in a focused discussion during YMAU V",
    context: "Structured debate · YMAU V",
    credit: ymauArchiveCredit,
    position: "52% 45%",
  },
  registration: {
    src: "/ymau-media/pages/registration.webp",
    alt: "A daytime view across central Addis Ababa",
    context: "Central Addis Ababa · Ethiopia",
    credit: "Hawi Getachew / Unsplash",
    creditHref: "https://unsplash.com/photos/r3JBHwlRFMI",
    position: "50% 52%",
    nativeLabel: { text: "አዲስ አበባ", translation: "Addis Ababa" },
  },
  "financial-aid": {
    src: "/ymau-media/pages/financial-aid.webp",
    alt: "A YMAU V delegate receiving a certificate at the awards ceremony",
    context: "Delegate recognition · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 42%",
  },
  faq: {
    src: "/ymau-media/pages/faq.webp",
    alt: "The Addis Ababa skyline illuminated at night",
    context: "Addis Ababa after dark · Ethiopia",
    credit: "Abenezer Shewaga / Unsplash",
    creditHref: "https://unsplash.com/photos/WMB-Fb5LHeg",
    position: "50% 48%",
    nativeLabel: { text: "አዲስ አበባ", translation: "Addis Ababa" },
  },
  "travel-guide": {
    src: "/ymau-media/pages/travel-guide.webp",
    alt: "Green highlands near Lalibela and Abune Yosef in Ethiopia",
    context: "Highlands near Lalibela · Ethiopia",
    credit: "Erik Hathaway / Unsplash",
    creditHref: "https://unsplash.com/photos/eRFC0_U0hGE",
    position: "50% 48%",
    nativeLabel: { text: "ኢትዮጵያ", translation: "Ethiopia" },
  },
  "addis-ababa": {
    src: "/ymau-media/pages/addis-ababa.webp",
    alt: "Construction cranes and the Addis Ababa skyline at sunset",
    context: "Addis Ababa at dusk · Ethiopia",
    credit: "Jean Rebiffé · CC BY 2.0",
    creditHref: "https://commons.wikimedia.org/wiki/File:Sunset_on_the_rising_city,_Addis_Ababa_-_Flickr_-_jeanotr.jpg",
    position: "50% 48%",
    nativeLabel: { text: "አዲስ አበባ", translation: "Addis Ababa" },
  },
  "city-guide": {
    src: "/ymau-media/pages/city-guide.webp",
    alt: "Coffee being poured from a traditional Ethiopian jebena into small cups",
    context: "Coffee ceremony · Ethiopia",
    credit: "Zeynep S. / Unsplash",
    creditHref: "https://unsplash.com/photos/WcWvmyG73yU",
    position: "50% 46%",
    nativeLabel: { text: "ቡና", translation: "Coffee · buna" },
  },
  partners: {
    src: "/ymau-media/pages/partners.webp",
    alt: "The African Union headquarters complex in Addis Ababa",
    context: "African Union headquarters · Addis Ababa",
    credit: "Wang Guansen / Xinhua",
    creditHref: "https://commons.wikimedia.org/wiki/File:African_Union_Headquarters_Addis_Ababa.jpg",
    position: "50% 54%",
  },
  "past-partners": {
    src: "/ymau-media/pages/past-partners.webp",
    alt: "A partner recognition plaque presented at YMAU V",
    context: "Partner recognition · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 52%",
  },
  sponsor: {
    src: "/ymau-media/pages/sponsor.webp",
    alt: "A delegate receiving recognition at the YMAU V awards ceremony",
    context: "Awards ceremony · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 44%",
  },
  contact: {
    src: "/ymau-media/pages/contact.webp",
    alt: "Delegates in an animated committee discussion during YMAU V",
    context: "Committee exchange · YMAU V",
    credit: ymauArchiveCredit,
    position: "50% 46%",
  },
};
