# Sổ phê duyệt và quyết định

Blueprint yêu cầu ghi mỗi mục với trạng thái **approved / needs revision / awaiting decision**, trang/section, phiên bản, tham chiếu và quyết định của người dùng. Câu hỏi chưa trả lời **không** là phê duyệt (TXT:38).

Cổng bắt buộc (TXT:38): (1) quyết định section-reference và asset thiếu → (2) duyệt Home desktop + mobile → (3) duyệt design token dùng chung → (4) duyệt visual/copy/navigation từng trang còn lại.

## Quyết định đã có

| ID | Ngày | Nội dung | Trích lời người dùng | Trạng thái |
|---|---|---|---|---|
| D-001 | 2026-10-25 | Blueprint 22/10/2026 (Google Doc) là bản master để hoàn thành first version | “đúng vậy, đây là bản blueprint mới để chúng ta hoàn thành first version” | approved |
| D-002 | 2026-10-25 | Nguyên tắc 100% đúng như blueprint mô tả | “nguyên tắc vẫn là 100% phải y chang blueprint mô tả” | approved |
| D-003 | 2026-10-25 | Dựng lại trên bộ khung hiện có; xóa toàn bộ code trang cũ, chỉ giữ khung | “vậy bây giờ bạn hãy xóa toàn bộ source cũ, hãy giữ lại bộ khung thôi nhé.” | approved — đã thực hiện |
| D-004 | 2026-10-25 | Xóa hoàn toàn tài liệu, asset, tool và blueprint PDF cũ, không lưu trữ; thay bằng bộ tài liệu mới; blueprint đổi sang bản mới | “các file cũ hãy xóa hoàn toàn, không lưu trữ và thay thế bằng bộ tài liệu mới. blueprint cũng sẽ đổi thành bản mới.” | approved — đã thực hiện |
| D-005 | 2026-10-25 | Giữ ba bản đồ gốc (trích từ PDF cũ) làm asset nguồn tại `assets/source/maps/` | Chọn “Giữ 3 bản đồ” | approved — đã thực hiện |
| D-006 | 2026-10-25 | Kế hoạch chia 8 lượt, gọi tên S1 → S8; S1 = trả lời câu hỏi 🔴 + hoàn chỉnh asset ([IMPLEMENTATION_PLAN](IMPLEMENTATION_PLAN.md)) | “tôi muốn đánh số sau này tôi sẽ gọi tên lượt code S1 --> S8” | approved — đã thực hiện |
| D-007 | 2026-10-25 | **OQ-01 ảnh:** chưa có gói export. Mọi ảnh website lấy từ blueprint PDF 22/10 (cắt từ ảnh tham chiếu), tính lại kích thước pixel theo khổ hiển thị và làm rõ nét; tìm nguồn gốc sau. Đây là phê duyệt chung cho việc cắt/làm rõ ảnh mà TXT:14 yêu cầu. Ảnh loại này ghi nhãn **tạm — trích từ PDF** trong [ASSET_REGISTER](ASSET_REGISTER.md). Không áp dụng cho ba bản đồ gốc (D-005, giữ nguyên byte) | “với vấn đề hình ảnh , hiện tại sẽ trích toàn bộ từ file ( tính lại pixel, điều chỉnh ảnh rõ nét ). sau này sẽ tìm nguồn sau.” | approved |
| D-008 | 2026-10-25 | **OQ-02 route:** theo đề xuất — `/evidence` (The Facts), `/comparison` (The Proposal, anchor `#proposed-change` ở đầu trang; Compare the Two Plans → phần so sánh cùng trang); “View/Learn About the Community Plan” → `/issues#community-plan` | “Q2: theo đề xuất” | approved |
| D-009 | 2026-10-25 | **OQ-03 search:** theo đề xuất — icon search hiển thị, không tương tác (giống icon mạng xã hội) | “Q3 : theo đề xuất” | approved |
| D-010 | 2026-10-25 | **OQ-04 header/footer:** một header và một footer **đồng nhất** cho toàn site; khác biệt giữa các ảnh được coi là sai lệch do ảnh blueprint tạo bằng AI, không phải biến thể có chủ đích. Biến thể dùng chung: header + footer F1 của ba trang đã build 22/10 (Home/Issues/Roads); trình duyệt hình ảnh trong Home pilot (S3) | “header và footer cần phải đồng nhất, chuyên nghiệp việc xảy ra khác nhau này có thể do tình trạng bảng blueprint tạo ảnh bằng AI nên có thể xảy ra sai lệch” | approved (nguyên tắc); hình ảnh chờ duyệt ở S3 |
| D-011 | 2026-10-25 | **OQ-17 người duyệt:** người dùng duyệt trong chat; mỗi lần duyệt ghi nguyên văn vào sổ này | “tôi sẽ là người duyệt” | approved |
| D-012 | 2026-10-25 | **OQ-18 khổ màn hình:** duyệt dựa trên **desktop và mobile** hoạt động tốt. Khổ cố định để chụp so sánh: desktop 1536, mobile 390 (khổ có ảnh tham chiếu; blueprint bắt buộc ghi khổ cố định — TXT:31). Khổ trung gian 768 và reflow 320 chỉ kiểm tra kỹ thuật (blueprint bắt buộc — TXT:32-33), không trình duyệt riêng | “khổ màn hình thì chỉ cần đảm bảo giao diện trên desktop và mobile app đều hoạt động hiệu quả là được” | approved |
| D-013 | 2026-10-25 | Chất lượng 8 asset tạm của header/footer và Home (§1b ASSET_REGISTER: wordmark navy/trắng, biển chào, tam giác cảnh báo, 4 ảnh card) đạt; trích các trang còn lại theo cùng cách | “Chất lượng ảnh header/footer và Home đạt. Tiếp tục trích ảnh các trang còn lại theo cách này.” | approved |
| D-014 | 2026-10-25 | Chất lượng 111 asset tạm của 7 trang còn lại (Issues, Roads & Safety, Water & Septic, Growth, Comparison, Evidence, Take Action — §1b ASSET_REGISTER) đạt. Hoàn tất S1 | “Chất lượng ảnh 7 trang còn lại đạt. Ghi duyệt và hoàn tất S1.” | approved |
| D-015 | 2026-10-25 | Toàn bộ câu hỏi còn mở (26 câu) theo đề xuất trong OPEN_QUESTIONS — chi tiết ở mục “D-015 chi tiết”. Không thay cho phép riêng khi tạo tài khoản, cấu hình credentials, gửi email thật hay deploy | “toàn bộ các câu hỏi , bạn hãy theo đề xuất toàn bộ nhé.” | approved |
| D-016 | 2026-10-25 | **G2 + G3:** duyệt Home desktop (1536) + mobile (390) và design token dùng chung (S2 + S3). Điểm lệch M-1 → M-6 và V-001 → V-008 theo đề xuất: 4 card rộng bằng nhau; chữ card Inter; giữ ký tự “→”; **giữ màu chữ đỏ `#E51C17` của blueprint** (không đổi sang `#C8140F`); khoảng cách đáy section card ước lượng; bố cục tablet ở 1200–1279 px; header/footer chung, hover menu, focus + Skip to content, trang 404 giữ như đã dựng. Bộ trình duyệt: [reviews/S3-home](reviews/S3-home/README.md) | “Approved Home desktop + mobile và design token chung. Các điểm lệch M-1 đến M-6 và V-001 đến V-008 theo đề xuất của bạn.” | approved |
| D-017 | 2026-10-26 | **G4 (S4):** duyệt trang Issues và Roads & Safety; điểm lệch I-1 → I-7 và R-1 → R-7 theo đề xuất (gồm giữ “HEALTH. SAFETY. WELFARE.” theo ảnh, font Anton cho khu ba bản đồ, dải rừng che chữ in chìm). Bộ trình duyệt: [reviews/S4-issues](reviews/S4-issues/README.md), [reviews/S4-roads](reviews/S4-roads/README.md) | “Approved trang Issues và Roads & Safety. Các điểm lệch I-1 đến I-7 và R-1 đến R-7 theo đề xuất của bạn.” | approved |
| D-018 | 2026-10-26 | **G4 (S5):** duyệt 4 trang Water & Septic, Growth, The Proposal, The Facts; điểm lệch P-1 → P-9 theo đề xuất (gồm bố cục mobile/tablet đề xuất, panel “Not available yet” cho Proposed Change, vị trí W4). Bộ trình duyệt: [reviews/S5](reviews/S5/README.md) | “Approved 4 trang S5 (Water, Growth, The Proposal, The Facts). Các điểm lệch P-1 đến P-9 theo đề xuất của bạn.” | approved |
| D-019 | 2026-10-26 | **G4 (S6):** duyệt trang Take Action (Supporter, A3 Story, A4 Share, A5 Stories, A6 Petition) với 3 form ở chế độ mô phỏng; điểm lệch A-1 → A-11 theo đề xuất. Bộ trình duyệt: [reviews/S6](reviews/S6/README.md) | “Approved S6 Take Action. Các điểm lệch A-1 đến A-11 theo đề xuất của bạn.” | approved |
| D-020 | 2026-10-26 | **S7 (một phần):** bỏ static export (`output: "export"`, `basePath`, `finalize-static-export`), xóa workflow GitHub Pages, push source hiện tại lên GitHub `QUAGTIEN/safer-communities-united` (`main`) để Vercel deploy. Form vẫn ở chế độ mô phỏng; chưa có route handler, Resend hay bảo vệ mật khẩu | “bây giờ bạn chỉ cần làm 2 việc là bỏ static export, tắt workflow git page và push source hiện tại lên vercel đúng repo https://github.com/QUAGTIEN/safer-communities-united” | approved |
| D-021 | 2026-10-26 | **Rà soát giao diện:** sửa U-1 (Take Action dùng một burgundy `#7A263A`), U-3 (nhãn Growth “Housing choice” `#1565B0`, “Daily services” `#9A5800`, icon giữ màu), U-4 (Roads “WHY IT MATTERS” `#8A5D00`), U-7 (nhãn form Supporter 12 px); giữ nguyên U-2, U-5, U-6, U-8, U-9. Báo cáo: [reviews/UI-AUDIT-2026-10-26](reviews/UI-AUDIT-2026-10-26.md) | “Sửa U-1, U-3, U-4, U-7 theo đề xuất; các điểm còn lại giữ nguyên.” | approved |
| D-022 | 2026-10-26 | **S7 backend:** file đính kèm form Story tối đa 4 MB tổng, chưa quét malware (để sau); chưa cần mật khẩu Vercel; push thẳng `main`; hộp thư test là email của người dùng (đặt trong biến `FORMS_RECIPIENT` trên Vercel, không ghi vào repo) | “quét maleware sẽ để sau, hiện tại tôi đề xuất tối đa là 4mb. mật khẩu gói vercel thì chưa cần. push thẳng lên main . mail sẽ sử dụng thử mail của tôi” | approved |

## D-015 chi tiết

✅ áp dụng ngay · ◐ đã chốt hướng, còn cần người dùng cung cấp đầu vào trước mốc ghi trong dòng (không chặn S2–S6).

| Câu | Quyết định | |
|---|---|---|
| OQ-05 | Growth chỉ gồm G1, G2, G4, G5 đúng blueprint; không dựng Housing scenarios, Services map, Infrastructure timeline | ✅ |
| OQ-06 | Issues Water theo inventory 22/10, không thêm đoạn caveat cũ | ✅ |
| OQ-07 | Ảnh được chọn quyết định chữ hiển thị; blueprint text quyết định hành vi. Mỗi chỗ lệch được liệt kê lại khi dựng trang đó (S4–S6) để người dùng xác nhận | ✅ |
| OQ-08 | Footer F1: icon Facebook / Instagram / YouTube, không tương tác | ✅ |
| OQ-09 | Ảnh/số liệu “Fake data” Growth G1 chỉ hiện ở preview riêng tư; chặn công bố tới khi có số liệu chính thức | ✅ |
| OQ-10 | Host: Vercel (hoặc tương đương) có mật khẩu; tắt workflow GitHub Pages. Thực hiện ở S7 và chỉ khi người dùng cho phép riêng (tạo tài khoản, deploy) | ✅ |
| OQ-11 | Nhà cung cấp email: Resend. Tên miền/địa chỉ gửi: người dùng cung cấp trước S7 | ◐ |
| OQ-12 | Ở chế độ simulate chỉ kiểm tra file đính kèm phía client; giới hạn dung lượng/loại/quét malware chốt trước khi bật live | ✅ |
| OQ-13 | Privacy notice, người liên hệ, thời gian lưu: người dùng cung cấp trước khi bật live | ◐ |
| OQ-14 | Lựa chọn “Email me campaign updates” giữ trong simulate; trước khi bật live chọn dịch vụ newsletter hoặc tạm vô hiệu | ◐ |
| OQ-15 | Chống lạm dụng: rate limit + honeypot, không đổi giao diện, không CAPTCHA | ✅ |
| OQ-16 | Gửi thử bằng hộp thư test riêng trong môi trường test, tách khỏi marinadiesch1@gmail.com | ✅ |
| OQ-19 | Trong preview riêng tư dùng ảnh theo D-007/D-013/D-014; người phụ trách xin quyền dùng công khai: người dùng chỉ định trước khi công bố | ◐ |
| OQ-20 | About và phần Proposed Change hiện thông báo “Not available yet” cho tới khi có nội dung | ✅ |
| OQ-21 | Menu số Water: 01 → W3, 02 → R2, 03 → W1, 04 Groundwater và 05 Lakes & Wetlands → “Not available yet” (không có section), 06 Infrastructure → W2. Menu cấp Issues ở W6: Roads & Safety, Water & Septic, Services & Access (→ Growth), The Community Plan (→ `/issues#community-plan`). W4 đặt sau W2 (đúng thứ tự trang blueprint). Đây là mặc định mình bổ sung vì đề xuất gốc chưa cụ thể | ✅ |
| OQ-22 | Nút nguồn chưa có URL công khai đã xác minh → “Not available yet” | ✅ |
| OQ-23 | Staff report (SharePoint) và phản hồi 23/09/2026 (Google Drive) không đưa lên website → “Not available yet” cho tới khi có URL công khai | ✅ |
| OQ-24 | Trang Comparison: mục active trên header là “The Proposal” | ✅ |
| OQ-25 | Màu khối/cột trong nội dung giữ đúng từng ảnh (đo từ ảnh tham chiếu vì không có layout nguồn); header/footer theo D-010 | ✅ |
| OQ-26 | A1 “Take Action →” cuộn tới Three ways; W2 “Get Involved” → Take Action; “Read the exclusions” → L-10; các nút “View the Full … Comparison”, “Learn More About the County Framework” → “Not available yet”; 4 nút R3 → “Not available yet”; bộ lọc/Search/Sort/phân trang E1 hiển thị tĩnh, không phản hồi; E1 “Take Action →” → Take Action; “SHARE MY STORY →” → focus vào form A3 | ✅ |
| OQ-27 | Giữ câu “Real people. Real stories. A stronger community.” theo ảnh đã duyệt, cạnh nhãn “Illustrative sample stories” | ✅ |
| OQ-28 | Form: CITY/ZIP (Supporter) và Name (A3) không bắt buộc ở client; email gửi đi kèm metadata kỹ thuật (phiên bản form, thời điểm, mã tham chiếu), không hiển thị | ✅ |
| OQ-29 | Trang `/comparison`: `#proposed-change` (“Not available yet”) ở đầu, rồi 4 phần so sánh Roads, Water, Growth & Housing, What remains | ✅ |
| OQ-30 | Viewer “View larger map”: dialog toàn màn hình hiển thị đúng file bản đồ, nút đóng, không zoom/pan mới; giao diện trình duyệt ở S4 | ✅ |
| OQ-31 | Rà soát chữ ký gõ tên, lưu hồ sơ và quy trình giao County: người dùng quyết định trước khi bật ký petition thật | ◐ |
| OQ-32 | Font Merriweather + Inter từ Fontsource (bản gốc Google Fonts, OFL 1.1); không có layout nguồn nên số đo là `estimate` từ ảnh tham chiếu | ✅ |

## Cổng phê duyệt

| Cổng | Trạng thái | Ghi chú |
|---|---|---|
| G1 Section reference + asset thiếu | approved | Câu 🔴 đã trả lời (D-007 → D-012); 119 asset tạm đã duyệt chất lượng (D-013, D-014). Mọi câu hỏi còn lại đã chốt theo đề xuất (D-015); 5 mục ◐ cần đầu vào trước S7/công bố |
| G2 Home desktop + mobile | approved | D-016 — bản đã duyệt: [reviews/S3-home](reviews/S3-home/README.md) |
| G3 Design token dùng chung | approved | D-016 — [DESIGN_SPEC §2–5](DESIGN_SPEC.md) |
| G4 Các trang còn lại | approved | Issues + Roads (D-017), S5 4 trang (D-018), Take Action (D-019) |

## Thay đổi hiển thị đề xuất

Mỗi đề xuất tinh chỉnh (typography, spacing, sửa accessibility có thay đổi giao diện, layout responsive cho trang không có tham chiếu mobile) ghi ở đây kèm ảnh before/after và trạng thái.

| ID | Trang/section | Đề xuất | Before/after | Trạng thái |
|---|---|---|---|---|
| V-001 | Header, footer, thông báo (S2) | Một header + footer F1 dùng chung (D-010); số đo ở DESIGN_SPEC §5 | Trình cùng Home pilot (S3) | approved (D-016) |
| V-002 | Header | Hover trên mục menu: gạch chân burgundy 2 px (ảnh không có trạng thái hover) | Trình ở S3 | approved (D-016) |
| V-003 | Toàn site | Viền focus bàn phím 2 px burgundy; link “Skip to content” chỉ hiện khi dùng bàn phím (accessibility, TXT:33) | Trình ở S3 | approved (D-016) |
| V-004 | Toàn site | Trang 404 “Page not found” tối thiểu (không có trong blueprint) | Trình ở S3 | approved (D-016) |
| V-005 | Home — card | 4 card rộng bằng nhau thay cho độ rộng không đều trong ảnh (M-1) | [docs/reviews/S3-home](reviews/S3-home/README.md) | approved (D-016) |
| V-006 | Home — card | Chữ mô tả card dùng Inter (ảnh hiển thị Arial), một số dòng ngắt khác (M-2) | như trên | approved (D-016) |
| V-007 | Home — Opening | Chữ đỏ `#E51C17` trên `#FCEAEA` tương phản 4,0 : 1 (dưới AA). Giữ màu blueprint hay đổi sang `#C8140F` (5,1 : 1) (M-4) | như trên | approved (D-016): giữ `#E51C17` |
| V-008 | Home | Bố cục 1200–1279 px dùng dạng tablet (M-6) | như trên | approved (D-016) |
| V-009 | Issues | Điểm lệch I-1 → I-7 | [reviews/S4-issues](reviews/S4-issues/README.md) | approved (D-017) |
| V-010 | Roads & Safety | Điểm lệch R-1 → R-7 (gồm font Anton cho khu bản đồ, dải rừng) | [reviews/S4-roads](reviews/S4-roads/README.md) | approved (D-017) |
| V-011 | Water, Growth, The Proposal, The Facts | Điểm lệch P-1 → P-9, gồm bố cục mobile/tablet đề xuất | [reviews/S5](reviews/S5/README.md) | approved (D-018) |
| V-012 | Take Action (Supporter, A3 Story, A4 Share, A5 Stories, A6 Petition) | Điểm lệch A-1 → A-11, gồm form luôn hiển thị, mô phỏng gửi, bố cục mobile/tablet đề xuất | [reviews/S6](reviews/S6/README.md) | approved (D-019) |
| V-013 | Take Action, Growth, Roads | U-1, U-3, U-4, U-7 (màu burgundy thống nhất, tương phản AA, nhãn form 12 px) | [reviews/UI-AUDIT-2026-10-26](reviews/UI-AUDIT-2026-10-26.md) | approved (D-021) |
| V-014 | Take Action — form Story | Câu lỗi mới khi file vượt 4 MB: “Choose files that total 4 MB or less.” (hiện trong khung “Please check these fields.” dưới nhãn Upload Photo/Document) — blueprint yêu cầu duyệt mọi chữ lỗi mới (TXT:2264) | `src/content/action.ts` → `pendingCopy` | awaiting decision |
