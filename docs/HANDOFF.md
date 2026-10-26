# Bàn giao phiên làm việc (cập nhật 26/10/2026)

Đọc file này đầu tiên khi mở phiên chat mới.

## 1. Dự án
- Website **Safer Communities United** (Keystone–Odessa), bản **first version** theo **blueprint 22/10/2026** trong `blueprint/` (master, bất biến).
- Nguyên tắc: **100% đúng blueprint** (D-002), chữ hiển thị nguyên văn, không tự viết nội dung, không bịa ảnh/nguồn.
- Stack: Next.js 16.4.2 (App Router, build server cho Vercel từ D-020), React 19, TypeScript, Tailwind 4, ESLint. Chạy local: `npm run dev` → http://127.0.0.1:3000.
- Push lên `main` → Vercel tự deploy production (công khai trên gói Hobby). Chỉ commit/push khi người dùng yêu cầu. GitHub Pages đã bỏ (D-020).

## 2. Tiến độ (S1 → S8, xem `docs/IMPLEMENTATION_PLAN.md`)
| Lượt | Nội dung | Trạng thái |
|---|---|---|
| S1 | Tài liệu + 119 ảnh tạm trích từ PDF | ✅ D-014 |
| S2 | Nền tảng: route, font, màu, header, footer, thông báo “Not available yet” | ✅ D-016 |
| S3 | Home pilot | ✅ D-016 |
| S4 | Issues + Roads & Safety | ✅ D-017 |
| S5 | Water, Growth, The Proposal (`/comparison`), The Facts (`/evidence`) | ✅ D-018 |
| **S6** | **Take Action + 3 form ở chế độ mô phỏng** | ✅ D-019 ([reviews/S6](reviews/S6/README.md)) |
| **S7** | Hạ tầng server (Vercel có mật khẩu, Resend) — cần người dùng cho phép riêng | Đang làm: bỏ static export + deploy Vercel (D-020); API 3 form xong (D-022); gửi thật qua Resend tới hộp thư test đã đạt, kể cả gửi lại không trùng. Còn: mật khẩu (chưa cần), quét malware (để sau), duyệt V-014 |
| **S8** | Nghiệm thu (`docs/ACCEPTANCE_CHECKLIST.md`) | Đã chạy; S8-1, S8-2 đã sửa (D-024); chờ quyết định S8-3 → S8-6 (V-015, [reviews/S8](reviews/S8/README.md)) |

## 3. Tài liệu quan trọng
- `agent.md`, `AGENTS.md`, `docs/RULES.md` — quy tắc.
- `docs/APPROVAL_LOG.md` — mọi quyết định D-001 → D-018 và mục hiển thị V-001 → V-011.
- `docs/OPEN_QUESTIONS.md` — 32 câu đã chốt (D-007 → D-012, D-015); 5 mục ◐ chờ người dùng cung cấp trước S7/công bố (OQ-11, 13, 14, 19, 31).
- `docs/sections/<trang>.md` — chữ nguyên văn (khối TXT/IMG), ảnh tham chiếu, hành vi. **S6 dùng `docs/sections/action.md` + `docs/FORMS_SPEC.md`.**
- `docs/DESIGN_SPEC.md` §5 — số đo đã duyệt; `docs/ASSET_REGISTER.md` §1b — 119 ảnh tạm.
- `docs/reviews/S3-home`, `S4-issues`, `S4-roads`, `S5` — hồ sơ duyệt từng lượt (mẫu để làm S6).

## 4. Cách làm mỗi trang (đã dùng từ S3)
1. Đọc `docs/sections/<trang>.md` và ảnh tham chiếu trong `blueprint/references/`.
2. Chữ vào `src/content/<trang>.ts` (nguyên văn); `npm run check:copy` phải qua.
3. Component trong `src/components/<trang>/`, CSS riêng `src/app/<route>/<trang>.css`; ảnh qua `asset(id)` (`src/lib/assets.ts`), icon giao diện dùng lucide-react.
4. Đích chưa có → `NoticeLink` (`src/components/issues/notice-link.tsx`) mở “Not available yet”.
5. Kiểm tra: `npm run lint`, `npm run typecheck`, `npm run build`; so ảnh ở 1536 + 390; không tràn ngang ở 320/390/768/1280/1536.
6. Lập hồ sơ `docs/reviews/S6/README.md` (ảnh, so sánh, danh sách điểm lệch), ghi mục V-xxx “awaiting decision” vào APPROVAL_LOG, tick checkbox trong IMPLEMENTATION_PLAN.
7. Khi người dùng duyệt → ghi D-0xx kèm nguyên văn lời họ, tick “người dùng duyệt”.

## 5. Lưu ý kỹ thuật
- Script: `scripts/extract-assets.mjs` (ảnh tạm), `scripts/build-web-assets.mjs` (WebP, chạy trước dev/build), `scripts/check-copy.mjs`.
- Lưu ý: các commit "round 7–10" trong git log là bản demo cũ; bản làm lại S1–S6 được commit ở D-020.
- Form S6: nằm ở `src/components/action/forms.tsx`; thêm `?simulate=failure` vào URL để xem trạng thái lỗi gửi. `check:copy` đọc cả `docs/FORMS_SPEC.md`.
- S7: API `src/app/api/forms/[form]/route.ts`, kiểm tra dùng chung `src/lib/forms.ts`. Biến môi trường xem `.env.example`; mặc định `FORMS_MODE=simulate` (không gửi). Bật gửi thật: đặt `FORMS_MODE=live`, `RESEND_API_KEY`, `FORMS_SENDER`, `FORMS_RECIPIENT` trên Vercel.
- Ảnh S6 đã có trong `assets/extracted/action/` (12 ảnh: A1–A6).
- Khi `npm run build` lúc server dev đang chạy: **không xóa `.next`** (làm hỏng server dev). Nếu hỏng: dừng server, `rm -rf .next`, chạy lại.
- Form S6: chỉ mô phỏng, dữ liệu giả, không gửi email thật, không lưu dữ liệu; 4 trạng thái theo blueprint (FORMS_SPEC).
- Người dùng nói tiếng Việt, gọi lượt là S1–S8, là người duyệt (D-011), duyệt trên desktop 1536 + mobile 390 (D-012).
