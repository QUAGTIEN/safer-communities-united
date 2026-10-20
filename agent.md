# Quy tắc làm việc — Safer Communities United

## 1. Vai trò và trạng thái dự án

- Vai trò: Senior Frontend Developer triển khai **Safer Communities United — Keystone–Odessa** theo blueprint khách hàng.
- Giai đoạn: **First Clickable Demo**, chưa phải production. Người dùng đã yêu cầu link demo GitHub Pages sau lượt 6; được xuất bản/cập nhật static demo qua workflow Pages, không mở backend/data collection. Xem [quyết định hiện hành](docs/PROJECT_DECISIONS.md) và [Pages](docs/GITHUB_PAGES.md).
- Công nghệ chính người dùng đã xác nhận: **Next.js + React**. Tham khảo tài liệu chính thức Next.js, Tailwind CSS và shadcn/ui theo [hướng dẫn kỹ thuật](docs/TECHNICAL_GUIDELINES.md); không lấy giao diện mặc định của thư viện thay cho blueprint.
- Trạng thái hiện tại: **lượt 1–6 — Foundation, Home, Issues, Roads, Water và Growth hoàn thành trong phạm vi demo**; xem [báo cáo Growth và giới hạn](docs/CODING_ROUND_06.md). `/issues/growth-daily-life` có L-01…L-08; Home/Issues/Roads/Water giữ H-01…H-06, I-01…I-06, R-01…R-08 và W-01…W-09. Bốn route khác vẫn preview. Lượt tiếp theo 7 — The Facts, chưa tự bắt đầu. Growth counts/travel labels là sample/illustrative; timeline, low-density policy map, Master Assessment và card-level evidence còn thiếu, có nhãn preview. Dùng ảnh screenshot đã chốt, original maps/PDF bất biến. Giới hạn ảnh DPR 2 và nguồn của các lượt trước vẫn mở.
- Nguyên tắc: **Fidelity over Creativity.**
- Người dùng đã kết thúc kiểm duyệt nguồn/nội dung và yêu cầu nhắc lại [kế hoạch 11 lượt coding](docs/CODING_PLAN.md). Giữ các phê duyệt hiện có; không yêu cầu duyệt lại từng lượt nếu không phát sinh quyết định mới. Xác nhận review không phải chứng nhận mọi crop đã đủ nét; kiểm tra chất lượng thực khi render.
- **Do not redesign. Do not rewrite. Do not regenerate images. Do not invent missing content.**

## 2. Tài liệu phải đọc và quyền ưu tiên

1. Chỉ dẫn trực tiếp của người dùng trong phiên làm việc hiện tại.
   - [Quyết định hiện hành](docs/PROJECT_DECISIONS.md) và [bản ghi duyệt](docs/project-approvals.json) lưu xác nhận trực tiếp ngày 20/10/2026, gồm ngoại lệ ảnh mới và phần đã duyệt.
2. [Master Rules nguyên văn](docs/BLUEPRINT_RULES.md): lưu đầy đủ prompt người dùng đã cung cấp; không được coi bản tóm tắt trong file này là thay thế cho bản nguyên văn.
3. [Blueprint chính thức](<Copy of blueprint SAFER COMMUNITIES UNITED.docx.pdf>): `blueprint copy nr 3`, 88 trang PDF; Single Source of Truth cho thiết kế, cấu trúc, nội dung và hình ảnh.
4. [Cấu trúc trích từ blueprint](structure.md): bản đồ nội dung, section, điều hướng, ảnh và các điểm thiếu kèm số trang PDF.
5. [Implementation checklist](docs/IMPLEMENTATION_CHECKLIST.md): trình tự và tiêu chí kiểm tra; không tự cấp phép bắt đầu code.
6. [Hướng dẫn kỹ thuật](docs/TECHNICAL_GUIDELINES.md): nguồn chính thức và cách áp dụng Next.js/React, Tailwind CSS, shadcn/ui. Tài liệu kỹ thuật hướng dẫn cách triển khai, không ghi đè yêu cầu thiết kế/nội dung của người dùng và blueprint.
7. [Danh mục asset trích từ PDF](assets/README.md) và [manifest](assets/blueprint/manifest.json): dùng file trích chuẩn tại assets/blueprint; không lấy contact sheets hoặc ảnh trung gian trong tmp/pdfs làm file gốc. Manifest phân biệt map, layout-preview, ui-reference và ghi mọi trang nguồn.
8. [Hồ sơ từng section](docs/SECTION_REVIEW.md), [bản có ảnh](docs/SECTION_REVIEW.html) và [source register](docs/SOURCE_REGISTER.md): 57 hạng mục đã được duyệt theo phạm vi ngoài ảnh; D-01/D-02/D-04/D-05/D-06 được duyệt, D-03 thay bằng quy tắc ảnh mới. 9 route là lựa chọn dự án được người dùng duyệt, không phải số trang do blueprint tuyên bố. Trạng thái chưa code trong hồ sơ lịch sử được thay bởi quyết định bắt đầu lượt 1.
9. [Inventory ảnh thay/giữ](docs/IMAGE_REPLACEMENT_AUDIT.md) và [bản đánh dấu vị trí](docs/IMAGE_REPLACEMENT_AUDIT.html): xác định từng photo slot, hồ sơ cần nguồn thật và map/diagram phải bảo toàn. Đây chưa phải bộ ảnh thay thế đã tìm/chọn.

Trong blueprint, chỉ dẫn phê duyệt mới nhất, `Current on-screen copy` / `Exact on-screen copy` và selected image tương ứng điều chỉnh phiên bản cũ. Website Foundation điều chỉnh menu và footer dùng chung, kể cả khi screenshot cũ khác đi. Nếu vẫn có mâu thuẫn chưa được giải quyết, ghi rõ và hỏi trước khi thay đổi phần đó.

`structure.md` và checklist là tài liệu dẫn xuất, không thay thế blueprint và không tự tạo thêm nội dung được duyệt. Số trang tham chiếu là **trang vật lý PDF**, không phải số `PAGE` của website.

## 3. Bảo toàn hình ảnh

- Người dùng yêu cầu ảnh **rõ nét ở kích thước hiển thị thực**. Bộ crop tạm chưa đạt xác nhận chất lượng tổng thể: xem [kiểm tra chất lượng](docs/IMAGE_QUALITY_REVIEW.md). Không phóng ảnh nhỏ để vừa khung rồi coi là đạt; không đổi bố cục đã duyệt để né thiếu nguồn. Nếu thiếu pixel, cần nguồn ảnh lớn hơn của cùng ảnh hoặc ảnh thay được duyệt; chưa tự tìm nguồn ngoài, AI/upscale/sharpen hay sửa bản đồ. Nghiệm thu trực quan trên desktop/mobile và DPR 1/2 khi triển khai.
- Chỉ dẫn mới nhất: dùng tạm ảnh hiện có từ screenshot. Tra [manifest demo](assets/demo-current/manifest.json) và [giới hạn từng loại crop](assets/demo-current/README.md); 79 vùng ảnh đã tách, 1 nền petition chưa tách độc lập được. Chưa tìm/tải ảnh thay; không coi mảnh nền cục bộ là nền đầy đủ. Không dùng AI xóa chữ/icon hoặc vẽ bù. Các giới hạn của file nguồn vẫn giữ nguyên.
- Giữ file gốc khách hàng và toàn bộ ảnh đã trích trong assets/blueprint. Theo chỉ dẫn mới, **được tìm nguồn ảnh khác cho các photo minh họa/trang trí trong UI screenshot được inventory xác định**; ngoại lệ này thay lệnh cấm ảnh bên ngoài ban đầu cho đúng nhóm đó.
- Không tạo ảnh AI hoặc vẽ lại map/infographic. Không suy đoán screenshot photo chắc chắn do AI tạo; provenance hiện chưa được xác minh.
- **Ba map gốc PDF 8, 9, 11 giữ nguyên tuyệt đối:** không thay, crop, vẽ lại, sửa màu/chi tiết/nội dung, retouch, gắn filter hoặc ghi đè. Kiểm tra SHA-256 theo manifest; giữ label/legend/source/tỷ lệ.
- Map, chart và các khung mixed aerial/boundary/diagram trong screenshot khác phải giữ/chờ nguồn, không tự coi là bản đồ gốc đã xác thực hoặc là photo stock được thay.
- Photo replacement chỉ thay vùng hình minh họa được xác định, không thay English copy, cấu trúc, data, policy, nguồn hoặc layout. File mới về sau lưu riêng, không ghi đè assets/blueprint; không gán địa điểm/nhân vật/sự kiện chưa xác minh.
- Thumbnail hồ sơ/cover phải lấy từ tài liệu thật nếu thay, không dùng stock/AI giả làm official records. Logo/icons/forms/laptop UI thuộc components, không phải danh sách tìm stock.
- Nếu technical asset/map thiếu file độc lập hoặc không đủ chất lượng thì báo thiếu. Không dùng ảnh chụp thay sơ đồ kỹ thuật hoặc dữ liệu.
- Phân biệt **UI screenshot** và **image asset**: text, navigation, button, card, form và layout phải là component HTML/React thực tế; không dùng ảnh chụp cả trang làm website.
- Giữ các hình nhiều panel được chọn. Không cắt legend, label hoặc source của bản đồ.
- Home: ba bản đồ xếp dọc, full-width trong vùng nội dung, không slider hoặc hai cột (PDF 8–15).
- Density: đúng **Natural Rural Density Comparison** (PDF 55–57).
- Growth & Housing: đúng **Screenshot 110 — “Two Ways of Managing Growth and Housing”** (PDF 65–67); giữ composition/copy/map thumbnail, chỉ photo trang trí đã inventory là candidate thay. Connected Water PDF 47 và Natural Rural Density PDF 57 giữ đúng selected illustrations.

## 4. Bảo toàn nội dung

- Giữ nguyên 100% nội dung tiếng Anh đã phê duyệt: tiêu đề, slogan, câu chữ, số liệu, ngày, nguồn, phương pháp, consent và declaration.
- Không paraphrase, rút gọn, dịch, thêm nội dung quảng bá hoặc tự sửa câu có vẻ sai.
- Ghi chú tiếng Việt trong tài liệu dự án không phải copy để xuất lên website.
- `Current/Exact on-screen copy`: nội dung hiển thị; `Long explanations / Source notes`: nội dung hỗ trợ chi tiết, không nhồi vào mockup.
- Nội dung tím trong `((...))`: lưu cho giai đoạn sau; red crossouts: đã loại, không phục hồi.
- Không trộn các phiên bản cũ thành một thiết kế mới. Action hero không có đoạn “After learning…” đã bỏ.
- Không bịa số liệu, tài liệu, URL hoặc kết quả. Giữ nhãn sample/illustration/unverified và các giới hạn dữ liệu.
- Không biến sơ đồ khái niệm thành bằng chứng nhân quả hoặc dữ liệu đo đạc; không biến câu chuyện mẫu thành lời chứng thật.
- Petition: dùng đầy đủ bản được duyệt September 24, version 3; bao gồm associated policies, Land Development Code Part 3.08.00, declaration và public-records warning (PDF 84–86).

## 5. Thiết kế, bố cục và khả năng truy cập

- Màu: Navy `#17324D`; Teal `#28736D`; Coral `#C55245`; Cream `#F7F4EE`; White `#FFFFFF`; Gray `#D8DEE3`.
- Font: heading **Source Serif 4 hoặc Merriweather**; body **Inter**. Không tự thêm hệ màu/font. Kích cỡ chữ do developer chủ động chọn theo xác nhận mới của người dùng.
- Bám screenshot được chọn; giữ thứ tự section; nhiều khoảng trắng, phân cấp rõ, một thông điệp chính mỗi section, một hành động chính mỗi khu vực.
- Primary button coral/white; secondary button viền navy hoặc teal; content link dạng text + arrow.
- Tái sử dụng hệ Issue/Data/Evidence/Comparison/Timeline Card. Không thêm animation, 3D hoặc trang trí ngoài yêu cầu. Ngoại lệ người dùng đã yêu cầu sau lượt 6: crossfade nhẹ khi đổi trang, smooth anchor scrolling; tắt trong prefers-reduced-motion. Không mở rộng thành motion trang trí trong nội dung.
- Desktop/mobile: được sắp xếp lại để dễ đọc, không xóa/rút copy hoặc làm mất ảnh/thành phần quan trọng. Không cắt bản đồ, legend, nhãn.
- Header nền sáng, fixed khi cuộn; mobile logo + menu, không che nội dung. Footer navy theo Foundation.
- Alt text mô tả, tóm tắt bằng chữ cạnh bản đồ, điều hướng/nút dùng được bằng bàn phím. Mọi trang truy cập được và có đường quay lại.

## 6. Điều hướng

Giữ đúng nhãn và đích trên desktop, mobile và footer tương ứng:

| Nhãn | Đích nội dung |
|---|---|
| Our Community | Home/community |
| Issues | Issues |
| The Facts | Evidence & Records |
| The Proposal | Proposed Change và lối vào Comparison |
| Take Action | Action |
| About | About |
| Get Involved | Action; CTA nổi bật |

- Dưới The Proposal có **Compare the Two Plans**, tới section anchor Comparison hiện có. Không thêm Comparison thành menu cấp cao; không tự tạo URL mới cho phần này.
- Header/footer thống nhất theo PDF 3–6. Không sao chép biến thể footer cũ thành yêu cầu khác. Bổ sung theo yêu cầu mới: thông tin khu vực, social previews Facebook/Instagram/Email và copyright/Terms/Privacy có nhãn Demo version; chưa có đích thật hoặc legal copy thì giữ preview. Xem [quyết định](docs/PROJECT_DECISIONS.md).
- Mọi CTA có đích đúng hoặc demo preview có nhãn. Thiếu URL/nội dung thì ghi nhận thiếu, không bịa đích hay để nút trống chức năng.
- Không suy số trang từ `PAGE 09`: blueprint bỏ qua `PAGE 07`; Proposed Change và About vẫn thiếu copy chi tiết. Người dùng đã duyệt **9 route demo theo D-01** và labelled preview cho phần thiếu; các route/anchors ở hồ sơ section là cấu trúc được duyệt hiện hành.

## 7. Ranh giới demo

Được làm khi người dùng yêu cầu triển khai: trang/section, shared layout, navigation, CTA, ảnh/bản đồ tĩnh, evidence cards, comparison, form preview và responsive.

Không tự làm: database, backend lưu dữ liệu, authentication/admin, chữ ký thật, email, upload, GIS tương tác, location lookup/routing, search/filter động, tích hợp chia sẻ hoặc production deployment.

### Biểu mẫu và hành động

- Hiển thị đúng **“Demo only. Nothing is submitted or saved.”** cạnh supporter, petition và story preview.
- Trường và checkbox là ví dụ không chỉnh sửa; không thu thập, lưu hoặc gửi dữ liệu, kể cả lưu thông tin cá nhân trong trình duyệt.
- Nút ký, upload, submit, subscribe và share chỉ mở giải thích demo. Không nối service và không hiện success/count giả.
- Petition signing button mở **“Demo only. No signature has been collected.”**
- **Supporter Application và Petition Signing là hai luồng độc lập.** Không gộp consent, không tự enroll người ký petition vào supporter network.
- Supporter: giữ ba audience choices ban đầu chưa chọn; bốn participation choices; Email / Text / Call; mọi information field; SIGNATURE và DATE; STREET ADDRESS và PHONE optional. Không thêm “Other”, không thay signature bằng checkbox, không thêm donation hoặc danh sách supporter công khai. Giữ nguyên mission, Consent, Privacy và return instructions (PDF 75–77).
- Petition: toàn văn selectable/readable trước bốn field **Printed name; Community or ZIP; Signature; Date**. Không thay bằng summary/download. Giữ public-records warning và independent civic petition notice. Optional-email artwork chỉ là ví dụ tĩnh, không mở dịch vụ updates (PDF 83–88).
- Story: preview riêng, upload/submit không hoạt động thật. Sample stories phải được ghi rõ minh họa (PDF 79–82).

## 8. Kiến trúc và cách xử lý thiếu thông tin

- Dùng **Next.js + React** theo xác nhận của người dùng. Trước code, kiểm tra package/lockfile/config nếu đã có và đọc tài liệu phù hợp phiên bản; không tự đổi stack, nâng major version hoặc tái khởi tạo đè dự án.
- Khi khởi tạo mới, ưu tiên App Router; giữ phần nội dung tĩnh ở Server Components, giới hạn Client Components ở menu/preview tương tác cần thiết. Component dễ đọc, không abstraction phức tạp không cần thiết; xem docs/TECHNICAL_GUIDELINES.md.
- Tái sử dụng Header, Footer, Buttons, Cards, Layout; tách content và image assets khi phù hợp; route ổn định; dành vùng bản đồ cho mở rộng sau.
- Không xây API/service dự phòng chưa cần thiết.
- Mỗi khoảng trống phải ghi: phần thiếu/mâu thuẫn, vị trí PDF, ảnh hưởng và phương án để người dùng xác nhận.
- Placeholder chỉ dùng khi cần duy trì cấu trúc demo và có nhãn rõ. Không giả làm nội dung được duyệt.
- Có thể tiếp tục phần độc lập đã rõ; không tự quyết nội dung, asset hoặc thiết kế chưa được duyệt.

## 9. Quy trình trước và sau khi code

1. Đọc Master Rules, mở đầu/Foundation và phần trang liên quan trong blueprint.
2. Xác định page/section, đúng copy, selected image, CTA/đích và yêu cầu tương lai.
3. Kiểm kê file gốc/asset nhúng, chất lượng và quyền dùng đúng phiên bản; ghi thiếu.
4. Hoàn thành kế hoạch từng trang; không viết toàn bộ website khi chưa rõ nguồn copy/ảnh. Chờ yêu cầu triển khai của người dùng.
5. Khi được yêu cầu, triển khai từng phần theo blueprint.
6. Đối chiếu với mẫu trên desktop/mobile: copy 100%, đúng ảnh, layout/thứ tự, menu/CTA, accessibility, caveat và không có thu thập/gửi/lưu dữ liệu ngoài phạm vi.
7. Báo kết quả kiểm tra và phần còn thiếu trung thực. Không tự public launch, gửi chiến dịch email hoặc nộp tài liệu cho County.
