# Kiến trúc kỹ thuật

## 1. Yêu cầu từ blueprint

<!-- TXT:66-67 -->
```text
First-version scope precedence: the approved A3 and A6 email-only specifications supersede earlier instructions that keep those two forms non-editable or demo-only. The supporter exception remains in force. Sharing uses a static preview only. This blueprint update does not activate data collection, create accounts, configure credentials, send emails or deploy a site; the required provider, privacy, signature and launch checks still apply.
Current build foundation: use reusable semantic components with editable content and separate image assets. The supplied HTML layouts are static visual references, not verified responsive application code; rebuild links, controls and server behavior explicitly. Use stable routes and the Roads & Safety map area. Choose a platform supporting the three approved email-only forms without adding a database, portal or durable outbox.
```

- Component ngữ nghĩa dùng lại được, chữ chỉnh sửa được, asset tách riêng; HTML layout trong gói export chỉ là tham chiếu tĩnh, phải dựng lại link/điều khiển/hành vi server (TXT:66).
- Nền tảng phải hỗ trợ ba form gửi email phía server mà **không** thêm database, portal hay outbox bền (TXT:66).
- Build đầu tiên là **local click-through** / private preview; blueprint không cho phép deploy hay công bố (TXT:36, TXT:65).

## 2. Hiện trạng repo (sau khi dọn ngày 25/10/2026)

| Phần | Trạng thái |
|---|---|
| Next.js 16.4.2 App Router, React 19.3.1, TypeScript, Tailwind 4.3.3, ESLint | Giữ |
| `src/app/layout.tsx` | Font Inter + Merriweather (local), skip link, header, footer F1, provider thông báo “Not available yet”, hiệu ứng chuyển trang (S2) |
| `src/components/layout/` | `site-header` (menu desktop + menu mobile dạng disclosure có “Compare the Two Plans”, search không tương tác), `site-footer` (F1), `wordmark` (ảnh), `social-icons`, `nav-link` (link, hoặc nút mở thông báo), `not-available` (thông báo dùng chung), `page-transition` (S2) |
| `src/components/ui/{button,card}.tsx` (shadcn/Radix) | Giữ, đổi sang token mới; `dialog.tsx` và `container.tsx` đã bỏ ở S2 (thông báo dùng Radix Dialog trực tiếp) |
| `src/content/site.ts` | Route (D-008), menu, header, footer, thông báo, nhãn truy cập (`a11y`, không hiển thị) |
| `src/app/page.tsx` + `src/app/home.css` + `src/components/home/` + `src/content/home.ts` | Home pilot (S3): Opening, Issue cards |
| `src/app/issues/` + `src/components/issues/` + `src/content/issues.ts`; `src/app/issues/roads-safety/` + `src/components/roads/` + `src/content/roads.ts` | Trang Issues và Roads & Safety (S4); khung xem bản đồ `map-viewer.tsx` |
| `src/app/**/page.tsx` | Các route còn trống (Water, Growth, Evidence, Comparison, Take Action): `/`, `/issues`, 3 trang con Issues, `/evidence`, `/comparison`, `/take-action`; nội dung từ S3. About chưa có nội dung nên menu About mở thông báo (D-015 OQ-20), chưa tạo route `/about` |
| `src/app/globals.css` | Token màu theo vai trò (DESIGN_SPEC §2), style header/footer/thông báo (S2) |
| Font | Inter + Merriweather (Fontsource, OFL 1.1); Source Serif 4 đã gỡ (S2) |
| `next.config.ts` | Build server cho Vercel (D-020): bỏ `output: "export"` và `basePath` |
| `.github/workflows/pages.yml` | Đã xóa (D-020); Vercel deploy khi push `main` |
| `scripts/finalize-static-export.mjs` | Đã xóa cùng static export (D-020) |
| `scripts/extract-blueprint-references.mjs`, `scripts/expand-blueprint-quotes.mjs` | Công cụ tài liệu |
| `scripts/extract-assets.mjs` + `scripts/asset-crops.json` | Trích asset tạm từ ảnh tham chiếu (D-007); dùng `sharp` (devDependency) |
| `scripts/build-web-assets.mjs` | Chạy trước `dev`/`build`: mã hóa `assets/extracted` sang WebP vào `public/assets/` (91 MB → 11 MB), chép nguyên byte 3 bản đồ, sinh `src/content/assets.generated.json` (cả hai không commit) |
| `scripts/check-copy.mjs` (`npm run check:copy`) | Chạy trước `build`: mọi chuỗi hiển thị trong `src/content` phải có nguyên văn trong khối trích dẫn của `docs/sections` |

## 3. Hướng đề xuất (chờ duyệt — OQ-10, OQ-11, OQ-12, OQ-15)

- **Hosting:** chuyển từ build tĩnh sang Next.js chạy server (ví dụ Vercel). Bỏ `output: "export"`, bỏ hoặc tắt workflow GitHub Pages. Preview có bảo vệ truy cập (mật khẩu / deployment protection) vì có ảnh chưa có quyền dùng và dữ liệu mẫu “Fake data”.
- **Gửi form:** Route Handler (hoặc Server Action) cho từng form; validate lại phía server; người nhận cố định đọc từ biến môi trường server; không lưu dữ liệu.
- **Email provider:** chọn nhà cung cấp hỗ trợ idempotency key và file đính kèm (ví dụ Resend). Trả email ID để xác nhận chấp nhận (TXT:2389). Sender domain đã xác thực.
- **File đính kèm A3:** giới hạn kích thước/số file theo provider và hosting (giới hạn body của serverless function), quét malware bằng dịch vụ riêng tư trước khi gửi.
- **Chống lạm dụng:** giới hạn tần suất theo IP, honeypot ẩn; CAPTCHA hiển thị là thay đổi giao diện cần duyệt.
- **Chế độ chạy:** biến môi trường `FORMS_MODE=simulate|live`. `simulate` (mặc định) mô phỏng bốn trạng thái với dữ liệu giả, không gọi provider; `live` chỉ bật khi người dùng cho phép và các điều kiện ở [FORMS_SPEC](FORMS_SPEC.md) §0 đã xong.
- **Không thêm:** database, CMS, auth, admin, analytics, lưu trữ trình duyệt dữ liệu cá nhân.

## 4. Tổ chức code dự kiến

```text
src/
  app/                 # route theo SITE_STRUCTURE
    api/forms/…        # (sau khi bỏ static export) handler cho 3 form
  components/
    layout/            # header, footer (theo biến thể), wordmark
    ui/                # primitives (button, dialog, field…)
    sections/<page>/   # component theo section ID trong docs/sections
    forms/             # supporter, story, petition (client) + trạng thái
  content/<page>.ts    # chữ hiển thị nguyên văn, sinh/kiểm từ docs/sections
  lib/                 # validation dùng chung client/server, email
assets/source/         # asset gốc bất biến (+ hash)
assets/extracted/      # asset tạm trích từ PDF (D-007) + manifest
```

Kiểm tra chữ tự động: `npm run check:copy` (S2) — bỏ qua giá trị không hiển thị (`href`, `a11y`…).
