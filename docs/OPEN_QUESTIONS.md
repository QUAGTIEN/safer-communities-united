# Câu hỏi mở và mâu thuẫn

Mỗi mục: phần thiếu/mâu thuẫn, vị trí, ảnh hưởng, **đề xuất** (chưa áp dụng cho tới khi người dùng trả lời). Khi có câu trả lời: chuyển thành quyết định trong [APPROVAL_LOG](APPROVAL_LOG.md) và cập nhật tài liệu liên quan.

**Ưu tiên:** 🔴 chặn Home pilot · 🟠 chặn trang sau / form · ⚪ chặn công bố · ◐ đã chốt hướng, còn chờ đầu vào của người dùng · ✅ đã trả lời (xem quyết định trong APPROVAL_LOG; nội dung dòng giữ nguyên để tra cứu).

## A. Nguồn và asset

| ID | Mức | Vấn đề | Vị trí | Ảnh hưởng | Đề xuất |
|---|---|---|---|---|---|
| OQ-01 | ✅ D-007 | **Gói export** chưa có: screenshot PNG gốc 1536/768/390, `wording-and-links/*.md`, `links.csv`, font Merriweather/Inter + license, HTML/layout nguồn, asset manifest có ID logic + hash, ảnh riêng (biển chào, wordmark, tam giác cảnh báo, Gunn Highway, Lake Rogers, Lake Keystone, aerial Simms Road, ảnh trang 24, mọi minh họa/icon). Google Docs đã thu nhỏ ảnh cao (map area 556 × 2044 thay vì 1536 × 5648; A6 793 × 2046) nên không đo/đọc chữ nhỏ được. | TXT:6, TXT:11-14, TXT:46-53 | Không dựng được Home đúng ảnh; không đo được; chữ IMG có thể sai | Người dùng cung cấp gói export. Nếu không có: chỉ dùng ảnh trích từ PDF với nhãn “tạm, chưa phải byte gốc” **sau khi được duyệt từng ảnh** |
| OQ-19 | ◐ D-015 | Quyền dùng công khai: AARoads, Florida Hikes, Noble Star Realty, Coldwell Banker; provenance các ảnh minh họa (gia đình, câu chuyện mẫu, hộp thư, thẻ A2…) | TXT:1047, TXT:1536, TXT:1625, TXT:2009, TXT:2066 | Chặn công bố | Ai phụ trách xin quyền? Trong preview riêng tư vẫn dùng theo duyệt |
| OQ-20 | ✅ D-015 | About và phần giới thiệu Proposed Change không có copy/layout | TXT:102-103, TXT:143 | Hai đích menu không có nội dung | Hiện “Not available yet” cho tới khi có nội dung |
| OQ-22 | ✅ D-015 | Thiếu URL nguồn công khai: 5 thẻ Water W7, 6 thẻ Growth G5, 4/5 thẻ Evidence E1, “View Original Map” Roads 06, link nguồn mỗi cột Connected issues, URL nguồn ảnh AARoads | TXT:1051, TXT:2093, [LINK_REGISTER](LINK_REGISTER.md) | Nút không có đích | “Not available yet” cho tới khi có URL đã xác minh |
| OQ-23 | ✅ D-015 | Link không phải nguồn công khai: staff report (SharePoint), Sept 23, 2026 response (Google Drive). Blueprint cấm lộ Drive riêng | Annotation p.199, p.237; TXT:2093 | Có thể lộ tài liệu riêng | Cung cấp URL công khai thay thế, hoặc dùng “Not available yet” |
| OQ-32 | ✅ D-015 | Phần còn lại của OQ-01 ngoài ảnh: file font Merriweather/Inter và license, HTML/layout nguồn, `links.csv`. Inventory chữ và link đã nằm trong blueprint text nên không cần file riêng | TXT:22, TXT:72 | Chặn S2 (font). Không có layout nguồn thì mọi số đo là `estimate` | Font: Merriweather + Inter từ Fontsource (bản gốc Google Fonts, OFL 1.1). Layout nguồn: không có, đo từ ảnh tham chiếu |

## B. Mâu thuẫn trong blueprint

| ID | Mức | Vấn đề | Vị trí | Đề xuất |
|---|---|---|---|---|
| OQ-02 | ✅ D-008 | Route: inventory dùng `/evidence`, `/comparison`, `/comparison#proposed-change`; khung cũ dùng `/the-facts`, `/the-proposal`. The Proposal trỏ `/comparison#proposed-change` nghĩa là Proposal và Comparison cùng một trang. Đích “View/Learn About the Community Plan” phải mở “website’s explanation first” | TXT:112-115, inventory | Dùng route của inventory: `/evidence`, `/comparison` (anchor `#proposed-change` đầu trang); “Community Plan explanation” = `/issues#community-plan` |
| OQ-03 | ✅ D-009 | Search: “Keep the search and social icons visible but non-interactive” vs inventory “opens the site search”; TXT:1076 nói link hiện hành ưu tiên cho ba trang đã build | TXT:43, TXT:272, TXT:1076 | Hiển thị icon, không tương tác (site search là tìm kiếm động, ngoài phạm vi) |
| OQ-04 | ✅ D-010 | Header/footer khác nhau giữa các ảnh: F1 navy một hàng (Home/Issues/Roads/R2), F2 charcoal một hàng (W6/W3), F3 nhiều nhóm (W8 charcoal; G/R1/C1 navy); header có nút burgundy vs đỏ tươi, icon search nhỏ vs lớn. Blueprint: theo từng ảnh, nhưng một footer thống nhất là thay đổi cần duyệt | TXT:23, TXT:194-205, TXT:1068 | Dùng F1 + header 22/10 cho toàn site (là bản đã build/duyệt gần nhất), trình preview để duyệt; nếu không, giữ đúng biến thể từng trang |
| OQ-05 | ✅ D-015 | Growth: không còn Housing scenarios, Services map, Infrastructure timeline; số section nhảy 3→7→9→10; Page Flow vẫn nhắc các bước đó | TXT:1752, TXT:1776-1856 | Theo đúng blueprint: chỉ G1, G2, G4, G5 |
| OQ-06 | ✅ D-015 | Issues Water: đoạn caveat dữ liệu dài của bản cũ không có trong inventory mới (nhãn số liệu mới đã chứa caveat) | TXT:435-460, TXT:1049 | Theo inventory, không thêm caveat |
| OQ-07 | ✅ D-015 | Chữ trong ảnh khác chữ trong text blueprint (later pages). Ví dụ: W5 có đoạn “Both plans address…” chỉ trong ảnh; G4 tiêu đề hàng + “See the Detailed Policy Comparison…” chỉ trong ảnh; A4 “You can easily share this website…”; C1 nút “Learn More About the County Framework →”; A2 ảnh không có đoạn “Additional record… September 23, 2026”; A6 ảnh không có nút “READ AND SIGN THE PETITION →”; W8 text còn khối “Central Visual” không có trong ảnh; TXT:2152 yêu cầu link “Become a supporter” sau bản đồ nhưng inventory Roads không có | sections/*.md | **Ảnh được chọn quyết định chữ hiển thị**, text blueprint quyết định hành vi; từng chỗ lệch cần xác nhận |
| OQ-08 | ✅ D-015 | Icon mạng xã hội: F1 có Facebook/Instagram/YouTube; F3 có Facebook/Instagram/Email; không URL | Ảnh footer | Theo D-010 dùng footer F1 (Facebook/Instagram/YouTube), không tương tác như D-009 |
| OQ-21 | ✅ D-015 | Menu số Water: W6 dùng menu cấp Issues (01 Roads & Safety, 02 Water & Septic, **03 Services & Access**, 04 The Community Plan); W3… dùng 6 mục (04 Groundwater, 05 Lakes & Wetlands không có section; số menu ≠ số section 06/08/09/10); vị trí panel W4 không ghi | TXT:1553, ảnh W6/W3/R2/W1/W2/W5 | Cần chỉ định đích từng mục menu và vị trí W4 |
| OQ-24 | ✅ D-015 | Mục menu active: các ảnh Comparison (R1, W8, C1) để active “Issues”; Evidence đã được sửa sang “The Facts” | TXT:2065, ảnh | Comparison active “The Proposal” (theo quy tắc điều hướng); cần duyệt |
| OQ-25 | ✅ D-015 | Màu nút/khối không đồng nhất giữa các ảnh: burgundy `#7A263A` vs đỏ tươi; cột R1 nâu/xanh dương; G2/G4 đỏ/xanh lá; thẻ Evidence nâu/xanh/xanh lá/tím | Ảnh R2, G1–G5, R1, R3 | Giữ đúng từng ảnh (đúng quy tắc “per-section”), đo màu từ layout nguồn khi có |
| OQ-26 | ✅ D-015 | CTA không có đích quy định: A1 “Take Action →”; W2 “Get Involved”, “Read the exclusions”; C1 “Learn More About the County Framework →”; 3 “View the Full … Comparison →”; R3 4 nút “View … Evidence →”; bộ lọc/Search/Sort/phân trang E1; “SHARE MY STORY →” khi form đã hiển thị; “Take Action →” E1 | sections/*.md | A1 → cuộn tới Three main actions; Get Involved → Take Action; Read the exclusions → L-10; full comparisons/County Framework → “Not available yet”; R3 → “Not available yet” (vì lọc thư viện là động); điều khiển E1 → không phản hồi (tĩnh) hoặc “Not available yet”; SHARE MY STORY → focus form |
| OQ-27 | ✅ D-015 | Câu “Real people. Real stories. A stronger community.” cạnh nhãn “Illustrative sample stories” có thể ngụ ý câu chuyện thật | Ảnh A5 | Giữ theo ảnh đã duyệt; xác nhận lại |
| OQ-29 | ✅ D-015 | Cấu trúc trang The Proposal: Proposed Change ở đâu so với Comparison; anchor “Compare the Two Plans” | TXT:112-113, TXT:1857-1867 | `#proposed-change` (Not available yet) ở đầu, rồi 4 phần Comparison |
| OQ-30 | ✅ D-015 | Viewer “View larger map” (Roads, phone Gunn Highway): “existing viewer behavior” nhưng không có ảnh/đặc tả viewer | TXT:770, TXT:896, TXT:1070 | Dialog toàn màn hình hiển thị đúng file bản đồ, có nút đóng, không zoom/pan mới; cần duyệt giao diện |

## C. Form, hosting và vận hành

| ID | Mức | Vấn đề | Vị trí | Đề xuất |
|---|---|---|---|---|
| OQ-09 | ✅ D-015 | G1 “Fake data…” chỉ dành cho preview riêng tư | TXT:1767-1769 | Chỉ hiển thị ở preview có bảo vệ; chặn công bố tới khi có số liệu chính thức |
| OQ-10 | ✅ D-015 | Hosting: Pages hiện công khai; blueprint yêu cầu local/private preview; form cần server | TXT:36, TXT:65-66 | Vercel (hoặc tương đương) có mật khẩu; gỡ/ tắt workflow Pages |
| OQ-11 | ◐ D-015 | Nhà cung cấp email, tên miền/địa chỉ gửi | TXT:2388 | Resend; tên miền do người dùng cung cấp |
| OQ-12 | ✅ D-015 | File đính kèm A3: giới hạn dung lượng/số file/loại, dịch vụ quét malware, chi phí | TXT:2261, TXT:2264 | Cần quyết định trước khi bật live; trong simulate chỉ kiểm tra phía client |
| OQ-13 | ◐ D-015 | Privacy notice (các chỗ `[...]`), tổ chức/người liên hệ phụ trách, thời gian lưu | TXT:2386, TXT:62 | Người dùng cung cấp |
| OQ-14 | ◐ D-015 | Cập nhật email petition yêu cầu unsubscribe hoạt động, trong khi không có register | TXT:2383 | Chọn: dịch vụ newsletter riêng, hoặc tạm vô hiệu lựa chọn này khi live |
| OQ-15 | ✅ D-015 | Chống lạm dụng: rate limit, honeypot; CAPTCHA hiển thị cần duyệt | TXT:2261, TXT:2388 | Rate limit + honeypot (không đổi giao diện) |
| OQ-16 | ✅ D-015 | Địa chỉ nhận thư khi test (tách bản ghi test) | TXT:63 | Dùng hộp thư test riêng trong môi trường test |
| OQ-28 | ✅ D-015 | Chi tiết form chưa quy định: CITY/ZIP của Supporter có bắt buộc?; Name của A3 có bắt buộc?; metadata kỹ thuật trong email Supporter/A3 (phiên bản, thời điểm, mã tham chiếu) | TXT:2212, TXT:2263 | Không bắt buộc CITY/ZIP/Name ở client; thêm metadata kỹ thuật vào email (không hiển thị) |
| OQ-31 | ◐ D-015 | Trước khi bật ký petition: rà soát chữ ký gõ tên và lưu hồ sơ; quy trình giao County | TXT:2391-2392 | Người dùng quyết định |

## D. Quy trình

| ID | Mức | Vấn đề | Đề xuất |
|---|---|---|---|
| OQ-17 | ✅ D-011 | Ai duyệt Home pilot và các trang (bạn hay khách hàng); cách ghi duyệt | Người dùng duyệt trong chat; ghi vào APPROVAL_LOG |
| OQ-18 | ✅ D-012 | Khổ màn hình cố định để so sánh | 1536, 768, 390 (có tham chiếu) + kiểm tra 1024, 320 |
