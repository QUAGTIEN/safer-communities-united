# Ảnh dùng tạm cho demo — lấy đúng từ screenshot blueprint

**Chất lượng chưa được duyệt cho toàn bộ bộ ảnh:** 46/79 ảnh rộng dưới 300 px; nhiều thumbnail chỉ phù hợp kích thước nhỏ. Xem [kiểm tra độ phân giải và tiêu chí rõ nét](../../docs/IMAGE_QUALITY_REVIEW.md). Giữ nguyên pixel nguồn không bảo đảm sắc nét khi phóng lớn.

Theo chỉ dẫn mới nhất: “oke, tôi sẽ thay sau nhưng hiện tại bạn lấy y chang ảnh đó thì có được không”. Tạm hoãn tìm ảnh bên ngoài; dùng chính các vùng ảnh đang nhìn thấy trong screenshot. Không dùng AI để tạo lại ảnh hoặc phục hồi phần bị che.

- [Xem toàn bộ ảnh](gallery.html) · [Manifest và liên kết từng vị trí](manifest.json).
- `photos/`: **79 file PNG**, phân nhóm theo trang, tương ứng 79/80 photo slots trong inventory. ID giữ nguyên để thay ảnh về sau mà vẫn biết section/trang PDF nguồn.
- `contact-sheets/`: 5 bảng ảnh thu nhỏ chỉ phục vụ kiểm tra, không dùng làm asset website.
- Ba bản đồ gốc PDF 8, 9, 11 được tham chiếu trực tiếp trong manifest từ `assets/blueprint/maps/`; không tạo crop hoặc bản mã hóa lại của chúng.

## Bổ sung khi triển khai Home — lượt 2

`documents/p017-05.png` là vùng crop lossless 365 × 145 px từ đúng card Community Plan trong screenshot Home, lưu riêng ở [document-fragments.json](document-fragments.json). File giữ pixel vùng `[1130,609,1495,754)` của ảnh cha, không phải preview đã xác minh từ hồ sơ chính thức. Khi hiển thị luôn có nhãn “Illustrative document preview”. Việc này không thay source document chính thức hoặc cho phép làm giả cover; nguồn tài liệu thật vẫn theo source register.

79 photo crops trong manifest ban đầu không thay đổi. Home đã có số đo ở 7 chiều rộng và DPR 1/2 trong [báo cáo lượt 2](../../docs/CODING_ROUND_02.md); không coi toàn bộ nguồn là đã đủ nét cho Retina.

## Phạm vi “y chang”

Lượt 6 bổ sung bảy visual regions và một cover fragment của Growth vào hai manifests hiện có. Then/Today giữ legends và graphic annotations, không phải verified historical GIS; density giữ selected rural lanes/tree cover; services giữ toàn legend màu/scale. Evidence map/cover thumbnails có nhãn minh họa. 11 photo crops cũ dùng nguyên file; không khôi phục cảnh bị che. [Báo cáo](../../docs/CODING_ROUND_06.md). Tổng dẫn xuất hiện có: 22 visual regions và tám document/cover fragments, ngoài 79 photo crops ban đầu.

Lượt 5 bổ sung 10 visual regions và hai document thumbnails của Water; [visual manifest](visual-fragments.json), [document manifest](document-fragments.json). Bao gồm hero visible region/ba sơ đồ, hai map, chart nguyên artwork, system overview và cutaway đúng bản, evidence thumbnails. Chart inputs chưa xác minh; hero có flag partial-scene, không phục hồi phần background bị che. Mười photo crops cũ của Water được dùng nguyên file. [Báo cáo và giới hạn](../../docs/CODING_ROUND_05.md).

Lượt 4 bổ sung hai map regions của Roads vào [visual-fragments.json](visual-fragments.json) và bốn thumbnail/cover compositions vào [document-fragments.json](document-fragments.json). Tất cả là crop nguyên pixel từ selected screenshots, không phải GIS/official record previews đã xác minh. Bìa R08 giữ nguyên composition cover + photo đang nhìn thấy, không dựng lại từ partial-scene slots. Hero Roads chưa có ảnh độc lập được chọn; dùng labelled preview. Sáu photo crops hiện có của Roads được dùng nguyên file. [Báo cáo và giới hạn](../../docs/CODING_ROUND_04.md).

Lượt 3 bổ sung ba vùng map screenshot trong `visuals/`, có [manifest riêng](visual-fragments.json): Water overview, schematic services, Community Plan boundary illustration. Mỗi vùng giữ đủ nhãn/legend/scale và pixel nguồn, không phải GIS đã xác minh. Ba map gốc và 79 photo crops ban đầu không sửa. Nền aerial Connections đầy đủ không tách được khỏi lớp UI; chỉ dùng ba photo strips hiện có, không phục hồi phần che. Xem [báo cáo lượt 3](../../docs/CODING_ROUND_03.md).

Mỗi PNG giữ nguyên kích thước vùng cắt, chế độ màu và pixel đã giải mã của screenshot nguồn. Không resize, upscale, sửa màu, sharpen, xóa chữ, xóa icon, xóa số hoặc vá nền. JPEG nguồn chỉ được đọc, vùng cắt được lưu PNG để không nén mất dữ liệu thêm. Đây là file dẫn xuất, không phải file ảnh chụp gốc trước khi bị ghép vào screenshot.

Ảnh có thể còn bo góc/nền góc, icon/số, nhãn “Illustration”, khung tròn hoặc hiệu ứng mờ/tint đã dính sẵn. Manifest đánh dấu `embedded-icon`, `embedded-number`, `illustration-label`, `circular-mask`, `baked-gradient`, `baked-tint`. `partial-scene` nghĩa là chỉ có một phần cảnh tách được, không phải toàn bộ nền ban đầu; không tự kéo giãn mảnh đó để coi là đã phục hồi bố cục gốc. Kích thước nhỏ có `small_source: true`; chưa bảo đảm dùng được cho hero lớn.

**P087-01 (PDF 87/88, petition): chỉ giữ tham chiếu.** Tiêu đề và form che gần hết nền. Không xuất cả screenshot có form làm ảnh nền và không vá/ghép phần bị che. Chưa có asset nền độc lập đầy đủ cho vị trí này.

Map/diagram, minh họa kỹ thuật được chỉ định và thumbnail tài liệu không thuộc 80 photo slots này vẫn giữ nguyên trong archive; không được coi việc crop photo là cho phép thay chúng. Ảnh minh họa chưa được xác minh nguồn gốc/địa điểm, không dùng làm bằng chứng địa phương hoặc lời chứng thật. Toàn bộ copy và các nhãn sample/caveat đã duyệt vẫn áp dụng khi code.

## Dùng và thay về sau

Tra `slots` theo `slot_id` hoặc `section_ids`. Mỗi mục ghi `parent_path`, `parent_sha256`, `source_pdf_pages`, `crop_box_xyxy`, dimensions và hash file dẫn xuất. Tọa độ là pixel nguyên `[left, top, right, bottom)` đã rà soát; không phải phần trăm locator gần đúng của inventory.

Khi có ảnh thay, lưu ở thư mục khác và cập nhật binding theo slot; giữ nguyên archive và hồ sơ crop để đối chiếu. Chưa tạo Next.js app/public URLs, chưa code giao diện.

Script tái tạo: [extract_demo_photo_fragments.py](../../tools/extract_demo_photo_fragments.py). Mỗi lần chạy kiểm tra hash PDF, toàn bộ 43 ảnh archive và đối chiếu pixel từng PNG với vùng cắt của ảnh cha. Đã xem lại cả 5 contact sheets. Gallery dùng file tại chỗ, không gửi dữ liệu ra ngoài.
