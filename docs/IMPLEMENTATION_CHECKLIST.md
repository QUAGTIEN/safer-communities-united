# Implementation checklist — First Clickable Demo

## Trạng thái và tài liệu nguồn

**Lượt 1–8 đã hoàn thành trong phạm vi demo.** Xem [lượt 8 và giới hạn](CODING_ROUND_08.md); báo cáo các lượt trước vẫn giữ. The Proposal có intro preview và bốn Comparison sections. Take Action/About còn preview; lượt 9 chưa bắt đầu. Chỉ cập nhật static demo GitHub Pages theo yêu cầu đã có, không backend/data collection.

Người dùng đã xác nhận kết thúc kiểm duyệt; [kế hoạch 11 lượt coding](CODING_PLAN.md) là thứ tự thực hiện hiện hành. Các trạng thái “chờ duyệt” trong phần ghi lịch sử lập hồ sơ dưới đây mô tả thời điểm tạo tài liệu, không mở lại phần đã duyệt. Dùng ảnh tạm theo quyết định mới nhất; tìm ảnh thay để sau, chất lượng vẫn phải kiểm tra khi render.

- [Master Rules nguyên văn](BLUEPRINT_RULES.md).
- [Quy tắc làm việc](../agent.md).
- [Cấu trúc và sổ phần thiếu](../structure.md).
- [Blueprint chính thức](<../Copy of blueprint SAFER COMMUNITIES UNITED.docx.pdf>).
- [Hướng dẫn kỹ thuật và nguồn chính thức](TECHNICAL_GUIDELINES.md).
- [Danh mục asset trích xuất](../assets/README.md) và [manifest](../assets/blueprint/manifest.json).
- [Hồ sơ duyệt nguồn/copy/asset từng section](SECTION_REVIEW.md), [bản có ảnh](SECTION_REVIEW.html), [source register](SOURCE_REGISTER.md).
- [Quyết định hiện hành](PROJECT_DECISIONS.md), [bản ghi duyệt](project-approvals.json), [inventory ảnh cần thay/giữ](IMAGE_REPLACEMENT_AUDIT.md).

`[x]`: đã thực hiện trong bước lập tài liệu. `[ ]`: còn mở/chưa triển khai. Các bước production không nằm trong checklist thực hiện demo.

## 1. Phân tích và lập tài liệu

- [x] Đọc toàn bộ 88 trang PDF và đối chiếu selected visuals trong bước phân tích.
- [x] Đọc đầy đủ Master Rules người dùng gửi.
- [x] Lưu prompt nguyên văn trong docs/BLUEPRINT_RULES.md.
- [x] Tạo agent.md với quy tắc nội dung, hình ảnh, UI, điều hướng và giới hạn demo.
- [x] Tạo structure.md: content groups, navigation, từng PAGE/section, selected visual, CTA, future scope và GAP register.
- [x] Phân biệt 7 nhóm nội dung, 6 menu, 8 đặc tả PAGE; không chốt số URL bằng PAGE 09.
- [x] Ghi nhận PAGE 07 vắng, Proposed Change và About thiếu spec riêng.
- [x] Ghi nhận ảnh/text trong tmp/pdfs là bản trung gian, không phải bộ asset triển khai đã duyệt.
- [x] Ghi nhận Next.js + React là công nghệ chính người dùng đã xác nhận; đọc tài liệu chính thức Next.js, Tailwind CSS và shadcn/ui, lưu hướng dẫn áp dụng.
- [x] Theo yêu cầu trích ảnh: xuất 43 ảnh khác nhau từ 47 lần xuất hiện vào assets/blueprint; phân loại 3 maps / 3 layout previews / 37 UI references; lưu JSON/CSV, trang nguồn, dimensions và hashes.
- [x] Đối chiếu pixels/kích thước/mode của 47 lần xuất hiện; giữ nguyên 10 JPEG bitstreams, PNG lossless, ICC profile riêng; PDF nguồn không đổi.
- [x] Tạo contact sheets kiểm kê riêng; ghi rõ các ảnh UI composite chưa phải bộ photo/logo/illustration độc lập để dùng thay component.
- [x] Tạo hồ sơ 57 hạng mục/section với trích đoạn English nguyên văn, ảnh tham chiếu, source IDs, CTA targets và phần thiếu; toàn bộ ở trạng thái chờ người dùng duyệt.
- [x] Trích 33 hyperlink annotations thành 21 URL khác nhau kèm nhãn và trang PDF; phân biệt URL có trong blueprint với nguồn đã được mở/kiểm chứng nội dung.
- [x] Kiểm tra online các nguồn chính: FHWA Lighting/Walkways và EPA mở được; ba PDF Plan Hillsborough trả 403 qua công cụ web, không tự thay URL hoặc kết luận link hỏng. Các link khác được ghi chưa mở kiểm chứng.
- [x] Người dùng duyệt phần còn lại: D-01/D-02/D-04/D-05/D-06 và nội dung/bố cục/điều hướng ngoài ngoại lệ ảnh. D-03 được thay bằng chỉ dẫn cho phép nguồn ảnh khác cho một số photo trong screenshot, map gốc giữ nguyên tuyệt đối.
- [x] Rà 43 file ảnh, lập 121 vị trí/khung: 80 photo slots / 29 brief chủ đề; 12 document previews cần tài liệu thật; giữ riêng maps/illustrations/mixed composites/UI.
- [x] Lưu checksum ba map gốc và đối chiếu toàn bộ 43 ảnh/PDF không thay đổi; chưa tìm/tải/thay ảnh.
- [ ] Tìm/chọn nguồn ảnh thực tế cho các slot được phép khi được yêu cầu; ghi source/provenance và lưu file mới riêng. Chưa coi brief là ảnh đã chọn.
- [x] Người dùng yêu cầu bắt đầu lượt coding đầu tiên; Foundation đã hoàn thành.

## 2. Kiểm kê nguồn trước khi code

- [x] Kiểm tra workspace trước khởi tạo; chưa có app/lockfile cũ, giữ nguyên tài liệu và asset.
- [x] Chốt npm/package-lock; Next 16.4.2, React 19.3.1, Tailwind 4.3.3; đọc tài liệu chính thức và guide trong package Next đã cài.
- [x] Chuẩn bị content manifest cho 57 source sections cùng copy excerpts nguyên văn, provenance, selected asset/source IDs; chưa render thẳng editorial labels làm copy UI.
- [ ] Kiểm kê logo, ảnh, maps, infographic, font files và source documents; phân loại screenshot UI vs actual image asset.
- [ ] Đối chiếu ảnh nhúng với original; đánh giá độ phân giải, tỷ lệ, label/legend/source và phiên bản đã chọn.
- [ ] Giữ bản gốc và map bất biến; không regenerate/vẽ lại. Nguồn ảnh ngoài chỉ áp dụng photo slots theo quy tắc mới, không thay maps/diagrams/official records bằng stock.
- [ ] Kiểm tra source hyperlinks/annotations và file được cung cấp; chỉ dùng đích thật, không suy URL từ tên tài liệu.
- [ ] Kiểm tra full-comparison destinations, petition file riêng và nguồn Van Dyke/County/FHWA/EPA đã được cung cấp.
- [ ] Cập nhật GAP-01…GAP-10 với phần thiếu, trang PDF, ảnh hưởng và phương án cần xác nhận.
- [ ] Chốt kế hoạch route/anchor dựa trên nguồn và yêu cầu đã rõ; không thêm top-level Comparison.
- [ ] Xác nhận nội dung/ảnh còn thiếu của Proposed Change, About và các footer destinations trước khi hoàn thiện phần đó.

## 3. Kế hoạch triển khai từng phần — chỉ sau yêu cầu bắt đầu

### 3.1. Foundation (PDF 1–6)

- [x] Thiết lập sáu màu, Inter/Source Serif 4 local, spacing/reading width và button/card nền tảng; kiểm tra computed styles/font load.
- [x] Header nền sáng luôn ở trên khi cuộn bằng sticky, sáu menu đúng nhãn, Get Involved → Action.
- [x] Mobile menu mở/đóng/Escape; mở trong luồng, đẩy main xuống.
- [x] Footer navy đúng slogan và ba nhóm Foundation; sáu đích thiếu mở labelled preview.
- [x] Shared layout/header/footer/button/card/container/preview; 9 route shells.
- [x] Content/assets tách khỏi presentation; sync kiểm tra SHA-256 và copy đúng byte; chưa backend/API/GIS.
- [x] Chỉ header/menu và modal là client boundary; page/layout tĩnh là Server Components; không form service/Server Actions/Route Handlers.
- [x] Tailwind/shadcn tokens đúng blueprint; chỉ Button/Card/Dialog Radix, không template/theme/animation mới.

### 3.2. Home (PDF 6–17)

- [x] Dựng hero theo selected design và exact English copy; ảnh tạm, hai CTA hoạt động.
- [x] Home 2A ngay sau introduction và trước Main Issues; kiểm tra thứ tự H-01…H-06.
- [x] Ba map gốc đúng src/hash, dọc full-width; giữ native dimensions/tỷ lệ/legend/source, không slider/cover/filter; có link full-size.
- [x] GIS/parcel/traffic notes, ngày, overlap/data-scope caveats và plain-text methodology đầy đủ; alt text và phần giải thích tương ứng.
- [x] Evidence / petition / supporter / roads continuation tới đúng đích; trang đích còn preview theo lượt.
- [x] Bốn issue cards đúng thứ tự/current copy; Water caveat theo D-04 và document illustration có nhãn, liên kết đúng.
- [x] Build/lint/typecheck, 45 đoạn/nhãn copy, 7 viewport × DPR 1/2, 9 source links, 10 CTA và 8 route previews đạt; ảnh nguồn chưa được coi là đã đủ sắc nét Retina.

### 3.3. Issues (PDF 17–27)

- [x] Intro và bốn groups theo thứ tự blueprint.
- [x] Group Water giữ phạm vi ZIP/records/repair caveat.
- [x] Group Everyday Needs dùng ba message mới, schematic map labels; không bảy cards/impact chain cũ.
- [x] Outdated Plan timeline đúng 2001 / TODAY / 2026; dated agency status.
- [x] Connections diagram đúng current copy; không trình bày như proof of harm; supporting sources chưa xác minh dùng labelled previews theo D-02/D-05.
- [ ] Nguồn hỗ trợ trực tiếp cho ba cột Connections, FLWMI/EHDConst extract và phương pháp 3,087: còn thiếu, không coi đã xác minh.
- [ ] Nền aerial Connections độc lập và nguồn ảnh đủ nét DPR 2: còn thiếu; xem báo cáo lượt 3.

### 3.4. Roads & Safety (PDF 28–41)

- [x] Hero copy/CTA và bốn safety blocks theo selected designs/current copy; thiếu hero image dùng labelled preview theo D-02.
- [x] Gunn/Van Dyke AADT, LOS, đoạn đường và source labels đúng nội dung được cung cấp; không coi đây là xác minh dataset độc lập.
- [x] Map comparison dẫn Home 2A; giữ multi-panel previews và map gốc nguyên vẹn.
- [x] Records & Evidence cards, Van Dyke scope và petition CTA hoạt động trong demo.
- [x] Không biến sample crash figures hoặc thiếu dữ liệu response time thành verified findings.
- [x] Summary comparison dẫn đúng Roads Comparison section.
- [ ] Hero image độc lập, nguồn ảnh đủ nét DPR 2, crash/original-map records và policy excerpt originals: còn thiếu, không tự thay hoặc tạo dữ liệu.

### 3.5. Water & Septic (PDF 42–53)

- [x] Hero → scale → repairs → connected water → options → core conflict → comparison → evidence → next issue.
- [x] Giữ classification totals và caveats; không gọi construction/repair records là failures.
- [x] Connected-water cutaway đúng bản; conceptual/not documented contamination label; không interactive layer map.
- [x] Water options giữ One Water 4.3.7 và public-health-hazard route còn tồn tại.
- [x] Core Conflict dùng exact concise copy PDF 51; research dài và qualifications ở phía trên panel.
- [x] Không gán agency support cho SCU/retirement; giữ lịch sử và phạm vi exclusions.
- [x] Comparison/source/next links đúng đích; thiếu originals dùng labelled previews.
- [ ] FLWMI/EHDConst datasets, phương pháp 3,087, annual chart inputs, original map/record findings và file ảnh lớn hơn: còn thiếu/chưa xác minh, không coi hoàn thành phần nguồn.

### 3.6. Growth, Infrastructure & Daily Life (PDF 53–60)

- [x] Hero then/today giữ sample-data caveat.
- [x] Natural Rural Density Comparison đúng bản; tree cover tương đương, narrow rural lanes phía phải.
- [x] “10 homes on 50 acres” chỉ phía trái; conceptual qualification giữ rõ.
- [x] Services map static, drive-time labels minh họa; không routing/location lookup.
- [x] Timeline infrastructure chỉ hoàn thiện khi đủ approved content/asset; không tự tạo số liệu/chart.
- [x] Summary comparison → evidence → Outdated Community Plan continuation đúng blueprint.

Giữ mở ngoài phạm vi demo: 

- [ ] Verified population/housing/travel datasets, historical imagery/GIS provenance và card-level evidence originals/findings/dates.
- [ ] Standalone low-density policy map, scenario assets, Master Assessment và selected quantitative infrastructure timeline/map.
- [ ] Nguồn ảnh lớn hơn khi pixel budget DPR 2 chưa đủ; không coi demo là nghiệm thu độ nét toàn bộ.

### 3.7. Comparison và The Proposal (PDF 3, 61–68)

- [ ] The Proposal có lối Compare the Two Plans tới Comparison anchor hiện có; không menu cấp cao riêng.
- [ ] Roads comparison → Water comparison → Growth & Housing → What remains.
- [ ] Growth & Housing dùng Screenshot 110: rural header, hai cột, bốn hàng mỗi cột, result banner, CTA.
- [ ] Giữ thông tin County rural density limits và điều kiện infrastructure; không hứa tự tăng density.
- [ ] What remains giữ diagram/headline và passage bổ sung dưới viewport.
- [ ] Không hứa road project tự được approve/fund khi retire Plan.
- [ ] Proposed Change thiếu spec chỉ được hoàn thiện bằng nội dung/thiết kế người dùng xác nhận; không tự sáng tạo.

### 3.8. Evidence & Records (PDF 69–72)

- [x] Bốn issue/source groups và fixed library cards đúng selected copy/artwork.
- [x] Metadata/purpose từ artwork có nhãn minh họa/chưa xác minh, date thiếu không tự điền; link gốc chỉ dùng URL được cung cấp.
- [x] Không search/filter động, không giả 124 verified results hoặc metadata đã xác thực.
- [x] Mọi card/CTA tới supplied source hoặc labelled preview; Evidence → Action có đích.
- [ ] Verified full inventory, card-level agencies/dates/purposes/findings và original water datasets/records.
- [ ] Full unoccluded heading/banner backgrounds và nguồn ảnh đủ nét DPR 2.

### 3.9. Action và các preview (PDF 73–88)

- [ ] Hero đúng copy ngắn; bỏ “After learning…”; dùng community visual đã duyệt.
- [ ] Ba action blocks; supporter CTA prominent; dated Board/agency records đúng ngữ cảnh.
- [ ] Supporter và petition là hai routes/consents độc lập.
- [ ] Supporter: ba audience choices chưa chọn; bốn participation choices; Email/Text/Call; đủ fields/signature/date; address/phone optional; không Other.
- [ ] Mission, Consent, Privacy, return instructions nguyên văn; không donation/statutory membership/public list.
- [ ] Story preview riêng đủ labels; upload/submit không nhận file hoặc gửi nội dung.
- [ ] Share preview static Facebook/Email/Copy Link; không kết nối dịch vụ hoặc copy thật.
- [ ] Story cards có “Illustrative sample stories”; không gán sample quotations thành submissions thật.
- [ ] Final CTA dẫn toàn văn approved petition trước fields; không dùng old merged form.
- [ ] Petition giữ title/recipient/full wording/associated policies/LDC Part 3.08.00/declaration/independent notice.
- [ ] Bốn petition fields đúng; không thêm required email/address/phone hoặc eligibility chưa duyệt.
- [ ] Public-records warning rõ; optional-email artwork static; không auto subscribe.
- [ ] Mọi supporter/petition/story field không chỉnh sửa, không chọn/ký/gửi/lưu.
- [ ] Hiện “Demo only. Nothing is submitted or saved.”; signing hiện “Demo only. No signature has been collected.”; không success/count giả.

### 3.10. About và footer information

- [ ] Không tự viết About, Privacy, contact details hoặc policy promises chưa được duyệt.
- [ ] Có đích được cung cấp hoặc preview có nhãn cho nội dung thiếu; cập nhật GAP register.

## 4. Kiểm tra demo sau triển khai

- [ ] Đối chiếu từng trang/section với selected screenshot tương ứng trên desktop và mobile.
- [ ] So nguyên văn English copy, punctuation, numbers, dates, source/method notes, consent và petition với PDF.
- [ ] Đúng ảnh/phiên bản/tỷ lệ; không stock/AI/redrawn assets hoặc cả screenshot thay HTML.
- [ ] Không có nội dung bị xóa, bản cũ ghi đè current copy hoặc functionality màu tím được kích hoạt.
- [ ] Thứ tự section, card system, palette/font/header/footer đúng Foundation và page overrides.
- [ ] Mobile không mất copy/ảnh/legend; không overflow làm mất nội dung; buttons/menu dễ thao tác.
- [ ] Mỗi menu/CTA/link có đích hợp lý; có đường quay lại; không dead button hoặc source URL bịa.
- [ ] Keyboard navigation và focus rõ; alt text, map summary và preview close/back controls dùng được.
- [ ] Không request gửi dữ liệu cá nhân, email, file, signature hoặc story; không ghi dữ liệu cá nhân vào local/browser storage.
- [ ] Không production database/auth/admin/search/filter/GIS/routing/share integration.
- [ ] Chạy build, lint và typecheck theo script/công cụ thực tế của dự án; kiểm tra hydration, asset loading và class responsive sau build. Không ghi nhận pass trước khi chạy.
- [ ] Caveats sample/unverified/conceptual và public-records warning còn rõ.
- [ ] Báo phần đã làm, kiểm tra thực tế, phần thiếu và giới hạn; không tự public launch/email campaign/County submission.
