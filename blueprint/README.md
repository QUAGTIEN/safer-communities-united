# Blueprint master — SCU, bản ngày 22/10/2026

Đây là **nguồn duy nhất** cho first version (quyết định D-001, [APPROVAL_LOG](../docs/APPROVAL_LOG.md)). Blueprint PDF 88 trang cũ đã bị xóa hoàn toàn theo yêu cầu người dùng ngày 25/10/2026.

| Mục | Giá trị |
|---|---|
| Nguồn | [Google Docs](https://docs.google.com/document/d/1KBvigIh5Dkfmd7PMH4beU-uVkAOtDc2Y/edit) — “SCU blueprint review proposal — Approved working copy references 22 October 2026” |
| Tải lần cuối | 25/10/2026 (byte-identical với bản tải 23/10/2026) |
| `SCU-blueprint-2026-10-22.pdf` | 270 trang, 59.567.517 byte, SHA-256 `03c96c8bf512fc3a9c3d9fbed8bf61315c0ffcf1b36d6d3311929051facd3349` |
| `SCU-blueprint-2026-10-22.txt` | Text export, 2.417 dòng, SHA-256 `42490959d7b3d2d715428c6a9d5b49b022855fc1987256d5c8fdb2bd3096f9a2` |

## Quy tắc sử dụng

- Hai file trên **bất biến**. Không sửa, không lưu đè. Khi người dùng gửi bản mới: tải lại, so hash, ghi khác biệt vào [APPROVAL_LOG](../docs/APPROVAL_LOG.md) trước khi đổi tài liệu dẫn xuất.
- Tham chiếu dòng dùng dạng `TXT:<dòng>` (số dòng của file `.txt`, dòng 1 là tiêu đề). Tham chiếu trang dùng `PDF p.<trang>` (trang vật lý của PDF 270 trang).
- Chữ hiển thị trên website lấy nguyên văn từ blueprint; ghi chú tiếng Việt trong `docs/` không phải copy website.

## `references/` — ảnh tham chiếu trích từ PDF

- 111 ảnh nhúng trong PDF, trích bằng [`scripts/extract-blueprint-references.mjs`](../scripts/extract-blueprint-references.mjs): giải nén FlateDecode và đóng gói PNG, **không resample, không đổi pixel**. `manifest.json` ghi object PDF, kích thước, trang xuất hiện và SHA-256 của pixel và của file PNG.
- Tên file: `p<trang đầu>-obj<object>-<rộng>x<cao>.png`.
- Đây là **ảnh tham chiếu thiết kế** (screenshot đã duyệt), không phải asset website. Text, nút, form, card phải dựng bằng HTML/component.
- **Giới hạn:** Google Docs đã thu nhỏ các ảnh rất cao khi xuất PDF. Ví dụ Roads map area desktop gốc 1536 × 5648 px nhưng PDF chỉ chứa 556 × 2044 px; A6 petition chỉ còn 793 × 2046 px. Các ảnh này không đủ để đo chính xác hoặc đọc chữ nhỏ — cần gói export gốc (xem [OPEN_QUESTIONS](../docs/OPEN_QUESTIONS.md) OQ-01).
- Bảng tra ảnh theo section: [docs/ASSET_REGISTER.md](../docs/ASSET_REGISTER.md) mục “Ảnh tham chiếu”.
