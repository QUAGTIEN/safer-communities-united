# Safer Communities United — Keystone–Odessa

Website first version theo blueprint ngày 22/10/2026. **Trạng thái:** S1–S5 đã xong và được duyệt (D-014, D-016, D-017, D-018) — bộ trình duyệt S5: [docs/reviews/S5](docs/reviews/S5/README.md). Lượt sau là S6 (Take Action + 3 form mô phỏng). Tiến độ chi tiết: [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md).

## Bắt đầu đọc

- [agent.md](agent.md) — quy tắc làm việc.
- [blueprint/](blueprint/README.md) — blueprint master (PDF, text, ảnh tham chiếu).
- [docs/RULES.md](docs/RULES.md), [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md), [docs/OPEN_QUESTIONS.md](docs/OPEN_QUESTIONS.md), [docs/APPROVAL_LOG.md](docs/APPROVAL_LOG.md).
- [docs/sections/](docs/sections/README.md) — chữ hiển thị nguyên văn và tham chiếu từng section.

## Chạy local

Node.js ≥ 20.9.0, npm.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run lint
npm run typecheck
npm run check:copy
```

Từ D-020, site build theo chế độ server và push lên `main` sẽ deploy production trên Vercel (GitHub Pages đã bỏ) — xem [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Công cụ tài liệu

- `npm run dev` / `npm run build` tự chạy `scripts/build-web-assets.mjs` (ảnh WebP vào `public/assets/`); `build` còn chạy `check:copy`.
- `node scripts/expand-blueprint-quotes.mjs` — điền lại mọi khối `<!-- TXT:a-b -->` trong `docs/` bằng đúng dòng của blueprint text.
- `node scripts/extract-assets.mjs [page]` — cắt, phóng và làm rõ asset tạm từ ảnh tham chiếu theo `scripts/asset-crops.json` (D-007); ghi `assets/extracted/manifest.json` và ảnh so sánh trong `assets/extracted/review/`.
- `node scripts/extract-blueprint-references.mjs blueprint/SCU-blueprint-2026-10-22.pdf blueprint/references` — trích lại ảnh tham chiếu từ PDF.

## Cấu trúc

```text
blueprint/        # master bất biến + references/
assets/source/    # asset gốc bất biến (3 bản đồ)
assets/extracted/ # asset tạm trích từ blueprint PDF (D-007), sinh bằng script
docs/             # tài liệu dẫn xuất, sections/, licenses/
scripts/          # công cụ build và tài liệu
src/              # Next.js App Router
```
