import { routeEditorialMedia } from "./media-library";
import type { MediaAsset } from "./media-library";
import {
  financialAidMetrics,
  ymauVConferenceMetrics,
  ymauVIAmbassadorMetrics,
} from "./conference-metrics";
import type { ConferenceMetric } from "./conference-metrics";

export type ContentSection = {
  heading: string;
  body?: string[];
  items?: string[];
  note?: string;
  variant?: "standard" | "checklist";
  presentation?: "standard" | "feature" | "compact";
  image?: MediaAsset;
  stats?: readonly ConferenceMetric[];
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
  "Committee names and mandates",
  "Agenda topics",
  "Delegate experience levels",
  "Background guides",
  "Portfolio allocations",
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
          "YMAU VI convenes from 15–17 March 2027 in Addis Ababa, Ethiopia, in partnership with the African Union Commission’s Youth Division.",
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
          "Delegates are not treated as observers of continental policy, but as its next architects—equipped to translate ideas into institutions.",
        ],
      },
      {
        heading: "Access is part of the mission",
        body: [
          "From its founding, YMAU has treated diverse representation, affordability and financial support as part of the educational design—not as an afterthought. Final YMAU VI fees and financial-aid details will be published once confirmed.",
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
        heading: "The founding idea — 2020",
        body: [
          "Ornella Bayigamba and Richard Mbouombouo founded Yale Model African Union while serving as student leaders in the Yale International Relations Association. Their aim was to share Yale’s educational resources with African peers through a conference rooted in the questions facing the continent.",
          "That origin established a durable premise: rigorous international-relations education should be accessible, pan-African and connected to the young people expected to shape the continent’s institutions.",
        ],
      },
      {
        heading: "The first conference — Kigali, 2022",
        body: [
          "Under inaugural president Francesca Nyakora, YMAU I brought 125 students from around the world to Kigali. Its programme paired African Union simulations with speakers and workshops addressing issues including climate change, gender-based violence, counterterrorism and the Belt and Road Initiative.",
        ],
      },
      {
        heading: "A travelling continental classroom",
        body: [
          "The conference returned to Kigali for YMAU II in 2023, then convened YMAU III in Johannesburg, YMAU IV in Nairobi and YMAU V in Accra. Across those editions, committees, practitioner conversations, leadership training and cultural exchange remained recurring parts of the experience.",
          "YMAU VI now comes to Addis Ababa, home of the African Union headquarters. This places the conference closer than ever to the institution its simulations are designed to help delegates understand.",
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
        heading: "Ornella Bayigamba — Co-founder",
        body: [
          "Born and raised in Rwanda, Ornella studied environmental engineering at Yale and served as Vice President of the Yale International Relations Association in 2019–20. During that tenure, she worked with Richard to establish YMAU as a way to share Yale’s international-relations resources with African peers.",
        ],
        image: routeEditorialMedia.founders[0],
      },
      {
        heading: "Richard Mbouombouo — Co-founder",
        body: [
          "A first-generation Yale student and the son of Cameroonian immigrants, Richard studied Ethics, Politics and Economics with a focus on inclusive economic development. His work across Yale’s African diaspora community helped ground YMAU in questions of access, identity and continental leadership.",
        ],
        image: routeEditorialMedia.founders[1],
      },
      {
        heading: "Francesca Nyakora — Inaugural President",
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
    portraitPending: true,
    status: "Official portrait forthcoming",
    template: "profile",
    sections: [
      {
        heading: "Returning to Addis",
        body: [
          "Abyssinia is a junior at Yale University studying Global Affairs, with a focus on African studies and the study of genocide in Africa. Born in Addis Ababa and now based in the greater Boston area, she brings her Habesha roots into her leadership of YMAU VI.",
        ],
        image: routeEditorialMedia.secretaryGeneral[0],
      },
      {
        heading: "Built from the inside",
        body: [
          "Her path through YMAU began as Under-Secretary-General of Branding and Marketing. She later served as Director-General of Internal Operations for YMAU V, working across logistics, sponsorships and communications.",
          "She now directs strategy and execution alongside a fourteen-member Secretariat.",
        ],
        image: routeEditorialMedia.secretaryGeneral[1],
      },
      {
        heading: "Beyond YMAU",
        body: [
          "Abyssinia writes across journalism, personal narrative and digital publishing, and is deeply invested in education reform and equal access to opportunity.",
        ],
      },
    ],
    action: { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/abyssinia-haile-0bb446247" },
  },
  secretariat: {
    number: "03",
    eyebrow: "Our team",
    title: "The Secretariat leading YMAU VI from concept to conference.",
    intro: "Based in New Haven, connected across the continent.",
    status: "Portraits and full biographies forthcoming",
    template: "directory",
    sections: [
      {
        heading: "Conference leadership",
        items: [
          "Abyssinia Haile — Secretary-General",
          "Amin Abdellatif — Director-General of Conference Programming",
          "Meti Negewo — Director-General of Internal Operations",
          "Gumana Elrufai — Director-General of External Operations",
        ],
        note: "The complete fourteen-member Secretariat directory will be published when the official portraits and biographies are approved.",
        image: routeEditorialMedia.secretariat[0],
      },
      {
        heading: "How the team works",
        body: ["Programming, operations, external relations and communications move as one conference system. The full directory will make those responsibilities visible when the approved portraits and biographies arrive."],
        image: routeEditorialMedia.secretariat[1],
      },
    ],
  },
  ambassadors: {
    number: "04",
    eyebrow: "Across borders",
    title: "Ninety-seven student leaders. More than fifteen countries.",
    intro: "One mission: bringing YMAU VI to campuses and communities across the world.",
    status: "Ambassador directory forthcoming",
    template: "directory",
    sections: [
      {
        heading: "A continental network",
        body: [
          "The YMAU Ambassador Program extends the conference beyond New Haven. Ambassadors connect prospective delegates to YMAU, organize local outreach and carry the conference’s mission into their own institutions.",
        ],
        note: "Names, countries, institutions and portraits will be added when the directory is finalized.",
        image: routeEditorialMedia.ambassadors[0],
        stats: ymauVIAmbassadorMetrics,
      },
      {
        heading: "Recognition across borders",
        body: ["The final directory will introduce ambassadors by country and institution, turning a number into a visible network of student leadership."],
        image: routeEditorialMedia.ambassadors[1],
      },
    ],
  },
  careers: {
    number: "04.2",
    eyebrow: "Careers for Yale students",
    title: "Help build the next continental room.",
    intro: "Applications to join the YMAU VI Secretariat are due 12 September.",
    status: "Position descriptions and application link forthcoming",
    template: "guide",
    sections: [
      {
        heading: "Who may apply",
        body: [
          "This opportunity is for eligible Yale students interested in conference programming, operations, external relations and the work of building an international student conference.",
          "The final eligibility language will be published with the position descriptions. Prospective applicants should not infer role-specific requirements until that pack is released.",
        ],
        image: routeEditorialMedia.careers[0],
      },
      {
        heading: "Application process",
        variant: "checklist",
        items: [
          "Attend a YMAU information session or watch the Zoom recording — exact dates will be released in September",
          "Complete the written application",
          "Sign up for an optional coffee chat",
          "Interview the following week",
          "Receive a decision by late September",
        ],
      },
      {
        heading: "Positions available",
        body: [
          "The role list, descriptions and written application will appear here together once approved. Until then, recruitment questions may be directed to Gumana Elrufai, Director-General of External Operations.",
        ],
        image: routeEditorialMedia.careers[1],
      },
    ],
    resources: [
      {
        label: "Secretariat position descriptions",
        detail: "Role scopes, eligibility and selection criteria",
        status: "Forthcoming",
      },
      {
        label: "YMAU VI written application",
        detail: "Applications due 12 September",
        status: "Link forthcoming",
      },
    ],
    action: { label: "Recruitment questions", href: "mailto:gumana.elrufai@yale.edu" },
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
          "Participants will respond to a defined African Union policy mandate by developing an actionable, locally grounded proposal. The exercise is designed to make implementation—not presentation alone—the measure of a strong idea.",
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
    intro: "The YMAU VI committee list and agendas are in development.",
    status: "Final committee slate forthcoming",
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
        items: committeeArchive.map((item) => `${item.name} — ${item.agenda}`),
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
    intro: "Registration is expected to open in late September. Final dates will be announced here.",
    status: "Registration timetable forthcoming",
    template: "guide",
    sections: [
      {
        heading: "Eligibility",
        variant: "checklist",
        items: ["16–25 years of age", "Enrolled in high school or university", "A demonstrated interest in diplomacy or African affairs"],
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
        note: "The form, registration fees and dated windows will be confirmed in the official pack. Travel and accommodation should not be assumed to be included.",
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
        label: "Delegate Registration and Financial Aid Information Pack",
        detail: "Eligibility, application steps, fee schedule and aid timeline",
        status: "Forthcoming",
      },
    ],
    action: { label: "Contact the programmes team", href: "mailto:programs@yalemodelau.org" },
  },
  "financial-aid": {
    number: "08",
    eyebrow: "Access",
    title: "Opportunity should not be determined by where you started.",
    intro: "YMAU is building a financial-aid process for delegates travelling to Addis Ababa.",
    status: "Application deadline forthcoming",
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
        body: ["The opening date, submission deadline and decision window are forthcoming. Every date will appear together so applicants can plan without piecing a timeline together across pages."],
      },
      {
        heading: "Who is eligible",
        body: ["The final eligibility standard will state which applicants and costs may be considered. No nationality, institution type or income threshold is being presented as final before approval."],
      },
      {
        heading: "How applications are reviewed",
        body: ["The review method, evidence considered and notification process will be published before the application opens. Any response deadline will be stated on the individual decision notice."],
      },
      {
        heading: "Types of packages",
        body: ["The pack will distinguish the forms of support available and the expenses each package covers. Applicants should not assume that registration, travel or accommodation is included unless the award letter states it explicitly."],
      },
    ],
    resources: [
      {
        label: "Financial aid information and application pack",
        detail: "Requirements, deadlines, review process and package types",
        status: "Forthcoming",
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
        body: ["YMAU VI is intended for students aged 16–25 who are enrolled in high school or university and interested in diplomacy or African affairs."],
      },
      {
        heading: "When is the conference?",
        body: ["The conference is scheduled for 15–17 March 2027 in Addis Ababa, Ethiopia. The venue will be announced separately."],
      },
      {
        heading: "When does registration open?",
        body: ["Registration is expected to open in late September. The exact opening date and every registration deadline remain forthcoming."],
      },
      {
        heading: "Are travel and accommodation included?",
        body: ["No travel or accommodation inclusion should be assumed until it is stated in the final registration pack. Financial-aid eligibility and covered costs will be published with the application."],
      },
      {
        heading: "Can I attend without prior Model AU experience?",
        body: ["Committee experience levels and preparation requirements will be published with the final slate so applicants can make an informed choice."],
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
        items: ["Elevation — approximately 2,355 metres", "Primary working language — Amharic", "Currency — Ethiopian birr", "Time zone — East Africa Time (UTC+3)"],
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
        items: ["Selam — hello and peace", "Ameseginalehu — thank you", "Addis Ababa — new flower"],
        image: routeEditorialMedia.cityGuide[0],
      },
      {
        heading: "Institutions and culture",
        body: ["The final guide will connect the African Union headquarters and the city’s diplomatic role with museums, coffee culture, food and neighbourhoods delegates can experience responsibly."],
        image: routeEditorialMedia.cityGuide[2],
      },
      {
        heading: "Buna — coffee as welcome",
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
    intro: "YMAU VI recognizes the African Union Commission’s Youth Division, through the Women, Gender and Youth Directorate, as a co-organizer.",
    status: "Current and past partner archive in preparation",
    template: "archive",
    sections: [
      {
        heading: "African Union Commission",
        body: ["The Youth Division advances youth participation, leadership and development within the African Union Commission’s Women, Gender and Youth Directorate."],
      },
      {
        heading: "Past sponsors and partners",
        body: ["The complete historical partner wall will be rebuilt from approved logo assets and the YMAU V executive report."],
        image: routeEditorialMedia.partners[0],
      },
    ],
    action: { label: "Partnership enquiries", href: "mailto:operations@yalemodelau.org" },
  },
  "past-partners": {
    number: "10.2",
    eyebrow: "Partner archive",
    title: "The institutions that helped each edition happen.",
    intro: "A verified archive will recognize past sponsors and collaborators without mixing historical support with current commitments.",
    status: "Logo permissions and edition credits in review",
    template: "archive",
    sections: [
      {
        heading: "Built from the record",
        body: ["The archive will be reconstructed from approved logo files and the partner acknowledgements in prior executive reports."],
      },
      {
        heading: "Clear attribution",
        body: ["Every organization will be labelled by edition and role so visitors can distinguish current co-organizers, current sponsors and historical partners."],
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
        body: ["The operations team can provide the current sponsorship brief, audience profile and recognition framework. No benefits or exclusivity should be assumed before a written agreement is complete."],
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
        heading: "Conference and registration",
        body: ["programs@yalemodelau.org"],
      },
      {
        heading: "Delegate recruitment and external operations",
        body: [
          "Gumana Elrufai — Director-General of External Operations",
          "gumana.elrufai@yale.edu",
        ],
      },
      {
        heading: "Operations, finance and partnerships",
        body: ["operations@yalemodelau.org"],
      },
      {
        heading: "Office of the Secretary-General",
        body: ["president@yalemodelau.org"],
      },
      {
        heading: "Follow the conference",
        items: [
          "Instagram — @yalemodelau",
          "LinkedIn — Yale Model African Union",
        ],
        note: "The full on-site enquiry form will be activated after the client confirms the receiving workflow. Until then, direct email remains the reliable contact channel.",
      },
    ],
    action: { label: "Email the Secretary-General", href: "mailto:president@yalemodelau.org" },
  },
};

export const informationPageSlugs = Object.keys(informationPages);
