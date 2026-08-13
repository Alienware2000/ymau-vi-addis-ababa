from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SIZE = (1640, 923)
INK = (1, 19, 43)
CREAM = (245, 239, 225)
GOLD = (211, 162, 74)
RED = (118, 17, 27)


def fit_cover(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    scale = max(size[0] / image.width, size[1] / image.height)
    resized = image.resize((round(image.width * scale), round(image.height * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - size[0]) // 2
    top = (resized.height - size[1]) // 2
    return resized.crop((left, top, left + size[0], top + size[1]))


skyline = Image.open(ROOT / "public/ymau-media/addis-night-social.jpg").convert("RGB")
skyline = fit_cover(skyline, SIZE)
skyline = ImageEnhance.Color(skyline).enhance(0.9)
skyline = ImageEnhance.Contrast(skyline).enhance(1.06)

navy = Image.new("RGB", SIZE, INK)
card = Image.blend(skyline, navy, 0.34).convert("RGBA")

veil = Image.new("RGBA", SIZE, (0, 0, 0, 0))
veil_pixels = veil.load()
for y in range(SIZE[1]):
    top_weight = 1 - (y / SIZE[1])
    alpha = round(65 + 105 * top_weight)
    for x in range(SIZE[0]):
        side_weight = min(abs(x - SIZE[0] / 2) / (SIZE[0] / 2), 1)
        veil_pixels[x, y] = (*INK, min(225, alpha + round(26 * side_weight)))
card.alpha_composite(veil)

# A very light softness keeps small photographic detail from fighting the mark.
soft = card.filter(ImageFilter.GaussianBlur(0.35))
card = Image.blend(card, soft, 0.18)

draw = ImageDraw.Draw(card)
draw.line((118, 102, SIZE[0] - 118, 102), fill=(245, 239, 225, 105), width=1)
draw.line((118, SIZE[1] - 96, SIZE[0] - 118, SIZE[1] - 96), fill=(245, 239, 225, 90), width=1)

wordmark = Image.open(ROOT / "public/ymau-wordmark-white.png").convert("RGBA")
target_width = 1110
wordmark = wordmark.resize((target_width, round(wordmark.height * target_width / wordmark.width)), Image.Resampling.LANCZOS)
mark_x = (SIZE[0] - wordmark.width) // 2
mark_y = 250
card.alpha_composite(wordmark, (mark_x, mark_y))

date_font = ImageFont.truetype("/System/Library/Fonts/Avenir Next.ttc", 34, index=2)
label_font = ImageFont.truetype("/System/Library/Fonts/Avenir Next.ttc", 18, index=5)

draw = ImageDraw.Draw(card)
rule_y = mark_y + wordmark.height + 64
draw.line((355, rule_y, SIZE[0] - 355, rule_y), fill=RED, width=4)

date = "ADDIS ABABA  ·  15–17 MARCH 2027"
date_box = draw.textbbox((0, 0), date, font=date_font)
date_width = date_box[2] - date_box[0]
draw.text(((SIZE[0] - date_width) / 2, rule_y + 32), date, font=date_font, fill=CREAM)

edition = "SIXTH EDITION  ·  YALE MODEL AFRICAN UNION"
edition_box = draw.textbbox((0, 0), edition, font=label_font)
edition_width = edition_box[2] - edition_box[0]
draw.text(((SIZE[0] - edition_width) / 2, 132), edition, font=label_font, fill=GOLD)

card.convert("RGB").save(ROOT / "public/social-preview-ymau-vi.png", optimize=True)
