# Coding lượt 2 — Home / Our Community

Phạm vi theo yêu cầu “hãy bắt đầu lượt code thứ 2”: thay khung preview tại `/` bằng Home H-01…H-06, theo PDF 7–17 và caveat Water PDF 20 (D-04). Tám trang đích khác tiếp tục là preview; chưa triển khai Issues overview hoặc form thật.

## Nội dung và giao diện

- H-01: hero giữ bố cục text trái/ảnh phải trên desktop, headline/eyebrow/message/problem nguyên văn; mobile xếp lại để đọc đủ. Hai CTA tới Issues và The Facts.
- H-02: THE NIMBY MAP, source và official-map link Figure 3/page 17. Dùng đúng ảnh gốc PDF 8, giữ cả caption trong ảnh, thêm caption HTML từ chính figure và link mở file đầy đủ.
- H-03: VS., tiêu đề/subtitle, bản đồ area PDF 9, các đoạn landscape/conservation, GIS measurement 34.3% (8,025/23,387 acres), ngày/method overlap, bốn source links và các thông điệp đã duyệt.
- H-04: toàn bộ parcel copy/caveat 4,542 / 2,249 / 49.5%, dated snapshot, hai County GIS links và methodology dưới dạng chữ luôn hiển thị. Không tạo accordion hoặc tính lại dữ liệu.
- H-05: bản đồ roads/traffic gốc PDF 11, 19,912 vehicle movements và caveat, nguồn traffic/Van Dyke page 13, roads continuation và KEEP THE LANDSCAPE. CTA dẫn riêng tới evidence, petition và supporter preview.
- H-06: bốn issue cards theo đúng thứ tự, current on-screen copy, ảnh tạm và CTA. Đặt đầy đủ data-scope caveat cạnh nội dung Water; không đổi câu gốc systems thành records. Card Community Plan có current copy và timeline được duyệt.
- Shared header/footer từ lượt 1 được dùng lại. Home có một h1, hierarchy section/headings, alt text và links dùng được bằng bàn phím.
- Content ở `src/content/home.ts`; source URLs lấy nguyên từ register; map/source components tách để dùng lại. Home giữ Server Components, không thêm client state hoặc services.

## Hình ảnh và giới hạn

Ba bản đồ xếp dọc và chiếm toàn bộ chiều rộng nội dung; không slider, side-by-side, crop, filter, re-encode hoặc viewer/GIS tương tác. `next/image` dùng `unoptimized`, src là URL PNG gốc. Mỗi map có link mở file đầy đủ trong tab mới, mô tả bằng chữ/alt text và nội dung giải thích tương ứng. Trên mobile các nhãn nhỏ cần mở bản đầy đủ để đọc.

Hero và ba photo cards dùng crop hiện có. Card thứ tư dùng vùng screenshot P017-05 lossless mới tách, có manifest riêng và nhãn **Illustrative document preview**; không coi đây là bản tài liệu chính thức. Ảnh archive, PDF và 79 photo crops cũ không sửa. Icon trong giao diện được dựng bằng component, không AI retouch phần hình đã làm phẳng.

Đã đo kích thước thực tại 7 viewport, DPR 1/2. Không phóng ảnh vượt chiều rộng pixel nguồn ở 1x. Ở 1440 px hero là 725 CSS px từ nguồn 886 px; card là khoảng 311 CSS px từ nguồn 332–365 px. **Các hình này chưa đủ ngân sách pixel để bảo đảm nét 2x ở desktop.** Ở mobile 390 px hero đủ ngân sách 2x, bốn card chưa đủ. Vẫn giữ phương án ảnh tạm đã chốt, không âm thầm thay nguồn hoặc tuyên bố chất lượng đã được nâng.

## Kiểm tra

- Build, lint, TypeScript: pass trên bản triển khai hiện hành; static export vẫn gồm đúng 9 route nội dung và framework not-found.
- Đối chiếu **45 đoạn/nhãn nội dung** với text trích trực tiếp PDF nguồn; xác nhận chúng xuất hiện đủ trên Home. Không đưa editorial labels, paragraphs cũ hoặc future scope thành copy UI.
- **14 trường hợp viewport/DPR:** 320, 390, 560, 768, 1000, 1152, 1440 px × DPR 1/2. HTTP 200, một h1, thứ tự H-01…H-06, không horizontal overflow, đủ bốn cards.
- Ba ảnh map: đúng src, kích thước native, tỷ lệ, không cover/filter và xếp dọc full-width. HTTP response của cả ba khớp SHA-256 gốc.
- **9 source links** khớp nguyên URL/fragment được cung cấp; không coi đây là lần kiểm chứng mới nội dung nguồn hoặc tái tạo GIS snapshots.
- Các CTA Home điều hướng tới đúng đích: Issues, Evidence, roads continuation, petition, supporter và bốn issue cards. Các target preview vẫn có nhãn.
- Tám route còn lại vẫn trả HTTP 200 và không bị thay bởi Home; kiểm tra menu mobile/Escape, skip link, footer Privacy preview và focus trả về nút mở.
- Không có form/input nhận dữ liệu trên Home; không POST/write requests, request ra ngoài origin, cookie/web storage hoặc console/page errors trong browser QA cuối.
- Đã xem screenshot thực tế desktop/mobile của hero, bản đồ, parcel notes, issue cards và caveat Water. QA dùng Chrome headless/Playwright local, không sửa thuộc tính SSR để ép tải ảnh.

[Kết quả máy và số đo ảnh](coding-round-02-checks.json). [Desktop](../tmp/round-02-qa/home-desktop-viewport.png), [mobile](../tmp/round-02-qa/home-mobile-viewport.png), [area map](../tmp/round-02-qa/area-desktop-viewport.png), [parcel notes](../tmp/round-02-qa/parcels-desktop-viewport.png), [Water card](../tmp/round-02-qa/water-card-mobile-viewport.png). Screenshots là bằng chứng QA, không phải asset website.

Chưa tìm ảnh ngoài, thêm dữ liệu, tạo backend hoặc publish. Những hạn chế nguồn ảnh, hồ sơ tính toán độc lập và kiểm chứng URL vẫn theo hồ sơ đã duyệt. Lượt tiếp theo là **lượt 3 — Issues overview**, chưa tự bắt đầu.
