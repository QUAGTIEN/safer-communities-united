# Our Community (Home)

- **Loại:** 22/10 built page. Inventory: nằm trong blueprint text (không có gói export). Bản trong blueprint: TXT:235-341.
- **Thứ tự section (bắt buộc):** Header → Opening → Issue cards → Footer. **Không có nhóm ba bản đồ** trên Home (TXT:115, TXT:234, TXT:1061) — bản đồ chỉ nằm ở Roads & Safety section 4.
- **Route:** `/`. Nhãn menu: Our Community.
- **Pilot:** Home là trang dựng đầu tiên và phải được duyệt desktop + mobile trước khi làm trang khác (TXT:15-17, [IMPLEMENTATION_PLAN](../IMPLEMENTATION_PLAN.md)).

## HOME-HEADER

Dùng header chung — xem [shared.md](shared.md#header). Ảnh: `p017-obj42-1536x87.png` (desktop), `p082-obj196-768x77.png` (768), `p088-obj212-390x73.png` (390).

## HOME-OPENING

**Ảnh tham chiếu:** `p019-obj48-1536x609.png`; 768: `p083-obj199-768x935.png`; 390: `p089-obj215-390x967.png`.

<!-- TXT:279-289 -->
```text
Home Opening
Exact exported visible text
A SAFER, STRONGER KEYSTONE–ODESSA
Putting the health, safety, and welfare of people first.
We envision a future where community growth protects people and places, supported by responsible planning, safer infrastructure, environmental stewardship, and decisions that reflect the needs of today’s residents and generations to come.
The Keystone–Odessa community’s health, safety and welfare is endangered due to its outdated community plan.
View the Issues →
View the Evidence →
Links and controls
View the Issues → → page /issues  |  all widths
View the Evidence → → opens the "Not available yet" notice (page not built yet: /evidence)  |  all widths
```

**Asset cần:**
- `keystone-odessa-user-sign.png` — ảnh biển chào Keystone Odessa do người dùng cung cấp, **dùng nguyên khung, không crop, không dựng thêm cảnh** (TXT:44, TXT:1045). Trích tạm từ PDF theo D-007, giữ nguyên khung như trong ảnh tham chiếu.
- Wordmark gốc màu navy và pixel tam giác cảnh báo gốc (TXT:44, TXT:47). Trích tạm từ PDF theo D-007.

**Thiết kế (ngoại lệ được duyệt chỉ cho header + opening):** warm white `#F7F4EE`, charcoal `#282A2B`, burgundy `#7A263A`, header nền trắng; panel cảnh báo nền `#FCEAEA`, chữ nhấn `#E51C17` cho “outdated community plan.” (TXT:44). Hai CTA đặt đúng như ảnh desktop và phone (TXT:43): “View the Issues →” nền burgundy, “View the Evidence →” viền burgundy.

**Hành vi:** View the Issues → `/issues`. View the Evidence → trang Evidence (inventory 22/10 ghi “Not available yet” vì trang chưa build; first version trỏ tới trang Evidence thật — D-008).

**Ghi chú:**
- Câu vision dùng dấu phẩy “people and places, supported by …” (không còn dấu gạch dài).
- Opening approved views chỉ phủ phần mở đầu; các phần dưới theo reference riêng (TXT:43).

## HOME-CARDS (M4)

**Ảnh tham chiếu:** `p021-obj53-1536x541.png`; 768: `p085-obj204-768x976.png`; 390: `p091-obj220-390x1682.png`.

<!-- TXT:294-315 -->
```text
Home Issue cards
Exact exported visible text
OUR KEY ISSUES
Major problems under the current community plan
Click on each issue below to learn more about how these problems impact our community and why change is needed.
Gunn Highway, Keystone · AARoads (2016)
Road setting only, not crash evidence
Our roads ↵ are dangerous!
Traffic, intersections, lighting, road safety and emergency access put residents, students and commuters at risk.
Lake Rogers, Odessa · Florida Hikes
Landscape only, not contamination evidence
Our water ↵ is at risk!
1,626 known septic systems, 1,210 likely septic, and 806 repair records. Septic systems and wells threaten groundwater, drinking water, health and the environment.
Everyday needs ↵ are harder to access!
Housing, commute time, healthcare, food, jobs and essential services are limited due to current restrictions.
The Community Plan ↵ is holding our community back!
Outdated rules adopted in 2001 continue to limit solutions for our roads, water, infrastructure, housing, and essential services.
Links and controls
(View Roads & Safety: no visible text) → page /issues/roads-safety  |  all widths
(View Water & Septic: no visible text) → opens the "Not available yet" notice (page not built yet: /issues/water-septic)  |  all widths
(View Growth & Daily Life: no visible text) → opens the "Not available yet" notice (page not built yet: /issues/growth-daily-life)  |  all widths
(View the Community Plan: no visible text) → opens the "Not available yet" notice (page not built yet: /comparison#proposed-change)  |  all widths
```

**Asset cần:**
- Ảnh Gunn Highway, Keystone — Alex Nitzman / AARoads, chụp 20/04/2016 (TXT:1047). Caption trên card: “Gunn Highway, Keystone · AARoads (2016)” + “Road setting only, not crash evidence”.
- Ảnh Lake Rogers, Odessa — nguồn Florida Hikes, người chụp và ngày chụp chưa xác minh (TXT:1047). Caption: “Lake Rogers, Odessa · Florida Hikes” + “Landscape only, not contamination evidence”.
- Card 3 (Everyday needs) và card 4 (The Community Plan) dùng hình đúng như ảnh M4 — trích tạm từ PDF theo D-007.
- Quyền dùng công khai các ảnh chưa được xử lý (OQ-19).

**Hành vi:** cả card là link (CTA không có chữ hiển thị):
- Card 1 → `/issues/roads-safety`.
- Card 2 → `/issues/water-septic`.
- Card 3 → `/issues/growth-daily-life`.
- Card 4 → phần giải thích Community Plan của website trước (TXT:115: “View the Community Plan … open the website’s explanation first”). Inventory ghi đích `/comparison#proposed-change`; theo D-008 card trỏ `/issues#community-plan`.

**Ghi chú:** Heading không có dấu chấm cuối: “Major problems under the current community plan”. Ảnh chỉ là bối cảnh địa phương; không chứng minh số liệu/rủi ro trên card (TXT:1047).

## HOME-FOOTER

Dùng footer biến thể “navy một hàng” — xem [shared.md](shared.md#footer). Ảnh: `p023-obj58-1536x74.png`; 768: `p087-obj209-768x204.png`; 390: `p093-obj225-390x332.png`.

<!-- TXT:320-337 -->
```text
Home Footer
Exact exported visible text
A safer, stronger Keystone–Odessa for today and future generations.
Our Community
Issues
The Facts
The Proposal
Take Action
About
Subscribe for Updates
Links and controls
Our Community → page /  |  all widths
Issues → page /issues  |  all widths
The Facts → opens the "Not available yet" notice (page not built yet: /evidence)  |  all widths
The Proposal → opens the "Not available yet" notice (page not built yet: /comparison#proposed-change)  |  all widths
Take Action → opens the "Not available yet" notice (page not built yet: /take-action)  |  all widths
About → opens the "Not available yet" notice (page not built yet: /about)  |  all widths
Subscribe for Updates → opens the "Not available yet" notice (no destination yet: subscribe)  |  all widths
```
