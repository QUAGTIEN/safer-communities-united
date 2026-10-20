# Coding lượt 4 — Roads & Safety

Người dùng yêu cầu “OKE, HÃY BẮT ĐẦU CODE NHÉ” sau khi xác nhận phạm vi lượt 4 và phân biệt Roads & Safety với The Facts. Đã thay preview `/issues/roads-safety` bằng tám section R-01…R-08 theo PDF 28–41. Home/Issues giữ nội dung đã dựng; sáu route khác vẫn là labelled previews. Lượt 5 chưa tự bắt đầu.

## Nội dung và giao diện

- **R-01:** heading, hai đoạn giới thiệu, bốn nhóm vấn đề, CTA tới `#street-lighting`, breadcrumb về Issues. Hero chưa có file ảnh độc lập được chọn; dùng panel “Demo preview / Hero image not supplied.” theo D-02, không tự chọn ảnh khác.
- **R-02:** Street Lighting theo selected design/current copy: text trái/ảnh đêm phải, ba cards Community Plan Rule / Actual Safety Needs / Why It Matters; giữ nguyên đoạn FHWA và source note bên dưới. Excerpt trong artwork được giữ và ghi rõ chưa phải policy quotation đã xác minh.
- **R-03:** Gunn Highway với road photo và illustration map giữ đầy đủ legend/scale/labels; ba cards về rule, constrained-road table và impact. Dữ liệu 19,912 AADT, hai làn, daily/peak-direction LOS E đối với chuẩn D giữ nguyên và gắn đúng đoạn Pasco County line → Van Dyke Road. Policy-table đoạn South Mobley Road → Pasco County được giữ riêng, không nhập hai phạm vi thành một.
- **R-04:** Walking/Biking/Crossings theo bản đã chọn, đủ intro, rule, bốn actual conditions, impact, closing, guidance và nguồn County/FHWA. Nhãn Illustration trong ảnh không bị xóa; thêm caption HTML để vẫn đọc được khi ảnh thu nhỏ.
- **R-05:** Emergency Access với ảnh hiện có, rule, năm factors, impact và closing; giữ design excerpt với nhãn chưa xác minh. Không tạo response-time dataset hoặc khẳng định độ trễ đo được; có thông báo demo chưa được cung cấp số đo response-time/delay.
- **R-06:** nội dung NIMBY Map vs Actual Map, hai description blocks, key message và liên kết `/#map-comparison`. Theo lựa chọn đã duyệt, không nhân đôi bản đồ; ba map gốc và multi-panel reference assets vẫn nguyên vẹn. Không thêm GIS/viewer tương tác.
- **R-07:** năm evidence cards theo thứ tự Safety / Traffic / Maps / Public Records / Community Plan. Finding/agency/date của Safety được ghi rõ unverified example; original-document action mở preview. Map card ghi rõ illustration/metadata unverified; original-map action cũng mở preview khi thiếu nguồn gốc. Các thumbnail tài liệu giữ đúng crop và nhãn minh họa. Traffic/public-record/plan links dùng đúng URL được cung cấp. Giữ nguyên Van Dyke study scope, 17,500 AADT của Gunn Highway → Suncoast north ramp, hai làn, LOS E/D và petition CTA. Không tự thêm 327/12 vì các số đó không hiển thị trong selected artwork hiện có.
- **R-08:** summary hai cột, toàn bộ năm nhóm local rules và năm nhóm countywide policies, đúng current on-screen copy phía County. Hai cover là illustrative screenshot fragments, không coi là bìa tài liệu chính thức; caption hiện trước ảnh. Mobility Policy 5.1.4 và source notes giữ bên dưới. CTA tới `/the-proposal#roads-comparison`, không tạo trang Comparison riêng.

Các safety blocks có điều hướng bốn anchors giống selected designs. Nội dung ở `src/content/roads.ts`; Server Components tại `src/components/roads/roads-page.tsx`; CSS có prefix `roads-`. Dùng shared header/footer, Button, SourceLink và DemoPreview hiện hành; không thay layout của Home/Issues hoặc thêm font/palette/motion.

## Tài nguyên và giới hạn còn mở

Trang dùng sáu photo crops có sẵn, hai vùng map screenshot mới và bốn document/cover fragments mới. Crop mới giữ nguyên pixel/tỷ lệ nguồn, không phục hồi nội dung bị che, sửa màu, AI, upscale hoặc sharpen. `assets/demo-current/visual-fragments.json` và `document-fragments.json` ghi parent/box/dimensions/hash và trạng thái chưa xác minh. R08 fragments giữ nguyên cả cover + photo composition đã có trong selected image; không vẽ bìa hoặc ghép lại hai partial-photo slots P041-01/02 thành ảnh đầy đủ.

Ba map gốc và 43 archive assets/PDF giữ đúng SHA-256. Map route/schematic trong screenshot không được gọi là verified GIS hoặc nguyên bản của ba map gốc. Trên mobile, route map có liên kết mở file đầy đủ; legend thu nhỏ vẫn cần xem bản đầy đủ để đọc.

Không ảnh nào phóng vượt kích thước pixel nguồn ở DPR 1. Tại 1440 px, 12/12 hình thiếu ngân sách pixel cho DPR 2; tại 390 px, 8/12 hình thiếu. Bốn ảnh safety lớn đủ ngân sách pixel ở mobile 390/DPR 2 không phải chứng nhận độ nét quang học. Hero thiếu file phù hợp và nguồn ảnh lớn hơn vẫn là việc cần bổ sung.

FHWA Lighting/Walkways mở được qua công cụ web, là hướng dẫn kỹ thuật chung chứ không xác minh local crash/response-time findings. Community Plan, County compilation và Van Dyke packet trả 403 qua công cụ; ArcGIS query không truy cập được qua công cụ. Giữ URL đúng register; không kết luận link hỏng hoặc các claim/dates đã được kiểm chứng độc lập. Crash dataset, original map record, hồ sơ thumbnail và policy excerpts còn thiếu nguồn gốc đã xác minh; labelled previews không biến chúng thành bằng chứng thật.

## Kiểm tra

- `npm run build`, lint và typecheck: pass. Static export vẫn chín route nội dung; Windows RSC postbuild normalization từ lượt 3 tiếp tục hoạt động, thêm chín file đúng tên/đúng byte.
- **134 đoạn/nhãn:** 120 khớp text trích trực tiếp PDF 28–41; 14 khớp nội dung đã trích từ selected Records & Evidence screenshot, có provenance riêng. Không coi 14 mục trong artwork là dữ liệu đã được xác minh.
- Dev và static export đều qua **14 tổ hợp**: 320/390/560/768/1000/1152/1440 CSS px × DPR 1/2. Một h1, tám section đúng thứ tự, 12 info cards, năm evidence cards, hai comparison panels, không horizontal overflow.
- Bốn anchor destinations và 20 navigation links có đích hợp lệ; bảy lần click CTA/đường vào: hero anchor, Home maps, petition, detailed comparison, breadcrumb, từ Issues và từ Home. Các target chưa triển khai vẫn hiện labelled previews.
- 17 source links khớp nguyên URL register; không click ra ngoài để tải tài nguyên trong browser QA. Hai evidence preview dialogs hoạt động, Escape, focus trap và trả focus; menu mobile và skip link hoạt động.
- Sáu route còn lại vẫn preview; Home/Issues còn đủ sáu section mỗi trang.
- HTTP hash kiểm tra 15 file: 12 hình đang dùng và ba map gốc. Sáu crop mới đã đối chiếu pixel equality với vùng ảnh cha; ảnh render giữ tỷ lệ, không cover/crop/filter hoặc phóng quá nguồn.
- Không form/input, cookie/web storage, request ghi dữ liệu hoặc request ra ngoài origin; không console/runtime errors hay response 404 trong lượt QA cuối. Không CSS animation hoặc transition có thời lượng trong nội dung trang.
- Đã xem screenshots desktop/mobile của hero, bốn safety sections, maps, evidence, comparison và source dialog; giữ các giới hạn nguồn đã nêu.

[Kết quả kiểm tra và ngân sách pixel](coding-round-04-checks.json). Screenshots ở `tmp/round-04-qa/` là QA, không phải assets website. Local preview: `http://127.0.0.1:3000/issues/roads-safety/`. Chưa public deployment, thu thập dữ liệu hoặc bắt đầu lượt 5 — Water & Septic.
