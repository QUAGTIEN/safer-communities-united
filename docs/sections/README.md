# Danh sách tham chiếu theo section

Blueprint yêu cầu, trước khi code, có danh sách theo từng section gồm: trang/section, chữ hiển thị nguyên văn, ảnh được chọn và layout nguồn, hash asset, phạm vi, hành vi, mâu thuẫn còn mở (TXT:11). Mỗi file dưới đây là một trang website.

| File | Trang | Loại tham chiếu |
|---|---|---|
| [home.md](home.md) | Our Community (Home) | 22/10 built page — có visible-text inventory |
| [issues.md](issues.md) | Issues | 22/10 built page — có visible-text inventory |
| [roads.md](roads.md) | Roads & Safety | 22/10 built page — có visible-text inventory |
| [water.md](water.md) | Water & Septic | Later page — chữ chép từ blueprint text + ảnh đã duyệt |
| [growth.md](growth.md) | Growth, Infrastructure & Daily Life | Later page |
| [comparison.md](comparison.md) | The Proposal / Community Plan vs. County Comprehensive Plan | Later page |
| [evidence.md](evidence.md) | The Facts / Evidence & Records | Later page |
| [action.md](action.md) | Take Action | Later page + ba form first version |
| [about.md](about.md) | About | Thiếu nội dung |
| [shared.md](shared.md) | Header, menu mobile, footer, thông báo “Not available yet” | Dùng chung |

## Cách đọc

- **Chữ hiển thị** nằm trong khối ```` ```text ```` và là **nguyên văn**. Khối có nhãn `TXT:a-b` được sinh tự động từ `blueprint/SCU-blueprint-2026-10-22.txt` (không gõ tay). Khối có nhãn `IMG:<file>` là chữ chép từ ảnh tham chiếu — cần đối chiếu lại với ảnh trước khi code (độ tin cậy thấp hơn TXT; không có gói export — D-007).
- Ký hiệu `↵` = ngắt dòng bắt buộc ở desktop (giữ đúng như inventory). Dòng `At 768px / At 390px … also shown / not shown` mô tả chữ đổi theo khổ màn hình.
- Phần “Links and controls” trong inventory là **hành vi**, không phải copy. Các đích ghi `opens the "Not available yet" notice (page not built yet: …)` phản ánh trạng thái working copy ngày 22/10; khi trang đích được xây trong first version, link trỏ tới trang thật (xem [SITE_STRUCTURE](../SITE_STRUCTURE.md) §4).
- Mỗi section có: **Ảnh tham chiếu** (file trong `blueprint/references/`), **Asset cần**, **Hành vi**, **Ghi chú / mâu thuẫn** (mã `OQ-xx` → [OPEN_QUESTIONS](../OPEN_QUESTIONS.md)).
- Chữ trong ảnh minh họa (artwork lettering) giữ nguyên trong ảnh, không dựng lại thành text (TXT:233).
