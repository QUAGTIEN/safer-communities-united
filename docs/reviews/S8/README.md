# S8 — Nghiệm thu first version

**Trạng thái: awaiting decision** (V-015). Ngày 26/10/2026. Đối chiếu từng mục của [ACCEPTANCE_CHECKLIST](../../ACCEPTANCE_CHECKLIST.md) trên site thật `https://safer-communities-united.vercel.app` (commit `87a0e10`) và server local.

Ký hiệu: ✅ đạt (đã kiểm tra thật) · ⚠️ đạt một phần / có ngoại lệ đã duyệt · ❌ chưa đạt · ⏸ ngoài phạm vi first version.

## 1. So sánh hình ảnh

| Mục | KQ | Bằng chứng |
|---|---|---|
| Khổ cố định, chụp sau khi font/ảnh tải | ✅ | 1536 / 390 (D-012); hồ sơ S3–S6 |
| So sánh từng section với ảnh tham chiếu | ✅ | `reviews/S3-home`, `S4-*`, `S5-*`, `S6`, `UI-AUDIT-2026-10-26` — người dùng đã duyệt (D-016 → D-019, D-021) |
| Phân cấp, căn lề, xuống dòng, màu, nút, crop ảnh | ✅ | Như trên; ngắt dòng tiêu đề Take Action khớp ảnh |
| Mobile: không tràn ngang, header không che nội dung | ✅ | Không trang nào tràn ở 320 / 390 / 768 / 1280 / 1536; anchor có `scroll-margin` bằng chiều cao header |
| Mismatch đã sửa hoặc đã duyệt | ✅ | V-001 → V-014 đều approved |

## 2. Nội dung

| Mục | KQ | Bằng chứng |
|---|---|---|
| Chữ khớp nguyên văn | ✅ | `check:copy`: 1108 chuỗi khớp; 1 câu ngoài blueprint đã được duyệt riêng (V-014, D-023) |
| Caveat/nhãn minh họa còn đủ | ✅ | Tìm thấy trên site: Illustration, Conceptual illustration, ILLUSTRATIVE, Illustrative sample stories, Photo date unverified, PRIVATE PLACEHOLDER, Fake data, Schematic service pins |
| Không bịa số liệu, URL, bản ghi | ✅ | Mọi URL lấy từ blueprint; đích chưa có mở “Not available yet”; số liệu mẫu Growth giữ nhãn placeholder |

## 3. Asset

| Mục | KQ | Bằng chứng |
|---|---|---|
| Hash asset khớp register; bản đồ gốc nguyên byte | ✅ | 119/119 ảnh trích khớp `assets/extracted/manifest.json`; 3 bản đồ khớp SHA-256 trong ASSET_REGISTER, và file phục vụ trên site thật cũng khớp |
| Font thật là Merriweather/Inter | ✅ | Đã kiểm tra trên trình duyệt: Inter 100–900, Merriweather 300–900 (trục `wdth` hoạt động), Anton chỉ ở Roads; không rơi về fallback |

## 4. Điều hướng và truy cập

| Mục | KQ | Bằng chứng |
|---|---|---|
| Menu, CTA, anchor, link nguồn | ⚠️ | Không link nội bộ/anchor hỏng; 121/121 ảnh tải được; 14/17 link ngoài trả 200. **S8-3:** 3 link quá thời gian chờ từ máy kiểm tra (Việt Nam) |
| Heading ngữ nghĩa | ❌ | 7/8 trang có đúng 1 `h1`, không nhảy cấp. **S8-1:** trang Roads & Safety không có `h1` |
| Bàn phím, focus thấy được | ⚠️ | Tab đi qua header, viền focus burgundy 2 px hiện đúng. **S8-2:** đóng hộp thoại (“Not available yet”, “Share This Page”, panel câu chuyện) thì focus về đầu trang thay vì nút đã mở; khung xem bản đồ trả focus đúng |
| Nhãn điều khiển, alt ảnh, id trùng | ✅ | Mọi link/nút có tên; mọi ảnh có `alt`; mọi ô form có nhãn; không id trùng; `lang="en"`, tiêu đề trang riêng |
| Thông báo lỗi/trạng thái được đọc | ✅ | `role=status/alert`, `aria-invalid`, `aria-describedby` |
| Tương phản | ✅ | Sau D-021 không còn chữ dưới AA, trừ chữ đỏ Home đã duyệt giữ (V-007) và dấu “•” trang trí |
| Menu mobile | ✅ | `aria-expanded`/`aria-controls` đúng; link ẩn không nhận focus; Escape đóng và trả focus về nút Menu |
| Icon search/social không tương tác | ✅ | Search là `span` không nhận focus; 3 icon social không có link (D-009) |

## 5. Form (dữ liệu giả)

| Mục | KQ | Bằng chứng |
|---|---|---|
| Ban đầu trống, không chọn sẵn | ✅ | Kiểm tra mã và trình duyệt |
| Validation đúng chữ, focus ô lỗi đầu, giữ dữ liệu | ✅ | Thử trên trình duyệt và API (422 với đúng chữ lỗi) |
| Bấm trùng; idempotency key giữ khi thử lại | ✅ | Bấm 2 lần chỉ 1 request; trên site thật gửi lại cùng khóa trả cùng mã email |
| Provider từ chối, timeout mơ hồ | ⚠️ | Từ chối (502) → trạng thái lỗi, giữ dữ liệu: đã thấy trên site thật. **S8-6:** timeout chỉ kiểm qua mã, chưa tái hiện |
| File bị từ chối được báo rõ | ⚠️ | File > 4 MB báo rõ (V-014). **S8-5:** chưa kiểm tra loại file và chưa quét malware (để sau, D-022) |
| Thành công chỉ khi provider chấp nhận | ✅ | Chỉ khi Resend trả `id`; 3 email test đã tới hộp thư |
| Ba form tách biệt, người nhận cố định, không mailto | ✅ | Ba route riêng; `FORMS_RECIPIENT` trên server; không có `mailto` trên site |
| Không lưu dữ liệu | ✅ | Không database, không localStorage/sessionStorage/cookie, không ghi log nội dung form trong mã. Vercel/Resend vẫn giữ log và thư theo chính sách của họ — cần công bố trước khi chạy thật |

## 6. Kỹ thuật

| Mục | KQ | Bằng chứng |
|---|---|---|
| build, lint, typecheck | ✅ | Qua |
| Không lỗi runtime/hydration/404 | ✅ | Site thật: không lỗi console, không tài nguyên ≥ 400, không ảnh hỏng trên 8 trang |
| Preview có bảo vệ truy cập | ❌ (ngoại lệ đã duyệt) | **S8-4:** site công khai, không mật khẩu (D-022); `FORMS_MODE=live` nên form công khai gửi email thật |

## 7. Cổng công bố — ⏸ ngoài first version

Chưa làm: kiểm tra nguồn và quyền ảnh (ảnh vẫn là bản tạm trích từ PDF, OQ-19); privacy notice petition; người liên hệ; domain gửi đã xác thực; quy trình giao County; dịch vụ unsubscribe (OQ-11, 13, 14, 31).

## 8. Phát hiện cần quyết định

| ID | Mức | Phát hiện | Đề xuất |
|---|---|---|---|
| S8-1 | Truy cập | Roads & Safety không có `h1` | Thêm `h1` ẩn với mắt (chỉ trình đọc màn hình) “Roads & Safety”, không đổi giao diện |
| S8-2 | Truy cập | Đóng hộp thoại không trả focus về nút đã mở | Ghi nhớ nút mở và trả focus khi đóng (không đổi giao diện) |
| S8-3 | Link | 3 link ngoài không mở được từ máy kiểm tra: 2 dịch vụ bản đồ ArcGIS của County, tài liệu Hillsborough Clerk (May 9, 2024) | Bạn mở thử trên trình duyệt; nếu vẫn lỗi thì thay bằng “Not available yet” |
| S8-4 | Bảo mật | Site công khai, form gửi thật | Để `FORMS_MODE=simulate` khi không test, tới khi xong cổng công bố |
| S8-5 | Form | Chưa kiểm tra loại file, chưa quét malware | Để sau (D-022); bắt buộc trước khi chạy thật |
| S8-6 | Form | Chưa tái hiện timeout của provider | Chấp nhận (đã kiểm qua mã), hoặc thêm test giả lập |
