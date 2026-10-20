# Shared navigation and footer — demo update

Theo yêu cầu trực tiếp sau lượt 6: thêm chuyển trang mượt giữa Our Community / Issues / các mục menu; bổ sung thông tin, social và copyright/điều khoản ở footer với nhãn Demo version. Đây là thay đổi Foundation được phép, không bắt đầu lượt 7 hoặc sửa blueprint gốc.

## Kết quả

- Crossfade nội dung trang: fade-out 140 ms, fade-in 220 ms bằng React 19.3 ViewTransition hiện có. Header/footer nằm ngoài boundary. Không thêm thư viện, timer chặn navigation, slide/blur/filter ảnh hoặc animation trang trí.
- Smooth scroll cho anchor trong trang. Root `data-scroll-behavior="smooth"` theo Next 16 để route navigation vẫn xử lý scroll đúng. Chuyển hash không tạo boundary trang mới.
- `prefers-reduced-motion: reduce` tắt fade và smooth scroll. Browser thiếu View Transitions API vẫn điều hướng bình thường.
- Footer giữ bốn nhóm Foundation và slogan; thêm Keystone–Odessa / Hillsborough County, Florida; Facebook/Instagram/Email icons; demo description/notice; `© 2026 Safer Communities United. Demo version.`; Terms & Copyright và Privacy previews.
- Social URLs/email và legal copy thật chưa được cung cấp. Các nút có accessible names và mở labelled demo dialogs; không gán tài khoản giả, mailto giả hoặc viết chính sách pháp lý chưa có.
- Đã ghi nhận ngoại lệ motion/footer mới và quyền developer chọn kích cỡ chữ trong `agent.md`, decisions và approvals. Font family/palette/copy nội dung trang vẫn giữ.

## Kiểm tra

- TypeScript và production build qua; static export chín route, giữ Windows RSC postbuild.
- Chín route HTTP 200, một h1/trang và footer mới có đủ social/copyright.
- Footer tại 320/390/768/1152/1440 px không tràn ngang; đã xem desktop/mobile screenshots. Mobile footer screenshot dùng screenshot-only style ẩn sticky header/skip link để không chụp chồng lên footer; không đổi application CSS.
- Cả sáu mục menu điều hướng đúng. Browser ghi nhận thực tế `page-fade-in` 220 ms và `page-fade-out` 140 ms trên `page-content`; header/root không có fade. Back/forward, mobile menu và browser-API fallback qua.
- Reduced-motion không có fade animation, computed scroll behavior là auto. Anchor Water của Issues có nhiều vị trí cuộn trung gian và đích không bị header che.
- Năm footer dialogs mới (ba social, Terms & Copyright, Privacy) có focus trap, Escape và trả focus về đúng trigger.
- Không console/runtime errors, HTTP 4xx/5xx, write/external requests, cookies hoặc web storage trong lượt browser QA. PDF/archive/map hashes được prebuild xác nhận.

[Kết quả](navigation-footer-checks.json). Screenshots/QA scripts ở `tmp/navigation-footer-qa/` không thuộc application. Dev server local vẫn giữ; static QA server đã dừng sau kiểm tra. Không publish hoặc kết nối social/email services. Lượt 7 — The Facts chưa bắt đầu.
