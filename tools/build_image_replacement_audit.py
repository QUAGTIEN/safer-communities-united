"""Inventory photo slots using HTML/SVG locators without altering image files."""

from pathlib import Path
from collections import Counter, defaultdict
import csv
import hashlib
import html
import io
import json

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
MANIFEST = json.loads((ROOT / "assets/blueprint/manifest.json").read_text(encoding="utf-8"))
BY_PAGE = {p: a for a in MANIFEST["assets"] for p in a["pdf_pages"]}
BRIEFS = {
    "road-day": ("Đường địa phương ban ngày / traffic", "Ảnh thật đường hai làn có cây, traffic; ưu tiên Keystone–Odessa/Gunn Highway nếu gắn tên địa điểm. Không dùng ảnh nơi khác rồi gọi là Gunn Highway."),
    "rural": ("Cảnh quan nông thôn / hàng rào / đồng cỏ", "Ảnh thật Florida phù hợp rural character; chỉ ghi đúng địa điểm và thời gian đã biết, không giả cảnh năm 2001."),
    "lake": ("Hồ nước / wetland / water landscape", "Ảnh thật hồ/wetland; không coi hình đẹp là bằng chứng chất lượng nước hoặc wellfield thực tế."),
    "housing": ("Nhà ở / neighborhood", "Ảnh thật nhà ở Mỹ/Florida; ưu tiên địa phương. Không suy density/giá nhà từ ảnh minh họa."),
    "retail": ("Dịch vụ / phố thương mại", "Ảnh thật khu dịch vụ/retail; không tự gắn địa chỉ hoặc khẳng định cơ sở nằm trong/outside Plan boundary."),
    "septic-lid": ("Septic tank / inspection lid", "Ảnh thật septic lid/tank đúng thiết bị; không ảnh cống hoặc bể khác bị gọi là septic."),
    "septic-repair": ("Septic construction / repair", "Ảnh thật thi công/sửa septic; không mô tả là một hồ sơ sửa chữa địa phương cụ thể khi chưa có nguồn."),
    "well": ("Giếng tư nhân / wellhead", "Ảnh thật wellhead/pump phù hợp nhà ở Mỹ; không nhầm fire hydrant hoặc municipal valve thành private well."),
    "water-infrastructure": ("Ống / van / water utility infrastructure", "Ảnh thật hệ thống nước/van/bồn; chỉ gọi cơ sở địa phương khi xác minh được."),
    "aerial": ("Ảnh chụp trên cao khu dân cư / landscape", "Ảnh hàng không có nguồn địa điểm rõ; chỉ làm hình minh họa, không thay satellite map/ranh/heatmap hoặc tạo then/today từ hai nơi khác nhau."),
    "road-night": ("Đường ban đêm / lighting", "Ảnh thật đường hai làn ban đêm; không bịa vị trí, vụ tai nạn hoặc chứng minh tình trạng local street lighting bằng ảnh không rõ nguồn."),
    "walking": ("Đi bộ / xe đạp / crossing", "Ảnh thật pedestrian/cyclist/crossing phù hợp ngữ cảnh Mỹ; không dùng hình một nơi khác như khảo sát hiện trạng Gunn Highway."),
    "emergency": ("Fire truck / ambulance trên đường", "Ảnh thật xe cứu hộ/cứu thương Mỹ; không trình bày như incident hoặc response delay đã ghi nhận tại Keystone–Odessa."),
    "crash": ("Ảnh minh họa road crash", "Ảnh thật có thể dùng minh họa, ưu tiên không đồ họa thương tích; phải tránh ám chỉ đây là một vụ tai nạn địa phương có trong dataset khi chưa có nguồn."),
    "civic-building": ("Tòa nhà civic / County office", "Nếu biểu đạt cơ quan cụ thể, dùng ảnh đúng cơ quan có nguồn. Ảnh office chung chỉ là minh họa, không giả là Planning Commission headquarters."),
    "county-aerial": ("Ảnh giao thông / city aerial cho County", "Ảnh thật Tampa/Hillsborough nếu ghi tên; không bịa skyline/đường giao thông từ mock cover."),
    "grocery": ("Grocery / supermarket", "Ảnh thật supermarket ở Mỹ; không ám chỉ là pin/địa chỉ/thời gian di chuyển đã được xác minh."),
    "healthcare": ("Healthcare / clinic", "Ảnh thật cơ sở y tế Mỹ; không dùng làm bằng chứng denied care hoặc thời gian tiếp cận đã đo."),
    "childcare": ("Childcare facility", "Ảnh thật cơ sở childcare phù hợp Mỹ; có thể chọn mặt ngoài, không cần thêm ảnh trẻ em/nhân vật vào nội dung."),
    "restaurant": ("Restaurant / local services", "Ảnh thật nhà hàng/retail phù hợp Mỹ; địa điểm/drive-time vẫn chỉ theo caveat của blueprint."),
    "employment": ("Employment / office building", "Ảnh thật văn phòng/doanh nghiệp; không suy ra số việc làm hoặc vị trí cơ sở từ ảnh."),
    "housing-choice": ("Townhomes / housing variety", "Ảnh thật nhiều kiểu nhà phù hợp Mỹ; không khẳng định loại nhà được tự động phê duyệt trong Keystone–Odessa."),
    "construction": ("Thi công nhà / hạ tầng", "Ảnh thật construction, wood framing hoặc utility work đúng ngữ cảnh; không gọi là dự án cụ thể nếu chưa có nguồn."),
    "family": ("Gia đình / cộng đồng bên cảnh quan", "Ảnh thật tự nhiên, phù hợp community participation; không coi người trong ảnh là supporter hoặc resident đã ký petition."),
    "support-prop": ("Clipboard / civic participation", "Ảnh thật clipboard/pen/blank form làm minh họa; không chữ ký thật hoặc form được giả thành hồ sơ đã nộp."),
    "writing": ("Viết câu chuyện / notebook", "Ảnh thật bàn tay viết sổ, không nội dung cá nhân đọc được; không thêm lời chứng thật không có nguồn."),
    "paperwork": ("Chồng tài liệu / folders minh họa", "Ảnh thật giấy/tài liệu chung dùng trang trí; không tự tạo con dấu, tên cơ quan hoặc hồ sơ chính thức giả."),
    "mailbox": ("Mailbox / đường dân cư", "Ảnh thật mailbox/đường dân cư; không tự chèn ZIP 33556 hoặc địa chỉ giả để tạo vẻ local."),
    "water-glass": ("Ly nước minh họa", "Ảnh thật ly nước dùng minh họa; không coi màu nước là bằng chứng ô nhiễm tại giếng/resident cụ thể."),
}
STYLES = {
    "replace-photo": ("CẦN TÌM ẢNH CHỤP THAY", "#d55b22"),
    "source-document": ("LẤY PREVIEW TỪ TÀI LIỆU THẬT", "#2563b8"),
    "keep-original-map": ("KHÓA — GIỮ BẢN ĐỒ GỐC", "#14745a"),
    "hold-map": ("GIỮ — MAP CHƯA RÕ PROVENANCE", "#7a4da3"),
    "keep-illustration": ("GIỮ MINH HỌA ĐƯỢC CHỈ ĐỊNH", "#14745a"),
    "hold-mixed": ("CHƯA THAY — ẢNH GẮN MAP/DIAGRAM", "#7a4da3"),
    "ui-component": ("DỰNG UI — KHÔNG TÌM ẢNH STOCK", "#637385"),
}
REGIONS = []


def r(page, label, action, box, brief=None, note=""):
    assert action in STYLES
    assert page in BY_PAGE
    assert len(box) == 4 and 0 <= box[0] < box[2] <= 100 and 0 <= box[1] < box[3] <= 100
    assert not brief or brief in BRIEFS
    parent = BY_PAGE[page]
    n = 1 + sum(x["pdf_page"] == page for x in REGIONS)
    linked = []
    for s in SECTIONS:
        if parent["id"] in s["asset_ids"]:
            linked.append(s["id"])
    REGIONS.append({"id": f"P{page:03d}-{n:02d}", "pdf_page": page, "all_parent_pdf_pages": parent["pdf_pages"],
                    "label_vi": label, "action": action, "action_label": STYLES[action][0],
                    "parent_asset_id": parent["id"], "parent_asset_path": parent["path"], "parent_sha256": parent["sha256"],
                    "locator_percent_xyxy": box, "locator_precision": "approximate-visual-locator-not-a-crop-command",
                    "brief_key": brief, "brief_vi": BRIEFS[brief][1] if brief else None,
                    "section_ids": linked, "note_vi": note, "origin_assessment": "unverified; not determined to be AI-generated",
                    "replacement_selected": False})


SECTIONS = json.loads((DOCS / "section-review.json").read_text(encoding="utf-8"))["sections"]

# Original map files: whole-image hashes are locked. No pixels are changed.
for page in [8, 9, 11]:
    r(page, BY_PAGE[page]["title"], "keep-original-map", [0, 0, 100, 100], note="File nhúng độc lập từ PDF; tính nguyên bản trích xuất không tự xác minh GIS/data. Giữ nguyên tuyệt đối.")
for page in [13, 14, 15]:
    r(page, "Toàn bộ panel tham chiếu map (dùng lại ở Roads)", "keep-illustration", [0, 0, 100, 100], note="Giữ panel gốc và map trong panel; không tìm ảnh thay cho map.")

# Home
r(17, "Hero — cảnh đường/cộng đồng với cổng Keystone–Odessa", "replace-photo", [43, 8, 100, 53], "rural", "Không giả cổng/biển tên địa phương; ưu tiên ảnh local có nguồn thật.")
r(17, "Issue card Roads — đường và traffic", "replace-photo", [4, 63, 26, 75], "road-day")
r(17, "Issue card Water — hồ/cảnh quan nước", "replace-photo", [27, 63, 49, 75], "lake")
r(17, "Issue card Everyday Needs — nhà ở", "replace-photo", [50, 63, 72, 75], "housing")
r(17, "Issue card Community Plan — ảnh bìa văn bản", "source-document", [73, 63, 96, 75], note="Dùng preview đúng Community Plan/Livable Communities thật; không tìm stock giả cover.")
r(19, "Ảnh đường và pedestrian bên dưới heading Roads", "replace-photo", [3, 44, 58, 84], "road-day")

# Issues Water overview: maps retained; six photo thumbnails replaceable.
r(21, "Map septic/wells/boundary bên trái", "hold-map", [1, 28, 59, 72], note="Không phải một trong ba map file độc lập; giữ nguyên, chưa xác minh GIS provenance; không thay bằng ảnh stock.")
for label, box, brief in [
    ("Septic Concentration", [60,47,72,53], "septic-lid"),
    ("Septic Repairs", [73,47,85,53], "septic-repair"),
    ("Private Wells", [86,47,99,53], "well"),
    ("Groundwater — thumbnail mặt nước", [60,56,72,62], "lake"),
    ("Wellfields, Lakes & Wetlands", [73,56,85,62], "lake"),
    ("Water & Wastewater Infrastructure", [86,56,99,62], "water-infrastructure"),
]: r(21, label, "replace-photo", box, brief)
r(23, "Schematic service-pin map", "keep-illustration", [5, 27, 48, 64], note="Blueprint chỉ định illustration và not verified locations; không đổi thành bản đồ dịch vụ mới.")
r(25, "Boundary map bên trái", "hold-map", [2,31,46,89])
for label, box, brief in [
    ("Timeline 2001 — countryside", [48,49,63,62], "rural"),
    ("Timeline TODAY — traffic", [65,51,81,62], "road-day"),
    ("Timeline 2026 — tòa nhà civic", [83,54,98,62], "civic-building"),
    ("Policy area Roads — thumbnail", [48,79,60,88], "road-day"),
    ("Policy area Water — thumbnail", [61,79,72,88], "lake"),
    ("Policy area Housing — thumbnail", [73,79,85,88], "housing"),
    ("Policy area Services — thumbnail", [86,79,98,88], "retail"),
]: r(25, label, "replace-photo", box, brief)
r(27, "Background aerial nằm sau toàn bộ connection diagram", "hold-mixed", [0,29,100,93], "aerial", "Có thể cần ảnh nền khác sau này, nhưng không thay cả composite và không làm mất arrows/labels/diagram được duyệt.")
r(27, "Dải photo Roads ở đầu cột 1", "replace-photo", [5,37,35,43], "road-day")
r(27, "Dải photo Water ở đầu cột 2", "replace-photo", [36,37,64,43], "lake")
r(27, "Dải photo Housing ở đầu cột 3", "replace-photo", [66,37,95,43], "housing")

# Roads
r(30, "Ảnh đường ban đêm góc trên phải", "replace-photo", [50,8,97,49], "road-night")
r(31, "Ảnh road/traffic dưới heading Gunn Highway", "replace-photo", [4,32,58,57], "road-day")
r(31, "Gunn Highway route map bên phải", "hold-map", [61,9,97,59])
r(32, "Pedestrian/cyclist trên lề đường", "replace-photo", [51,8,97,46], "walking")
r(33, "Fire engine/EMS trên đường", "replace-photo", [51,8,97,47], "emergency")
r(39, "Safety Data — ảnh collision", "replace-photo", [2,41,20,63], "crash")
r(39, "Traffic Data — ảnh xe cộ", "replace-photo", [22,41,40,63], "road-day")
r(39, "Maps card — Gunn Highway/boundary map", "hold-map", [41,40,59,65])
r(39, "Public Records — thumbnail hồ sơ", "source-document", [61,40,79,63], note="Cần đúng Van Dyke study/public record, không mock official paperwork.")
r(39, "Community Plan — thumbnail trang trích policy", "source-document", [81,40,97,65], note="Lấy trang thật đúng nguồn/policy; chữ trong mock thumbnail không tự là trích dẫn đã xác minh.")
r(41, "Ảnh road làm nền sau Community Plan cover", "replace-photo", [2,32,21,91], "road-day")
r(41, "Ảnh city/highway aerial sau County cover", "replace-photo", [79,32,99,91], "county-aerial")
r(41, "Community Plan illustrative cover", "source-document", [3,35,20,72], note="Đây là illustrative cover trong mockup, không coi là cover pháp lý gốc.")
r(41, "County Comprehensive Plan cover/collage", "source-document", [80,40,98,81], note="Lấy preview từ bản County Plan thật; không tìm riêng các ảnh trang trí bên trong fake cover.")

# Water
r(43, "Hero aerial có Community Plan boundary overlay", "hold-mixed", [38,7,100,57], "aerial", "Không thay background bằng một hồ ngẫu nhiên rồi giữ boundary overlay. Cần ảnh nền và overlay gốc có quan hệ địa lý đúng.")
r(43, "Ba sơ đồ Septic → Groundwater → Wells", "keep-illustration", [5,58,95,74], note="Minh họa kỹ thuật, không nằm trong danh sách stock photo.")
r(44, "Septic classification map", "hold-map", [54,14,98,72])
r(45, "Repair records map", "hold-map", [54,14,98,72])
r(45, "Repair timeline/chart", "hold-map", [4,49,53,71], note="Data visual: không sửa bar heights, year labels hoặc tìm chart khác thay. Cần raw data nếu muốn xác minh.")
r(47, "Connected-water 3D cutaway ở trên", "keep-illustration", [43,10,99,34], note="Selected conceptual illustration; giữ đúng bản, không regenerate.")
r(47, "Groundwater cross-section giữa trang", "keep-illustration", [0,35,100,57], note="Giữ conceptual/not contamination event caveat; không thay bằng ảnh ô nhiễm thực tế.")
r(49, "Ảnh hồ lớn bên trái", "replace-photo", [0,50,43,76], "lake")
r(49, "Circle 1 — septic lid", "replace-photo", [48,13,58,26], "septic-lid")
r(49, "Circle 2 — vòi/thiết bị cấp nước", "replace-photo", [65,13,75,26], "well", "Ảnh hiện tại giống faucet, không tự gọi là wellhead; chọn ảnh phù hợp copy thật.")
r(49, "Circle 3 — landscape nước", "replace-photo", [82,13,92,26], "lake")
r(51, "Dải ảnh hồ/cây dưới LEFT OUT. BY CHOICE.", "replace-photo", [0,17,100,25], "lake")
r(52, "Banner photo Community Plan — rural road", "replace-photo", [4,25,48,34], "rural")
r(52, "Banner photo County Plan — city", "replace-photo", [51,25,96,34], "county-aerial")
r(53, "Septic Data — aerial neighborhood thumbnail", "replace-photo", [3,27,21,38], "aerial")
r(53, "Repair Records — excavation thumbnail", "replace-photo", [22,27,40,38], "septic-repair")
r(53, "Water & Well Maps thumbnail", "hold-map", [41,27,59,38])
r(53, "Public Records folder thumbnail", "source-document", [60,27,78,38], note="Ưu tiên preview đúng hồ sơ; nếu chỉ folder trang trí thì không gắn nó như original record.")
r(53, "Planning Policies document thumbnail", "source-document", [79,27,97,38])
r(53, "Next issue — ảnh đường/nhà ở", "replace-photo", [48,73,100,100], "housing")

# Growth
r(55, "Then map/aerial với layers và số liệu Early 2000s", "hold-mixed", [3,31,49,74], note="Không tìm ảnh countryside bất kỳ làm before; có map layers/legend và mốc thời gian, giữ nguyên/chờ provenance.")
r(55, "Today map/aerial với layers và số liệu 2026", "hold-mixed", [50,31,98,74], note="Không thay ảnh today độc lập làm sai phép so sánh địa lý/thời gian.")
r(57, "Natural Rural Density Comparison — hai panel và labels", "keep-illustration", [2,36,98,82], note="Blueprint chọn riêng; giữ cả hai phía/labels/trees/rural lanes. Không tìm hai stock photos để thay mô hình mật độ.")
r(58, "Service map/legend/heatmap/pins", "hold-map", [2,31,77,82], note="Đã ghi minh họa travel times; không thay map bằng ảnh satellite/route mới.")
for label, box, brief in [
    ("Grocery Stores thumbnail", [91,39,99,45], "grocery"),
    ("Healthcare thumbnail", [91,45,99,51], "healthcare"),
    ("Childcare thumbnail", [91,51,99,57], "childcare"),
    ("Restaurants thumbnail", [91,57,99,63], "restaurant"),
    ("Employment/Jobs thumbnail", [91,63,99,69], "employment"),
]: r(58, label, "replace-photo", box, brief)
r(59, "Cột trái — ảnh landscape/housing dài", "replace-photo", [3,33,22,81], "rural")
r(59, "Cột phải — ảnh residential aerial dài", "replace-photo", [80,33,98,81], "aerial")
r(60, "Community Plan card — document cover", "source-document", [21,27,34,43])
r(60, "Land-Use Maps thumbnail", "hold-map", [51,27,65,43])
r(60, "Housing Data — aerial photo", "replace-photo", [84,27,98,43], "aerial")
r(60, "Service Map thumbnail", "hold-map", [21,45,34,61])
r(60, "Travel Data — traffic photo", "replace-photo", [51,45,65,61], "road-day")
r(60, "Infrastructure Records — construction photo", "replace-photo", [84,45,98,61], "construction")
r(60, "Outdated Plan continuation — rural aerial", "replace-photo", [49,63,100,84], "aerial")

# Comparison: preserve structure; decorative photos can be replaced.
r(63, "Roads comparison header — road photo góc phải", "replace-photo", [61,8,96,18], "road-day")
r(63, "Community Plan column — road strip", "replace-photo", [6,20,49,26], "road-day")
r(63, "County Framework column — road strip", "replace-photo", [50,20,95,26], "road-day", "Có thể tái dùng cùng ảnh thật cho hai cột để tránh so sánh sai hai địa điểm.")
r(65, "Water comparison header — hồ và bồn nước", "replace-photo", [49,7,99,26], "water-infrastructure")
r(67, "Screenshot 110 — rural landscape header", "replace-photo", [46,7,100,29], "rural", "Giữ composition Screenshot 110, chỉ thay ảnh chụp trang trí.")
for label, box, brief in [
    ("Community Plan row 1 — pasture/fence", [5,36,17,44], "rural"),
    ("Community Plan row 2 — narrow rural lane", [5,45,17,54], "rural"),
    ("Community Plan row 3 — farmhouse", [5,55,17,64], "housing"),
    ("Community Plan row 4 — countryside", [5,65,17,74], "rural"),
    ("County row 2 — residential aerial", [52,45,65,54], "aerial"),
    ("County row 3 — townhomes", [52,55,65,64], "housing-choice"),
    ("County row 4 — wood-frame construction", [52,65,65,74], "construction"),
]: r(67, label, "replace-photo", box, brief)
r(67, "County row 1 — land-use map thumbnail", "hold-map", [52,36,65,44], note="Map không thuộc nhóm photo được thay; chưa xác nhận đây là official GIS map.")
r(68, "What remains — rural lake/houses header", "replace-photo", [49,7,100,26], "rural")
r(68, "REMOVE — Community Plan cover", "source-document", [8,35,27,71], note="Giữ REMOVE diagram/strike-through logic bằng UI; preview tài liệu lấy từ file thật.")

# Evidence
r(70, "Evidence header — light landscape background", "replace-photo", [67,0,100,27], "rural")
r(70, "Road Evidence — road photo", "replace-photo", [4,26,26,41], "road-day")
r(70, "Water Evidence — lake photo", "replace-photo", [27,26,49,41], "lake")
r(70, "Growth Evidence — houses photo", "replace-photo", [51,26,73,41], "housing")
r(70, "Planning Documents — cover collage", "source-document", [74,26,97,41])
r(72, "Library heading — faded trees/landscape", "replace-photo", [60,0,99,16], "rural")
r(72, "Library row 1 — Livable Communities cover", "source-document", [4,27,17,38])
r(72, "Library row 2 — agency response thumbnail", "source-document", [4,40,17,49], note="Lấy preview đúng September 23, 2026 response nếu được cung cấp, không dùng mock letterhead.")
r(72, "Library row 3 — water landscape thumbnail", "replace-photo", [4,51,17,60], "lake")
r(72, "Library row 4 — septic repair photo", "replace-photo", [4,62,17,70], "septic-repair")
r(72, "Library row 5 — septic classification map", "hold-map", [4,72,17,80])
r(72, "From Evidence to Action — countryside background", "replace-photo", [63,86,99,98], "rural")

# Action
r(74, "Action hero — family/community beside landscape", "replace-photo", [0,7,100,89], "family", "Không coi người trong ảnh mới là supporters thật.")
r(79, "Add Support card — clipboard", "replace-photo", [4,30,33,47], "support-prop")
r(79, "Share Story card — writing in notebook", "replace-photo", [35,30,64,47], "writing")
r(79, "Share Information card — stack of folders", "replace-photo", [66,30,96,47], "paperwork", "Đây là props minh họa, không phải public records cụ thể.")
r(80, "Share Story — mailbox/rural street background", "replace-photo", [0,7,100,88], "mailbox", "Giữ form/text là UI; không sao chép số 33556 trên mailbox như một địa chỉ xác minh.")
r(81, "Laptop + miniature webpage + share choices", "ui-component", [48,12,100,85], note="Dựng composition UI từ giao diện demo thật khi code; không tìm ảnh khác chứa website/CTA/text bịa và không tìm từng ảnh nhỏ lồng trong màn hình.")
r(82, "Road Safety story — road photo", "replace-photo", [4,30,34,51], "road-day")
r(82, "Water story — cloudy-water glass", "replace-photo", [35,30,65,51], "water-glass", "Chỉ minh họa sample story, không ảnh chứng minh water contamination tại Odessa.")
r(82, "Everyday Access story — pharmacy/shops", "replace-photo", [66,30,96,51], "retail")
r(87, "Petition backdrop — cảnh cây/đường hai bên", "replace-photo", [0,3,100,95], "rural", "Chỉ thay background nếu cần; toàn văn petition và mọi consent/field dựng bằng HTML, không thay ảnh cả form.")


def main():
    source_hash_before = hashlib.sha256((ROOT / MANIFEST["source_pdf"]).read_bytes()).hexdigest()
    assert source_hash_before == MANIFEST["source_pdf_sha256"]
    for a in MANIFEST["assets"]:
        assert hashlib.sha256((ROOT / a["path"]).read_bytes()).hexdigest() == a["sha256"]
    assert set(BY_PAGE[p]["id"] for p in [8,9,11]) == set(a["id"] for a in MANIFEST["assets"] if a["role"] == "map")
    assert {a["id"] for a in MANIFEST["assets"]} == {r["parent_asset_id"] for r in REGIONS}
    counts = dict(Counter(r["action"] for r in REGIONS))
    photo_regions = [r for r in REGIONS if r["action"] == "replace-photo"]
    grouped = defaultdict(list)
    for region in photo_regions:
        grouped[region["brief_key"]].append(region["id"])
    locks = [{"asset_id": a["id"], "path": a["path"], "sha256": a["sha256"], "pdf_pages": a["pdf_pages"],
              "policy": "immutable; do not replace, crop, recolor, retouch, redraw, filter or overwrite"}
             for a in MANIFEST["assets"] if a["role"] == "map"]
    report = {"schema_version": 1, "date_local": "2026-10-20", "task": "inventory-for-future-photo-replacement-no-external-sourcing",
              "current_demo_photo_manifest": "assets/demo-current/manifest.json" if (ROOT / "assets/demo-current/manifest.json").exists() else None,
              "approval_record": "docs/project-approvals.json", "source_pdf_sha256": source_hash_before,
              "classification_is_ai_forensics": False, "original_assets_modified": False,
              "summary": {"asset_files_reviewed": len(MANIFEST["assets"]), "ui_reference_files": 37,
                          "region_count": len(REGIONS), "region_actions": counts,
                          "photo_search_brief_count": len(grouped), "photo_slot_count": len(photo_regions),
                          "counts_mean": "visual positions, not unique photographs; reuse across slots may reduce files needed"},
              "locked_original_maps": locks, "regions": REGIONS,
              "photo_search_briefs": [{"key": k, "title": BRIEFS[k][0], "requirements": BRIEFS[k][1], "region_ids": v} for k,v in grouped.items()]}
    (DOCS / "image-replacement-audit.json").write_text(json.dumps(report, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    table = io.StringIO(newline="")
    fields = ["id","pdf_page","label_vi","action","brief_key","parent_asset_path","locator_percent_xyxy","section_ids","note_vi"]
    writer=csv.DictWriter(table,fieldnames=fields);writer.writeheader()
    for region in REGIONS:writer.writerow({k:region[k] for k in fields})
    (DOCS / "IMAGE_REPLACEMENT_AUDIT.csv").write_text(table.getvalue(), encoding="utf-8-sig")

    md = ["# Danh sách ảnh cần tìm nguồn thay thế", "",
          "Đây là inventory cho việc thay nguồn ảnh về sau. Theo [quyết định mới nhất](PROJECT_DECISIONS.md), demo tạm dùng chính ảnh trong screenshot; xem [các vùng ảnh đã tách và giới hạn](../assets/demo-current/README.md). Chưa tìm/tải ảnh bên ngoài, chưa code website.", "",
          "[Xem ảnh có đánh dấu vị trí](IMAGE_REPLACEMENT_AUDIT.html) · [CSV](IMAGE_REPLACEMENT_AUDIT.csv) · [JSON](image-replacement-audit.json)", "",
          "## Kết quả rà soát", "",
          f"- Đã xem 43 file ảnh khác nhau, gồm toàn bộ 37 UI references.",
          f"- **{len(photo_regions)} vị trí ảnh chụp** đề xuất cần nguồn thay, gom thành **{len(grouped)} brief nội dung** có thể tái sử dụng nguồn ảnh khi phù hợp.",
          f"- **{counts.get('source-document',0)} vị trí thumbnail/cover hồ sơ** cần preview từ tài liệu thật tương ứng, không phải stock photo.",
          "- Số đếm là vị trí sử dụng ảnh, không phải số ảnh độc lập phải mua/tải. Ảnh nền chồng với diagram/map được tách vào nhóm giữ/chờ xác minh, không tính là photo có thể thay ngay.",
          "- Không kết luận ảnh nào là AI; nguồn gốc các photo trong UI chưa được xác minh.", "",
          "## Ba bản đồ tuyệt đối giữ nguyên", "", "| PDF | File | SHA-256 |", "|---|---|---|"]
    for lock in locks:md.append(f"| {', '.join(map(str,lock['pdf_pages']))} | [{lock['asset_id']}](../{lock['path']}) | `{lock['sha256']}` |")
    md.extend(["", "Không thay, vẽ lại, crop, sửa màu/nội dung, retouch hoặc thêm hiệu ứng làm thay đổi bản đồ. Giữ các panel PDF 13–15 / 35–37. Các maps bên trong screenshot khác chưa được xác nhận là original nhưng cũng không được tự thay bằng stock.", "",
               "## Những hình không nằm trong danh sách tìm stock thay", "",
               "- Natural Rural Density Comparison PDF 57 và Connected Water PDF 47: giữ đúng selected illustrations; không tạo ảnh mới.",
               "- Sơ đồ septic/groundwater/well ở PDF 43; map legends, data layers, repair chart, service maps và then/today map pair: giữ/chờ nguồn, không sửa hoặc đổi thành ảnh minh họa khác.",
               "- Screenshot 110 PDF 67: giữ layout/copy và land-use map thumbnail; chỉ các photo nhỏ/header được ghi trong bảng là candidate thay.",
               "- Logo, icons, avatars, text, forms, cards, navigation và laptop/share-page mockup: thuộc UI/components, không phải yêu cầu kiếm ảnh stock.", "",
               "## Brief tìm ảnh theo chủ đề (chưa bắt đầu tìm)", ""])
    for key, ids in grouped.items():
        md.extend([f"### {key} — {BRIEFS[key][0]}", "", BRIEFS[key][1], "", f"Vị trí: {', '.join(ids)}.", ""])
    for action in STYLES:
        rows = [x for x in REGIONS if x["action"] == action]
        md.extend([f"## {STYLES[action][0]}", "", "| ID / PDF | Vị trí trong screenshot | Nhóm nguồn / cách xử lý | File tham chiếu |", "|---|---|---|---|"])
        for row in rows:
            desc = BRIEFS[row["brief_key"]][0] if row["brief_key"] else "Theo phân loại"
            if row["note_vi"]:desc += ". " + row["note_vi"]
            md.append(f"| {row['id']} / {row['pdf_page']} | {row['label_vi']} | {desc} | [{row['parent_asset_id']}](../{row['parent_asset_path']}) |")
        md.append("")
    md.extend(["## Cách đọc vị trí", "", "Các khung trong bản HTML là overlay chỉ vị trí tương đối trên screenshot tham chiếu. Chúng không cắt/sửa file ảnh; tọa độ là locator gần đúng, không phải lệnh crop. File gốc vẫn được mở trực tiếp từ liên kết. Các khung có thể bao gồm fade/UI chồng lên ảnh; chỉ thay photo khi có thể tách đúng vai trò, không thay chữ/diagram/data.", "",
               "Khi bắt đầu tìm nguồn ở bước sau: ưu tiên ảnh thật phù hợp địa phương, giữ đúng ý nghĩa nội dung, ghi URL/nguồn/quyền sử dụng cho từng candidate; không biến ảnh minh họa thành bằng chứng địa phương hoặc lời chứng thật. Ảnh mới lưu ở vị trí riêng, không ghi đè assets/blueprint.", ""])
    (DOCS / "IMAGE_REPLACEMENT_AUDIT.md").write_text("\n".join(md), encoding="utf-8")

    e = lambda x: html.escape(str(x),quote=True)
    out = ["<!doctype html><html lang='vi'><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>SCU — Image replacement audit</title>",
           "<style>body{margin:0;background:#f2f4f7;color:#172b40;font:16px/1.65 system-ui,sans-serif}main{max-width:1350px;margin:auto;padding:24px}article{background:#fff;border:1px solid #d8dfe7;margin:26px 0;padding:20px}h1{font-size:30px}.notice{background:#fff0cc;border-left:5px solid #b67419;padding:16px}.legend{display:flex;gap:14px;flex-wrap:wrap;margin:20px 0}.legend span{padding:3px 8px;border:2px solid}.image-wrap{position:relative;width:100%;line-height:0;background:#eef1f5}.image-wrap>img{display:block;width:100%;height:auto}.mark{position:absolute;box-sizing:border-box;border:3px solid;pointer-events:none}.mark b{position:absolute;top:0;left:0;background:white;padding:3px 5px;line-height:1.2;font:700 12px system-ui;white-space:nowrap;box-shadow:0 1px 4px #3335}.mark:target{outline:5px solid #f4c430;z-index:3}a{color:#075d77}.list li{padding:7px 0}.state{font-size:12px;font-weight:700}code{overflow-wrap:anywhere}nav{display:flex;flex-wrap:wrap;gap:9px}nav a{padding:3px 8px;background:#e5edf4}small{font-size:13px}</style><main>",
           "<h1>Những ảnh cần tìm nguồn thay thế</h1>",
           f"<p>{len(photo_regions)} vị trí photo · {len(grouped)} brief chủ đề · {counts.get('source-document',0)} thumbnail tài liệu cần bản thật · 3 bản đồ gốc khóa nguyên trạng</p>",
           "<p class='notice'>Inventory cho việc thay ảnh về sau. Demo hiện dùng chính ảnh từ screenshot: <a href='../assets/demo-current/gallery.html'>xem các vùng đã tách</a>. Chưa tìm/tải ảnh bên ngoài hoặc code website. Không kết luận ảnh nào là AI. Khung màu chỉ là overlay trong báo cáo; file archive và bản đồ gốc PDF 8/9/11 giữ nguyên tuyệt đối.</p>",
           "<p><a href='IMAGE_REPLACEMENT_AUDIT.md'>Bảng đầy đủ</a> · <a href='IMAGE_REPLACEMENT_AUDIT.csv'>CSV</a> · <a href='PROJECT_DECISIONS.md'>Quyết định mới nhất</a></p><div class='legend'>"]
    for action,(label,color) in STYLES.items():out.append(f"<span style='border-color:{color}'>{e(label)}</span>")
    out.append("</div><nav>")
    ordered = sorted(MANIFEST["assets"],key=lambda a:a["pdf_pages"][0])
    for a in ordered:out.append(f"<a href='#asset-{a['pdf_pages'][0]}'>PDF {','.join(map(str,a['pdf_pages']))}</a>")
    out.append("</nav>")
    for a in ordered:
        regs = [r for r in REGIONS if r["parent_asset_id"]==a["id"]]
        out.append(f"<article id='asset-{a['pdf_pages'][0]}'><h2>PDF {','.join(map(str,a['pdf_pages']))} — {e(a['title'])}</h2><p><a href='../{e(a['path'])}'>Mở file gốc không overlay</a> · {a['width']} × {a['height']}</p><div class='image-wrap'><img loading='lazy' src='../{e(a['path'])}' alt='{e(a['title'])} — unchanged extracted original'>")
        for row in regs:
            x0,y0,x1,y1=row["locator_percent_xyxy"];color=STYLES[row["action"]][1]
            out.append(f"<span class='mark' id='{row['id']}' style='left:{x0}%;top:{y0}%;width:{x1-x0}%;height:{y1-y0}%;border-color:{color}'><b style='color:{color}'>{row['id']}</b></span>")
        out.append("</div><ul class='list'>")
        for row in regs:
            label,color=STYLES[row["action"]]
            note = row["note_vi"] or (BRIEFS[row["brief_key"]][1] if row["brief_key"] else "Giữ nguyên/chờ nguồn; không tự thay bằng stock.")
            out.append(f"<li><a href='#{row['id']}'><strong>{row['id']}</strong></a> — {e(row['label_vi'])}<br><span class='state' style='color:{color}'>{e(label)}</span> · {e(note)}<br><small>Section: {e(', '.join(row['section_ids']))}</small></li>")
        out.append("</ul></article>")
    out.append("</main></html>")
    (DOCS / "IMAGE_REPLACEMENT_AUDIT.html").write_text("\n".join(out),encoding="utf-8")
    # Check originals after writing every report.
    for a in MANIFEST["assets"]:
        assert hashlib.sha256((ROOT/a["path"]).read_bytes()).hexdigest()==a["sha256"]
    assert hashlib.sha256((ROOT/MANIFEST["source_pdf"]).read_bytes()).hexdigest()==source_hash_before
    print(json.dumps(report["summary"],ensure_ascii=False,indent=2))
    print("PDF and all 43 extracted image files unchanged; no external image searched/downloaded.")


if __name__=="__main__":main()
