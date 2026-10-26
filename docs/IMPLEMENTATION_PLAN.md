# Kế hoạch triển khai first version

Trình tự theo checklist blueprint (TXT:7-39) và cổng duyệt (TXT:38). Có 8 lượt code, gọi tên **S1 → S8** (D-006). Mỗi lượt chỉ bắt đầu khi người dùng yêu cầu; không tự chuyển lượt. Một bản chạy được **không** phải là duyệt hình ảnh (TXT:17).

Cách đọc: `[x]` = đã xong, `[ ]` = chưa xong. Một lượt chỉ được tick “Duyệt” khi người dùng đã duyệt và có mã quyết định trong [APPROVAL_LOG](APPROVAL_LOG.md).

## Tổng quan

| | Lượt | Nội dung | Trạng thái | Duyệt |
|---|---|---|---|---|
| [x] | S1 | Tài liệu & đầu vào | Xong 25/10/2026 | G1 — D-014 |
| [x] | S2 | Nền tảng (route, font, màu, header, footer, thông báo) | Xong 25/10/2026 | cùng G3 — D-016 |
| [x] | S3 | Home pilot | Xong 25/10/2026 | G2 + G3 — D-016 |
| [x] | S4 | Issues + Roads & Safety | Xong 26/10/2026 | G4 — D-017 |
| [x] | S5 | Water → Growth → The Proposal/Comparison → The Facts | Xong 26/10/2026 | G4 — D-018 |
| [x] | S6 | Take Action + 3 form ở chế độ mô phỏng | Xong 26/10/2026 | G4 — D-019 |
| [ ] | S7 | Hạ tầng server, preview riêng tư | Đang làm — bỏ static export + push Vercel (D-020) | — |
| [ ] | S8 | Nghiệm thu | Chưa bắt đầu | — |
| — | Sau S8 | Bật gửi thật / công bố | Không phải lượt code | Cần OQ-09, OQ-13, OQ-14, OQ-19, OQ-31 |

## S1 — Tài liệu & đầu vào

| | Việc | Kết quả / căn cứ |
|---|---|---|
| [x] | Bộ tài liệu mới trong `docs/` | Thay toàn bộ tài liệu cũ (D-004) |
| [x] | Blueprint 22/10 + 111 ảnh tham chiếu trong `blueprint/` | D-001 |
| [x] | Trả lời câu hỏi 🔴 | D-007 → D-012 |
| [x] | Trích + làm rõ 119 ảnh tạm từ PDF | D-007; duyệt D-013, D-014 |
| [x] | Mọi câu hỏi còn lại theo đề xuất | D-015 |

## S2 — Nền tảng

| | Việc | Kết quả / căn cứ |
|---|---|---|
| [x] | 8 route theo D-008 (About mở thông báo) | `src/app/**` |
| [x] | Font Merriweather + Inter (Fontsource, OFL) | D-015 |
| [x] | Token màu theo vai trò | DESIGN_SPEC §2 |
| [x] | Header desktop + menu mobile (có Compare the Two Plans), search không tương tác | D-009, D-010 |
| [x] | Footer F1 dùng chung | D-010 |
| [x] | Thông báo “Not available yet” | TXT:64-65 |
| [x] | Ảnh WebP cho web (`build-web-assets`) | 91 MB → 11 MB |
| [x] | Script kiểm tra chữ (`check:copy`) | chạy trước build |

## S3 — Home pilot

| | Việc | Kết quả / căn cứ |
|---|---|---|
| [x] | Opening (nhãn, H1, vision, panel cảnh báo, 2 nút, ảnh biển chào) | home.md |
| [x] | Issue cards (4 card, icon khớp ảnh) | home.md |
| [x] | So sánh 1536 / 390, kiểm tra 768 / 320 | [reviews/S3-home](reviews/S3-home/README.md) |
| [x] | Số đo vào DESIGN_SPEC §5, danh sách lệch M-1 → M-6 | |
| [x] | Người dùng duyệt desktop + mobile + design token | D-016 |

## S4 — Issues + Roads & Safety

| | Việc | Kết quả / căn cứ |
|---|---|---|
| [x] | Issues — Opening + 4 tab (cuộn tới anchor) | issues.md |
| [x] | Issues — Roads & Safety, Water & Septic, Growth & Daily Life | issues.md |
| [x] | Issues — Community Plan (`#community-plan`) + Connected issues | issues.md |
| [x] | Issues — so sánh 1536 / 390, kiểm tra 768 / 320, danh sách lệch | [reviews/S4-issues](reviews/S4-issues/README.md) |
| [x] | Issues — người dùng duyệt | G4 — D-017 |
| [x] | Roads — 01 Street Lighting → 04 Emergency Access | roads.md |
| [x] | Roads — khu ba bản đồ (3 bản đồ gốc) + khung xem bản đồ lớn | roads.md, OQ-30 |
| [x] | Roads — 06 Records & Evidence, 07 Two planning frameworks | roads.md |
| [x] | Roads — so sánh 1536 / 390, kiểm tra 768 / 320, danh sách lệch | [reviews/S4-roads](reviews/S4-roads/README.md) |
| [x] | Roads — người dùng duyệt | G4 — D-017 |

## S5 — Water → Growth → The Proposal/Comparison → The Facts

| | Việc | Kết quả / căn cứ |
|---|---|---|
| [x] | Water & Septic (W6, W3, R2, W1, W2, W4, W5, W7) | water.md |
| [x] | Growth (G1, G2, G4, G5) | growth.md |
| [x] | The Proposal/Comparison (`#proposed-change` + R1, W8, H1, C1) | comparison.md, OQ-29 |
| [x] | The Facts (R3, E1) | evidence.md |
| [x] | Đề xuất bố cục tablet/phone (không có tham chiếu) | TXT:27 |
| [x] | Người dùng duyệt từng trang | G4 — D-018 ([reviews/S5](reviews/S5/README.md)) |

## S6 — Take Action + form mô phỏng

| | Việc | Kết quả / căn cứ |
|---|---|---|
| [x] | Giao diện A1, A2, A4 (panel chia sẻ tĩnh), A5 (panel trích đoạn mẫu) | action.md |
| [x] | Form Supporter, A3 Share Your Story, A6 Petition ở chế độ `simulate` (4 trạng thái, dữ liệu giả) | FORMS_SPEC |
| [ ] | Test validation, bàn phím, bấm trùng | Validation và bấm trùng đã kiểm tra bằng script; còn thử bàn phím bằng tay — [reviews/S6](reviews/S6/README.md) |
| [x] | Người dùng duyệt | G4 — D-019 — [reviews/S6](reviews/S6/README.md) |

## S7 — Hạ tầng server (cần cho phép riêng)

| | Việc | Kết quả / căn cứ |
|---|---|---|
| [x] | Bỏ static export, tắt workflow GitHub Pages | D-015 (OQ-10), D-020 |
| [ ] | Host có mật khẩu (Vercel) | D-015; đã deploy Vercel (D-020); người dùng chưa cần mật khẩu (D-022) |
| [x] | Route handler cho 3 form, Resend ở chế độ test, rate limit + honeypot | D-015 (OQ-11, OQ-15), D-022 — `src/app/api/forms/[form]/route.ts`, `FORMS_MODE=simulate|live`; đính kèm ≤ 4 MB, chưa quét malware |
| [ ] | Gửi thử tới hộp thư test bằng dữ liệu giả | D-015 (OQ-16). 26/10/2026: Supporter, Story (kèm file), Petition gửi thật qua Resend, người dùng xác nhận đã nhận; dữ liệu sai bị chặn 422. Sửa lỗi gửi lại cùng khóa (commit 1f25d78) — chưa thử lại trên site thật |

## S8 — Nghiệm thu

| | Việc | Kết quả / căn cứ |
|---|---|---|
| [ ] | Chạy [ACCEPTANCE_CHECKLIST](ACCEPTANCE_CHECKLIST.md) | Báo cáo kiểm tra |

## Quy tắc mỗi lượt

- Trước khi code một trang: đọc file `docs/sections/<trang>.md`, ảnh tham chiếu, và câu hỏi mở liên quan.
- Chữ hiển thị đưa vào `src/content/<trang>.ts` nguyên văn; script kiểm tra so với `docs/sections` phải qua.
- Asset lấy từ `assets/source/` (gốc) hoặc `assets/extracted/` (tạm, D-007), đều có hash. Không tự cắt thêm ảnh ngoài `scripts/asset-crops.json`.
- Sau mỗi trang: build, lint, typecheck; chụp so sánh ở các khổ cố định; danh sách mismatch; cập nhật APPROVAL_LOG; **tick checkbox trong file này**.
- Từ D-020, push lên `main` kích hoạt Vercel deploy production (không còn GitHub Pages).
