export const culturalLexicon = {
  addisAbaba: {
    script: "አዲስ አበባ",
    transliteration: "Addis Abäba",
    meaning: "New flower",
    pronunciation: "ah-DEES ah-BEH-bah",
    note: "The Amharic name of the host city—a capital founded in the highlands and still read as a city becoming.",
  },
  selam: {
    script: "ሰላም",
    transliteration: "Selam",
    meaning: "Hello · peace",
    pronunciation: "seh-LAHM",
    note: "A greeting that also carries the meaning of peace.",
  },
  buna: {
    script: "ቡና",
    transliteration: "Buna",
    meaning: "Coffee",
    pronunciation: "BOO-nah",
    note: "In Ethiopia, coffee can be an invitation to hospitality, conversation and time shared.",
  },
  ameseginalehu: {
    script: "አመሰግናለሁ",
    transliteration: "Ameseginalehu",
    meaning: "Thank you",
    pronunciation: "ah-meh-seh-gee-NAH-leh-hoo",
    note: "A useful expression of thanks for hosts, drivers, colleagues and new friends.",
  },
  andinet: {
    script: "አንድነት",
    transliteration: "Andinet",
    meaning: "Unity",
    pronunciation: "ahn-dee-NET",
    note: "Here, unity means shared continental purpose—not sameness.",
  },
  lalibela: {
    script: "ላሊበላ",
    transliteration: "Lalibela",
    meaning: "Historic Ethiopian city",
    pronunciation: "lah-lee-BEH-lah",
    note: "Known for its medieval rock-hewn churches, Lalibela connects living faith, architecture and Ethiopian memory.",
  },
  ethiopia: {
    script: "ኢትዮጵያ",
    transliteration: "Ityop'iya",
    meaning: "Ethiopia",
    pronunciation: "ee-tyoh-PEE-yah",
    note: "The host country of YMAU VI and home of the African Union headquarters.",
  },
  melkamGuzo: {
    script: "መልካም ጉዞ",
    transliteration: "Melkam guzo",
    meaning: "Have a good journey",
    pronunciation: "mel-KAHM goo-ZOH",
    note: "A fitting wish for delegates travelling to Addis Ababa.",
  },
  amharic: {
    script: "አማርኛ",
    transliteration: "Amarəñña",
    meaning: "Amharic",
    pronunciation: "ah-mah-REEN-yah",
    note: "One of Ethiopia’s federal working languages and a language widely heard across Addis Ababa.",
  },
} as const;

export type CulturalTermKey = keyof typeof culturalLexicon;
export type CulturalTerm = (typeof culturalLexicon)[CulturalTermKey];
