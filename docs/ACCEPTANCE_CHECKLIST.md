# Checklist nghiệm thu

Nguồn: TXT:30-33, TXT:67-68, TXT:2392. Chỉ đánh dấu đạt sau khi đã kiểm tra thực tế; screenshot tĩnh không chứng minh hành vi (TXT:67).

## 1. So sánh hình ảnh (mỗi trang)
- [ ] Khổ cố định đã ghi (DESIGN_SPEC §6); chụp sau khi font và ảnh đã tải.
- [ ] So sánh từng section với ảnh tham chiếu cùng tỉ lệ (cạnh nhau hoặc overlay); ghi khác biệt không tránh được do tỉ lệ ảnh nguồn và trình duyệt.
- [ ] Phân cấp, căn lề, xuống dòng, khoảng cách, vai trò màu, nút, tỉ lệ và crop ảnh.
- [ ] Mobile: không tràn ngang, chữ không chật, cột không vỡ, ảnh không bị cắt, header cố định không che nội dung; kiểm tra thêm một khổ trung gian.
- [ ] Danh sách mismatch: đã sửa hoặc đã duyệt; không giấu lỗi bằng cách đổi chữ hay thu nhỏ chữ.

## 2. Nội dung
- [ ] Chữ hiển thị khớp nguyên văn `docs/sections` (script kiểm tra), gồm qualifier, nhãn, caption; không có chỉ dẫn đã bị thay thế hay ghi chú nội bộ.
- [ ] Caveat/nhãn minh họa còn đủ (Illustration, Conceptual illustration, ILLUSTRATIVE, Illustrative sample stories, Photo date unverified…).
- [ ] Không có số liệu, URL, bản ghi, kết quả gửi được bịa.

## 3. Asset
- [ ] Hash asset khớp `ASSET_REGISTER`; ba bản đồ gốc nguyên byte, đủ label/legend/credit.
- [ ] Font thực tế tải là Merriweather/Inter đúng file và weight; kiểm tra fallback.

## 4. Điều hướng và truy cập
- [ ] Mọi mục menu, CTA, đường quay lại, anchor, link nguồn hoạt động đúng SITE_STRUCTURE §5; đích thiếu mở “Not available yet”.
- [ ] Heading ngữ nghĩa; bàn phím; focus nhìn thấy; điều khiển được nhóm và gắn nhãn; thông báo lỗi/trạng thái được đọc; zoom/reflow; tương phản; thao tác cảm ứng.
- [ ] Menu mobile: aria-expanded/controls, Escape trả focus, link ẩn không nhận focus.
- [ ] Icon search/social hiển thị, không tương tác (D-009).

## 5. Form (dữ liệu giả, trong phạm vi được phép)
- [ ] Trạng thái ban đầu trống, mọi lựa chọn không chọn sẵn.
- [ ] Validation đúng chữ, chỉ hiện lỗi áp dụng, focus ô lỗi đầu tiên, giữ dữ liệu.
- [ ] Bấm trùng: nút vô hiệu khi đang gửi; idempotency key giữ nguyên khi thử lại.
- [ ] Nhà cung cấp từ chối, timeout mơ hồ: hiện trạng thái lỗi, giữ dữ liệu, không báo thành công.
- [ ] File đính kèm bị từ chối được báo rõ; không âm thầm bỏ.
- [ ] Thành công chỉ khi provider chấp nhận (A6 có email ID).
- [ ] Supporter / Story / Petition tách biệt; không ghi danh chéo; người nhận cố định phía server; không mailto.
- [ ] Không lưu dữ liệu ở server, trình duyệt hay log ngoài phạm vi đã công bố.

## 6. Kỹ thuật
- [ ] `npm run build`, `npm run lint`, `npm run typecheck` qua.
- [ ] Không lỗi runtime/hydration/asset 404 trên console.
- [ ] Preview có bảo vệ truy cập; không có deploy công khai ngoài quyết định.

## 7. Cổng công bố (ngoài first version preview)
- [ ] Kiểm tra nguồn công khai, sự thật, quyền ảnh (TXT:67).
- [ ] Privacy, liên hệ, provider/sender, quy trình petition, unsubscribe (TXT:2392).
