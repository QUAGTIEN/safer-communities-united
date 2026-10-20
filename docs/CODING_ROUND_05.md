# Coding lượt 5 — Water & Septic

Theo yêu cầu “oke, hãy bắt đầu lượt code thứ 5”, đã thay preview `/issues/water-septic` bằng W-01…W-09 theo PDF 42–53 và data-scope caveat PDF 20. Home, Issues và Roads giữ nội dung đã dựng; năm route còn lại vẫn là labelled previews. Chưa bắt đầu lượt 6.

## Nội dung đã triển khai

- **W-01:** heading/intro/CTA xuống `#septic-scale`, visible hero landscape với boundary overlay, ba sơ đồ septic/groundwater/private wells và current on-screen copy. Chỉ dùng vùng cảnh nhìn thấy không bị chữ che; không phục hồi background phía sau chữ. Sáu topic links dẫn tới nội dung có thật trong trang.
- **W-02:** 7,191 total administrative records, 1,626 Known / 1,210 Likely / 251 Somewhat Likely; 3,087 thuộc ba nhóm phân loại của ZIP 33556. Map giữ đầy đủ legend/boundary/scale, gắn nhãn illustration. Giữ toàn bộ caveat phương pháp 3,087 chưa xác minh, không coi đây là đếm systems trong Plan boundary.
- **W-03:** 806 EHDConst–Repair records gồm 738 / 41 / 27, thời gian 1998–2023; map, date range và closing đúng bản. Bar chart được giữ nguyên từ artwork với axes/year labels, không suy ra annual data hoặc dựng lại series. Caption ghi annual inputs unverified, not failure counts; caveat đầy đủ luôn hiển thị.
- **W-04:** đúng hai minh họa connected-water được chọn: system overview và conceptual cutaway. Bảo toàn labels/callouts/arrows; cả hai có caption “Conceptual illustration; not a documented contamination event.” và full-size link. Giữ body/current copy, question, petition connection và nguồn EPA; không thêm interactive layer map.
- **W-05:** bốn bước theo bản đã duyệt, policy 4.3.7, petition CTA và link exclusions. Câu “Some connection routes remain available, including the documented public-health-hazard route.” luôn hiển thị; không nói tất cả utility connections bị cấm.
- **W-06:** nguồn nghiên cứu dài và qualifications được đặt phía trên panel: pre-existing wellhead carveout, không mọi exclusion bắt đầu năm 2024, health-hazard route còn tồn tại, agency comments ủng hộ rural utility reforms chứ không phải SCU/retirement. Panel dùng đúng concise copy PDF 51 “LEFT OUT. BY CHOICE.”, hai cards, hai source links và closing; không tái sử dụng generic split-screen cũ hoặc biến editorial instructions thành UI copy.
- **W-07:** hai cột Community Plan/County, năm ý mỗi bên đúng bảng PDF, intro theo selected artwork; giữ các photo strips nguyên tỷ lệ. CTA tới `/the-proposal#water-comparison`, không triển khai Comparison detail sớm.
- **W-08:** năm evidence cards, findings/source/date trích từ artwork và ghi rõ unverified examples. Mỗi card có “View Original Document” mở labelled preview khi chưa có original đã xác minh; hai link policy được cung cấp nằm riêng dưới grid, không dùng chúng làm nguồn xác nhận numeric septic/repair findings. Không tạo date/source/finding mới; “latest available” trong artwork không được coi là xác nhận độ cập nhật hiện tại.
- **W-09:** heading, continuation copy, photo fragment nhìn thấy và CTA tới Growth & Daily Life preview.

Content ở `src/content/water.ts`; Server Components ở `src/components/water/water-page.tsx`; CSS có prefix `water-`. Dùng lại shared header/footer, Button, SourceLink và DemoPreview; giữ Inter/Source Serif 4, sáu màu nền tảng và không thêm motion. Toàn bộ chữ UI là HTML; không dùng screenshot cả trang thay giao diện.

## Tài nguyên, nguồn và giới hạn

Trang dùng 22 hình: 10 photo crops có sẵn, 10 visual fragments mới và hai document thumbnails mới. Manifests ghi parent/box/dimensions/hash, chart-input status và hero partial-scene. Mỗi crop mới được kiểm tra pixel equality với vùng ảnh cha; không resize/retouch/recolor/upscale/AI/sharpen. Archive 43 assets/PDF và ba map gốc vẫn đúng SHA-256.

Hero dùng phần cảnh bên phải hiện có, không khẳng định đây là file panorama đầy đủ; bố cục ảnh riêng bên cạnh copy thay lớp nền panorama liên tục có phần bị chữ che. Next-issue photo và comparison strips cũng chỉ là phần cảnh nhìn thấy; không kéo giãn hoặc phục hồi phần che. Các map screenshots và conceptual diagrams không phải GIS/contamination event đã xác minh. Chữ/legend nhỏ trên mobile có full-size links.

Không hình nào bị phóng vượt kích thước nguồn ở DPR 1. Tại 1440 px, 21/22 hình chưa đủ ngân sách pixel cho DPR 2; tại 390 px có 16/22 hình thiếu. Đủ pixel không phải chứng nhận optical sharpness. Việc dùng ảnh tạm đã duyệt không khắc phục giới hạn này.

EPA mở được qua công cụ web và là nguồn hướng dẫn chung, không chứng minh local contamination hoặc local record counts. County policy PDF trả 403 qua công cụ; staff-report SharePoint không truy cập được qua công cụ. Board minutes/agency comments và findings địa phương chưa được kiểm chứng độc lập trong lượt này; URL giữ đúng register. FLWMI/EHDConst raw datasets, calculation method 3,087, annual chart inputs và một số original records/maps vẫn còn thiếu. Không thay policy PDF vào chỗ numeric datasets, không tự tạo source URLs hoặc số liệu.

## Kiểm tra

- Build/lint/typecheck pass; static export vẫn chín route. Windows RSC normalization từ lượt 3 tiếp tục chạy đúng.
- **113 đoạn/nhãn:** 96 khớp text/bảng trích trực tiếp PDF; 17 khớp selected-artwork transcription. PDF 51–52 được trích theo table cells để tránh trộn hai cột khi kiểm tra. [Transcription](WATER_ARTWORK_TRANSCRIPT.md) ghi provenance, không xác thực findings/metadata.
- Dev và static export đều qua **14 tổ hợp**: 320/390/560/768/1000/1152/1440 CSS px × DPR 1/2. Một h1, chín section đúng thứ tự, năm evidence cards, hai comparison panels, đủ copy/caveats, không tràn ngang.
- Sáu unique anchors và 30 topic links có đích hợp lệ; tám lần click CTA/đường vào gồm hero, hai petition links, comparison, next issue, breadcrumb và entry từ Home/Issues. Năm route khác vẫn có nhãn preview; Home/Issues/Roads giữ đủ 6/6/8 sections.
- 11 source links khớp URL register; năm original-document previews hoạt động, Escape/focus trap/focus return đúng; menu mobile và skip link hoạt động.
- HTTP bytes của 25 ảnh khớp manifest: 22 ảnh dùng trên trang và ba map gốc. Giữ tỷ lệ; không cover/crop/filter trong browser; không phóng vượt nguồn.
- Không form/input, cookie/web storage, write requests hoặc request ngoài origin. Lượt QA cuối không có console/runtime errors, HTTP 4xx/5xx hoặc connection-refused errors. Request huỷ khi chuyển trang nhanh không bị coi là lỗi nội dung.
- Lượt static QA đầu gặp lỗi kết nối ngắt quãng trên Python test server mặc định. Chạy lại cùng bản build bằng cùng static handler với accept queue 128 đã qua toàn bộ kiểm tra; không sửa application để che lỗi. Máy chủ này chỉ là QA local, không được đưa vào app.
- Đã xem screenshots desktop/mobile của hero, maps/chart, connected-water, options, Core Conflict, comparison, evidence và next issue. Không triển khai GIS/layer controls/backend hoặc public deployment.

[Kết quả và số đo ảnh](coding-round-05-checks.json). Screenshots tại `tmp/round-05-qa/` chỉ là QA. Local preview: `http://127.0.0.1:3000/issues/water-septic/`. Lượt tiếp theo: **6 — Growth & Daily Life**, chưa tự bắt đầu.
