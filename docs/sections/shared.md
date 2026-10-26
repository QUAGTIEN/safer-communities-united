# Thành phần dùng chung

## Header

**Ảnh tham chiếu:** `p017-obj42-1536x87.png`, `p082-obj196-768x77.png`, `p088-obj212-390x73.png`.

<!-- TXT:237-274 -->
```text
Home Header
Exact exported visible text
Our Community
Issues
The Facts
The Proposal
Take Action
About
Get Involved
At 768px (tablet):
also shown: Menu
not shown: Our Community
not shown: Issues
not shown: The Facts
not shown: The Proposal
not shown: Take Action
not shown: About
not shown: Get Involved
At 390px (phone):
also shown: Menu
not shown: Our Community
not shown: Issues
not shown: The Facts
not shown: The Proposal
not shown: Take Action
not shown: About
not shown: Get Involved
Links and controls
(Safer Communities United: no visible text) → page /  |  all widths
Our Community → page /  |  1536px
Issues → page /issues  |  1536px
The Facts → opens the "Not available yet" notice (page not built yet: /evidence)  |  1536px
The Proposal → opens the "Not available yet" notice (page not built yet: /comparison#proposed-change)  |  1536px
Take Action → opens the "Not available yet" notice (page not built yet: /take-action)  |  1536px
About → opens the "Not available yet" notice (page not built yet: /about)  |  1536px
(Search: no visible text) → opens the site search  |  1536px
Get Involved → opens the "Not available yet" notice (page not built yet: /take-action)  |  1536px
Menu → opens the phone menu  |  768px, 390px
```

**Quy tắc (TXT:104-117, TXT:183-192):**
- Nhãn menu cố định: Our Community · Issues · The Facts · The Proposal · Take Action · About; nút nổi bật **Get Involved**. Dùng cùng nhãn trên desktop, mobile và footer.
- Header nền sáng, cố định khi cuộn; mobile chỉ có logo + nút **Menu** (từ 768 px trở xuống theo inventory), không che nội dung.
- Mục đang mở có gạch chân đỏ/burgundy. Trang Evidence: mục active là **The Facts** (TXT:2065).
- Biểu tượng Search: inventory ghi “opens the site search”, nhưng checklist ghi giữ search/social icons **không tương tác** (TXT:43, TXT:33). **Đã chốt (D-009):** icon hiển thị, không tương tác.
- **Một header duy nhất cho toàn site (D-010):** header của ba trang đã build 22/10. Các biến thể khác trong ảnh later page (nút Get Involved đỏ tươi, icon search lớn) không dùng.
- Logo (wordmark) → `/`, có nhãn truy cập “Safer Communities United”.

### Menu mobile mở (TXT:1046, TXT:1079-1085)

**Ảnh tham chiếu:** `p079-obj189-546x2039.png` (trang 79–80, đã bị thu nhỏ).

```text
Our Community
Issues
The Facts
The Proposal
Compare the Two Plans
Take Action
About
Get Involved
```

- “Compare the Two Plans” lồng dưới The Proposal, trỏ tới anchor phần so sánh (TXT:113).
- Là **disclosure** (không phải modal): panel trắng nằm trong luồng tài liệu ngay dưới header, đẩy nội dung xuống.
- Nút Menu bật/tắt; `aria-expanded` + `aria-controls`; Escape đóng và trả focus về Menu; chọn link thì đóng rồi điều hướng; link ẩn không nhận focus.

## Footer

**Quyết định D-010:** một footer **F1 duy nhất** cho toàn site. Blueprint muốn footer theo từng ảnh (TXT:23, TXT:194-205), nhưng người dùng xác định các khác biệt giữa ảnh là sai lệch do ảnh tạo bằng AI. Hình ảnh F1 dùng chung được trình duyệt ở Home pilot (S3). Bảng biến thể dưới đây chỉ để tra cứu.

### Biến thể đã thấy trong các ảnh được chọn

| Biến thể | Nơi xuất hiện | Nội dung |
|---|---|---|
| F1 — navy một hàng | Home, Issues, Roads (22/10, TXT:320-341, TXT:626-647, TXT:1021-1042); Water R2 (`p192`) | Wordmark · “A safer, stronger Keystone–Odessa for today and future generations.” · 6 link menu · icon Facebook / Instagram / YouTube · nút “Subscribe for Updates” |
| F2 — charcoal một hàng | Water W6, W3 (`p189`, `p191`) | Như F1 nhưng nền charcoal |
| F3 — nhiều nhóm | Water W8 (`p224`, charcoal); Growth G1/G2/G4/G5, Comparison R1/C1 (`p209`…`p228`, navy) | Wordmark · “For a safer, healthier and stronger Keystone–Odessa community.” · **Quick Links** (Our Community, Issues, The Facts, The Proposal, Take Action) · **Key Issues** (Road(s) Safety, Water & Septic, Growth, Infrastructure & Daily Life, Outdated Community Plan) · **Connect** (Facebook / Instagram / Email) · nút **Get Involved →** |

- Mục footer đã xây (Issues): “The former instruction to use the O2 overview’s white footer is superseded for the built Issues page by the exported shared navy footer. This does not restyle later pages.” (TXT:1068).
- Một footer thống nhất là thay đổi hiển thị, phải được duyệt trước (TXT:205): đã có quyết định D-010; hình ảnh chờ duyệt ở S3.
- Icon mạng xã hội (Facebook / Instagram / YouTube của F1) không có URL → không tương tác (D-009, OQ-08). “Subscribe for Updates” → thông báo “Not available yet” (TXT:337).
- Inventory 22/10 cho F1: link footer tới trang chưa build mở “Not available yet”; first version trỏ tới trang thật khi trang đó tồn tại.

## Thông báo “Not available yet”

**Ảnh tham chiếu:** `p262-obj650-1800x1408.png` (TXT:2322, TXT:2337).

```text
IMG:p262-obj650-1800x1408.png
Not available yet
```

- Panel nhỏ, nền trang mờ, nút × đóng; đóng thì trở về trang bên dưới không đổi (TXT:2322).
- Dùng cho mọi đích chưa có nội dung hoặc chưa có URL (TXT:65). Không tự viết thêm giải thích, không chuyển tới trang không liên quan.
- Chỉ có tiêu đề “Not available yet” trong ảnh; không có câu mô tả.

## Breadcrumb / nhãn section

Các trang chi tiết có breadcrumb in hoa, ví dụ `ISSUES › ROADS & SAFETY`, `ISSUES › WATER & SEPTIC › SEPTIC CONCENTRATION`. Chữ breadcrumb chép đúng theo từng section file.
