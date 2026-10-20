"""Build an offline section/source/asset approval packet; no website app is created."""

from __future__ import annotations

import hashlib
import html
import json
import re
from collections import Counter
from pathlib import Path
from urllib.parse import urldefrag

import pdfplumber
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
ASSET_MANIFEST = json.loads((ROOT / "assets/blueprint/manifest.json").read_text(encoding="utf-8"))
PDF = ROOT / ASSET_MANIFEST["source_pdf"]
PDF_HASH = hashlib.sha256(PDF.read_bytes()).hexdigest()
assert PDF_HASH == ASSET_MANIFEST["source_pdf_sha256"]
READER = PdfReader(PDF)
PAGES = {}
for number, page in enumerate(READER.pages, 1):
    lines = page.extract_text(extraction_mode="layout").splitlines()
    PAGES[number] = "\n".join(line.rstrip() for line in lines if line.strip() and not re.match(r"\s*SAFER COMMUNITIES UNITED\s+•\s+BLUEPRINT", line))


def clip(numbers, start=None, end=None, label="English source block"):
    if isinstance(numbers, int):
        numbers = [numbers]
    text = "\n".join(PAGES[p] for p in numbers)
    if start:
        assert start in text, (numbers, start)
        text = text[text.index(start):]
    if end:
        assert end in text, (numbers, end)
        text = text[:text.index(end)]
    raw = text.strip()
    # Future requirements remain in the full source reference, not selected demo text.
    selected = re.sub(r"\(\(.*?\)\)", "", raw, flags=re.S).strip()
    return {"label": label, "pdf_pages": numbers, "start_marker": start, "end_marker": end,
            "raw_excerpt": raw, "text": selected, "sha256": hashlib.sha256(selected.encode()).hexdigest(),
            "kind": "verbatim_source_excerpt_not_component_props"}


def assets_at(*numbers):
    return [a for a in ASSET_MANIFEST["assets"] if set(numbers) & set(a["pdf_pages"])]


def transcript(page, text, label):
    """Literal UI transcription, visually checked against the extracted selected image."""
    asset = assets_at(page)[0]
    return {"label": label, "pdf_pages": [page], "text": text, "raw_excerpt": text,
            "kind": "screenshot_transcription_visually_checked_not_verified_claim",
            "source_asset_id": asset["id"], "source_asset_sha256": asset["sha256"],
            "sha256": hashlib.sha256(text.encode()).hexdigest()}


def extract_sources():
    sources, seen = [], {}
    with pdfplumber.open(PDF) as layout:
        for number, page in enumerate(READER.pages, 1):
            for ref in page.get("/Annots", []):
                annotation = ref.get_object()
                action = annotation.get("/A")
                if not action:
                    continue
                uri = action.get_object().get("/URI")
                if not uri:
                    continue
                uri = str(uri)
                x0, y0, x1, y1 = map(float, annotation["/Rect"])
                physical = layout.pages[number - 1]
                label = physical.crop((x0 - 1, physical.height - y1 - 1, x1 + 1, physical.height - y0 + 1)).extract_text() or ""
                if uri not in seen:
                    base = urldefrag(uri)[0]
                    state, note = "provided-not-opened", "URL có thật trong annotation PDF; chưa kiểm tra truy cập/nội dung online."
                    if base in {
                        "https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf",
                        "https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf",
                        "https://planhillsborough.org/wp-content/uploads/2025/06/LRC-June-Draft-Agenda-Packet.pdf",
                    }:
                        state, note = "web-fetch-403", "Công cụ web trả 403 khi mở file gốc. Không kết luận link hỏng, không thay URL hoặc xác nhận policy/page/date đã được kiểm chứng."
                    elif base in {
                        "https://highways.dot.gov/safety/proven-safety-countermeasures/lighting",
                        "https://highways.dot.gov/safety/proven-safety-countermeasures/walkways",
                        "https://www.epa.gov/septic/septic-systems-and-drinking-water",
                    }:
                        state, note = "primary-page-opened", "Đã mở trang chính thức được dẫn. Đây là hướng dẫn chung, không xác minh số liệu/sự kiện địa phương hoặc mọi quan hệ nhân quả trong campaign copy."
                    source = {"id": f"SRC-{len(sources) + 1:02d}", "url": uri, "base_url": base,
                              "first_label": label, "occurrences": [], "online_status": state, "online_note": note,
                              "claim_validation": "not_a_full_fact_check", "audit_date_local": "2026-10-20"}
                    seen[uri] = source
                    sources.append(source)
                seen[uri]["occurrences"].append({"pdf_page": number, "label": label, "pdf_rect": [x0, y0, x1, y1]})
    return sources


SOURCES = extract_sources()
SOURCE_KEYS = {
    "official-map": "LIVABLE-COMMUNITIES.pdf#page=17",
    "land-gis": "gis.tpcmaps.org/arcgis/rest/services/pigi/pigiHC/MapServer/3",
    "fnai": "www.fnai.org/publications/gis-data",
    "elapp": "SDEMapServices/Environmental/FeatureServer/1",
    "swfwmd": "LandUseLandCoverPost2014/MapServer/3",
    "parcel": "ParcelPublishing/FeatureServer/12",
    "boundary": "Landuse_and_Planning/MapServer/2",
    "traffic-layer": "LOS_Update_2024/FeatureServer/6",
    "vandyke-page": "LRC-June-Draft-Agenda-Packet.pdf#page=13",
    "livable": "LIVABLE-COMMUNITIES.pdf",
    "lighting": "proven-safety-countermeasures/lighting",
    "traffic-query": "query?objectIds=582%2C136%2C53%2C108%2C479&outFields=%2A&returnGeometry=false&f=json",
    "mobility-page": "HC-Comp-Plan-1.pdf#page=127",
    "walkways": "proven-safety-countermeasures/walkways",
    "vandyke": "LRC-June-Draft-Agenda-Packet.pdf",
    "county": "HC-Comp-Plan-1.pdf",
    "epa": "septic/septic-systems-and-drinking-water",
    "water-page": "HC-Comp-Plan-1.pdf#page=233",
    "minutes": "publicaccess.hillsclerk.com/br/api/Document/",
    "staff": "planhillsborough.sharepoint.com/",
    "response": "drive.google.com/file/",
}


def source_ids(keys):
    result = []
    for key in keys:
        needle = SOURCE_KEYS[key]
        matches = [s for s in SOURCES if needle in s["url"]]
        # Plain document/layer key must not accidentally choose a fragment/query variant.
        if key in {"livable", "county", "vandyke", "traffic-layer"}:
            matches = [s for s in matches if "#" not in s["url"] and "?" not in s["url"]]
        assert len(matches) == 1, (key, matches)
        if matches[0]["id"] not in result:
            result.append(matches[0]["id"])
    return result


ROUTES = [
    ("Our Community", "/", "Home"),
    ("Issues", "/issues", "Issues overview"),
    ("Issue detail", "/issues/roads-safety", "Roads & Safety"),
    ("Issue detail", "/issues/water-septic", "Water & Septic"),
    ("Issue detail", "/issues/growth-daily-life", "Growth, Infrastructure & Daily Life"),
    ("The Facts", "/the-facts", "Evidence & Records"),
    ("The Proposal", "/the-proposal", "Proposal preview + Comparison content"),
    ("Take Action / Get Involved", "/take-action", "Action + separate previews"),
    ("About", "/about", "Labelled preview until approved content is supplied"),
]
DECISIONS = [
    {"id": "D-01", "title": "Cấu trúc route demo", "proposal": "Duyệt 9 route trong bảng đề xuất; Comparison nằm tại /the-proposal#compare-the-two-plans, không có menu/route riêng; Outdated Plan dùng /issues#outdated-community-plan. Đây là đề xuất kỹ thuật để duyệt, không phải số trang do blueprint tuyên bố.", "pdf": [3, 60, 61], "status": "pending"},
    {"id": "D-02", "title": "Nội dung thiếu và liên kết chi tiết chưa có", "proposal": "Giữ Proposal intro, About, footer information và full-detail/source thiếu ở preview có nhãn. Dùng nguyên nội dung Comparison đã có trong The Proposal; không tự viết nội dung mới, tạo file/link nguồn hoặc lặp chính phần hiện tại làm tài liệu chi tiết giả.", "pdf": [1, 3, 5, 6, 61, 69, 71], "status": "pending"},
    {"id": "D-03", "title": "Ảnh nhỏ bên trong screenshot", "proposal": "Đề xuất bạn cho phép bước tiếp theo tách đúng khung photo/map/illustration đang nằm trong các selected screenshots đã gắn từng section. Giữ nguyên file trích gốc; bản tách chỉ lấy vùng ảnh hiện có, không đổi pixel/màu/nội dung bên trong, không cắt legend/label/source, không upscale hoặc vẽ bù. Ghi asset cha, toạ độ và kích thước cho từng bản tách; vùng không thể tách trọn hoặc thiếu độ phân giải sẽ báo thiếu file gốc. Phê duyệt D-03 là cho phép cách tách này, không cho phép chỉnh sửa nội dung ảnh. Chưa cắt ảnh ở hồ sơ này; không dùng screenshot cả trang thay HTML.", "pdf": [1, 12, 57, 67], "status": "pending"},
    {"id": "D-04", "title": "Copy khác caveat và dữ liệu minh họa", "proposal": "Giữ nguyên copy theo blueprint; đặt đầy đủ caveat từ PDF cạnh số liệu tương ứng, kể cả Home Water card. Không tự đổi systems thành records hoặc gọi 806 hồ sơ là failure count. Nếu bạn muốn sửa câu gốc cần chỉ định bản sửa; hiện ghi xung đột C-01, chưa tự sửa.", "pdf": [16, 20, 39, 43, 44, 54, 58, 71, 82], "status": "pending"},
    {"id": "D-05", "title": "Nguồn có link nhưng chưa kiểm chứng nội dung", "proposal": "Dùng URL đúng từ PDF làm source links; giữ nhãn provided và trạng thái kiểm tra trong hồ sơ. Không coi URL tồn tại là đã kiểm chứng ngày/phiên bản/policy/số liệu. Ba PDF chính trả 403 với công cụ web nên vẫn giữ đúng link; nguồn chưa có dùng preview riêng.", "pdf": [8, 11, 28, 31, 38, 40, 48, 50, 74], "status": "pending"},
    {"id": "D-06", "title": "Growth density/housing và timeline", "proposal": "Dùng Natural Rural Density Comparison đúng PDF 57 cho density; Housing giữ copy PDF 55–56 nhưng không tự bổ sung bộ ba scenario/map chưa có. Timeline PDF 58 giữ nội dung đã có và preview có nhãn cho visual/data thiếu, không tạo đồ thị định lượng hoặc số liệu mới. Chưa tự gộp/bỏ section.", "pdf": [55, 56, 57, 58], "status": "pending"},
]
CONFLICTS = [
    {"id": "C-01", "section_ids": ["H-06", "I-03", "W-02", "W-03"], "issue": "Home Water card PDF 16 gọi 1,626 là systems và dùng repair records; PDF 20 yêu cầu administrative-record scope ZIP 33556, repair không phải failures, phương pháp 3,087 chưa verified. Không tự sửa câu gốc.", "decision": "D-04"},
    {"id": "C-02", "section_ids": ["L-02", "L-03"], "issue": "PDF 55–56 có density/housing scenarios nhưng selected PDF 57 là một composite. Chưa đủ ba scenario images và density-policy map riêng.", "decision": "D-06"},
    {"id": "C-03", "section_ids": ["R-07", "L-01", "F-02", "A-06"], "issue": "Crash figures, population/housing counts, 124 results và testimonial cards là mẫu/chưa xác minh; copy-only-in-image cũng cần đối chiếu. Không hiện như số liệu/lời chứng thật.", "decision": "D-04"},
    {"id": "C-04", "section_ids": ["P-01", "B-01", "B-02"], "issue": "Không có PAGE 07; Proposal/About/footer information chưa có đủ approved copy hoặc selected layout riêng.", "decision": "D-02"},
    {"id": "C-05", "section_ids": ["A-08"], "issue": "PDF 87 và 88 dùng cùng image object; tên (1 of 2)/(2 of 2) không chứng minh hai artwork khác nhau. Petition dùng toàn văn PDF 85, không copy lại chữ nhỏ từ ảnh.", "decision": "D-02"},
    {"id": "C-06", "section_ids": ["I-06", "R-07", "W-08", "L-07", "F-02"], "issue": "Một số nguồn/card findings/full comparison thiếu file hoặc link trực tiếp; source chung không tự chứng minh từng claim địa phương. Safety card trong ảnh không đủ để xác nhận higher crash frequency.", "decision": "D-05"},
]

SECTIONS = []


def add(id, group, title, pdf, blocks=(), image_pages=(), sources=(), ctas=(), missing=(), notes=(), copy_status="selected-from-blueprint", image_note=None):
    images = assets_at(*image_pages)
    SECTIONS.append({
        "id": id, "group": group, "title": title, "pdf_pages": list(pdf),
        "approval_status": "pending-user-review", "copy_status": copy_status,
        "copy_blocks": list(blocks), "asset_ids": [a["id"] for a in images],
        "asset_state": ("standalone-map-ready" if images and all(a["role"] == "map" for a in images)
                        else "maps-ready-with-layout-references" if any(a["role"] == "map" for a in images)
                        else "reference-only-component-assets-needed" if images else "no-independent-visual-selected"),
        "asset_note": image_note or ("Screenshot/layout reference nguyên khối; không dùng thay HTML. Asset nhỏ độc lập chưa có." if images and any(a["role"] != "map" for a in images) else "Không yêu cầu visual riêng hoặc visual còn thiếu; xem ghi chú."),
        "source_ids": source_ids(sources), "ctas": [{"label": label, "proposed_target": target, "state": "pending-route-approval"} for label, target in ctas],
        "missing": list(missing), "implementation_notes_vi": list(notes),
    })


# Shared foundation
add("G-01", "Foundation", "Header / Navigation", range(3, 6),
    [clip(3, "Main Navigation:", "Navigation routing:")],
    ctas=[("Our Community", "/"), ("Issues", "/issues"), ("The Facts", "/the-facts"), ("The Proposal", "/the-proposal"), ("Take Action", "/take-action"), ("About", "/about"), ("Get Involved", "/take-action")],
    missing=["Logo file độc lập chưa được cung cấp; screenshot không phải logo vector."],
    notes=["Get Involved → /take-action. Fixed/light header; mobile menu. Tên route là đề xuất, menu labels giữ nguyên."])
add("G-02", "Foundation", "Footer", [5, 6], [clip(5, "Footer")],
    ctas=[("Explore / Take Action / About", "Theo D-01"), ("Updates / Contact / Sources & Methods / Accessibility / Edits / Privacy", "Preview theo B-02")],
    missing=["Nội dung/URL riêng cho các footer information links chưa có."], notes=["Foundation override các biến thể slogan/link groups trong screenshot cũ."])
add("G-03", "Foundation", "Design tokens / cards / buttons", [3, 4, 5, 6],
    [clip(3, "Dark Navy"), clip(4, "Coral Red", "Typography and Content Hierarchy"), clip(4, "Headings:", "The typography system includes:")],
    notes=["Chọn Source Serif 4 cho headings và Inter cho body trong hai lựa chọn blueprint cho phép. Sáu màu đúng mã; không thêm theme của shadcn."])

# Home
add("H-01", "Home", "Introduction / Hero", [7, 17], [clip(7, "On-screen eyebrow:", "Visual")], [17],
    ctas=[("View the Issues →", "/issues"), ("View the Evidence →", "/the-facts")],
    missing=["Hero landscape photo và bốn thumbnail trong Home chưa có file độc lập."], notes=["Giữ opening design; không thêm đoạn giải thích dài vào hero."])
add("H-02", "Home", "Map 2A — Official boundary", [8, 12, 13], [clip(8, "THE NIMBY MAP")], [8, 13], ["official-map"],
    ctas=[("View the official map — Figure 3, page 17", "SRC official-map; đúng URL được cung cấp")],
    notes=["Dùng map PDF 8 trực tiếp; PDF 13 chỉ là reference layout. Bắt đầu chuỗi ba maps xếp dọc."], image_note="Map độc lập PDF 8 sẵn có; PDF 13 là layout preview, không thay GIS map.")
add("H-03", "Home", "Map 2A — Land / conservation", [9, 12, 14], [clip(9, "VS.")], [9, 14], ["land-gis", "fnai", "elapp", "swfwmd"],
    missing=["SCU calculation files cho 34.3% không có; URL layer không tự tái tạo snapshot/calculation."],
    notes=["Giữ 34.3%/8,025/23,387 acres, ngày và overlap method; landscape protections không đồng nghĩa toàn bộ government-owned."], image_note="Map PDF 9 sẵn có; PDF 14 là preview composition. Giữ nguồn/legend/caveat.")
add("H-04", "Home", "Map 2A — Parcels / infrastructure", [10, 12, 14], [clip(10)], [9, 14], ["parcel", "boundary"],
    missing=["Không có file snapshot October 2, 2026 hoặc bảng tính SCU độc lập."],
    notes=["4,542 parcels không phải occupied homes; 2,249/49.5% dưới một acre. Methodology plain text theo PDF 12, không làm expandable control."])
add("H-05", "Home", "Map 2A — Roads / traffic / transition", [11, 12, 15], [clip(11, "MAJOR ROADS.", "Primary button:")], [11, 15], ["traffic-layer", "vandyke-page"],
    ctas=[("Explore the evidence →", "/the-facts"), ("Read the petition →", "/take-action#petition"), ("Become a supporter →", "/take-action#supporter-application"), ("Continue to Roads & Safety", "/issues/roads-safety")],
    notes=["19,912 vehicle movements, không unique people/injuries. Ba map full width; chỉ link full-size, không viewer GIS/zoom mới."])
add("H-06", "Home", "Main Issues — four cards", [16, 17],
    [clip(16, "On-screen heading:", "Display 4 large cards:"), clip(16, " Our roads are dangerous!", "Visual: Gunn"),
     clip(16, " Our water is at risk!", "Visual: Water"), clip(16, " Everyday needs are harder to access!", "  Visual: Housing"),
     clip(16, " The Community Plan is holding our community back!", "The Keystone–Odessa Community Plan was adopted"), clip(16, "On-screen card copy:", "Visual: Community Plan")], [17],
    ctas=[("View Roads & Safety →", "/issues/roads-safety"), ("View Water & Septic →", "/issues/water-septic"), ("View Growth & Daily Life →", "/issues/growth-daily-life"), ("View the Community Plan →", "/issues#outdated-community-plan")],
    missing=["Bốn card photos chưa có độc lập; C-01 cần duyệt cách đặt caveat cạnh Water card."],
    notes=["Chọn on-screen heading và on-screen card copy thay hai đoạn mô tả cũ, không trộn versions."])

# Issues
add("I-01", "Issues", "Introduction", [17, 18, 19],
    [clip(17, "On-screen heading:"), clip(18, "From roads and water", "Gunn Highway —")], [19],
    ctas=[("Four issue navigation choices", "I-02 / I-03 / I-04 / I-05 anchors")], notes=["Không dùng purpose/editorial paragraphs làm intro bổ sung."])
add("I-02", "Issues", "Roads & Safety overview", [18, 19],
    [clip(18, "Roads must meet", "Main Content"), clip(18, "Gunn Highway —")], [19], ["livable"],
    ctas=[("Explore Roads & Safety →", "/issues/roads-safety")], missing=["Road photo/icons chưa có component assets riêng."])
add("I-03", "Issues", "Water & Septic overview", [19, 20, 21],
    [clip(19, "WHAT ARE WE PROTECTING", "Specific Issues"), clip(20, "Key Data", "Visual"), clip(20, "Closing below illustration", "Current on-screen copy"), clip(20, "Data scope:")], [21],
    sources=["county", "epa"], ctas=[("Explore Water & Septic →", "/issues/water-septic")],
    missing=["FLWMI administrative dataset, EHDConst–Repair extract và phương pháp 3,087 chưa có."], notes=["Six topics lấy tên từ PDF 19–20; long explanations giữ ở source reference. Data scope bắt buộc."])
add("I-04", "Issues", "Everyday Needs, Growth & Infrastructure", [21, 22, 23],
    [clip([21, 22], "YOU CHOSE RURAL LIVING.", "Visual direction")], [23],
    ctas=[("Explore Growth & Daily Life", "/issues/growth-daily-life")],
    missing=["Schematic service map chưa có file độc lập; source cho evidence box chưa được cung cấp."],
    notes=["Ba messages mới thay bảy cards/impact chain cũ. Giữ Illustration và Schematic service pins, not verified locations. Không thêm evidence box chưa verified."])
add("I-05", "Issues", "Outdated Community Plan", [23, 24, 25],
    [clip(23, "The Community Plan was created"), clip(24, "Main Content", "Visual")], [25], ["livable", "response"],
    ctas=[("Learn About the Community Plan →", "/the-proposal#compare-the-two-plans")],
    missing=["Boundary illustration/timeline thumbnails chưa có độc lập; response link chưa mở xác minh nội dung."], notes=["Target anchor /issues#outdated-community-plan là điểm vào overview này; timeline status là dated 2026 record, không live."])
add("I-06", "Issues", "The Issues Are Connected", [25, 26, 27],
    [clip([25, 26], "NO PLAN IS MORE IMPORTANT", "Implementation note:")], [27],
    sources=["livable", "county"], ctas=[("Petition connection", "/take-action#petition")],
    missing=["Một supporting source trực tiếp cho từng cột roads/water/growth còn cần source check theo PDF 26."],
    notes=["Giữ ba nhánh và convergence. Sơ đồ không thiết lập Plan caused harm; các câu Place/Diagram trong excerpt là chỉ dẫn biên tập, không UI copy."])

# Roads
add("R-01", "Roads & Safety", "Hero", [28], [clip(28, "Label", "Visual")],
    ctas=[("View the Road Issues ↓", "/issues/roads-safety#street-lighting")],
    missing=["PDF không gắn hero photo độc lập/selected screenshot hero riêng. Không tự chọn ảnh mới."],
    notes=["Chỉ định visual: local road/Gunn Highway, traffic + two-lane + residential + users; cần approved file phù hợp."])
add("R-02", "Roads & Safety", "Street Lighting", [28, 29, 30],
    [clip(28, "Does someone have to get hurt first?", "Source:"), clip(29, "FHWA explains", "Source:"), clip(29, "Current on-screen copy")], [30], ["livable", "lighting"],
    ctas=[("Read the Community Plan", "SRC livable"), ("Read FHWA guidance on lighting", "SRC lighting")],
    notes=["Current on-screen text điều chỉnh selected image; dài research/source notes ở phần chi tiết, không nhồi vào block."])
add("R-03", "Roads & Safety", "Gunn Highway", [30, 31],
    [clip(30, "On-screen heading:", "Source:"), clip([30, 31], "Current on-screen copy", "03 — WALKING")], [31], ["livable", "traffic-query", "county"],
    ctas=[("View the Community Plan Policy →", "SRC livable"), ("View the County Table →", "SRC county; constrained-road pages 250–251 theo blueprint"), ("Read the County’s 2024 traffic data", "SRC traffic-query")],
    missing=["Ảnh road và route map trong screenshot chưa có file riêng; County table chưa được đối chiếu do fetch 403."], notes=["Giữ đúng đoạn đường, OBJECTID/LOS theo source notes PDF 30; không dùng AADT làm crash count."])
add("R-04", "Roads & Safety", "Walking, Biking & Crossings", [31, 32],
    [clip(31, "On-screen heading:", "Image:"), clip([31, 32], "Current on-screen copy", "04 — EMERGENCY")], [32], ["mobility-page", "walkways"],
    ctas=[("Read the County policy and full criteria", "SRC mobility-page"), ("Read FHWA guidance on walkways", "SRC walkways")], notes=["Giữ Illustration label của ảnh; FHWA là guidance chung."])
add("R-05", "Roads & Safety", "Emergency Access", [32, 33],
    [clip(32, "On-screen heading: Emergency", "Image:"), clip([32, 33], "Current on-screen copy", "4. THE NIMBY")], [33], ["livable"],
    missing=["Không có dataset response-time/delay hoặc independent photo trong bộ file."], notes=["Không tự tạo số phút response hoặc claim delay đã được đo."])
add("R-06", "Roads & Safety", "Map comparison", [33, 34, 35, 36, 37],
    [clip([33, 34], "The NIMBY Map does not show", "Visual")], [8, 9, 11, 35, 36, 37], ["official-map", "land-gis", "fnai", "elapp", "swfwmd", "traffic-layer"],
    ctas=[("Home section 2A", "/#map-comparison")], notes=["Đề xuất demo link tới Home 2A, không nhân đôi viewer. Giữ ba multi-panel previews ở bộ asset để đối chiếu; nếu lặp maps vẫn xếp dọc full-width."])
add("R-07", "Roads & Safety", "Records & Evidence", [38, 39], [clip(38, "THE NUMBERS DEMAND ACTION")], [39], ["traffic-query", "vandyke", "vandyke-page", "livable"],
    ctas=[("Read the Van Dyke study — page 13", "SRC vandyke-page"), ("Read the County’s 2024 traffic data", "SRC traffic-query"), ("SUPPORT THE PETITION →", "/take-action#petition")],
    missing=["Verified crash dataset/key finding không được cung cấp; metadata/figures chỉ ở screenshot không là verified records."],
    notes=["Safety card có demo/unverified label; không tự thêm 327/12 nếu current artwork không hiện. Full source chưa có dùng preview."])
SECTIONS[-1]["copy_blocks"].append(transcript(39, """SAFETY DATA
Higher crash frequency along Gunn Highway
Multiple crashes, including serious injuries, have been reported along Gunn Highway.
Hillsborough County Crash Data
2020 – 2024
View Original Document

TRAFFIC DATA
19,912 DAILY VEHICLE MOVEMENTS
Gunn Highway: Pasco County line to Van Dyke Road.
Hillsborough County AADT
2024
View Original Document

MAPS
Gunn Highway and the Community Plan area
Map showing Gunn Highway and the section within/serving Keystone–Odessa.
Hillsborough County GIS
2024
View Original Map

PUBLIC RECORDS
STUDY THE OPTIONS.
Van Dyke: Gunn Highway to west of Suncoast Parkway was excluded from capacity-improvement analysis because of Comprehensive Plan constraints.
Read the study · page 13
View Original Document

COMMUNITY PLAN
Restrictions on expansion for Gunn Highway
The Community Plan identifies Gunn Highway as a road with restrictions on further expansion.
Keystone–Odessa Community Plan
View Original Document""", "Năm card text trong selected screenshot — giữ nhãn demo cho finding/metadata chưa xác minh"))
SECTIONS[-1]["implementation_notes_vi"].append("Card crash finding/metadata vừa chép là chữ có trong hình, không phải dữ liệu được xác minh. Thumbnail hồ sơ/quoted policy trong artwork không thay thế original record; giữ nhãn minh họa nếu chưa có nguồn trực tiếp.")
add("R-08", "Roads & Safety", "Planning frameworks summary", [39, 40, 41],
    [clip([39, 40], "Two planning frameworks.", "Source:"), clip([40, 41], "Current on-screen copy")], [41], ["county", "livable"],
    ctas=[("Detailed Roads & Safety Comparison →", "/the-proposal#roads-comparison")], notes=["Current on-screen copy phía County ưu tiên; passage Mobility 5.1.4 và policy sources ở detail dưới viewport khi cần."])

# Water
add("W-01", "Water & Septic", "Hero / core issue", [42, 43],
    [clip(42, "Label", "Visual"), clip(42, "Current on-screen copy")], [43],
    ctas=[("View the Issue ↓", "/issues/water-septic#septic-scale")], missing=["Hero landscape và ba diagram images chưa có file riêng."])
add("W-02", "Water & Septic", "Scale of septic", [43, 44, 20],
    [clip(43, "3. THE SCALE", "Visual"), clip(43, "This is an actual condition"), clip(20, "Data scope:")], [44],
    missing=["FLWMI Odessa ZIP 33556 dataset và calculation 3,087 chưa cung cấp."], notes=["Giữ records/classification scope; không sửa số hoặc coi proxy classification là measured system count."])
add("W-03", "Water & Septic", "Construction / repair records", [44, 45, 20],
    [clip(44, "4. SEPTIC", "Visual"), clip(44, "Planning policy must", "This section does not need"), clip(20, "Data scope:")], [45],
    missing=["EHDConst–Repair raw records và chart inputs chưa cung cấp."], notes=["806/738/41/27; 1998–2023. Giữ caveat construction/repair records không failure counts."])
add("W-04", "Water & Septic", "Connected Water", [45, 46, 47], [clip(45, "5. WHAT GOES", "Main Visual")], [47], ["epa"],
    ctas=[("Source: EPA — Septic Systems and Drinking Water", "SRC epa"), ("Petition connection", "/take-action#petition")],
    notes=["Giữ conceptual cutaway và not a documented contamination event. Không thêm interactive Water layer map."],
    missing=["Cutaway nằm trong composite UI; chưa có file cutaway độc lập."])
add("W-05", "Water & Septic", "Water & Wastewater Options", [47, 48, 49],
    [clip(47, "6. OUR WATER.", "This is the central section"), clip(47, "The County has water", "Source:"), clip(48, "1. REAL CONDITIONS.")], [49], ["county"],
    ctas=[("Read the exclusions — One Water 4.3.7", "SRC county; policy pages 229–234 theo blueprint"), ("Sign our petition", "/take-action#petition")],
    notes=["Giữ some connection routes remain, bao gồm public-health-hazard route; không nói tất cả utility options bị cấm."])
add("W-06", "Water & Septic", "Core Conflict — concise approved panel", [49, 50, 51],
    [clip(51, "Exact on-screen copy", "8. COMMUNITY PLAN")], [51], ["county", "water-page", "minutes", "staff"],
    ctas=[("Read the 2024 staff report →", "SRC staff"), ("Read Policies 4.3.5 and 4.3.7 →", "SRC water-page / county")],
    notes=["Exact concise panel PDF 51 thắng generic split-screen PDF 50. Research dài PDF 49–50 và qualifications vẫn giữ ở reference/detail, không chen vào panel.", "Không mọi exclusion bắt đầu 2024; agency support cho utility reforms không là ủng hộ SCU/retirement."])
add("W-07", "Water & Septic", "Comparison summary", [51, 52], [clip([51, 52], "8. COMMUNITY PLAN", "Visual")], [52], ["county", "livable"],
    ctas=[("View the Full Water & Wastewater Comparison →", "/the-proposal#water-comparison")])
add("W-08", "Water & Septic", "Evidence cards", [52, 53], [clip([52, 53], "See the Data and Records", "10. END OF PAGE")], [53], ["county", "livable"],
    ctas=[("View Original Document", "Supplied source nếu có; thiếu → source preview")],
    missing=["FLWMI, EHDConst–Repair, well/protection maps, public-record documents và card-level findings chưa có đủ file/link."],
    notes=["Không dùng County policy PDF thay source cho numeric septic/repair claims."])
add("W-09", "Water & Septic", "Next issue", [53], [clip(53, "Water is part of a larger issue.", "PAGE 05")], [53],
    ctas=[("Growth, Infrastructure & Daily Life →", "/issues/growth-daily-life")])

# Growth
add("L-01", "Growth & Daily Life", "Hero — Then / Today", [54, 55], [clip(54, "Label", "Visual")], [55], ["livable"],
    missing=["Verified population/housing source và two-map/photo originals chưa có."], notes=["~4,000/~7,000 population và ~1,100/~2,500 housing trong image là unverified sample; cần nhãn rõ, không xác nhận là local counts."])
add("L-02", "Growth & Daily Life", "Very low density", [55, 56, 57],
    [clip(55, "Five acres for one home", "Visual"), clip(56, "Current on-screen copy"), clip(57, "Conceptual illustration,", "5. THE COMMUNITY PLAN")], [57], ["livable"],
    missing=["Natural rural illustration chưa có file độc lập khỏi UI composite."], notes=["Đúng phiên bản Natural Rural Density Comparison; 10 homes on 50 acres chỉ bên trái. Tree cover tương đương, right rural lanes; conceptual qualification theo PDF 57."])
add("L-03", "Growth & Daily Life", "Housing consequences / scenarios", [55, 56],
    [clip(55, "4. LOW DENSITY", "Visual"), clip(56, "5 ACRES / HOME", "Current on-screen copy")], [57], ["livable", "county"],
    missing=["Ba scenario-card assets và map low-density policies chưa có độc lập; Master Assessment được nhắc nhưng không cung cấp."],
    notes=["D-06: không tự gộp/bỏ section hoặc tự thêm ba hình khác vì selected PDF 57 dùng comparison hai panel."])
add("L-04", "Growth & Daily Life", "Services / daily needs", [57, 58],
    [clip(57, "5. THE COMMUNITY PLAN LIMITS", "Visual"), clip([57, 58], "Current on-screen copy", "6. GROWTH AND INFRASTRUCTURE")], [58], ["livable"],
    missing=["Standalone service illustration và raw location/travel dataset chưa có."], notes=["Giữ illustrative drive-time caveat; không lookup/routing; schematic pins không verified locations."])
add("L-05", "Growth & Daily Life", "Growth and infrastructure timeline", [58], [clip(58, "6. GROWTH AND INFRASTRUCTURE")],
    missing=["Selected timeline/map asset, quantitative series và Master Assessment source chưa có."],
    notes=["Có approved topic/copy/years nhưng thiếu visual/data; đề xuất label preview, không tự vẽ measured chart hoặc bỏ section."])
add("L-06", "Growth & Daily Life", "Comparison summary", [59], [clip(59, "7. COMMUNITY PLAN", "8. EVIDENCE")], [59], ["livable", "county"],
    ctas=[("View the Growth & Development Comparison →", "/the-proposal#growth-housing-comparison")])
add("L-07", "Growth & Daily Life", "Evidence cards", [59, 60], [clip([59, 60], "See the Evidence Behind the Issue", "9. END OF PAGE")], [60], ["livable", "county", "parcel", "boundary"],
    ctas=[("View Document/Map", "Supplied document/GIS source phù hợp; thiếu → preview")],
    missing=["Housing/service/travel/infrastructure card-level datasets và findings chưa có đầy đủ."], notes=["Không biến source category list hoặc screenshot metadata thành hồ sơ thật."])
add("L-08", "Growth & Daily Life", "Outdated Community Plan continuation", [60], [clip(60, "9. END OF PAGE")], [60],
    ctas=[("Learn About the Community Plan →", "/issues#outdated-community-plan")], notes=["Từ overview tiếp tục tới Comparison; không thêm route Outdated Plan riêng."])

# Comparison and proposal
add("C-01", "Comparison / The Proposal", "Roads & Safety comparison", [61, 62, 63], [clip(62, "SHOULD THE LOOK")], [63], ["livable", "county", "mobility-page", "lighting", "walkways"],
    ctas=[("View the Full Roads Comparison →", "Missing full-detail destination → labelled preview")],
    missing=["Standalone paired road images và full policy-by-policy comparison document chưa có."], notes=["Anchor /the-proposal#roads-comparison; không tự link CTA Full quay về cùng panel và giả là đã có bản chi tiết. Giữ caveat no automatic approval/funding."])
add("C-02", "Comparison / The Proposal", "Water & Wastewater comparison", [64, 65],
    [clip(64, "From Infrastructure Limits", "COMMUNITY PLAN"), clip([64, 65], "Current on-screen copy", "4. COMPARISON 03")], [65], ["livable", "county", "water-page"],
    ctas=[("View the Full Water Comparison →", "Missing full-detail destination → labelled preview")],
    missing=["Water full-comparison destination và component images chưa có."], notes=["Anchor /the-proposal#water-comparison; giữ KEYSTONE–ODESSA LIMIT / One Water 4.3.7."])
add("C-03", "Comparison / The Proposal", "Growth & Housing — Screenshot 110", [65, 66, 67],
    [clip([65, 66], "Two Ways of Managing", "Visual direction")], [67], ["livable", "county"],
    ctas=[("View the Full Growth & Housing Comparison →", "Missing full-detail destination → labelled preview")],
    missing=["Rural header/eight illustrated rows chưa có asset độc lập; full-comparison destination chưa có."],
    notes=["Anchor /the-proposal#growth-housing-comparison. Giữ hai cột/bốn rows mỗi cột/result banner; County vẫn có rural density limits."])
add("C-04", "Comparison / The Proposal", "What remains if Plan is removed", [67, 68],
    [clip(67, "Keystone–Odessa will still be planned"), clip(68, "REMAINS", "The project’s comparison material"), clip(68, "Message to Highlight", "Implementation:")], [68], ["livable"],
    ctas=[("Read the Community Plan", "SRC livable"), ("Learn More About the County Framework", "Proposal preview / County source, tuỳ nội dung được cung cấp")],
    notes=["Giữ diagram/headline; additional campaign passage ở dưới viewport. CTA County Framework trong artwork không cấp phép viết trang mới."])
add("P-01", "Comparison / The Proposal", "Proposed Change introduction — missing spec", [3, 6, 61, 67, 68, 84, 85],
    [clip(3, "Proposed Change —", "Action —")],
    ctas=[("Compare the Two Plans", "/the-proposal#compare-the-two-plans"), ("Read the petition →", "/take-action#petition")],
    missing=["Không có PAGE 07 hoặc approved on-screen copy/selected layout riêng cho Proposal intro."],
    notes=["Trích đoạn là mô tả chức năng, không phải public copy. D-02 đề xuất labelled preview cho intro và đặt Comparison hiện có bên dưới; không tự biến petition thành marketing copy."], copy_status="missing-approved-public-copy")

# Evidence
add("F-01", "Evidence & Records / The Facts", "Explore Evidence by Issue", [69, 70],
    [clip([69, 70], "ROADS & SAFETY", "This structure directly matches")], [70],
    ctas=[("View Road Evidence →", "/the-facts#road-evidence"), ("View Water Evidence →", "/the-facts#water-evidence"), ("View Growth Evidence →", "/the-facts#growth-evidence"), ("View Planning Documents →", "/the-facts#planning-documents")],
    missing=["Thumbnail files riêng chưa có; source category không tự tạo nguồn thật."], notes=["Các target là static grouped cards/anchors, không search/filter động."])
add("F-02", "Evidence & Records / The Facts", "Evidence Library", [70, 71, 72],
    [clip(70, "Find All Data and Documents", "Demo:"), clip(71, "Each Result:", "Demo:")], [72],
    sources=["livable", "county", "vandyke", "traffic-query", "epa", "response", "minutes", "staff", "parcel", "boundary"],
    ctas=[("View the Original Document →", "Source register đúng record; thiếu → labelled preview"), ("Take Action →", "/take-action")],
    missing=["Không có verified full inventory, 124 results, toàn bộ record metadata hoặc approved description cho từng nguồn."],
    notes=["Record schema có placeholder [short description], không được xuất như approved copy. Source IDs là nguồn có URL trong blueprint, không tự sinh source-card descriptions. Tất cả bộ 21 URLs nằm trong source register."])

# Action
add("A-01", "Action", "Hero", [73, 74], [clip(73, "Headline", "Visual")], [74],
    ctas=[("Take Action →", "/take-action#add-your-support")], notes=["Không có After learning…; dùng community/family visual đã chọn, không road/septic problem visuals."])
add("A-02", "Action", "Three Main Actions / Add Your Support", [74, 77, 78, 79],
    [clip([77, 78], "THREE WAYS TO TAKE ACTION"), clip(74, "Additional record:", "Button")], [79], ["minutes", "response"],
    ctas=[("Become a supporter and stay updated →", "/take-action#supporter-application"), ("Read and sign the petition →", "/take-action#petition"), ("SHARE MY STORY →", "A-04 demo preview"), ("SHARE INFORMATION →", "A-05 demo preview"), ("Read the May 9, 2024 minutes →", "SRC minutes")],
    notes=["Current copy PDF 77–78 ưu tiên. Additional response note là dated source ở phần hỗ trợ; không làm live result."])
add("A-03", "Action", "Supporter Application — combined preview", [75, 76, 77],
    [clip(76), clip(77, "Your information", "Current on-screen copy")],
    ctas=[("Signing / participation / contact controls", "Static examples; Demo only. Nothing is submitted or saved.")],
    notes=["Toàn bộ mission/choices/fields/Consent/Privacy/return instruction nguyên văn; address và phone optional. Ba audience choices unselected; không Other. Hai paper pages là một continuous preview.", "Không enrollment thật, statutory voting membership, petition signature hoặc donation; anchor /take-action#supporter-application. Không cần ảnh UI để thay text form."])
add("A-04", "Action", "Share Your Story preview", [79, 80], [clip(79, "02 — SHARE YOUR STORY")], [80],
    ctas=[("SHARE MY STORY →", "Story preview"), ("Upload / Submit Story", "Demo notice; không nhận file hoặc dữ liệu")],
    notes=["Giữ full field labels và demo notice. Publication Yes trong hình là ví dụ không phải consent thật; preview không editable."])
add("A-05", "Action", "Share Information preview", [78, 80, 81], [clip(80, "03 — SHARE INFORMATION")], [81],
    ctas=[("SHARE INFORMATION →", "Static Facebook / Email / Copy Link preview")], notes=["Không social integration/email/copy thật; optional paragraph theo PDF 80 được đề xuất giữ nguyên."])
add("A-06", "Action", "Illustrative community stories", [81, 82],
    [clip([81, 82], "Heading", "4. FINAL CTA")], [82],
    ctas=[("Read the Story → / VIEW ALL STORIES →", "Illustrative story preview, không route live riêng")],
    missing=["Không có authenticated submissions/publication permissions; ba quote/date chỉ là sample artwork."],
    notes=["Giữ ba sample cards và nhãn Illustrative sample stories. Quote/date bên dưới đã chép và đối chiếu ảnh PDF 82; không phải lời chứng được xác thực. Tagline Real people / Real stories trong artwork không làm sample thành submissions thật."], copy_status="selected-plus-visually-checked-screenshot-text")
SECTIONS[-1]["copy_blocks"].append(transcript(82, """ROAD SAFETY
“Traffic has increased significantly, and it feels less safe for our children to walk or bike in our neighborhood.”
Keystone–Odessa Resident
September 2026
Read the Story

WATER & SEPTIC
“Our well water often has a strange taste and odor. We are concerned about our long-term health and the lack of options for public water.”
Odessa Resident
August 2026
Read the Story

EVERYDAY ACCESS
“We have to drive a long way for groceries, healthcare, and other essential services. It makes daily life more difficult, especially for older residents.”
Keystone Resident
September 2026
Read the Story

VIEW ALL STORIES

Real people.
Real stories.
A stronger community.""", "Literal sample-card transcription from PDF 82 — Illustrative sample stories"))
add("A-07", "Action", "Final CTA", [82, 83],
    [clip(82, "Headline"), clip(83, "Primary CTA")], [87],
    ctas=[("READ AND SIGN THE PETITION →", "/take-action#petition")], notes=["Giữ campaign passage; thay old merged form bằng separate petition. PDF 87 chỉ reference layout."])
add("A-08", "Action", "Approved Petition + signing preview", [83, 84, 85, 86, 87, 88],
    [clip(85, "SAFER COMMUNITIES UNITED", "((Recipient verified")], [87, 88],
    ctas=[("SIGN THIS PETITION →", "Demo only. No signature has been collected.")],
    missing=["Petition_Larger_Text.pdf riêng chưa có; copy chính thức đầy đủ có ở blueprint PDF 85. Không cần file riêng để hiện HTML text preview."],
    notes=["Anchor /take-action#petition; full selectable text trước bốn fields Printed name / Community or ZIP / Signature / Date. Giữ public-records warning, independent notice, associated policies và LDC Part 3.08.00.", "PDF 87/88 dùng cùng một image; không suy ra hai bản petition wording. Optional email artwork static, không thêm required email/age/voter eligibility hoặc signup consent."])

# About and missing footer destinations
add("B-01", "About / Information", "About", [3, 5, 6], [clip(3, "About —", "Main Navigation:")],
    missing=["Approved public copy, section order, selected design và actual contact chưa được cung cấp."],
    notes=["Trích đoạn là yêu cầu chức năng, không public copy. D-02 đề xuất /about labelled preview; không tự viết bio/tuyên bố pháp lý."], copy_status="missing-approved-public-copy")
add("B-02", "About / Information", "Footer information destinations", [5, 6],
    [clip(5, "Get Involved: Take Action")],
    ctas=[("Updates / Contact / Sources & Methods / Accessibility / Edits / Privacy", "Six labelled informational previews; không thêm route ngoài D-01")],
    missing=["Chưa có approved copy, contact details hoặc URLs riêng cho sáu đích phụ."],
    notes=["Privacy placeholder không phải lời hứa quyền riêng tư đã duyệt. Source register kỹ thuật này không tự trở thành public Sources & Methods copy."], copy_status="missing-approved-public-copy")


def esc(value):
    return html.escape(str(value), quote=True)


def local(path):
    return "../" + path


def main():
    assert len(SECTIONS) == 57, len(SECTIONS)
    assert len(SOURCES) == 21
    assert sum(len(s["occurrences"]) for s in SOURCES) == 33
    asset_by_id = {a["id"]: a for a in ASSET_MANIFEST["assets"]}
    source_by_id = {s["id"]: s for s in SOURCES}
    by_group = {}
    for section in SECTIONS:
        by_group.setdefault(section["group"], []).append(section)
    used_assets = {i for s in SECTIONS for i in s["asset_ids"]}
    assert used_assets == set(asset_by_id), set(asset_by_id) - used_assets
    approval_file = DOCS / "project-approvals.json"
    approvals = json.loads(approval_file.read_text(encoding="utf-8")) if approval_file.exists() else None
    approved = approvals is not None and approvals.get("non_image_section_review") == "approved-as-reviewed"
    scope_status = "approved-non-image-scope-with-image-policy-update" if approved else "pending-user-review"
    section_status = "approved-non-image-scope" if approved else "pending-user-review"
    banner = ("ĐÃ DUYỆT PHẦN CÒN LẠI; QUY TẮC ẢNH ĐÃ CẬP NHẬT — CHƯA CODE WEBSITE. Demo dùng tạm ảnh hiện có từ screenshot; xem PROJECT_DECISIONS và assets/demo-current/README.md về vùng ảnh đã tách và giới hạn. Tìm nguồn thay sau."
              if approved else "CHỜ BẠN DUYỆT — CHƯA CODE WEBSITE.")
    route_caption = "9 route đã duyệt theo D-01" if approved else "9 route đề xuất — chờ duyệt D-01"
    for decision in DECISIONS:
        if approved:
            decision["status"] = approvals["decision_statuses"][decision["id"]]
            if decision["id"] == "D-03":
                decision["previous_proposal"] = decision["proposal"]
                decision["proposal"] = "Chỉ dẫn mới của người dùng thay D-03: demo dùng tạm chính ảnh trong screenshot, tìm nguồn thay sau. Vùng photo đã tách riêng tại assets/demo-current; không phục hồi phần bị che, không dùng AI xóa chữ/icon. Ba bản đồ gốc giữ nguyên tuyệt đối; map/diagram khác chưa rõ nguồn không tự được thay. IMAGE_REPLACEMENT_AUDIT giữ danh sách cho việc thay nguồn về sau. Chưa tìm/tải ảnh bên ngoài và chưa code website."
    for section in SECTIONS:
        section["approval_status"] = section_status
        section["image_policy_status"] = "see-image-replacement-audit" if approved else "pending"
        if approved:
            for cta in section["ctas"]:
                cta["state"] = "approved-route-or-preview-behavior"
        for a in section["asset_ids"]:
            assert (ROOT / asset_by_id[a]["path"]).exists()
        for block in section["copy_blocks"]:
            assert "((" not in block["text"]
        section["conflict_ids"] = [c["id"] for c in CONFLICTS if section["id"] in c["section_ids"]]

    counts = {"sections": len(SECTIONS), "unique_assets": len(used_assets), "url_variants": len(SOURCES),
              "hyperlink_occurrences": sum(len(s["occurrences"]) for s in SOURCES),
              "copy_statuses": dict(Counter(s["copy_status"] for s in SECTIONS)),
              "asset_states": dict(Counter(s["asset_state"] for s in SECTIONS))}
    anchors = {
        "/#map-comparison": "H-02",
        "/issues#outdated-community-plan": "I-05",
        "/issues/roads-safety#street-lighting": "R-02",
        "/issues/water-septic#septic-scale": "W-02",
        "/the-proposal#compare-the-two-plans": "C-01",
        "/the-proposal#roads-comparison": "C-01",
        "/the-proposal#water-comparison": "C-02",
        "/the-proposal#growth-housing-comparison": "C-03",
        "/the-facts#road-evidence": "F-02",
        "/the-facts#water-evidence": "F-02",
        "/the-facts#growth-evidence": "F-02",
        "/the-facts#planning-documents": "F-02",
        "/take-action#add-your-support": "A-02",
        "/take-action#supporter-application": "A-03",
        "/take-action#petition": "A-08",
    }
    ids = {s["id"] for s in SECTIONS}
    paths = {p for _, p, _ in ROUTES}
    assert len(ids) == len(SECTIONS)
    for path, section_id in anchors.items():
        assert path.split("#", 1)[0] in paths and section_id in ids
    for section in SECTIONS:
        for action in section["ctas"]:
            target = action["proposed_target"]
            if target.startswith("/") and " " not in target:
                assert target in anchors if "#" in target else target in paths, target
    packet = {"schema_version": 1, "status": scope_status, "review_date_local": "2026-10-20",
              "source_pdf": PDF.name, "source_pdf_sha256": PDF_HASH,
              "scope": "Section/source/asset decisions only. Not permission to code, publish or collect data.",
              "copy_warning": "Verbatim source excerpts preserve editorial labels; not ready-to-import UI props. Future ((...)) requirements excluded from demo excerpts, retained in full reference.",
              "approval_record": "docs/project-approvals.json" if approved else None,
              "image_audit": "docs/image-replacement-audit.json" if approved else None,
              "summary": counts, "proposed_routes": [{"label": x, "path": y, "content": z, "status": "approved" if approved else "pending"} for x, y, z in ROUTES],
              "proposed_anchors": anchors,
              "decisions": DECISIONS, "conflicts": CONFLICTS, "sections": SECTIONS}
    (DOCS / "section-review.json").write_text(json.dumps(packet, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (DOCS / "source-register.json").write_text(json.dumps({"source_pdf_sha256": PDF_HASH, "sources": SOURCES}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Preserve complete PDF text, including future requirements, as a separate audit appendix.
    book = ["# Blueprint text reference — không phải danh sách copy để xuất lên UI", "",
            "Trích text layer theo từng trang PDF. Giữ nguyên câu chữ; chỉ bỏ dòng footer nhận diện tài liệu và khoảng trắng trống. Screenshot-only text không tự có trong text layer. Nội dung ((...)) là future scope, không triển khai demo.", "",
            f"PDF SHA-256: `{PDF_HASH}`", ""]
    for p, text in PAGES.items():
        book.extend([f"## PDF {p:03d}", "", "```text", text, "```", ""])
    (DOCS / "BLUEPRINT_TEXT_REFERENCE.md").write_text("\n".join(book), encoding="utf-8")

    source_md = ["# Source register — trích từ liên kết thật trong blueprint", "",
                 ("Trạng thái: **đã duyệt cách dùng nguồn theo D-05; không phải xác minh tất cả nội dung**. " if approved else "Trạng thái: **chờ duyệt**. ") + "Có 33 hyperlink annotations và 21 URL khác nhau, tính fragment/query là URL riêng. Không phải 21 bằng chứng độc lập; một tài liệu có nhiều liên kết trang/query.", "",
                 "Kiểm tra online ngày 20/10/2026: mở được FHWA Lighting, FHWA Walkways và EPA; ba PDF Plan Hillsborough trả 403 với công cụ web. Các URL còn lại chưa mở kiểm chứng. Không dùng trạng thái này để kết luận link hỏng, ngày/phiên bản đúng, claim đúng hoặc snapshot được tái tạo.", "",
                 "Dùng đúng URL được nhúng; không tự thay link, thêm fragment hoặc tìm nguồn khác thay cho nguồn khách hàng đã chọn. Card-level sources thiếu vẫn là thiếu.", ""]
    for source in SOURCES:
        pages = sorted({o["pdf_page"] for o in source["occurrences"]})
        users = [s["id"] for s in SECTIONS if source["id"] in s["source_ids"]]
        source_md.extend([f"## {source['id']} — {source['first_label'] or 'Linked source'}", "",
                          f"- URL gốc: [Mở nguồn]({source['url']})",
                          f"- PDF: {', '.join(map(str, pages))}; annotations: {len(source['occurrences'])}.",
                          f"- Trạng thái: `{source['online_status']}` — {source['online_note']}",
                          f"- Dùng trong section: {', '.join(users) if users else 'Nguồn được giữ trong register; chưa gán public card riêng.'}", ""])
    source_md.extend(["## Nguồn chưa được cung cấp thành file/link trực tiếp", "",
                      "- FLWMI Odessa ZIP 33556 và EHDConst–Repair raw datasets/calculations.",
                      "- SCU GIS/parcel snapshot calculation files cho các con số October 2026.",
                      "- Verified local crash/response-time/population/housing/service/travel/infrastructure datasets.",
                      "- Master Assessment và full comparison documents được nhắc nhưng chưa có file/link rõ.",
                      "- Authenticated resident stories/publication permissions; screenshot quotes là sample.",
                      "- Petition_Larger_Text.pdf riêng; full approved wording đã có trong blueprint PDF 85.", ""])
    (DOCS / "SOURCE_REGISTER.md").write_text("\n".join(source_md), encoding="utf-8")

    lead = ["# Hồ sơ duyệt nguồn, nội dung và tài nguyên từng section", "",
            f"**{banner}**", "",
            "[Quyết định mới nhất](PROJECT_DECISIONS.md) · [Danh sách ảnh cần thay/giữ](IMAGE_REPLACEMENT_AUDIT.md)" if approved else "Hồ sơ hiện chưa được người dùng duyệt.", "",
            "57 hạng mục/section, 43 ảnh tham chiếu/asset khác nhau, 21 URL gốc tại 33 vị trí hyperlink. Ba maps là file độc lập; 3 multi-panel previews và 37 UI references không đồng nghĩa đủ ảnh nhỏ cho component.", "",
            "[Bản duyệt có ảnh và các khối mở rộng](SECTION_REVIEW.html) · [Source register](SOURCE_REGISTER.md) · [JSON từng section](section-review.json) · [Toàn văn text layer PDF](BLUEPRINT_TEXT_REFERENCE.md)", "",
            "## Cách đọc hồ sơ", "",
            "- Copy, layout, điều hướng và cách xử lý phần thiếu đã được duyệt theo phạm vi ngoài ảnh. Lựa chọn ảnh nhỏ chịu quy tắc mới và inventory riêng; không mặc định screenshot photos là ảnh AI hoặc ảnh cuối cùng." if approved else "- Duyệt chọn copy/selected image/source/CTA của từng ID; chưa cần duyệt code.",
            "- English blocks là trích nguyên văn từ đúng trang nguồn, giữ xuống dòng và nhãn biên tập như Heading/Visual/CTA để đối chiếu. Những nhãn/chỉ dẫn đó không tự xuất lên UI; JSON này không phải content props để import thẳng.",
            "- Current/Exact on-screen copy ưu tiên. Research/source notes dài ở appendix/detail; không nhồi vào viewport. Future ((...)) chỉ giữ trong appendix, đã loại khỏi demo excerpts.",
            "- Screenshot-only wording hoặc thiếu approved text được ghi rõ; không tự đoán chữ, chế quote/card finding hay thay nội dung.",
            "- `selected-from-blueprint` nghĩa đã chọn nguồn trong tài liệu, không phải mọi claim được xác minh hoặc ảnh component đã đủ.", "",
            "## Quyết định hiện hành" if approved else "## Các quyết định cần bạn duyệt", ""]
    for d in DECISIONS:
        lead.extend([f"### {d['id']} — {d['title']}", "", f"Trạng thái: `{d['status']}`.", "", d["proposal"], ""])
    lead.extend([f"## {route_caption}", "", "| Nhãn/nhóm | Route | Nội dung |", "|---|---|---|"])
    lead.extend(f"| {label} | `{path}` | {content} |" for label, path, content in ROUTES)
    lead.extend(["", "Các anchor/route là lựa chọn kỹ thuật cho demo, không phải URL nguồn được nhúng trong blueprint; trạng thái duyệt theo D-01. Get Involved không thêm route; supporter và petition dùng hai anchors/luồng riêng.", "",
                 "### Anchor → section đề xuất", "", "| Target | Section |", "|---|---|"])
    lead.extend(f"| `{path}` | {section_id} |" for path, section_id in anchors.items())
    lead.extend(["",
                 "## Nhãn preview", "",
                 "Các câu sau là nhãn hệ thống theo phương án D-02/D-04, không phải copy nguyên văn được tuyên bố có trong blueprint; trạng thái duyệt theo hồ sơ hiện hành:", "",
                 "- `Demo preview — approved content for this section has not been supplied.`", 
                 "- `Demo preview — the source document has not been supplied.`",
                 "- `Illustrative sample data — not verified local findings.`", "",
                 "Giữ nguyên hai notice blueprint quy định: `Demo only. Nothing is submitted or saved.` và `Demo only. No signature has been collected.`", "",
                 "## Mâu thuẫn và giới hạn", ""])
    for c in CONFLICTS:
        lead.extend([f"- **{c['id']}** ({', '.join(c['section_ids'])}): {c['issue']} → {c['decision']}."])
    lead.extend(["", "## Bảng tổng quan section", "", "| ID | Nhóm / section | PDF | Copy | Ảnh |", "|---|---|---|---|---|"])
    for s in SECTIONS:
        lead.append(f"| [{s['id']}](#{s['id'].lower()}) | {s['group']} / {s['title']} | {', '.join(map(str, s['pdf_pages']))} | {s['copy_status']} | {s['asset_state']} |")
    md = list(lead)

    for group, sections in by_group.items():
        md.extend(["", f"## {group}", ""])
        for s in sections:
            md.extend([f"<a id=\"{s['id'].lower()}\"></a>", "", f"### {s['id']} — {s['title']}", "",
                       f"- PDF nguồn: {', '.join(map(str, s['pdf_pages']))}.",
                       f"- Copy: `{s['copy_status']}`; duyệt: **{s['approval_status']}**; ảnh: **{s['image_policy_status']}**.",
                       f"- Tài nguyên: `{s['asset_state']}`. {s['asset_note']}"])
            for a_id in s["asset_ids"]:
                a = asset_by_id[a_id]
                md.append(f"- Ảnh: [{a['id']}]({local(a['path'])}), {a['width']} × {a['height']}, `{a['role']}`, PDF {', '.join(map(str, a['pdf_pages']))}.")
            for src_id in s["source_ids"]:
                src = source_by_id[src_id]
                md.append(f"- Nguồn: [{src_id} — {src['first_label'] or 'source'}]({src['url']}); `{src['online_status']}`.")
            if not s["source_ids"]:
                md.append("- Nguồn chính: blueprint; thiếu raw evidence nếu ghi ở mục Thiếu. Không tự thêm source URL.")
            for action in s["ctas"]:
                md.append(f"- CTA **{action['label']}** → {action['proposed_target']}.")
            for note in s["implementation_notes_vi"]:
                md.append(f"- Cách dùng: {note}")
            for missing in s["missing"]:
                md.append(f"- **Thiếu/cần duyệt:** {missing}")
            if s["conflict_ids"]:
                md.append(f"- Xung đột: {', '.join(s['conflict_ids'])}.")
            for block in s["copy_blocks"]:
                md.extend(["", f"**{block['label']} — PDF {', '.join(map(str, block['pdf_pages']))}:**", "", "```text", block["text"], "```", ""])
    md.extend(["## Phạm vi phê duyệt", "", "Hồ sơ này duyệt nguồn/copy/tài nguyên/điều hướng demo. Việc phê duyệt không tự mở thu thập dữ liệu, production, public launch, email hay County submission. Chưa code website. Các phần thiếu không bị đánh dấu hoàn thành.", ""])
    (DOCS / "SECTION_REVIEW.md").write_text("\n".join(md), encoding="utf-8")

    # Offline review document only: no JS, tracking, forms, backend or approval buttons.
    chunks = ["<!doctype html><html lang='vi'><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'>",
              "<title>SCU — Section review</title><style>body{margin:0;background:#f3f4f6;color:#182538;font:16px/1.6 system-ui,sans-serif}main{max-width:1140px;margin:auto;padding:28px 22px}h1{font-size:30px}h2{margin-top:42px}h3{margin:0 0 12px}a{color:#145c70}nav{display:flex;flex-wrap:wrap;gap:10px}nav a,.tag{padding:4px 10px;background:#e7eef3;border-radius:4px}.notice{background:#fff0cc;border-left:5px solid #bd7621;padding:18px;margin:20px 0}article{background:white;border:1px solid #d4dce3;padding:24px;margin:20px 0;scroll-margin-top:16px}.meta{font-size:14px;color:#4f5b68}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:18px 0}.grid img{width:100%;height:240px;object-fit:contain;background:#f3f4f6}.grid figure{margin:0}.grid figcaption{font-size:13px;overflow-wrap:anywhere}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f7f8fa;padding:18px;border:1px solid #dde3e7;font:14px/1.65 ui-monospace,Consolas,monospace}details{margin:16px 0}summary{cursor:pointer;color:#145c70;font-weight:600}.missing{color:#8b3c1b}table{width:100%;border-collapse:collapse}td,th{text-align:left;border:1px solid #d6dce2;padding:8px;vertical-align:top}code{overflow-wrap:anywhere}small{font-size:13px}</style><main>",
              "<h1>Safer Communities United — Hồ sơ duyệt từng section</h1><p>57 hạng mục · 43 ảnh khác nhau · 21 URL gốc / 33 hyperlink positions</p>",
              f"<div class='notice'><strong>{esc(banner)}</strong><br>Tài liệu đối chiếu offline. Không có nút phê duyệt/gửi dữ liệu. <a href='PROJECT_DECISIONS.md'>Quyết định mới nhất</a> · <a href='IMAGE_REPLACEMENT_AUDIT.html'>Inventory ảnh cần thay/giữ</a></div>",
              "<p><a href='SECTION_REVIEW.md'>Bản Markdown đầy đủ</a> · <a href='SOURCE_REGISTER.md'>Source register</a> · <a href='section-review.json'>JSON từng section</a> · <a href='BLUEPRINT_TEXT_REFERENCE.md'>Toàn văn text layer</a> · <a href='../assets/README.md'>Asset index</a></p>",
              "<p>Copy blocks giữ nguyên câu chữ từ PDF, có cả nhãn biên tập để đối chiếu; không import thẳng làm UI props. Chỉ dẫn Heading/Visual/CTA không tự xuất lên web. Future ((...)) chỉ giữ trong appendix. Screenshot-only text/ảnh nhỏ chưa độc lập được đánh dấu rõ.</p><nav>"]
    for i, group in enumerate(by_group):
        chunks.append(f"<a href='#group-{i}'>{esc(group)}</a>")
    chunks.append("<a href='#decisions'>Quyết định hiện hành</a></nav><h2 id='decisions'>D-01…D-06 — trạng thái hiện hành</h2>")
    for d in DECISIONS:
        chunks.append(f"<article id='{d['id']}'><h3>{esc(d['id'])} — {esc(d['title'])}</h3><p>{esc(d['proposal'])}</p><span class='tag'>{esc(d['status'])}</span></article>")
    chunks.append(f"<h2>{esc(route_caption)}</h2><table><tr><th>Menu/nhóm</th><th>Path</th><th>Nội dung</th></tr>")
    for label, path, content in ROUTES:
        chunks.append(f"<tr><td>{esc(label)}</td><td><code>{esc(path)}</code></td><td>{esc(content)}</td></tr>")
    chunks.append("</table><p>Preview labels theo D-02/D-04 và trạng thái duyệt hiện hành: <code>Demo preview — approved content for this section has not been supplied.</code> / <code>Demo preview — the source document has not been supplied.</code> / <code>Illustrative sample data — not verified local findings.</code></p>")
    chunks.append("<h2>Xung đột/giới hạn</h2><ul>")
    for c in CONFLICTS:
        chunks.append(f"<li><strong>{c['id']}</strong> ({esc(', '.join(c['section_ids']))}): {esc(c['issue'])}</li>")
    chunks.append("</ul>")
    for i, (group, sections) in enumerate(by_group.items()):
        chunks.append(f"<h2 id='group-{i}'>{esc(group)}</h2>")
        for s in sections:
            chunks.append(f"<article id='{s['id'].lower()}'><h3>{esc(s['id'])} — {esc(s['title'])}</h3><p class='meta'>PDF {esc(', '.join(map(str,s['pdf_pages'])))} · {esc(s['copy_status'])} · {esc(s['approval_status'])}</p><p><strong>Ảnh:</strong> {esc(s['asset_state'])}. {esc(s['asset_note'])} · {esc(s['image_policy_status'])}</p>")
            if s["asset_ids"]:
                chunks.append("<div class='grid'>")
                for a_id in s["asset_ids"]:
                    a = asset_by_id[a_id]
                    chunks.append(f"<figure><a href='{esc(local(a['path']))}'><img loading='lazy' src='{esc(local(a['path']))}' alt='{esc(a['title'])} — PDF reference'></a><figcaption>{esc(a['id'])}<br>{a['width']} × {a['height']} · {esc(a['role'])}<br>PDF {esc(', '.join(map(str,a['pdf_pages'])))}</figcaption></figure>")
                chunks.append("</div>")
            chunks.append("<ul>")
            for src_id in s["source_ids"]:
                src = source_by_id[src_id]
                chunks.append(f"<li><strong>Nguồn:</strong> <a href='{esc(src['url'])}'>{src_id} — {esc(src['first_label'] or 'source')}</a> · {esc(src['online_status'])}</li>")
            if not s["source_ids"]:
                chunks.append("<li>Nguồn copy: blueprint. Raw evidence thiếu được ghi riêng, không tự thêm URL.</li>")
            for action in s["ctas"]:
                chunks.append(f"<li><strong>CTA:</strong> {esc(action['label'])} → {esc(action['proposed_target'])}</li>")
            for note in s["implementation_notes_vi"]:
                chunks.append(f"<li>{esc(note)}</li>")
            for missing in s["missing"]:
                chunks.append(f"<li class='missing'><strong>Thiếu/cần duyệt:</strong> {esc(missing)}</li>")
            chunks.append("</ul>")
            for block in s["copy_blocks"]:
                chunks.append(f"<details><summary>English nguyên văn — PDF {esc(', '.join(map(str,block['pdf_pages'])))}</summary><pre>{esc(block['text'])}</pre></details>")
            chunks.append("</article>")
    chunks.append(f"<p class='notice'>Duyệt hồ sơ không tự cấp phép code, public launch, email, County submission hoặc thu thập dữ liệu. Trạng thái: {esc(scope_status)}; phần ảnh theo chỉ dẫn người dùng mới nhất.</p></main></html>")
    (DOCS / "SECTION_REVIEW.html").write_text("\n".join(chunks), encoding="utf-8")
    print(json.dumps(counts, ensure_ascii=False, indent=2))
    print("Approval packet created; no app initialized and no asset modified.")


if __name__ == "__main__":
    main()
