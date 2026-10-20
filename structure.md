# Cấu trúc website — Safer Communities United

## 1. Nguồn, phạm vi và cách đọc

- Nguồn: [WEBSITE BLUEPRINT — SAFER COMMUNITIES UNITED — KEYSTONE–ODESSA](<Copy of blueprint SAFER COMMUNITIES UNITED.docx.pdf>), `blueprint copy nr 3`, 88 trang PDF.
- Quy tắc của người dùng: [Master Rules nguyên văn](docs/BLUEPRINT_RULES.md); hướng dẫn làm việc: [agent.md](agent.md).
- Hồ sơ nguồn/copy/visual/CTA: [SECTION_REVIEW.md](docs/SECTION_REVIEW.md), [bản có ảnh](docs/SECTION_REVIEW.html), [source register](docs/SOURCE_REGISTER.md). Người dùng đã duyệt phần ngoài ngoại lệ ảnh, gồm D-01/D-02/D-04/D-05/D-06; D-03 được thay bằng [quy tắc hiện hành](docs/PROJECT_DECISIONS.md) cho phép nguồn khác cho một số photo trong screenshot, map gốc bất biến. [Inventory ảnh](docs/IMAGE_REPLACEMENT_AUDIT.md) ghi cụ thể vị trí được thay/giữ.
- Phạm vi: **First Clickable Demo**. Người dùng đã xác nhận công nghệ chính **Next.js + React**; [hướng dẫn kỹ thuật](docs/TECHNICAL_GUIDELINES.md) tham khảo Next.js, Tailwind CSS và shadcn/ui. Tài liệu này ghi cấu trúc nội dung, không khởi tạo ứng dụng, chốt package version hoặc URL chưa có.
- Mọi số trang PDF dưới đây là số trang vật lý của file; `PAGE 01`, `PAGE 02`... là nhãn trang website trong blueprint.
- Các mô tả tiếng Việt là ghi chú triển khai, không phải nội dung tiếng Anh được duyệt để đưa lên UI. Khi code phải lấy nguyên văn đúng đoạn trong PDF.
- `Đã quy định`: có yêu cầu trong blueprint. `Thiếu đặc tả`: blueprint có nhắc nhưng chưa mô tả đầy đủ. `Chờ kiểm tra`: chưa xác nhận file gốc, nguồn hoặc chất lượng đủ để triển khai. Không tự bù phần thiếu.

## 2. Mục tiêu và hành trình

Nguồn: PDF 1–3.

Website thông tin và vận động của Safer Communities United cho Keystone–Odessa: trình bày các vấn đề, bằng chứng, khác biệt chính sách và yêu cầu County khởi động quy trình sửa đổi để retire Community Plan như một lớp chính sách riêng, cùng các thay đổi liên quan; giữ các bảo vệ County còn áp dụng.

**Problem → Consequences → Evidence → Comparison → Solution → Action**

Hành trình chi tiết:

1. Nhận diện Roads & Safety, Water & Septic, Infrastructure, Growth & Housing, Essential Services, Outdated Community Plan.
2. Hiểu hệ quả đối với health, safety, environment, welfare và daily life.
3. Xem data, maps, public records, official documents, policies và historical records.
4. Hiểu quan hệ giữa current rules, actual conditions và impacts; không biến sơ đồ thành chứng minh nhân quả.
5. So sánh Community Plan với Hillsborough County Comprehensive Plan theo từng vấn đề.
6. Hiểu hướng thay đổi, công cụ County và các bảo vệ tiếp tục tồn tại.
7. Support, share, participate và follow; trong demo chỉ điều hướng/preview.

## 3. Số lượng và sitemap nội dung

### 3.1. Các con số được blueprint xác nhận

| Loại | Số lượng | Ghi chú |
|---|---:|---|
| Nhóm nội dung chính | 7 | Home, Issues, Evidence, Comparison, Proposed Change, Action, About; PDF 2–3. |
| Mục menu cấp cao | 6 | Cộng CTA Get Involved dẫn tới Action; PDF 3. |
| Mục có tiêu đề PAGE riêng | 8 | PAGE 01, 02, 03, 04, 05, 06, 08, 09. Không có PAGE 07. |
| Tổng URL/màn hình độc lập | Chưa chốt | Không suy ra từ PAGE 09 hoặc từ số screenshot. Comparison dùng section anchor hiện có; form/story/library không mặc nhiên thành trang mới. |

Blueprint có 8 đặc tả PAGE, đồng thời yêu cầu Proposed Change và About ở Foundation nhưng chưa có đặc tả riêng đầy đủ. **Người dùng hiện đã duyệt 9 route demo theo D-01** trong hồ sơ section, với Comparison trong The Proposal và labelled previews cho nội dung thiếu. Phân biệt quyết định triển khai này với số trang/nhãn PAGE được tài liệu gốc nêu.

### 3.2. Quan hệ nội dung đã quy định

```text
Safer Communities United
├── Our Community → Home [PAGE 01]
├── Issues → Issues overview [PAGE 02]
│   ├── Roads & Safety → chi tiết [PAGE 03]
│   ├── Water & Septic → chi tiết [PAGE 04]
│   ├── Growth, Infrastructure & Daily Life → chi tiết [PAGE 05]
│   └── Outdated Community Plan → overview hiện có và Comparison
├── The Facts → Evidence & Records [PAGE 08]
├── The Proposal → Proposed Change [thiếu đặc tả riêng]
│   └── Compare the Two Plans → Comparison section anchor hiện có
│       └── Community Plan vs. County Comprehensive Plan [PAGE 06]
├── Take Action → Action [PAGE 09]
│   ├── Add Your Support
│   │   ├── Supporter Application preview
│   │   └── Approved Petition + signing preview [luồng riêng]
│   ├── Share Your Story preview
│   ├── Share Information preview
│   ├── Illustrative Community Stories
│   └── Final CTA → Approved Petition + signing preview
├── About [thiếu đặc tả riêng]
└── Get Involved → cùng đích Action
```

Đây là cây quan hệ nội dung từ blueprint; **route/anchor được duyệt hiện hành nằm ở SECTION_REVIEW**. Outdated Community Plan dùng overview ở Issues, không thêm một route độc lập.

## 4. Navigation và shared layout

Nguồn: PDF 3–6.

### 4.1. Header

Logo/tên **Safer Communities United**, nền sáng, fixed khi cuộn. Mobile: logo + menu, không che nội dung.

| Nhãn phải giữ nguyên | Đích | Quy định |
|---|---|---|
| Our Community | Home/community content | Không đổi thành nhãn Home trên public menu. |
| Issues | Issues overview | Truy cập các nhóm vấn đề. |
| The Facts | Evidence & Records | Tên nội bộ không ghi đè nhãn menu. |
| The Proposal | Proposed-change content | Có Compare the Two Plans tới Comparison anchor hiện có. |
| Take Action | Action | Cùng đích với Get Involved. |
| About | About | Thiếu nội dung chi tiết; không tự viết. |
| Get Involved | Action | Highlighted CTA. |

Không thêm Comparison vào menu cấp cao. Giữ nhãn nhất quán desktop/mobile và footer tương ứng. Không tự tạo URL cho đích chưa được cung cấp.

### 4.2. Footer dùng chung

- Nền navy.
- Tên: **Safer Communities United**.
- Slogan: **Putting the health, safety, and welfare of people first.**
- Explore: **Our Community · Issues · The Facts · The Proposal**.
- Get Involved: **Take Action · Updates · Contact**.
- Information: **About · Sources & Methods · Accessibility · Edits · Privacy**.
- Các liên kết phụ chưa có nội dung/URL phải được ghi thiếu; demo preview có nhãn nếu cần duy trì điều hướng. Chưa tự tạo thêm trang, chính sách hoặc thông tin liên hệ.
- Footer Foundation có quyền ưu tiên; các slogan/link group khác trong mockup cũ chỉ là minh họa.

### 4.3. Hệ thành phần chung

| Thành phần | Cấu trúc theo blueprint |
|---|---|
| Issue Card | Image → Heading → Key information → Detail button |
| Data Card | Large number → Short label → Source |
| Evidence Card | Document/map preview → Key finding → Source |
| Comparison Card | Community Plan ↔ Countywide Planning Framework |
| Timeline Card | Year → Event → Related document |
| Primary Button | Coral background, white text |
| Secondary Button | Navy hoặc teal border |
| Content Link | Text + arrow |
| Static Map | Title, image đúng tỷ lệ, legend, source, alt text, text summary |
| Demo Preview | Nhãn demo, nội dung minh họa, đường quay lại; không gửi/lưu dữ liệu |

Issue page template: Problem → Consequences → Actual Conditions → Data/Maps → Public Records → Community Plan → Comparison → Next Page.

Evidence template: Key Finding → Data → Maps → Public Records → Official Documents → Timeline → Sources.

Comparison/Proposal template: Community Plan ↔ Countywide Planning Framework → Policy Differences → Real-World Impacts → Proposed Change → Sources.

Action template: What Needs to Change → Why It Matters → Proposal → Support → Participate → Share.

Các template là khung chung; chỉ dẫn cụ thể từng trang và bản cập nhật mới nhất quyết định layout cuối.

## 5. PAGE 01 — Home

Nguồn: PDF 6–17. Hình Home tổng quan nằm ở PDF 17, trước phần Issues; vị trí hình không đổi thứ tự section đã chỉ định.

### Thứ tự section

1. **Introduction / Hero** — PDF 7, hình PDF 17.
   - Eyebrow: **A SAFER, STRONGER KEYSTONE–ODESSA**.
   - Heading: **Putting the health, safety, and welfare of people first.**
   - Vision message và Problem Message: lấy nguyên văn PDF 7.
   - CTA: **View the Issues →** tới Issues; **View the Evidence →** tới Evidence & Records.
   - Giữ opening Home design, không thiết kế lại khi thêm bản đồ.
2. **2A. Map Comparison** — PDF 8–15.
   - Đặt ngay sau introduction, trước Main Issues.
   - Xếp dọc: official boundary map → area/land/parcel map → roads/traffic map.
   - **THE NIMBY MAP** → **WHAT THE NIMBY MAP DOESN’T SHOW YOU**; các passage landscape, parcel và road theo đúng PDF 8–12.
   - Bản gốc nhúng: PDF 8, 9, 11. Multi-panel layout preview: PDF 13–15; không thay map gốc bằng layout preview.
   - Full-width trong vùng nội dung; không slider, không hai cột. Link đơn giản có thể mở ảnh/PDF full-size được cung cấp.
   - Giữ source/legend/tỷ lệ, alt text và text summary. Methodology ở dạng plain text note trong demo.
   - CTA: **Explore the evidence →** tới Evidence; **Read the petition →** tới toàn văn petition; **Become a supporter →** tới Action → ADD YOUR SUPPORT → Supporter Application.
   - Roads note tới Roads & Safety và nguồn Van Dyke tương ứng.
3. **Main Issues** — PDF 16, hình PDF 17.
   - Eyebrow: **OUR KEY ISSUES**.
   - Current heading: **Major problems under the current community plan.**
   - Bốn card theo thứ tự:
     1. **Our roads are dangerous!** → **View Roads & Safety →**.
     2. **Our water is at risk!** → **View Water & Septic →**.
     3. **Everyday needs are harder to access!** → **View Growth & Daily Life →**.
     4. **The Community Plan is holding our community back!** → **View the Community Plan →** tới overview/Comparison hiện có.
   - Dùng current on-screen card copy tương ứng; không lấy mô tả dài thay thế.

### Dữ liệu và nguồn trong Map Comparison

- 34.3%, 8,025/23,387 acres: phép đo GIS ngày 16 October 2026; conservation và mapped lakes/reservoirs/ponds, clip theo boundary, overlaps tính một lần. Giữ nguồn và mô tả phương pháp.
- 4,542 improved single-family parcels; 2,249 dưới một acre, 49.5%; snapshot County GIS October 2, 2026, không phải live count hay số nhà có người ở.
- Parcel method: unique tax folios; interior point gán boundary; single-family classification; positive building value và ít nhất một recorded building; full reported parcel acreage.
- Public holdings, wetlands và water-protection layers không đồng nghĩa tất cả là đất chính quyền sở hữu.
- Gunn Highway AADT 2024: 19,912 lượt phương tiện; không phải số người hoặc thương tích.
- Official map link nhắc Figure 3, page 17 của tài liệu nguồn; Van Dyke source nhắc PDF page 13 của study packet, không phải trang 13 blueprint.

## 6. PAGE 02 — Issues

Nguồn: PDF 17–27. Current heading: **Issues affecting Keystone–Odessa.**

### Thứ tự section

1. **Explore the Issues / introduction** — PDF 17–18; selected overview PDF 19.
2. **Group 01 — Roads & Safety** — PDF 18–19.
   - **Roads must meet the safety needs of today’s community**.
   - Gunn Highway; Street Lighting; Traffic & Intersections; Walking & Biking; Emergency Access; mạng đường phục vụ khu vực rộng hơn.
   - CTA **Explore Roads & Safety →** tới PAGE 03.
3. **Group 02 — Water & Septic** — PDF 19–21; selected image PDF 21.
   - **WHAT ARE WE PROTECTING IF WE DON’T PUT CLEAN WATER FIRST?**
   - Septic concentration/repairs, private wells, groundwater, wellfields/lakes/wetlands, water/wastewater infrastructure.
   - Data cards 7,191 / 3,087 / 806, kèm caveat PDF 20; không bỏ giới hạn dữ liệu.
   - Closing/petition connection đúng bản cập nhật; CTA **Explore Water & Septic →** tới PAGE 04.
4. **Group 03 — Everyday Needs, Growth & Infrastructure** — PDF 21–23; selected image PDF 23.
   - **YOU CHOSE RURAL LIVING. SHOULD THAT MEAN COMPROMISING ON SAFETY?**
   - Ba thông điệp mới thay bảy issue cards và visual impact chain cũ:
     - **THE QUESTION ISN’T HOW FAR YOU DRIVE. IT’S HOW SAFELY YOU GET THERE.**
     - **ESSENTIAL SERVICES ARE MORE THAN SHOPPING CONVENIENCE.**
     - **PROTECT THE COUNTRYSIDE. DON’T TREAT THE PLAN AS SACRED.**
   - Giữ map illustration; nhãn **Illustration** và **Schematic service pins, not verified locations.**
   - Evidence box chỉ được thêm khi kiểm tra được đúng restriction và documented consequence; hiện là editorial note, không public proof.
   - CTA **Explore Growth & Daily Life** tới PAGE 05.
5. **Group 04 — Outdated Community Plan** — PDF 23–25; selected image PDF 25.
   - **The Community Plan was created for a Keystone–Odessa of more than two decades ago**.
   - Boundary map; timeline **2001 → TODAY — MORE THAN TWO DECADES LATER → 2026**.
   - Bốn policy areas: Roads & Transportation; Water & Wastewater; Growth & Housing; Infrastructure & Services.
   - CTA **Learn About the Community Plan →** tới nội dung Community Plan/Comparison hiện có.
6. **The Issues Are Connected** — PDF 25–27; selected image PDF 27.
   - **NO PLAN IS MORE IMPORTANT THAN THE PEOPLE IT SERVES.**
   - Center: **ONE PLAN. DECISIONS THAT REACH INTO EVERYDAY LIFE.**
   - Ba nhánh Roads & Safety / Water & Septic / Growth & Daily Life → health, safety, welfare.
   - Giữ copy từng nhánh và convergence message theo PDF 25–26.
   - Diagram liên hệ policy topics và priorities, không chứng minh Plan gây harm. Source mỗi cột còn cần kiểm tra trực tiếp; không bịa link.

## 7. PAGE 03 — Roads & Safety

Nguồn: PDF 28–41.

### Thứ tự section

1. **Introduction** — PDF 28.
   - Label **ROADS & SAFETY**; heading **Our roads must be safe for everyone.**
   - Traffic · Lighting · Road Safety · Emergency Access.
   - Visual local road/Gunn Highway đã được duyệt; CTA **View the Road Issues ↓**.
2. **Main Safety Issues** — PDF 28–33; bốn block có nội dung chi tiết:
   - **Street Lighting** — selected image PDF 30; heading **Street lighting should respond to public safety needs.** Current rule, actual safety needs, why it matters; Community Plan và FHWA sources.
   - **Gunn Highway** — selected image PDF 31; heading **Expansion of Gunn Highway is restricted.** Plan rule, County constrained-road table, consequences và traffic source.
   - **Walking, Biking & Crossings** — selected image PDF 32; heading **Pedestrians and cyclists face safety risks.** Current rule, actual conditions, why it matters; County Mobility 2.2 và FHWA Walkways.
   - **Emergency Access** — selected image PDF 33; heading **Emergency access must be reliable.** Rule, response factors và why it matters. Không tạo dữ liệu chứng minh delay chưa có.
3. **The NIMBY Map vs. The Actual Map** — PDF 33–37.
   - **The NIMBY Map does not show the full transportation reality.**
   - Link Home 2A; nếu lặp bản đồ, vẫn xếp dọc full-width. Giữ ba multi-panel previews PDF 35–37.
4. **Records & Evidence** — PDF 38–39; selected image PDF 39.
   - **THE NUMBERS DEMAND ACTION**.
   - Năm nhóm: Safety Data / Traffic Data / Maps / Public Records / Community Plan.
   - Card: Preview → Key Finding → Agency/Source → Date → View Original Document.
   - Van Dyke study scope và traffic data; CTA **SUPPORT THE PETITION →** tới petition preview.
5. **How Do the Community Plan and Comprehensive Plan Approach the Issue?** — PDF 39–41; selected image PDF 41.
   - **Two planning frameworks. Two approaches to roads and safety.**
   - Hai cột: rural-road rules/configuration/Gunn Highway/lighting/improvement types ↔ County safety/mobility/infrastructure/evaluation/planning tools.
   - Đây là summary; CTA **Detailed Roads & Safety Comparison →** tới phần Roads trong Comparison.

### Ràng buộc dữ liệu

- Gunn Highway: County 2024 layer, OBJECTID 582, Pasco County line → Van Dyke Road, AADT 19,912.
- Van Dyke Road: OBJECTID 136, Gunn Highway → Suncoast north ramp, AADT 17,500.
- Cả hai đoạn: two lanes, daily/peak-direction LOS E, standard D; giữ đúng đoạn đường và phạm vi.
- Mockup 327 crashes và 12 serious/fatal crashes được PDF 39 xác định là ví dụ chưa kiểm chứng; không dùng như local evidence. Không tự thêm chúng nếu selected artwork hiện tại không hiển thị.
- Van Dyke capacity-study exclusion được dẫn theo study newsletter, June 2025 LRC packet, PDF page 13; không mở rộng phạm vi kết luận.

Blueprint nhảy số section nội bộ (ví dụ từ 4 sang 6). Các section trên giữ thứ tự hiện có, không sáng tác section còn thiếu để lấp số.

## 8. PAGE 04 — Water & Septic

Nguồn: PDF 42–53.

### Thứ tự section

1. **Hero — The Core Issue** — PDF 42–43; selected image PDF 43.
   - **Protect our water. Open the door to better solutions.**
   - Septic Systems → Groundwater → Private Wells; CTA **View the Issue ↓**.
2. **The Scale of Septic Is Not a Small Issue** — PDF 43–44; image PDF 44.
   - 7,191 total records; 1,626 Known; 1,210 Likely; 251 Somewhat Likely; tổng 3,087 classification records; static map.
3. **Septic Systems Have Needed Repairs for Many Years** — PDF 44–45; image PDF 45.
   - 806 EHDConst–Repair; 738 Known, 41 Likely, 27 Somewhat Likely; 1998–2023; timeline và map.
4. **Connected Water** — PDF 45–47; image PDF 47.
   - **WHAT GOES INTO THE GROUND CAN REACH THE WATER WE RELY ON.**
   - Giữ connected-water conceptual cutaway và nhãn **Conceptual illustration; not a documented contamination event.**
   - EPA source; không thêm interactive layer map vào demo.
5. **Water & Wastewater Options** — PDF 47–49; image PDF 49.
   - **OUR WATER. FEWER OPTIONS. WHY?**
   - Bốn bước conditions → County tools → exclusions → question restriction; One Water 4.3.7.
   - Giữ câu some routes remain, bao gồm public-health-hazard route; CTA/source links đúng nguồn.
6. **The Core Conflict** — PDF 49–51; concise selected panel PDF 51.
   - Dùng exact on-screen copy PDF 51: **LEFT OUT. BY CHOICE.**, **STAFF SUPPORTED CONSISTENCY**, **HEALTH. SAFETY. WELFARE.**, **REVERSE THE EXCLUSIONS. OPEN THE OPTIONS.**
   - Research dài PDF 49–50 hỗ trợ phần chi tiết; không nhồi vào concise panel.
   - Giữ qualifications: không phải mọi exclusion đều bắt đầu năm 2024; health-hazard route còn; agency comments ủng hộ rural utility reforms, không xác nhận ủng hộ SCU/retirement.
7. **Community Plan vs County Comprehensive Plan** — PDF 51–52; image PDF 52.
   - **Two Approaches to the Same Issue**; hai cột theo source.
   - CTA **View the Full Water & Wastewater Comparison →** tới Comparison → Water.
8. **Evidence** — PDF 52–53; image PDF 53.
   - **See the Data and Records Behind the Issue**.
   - Septic Data / Repair Records / Water & Well Maps / Public Records / Planning Policies.
   - Short Finding → Source → Date → View Original Document.
9. **Next Issue** — PDF 53; cùng hình PDF 53.
   - **Water is part of a larger issue.**
   - **Growth, Infrastructure & Daily Life →** tới PAGE 05.

7,191 là administrative records ZIP 33556, không phải system count trong Plan boundary. 806 construction/repair records không phải failure count. PDF 20 ghi phương pháp đằng sau 3,087 còn unverified; phải giữ caveat, không tự sửa hoặc tự công nhận số liệu đã xác thực.

## 9. PAGE 05 — Growth, Infrastructure & Daily Life

Nguồn: PDF 53–60.

### Thứ tự section

1. **Hero — The Core Issue** — PDF 54–55; image PDF 55.
   - **The community has changed. Planning needs to keep up.**
   - Then vs Today: cảnh quan, residential areas, subdivisions, roads, services, development.
   - Population/housing counts trong legacy mockup là sample unverified; cần nhãn demo, không trình bày thành số liệu địa phương xác thực.
2. **Very Low Density / Housing Consequences** — PDF 55–57; selected image PDF 57.
   - **Five acres for one home creates a development pattern with wider consequences.**
   - Density explanation và housing scenarios theo PDF 55–56; không tự thêm layout mới từ các hướng cũ.
   - Dùng **Natural Rural Density Comparison**: hai phía cùng thiên nhiên và tree cover tương đương; bên phải narrow rural lanes.
   - Left: **5-ACRE PATTERN**, **Approximately 1 home per 5 acres**, **10 homes on 50 acres**.
   - Right: **MODERATE LOW-DENSITY PATTERN**, **Smaller lots with more homes**, **Same amount of land**.
   - “10 homes on 50 acres” chỉ ở left; conceptual illustration, không measured/engineered site plan.
   - Hệ quả trực quan: more land → homes farther apart → infrastructure distances → services farther away → more car trips.
3. **Services / Everyday Needs** — PDF 57–58; image PDF 58.
   - **The Community Plan limits where services can develop.**
   - Food, Pharmacy, Healthcare, Childcare, Restaurants, Services, Jobs; static service-map illustration.
   - Các drive-time label là minh họa: grocery 10–25; healthcare 10–30; childcare 10–25; restaurants 10–25; jobs 15–30 minutes.
   - Giữ caveat về estimates/location/traffic; không location lookup hoặc route calculation.
4. **Growth and Infrastructure Need to Be Planned Together** — PDF 58.
   - Timeline 2001 → 2010 → 2020 → 2026; population, housing, subdivisions, roads, water/wastewater, services, traffic.
   - Không có selected image riêng cho timeline này được gắn rõ; số liệu/assets cần kiểm tra, không tự tạo chart hoặc dữ liệu để lấp.
5. **Community Plan vs County Comprehensive Plan** — PDF 59; selected image PDF 59.
   - **Two Approaches to Growth and Development**; summary hai cột.
   - CTA **View the Growth & Development Comparison →** tới Comparison → Growth & Housing.
6. **Evidence** — PDF 59–60; image PDF 60.
   - **See the Evidence Behind the Issue**.
   - Community Plan / Land-Use Maps / Housing Data / Service Map / Travel Data / Infrastructure Records.
7. **End of Page** — PDF 60; cùng image PDF 60.
   - Current continuation: **Outdated Community Plan**.
   - **Learn About the Community Plan →** tới overview Outdated Community Plan hiện có và Comparison; không tự tạo PAGE mới.

Blueprint có các tiêu đề mục 3 và 4 cùng phát triển chủ đề density/housing nhưng selected visual là một comparison nhiều panel. Giữ quan hệ này, không tự nhân đôi một hình thành hai thiết kế mới.

## 10. PAGE 06 — Community Plan vs. County Comprehensive Plan

Nguồn: PDF 61–68. Được truy cập từ **The Proposal → Compare the Two Plans** và các CTA comparison ở trang vấn đề. Không có menu cấp cao riêng, không bắt buộc URL mới.

### Thứ tự section

1. **Roads & Safety Comparison** — PDF 61–63; image PDF 63.
   - **SHOULD THE LOOK OF A ROAD MATTER MORE THAN THE SAFETY OF THE PEOPLE USING IT?**
   - Bốn hàng: Road Design / Gunn Highway / Lighting / Walking and Crossings.
   - Community Plan ↔ County Framework; exact current text PDF 62.
   - CTA **View the Full Roads Comparison →**; nếu thiếu tài liệu đích thì preview có nhãn, không link bịa.
   - Giữ caveat: County policies already apply; retire/change restrictions không tự approve/fund road projects.
2. **Water & Wastewater Comparison** — PDF 64–65; image PDF 65.
   - **From Infrastructure Limits to More Response Tools**.
   - Hai cột về land/soil/permeability, failing septic, wellhead/wellfield pathways, stormwater cumulative impacts.
   - Giữ **KEYSTONE–ODESSA LIMIT**: One Water 4.3.7 và đúng pathway bị loại trừ.
   - CTA **View the Full Water Comparison →**.
3. **Growth & Housing Comparison** — PDF 65–67; image PDF 67.
   - **Two Ways of Managing Growth and Housing**.
   - Dùng đúng **Screenshot 110**: rural landscape header, hai cột, bốn illustrated rows mỗi cột, result banner, comparison CTA.
   - County vẫn dùng mapped density/intensity; rural density limits, gồm general one dwelling/five gross acres và specified exceptions, vẫn áp dụng.
   - Housing choice/affordability tools phải kèm điều kiện adequate infrastructure theo copy.
   - CTA **View the Full Growth & Housing Comparison →**.
4. **If the Community Plan Is Removed, What Remains?** — PDF 67–68; image PDF 68.
   - **Keystone–Odessa will still be planned and managed.**
   - REMOVE: Community Plan area-specific policy layer.
   - REMAINS: County Comprehensive Plan; Land Development Code; Future Land Use Policies; Mobility & Safety; Water & Environmental; Zoning & Development Standards; applicable Health/Engineering/Environmental Standards.
   - Giữ diagram/headline; passage **RETIRE THE EXTRA PLAN. KEEP THE PROTECTIONS.** đặt dưới viewport của mockup hiện có.
   - Source và đường tiếp tục tới Proposed Change/County framework theo tài liệu, không tự viết nội dung đích còn thiếu.

Blueprint nhảy section nội bộ tới mục 9; không tạo các mục 4–8 chỉ để làm số liên tục.

## 11. Proposed Change / The Proposal — thiếu đặc tả riêng

Nguồn: PDF 2–3, template PDF 6, comparison PDF 61 và 67–68, petition PDF 84–85.

Đã quy định:

- Là một trong 7 nhóm nội dung, đích của The Proposal.
- Giải thích khung quy hoạch đề xuất thay lớp Community Plan.
- Giữ lối vào Comparison qua **Compare the Two Plans** tới anchor hiện có.
- Đề xuất phải phản ánh đúng phạm vi chính sách, associated policies, implementing LDC provisions và các bảo vệ County còn áp dụng theo petition được duyệt.

Chưa có:

- Không có tiêu đề **PAGE 07** trong file.
- Không có đầy đủ section order, on-screen copy, selected screenshot hoặc đặc tả trang Proposed Change riêng.
- Không có URL được chốt trong blueprint.

Xử lý: ghi nhận thiếu để người dùng xác nhận nội dung/ảnh/cấu trúc; không tự biến petition thành copy trang Proposal hoặc tự thiết kế trang mới. Khi triển khai demo được yêu cầu, phần thiếu có thể giữ bằng preview có nhãn nếu phù hợp quy tắc người dùng.

## 12. PAGE 08 — Evidence & Records

Nguồn: PDF 69–72. Nhãn public menu: **The Facts**.

### Thứ tự section

1. **Explore Evidence by Issue** — PDF 69–70; selected image PDF 70.
   - **ROADS & SAFETY**: crash/severity/traffic/speed; road maps; studies/agency responses; transport policies. CTA **View Road Evidence →**.
   - **WATER & SEPTIC**: classifications/repairs; septic/wells/groundwater/wellfield/lakes maps; infrastructure/drainage/monitoring; water policies. CTA **View Water Evidence →**.
   - **GROWTH, HOUSING & SERVICES**: housing/lots/development/travel; land use/services/infrastructure maps; development records; density/commercial/Future Land Use. CTA **View Growth Evidence →**.
   - **COMMUNITY PLAN & COUNTY FRAMEWORK**: Plan/Comprehensive Plan/LDC; policy comparison và sources. CTA **View Planning Documents →**.
2. **Evidence Library** — PDF 70–72; selected image PDF 72.
   - **Find All Data and Documents**.
   - Demo chỉ có fixed source cards và supplied document links.
   - Mỗi result: Document Name → Document Type / Agency / Date → “The website uses this document to:” + mô tả đúng source → **View the Original Document →**.
   - Search, filters Topic/Source Type/Agency/Year và full collection là future scope; có thể giữ artwork/static preview, không làm chức năng động.
   - “124 results” và example metadata là minh họa, chưa xác thực inventory.

Evidence hub giúp kiểm tra nguồn, không phân tích lại toàn bộ Roads/Water/Growth. CTA cuối mockup tới Action phải có đích, không bỏ trống.

## 13. PAGE 09 — Action

Nguồn: PDF 73–88. Nhãn menu **Take Action**; **Get Involved** cùng đích.

### Thứ tự section

1. **Hero** — PDF 73–74; selected image PDF 74.
   - **DEMAND CHANGE. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.**
   - Giữ copy ngắn hiện tại; không phục hồi “After learning…”; dùng family/community/landscape, tránh problem visuals.
2. **Three Main Actions** — PDF 74–80; current card text PDF 77–78, selected image PDF 79.
   - **01 — ADD YOUR SUPPORT**: hai route độc lập **Become a supporter and stay updated →** và **Read and sign the petition →**. Supporter CTA là prominent CTA của section.
   - Board May 9, 2024 discussion và September 23, 2026 response là dated records; không diễn giải thành trạng thái live hoặc County đã đồng ý petition.
   - **02 — SHARE YOUR STORY** → preview riêng.
   - **03 — SHARE INFORMATION WITH THE COMMUNITY** → sharing preview.
3. **Community Stories** — PDF 81–82; selected image PDF 82.
   - **STORIES FROM THE COMMUNITY**; ba sample cards Road Safety / Water & Septic / Everyday Access.
   - Nhãn **Illustrative sample stories** phải rõ. Read the Story và View All Stories dẫn preview phù hợp; chưa tạo trang Community Stories độc lập từ future requirement.
4. **Final CTA** — PDF 82–84; petition artwork PDF 87–88.
   - **PUT THE HEALTH, SAFETY, AND WELFARE OF RESIDENTS FIRST.**
   - Giữ campaign passage hiện tại. Thay old form bằng petition flow riêng.
   - **READ AND SIGN THE PETITION →** tới toàn văn petition trước fields.

### 13.1. Supporter Application preview

Nguồn PDF 75–77; nằm trong ADD YOUR SUPPORT. Hai trang giấy trong tài liệu là **một form online liên tục**, không phải hai luồng signup.

- Ba audience choices, không chọn sẵn:
  - **I live in Keystone-Odessa.**
  - **I live in a community adjacent to Keystone.**
  - **I travel on Gunn Highway.**
- Bốn participation choices nguyên văn:
  - **Receive news and campaign updates**.
  - **Volunteer at community outreach events**.
  - **Help collect petition signatures**.
  - **Learn about formal membership if offered**.
- Fields: **FULL NAME; STREET ADDRESS optional; CITY; ZIP CODE; EMAIL; PHONE optional; PREFERRED CONTACT; SIGNATURE; DATE**.
- Preferred Contact: **Email / Text / Call**; không thêm Other.
- Mission, Consent, Privacy, return instructions giữ nguyên PDF 76–77; không thay chữ ký bằng consent checkbox.
- Không tạo statutory voting membership, petition signature, donation request hoặc public supporter list.
- Preview không nhập/chọn/ký/gửi/lưu; giữ demo notice.

### 13.2. Share Your Story preview

Nguồn PDF 79–80; selected image PDF 80.

- Topics: Roads & Safety / Water & Septic / Traffic / Housing / Infrastructure / Essential Services / Other Community Issues.
- Fields/labels: **Name; Area Where You Live; Related Issue; Your Story; Upload Photo/Document; Allow the story to be published publicly: Yes / No; Submit Story**.
- Tất cả static/non-editable; Upload và Submit chỉ demo notice.
- “Yes” trong hình là lựa chọn minh họa, không phải consent thật; actual form về sau phải không chọn sẵn và cần explicit Yes trước public publication.
- Resident stories và official evidence là hai loại nội dung khác nhau; không nhập chung chứng cứ.

### 13.3. Share Information preview

Nguồn PDF 80–81; selected image PDF 81.

- Các lựa chọn minh họa **Facebook · Email · Copy Link**.
- **SHARE INFORMATION →** mở static preview.
- Không Facebook integration, gửi email hoặc copy-link action thật trong giai đoạn này.

### 13.4. Approved Petition + signing preview

Nguồn PDF 83–88; approved text PDF 85, lưu ý PDF 84 và 86, artwork PDF 87–88.

- Bản chỉ định: **Petition_Larger_Text.pdf, September 24 version 3**. File độc lập này chưa có trong workspace; toàn văn đã được chép trong blueprint PDF 85.
- Hiển thị đầy đủ selectable/readable text trước fields ở desktop/mobile. Summary/download link không thay thế toàn văn.
- Giữ title, recipient **Hillsborough County Board of County Commissioners**, toàn bộ Why/What the County should do, declaration và independent civic petition notice.
- Yêu cầu gồm remove Community Plan **and associated policies**, repeal implementing LDC provisions **including Part 3.08.00**, giữ otherwise applicable County protections; County dùng current data và open public process.
- Bốn field minh họa: **Printed name; Community or ZIP; Signature; Date**.
- Giữ cảnh báo printed name/community or ZIP/signature/date có thể thành public records; không hứa confidentiality/anonymity.
- Không tự thêm age, registered-voter hoặc residency-only eligibility rule; papers cho residents, property owners, workers, community supporters và yêu cầu chỉ ký một lần.
- **SIGN THIS PETITION →** mở **Demo only. No signature has been collected.** Không success screen, saved record hoặc signature count.
- Signing không join supporter network, không tạo statutory voting membership. Email updates trong artwork chỉ là static example; mọi triển khai thật/consent là future scope.
- Không gọi đây là official County/election/ballot petition hoặc bảo đảm legal sufficiency.

## 14. About và các liên kết thông tin — thiếu đặc tả

Nguồn: PDF 3 và footer PDF 5–6.

- About phải có đích; chức năng được nêu là giới thiệu tổ chức, sources/methods và contact.
- Chưa có PAGE riêng, section order, approved copy đầy đủ hoặc selected screenshot riêng.
- Updates, Contact, Sources & Methods, Accessibility, Edits, Privacy có nhãn footer nhưng chưa có bộ nội dung/URL hoàn chỉnh trong blueprint.
- Không tự viết privacy policy, contact details, mô tả tổ chức hoặc thông báo pháp lý để lấp. Dùng nội dung đã được duyệt đúng ngữ cảnh; nếu cần preview thì ghi rõ phần thiếu.

## 15. Ma trận CTA và đích nội dung

Các đích dưới đây là nội dung, chưa phải URL mới.

| Nơi xuất phát | CTA/nhóm CTA | Đích |
|---|---|---|
| Home hero | View the Issues / View the Evidence | Issues / Evidence & Records |
| Home map | Explore the evidence / Read the petition / Become a supporter | Evidence / toàn văn Petition / Action → Supporter Application |
| Home và Issues | Roads / Water / Growth detail | PAGE 03 / PAGE 04 / PAGE 05 |
| Home, Issues, Growth ending | Community Plan / Outdated Community Plan | Overview hiện có và Comparison; chưa thêm trang |
| The Proposal | Compare the Two Plans | Comparison anchor hiện có |
| Roads / Water / Growth summaries | Detailed/Full Comparison | Đúng phần Roads / Water / Growth của Comparison |
| Evidence cards / source links | View Original / Read source | File/link nguồn được cung cấp; thiếu thì preview có nhãn |
| Comparison full-detail buttons | Full Roads / Water / Growth Comparison | Tài liệu/phần chi tiết được cung cấp; thiếu thì ghi thiếu, không tự tạo |
| Action support card | Become a supporter and stay updated | Supporter Application preview |
| Action support card/final CTA | Read and sign / Sign this petition | Toàn văn Petition → fields preview → demo notice |
| Action story/share | Share My Story / Share Information | Preview riêng không gửi/upload/share thật |
| Story cards | Read the Story / View All Stories | Sample preview có nhãn |
| Get Involved / Take Action | Menu, header/footer, CTA tương ứng | Action |
| Footer thông tin | Updates / Contact / Sources & Methods / Accessibility / Edits / Privacy | Đích được cung cấp hoặc demo preview có nhãn; thiếu đặc tả |

## 16. Kiểm kê hình ảnh và tài nguyên hiện có

### 16.1. Trạng thái file

- Tài liệu khách hàng trong thư mục gốc: một PDF blueprint; chưa có bộ ảnh gốc độc lập hoặc source documents riêng ngoài PDF.
- Đã trích **43 ảnh khác nhau từ 47 lần xuất hiện**, lưu tại [assets/blueprint](assets/blueprint); gồm 33 PNG lossless và 10 JPEG giữ nguyên bitstream, tổng 58,470,722 bytes ảnh.
- Vai trò: **3 maps**, **3 layout previews nhiều panel**, **37 UI references/panels**. Xem [danh mục](assets/README.md), [manifest JSON](assets/blueprint/manifest.json) hoặc [CSV](assets/blueprint/manifest.csv) để tra file, kích thước, SHA-256 và trang nguồn.
- Đã kiểm tra pixels/kích thước/chế độ màu cho 47 lần xuất hiện; lưu riêng ICC profile gốc của PDF. Không crop, upscale, sửa màu hoặc tạo ảnh mới.
- Layout panels ở PDF 13–15 được dùng lại tại 35–37. PDF 87 và 88 cũng dùng cùng ảnh nhúng; manifest trỏ nhiều trang về một file, vẫn phải đọc ghi chú từng trang.
- `tmp/pdfs/` chỉ giữ text/contact sheets/page renders và ảnh trung gian từ lượt đọc trước; không dùng làm nguồn asset chuẩn. Contact sheets trong assets/blueprint/previews cũng chỉ để kiểm kê.
- Các ảnh UI được làm phẳng với nhiều ảnh nhỏ và text; chưa phải bộ logo/local photo/illustration riêng đã tách. Không đặt screenshot cả trang thay HTML/React. Natural Rural Density và Screenshot 110 đã trích đúng composite tham chiếu, chưa có illustration độc lập riêng.
- Chưa đưa ảnh vào website. Chất lượng ở kích thước hiển thị thực tế và các asset nhỏ nằm trong screenshot vẫn cần kiểm tra trước code.
- Theo chỉ dẫn ảnh mới: [IMAGE_REPLACEMENT_AUDIT](docs/IMAGE_REPLACEMENT_AUDIT.md) xác định 80 photo slots có thể tìm nguồn thay, 12 document previews phải lấy từ tài liệu thật và nhóm map/diagram phải giữ/chờ provenance. 80 là số vị trí, không phải 80 file ảnh khác nhau; có 29 brief chủ đề để tái sử dụng khi phù hợp. Chưa tìm/tải/thay ảnh.

### 16.2. Bảng đối chiếu selected visuals

| Khu vực | Trang PDF chứa hình | Phân loại/cách dùng |
|---|---|---|
| Official boundary map | 8 | Map gốc nhúng; giữ label/legend/source/tỷ lệ. |
| Area/land/parcel map | 9 | Map gốc nhúng; giữ classification và notes. |
| Roads/traffic map | 11 | Map gốc nhúng; giữ traffic legend và sources. |
| Home map composition | 13, 14, 15 | Ba layout previews; không thay GIS source bằng preview. |
| Home | 17 | UI reference; dựng text/cards/header/footer bằng component. |
| Issues — Roads | 19 | UI reference. |
| Issues — Water | 21 | Selected revised UI; giữ caveat. |
| Issues — Everyday Needs | 23 | Selected revised UI, ba messages và schematic map. |
| Issues — Outdated Plan | 25 | UI reference với boundary/timeline. |
| Issues — Connections | 27 | Selected diagram composition; giữ giới hạn nhân quả. |
| Roads — bốn safety blocks | 30, 31, 32, 33 | UI references; actual photos/maps riêng cần kiểm kê. |
| Roads — map comparison | 35, 36, 37 | Intentional multi-panel previews; giữ nguyên selected images. |
| Roads — evidence / summary comparison | 39, 41 | UI references; không fake local evidence. |
| Water — hero / scale / repairs | 43, 44, 45 | UI references với data/map; cần caveat. |
| Water — Connected Water | 47 | Selected conceptual cutaway trong UI; không live layer map. |
| Water — options / core conflict | 49, 51 | UI/panel references; exact concise text PDF 51. |
| Water — summary / evidence-next | 52, 53 | UI references. |
| Growth — then/today | 55 | Legacy sample numbers chưa verified. |
| Growth — density | 57 | Natural Rural Density Comparison đúng phiên bản. |
| Growth — services | 58 | Static map illustration; drive times là minh họa. |
| Growth — summary / evidence-next | 59, 60 | UI references. |
| Comparison — Roads / Water | 63, 65 | Selected comparison layouts. |
| Comparison — Growth & Housing | 67 | Screenshot 110; hai cột, bốn illustrated rows, banner/CTA. |
| Comparison — What remains | 68 | Diagram/headline giữ nguyên; passage bổ sung dưới viewport. |
| Evidence groups / library | 70, 72 | UI references; search/results/filter là static/future. |
| Action hero / three cards | 74, 79 | Selected UI; hero không có đoạn đã xóa. |
| Story form / sharing / stories | 80, 81, 82 | UI references; không thu thập dữ liệu; sample labels. |
| Approved Petition | 87, 88 | Hai selected previews; toàn văn vẫn phải là selectable HTML trước fields. |

## 17. Phần để dành cho production, không triển khai trong demo

Nguồn: nội dung tím `((...))` xuyên suốt PDF, đặc biệt 1, 12, 35–39, 45–47, 57, 70–72, 75, 79–82, 85–88.

- Private/password-restricted review, authentication, secure admin, database, API và persistent records.
- Supporter signup, explicit signature/date, consent/contact preferences, export, backups, spam protection; tách test records.
- Petition signature method, eligibility nếu có, recipient submission requirements, approved delivery process, versioned records, duplicate/error handling và server-confirmed results.
- Email/updates/unsubscribe; không trộn supporter consent và petition consent.
- Story uploads, moderation, explicit publication permission và community stories page nếu về sau cần.
- Interactive maps/GIS layers, full-screen zoom/pan/download controls, keyboard map access, routing/drive-time calculation.
- Search/filter/full evidence inventory.
- Privacy/contact/provider/storage/access/retention/correction decisions phải hoàn tất trước thu thập dữ liệu thật; không đưa placeholder privacy promises lên site.
- Public publishing, campaign email và County submissions là quyết định/approval riêng. Các launch checks còn mở không ngăn lập tài liệu/demo được yêu cầu.

## 18. Sổ phần thiếu và mâu thuẫn cần xử lý

| ID | Phần thiếu/cần kiểm tra | Vị trí PDF | Ảnh hưởng | Đề xuất xử lý, chưa tự áp dụng |
|---|---|---|---|---|
| GAP-01 | Không có PAGE 07; Proposed Change chưa có đặc tả trang riêng | 3, 61, 67–69 | Chưa chốt copy/layout/URL The Proposal | Người dùng cung cấp hoặc xác nhận spec; demo preview có nhãn khi cần. |
| GAP-02 | About thiếu section/copy/selected design | 3, 5–6 | Chưa thể dựng nội dung hoàn chỉnh | Xin bộ nội dung/thiết kế đã duyệt; không tự viết. |
| GAP-03 | Footer destinations/content chưa đầy đủ | 5–6 | Updates/Contact/Information links chưa có đích thật | Dùng supplied links nếu tìm thấy; còn thiếu ghi nhãn preview, báo rõ. |
| GAP-04 | Đã trích 43 ảnh khác nhau; người dùng cho phép nguồn khác cho một số photo trong UI, map gốc bất biến | Toàn bộ, nhất là 8–15, 57, 67 | Có inventory 80 photo slots nhưng chưa tìm/chọn ảnh thay; technical/maps còn thiếu file độc lập/provenance | Theo IMAGE_REPLACEMENT_AUDIT; giữ map/diagram, không tự tạo ảnh mới; document preview từ tài liệu thật, ảnh ngoài lưu riêng. |
| GAP-05 | Đã inventory 33 annotations/21 URL gốc; thiếu raw datasets, một số full-detail destinations và claim-level source checks | 12, 26, 28–41, 47–52, 69–72, 74 | Có link được cung cấp không đồng nghĩa verified finding/date/version; ba PDF chính chưa mở được do công cụ trả 403 | Dùng SOURCE_REGISTER; giữ đúng URL, không kết luận hỏng/thay link, preview cho nguồn còn thiếu theo D-05 đã duyệt. |
| GAP-06 | Các con số sample và phương pháp septic chưa verified | 20, 39, 54–55, 58, 71, 82 | Có thể gây hiểu sai bằng chứng | Giữ caveat/nhãn demo; không tự sửa số hoặc xác nhận là thật. |
| GAP-07 | Growth infrastructure timeline chưa có selected visual/data hoàn chỉnh gắn riêng | 58 | Chưa dựng được chart/timeline có dữ liệu thật | Xác nhận asset/copy/data trước khi hoàn thiện; không tự sinh infographic. |
| GAP-08 | Petition paper riêng chưa có; production launch settings còn mở | 84–88 | Chưa enable signing/delivery | Dùng exact text trong PDF cho preview; không activation. |
| GAP-09 | Một số section nhảy số, multiple panels hoặc generic notes khác current copy | 28–41, 55–57, 61–68 | Dễ tự tạo thêm section hoặc dùng sai phiên bản | Giữ section order thực có; ưu tiên current copy/selected artwork; báo xung đột còn lại. |
| GAP-10 | 9 route/15 anchors đã được người dùng duyệt theo D-01; chưa có app để kiểm tra runtime | 3; hồ sơ SECTION_REVIEW | Cấu trúc đã chốt nhưng chưa có navigation chạy thật | Khi được yêu cầu triển khai, dùng route/anchor đã duyệt, không tự thêm URL ngoài phạm vi. |

## 19. Hồ sơ tài liệu hiện tại

```text
SAFER COMMUNITIES/
├── Copy of blueprint SAFER COMMUNITIES UNITED.docx.pdf
├── agent.md                         # Quy tắc làm việc và ranh giới demo
├── structure.md                     # Cấu trúc nội dung lấy từ blueprint
├── assets/
│   ├── README.md                    # Danh mục và hướng dẫn dùng asset
│   └── blueprint/                   # 43 ảnh gốc trích, manifests, ICC profile, previews
├── tools/
│   └── extract_blueprint_assets.py  # Script trích và kiểm tra pixels, không sửa PDF
├── docs/
│   ├── BLUEPRINT_RULES.md            # Master Rules của người dùng, nguyên văn
│   ├── IMPLEMENTATION_CHECKLIST.md   # Kế hoạch/kiểm tra, chưa cho phép code
│   ├── TECHNICAL_GUIDELINES.md       # Tham khảo kỹ thuật chính thức theo stack
│   ├── SECTION_REVIEW.md            # 57 hạng mục nguồn/copy/visual/CTA chờ duyệt
│   ├── SECTION_REVIEW.html          # Tài liệu duyệt offline có ảnh, không phải app
│   ├── section-review.json          # Hồ sơ máy đọc được, trạng thái pending
│   ├── SOURCE_REGISTER.md           # 21 URL gốc và trạng thái kiểm tra
│   ├── source-register.json         # Nhãn/link/trang nguồn từ PDF annotations
│   └── BLUEPRINT_TEXT_REFERENCE.md  # Text layer đầy đủ; không import làm UI copy
└── tmp/pdfs/                        # Tài liệu và hình trung gian để đối chiếu
```

Đây là cấu trúc tài liệu đang có, không phải cấu trúc source code website. Chưa khởi tạo React/Next.js, package, route, API hoặc component ứng dụng.
