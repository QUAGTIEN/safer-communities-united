# Hồ sơ duyệt nguồn, nội dung và tài nguyên từng section

**ĐÃ DUYỆT PHẦN CÒN LẠI; QUY TẮC ẢNH ĐÃ CẬP NHẬT — CHƯA CODE WEBSITE. Demo dùng tạm ảnh hiện có từ screenshot; xem PROJECT_DECISIONS và assets/demo-current/README.md về vùng ảnh đã tách và giới hạn. Tìm nguồn thay sau.**

[Quyết định mới nhất](PROJECT_DECISIONS.md) · [Danh sách ảnh cần thay/giữ](IMAGE_REPLACEMENT_AUDIT.md)

57 hạng mục/section, 43 ảnh tham chiếu/asset khác nhau, 21 URL gốc tại 33 vị trí hyperlink. Ba maps là file độc lập; 3 multi-panel previews và 37 UI references không đồng nghĩa đủ ảnh nhỏ cho component.

[Bản duyệt có ảnh và các khối mở rộng](SECTION_REVIEW.html) · [Source register](SOURCE_REGISTER.md) · [JSON từng section](section-review.json) · [Toàn văn text layer PDF](BLUEPRINT_TEXT_REFERENCE.md)

## Cách đọc hồ sơ

- Copy, layout, điều hướng và cách xử lý phần thiếu đã được duyệt theo phạm vi ngoài ảnh. Lựa chọn ảnh nhỏ chịu quy tắc mới và inventory riêng; không mặc định screenshot photos là ảnh AI hoặc ảnh cuối cùng.
- English blocks là trích nguyên văn từ đúng trang nguồn, giữ xuống dòng và nhãn biên tập như Heading/Visual/CTA để đối chiếu. Những nhãn/chỉ dẫn đó không tự xuất lên UI; JSON này không phải content props để import thẳng.
- Current/Exact on-screen copy ưu tiên. Research/source notes dài ở appendix/detail; không nhồi vào viewport. Future ((...)) chỉ giữ trong appendix, đã loại khỏi demo excerpts.
- Screenshot-only wording hoặc thiếu approved text được ghi rõ; không tự đoán chữ, chế quote/card finding hay thay nội dung.
- `selected-from-blueprint` nghĩa đã chọn nguồn trong tài liệu, không phải mọi claim được xác minh hoặc ảnh component đã đủ.

## Quyết định hiện hành

### D-01 — Cấu trúc route demo

Trạng thái: `approved`.

Duyệt 9 route trong bảng đề xuất; Comparison nằm tại /the-proposal#compare-the-two-plans, không có menu/route riêng; Outdated Plan dùng /issues#outdated-community-plan. Đây là đề xuất kỹ thuật để duyệt, không phải số trang do blueprint tuyên bố.

### D-02 — Nội dung thiếu và liên kết chi tiết chưa có

Trạng thái: `approved`.

Giữ Proposal intro, About, footer information và full-detail/source thiếu ở preview có nhãn. Dùng nguyên nội dung Comparison đã có trong The Proposal; không tự viết nội dung mới, tạo file/link nguồn hoặc lặp chính phần hiện tại làm tài liệu chi tiết giả.

### D-03 — Ảnh nhỏ bên trong screenshot

Trạng thái: `superseded-by-user-image-policy`.

Chỉ dẫn mới của người dùng thay D-03: demo dùng tạm chính ảnh trong screenshot, tìm nguồn thay sau. Vùng photo đã tách riêng tại assets/demo-current; không phục hồi phần bị che, không dùng AI xóa chữ/icon. Ba bản đồ gốc giữ nguyên tuyệt đối; map/diagram khác chưa rõ nguồn không tự được thay. IMAGE_REPLACEMENT_AUDIT giữ danh sách cho việc thay nguồn về sau. Chưa tìm/tải ảnh bên ngoài và chưa code website.

### D-04 — Copy khác caveat và dữ liệu minh họa

Trạng thái: `approved`.

Giữ nguyên copy theo blueprint; đặt đầy đủ caveat từ PDF cạnh số liệu tương ứng, kể cả Home Water card. Không tự đổi systems thành records hoặc gọi 806 hồ sơ là failure count. Nếu bạn muốn sửa câu gốc cần chỉ định bản sửa; hiện ghi xung đột C-01, chưa tự sửa.

### D-05 — Nguồn có link nhưng chưa kiểm chứng nội dung

Trạng thái: `approved`.

Dùng URL đúng từ PDF làm source links; giữ nhãn provided và trạng thái kiểm tra trong hồ sơ. Không coi URL tồn tại là đã kiểm chứng ngày/phiên bản/policy/số liệu. Ba PDF chính trả 403 với công cụ web nên vẫn giữ đúng link; nguồn chưa có dùng preview riêng.

### D-06 — Growth density/housing và timeline

Trạng thái: `approved`.

Dùng Natural Rural Density Comparison đúng PDF 57 cho density; Housing giữ copy PDF 55–56 nhưng không tự bổ sung bộ ba scenario/map chưa có. Timeline PDF 58 giữ nội dung đã có và preview có nhãn cho visual/data thiếu, không tạo đồ thị định lượng hoặc số liệu mới. Chưa tự gộp/bỏ section.

## 9 route đã duyệt theo D-01

| Nhãn/nhóm | Route | Nội dung |
|---|---|---|
| Our Community | `/` | Home |
| Issues | `/issues` | Issues overview |
| Issue detail | `/issues/roads-safety` | Roads & Safety |
| Issue detail | `/issues/water-septic` | Water & Septic |
| Issue detail | `/issues/growth-daily-life` | Growth, Infrastructure & Daily Life |
| The Facts | `/the-facts` | Evidence & Records |
| The Proposal | `/the-proposal` | Proposal preview + Comparison content |
| Take Action / Get Involved | `/take-action` | Action + separate previews |
| About | `/about` | Labelled preview until approved content is supplied |

Các anchor/route là lựa chọn kỹ thuật cho demo, không phải URL nguồn được nhúng trong blueprint; trạng thái duyệt theo D-01. Get Involved không thêm route; supporter và petition dùng hai anchors/luồng riêng.

### Anchor → section đề xuất

| Target | Section |
|---|---|
| `/#map-comparison` | H-02 |
| `/issues#outdated-community-plan` | I-05 |
| `/issues/roads-safety#street-lighting` | R-02 |
| `/issues/water-septic#septic-scale` | W-02 |
| `/the-proposal#compare-the-two-plans` | C-01 |
| `/the-proposal#roads-comparison` | C-01 |
| `/the-proposal#water-comparison` | C-02 |
| `/the-proposal#growth-housing-comparison` | C-03 |
| `/the-facts#road-evidence` | F-02 |
| `/the-facts#water-evidence` | F-02 |
| `/the-facts#growth-evidence` | F-02 |
| `/the-facts#planning-documents` | F-02 |
| `/take-action#add-your-support` | A-02 |
| `/take-action#supporter-application` | A-03 |
| `/take-action#petition` | A-08 |

## Nhãn preview

Các câu sau là nhãn hệ thống theo phương án D-02/D-04, không phải copy nguyên văn được tuyên bố có trong blueprint; trạng thái duyệt theo hồ sơ hiện hành:

- `Demo preview — approved content for this section has not been supplied.`
- `Demo preview — the source document has not been supplied.`
- `Illustrative sample data — not verified local findings.`

Giữ nguyên hai notice blueprint quy định: `Demo only. Nothing is submitted or saved.` và `Demo only. No signature has been collected.`

## Mâu thuẫn và giới hạn

- **C-01** (H-06, I-03, W-02, W-03): Home Water card PDF 16 gọi 1,626 là systems và dùng repair records; PDF 20 yêu cầu administrative-record scope ZIP 33556, repair không phải failures, phương pháp 3,087 chưa verified. Không tự sửa câu gốc. → D-04.
- **C-02** (L-02, L-03): PDF 55–56 có density/housing scenarios nhưng selected PDF 57 là một composite. Chưa đủ ba scenario images và density-policy map riêng. → D-06.
- **C-03** (R-07, L-01, F-02, A-06): Crash figures, population/housing counts, 124 results và testimonial cards là mẫu/chưa xác minh; copy-only-in-image cũng cần đối chiếu. Không hiện như số liệu/lời chứng thật. → D-04.
- **C-04** (P-01, B-01, B-02): Không có PAGE 07; Proposal/About/footer information chưa có đủ approved copy hoặc selected layout riêng. → D-02.
- **C-05** (A-08): PDF 87 và 88 dùng cùng image object; tên (1 of 2)/(2 of 2) không chứng minh hai artwork khác nhau. Petition dùng toàn văn PDF 85, không copy lại chữ nhỏ từ ảnh. → D-02.
- **C-06** (I-06, R-07, W-08, L-07, F-02): Một số nguồn/card findings/full comparison thiếu file hoặc link trực tiếp; source chung không tự chứng minh từng claim địa phương. Safety card trong ảnh không đủ để xác nhận higher crash frequency. → D-05.

## Bảng tổng quan section

| ID | Nhóm / section | PDF | Copy | Ảnh |
|---|---|---|---|---|
| [G-01](#g-01) | Foundation / Header / Navigation | 3, 4, 5 | selected-from-blueprint | no-independent-visual-selected |
| [G-02](#g-02) | Foundation / Footer | 5, 6 | selected-from-blueprint | no-independent-visual-selected |
| [G-03](#g-03) | Foundation / Design tokens / cards / buttons | 3, 4, 5, 6 | selected-from-blueprint | no-independent-visual-selected |
| [H-01](#h-01) | Home / Introduction / Hero | 7, 17 | selected-from-blueprint | reference-only-component-assets-needed |
| [H-02](#h-02) | Home / Map 2A — Official boundary | 8, 12, 13 | selected-from-blueprint | maps-ready-with-layout-references |
| [H-03](#h-03) | Home / Map 2A — Land / conservation | 9, 12, 14 | selected-from-blueprint | maps-ready-with-layout-references |
| [H-04](#h-04) | Home / Map 2A — Parcels / infrastructure | 10, 12, 14 | selected-from-blueprint | maps-ready-with-layout-references |
| [H-05](#h-05) | Home / Map 2A — Roads / traffic / transition | 11, 12, 15 | selected-from-blueprint | maps-ready-with-layout-references |
| [H-06](#h-06) | Home / Main Issues — four cards | 16, 17 | selected-from-blueprint | reference-only-component-assets-needed |
| [I-01](#i-01) | Issues / Introduction | 17, 18, 19 | selected-from-blueprint | reference-only-component-assets-needed |
| [I-02](#i-02) | Issues / Roads & Safety overview | 18, 19 | selected-from-blueprint | reference-only-component-assets-needed |
| [I-03](#i-03) | Issues / Water & Septic overview | 19, 20, 21 | selected-from-blueprint | reference-only-component-assets-needed |
| [I-04](#i-04) | Issues / Everyday Needs, Growth & Infrastructure | 21, 22, 23 | selected-from-blueprint | reference-only-component-assets-needed |
| [I-05](#i-05) | Issues / Outdated Community Plan | 23, 24, 25 | selected-from-blueprint | reference-only-component-assets-needed |
| [I-06](#i-06) | Issues / The Issues Are Connected | 25, 26, 27 | selected-from-blueprint | reference-only-component-assets-needed |
| [R-01](#r-01) | Roads & Safety / Hero | 28 | selected-from-blueprint | no-independent-visual-selected |
| [R-02](#r-02) | Roads & Safety / Street Lighting | 28, 29, 30 | selected-from-blueprint | reference-only-component-assets-needed |
| [R-03](#r-03) | Roads & Safety / Gunn Highway | 30, 31 | selected-from-blueprint | reference-only-component-assets-needed |
| [R-04](#r-04) | Roads & Safety / Walking, Biking & Crossings | 31, 32 | selected-from-blueprint | reference-only-component-assets-needed |
| [R-05](#r-05) | Roads & Safety / Emergency Access | 32, 33 | selected-from-blueprint | reference-only-component-assets-needed |
| [R-06](#r-06) | Roads & Safety / Map comparison | 33, 34, 35, 36, 37 | selected-from-blueprint | maps-ready-with-layout-references |
| [R-07](#r-07) | Roads & Safety / Records & Evidence | 38, 39 | selected-from-blueprint | reference-only-component-assets-needed |
| [R-08](#r-08) | Roads & Safety / Planning frameworks summary | 39, 40, 41 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-01](#w-01) | Water & Septic / Hero / core issue | 42, 43 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-02](#w-02) | Water & Septic / Scale of septic | 43, 44, 20 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-03](#w-03) | Water & Septic / Construction / repair records | 44, 45, 20 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-04](#w-04) | Water & Septic / Connected Water | 45, 46, 47 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-05](#w-05) | Water & Septic / Water & Wastewater Options | 47, 48, 49 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-06](#w-06) | Water & Septic / Core Conflict — concise approved panel | 49, 50, 51 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-07](#w-07) | Water & Septic / Comparison summary | 51, 52 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-08](#w-08) | Water & Septic / Evidence cards | 52, 53 | selected-from-blueprint | reference-only-component-assets-needed |
| [W-09](#w-09) | Water & Septic / Next issue | 53 | selected-from-blueprint | reference-only-component-assets-needed |
| [L-01](#l-01) | Growth & Daily Life / Hero — Then / Today | 54, 55 | selected-from-blueprint | reference-only-component-assets-needed |
| [L-02](#l-02) | Growth & Daily Life / Very low density | 55, 56, 57 | selected-from-blueprint | reference-only-component-assets-needed |
| [L-03](#l-03) | Growth & Daily Life / Housing consequences / scenarios | 55, 56 | selected-from-blueprint | reference-only-component-assets-needed |
| [L-04](#l-04) | Growth & Daily Life / Services / daily needs | 57, 58 | selected-from-blueprint | reference-only-component-assets-needed |
| [L-05](#l-05) | Growth & Daily Life / Growth and infrastructure timeline | 58 | selected-from-blueprint | no-independent-visual-selected |
| [L-06](#l-06) | Growth & Daily Life / Comparison summary | 59 | selected-from-blueprint | reference-only-component-assets-needed |
| [L-07](#l-07) | Growth & Daily Life / Evidence cards | 59, 60 | selected-from-blueprint | reference-only-component-assets-needed |
| [L-08](#l-08) | Growth & Daily Life / Outdated Community Plan continuation | 60 | selected-from-blueprint | reference-only-component-assets-needed |
| [C-01](#c-01) | Comparison / The Proposal / Roads & Safety comparison | 61, 62, 63 | selected-from-blueprint | reference-only-component-assets-needed |
| [C-02](#c-02) | Comparison / The Proposal / Water & Wastewater comparison | 64, 65 | selected-from-blueprint | reference-only-component-assets-needed |
| [C-03](#c-03) | Comparison / The Proposal / Growth & Housing — Screenshot 110 | 65, 66, 67 | selected-from-blueprint | reference-only-component-assets-needed |
| [C-04](#c-04) | Comparison / The Proposal / What remains if Plan is removed | 67, 68 | selected-from-blueprint | reference-only-component-assets-needed |
| [P-01](#p-01) | Comparison / The Proposal / Proposed Change introduction — missing spec | 3, 6, 61, 67, 68, 84, 85 | missing-approved-public-copy | no-independent-visual-selected |
| [F-01](#f-01) | Evidence & Records / The Facts / Explore Evidence by Issue | 69, 70 | selected-from-blueprint | reference-only-component-assets-needed |
| [F-02](#f-02) | Evidence & Records / The Facts / Evidence Library | 70, 71, 72 | selected-from-blueprint | reference-only-component-assets-needed |
| [A-01](#a-01) | Action / Hero | 73, 74 | selected-from-blueprint | reference-only-component-assets-needed |
| [A-02](#a-02) | Action / Three Main Actions / Add Your Support | 74, 77, 78, 79 | selected-from-blueprint | reference-only-component-assets-needed |
| [A-03](#a-03) | Action / Supporter Application — combined preview | 75, 76, 77 | selected-from-blueprint | no-independent-visual-selected |
| [A-04](#a-04) | Action / Share Your Story preview | 79, 80 | selected-from-blueprint | reference-only-component-assets-needed |
| [A-05](#a-05) | Action / Share Information preview | 78, 80, 81 | selected-from-blueprint | reference-only-component-assets-needed |
| [A-06](#a-06) | Action / Illustrative community stories | 81, 82 | selected-plus-visually-checked-screenshot-text | reference-only-component-assets-needed |
| [A-07](#a-07) | Action / Final CTA | 82, 83 | selected-from-blueprint | reference-only-component-assets-needed |
| [A-08](#a-08) | Action / Approved Petition + signing preview | 83, 84, 85, 86, 87, 88 | selected-from-blueprint | reference-only-component-assets-needed |
| [B-01](#b-01) | About / Information / About | 3, 5, 6 | missing-approved-public-copy | no-independent-visual-selected |
| [B-02](#b-02) | About / Information / Footer information destinations | 5, 6 | missing-approved-public-copy | no-independent-visual-selected |

## Foundation

<a id="g-01"></a>

### G-01 — Header / Navigation

- PDF nguồn: 3, 4, 5.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Our Community** → /.
- CTA **Issues** → /issues.
- CTA **The Facts** → /the-facts.
- CTA **The Proposal** → /the-proposal.
- CTA **Take Action** → /take-action.
- CTA **About** → /about.
- CTA **Get Involved** → /take-action.
- Cách dùng: Get Involved → /take-action. Fixed/light header; mobile menu. Tên route là đề xuất, menu labels giữ nguyên.
- **Thiếu/cần duyệt:** Logo file độc lập chưa được cung cấp; screenshot không phải logo vector.

**English source block — PDF 3:**

```text
Main Navigation:
Our Community | Issues | The Facts | The Proposal | Take Action | About
Highlighted Button:
Get Involved
```

<a id="g-02"></a>

### G-02 — Footer

- PDF nguồn: 5, 6.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Explore / Take Action / About** → Theo D-01.
- CTA **Updates / Contact / Sources & Methods / Accessibility / Edits / Privacy** → Preview theo B-02.
- Cách dùng: Foundation override các biến thể slogan/link groups trong screenshot cũ.
- **Thiếu/cần duyệt:** Nội dung/URL riêng cho các footer information links chưa có.

**English source block — PDF 5:**

```text
Footer
Navy background, simple structure.
Safer Communities United
Putting the health, safety, and welfare of people first.
The main links are divided into three groups:
Explore: Our Community · Issues · The Facts · The Proposal
Get Involved: Take Action · Updates · Contact
Information: About · Sources & Methods · Accessibility · Edits · Privacy
```

<a id="g-03"></a>

### G-03 — Design tokens / cards / buttons

- PDF nguồn: 3, 4, 5, 6.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- Cách dùng: Chọn Source Serif 4 cho headings và Inter cho body trong hai lựa chọn blueprint cho phép. Sáu màu đúng mã; không thêm theme của shadcn.

**English source block — PDF 3:**

```text
Dark Navy — #17324D
The main color of the website. Use it for headings, important text, the navigation bar, footer, and
sections that need to create a serious feeling.
Teal — #28736D
Use it for water, environment, data, maps, and content related to solutions or the countywide planning
framework.
```


**English source block — PDF 4:**

```text
Coral Red — #C55245
Accent color. Use it for serious issues, data that needs attention, highlights, and the main action button.
Do not use it too much, so the color keeps its visual impact.
Cream White — #F7F4EE
Main background color, creating a warm and easy-to-read feeling.
White — #FFFFFF
Use it for content cards, documents, and reading areas.
Light Gray — #D8DEE3
Use only for divider lines, borders, and secondary information.
Principle: Navy + cream white are the foundation; teal and coral are the two accent colors. Do not add
many additional colors on individual pages.
```


**English source block — PDF 4:**

```text
Headings: Source Serif 4 or Merriweather — creates a serious, editorial feel that is also suitable for
community-focused content.
Body Text: Inter — clear, modern, and easy to read on both computers and phones.
```


## Home

<a id="h-01"></a>

### H-01 — Introduction / Hero

- PDF nguồn: 7, 17.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p017-01-home](../assets/blueprint/ui-references/home/bp-p017-01-home.png), 1536 × 1024, `ui-reference`, PDF 17.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **View the Issues →** → /issues.
- CTA **View the Evidence →** → /the-facts.
- Cách dùng: Giữ opening design; không thêm đoạn giải thích dài vào hero.
- **Thiếu/cần duyệt:** Hero landscape photo và bốn thumbnail trong Home chưa có file độc lập.

**English source block — PDF 7:**

```text
On-screen eyebrow: A SAFER, STRONGER KEYSTONE–ODESSA
Main Heading
Putting the health, safety, and welfare of people first.
Message
 We envision a future where community growth protects people and places—supported by
responsible planning, safer infrastructure, environmental stewardship, and decisions that reflect the
needs of today’s residents and generations to come.
Problem Message
 The Keystone–Odessa community’s health, safety and welfare is endangered due to its outdated
community plan.
```

<a id="h-02"></a>

### H-02 — Map 2A — Official boundary

- PDF nguồn: 8, 12, 13.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `maps-ready-with-layout-references`. Map độc lập PDF 8 sẵn có; PDF 13 là layout preview, không thay GIS map.
- Ảnh: [bp-p008-01-official-boundary-map](../assets/blueprint/maps/bp-p008-01-official-boundary-map.png), 1544 × 1621, `map`, PDF 8.
- Ảnh: [bp-p013-01-map-comparison-panel-1](../assets/blueprint/layout-previews/bp-p013-01-map-comparison-panel-1.png), 661 × 750, `layout-preview`, PDF 13, 35.
- Nguồn: [SRC-01 — View the official map — Figure 3, page 17](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf#page=17); `web-fetch-403`.
- CTA **View the official map — Figure 3, page 17** → SRC official-map; đúng URL được cung cấp.
- Cách dùng: Dùng map PDF 8 trực tiếp; PDF 13 chỉ là reference layout. Bắt đầu chuỗi ba maps xếp dọc.

**English source block — PDF 8:**

```text
THE NIMBY MAP
Source: Keystone–Odessa Community Plan
View the official map — Figure 3, page 17
```

<a id="h-03"></a>

### H-03 — Map 2A — Land / conservation

- PDF nguồn: 9, 12, 14.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `maps-ready-with-layout-references`. Map PDF 9 sẵn có; PDF 14 là preview composition. Giữ nguồn/legend/caveat.
- Ảnh: [bp-p009-01-land-parcels-conservation-map](../assets/blueprint/maps/bp-p009-01-land-parcels-conservation-map.png), 2047 × 1351, `map`, PDF 9.
- Ảnh: [bp-p014-01-map-comparison-panel-2](../assets/blueprint/layout-previews/bp-p014-01-map-comparison-panel-2.png), 661 × 1040, `layout-preview`, PDF 14, 36.
- Nguồn: [SRC-02 — Plan Hillsborough;](https://gis.tpcmaps.org/arcgis/rest/services/pigi/pigiHC/MapServer/3); `provided-not-opened`.
- Nguồn: [SRC-03 — FNAI (September 2026);](https://www.fnai.org/publications/gis-data); `provided-not-opened`.
- Nguồn: [SRC-04 — acquired ELAPP;](https://maps.hillsboroughcounty.org/arcgis1a/rest/services/SDEMapServices/Environmental/FeatureServer/1); `provided-not-opened`.
- Nguồn: [SRC-05 — SWFWMD (2023).](https://www45.swfwmd.state.fl.us/arcgis12/rest/services/OpenData/LandUseLandCoverPost2014/MapServer/3); `provided-not-opened`.
- Cách dùng: Giữ 34.3%/8,025/23,387 acres, ngày và overlap method; landscape protections không đồng nghĩa toàn bộ government-owned.
- **Thiếu/cần duyệt:** SCU calculation files cho 34.3% không có; URL layer không tự tái tạo snapshot/calculation.

**English source block — PDF 9:**

```text
VS.
WHAT THE NIMBY MAP DOESN’T SHOW YOU
The land. The neighborhoods. The traffic.
Added detail: land protections, parcel sizes and traffic volumes.
LOOK AT WHAT’S ALREADY HERE.
Existing homes, divided lots and major roads are part of Keystone–Odessa today. The
map shows an established residential community alongside its natural landscape.
THE COMMUNITY PLAN ISN’T THE ONLY THING PROTECTING NATURE.
Over one-third of the Keystone–Odessa Community Plan area is mapped conservation
land, lakes, reservoirs or ponds.
Public conservation lands and lakes are part of what makes this area special. Separate
ownership and environmental protections also matter; removing the Community Plan
would not automatically remove them.
GIS measurement, 16 October 2026: 34.3% (8,025 of 23,387 acres); conservation land and mapped lakes/reservoirs/ponds clipped to
the adopted Plan boundary, with overlaps counted once. Sources: Plan Hillsborough; FNAI (September 2026); acquired ELAPP;
SWFWMD (2023).
PROTECT THE LANDSCAPE. QUESTION THE PLAN.
PROTECT NATURE. PROTECT PEOPLE.
Conservation lands, lakes and water-resource protections already exist here.
```

<a id="h-04"></a>

### H-04 — Map 2A — Parcels / infrastructure

- PDF nguồn: 10, 12, 14.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `maps-ready-with-layout-references`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p009-01-land-parcels-conservation-map](../assets/blueprint/maps/bp-p009-01-land-parcels-conservation-map.png), 2047 × 1351, `map`, PDF 9.
- Ảnh: [bp-p014-01-map-comparison-panel-2](../assets/blueprint/layout-previews/bp-p014-01-map-comparison-panel-2.png), 661 × 1040, `layout-preview`, PDF 14, 36.
- Nguồn: [SRC-06 — Parcel source and calculation inputs — County parcel GIS](https://maps.hillsboroughcounty.org/arcgis1a/rest/services/SDEMapServices/ParcelPublishing/FeatureServer/12); `provided-not-opened`.
- Nguồn: [SRC-07 — Official Community Plan boundary — County GIS](https://maps.hillsboroughcounty.org/arcgisapp/rest/services/DSD_Viewer/Landuse_and_Planning/MapServer/2); `provided-not-opened`.
- Cách dùng: 4,542 parcels không phải occupied homes; 2,249/49.5% dưới một acre. Methodology plain text theo PDF 12, không làm expandable control.
- **Thiếu/cần duyệt:** Không có file snapshot October 2, 2026 hoặc bảng tính SCU độc lập.

**English source block — PDF 10:**

```text
THOUSANDS OF HOMES. REAL INFRASTRUCTURE NEEDS.
Our parcel analysis identified 4,542 improved single-family parcels. Nearly half were smaller than one
acre. Infrastructure decisions must reflect the community already here.
SCU analysis of the October 2, 2026 County GIS snapshot: 2,249 of 4,542 selected improved single-family parcels had reported
acreage below one acre (49.5%). Parcels are not a count of occupied homes. Public holdings, wetlands and water-protection
layers describe different protections; they are not all government-owned land.
Parcel source and calculation inputs — County parcel GIS
Official Community Plan boundary — County GIS
```

<a id="h-05"></a>

### H-05 — Map 2A — Roads / traffic / transition

- PDF nguồn: 11, 12, 15.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `maps-ready-with-layout-references`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p011-01-roads-traffic-map](../assets/blueprint/maps/bp-p011-01-roads-traffic-map.png), 2046 × 1432, `map`, PDF 11.
- Ảnh: [bp-p015-01-map-comparison-panel-3](../assets/blueprint/layout-previews/bp-p015-01-map-comparison-panel-3.png), 661 × 772, `layout-preview`, PDF 15, 37.
- Nguồn: [SRC-08 — Read the County’s 2024 traffic data](https://services.arcgis.com/apTfC6SUmnNfnxuF/arcgis/rest/services/LOS_Update_2024/FeatureServer/6); `provided-not-opened`.
- Nguồn: [SRC-09 — Read the Van Dyke study scope — page 13](https://planhillsborough.org/wp-content/uploads/2025/06/LRC-June-Draft-Agenda-Packet.pdf#page=13); `web-fetch-403`.
- CTA **Explore the evidence →** → /the-facts.
- CTA **Read the petition →** → /take-action#petition.
- CTA **Become a supporter →** → /take-action#supporter-application.
- CTA **Continue to Roads & Safety** → /issues/roads-safety.
- Cách dùng: 19,912 vehicle movements, không unique people/injuries. Ba map full width; chỉ link full-size, không viewer GIS/zoom mới.

**English source block — PDF 11:**

```text
MAJOR ROADS. EVERYONE’S SAFETY MATTERS.
One Gunn Highway section carries nearly 20,000 vehicle movements a day. People living
here and traveling through deserve better options.
2024 annual-average daily traffic: 19,912 on Gunn Highway, Pasco County line to Van Dyke Road. This measures
vehicle movements, not unique people or injuries. SCU map compiled from County road and traffic data.
Read the County’s 2024 traffic data
Continue to Roads & Safety: see why the Van Dyke study excluded Gunn Highway to west of Suncoast
Parkway from capacity-improvement analysis because of Comprehensive Plan constraints.
Read the Van Dyke study scope — page 13
KEEP THE LANDSCAPE.
```

<a id="h-06"></a>

### H-06 — Main Issues — four cards

- PDF nguồn: 16, 17.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p017-01-home](../assets/blueprint/ui-references/home/bp-p017-01-home.png), 1536 × 1024, `ui-reference`, PDF 17.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **View Roads & Safety →** → /issues/roads-safety.
- CTA **View Water & Septic →** → /issues/water-septic.
- CTA **View Growth & Daily Life →** → /issues/growth-daily-life.
- CTA **View the Community Plan →** → /issues#outdated-community-plan.
- Cách dùng: Chọn on-screen heading và on-screen card copy thay hai đoạn mô tả cũ, không trộn versions.
- **Thiếu/cần duyệt:** Bốn card photos chưa có độc lập; C-01 cần duyệt cách đặt caveat cạnh Water card.
- Xung đột: C-01.

**English source block — PDF 16:**

```text
On-screen heading: Major problems under the current community plan. Keep the opening Home design
unchanged.
On-screen eyebrow: OUR KEY ISSUES
Click on each issue below to learn more about how these problems impact our community and why
change is needed.
```


**English source block — PDF 16:**

```text
Our roads are dangerous!
 Traffic, intersections, lighting, road safety and emergency access put residents, students and
commuters at risk.
```


**English source block — PDF 16:**

```text
Our water is at risk!
 1,626 known septic systems, 1,210 likely septic, and 806 repair records. Septic systems and wells
threaten groundwater, drinking water, health and the environment.
```


**English source block — PDF 16:**

```text
Everyday needs are harder to access!
 Housing, commute time, healthcare, food, jobs and essential services are limited due to current
restrictions.
```


**English source block — PDF 16:**

```text
The Community Plan is holding our community back!
  Created in 2001 · Still shaping Keystone–Odessa today
```


**English source block — PDF 16:**

```text
On-screen card copy: Outdated rules adopted in 2001 continue to limit solutions for our roads,
water, infrastructure, housing, and essential services.
```


## Issues

<a id="i-01"></a>

### I-01 — Introduction

- PDF nguồn: 17, 18, 19.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p019-01-roads-overview](../assets/blueprint/ui-references/issues/bp-p019-01-roads-overview.png), 1476 × 984, `ui-reference`, PDF 19.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Four issue navigation choices** → I-02 / I-03 / I-04 / I-05 anchors.
- Cách dùng: Không dùng purpose/editorial paragraphs làm intro bổ sung.

**English source block — PDF 17:**

```text
On-screen heading: Issues affecting Keystone–Odessa.
```


**English source block — PDF 18:**

```text
From roads and water to growth, housing, infrastructure and essential services, the current Community Plan
creates real challenges for today’s residents. Explore each issue below to see how these problems affect our
community and why change is needed.
```

<a id="i-02"></a>

### I-02 — Roads & Safety overview

- PDF nguồn: 18, 19.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p019-01-roads-overview](../assets/blueprint/ui-references/issues/bp-p019-01-roads-overview.png), 1476 × 984, `ui-reference`, PDF 19.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- CTA **Explore Roads & Safety →** → /issues/roads-safety.
- **Thiếu/cần duyệt:** Road photo/icons chưa có component assets riêng.

**English source block — PDF 18:**

```text
Roads must meet the safety needs of today’s community
```


**English source block — PDF 18:**

```text
Gunn Highway — A key corridor with specific restrictions under the current Community Plan.
Street Lighting — Limited by current rules, even where lighting could improve safety.
Traffic & Intersections — Growing traffic and safety concerns at key intersections.
Walking & Biking — Limited pedestrian and bicycle facilities along many roads.
Emergency Access — Road conditions can affect emergency response times.
Our road network serves residents, commuters, students, emergency responders, deliveries and essential
services. Safe and reliable roads are critical for everyone in Keystone–Odessa.
```

<a id="i-03"></a>

### I-03 — Water & Septic overview

- PDF nguồn: 19, 20, 21.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p021-01-water-overview](../assets/blueprint/ui-references/issues/bp-p021-01-water-overview.png), 1476 × 1250, `ui-reference`, PDF 21.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-17 — Source: EPA — Septic Systems and Drinking Water](https://www.epa.gov/septic/septic-systems-and-drinking-water); `primary-page-opened`.
- CTA **Explore Water & Septic →** → /issues/water-septic.
- Cách dùng: Six topics lấy tên từ PDF 19–20; long explanations giữ ở source reference. Data scope bắt buộc.
- **Thiếu/cần duyệt:** FLWMI administrative dataset, EHDConst–Repair extract và phương pháp 3,087 chưa có.
- Xung đột: C-01.

**English source block — PDF 19:**

```text
WHAT ARE WE PROTECTING IF WE DON’T PUT CLEAN WATER FIRST?
Main Content
Private wells. Septic systems. Lakes. Wetlands. The water beneath our homes matters far more than a planning
label. Protecting Keystone–Odessa should mean protecting the people who live here, not treating its
Community Plan as untouchable.
```


**English source block — PDF 20:**

```text
Key Data
7,191 records analyzed
3,087 properties in the three septic groups
806 septic construction/repair records
```


**English source block — PDF 20:**

```text
Closing below illustration
KEEP WHAT MAKES KEYSTONE–ODESSA SPECIAL. CHANGE THE PLAN THAT SHAPES ITS
FUTURE.
Petition connection
Our petition calls for removing the Keystone–Odessa Community Plan and relying on the County’s
broader planning framework. Our priority: health, safety and welfare.
Button
  Explore Water & Septic →
```


**English source block — PDF 20:**

```text
Data scope: 7,191 administrative records for ZIP 33556, not a count of systems within the Community Plan
boundary. 806 construction/repair records, 1998–2023, are not failure counts. The method behind the 3,087
figure remains unverified.
```

<a id="i-04"></a>

### I-04 — Everyday Needs, Growth & Infrastructure

- PDF nguồn: 21, 22, 23.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p023-01-everyday-needs](../assets/blueprint/ui-references/issues/bp-p023-01-everyday-needs.png), 1092 × 1440, `ui-reference`, PDF 23.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Explore Growth & Daily Life** → /issues/growth-daily-life.
- Cách dùng: Ba messages mới thay bảy cards/impact chain cũ. Giữ Illustration và Schematic service pins, not verified locations. Không thêm evidence box chưa verified.
- **Thiếu/cần duyệt:** Schematic service map chưa có file độc lập; source cho evidence box chưa được cung cấp.

**English source block — PDF 21, 22:**

```text
YOU CHOSE RURAL LIVING. SHOULD THAT MEAN COMPROMISING ON SAFETY?
Main Content
A longer drive for groceries may be a choice you’re happy to make. But protecting rural character
should never be an excuse to dismiss safe roads, essential services or responsible infrastructure.
Loving Keystone–Odessa does not mean treating its Community Plan as untouchable.
Three prominent messages
THE QUESTION ISN’T HOW FAR YOU DRIVE. IT’S HOW SAFELY YOU GET THERE.
Distance alone tells only part of the story. Road conditions, crossings, lighting and safe connections
matter too.
ESSENTIAL SERVICES ARE MORE THAN SHOPPING CONVENIENCE.
Healthcare, childcare and everyday necessities belong in the discussion about a community’s future. A
rural setting does not make those needs disappear.
PROTECT THE COUNTRYSIDE. DON’T TREAT THE PLAN AS SACRED.
A planning document is a policy choice. Supporting the landscape does not require supporting every
restriction written into that document.
Petition connection
We want the Keystone–Odessa Community Plan retired. Our priority is a planning framework that puts
health, safety and welfare at the centre of decisions about our community.
```

<a id="i-05"></a>

### I-05 — Outdated Community Plan

- PDF nguồn: 23, 24, 25.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png), 1672 × 941, `ui-reference`, PDF 25.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-21 — Read the September 23, 2026 agency response](https://drive.google.com/file/d/1z6o0KhucgGOyLMXBGAMnMYcSHDlrFQQT/view); `provided-not-opened`.
- CTA **Learn About the Community Plan →** → /the-proposal#compare-the-two-plans.
- Cách dùng: Target anchor /issues#outdated-community-plan là điểm vào overview này; timeline status là dated 2026 record, không live.
- **Thiếu/cần duyệt:** Boundary illustration/timeline thumbnails chưa có độc lập; response link chưa mở xác minh nội dung.

**English source block — PDF 23:**

```text
The Community Plan was created for a Keystone–Odessa of more than two decades ago
```


**English source block — PDF 24:**

```text
Main Content
The Keystone–Odessa Community Plan was adopted in 2001 and continues to place a specific policy
layer over the area.
During that time, the community’s population, traffic, infrastructure needs, development conditions, and
everyday needs have changed.
Timeline
2001 — COMMUNITY PLAN
The Community Plan was adopted.
   ↓
TODAY — MORE THAN TWO DECADES LATER
The community’s population, traffic, infrastructure needs, development conditions, and everyday needs
have changed.
   ↓
2026 — CURRENT STATUS
According to the public-record response, the BOCC had not requested the Planning Commission to
complete a new update to the Keystone–Odessa Community Plan.
Areas Affected by This Policy Layer
Roads & Transportation
Rules related to road expansion, lighting, and transportation characteristics.
Water & Wastewater
Rules and exceptions related to water and wastewater infrastructure.
Growth & Housing
Specific requirements related to density, lot size, and development.
Infrastructure & Services
Rules that affect how the community can respond to infrastructure and service needs.
```

<a id="i-06"></a>

### I-06 — The Issues Are Connected

- PDF nguồn: 25, 26, 27.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p027-01-issues-connected](../assets/blueprint/ui-references/issues/bp-p027-01-issues-connected.png), 1355 × 1161, `ui-reference`, PDF 27.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- CTA **Petition connection** → /take-action#petition.
- Cách dùng: Giữ ba nhánh và convergence. Sơ đồ không thiết lập Plan caused harm; các câu Place/Diagram trong excerpt là chỉ dẫn biên tập, không UI copy.
- **Thiếu/cần duyệt:** Một supporting source trực tiếp cho từng cột roads/water/growth còn cần source check theo PDF 26.
- Xung đột: C-06.

**English source block — PDF 25, 26:**

```text
NO PLAN IS MORE IMPORTANT THAN THE PEOPLE IT SERVES.
Your roads. Your water. Your daily life. The Keystone–Odessa Community Plan influences decisions
across all three. A document with that much influence should earn its place by serving the community,
not remain beyond question.
Diagram
Place “ONE PLAN. DECISIONS THAT REACH INTO EVERYDAY LIFE.” in the center.
From the center, divide into three main branches:
ROADS & SAFETY
Road Rules
WHAT GOOD IS RURAL CHARACTER WITHOUT SAFE WAYS TO GET AROUND?
Lighting, crossings, road improvements and reliable access belong at the heart of planning for people.
   ↓
Traffic · Lighting · Ability to Improve Roads
   ↓
Safety · Mobility · Emergency Access
WATER & SEPTIC
Water & Wastewater Rules
ARE WE PROTECTING OUR WATER—OR DEFENDING A SET OF RULES?
Water and wastewater policies should be judged by how well they protect people and the environment.
   ↓
Septic · Wells · Groundwater · Wellfield
    ↓
Health · Water Resources · Environment
GROWTH & DAILY LIFE
Land Use & Development Rules
SHOULD PEOPLE HAVE TO FIT THE PLAN, OR SHOULD THE PLAN SERVE PEOPLE?
Housing, infrastructure and access to essential services shape everyday life. Those needs deserve
more than a rural label.
    ↓
Housing · Infrastructure · Service Locations · Travel Distance
    ↓
Access · Quality of Life · Welfare
Final Convergence Point
HEALTH. SAFETY. WELFARE. THESE SHOULD BE THE PRIORITIES.
Show the three policy areas within one planning system. The illustration connects policy topics and
priorities; it does not establish that the Plan caused harm.
We believe Keystone–Odessa needs a different planning approach. Sign the petition to retire the
Community Plan and put health, safety and welfare at the centre of the County’s decisions.
```


## Roads & Safety

<a id="r-01"></a>

### R-01 — Hero

- PDF nguồn: 28.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **View the Road Issues ↓** → /issues/roads-safety#street-lighting.
- Cách dùng: Chỉ định visual: local road/Gunn Highway, traffic + two-lane + residential + users; cần approved file phù hợp.
- **Thiếu/cần duyệt:** PDF không gắn hero photo độc lập/selected screenshot hero riêng. Không tự chọn ảnh mới.

**English source block — PDF 28:**

```text
Label
ROADS & SAFETY
Heading
Our roads must be safe for everyone.
Content
The road network in Keystone–Odessa serves residents, commuters, students, businesses, emergency
services, and people traveling between nearby areas.
The specific rules of the Community Plan affect how roads, lighting, and transportation improvements
can be planned to respond to current conditions.
Four Key Issues
Traffic · Lighting · Road Safety · Emergency Access
```

<a id="r-02"></a>

### R-02 — Street Lighting

- PDF nguồn: 28, 29, 30.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p030-01-street-lighting](../assets/blueprint/ui-references/roads/bp-p030-01-street-lighting.png), 1476 × 984, `ui-reference`, PDF 30.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-11 — Read FHWA guidance on lighting](https://highways.dot.gov/safety/proven-safety-countermeasures/lighting); `primary-page-opened`.
- CTA **Read the Community Plan** → SRC livable.
- CTA **Read FHWA guidance on lighting** → SRC lighting.
- Cách dùng: Current on-screen text điều chỉnh selected image; dài research/source notes ở phần chi tiết, không nhồi vào block.

**English source block — PDF 28:**

```text
Does someone have to get hurt first? The Community Plan takes a restrictive approach to street lighting
and allows lighting when public safety is at risk.
```


**English source block — PDF 29:**

```text
FHWA explains that modern lighting can precisely target where light is needed while minimizing spill
into the night sky and neighboring properties. Rural character should drive better design, not end the
safety discussion.
```


**English source block — PDF 29:**

```text
Current on-screen copy for the selected image
Street lighting should respond to public safety needs.
ACTUAL SAFETY NEEDS
Adequate street lighting is important for:
Visibility for drivers
Intersections and high-risk areas
Pedestrians and cyclists
Night travel and daily commutes
WHY IT MATTERS
Limited street lighting can make it more difficult and dangerous to travel at night, increasing the risk of
crashes and affecting the safety of residents, students, commuters and emergency responders.
It directly impacts the health, safety and welfare of our community.
Additional text shown in the selected image: “Street lighting may be considered when public safety is at risk.”
```

<a id="r-03"></a>

### R-03 — Gunn Highway

- PDF nguồn: 30, 31.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p031-01-gunn-highway](../assets/blueprint/ui-references/roads/bp-p031-01-gunn-highway.jpg), 1476 × 984, `ui-reference`, PDF 31.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-12 — Read the County’s 2024 traffic data](https://services.arcgis.com/apTfC6SUmnNfnxuF/arcgis/rest/services/LOS_Update_2024/FeatureServer/6/query?objectIds=582%2C136%2C53%2C108%2C479&outFields=%2A&returnGeometry=false&f=json); `provided-not-opened`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- CTA **View the Community Plan Policy →** → SRC livable.
- CTA **View the County Table →** → SRC county; constrained-road pages 250–251 theo blueprint.
- CTA **Read the County’s 2024 traffic data** → SRC traffic-query.
- Cách dùng: Giữ đúng đoạn đường, OBJECTID/LOS theo source notes PDF 30; không dùng AADT làm crash count.
- **Thiếu/cần duyệt:** Ảnh road và route map trong screenshot chưa có file riêng; County table chưa được đối chiếu do fetch 403.

**English source block — PDF 30:**

```text
On-screen heading: Expansion of Gunn Highway is restricted.
The Community Plan identifies Gunn Highway as a road with expansion restrictions; the County’s
constrained-road table also references the Community Plan for the section from South Mobley Road to
Pasco County.
19,912 DAILY VEHICLE MOVEMENTS. TWO LANES. The County’s 2024 data put Gunn Highway from
the Pasco County line to Van Dyke Road at 19,912 annual-average daily vehicle movements. Both daily
and peak-direction service are rated E against a D standard. These figures demand a serious response.
```


**English source block — PDF 30, 31:**

```text
Current on-screen copy for the selected image
The Community Plan identifies Gunn Highway as a road with restrictions on further expansion.
COMMUNITY PLAN RULE
Gunn Highway cannot be widened further.
View the Community Plan Policy →
COUNTY CONSTRAINED-ROAD TABLE
The County’s constrained-road table also references the Community Plan for this section.
View the County Table →
WHY IT MATTERS
Limits on expanding Gunn Highway affect traffic, safety and access for residents, commuters, students and
emergency services.
```

<a id="r-04"></a>

### R-04 — Walking, Biking & Crossings

- PDF nguồn: 31, 32.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p032-01-walking-biking-crossings](../assets/blueprint/ui-references/roads/bp-p032-01-walking-biking-crossings.png), 1476 × 984, `ui-reference`, PDF 32.
- Nguồn: [SRC-13 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf#page=127); `web-fetch-403`.
- Nguồn: [SRC-14 — Read FHWA guidance on walkways](https://highways.dot.gov/safety/proven-safety-countermeasures/walkways); `primary-page-opened`.
- CTA **Read the County policy and full criteria** → SRC mobility-page.
- CTA **Read FHWA guidance on walkways** → SRC walkways.
- Cách dùng: Giữ Illustration label của ảnh; FHWA là guidance chung.

**English source block — PDF 31:**

```text
On-screen heading: Pedestrians and cyclists face safety risks.
The safety of pedestrians, cyclists, and people crossing the road needs to be considered together with
traffic, speed, crossings, and the actual conditions on each corridor.
The Community Plan includes content about pedestrian/equestrian crossings, traffic controls, trails, and
bikeways.
SAFE WALKING SHOULD NOT BE AN EXCEPTION. County Mobility Objective 2.2 calls for protecting
pedestrians, children, seniors and people with disabilities. FHWA recommends connected walking
routes without gaps. A safe route matters whether you are going to school, visiting a neighbor or using a
wheelchair.
Sources: County Comprehensive Plan, Mobility Objective 2.2 and Policies 2.2.1–2.2.7, p. 127; FHWA Walkways,
FHWA-SA-21-047, connected routes and accessibility.
Read the County policy and full criteria
Read FHWA guidance on walkways
```


**English source block — PDF 31, 32:**

```text
Current on-screen copy for the selected image
COMMUNITY PLAN RULE
Includes pedestrian/equestrian crossings, traffic controls, trails and bikeways.
ACTUAL CONDITIONS
Traffic and higher speeds
Limited pedestrian and bicycle facilities
Safety at intersections and crossings
Continuous routes are limited
WHY IT MATTERS
Limited and unsafe conditions for pedestrians and cyclists increase the risk of crashes and affect the safety
of residents, students, commuters and everyone who uses these roads.
Safe walking and biking routes are essential for a safer, healthier and more connected community.
```

<a id="r-05"></a>

### R-05 — Emergency Access

- PDF nguồn: 32, 33.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p033-01-emergency-access](../assets/blueprint/ui-references/roads/bp-p033-01-emergency-access.jpg), 1476 × 984, `ui-reference`, PDF 33.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Cách dùng: Không tự tạo số phút response hoặc claim delay đã được đo.
- **Thiếu/cần duyệt:** Không có dataset response-time/delay hoặc independent photo trong bộ file.

**English source block — PDF 32:**

```text
On-screen heading: Emergency access must be reliable.
The road network serves ambulances, fire services, police, and emergency travel. Access and travel
time need to be considered in decisions about road infrastructure.
```


**English source block — PDF 32, 33:**

```text
Current on-screen copy for the selected image
COMMUNITY PLAN RULE
The Community Plan includes content about emergency access as part of transportation and roadway
policies.
KEY FACTORS
Emergency response time
Intersections and road design
Congestion and delays
Road conditions
Access during severe weather
WHY IT MATTERS
Reliable emergency access is essential for residents, students, commuters and the entire community. Delays
can affect emergency response times and public safety.
Road decisions should support faster, safer emergency access for the community.
Additional text shown in the selected image: “The plan includes policies related to emergency access, traffic
controls and roadway improvements.”
```

<a id="r-06"></a>

### R-06 — Map comparison

- PDF nguồn: 33, 34, 35, 36, 37.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `maps-ready-with-layout-references`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p008-01-official-boundary-map](../assets/blueprint/maps/bp-p008-01-official-boundary-map.png), 1544 × 1621, `map`, PDF 8.
- Ảnh: [bp-p009-01-land-parcels-conservation-map](../assets/blueprint/maps/bp-p009-01-land-parcels-conservation-map.png), 2047 × 1351, `map`, PDF 9.
- Ảnh: [bp-p011-01-roads-traffic-map](../assets/blueprint/maps/bp-p011-01-roads-traffic-map.png), 2046 × 1432, `map`, PDF 11.
- Ảnh: [bp-p013-01-map-comparison-panel-1](../assets/blueprint/layout-previews/bp-p013-01-map-comparison-panel-1.png), 661 × 750, `layout-preview`, PDF 13, 35.
- Ảnh: [bp-p014-01-map-comparison-panel-2](../assets/blueprint/layout-previews/bp-p014-01-map-comparison-panel-2.png), 661 × 1040, `layout-preview`, PDF 14, 36.
- Ảnh: [bp-p015-01-map-comparison-panel-3](../assets/blueprint/layout-previews/bp-p015-01-map-comparison-panel-3.png), 661 × 772, `layout-preview`, PDF 15, 37.
- Nguồn: [SRC-01 — View the official map — Figure 3, page 17](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf#page=17); `web-fetch-403`.
- Nguồn: [SRC-02 — Plan Hillsborough;](https://gis.tpcmaps.org/arcgis/rest/services/pigi/pigiHC/MapServer/3); `provided-not-opened`.
- Nguồn: [SRC-03 — FNAI (September 2026);](https://www.fnai.org/publications/gis-data); `provided-not-opened`.
- Nguồn: [SRC-04 — acquired ELAPP;](https://maps.hillsboroughcounty.org/arcgis1a/rest/services/SDEMapServices/Environmental/FeatureServer/1); `provided-not-opened`.
- Nguồn: [SRC-05 — SWFWMD (2023).](https://www45.swfwmd.state.fl.us/arcgis12/rest/services/OpenData/LandUseLandCoverPost2014/MapServer/3); `provided-not-opened`.
- Nguồn: [SRC-08 — Read the County’s 2024 traffic data](https://services.arcgis.com/apTfC6SUmnNfnxuF/arcgis/rest/services/LOS_Update_2024/FeatureServer/6); `provided-not-opened`.
- CTA **Home section 2A** → /#map-comparison.
- Cách dùng: Đề xuất demo link tới Home 2A, không nhân đôi viewer. Giữ ba multi-panel previews ở bộ asset để đối chiếu; nếu lặp maps vẫn xếp dọc full-width.

**English source block — PDF 33, 34:**

```text
The NIMBY Map does not show the full transportation reality.
Content
The NIMBY Map focuses on the Keystone–Odessa Community Plan boundary.
The Actual Map shows the real road network extending beyond that boundary and serving residents,
commuters, students, workers, emergency responders, deliveries, and people traveling through the
area.
The NIMBY Map
Shows the Community Plan boundary.
It presents Keystone–Odessa mainly as an isolated planning area.
The Actual Map
Shows how the road network actually functions.
Major roads connect Keystone–Odessa with surrounding communities and serve people far beyond the
Community Plan boundary.
Key Message
Road safety and transportation decisions affect more than the people living inside the
Community Plan boundary.
```

<a id="r-07"></a>

### R-07 — Records & Evidence

- PDF nguồn: 38, 39.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p039-01-records-evidence](../assets/blueprint/ui-references/roads/bp-p039-01-records-evidence.png), 1536 × 1024, `ui-reference`, PDF 39.
- Nguồn: [SRC-12 — Read the County’s 2024 traffic data](https://services.arcgis.com/apTfC6SUmnNfnxuF/arcgis/rest/services/LOS_Update_2024/FeatureServer/6/query?objectIds=582%2C136%2C53%2C108%2C479&outFields=%2A&returnGeometry=false&f=json); `provided-not-opened`.
- Nguồn: [SRC-15 — Read the Van Dyke study — page 13](https://planhillsborough.org/wp-content/uploads/2025/06/LRC-June-Draft-Agenda-Packet.pdf); `web-fetch-403`.
- Nguồn: [SRC-09 — Read the Van Dyke study scope — page 13](https://planhillsborough.org/wp-content/uploads/2025/06/LRC-June-Draft-Agenda-Packet.pdf#page=13); `web-fetch-403`.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- CTA **Read the Van Dyke study — page 13** → SRC vandyke-page.
- CTA **Read the County’s 2024 traffic data** → SRC traffic-query.
- CTA **SUPPORT THE PETITION →** → /take-action#petition.
- Cách dùng: Safety card có demo/unverified label; không tự thêm 327/12 nếu current artwork không hiện. Full source chưa có dùng preview.
- Cách dùng: Card crash finding/metadata vừa chép là chữ có trong hình, không phải dữ liệu được xác minh. Thumbnail hồ sơ/quoted policy trong artwork không thay thế original record; giữ nhãn minh họa nếu chưa có nguồn trực tiếp.
- **Thiếu/cần duyệt:** Verified crash dataset/key finding không được cung cấp; metadata/figures chỉ ở screenshot không là verified records.
- Xung đột: C-03, C-06.

**English source block — PDF 38:**

```text
THE NUMBERS DEMAND ACTION
Read the records. Review the policy. Ask the County to put people first.
Display the evidence cards using one consistent system:
SAFETY DATA
Crash · Severity · Location · Time
TRAFFIC DATA
Traffic Volume · Speed · Turning Movements
MAPS
Road Network · Community Plan Boundary · Corridors · Intersections
PUBLIC RECORDS
Projects · Studies · Requests · Agency Responses
COMMUNITY PLAN
Transportation · Road Configuration · Lighting · Gunn Highway
Each Card:
  Image/Preview → Key Finding → Agency/Source → Date → View Original Document
DON’T RULE OUT SOLUTIONS BEFORE STUDYING THEM. The County’s Van Dyke study excluded
Gunn Highway to west of Suncoast Parkway from capacity-improvement analysis because of
Comprehensive Plan constraints. Demand a full evaluation of the options.
Source: County Van Dyke study newsletter in June2025 LRC packet. County study newsletter in the June 2025 LRC
agenda packet, PDF page 13. Van Dyke Road capacity-analysis exclusion and project scope.
Read the Van Dyke study — page 13
ANOTHER CORRIDOR BELOW ITS STANDARD. The County’s 2024 data list Van Dyke Road from
Gunn Highway to the Suncoast north ramp at 17,500 annual-average daily vehicle movements, two
lanes and daily and peak-direction LOS E against a D standard.
Source: County 2024 level-of-service traffic sections. County 2024 traffic layer. OBJECTID 582: Gunn Highway, Pasco
County line to Van Dyke Road, AADT 19,912. OBJECTID 136: Van Dyke Road, Gunn Highway to Suncoast north ramp,
AADT 17,500. Both have two lanes, daily and peak-direction LOS E, and standard D.
Read the County’s 2024 traffic data
Button
Demand a full evaluation. Ask the County to reconsider the constraints.
SUPPORT THE PETITION →
```


**Năm card text trong selected screenshot — giữ nhãn demo cho finding/metadata chưa xác minh — PDF 39:**

```text
SAFETY DATA
Higher crash frequency along Gunn Highway
Multiple crashes, including serious injuries, have been reported along Gunn Highway.
Hillsborough County Crash Data
2020 – 2024
View Original Document

TRAFFIC DATA
19,912 DAILY VEHICLE MOVEMENTS
Gunn Highway: Pasco County line to Van Dyke Road.
Hillsborough County AADT
2024
View Original Document

MAPS
Gunn Highway and the Community Plan area
Map showing Gunn Highway and the section within/serving Keystone–Odessa.
Hillsborough County GIS
2024
View Original Map

PUBLIC RECORDS
STUDY THE OPTIONS.
Van Dyke: Gunn Highway to west of Suncoast Parkway was excluded from capacity-improvement analysis because of Comprehensive Plan constraints.
Read the study · page 13
View Original Document

COMMUNITY PLAN
Restrictions on expansion for Gunn Highway
The Community Plan identifies Gunn Highway as a road with restrictions on further expansion.
Keystone–Odessa Community Plan
View Original Document
```

<a id="r-08"></a>

### R-08 — Planning frameworks summary

- PDF nguồn: 39, 40, 41.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p041-01-planning-comparison](../assets/blueprint/ui-references/roads/bp-p041-01-planning-comparison.png), 1476 × 984, `ui-reference`, PDF 41.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- CTA **Detailed Roads & Safety Comparison →** → /the-proposal#roads-comparison.
- Cách dùng: Current on-screen copy phía County ưu tiên; passage Mobility 5.1.4 và policy sources ở detail dưới viewport khi cần.

**English source block — PDF 39, 40:**

```text
Two planning frameworks. Two approaches to roads and safety.
Two Columns
KEYSTONE–ODESSA COMMUNITY PLAN
Focuses on area-specific rules:
 • Rural road characteristics.
 Should a rural appearance come before people’s daily needs? The plan prioritizes two-lane rural
   roads and limits changes that increase capacity or urbanize the area.
  • Road configuration.
  Why limit the options before assessing what people need? The plan identifies preferred road
    configurations, including two-lane rural sections, and the types of improvements considered
    appropriate for the area.
  • Gunn Highway.
  How much traffic is enough to reconsider the restrictions? Gunn Highway is identified as a road
    with restrictions on further expansion and included in the constrained-road tables.
  • Lighting.
Does someone have to get hurt first? The plan allows lighting when public safety is at risk. Identify the
danger. Act before someone is injured.
  • Identified types of transportation improvements.
  Should a safety improvement have to pass a rural-character test? The plan allows intersection,
    cycling, walking and traffic-control improvements while requiring rural character to be maintained.
    ↔
HILLSBOROUGH COUNTY COMPREHENSIVE PLAN
Focuses on related countywide policies:
  • Transportation safety.
  • Mobility.
  • Infrastructure needs.
  • Evaluation of conditions and the network.
  • Broader transportation planning tools.
A ROAD RESTRICTION IS NOT A PERMANENT ANSWER. County Mobility Policy 5.1.4 calls for the
constrained-road list to be reevaluated before each long-range transportation plan update, balancing
community preservation, safety and growing traffic congestion. Put Gunn Highway’s restriction back
under serious public scrutiny.
```


**English source block — PDF 40, 41:**

```text
Current on-screen copy for the selected image
Both plans address roads and safety, but they take different approaches. The Community Plan sets
area-specific rules for Keystone–Odessa, while the Comprehensive Plan provides countywide policies.
Transportation safety — Includes countywide policies to improve transportation safety, reduce crashes, and
address safety for all users, including drivers, pedestrians and cyclists. (Mobility Element)
Mobility — Supports a connected and functional multimodal network, including roadways, transit, bicycle and
pedestrian facilities. (Mobility Element)
Infrastructure needs — Addresses transportation infrastructure needs based on current and future conditions,
including roadway capacity, intersection improvements and system performance. (Mobility Element)
Evaluation of conditions — Uses data, level-of-service standards and network evaluation to identify needed
improvements across the county. (Mobility Element)
Planning tools — Provides broader transportation planning tools, such as the Cost Feasible Plan, the
Transportation Improvement Program (TIP) and coordination with the Long Range Transportation Plan
(LRTP). (Mobility Element)
This is a summary comparison. The detailed analysis of each policy, with side-by-side excerpts from both
plans, is on the Comparison Page.
```


## Water & Septic

<a id="w-01"></a>

### W-01 — Hero / core issue

- PDF nguồn: 42, 43.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p043-01-hero](../assets/blueprint/ui-references/water/bp-p043-01-hero.png), 1336 × 890, `ui-reference`, PDF 43.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **View the Issue ↓** → /issues/water-septic#septic-scale.
- **Thiếu/cần duyệt:** Hero landscape và ba diagram images chưa có file riêng.

**English source block — PDF 42:**

```text
Label
WATER & SEPTIC
Heading
Protect our water. Open the door to better solutions.
Keystone–Odessa depends heavily on private wells and septic. This affects the ability to use some
Countywide solutions when the community faces septic concentration, environmental conditions, and
the need to protect water resources.
```


**English source block — PDF 42:**

```text
Current on-screen copy for the selected image
SEPTIC SYSTEMS — Wastewater is managed onsite through septic systems in many properties.
GROUNDWATER — Septic systems and drinking-water wells share the same groundwater environment.
PRIVATE WELLS — Groundwater supplies drinking water to many properties.
When septic systems, private wells and groundwater are connected, water and wastewater planning
becomes a health, safety and environmental issue.
```

<a id="w-02"></a>

### W-02 — Scale of septic

- PDF nguồn: 43, 44, 20.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p044-01-septic-scale](../assets/blueprint/ui-references/water/bp-p044-01-septic-scale.jpg), 1402 × 935, `ui-reference`, PDF 44.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- Cách dùng: Giữ records/classification scope; không sửa số hoặc coi proxy classification là measured system count.
- **Thiếu/cần duyệt:** FLWMI Odessa ZIP 33556 dataset và calculation 3,087 chưa cung cấp.
- Xung đột: C-01.

**English source block — PDF 43:**

```text
3. THE SCALE OF SEPTIC IS NOT A SMALL ISSUE
Thousands of records in Odessa are classified as septic-related.
Use the data as the main focus at the beginning of the page:
7,191 total records | 1,626 Known Septic | 1,210 Likely Septic | 251 Somewhat Likely Septic
A total of 3,087 records are in the three septic classification groups in the Odessa ZIP 33556 dataset.
```


**English source block — PDF 43:**

```text
This is an actual condition that the Keystone–Odessa planning framework must be able to
address.
```


**English source block — PDF 20:**

```text
Data scope: 7,191 administrative records for ZIP 33556, not a count of systems within the Community Plan
boundary. 806 construction/repair records, 1998–2023, are not failure counts. The method behind the 3,087
figure remains unverified.
```

<a id="w-03"></a>

### W-03 — Construction / repair records

- PDF nguồn: 44, 45, 20.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p045-01-repair-records](../assets/blueprint/ui-references/water/bp-p045-01-repair-records.jpg), 1476 × 984, `ui-reference`, PDF 45.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- Cách dùng: 806/738/41/27; 1998–2023. Giữ caveat construction/repair records không failure counts.
- **Thiếu/cần duyệt:** EHDConst–Repair raw records và chart inputs chưa cung cấp.
- Xung đột: C-01.

**English source block — PDF 44:**

```text
4. SEPTIC SYSTEMS HAVE NEEDED REPAIRS FOR MANY YEARS
806 repair records show that this is an issue that has continued over time.
The dataset contains 806 EHDConst–Repair records, including 738 Known Septic, 41 Likely Septic, and
27 Somewhat Likely Septic. Application dates range from 1998–2023.
```


**English source block — PDF 44:**

```text
Planning policy must be able to respond to the actual conditions of today.
```


**English source block — PDF 20:**

```text
Data scope: 7,191 administrative records for ZIP 33556, not a count of systems within the Community Plan
boundary. 806 construction/repair records, 1998–2023, are not failure counts. The method behind the 3,087
figure remains unverified.
```

<a id="w-04"></a>

### W-04 — Connected Water

- PDF nguồn: 45, 46, 47.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p047-01-connected-water](../assets/blueprint/ui-references/water/bp-p047-01-connected-water.png), 1341 × 1173, `ui-reference`, PDF 47.
- Nguồn: [SRC-17 — Source: EPA — Septic Systems and Drinking Water](https://www.epa.gov/septic/septic-systems-and-drinking-water); `primary-page-opened`.
- CTA **Source: EPA — Septic Systems and Drinking Water** → SRC epa.
- CTA **Petition connection** → /take-action#petition.
- Cách dùng: Giữ conceptual cutaway và not a documented contamination event. Không thêm interactive Water layer map.
- **Thiếu/cần duyệt:** Cutaway nằm trong composite UI; chưa có file cutaway độc lập.

**English source block — PDF 45:**

```text
5. WHAT GOES INTO THE GROUND CAN REACH THE WATER WE RELY ON.
Private wells draw from groundwater. When septic systems fail or wastewater is
inadequately treated, contaminants can reach that water. Soil conditions, the number of
systems and distance to wells matter.
THE CONNECTION DOESN’T STOP AT YOUR PROPERTY LINE.
Conceptual illustration; not a documented contamination event.
WHAT GOOD IS PROTECTING A RURAL IMAGE IF WE DON’T PUT WATER
PROTECTION FIRST?
Keeping Keystone–Odessa beautiful should include serious scrutiny of the rules governing
water and wastewater infrastructure. No planning document should be beyond question.
PROTECT OUR WATER. RETHINK THE RULES.
Our petition calls for retiring the Community Plan and changing the related restrictions, with
health, safety and welfare at the centre of County decisions.
Source: EPA — Septic Systems and Drinking Water
```

<a id="w-05"></a>

### W-05 — Water & Wastewater Options

- PDF nguồn: 47, 48, 49.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p049-01-wastewater-options](../assets/blueprint/ui-references/water/bp-p049-01-wastewater-options.png), 1448 × 1086, `ui-reference`, PDF 49.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- CTA **Read the exclusions — One Water 4.3.7** → SRC county; policy pages 229–234 theo blueprint.
- CTA **Sign our petition** → /take-action#petition.
- Cách dùng: Giữ some connection routes remain, bao gồm public-health-hazard route; không nói tất cả utility options bị cấm.

**English source block — PDF 47:**

```text
6. OUR WATER. FEWER OPTIONS. WHY?
```


**English source block — PDF 47:**

```text
The County has water and sewer pathways for certain environmental problems, septic
concerns and water-resource protection. Keystone–Odessa is expressly excluded from
several of them. Why should our community accept fewer options for addressing these
needs?
THE EXCLUSIONS ARE WRITTEN INTO POLICY. One Water 4.3.7 excludes Keystone–Odessa from
specified environmental, flood-prone septic and wellhead-area routes, plus the overriding-public-interest
process. Read the criteria behind each route.
```


**English source block — PDF 48:**

```text
1. REAL CONDITIONS. REAL NEEDS.
Private wells, septic systems and sensitive water resources make infrastructure choices
important.
2. THE COUNTY HAS TOOLS TO RESPOND.
Specific policies allow consideration of connections for qualifying environmental and
public-interest circumstances.
3. KEYSTONE–ODESSA: EXPLICITLY LEFT OUT.
Policy 4.3.7 excludes this area from several of those pathways.
4. WHY DEFEND A RESTRICTION BEFORE CONSIDERING A SOLUTION?
Preserving rural character should not put these policy choices beyond scrutiny.
OUR COMMUNITY DESERVES MORE THAN A CLOSED DOOR.
Sign our petition to retire the Community Plan and support the related County policy
changes needed to reopen these options.
Some connection routes remain available, including the documented public-health-hazard route.
Read the exclusions — One Water 4.3.7
```

<a id="w-06"></a>

### W-06 — Core Conflict — concise approved panel

- PDF nguồn: 49, 50, 51.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p051-01-core-conflict](../assets/blueprint/ui-references/water/bp-p051-01-core-conflict.png), 1536 × 1024, `ui-reference`, PDF 51.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-18 — Read the public-interest criteria and exclusion — Policies 4.3.5 and 4.3.7](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf#page=233); `web-fetch-403`.
- Nguồn: [SRC-19 — Read the May 9, 2024 Board minutes — Book 576, pages 39–40](https://publicaccess.hillsclerk.com/br/api/Document/AQ1%C3%89FuRtC3eDigqeOrtc4kvMW8ftGYkmV8UV7PGbail%C3%89bnOYGd0z0L%C3%89KJoPLOL8PlNhL50V8ZqAt6TErl6qsSxc%3D/?OverlayMode=View); `provided-not-opened`.
- Nguồn: [SRC-20 — Read the 2024 staff report and agency comments](https://planhillsborough.sharepoint.com/:b:/s/PlanAmendmentDocs/EU9Mk1XTa3FEsr7i3SDKnKABivOX1J90mzsECWdR_NwipQ?e=3euqpb); `provided-not-opened`.
- CTA **Read the 2024 staff report →** → SRC staff.
- CTA **Read Policies 4.3.5 and 4.3.7 →** → SRC water-page / county.
- Cách dùng: Exact concise panel PDF 51 thắng generic split-screen PDF 50. Research dài PDF 49–50 và qualifications vẫn giữ ở reference/detail, không chen vào panel.
- Cách dùng: Không mọi exclusion bắt đầu 2024; agency support cho utility reforms không là ủng hộ SCU/retirement.

**English source block — PDF 51:**

```text
Exact on-screen copy for the approved concise Core Conflict panel:
LEFT OUT. BY CHOICE.
In 2024, the County expanded rural water and sewer options. Commissioners excluded
Keystone–Odessa from several of them.
STAFF SUPPORTED CONSISTENCY
Planning staff said safeguards addressed development concerns. Commissioners chose exclusion.
Read the 2024 staff report →
HEALTH. SAFETY. WELFARE.
One excluded utility review weighs these public interests. Why exclude Keystone–Odessa?
Read Policies 4.3.5 and 4.3.7 →
REVERSE THE EXCLUSIONS. OPEN THE OPTIONS.
Sources: HC/CPA 23-18 • May 9, 2024 Board minutes • One Water 4.3.5 and 4.3.7. Keep the longer
supporting research and source qualifications above.
```

<a id="w-07"></a>

### W-07 — Comparison summary

- PDF nguồn: 51, 52.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p052-01-comparison-summary](../assets/blueprint/ui-references/water/bp-p052-01-comparison-summary.png), 1476 × 984, `ui-reference`, PDF 52.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- CTA **View the Full Water & Wastewater Comparison →** → /the-proposal#water-comparison.

**English source block — PDF 51, 52:**

```text
8. COMMUNITY PLAN VS COUNTY COMPREHENSIVE PLAN
Two Approaches to the Same Issue
 KEYSTONE–ODESSA COMMUNITY PLAN                           HILLSBOROUGH COUNTY COMPREHENSIVE PLAN
 Relies heavily on private wells and septic               Has a broader water & wastewater framework
 Limits some utility extensions                           Has pathways for some environmental conditions
 KEYSTONE–ODESSA COMMUNITY PLAN                             HILLSBOROUGH COUNTY COMPREHENSIVE PLAN
 Does not have a specific equivalent safeguard for          Has a pathway related to septic concentration under
 septic concentration                                       specified conditions
 Some Countywide pathways are excluded                      Has tools related to wellhead/wellfield protection
 Water protection is a goal, but response options are       Combines resource protection with infrastructure
 more limited                                               response
```

<a id="w-08"></a>

### W-08 — Evidence cards

- PDF nguồn: 52, 53.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p053-01-evidence-next](../assets/blueprint/ui-references/water/bp-p053-01-evidence-next.jpg), 1476 × 984, `ui-reference`, PDF 53.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- CTA **View Original Document** → Supplied source nếu có; thiếu → source preview.
- Cách dùng: Không dùng County policy PDF thay source cho numeric septic/repair claims.
- **Thiếu/cần duyệt:** FLWMI, EHDConst–Repair, well/protection maps, public-record documents và card-level findings chưa có đủ file/link.
- Xung đột: C-06.

**English source block — PDF 52, 53:**

```text
See the Data and Records Behind the Issue
Do not turn this into a huge library. Only present the strongest sources as cards:
Septic Data — FLWMI Odessa ZIP 33556
Repair Records — EHDConst–Repair 1998–2023
Water & Well Maps — Wells, groundwater and protection areas
Public Records — Water/wastewater infrastructure and monitoring records
Planning Policies — Community Plan + One Water + County Comprehensive Plan
Each card includes:
  Short Finding → Source → Date → View Original Document
```

<a id="w-09"></a>

### W-09 — Next issue

- PDF nguồn: 53.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p053-01-evidence-next](../assets/blueprint/ui-references/water/bp-p053-01-evidence-next.jpg), 1476 × 984, `ui-reference`, PDF 53.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Growth, Infrastructure & Daily Life →** → /issues/growth-daily-life.

**English source block — PDF 53:**

```text
Water is part of a larger issue.
The Community Plan rules also affect growth, infrastructure, housing, and access to everyday services.
Next:
  Growth, Infrastructure & Daily Life →
```


## Growth & Daily Life

<a id="l-01"></a>

### L-01 — Hero — Then / Today

- PDF nguồn: 54, 55.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p055-01-then-today](../assets/blueprint/ui-references/growth/bp-p055-01-then-today.jpg), 1476 × 984, `ui-reference`, PDF 55.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Cách dùng: ~4,000/~7,000 population và ~1,100/~2,500 housing trong image là unverified sample; cần nhãn rõ, không xác nhận là local counts.
- **Thiếu/cần duyệt:** Verified population/housing source và two-map/photo originals chưa có.
- Xung đột: C-03.

**English source block — PDF 54:**

```text
Label
GROWTH & DAILY LIFE
Heading
The community has changed. Planning needs to keep up.
The Keystone–Odessa Community Plan maintains a very-low-density development pattern and limits
where many commercial activities can be located and how large they can be. These rules affect
housing, distance to services, travel needs, and the ability to provide infrastructure efficiently.
```

<a id="l-02"></a>

### L-02 — Very low density

- PDF nguồn: 55, 56, 57.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p057-01-natural-rural-density](../assets/blueprint/ui-references/growth/bp-p057-01-natural-rural-density.jpg), 1536 × 1024, `ui-reference`, PDF 57.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Cách dùng: Đúng phiên bản Natural Rural Density Comparison; 10 homes on 50 acres chỉ bên trái. Tree cover tương đương, right rural lanes; conceptual qualification theo PDF 57.
- **Thiếu/cần duyệt:** Natural rural illustration chưa có file độc lập khỏi UI composite.
- Xung đột: C-02.

**English source block — PDF 55:**

```text
Five acres for one home creates a development pattern with wider consequences.
The Community Plan protects very-low-density residential development in the relevant areas, with
policies centered around approximately one dwelling unit per five acres and limits on increasing density.
```


**English source block — PDF 56:**

```text
Current on-screen copy for the selected image
Left panel: 5-ACRE PATTERN | Approximately 1 home per 5 acres | 10 homes on 50 acres
Right panel: MODERATE LOW-DENSITY PATTERN | Smaller lots with more homes | Same amount of land
The label “10 homes on 50 acres” belongs only on the left. Retain the conceptual-illustration qualification.
```


**English source block — PDF 57:**

```text
Conceptual illustration, not a measured or engineered site plan.
```

<a id="l-03"></a>

### L-03 — Housing consequences / scenarios

- PDF nguồn: 55, 56.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p057-01-natural-rural-density](../assets/blueprint/ui-references/growth/bp-p057-01-natural-rural-density.jpg), 1536 × 1024, `ui-reference`, PDF 57.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Cách dùng: D-06: không tự gộp/bỏ section hoặc tự thêm ba hình khác vì selected PDF 57 dùng comparison hai panel.
- **Thiếu/cần duyệt:** Ba scenario-card assets và map low-density policies chưa có độc lập; Master Assessment được nhắc nhưng không cung cấp.
- Xung đột: C-02.

**English source block — PDF 55:**

```text
4. LOW DENSITY AFFECTS HOUSING
Land rules determine what types of housing the community can provide.
Large-lot requirements increase the amount of land needed for each household and limit the number
and variety of housing options. The assessment document also identifies potential impacts on younger
families, workers, teachers, and seniors.
```


**English source block — PDF 56:**

```text
5 ACRES / HOME → more land / household
  SMALLER LOW-DENSITY LOT → less land / household
  COUNTYWIDE FRAMEWORK → broader planning options
Include a map showing the areas affected by low-density policies.
```

<a id="l-04"></a>

### L-04 — Services / daily needs

- PDF nguồn: 57, 58.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p058-01-services-map](../assets/blueprint/ui-references/growth/bp-p058-01-services-map.jpg), 1476 × 984, `ui-reference`, PDF 58.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Cách dùng: Giữ illustrative drive-time caveat; không lookup/routing; schematic pins không verified locations.
- **Thiếu/cần duyệt:** Standalone service illustration và raw location/travel dataset chưa có.

**English source block — PDF 57:**

```text
5. THE COMMUNITY PLAN LIMITS WHERE SERVICES CAN DEVELOP
Everyday needs still exist even when services are farther away.
The Community Plan concentrates commercial development in certain locations and limits the scale
and characteristics of commercial uses in other areas.
People still need:
Food · Pharmacy · Healthcare · Childcare · Restaurants · Services · Jobs
When these needs are located farther away from residential areas, people must travel farther to access
them.
```


**English source block — PDF 57, 58:**

```text
Current on-screen copy for the selected image
Drive times are estimates and for illustrative purposes only. Actual times may vary depending on location and
traffic conditions.
Grocery Stores — 10–25 minutes
Healthcare — 10–30 minutes
Childcare — 10–25 minutes
Restaurants — 10–25 minutes
Employment / Jobs — 15–30 minutes
These are illustrative image labels, not newly verified local travel-time findings.
```

<a id="l-05"></a>

### L-05 — Growth and infrastructure timeline

- PDF nguồn: 58.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- Cách dùng: Có approved topic/copy/years nhưng thiếu visual/data; đề xuất label preview, không tự vẽ measured chart hoặc bỏ section.
- **Thiếu/cần duyệt:** Selected timeline/map asset, quantitative series và Master Assessment source chưa có.

**English source block — PDF 58:**

```text
6. GROWTH AND INFRASTRUCTURE NEED TO BE PLANNED TOGETHER
More people means more demand for roads, water, services, and infrastructure.
Use a timeline/map:
  2001 → 2010 → 2020 → 2026
Track at the same time:
Population · Housing · Subdivisions · Roads · Water/Wastewater · Services · Traffic
Main Message
The community changes. Infrastructure and the planning framework must be able to adapt to
that change.
The Master Assessment identifies that the gap between actual growth and the Plan’s old assumptions
can make it increasingly difficult to provide roads, services, and infrastructure.
```

<a id="l-06"></a>

### L-06 — Comparison summary

- PDF nguồn: 59.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p059-01-comparison-summary](../assets/blueprint/ui-references/growth/bp-p059-01-comparison-summary.jpg), 1476 × 984, `ui-reference`, PDF 59.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- CTA **View the Growth & Development Comparison →** → /the-proposal#growth-housing-comparison.

**English source block — PDF 59:**

```text
7. COMMUNITY PLAN VS COUNTY COMPREHENSIVE PLAN
Two Approaches to Growth and Development
 KEYSTONE–ODESSA COMMUNITY                         HILLSBOROUGH COUNTY COMPREHENSIVE PLAN
 PLAN
 Emphasizes a very-low-density rural               Plans land use through a countywide framework that considers
 pattern                                           growth, development, and infrastructure together
 Policies of approximately 1 dwelling / 5          Provides additional land-use and development tools for evaluating
 acres in the relevant areas                       how and where development can occur
 Limits commercial development by                  Allows service and development needs to be evaluated together
 location, scale, and rural character              with land use and infrastructure
 Limits the ability of the development             Allows growth to be evaluated together with infrastructure and
 pattern to adapt                                  planning standards
This section is only a comparison summary. Detailed policy analysis is reserved for the Full Comparison
Page.
CTA
  View the Growth & Development Comparison →
```

<a id="l-07"></a>

### L-07 — Evidence cards

- PDF nguồn: 59, 60.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg), 1476 × 984, `ui-reference`, PDF 60.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-06 — Parcel source and calculation inputs — County parcel GIS](https://maps.hillsboroughcounty.org/arcgis1a/rest/services/SDEMapServices/ParcelPublishing/FeatureServer/12); `provided-not-opened`.
- Nguồn: [SRC-07 — Official Community Plan boundary — County GIS](https://maps.hillsboroughcounty.org/arcgisapp/rest/services/DSD_Viewer/Landuse_and_Planning/MapServer/2); `provided-not-opened`.
- CTA **View Document/Map** → Supplied document/GIS source phù hợp; thiếu → preview.
- Cách dùng: Không biến source category list hoặc screenshot metadata thành hồ sơ thật.
- **Thiếu/cần duyệt:** Housing/service/travel/infrastructure card-level datasets và findings chưa có đầy đủ.
- Xung đột: C-06.

**English source block — PDF 59, 60:**

```text
See the Evidence Behind the Issue
Display the main groups of documents:
Community Plan — Density, rural character, commercial policies
Land-Use Maps — Residential pattern & development
Housing Data — Lots, housing units & development
Service Map — Grocery, healthcare, childcare & employment
Travel Data — Distances, drive times & traffic
Infrastructure Records — Roads, utilities, drainage & development
Each card:
  Main Finding → Source → Date → View Document/Map
```

<a id="l-08"></a>

### L-08 — Outdated Community Plan continuation

- PDF nguồn: 60.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg), 1476 × 984, `ui-reference`, PDF 60.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Learn About the Community Plan →** → /issues#outdated-community-plan.
- Cách dùng: Từ overview tiếp tục tới Comparison; không thêm route Outdated Plan riêng.

**English source block — PDF 60:**

```text
9. END OF PAGE
Roads & Safety, Water & Septic, and Growth, Infrastructure & Daily Life introduce the three major
groups of consequences.
On-screen continuation: Outdated Community Plan. Link: Learn About the Community Plan →.
Destination: the existing Outdated Community Plan issue overview and Community Plan vs. County
Comprehensive Plan comparison.
```


## Comparison / The Proposal

<a id="c-01"></a>

### C-01 — Roads & Safety comparison

- PDF nguồn: 61, 62, 63.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p063-01-roads](../assets/blueprint/ui-references/comparison/bp-p063-01-roads.png), 1070 × 1470, `ui-reference`, PDF 63.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-13 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf#page=127); `web-fetch-403`.
- Nguồn: [SRC-11 — Read FHWA guidance on lighting](https://highways.dot.gov/safety/proven-safety-countermeasures/lighting); `primary-page-opened`.
- Nguồn: [SRC-14 — Read FHWA guidance on walkways](https://highways.dot.gov/safety/proven-safety-countermeasures/walkways); `primary-page-opened`.
- CTA **View the Full Roads Comparison →** → Missing full-detail destination → labelled preview.
- Cách dùng: Anchor /the-proposal#roads-comparison; không tự link CTA Full quay về cùng panel và giả là đã có bản chi tiết. Giữ caveat no automatic approval/funding.
- **Thiếu/cần duyệt:** Standalone paired road images và full policy-by-policy comparison document chưa có.

**English source block — PDF 62:**

```text
SHOULD THE LOOK OF A ROAD MATTER MORE THAN THE SAFETY OF
THE PEOPLE USING IT?
We can value rural character and still question the restrictions that shape our roads.
 COMMUNITY PLAN                                          COUNTY FRAMEWORK
 ROAD DESIGN
 WHY LIMIT THE OPTIONS BEFORE                            ASSESS SAFETY, MOBILITY AND LOCAL
 ASSESSING THE NEED?                                     CONDITIONS.
 The Community Plan prioritizes rural, two-lane          Countywide policies address road-user needs
 road character and limits certain changes.              and context-sensitive design.
 GUNN HIGHWAY
 SHOULD A ROAD RESTRICTION BE                            REASSESS THE RESTRICTIONS.
 BEYOND QUESTION?                                        County policy calls for reevaluating constrained
 Gunn Highway is subject to expansion                    roads before each long-range transportation plan
 restrictions.                                           update.
 LIGHTING
 DOES SOMEONE HAVE TO GET HURT                           LIGHTING CAN RESPECT ITS
 FIRST?                                                  SURROUNDINGS.
 The Community Plan discourages street lighting          County policies address context-sensitive
 and allows it when public safety is at risk.            lighting and intersection visibility.
 WALKING AND CROSSINGS
 WHY SHOULD RURAL CHARACTER LIMIT                        MAKE PEOPLE’S NEEDS CENTRAL TO THE
 THE DISCUSSION?                                         ASSESSMENT.
 The Community Plan permits specified                    County policies address crossing visibility,
 improvements and supports trails while retaining        walking, cycling and safe routes to schools.
 rural road character.
PROTECT THE CHARACTER OF THE AREA. QUESTION THE RULES THAT GOVERN ITS
ROADS.
Countywide policies already apply. Retiring the Community Plan and changing related restrictions
would not automatically approve or fund road projects.
View the Full Roads Comparison →
```

<a id="c-02"></a>

### C-02 — Water & Wastewater comparison

- PDF nguồn: 64, 65.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p065-01-water](../assets/blueprint/ui-references/comparison/bp-p065-01-water.png), 1536 × 1024, `ui-reference`, PDF 65.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-18 — Read the public-interest criteria and exclusion — Policies 4.3.5 and 4.3.7](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf#page=233); `web-fetch-403`.
- CTA **View the Full Water Comparison →** → Missing full-detail destination → labelled preview.
- Cách dùng: Anchor /the-proposal#water-comparison; giữ KEYSTONE–ODESSA LIMIT / One Water 4.3.7.
- **Thiếu/cần duyệt:** Water full-comparison destination và component images chưa có.

**English source block — PDF 64:**

```text
From Infrastructure Limits to More Response Tools
```


**English source block — PDF 64, 65:**

```text
Current on-screen copy for the selected image
COMMUNITY PLAN
Emphasizes water protection but has more limited infrastructure response options.
Makes protection of water resources a priority, but does not contain the same requirement to consider soil
conditions and permeability.
Does not contain a comparable policy for aging or failing septic systems.
Does not create a specific septic/wastewater response for wellhead or wellfield protection areas.
Calls for stormwater management plans, but does not set the same technical standard for cumulative
flooding and water quality.
COUNTY FRAMEWORK
Provides a broader planning framework and more specific response tools.
Requires development decisions to consider physical land and soil conditions, including permeability.
Provides a pathway to respond when septic creates a documented environmental problem.
Allows centralized service in certain Wellhead Resource Protection Areas and Tampa Bay Water Wellfield
Mitigation Areas when conditions are met.
Requires stormwater technical standards to address cumulative impacts on flooding and water quality.
KEYSTONE–ODESSA LIMIT
One Water Policy 4.3.7 excludes properties within the Keystone–Odessa Community Plan boundary from the
wellhead/wellfield pathway described above.
The County framework provides more specific tools to respond to current water, septic, groundwater, and
stormwater conditions.
View the Full Water Comparison →
```

<a id="c-03"></a>

### C-03 — Growth & Housing — Screenshot 110

- PDF nguồn: 65, 66, 67.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png), 1536 × 1024, `ui-reference`, PDF 67.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- CTA **View the Full Growth & Housing Comparison →** → Missing full-detail destination → labelled preview.
- Cách dùng: Anchor /the-proposal#growth-housing-comparison. Giữ hai cột/bốn rows mỗi cột/result banner; County vẫn có rural density limits.
- **Thiếu/cần duyệt:** Rural header/eight illustrated rows chưa có asset độc lập; full-comparison destination chưa có.

**English source block — PDF 65, 66:**

```text
Two Ways of Managing Growth and Housing
COMMUNITY PLAN
 • Uses approximately one dwelling unit per five acres in the relevant areas.
 • Favors a low-density, scattered residential pattern.
 • Its residential provisions do not directly address housing affordability.
 • The residential policies focus strongly on maintaining the area’s rural development
   pattern.
COUNTY FRAMEWORK
 • Uses mapped land-use categories that establish maximum densities and intensities.
 • Rural density limits still apply, including the general one dwelling per five gross acres
   policy, with specified exceptions.
 • Has housing goals and policies related to housing choice and affordability.
 • Supports tools including infill, small lots, accessory homes, and different housing types,
   with adequate infrastructure.
Result to Show
The County framework still protects rural-area density while also providing explicit
policies for housing choice and affordability.
```

<a id="c-04"></a>

### C-04 — What remains if Plan is removed

- PDF nguồn: 67, 68.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p068-01-what-remains](../assets/blueprint/ui-references/comparison/bp-p068-01-what-remains.png), 1536 × 1024, `ui-reference`, PDF 68.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- CTA **Read the Community Plan** → SRC livable.
- CTA **Learn More About the County Framework** → Proposal preview / County source, tuỳ nội dung được cung cấp.
- Cách dùng: Giữ diagram/headline; additional campaign passage ở dưới viewport. CTA County Framework trong artwork không cấp phép viết trang mới.

**English source block — PDF 67:**

```text
Keystone–Odessa will still be planned and managed.
Visual
REMOVE
KEYSTONE–ODESSA COMMUNITY PLAN
Area-specific policy layer
   ↓
```


**English source block — PDF 68:**

```text
REMAINS
HILLSBOROUGH COUNTY COMPREHENSIVE PLAN
LAND DEVELOPMENT CODE
FUTURE LAND USE POLICIES
MOBILITY & SAFETY POLICIES
WATER & ENVIRONMENTAL POLICIES
ZONING & DEVELOPMENT STANDARDS
APPLICABLE HEALTH / ENGINEERING / ENVIRONMENTAL STANDARDS
```


**English source block — PDF 68:**

```text
Message to Highlight
The proposed change is a change to the policy layer that applies to Keystone–Odessa. The
Countywide planning framework continues to apply.
RETIRE THE EXTRA PLAN. KEEP THE PROTECTIONS. Ask the County to retire the separate
Community Plan, reconsider related restrictions and retain enforceable safeguards through the
amendment process.
```

<a id="p-01"></a>

### P-01 — Proposed Change introduction — missing spec

- PDF nguồn: 3, 6, 61, 67, 68, 84, 85.
- Copy: `missing-approved-public-copy`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Compare the Two Plans** → /the-proposal#compare-the-two-plans.
- CTA **Read the petition →** → /take-action#petition.
- Cách dùng: Trích đoạn là mô tả chức năng, không phải public copy. D-02 đề xuất labelled preview cho intro và đặt Comparison hiện có bên dưới; không tự biến petition thành marketing copy.
- **Thiếu/cần duyệt:** Không có PAGE 07 hoặc approved on-screen copy/selected layout riêng cho Proposal intro.
- Xung đột: C-04.

**English source block — PDF 3:**

```text
Proposed Change — explains the planning framework proposed to replace the current one.
```


## Evidence & Records / The Facts

<a id="f-01"></a>

### F-01 — Explore Evidence by Issue

- PDF nguồn: 69, 70.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p070-01-issue-groups](../assets/blueprint/ui-references/evidence/bp-p070-01-issue-groups.png), 1536 × 1024, `ui-reference`, PDF 70.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **View Road Evidence →** → /the-facts#road-evidence.
- CTA **View Water Evidence →** → /the-facts#water-evidence.
- CTA **View Growth Evidence →** → /the-facts#growth-evidence.
- CTA **View Planning Documents →** → /the-facts#planning-documents.
- Cách dùng: Các target là static grouped cards/anchors, không search/filter động.
- **Thiếu/cần duyệt:** Thumbnail files riêng chưa có; source category không tự tạo nguồn thật.

**English source block — PDF 69, 70:**

```text
ROADS & SAFETY
Data: Crash · Severity · Traffic · Speed
Maps: Road Network · Corridors · Intersections · Community Plan Boundary
Records: Projects · Studies · Agency Responses
Policies: Gunn Highway · Road Configuration · Lighting
  View Road Evidence →
WATER & SEPTIC
Data: Septic Classification · Repair Records
Maps: Septic · Wells · Groundwater · Wellfield/Wellhead · Lakes & Wetlands
Records: Water Infrastructure · Drainage · Monitoring
Policies: Community Plan · One Water · Water/Wastewater Policies
  View Water Evidence →
GROWTH, HOUSING & SERVICES
Data: Housing · Lots · Development · Travel
Maps: Land Use · Residential Pattern · Services · Infrastructure
Records: Development & Infrastructure Records
Policies: Density · Commercial Development · Future Land Use
  View Growth Evidence →
COMMUNITY PLAN & COUNTY FRAMEWORK
Documents: Community Plan · Comprehensive Plan · Land Development Code
Policies: Roads · Water · Growth · Housing · Infrastructure · Environment
  Comparison: Policy → Practical Effect → County Framework → Source
  View Planning Documents →
```

<a id="f-02"></a>

### F-02 — Evidence Library

- PDF nguồn: 70, 71, 72.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p072-01-library](../assets/blueprint/ui-references/evidence/bp-p072-01-library.png), 1536 × 1024, `ui-reference`, PDF 72.
- Nguồn: [SRC-10 — Read the Community Plan](https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf); `web-fetch-403`.
- Nguồn: [SRC-16 — Read the County policy and full criteria](https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf); `web-fetch-403`.
- Nguồn: [SRC-15 — Read the Van Dyke study — page 13](https://planhillsborough.org/wp-content/uploads/2025/06/LRC-June-Draft-Agenda-Packet.pdf); `web-fetch-403`.
- Nguồn: [SRC-12 — Read the County’s 2024 traffic data](https://services.arcgis.com/apTfC6SUmnNfnxuF/arcgis/rest/services/LOS_Update_2024/FeatureServer/6/query?objectIds=582%2C136%2C53%2C108%2C479&outFields=%2A&returnGeometry=false&f=json); `provided-not-opened`.
- Nguồn: [SRC-17 — Source: EPA — Septic Systems and Drinking Water](https://www.epa.gov/septic/septic-systems-and-drinking-water); `primary-page-opened`.
- Nguồn: [SRC-21 — Read the September 23, 2026 agency response](https://drive.google.com/file/d/1z6o0KhucgGOyLMXBGAMnMYcSHDlrFQQT/view); `provided-not-opened`.
- Nguồn: [SRC-19 — Read the May 9, 2024 Board minutes — Book 576, pages 39–40](https://publicaccess.hillsclerk.com/br/api/Document/AQ1%C3%89FuRtC3eDigqeOrtc4kvMW8ftGYkmV8UV7PGbail%C3%89bnOYGd0z0L%C3%89KJoPLOL8PlNhL50V8ZqAt6TErl6qsSxc%3D/?OverlayMode=View); `provided-not-opened`.
- Nguồn: [SRC-20 — Read the 2024 staff report and agency comments](https://planhillsborough.sharepoint.com/:b:/s/PlanAmendmentDocs/EU9Mk1XTa3FEsr7i3SDKnKABivOX1J90mzsECWdR_NwipQ?e=3euqpb); `provided-not-opened`.
- Nguồn: [SRC-06 — Parcel source and calculation inputs — County parcel GIS](https://maps.hillsboroughcounty.org/arcgis1a/rest/services/SDEMapServices/ParcelPublishing/FeatureServer/12); `provided-not-opened`.
- Nguồn: [SRC-07 — Official Community Plan boundary — County GIS](https://maps.hillsboroughcounty.org/arcgisapp/rest/services/DSD_Viewer/Landuse_and_Planning/MapServer/2); `provided-not-opened`.
- CTA **View the Original Document →** → Source register đúng record; thiếu → labelled preview.
- CTA **Take Action →** → /take-action.
- Cách dùng: Record schema có placeholder [short description], không được xuất như approved copy. Source IDs là nguồn có URL trong blueprint, không tự sinh source-card descriptions. Tất cả bộ 21 URLs nằm trong source register.
- **Thiếu/cần duyệt:** Không có verified full inventory, 124 results, toàn bộ record metadata hoặc approved description cho từng nguồn.
- Xung đột: C-03, C-06.

**English source block — PDF 70:**

```text
Find All Data and Documents
```


**English source block — PDF 71:**

```text
Each Result:
Document Name
Document Type · Agency · Date
The website uses this document to: [short description]
  View the Original Document →
```


## Action

<a id="a-01"></a>

### A-01 — Hero

- PDF nguồn: 73, 74.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p074-01-hero](../assets/blueprint/ui-references/action/bp-p074-01-hero.png), 1672 × 941, `ui-reference`, PDF 74.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Take Action →** → /take-action#add-your-support.
- Cách dùng: Không có After learning…; dùng community/family visual đã chọn, không road/septic problem visuals.

**English source block — PDF 73:**

```text
Headline
DEMAND CHANGE. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.
Content
Keystone–Odessa needs a planning framework that puts the health, safety, and welfare of residents
first.
```

<a id="a-02"></a>

### A-02 — Three Main Actions / Add Your Support

- PDF nguồn: 74, 77, 78, 79.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p079-01-three-actions](../assets/blueprint/ui-references/action/bp-p079-01-three-actions.png), 1536 × 1024, `ui-reference`, PDF 79.
- Nguồn: [SRC-19 — Read the May 9, 2024 Board minutes — Book 576, pages 39–40](https://publicaccess.hillsclerk.com/br/api/Document/AQ1%C3%89FuRtC3eDigqeOrtc4kvMW8ftGYkmV8UV7PGbail%C3%89bnOYGd0z0L%C3%89KJoPLOL8PlNhL50V8ZqAt6TErl6qsSxc%3D/?OverlayMode=View); `provided-not-opened`.
- Nguồn: [SRC-21 — Read the September 23, 2026 agency response](https://drive.google.com/file/d/1z6o0KhucgGOyLMXBGAMnMYcSHDlrFQQT/view); `provided-not-opened`.
- CTA **Become a supporter and stay updated →** → /take-action#supporter-application.
- CTA **Read and sign the petition →** → /take-action#petition.
- CTA **SHARE MY STORY →** → A-04 demo preview.
- CTA **SHARE INFORMATION →** → A-05 demo preview.
- CTA **Read the May 9, 2024 minutes →** → SRC minutes.
- Cách dùng: Current copy PDF 77–78 ưu tiên. Additional response note là dated source ở phần hỗ trợ; không làm live result.

**English source block — PDF 77, 78:**

```text
THREE WAYS TO TAKE ACTION
THE COUNTY CAN CHANGE COURSE.
The 2024 minutes record the Board’s ability to include Keystone–Odessa in the future. Ask commissioners to
reopen the decision.
Read the May 9, 2024 minutes →
RETIRE THE EXTRA PLAN. KEEP THE PROTECTIONS.
Ask the County to retire the separate Community Plan, reconsider related restrictions and retain enforceable
safeguards.
Become a supporter and stay updated →
Read and sign the petition →
SHARE YOUR STORY
Tell us about roads, water and daily life in Keystone–Odessa.
SHARE MY STORY →
SHARE INFORMATION WITH THE COMMUNITY
Help more residents understand the issues affecting Keystone–Odessa.
Facebook • Email • Copy Link
SHARE INFORMATION →
```


**English source block — PDF 74:**

```text
Additional record: In its September 23, 2026 response, Planning Commission staff reported that the
Board had not requested work on a Keystone–Odessa update. This is a dated status response.
Read the September 23, 2026 agency response
```

<a id="a-03"></a>

### A-03 — Supporter Application — combined preview

- PDF nguồn: 75, 76, 77.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Signing / participation / contact controls** → Static examples; Demo only. Nothing is submitted or saved..
- Cách dùng: Toàn bộ mission/choices/fields/Consent/Privacy/return instruction nguyên văn; address và phone optional. Ba audience choices unselected; không Other. Hai paper pages là một continuous preview.
- Cách dùng: Không enrollment thật, statutory voting membership, petition signature hoặc donation; anchor /take-action#supporter-application. Không cần ảnh UI để thay text form.

**English source block — PDF 76:**

```text
SAFER COMMUNITIES UNITED
Supporter Application
For Keystone-Odessa residents
☐ I live in Keystone-Odessa.
For people living in communities adjacent to Keystone
☐ I live in a community adjacent to Keystone.
For anyone who travels on Gunn Highway
☐ I travel on Gunn Highway.
Safer Communities United is a Florida nonprofit civic organization working to protect the health, safety,
and welfare of the people of Keystone-Odessa. We educate the public and advocate for a lawful County
process to retire the Keystone-Odessa Community Plan and apply the otherwise applicable policies of
the Hillsborough County Comprehensive Plan.
How I would like to participate
☐ Receive news and campaign updates
☐ Volunteer at community outreach events
☐ Help collect petition signatures
☐ Learn about formal membership if offered
```


**English source block — PDF 77:**

```text
Your information
FULL NAME
____________________________________________________
STREET ADDRESS optional
____________________________________________________
CITY
____________________________________________________
ZIP CODE
____________________________________________________
EMAIL
____________________________________________________
PHONE optional
____________________________________________________
PREFERRED CONTACT
☐ Email     ☐ Text     ☐ Call
Consent
By signing, I ask to join the Safer Communities United supporter network and authorize the organization to
contact me about its civic and educational activities. I understand that this form does not create statutory
voting membership. Any formal membership will be governed by the corporation's articles, bylaws, and
board-approved rules.
SIGNATURE                                      DATE
________________________________   _________________
Privacy: We will use this information only for organizational communications and will not sell it. We will
request separate permission before publicly submitting a supporter list. This is not a donation request.
Return this form to the organizer who provided it.
```

<a id="a-04"></a>

### A-04 — Share Your Story preview

- PDF nguồn: 79, 80.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p080-01-story-preview](../assets/blueprint/ui-references/action/bp-p080-01-story-preview.png), 1536 × 1024, `ui-reference`, PDF 80.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **SHARE MY STORY →** → Story preview.
- CTA **Upload / Submit Story** → Demo notice; không nhận file hoặc dữ liệu.
- Cách dùng: Giữ full field labels và demo notice. Publication Yes trong hình là ví dụ không phải consent thật; preview không editable.

**English source block — PDF 79:**

```text
02 — SHARE YOUR STORY
Show the community how planning policies affect real life.
Keystone–Odessa residents can share their experiences related to:
Roads & Safety • Water & Septic • Traffic • Housing • Infrastructure • Essential Services • Other
Community Issues
Button
SHARE MY STORY →
  Click → separate, non-editable story-form preview labelled “Demo only. Nothing is submitted or
  saved.”
Suggested Form
Name
Area Where You Live
Related Issue
Your Story
Upload Photo/Document
Allow the story to be published publicly: Yes / No
Submit Story
```

<a id="a-05"></a>

### A-05 — Share Information preview

- PDF nguồn: 78, 80, 81.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p081-01-sharing-preview](../assets/blueprint/ui-references/action/bp-p081-01-sharing-preview.png), 1536 × 1024, `ui-reference`, PDF 81.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **SHARE INFORMATION →** → Static Facebook / Email / Copy Link preview.
- Cách dùng: Không social integration/email/copy thật; optional paragraph theo PDF 80 được đề xuất giữ nguyên.

**English source block — PDF 80:**

```text
03 — SHARE INFORMATION WITH THE COMMUNITY
Help more residents understand the issues affecting Keystone–Odessa.


Button
SHARE INFORMATION →
Demo: the share button opens a static preview of the sharing choices. No Facebook integration, email
sending or copy-link action is required.
A short sentence can be included:
The more fully the community has access to information, the more people can participate in
decisions that affect the future of Keystone–Odessa.
```

<a id="a-06"></a>

### A-06 — Illustrative community stories

- PDF nguồn: 81, 82.
- Copy: `selected-plus-visually-checked-screenshot-text`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p082-01-sample-stories](../assets/blueprint/ui-references/action/bp-p082-01-sample-stories.png), 1536 × 1024, `ui-reference`, PDF 82.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Read the Story → / VIEW ALL STORIES →** → Illustrative story preview, không route live riêng.
- Cách dùng: Giữ ba sample cards và nhãn Illustrative sample stories. Quote/date bên dưới đã chép và đối chiếu ảnh PDF 82; không phải lời chứng được xác thực. Tagline Real people / Real stories trong artwork không làm sample thành submissions thật.
- **Thiếu/cần duyệt:** Không có authenticated submissions/publication permissions; ba quote/date chỉ là sample artwork.
- Xung đột: C-03.

**English source block — PDF 81, 82:**

```text
Heading
STORIES FROM THE COMMUNITY
Subheading
Real-life experiences show how planning issues affect the daily lives of Keystone–Odessa
residents.
Display about 3 featured stories as cards:
ROAD SAFETY
Short excerpt from the story
Name or “Keystone–Odessa Resident”
  Read the Story →
WATER & SEPTIC
Short excerpt from the story
Name or “Odessa Resident”
  Read the Story →
EVERYDAY ACCESS
Short excerpt from the story
Name or “Keystone Resident”
  Read the Story →
At the End of the Section
VIEW ALL STORIES →

Editorial verification before launch: these resident quotations and dates are sample testimonial cards,
not authenticated submissions. Replace with real stories only after publication permission and approval.
```


**Literal sample-card transcription from PDF 82 — Illustrative sample stories — PDF 82:**

```text
ROAD SAFETY
“Traffic has increased significantly, and it feels less safe for our children to walk or bike in our neighborhood.”
Keystone–Odessa Resident
September 2026
Read the Story

WATER & SEPTIC
“Our well water often has a strange taste and odor. We are concerned about our long-term health and the lack of options for public water.”
Odessa Resident
August 2026
Read the Story

EVERYDAY ACCESS
“We have to drive a long way for groceries, healthcare, and other essential services. It makes daily life more difficult, especially for older residents.”
Keystone Resident
September 2026
Read the Story

VIEW ALL STORIES

Real people.
Real stories.
A stronger community.
```

<a id="a-07"></a>

### A-07 — Final CTA

- PDF nguồn: 82, 83.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p087-01-approved-petition](../assets/blueprint/ui-references/action/bp-p087-01-approved-petition.png), 887 × 1774, `ui-reference`, PDF 87, 88.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **READ AND SIGN THE PETITION →** → /take-action#petition.
- Cách dùng: Giữ campaign passage; thay old merged form bằng separate petition. PDF 87 chỉ reference layout.

**English source block — PDF 82:**

```text
Headline
PUT THE HEALTH, SAFETY, AND WELFARE OF RESIDENTS FIRST.
A short paragraph reconnecting to the Home page message:
Let’s support a future where planning responds to the actual conditions of Keystone–Odessa
and protects residents, infrastructure, water resources, and the community for current and
future generations.
PUT PEOPLE FIRST. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN. Read the evidence,
read the petition and add your name to the request for the County to initiate the amendment process.
Make the community’s demand impossible to ignore.
```


**English source block — PDF 83:**

```text
Primary CTA
READ AND SIGN THE PETITION →
Residents, property owners, workers and community supporters can read the full petition and add their
support through its own signing process. Signing does not join the supporter network or create statutory
voting membership.
Petition Form
SIGN THIS PETITION →
```

<a id="a-08"></a>

### A-08 — Approved Petition + signing preview

- PDF nguồn: 83, 84, 85, 86, 87, 88.
- Copy: `selected-from-blueprint`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `reference-only-component-assets-needed`. Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có.
- Ảnh: [bp-p087-01-approved-petition](../assets/blueprint/ui-references/action/bp-p087-01-approved-petition.png), 887 × 1774, `ui-reference`, PDF 87, 88.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **SIGN THIS PETITION →** → Demo only. No signature has been collected..
- Cách dùng: Anchor /take-action#petition; full selectable text trước bốn fields Printed name / Community or ZIP / Signature / Date. Giữ public-records warning, independent notice, associated policies và LDC Part 3.08.00.
- Cách dùng: PDF 87/88 dùng cùng một image; không suy ra hai bản petition wording. Optional email artwork static, không thêm required email/age/voter eligibility hoặc signup consent.
- **Thiếu/cần duyệt:** Petition_Larger_Text.pdf riêng chưa có; copy chính thức đầy đủ có ở blueprint PDF 85. Không cần file riêng để hiện HTML text preview.
- Xung đột: C-05.

**English source block — PDF 85:**

```text
SAFER COMMUNITIES UNITED
Retire the Keystone Odessa Community Plan
Retire the separate local plan and rely on the Hillsborough County Comprehensive Plan.
TO THE HILLSBOROUGH COUNTY BOARD OF COUNTY COMMISSIONERS
We, the undersigned residents, property owners, workers, and community supporters, respectfully request
that Hillsborough County initiate a Comprehensive Plan amendment and complete all legally required
analysis, notice, and public hearings to retire the Keystone-Odessa Community Plan as a separate
community-specific plan. Our goal is for Keystone-Odessa to rely on the otherwise applicable Hillsborough
County Comprehensive Plan as its governing planning framework, while all applicable zoning,
environmental, infrastructure, and safety protections remain enforceable.
Why we are asking
We are concerned that the existing plan contains outdated, unclear, or conflicting provisions; restricts some
transportation changes without requiring current safety evidence; and omits measurable protections for
emergency access, disability access, safe school travel, private wells and septic systems, and flood resilience.
Any replacement policy should protect the rural character and natural resources of Keystone-Odessa while
placing the health, safety, and welfare of the people first.
What the County should do
• Remove the Keystone-Odessa Community Plan and its associated policies from the Hillsborough County
Comprehensive Plan. Repeal implementing Land Development Code provisions, including Part 3.08.00
(Keystone-Odessa Rural Development Standards), through the required public amendment processes.
Retain otherwise applicable County protections.
• Rely on the Hillsborough County Comprehensive Plan as the principal planning framework for
Keystone-Odessa.
• Use current data on crashes, traffic, emergency response, evacuation, flooding, wells, septic systems,
accessibility, housing, and environmental conditions.
• Hold open public meetings and allow all affected residents to participate before making a decision.
By signing, I support the request above. I understand that this petition may be submitted to public agencies
and that my printed name, community or ZIP code, signature, and date may become public records.
Independent civic petition - not sponsored by Hillsborough County. Please sign only once.
```


## About / Information

<a id="b-01"></a>

### B-01 — About

- PDF nguồn: 3, 5, 6.
- Copy: `missing-approved-public-copy`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- Cách dùng: Trích đoạn là yêu cầu chức năng, không public copy. D-02 đề xuất /about labelled preview; không tự viết bio/tuyên bố pháp lý.
- **Thiếu/cần duyệt:** Approved public copy, section order, selected design và actual contact chưa được cung cấp.
- Xung đột: C-04.

**English source block — PDF 3:**

```text
About — Safer Communities United, sources, methods, and contact information.
```

<a id="b-02"></a>

### B-02 — Footer information destinations

- PDF nguồn: 5, 6.
- Copy: `missing-approved-public-copy`; duyệt: **approved-non-image-scope**; ảnh: **see-image-replacement-audit**.
- Tài nguyên: `no-independent-visual-selected`. Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú.
- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.
- CTA **Updates / Contact / Sources & Methods / Accessibility / Edits / Privacy** → Six labelled informational previews; không thêm route ngoài D-01.
- Cách dùng: Privacy placeholder không phải lời hứa quyền riêng tư đã duyệt. Source register kỹ thuật này không tự trở thành public Sources & Methods copy.
- **Thiếu/cần duyệt:** Chưa có approved copy, contact details hoặc URLs riêng cho sáu đích phụ.
- Xung đột: C-04.

**English source block — PDF 5:**

```text
Get Involved: Take Action · Updates · Contact
Information: About · Sources & Methods · Accessibility · Edits · Privacy
```

## Phạm vi phê duyệt

Hồ sơ này duyệt nguồn/copy/tài nguyên/điều hướng demo. Việc phê duyệt không tự mở thu thập dữ liệu, production, public launch, email hay County submission. Chưa code website. Các phần thiếu không bị đánh dấu hoàn thành.
