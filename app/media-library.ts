export type MediaAsset = {
  src: string;
  alt: string;
  context: string;
  credit: string;
  creditHref?: string;
  position?: string;
};

const ymauVArchiveCredit = "Official YMAU V media archive";

/**
 * The approved, reusable editorial-image catalogue.
 *
 * Components consume the route plans below instead of repeating paths and
 * credits. This keeps alt text, provenance, cropping and page assignments in
 * one reviewable place as the client archive grows.
 */
export const mediaLibrary = {
  addisBusinessDistrict: {
    src: "/ymau-media/city/addis-business-district.jpg",
    alt: "Traffic and pedestrians moving through a modern Addis Ababa business district at dusk",
    context: "Addis in motion · Ethiopia",
    credit: "Pexels contributor",
    creditHref: "https://www.pexels.com/photo/dynamic-evening-in-addis-ababa-business-district-36224357/",
    position: "50% 55%",
  },
  addisMarket: {
    src: "/ymau-media/city/addis-market.jpg",
    alt: "Fruit vendors and customers on a busy Addis Ababa market street",
    context: "Market life · Addis Ababa",
    credit: "Pexels contributor",
    creditHref: "https://www.pexels.com/photo/people-selling-fresh-food-at-the-market-25391223/",
    position: "50% 48%",
  },
  addisCathedral: {
    src: "/ymau-media/city/addis-cathedral.jpg",
    alt: "Ethiopian Orthodox worshippers walking outside a historic cathedral in Addis Ababa",
    context: "Faith in the city · Addis Ababa",
    credit: "Pexels contributor",
    creditHref: "https://www.pexels.com/photo/people-walking-in-front-of-brown-concrete-building-6742986/",
    position: "50% 52%",
  },
  medhaneAlem: {
    src: "/ymau-media/city/medhane-alem.jpg",
    alt: "Medhane Alem Cathedral rising above trees and buildings in Addis Ababa",
    context: "Medhane Alem Cathedral · Addis Ababa",
    credit: "Pexels contributor",
    creditHref: "https://www.pexels.com/photo/photo-of-a-cityscape-with-medhane-alem-cathedral-in-addis-ababa-ethiopia-12109950/",
    position: "50% 46%",
  },
  coffeeCeremony: {
    src: "/ymau-media/city/coffee-ceremony.jpg",
    alt: "A woman in traditional Ethiopian clothing pouring coffee from a clay jebena",
    context: "Buna · Ethiopian coffee ceremony",
    credit: "Pexels contributor",
    creditHref: "https://www.pexels.com/photo/traditional-ethiopian-coffee-ceremony-scene-38519871/",
    position: "50% 42%",
  },
  addisBlueHour: {
    src: "/ymau-media/city/addis-blue-hour.jpg",
    alt: "Addis Ababa streets and modern buildings during the blue hour",
    context: "Blue hour · Addis Ababa",
    credit: "Pexels contributor",
    creditHref: "https://www.pexels.com/photo/vibrant-evening-cityscape-of-addis-ababa-36224349/",
    position: "50% 52%",
  },
  addisTraditionalMarket: {
    src: "/ymau-media/city/addis-traditional-market.jpg",
    alt: "People in traditional Ethiopian clothing gathering at a neighbourhood market in Addis Ababa",
    context: "A city of exchange · Addis Ababa",
    credit: "Tsion Molla / Pexels",
    creditHref: "https://www.pexels.com/photo/traditional-market-scene-in-addis-ababa-ethiopia-36650839/",
    position: "50% 48%",
  },
  addisFlagCeremony: {
    src: "/ymau-media/city/addis-flag-ceremony.jpg",
    alt: "An Ethiopian ceremonial guard carrying the national flag at a cultural gathering in Addis Ababa",
    context: "Ceremony and civic identity · Addis Ababa",
    credit: "Gift Habeshaw / Pexels",
    creditHref: "https://www.pexels.com/photo/traditional-ceremony-in-addis-ababa-ethiopia-30289964/",
    position: "50% 48%",
  },
  archivePlenaryWomen: {
    src: "/ymau-media/archive/plenary-women.jpg",
    alt: "YMAU V delegates listening attentively during a plenary programme",
    context: "Learning together · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 44%",
  },
  archivePlenaryNotes: {
    src: "/ymau-media/archive/plenary-notes.jpg",
    alt: "A YMAU V delegate taking notes during a plenary session",
    context: "Preparation in practice · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 46%",
  },
  archivePlenaryPractitioners: {
    src: "/ymau-media/archive/plenary-practitioners.jpg",
    alt: "Practitioners and delegates gathered for a YMAU V plenary programme",
    context: "Practitioner exchange · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 48%",
  },
  archivePlenaryYouth: {
    src: "/ymau-media/archive/plenary-youth.jpg",
    alt: "Young YMAU V delegates seated together in the auditorium",
    context: "Delegates in the room · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 46%",
  },
  archiveAwardPositionPaper: {
    src: "/ymau-media/archive/award-position-paper.jpg",
    alt: "A YMAU V delegate receiving a best position paper award",
    context: "Research recognised · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 45%",
  },
  archiveAwardDelegation: {
    src: "/ymau-media/archive/award-delegation.jpg",
    alt: "A YMAU V delegation receiving an award on stage",
    context: "Delegation achievement · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 43%",
  },
  archiveAwardHandshake: {
    src: "/ymau-media/archive/award-handshake.jpg",
    alt: "YMAU V participants exchanging a congratulatory handshake on stage",
    context: "Recognition and community · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 48%",
  },
  archiveStageRecognition: {
    src: "/ymau-media/editorial/ymau-v-stage-recognition.webp",
    alt: "YMAU V student leaders presenting recognition on the conference stage",
    context: "Institutional recognition · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 45%",
  },
  everydayAddis: {
    src: "/ymau-media/editorial/everyday-addis.jpg",
    alt: "A young man carrying sugarcane between palms in Addis Ababa",
    context: "Everyday Addis Ababa · Ethiopia",
    credit: "Gift Habeshaw / Pexels",
    creditHref: "https://www.pexels.com/photo/young-man-carrying-sugarcane-in-addis-ababa-30659415/",
    position: "50% 50%",
  },
  addisOrthodoxCelebration: {
    src: "/ymau-media/editorial/addis-orthodox-celebration.jpg",
    alt: "Young Ethiopians in white traditional clothing during an Orthodox celebration in Addis Ababa",
    context: "Addis Ababa · Ethiopia",
    credit: "Gift Habeshaw / Pexels",
    creditHref: "https://www.pexels.com/photo/people-in-traditional-clothes-during-orthodox-ceremony-in-ethiopia-30327228/",
    position: "50% 45%",
  },
  addisStudentStreet: {
    src: "/ymau-media/editorial/addis-student-street.jpg",
    alt: "A student walking past a colourful streetside dwelling in Addis Ababa",
    context: "Everyday Addis Ababa · Ethiopia",
    credit: "Tsion Molla / Pexels",
    creditHref: "https://www.pexels.com/photo/urban-life-in-addis-ababa-with-colorful-scene-36650842/",
    position: "50% 50%",
  },
  ethiopianYouthTradition: {
    src: "/ymau-media/editorial/ethiopian-youth-tradition.jpg",
    alt: "Young Ethiopian worshippers wearing white traditional clothing",
    context: "Faith and tradition · Ethiopia",
    credit: "Gift Habeshaw / Pexels",
    creditHref: "https://www.pexels.com/photo/people-in-traditional-clothes-during-orthodox-ceremony-in-ethiopia-30327228/",
    position: "50% 42%",
  },
  addisNightSkyline: {
    src: "/ymau-media/editorial/addis-night-skyline.jpg",
    alt: "Addis Ababa illuminated at night beneath the Entoto hills",
    context: "Addis Ababa after dark · Ethiopia",
    credit: "Abenezer Shewaga / Unsplash",
    creditHref: "https://unsplash.com/photos/WMB-Fb5LHeg",
    position: "50% 58%",
  },
  delegateSpeaking: {
    src: "/ymau-media/editorial/ymau-v-delegate-speaking.webp",
    alt: "A YMAU V delegate speaking during a committee session in Accra",
    context: "A delegate takes the floor · YMAU V",
    credit: ymauVArchiveCredit,
    position: "34% 46%",
  },
  delegateRecognition: {
    src: "/ymau-media/editorial/ymau-v-delegate-recognition.webp",
    alt: "A YMAU V committee award recipient standing with conference leaders",
    context: "Committee achievement · YMAU V",
    credit: ymauVArchiveCredit,
    position: "48% 46%",
  },
  outstandingDiplomat: {
    src: "/ymau-media/editorial/ymau-v-recognition.webp",
    alt: "A YMAU V delegate holding her Outstanding Diplomat certificate with two conference leaders",
    context: "Recognising student diplomacy · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 48%",
  },
  committeeDelegateAward: {
    src: "/ymau-media/editorial/committee-delegate-award.jpg",
    alt: "A YMAU V delegate receiving recognition during the conference programme",
    context: "Delegates recognised · YMAU V",
    credit: "Fred Sebowa / Official YMAU V media archive",
    position: "50% 48%",
  },
  themePractitionerForum: {
    src: "/ymau-media/editorial/theme-practitioner-forum.jpg",
    alt: "African policy practitioners and student leaders speaking together on the YMAU V stage",
    context: "From vision to public practice · YMAU V",
    credit: "Fred Sebowa / Official YMAU V media archive",
    position: "50% 52%",
  },
  registrationInformationPack: {
    src: "/ymau-media/editorial/registration-information-pack.jpg",
    alt: "A YMAU V delegate reviewing the printed conference and committee information pack",
    context: "Preparing for the conference · YMAU V",
    credit: "Fred Sebowa / Official YMAU V media archive",
    position: "50% 62%",
  },
  registrationDelegateDiscussion: {
    src: "/ymau-media/editorial/registration-delegate-discussion.jpg",
    alt: "YMAU V delegates in focused discussion during a committee session",
    context: "From registration to the committee room · YMAU V",
    credit: "Fred Sebowa / Official YMAU V media archive",
    position: "50% 46%",
  },
  addisCommunityGathering: {
    src: "/ymau-media/city/addis-community-gathering.jpg",
    alt: "A large public gathering in Addis Ababa with the city skyline and Entoto hills beyond",
    context: "A city gathered · Addis Ababa",
    credit: "Gift Habeshaw / Unsplash",
    creditHref: "https://unsplash.com/photos/6cjlkCwKdhM",
    position: "50% 55%",
  },
  auditorium: {
    src: "/ymau-media/editorial/ymau-v-auditorium.jpg",
    alt: "Hundreds of YMAU V delegates listening to a plenary speaker in Accra",
    context: "Opening plenary · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 52%",
  },
  delegateCommunity: {
    src: "/ymau-media/editorial/ymau-v-delegate-community.jpg",
    alt: "A large group of YMAU V delegates gathered after the awards programme",
    context: "Delegates across the fifth edition · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 48%",
  },
  secretariatLeadershipWorkshop: {
    src: "/ymau-media/editorial/secretariat-leadership-workshop.jpg",
    alt: "YMAU V participants working together during a leadership-training session",
    context: "Leadership in practice · YMAU V",
    credit: "Fred Sebowa / Official YMAU V media archive",
    position: "50% 48%",
  },
  secretariatWorkingSession: {
    src: "/ymau-media/editorial/secretariat-working-session.jpg",
    alt: "YMAU V delegates standing and exchanging arguments during an active committee working session",
    context: "Leadership through exchange · YMAU V",
    credit: "Fred Sebowa / Official YMAU V media archive",
    position: "50% 48%",
  },
  practitionerAudience: {
    src: "/ymau-media/editorial/ymau-v-practitioner-panel.jpg",
    alt: "YMAU V delegates listening during a practitioner programme in the auditorium",
    context: "Practitioner programme · YMAU V",
    credit: ymauVArchiveCredit,
    position: "50% 50%",
  },
  founderOrnella: {
    src: "/ymau-media/founder-ornella.webp",
    alt: "Portrait of YMAU co-founder Ornella Bayigamba",
    context: "Ornella Bayigamba · Co-founder",
    credit: "Official YMAU institutional archive",
    position: "50% 36%",
  },
  founderRichard: {
    src: "/ymau-media/founder-richard.webp",
    alt: "Portrait of YMAU co-founder Richard Mbouombouo",
    context: "Richard Mbouombouo · Co-founder",
    credit: "Official YMAU institutional archive",
    position: "50% 34%",
  },
  founderFrancesca: {
    src: "/ymau-media/founder-francesca.webp",
    alt: "Portrait of YMAU inaugural president Francesca Nyakora",
    context: "Francesca Nyakora · Inaugural President",
    credit: "Official YMAU institutional archive",
    position: "50% 34%",
  },
} as const satisfies Record<string, MediaAsset>;

function defineRouteMediaPlan<const T extends Record<string, readonly MediaAsset[]>>(plan: T): T {
  const assignedSource = new Map<string, string>();

  for (const [route, assets] of Object.entries(plan)) {
    for (const asset of assets) {
      const existingRoute = assignedSource.get(asset.src);
      if (existingRoute) {
        throw new Error(`Editorial media ${asset.src} is assigned to both ${existingRoute} and ${route}.`);
      }
      assignedSource.set(asset.src, route);
    }
  }

  return plan;
}

/** One page plan can never silently inherit another page's photo sequence. */
export const routeEditorialMedia = defineRouteMediaPlan({
  about: [mediaLibrary.everydayAddis, mediaLibrary.addisFlagCeremony, mediaLibrary.addisCommunityGathering],
  history: [mediaLibrary.auditorium],
  founders: [mediaLibrary.founderOrnella, mediaLibrary.founderRichard, mediaLibrary.founderFrancesca],
  secretaryGeneral: [mediaLibrary.archivePlenaryWomen, mediaLibrary.practitionerAudience],
  secretariat: [mediaLibrary.secretariatWorkingSession, mediaLibrary.secretariatLeadershipWorkshop],
  ambassadors: [mediaLibrary.delegateCommunity, mediaLibrary.archiveAwardDelegation],
  careers: [mediaLibrary.outstandingDiplomat, mediaLibrary.archiveAwardHandshake],
  theme: [mediaLibrary.archivePlenaryPractitioners, mediaLibrary.themePractitionerForum],
  mandateToMarket: [mediaLibrary.archiveAwardPositionPaper],
  preConference: [mediaLibrary.archivePlenaryNotes],
  committees: [mediaLibrary.delegateSpeaking, mediaLibrary.delegateRecognition, mediaLibrary.committeeDelegateAward],
  registration: [mediaLibrary.registrationDelegateDiscussion, mediaLibrary.registrationInformationPack],
  financialAid: [mediaLibrary.archivePlenaryYouth],
  travelGuide: [mediaLibrary.addisOrthodoxCelebration, mediaLibrary.addisBusinessDistrict],
  addisAbaba: [mediaLibrary.addisNightSkyline, mediaLibrary.addisMarket, mediaLibrary.medhaneAlem],
  cityGuide: [mediaLibrary.addisTraditionalMarket, mediaLibrary.coffeeCeremony, mediaLibrary.addisCathedral, mediaLibrary.addisBlueHour],
  partners: [mediaLibrary.archiveStageRecognition],
} as const);
