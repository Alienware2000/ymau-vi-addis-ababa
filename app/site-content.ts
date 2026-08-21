import { routeEditorialMedia } from "./media-library";
import type { MediaAsset } from "./media-library";
import {
  financialAidMetrics,
  ymauVConferenceMetrics,
  ymauVIAmbassadorMetrics,
} from "./conference-metrics";
import type { ConferenceMetric } from "./conference-metrics";

export type ScheduleRow = {
  label: string;
  primary: string;
  secondary?: string;
  value?: string;
};

export type ContentSection = {
  heading: string;
  body?: string[];
  items?: string[];
  note?: string;
  variant?: "standard" | "checklist";
  presentation?: "standard" | "feature" | "compact";
  image?: MediaAsset;
  stats?: readonly ConferenceMetric[];
  schedule?: ScheduleRow[];
};

export type ContentResource = {
  label: string;
  detail: string;
  href?: string;
  status?: string;
};

export type InformationPageData = {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  status?: string;
  portraitPending?: boolean;
  template?: "story" | "profile" | "directory" | "programme" | "guide" | "faq" | "archive" | "contact";
  sections: ContentSection[];
  resources?: ContentResource[];
  action?: { label: string; href: string };
};

export const committeeArchive = [
  { name: "STC on Youth, Culture and Sports (French)", agenda: "Sport as a tool for African unity and development" },
  { name: "STC on Gender and Women’s Empowerment", agenda: "Women’s financial and economic inclusion through AfCFTA" },
  { name: "Peace and Security Council 1", agenda: "The conflict and humanitarian crisis in Sudan" },
  { name: "STC on Agriculture, Rural Development, Water and Environment", agenda: "Transboundary water data and drought early-warning systems" },
  { name: "African Commission on Human and Peoples’ Rights", agenda: "Protection and integration of displaced populations" },
  { name: "STC on Health, Population and Drug Control", agenda: "Epidemic preparedness and cross-border response" },
  { name: "ECOSOCC 1", agenda: "Removing intra-African trade barriers" },
  { name: "STC on Transport, Infrastructure, Energy and Tourism", agenda: "Continental energy corridors" },
  { name: "ECOSOCC 2", agenda: "Artificial intelligence and Africa’s socioeconomic transformation" },
  { name: "Peace and Security Council 2", agenda: "African Union oversight of Chinese and Russian interventions" },
] as const;

export const committeeReleaseItems = [
  "Agenda topics",
  "Delegate experience levels",
  "Background guides",
  "Portfolio allocations",
] as const;

export const ymauVICommittees = [
  {
    name: "Economic, Social and Cultural Council (ECOSOCC)",
    description: "Delegates in ECOSOCC will focus on strengthening civil society participation in governance by enhancing collaboration between the African Union and non-state actors in AU countries to ensure inclusive policy-making, with particular attention to empowering marginalised voices and increasing transparency and accountability in development processes.",
  },
  {
    name: "Peace and Security Council (PSC)",
    description: "Delegates in the PSC will focus on stabilising political institutions to prevent uprisings by strengthening governance, promoting credible and inclusive elections, encouraging political participation, and supporting peaceful conflict resolution mechanisms.",
  },
  {
    name: "African Commission on Human and Peoples’ Rights",
    description: "Delegates in the ACHPR will focus on the promotion and protection of human and peoples’ rights across the continent, engaging with mechanisms such as state reporting, urgent appeals, friendly settlement of disputes, and missions by special rapporteurs and working groups. Delegates will also interpret and expound upon the provisions of the African Charter on Human and Peoples’ Rights.",
  },
  {
    name: "STC on Health, Population and Drug Control",
    description: "Delegates in the STC on Health, Population and Drug Control will focus on capacity building for healthcare systems, with an emphasis on affordability and quality of care, discussing healthcare infrastructure, equitable access, and the financing of public health.",
  },
  {
    name: "STC on Agriculture, Rural Development, Water and Environment",
    description: "Delegates in the STC on Agriculture, Rural Development, Water and Environment will focus on enhancing agricultural systems and improving market access for farmers through sustainable practices, infrastructure development, and rural support mechanisms.",
  },
  {
    name: "STC on Gender and Women’s Empowerment",
    description: "Delegates in the STC on Gender and Women’s Empowerment will focus on advancing gender equality across the continent by strengthening legal protections, increasing women’s participation in leadership and peacebuilding, and promoting economic and educational empowerment, with an emphasis on implementation of the Maputo Protocol, addressing gender-based violence, and integrating gender-responsive policies into all levels of governance and development.",
  },
  {
    name: "STC on Transport, Infrastructure, Intercontinental and Interregional Infrastructure, Energy and Tourism",
    description: "Delegates in this committee will focus on expanding continental energy corridors for sustainable and reliable power in order to achieve energy independence, while boosting sustainable tourism by improving infrastructure and promoting Africa’s cultural heritage for economic growth.",
  },
  {
    name: "STC on Migration, Refugees and Internally Displaced Persons (IDPs)",
    description: "Delegates in the STC on Migration, Refugees and IDPs will focus on strengthening Africa’s humanitarian response to displacement, improving protection and assistance for refugees, IDPs, and other vulnerable populations, and advancing continental frameworks for disaster management and epidemic response, alongside the free movement of people across the continent.",
  },
  {
    name: "STC on Education, Science and Technology",
    description: "Delegates in the STC on Education, Science and Technology will focus on advancing continental education strategy and technical and vocational training, alongside implementation of Africa’s science, technology, and innovation agenda, discussing curriculum development, research capacity, and resource mobilisation to strengthen African-led education and innovation systems.",
  },
  {
    name: "STC on Communication and Information Communications Technology",
    description: "Delegates in the STC on Communication and ICT will focus on expanding digital infrastructure and access across the continent, strengthening the capacity and independence of African media, and harmonising ICT policy and regulation, with attention to freedom of expression and information access as pillars of Africa’s knowledge economy.",
  },
] as const;

export const informationPages: Record<string, InformationPageData> = {
  about: {
    number: "01",
    eyebrow: "About YMAU",
    title: "Africa’s next leaders will not wait for a seat at the table.",
    intro: "They will build the table.",
    sections: [
      {
        heading: "What we do",
        body: [
          "Yale Model African Union is a leadership-development conference and student-run simulation of the African Union. It brings young people together to discuss, debate and craft responses to the continent’s most pressing questions.",
          "YMAU VI convenes from 15-17 March 2027 in Addis Ababa, Ethiopia, in partnership with the African Union Commission’s Youth Division.",
        ],
      },
      {
        heading: "Diplomacy in practice",
        body: [
          "YMAU gives young people room to practise the hardest parts of leadership: negotiation, compromise and consensus-building on the issues shaping Africa’s future.",
        ],
      },
      {
        heading: "Youth as architects",
        body: [
          "Delegates are not treated as observers of continental policy, but as its next architects, equipped to translate ideas into institutions.",
        ],
      },
      {
        heading: "Access is part of the mission",
        body: [
          "From its founding, YMAU has treated diverse representation, affordability and financial support as part of the educational design, not as an afterthought. Final YMAU VI fees and financial-aid details will be published once confirmed.",
        ],
      },
    ],
    action: { label: "Meet the Secretary-General", href: "/secretary-general" },
  },
  history: {
    number: "01.2",
    eyebrow: "Our history",
    title: "A conference founded to bring Yale’s resources into an African room.",
    intro: "The history is still being written. The founding purpose remains visible in every edition.",
    template: "story",
    sections: [
      {
        heading: "The founding idea, 2020",
        body: [
          "Ornella Bayigamba and Richard Mbouombouo founded Yale Model African Union while serving as student leaders in the Yale International Relations Association. Their aim was to share Yale’s educational resources with African peers through a conference rooted in the questions facing the continent.",
          "That origin established a durable premise: rigorous international-relations education should be accessible, pan-African and connected to the young people expected to shape the continent’s institutions.",
        ],
      },
      {
        heading: "The first conference, Kigali, 2022",
        body: [
          "Under inaugural president Francesca Nyakora, YMAU I brought 125 students from around the world to Kigali. Its programme paired African Union simulations with speakers and workshops addressing issues including climate change, gender-based violence, counterterrorism and the Belt and Road Initiative.",
        ],
      },
      {
        heading: "A travelling continental classroom",
        body: [
          "Across every edition, committees, practitioner conversations, leadership training and cultural exchange remained recurring parts of the experience. YMAU VI now comes to Addis Ababa, home of the African Union headquarters, placing the conference closer than ever to the institution its simulations are designed to help delegates understand.",
        ],
        schedule: [
          { label: "YMAU I · II", primary: "Kigali · 2022 and 2023", secondary: "276 students across the first two editions · the first Ivy League-hosted Model African Union on the continent" },
          { label: "YMAU III", primary: "Johannesburg", secondary: "151 students · the conference's first expansion beyond Kigali" },
          { label: "YMAU IV", primary: "Nairobi", secondary: "325 students · first partnership with an African Union-affiliated body" },
          { label: "YMAU V", primary: "Accra · 2026", secondary: "350+ students from 30+ countries · first major corporate partnership" },
          { label: "YMAU VI", primary: "Addis Ababa · 15-17 March 2027" },
        ],
        image: routeEditorialMedia.history[0],
      },
      {
        heading: "The record is part of the institution",
        body: [
          "Past executive reports, committee agendas and recap films are not templates for the 2027 programme. They are the conference archive: evidence of what YMAU has tried, learned and carried forward.",
        ],
        note: "Dates and locations above describe completed editions. The detailed YMAU VI programme remains forthcoming.",
      },
    ],
    action: { label: "Meet the people who began YMAU", href: "/founders" },
  },
  founders: {
    number: "01.3",
    eyebrow: "Our founders",
    title: "Three student leaders turned an ambitious premise into an institution.",
    intro: "Ornella Bayigamba and Richard Mbouombouo founded YMAU. Francesca Nyakora led its first conference into being.",
    template: "profile",
    sections: [
      {
        heading: "Ornella Bayigamba, Co-founder",
        body: [
          "Born and raised in Rwanda, Ornella studied environmental engineering at Yale and served as Vice President of the Yale International Relations Association in 2019-20. During that tenure, she worked with Richard to establish YMAU as a way to share Yale’s international-relations resources with African peers.",
        ],
        image: routeEditorialMedia.founders[0],
      },
      {
        heading: "Richard Mbouombouo, Co-founder",
        body: [
          "A first-generation Yale student and the son of Cameroonian immigrants, Richard studied Ethics, Politics and Economics with a focus on inclusive economic development. His work across Yale’s African diaspora community helped ground YMAU in questions of access, identity and continental leadership.",
        ],
        image: routeEditorialMedia.founders[1],
      },
      {
        heading: "Francesca Nyakora, Inaugural President",
        body: [
          "Francesca led the team that delivered YMAU I in Kigali in 2022. She shaped its programme, built institutional and diplomatic partnerships, raised support for financial access and coordinated the systems required to welcome 125 students from around the world.",
        ],
        image: routeEditorialMedia.founders[2],
      },
      {
        heading: "What they set in motion",
        body: [
          "YMAU has grown across editions and host cities, but the founding commitments remain recognizable: African diplomacy studied seriously, young people treated as policy actors and participation widened through deliberate attention to access.",
        ],
      },
    ],
    action: { label: "Follow the conference across five editions", href: "/history" },
  },
  "secretary-general": {
    number: "02",
    eyebrow: "Leadership",
    title: "Abyssinia Haile",
    intro: "Secretary-General, Yale Model African Union VI",
    template: "profile",
    sections: [
      {
        heading: "Returning to Addis",
        body: [
          "Abyssinia Haile is a junior at Yale University studying Global Affairs, with a focus on African studies. Born in Addis Ababa, Ethiopia and now based in the greater Boston area, she carries her Habesha roots, its dancing, food, and music, into everything she leads, including her return to Addis Ababa for YMAU VI.",
        ],
      },
      {
        heading: "Built from the inside",
        body: [
          "Her path through YMAU began as Under-Secretary-General of Branding and Marketing during YMAU IV in Nairobi. She later served as Director-General of Internal Operations for YMAU V, working across logistics, sponsorships and communications.",
          "She now directs strategy and execution alongside a fourteen-member Secretariat, and has built partnerships with organizations including the African Union Youth Division, TGI Group and Ecobank Ghana.",
        ],
        image: routeEditorialMedia.secretaryGeneral[1],
      },
      {
        heading: "Beyond YMAU",
        body: [
          "Outside YMAU, Abyssinia writes: blogging, journalism, personal narratives, whatever form the story needs. She is also deeply invested in education reform, believing every student deserves an equal opportunity to learn, a belief that shapes how she thinks about what YMAU should be: a space where opportunity isn’t determined by where you started.",
        ],
      },
    ],
    action: { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/abyssinia-haile-0bb446247" },
  },
  secretariat: {
    number: "03",
    eyebrow: "Our team",
    title: "The Secretariat leading YMAU VI from concept to conference.",
    intro: "The Yale Model African Union’s Secretariat is based in New Haven, Connecticut.",
    template: "directory",
    sections: [
      {
        heading: "Conference leadership",
        body: [
          "Programming, operations and external relations move as one conference system. The four officers below are public now; remaining Secretariat portraits and biographies will be released in October 2026.",
        ],
      },
    ],
  },
  ambassadors: {
    number: "04",
    eyebrow: "Across borders",
    title: "Ninety-seven student leaders. More than fifteen countries.",
    intro: "One mission: bringing YMAU VI to campuses and communities across the world.",
    template: "directory",
    sections: [
      {
        heading: "A continental network",
        body: [
          "The YMAU Ambassador Program extends the conference beyond New Haven. Ambassadors connect prospective delegates to YMAU, organize local outreach and carry the conference’s mission into their own institutions.",
        ],
        stats: ymauVIAmbassadorMetrics,
      },
    ],
  },
  careers: {
    number: "04.2",
    eyebrow: "Careers for Yale students",
    title: "Help build the next continental room.",
    intro: "Applications to join the YMAU VI Secretariat are due 12 September.",
    template: "guide",
    sections: [
      {
        heading: "Who may apply",
        body: [
          "Yale students of all class years may apply to serve as Under-Secretary-Generals. Expect approximately 8-10 hours a week, rising during recruitment and in the lead-up to the conference.",
          "If selected, YIRA provides a stipend for your flight and covers conference board (food and accommodation) during the trip. YMAU members who receive financial aid from Yale are eligible for comparable assistance; review YIRA’s financial-aid policy at yira.org/finances.",
        ],
        image: routeEditorialMedia.careers[0],
      },
      {
        heading: "Public timeline",
        schedule: [
          { label: "30 August", primary: "Applications open" },
          { label: "6-14 September", primary: "Optional coffee chats" },
          { label: "Week of 7 Sept", primary: "YMAU VI information session" },
          { label: "12 September", primary: "Applications close", secondary: "11:59 PM EST" },
          { label: "15-19 September", primary: "Interviews" },
          { label: "24 September", primary: "Decisions released" },
        ],
      },
      {
        heading: "Application process",
        variant: "checklist",
        items: [
          "Attend a YMAU information session or watch the Zoom recording",
          "Review the position descriptions, copy the application for your role, and complete it as a PDF",
          "Sign up for an optional coffee chat",
          "Email the PDF to president@yalemodelau.org before the deadline",
          "Interview the following week",
          "Receive a decision by late September",
        ],
        note: "Name the file “[name]_YMAU VI_[position]”, for example “AbyssiniaHaile_YMAU VI_USG of Committees.” Answers are typically 100-200 words.",
      },
    ],
    resources: [
      {
        label: "Apply now: application instructions",
        detail: "Copy the application, save a PDF, and email president@yalemodelau.org by 12 September, 11:59pm EST",
        href: "https://docs.google.com/document/d/1hCqkFPQTWZ5tCuQQKbAJCVP2CSfQwU92l6ObfiQnTqk/edit",
        status: "Due 12 Sept · 11:59 PM EST",
      },
      {
        label: "Secretariat position descriptions",
        detail: "YMAU VI role scopes for the eight Under-Secretary-General posts",
        href: "https://docs.google.com/document/d/13VV6HPeiqypli2-RNKbu9CjfaigkBcDw8CrOL4vUXt8/edit",
        status: "Open descriptions",
      },
      {
        label: "Optional coffee chats",
        detail: "Informal conversations with the Executive Secretariat, 6-14 September",
        href: "https://forms.gle/U8NhcxmaUyd7kKMC8",
        status: "Sign up",
      },
    ],
    action: { label: "Apply now", href: "https://docs.google.com/document/d/1hCqkFPQTWZ5tCuQQKbAJCVP2CSfQwU92l6ObfiQnTqk/edit" },
  },
  programme: {
    number: "05",
    eyebrow: "The programme",
    title: "Policy fluency meets practical leadership.",
    intro: "Three days designed around deliberation, exchange and the work of turning ideas into institutions.",
    status: "Detailed running order forthcoming",
    sections: [
      {
        heading: "Committee simulations",
        body: ["Delegates research, negotiate and draft policy through simulations grounded in the institutions and procedures of the African Union."],
      },
      {
        heading: "Panels and workshops",
        body: ["Practitioners, policy leaders and subject-matter experts connect committee work to the choices shaping the continent now."],
      },
      {
        heading: "Career fair",
        body: ["Delegates meet organizations working across public service, finance, development, research and continental institutions."],
      },
      {
        heading: "Pre-conference webinars",
        body: ["A digital preparation series will introduce the African Union, conference procedure and the policy context delegates need before arriving in Addis."],
      },
      {
        heading: "Mandate to Market",
        body: ["A policy-to-enterprise pitch experience will challenge participants to translate an African Union mandate into an actionable, locally grounded solution."],
        note: "Format and eligibility details will be released with the full programme.",
      },
    ],
    action: { label: "Explore pre-conference preparation", href: "/pre-conference" },
  },
  theme: {
    number: "05.2",
    eyebrow: "Conference theme",
    title: "Our Vision, Our Victory.",
    intro: "Championing African success on African terms.",
    template: "story",
    sections: [
      {
        heading: "The premise",
        body: [
          "YMAU VI asks delegates to begin with a simple proposition: Africa’s future should be articulated, negotiated and measured by the people who will live it.",
          "The theme invites committee rooms to move beyond imported definitions of progress and toward policy grounded in continental priorities, local knowledge and institutional confidence.",
        ],
        image: routeEditorialMedia.theme[0],
      },
      {
        heading: "From vision to practice",
        items: [
          "Define success in the context of the committee mandate",
          "Interrogate who sets the terms of policy and development",
          "Build proposals that can survive beyond the conference room",
        ],
      },
      {
        heading: "Across the programme",
        body: [
          "The theme will connect committee agendas, practitioner conversations and Mandate to Market. Final session descriptions will be published with the detailed running order.",
        ],
        image: routeEditorialMedia.theme[1],
      },
    ],
    action: { label: "See the conference framework", href: "/programme" },
  },
  "mandate-to-market": {
    number: "05.3",
    eyebrow: "Signature programme",
    title: "Take a mandate beyond the meeting room.",
    intro: "Mandate to Market connects public purpose to a solution that can be explained, tested and built.",
    status: "Format and eligibility forthcoming",
    template: "programme",
    sections: [
      {
        heading: "The challenge",
        body: [
          "Participants will respond to a defined African Union policy mandate by developing an actionable, locally grounded proposal. The exercise is designed to make implementation, not presentation alone, the measure of a strong idea.",
        ],
        image: routeEditorialMedia.mandateToMarket[0],
      },
      {
        heading: "What the brief will include",
        items: ["The policy mandate", "Team and eligibility rules", "Submission format", "Judging criteria", "Presentation schedule"],
        note: "No application or deadline is being presented as final until the programme team releases the official brief.",
      },
    ],
    resources: [
      {
        label: "Mandate to Market application pack",
        detail: "Brief, eligibility, judging criteria and submission instructions",
        status: "Awaiting the approved application pack",
      },
    ],
    action: { label: "Questions for the programmes team", href: "mailto:programs@yalemodelau.org" },
  },
  "pre-conference": {
    number: "05.4",
    eyebrow: "Before Addis",
    title: "Arrive ready to deliberate.",
    intro: "A focused digital series will help delegates understand the African Union, conference procedure and the policy context behind their agendas.",
    status: "Session calendar forthcoming",
    template: "guide",
    sections: [
      {
        heading: "The preparation arc",
        variant: "checklist",
        items: ["Pre-conference webinar events", "Delegate training", "Position-paper writing"],
        image: routeEditorialMedia.preConference[0],
      },
      {
        heading: "How access will work",
        body: [
          "Dates, speakers, registration links and recordings will live on this page as they are confirmed. Registered delegates will also receive their required preparation sequence directly.",
          "The webinar calendar, training materials and position-paper guidance are not yet final; each will be marked clearly when released.",
        ],
      },
    ],
    action: { label: "Questions about preparation", href: "mailto:programs@yalemodelau.org" },
  },
  committees: {
    number: "06",
    eyebrow: "Committee work",
    title: "A continental agenda, being shaped with care.",
    intro: "Ten rooms in service of Our Vision, Our Victory: championing African success on African terms.",
    status: "YMAU VI slate · ten committees",
    template: "story",
    sections: [
      {
        heading: "What committees do",
        body: [
          "Each committee asks delegates to represent a member state or stakeholder, work within a specific African Union mandate and negotiate a written resolution with their peers.",
          "Background guides, experience levels and portfolio allocations will be published only after the final slate is confirmed.",
        ],
        image: routeEditorialMedia.committees[0],
      },
      {
        heading: "The YMAU V record",
        body: [
          "The fifth edition convened ten committees. This archive records their names and agenda focus without presenting any of them as the final YMAU VI slate.",
        ],
        items: committeeArchive.map((item) => `${item.name}: ${item.agenda}`),
        note: "Historical record verified against the YMAU V Executive Report. YMAU VI names, agendas, delegate levels and background guides remain forthcoming.",
        image: routeEditorialMedia.committees[1],
      },
      {
        heading: "What will be released",
        variant: "checklist",
        items: [...committeeReleaseItems],
        image: routeEditorialMedia.committees[2],
      },
    ],
    action: { label: "Open the YMAU V executive report", href: "https://drive.google.com/file/d/10mxwms6_x02wp_m6zC-PHHUu795KrEEu/view" },
  },
  "committee-preparation": {
    number: "06.2",
    eyebrow: "Delegate preparation",
    title: "Preparation is where representation begins.",
    intro: "A concise path from assignment to opening statement.",
    status: "Final materials forthcoming",
    template: "guide",
    sections: [
      {
        heading: "Start with the institution",
        body: ["Understand the committee’s mandate, powers and relationship to the wider African Union before researching the agenda itself."],
      },
      {
        heading: "Build a credible position",
        items: ["Read the official background guide", "Research your assigned portfolio", "Identify existing commitments", "Map likely allies and disagreements", "Prepare implementable policy options"],
      },
      {
        heading: "Materials to come",
        body: ["The delegate handbook, procedure guide, portfolio assignments and required preparation deadlines will appear here when the committee slate is final."],
      },
    ],
    action: { label: "Browse topic-guide status", href: "/topic-guides" },
  },
  "topic-guides": {
    number: "06.3",
    eyebrow: "Research library",
    title: "The questions behind the agenda.",
    intro: "Official background guides will give every delegate the same rigorous starting point.",
    status: "Guides forthcoming with committee slate",
    template: "archive",
    sections: [
      {
        heading: "What each guide will contain",
        items: ["Committee mandate and institutional context", "History of the agenda", "Current policy landscape", "Key questions for debate", "Curated primary sources"],
      },
      {
        heading: "Publication standard",
        body: ["Guides will be released as accessible downloads only after agendas and faculty review are complete. Draft topics will not be presented as final committee policy."],
      },
    ],
    action: { label: "Return to committee overview", href: "/committees" },
  },
  "committee-policies": {
    number: "06.4",
    eyebrow: "Rules and policies",
    title: "A fair room is a well-designed room.",
    intro: "The policies governing procedure, conduct, integrity and access will be published together.",
    status: "2027 policy pack forthcoming",
    template: "archive",
    sections: [
      {
        heading: "Policy library",
        items: ["Rules of procedure", "Code of conduct", "Academic integrity and original work", "Accessibility and accommodations", "Technology use", "Awards criteria"],
      },
      {
        heading: "Until publication",
        body: ["Questions about committee rules or delegate accommodations can be directed to the programmes team. The 2027 policy pack will supersede material from prior editions."],
      },
    ],
    action: { label: "Email the programmes team", href: "mailto:programs@yalemodelau.org" },
  },
  registration: {
    number: "07",
    eyebrow: "Attend YMAU VI",
    title: "Bring your perspective to Addis.",
    intro: "Registration opens 5 October 2026 at 9:00 AM EAT. Early bird, regular and late windows run to 1 February 2027.",
    status: "Registration opens 5 October 2026",
    template: "guide",
    sections: [
      {
        heading: "Eligibility",
        variant: "checklist",
        items: [
          "16-25 years of age",
          "High school and university students",
          "Recent graduates and young professionals",
          "International students from across Africa and the diaspora, and Ethiopian students",
          "Delegates under 18 register with an advisor or chaperone over the age of 21 and complete the Parent or Guardian Consent and Participation Form, included in the registration platform",
        ],
      },
      {
        heading: "Registration windows and fees",
        schedule: [
          {
            label: "Early bird",
            primary: "5 October - 15 November 2026",
            secondary: "Opens 9:00 AM EAT · closes 11:59 PM EAT",
            value: "$60",
          },
          {
            label: "Regular",
            primary: "16 November 2026 - 10 January 2027",
            secondary: "Closes 11:59 PM EAT",
            value: "$80",
          },
          {
            label: "Late",
            primary: "11 January - 1 February 2027",
            secondary: "Closes 11:59 PM EAT",
            value: "$100",
          },
          {
            label: "Financial aid",
            primary: "Priority by 16 November · regular by 31 December",
            secondary: "Flight and visa support is limited to the priority window · full detail on the financial aid page",
          },
        ],
      },
      {
        heading: "Ways to register",
        schedule: [
          {
            label: "Individual",
            primary: "One delegate, traveling independently",
          },
          {
            label: "Delegation",
            primary: "2 to 25 delegates from one institution",
            secondary: "A school, university or organization · the delegation leader may serve as chaperone if over 21",
          },
          {
            label: "Advisor",
            primary: "A trusted adult over 21 supervising minors",
            secondary: "No registration fee · advisors cover their own travel and accommodation",
          },
        ],
      },
      {
        heading: "Your application checklist",
        variant: "checklist",
        items: [
          "Review the eligibility and registration timetable",
          "Choose an individual or delegation application",
          "Prepare the requested student and institution details",
          "Indicate whether you will apply for financial aid",
          "Submit only through the official YMAU application link",
        ],
        note: "The registration application will be available here on the website when it opens. Travel and accommodation should not be assumed to be included.",
        image: routeEditorialMedia.registration[1],
      },
      {
        heading: "After you submit",
        body: ["The delegate pack will explain confirmation, payment, committee placement, travel guidance and the timeline for financial-aid decisions."],
        image: routeEditorialMedia.registration[0],
      },
    ],
    resources: [
      {
        label: "2026-27 Registration Guide",
        detail: "The official pack: programmes, committees, host city, registration windows and financial aid",
        href: "/ymau-vi-registration-guide.pdf",
        status: "August 2026 edition",
      },
    ],
    action: { label: "Contact the programmes team", href: "mailto:programs@yalemodelau.org" },
  },
  "financial-aid": {
    number: "08",
    eyebrow: "Access",
    title: "Opportunity should not be determined by where you started.",
    intro: "Financial aid applications open with registration on 5 October 2026 and are reviewed in two batches.",
    status: "Priority deadline · 16 November 2026",
    template: "guide",
    sections: [
      {
        heading: "A record of support",
        stats: financialAidMetrics,
        image: routeEditorialMedia.financialAid[0],
      },
      {
        heading: "Application requirements",
        body: ["The documentation checklist will be released with the Delegate Registration and Financial Aid Information Pack. Applicants should wait for that verified list before preparing sensitive financial records."],
      },
      {
        heading: "Deadlines",
        schedule: [
          {
            label: "Applications open",
            primary: "5 October 2026",
            secondary: "Opens alongside registration",
          },
          {
            label: "Priority review",
            primary: "Submit by 16 November 2026",
            secondary: "The only window for flight and visa support · decisions released by 5 December 2026",
          },
          {
            label: "Regular review",
            primary: "Submit by 31 December 2026",
            secondary: "Fee waivers and accommodation support · decisions released by 15 January 2027",
          },
        ],
        note: "Flight and visa support is available only to priority-window applicants. To be considered for it, submit your financial aid application by 16 November 2026.",
      },
      {
        heading: "Types of packages",
        body: ["Applicants specify the package they are requesting within the financial aid application. Each component is reviewed independently, and an applicant may receive any combination of the three."],
        schedule: [
          {
            label: "Fee waiver",
            primary: "Participation fee waived",
            secondary: "For delegates who can arrange their own travel and lodging",
          },
          {
            label: "Accommodation",
            primary: "Fee waiver and accommodation bundle",
            secondary: "Room, breakfast, airport transfer and ground transportation to and from the conference venue",
          },
          {
            label: "Full package",
            primary: "Fee waiver, accommodation, flight and visa support",
            secondary: "For delegates for whom airfare is the binding constraint · priority-window applicants only",
          },
        ],
      },
      {
        heading: "Who is eligible",
        body: ["Financial aid is open only to applicants based in Africa."],
      },
      {
        heading: "How applications are reviewed",
        body: [
          "Financial aid is awarded through competitive batch review and is based on demonstrated financial need and the availability of funds. Submission of an application does not guarantee an award.",
          "All financial aid decisions are final and cannot be appealed.",
        ],
      },
    ],
    resources: [
      {
        label: "2026-27 Registration Guide",
        detail: "The official pack: registration windows, financial aid deadlines, packages and review process",
        href: "/ymau-vi-registration-guide.pdf",
        status: "August 2026 edition",
      },
    ],
    action: { label: "Ask about financial aid", href: "mailto:operations@yalemodelau.org" },
  },
  faq: {
    number: "08.2",
    eyebrow: "Frequently asked questions",
    title: "The practical answers, in one place.",
    intro: "This page will grow as registration, travel and committee details are confirmed.",
    template: "faq",
    sections: [
      {
        heading: "Who may apply?",
        body: ["YMAU VI is intended for delegates aged 16-25: high school students, university students, and recent graduates and young professionals interested in diplomacy or African affairs. Delegates under 18 register with an advisor or chaperone over the age of 21."],
      },
      {
        heading: "When is the conference?",
        body: ["The conference is scheduled for 15-17 March 2027 in Addis Ababa, Ethiopia. The venue will be announced on this website by mid-November 2026."],
      },
      {
        heading: "When does registration open?",
        body: ["Registration opens 5 October 2026 at 9:00 AM EAT, and the application will be available on this website. Early bird registration ($60) closes 15 November 2026, regular registration ($80) closes 10 January 2027, and late registration ($100) closes 1 February 2027."],
      },
      {
        heading: "Are travel and accommodation included?",
        body: ["Registration fees do not include travel or accommodation. Delegates based in Africa may apply for financial aid, which ranges from a participation fee waiver to an accommodation bundle to full flight and visa support; the covered costs are stated on each award letter."],
      },
      {
        heading: "Can I attend without prior Model AU experience?",
        body: ["Yes. You do not have to be African or have prior Model AU experience to belong at YMAU; what matters most is a genuine interest in African affairs, a willingness to learn, and the leadership to bring a fresh perspective to the table. First-time delegates and returning veterans are equally welcome."],
      },
    ],
    action: { label: "Ask a registration question", href: "mailto:programs@yalemodelau.org" },
  },
  "travel-guide": {
    number: "08.3",
    eyebrow: "Travel and visa guide",
    title: "Plan the journey with the right information.",
    intro: "The final delegate pack will separate confirmed travel requirements from practical recommendations.",
    status: "2027 travel pack forthcoming",
    template: "guide",
    sections: [
      {
        heading: "Before booking",
        body: ["Delegates should wait for their individual confirmation and the official travel guidance before making non-refundable arrangements."],
        image: routeEditorialMedia.travelGuide[1],
      },
      {
        heading: "Arrival point",
        body: ["International delegates should plan to arrive through Addis Ababa Bole International Airport. Venue-specific transfer guidance will be added after the conference venue and accommodation plan are confirmed."],
        image: routeEditorialMedia.travelGuide[0],
      },
      {
        heading: "Official eVisa essentials",
        variant: "checklist",
        items: [
          "Recent passport-size photograph",
          "Passport valid for at least six months from the intended date of entry",
          "Normal tourist eVisa processing time: three days",
          "30-day single-entry tourist eVisa: USD 62",
          "90-day single-entry tourist eVisa: USD 152",
        ],
        note: "Fees and rules were reviewed against Ethiopia’s official eVisa portal on 12 August 2026 and can change. Use only the official government portal before paying.",
      },
      {
        heading: "YMAU delegate guidance",
        body: [
          "The Secretariat’s current instruction is for delegates who need a visa to apply under the tourist category. Because Ethiopia’s Immigration and Citizenship Service controls visa classification and entry, every delegate should confirm the category shown for their passport before paying.",
          "The checker below uses the official government lists for visa exemption and tourist visa on arrival. All other passport holders can use the advance tourist eVisa pathway, subject to the official requirements.",
        ],
      },
    ],
    resources: [
      {
        label: "Official Ethiopian eVisa portal",
        detail: "Requirements, current fees, application and visa status",
        href: "https://www.evisa.gov.et/information/tourist",
        status: "Government source",
      },
    ],
    action: { label: "Meet the host city", href: "/addis-ababa" },
  },
  "addis-ababa": {
    number: "09",
    eyebrow: "The host city",
    title: "Welcome to Africa’s diplomatic capital.",
    intro: "Addis Ababa is both the political heart of modern Ethiopia and a centre of continental diplomacy.",
    template: "story",
    sections: [
      {
        heading: "A city of institutions",
        body: ["Addis Ababa is home to the headquarters of the African Union and the United Nations Economic Commission for Africa."],
        image: routeEditorialMedia.addisAbaba[2],
      },
      {
        heading: "At a glance",
        items: ["Elevation: approximately 2,355 metres", "Primary working language: Amharic", "Currency: Ethiopian birr", "Time zone: East Africa Time (UTC+3)"],
        image: routeEditorialMedia.addisAbaba[0],
      },
      {
        heading: "The city at street level",
        body: ["Addis is not only a diplomatic map point. Markets, neighbourhood cafés, religious life and a rapidly changing skyline give the capital its everyday rhythm."],
        image: routeEditorialMedia.addisAbaba[1],
      },
      {
        heading: "For the journey",
        body: ["A practical city guide covering arrival, transport, museums, food, coffee culture and delegate safety will be published alongside the travel pack."],
      },
    ],
    action: { label: "Open the delegate city guide", href: "/city-guide" },
  },
  "city-guide": {
    number: "09.2",
    eyebrow: "Delegate city guide",
    title: "Addis, beyond the itinerary.",
    intro: "A compact guide to moving through the city with context, curiosity and care.",
    status: "Venue-specific guidance forthcoming",
    template: "guide",
    sections: [
      {
        heading: "Language for the journey",
        items: ["Selam: hello and peace", "Ameseginalehu: thank you", "Addis Ababa: new flower"],
        image: routeEditorialMedia.cityGuide[0],
      },
      {
        heading: "Institutions and culture",
        body: ["The final guide will connect the African Union headquarters and the city’s diplomatic role with museums, coffee culture, food and neighbourhoods delegates can experience responsibly."],
        image: routeEditorialMedia.cityGuide[2],
      },
      {
        heading: "Buna: coffee as welcome",
        body: ["The Ethiopian coffee ceremony is a social ritual as much as a drink: beans are roasted, ground and brewed in a clay jebena, then shared slowly in conversation."],
        image: routeEditorialMedia.cityGuide[1],
      },
      {
        heading: "Practical layer",
        items: ["Arrival and transport", "Currency and payments", "Altitude and weather", "Connectivity", "Delegate safety", "Conference-area recommendations"],
        image: routeEditorialMedia.cityGuide[3],
      },
    ],
    action: { label: "Return to the host-city overview", href: "/addis-ababa" },
  },
  partners: {
    number: "10",
    eyebrow: "Co-organizers and partners",
    title: "Built with institutions that believe in Africa’s next generation.",
    intro: "YMAU VI recognizes the African Union Commission’s Youth Division, through the Women, Gender and Youth Directorate, and Model African Union Ethiopia as co-organizers.",
    template: "archive",
    sections: [
      {
        heading: "African Union Commission Youth Division",
        body: [
          "The Youth Division advances youth participation, leadership and development within the African Union Commission’s Women, Gender and Youth Directorate. Africa has the youngest population in the world, with more than 400 million young people aged 15 to 35 years. The Division’s work includes the African Youth Charter, adopted in Banjul on 2 July 2006.",
        ],
      },
      {
        heading: "Model African Union Ethiopia",
        body: [
          "A non-profit youth-led organization that works on agendas affecting Africa, with the goal of increasing youth engagement while educating young people on Agenda 2063, the SDGs, and the AUC Youth Initiative 1 Million Next Level (education, employment, entrepreneurship and inclusive youth engagement).",
        ],
        image: routeEditorialMedia.partners[0],
      },
      {
        heading: "How the record is labelled",
        body: [
          "Current co-organizers appear first. YMAU V partners from Accra follow, then earlier collaborators. Historical support is named without presenting it as a current YMAU VI sponsorship.",
        ],
      },
    ],
    action: { label: "Partnership enquiries", href: "mailto:operations@yalemodelau.org" },
  },
  "past-partners": {
    number: "10.2",
    eyebrow: "Partner archive",
    title: "The institutions that helped each edition happen.",
    intro: "Past sponsors and collaborators are listed here by edition, so historical support is not confused with current commitments.",
    template: "archive",
    sections: [
      {
        heading: "Clear attribution",
        body: ["YMAU V partners from Accra appear first, then earlier collaborators from previous editions. Current co-organizers live on the partners page."],
      },
    ],
    action: { label: "View current co-organizers", href: "/partners" },
  },
  sponsor: {
    number: "10.3",
    eyebrow: "Become a sponsor",
    title: "Back access, preparation and continental exchange.",
    intro: "Partnership conversations begin with the conference outcomes an organization wants to make possible.",
    template: "programme",
    sections: [
      {
        heading: "Areas of support",
        items: ["Delegate financial aid", "Travel access", "Programme and speaker support", "Research and background guides", "Career and practitioner programming"],
      },
      {
        heading: "A tailored conversation",
        body: ["The operations team can provide the current sponsorship brief, audience profile and recognition framework."],
        note: "No benefits or exclusivity should be assumed before a written agreement is complete.",
      },
    ],
    action: { label: "Start a partnership conversation", href: "mailto:operations@yalemodelau.org" },
  },
  recap: {
    number: "11",
    eyebrow: "YMAU V · Accra",
    title: "The conference before Addis.",
    intro: "YMAU V brought together 350 delegates representing more than thirty nationalities in Accra, Ghana.",
    sections: [
      {
        heading: "The year in numbers",
        stats: ymauVConferenceMetrics,
      },
      {
        heading: "Executive report",
        body: ["Read the official YMAU V report for the full programme, outcomes, partner acknowledgements and conference record."],
      },
      {
        heading: "Extended highlights",
        body: ["The official YMAU V extended-highlights film is available in the conference media archive."],
        note: "This is the confirmed YMAU V recap film; it is separate from the new YMAU VI hero-film edit.",
      },
    ],
    action: { label: "Open the YMAU V executive report", href: "https://drive.google.com/file/d/10mxwms6_x02wp_m6zC-PHHUu795KrEEu/view" },
  },
  contact: {
    number: "12",
    eyebrow: "Contact",
    title: "Speak with the right YMAU team.",
    intro: "Use the address that best matches your question so the Secretariat can respond efficiently.",
    template: "contact",
    sections: [
      {
        heading: "Registration and financial aid",
        body: ["programs@yalemodelau.org"],
      },
      {
        heading: "Marketing and partnership inquiries",
        body: ["operations@yalemodelau.org"],
      },
      {
        heading: "Conference programming and committees logistics",
        body: ["committees@yalemodelau.org"],
      },
      {
        heading: "Office of the Secretary-General",
        body: ["president@yalemodelau.org"],
      },
      {
        heading: "Follow the conference",
        items: [
          "Instagram: @yalemodelau",
          "LinkedIn: Yale Model African Union",
        ],
        note: "The full on-site enquiry form will be activated after the client confirms the receiving workflow. Until then, direct email remains the reliable contact channel.",
      },
    ],
    action: { label: "Email the Secretary-General", href: "mailto:president@yalemodelau.org" },
  },
};

export const informationPageSlugs = Object.keys(informationPages);
