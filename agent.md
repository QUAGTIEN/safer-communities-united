# Quy tắc làm việc — Safer Communities United (first version)

## 1. Bối cảnh

- Website vận động **Safer Communities United — Keystone–Odessa**: trình bày vấn đề → bằng chứng → so sánh Community Plan với County Comprehensive Plan → đề xuất → hành động (ký petition, đăng ký ủng hộ, chia sẻ câu chuyện).
- Giai đoạn: **first version** theo blueprint ngày 22/10/2026. Demo cũ (Codex, 10 lượt) đã bị xóa toàn bộ code trang, tài liệu và asset; chỉ còn bộ khung kỹ thuật (D-003, D-004).
- Người dùng làm việc bằng tiếng Việt. Copy website là tiếng Anh, giữ nguyên văn.

## 2. Nguồn và quyền ưu tiên

1. Chỉ dẫn trực tiếp của người dùng, ghi trong [docs/APPROVAL_LOG.md](docs/APPROVAL_LOG.md).
2. Blueprint master: [blueprint/](blueprint/README.md) (PDF + text, bất biến, có hash).
3. Tài liệu dẫn xuất: [docs/RULES.md](docs/RULES.md), [docs/sections/](docs/sections/README.md), [docs/SITE_STRUCTURE.md](docs/SITE_STRUCTURE.md), [docs/FORMS_SPEC.md](docs/FORMS_SPEC.md), [docs/DESIGN_SPEC.md](docs/DESIGN_SPEC.md), [docs/ASSET_REGISTER.md](docs/ASSET_REGISTER.md), [docs/LINK_REGISTER.md](docs/LINK_REGISTER.md), [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Nếu tài liệu dẫn xuất khác blueprint, blueprint đúng.
4. Câu hỏi chưa chốt: [docs/OPEN_QUESTIONS.md](docs/OPEN_QUESTIONS.md). Không tự quyết thay người dùng.

## 3. Nguyên tắc bất biến

- **100% y chang blueprint.** Do not redesign. Do not rewrite. Do not regenerate images. Do not invent missing content.
- Chữ hiển thị lấy nguyên văn từ khối `TXT`/`IMG` trong `docs/sections`. Khối `TXT` sinh tự động bằng `node scripts/expand-blueprint-quotes.mjs` — không gõ tay.
- Diện mạo theo ảnh tham chiếu của từng section; không áp bảng màu/footer chung lên section đã chọn.
- Asset lấy từ `assets/source/` (gốc, có hash) hoặc `assets/extracted/` (tạm, cắt từ ảnh tham chiếu và phóng + làm rõ theo D-007, sinh bằng `scripts/extract-assets.mjs`). Ba bản đồ gốc bất biến tuyệt đối. Không dùng AI vẽ thêm chi tiết, không vẽ lại hay tạo ảnh.
- Thay đổi hiển thị nào ngoài ảnh đã duyệt → trình before/after, chờ duyệt, ghi APPROVAL_LOG.
- Đích chưa có nội dung/URL → thông báo “Not available yet”. Không bịa URL, bản ghi, kết quả.
- Ba form (Supporter, Story, Petition) độc lập; gửi email phía server tới người nhận cố định; không database/register/outbox/portal. Hiện chỉ được chạy chế độ **mô phỏng với dữ liệu giả**; bật gửi thật, tạo tài khoản provider, cấu hình credentials, deploy, công bố đều cần người dùng cho phép riêng.

## 4. Quy trình

1. Chỉ làm lượt (S1 → S8) người dùng yêu cầu trong [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md). **Home pilot** phải được duyệt desktop + mobile trước khi làm trang khác.
2. Trước khi code một trang: đọc `docs/sections/<trang>.md`, ảnh trong `blueprint/references/`, câu hỏi mở liên quan.
3. Sau khi code: build, lint, typecheck; so sánh ảnh ở khổ cố định; danh sách mismatch; cập nhật tài liệu và APPROVAL_LOG; báo trung thực phần chưa đạt.
4. Push lên `main` sẽ deploy production trên Vercel (D-020); chỉ push khi người dùng yêu cầu.

## 5. Kỹ thuật

Next.js 16 App Router + React 19 + TypeScript + Tailwind 4 + shadcn/ui (Radix). Đọc tài liệu trong `node_modules/next/dist/docs/` trước khi viết code Next. Server Components mặc định; `use client` chỉ cho tương tác cần thiết (menu, dialog, form). Chi tiết: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
