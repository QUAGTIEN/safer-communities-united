# S3 — Home pilot: bộ trình duyệt

**Trạng thái: approved (D-016, 25/10/2026)** — mọi điểm lệch dưới đây theo cột “Đề xuất”; M-4 giữ màu `#E51C17` của blueprint.

Ngày 25/10/2026. Trang `/`. Cổng cần duyệt: **G2** (Home desktop + mobile) và **G3** (design token dùng chung) — TXT:15-17, TXT:38.

## 1. Ảnh

| Khổ | Bản dựng | So sánh với blueprint |
|---|---|---|
| Desktop 1536 | [desktop-1536.png](desktop-1536.png) | [compare-desktop-1536.jpg](compare-desktop-1536.jpg) |
| Mobile 390 | [phone-390.png](phone-390.png) | [compare-phone-390.jpg](compare-phone-390.jpg) |
| Tablet 768 (kiểm tra kỹ thuật) | [tablet-768.png](tablet-768.png) | [compare-tablet-768.jpg](compare-tablet-768.jpg) |

Cách chụp: Chrome headless, device scale 1, sau khi font và ảnh tải xong; trang được nhúng trong khung đúng chiều rộng (1536 / 768 / 390 px) để không có thanh cuộn (TXT:31). Ảnh tham chiếu: p017 + p019 + p021 + p023 (1536), p082 + p083 + p085 + p087 (768), p088 + p089 + p091 + p093 (390). Ảnh tham chiếu card (p021) bị cắt ở đáy nên phần dưới card không so được.

## 2. Số đo chính (bản dựng so với ảnh tham chiếu)

| Mục | Bản dựng | Tham chiếu | Ghi chú |
|---|---|---|---|
| Header cao | 87 / 77 / 73 | 87 / 77 / 73 | S2 |
| Opening cao (desktop / tablet) | 609 / 932 | 609 / 935 | |
| Tiêu đề H1 | Merriweather 48 px, weight 700, độ rộng 90 %, dòng 55 px; dòng 1 rộng 540 | cap 36 px, dòng 55, rộng 537 | phone 35 px (3 dòng như ảnh) |
| Đoạn vision | Inter 17 / 28 (desktop), 16 / 27 (tablet), 15,5 / 26 (phone) | ngắt dòng giống ảnh ở cả 3 khổ | |
| Panel cảnh báo | 600 × 112; Merriweather 20 / 28; 3 dòng | 600 × 112, 3 dòng | tablet 600 × 78 (2 dòng), phone 342 × 130 (4 dòng) — khớp |
| Nút | 176 × 48 và 195 × 48, Inter 15/600 | 176 × 48, 195 × 48 | phone: 2 nút rộng hết khung, cách 10 px |
| Ảnh biển chào | 516 × 387 | 516 × 387 | tablet căn giữa; phone 342 × 257 |
| Section card | nền `#FAF9FE`, chữ navy `#051534`, đỏ `#D51319` | đo từ p021 | màu riêng của section (TXT:21) |
| Tiêu đề card section | Merriweather 39 / 700, rộng 940 | rộng 943 | |
| Card | 4 cột bằng nhau 351 × 366 | 355 / 350 / 331 / 364 × 366 | xem lệch M-1 |
| Vùng ảnh card | 148 px (caption 33 + ảnh 115) | 148 px | tablet 137 (30 + 107), phone 148 (40 + 108) |
| Icon tròn trên card | vẽ vector, khớp đúng vòng tròn có sẵn trong ảnh (Ø 70) | Ø 70 | tự co giãn theo ảnh ở mọi khổ |

Toàn bộ số đo là **estimate** (đo từ ảnh tham chiếu, không có layout nguồn — D-015 OQ-32); ghi ở [DESIGN_SPEC §5](../../DESIGN_SPEC.md).

## 3. Danh sách điểm lệch (cần bạn quyết định)

| ID | Điểm lệch | Lý do | Đề xuất |
|---|---|---|---|
| M-1 | Bốn card trong ảnh rộng khác nhau (355 / 350 / 331 / 364 px), card 3 trên phone thụt vào hai bên | Sai lệch của ảnh tạo bằng AI | Dùng 4 card rộng bằng nhau (đã dựng) |
| M-2 | Chữ mô tả trong card ở ảnh là font Arial; bản dựng dùng Inter theo blueprint (TXT:22) | Inter rộng hơn Arial nên một số dòng ngắt khác chữ (số dòng desktop vẫn khớp 4 / 5 / 4 / 4) | Giữ Inter |
| M-3 | Mũi tên “→” trong hai nút Opening hơi dài hơn ảnh | Ký tự “→” của font Inter | Giữ ký tự trong chữ gốc |
| M-4 | Chữ đỏ “outdated community plan.” `#E51C17` trên nền `#FCEAEA` có độ tương phản 4,0 : 1, dưới mức AA 4,5 : 1 cho chữ 20 px | Màu do blueprint quy định rõ (TXT:44) | Giữ đúng màu blueprint; nếu muốn đạt AA, đổi chữ đỏ sang `#C8140F` (cần duyệt riêng, có ảnh trước/sau) |
| M-5 | Ảnh tham chiếu card bị cắt ở đáy; khoảng cách dưới cùng của section card là ước lượng (56 px desktop) | Thiếu dữ liệu | Giữ |
| M-6 | Từ 1200 tới 1279 px, Opening xếp 1 cột và card 2 cột (bố cục tablet) | Không có ảnh tham chiếu ở khổ này; 2 cột 600 + 516 px không vừa | Giữ |

## 4. Kiểm tra

- `npm run lint`, `npm run typecheck`, `npm run build` (gồm `check:copy`: 44 chuỗi khớp nguyên văn) — qua.
- Không có cuộn ngang ở 320, 390, 768, 1200, 1280, 1536 px.
- Heading đúng thứ tự (H1 Opening → H2 section card → H3 tiêu đề card). Mỗi card là một link, tên đọc cho trình đọc màn hình theo inventory (“View Roads & Safety”…). Viền focus bàn phím 2 px burgundy.
- Tương phản: chữ chính 8,8–17 : 1; M-4 như trên.
- Link: View the Issues → `/issues`; View the Evidence → `/evidence`; card → 3 trang Issues con và `/issues#community-plan` (D-008). Các trang đích còn trống tới S4–S5.

## 5. Mục chờ duyệt cùng Home (từ S2)

V-001 header + footer dùng chung · V-002 gạch chân khi rê chuột menu · V-003 viền focus + “Skip to content” · V-004 trang 404 — xem [APPROVAL_LOG](../../APPROVAL_LOG.md).
