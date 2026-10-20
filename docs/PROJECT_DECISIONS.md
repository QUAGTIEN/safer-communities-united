# Quyết định hiện hành của dự án

## Coding lượt 9 — Take Action

> oke, hãy bắt đầu code

Người dùng yêu cầu triển khai sau xác nhận phạm vi lượt 9. `/take-action` có A-01 hero, A-02 ba cards, A-06 illustrative sample stories, A-07 final CTA và A-08 toàn văn petition. A-03 Supporter Application, A-04 Story và A-05 Sharing là ba preview riêng mở từ cards/hash destinations. Stories nằm ngay sau three actions trên main journey; không thêm route. [Báo cáo](CODING_ROUND_09.md), [kiểm tra](coding-round-09-checks.json). About còn preview; lượt 10 chưa tự bắt đầu.

Giữ approved petition September 24 version 3, associated policies/LDC Part 3.08.00, declaration/public-records warning/independent notice. Supporter consent/Privacy/return instructions nguyên văn; ba audience choices chưa chọn; supporter/petition độc lập. Tất cả field/checkbox/select/textarea disabled; không form submission, file acceptance, signature, storage, email/subscription hoặc sharing thật. Story Yes và optional email là static artwork examples có nhãn, không permission/opt-in được thu thập. Chín source images (tám photo crops cũ, một landscape fragment mới) giữ pixel; nền petition và independent laptop/screen assets còn thiếu. Maps/PDF/archive bất biến, DPR 2 còn giới hạn. Cập nhật static Pages demo theo quyền đã có; không Vercel changes hoặc production services.


## Coding lượt 8 — The Proposal & Comparison

> hãy bắt đầu lượt code thứ 8 nhé.

Người dùng yêu cầu bắt đầu sau phần xác nhận phạm vi lượt 8. Đã triển khai `/the-proposal`: P-01 intro preview do thiếu approved copy/layout; C-01 Roads, C-02 Water, C-03 Growth & Housing đúng Screenshot 110 và C-04 What Remains theo PDF 61–68. Comparison dùng anchors, không thêm route/menu cấp cao. [Báo cáo](CODING_ROUND_08.md), [kiểm tra](coding-round-08-checks.json). Lượt 9 — Take Action chưa tự bắt đầu; Take Action/About còn preview.

Giữ nguyên current English copy, no automatic road approval/funding caveat, One Water 4.3.7 exclusion, rural density/adequate-infrastructure conditions và campaign passage dưới diagram. Full comparison documents thiếu dùng ba preview dialogs; policy interpretations/source dates chưa xác minh có nhãn. Dùng 13 photo crops cũ, năm visual fragments và một illustrative cover mới với pixel equality/provenance/hashes. Original PDF/archive/maps bất biến; ảnh DPR 2 còn giới hạn. Cập nhật static demo GitHub Pages theo quyền đã có; không data collection hoặc chỉnh Vercel.


## Coding lượt 7 — The Facts đã hoàn thành trong phạm vi demo

> oke, hãy bắt đầu code nhé

Người dùng yêu cầu bắt đầu ngay sau phần xác nhận lượt 7 The Facts / Evidence & Records. Đã thay `/the-facts` preview bằng F-01/F-02 theo PDF 69–72: bốn groups, năm selected illustrative records, bốn supplied-source anchors và Evidence → Action. [Báo cáo](CODING_ROUND_07.md), [kiểm tra](coding-round-07-checks.json). Ba route The Proposal/Take Action/About vẫn preview; lượt 8 chưa tự bắt đầu.

Metadata/agency/date/purpose từ screenshot giữ nhãn unverified; hai supplied original links không xác thực thumbnail/claims. Ba water originals/datasets thiếu mở preview. Giữ Water record caveat, không fake 124 results hoặc dynamic search/filter/sort/pagination. Catalog dùng đủ 21 supplied URLs, không coi là independent verified records. Dùng tám photo crops cũ và bốn exact-pixel fragments mới có provenance; archive/PDF/maps gốc bất biến. Độ nét DPR 2 còn giới hạn. Cập nhật demo qua GitHub Pages theo quyền đã có; không backend hoặc data collection.


## Link demo GitHub Pages

> thôi, nếu vậy tôi tạo link bằng git trước được không

Người dùng chọn dùng link GitHub trước trong khi Vercel còn cần chẩn đoán. Cấu hình xuất bản static demo tại `https://quagtien.github.io/safer-communities-united/` qua GitHub Actions từ nhánh main. Đây là ngoại lệ được yêu cầu cho giới hạn local-only trước đó, chỉ áp dụng hosting demo; không production campaign, backend hoặc data collection. Lượt 7 chưa bắt đầu. [Cấu hình và kiểm tra](GITHUB_PAGES.md).

Base path chỉ bật trong workflow Pages; navigation/image URLs giữ repo subdirectory và source-image bytes không đổi. Pages settings đã được tạo với build_type workflow. Không chỉnh settings Vercel hoặc coi lỗi Vercel đã được sửa.


## Chỉnh sửa bổ sung — chuyển trang và footer demo

> tôi muốn có 2 chỉnh sửa nhỏ, ở phần chuyển các section our community --> issue,...... tôi muốn có hiệu ứng để chuyển qua mượt hơn, phần footer bổ sung thêm thông tin, social và điều khoản copy right nhé ( tạm thời để là demo version )

Yêu cầu trực tiếp này cho phép ngoại lệ motion có phạm vi: crossfade ngắn khi đổi route, smooth scroll cho anchors; giữ header/footer và không thêm motion trang trí trong nội dung. Tắt animation/smooth scroll khi prefers-reduced-motion. Đây là chỉnh sửa Foundation sau lượt 6, không phải bắt đầu lượt 7.

Footer thêm thông tin khu vực, nhãn Demo version, Facebook/Instagram/Email previews, copyright 2026 và Terms & Copyright/Privacy previews. Chưa có social URLs, email hoặc legal copy thật; không bịa đích hoặc chính sách và không nối dịch vụ. Giữ các nhóm điều hướng Foundation đã có.

Người dùng cũng xác nhận kích cỡ chữ do developer chủ động chọn; font family, English copy, palette và selected layout/illustrations vẫn theo blueprint. [Báo cáo chỉnh sửa](NAVIGATION_FOOTER_UPDATE.md).


## Coding lượt 6 — Growth & Daily Life đã hoàn thành

> hãy bắt đầu code lượt thứ 6 nhé

Đã thay `/issues/growth-daily-life` preview bằng L-01…L-08 theo PDF 54–60: Then/Today, selected Natural Rural Density, housing, services, infrastructure preview, comparison, evidence và Outdated Plan continuation. [Báo cáo](CODING_ROUND_06.md), [kiểm tra](coding-round-06-checks.json). Home/Issues/Roads/Water giữ nội dung; bốn route khác vẫn preview. Chưa tự bắt đầu lượt 7 — The Facts.

Giữ nhãn unverified sample counts, conceptual density và illustrative drive times; không coi schematic locations là GIS thật. Timeline quantitative series/selected asset, low-density policy map/scenarios, Master Assessment và card-level evidence còn thiếu, dùng previews đã duyệt. Dùng 11 photo crops cũ và tám screenshot fragments lossless mới có provenance; original maps/PDF/archive không sửa. Độ nét DPR 2 còn giới hạn; không AI/upscale, backend, data collection hoặc publish.

## Coding lượt 5 — Water & Septic đã hoàn thành

> oke, hãy bắt đầu lượt code thứ 5

Đã thay `/issues/water-septic` preview bằng W-01…W-09, giữ caveats PDF 20, conceptual cutaway và concise Core Conflict PDF 51. Home/Issues/Roads giữ nội dung; năm route khác vẫn preview. [Báo cáo](CODING_ROUND_05.md), [kiểm tra](coding-round-05-checks.json). Chưa tự bắt đầu lượt 6 — Growth & Daily Life.

Dùng đúng photo crops hiện có và 12 vùng screenshot lossless mới; original maps/PDF/archive không sửa. Không dựng annual chart từ số liệu suy đoán; giữ chart artwork với nhãn annual inputs unverified. Evidence findings/source/date đều có nhãn chưa xác minh và original-document previews. Hero chỉ có visible landscape portion, không phục hồi panorama bị chữ che. Nguồn dữ liệu/phương pháp và độ nét DPR 2 còn mở; không GIS/backend/data collection hoặc publish.

## Coding lượt 4 — Roads & Safety đã hoàn thành

> OKE, HÃY BẮT ĐẦU CODE NHÉ

Người dùng yêu cầu bắt đầu sau phần xác nhận tám section Roads & Safety và phân biệt trang này với The Facts. `/issues/roads-safety` đã có R-01…R-08 theo PDF 28–41; Home/Issues giữ nội dung, sáu route khác vẫn preview. [Báo cáo](CODING_ROUND_04.md), [kiểm tra](coding-round-04-checks.json). Lượt tiếp theo là 5 — Water & Septic, chưa tự bắt đầu.

Hero chưa có ảnh được chọn dùng preview có nhãn theo D-02. Dùng đúng sáu photo crops và thêm sáu vùng screenshot lossless (hai map, bốn document/cover fragments), không sửa archive/map gốc hoặc phục hồi phần bị che. Finding/metadata Safety, original-map target và document/cover artwork giữ nhãn chưa xác minh/minh họa; không tự thêm crash counts hoặc response-time measurements. Giới hạn độ nét DPR 2 còn mở; nguồn không truy cập qua công cụ không bị coi là đã kiểm chứng hoặc link hỏng. Không publish hoặc thu thập dữ liệu.

## Coding lượt 3 — Issues overview đã hoàn thành

> oke, hãy bắt đầu code nhé.

Người dùng yêu cầu bắt đầu ngay sau phần xác nhận phạm vi lượt 3. Đã thay `/issues` preview bằng I-01…I-06 theo PDF 17–27; bảy route khác vẫn preview, Home giữ nội dung lượt 2. [Báo cáo và giới hạn](CODING_ROUND_03.md), [kiểm tra](coding-round-03-checks.json). Lượt tiếp theo là 4 — Roads & Safety, chưa tự bắt đầu.

Giữ nguyên ảnh tạm; tách ba vùng map screenshot lossless với provenance, không sửa bản đồ gốc. Nền aerial toàn cảnh Connections chưa có file đầy đủ không bị che; ba supporting sources của sơ đồ vẫn preview chờ xác minh. Giới hạn độ nét DPR 2 được đo và giữ mở. QA static export đã bổ sung bước sửa tên output RSC trên Windows; không patch Next/dependency hoặc public deployment.

## Coding lượt 2 — Home đã hoàn thành

> hãy bắt đầu lượt code thứ 2

Đã thay Home preview bằng H-01…H-06 theo phạm vi đã xác nhận: hero, ba map gốc xếp dọc full-width, GIS/parcel/traffic copy và nguồn, plain-text methodology, transition CTA, bốn issue cards và Water caveat theo D-04. Tám route khác vẫn là preview. Xem [báo cáo lượt 2](CODING_ROUND_02.md) và [kiểm tra/số đo ảnh](coding-round-02-checks.json). Chưa tự bắt đầu lượt 3 hoặc publish.

Dùng đúng ảnh tạm; vùng document card trong Home screenshot được crop lossless và gắn nhãn “Illustrative document preview”, không tự coi là official record. Không ảnh thay bên ngoài/AI/upscale. Kiểm tra pixel cho thấy nhiều hình thiếu ngân sách DPR 2; chốt demo trước đó không biến giới hạn này thành đã được khắc phục.

## Coding lượt 1 — đã được yêu cầu và hoàn thành

> oke, hãy bắt đầu lượt code đầu tiên.

Đã triển khai Foundation: Next.js app tại root, shared layout/header/footer/menu, component nền tảng, 9 route previews, asset/content bindings và kiểm tra local. Xem [báo cáo lượt 1](CODING_ROUND_01.md). Không coi các route previews là trang nội dung hoàn chỉnh. Lượt tiếp theo là Home; chưa tự bắt đầu lượt 2 hoặc public deployment.

## Kết thúc giai đoạn kiểm duyệt

> oke, coi như đã kiểm duyệt xong , bây giờ bạn hãy nhắc lại kế hoạch các lượt coding nhé

Người dùng xác nhận kết thúc kiểm duyệt và yêu cầu nhắc lại kế hoạch coding. Giữ phương án dùng ảnh tạm với giới hạn nguồn đã thông báo; yêu cầu rõ nét vẫn áp dụng khi render, không coi xác nhận này là kết quả kiểm tra chất lượng chưa thực hiện. [Kế hoạch 11 lượt](CODING_PLAN.md) bao phủ 9 route. Chưa bắt đầu coding trong bước nhắc lại kế hoạch này; không mở lại vòng duyệt nguồn/nội dung đã chốt.

## Yêu cầu chất lượng ảnh mới nhất

> các ảnh có bị mờ hay khó nhìn không, tôi muốn ảnh phải đảm bảo rõ nét nhé

Ảnh phải rõ nét, dễ nhìn ở kích thước hiển thị thực. Bộ crop tạm chưa được coi là đã đạt yêu cầu này: 46/79 ảnh rộng dưới 300 px, nhiều thumbnail rất nhỏ, một số nền có hiệu ứng mờ sẵn. Xem [kiểm tra chất lượng từng ảnh](IMAGE_QUALITY_REVIEW.md). Khi dựng giao diện phải kiểm tra desktop/mobile và DPR 1/2; nguồn không đủ thì đánh dấu cần file gốc lớn hơn hoặc ảnh thay được duyệt. Yêu cầu này không tự cho phép AI/upscale, chỉnh sửa bản đồ, thay bố cục hoặc tìm nguồn ngoài khi người dùng đang để việc thay ảnh cho sau.

## Chỉ dẫn mới nhất ngày 20/10/2026 — dùng ảnh hiện có cho demo

> oke, tôi sẽ thay sau nhưng hiện tại bạn lấy y chang ảnh đó thì có được không

Người dùng chọn dùng tạm chính các ảnh nhìn thấy trong screenshot; việc tìm nguồn thay được để sau. Cho phép cắt vùng photo thành file riêng, giữ nguyên pixel và hiệu ứng/icon có sẵn. Không tạo ảnh AI, xóa chữ/icon hoặc phục hồi nội dung bị che. Không thay đổi copy, cấu trúc hay các phần đã duyệt.

Đã lưu [79 vùng ảnh tạm](../assets/demo-current/README.md) với [gallery](../assets/demo-current/gallery.html) và [manifest theo slot](../assets/demo-current/manifest.json). Nền petition P087-01 chưa tách được đầy đủ do form che gần hết, chỉ giữ tham chiếu. Các mảnh nền cục bộ được ghi rõ giới hạn; chưa bảo đảm thay thế nguyên nền hero. Ba map gốc vẫn giữ nguyên file và hash.

## Chỉ dẫn trước đó cùng ngày — duyệt phần còn lại và xác định ảnh cần thay

> một số ảnh nhỏ nằm bên trong screenshot chúng ta sẽ kiếm nguồn ảnh khác để thay thế ( vì screenshot giao diện đó có thể do AI tạo. còn các ảnh bản đồ... mà bạn cho là ảnh gốc thì tuyệt đối phải giữ nguyên không được thay đổi ). các phần còn lại tôi duyệt. bây giờ nhiệm vụ của bạn hãy xác định những tấm ảnh nào cần kiếm ảnh thay thế

Chỉ dẫn này cập nhật phần hình ảnh trong Master Rules ban đầu. Giữ [Master Rules nguyên văn](BLUEPRINT_RULES.md) làm hồ sơ lịch sử; khi mâu thuẫn, áp dụng chỉ dẫn mới trực tiếp của người dùng theo phạm vi dưới đây.

## Phần đã duyệt

- D-01: 9 route demo; Comparison nằm trong The Proposal, không thêm menu/route riêng.
- D-02: preview có nhãn cho nội dung/tài liệu thiếu, không tự viết bổ sung.
- D-04: giữ copy và các caveat; không tự sửa số liệu/câu chữ.
- D-05: giữ URL nguồn có trong PDF, phân biệt nguồn được cung cấp và nguồn đã kiểm chứng.
- D-06: giữ lựa chọn Natural Rural Density Comparison và xử lý section thiếu visual/data bằng preview; không sáng tác biểu đồ/số liệu.
- Nội dung, bố cục và điều hướng còn lại trong hồ sơ 57 hạng mục được duyệt theo bản đã trình. Việc duyệt không biến nguồn/ảnh còn thiếu thành tài nguyên đã có hoặc claim chưa xác minh thành đúng.

## D-03 được thay bằng quy tắc ảnh mới

1. Có thể tìm nguồn ảnh khác cho các **ảnh chụp minh họa/trang trí nằm trong screenshot UI** được xác định ở danh sách kiểm kê. Không còn áp dụng lệnh cấm tìm nguồn ảnh bên ngoài cho đúng nhóm này.
2. Ba bản đồ nhúng độc lập PDF **8, 9, 11** phải giữ nguyên tuyệt đối: không thay, vẽ lại, sửa màu/nội dung, crop, retouch hoặc gắn hiệu ứng làm biến đổi hình. Mỗi file có SHA-256 trong manifest để kiểm tra.
3. Map/data visual chỉ xuất hiện trong screenshot chưa tự được coi là bản đồ gốc đã xác thực. Giữ nguyên và đánh dấu cần nguồn/provenance; không thay bằng stock hoặc dựng GIS mới.
4. Natural Rural Density Comparison, Connected Water và các minh họa kỹ thuật được chỉ định riêng vẫn giữ lựa chọn hiện có. Ảnh chụp nhỏ trang trí trong Screenshot 110 có thể nằm trong danh sách thay; bố cục, copy, map thumbnail và ý nghĩa so sánh vẫn giữ.
5. Mock cover/public-record thumbnail phải lấy từ tài liệu thật tương ứng nếu thay; không dùng ảnh stock hoặc tạo trang văn bản giả làm hồ sơ chính thức.
6. Logo, icon, navigation, form, card, screenshot trong laptop và chữ UI thuộc phần dựng component, không phải danh sách tìm ảnh chụp thay thế.
7. Không kết luận ảnh nào do AI tạo chỉ từ việc nó nằm trong screenshot. Đây là rà soát nguồn/khả năng thay, không phải kết luận giám định AI.

## Phạm vi hiện tại và hồ sơ trước đó

Đã hoàn thành inventory vị trí cần ảnh thay và nhóm phải bảo toàn, sau đó tách các vùng photo theo chỉ dẫn mới nhất ở đầu tài liệu. **Dùng ảnh hiện có cho demo; tìm nguồn thay sau.** Chưa tìm/tải ảnh bên ngoài, code website hoặc publish. PDF và toàn bộ 43 ảnh archive giữ nguyên; file crop lưu riêng, có kiểm tra pixel so với nguồn.

- [Bản ghi máy đọc được](project-approvals.json).
- [Bản hồ sơ trước thay đổi quy tắc ảnh](review-history/section-review-before-image-policy-update.json).
- [Danh sách kiểm kê ảnh](IMAGE_REPLACEMENT_AUDIT.md).
- [Bản xem có đánh dấu vị trí](IMAGE_REPLACEMENT_AUDIT.html).
