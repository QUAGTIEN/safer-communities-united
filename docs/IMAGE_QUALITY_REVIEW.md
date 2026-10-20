# Kiểm tra chất lượng ảnh demo

## Cập nhật sau khi dựng The Facts — lượt 7

Đã đo 12 hình trên dev và Pages static export ở bảy chiều rộng × DPR 1/2; không phóng vượt native dimensions ở DPR 1. Tại cả 1440 và 390 px, 12/12 hình thiếu ngân sách pixel DPR 2. Đây không phải chứng nhận optical sharpness; nguồn ảnh lớn hơn vẫn cần về sau.

Tám photo crops cũ và bốn exact-pixel fragments mới giữ nguyên nguồn; document/map thumbnails có nhãn minh họa. Header backgrounds chỉ có visible faded portions; CTA chỉ có strip 286 × 37 px, không kéo thành full background. Không AI/upscale/sharpen hoặc chỉnh map. [Báo cáo](CODING_ROUND_07.md), [số đo](coding-round-07-checks.json).


## Cập nhật sau khi dựng Growth & Daily Life — lượt 6

Đã đo 19 hình trên dev/static export ở bảy chiều rộng × DPR 1/2. Không phóng vượt native pixels ở DPR 1. Tại 1440 px có 19/19 hình thiếu ngân sách pixel DPR 2; tại 390 px có 12/19 hình thiếu. Không coi đủ pixel là đã chứng nhận sắc nét quang học.

Then/Today và density giữ đúng selected screenshot regions; services map giữ cả color legend/scale và có HTML transcription/full-size link để đọc mobile. Thumbnails dịch vụ giữ nguyên 97 × 49–50 px, không phóng lớn. Không ảnh thay mới/AI/upscale/sharpen; original maps bất biến. [Báo cáo](CODING_ROUND_06.md), [số đo](coding-round-06-checks.json).

## Cập nhật sau khi dựng Water & Septic — lượt 5

Đã đo 22 hình trên dev/static export ở bảy chiều rộng × DPR 1/2; không phóng vượt pixel nguồn ở DPR 1. Tại 1440 px có 21/22 hình thiếu ngân sách pixel DPR 2; tại 390 px có 16/22 hình thiếu. Không coi các hình đủ pixel là đã chứng nhận độ nét quang học. Giữ yêu cầu nguồn ảnh lớn hơn cho sau, không AI/upscale/sharpen.

Hero và next-issue chỉ dùng phần cảnh nhìn thấy; không khôi phục background dưới chữ. Diagrams/cutaway, map legends và chart axes được giữ nguyên từ selected artwork; full-size links giúp đọc chi tiết mobile. Chart annual inputs và evidence/map provenance chưa xác minh được ghi rõ. [Báo cáo lượt 5](CODING_ROUND_05.md), [số đo](coding-round-05-checks.json).

## Cập nhật sau khi dựng Roads & Safety — lượt 4

Đã đo 12 hình trên dev/static export tại bảy chiều rộng × DPR 1/2. Không hình nào phóng vượt kích thước pixel nguồn ở DPR 1. Tại 1440 px, cả 12 hình thiếu ngân sách pixel cho DPR 2; tại 390 px, 8/12 hình thiếu. Bốn ảnh safety lớn đủ pixel cho mobile 390/DPR 2 vẫn chưa phải chứng nhận sắc nét quang học. Thumbnail/covers in sẵn trong screenshot cần nguồn lớn hơn về sau; không nâng nét hoặc tự tạo cover.

Hero Roads chưa có file ảnh độc lập được chọn, dùng preview có nhãn. Hai map regions và bốn document/cover fragments mới giữ đúng pixel/tỷ lệ/legend/source-artwork. Route map mobile có link full-size để đọc nhãn. [Báo cáo lượt 4](CODING_ROUND_04.md), [số đo](coding-round-04-checks.json).

## Cập nhật sau khi dựng Issues — lượt 3

Đã đo 20 hình (17 photo crops và ba screenshot map regions) trên dev/static export, tại bảy chiều rộng × DPR 1/2. Không phóng vượt kích thước nguồn ở DPR 1. Tại 1440 px, cả 20 hình thiếu ngân sách pixel cho DPR 2; tại 390 px có 17/20 hình thiếu. Ba hình còn lại đủ pixel không đồng nghĩa đã được chứng nhận độ sắc nét quang học. Giữ yêu cầu ảnh thay/file gốc lớn hơn cho sau, không AI/upscale hoặc sửa map.

Ba map screenshot giữ đúng vùng hình đầy đủ, có provenance và full-size links; nhãn legend vẫn nhỏ khi thu về mobile. Nền aerial Connections không có file độc lập đầy đủ không bị che; chỉ dùng ba dải photo sẵn có ở đúng tỷ lệ, không tái tạo nền. [Báo cáo lượt 3](CODING_ROUND_03.md), [số đo](coding-round-03-checks.json).

## Cập nhật sau khi dựng Home — lượt 2

Đã đo trực tiếp 5 hình Home ở 320/390/560/768/1000/1152/1440 CSS px, DPR 1 và DPR 2. Không hình nào bị phóng vượt chiều rộng pixel nguồn ở DPR 1. Tại desktop 1440 px, hero hiển thị 725 px từ nguồn 886 px: đủ ngân sách 1x, thiếu ngân sách 2x. Ở mobile 390 px, hero hiển thị 350 px nên đủ ngân sách 2x; bốn card chưa đủ ngân sách 2x. Đây là kiểm tra số pixel, không phải chứng nhận độ sắc nét quang học của ảnh gốc.

Ba map vẫn dùng file PNG nguyên bản, đầy đủ tỷ lệ/legend/nhãn; mobile có link mở full-size để đọc chi tiết. Source document fragment của Home được ghi rõ minh họa. Không thay ảnh hoặc dùng AI/upscale. [Số đo từng ảnh/viewport](coding-round-02-checks.json), [báo cáo lượt 2](CODING_ROUND_02.md).

## Kết luận

**Chưa thể bảo đảm toàn bộ ảnh hiện có đều rõ nét ở kích thước hiển thị cuối cùng.** Việc crop giữ nguyên pixel nguồn, không tạo thêm chi tiết. Phần kiểm kê bên dưới được lập trước coding; các số đo khi dựng Home/Issues/Roads được bổ sung phía trên, những trang chưa triển khai chưa được nghiệm thu ảnh trên giao diện.

- 79 vùng ảnh có file: **46 ảnh rộng dưới 300 px**, trong đó **28 ảnh dưới 200 px**. Các nhóm này có thể dùng nhỏ nhưng có nguy cơ nhòe khi phóng lớn.
- 10 ảnh có `baked-gradient`: hiệu ứng chuyển sáng/làm nhạt có sẵn. Điều này không tự chứng minh ảnh mất nét; không thể tắt lớp hiệu ứng đã làm phẳng để khôi phục ảnh ban đầu.
- Thumbnail dịch vụ P058-02…06 chỉ 97 × 49–50 px; không phù hợp để làm card ảnh lớn.
- Home hero P017-01: 886 × 437 px, nhìn khá rõ ở kích thước nguồn qua kiểm tra trực quan; chưa đủ để mặc định sắc nét cho mọi hero lớn hoặc màn hình DPR 2.
- P087-01 vẫn chưa có nền độc lập đầy đủ.

Đã đọc dimensions của tất cả file và xem trực tiếp mẫu ở kích thước gốc: P017-01, P058-02, P067-02, P070-01, P030-01. Không dùng điểm số blur tự động để kết luận các ảnh tối, bầu trời hoặc nền gradient là hỏng.

## Tiêu chí triển khai mới

Người dùng yêu cầu ảnh phải rõ nét. Không tự đánh dấu bộ crop hiện tại là đã đạt. Kiểm tra ở kích thước hiển thị thực trên desktop/mobile, DPR 1 và DPR 2. Cần đủ pixel cho cả chiều rộng lẫn chiều cao; `object-fit: cover` có thể cần nguồn lớn hơn do phải cắt vừa khung.

Ở DPR 2, ảnh 886 × 437 px có ngân sách hiển thị khoảng 443 × 218,5 CSS px; thumbnail 97 × 50 px chỉ khoảng 48,5 × 25 CSS px. Đây là giới hạn lấy mẫu để tránh phóng pixel, không phải chứng nhận sắc nét: ảnh gốc có thể đã mềm nét/nén/mờ.

Giữ bố cục đã duyệt. Khi nguồn không đủ cho khung ảnh cần thiết, đánh dấu thiếu nguồn độ phân giải cao; ưu tiên file ảnh gốc lớn hơn của cùng ảnh. Chưa tự tìm ảnh ngoài vì người dùng đang để việc thay nguồn cho sau. Không tự dùng AI/upscale/sharpen để tuyên bố đã đạt chất lượng.

Ba bản đồ giữ nguyên byte/hash: 1544 × 1621, 2047 × 1351, 2046 × 1432 px. Không crop/sửa/nâng nét. Khi triển khai phải kiểm tra chữ/legend ở kích thước thực; thu nhỏ nhiều vẫn có thể làm chữ khó đọc.

## Ngân sách pixel từng ảnh

Cột DPR 2 giữ đúng tỷ lệ nguồn; chưa chỉ định kích thước giao diện hoặc phê duyệt chất lượng.

| Slot | File và kích thước nguồn | Ngân sách CSS px tại DPR 2 | Giới hạn có sẵn |
|---|---|---|---|
| P017-01 | [886 × 437 px](../assets/demo-current/photos/home/p017-01.png) | 443 × 218.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P017-02 | [353 × 145 px](../assets/demo-current/photos/home/p017-02.png) | 176.5 × 72.5 | embedded-icon |
| P017-03 | [348 × 145 px](../assets/demo-current/photos/home/p017-03.png) | 174 × 72.5 | embedded-icon |
| P017-04 | [332 × 145 px](../assets/demo-current/photos/home/p017-04.png) | 166 × 72.5 | embedded-icon |
| P019-01 | [818 × 245 px](../assets/demo-current/photos/issues/p019-01.png) | 409 × 122.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P021-02 | [179 × 68 px](../assets/demo-current/photos/issues/p021-02.png) | 89.5 × 34 | embedded-icon |
| P021-03 | [179 × 68 px](../assets/demo-current/photos/issues/p021-03.png) | 89.5 × 34 | embedded-icon |
| P021-04 | [178 × 68 px](../assets/demo-current/photos/issues/p021-04.png) | 89 × 34 | embedded-icon |
| P021-05 | [179 × 68 px](../assets/demo-current/photos/issues/p021-05.png) | 89.5 × 34 | embedded-icon |
| P021-06 | [179 × 68 px](../assets/demo-current/photos/issues/p021-06.png) | 89.5 × 34 | embedded-icon |
| P021-07 | [178 × 68 px](../assets/demo-current/photos/issues/p021-07.png) | 89 × 34 | embedded-icon |
| P025-02 | [240 × 117 px](../assets/demo-current/photos/issues/p025-02.png) | 120 × 58.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P025-03 | [254 × 90 px](../assets/demo-current/photos/issues/p025-03.png) | 127 × 45 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P025-04 | [253 × 63 px](../assets/demo-current/photos/issues/p025-04.png) | 126.5 × 31.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P025-05 | [197 × 73 px](../assets/demo-current/photos/issues/p025-05.png) | 98.5 × 36.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P025-06 | [188 × 73 px](../assets/demo-current/photos/issues/p025-06.png) | 94 × 36.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P025-07 | [202 × 73 px](../assets/demo-current/photos/issues/p025-07.png) | 101 × 36.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P025-08 | [199 × 73 px](../assets/demo-current/photos/issues/p025-08.png) | 99.5 × 36.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P027-02 | [403 × 57 px](../assets/demo-current/photos/issues/p027-02.png) | 201.5 × 28.5 | partial-scene |
| P027-03 | [376 × 57 px](../assets/demo-current/photos/issues/p027-03.png) | 188 × 28.5 | partial-scene |
| P027-04 | [401 × 57 px](../assets/demo-current/photos/issues/p027-04.png) | 200.5 × 28.5 | partial-scene |
| P030-01 | [813 × 420 px](../assets/demo-current/photos/roads/p030-01.png) | 406.5 × 210 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P031-01 | [798 × 280 px](../assets/demo-current/photos/roads/p031-01.png) | 399 × 140 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P032-01 | [786 × 389 px](../assets/demo-current/photos/roads/p032-01.png) | 393 × 194.5 | illustration-label |
| P033-01 | [824 × 377 px](../assets/demo-current/photos/roads/p033-01.png) | 412 × 188.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P039-01 | [262 × 218 px](../assets/demo-current/photos/roads/p039-01.png) | 131 × 109 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P039-02 | [270 × 218 px](../assets/demo-current/photos/roads/p039-02.png) | 135 × 109 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P041-01 | [288 × 188 px](../assets/demo-current/photos/roads/p041-01.png) | 144 × 94 | partial-scene |
| P041-02 | [288 × 103 px](../assets/demo-current/photos/roads/p041-02.png) | 144 × 51.5 | partial-scene |
| P049-01 | [617 × 286 px](../assets/demo-current/photos/water/p049-01.png) | 308.5 × 143 | baked-gradient |
| P049-02 | [138 × 135 px](../assets/demo-current/photos/water/p049-02.png) | 69 × 67.5 | circular-mask |
| P049-03 | [138 × 135 px](../assets/demo-current/photos/water/p049-03.png) | 69 × 67.5 | circular-mask |
| P049-04 | [138 × 135 px](../assets/demo-current/photos/water/p049-04.png) | 69 × 67.5 | circular-mask |
| P051-01 | [1536 × 103 px](../assets/demo-current/photos/water/p051-01.png) | 768 × 51.5 | baked-gradient |
| P052-01 | [230 × 103 px](../assets/demo-current/photos/water/p052-01.png) | 115 × 51.5 | partial-scene, baked-gradient, baked-tint |
| P052-02 | [270 × 103 px](../assets/demo-current/photos/water/p052-02.png) | 135 × 51.5 | partial-scene, baked-gradient |
| P053-01 | [263 × 101 px](../assets/demo-current/photos/water/p053-01.png) | 131.5 × 50.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P053-02 | [265 × 101 px](../assets/demo-current/photos/water/p053-02.png) | 132.5 × 50.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P053-06 | [666 × 266 px](../assets/demo-current/photos/water/p053-06.png) | 333 × 133 | partial-scene |
| P058-02 | [97 × 50 px](../assets/demo-current/photos/growth/p058-02.png) | 48.5 × 25 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P058-03 | [97 × 50 px](../assets/demo-current/photos/growth/p058-03.png) | 48.5 × 25 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P058-04 | [97 × 49 px](../assets/demo-current/photos/growth/p058-04.png) | 48.5 × 24.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P058-05 | [97 × 49 px](../assets/demo-current/photos/growth/p058-05.png) | 48.5 × 24.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P058-06 | [97 × 49 px](../assets/demo-current/photos/growth/p058-06.png) | 48.5 × 24.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P059-01 | [270 × 337 px](../assets/demo-current/photos/growth/p059-01.png) | 135 × 168.5 | partial-scene |
| P059-02 | [268 × 337 px](../assets/demo-current/photos/growth/p059-02.png) | 134 × 168.5 | partial-scene |
| P060-03 | [205 × 151 px](../assets/demo-current/photos/growth/p060-03.png) | 102.5 × 75.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P060-05 | [169 × 152 px](../assets/demo-current/photos/growth/p060-05.png) | 84.5 × 76 | partial-scene |
| P060-06 | [189 × 152 px](../assets/demo-current/photos/growth/p060-06.png) | 94.5 × 76 | partial-scene |
| P060-07 | [641 × 208 px](../assets/demo-current/photos/growth/p060-07.png) | 320.5 × 104 | partial-scene, baked-gradient |
| P063-01 | [265 × 211 px](../assets/demo-current/photos/comparison/p063-01.png) | 132.5 × 105.5 | partial-scene |
| P063-02 | [472 × 190 px](../assets/demo-current/photos/comparison/p063-02.png) | 236 × 95 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P063-03 | [471 × 190 px](../assets/demo-current/photos/comparison/p063-03.png) | 235.5 × 95 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P065-01 | [736 × 217 px](../assets/demo-current/photos/comparison/p065-01.png) | 368 × 108.5 | partial-scene, baked-gradient |
| P067-01 | [776 × 227 px](../assets/demo-current/photos/comparison/p067-01.png) | 388 × 113.5 | partial-scene, baked-gradient |
| P067-02 | [175 × 83 px](../assets/demo-current/photos/comparison/p067-02.png) | 87.5 × 41.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P067-03 | [175 × 90 px](../assets/demo-current/photos/comparison/p067-03.png) | 87.5 × 45 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P067-04 | [175 × 89 px](../assets/demo-current/photos/comparison/p067-04.png) | 87.5 × 44.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P067-05 | [175 × 90 px](../assets/demo-current/photos/comparison/p067-05.png) | 87.5 × 45 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P067-06 | [189 × 90 px](../assets/demo-current/photos/comparison/p067-06.png) | 94.5 × 45 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P067-07 | [189 × 88 px](../assets/demo-current/photos/comparison/p067-07.png) | 94.5 × 44 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P067-08 | [189 × 89 px](../assets/demo-current/photos/comparison/p067-08.png) | 94.5 × 44.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P068-01 | [671 × 256 px](../assets/demo-current/photos/comparison/p068-01.png) | 335.5 × 128 | partial-scene, baked-gradient |
| P070-01 | [446 × 237 px](../assets/demo-current/photos/evidence/p070-01.png) | 223 × 118.5 | partial-scene, baked-gradient |
| P070-02 | [354 × 171 px](../assets/demo-current/photos/evidence/p070-02.png) | 177 × 85.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P070-03 | [346 × 171 px](../assets/demo-current/photos/evidence/p070-03.png) | 173 × 85.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P070-04 | [350 × 171 px](../assets/demo-current/photos/evidence/p070-04.png) | 175 × 85.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P072-01 | [376 × 160 px](../assets/demo-current/photos/evidence/p072-01.png) | 188 × 80 | partial-scene, baked-gradient |
| P072-04 | [197 × 84 px](../assets/demo-current/photos/evidence/p072-04.png) | 98.5 × 42 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P072-05 | [197 × 79 px](../assets/demo-current/photos/evidence/p072-05.png) | 98.5 × 39.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P072-07 | [286 × 37 px](../assets/demo-current/photos/evidence/p072-07.png) | 143 × 18.5 | partial-scene |
| P074-01 | [1124 × 401 px](../assets/demo-current/photos/action/p074-01.png) | 562 × 200.5 | partial-scene |
| P079-01 | [450 × 234 px](../assets/demo-current/photos/action/p079-01.png) | 225 × 117 | embedded-icon, embedded-number |
| P079-02 | [445 × 236 px](../assets/demo-current/photos/action/p079-02.png) | 222.5 × 118 | embedded-icon, embedded-number |
| P079-03 | [457 × 236 px](../assets/demo-current/photos/action/p079-03.png) | 228.5 × 118 | embedded-icon, embedded-number |
| P080-01 | [278 × 289 px](../assets/demo-current/photos/action/p080-01.png) | 139 × 144.5 | partial-scene |
| P082-01 | [463 × 199 px](../assets/demo-current/photos/action/p082-01.png) | 231.5 × 99.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P082-02 | [446 × 199 px](../assets/demo-current/photos/action/p082-02.png) | 223 × 99.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P082-03 | [466 × 199 px](../assets/demo-current/photos/action/p082-03.png) | 233 × 99.5 | Chưa ghi nhận overlay trong inventory; cần kiểm tra render |
| P087-01 | Chưa có nền đầy đủ | — | Chỉ giữ screenshot tham chiếu |

[Bản ghi JSON](image-quality-review.json) · [Bộ ảnh tạm](../assets/demo-current/README.md)
