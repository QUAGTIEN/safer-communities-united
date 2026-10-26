# Sổ asset

Phân loại theo blueprint (TXT:13-14): **(A)** bản đồ/minh họa độc lập dùng trực tiếp, **(R)** ảnh tham chiếu layout (không dùng làm trang), **(P)** asset dùng được cho website. Mỗi asset ghi nguồn, file riêng đã có hay chưa, hash, quyền dùng.

## 1. Asset nguồn đã có trong repo

| ID logic | File | Loại | Kích thước | SHA-256 | Nguồn | Trạng thái |
|---|---|---|---|---|---|---|
| `home-official-boundary-map` | `assets/source/maps/home-official-boundary-map.png` | A — bản đồ gốc, bất biến | 1544 × 1621 | `385ee9bcc364f7e51643d74417d5df93df0de8f9cbfb69ea8f50c998bd0653eb` | Trích nguyên byte từ blueprint PDF cũ (trang 8), giữ theo D-005 | Bản gốc dùng trực tiếp (không có gói export — D-007) |
| `home-wider-area-map` | `assets/source/maps/home-wider-area-map.png` | A — bản đồ gốc, bất biến | 2047 × 1351 | `07f897fdab75e2db857f7f93707508ebb0f305854f24171b29ebb76d63a2d3dc` | PDF cũ trang 9 | như trên |
| `home-roads-map` | `assets/source/maps/home-roads-map.png` | A — bản đồ gốc, bất biến | 2046 × 1432 | `5fd2a1bb8bc9c62ec0b34815aaaef2b4e7c710c052b5ffb61ac4bf86847b8fe6` | PDF cũ trang 11 | như trên |

Ba bản đồ: không crop, vẽ lại, đổi màu, retouch, filter, nén lại hay chuyển định dạng; phục vụ trực tiếp file PNG; giữ label/legend/credit/tỷ lệ.

## 1b. Asset tạm — trích từ blueprint PDF (D-007, D-013)

Tạo bằng `node scripts/extract-assets.mjs [page]` theo cấu hình [`scripts/asset-crops.json`](../scripts/asset-crops.json); chi tiết xử lý, hash ảnh nguồn và hash file trong [`assets/extracted/manifest.json`](../assets/extracted/manifest.json). Ảnh so sánh trước/sau: `assets/extracted/review/<page>.png` (không commit). Trạng thái chung: **tạm**, thay bằng file gốc khi tìm được. Toàn bộ đã được duyệt chất lượng: header/footer và Home (D-013), 7 trang còn lại (D-014).

Tổng: **119** file — Header/footer 2 · Home 6 · Issues 22 · Roads & Safety 14 · Water & Septic 24 · Growth 11 · The Proposal / Comparison 17 · The Facts / Evidence 11 · Take Action 12.

### Header/footer

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `shared-wordmark-navy` | 687 × 156 | `p017-obj42-1536x87.png` (81, 18, 229, 52) | Header wordmark (all pages) | — |
| `shared-wordmark-white` | 687 × 156 | `p017-obj42-1536x87.png` (81, 18, 229, 52) | Footer F1 wordmark (same shape as header, recoloured white; footer source p023 is smaller at 180 x 39) | — |

### Home

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `home-welcome-sign` | 1032 × 774 | `p019-obj48-1536x609.png` (838, 50, 516, 387) | Home opening photo (keystone-odessa-user-sign); full frame as in reference | — |
| `home-warning-triangle` | 207 × 186 | `p019-obj48-1536x609.png` (97, 389, 69, 62) | Home warning panel icon; keeps the panel's #FCEAEA background around the triangle | — |
| `home-card-roads` | 710 × 230 | `p021-obj53-1536x541.png` (43, 195, 355, 115) | Home card 1 photo (Gunn Highway, Keystone - AARoads 2016) | Icon circle is baked into the bottom-left corner of the photo |
| `home-card-water` | 700 × 230 | `p021-obj53-1536x541.png` (413, 195, 350, 115) | Home card 2 photo (Lake Rogers, Odessa - Florida Hikes) | Icon circle is baked into the bottom-left corner of the photo |
| `home-card-everyday-needs` | 662 × 292 | `p021-obj53-1536x541.png` (779, 163, 331, 146) | Home card 3 image | Icon circle is baked into the bottom-left corner; top corners include the card's rounded-corner background |
| `home-card-community-plan` | 728 × 292 | `p021-obj53-1536x541.png` (1128, 163, 364, 146) | Home card 4 image (artwork lettering kept) | Icon circle is baked into the bottom-left corner; top corners include the card's rounded-corner background |

### Issues

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `issues-roads-gunn-highway` | 1788 × 552 | `p032-obj80-1536x659.png` (81, 167, 894, 276) | Issues Roads & Safety photo (Gunn Highway, Keystone - Alex Nitzman / AARoads, April 20, 2016) | — |
| `issues-water-septic-map` | 1724 × 1110 | `p034-obj85-1536x1392.png` (81, 548, 862, 555) | Issues Water & Septic map illustration (legend and labels baked in) | — |
| `issues-water-thumb-septic-concentration` | 454 × 170 | `p034-obj85-1536x1392.png` (976, 588, 227, 85) | Issues Key Water & Septic Issues thumbnail: Septic Concentration | Icon circle baked into the image |
| `issues-water-thumb-septic-repairs` | 454 × 170 | `p034-obj85-1536x1392.png` (1228, 588, 227, 85) | Issues thumbnail: Septic Repairs | Icon circle baked into the image |
| `issues-water-thumb-private-wells` | 454 × 170 | `p034-obj85-1536x1392.png` (976, 767, 227, 85) | Issues thumbnail: Private Wells | Icon circle baked into the image |
| `issues-water-thumb-groundwater` | 454 × 170 | `p034-obj85-1536x1392.png` (1228, 767, 227, 85) | Issues thumbnail: Groundwater | Icon circle baked into the image |
| `issues-water-thumb-wellfields` | 454 × 170 | `p034-obj85-1536x1392.png` (976, 947, 227, 85) | Issues thumbnail: Wellfields, Lakes & Wetlands | Icon circle baked into the image |
| `issues-water-thumb-infrastructure` | 454 × 170 | `p034-obj85-1536x1392.png` (1228, 947, 227, 85) | Issues thumbnail: Water & Wastewater Infrastructure | Icon circle baked into the image |
| `issues-growth-services-map` | 1466 × 1478 | `p036-obj90-1536x1999.png` (67, 454, 733, 739) | Issues Growth illustration map with schematic service pins (caption: Illustration) | — |
| `issues-plan-map` | 1428 × 1036 | `p040-obj99-1536x1189.png` (46, 282, 714, 518) | Issues Community Plan area map illustration | — |
| `issues-plan-2001` | 402 × 196 | `p040-obj99-1536x1189.png` (792, 552, 201, 98) | Issues Community Plan timeline card 2001 photo | — |
| `issues-plan-today` | 402 × 144 | `p040-obj99-1536x1189.png` (1040, 578, 201, 72) | Issues timeline card TODAY photo | — |
| `issues-plan-2026` | 402 × 102 | `p040-obj99-1536x1189.png` (1288, 599, 201, 51) | Issues timeline card 2026 photo | — |
| `issues-plan-area-roads` | 400 × 150 | `p040-obj99-1536x1189.png` (46, 1064, 200, 75) | Issues Areas affected card photo: Roads & Transportation | — |
| `issues-plan-area-water` | 400 × 150 | `p040-obj99-1536x1189.png` (260, 1064, 200, 75) | Issues Areas affected card photo: Water & Wastewater | — |
| `issues-plan-area-growth` | 400 × 150 | `p040-obj99-1536x1189.png` (474, 1064, 200, 75) | Issues Areas affected card photo: Growth & Housing | — |
| `issues-plan-area-infrastructure` | 400 × 150 | `p040-obj99-1536x1189.png` (688, 1064, 200, 75) | Issues Areas affected card photo: Infrastructure & Services | — |
| `issues-connected-roads` | 890 × 120 | `p043-obj106-1536x1281.png` (81, 432, 445, 60) | Issues Connected column header photo: Roads & Safety | — |
| `issues-connected-water` | 890 × 120 | `p043-obj106-1536x1281.png` (545, 432, 445, 60) | Issues Connected column header photo: Water & Septic | — |
| `issues-connected-growth` | 890 × 120 | `p043-obj106-1536x1281.png` (1010, 432, 445, 60) | Issues Connected column header photo: Growth & Daily Life | — |
| `issues-connected-side-left` | 120 × 1430 | `p043-obj106-1536x1281.png` (0, 304, 60, 715) | Issues Connected section: visible left edge of the background aerial | Only the visible edge strip exists; the rest of the background is hidden behind the content |
| `issues-connected-side-right` | 118 × 1432 | `p043-obj106-1536x1281.png` (1477, 303, 59, 716) | Issues Connected section: visible right edge of the background aerial | Only the visible edge strip exists; the rest of the background is hidden behind the content |

### Roads & Safety

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `roads-street-lighting` | 1556 × 800 | `p051-obj125-1536x1220.png` (677, 25, 778, 400) | Roads 01 Street Lighting hero image (artwork, not a real event) | — |
| `roads-gunn-photo` | 1508 × 528 | `p054-obj132-1536x1308.png` (81, 351, 754, 264) | Roads 02 Gunn Highway photo | — |
| `roads-gunn-map` | 1196 × 1038 | `p054-obj132-1536x1308.png` (857, 85, 598, 519) | Roads 02 Gunn Highway map illustration (labels and legend baked in) | — |
| `roads-walking` | 1550 × 768 | `p057-obj139-1536x1433.png` (679, 83, 775, 384) | Roads 03 Walking, Biking & Crossings image | The 'Illustration' label is baked into the bottom-right corner |
| `roads-emergency` | 1622 × 742 | `p059-obj144-1536x1173.png` (644, 49, 811, 371) | Roads 04 Emergency Access image (artwork, not a real event) | — |
| `roads-records-safety` | 518 × 428 | `p068-obj164-1536x1207.png` (55, 405, 259, 214) | Roads 06 Records card image: Safety Data | — |
| `roads-records-traffic` | 516 × 430 | `p068-obj164-1536x1207.png` (347, 405, 258, 215) | Roads 06 Records card image: Traffic Data | — |
| `roads-records-maps` | 518 × 466 | `p068-obj164-1536x1207.png` (638, 408, 259, 233) | Roads 06 Records card image: Maps | — |
| `roads-records-public` | 514 × 434 | `p068-obj164-1536x1207.png` (930, 408, 257, 217) | Roads 06 Records card image: Public Records (illustration, not original document covers) | — |
| `roads-records-plan` | 518 × 484 | `p068-obj164-1536x1207.png` (1221, 407, 259, 242) | Roads 06 Records card image: Community Plan page-24 excerpt | — |
| `roads-map-heading-tree` | 196 × 208 | `p062-obj151-556x2044.png` (264, 36, 49, 52) | Roads map area: tree illustration beside 'THE NIMBY MAP' heading | Source is the downscaled map-area reference (556 px wide instead of 1536): very low detail |
| `roads-map-protect-nature-icon` | 132 × 124 | `p062-obj151-556x2044.png` (85, 1283, 33, 31) | Roads map area: trees icon beside 'PROTECT NATURE. PROTECT PEOPLE.' | Downscaled source: very low detail; a vector redraw would be sharper |
| `roads-map-homes-icon` | 136 × 76 | `p062-obj151-556x2044.png` (332, 1288, 34, 19) | Roads map area: homes icon beside 'THOUSANDS OF HOMES...' | Downscaled source: very low detail; a vector redraw would be sharper |
| `roads-map-forest-band` | 2224 × 544 | `p062-obj151-556x2044.png` (0, 1908, 556, 136) | Roads map area closing band background (forest) behind 'KEEP THE LANDSCAPE.' | Downscaled source; heading, button and link are baked into the image and cannot be separated |

### Water & Septic

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `water-hero-lake-keystone` | 1264 × 840 | `p189-obj454-1336x939.png` (704, 72, 632, 420) | Water W6 hero: Lake Keystone, Odessa (Source: Noble Star Realty; MATRIX watermark kept) | — |
| `water-circle-septic` | 258 × 258 | `p189-obj454-1336x939.png` (65, 536, 129, 129) | Water W6 circle illustration: Septic Systems | Square crop including page background; display as a circle |
| `water-circle-groundwater` | 258 × 258 | `p189-obj454-1336x939.png` (485, 536, 129, 129) | Water W6 circle illustration: Groundwater | Square crop including page background; display as a circle |
| `water-circle-wells` | 260 × 260 | `p189-obj454-1336x939.png` (906, 536, 130, 130) | Water W6 circle illustration: Private Wells | Square crop including page background; display as a circle |
| `water-septic-map` | 1466 × 928 | `p191-obj459-1402x1013.png` (606, 117, 733, 464) | Water W3 septic records map (legend and labels baked in; provenance to confirm) | — |
| `water-repairs-map` | 950 × 744 | `p192-obj462-1476x922.png` (929, 131, 475, 372) | Water R2 septic repair records map (legend and labels baked in) | — |
| `water-connected-3d` | 1608 × 562 | `p195-obj470-1341x1218.png` (513, 121, 804, 281) | Water W1 conceptual 3D block illustration (labels baked in) | — |
| `water-connected-cross-section` | 2682 × 504 | `p195-obj470-1341x1218.png` (0, 504, 1341, 252) | Water W1 conceptual cross-section illustration (labels baked in) | — |
| `water-options-circle-1` | 270 × 266 | `p198-obj479-1448x1556.png` (699, 169, 135, 133) | Water W2 step 1 circle photo (left) | Square crop including card background; display as a circle |
| `water-options-circle-2` | 270 × 266 | `p198-obj479-1448x1556.png` (946, 169, 135, 133) | Water W2 step 1 circle photo (middle) | Square crop including card background; display as a circle |
| `water-options-circle-3` | 270 × 266 | `p198-obj479-1448x1556.png` (1193, 169, 135, 133) | Water W2 step 1 circle photo (right) | Square crop including card background; display as a circle |
| `water-options-lake` | 1236 × 568 | `p198-obj479-1448x1556.png` (0, 586, 618, 284) | Water W2 lake photo under the intro (right edge fades into the page) | — |
| `water-leftout-strip` | 3072 × 206 | `p202-obj494-1536x1056.png` (0, 174, 1536, 103) | Water W4 lake/reeds strip under 'LEFT OUT. BY CHOICE.' (fades into page background) | — |
| `water-leftout-document-icon` | 258 × 262 | `p202-obj494-1536x1056.png` (55, 424, 129, 131) | Water W4 document circle icon (illustrated) | — |
| `water-leftout-shield-icon` | 264 × 262 | `p202-obj494-1536x1056.png` (804, 425, 132, 131) | Water W4 shield circle icon (illustrated) | — |
| `water-leftout-drop-icon` | 280 × 264 | `p202-obj494-1536x1056.png` (316, 819, 140, 132) | Water W4 water-drop icon on the dark band (dark background kept) | — |
| `water-compare-community` | 400 × 208 | `p204-obj499-1476x1049.png` (531, 379, 200, 104) | Water W5 Community Plan column header photo (burgundy tint baked in) | — |
| `water-compare-county` | 400 × 208 | `p204-obj499-1476x1049.png` (1232, 379, 200, 104) | Water W5 County Comprehensive Plan column header photo | — |
| `water-evidence-septic` | 530 × 208 | `p207-obj506-1476x1116.png` (41, 282, 265, 104) | Water W7 evidence card image: Septic Data | — |
| `water-evidence-repair` | 530 × 208 | `p207-obj506-1476x1116.png` (323, 282, 265, 104) | Water W7 evidence card image: Repair Records | — |
| `water-evidence-maps` | 530 × 208 | `p207-obj506-1476x1116.png` (605, 282, 265, 104) | Water W7 evidence card image: Water & Well Maps | — |
| `water-evidence-public` | 530 × 208 | `p207-obj506-1476x1116.png` (887, 282, 265, 104) | Water W7 evidence card image: Public Records | — |
| `water-evidence-policies` | 530 × 208 | `p207-obj506-1476x1116.png` (1169, 282, 265, 104) | Water W7 evidence card image: Planning Policies | — |
| `water-next-road` | 1368 × 536 | `p207-obj506-1476x1116.png` (792, 848, 684, 268) | Water W7 'What's next' road photo (bottom edge of the reference; may be cut off) | — |

### Growth

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `growth-then` | 1472 × 824 | `p209-obj511-1476x1219.png` (0, 460, 736, 412) | Growth G1 aerial: Keystone-Odessa when the Community Plan was created (title box and legend baked in) | Private placeholder (fake data, TXT:1767); the centre arrow circle overlaps the right edge |
| `growth-today` | 1468 × 824 | `p209-obj511-1476x1219.png` (742, 460, 734, 412) | Growth G1 aerial: Keystone-Odessa today 2026 (title box and legend baked in) | Private placeholder (fake data, TXT:1767); the centre arrow circle overlaps the left edge |
| `growth-density-five-acre` | 1440 × 522 | `p212-obj518-1536x1428.png` (42, 554, 720, 261) | Growth G2 aerial: five acres, one home (conceptual illustration) | — |
| `growth-density-moderate` | 1440 × 522 | `p212-obj518-1536x1428.png` (774, 554, 720, 261) | Growth G2 aerial: natural rural-lane moderate density (conceptual illustration) | — |
| `growth-evidence-plan` | 358 × 290 | `p217-obj530-1476x1220.png` (310, 352, 179, 145) | Growth G5 evidence card image: Community Plan | — |
| `growth-evidence-landuse` | 358 × 286 | `p217-obj530-1476x1220.png` (788, 353, 179, 143) | Growth G5 evidence card image: Land-Use Maps | — |
| `growth-evidence-housing` | 358 × 262 | `p217-obj530-1476x1220.png` (1266, 359, 179, 131) | Growth G5 evidence card image: Housing Data | — |
| `growth-evidence-service` | 358 × 284 | `p217-obj530-1476x1220.png` (310, 595, 179, 142) | Growth G5 evidence card image: Service Map | — |
| `growth-evidence-travel` | 358 × 294 | `p217-obj530-1476x1220.png` (788, 593, 179, 147) | Growth G5 evidence card image: Travel Data | — |
| `growth-evidence-infrastructure` | 358 × 286 | `p217-obj530-1476x1220.png` (1266, 595, 179, 143) | Growth G5 evidence card image: Infrastructure Records | — |
| `growth-next-aerial` | 1284 × 418 | `p217-obj530-1476x1220.png` (793, 830, 642, 209) | Growth G5 'Outdated Community Plan' aerial | — |

### The Proposal / Comparison

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `comparison-h1-community-dwelling` | 303 × 303 | `p226-obj551-2047x1383.png` (125, 391, 101, 101) | Comparison H1 original symbol: one dwelling unit per five acres (one of the eight original symbols, TXT:57) | — |
| `comparison-h1-community-low-density` | 303 × 303 | `p226-obj551-2047x1383.png` (125, 592, 101, 101) | Comparison H1 original symbol: low-density, scattered residential pattern (one of the eight original symbols, TXT:57) | — |
| `comparison-h1-community-amendments` | 303 × 303 | `p226-obj551-2047x1383.png` (125, 792, 101, 101) | Comparison H1 original symbol: discourages higher-density amendments (one of the eight original symbols, TXT:57) | — |
| `comparison-h1-community-rural` | 303 × 303 | `p226-obj551-2047x1383.png` (125, 995, 101, 101) | Comparison H1 original symbol: rural development pattern (one of the eight original symbols, TXT:57) | — |
| `comparison-h1-county-mapped` | 303 × 303 | `p226-obj551-2047x1383.png` (1079, 391, 101, 101) | Comparison H1 original symbol: mapped land-use categories (one of the eight original symbols, TXT:57) | — |
| `comparison-h1-county-rural-limits` | 303 × 303 | `p226-obj551-2047x1383.png` (1079, 592, 101, 101) | Comparison H1 original symbol: rural density limits still apply (one of the eight original symbols, TXT:57) | — |
| `comparison-h1-county-housing-goals` | 303 × 303 | `p226-obj551-2047x1383.png` (1079, 792, 101, 101) | Comparison H1 original symbol: housing choice and affordability (one of the eight original symbols, TXT:57) | — |
| `comparison-h1-county-tools` | 303 × 303 | `p226-obj551-2047x1383.png` (1079, 995, 101, 101) | Comparison H1 original symbol: infill, small lots, accessory homes (one of the eight original symbols, TXT:57) | — |
| `comparison-h1-illustration` | 726 × 192 | `p226-obj551-2047x1383.png` (89, 1242, 242, 64) | Comparison H1 small illustration beside the closing statement | — |
| `comparison-r1-gunn` | 450 × 298 | `p220-obj537-1070x1490.png` (792, 93, 225, 149) | Comparison R1 header photo: Gunn Highway, April 20, 2016 (Alex Nitzman / AARoads) | — |
| `comparison-r1-illustration` | 513 × 156 | `p220-obj537-1070x1490.png` (53, 1131, 171, 52) | Comparison R1 small roadside illustration beside the closing statement | — |
| `comparison-w8-header` | 1462 × 438 | `p224-obj546-1536x1260.png` (805, 76, 731, 219) | Comparison W8 header photo: water tank by the lake | — |
| `comparison-w8-illustration` | 696 × 237 | `p224-obj546-1536x1260.png` (48, 1011, 232, 79) | Comparison W8 small lake illustration beside the closing statement | — |
| `comparison-c1-aerial` | 1252 × 424 | `p228-obj557-1476x1632.png` (806, 111, 626, 212) | Comparison C1 aerial: Lake Keystone area, Odessa (Coldwell Banker; StellarMLS watermark kept if present) | — |
| `comparison-c1-remove` | 670 × 670 | `p228-obj557-1476x1632.png` (62, 477, 335, 335) | Comparison C1 REMOVE illustration: crossed-out Community Plan (Area-specific policy layer) | — |
| `comparison-c1-arrow` | 192 × 198 | `p228-obj557-1476x1632.png` (434, 620, 64, 66) | Comparison C1 brown arrow between REMOVE and REMAINS | — |
| `comparison-c1-illustration` | 564 × 174 | `p228-obj557-1476x1632.png` (66, 1000, 188, 58) | Comparison C1 small trees illustration beside the closing statement | — |

### The Facts / Evidence

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `evidence-r3-roads` | 692 × 334 | `p231-obj564-1536x1256.png` (40, 323, 346, 167) | Evidence R3 card image: Gunn Highway, Keystone (Alex Nitzman / AARoads) | — |
| `evidence-r3-water` | 692 × 334 | `p231-obj564-1536x1256.png` (410, 323, 346, 167) | Evidence R3 card image: Lake Rogers, Odessa (Florida Hikes) | — |
| `evidence-r3-growth` | 692 × 334 | `p231-obj564-1536x1256.png` (780, 323, 346, 167) | Evidence R3 card image: planning symbol, not a geographic map | — |
| `evidence-r3-plans` | 692 × 334 | `p231-obj564-1536x1256.png` (1150, 323, 346, 167) | Evidence R3 card image: illustration, not original document covers | — |
| `evidence-e1-header` | 910 × 216 | `p234-obj571-1476x1791.png` (979, 42, 455, 108) | Evidence E1 library header image (soft trees) | — |
| `evidence-e1-thumb-livable` | 400 × 204 | `p234-obj571-1476x1791.png` (65, 450, 200, 102) | Evidence E1 library thumbnail: Livable Communities Element (illustration, not the original cover) | — |
| `evidence-e1-thumb-public-records` | 400 × 188 | `p234-obj571-1476x1791.png` (65, 663, 200, 94) | Evidence E1 library thumbnail: Response to Public Records Request (illustration, not the original cover) | — |
| `evidence-e1-thumb-water` | 400 × 172 | `p234-obj571-1476x1791.png` (65, 863, 200, 86) | Evidence E1 library thumbnail: Water Infrastructure Records (illustration, not the original cover) | — |
| `evidence-e1-thumb-septic-repair` | 400 × 164 | `p234-obj571-1476x1791.png` (65, 1060, 200, 82) | Evidence E1 library thumbnail: Septic System Repair Records (illustration, not the original cover) | — |
| `evidence-e1-thumb-septic-classification` | 400 × 164 | `p234-obj571-1476x1791.png` (65, 1255, 200, 82) | Evidence E1 library thumbnail: Septic Classification Data (illustration, not the original cover) | — |
| `evidence-e1-action-strip` | 586 × 86 | `p234-obj571-1476x1791.png` (914, 1676, 293, 43) | Evidence E1 From Evidence to Action image strip | — |

### Take Action

| ID | Kích thước | Nguồn (x, y, w, h) | Dùng cho | Giới hạn |
|---|---|---|---|---|
| `action-hero-family` | 1492 × 1060 | `p237-obj578-2046x698.png` (1215, 91, 746, 530) | Take Action A1 hero: family looking toward the lake (illustrative photo) | — |
| `action-card-01` | 1196 × 586 | `p246-obj606-2046x1502.png` (86, 456, 598, 293) | Take Action A2 card 01 image (COMMUNITY SUPPORT clipboard; lettering baked in) | Number badge 01 is baked into the top-left of the image |
| `action-card-02` | 1194 × 592 | `p246-obj606-2046x1502.png` (726, 456, 597, 296) | Take Action A2 card 02 image (writing in a notebook) | Number badge 02 is baked into the top-left of the image |
| `action-card-03` | 1194 × 578 | `p246-obj606-2046x1502.png` (1365, 456, 597, 289) | Take Action A2 card 03 image (document binders; lettering baked in) | Number badge 03 is baked into the top-left of the image |
| `action-story-mailbox` | 682 × 690 | `p248-obj611-2046x1348.png` (797, 821, 341, 345) | Take Action A3 mailbox photo '33556' | — |
| `action-share-laptop` | 1706 × 1792 | `p254-obj628-2047x1073.png` (1045, 86, 853, 896) | Take Action A4 sharing illustration (laptop, share panel, icons; lettering kept as artwork) | — |
| `action-stories-road` | 1196 × 486 | `p258-obj638-2046x1600.png` (86, 445, 598, 243) | Take Action A5 sample story image: Road Safety (illustrative) | — |
| `action-stories-water` | 1194 × 508 | `p258-obj638-2046x1600.png` (726, 445, 597, 254) | Take Action A5 sample story image: Water & Septic (illustrative) | — |
| `action-stories-access` | 1194 × 484 | `p258-obj638-2046x1600.png` (1365, 445, 597, 242) | Take Action A5 sample story image: Everyday Access (illustrative) | — |
| `action-stories-landscape` | 3752 × 172 | `p258-obj638-2046x1600.png` (85, 1447, 1876, 86) | Take Action A5 landscape band under the stories | — |
| `action-petition-side-left` | 188 × 792 | `p267-obj662-793x2046.png` (0, 242, 47, 198) | Take Action A6 petition section: visible left edge of the landscape background | Downscaled source (793 px wide); only the visible edge strip exists |
| `action-petition-side-right` | 188 × 780 | `p267-obj662-793x2046.png` (746, 245, 47, 195) | Take Action A6 petition section: visible right edge of the landscape background | Downscaled source (793 px wide); only the visible edge strip exists |

**Không trích** (dựng lại bằng vector/CSS ở S2, so sánh khi trình duyệt từng trang): icon giao diện (search, mạng xã hội, mũi tên, icon tròn của section/tab/menu số, icon trong thẻ và form), nút, khung, nền màu. Riêng 8 biểu tượng gốc của Comparison H1 (TXT:57 yêu cầu “eight original symbols”) và icon minh họa có shading của Water W4 được trích như ảnh.

## 2. Danh sách asset theo blueprint (đối chiếu với §1b)

Tất cả đều chỉ thấy bên trong ảnh tham chiếu. Không có gói export, nên theo **D-007** mọi asset dưới đây được cắt từ ảnh tham chiếu trong blueprint PDF, tính lại kích thước pixel theo khổ hiển thị và làm rõ nét. Mỗi file ghi nhãn **tạm — trích từ PDF**, kèm ảnh nguồn, vùng cắt, hệ số phóng và hash; thay bằng file gốc khi tìm được. Không dùng AI vẽ thêm chi tiết: làm rõ chỉ là phóng ảnh + làm sắc nét, không khôi phục được chi tiết đã mất. Quyền dùng công khai: OQ-19.

| Asset | Dùng ở | Nguồn/credit đã biết | Ghi chú |
|---|---|---|---|
| Wordmark gốc (navy) | Header/footer mọi trang | — | TXT:44, TXT:47 — **đã trích tạm** (§1b) |
| Tam giác cảnh báo gốc | Home opening | — | TXT:44 — **đã trích tạm** (§1b) |
| `keystone-odessa-user-sign.png` | Home opening | Người dùng cung cấp | Dùng nguyên khung — **đã trích tạm** (§1b, `home-welcome-sign`) |
| Gunn Highway, Keystone | Home card 1, Issues O1, Comparison R1, Evidence R3 | Alex Nitzman / AARoads, 20/04/2016 | URL nguồn chưa có |
| Lake Rogers, Odessa | Home card 2, Water W2, Evidence R3 | Florida Hikes | Người chụp/ngày chưa xác minh |
| Hình card 3, card 4 Home | Home M4 | — | **Đã trích tạm** (§1b); card 1–2 cũng đã trích từ Home |
| Icon tab/topic Issues, ảnh và artwork Connected issues | Issues | — | |
| Bản đồ lớn + area cards Community Plan | Issues O3 | — | |
| Bản đồ minh họa services (schematic pins) | Issues Growth | — | Nhãn “Illustration” |
| Ảnh trang 24 Community Plan (O8) | Roads 02 | Supplied page-24 image | Giữ pixel giấy/tiêu đề/highlight (TXT:1074) |
| Artwork Street Lighting, Walking, Emergency (xe cứu thương) | Roads 01, 03, 04 | — | Artwork, không phải sự kiện có thật |
| Ba panel chiến dịch bản đồ (inset NIMBY, land/water/lots, roads) | Roads map area | Layout previews | Giữ inset/crop đã chọn |
| Hình minh họa thẻ Records & Evidence, hai cột comparison | Roads 06, 07 | — | |
| Lake Keystone (Noble Star Realty) | Water W6 | noblestarrealty.com | Giữ watermark MATRIX |
| Ba hình tròn Septic / Groundwater / Private Wells | Water W6 | — | |
| Bản đồ septic records (Known/Likely/Somewhat Likely + ranh giới) | Water W3 | — | Provenance cần xác nhận (TXT:1734) |
| Bản đồ septic repair records | Water R2 | — | như trên |
| Hai minh họa Connected Water (khối 3D + mặt cắt) | Water W1 | — | “Conceptual illustration” |
| Ba ảnh tròn + bốn icon bước | Water W2 | — | |
| Dải ảnh hồ + ba biểu tượng | Water W4 | — | |
| Ảnh header hai cột, 10 icon | Water W5 | — | |
| Ảnh 5 thẻ evidence + ảnh đường “Next” | Water W7 | — | |
| Hai aerial then/today (legend in sẵn) | Growth G1 | — | Placeholder riêng tư |
| Hai aerial mật độ (5-acre / moderate) + 5 icon câu hỏi | Growth G2 | — | Natural rural-lane |
| Icon bảng so sánh | Growth G4 | — | |
| Ảnh 6 thẻ + aerial “Outdated Community Plan” | Growth G5 | — | |
| Icon/minh họa cột R1, minh họa nhỏ chân bảng | Comparison R1 | — | |
| Ảnh header bể nước bên hồ, 8 icon, minh họa nhỏ | Comparison W8 | — | |
| 8 icon nhỏ, minh họa chân bảng | Comparison H1 | — | |
| Aerial Lake Keystone area (Coldwell Banker) | Comparison C1 | coldwellbankerluxury.com | Giữ watermark StellarMLS |
| Minh họa “Area-specific policy layer” gạch chéo, 6 icon, minh họa nhỏ | Comparison C1 | — | |
| Biểu tượng quy hoạch trung tính; minh họa hai bản quy hoạch | Evidence R3 | — | Nhãn “not a geographic map”, “not original document covers” |
| Thumbnail 5 thẻ thư viện, ảnh header thư viện, dải ảnh “From Evidence to Action” | Evidence E1 | — | Minh họa, không phải bìa gốc |
| Ảnh gia đình | Action A1 | — | |
| Ba ảnh thẻ 01/02/03 (có chữ in sẵn) | Action A2 | — | |
| Ảnh hộp thư “33556”, 7 icon chủ đề | Action A3 | — | |
| Minh họa laptop + icon chia sẻ | Action A4 | — | Chữ trong ảnh giữ nguyên |
| Ba ảnh câu chuyện mẫu, dải phong cảnh | Action A5 | — | Ảnh minh họa |
| Nền phong cảnh section petition | Action A6 | — | |
| Font Merriweather, Inter (file + license) | Toàn site | Gói export | TXT:22 — hiện chỉ có Inter (Fontsource) |

## 3. Ảnh tham chiếu (R)

Thư mục `blueprint/references/` — 111 ảnh, chi tiết ở `blueprint/references/manifest.json`. Dùng để so sánh layout, đọc chữ và đo. Đánh dấu **↓** = Google Docs đã thu nhỏ so với kích thước gốc ghi trong blueprint (không dùng để đo).

| Trang | Desktop 1536 | Tablet 768 | Phone 390 |
|---|---|---|---|
| Home | header `p017`, opening `p019`, cards `p021`, footer `p023` | `p082`, `p083`, `p085`, `p087` | `p088`, `p089`, `p091`, `p093` |
| Home menu mở | — | — | `p079` ↓ (546 × 2039) |
| Issues | header `p026`, opening `p028`, tabs `p030`, roads `p032`, water `p034`, growth `p036`, plan `p040`, connected `p043`, footer `p045` | `p094`, `p095`, `p096`, `p097`, `p099`↓, `p102`↓, `p105`↓, `p108`↓, `p111` | `p112`, `p113`, `p114`, `p115`, `p117`↓, `p120`↓, `p123`↓, `p126`↓, `p130` |
| Roads | header `p048`, 01 `p051`, 02 `p054`, 03 `p057`, 04 `p059`, map area `p062`↓ (556 × 2044, gốc 1536 × 5648), 06 `p068`, 07 `p071`, footer `p074` | `p131`, `p132`↓, `p135`↓, `p138`↓, `p141`↓, `p144`↓, `p149`↓, `p152`↓, `p156` | `p157`, `p158`↓, `p161`↓, `p164`↓, `p168`↓, `p171`↓, `p176`↓, `p181`↓, `p186` |
| Water | W6 `p189`, W3 `p191`, R2 `p192`, W1 `p195`, W2 `p198`, W4 `p202`, W5 `p204`, W7 `p207` | — | — |
| Growth | G1 `p209`, G2 `p212`, G4 `p215`, G5 `p217` | — | — |
| Comparison | R1 `p220`, W8 `p224`, H1 `p226`, C1 `p228` | — | — |
| Evidence | R3 `p231`, E1 `p234` | — | — |
| Action | A1 `p237`, H3 `p241`/`p242`/`p244`/`p245`, A2 `p246`, A3 `p248`–`p252`, A4 `p254`/`p255`, A5 `p258`–`p261`, notice `p262`, A6 `p267`↓/`p269`/`p270` | — | — |

Các trang Water → Action **không có** tham chiếu tablet/phone: layout responsive phải đề xuất và chờ duyệt (TXT:27).
