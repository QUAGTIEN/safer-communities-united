# Coding lượt 3 — Issues overview

Người dùng yêu cầu “oke, hãy bắt đầu code nhé.” sau khi xác nhận phạm vi lượt 3. Đã thay preview `/issues` bằng sáu section I-01…I-06 theo PDF 17–27. Home giữ nội dung lượt 2; bảy route khác tiếp tục là preview. Chưa bắt đầu lượt 4.

## Nội dung và bố cục

- I-01: heading/intro nguyên văn, bốn lựa chọn dẫn tới anchors trong trang.
- I-02: Roads & Safety, ảnh đường đúng slot P019-01, năm vấn đề, closing, source link và CTA tới trang chi tiết.
- I-03: Water & Septic, illustration map giữ đủ legend, ba số liệu và sáu topic cards. Giữ đầy đủ caveat ZIP 33556 / administrative records / 1998–2023 construction-repair records không phải failures / phương pháp 3,087 chưa xác minh. Closing, petition connection và CTA nguyên văn.
- I-04: ba thông điệp hiện hành thay phiên bản bảy cards/impact chain cũ. Map có nhãn “Illustration” và “Schematic service pins, not verified locations.” Giữ closing/CTA; không thêm evidence box chưa xác minh.
- I-05: map minh họa boundary, timeline 2001 / TODAY / 2026 và bốn policy areas. 2026 là thông tin từ hồ sơ có ngày 23/09/2026 theo nhãn nguồn được cung cấp; không tạo cập nhật trực tiếp. CTA tới `/the-proposal#compare-the-two-plans`.
- I-06: sơ đồ HTML/React gồm một nút trung tâm, ba nhánh, các topic/outcome icons và hội tụ. Có chú thích không chứng minh Plan gây harm, nguyên văn trong blueprint; petition connection dẫn riêng `/take-action#petition`.

Content tách tại `src/content/issues.ts`; phần hiển thị là Server Components trong `src/components/issues/issues-page.tsx`; CSS có prefix `issues-` để không ảnh hưởng Home. Chỉ menu và demo dialogs dùng client interaction có sẵn. Một h1, các heading liên kết với section, ordered timeline, mô tả ảnh và links mở hình đầy đủ. Không thêm font, màu nền tảng, motion hoặc services.

## Tài nguyên và nguồn còn giới hạn

17 photo fragments sử dụng đúng manifest hiện hành. Ba vùng map trong screenshot được tách lossless, giữ nguyên pixel, tỷ lệ, nhãn và legend; provenance/boxes/hashes ở `assets/demo-current/visual-fragments.json`. Đây là screenshot illustrations chưa xác minh dữ liệu địa lý, không được gọi là bản đồ GIS gốc. Không vẽ lại hoặc thay nguồn. Ba map gốc PDF 8/9/11 và 43 archive assets/PDF vẫn khớp SHA-256.

Ảnh không bị phóng vượt kích thước pixel nguồn ở DPR 1. Tuy nhiên, tại 1440 px, cả 20 hình của trang chưa đủ ngân sách pixel cho DPR 2; tại 390 px có 17/20 hình chưa đủ. Điều này không có nghĩa ba hình còn lại được chứng nhận sắc nét quang học. Không AI/upscale/sharpen/retouch. Legend nhỏ trên mobile có link mở file đầy đủ.

Connections chỉ dùng các dải photo nhìn thấy P027-02…04 ở đúng tỷ lệ nguồn. Nền aerial toàn cảnh phía sau các cards trong screenshot chưa có file độc lập không bị che; không tái tạo, kéo giãn dải ảnh hoặc lấy cả screenshot có chữ làm nền. Bản demo dùng nền sáng của hệ thống, chưa khớp toàn bộ lớp ảnh nền của selected screenshot; đây là giới hạn fidelity còn mở.

Ba supporting sources trực tiếp cho từng cột Connections vẫn chưa xác minh được, nên mỗi cột có **Source preview**, mở dialog ghi rõ đang chờ xác minh, thay vì giả nguồn hỗ trợ. Những URL nguồn được blueprint cung cấp vẫn giữ nguyên. Lần kiểm tra bằng công cụ web này: hai PDF Plan Hillsborough trả 403, agency-response Drive không truy cập được qua công cụ; không kết luận URL hỏng hoặc nội dung đã được xác thực. Chưa có FLWMI/EHDConst extract/phương pháp 3,087 độc lập.

## Kiểm tra

- Build/lint/typecheck pass; static export vẫn có chín route nội dung.
- Đối chiếu 90 đoạn/nhãn với text trích trực tiếp PDF 17–27; đủ nội dung ở mọi viewport, không đưa editorial instructions hoặc bản cũ lên giao diện.
- Dev và static export đều qua 14 tổ hợp: 320, 390, 560, 768, 1000, 1152, 1440 px × DPR 1/2. Đủ sáu section đúng thứ tự; không tràn ngang. Water data cards xếp dọc trên mobile để giữ nhãn dễ đọc.
- Năm CTA được click tới đúng route/anchor, bốn jump anchors không bị header che; năm source links khớp URL register; ba full-size illustration links trỏ đúng file.
- Ba source-preview dialogs mở/đóng, Escape, focus trap và trả focus hoạt động; menu mobile và skip link hoạt động. Bảy trang preview còn lại và Home vẫn truy cập được.
- HTTP bytes khớp hashes của ba map gốc và ba screenshot illustrations. Bản crop mới kiểm tra pixel equality với vùng ảnh cha.
- Không form/input thu thập dữ liệu, cookie/web storage, request ghi dữ liệu hoặc request ra ngoài origin; không console/runtime errors trong lượt QA cuối. Không CSS animation hoặc transition có thời lượng trong nội dung trang.
- Đã xem screenshot desktop/mobile của sáu section và source dialog; giữ các giới hạn ảnh nêu trên.

Kiểm tra static export phát hiện Next 16.4.2 trên Windows xuất segment paths thành thư mục lồng, trong khi client yêu cầu tên file phân cách bằng dấu chấm. `scripts/finalize-static-export.mjs`, chạy qua `postbuild`, bổ sung chín file RSC đúng tên và đúng byte; không patch framework, thay dependency hoặc thay route. Browser QA static sau sửa không còn 404. Bước này cần giữ khi build trên Windows; trên nền tảng khác script không thêm file.

[Kết quả và số đo](coding-round-03-checks.json). Screenshots QA ở `tmp/round-03-qa/`, không phải assets website. Local preview tại `http://127.0.0.1:3000/issues/`; chưa public deployment. Lượt tiếp theo là **4 — Roads & Safety**.
