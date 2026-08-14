# YMAU VI homepage hero film

## Creative direction

The film should feel like an invitation into Ethiopia, not a highlights reel. Its motion begins in the green visual world that clients already approved, moves through the Afar salt route, holds a person against the scale of Gheralta before opening into the wider mountains, arrives in Addis Ababa after dark, and returns to green so the loop feels composed rather than restarted.

The finished loop is approximately 28 seconds after dissolves. Each shot has time to register. Dissolves are short enough to retain momentum and long enough to connect the changes in colour and geography.

| Movement | Runtime in edit | Image rule | Narrative role |
| --- | ---: | --- | --- |
| Ethiopian highlands | 4.8 s | Slow green aerial; atmospheric depth | Establish calm and preserve the prototype's strongest visual equity |
| Danakil salt caravan | 6.5 s | Camels move laterally across reflective salt; wide composition | Introduce movement, trade and the Afar landscape without turning the film into spectacle |
| Gheralta — human scale | 5.5 s | Preserve the solitary figure on the ledge from the reference edit | Express human scale, history and spiritual geography |
| Gheralta — landscape | 4.7 s | Continue into a wider, moving view of the mountains | Let the geography expand before the film enters the capital |
| Addis at night | 6.0 s | Authentic moving city footage with the CBE Headquarters tower legible; no static still or hyperactive traffic montage | Land the journey in the diplomatic capital |
| Ethiopian highlands | 4.0 s | Related green aerial with compatible movement | Close the colour arc and disguise the loop point |

An African Union headquarters shot may be tested as a two-to-three-second bridge between Gheralta and Addis. It is optional, must come from a licensed 4K master, and stays out if it makes the sequence feel like a checklist.

## Editorial rules

- Use authentic, attributable Ethiopian footage only.
- Aby's three YouTube links are timestamped visual references, never source media: camels at approximately 03:20, Gheralta at 05:00, an optional African Union headquarters opening, and a moving Addis night view featuring the CBE Headquarters tower.
- Every production master must be licensed for commercial web use and at least 3840×2160.
- Avoid drone moves that accelerate, whip pans, faux-film effects, text baked into footage, watermarks and over-saturated travel-video grading.
- Preserve skin tones and natural landscape colour. The site's navy overlay should create text contrast; the footage should not be crushed before delivery.
- The silent website loop carries no music. A separately opened full film may have an approved soundtrack later.
- Desktop and mobile are cropped from the same approved edit using shot-specific focal points in `config/hero-film.json`.
- Do not upscale the current YouTube-derived proof shots. Replace them with creator-supplied or commercially licensed masters.

## Delivery set

- 4K 10-bit ProRes archive master.
- 1920×1080 high-quality H.264 desktop web delivery.
- 1080×1920 high-quality H.264 mobile delivery with intentional reframing.
- High-quality desktop poster frame.

Nothing is copied into `public/` automatically. The delivery must be reviewed before the existing homepage film is replaced.

## Build workflow

1. Put licensed masters in `.hero-film-sources/` using the filenames in `config/hero-film.json`.
2. Change each purchased source's `licenseStatus` to `approved` and retain its invoice or license reference.
3. Run `npm run hero:report` to inspect readiness.
4. Run `npm run hero:validate` to enforce provenance, duration and native-resolution requirements.
5. Run `npm run hero:build` to create review files in `outputs/hero-film/delivery/`.
6. Review desktop and mobile crops before any file is promoted to `public/`.
