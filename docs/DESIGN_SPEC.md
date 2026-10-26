# Đặc tả thiết kế

## 1. Quy tắc ưu tiên (nguyên văn)

<!-- TXT:19-28 -->
```text
Use Part I, section 4, with each selected page reference. The section-specific approved image and matching source layout establish appearance; generic design guidance is subordinate. A written palette or Word font does not establish the exact measurements of every raster reference.
Confirmed written design specifications
Appearance precedence: reproduce each current selected section image and its matching approved source layout faithfully. Use that section’s approved colors, typography, spacing, imagery and footer treatment; a generic palette must not recolor it. The approved Home opening and O2 overview use their selected charcoal/burgundy treatment. Other selected sections retain their own approved appearance. Shared component behavior does not authorize a site-wide visual redesign. Flag a true unresolved conflict before implementing it.
Typography: use the approved Inter body and Merriweather heading font files, their license notices and the weights and variable-font settings of the matching section source. Verify actual browser font loading and line wrapping; do not silently fall back. Word-document formatting is not a website font specification. Preserve any lettering baked into selected artwork.
Navigation behavior and public-facing menu labels follow Part I, section 3. Use the current selected section reference for its header and footer appearance. Do not replace an approved white footer with a navy footer or add/rearrange visible footer groups solely to satisfy an older generic instruction. The approved navigation destinations remain in force; any genuinely missing destination uses the separately approved fallback. A changed visible treatment needs a preview and approval.
Implementation measurements to confirm on the Home page pilot
Record each specification with its source and status: explicit instruction, matching source-layout value, estimate from a reference, or approved pilot measurement. Record the source canvas separately from browser viewport, device scale and zoom. Do not present estimated dimensions as approved precision.
Typography audit: heading family and fallback, loaded font files, weights, desktop/mobile sizes, line heights, letter spacing, text measure and wrapping for hero, section headings, cards, navigation, body, captions and buttons. Check the actual rendered font, including missing-font fallback and long menu labels.
Layout audit: record desktop, phone and intermediate viewport sizes, content widths, gutters, columns, gaps, section spacing, header/footer dimensions and breakpoints. Only the selected Home opening has a separate phone reference; propose the remaining responsive layouts for approval. Preserve section order, complete copy, controls and readable maps with the approved section-specific crops. A static canvas width is not an approved CSS viewport.
Component and image audit: exact palette use by role; button padding, height, width behavior, border, radius and focus/hover states; image aspect ratios, focal points, cropping, display size and resolution; map and illustration labels; and readable source links. Put measurements that cannot be recovered reliably into the approval list. Changes to artwork require separate approval, even when made to fit a component.
```

<!-- TXT:119-182 -->
```text
4. DESIGN SYSTEM
Overall Style
The website should have a local-community style that is serious, modern, and evidence-based.
The design should be clean, spacious, easy to read, and create a sense of trust.
Prioritize large amounts of white space, limited text on each screen, real images, maps, data, and official records. Each section should focus on only one main message.
Colors
The following original palette describes the legacy references. It is not an override of a later explicitly approved selected image. Reproduce each section’s current selected appearance using its scoped source specification; do not apply these colors globally.
Dark Navy — #17324D
Legacy-reference navy: use only where the current selected section actually shows it. It does not replace approved charcoal headings, burgundy controls or white footers.
Teal — #28736D
Legacy-reference teal: retain where shown in selected artwork or controls; do not introduce it into a section merely because its topic concerns water or the environment.
Coral Red — #C55245
Legacy-reference coral: retain only in the approved section’s actual accents. Do not substitute it for approved burgundy buttons or other explicitly selected colors.
Preserve the selected balance of accent colors; any change in emphasis requires visual approval.
Cream White — #F7F4EE
Use the selected reference’s background, including warm white where shown; do not recolor every section to a generic token.
White — #FFFFFF
Retain white surfaces where shown in the selected cards, headers, footers and reading areas.
Light Gray — #D8DEE3
Retain the actual divider, border and secondary-information treatment shown in the selected reference.
Color principle: per-section selected appearance takes precedence. Reuse scoped tokens where they genuinely match; preserve approved distinctions and existing artwork colors.
Typography and Content Hierarchy
Headings: Merriweather — creates a serious, editorial feel that is also suitable for community-focused content.
Body Text: Inter — clear, modern, and easy to read on both computers and phones.
The typography system includes:
* Main Heading: the most important message on the page.
* Section Heading: opens a major content section.
* Card Heading: the name of an issue or piece of evidence.
* Small Label: used for groups such as ISSUES · DATA · PUBLIC RECORDS · COMPARISON.
* Body Content: short, preferably 1–3 sentences for each block.
Long paragraphs are reserved for detailed pages.
Buttons and Links
Buttons should be large, clear, and easy to recognize.
Primary buttons use the color, size and treatment in their current selected section reference, including burgundy where approved. Keep the existing label and destination. Do not globally recolor buttons.
Secondary buttons use the border, typography and treatment in their current selected section reference. Preserve labels and approved behavior.
Content Link: text + arrow.
Button names should clearly tell users what the next step is, for example:
View the Issue →
View the Evidence →
View the Original Record →
Compare the Two Plans →
View the Proposal →
Each area should have only one main action, avoiding multiple buttons competing with one another.
Content Cards
Use reusable card components with variants matching each selected layout. Do not force all approved cards into a single visual template.
Issue Card — image + heading + key information + button to view details.
Data Card — large number + short label + source.
Evidence Card — document/map image + key finding + source.
Comparison Card — Community Plan ↔ Countywide Planning Framework.
Timeline Card — year + event + related document.
Preserve each selected card’s typography, spacing, background, illustration and text. Generic card guidance does not authorize fewer cards, shortened copy or a different composition.
Data, Maps, and Sources
Data: display numbers in a large, easy-to-see format, with a short description.
Maps: include a title, clear legend, and source; highlight only the data layers needed for the message being presented.
Public Records: display an image or visual excerpt of the document, together with the date, agency, key content, and a link to the original document.
Sources: place each source close to the fact it supports, but keep the presentation compact so it does not make the interface look cluttered.
White Space and Layout
Pages must be clean, spacious, and easy to scan.
* One section focuses on one message.
* Do not place too many cards on the same screen.
* Do not use long paragraphs on overview pages.
* Alternate appropriately between text, images, maps, data, and documents.
* Keep the main content within a comfortable reading width. Avoid spreading text across the full width of the screen.
* Clearly separate important sections with white space or a slight background change.
```

## 2. Bảng màu theo vai trò

Mỗi giá trị ghi **trạng thái** theo TXT:25: `explicit` (blueprint ghi rõ), `source-layout` (từ layout nguồn — không có, D-007/D-015), `estimate` (ước lượng từ ảnh), `approved` (đã duyệt qua pilot).

| Vai trò | Giá trị | Phạm vi | Trạng thái |
|---|---|---|---|
| Nền warm white | `#F7F4EE` | Home header/opening, nhiều section later pages | explicit (TXT:44) |
| Chữ charcoal | `#282A2B` | Home opening; “charcoal” ở W3/W4/W5/A1… | explicit cho Home (TXT:44); các trang khác: estimate |
| Burgundy (nút, nhấn) | `#7A263A` | Home opening; “burgundy” ở các trang Water/Comparison/Action | explicit cho Home; khác: estimate |
| Panel cảnh báo | `#FCEAEA` | Home opening | explicit |
| Chữ nhấn đỏ | `#E51C17` | “outdated community plan.” trên Home | explicit |
| Header nền | `#FFFFFF` | Home | explicit |
| Navy (legacy) | `#17324D` | Chỉ nơi ảnh thật sự có (wordmark, footer F1?) | explicit legacy (TXT:126-127); footer F1: estimate |
| Teal (legacy) | `#28736D` | Chỉ nơi ảnh có | explicit legacy |
| Coral (legacy) | `#C55245` | Chỉ nơi ảnh có | explicit legacy |
| Light gray | `#D8DEE3` | Divider/border theo ảnh | explicit legacy |
| Viền dưới header | `#D8D4CC` | Header mọi trang | estimate (đo p017) |
| Đường kẻ menu mobile | `#E6E4E0` | Menu mobile | estimate (đo p079) |
| Nền footer F1 (navy) | `#01244A` | Footer mọi trang (D-010) | estimate (đo p023) |
| Chữ footer | `#E3EEF7` | Footer | estimate (đo p023) |
| Đường kẻ footer | `#48617C` | Footer | estimate (đo p023) |
| Lớp mờ sau thông báo | đen 28% | “Not available yet” | estimate (đo p262) |
| Đỏ tươi nút Get Involved | không dùng (D-010) | Header/footer ảnh R2, G1–G5, R1, R3 | estimate — mâu thuẫn với burgundy (OQ-25) |
| Xanh lá / đỏ bảng Growth; nâu / xanh dương R1; màu thẻ Evidence | chưa đo | G2, G4, R1, R3 | estimate (OQ-25) |

Không áp một bảng màu chung lên toàn site; dùng token theo phạm vi khi thật sự trùng (TXT:139).

## 3. Typography

| Vai trò | Font | Trạng thái |
|---|---|---|
| Heading | Merriweather variable (`merriweather-latin-standard-normal.woff2`, Fontsource 5.3.0; trục wght 300–900, opsz, wdth) | explicit (TXT:22, TXT:141); cài ở S2, đã kiểm tra tải thật trên trình duyệt |
| Body | Inter variable (`inter-latin-wght-normal.woff2`, Fontsource) | explicit (TXT:22, TXT:142); đã kiểm tra tải thật ở S2 |
| Chữ in sẵn trong artwork (ví dụ font condensed của panel bản đồ) | Giữ trong ảnh | explicit (TXT:49) |

Cỡ chữ, line-height, letter-spacing, độ dài dòng: **chưa có số đo** — đo trong Home pilot và ghi vào §5.

## 4. Thành phần

- Nút: chính/phụ theo ảnh section; label và đích giữ nguyên; mỗi khu vực một hành động chính (TXT:150-161).
- Card: các biến thể Issue / Data / Evidence / Comparison / Timeline theo từng layout; không ép một template (TXT:162-169).
- Data/Maps/Public records/Sources: TXT:170-174.
- Header/footer: [sections/shared.md](sections/shared.md).

## 5. Sổ số đo (điền trong Home pilot)

Ghi riêng: kích thước canvas nguồn, viewport trình duyệt, device scale, zoom (TXT:25).

| Mục | Desktop (…px) | Tablet 768 | Phone 390 | Nguồn | Trạng thái |
|---|---|---|---|---|---|
| Chiều rộng nội dung / gutter | | | | | |
| Header cao (ảnh: 87 / 77 / 73 px) | 87 (86 + viền 1) | 77 | 73 | Ảnh p017 / p082 / p088; S2 đo trên trình duyệt: 87 / 77 / 73 | estimate |
| Lề header | 81 (nội dung tối đa 1374) | 34 | 23 | p017 / p082 / p088 | estimate |
| Wordmark (rộng hiển thị) | 229 | 204 | 193 | Ink 225 / 200 / 190 px | estimate |
| Menu desktop | Inter 15 px, cách nhau 28,5 px; trang đang mở: weight 500, không gạch chân | — | — | p017, p026, p048 (vị trí lệch ≤ 4 px sau S2) | estimate |
| Nút Get Involved | 133 × 46, Inter 15/600, bo 3 px, cách icon search 104 px | — | — | p017 | estimate |
| Nút Menu | — | Inter 15 px + icon 19 × 13 | Inter 14 px | p082 / p088 | estimate |
| Menu mobile | — | dòng 44 px, Inter 16 px, mục con lùi 16 px, nút 46 px | như tablet | p079 (ảnh thu nhỏ 1,4×) | estimate |
| Footer F1 cao (ảnh: 74 / 204 / 332 px) | 74 | 200 | ≈ 330 | Ảnh p023 / p087 / p093; S2 đo trên trình duyệt | estimate |
| Footer — chữ | khẩu hiệu Inter 14/1,55; link Inter 12/600, cách 24 px; nút Subscribe 172 × 37, 13/600 | như desktop | như desktop | p023 | estimate |
| Footer — bố cục | một hàng từ 1400 px; lề 60 (nội dung tối đa 1416) | 3 hàng (thương hiệu / link / icon + nút) | xếp dọc; hàng nút tự xuống dòng ở khổ rất hẹp | p023 / p087 / p093 | estimate |
| Thông báo “Not available yet” | panel 825 px, viền trên 4 px burgundy, tiêu đề Merriweather 37/700 | panel co theo màn hình | như tablet | p262 (canvas 1800, quy đổi về 1500) | estimate |
| Breakpoint | menu desktop từ 1200 px; footer một hàng từ 1400 px; bố cục phone dưới 640 px | | | Đặt ở S2 cho vừa nội dung đã đo | estimate |
| Home — Opening | lề 81, cột chữ 600 + ảnh 516, cách 158 (co lại khi hẹp); cao 609 | 1 cột, lề 56, ảnh 516 căn giữa; cao 932 | 1 cột, lề 24 | p019 / p083 / p089 | estimate |
| Home — H1 | Merriweather 48 / 55, weight 700, độ rộng 90 % | 46 / 52 | 35 / 39 | cap 36 / 35 / 26 px | estimate |
| Home — nhãn nhỏ, vision | Inter 14/700 giãn 0,8 px; vision 17 / 28, rộng tối đa 560 | vision 16 / 27, rộng tối đa 644 | nhãn 11 px; vision 15,5 / 26 | độ rộng dòng đo từ ảnh | estimate |
| Home — panel cảnh báo | 600 × 112, Merriweather 20 / 28, icon 69 px | 600 × 78, 18 / 24, icon 48 | 342 × 130, 16,5 / 25, icon 44 | p019 / p083 / p089 | estimate |
| Home — nút | 176 × 48 và 195 × 48, Inter 15/600, bo 2 px, cách 12 | như desktop | rộng hết khung, cách 10 | p019 / p089 | estimate |
| Home — section card | nền `#FAF9FE`, navy `#051534`, đỏ `#D51319`, chữ `#121A31`; tiêu đề Merriweather 39/700; giới thiệu Inter 15 / 20 | tiêu đề 34 / 40 | tiêu đề 29 / 33,5 | p021 / p085 / p091 | estimate |
| Home — card | 4 cột bằng nhau, cách 15; vùng ảnh 148 (caption 33); tiêu đề Merriweather 26 / 28; chữ Inter 17 / 22; mũi tên đỏ `#F01E1E` Ø 38 | 2 cột; vùng ảnh 137 (caption 30) | 1 cột; vùng ảnh 148 (caption 40); chữ 16,5 / 20,5 | p021 / p085 / p091 | estimate |
| Home — breakpoint | bố cục 2 cột Opening + 4 cột card từ 1280 px | dưới 1280 px | dưới 640 px | đặt ở S3 | estimate |

Các dòng S2/S3 ở bảng trên là **approved pilot measurement** từ ngày 25/10/2026 (D-016): giá trị đã được duyệt qua Home pilot, dùng lại cho các trang sau.

Breakpoint đã được nêu: nút Growth padding 16 px tới 599 px; badge plan-comparison dưới 390 px; callout Emergency xếp dọc dưới 390 px; nút map viewer dưới 600 px; topic cards Roads 2 + 1 full-width từ 1000–1132 px (TXT:1077).

## 6. Khổ màn hình so sánh

Tham chiếu có: 1536 / 768 / 390 px ở 1× cho Home, Issues, Roads. Không có 1024 và 320 (TXT:5, TXT:1077). **Đã chốt (D-012):** duyệt trên desktop và mobile. Khổ cố định để chụp so sánh: **desktop 1536**, **mobile 390**. Kiểm tra kỹ thuật (không trình duyệt riêng): khổ trung gian 768 (TXT:32) và reflow 320 (TXT:33).
