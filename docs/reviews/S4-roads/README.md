# S4 — Roads & Safety: bộ trình duyệt

**Trạng thái: approved (D-017, 26/10/2026)** — mọi điểm lệch theo cột “Đề xuất”.

Ngày 26/10/2026. Trang `/issues/roads-safety`. Cổng: **G4** — TXT:38.

## 1. Ảnh

| Khổ | Bản dựng | So sánh với blueprint |
|---|---|---|
| Desktop 1536 | [desktop-1536.png](desktop-1536.png) | [compare-desktop-1536.jpg](compare-desktop-1536.jpg) |
| Mobile 390 | [phone-390.png](phone-390.png) | [compare-phone-390.jpg](compare-phone-390.jpg) |
| Tablet 768 (kiểm tra kỹ thuật) | [tablet-768.png](tablet-768.png) | [compare-tablet-768.jpg](compare-tablet-768.jpg) |

Tham chiếu: p048–p074 (1536), p131–p156 (768), p157–p186 (390). Ảnh khu ba bản đồ (p062) và hầu hết ảnh tablet/phone đã bị Google Docs thu nhỏ (p062 chỉ còn 556 px thay vì 1536) → số đo ở các phần này là ước lượng.

## 2. Chiều cao từng phần (bản dựng / tham chiếu, px)

| Phần | Desktop 1536 | Phone 390 (tham chiếu phóng lại) |
|---|---|---|
| 01 Street Lighting | 1254 / 1220 | 2767 / ≈ 2516 |
| 02 Gunn Highway | 1386 / 1308 | 2520 / ≈ 2407 |
| 03 Walking, Biking & Crossings | 1401 / 1433 | 2895 / ≈ 2808 |
| 04 Emergency Access | 1143 / 1173 | 2459 / ≈ 2563 |
| Khu ba bản đồ | 5458 / ≈ 5648 | 4513 / ≈ 4220 |
| 06 Records & Evidence | 1287 / 1207 | 4090 / ≈ 4187 |
| 07 Two planning frameworks | 2014 / 1944 | 4650 / ≈ 3929 |

## 3. Hành vi

- Thanh 4 chủ đề dưới mỗi phần 01–04 cuộn tới `#street-lighting`, `#gunn-highway`, `#walking-biking-crossings`, `#emergency-access`; mục của phần hiện tại được tô sáng như ảnh.
- Link nguồn mở tab mới, đúng URL trong blueprint (LINK_REGISTER L-01, L-02, L-05 → L-08, L-09, L-11 → L-15).
- **Ba bản đồ gốc** dùng nguyên file (không nén lại, không sửa): bản đồ ranh giới (cắt hiển thị phần trên giống ảnh p062), bản đồ khu vực và bản đồ đường — mỗi bản đồ có nút **View larger map** mở khung toàn màn hình đúng file gốc, đóng bằng × hoặc Esc (D-015 OQ-30). Không thêm phóng to/kéo.
- Bản đồ Gunn Highway (phần 02): nút **View larger map** chỉ hiện dưới 600 px (TXT:1077).
- “View Original Map” → thông báo “Not available yet” (chưa có nguồn — OQ-22).
- Explore the evidence → `/evidence`; Read the petition / SUPPORT THE PETITION → `/take-action#petition`; Detailed Roads & Safety Comparison → `/comparison#compare-the-two-plans` (các trang này còn trống tới S5/S6).
- `check:copy`: 394 chuỗi khớp nguyên văn (cả trang Home + Issues + Roads).

## 4. Danh sách điểm lệch (cần bạn quyết định)

| ID | Điểm lệch | Lý do | Đề xuất |
|---|---|---|---|
| R-1 | Chữ in hoa hẹp của khu ba bản đồ dùng font **Anton** (Fontsource, OFL) — chỉ trong khu này | Blueprint ghi khu bản đồ dùng “condensed sans display lettering” nhưng không có file font (TXT:49); Anton là font gần nhất | Giữ Anton cho riêng khu này |
| R-2 | Dải “KEEP THE LANDSCAPE.”: ảnh rừng trong tham chiếu có sẵn chữ và nút in chìm, nên chỉ hiện phần cây ở hai bên; giữa là nền navy | Không tách được chữ khỏi ảnh (ASSET_REGISTER) | Giữ; thay bằng ảnh rừng sạch khi có file gốc |
| R-3 | Icon cây/nhà nhỏ của khu bản đồ trích từ ảnh đã thu nhỏ nên hơi mờ | Ảnh gốc chỉ còn 556 px | Giữ tạm; có thể vẽ lại bằng vector nếu bạn muốn |
| R-4 | Icon chủ đề (đèn đường, Gunn Highway, xe đạp, xe cứu thương, thẻ Records, so sánh) vẽ lại bằng bộ icon Lucide, hình dáng không giống hệt ảnh | Icon giao diện không trích từ ảnh | Giữ |
| R-5 | Nút “Detailed Roads & Safety Comparison →” trỏ tới phần so sánh của trang `/comparison`; anchor riêng cho phần Roads sẽ đặt ở S5 | Trang Comparison chưa dựng | Giữ, cập nhật ở S5 |
| R-6 | Phone: phần 07 cao hơn tham chiếu khoảng 18 % (chữ trong 2 cột so sánh lớn hơn ảnh đã thu nhỏ) | Ưu tiên đọc được trên điện thoại | Giữ |
| R-7 | Thanh chủ đề 01–04: mũi tên luôn hiện (inventory phần 02 và 03 không ghi “→”, nhưng ảnh có) | Ảnh được chọn quyết định diện mạo | Giữ theo ảnh |

## 5. Kiểm tra

- `npm run lint`, `npm run typecheck`, `check:copy` — qua.
- Không cuộn ngang ở 320, 390, 768, 1280, 1536 px.
- Khung xem bản đồ: mở đúng file 1544 × 1621 px, Esc đóng và trả focus về nút.
- Bản đồ và ảnh có nội dung có alt text mô tả; artwork ghi rõ “không phải sự kiện có thật” trong alt khi blueprint yêu cầu.
