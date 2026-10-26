# Cấu trúc website — first version

Nguồn: Part I §1–3, §6 (TXT:69-117, TXT:223-227) và inventory links của ba trang đã build.

## 1. Mục tiêu và hành trình

<!-- TXT:71-80 -->
```text
The Safer Communities United website aims to:
* Show residents that the current Community Plan is causing problems and consequences for the health, safety, environment, and welfare of Keystone–Odessa.
* Clearly present the issues related to roads, water and septic, infrastructure, growth, housing, and access to essential services.
* Demonstrate these issues through data, maps, public records, official documents, and the actual conditions of the community.
* Show the connection between Community Plan rules → actual conditions → consequences for people and the environment.
* Compare the Keystone–Odessa Community Plan with the Hillsborough County Comprehensive Plan to clearly show the differences in policies, planning tools, and the ability to address current issues.
* Present the proposal to remove the current Community Plan and move to an appropriate countywide planning framework.
* Gather community support after residents understand the issues, the evidence, the differences between the two planning frameworks, and the direction of the proposed change.
Core Flow:
Problem → Consequences → Evidence → Comparison → Solution → Action
```

<!-- TXT:85-91 -->
```text
01 — Recognize the Problems: Roads & Safety · Water & Septic · Infrastructure · Growth & Housing · Essential Services · Outdated Community Plan.
02 — Understand the Consequences: Health · Safety · Environment · Welfare · Daily Life.
03 — See the Evidence: Data · Maps · Public Records · Official Documents · Community Plan · County Policies · Historical Records.
04 — Understand How the Community Plan Is Connected: Current Rules → Actual Conditions → Impacts and Consequences.
05 — Compare the Two Planning Frameworks: Keystone–Odessa Community Plan ↔ Hillsborough County Comprehensive Plan, issue by issue.
06 — Understand the Direction of Change: Show what the Community Plan is limiting, what tools the countywide planning framework provides, and how changing the planning framework could address current issues.
07 — Take Action: Support · Share · Participate · Follow.
```

## 2. Nhóm nội dung và điều hướng

<!-- TXT:96-115 -->
```text
The website includes 7 main content groups:
Home — introduces the major issues and leads residents into the story.
Issues — roads & safety, water & septic, growth, infrastructure, housing, services, and the Community Plan.
Evidence — data, maps, public records, and official documents.
Comparison — the Community Plan and the Hillsborough County Comprehensive Plan.
Proposed Change — explains the planning framework proposed to replace the current one.
Action — gathers community support, sharing, and participation.
About — Safer Communities United, sources, methods, and contact information.
Main Navigation:


Our Community | Issues | The Facts | The Proposal | Take Action | About
Highlighted Button:


Get Involved
Navigation routing: Our Community opens the existing Home/community content; The Facts opens Evidence & Records; The Proposal opens the proposed-change content and includes access to the existing Community Plan vs. County Comprehensive Plan section; Take Action and the highlighted Get Involved button open Action. Issues and About retain their existing destinations.
Comparison access: under The Proposal, retain a clearly labelled Compare the Two Plans link to the existing Community Plan vs. County Comprehensive Plan section anchor. Comparison remains part of the content structure, without a separate top-level menu item. Reuse the existing destination; no new URL is required.
Implementation: use these exact public-facing menu labels consistently in desktop and mobile navigation and matching footer links. Internal blueprint page titles and content-group names can remain descriptive; they do not override the approved menu labels.
Approved click destinations: the supporter CTA opens the application directly, with no choice screen; the petition stays separate. General “View the Community Plan” and “Learn About the Community Plan” buttons open the website’s explanation first. Explicit document/source links retain their cited destinations. The three map-comparison panels appear only in Roads & Safety section 4, not on Home. Keep visible labels and designs unchanged.
```

## 3. Sitemap và route

**Đã chốt (D-008):** dùng route của inventory 22/10 — `/evidence`, `/comparison`, `/comparison#proposed-change`. Route cũ của bộ khung (`/the-facts`, `/the-proposal`) bỏ; `src/content/site.ts` sửa ở S2. Cột “Route bộ khung cũ” chỉ để tra cứu.

| Menu | Nội dung | Route (D-008) | Route bộ khung cũ (bỏ) | Trạng thái nội dung |
|---|---|---|---|---|
| Our Community | Home | `/` | `/` | Có đủ ([home](sections/home.md)) |
| Issues | Issues overview | `/issues` | `/issues` | Có đủ ([issues](sections/issues.md)) |
| (con của Issues) | Roads & Safety | `/issues/roads-safety` | như bên trái | Có đủ ([roads](sections/roads.md)) |
| (con của Issues) | Water & Septic | `/issues/water-septic` | như bên trái | Later reference ([water](sections/water.md)) |
| (con của Issues) | Growth, Infrastructure & Daily Life | `/issues/growth-daily-life` | như bên trái | Later reference ([growth](sections/growth.md)) |
| The Facts | Evidence & Records | `/evidence` | `/the-facts` | Later reference ([evidence](sections/evidence.md)) |
| The Proposal | Proposed Change + Comparison | `/comparison#proposed-change` | `/the-proposal` | Proposed Change **thiếu**; Comparison có ([comparison](sections/comparison.md)) |
| ↳ Compare the Two Plans | Anchor phần so sánh | `/comparison` | `/the-proposal#compare-the-two-plans` | — |
| Take Action / Get Involved | Action | `/take-action` | `/take-action` | Later reference + 3 form ([action](sections/action.md)) |
| About | About | `/about` — **chưa tạo**; menu About mở “Not available yet” (D-015 OQ-20) | `/about` | **Thiếu** ([about](sections/about.md)) |

Không tạo thêm route cho form, thư viện, câu chuyện hay Comparison ngoài bảng này.

## 4. Anchor trong trang (theo inventory)

| Trang | Anchor |
|---|---|
| Issues | `#roads-safety`, `#water-septic`, `#growth-daily-life`, `#community-plan` |
| Roads & Safety | `#street-lighting`, `#gunn-highway`, `#walking-biking-crossings`, `#emergency-access` (+ anchor khu bản đồ, records, comparison — tên chưa có trong inventory) |
| Take Action | `#petition` (inventory: `/take-action#petition`); anchor cho supporter/story/share chưa có tên trong inventory |
| Comparison | `#proposed-change` (inventory); anchor từng phần Roads/Water/Growth/What remains chưa có tên |

Anchor chưa có tên trong blueprint: đặt tên kỹ thuật ổn định khi code và ghi lại ở đây (không hiển thị).

## 5. Ma trận CTA → đích

Quy tắc chung: inventory 22/10 trỏ tới “Not available yet” cho các trang **chưa build ở thời điểm đó**; first version build các trang này nên trỏ tới trang thật. Đích không có nội dung/URL → “Not available yet”.

| Từ | CTA | Đích |
|---|---|---|
| Header, footer | 6 mục menu, Get Involved | Theo §3 |
| Footer F1 | Subscribe for Updates | “Not available yet” |
| Footer | Icon mạng xã hội | Không tương tác (D-009) |
| Header | Search | Không tương tác (D-009) |
| Home opening | View the Issues → / View the Evidence → | `/issues` / Evidence |
| Home cards | 4 card | Roads / Water / Growth / `/issues#community-plan` (TXT:115, D-008) |
| Issues tabs | 4 tab | Anchor trong trang |
| Issues sections | Explore Roads/Water/Growth → | Trang chi tiết tương ứng |
| Issues Community Plan | Learn About the Community Plan → | `/issues#community-plan` (TXT:115, D-008) |
| Roads 01–04 | Link chính sách/nguồn | URL trong [LINK_REGISTER](LINK_REGISTER.md) |
| Roads map area | View larger map | Viewer bản đồ lớn (OQ-30) |
| Roads map area | Explore the evidence → / Read the petition | Evidence / Take Action `#petition` |
| Roads records | View Original Document/Map | URL đã ghi / “Not available yet” cho Map |
| Roads records | SUPPORT THE PETITION → | Take Action `#petition` |
| Roads comparison | Detailed Roads & Safety Comparison → | Comparison › Roads |
| Water hero | View the Issue ↓ | Section 01 trong trang |
| Water menu số | 01–06 | OQ-21 |
| Water W2 | Get Involved / Read the exclusions → | Take Action / One Water 4.3.7 (OQ-26) |
| Water W4 | Read the 2024 staff report → / Read Policies 4.3.5 and 4.3.7 → | [LINK_REGISTER](LINK_REGISTER.md) (OQ-23) |
| Water W5 | View the Full Water & Wastewater Comparison → | Comparison › Water |
| Water W7 | View Original Document → (5) | Nguồn công khai đã xác minh — chưa có (OQ-22) |
| Water W7 | Next: Growth, Infrastructure & Daily Life → | `/issues/growth-daily-life` |
| Growth G2 | Policy summary link | Livable Communities p. 20 |
| Growth G4 | View the Growth & Development Comparison → | Comparison › Growth & Housing |
| Growth G5 | View Document/Map/Data/Records → (6) | Chưa có (OQ-22) |
| Growth G5 | Learn About the Community Plan → | Issues `#community-plan` + Comparison (TXT:1856) |
| Comparison | View the Full Roads/Water/Growth & Housing Comparison → | Tài liệu đầy đủ chưa có → “Not available yet” (OQ-26) |
| Comparison C1 | Learn More About the County Framework → / Read the Community Plan | OQ-26 / Livable Communities PDF |
| Evidence R3 | View Road/Water/Growth Evidence →, View Planning Documents → | OQ-26 |
| Evidence E1 | Bộ lọc, Search, Sort, phân trang | Tĩnh (OQ-26) |
| Evidence E1 | View the Original Document → (5) | Nguồn công khai đã xác minh (OQ-22) |
| Evidence E1 | Take Action → | Take Action |
| Action A1 | Take Action → | OQ-26 |
| Action A2 | Become a supporter and stay updated → | Mở Supporter Application trực tiếp |
| Action A2 | Read and sign the petition → | Petition A6 |
| Action A2 | SHARE MY STORY → / SHARE INFORMATION → | Form A3 / panel A4 |
| Action A2 | Read the May 9, 2024 minutes → | Hillsborough Clerk (LINK_REGISTER) |
| Action A5 | Read the Story → / VIEW ALL STORIES → | Panel trích đoạn mẫu / “Not available yet” |
| Action A6 | SIGN THIS PETITION → | Gửi petition (FORMS_SPEC) |
| Action A6 | Become a supporter and stay updated → | Supporter Application |

## 6. Template nội dung chung (tham khảo)

<!-- TXT:224-227 -->
```text
Issue Page: Problem → Consequences → Actual Conditions → Data/Maps → Public Records → Community Plan → Comparison → Next Page.
Evidence Page: Key Finding → Data → Maps → Public Records → Official Documents → Timeline → Sources.
Comparison/Proposal Page: Community Plan ↔ Countywide Planning Framework → Policy Differences → Real-World Impacts → Proposed Change → Sources.
Action Page: What Needs to Change → Why It Matters → Proposal → Support → Participate → Share.
```
