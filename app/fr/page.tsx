import type { Metadata } from "next";
import { LanguageLanding } from "../_components/language-landing";

export const metadata: Metadata = {
  title: "Yale Model Union africaine VI — Addis-Abeba 2027",
  description: "YMAU VI se tiendra à Addis-Abeba, en Éthiopie, du 15 au 17 mars 2027.",
};

export default function FrenchHome() {
  return <LanguageLanding data={{
    locale: "fr",
    edition: "Sixième édition",
    title: "Yale Model Union africaine VI",
    location: "Addis-Abeba, Éthiopie",
    date: "15—17 mars 2027",
    belief: "La prochaine génération de dirigeants africains n’attendra pas qu’on lui donne une place à la table — elle construira la table.",
    theme: "Notre vision, notre victoire",
    themeBody: "YMAU VI invite les délégués à définir la réussite africaine selon les réalités, les valeurs et les ambitions du continent.",
    aboutTitle: "La diplomatie en pratique",
    aboutBody: "YMAU réunit des jeunes pour débattre, négocier et rédiger des politiques sur les enjeux qui façonnent l’avenir de l’Afrique.",
    programmeTitle: "Trois jours à Addis-Abeba",
    programmeBody: "Simulations de comités, panels, ateliers et échanges culturels formeront le cœur de la conférence.",
    registrationTitle: "Participer à YMAU VI",
    registrationBody: "Les inscriptions devraient ouvrir fin septembre. Le calendrier définitif sera publié dès sa confirmation.",
    homeLabel: "Consulter l’édition anglaise",
    reviewNote: "Traduction éditoriale provisoire — relecture francophone avant publication finale.",
  }} />;
}
