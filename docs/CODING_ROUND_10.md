# Coding lượt 10 — About và footer destinations

Người dùng yêu cầu “oke, hãy bắt đầu code” sau xác nhận phạm vi lượt 10. Đã triển khai B-01/B-02 trong phạm vi labelled demo previews theo D-02. About chưa có approved public copy, section order hoặc selected layout; hoàn thành lượt demo không có nghĩa nội dung giới thiệu tổ chức/chính sách đã hoàn thiện. Lượt 11 chưa tự bắt đầu.

## Nội dung và đích

- **B-01 `/about`:** giữ About, brand, breadcrumb và Explore destinations đã có. Thông báo rõ approved About copy/layout chưa được cung cấp; không dùng chức năng “About — …” trong PDF 3 như public organization copy. Không tự chọn ảnh hoặc viết bio, mission, team hay contact details.
- **B-02:** sáu nhãn đúng PDF 5: Updates, Contact, Sources & Methods, Accessibility, Edits, Privacy. Có nút mở preview từ About và footer. Mỗi đích nói rõ loại nội dung/địa chỉ còn thiếu; không thêm route, updates feed, form, email/subscription hoặc corrections process.
- **Footer:** giữ navy, font, layout và Explore/Get Involved/Information. Facebook/Instagram/Email vẫn là preview, ghi rõ thiếu profile links/email được duyệt. Terms & Copyright và Privacy có Demo version/missing-copy notices riêng; hai nút Privacy dùng cùng nội dung.
- Không tự xuất technical source register làm approved public Sources & Methods, viết privacy/legal promises hoặc tuyên bố accessibility compliance. Original Supporter Privacy text và các demo notices ở Take Action giữ nguyên.

`src/content/information.ts` tập trung missing-input notices. `InformationPreview` dùng chung cho About/footer và tái sử dụng Dialog hiện có. `DemoPreview` chỉ thêm optional description; mặc định generic notice/signature notice giữ nguyên cho các lượt trước. Các notice mới là thông báo trạng thái demo theo D-02, không phải nội dung tổ chức/chính sách đã duyệt.

## Kiểm tra

- TypeScript, root build và Pages-base-path build qua. Chín routes static export, giữ Windows RSC finalizer. Không thêm dependency hoặc đổi cấu hình Next/hosting.
- Dev và Pages static export: mỗi môi trường có 14 tổ hợp 320/390/560/768/1000/1152/1440 px × DPR 1/2. About có một h1, B-01/B-02, sáu buttons; không horizontal overflow. Font/palette/footer labels giữ Foundation.
- Mỗi môi trường: 84 About preview cases và 154 footer preview cases; exact titles/descriptions/demo notice, accessible title/description association, keyboard Enter/Tab/Shift+Tab/Escape, focus trap/return và visible close qua. Thêm hai short-viewport cases 320 × 480.
- Cả chín routes HTTP 200, giữ section counts Home 6 / Issues 6 / Roads 8 / Water 9 / Growth 8 / Facts 2 / Proposal 5 / Action main journey 5; About nay 2 labelled-preview sections. Footer consistency kiểm tra ở cả hai DPR. Hai mươi lượt đi/đến qua footer, bốn mobile-menu transitions và hai existing signing-notice checks mỗi môi trường đều qua. Đây là regression checks của lượt 10, chưa phải đối chiếu toàn bộ copy/ảnh của lượt 11.
- Skip link, reduced-motion scroll và noindex metadata qua. About/info previews không có form/input hoặc contact/social integration. Không external/write requests, cookies/web storage, runtime/console/HTTP errors trong journeys đã thử.
- Navigation cancellations `net::ERR_ABORTED` ghi riêng: dev 4, static 219 (prefetch/navigation bị hủy khi test đổi route); không failed connections khác. Favicon fallback có thể xảy ra ở Foundation, nhưng hai lượt QA local này không ghi nhận request đó.
- Prebuild xác minh PDF và 43 archive hashes; giữ nguyên toàn bộ existing public assets. Ba served original map hashes khớp ở cả hai môi trường. Không thêm/thay/chỉnh ảnh; các giới hạn DPR 2, petition background và laptop/screen assets từ các lượt trước vẫn còn.
- Đã xem ảnh chụp About và Sources & Methods dialog ở 390/1440 px. Scripts/screenshots và raw results ở `tmp/round-10-qa/`; [số đo đã ghi](coding-round-10-checks.json). Lint không chạy vì không được yêu cầu trong lượt này.

Static demo GitHub Pages được cập nhật theo quyền đã có; chỉ xác nhận publication sau workflow/live checks, không suy từ local build. Không chỉnh Vercel hoặc mở dịch vụ production. Tiếp theo là lượt 11 — kiểm tra toàn demo và bàn giao, chờ người dùng yêu cầu.
