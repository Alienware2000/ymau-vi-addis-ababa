import type { Metadata } from "next";
import { LanguageLanding } from "../_components/language-landing";

export const metadata: Metadata = {
  title: "ያሌ ሞዴል አፍሪካ ህብረት VI — አዲስ አበባ 2027",
  description: "YMAU VI ከማርች 15–17 2027 በአዲስ አበባ፣ ኢትዮጵያ ይካሄዳል።",
};

export default function AmharicHome() {
  return <LanguageLanding data={{
    locale: "am",
    edition: "ስድስተኛ ዙር",
    title: "ያሌ ሞዴል አፍሪካ ህብረት VI",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    date: "15—17 ማርች 2027",
    belief: "ቀጣዩ የአፍሪካ መሪዎች ትውልድ በጠረጴዛው ዙሪያ ቦታ እስኪሰጠው አይጠብቅም — ጠረጴዛውን ይሠራል።",
    theme: "ራዕያችን፣ ድላችን",
    themeBody: "YMAU VI ተሳታፊዎች የአፍሪካን ስኬት በአህጉሪቱ እውነታ፣ እሴትና ምኞት መሠረት እንዲገልጹ ይጋብዛል።",
    aboutTitle: "ዲፕሎማሲ በተግባር",
    aboutBody: "YMAU ወጣቶችን በማሰባሰብ በአፍሪካ የወደፊት ጉዳዮች ላይ እንዲወያዩ፣ እንዲደራደሩ እና ፖሊሲ እንዲያዘጋጁ ያስችላል።",
    programmeTitle: "ሦስት ቀናት በአዲስ አበባ",
    programmeBody: "የኮሚቴ ስምምነቶች፣ ውይይቶች፣ ዎርክሾፖች እና የባህል ልውውጦች የጉባኤው ዋና ክፍሎች ይሆናሉ።",
    registrationTitle: "በYMAU VI ይሳተፉ",
    registrationBody: "ምዝገባ በሴፕቴምበር መጨረሻ እንዲከፈት ታቅዷል። የመጨረሻው የጊዜ ሰሌዳ ከተረጋገጠ በኋላ ይፋ ይሆናል።",
    homeLabel: "የእንግሊዝኛውን ገጽ ይመልከቱ",
    reviewNote: "የአርትዖት የመጀመሪያ ትርጉም — ከመጨረሻ ህትመት በፊት በአማርኛ ባለሙያ ይገመገማል።",
  }} />;
}
