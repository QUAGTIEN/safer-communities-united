# S6 — Take Action + 3 form mô phỏng: bộ trình duyệt

**Trạng thái: approved (D-019, 26/10/2026)** — mọi điểm lệch A-1 → A-11 theo cột “Đề xuất” (V-012). Ngày 26/10/2026. Cổng: **G4**.

Route `/take-action`. Chữ nguyên văn từ `docs/sections/action.md` và `docs/FORMS_SPEC.md`; `check:copy` đọc cả hai file. Ảnh tham chiếu: A1 `p237`, A2 `p246`, H3 `p241/p244/p245`, A3 `p248–p252`, A4 `p254/p255`, A5 `p258–p262`, A6 `p267/p269/p270`. Bố cục tablet/phone là **đề xuất** (TXT:27).

Chưa lưu ảnh chụp vào thư mục này; xem trực tiếp ở `http://127.0.0.1:3000/take-action` (desktop 1536, mobile 390, D-012).

## 1. Thứ tự trang

1. Hero A1 → 2. Three actions A2 → Supporter Application (H3) → 02 Share Your Story (A3: form cạnh phần giới thiệu) → 03 Share Information (A4) → 3. Community Stories (A5) → 4. Đoạn mở “PUT PEOPLE FIRST…” + Petition (A6, chỉ một lần).

## 2. Hành vi

- **Form chỉ mô phỏng** (FORMS_SPEC §0): không email, không lưu, không gửi dữ liệu; không có người nhận trong bản build này. Bấm gửi hợp lệ → “Sending…” (nút bị vô hiệu, chống bấm trùng) → xác nhận. Thêm `?simulate=failure` vào URL để xem trạng thái “We couldn’t confirm the send.” (chỉ lần gửi đầu; “Try again” sau đó thành công). Đây là công cụ duyệt, không hiển thị với khách.
- **Validation:** Supporter — lỗi dưới từng ô (Full name, Email, Phone khi chọn Text/Call, Signature, Date), không có khung tổng hợp, ba nhóm audience đều tùy chọn. Story — Related Issue và Your Story bắt buộc, khung “Please check these fields.” chỉ liệt kê lỗi áp dụng. Petition — 4 ô + checkbox ủng hộ bắt buộc, email chỉ bắt buộc khi chọn cập nhật. Focus vào ô lỗi đầu tiên; ô lỗi có `aria-invalid`, thông báo trạng thái dùng `role=status/alert`.
- **Nút:** “Become a supporter and stay updated →” cuộn tới và focus ô Full name (không có màn hình chọn); “Read and sign the petition →” cuộn tới petition; “SHARE MY STORY →” cuộn tới form A3; “SHARE INFORMATION →” (card 03 và mục A4) mở panel “Share This Page” (nền mờ, ×, Esc) với ba lựa chọn **chỉ hiển thị** — không chia sẻ, không soạn email, không ghi clipboard; “Read the Story →” mở panel trích đoạn mẫu đúng excerpt/người kể/ngày với nhãn “Illustrative sample stories”; “VIEW ALL STORIES →” mở “Not available yet”; “Read the May 9, 2024 minutes →” mở đúng URL Hillsborough Clerk (tab mới).
- Form A3: chọn file hiển thị tên file đã chọn; kéo-thả được; **chưa kiểm tra loại/kích thước, chưa quét** (chữ lỗi file chưa được duyệt, OQ-12) — việc này thuộc S7.
- Yes/No công bố câu chuyện và các checkbox ban đầu đều không chọn.

## 3. Danh sách điểm lệch (cần bạn quyết định)

| ID | Trang | Điểm lệch | Đề xuất |
|---|---|---|---|
| A-1 | Tất cả | Tablet/phone là bố cục đề xuất (1 cột; thẻ xếp dọc, tối đa 40 rem ở tablet) — không có tham chiếu | Duyệt theo màn hình 768/390 |
| A-2 | Supporter, A3, A6 | Form luôn hiển thị trên trang (không ẩn/mở): ảnh A3 và A6 vẽ form đã hiện sẵn; nút “Become a supporter” cuộn + focus thay vì mở form ẩn (TXT:2143 “opens directly”) | Giữ |
| A-3 | Supporter | Ô DATE dùng điều khiển ngày gốc của trình duyệt (hiển thị theo ngôn ngữ trình duyệt, `mm/dd/yyyy` ở bản Anh–Mỹ) thay cho đường kẻ trống trong ảnh | Giữ |
| A-4 | Supporter | CITY và ZIP không bắt buộc (blueprint không ghi lỗi cho hai ô này, OQ-28); EMAIL bắt buộc | Giữ |
| A-5 | A3 | NAME không bắt buộc (ảnh lỗi p251 chỉ có Related Issue và Your Story, OQ-28) | Giữ |
| A-6 | A6 | Bảng petition rộng 56 rem (ảnh gốc 793 px đã thu nhỏ, chữ nhỏ, kích thước ước lượng); dải phong cảnh hai bên chỉ có phần cạnh trích từ ảnh nên chỉ hiện hai dải mép ở desktop, ẩn ở < 1100 px (OQ-19) | Giữ |
| A-7 | Tất cả | Icon giao diện nhỏ (thẻ chủ đề, avatar, biểu tượng chia sẻ, badge kicker) vẽ lại bằng Lucide; ảnh minh họa dùng ảnh trích | Giữ |
| A-8 | A2 | Đoạn bổ sung trong blueprint (“Support a safer and more appropriate planning framework…”, “Additional record … September 23, 2026 …” và link Google Drive) **không** hiển thị vì ảnh A2 không có và blueprint cấm lộ file Drive riêng (OQ-07, OQ-23) | Giữ |
| A-9 | A5 | Dòng “Real people. Real stories. A stronger community.” giữ như ảnh, đứng cạnh nhãn mẫu (OQ-27) | Giữ |
| A-10 | A2 | Hai nút card 01 dùng cỡ chữ 16 px để câu “Become a supporter and stay updated →” không xuống dòng ở 1536 | Giữ |
| A-11 | Công cụ | `check:copy` nay đọc thêm `docs/FORMS_SPEC.md` (chứa trích nguyên văn các trạng thái form của Supporter) | Giữ |

## 5. Kiểm tra

- `npm run lint`, `npm run typecheck`, `npm run build` (10 trang) — qua; `check:copy` 1108 chuỗi khớp.
- Không cuộn ngang ở 320, 390, 768, 1280, 1536 px.
- Kiểm tra bằng script trên trình duyệt: lỗi từng ô của Supporter, quy tắc Phone khi chọn Text/Call, bấm gửi → “Sending…” (nút bị khóa) → xác nhận; khung lỗi Story và Petition đúng chữ; panel Share, panel story, “Not available yet” mở/đóng được.
- **Chưa làm:** so sánh ảnh-từng-pixel với blueprint ở 1536/390 bằng ảnh chụp lưu lại; thử bàn phím đầy đủ (Tab/Esc) bằng tay; thử chế độ `?simulate=failure` bằng mắt. Mong bạn xem trực tiếp.
