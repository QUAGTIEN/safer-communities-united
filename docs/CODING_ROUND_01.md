# Coding lượt 1 — Foundation

Trạng thái: **hoàn thành phạm vi Foundation**, ngày 20/10/2026. Bắt đầu theo yêu cầu trực tiếp “oke, hãy bắt đầu lượt code đầu tiên.” Website chưa publish.

## Phần đã triển khai

- Next.js 16.4.2 + React 19.3.1, App Router, TypeScript; Tailwind 4.3.3 và shadcn/Radix Button, Card, Dialog. Npm lockfile được lưu.
- Sáu màu đúng blueprint; Inter + Source Serif 4 self-hosted bằng `next/font/local`. Không lấy Geist hoặc theme mặc định của thư viện.
- Shared layout, text wordmark, header giữ ở trên khi cuộn, sáu menu đúng nhãn, Get Involved tới Take Action; desktop/mobile active state và menu đóng/mở/Escape.
- Footer navy dùng đúng slogan và ba nhóm Explore / Get Involved / Information. Sáu đích chưa có nội dung mở labelled preview.
- Khung **9 route** theo D-01. Trang chi tiết truy cập được từ Issues; Comparison qua anchor trong The Proposal. Tất cả nội dung chưa đến lượt đều được ghi rõ preview, không có trang được coi là hoàn thiện copy/layout.
- Các helper dùng chung: button variants, base cards, dialog, container, preview, metadata và 404 quay về Our Community.
- Điều hướng/heading tách khỏi presentation; chuẩn bị bindings 3 map gốc, 79 photo crops, 1 photo reference-only và 57 source sections kèm copy excerpts/hash/trang nguồn. Các excerpt giữ nhãn biên tập, không render thẳng lên UI.
- `output: export` cho demo tĩnh; không API/Server Actions/data services; noindex/nofollow.

## Kiểm tra đã chạy

- `npm run build`: pass, 9 route nội dung và framework not-found được prerender/export. Đây là build local, không phải deploy.
- `npm run lint`: pass, không lỗi/cảnh báo của project.
- `npm run typecheck`: pass.
- Playwright với Chrome headless trên Windows: **45 kiểm tra route/viewport** (9 route × 320/390/768/1152/1440 px), HTTP 200, 1 main/1 h1, không horizontal overflow.
- Click desktop menu/CTA, mobile menu và issue link, Comparison link: đúng đích. Kiểm tra **15 anchor** đã duyệt tồn tại.
- Sáu footer previews: mở/đóng, Escape, focus trap và trả focus; không input/form. Skip link đưa focus tới main. Mobile menu mở trong luồng, không đè main, và Escape đóng menu.
- Màu cream/navy/footer đúng; hai font được tải local. Kiểm tra bổ sung Home 390 px ở DPR 2; chưa phải kiểm tra độ nét photos vì lượt 1 chưa render ảnh trang.
- Không có console/page errors trong lượt browser QA cuối; không request ra ngoài origin, không POST/write request, không cookie/localStorage/sessionStorage trong các thao tác đã thử.
- Ba URL PNG maps trả HTTP 200 và hash response trùng nguồn. Toàn bộ 43 ảnh archive và PDF giữ đúng hash qua asset sync; 79 crop giữ đúng hash nguồn.
- Đã xem screenshots desktop, mobile, menu và dialog. Kết quả máy: [results.json](../tmp/round-01-qa/results.json); screenshot [desktop](../tmp/round-01-qa/home-desktop.png), [mobile](../tmp/round-01-qa/home-mobile.png), [menu](../tmp/round-01-qa/mobile-menu.png), [dialog](../tmp/round-01-qa/mobile-dialog.png). Các file tmp phục vụ QA, không phải asset website.

Công cụ browser tích hợp không khởi tạo được runtime trong môi trường này; QA sử dụng Playwright/Chrome headless có sẵn. Lệnh mở tab Codex trả `queued`; không khẳng định tab đã hiện. URL local đã được kiểm tra HTTP và trình duyệt riêng.

## Giới hạn và lượt tiếp theo

- **Chưa hoàn thiện Home hoặc trang nội dung nào.** Lượt 2 dựng Home theo selected design; thay `FoundationPage` ở route `/`, giữ shared layout.
- Logo độc lập còn thiếu; dùng text wordmark, không tạo vector/logo mới. Favicon trống để tránh dùng ảnh chưa được duyệt.
- Ảnh nhỏ/nền bị che tiếp tục theo báo cáo chất lượng; không dùng lượt 1 làm bằng chứng rằng mọi ảnh đã đủ nét. Nền petition độc lập vẫn thiếu.
- About/Proposal intro/footer copy còn thiếu theo hồ sơ; preview không tự biến thành nội dung đã duyệt.
- Chưa có backend hoặc dữ liệu thật; chưa mở production/public launch.

Chạy lại bằng các lệnh trong [README](../README.md). Kết quả QA mô tả trạng thái thực tế, không bảo đảm các lượt sửa sau vẫn pass trước khi kiểm tra.
