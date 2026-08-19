import { mediaLibrary, type MediaAsset } from "./media-library";

export type SecretariatPerson = {
  name: string;
  role: string;
  email: string;
  bio: string[];
  image: MediaAsset;
};

export type CareerRole = {
  title: string;
  openings: number;
  summary: string;
};

export type PartnerRecord = {
  name: string;
  blurb: string;
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoFormat?: "mark" | "poster";
  archiveGroup?: "Platinum sponsor" | "Gold sponsor" | "Silver sponsor" | "Bronze sponsor" | "Strategic partner" | "Conference partner";
};

export const secretaryGeneralPortrait = mediaLibrary.portraitAbyssinia;
export const secretaryGeneralSignatureSrc = "/ymau-media/portraits/signature.png";

export const secretaryGeneralLetter = {
  salutation: "Dear delegates, partners, and collaborators,",
  quote: "We need youth in the room: not just observing Africa’s institutions, but shaping how they work.",
  paragraphs: [
    "It is my distinct honour and pleasure to welcome you to the sixth edition of the Yale Model African Union conference, taking place from 15-17 March 2027 in Addis Ababa, Ethiopia.",
    "Since its inception in 2021, YMAU has provided African youth with realistic and engaging simulations of the African Union and its associated agencies. Our inaugural conference, held in Kigali, Rwanda, was attended by only 121 students. Over half a decade later, YMAU has amassed a community of over 1,000 alumni. As the largest Ivy League Model African Union simulation to take place on the continent, YMAU has earned a reputation for providing an enriching, pre-professional experience for youth passionate about diplomacy, African affairs, and, most of all, taking charge of shaping the future of the Africa we want.",
    "This year, the YMAU Secretariat is especially excited to continue this legacy by bringing the experience home to our mother organization’s headquarters city of Addis Ababa, in partnership with the African Union Commission’s Youth Division through the Women, Gender, and Youth Directorate. Translating to “new flower” from Amharic, Addis continues to prove itself a city creating itself anew, on a pathway to becoming the continent’s hub for diplomacy, infrastructure development, and economic growth. We are excited to immerse our students in that atmosphere, and to bring delegates closer than ever to the institutions and conversations they’ve spent years simulating.",
    "Our programme reflects this ambition: 10 diverse and innovative committees, a full slate of speaker programming and networking events, and the second edition of our Mandate to Market pitch contest, all returning home to Addis.",
    "We plan to convene our conference under the theme “Our Vision, Our Victory: Championing African Success on African Terms,” reflecting the inflection point at which youth stand within Africa’s history as a continent. Our countries’ economies are growing. Our infrastructure is developing. Our technologies are advancing. And to ensure that growth is sustained and owned by the people driving it, we need youth in the room: not just observing Africa’s institutions, but shaping how they work.",
    "As such, as we continue to plan and coordinate our conference programming for 2027, we encourage you to stay involved in our programming throughout the year, helping us turn this vision into a needed reality. Join us in Addis, and help write this next chapter.",
    "Once again, welcome to Yale Model African Union VI. If you have any questions or concerns regarding our conference, please do not hesitate to contact me at president@yalemodelau.org.",
    "On behalf of our Secretariat team, we look forward to seeing you in Addis this March.",
  ],
  closing: "Sincerely,",
} as const;

export const secretariatPeople: SecretariatPerson[] = [
  {
    name: "Abyssinia Haile",
    role: "Secretary-General",
    email: "president@yalemodelau.org",
    bio: [
      "Abyssinia Haile is a junior at Yale University studying Global Affairs, with a focus on African studies. Born in Addis Ababa, Ethiopia and now based in the greater Boston area, she carries her Habesha roots, its dancing, food, and music, into everything she leads, including her return to Addis Ababa for YMAU VI.",
    ],
    image: mediaLibrary.portraitAbyssinia,
  },
  {
    name: "Meti Negewo",
    role: "Director-General of Internal Operations",
    email: "operations@yalemodelau.org",
    bio: [
      "Meti Negewo is a junior in Ezra Stiles College, majoring in Anthropology, with a Certificate in Education Studies. Originally from Ethiopia and now based in Minnesota, she leads sponsorship outreach as well as branding and communications for YMAU VI.",
      "During YMAU V in Accra, she served as Co-USG of Branding and Marketing and chaired ECOSOCC. Beyond YMAU, Meti is Head Choreographer of Yale’s Ethiopian and Eritrean Dance Team, Desta, preserving and sharing her culture through performance, and Co-Vice President of the Yale African Students Association.",
    ],
    image: mediaLibrary.portraitMeti,
  },
  {
    name: "Gumana Elrufai",
    role: "Director-General of External Operations",
    email: "programs@yalemodelau.org",
    bio: [
      "Gumana Elrufai is a sophomore in Ezra Stiles College and intends to major in Global Affairs. Born in Khartoum, Sudan, and raised in Brooklyn, New York, she oversees delegate recruitment and technology operations for YMAU VI.",
      "She previously served as Co-USG of Delegate Recruitment for YMAU V. Outside YMAU, she founded The Voice of Sudan, a New York youth group bringing awareness to the civil war, and serves as secretary of the Yale African Students Association. Registration questions may be sent to programs@yalemodelau.org.",
    ],
    image: mediaLibrary.portraitGumana,
  },
  {
    name: "Amin Abdellatif",
    role: "Director-General of Conference Programming",
    email: "committees@yalemodelau.org",
    bio: [
      "Amin Abdellatif is a junior in Saybrook College studying Global Affairs with a certificate in Human Rights. He spent most of his life in Khartoum, Sudan, before moving to the United States for university.",
      "At YMAU V he served as Under-Secretary-General of Committees. He now oversees committees, conference programming and speaker outreach as the inaugural Director-General of Conference Programming. Having grown up in Sudan during a series of political revolutions, he is devoted to encouraging the capacity for change that African youth possess.",
    ],
    image: mediaLibrary.portraitAmin,
  },
];

export const careerRoles: CareerRole[] = [
  {
    title: "USG Business and Sponsorship",
    openings: 1,
    summary: "Leads fundraising and external partnership for YMAU VI, securing the financial resources and institutional relationships that support conference operations and delegate financial aid. The USG develops sponsorship strategy, cultivates partners and oversees engagement from outreach through fulfillment.",
  },
  {
    title: "Co-USG Branding and Marketing",
    openings: 2,
    summary: "Develops and executes YMAU VI’s branding, marketing and communications. The Co-USGs keep a consistent visual identity while promoting the conference through digital content, campaigns and branded materials for delegates, partners and stakeholders.",
  },
  {
    title: "Co-USG Delegate Recruitment",
    openings: 2,
    summary: "Supports YMAU VI’s delegate recruitment and retention with the Director-General of External Operations, with the aim of building a diverse, engaged and geographically representative delegation. The Co-USGs develop outreach strategy, keep relationships with returning delegates and support registration and financial aid.",
  },
  {
    title: "USG Technology and Digital Infrastructure",
    openings: 1,
    summary: "Manages YMAU VI’s digital infrastructure and technology systems under the Director-General of External Operations. The USG keeps the website, registration platforms and digital tools working for conference planning, delegate engagement and Secretariat operations.",
  },
  {
    title: "USG Committees",
    openings: 1,
    summary: "Supports the Director-General of Conference Programming in delivering a rigorous Model African Union experience. The USG helps with committee design, topic development, staff recruitment, delegate preparation and pre-conference training.",
  },
  {
    title: "USG Speaker Outreach",
    openings: 1,
    summary: "Identifies, recruits and coordinates speakers, diplomats, policymakers, scholars and other distinguished guests for YMAU VI. The USG helps assemble a lineup that reflects the conference’s pan-African mission and thematic priorities.",
  },
  {
    title: "USG Conference",
    openings: 1,
    summary: "Develops, coordinates and executes YMAU VI programming beyond committee sessions: panels, workshops, career programming, Mandate to Market, pre-conference webinars and the conference schedule, in Addis Ababa.",
  },
  {
    title: "USG Executive Affairs",
    openings: 1,
    summary: "Serves as a principal support officer to the Secretary-General, helping coordinate executive communications, meetings, documents, follow-ups and special projects across the Secretariat.",
  },
];

export const currentPartners: PartnerRecord[] = [
  {
    name: "African Union Commission Youth Division",
    href: "https://au.int/en/youth-development",
    logoSrc: "/ymau-media/partners/african-union-lockup.png",
    logoAlt: "African Union emblem",
    blurb: "YMAU VI recognizes the African Union Commission’s Youth Division, through the Women, Gender and Youth Directorate, as a co-organizer. Africa has the youngest population in the world, with more than 400 million young people aged 15 to 35. The Division advances youth participation, leadership and development inside continental policy, including the African Youth Charter.",
  },
  {
    name: "Model African Union Ethiopia",
    href: "https://mauethiopia.org/",
    logoSrc: "/ymau-media/partners/model-african-union-ethiopia.png",
    logoAlt: "Model African Union Ethiopia logo",
    logoFormat: "poster",
    blurb: "A non-profit youth-led organization that works on agendas affecting Africa, with the goal of increasing youth engagement while educating young people on Agenda 2063, the SDGs, and the AUC Youth Initiative 1 Million Next Level (education, employment, entrepreneurship and inclusive youth engagement).",
  },
];

export const ymauVPartners: PartnerRecord[] = [
  { name: "Ecobank", archiveGroup: "Platinum sponsor", logoSrc: "/ymau-media/partners/ecobank.png", logoAlt: "Ecobank logo", blurb: "Platinum sponsor of YMAU V in Accra." },
  { name: "African Union", archiveGroup: "Gold sponsor", logoSrc: "/ymau-media/partners/african-union-lockup.png", logoAlt: "African Union emblem", blurb: "Gold institutional sponsor of YMAU V in Accra." },
  { name: "La Fondation d’Augustin", archiveGroup: "Gold sponsor", logoSrc: "/ymau-media/partners/fondation-augustin.jpg", logoAlt: "La Fondation d’Augustin logo", blurb: "Gold sponsor of YMAU V in Accra." },
  { name: "TradeGrid", archiveGroup: "Gold sponsor", logoSrc: "/ymau-media/partners/tradegrid.png", logoAlt: "TradeGrid logo", blurb: "Gold sponsor of YMAU V in Accra." },
  { name: "Afro-American Cultural Center at Yale", archiveGroup: "Gold sponsor", logoSrc: "/ymau-media/partners/afam-house.png", logoAlt: "Afro-American Cultural Center at Yale logo", blurb: "Gold institutional sponsor of YMAU V." },
  { name: "Yale Macmillan Center, Council on African Studies", archiveGroup: "Gold sponsor", logoSrc: "/ymau-media/partners/council-on-african-studies.png", logoAlt: "Council on African Studies logo", blurb: "Gold institutional sponsor of YMAU V." },
  { name: "TGI Group", archiveGroup: "Gold sponsor", logoSrc: "/ymau-media/partners/tgi.png", logoAlt: "TGI Group logo", blurb: "Gold sponsor of YMAU V in Accra." },
  { name: "Deloitte", archiveGroup: "Gold sponsor", logoSrc: "/ymau-media/partners/deloitte.png", logoAlt: "Deloitte logo", blurb: "Gold sponsor of YMAU V in Accra." },
  { name: "MTN Pulse", archiveGroup: "Gold sponsor", logoSrc: "/ymau-media/partners/mtn-pulse.png", logoAlt: "MTN Pulse logo", logoFormat: "poster", blurb: "Gold sponsor of YMAU V in Accra." },
  { name: "Alexis Miranda Foundation", archiveGroup: "Silver sponsor", logoSrc: "/ymau-media/partners/alexis-miranda-foundation.png", logoAlt: "Alexis Miranda Foundation logo", blurb: "Silver sponsor of YMAU V in Accra." },
  { name: "African Allied Health Summit", archiveGroup: "Silver sponsor", logoSrc: "/ymau-media/partners/african-allied-health.jpg", logoAlt: "African Allied Health Summit logo", blurb: "Silver sponsor of YMAU V in Accra." },
  { name: "African Renaissance Village", archiveGroup: "Silver sponsor", logoSrc: "/ymau-media/partners/african-renaissance-village.jpg", logoAlt: "African Renaissance Village logo", blurb: "Silver sponsor of YMAU V in Accra." },
  { name: "Yale Macmillan Center, Genocide Studies Program", archiveGroup: "Silver sponsor", logoSrc: "/ymau-media/partners/genocide-studies.webp", logoAlt: "Genocide Studies Program logo", blurb: "Silver institutional sponsor of YMAU V." },
  { name: "Yale Department of French", archiveGroup: "Bronze sponsor", logoSrc: "/ymau-media/partners/yale-french.webp", logoAlt: "Yale Department of French logo", blurb: "Bronze institutional sponsor of YMAU V." },
  { name: "Tsai Center for Innovative Thinking at Yale", archiveGroup: "Bronze sponsor", logoSrc: "/ymau-media/partners/tsai-city.png", logoAlt: "Tsai CITY logo", blurb: "Bronze institutional sponsor of YMAU V." },
  { name: "Yale Office of International Students and Scholars", archiveGroup: "Bronze sponsor", logoSrc: "/ymau-media/partners/oiss.jpg", logoAlt: "OISS logo", blurb: "Bronze institutional sponsor of YMAU V." },
  { name: "Yale Macmillan Center, Council on Middle East Studies", archiveGroup: "Bronze sponsor", logoSrc: "/ymau-media/partners/cmes.png", logoAlt: "Council on Middle East Studies logo", blurb: "Bronze institutional sponsor of YMAU V." },
  { name: "Ghana Ministry of Youth Development and Empowerment", archiveGroup: "Strategic partner", logoSrc: "/ymau-media/partners/ghana-ministry-of-youth.png", logoAlt: "Ghana Ministry of Youth Development and Empowerment emblem", blurb: "Strategic public-sector partner of YMAU V." },
  { name: "Council on Foreign Relations-Ghana", archiveGroup: "Strategic partner", logoSrc: "/ymau-media/partners/cfr-ghana.png", logoAlt: "CFR-Ghana logo", blurb: "Strategic institutional partner of YMAU V." },
  { name: "Kenya Airways", archiveGroup: "Conference partner", logoSrc: "/ymau-media/partners/kenya-airways.png", logoAlt: "Kenya Airways logo", blurb: "The Pride of Africa connected YMAU V to regional travel and supported Mandate to Market." },
];

export const pastPartners: PartnerRecord[] = [
  { name: "Yale Young Global Scholars", logoSrc: "/ymau-media/partners/yale-young-global-scholars.jpg", logoAlt: "Yale Young Global Scholars logo", blurb: "One of the world’s most globally diverse summer academic programs, welcoming students from more than 150 countries, and a past YMAU collaborator." },
  { name: "Yale Global Health Scholars Program", logoSrc: "/ymau-media/partners/yale-global-health.png", logoAlt: "Yale Global Health Scholars Program logo", blurb: "The Global Health Studies Multidisciplinary Academic Program at Yale College offers undergraduates the chance to engage with global health through biomedical, historical, social, economic and political lenses." },
  { name: "TourHero", logoSrc: "/ymau-media/partners/tourhero.png", logoAlt: "TourHero logo", blurb: "A social travel platform that connects adventure-seekers with curated group trips, enabling content creators and group leaders to organize travel experiences for their communities." },
  { name: "Yale Center for the Study of Race, Indigeneity, and Transnational Migration", logoSrc: "/ymau-media/partners/yale-ritm.jpg", logoAlt: "Yale RITM logo", blurb: "An interdisciplinary research center dedicated to advancing research and teaching on critical historical and contemporary issues, emphasizing perspectives often underrepresented in academia and policy discussions." },
  { name: "Yale Jackson School of Global Affairs", logoSrc: "/ymau-media/partners/yale-jackson.png", logoAlt: "Yale Jackson School of Global Affairs logo", blurb: "Yale’s professional school of global affairs, educating students through academically rigorous programs taught by faculty and practitioners." },
  { name: "The Brady-Johnson Program in Grand Strategy and International Security Studies", logoSrc: "/ymau-media/partners/yale-grand-strategy.png", logoAlt: "Brady-Johnson Program in Grand Strategy logo", blurb: "A year-long Yale course on strategic challenges in statecraft, politics and social change, spanning history from 300 B.C.E. to the present." },
  { name: "Yale Macmillan Center, Council on East Asian Studies", logoSrc: "/ymau-media/partners/yale-east-asian-studies.webp", logoAlt: "Council on East Asian Studies logo", blurb: "Founded in 1961, CEAS promotes the interdisciplinary study of China, Japan and Korea through courses, lectures, workshops, cultural events and conferences." },
  { name: "Association of Professional Schools of International Affairs", logoSrc: "/ymau-media/partners/apsia.jpeg", logoAlt: "APSIA logo", blurb: "Founded in 1989, APSIA brings together leading graduate schools of international affairs to advance international understanding, prosperity, peace and security through education." },
  { name: "Yale Schwarzman Center", logoSrc: "/ymau-media/partners/yale-schwarzman.jpg", logoAlt: "Yale Schwarzman Center logo", blurb: "A campus social hub in the historic Commons and Memorial Hall, supporting cultural programming and student life." },
  { name: "Golden Key International Honour Society", logoSrc: "/ymau-media/partners/golden-key.png", logoAlt: "Golden Key International Honour Society logo", blurb: "A global academic honour society that recognizes scholastic achievement among college and university students in the top 15% of their class, with an emphasis on academics, leadership and service." },
];
