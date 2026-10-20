# Danh sách ảnh cần tìm nguồn thay thế

Đây là inventory cho việc thay nguồn ảnh về sau. Theo [quyết định mới nhất](PROJECT_DECISIONS.md), demo tạm dùng chính ảnh trong screenshot; xem [các vùng ảnh đã tách và giới hạn](../assets/demo-current/README.md). Chưa tìm/tải ảnh bên ngoài, chưa code website.

[Xem ảnh có đánh dấu vị trí](IMAGE_REPLACEMENT_AUDIT.html) · [CSV](IMAGE_REPLACEMENT_AUDIT.csv) · [JSON](image-replacement-audit.json)

## Kết quả rà soát

- Đã xem 43 file ảnh khác nhau, gồm toàn bộ 37 UI references.
- **80 vị trí ảnh chụp** đề xuất cần nguồn thay, gom thành **29 brief nội dung** có thể tái sử dụng nguồn ảnh khi phù hợp.
- **12 vị trí thumbnail/cover hồ sơ** cần preview từ tài liệu thật tương ứng, không phải stock photo.
- Số đếm là vị trí sử dụng ảnh, không phải số ảnh độc lập phải mua/tải. Ảnh nền chồng với diagram/map được tách vào nhóm giữ/chờ xác minh, không tính là photo có thể thay ngay.
- Không kết luận ảnh nào là AI; nguồn gốc các photo trong UI chưa được xác minh.

## Ba bản đồ tuyệt đối giữ nguyên

| PDF | File | SHA-256 |
|---|---|---|
| 8 | [bp-p008-01-official-boundary-map](../assets/blueprint/maps/bp-p008-01-official-boundary-map.png) | `385ee9bcc364f7e51643d74417d5df93df0de8f9cbfb69ea8f50c998bd0653eb` |
| 9 | [bp-p009-01-land-parcels-conservation-map](../assets/blueprint/maps/bp-p009-01-land-parcels-conservation-map.png) | `07f897fdab75e2db857f7f93707508ebb0f305854f24171b29ebb76d63a2d3dc` |
| 11 | [bp-p011-01-roads-traffic-map](../assets/blueprint/maps/bp-p011-01-roads-traffic-map.png) | `5fd2a1bb8bc9c62ec0b34815aaaef2b4e7c710c052b5ffb61ac4bf86847b8fe6` |

Không thay, vẽ lại, crop, sửa màu/nội dung, retouch hoặc thêm hiệu ứng làm thay đổi bản đồ. Giữ các panel PDF 13–15 / 35–37. Các maps bên trong screenshot khác chưa được xác nhận là original nhưng cũng không được tự thay bằng stock.

## Những hình không nằm trong danh sách tìm stock thay

- Natural Rural Density Comparison PDF 57 và Connected Water PDF 47: giữ đúng selected illustrations; không tạo ảnh mới.
- Sơ đồ septic/groundwater/well ở PDF 43; map legends, data layers, repair chart, service maps và then/today map pair: giữ/chờ nguồn, không sửa hoặc đổi thành ảnh minh họa khác.
- Screenshot 110 PDF 67: giữ layout/copy và land-use map thumbnail; chỉ các photo nhỏ/header được ghi trong bảng là candidate thay.
- Logo, icons, avatars, text, forms, cards, navigation và laptop/share-page mockup: thuộc UI/components, không phải yêu cầu kiếm ảnh stock.

## Brief tìm ảnh theo chủ đề (chưa bắt đầu tìm)

### rural — Cảnh quan nông thôn / hàng rào / đồng cỏ

Ảnh thật Florida phù hợp rural character; chỉ ghi đúng địa điểm và thời gian đã biết, không giả cảnh năm 2001.

Vị trí: P017-01, P025-02, P052-01, P059-01, P067-01, P067-02, P067-03, P067-05, P068-01, P070-01, P072-01, P072-07, P087-01.

### road-day — Đường địa phương ban ngày / traffic

Ảnh thật đường hai làn có cây, traffic; ưu tiên Keystone–Odessa/Gunn Highway nếu gắn tên địa điểm. Không dùng ảnh nơi khác rồi gọi là Gunn Highway.

Vị trí: P017-02, P019-01, P025-03, P025-05, P027-02, P031-01, P039-02, P041-01, P060-05, P063-01, P063-02, P063-03, P070-02, P082-01.

### lake — Hồ nước / wetland / water landscape

Ảnh thật hồ/wetland; không coi hình đẹp là bằng chứng chất lượng nước hoặc wellfield thực tế.

Vị trí: P017-03, P021-05, P021-06, P025-06, P027-03, P049-01, P049-04, P051-01, P070-03, P072-04.

### housing — Nhà ở / neighborhood

Ảnh thật nhà ở Mỹ/Florida; ưu tiên địa phương. Không suy density/giá nhà từ ảnh minh họa.

Vị trí: P017-04, P025-07, P027-04, P053-06, P067-04, P070-04.

### septic-lid — Septic tank / inspection lid

Ảnh thật septic lid/tank đúng thiết bị; không ảnh cống hoặc bể khác bị gọi là septic.

Vị trí: P021-02, P049-02.

### septic-repair — Septic construction / repair

Ảnh thật thi công/sửa septic; không mô tả là một hồ sơ sửa chữa địa phương cụ thể khi chưa có nguồn.

Vị trí: P021-03, P053-02, P072-05.

### well — Giếng tư nhân / wellhead

Ảnh thật wellhead/pump phù hợp nhà ở Mỹ; không nhầm fire hydrant hoặc municipal valve thành private well.

Vị trí: P021-04, P049-03.

### water-infrastructure — Ống / van / water utility infrastructure

Ảnh thật hệ thống nước/van/bồn; chỉ gọi cơ sở địa phương khi xác minh được.

Vị trí: P021-07, P065-01.

### civic-building — Tòa nhà civic / County office

Nếu biểu đạt cơ quan cụ thể, dùng ảnh đúng cơ quan có nguồn. Ảnh office chung chỉ là minh họa, không giả là Planning Commission headquarters.

Vị trí: P025-04.

### retail — Dịch vụ / phố thương mại

Ảnh thật khu dịch vụ/retail; không tự gắn địa chỉ hoặc khẳng định cơ sở nằm trong/outside Plan boundary.

Vị trí: P025-08, P082-03.

### road-night — Đường ban đêm / lighting

Ảnh thật đường hai làn ban đêm; không bịa vị trí, vụ tai nạn hoặc chứng minh tình trạng local street lighting bằng ảnh không rõ nguồn.

Vị trí: P030-01.

### walking — Đi bộ / xe đạp / crossing

Ảnh thật pedestrian/cyclist/crossing phù hợp ngữ cảnh Mỹ; không dùng hình một nơi khác như khảo sát hiện trạng Gunn Highway.

Vị trí: P032-01.

### emergency — Fire truck / ambulance trên đường

Ảnh thật xe cứu hộ/cứu thương Mỹ; không trình bày như incident hoặc response delay đã ghi nhận tại Keystone–Odessa.

Vị trí: P033-01.

### crash — Ảnh minh họa road crash

Ảnh thật có thể dùng minh họa, ưu tiên không đồ họa thương tích; phải tránh ám chỉ đây là một vụ tai nạn địa phương có trong dataset khi chưa có nguồn.

Vị trí: P039-01.

### county-aerial — Ảnh giao thông / city aerial cho County

Ảnh thật Tampa/Hillsborough nếu ghi tên; không bịa skyline/đường giao thông từ mock cover.

Vị trí: P041-02, P052-02.

### aerial — Ảnh chụp trên cao khu dân cư / landscape

Ảnh hàng không có nguồn địa điểm rõ; chỉ làm hình minh họa, không thay satellite map/ranh/heatmap hoặc tạo then/today từ hai nơi khác nhau.

Vị trí: P053-01, P059-02, P060-03, P060-07, P067-06.

### grocery — Grocery / supermarket

Ảnh thật supermarket ở Mỹ; không ám chỉ là pin/địa chỉ/thời gian di chuyển đã được xác minh.

Vị trí: P058-02.

### healthcare — Healthcare / clinic

Ảnh thật cơ sở y tế Mỹ; không dùng làm bằng chứng denied care hoặc thời gian tiếp cận đã đo.

Vị trí: P058-03.

### childcare — Childcare facility

Ảnh thật cơ sở childcare phù hợp Mỹ; có thể chọn mặt ngoài, không cần thêm ảnh trẻ em/nhân vật vào nội dung.

Vị trí: P058-04.

### restaurant — Restaurant / local services

Ảnh thật nhà hàng/retail phù hợp Mỹ; địa điểm/drive-time vẫn chỉ theo caveat của blueprint.

Vị trí: P058-05.

### employment — Employment / office building

Ảnh thật văn phòng/doanh nghiệp; không suy ra số việc làm hoặc vị trí cơ sở từ ảnh.

Vị trí: P058-06.

### construction — Thi công nhà / hạ tầng

Ảnh thật construction, wood framing hoặc utility work đúng ngữ cảnh; không gọi là dự án cụ thể nếu chưa có nguồn.

Vị trí: P060-06, P067-08.

### housing-choice — Townhomes / housing variety

Ảnh thật nhiều kiểu nhà phù hợp Mỹ; không khẳng định loại nhà được tự động phê duyệt trong Keystone–Odessa.

Vị trí: P067-07.

### family — Gia đình / cộng đồng bên cảnh quan

Ảnh thật tự nhiên, phù hợp community participation; không coi người trong ảnh là supporter hoặc resident đã ký petition.

Vị trí: P074-01.

### support-prop — Clipboard / civic participation

Ảnh thật clipboard/pen/blank form làm minh họa; không chữ ký thật hoặc form được giả thành hồ sơ đã nộp.

Vị trí: P079-01.

### writing — Viết câu chuyện / notebook

Ảnh thật bàn tay viết sổ, không nội dung cá nhân đọc được; không thêm lời chứng thật không có nguồn.

Vị trí: P079-02.

### paperwork — Chồng tài liệu / folders minh họa

Ảnh thật giấy/tài liệu chung dùng trang trí; không tự tạo con dấu, tên cơ quan hoặc hồ sơ chính thức giả.

Vị trí: P079-03.

### mailbox — Mailbox / đường dân cư

Ảnh thật mailbox/đường dân cư; không tự chèn ZIP 33556 hoặc địa chỉ giả để tạo vẻ local.

Vị trí: P080-01.

### water-glass — Ly nước minh họa

Ảnh thật ly nước dùng minh họa; không coi màu nước là bằng chứng ô nhiễm tại giếng/resident cụ thể.

Vị trí: P082-02.

## CẦN TÌM ẢNH CHỤP THAY

| ID / PDF | Vị trí trong screenshot | Nhóm nguồn / cách xử lý | File tham chiếu |
|---|---|---|---|
| P017-01 / 17 | Hero — cảnh đường/cộng đồng với cổng Keystone–Odessa | Cảnh quan nông thôn / hàng rào / đồng cỏ. Không giả cổng/biển tên địa phương; ưu tiên ảnh local có nguồn thật. | [bp-p017-01-home](../assets/blueprint/ui-references/home/bp-p017-01-home.png) |
| P017-02 / 17 | Issue card Roads — đường và traffic | Đường địa phương ban ngày / traffic | [bp-p017-01-home](../assets/blueprint/ui-references/home/bp-p017-01-home.png) |
| P017-03 / 17 | Issue card Water — hồ/cảnh quan nước | Hồ nước / wetland / water landscape | [bp-p017-01-home](../assets/blueprint/ui-references/home/bp-p017-01-home.png) |
| P017-04 / 17 | Issue card Everyday Needs — nhà ở | Nhà ở / neighborhood | [bp-p017-01-home](../assets/blueprint/ui-references/home/bp-p017-01-home.png) |
| P019-01 / 19 | Ảnh đường và pedestrian bên dưới heading Roads | Đường địa phương ban ngày / traffic | [bp-p019-01-roads-overview](../assets/blueprint/ui-references/issues/bp-p019-01-roads-overview.png) |
| P021-02 / 21 | Septic Concentration | Septic tank / inspection lid | [bp-p021-01-water-overview](../assets/blueprint/ui-references/issues/bp-p021-01-water-overview.png) |
| P021-03 / 21 | Septic Repairs | Septic construction / repair | [bp-p021-01-water-overview](../assets/blueprint/ui-references/issues/bp-p021-01-water-overview.png) |
| P021-04 / 21 | Private Wells | Giếng tư nhân / wellhead | [bp-p021-01-water-overview](../assets/blueprint/ui-references/issues/bp-p021-01-water-overview.png) |
| P021-05 / 21 | Groundwater — thumbnail mặt nước | Hồ nước / wetland / water landscape | [bp-p021-01-water-overview](../assets/blueprint/ui-references/issues/bp-p021-01-water-overview.png) |
| P021-06 / 21 | Wellfields, Lakes & Wetlands | Hồ nước / wetland / water landscape | [bp-p021-01-water-overview](../assets/blueprint/ui-references/issues/bp-p021-01-water-overview.png) |
| P021-07 / 21 | Water & Wastewater Infrastructure | Ống / van / water utility infrastructure | [bp-p021-01-water-overview](../assets/blueprint/ui-references/issues/bp-p021-01-water-overview.png) |
| P025-02 / 25 | Timeline 2001 — countryside | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) |
| P025-03 / 25 | Timeline TODAY — traffic | Đường địa phương ban ngày / traffic | [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) |
| P025-04 / 25 | Timeline 2026 — tòa nhà civic | Tòa nhà civic / County office | [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) |
| P025-05 / 25 | Policy area Roads — thumbnail | Đường địa phương ban ngày / traffic | [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) |
| P025-06 / 25 | Policy area Water — thumbnail | Hồ nước / wetland / water landscape | [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) |
| P025-07 / 25 | Policy area Housing — thumbnail | Nhà ở / neighborhood | [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) |
| P025-08 / 25 | Policy area Services — thumbnail | Dịch vụ / phố thương mại | [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) |
| P027-02 / 27 | Dải photo Roads ở đầu cột 1 | Đường địa phương ban ngày / traffic | [bp-p027-01-issues-connected](../assets/blueprint/ui-references/issues/bp-p027-01-issues-connected.png) |
| P027-03 / 27 | Dải photo Water ở đầu cột 2 | Hồ nước / wetland / water landscape | [bp-p027-01-issues-connected](../assets/blueprint/ui-references/issues/bp-p027-01-issues-connected.png) |
| P027-04 / 27 | Dải photo Housing ở đầu cột 3 | Nhà ở / neighborhood | [bp-p027-01-issues-connected](../assets/blueprint/ui-references/issues/bp-p027-01-issues-connected.png) |
| P030-01 / 30 | Ảnh đường ban đêm góc trên phải | Đường ban đêm / lighting | [bp-p030-01-street-lighting](../assets/blueprint/ui-references/roads/bp-p030-01-street-lighting.png) |
| P031-01 / 31 | Ảnh road/traffic dưới heading Gunn Highway | Đường địa phương ban ngày / traffic | [bp-p031-01-gunn-highway](../assets/blueprint/ui-references/roads/bp-p031-01-gunn-highway.jpg) |
| P032-01 / 32 | Pedestrian/cyclist trên lề đường | Đi bộ / xe đạp / crossing | [bp-p032-01-walking-biking-crossings](../assets/blueprint/ui-references/roads/bp-p032-01-walking-biking-crossings.png) |
| P033-01 / 33 | Fire engine/EMS trên đường | Fire truck / ambulance trên đường | [bp-p033-01-emergency-access](../assets/blueprint/ui-references/roads/bp-p033-01-emergency-access.jpg) |
| P039-01 / 39 | Safety Data — ảnh collision | Ảnh minh họa road crash | [bp-p039-01-records-evidence](../assets/blueprint/ui-references/roads/bp-p039-01-records-evidence.png) |
| P039-02 / 39 | Traffic Data — ảnh xe cộ | Đường địa phương ban ngày / traffic | [bp-p039-01-records-evidence](../assets/blueprint/ui-references/roads/bp-p039-01-records-evidence.png) |
| P041-01 / 41 | Ảnh road làm nền sau Community Plan cover | Đường địa phương ban ngày / traffic | [bp-p041-01-planning-comparison](../assets/blueprint/ui-references/roads/bp-p041-01-planning-comparison.png) |
| P041-02 / 41 | Ảnh city/highway aerial sau County cover | Ảnh giao thông / city aerial cho County | [bp-p041-01-planning-comparison](../assets/blueprint/ui-references/roads/bp-p041-01-planning-comparison.png) |
| P049-01 / 49 | Ảnh hồ lớn bên trái | Hồ nước / wetland / water landscape | [bp-p049-01-wastewater-options](../assets/blueprint/ui-references/water/bp-p049-01-wastewater-options.png) |
| P049-02 / 49 | Circle 1 — septic lid | Septic tank / inspection lid | [bp-p049-01-wastewater-options](../assets/blueprint/ui-references/water/bp-p049-01-wastewater-options.png) |
| P049-03 / 49 | Circle 2 — vòi/thiết bị cấp nước | Giếng tư nhân / wellhead. Ảnh hiện tại giống faucet, không tự gọi là wellhead; chọn ảnh phù hợp copy thật. | [bp-p049-01-wastewater-options](../assets/blueprint/ui-references/water/bp-p049-01-wastewater-options.png) |
| P049-04 / 49 | Circle 3 — landscape nước | Hồ nước / wetland / water landscape | [bp-p049-01-wastewater-options](../assets/blueprint/ui-references/water/bp-p049-01-wastewater-options.png) |
| P051-01 / 51 | Dải ảnh hồ/cây dưới LEFT OUT. BY CHOICE. | Hồ nước / wetland / water landscape | [bp-p051-01-core-conflict](../assets/blueprint/ui-references/water/bp-p051-01-core-conflict.png) |
| P052-01 / 52 | Banner photo Community Plan — rural road | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p052-01-comparison-summary](../assets/blueprint/ui-references/water/bp-p052-01-comparison-summary.png) |
| P052-02 / 52 | Banner photo County Plan — city | Ảnh giao thông / city aerial cho County | [bp-p052-01-comparison-summary](../assets/blueprint/ui-references/water/bp-p052-01-comparison-summary.png) |
| P053-01 / 53 | Septic Data — aerial neighborhood thumbnail | Ảnh chụp trên cao khu dân cư / landscape | [bp-p053-01-evidence-next](../assets/blueprint/ui-references/water/bp-p053-01-evidence-next.jpg) |
| P053-02 / 53 | Repair Records — excavation thumbnail | Septic construction / repair | [bp-p053-01-evidence-next](../assets/blueprint/ui-references/water/bp-p053-01-evidence-next.jpg) |
| P053-06 / 53 | Next issue — ảnh đường/nhà ở | Nhà ở / neighborhood | [bp-p053-01-evidence-next](../assets/blueprint/ui-references/water/bp-p053-01-evidence-next.jpg) |
| P058-02 / 58 | Grocery Stores thumbnail | Grocery / supermarket | [bp-p058-01-services-map](../assets/blueprint/ui-references/growth/bp-p058-01-services-map.jpg) |
| P058-03 / 58 | Healthcare thumbnail | Healthcare / clinic | [bp-p058-01-services-map](../assets/blueprint/ui-references/growth/bp-p058-01-services-map.jpg) |
| P058-04 / 58 | Childcare thumbnail | Childcare facility | [bp-p058-01-services-map](../assets/blueprint/ui-references/growth/bp-p058-01-services-map.jpg) |
| P058-05 / 58 | Restaurants thumbnail | Restaurant / local services | [bp-p058-01-services-map](../assets/blueprint/ui-references/growth/bp-p058-01-services-map.jpg) |
| P058-06 / 58 | Employment/Jobs thumbnail | Employment / office building | [bp-p058-01-services-map](../assets/blueprint/ui-references/growth/bp-p058-01-services-map.jpg) |
| P059-01 / 59 | Cột trái — ảnh landscape/housing dài | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p059-01-comparison-summary](../assets/blueprint/ui-references/growth/bp-p059-01-comparison-summary.jpg) |
| P059-02 / 59 | Cột phải — ảnh residential aerial dài | Ảnh chụp trên cao khu dân cư / landscape | [bp-p059-01-comparison-summary](../assets/blueprint/ui-references/growth/bp-p059-01-comparison-summary.jpg) |
| P060-03 / 60 | Housing Data — aerial photo | Ảnh chụp trên cao khu dân cư / landscape | [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg) |
| P060-05 / 60 | Travel Data — traffic photo | Đường địa phương ban ngày / traffic | [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg) |
| P060-06 / 60 | Infrastructure Records — construction photo | Thi công nhà / hạ tầng | [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg) |
| P060-07 / 60 | Outdated Plan continuation — rural aerial | Ảnh chụp trên cao khu dân cư / landscape | [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg) |
| P063-01 / 63 | Roads comparison header — road photo góc phải | Đường địa phương ban ngày / traffic | [bp-p063-01-roads](../assets/blueprint/ui-references/comparison/bp-p063-01-roads.png) |
| P063-02 / 63 | Community Plan column — road strip | Đường địa phương ban ngày / traffic | [bp-p063-01-roads](../assets/blueprint/ui-references/comparison/bp-p063-01-roads.png) |
| P063-03 / 63 | County Framework column — road strip | Đường địa phương ban ngày / traffic. Có thể tái dùng cùng ảnh thật cho hai cột để tránh so sánh sai hai địa điểm. | [bp-p063-01-roads](../assets/blueprint/ui-references/comparison/bp-p063-01-roads.png) |
| P065-01 / 65 | Water comparison header — hồ và bồn nước | Ống / van / water utility infrastructure | [bp-p065-01-water](../assets/blueprint/ui-references/comparison/bp-p065-01-water.png) |
| P067-01 / 67 | Screenshot 110 — rural landscape header | Cảnh quan nông thôn / hàng rào / đồng cỏ. Giữ composition Screenshot 110, chỉ thay ảnh chụp trang trí. | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P067-02 / 67 | Community Plan row 1 — pasture/fence | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P067-03 / 67 | Community Plan row 2 — narrow rural lane | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P067-04 / 67 | Community Plan row 3 — farmhouse | Nhà ở / neighborhood | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P067-05 / 67 | Community Plan row 4 — countryside | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P067-06 / 67 | County row 2 — residential aerial | Ảnh chụp trên cao khu dân cư / landscape | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P067-07 / 67 | County row 3 — townhomes | Townhomes / housing variety | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P067-08 / 67 | County row 4 — wood-frame construction | Thi công nhà / hạ tầng | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P068-01 / 68 | What remains — rural lake/houses header | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p068-01-what-remains](../assets/blueprint/ui-references/comparison/bp-p068-01-what-remains.png) |
| P070-01 / 70 | Evidence header — light landscape background | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p070-01-issue-groups](../assets/blueprint/ui-references/evidence/bp-p070-01-issue-groups.png) |
| P070-02 / 70 | Road Evidence — road photo | Đường địa phương ban ngày / traffic | [bp-p070-01-issue-groups](../assets/blueprint/ui-references/evidence/bp-p070-01-issue-groups.png) |
| P070-03 / 70 | Water Evidence — lake photo | Hồ nước / wetland / water landscape | [bp-p070-01-issue-groups](../assets/blueprint/ui-references/evidence/bp-p070-01-issue-groups.png) |
| P070-04 / 70 | Growth Evidence — houses photo | Nhà ở / neighborhood | [bp-p070-01-issue-groups](../assets/blueprint/ui-references/evidence/bp-p070-01-issue-groups.png) |
| P072-01 / 72 | Library heading — faded trees/landscape | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p072-01-library](../assets/blueprint/ui-references/evidence/bp-p072-01-library.png) |
| P072-04 / 72 | Library row 3 — water landscape thumbnail | Hồ nước / wetland / water landscape | [bp-p072-01-library](../assets/blueprint/ui-references/evidence/bp-p072-01-library.png) |
| P072-05 / 72 | Library row 4 — septic repair photo | Septic construction / repair | [bp-p072-01-library](../assets/blueprint/ui-references/evidence/bp-p072-01-library.png) |
| P072-07 / 72 | From Evidence to Action — countryside background | Cảnh quan nông thôn / hàng rào / đồng cỏ | [bp-p072-01-library](../assets/blueprint/ui-references/evidence/bp-p072-01-library.png) |
| P074-01 / 74 | Action hero — family/community beside landscape | Gia đình / cộng đồng bên cảnh quan. Không coi người trong ảnh mới là supporters thật. | [bp-p074-01-hero](../assets/blueprint/ui-references/action/bp-p074-01-hero.png) |
| P079-01 / 79 | Add Support card — clipboard | Clipboard / civic participation | [bp-p079-01-three-actions](../assets/blueprint/ui-references/action/bp-p079-01-three-actions.png) |
| P079-02 / 79 | Share Story card — writing in notebook | Viết câu chuyện / notebook | [bp-p079-01-three-actions](../assets/blueprint/ui-references/action/bp-p079-01-three-actions.png) |
| P079-03 / 79 | Share Information card — stack of folders | Chồng tài liệu / folders minh họa. Đây là props minh họa, không phải public records cụ thể. | [bp-p079-01-three-actions](../assets/blueprint/ui-references/action/bp-p079-01-three-actions.png) |
| P080-01 / 80 | Share Story — mailbox/rural street background | Mailbox / đường dân cư. Giữ form/text là UI; không sao chép số 33556 trên mailbox như một địa chỉ xác minh. | [bp-p080-01-story-preview](../assets/blueprint/ui-references/action/bp-p080-01-story-preview.png) |
| P082-01 / 82 | Road Safety story — road photo | Đường địa phương ban ngày / traffic | [bp-p082-01-sample-stories](../assets/blueprint/ui-references/action/bp-p082-01-sample-stories.png) |
| P082-02 / 82 | Water story — cloudy-water glass | Ly nước minh họa. Chỉ minh họa sample story, không ảnh chứng minh water contamination tại Odessa. | [bp-p082-01-sample-stories](../assets/blueprint/ui-references/action/bp-p082-01-sample-stories.png) |
| P082-03 / 82 | Everyday Access story — pharmacy/shops | Dịch vụ / phố thương mại | [bp-p082-01-sample-stories](../assets/blueprint/ui-references/action/bp-p082-01-sample-stories.png) |
| P087-01 / 87 | Petition backdrop — cảnh cây/đường hai bên | Cảnh quan nông thôn / hàng rào / đồng cỏ. Chỉ thay background nếu cần; toàn văn petition và mọi consent/field dựng bằng HTML, không thay ảnh cả form. | [bp-p087-01-approved-petition](../assets/blueprint/ui-references/action/bp-p087-01-approved-petition.png) |

## LẤY PREVIEW TỪ TÀI LIỆU THẬT

| ID / PDF | Vị trí trong screenshot | Nhóm nguồn / cách xử lý | File tham chiếu |
|---|---|---|---|
| P017-05 / 17 | Issue card Community Plan — ảnh bìa văn bản | Theo phân loại. Dùng preview đúng Community Plan/Livable Communities thật; không tìm stock giả cover. | [bp-p017-01-home](../assets/blueprint/ui-references/home/bp-p017-01-home.png) |
| P039-04 / 39 | Public Records — thumbnail hồ sơ | Theo phân loại. Cần đúng Van Dyke study/public record, không mock official paperwork. | [bp-p039-01-records-evidence](../assets/blueprint/ui-references/roads/bp-p039-01-records-evidence.png) |
| P039-05 / 39 | Community Plan — thumbnail trang trích policy | Theo phân loại. Lấy trang thật đúng nguồn/policy; chữ trong mock thumbnail không tự là trích dẫn đã xác minh. | [bp-p039-01-records-evidence](../assets/blueprint/ui-references/roads/bp-p039-01-records-evidence.png) |
| P041-03 / 41 | Community Plan illustrative cover | Theo phân loại. Đây là illustrative cover trong mockup, không coi là cover pháp lý gốc. | [bp-p041-01-planning-comparison](../assets/blueprint/ui-references/roads/bp-p041-01-planning-comparison.png) |
| P041-04 / 41 | County Comprehensive Plan cover/collage | Theo phân loại. Lấy preview từ bản County Plan thật; không tìm riêng các ảnh trang trí bên trong fake cover. | [bp-p041-01-planning-comparison](../assets/blueprint/ui-references/roads/bp-p041-01-planning-comparison.png) |
| P053-04 / 53 | Public Records folder thumbnail | Theo phân loại. Ưu tiên preview đúng hồ sơ; nếu chỉ folder trang trí thì không gắn nó như original record. | [bp-p053-01-evidence-next](../assets/blueprint/ui-references/water/bp-p053-01-evidence-next.jpg) |
| P053-05 / 53 | Planning Policies document thumbnail | Theo phân loại | [bp-p053-01-evidence-next](../assets/blueprint/ui-references/water/bp-p053-01-evidence-next.jpg) |
| P060-01 / 60 | Community Plan card — document cover | Theo phân loại | [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg) |
| P068-02 / 68 | REMOVE — Community Plan cover | Theo phân loại. Giữ REMOVE diagram/strike-through logic bằng UI; preview tài liệu lấy từ file thật. | [bp-p068-01-what-remains](../assets/blueprint/ui-references/comparison/bp-p068-01-what-remains.png) |
| P070-05 / 70 | Planning Documents — cover collage | Theo phân loại | [bp-p070-01-issue-groups](../assets/blueprint/ui-references/evidence/bp-p070-01-issue-groups.png) |
| P072-02 / 72 | Library row 1 — Livable Communities cover | Theo phân loại | [bp-p072-01-library](../assets/blueprint/ui-references/evidence/bp-p072-01-library.png) |
| P072-03 / 72 | Library row 2 — agency response thumbnail | Theo phân loại. Lấy preview đúng September 23, 2026 response nếu được cung cấp, không dùng mock letterhead. | [bp-p072-01-library](../assets/blueprint/ui-references/evidence/bp-p072-01-library.png) |

## KHÓA — GIỮ BẢN ĐỒ GỐC

| ID / PDF | Vị trí trong screenshot | Nhóm nguồn / cách xử lý | File tham chiếu |
|---|---|---|---|
| P008-01 / 8 | Official Community Plan boundary map | Theo phân loại. File nhúng độc lập từ PDF; tính nguyên bản trích xuất không tự xác minh GIS/data. Giữ nguyên tuyệt đối. | [bp-p008-01-official-boundary-map](../assets/blueprint/maps/bp-p008-01-official-boundary-map.png) |
| P009-01 / 9 | Land, parcels and conservation map | Theo phân loại. File nhúng độc lập từ PDF; tính nguyên bản trích xuất không tự xác minh GIS/data. Giữ nguyên tuyệt đối. | [bp-p009-01-land-parcels-conservation-map](../assets/blueprint/maps/bp-p009-01-land-parcels-conservation-map.png) |
| P011-01 / 11 | Road network and traffic map | Theo phân loại. File nhúng độc lập từ PDF; tính nguyên bản trích xuất không tự xác minh GIS/data. Giữ nguyên tuyệt đối. | [bp-p011-01-roads-traffic-map](../assets/blueprint/maps/bp-p011-01-roads-traffic-map.png) |

## GIỮ — MAP CHƯA RÕ PROVENANCE

| ID / PDF | Vị trí trong screenshot | Nhóm nguồn / cách xử lý | File tham chiếu |
|---|---|---|---|
| P021-01 / 21 | Map septic/wells/boundary bên trái | Theo phân loại. Không phải một trong ba map file độc lập; giữ nguyên, chưa xác minh GIS provenance; không thay bằng ảnh stock. | [bp-p021-01-water-overview](../assets/blueprint/ui-references/issues/bp-p021-01-water-overview.png) |
| P025-01 / 25 | Boundary map bên trái | Theo phân loại | [bp-p025-01-outdated-community-plan](../assets/blueprint/ui-references/issues/bp-p025-01-outdated-community-plan.png) |
| P031-02 / 31 | Gunn Highway route map bên phải | Theo phân loại | [bp-p031-01-gunn-highway](../assets/blueprint/ui-references/roads/bp-p031-01-gunn-highway.jpg) |
| P039-03 / 39 | Maps card — Gunn Highway/boundary map | Theo phân loại | [bp-p039-01-records-evidence](../assets/blueprint/ui-references/roads/bp-p039-01-records-evidence.png) |
| P044-01 / 44 | Septic classification map | Theo phân loại | [bp-p044-01-septic-scale](../assets/blueprint/ui-references/water/bp-p044-01-septic-scale.jpg) |
| P045-01 / 45 | Repair records map | Theo phân loại | [bp-p045-01-repair-records](../assets/blueprint/ui-references/water/bp-p045-01-repair-records.jpg) |
| P045-02 / 45 | Repair timeline/chart | Theo phân loại. Data visual: không sửa bar heights, year labels hoặc tìm chart khác thay. Cần raw data nếu muốn xác minh. | [bp-p045-01-repair-records](../assets/blueprint/ui-references/water/bp-p045-01-repair-records.jpg) |
| P053-03 / 53 | Water & Well Maps thumbnail | Theo phân loại | [bp-p053-01-evidence-next](../assets/blueprint/ui-references/water/bp-p053-01-evidence-next.jpg) |
| P058-01 / 58 | Service map/legend/heatmap/pins | Theo phân loại. Đã ghi minh họa travel times; không thay map bằng ảnh satellite/route mới. | [bp-p058-01-services-map](../assets/blueprint/ui-references/growth/bp-p058-01-services-map.jpg) |
| P060-02 / 60 | Land-Use Maps thumbnail | Theo phân loại | [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg) |
| P060-04 / 60 | Service Map thumbnail | Theo phân loại | [bp-p060-01-evidence-next](../assets/blueprint/ui-references/growth/bp-p060-01-evidence-next.jpg) |
| P067-09 / 67 | County row 1 — land-use map thumbnail | Theo phân loại. Map không thuộc nhóm photo được thay; chưa xác nhận đây là official GIS map. | [bp-p067-01-growth-housing-screenshot-110](../assets/blueprint/ui-references/comparison/bp-p067-01-growth-housing-screenshot-110.png) |
| P072-06 / 72 | Library row 5 — septic classification map | Theo phân loại | [bp-p072-01-library](../assets/blueprint/ui-references/evidence/bp-p072-01-library.png) |

## GIỮ MINH HỌA ĐƯỢC CHỈ ĐỊNH

| ID / PDF | Vị trí trong screenshot | Nhóm nguồn / cách xử lý | File tham chiếu |
|---|---|---|---|
| P013-01 / 13 | Toàn bộ panel tham chiếu map (dùng lại ở Roads) | Theo phân loại. Giữ panel gốc và map trong panel; không tìm ảnh thay cho map. | [bp-p013-01-map-comparison-panel-1](../assets/blueprint/layout-previews/bp-p013-01-map-comparison-panel-1.png) |
| P014-01 / 14 | Toàn bộ panel tham chiếu map (dùng lại ở Roads) | Theo phân loại. Giữ panel gốc và map trong panel; không tìm ảnh thay cho map. | [bp-p014-01-map-comparison-panel-2](../assets/blueprint/layout-previews/bp-p014-01-map-comparison-panel-2.png) |
| P015-01 / 15 | Toàn bộ panel tham chiếu map (dùng lại ở Roads) | Theo phân loại. Giữ panel gốc và map trong panel; không tìm ảnh thay cho map. | [bp-p015-01-map-comparison-panel-3](../assets/blueprint/layout-previews/bp-p015-01-map-comparison-panel-3.png) |
| P023-01 / 23 | Schematic service-pin map | Theo phân loại. Blueprint chỉ định illustration và not verified locations; không đổi thành bản đồ dịch vụ mới. | [bp-p023-01-everyday-needs](../assets/blueprint/ui-references/issues/bp-p023-01-everyday-needs.png) |
| P043-02 / 43 | Ba sơ đồ Septic → Groundwater → Wells | Theo phân loại. Minh họa kỹ thuật, không nằm trong danh sách stock photo. | [bp-p043-01-hero](../assets/blueprint/ui-references/water/bp-p043-01-hero.png) |
| P047-01 / 47 | Connected-water 3D cutaway ở trên | Theo phân loại. Selected conceptual illustration; giữ đúng bản, không regenerate. | [bp-p047-01-connected-water](../assets/blueprint/ui-references/water/bp-p047-01-connected-water.png) |
| P047-02 / 47 | Groundwater cross-section giữa trang | Theo phân loại. Giữ conceptual/not contamination event caveat; không thay bằng ảnh ô nhiễm thực tế. | [bp-p047-01-connected-water](../assets/blueprint/ui-references/water/bp-p047-01-connected-water.png) |
| P057-01 / 57 | Natural Rural Density Comparison — hai panel và labels | Theo phân loại. Blueprint chọn riêng; giữ cả hai phía/labels/trees/rural lanes. Không tìm hai stock photos để thay mô hình mật độ. | [bp-p057-01-natural-rural-density](../assets/blueprint/ui-references/growth/bp-p057-01-natural-rural-density.jpg) |

## CHƯA THAY — ẢNH GẮN MAP/DIAGRAM

| ID / PDF | Vị trí trong screenshot | Nhóm nguồn / cách xử lý | File tham chiếu |
|---|---|---|---|
| P027-01 / 27 | Background aerial nằm sau toàn bộ connection diagram | Ảnh chụp trên cao khu dân cư / landscape. Có thể cần ảnh nền khác sau này, nhưng không thay cả composite và không làm mất arrows/labels/diagram được duyệt. | [bp-p027-01-issues-connected](../assets/blueprint/ui-references/issues/bp-p027-01-issues-connected.png) |
| P043-01 / 43 | Hero aerial có Community Plan boundary overlay | Ảnh chụp trên cao khu dân cư / landscape. Không thay background bằng một hồ ngẫu nhiên rồi giữ boundary overlay. Cần ảnh nền và overlay gốc có quan hệ địa lý đúng. | [bp-p043-01-hero](../assets/blueprint/ui-references/water/bp-p043-01-hero.png) |
| P055-01 / 55 | Then map/aerial với layers và số liệu Early 2000s | Theo phân loại. Không tìm ảnh countryside bất kỳ làm before; có map layers/legend và mốc thời gian, giữ nguyên/chờ provenance. | [bp-p055-01-then-today](../assets/blueprint/ui-references/growth/bp-p055-01-then-today.jpg) |
| P055-02 / 55 | Today map/aerial với layers và số liệu 2026 | Theo phân loại. Không thay ảnh today độc lập làm sai phép so sánh địa lý/thời gian. | [bp-p055-01-then-today](../assets/blueprint/ui-references/growth/bp-p055-01-then-today.jpg) |

## DỰNG UI — KHÔNG TÌM ẢNH STOCK

| ID / PDF | Vị trí trong screenshot | Nhóm nguồn / cách xử lý | File tham chiếu |
|---|---|---|---|
| P081-01 / 81 | Laptop + miniature webpage + share choices | Theo phân loại. Dựng composition UI từ giao diện demo thật khi code; không tìm ảnh khác chứa website/CTA/text bịa và không tìm từng ảnh nhỏ lồng trong màn hình. | [bp-p081-01-sharing-preview](../assets/blueprint/ui-references/action/bp-p081-01-sharing-preview.png) |

## Cách đọc vị trí

Các khung trong bản HTML là overlay chỉ vị trí tương đối trên screenshot tham chiếu. Chúng không cắt/sửa file ảnh; tọa độ là locator gần đúng, không phải lệnh crop. File gốc vẫn được mở trực tiếp từ liên kết. Các khung có thể bao gồm fade/UI chồng lên ảnh; chỉ thay photo khi có thể tách đúng vai trò, không thay chữ/diagram/data.

Khi bắt đầu tìm nguồn ở bước sau: ưu tiên ảnh thật phù hợp địa phương, giữ đúng ý nghĩa nội dung, ghi URL/nguồn/quyền sử dụng cho từng candidate; không biến ảnh minh họa thành bằng chứng địa phương hoặc lời chứng thật. Ảnh mới lưu ở vị trí riêng, không ghi đè assets/blueprint.
