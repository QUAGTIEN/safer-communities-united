# S4 — Issues: bộ trình duyệt

**Trạng thái: approved (D-017, 26/10/2026)** — mọi điểm lệch theo cột “Đề xuất”.

Ngày 26/10/2026. Trang `/issues`. Cổng: **G4** (duyệt hình ảnh, chữ, điều hướng của trang) — TXT:38.

## 1. Ảnh

| Khổ | Bản dựng | So sánh với blueprint |
|---|---|---|
| Desktop 1536 | [desktop-1536.png](desktop-1536.png) | [compare-desktop-1536.jpg](compare-desktop-1536.jpg) |
| Mobile 390 | [phone-390.png](phone-390.png) | [compare-phone-390.jpg](compare-phone-390.jpg) |
| Tablet 768 (kiểm tra kỹ thuật) | [tablet-768.png](tablet-768.png) | [compare-tablet-768.jpg](compare-tablet-768.jpg) |

Tham chiếu: p026–p045 (1536), p094–p111 (768), p112–p130 (390). Nhiều ảnh tablet/phone đã bị Google Docs thu nhỏ (p099–p108, p117–p126) nên được phóng lại đúng chiều rộng khi so sánh — số đo ở đó là ước lượng.

## 2. Chiều cao từng phần (bản dựng / tham chiếu, px)

| Phần | Desktop 1536 | Phone 390 |
|---|---|---|
| Opening | 230 / 232 | 353 / 357 |
| Tabs | 96 / 96 | 278 / 280 |
| Roads & Safety | 681 / 659 | 1247 / 1218 |
| Water & Septic | 1444 / 1392 | 1978 / ≈ 2148 |
| Growth & Daily Life | 2083 / 1999 | 2058 / ≈ 2380 |
| Community Plan | 1210 / 1189 | 2740 / ≈ 2687 |
| Connected issues | 1337 / 1281 | 3004 / ≈ 3091 |
| **Cả trang** | 7236 / 7009 (+3 %) | 12025 / ≈ 12566 (−4 %) |

## 3. Hành vi

- 4 tab cuộn tới `#roads-safety`, `#water-septic`, `#growth-daily-life`, `#community-plan`; trên desktop thanh tab dính dưới header, phần được chọn dừng ngay dưới thanh tab và tab tương ứng được tô sáng như ảnh p030. Từ 1280 px trở xuống thanh tab không dính.
- Explore Roads & Safety / Water & Septic / Growth & Daily Life → trang con tương ứng (2 trang sau còn trống tới S5).
- Learn About the Community Plan → `/issues#community-plan` (D-008).
- Link credit “Alex Nitzman / AARoads” → thông báo “Not available yet” (blueprint không có URL — D-015 OQ-22).
- `check:copy`: 179 chuỗi khớp nguyên văn.

## 4. Danh sách điểm lệch (cần bạn quyết định)

| ID | Điểm lệch | Lý do | Đề xuất |
|---|---|---|---|
| I-1 | Dải ưu tiên có thêm “HEALTH. SAFETY. WELFARE.” — có trong ảnh p043 nhưng không có trong danh sách chữ của blueprint | Ảnh được chọn quyết định diện mạo (TXT:11) | Giữ theo ảnh (đã ghi khối `IMG` trong issues.md) |
| I-2 | Icon chủ đề (tab, thẻ Roads, số liệu, mốc thời gian, sơ đồ) vẽ lại bằng bộ icon Lucide, hình dáng không giống hệt ảnh | Icon giao diện không trích từ ảnh (ASSET_REGISTER §1b) | Giữ |
| I-3 | Thanh tab dính dưới header khi cuộn (desktop) | Ảnh tĩnh không thể hiện; giúp dùng 4 tab như điều hướng trong trang | Giữ |
| I-4 | Một vài đoạn văn ngắt dòng khác ảnh 1 từ (ví dụ đoạn mở đầu Growth) | Font Inter hiển thị trong trình duyệt hơi khác ảnh | Giữ |
| I-5 | Ảnh tham chiếu desktop của Growth được vẽ ở tỷ lệ lớn hơn các phần khác (chữ 24 px, nút 76 px); bản dựng làm theo đúng ảnh | Khác biệt nằm trong blueprint | Giữ theo ảnh |
| I-6 | Mobile: ảnh Gunn Highway cắt theo tỷ lệ 342 × 193 như ảnh p115 (ảnh gốc rộng hơn) | Theo tham chiếu phone | Giữ |
| I-7 | Tablet/phone của Water, Growth, Plan, Connected chỉ có tham chiếu đã thu nhỏ; bố cục dựng theo ảnh đó (thẻ số liệu xếp dọc, ô ảnh 3 cột ở tablet, 2 cột ở phone) | Thiếu dữ liệu chính xác | Giữ |

## 5. Kiểm tra

- `npm run lint`, `npm run typecheck`, `check:copy` — qua.
- Không cuộn ngang ở 320, 390, 768, 1280, 1536 px.
- Heading đúng thứ tự (H1 → H2 mỗi phần → H3/H4). Bản đồ và ảnh có nội dung có alt text; ảnh trang trí để alt rỗng.
