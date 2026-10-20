# Kế hoạch các lượt coding — First Clickable Demo

**Cập nhật:** lượt 1–7 đã hoàn thành trong phạm vi demo; xem [The Facts và giới hạn](CODING_ROUND_07.md) cùng các báo cáo lượt 1–6. Lượt 8–11 còn mở; tiếp theo The Proposal & Comparison, chưa tự bắt đầu. Phần nhắc lại kế hoạch bên dưới là hồ sơ ở thời điểm trước coding.

Người dùng xác nhận kết thúc kiểm duyệt: “oke, coi như đã kiểm duyệt xong , bây giờ bạn hãy nhắc lại kế hoạch các lượt coding nhé”. Bước này chốt lại kế hoạch, chưa khởi tạo hoặc code website.

Phạm vi đã duyệt: 9 route, 57 hạng mục, Next.js + React, Tailwind CSS và shadcn/ui theo blueprint. Nội dung tiếng Anh giữ nguyên. Comparison nằm trong The Proposal; phần thiếu nội dung dùng preview có nhãn theo D-02.

| Lượt | Phạm vi | Kết quả để kiểm tra |
|---|---|---|
| 1 | Foundation và khởi tạo | Kiểm tra workspace/package trước khi tạo app. Thiết lập Next.js App Router + React, Tailwind, các component shadcn cần thiết; palette/font, shared layout, header/menu mobile/footer; khung 9 route, content/asset bindings và demo preview dùng chung. |
| 2 | Home — Our Community | Hero, introduction, ba bản đồ gốc xếp dọc full-width, ghi chú nguồn/phương pháp, bốn issue cards và CTA đúng đích. |
| 3 | Issues overview | Roads, Water, Everyday Needs, Outdated Community Plan; timeline 2001/TODAY/2026 và Connections diagram theo bản đã chọn. |
| 4 | Roads & Safety | Hero, street lighting, Gunn Highway, walking/biking/crossings, emergency access, data/evidence, map comparison và summary comparison; giữ các caveat dữ liệu. |
| 5 | Water & Septic | Hero, septic scale, repairs, Connected Water, water options, Core Conflict, comparison, evidence và next issue; giữ selected illustrations, phân biệt records với failures. |
| 6 | Growth & Daily Life | Then/Today, Natural Rural Density, services map, infrastructure theo nội dung hiện có, comparison, evidence và continuation; sample/conceptual/drive-time caveats rõ. |
| 7 | The Facts | Bốn nhóm bằng chứng, thư viện tĩnh, metadata, nguồn thật được cung cấp và đích preview cho phần thiếu; không giả search/filter hoạt động hoặc số kết quả đã xác minh. |
| 8 | The Proposal và Comparison | Intro preview có nhãn khi thiếu copy; Compare the Two Plans dùng anchor, Roads → Water → Growth & Housing (Screenshot 110) → What Remains; không thêm menu/route Comparison riêng. |
| 9 | Take Action | Hero, ba action blocks, Supporter Application, toàn văn approved petition và signing preview riêng, Story/Share previews, illustrative sample stories và final CTA; mọi form chỉ xem, không gửi/lưu/thu thập dữ liệu. |
| 10 | About và footer destinations | About preview có nhãn; hoàn thiện đích Updates/Contact/Sources & Methods/Accessibility/Edits/Privacy bằng nội dung được cung cấp hoặc preview đã duyệt; không thêm route, lời hứa chính sách hay contact details tự viết. |
| 11 | Kiểm tra toàn demo và bàn giao | Đối chiếu blueprint/copy, desktop/mobile, keyboard/focus, ảnh/bản đồ/legend, toàn bộ menu/CTA/anchors, demo behavior; build/lint/typecheck phù hợp công cụ thực tế, kiểm tra lỗi runtime/hydration/asset và xác nhận không gửi/lưu dữ liệu. |

Mỗi lượt có kiểm tra phù hợp và bản xem kết quả trong môi trường local sau khi app chạy được. Không dồn kiểm tra responsive/nội dung đến lượt cuối. Sau mỗi lượt báo phần hoàn thành, kiểm tra thực tế và giới hạn còn lại; không tự tạo vòng duyệt bắt buộc cho từng lượt.

## Ảnh và các giới hạn đã biết

- Dùng tạm ảnh từ screenshot theo quyết định hiện hành; tìm nguồn thay sau. Kết thúc kiểm duyệt là chấp nhận phương án demo với giới hạn đã thông báo, không biến ảnh nhỏ thành ảnh đủ độ phân giải.
- Yêu cầu ảnh rõ nét vẫn áp dụng. Kiểm tra ở khung hiển thị thực trên desktop/mobile và DPR 1/2; đánh dấu nguồn không đủ, không phóng ảnh rồi coi là đạt hoặc âm thầm đổi layout. Ưu tiên file cùng ảnh độ phân giải cao hơn khi được cung cấp.
- Ba map gốc bất biến; giữ đầy đủ label, legend và source. Không tạo ảnh AI, phục hồi phần bị che hoặc tự nâng nét.
- Nền petition chưa tách đầy đủ và các mảnh nền cục bộ vẫn là giới hạn nguồn đã ghi nhận. Không dùng screenshot cả form thay HTML hoặc tự dựng phần nền bị che.
- Nội dung chưa có vẫn dùng preview có nhãn; không giả là đã đầy đủ vì review đã kết thúc.

Demo không gồm backend/database/auth/admin, nhận chữ ký, email, upload, GIS/routing/search/filter động, share integration hoặc public deployment. Các lượt trên là kế hoạch thực hiện; chưa có bước nào được ghi nhận hoàn thành trước khi code và kiểm tra.

Nguồn: [checklist chi tiết](IMPLEMENTATION_CHECKLIST.md), [quyết định](PROJECT_DECISIONS.md), [hồ sơ section](SECTION_REVIEW.md), [chất lượng ảnh](IMAGE_QUALITY_REVIEW.md), [structure](../structure.md).
