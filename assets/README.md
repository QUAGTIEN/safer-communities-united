# Tài nguyên trích từ blueprint

**Cập nhật dùng cho demo:** người dùng chọn dùng tạm chính ảnh trong screenshot, thay nguồn sau. Xem [79 vùng ảnh đã tách và giới hạn](demo-current/README.md), [gallery](demo-current/gallery.html) và [manifest demo](demo-current/manifest.json). Thư mục `blueprint/` dưới đây là archive gốc, giữ nguyên tuyệt đối.

**Lượt coding 2:** Home đã dùng ba map gốc, bốn photo crops và một illustrative document crop; xem [báo cáo](../docs/CODING_ROUND_02.md). Script `scripts/sync-assets.mjs` phục vụ các bản sao đúng hash từ `public/assets/`; không biến layout preview hoặc screenshot cả trang thành website. Các ghi chú chưa khởi tạo app bên dưới mô tả bước trích asset ban đầu.

## Kết quả

Lượt coding 7 dùng tám photo crops cũ và bốn exact-pixel fragments mới (ba illustrative document/cover, một map thumbnail), giữ provenance/hashes. [Báo cáo The Facts](../docs/CODING_ROUND_07.md). Các thumbnails không phải authenticated records/GIS; original archive/PDF/ba maps giữ nguyên.

Lượt coding 6 dùng 11 photo crops hiện có và tám fragments mới (bảy visual regions, một illustrative cover), có exact-pixel provenance/hashes. [Báo cáo Growth](../docs/CODING_ROUND_06.md) giữ rõ sample counts, conceptual density, schematic service locations/drive times và missing timeline/evidence. Services asset giữ đầy đủ legend màu/north arrow/scale. Không sửa archive/PDF/ba map gốc.

Lượt coding 5 dùng 10 photo crops hiện có và 12 vùng Water screenshots mới, có pixel equality/provenance/hash. [Báo cáo Water](../docs/CODING_ROUND_05.md) phân biệt technical illustrations với GIS/contamination evidence thật, chart artwork với annual inputs và original records còn thiếu. Không sửa archive hoặc ba map gốc.

Lượt coding 4 dùng sáu photo crops hiện có và sáu vùng screenshot mới (hai map, bốn document/cover compositions); [báo cáo Roads](../docs/CODING_ROUND_04.md). File crop có provenance/hashes, không biến thành GIS/official records đã xác minh. Archive và ba map gốc không thay đổi.

Lượt coding 3 dùng thêm 17 photo crops hiện có và ba vùng map screenshot lossless có [provenance](demo-current/visual-fragments.json). Ba hình này là illustrative screenshot regions, không phải ba bản đồ gốc/GIS verified. [Báo cáo Issues](../docs/CODING_ROUND_03.md) ghi giới hạn ảnh, nền còn thiếu và supporting sources.

- Nguồn: [blueprint khách hàng](<../Copy of blueprint SAFER COMMUNITIES UNITED.docx.pdf>), 88 trang PDF, được giữ nguyên.
- **43 ảnh nhúng khác nhau**, tương ứng **47 lần xuất hiện**; 4 lần tái sử dụng được trỏ về cùng file, không tạo bản sao thừa.
- Vai trò: **3 bản đồ độc lập**, **3 layout previews nhiều panel**, **37 ảnh tham chiếu UI/panel**.
- File trích giữ kích thước, tỷ lệ, chế độ màu và từng pixel của ảnh giải mã trong PDF; JPEG giữ nguyên bitstream. Không crop, upscale, sharpen, sửa màu, tạo ảnh mới hoặc tải ảnh ngoài.
- PNG được trích lossless từ dữ liệu ảnh PDF; PNG không được mô tả là byte-identical với PDF stream đã nén. SHA-256 của từng file có trong manifest.
- ICC color profile gốc của PDF được lưu riêng trong `blueprint/profiles/` và liên kết ở mỗi entry; không gắn lại profile bằng cách sửa JPEG gốc. Chưa áp dụng chuyển đổi màu.

## Cấu trúc

```text
assets/
├── README.md
└── blueprint/
    ├── maps/                  # 3 bản đồ nhúng độc lập ở PDF 8, 9, 11
    ├── layout-previews/       # 3 panels dùng lại ở PDF 13–15 và 35–37
    ├── ui-references/         # Home, Issues, Roads, Water, Growth, Comparison, Evidence, Action
    ├── previews/              # Contact sheets thu nhỏ chỉ để kiểm kê
    ├── profiles/              # ICC color profile gốc từ PDF
    ├── manifest.json          # Ảnh, dimensions, role, hash, mọi lần xuất hiện
    └── manifest.csv           # Một dòng cho mỗi lần xuất hiện trong PDF
```

## Cách dùng

- [Manifest JSON](blueprint/manifest.json) dùng để tra chính xác file/trang nguồn; [CSV](blueprint/manifest.csv) thuận tiện kiểm kê.
- Số trang là **trang vật lý PDF**, không phải số PAGE của website. Tên file lấy trang xuất hiện đầu tiên.
- `maps/` là bản đồ độc lập để dùng theo blueprint; luôn giữ label, legend, source, tỷ lệ và caveat trong nội dung trang tương ứng.
- `layout-previews/` giữ nguyên các composition nhiều panel được chọn. Không dùng chúng thay thế GIS source ở `maps/`.
- `ui-references/` chứa screenshot/panel đã được làm phẳng. Dùng đối chiếu bố cục; text, button, navigation, card và form vẫn phải code bằng HTML/React, không đặt ảnh cả trang thay giao diện.
- Natural Rural Density Comparison (PDF 57) và Screenshot 110 (PDF 67) đã giữ đúng bản; cả hai vẫn là composite UI trong PDF, không tự nhận là file illustration độc lập đã tách.
- **PDF 87 và 88 dùng cùng một ảnh nhúng**, nên manifest liệt kê hai trang nguồn cho cùng file petition. Đọc ghi chú của từng trang và dùng toàn văn petition PDF 85 khi xây UI.
- Ảnh gốc có nhãn nhỏ, số liệu mẫu hoặc UI chức năng tương lai vẫn giữ nguyên. Khi triển khai phải làm theo current copy/demo caveats trong blueprint, không tự coi mọi chữ trong ảnh là dữ liệu đã xác minh.
- Trong archive, local photo, logo và illustration nằm bên trong screenshot vẫn là composite. Bước trích ảnh nhúng ban đầu không crop chúng. Bước được người dùng cho phép sau đó tạo riêng vùng photo tại `demo-current/`, không tăng độ phân giải hoặc phục hồi phần bị che, không khẳng định toàn bộ bộ ảnh đã sẵn sàng cho mọi kích thước màn hình.
- Đường dẫn manifest là đường dẫn file trong workspace; chưa tạo Next.js app/public URLs. Chưa triển khai website.

## Xem nhanh

Contact sheets là ảnh thu nhỏ phục vụ kiểm kê, không dùng làm asset website. Mở file gốc ở bảng dưới để kiểm tra chi tiết.

- [Contact sheet 1](blueprint/previews/contact-sheet-01.jpg)
- [Contact sheet 2](blueprint/previews/contact-sheet-02.jpg)
- [Contact sheet 3](blueprint/previews/contact-sheet-03.jpg)
- [Contact sheet 4](blueprint/previews/contact-sheet-04.jpg)
- [Contact sheet 5](blueprint/previews/contact-sheet-05.jpg)
- [Contact sheet 6](blueprint/previews/contact-sheet-06.jpg)

## Danh mục ảnh

| Trang PDF | File gốc trích xuất | Vai trò | Kích thước pixel |
|---|---|---|---|
| 8 | [Official Community Plan boundary map](blueprint/maps/bp-p008-01-official-boundary-map.png) | map | 1544 × 1621 |
| 9 | [Land, parcels and conservation map](blueprint/maps/bp-p009-01-land-parcels-conservation-map.png) | map | 2047 × 1351 |
| 11 | [Road network and traffic map](blueprint/maps/bp-p011-01-roads-traffic-map.png) | map | 2046 × 1432 |
| 13, 35 | [Map comparison - panel 1](blueprint/layout-previews/bp-p013-01-map-comparison-panel-1.png) | layout-preview | 661 × 750 |
| 14, 36 | [Map comparison - panel 2](blueprint/layout-previews/bp-p014-01-map-comparison-panel-2.png) | layout-preview | 661 × 1040 |
| 15, 37 | [Map comparison - panel 3](blueprint/layout-previews/bp-p015-01-map-comparison-panel-3.png) | layout-preview | 661 × 772 |
| 17 | [Home selected UI](blueprint/ui-references/home/bp-p017-01-home.png) | ui-reference | 1536 × 1024 |
| 19 | [Issues - Roads overview](blueprint/ui-references/issues/bp-p019-01-roads-overview.png) | ui-reference | 1476 × 984 |
| 21 | [Issues - Water overview](blueprint/ui-references/issues/bp-p021-01-water-overview.png) | ui-reference | 1476 × 1250 |
| 23 | [Issues - Everyday Needs](blueprint/ui-references/issues/bp-p023-01-everyday-needs.png) | ui-reference | 1092 × 1440 |
| 25 | [Issues - Outdated Community Plan](blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) | ui-reference | 1672 × 941 |
| 27 | [Issues - Connections diagram](blueprint/ui-references/issues/bp-p027-01-issues-connected.png) | ui-reference | 1355 × 1161 |
| 30 | [Roads - Street Lighting](blueprint/ui-references/roads/bp-p030-01-street-lighting.png) | ui-reference | 1476 × 984 |
| 31 | [Roads - Gunn Highway](blueprint/ui-references/roads/bp-p031-01-gunn-highway.jpg) | ui-reference | 1476 × 984 |
| 32 | [Roads - Walking, Biking and Crossings](blueprint/ui-references/roads/bp-p032-01-walking-biking-crossings.png) | ui-reference | 1476 × 984 |
| 33 | [Roads - Emergency Access](blueprint/ui-references/roads/bp-p033-01-emergency-access.jpg) | ui-reference | 1476 × 984 |
| 39 | [Roads - Records and Evidence](blueprint/ui-references/roads/bp-p039-01-records-evidence.png) | ui-reference | 1536 × 1024 |
| 41 | [Roads - Planning comparison summary](blueprint/ui-references/roads/bp-p041-01-planning-comparison.png) | ui-reference | 1476 × 984 |
| 43 | [Water - Hero](blueprint/ui-references/water/bp-p043-01-hero.png) | ui-reference | 1336 × 890 |
| 44 | [Water - Septic scale](blueprint/ui-references/water/bp-p044-01-septic-scale.jpg) | ui-reference | 1402 × 935 |
| 45 | [Water - Repair records](blueprint/ui-references/water/bp-p045-01-repair-records.jpg) | ui-reference | 1476 × 984 |
| 47 | [Water - Connected-water conceptual cutaway](blueprint/ui-references/water/bp-p047-01-connected-water.png) | ui-reference | 1341 × 1173 |
| 49 | [Water - Water and Wastewater Options](blueprint/ui-references/water/bp-p049-01-wastewater-options.png) | ui-reference | 1448 × 1086 |
| 51 | [Water - Core Conflict concise panel](blueprint/ui-references/water/bp-p051-01-core-conflict.png) | ui-reference | 1536 × 1024 |
| 52 | [Water - Comparison summary](blueprint/ui-references/water/bp-p052-01-comparison-summary.png) | ui-reference | 1476 × 984 |
| 53 | [Water - Evidence and Next Issue](blueprint/ui-references/water/bp-p053-01-evidence-next.jpg) | ui-reference | 1476 × 984 |
| 55 | [Growth - Then and Today](blueprint/ui-references/growth/bp-p055-01-then-today.jpg) | ui-reference | 1476 × 984 |
| 57 | [Growth - Natural Rural Density Comparison](blueprint/ui-references/growth/bp-p057-01-natural-rural-density.jpg) | ui-reference | 1536 × 1024 |
| 58 | [Growth - Service map illustration](blueprint/ui-references/growth/bp-p058-01-services-map.jpg) | ui-reference | 1476 × 984 |
| 59 | [Growth - Comparison summary](blueprint/ui-references/growth/bp-p059-01-comparison-summary.jpg) | ui-reference | 1476 × 984 |
| 60 | [Growth - Evidence and Outdated Plan continuation](blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg) | ui-reference | 1476 × 984 |
| 63 | [Comparison - Roads and Safety](blueprint/ui-references/comparison/bp-p063-01-roads.png) | ui-reference | 1070 × 1470 |
| 65 | [Comparison - Water and Wastewater](blueprint/ui-references/comparison/bp-p065-01-water.png) | ui-reference | 1536 × 1024 |
| 67 | [Comparison - Growth and Housing - Screenshot 110](blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) | ui-reference | 1536 × 1024 |
| 68 | [Comparison - What Remains](blueprint/ui-references/comparison/bp-p068-01-what-remains.png) | ui-reference | 1536 × 1024 |
| 70 | [Evidence - Four issue groups](blueprint/ui-references/evidence/bp-p070-01-issue-groups.png) | ui-reference | 1536 × 1024 |
| 72 | [Evidence - Library static reference](blueprint/ui-references/evidence/bp-p072-01-library.png) | ui-reference | 1536 × 1024 |
| 74 | [Action - Hero](blueprint/ui-references/action/bp-p074-01-hero.png) | ui-reference | 1672 × 941 |
| 79 | [Action - Three action cards](blueprint/ui-references/action/bp-p079-01-three-actions.png) | ui-reference | 1536 × 1024 |
| 80 | [Action - Story form preview](blueprint/ui-references/action/bp-p080-01-story-preview.png) | ui-reference | 1536 × 1024 |
| 81 | [Action - Sharing preview](blueprint/ui-references/action/bp-p081-01-sharing-preview.png) | ui-reference | 1536 × 1024 |
| 82 | [Action - Illustrative community stories](blueprint/ui-references/action/bp-p082-01-sample-stories.png) | ui-reference | 1536 × 1024 |
| 87, 88 | [Action - Approved Petition UI preview](blueprint/ui-references/action/bp-p087-01-approved-petition.png) | ui-reference | 887 × 1774 |

## Kiểm tra và tái tạo

- Đã kiểm tra mở lại mọi ảnh, dimensions/mode/pixels so với nguồn và SHA-256 các file trích.
- Đã kiểm tra 47/47 lần xuất hiện; 10 JPEG giữ nguyên bitstream.
- Script: [tools/extract_blueprint_assets.py](../tools/extract_blueprint_assets.py), cần Python có pypdf và Pillow.
- Script không ghi đè file khác nội dung khi chạy lại; báo lỗi để kiểm tra trước. PDF nguồn luôn chỉ đọc.
