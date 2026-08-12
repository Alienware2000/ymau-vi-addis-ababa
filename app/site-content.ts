export type ContentSection = {
  heading: string;
  body?: string[];
  items?: string[];
  note?: string;
};

export type InformationPageData = {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  status?: string;
  portraitPending?: boolean;
  sections: ContentSection[];
  action?: { label: string; href: string };
};

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
          "Yale Model African Union is a student-run simulation of the African Union that brings together delegates from around the world to debate, negotiate and draft policy on issues facing the continent.",
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
        heading: "Africa-rooted, globally connected",
        body: [
          "Founded at Yale University, YMAU combines rigorous policy training with the lived urgency of the continent it is designed to serve.",
        ],
      },
    ],
    action: { label: "Meet the Secretary-General", href: "/secretary-general" },
  },
  history: {
    number: "01.2",
    eyebrow: "Our history",
    title: "A Yale idea, remade on African ground.",
    intro: "Each edition has moved YMAU closer to the institutions, people and questions it exists to serve.",
    sections: [
      {
        heading: "From campus to continent",
        body: [
          "Yale Model African Union began as a student-led effort to create a rigorous forum for African diplomacy. Its editions have since brought delegates, practitioners and partners together in cities across the continent.",
          "The conference remains organized by Yale students, but its intellectual centre is the African Union and the young people who will inherit its work.",
        ],
      },
      {
        heading: "The fifth edition",
        body: [
          "YMAU V convened in Accra, Ghana, with more than 350 delegates representing over thirty nationalities. The official executive report and extended highlights preserve that conference record.",
        ],
      },
      {
        heading: "The return to Addis Ababa",
        body: [
          "YMAU VI brings the conference to the city that hosts the African Union headquarters. The setting is not decorative: it places delegates close to the institutions their committee work seeks to understand.",
        ],
      },
    ],
    action: { label: "Explore the YMAU V record", href: "/recap" },
  },
  "secretary-general": {
    number: "02",
    eyebrow: "Leadership",
    title: "Abyssinia Haile",
    intro: "Secretary-General, Yale Model African Union VI",
    portraitPending: true,
    status: "Official portrait forthcoming",
    sections: [
      {
        heading: "Returning to Addis",
        body: [
          "Abyssinia is a junior at Yale University studying Global Affairs, with a focus on African studies and the study of genocide in Africa. Born in Addis Ababa and now based in the greater Boston area, she brings her Habesha roots into her leadership of YMAU VI.",
        ],
      },
      {
        heading: "Built from the inside",
        body: [
          "Her path through YMAU began as Under-Secretary-General of Branding and Marketing. She later served as Director-General of Internal Operations for YMAU V, working across logistics, sponsorships and communications.",
          "She now directs strategy and execution alongside a fourteen-member Secretariat.",
        ],
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
    portraitPending: true,
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
      },
    ],
  },
  ambassadors: {
    number: "04",
    eyebrow: "Across borders",
    title: "Ninety-seven student leaders. More than fifteen countries.",
    intro: "One mission: bringing YMAU VI to campuses and communities across the world.",
    status: "Ambassador directory forthcoming",
    portraitPending: true,
    sections: [
      {
        heading: "A continental network",
        body: [
          "The YMAU Ambassador Program extends the conference beyond New Haven. Ambassadors connect prospective delegates to YMAU, organize local outreach and carry the conference’s mission into their own institutions.",
        ],
        note: "Names, countries, institutions and portraits will be added when the directory is finalized.",
      },
    ],
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
    sections: [
      {
        heading: "The premise",
        body: [
          "YMAU VI asks delegates to begin with a simple proposition: Africa’s future should be articulated, negotiated and measured by the people who will live it.",
          "The theme invites committee rooms to move beyond imported definitions of progress and toward policy grounded in continental priorities, local knowledge and institutional confidence.",
        ],
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
    sections: [
      {
        heading: "The challenge",
        body: [
          "Participants will respond to a defined African Union policy mandate by developing an actionable, locally grounded proposal. The exercise is designed to make implementation—not presentation alone—the measure of a strong idea.",
        ],
      },
      {
        heading: "What the brief will include",
        items: ["The policy mandate", "Team and eligibility rules", "Submission format", "Judging criteria", "Presentation schedule"],
        note: "No application or deadline is being presented as final until the programme team releases the official brief.",
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
    sections: [
      {
        heading: "The preparation arc",
        items: ["African Union institutions", "Researching a member-state position", "Negotiation and resolution writing", "Committee procedure", "Travel and delegate readiness"],
      },
      {
        heading: "Access",
        body: [
          "Dates, speakers, registration links and recordings will live on this page as they are confirmed. Registered delegates will also receive the required preparation sequence directly.",
        ],
      },
    ],
    action: { label: "Review delegate preparation", href: "/committee-preparation" },
  },
  committees: {
    number: "06",
    eyebrow: "Committee work",
    title: "A continental agenda, being shaped with care.",
    intro: "The YMAU VI committee list and agendas are in development.",
    status: "Final committee slate forthcoming",
    sections: [
      {
        heading: "What committees do",
        body: [
          "Each committee asks delegates to represent a member state or stakeholder, work within a specific African Union mandate and negotiate a written resolution with their peers.",
          "Background guides, experience levels and portfolio allocations will be published only after the final slate is confirmed.",
        ],
      },
      {
        heading: "What will be released",
        items: ["Committee names and mandates", "Agenda topics", "Delegate experience levels", "Background guides", "Portfolio allocations"],
      },
    ],
    action: { label: "Questions for programming", href: "mailto:programs@yalemodelau.org" },
  },
  "committee-preparation": {
    number: "06.2",
    eyebrow: "Delegate preparation",
    title: "Preparation is where representation begins.",
    intro: "A concise path from assignment to opening statement.",
    status: "Final materials forthcoming",
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
    sections: [
      {
        heading: "Eligibility",
        items: ["16–25 years of age", "Enrolled in high school or university", "A demonstrated interest in diplomacy or African affairs"],
      },
      {
        heading: "Fee framework",
        items: ["Early registration — USD 100", "Regular registration — USD 125", "Late registration — USD 150"],
        note: "The dates attached to each registration window will be released separately. Travel and accommodation are not included unless explicitly stated in the final registration pack.",
      },
      {
        heading: "What comes next",
        body: ["The delegate pack will include application steps, payment instructions, travel guidance and the timeline for financial-aid decisions."],
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
    sections: [
      {
        heading: "A record of support",
        items: ["80% of delegates received financial aid at YMAU V", "More than USD 60,000 awarded to students over the last five years"],
      },
      {
        heading: "How decisions work",
        body: ["Application requirements, eligible costs and decision windows will be published with registration. Any response deadlines will be stated relative to the date on your individual decision notice."],
      },
    ],
    action: { label: "Ask about financial aid", href: "mailto:operations@yalemodelau.org" },
  },
  faq: {
    number: "08.2",
    eyebrow: "Frequently asked questions",
    title: "The practical answers, in one place.",
    intro: "This page will grow as registration, travel and committee details are confirmed.",
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
    sections: [
      {
        heading: "Before booking",
        body: ["Delegates should wait for their individual confirmation and the official travel guidance before making non-refundable arrangements."],
      },
      {
        heading: "The guide will cover",
        items: ["Visa and entry guidance", "Arrival airport and transfers", "Accommodation options", "Local transport", "Health and travel insurance", "Emergency contacts"],
      },
      {
        heading: "A changing requirement",
        body: ["Entry and health requirements can change. The published guide will identify authoritative sources and a date of last review rather than treating travel information as permanent."],
      },
    ],
    action: { label: "Meet the host city", href: "/addis-ababa" },
  },
  "addis-ababa": {
    number: "09",
    eyebrow: "The host city",
    title: "Welcome to Africa’s diplomatic capital.",
    intro: "Addis Ababa is both the political heart of modern Ethiopia and a centre of continental diplomacy.",
    sections: [
      {
        heading: "A city of institutions",
        body: ["Addis Ababa is home to the headquarters of the African Union and the United Nations Economic Commission for Africa."],
      },
      {
        heading: "At a glance",
        items: ["Elevation — approximately 2,355 metres", "Primary working language — Amharic", "Currency — Ethiopian birr", "Time zone — East Africa Time (UTC+3)"],
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
    sections: [
      {
        heading: "Language for the journey",
        items: ["ሰላም — sälam — hello", "አመሰግናለሁ — ameseginalehu — thank you", "አዲስ አበባ — Addis Ababa — new flower"],
      },
      {
        heading: "Institutions and culture",
        body: ["The final guide will connect the African Union headquarters and the city’s diplomatic role with museums, coffee culture, food and neighbourhoods delegates can experience responsibly."],
      },
      {
        heading: "Practical layer",
        items: ["Arrival and transport", "Currency and payments", "Altitude and weather", "Connectivity", "Delegate safety", "Conference-area recommendations"],
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
    sections: [
      {
        heading: "African Union Commission",
        body: ["The Youth Division advances youth participation, leadership and development within the African Union Commission’s Women, Gender and Youth Directorate."],
      },
      {
        heading: "Past sponsors and partners",
        body: ["The complete historical partner wall will be rebuilt from approved logo assets and the YMAU V executive report."],
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
        items: ["350+ delegates", "30+ nationalities", "80% received financial aid", "22 workshop and panel speakers"],
      },
      {
        heading: "Executive report",
        body: ["Read the official YMAU V report for the full programme, outcomes, partner acknowledgements and conference record."],
      },
      {
        heading: "Extended highlights",
        body: ["The official recap film will be embedded here from the YMAU media archive."],
        note: "Video presentation is being prepared for the redesigned site.",
      },
    ],
    action: { label: "Open the YMAU V executive report", href: "https://drive.google.com/file/d/10mxwms6_x02wp_m6zC-PHHUu795KrEEu/view" },
  },
  contact: {
    number: "12",
    eyebrow: "Contact",
    title: "Speak with the right YMAU team.",
    intro: "Use the address that best matches your question so the Secretariat can respond efficiently.",
    sections: [
      {
        heading: "Conference and registration",
        body: ["programs@yalemodelau.org"],
      },
      {
        heading: "Operations, finance and partnerships",
        body: ["operations@yalemodelau.org"],
      },
      {
        heading: "Office of the Secretary-General",
        body: ["president@yalemodelau.org"],
      },
    ],
    action: { label: "Email the Secretary-General", href: "mailto:president@yalemodelau.org" },
  },
};

export const informationPageSlugs = Object.keys(informationPages);
