# Hero film source register

This register separates visual references from production masters. A screenshot or streamed video may establish composition, but it is never treated as usable footage.

## Client creative references — not production sources

- [Top 10 Places To Visit in Ethiopia — Travel Guide](https://youtu.be/qrRQKW2-HRY): Danakil camels around 03:20, Gheralta around 05:00 and Lalibela around 08:00. These timestamps define the requested subjects and pacing only.
- [Stunning Night Views of Addis Ababa — A City Alive Under the Stars](https://youtu.be/kFXH9TeRZJA): reference for genuinely moving Addis night footage, particularly views where the Commercial Bank of Ethiopia Headquarters tower is legible.
- **Rights rule:** neither stream may be downloaded, transcoded or shipped as website media without an explicit commercial license and native production master from the rights holder.

## Selected production candidates

### 01 — Ethiopian highlands

- **Purpose:** opening and loop closure.
- **Source:** [Santhosh Peddi — Lush forest and mountain scenery](https://www.pexels.com/video/lush-forest-and-mountain-scenery-35814373/).
- **Status:** approved; original 4096×2160 master is retained locally.
- **Reason:** it preserves the green, quiet character clients already liked and gives white hero typography a natural, textured ground.

### 02 — Danakil salt caravan

- **Purpose:** warm lateral movement and a specific Afar sense of place.
- **Preferred candidate:** **“Camel Caravan In Dalloll, Walking On The Salt Lake”** by Videocrack, surfaced in [Pond5's 4K-filtered desert caravan results](https://www.pond5.com/search?kw=desert-camel-caravan&media=footage&pp=44&resolutions=4K).
- **Status:** purchase and exact item confirmation required.
- **Acceptance test:** native UHD master, commercial web license, no watermark or baked-in title, and at least 5 seconds of uninterrupted lateral caravan movement.
- **Fallback:** [Aerial view above camel caravan in the Afar/Dallol desert](https://www.pond5.com/stock-footage/item/142626438-aerial-view-above-camel-caravan-afar-people-dallol-desert-et), 4096×2160. This is authentic but less intimate, so it is not the first editorial choice.

### 03 — Gheralta / Abuna Yemata

- **Purpose:** a human figure held against the monumental rock landscape.
- **Preferred candidate:** [Abuna Yemata Church, rock churches, Tigray region, Ethiopia](https://www.world-footage.com/product/abuna-yemata-church-rock-churches-tigray-region-ethiopia-2/) by Yair Palti, 3840×2160.
- **Status:** purchase required.
- **Acceptance test:** a commercially licensed UHD master containing a calm, human-scale passage; the subject must remain legible in the mobile crop without turning the shot into a close-up.
- **Rejected as primary:** marketplace files labelled “4K” whose published dimensions are only 2720×1530.

### 04 — Lalibela

- **Purpose:** a quiet architectural passage between the mountain landscape and the capital.
- **Preferred search:** [Pond5 Lalibela footage](https://www.pond5.com/stock-footage/tag/lalibela/), filtered to a commercially licensable native-UHD master.
- **Status:** exact item selection and purchase required.
- **Acceptance test:** calm moving footage of the rock-hewn churches, no watermark or baked-in title, at least 4 seconds of usable motion, and a crop that remains legible in 9:16.

### 05 — Addis Ababa at night

- **Purpose:** resolve the landscape journey in the conference's host city.
- **Preferred search:** [Pond5 Addis Ababa night footage](https://www.pond5.com/stock-footage/tag/addis-ababa-night/), prioritizing native-UHD moving footage where the CBE Headquarters tower is visible.
- **Status:** purchase required.
- **Acceptance test:** recognizable Addis Ababa skyline, visible CBE Headquarters tower, restrained real movement, commercial web license and a native UHD master. A static photograph with a digital zoom does not qualify.
- **Free reference/fallback:** [Gift Habeshaw — Addis Abeba](https://www.pexels.com/video/addis-abeba-26436247/), authentic but 1920×1080; it may be used for timing tests, not the strict 4K master.

## Rights gate

The build script refuses to render a production delivery when a source is unlicensed, missing, too short or below the declared native-resolution minimum. Original masters live in the ignored `.hero-film-sources/` directory; receipts and marketplace license records should be retained in the client's asset archive.
