import Image from "next/image";
import { secretaryGeneralLetter, secretaryGeneralSignatureSrc } from "../public-directory";

export function SignedLetter({
  quote = false,
  compact = false,
  className = "",
}: {
  quote?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const letter = secretaryGeneralLetter;
  const paragraphs = compact
    ? [letter.paragraphs[0], letter.paragraphs[5]]
    : letter.paragraphs;

  return (
    <div className={["signed-letter", className].filter(Boolean).join(" ")}>
      <p className="signed-letter__salutation">{letter.salutation}</p>
      {quote && <blockquote>{letter.quote}</blockquote>}
      {paragraphs.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
      <p className="signed-letter__closing">{letter.closing}</p>
      <Image
        className="signed-letter__mark"
        src={secretaryGeneralSignatureSrc}
        alt="Handwritten signature of Abyssinia Haile"
        width={766}
        height={403}
      />
      <div className="signed-letter__name">
        <strong>Abyssinia Haile</strong>
        <span>Secretary-General</span>
        <span>Yale Model African Union VI</span>
      </div>
    </div>
  );
}
