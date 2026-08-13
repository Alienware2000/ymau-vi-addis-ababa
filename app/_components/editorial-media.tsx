import Image from "next/image";
import { EDITORIAL_IMAGE_PLACEHOLDER } from "../image-delivery";
import type { MediaAsset } from "../media-library";
import type { CulturalTermKey } from "../cultural-lexicon";
import { CulturalAnnotation } from "./cultural-annotation";

export function EditorialMedia({
  asset,
  className = "",
  sizes = "(max-width: 760px) 100vw, 50vw",
  preload = false,
  annotation,
}: {
  asset: MediaAsset;
  className?: string;
  sizes?: string;
  preload?: boolean;
  annotation?: CulturalTermKey;
}) {
  return (
    <figure className={["editorial-media", className].filter(Boolean).join(" ")}>
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        quality={90}
        preload={preload}
        placeholder="blur"
        blurDataURL={EDITORIAL_IMAGE_PLACEHOLDER}
        style={{ objectPosition: asset.position ?? "50% 50%" }}
      />
      {annotation && (
        <div className="editorial-media__annotation">
          <CulturalAnnotation term={annotation} variant="image" tone="light" />
        </div>
      )}
      <figcaption>
        <span>{asset.context}</span>
        {asset.creditHref ? (
          <a href={asset.creditHref} target="_blank" rel="noreferrer">{asset.credit}</a>
        ) : <span>{asset.credit}</span>}
      </figcaption>
    </figure>
  );
}
