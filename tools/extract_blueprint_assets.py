"""Extract embedded image pixels without resizing or recompressing JPEG images.

Run with the bundled Python runtime (pypdf + Pillow). Original PDF is read-only.
Thumbnails are separate inventory previews, never replacements for extracted files.
"""

from __future__ import annotations

import csv
import hashlib
import io
import json
from collections import Counter
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "Copy of blueprint SAFER COMMUNITIES UNITED.docx.pdf"
OUTPUT = ROOT / "assets" / "blueprint"

# Physical PDF pages, not website PAGE numbers. Repeated XObjects are deduplicated.
LABELS = {
    8: ("maps", "official-boundary-map", "Official Community Plan boundary map", "map"),
    9: ("maps", "land-parcels-conservation-map", "Land, parcels and conservation map", "map"),
    11: ("maps", "roads-traffic-map", "Road network and traffic map", "map"),
    13: ("layout-previews", "map-comparison-panel-1", "Map comparison - panel 1", "layout-preview"),
    14: ("layout-previews", "map-comparison-panel-2", "Map comparison - panel 2", "layout-preview"),
    15: ("layout-previews", "map-comparison-panel-3", "Map comparison - panel 3", "layout-preview"),
    17: ("ui-references/home", "home", "Home selected UI", "ui-reference"),
    19: ("ui-references/issues", "roads-overview", "Issues - Roads overview", "ui-reference"),
    21: ("ui-references/issues", "water-overview", "Issues - Water overview", "ui-reference"),
    23: ("ui-references/issues", "everyday-needs", "Issues - Everyday Needs", "ui-reference"),
    25: ("ui-references/issues", "outdated-community-plan", "Issues - Outdated Community Plan", "ui-reference"),
    27: ("ui-references/issues", "issues-connected", "Issues - Connections diagram", "ui-reference"),
    30: ("ui-references/roads", "street-lighting", "Roads - Street Lighting", "ui-reference"),
    31: ("ui-references/roads", "gunn-highway", "Roads - Gunn Highway", "ui-reference"),
    32: ("ui-references/roads", "walking-biking-crossings", "Roads - Walking, Biking and Crossings", "ui-reference"),
    33: ("ui-references/roads", "emergency-access", "Roads - Emergency Access", "ui-reference"),
    35: ("layout-previews", "map-comparison-panel-1", "Map comparison - panel 1", "layout-preview"),
    36: ("layout-previews", "map-comparison-panel-2", "Map comparison - panel 2", "layout-preview"),
    37: ("layout-previews", "map-comparison-panel-3", "Map comparison - panel 3", "layout-preview"),
    39: ("ui-references/roads", "records-evidence", "Roads - Records and Evidence", "ui-reference"),
    41: ("ui-references/roads", "planning-comparison", "Roads - Planning comparison summary", "ui-reference"),
    43: ("ui-references/water", "hero", "Water - Hero", "ui-reference"),
    44: ("ui-references/water", "septic-scale", "Water - Septic scale", "ui-reference"),
    45: ("ui-references/water", "repair-records", "Water - Repair records", "ui-reference"),
    47: ("ui-references/water", "connected-water", "Water - Connected-water conceptual cutaway", "ui-reference"),
    49: ("ui-references/water", "wastewater-options", "Water - Water and Wastewater Options", "ui-reference"),
    51: ("ui-references/water", "core-conflict", "Water - Core Conflict concise panel", "ui-reference"),
    52: ("ui-references/water", "comparison-summary", "Water - Comparison summary", "ui-reference"),
    53: ("ui-references/water", "evidence-next", "Water - Evidence and Next Issue", "ui-reference"),
    55: ("ui-references/growth", "then-today", "Growth - Then and Today", "ui-reference"),
    57: ("ui-references/growth", "natural-rural-density", "Growth - Natural Rural Density Comparison", "ui-reference"),
    58: ("ui-references/growth", "services-map", "Growth - Service map illustration", "ui-reference"),
    59: ("ui-references/growth", "comparison-summary", "Growth - Comparison summary", "ui-reference"),
    60: ("ui-references/growth", "evidence-next", "Growth - Evidence and Outdated Plan continuation", "ui-reference"),
    63: ("ui-references/comparison", "roads", "Comparison - Roads and Safety", "ui-reference"),
    65: ("ui-references/comparison", "water", "Comparison - Water and Wastewater", "ui-reference"),
    67: ("ui-references/comparison", "growth-housing-screenshot-110", "Comparison - Growth and Housing - Screenshot 110", "ui-reference"),
    68: ("ui-references/comparison", "what-remains", "Comparison - What Remains", "ui-reference"),
    70: ("ui-references/evidence", "issue-groups", "Evidence - Four issue groups", "ui-reference"),
    72: ("ui-references/evidence", "library", "Evidence - Library static reference", "ui-reference"),
    74: ("ui-references/action", "hero", "Action - Hero", "ui-reference"),
    79: ("ui-references/action", "three-actions", "Action - Three action cards", "ui-reference"),
    80: ("ui-references/action", "story-preview", "Action - Story form preview", "ui-reference"),
    81: ("ui-references/action", "sharing-preview", "Action - Sharing preview", "ui-reference"),
    82: ("ui-references/action", "sample-stories", "Action - Illustrative community stories", "ui-reference"),
    87: ("ui-references/action", "approved-petition", "Action - Approved Petition UI preview", "ui-reference"),
    88: ("ui-references/action", "approved-petition", "Action - Approved Petition UI preview", "ui-reference"),
}


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def write_preserving_existing(path: Path, data: bytes) -> None:
    """Idempotent; never silently replace an asset whose contents have changed."""
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists():
        if path.read_bytes() != data:
            raise RuntimeError(f"Existing file differs; review before replacing: {path}")
        return
    path.write_bytes(data)


def font(size: int):
    path = Path("C:/Windows/Fonts/arial.ttf")
    return ImageFont.truetype(str(path), size) if path.exists() else ImageFont.load_default()


def main() -> None:
    source_hash = digest(SOURCE.read_bytes())
    reader = PdfReader(SOURCE)
    assets, occurrences, seen, profiles = [], [], {}, {}
    verified_images = 0
    dct_preserved = 0

    for page_number, page in enumerate(reader.pages, 1):
        for index, embedded in enumerate(page.images, 1):
            if page_number not in LABELS:
                raise RuntimeError(f"Unclassified image on PDF page {page_number}")
            group, slug, title, role = LABELS[page_number]
            ref = embedded.indirect_reference
            if ref is None:
                raise RuntimeError("Review inline-image extraction before proceeding")
            obj = ref.get_object()
            filters = str(obj.get("/Filter", ""))
            color_space = obj.get("/ColorSpace")
            assert str(color_space[0]) == "/ICCBased"
            profile_obj = color_space[1].get_object()
            assert int(profile_obj["/N"]) == 3
            profile = profile_obj.get_data()
            profile_hash = digest(profile)
            profile_path = OUTPUT / "profiles" / f"pdf-color-profile-{profile_hash[:12]}.icc"
            write_preserving_existing(profile_path, profile)
            profiles[profile_hash] = {"path": profile_path.relative_to(ROOT).as_posix(), "sha256": profile_hash, "bytes": len(profile)}
            assert obj.get("/Decode") is None and obj.get("/SMask") is None
            if filters == "/DCTDecode":
                # Use the PDF JPEG bitstream itself. ImageFile.data may re-encode it.
                raw = obj.get_data()
                original = Image.open(io.BytesIO(raw))
                original.load()
                suffix = ".jpg"
                dct_preserved += 1
            elif filters == "/FlateDecode":
                assert int(obj["/BitsPerComponent"]) == 8
                original = Image.frombytes("RGB", (int(obj["/Width"]), int(obj["/Height"])), obj.get_data())
                raw = embedded.data
                suffix = ".png"
            else:
                raise RuntimeError(f"Unsupported source filter: {filters}")
            image_hash = digest(raw)
            # Verify the extracted file keeps dimensions, mode and every pixel.
            with Image.open(io.BytesIO(raw)) as decoded:
                decoded.load()
                assert decoded.size == original.size
                assert decoded.mode == original.mode
                assert decoded.tobytes() == original.tobytes()
            verified_images += 1
            if image_hash not in seen:
                asset_id = f"bp-p{page_number:03d}-{index:02d}-{slug}"
                relative = Path(group) / f"{asset_id}{suffix}"
                target = OUTPUT / relative
                write_preserving_existing(target, raw)
                with Image.open(target) as saved:
                    saved.verify()
                asset = {
                    "id": asset_id,
                    "title": title,
                    "path": target.relative_to(ROOT).as_posix(),
                    "group": group,
                    "role": role,
                    "width": original.width,
                    "height": original.height,
                    "mode": original.mode,
                    "format": suffix.lstrip("."),
                    "bytes": len(raw),
                    "sha256": image_hash,
                    "pdf_pages": [],
                    "direct_standalone_asset": role == "map",
                    "source_color_profile": profile_path.relative_to(ROOT).as_posix(),
                    "extraction": "PDF JPEG bitstream or lossless PNG from raw RGB samples; ICC profile archived separately; no resizing or editing",
                }
                assets.append(asset)
                seen[image_hash] = asset
            asset = seen[image_hash]
            if page_number not in asset["pdf_pages"]:
                asset["pdf_pages"].append(page_number)
            occurrences.append({
                "pdf_page": page_number,
                "page_image_index": index,
                "pdf_image_name": embedded.name,
                "pdf_object_id": ref.idnum if ref else None,
                "pdf_filter": filters,
                "asset_id": asset["id"],
                "asset_path": asset["path"],
            })

    # Preview sheets are explicitly separate, downscaled inventory derivatives.
    preview_dir = OUTPUT / "previews"
    preview_dir.mkdir(parents=True, exist_ok=True)
    preview_files = []
    for start in range(0, len(assets), 8):
        batch = assets[start:start + 8]
        sheet = Image.new("RGB", (1800, 2600), "#eeeeee")
        draw = ImageDraw.Draw(sheet)
        for position, asset in enumerate(batch):
            x, y = (position % 2) * 900, (position // 2) * 650
            pages = ", ".join(map(str, asset["pdf_pages"]))
            draw.text((x + 12, y + 8), f"PDF {pages} | {asset['width']} x {asset['height']}", font=font(18), fill="black")
            draw.text((x + 12, y + 32), asset["title"], font=font(16), fill="black")
            with Image.open(ROOT / asset["path"]) as im:
                thumb = ImageOps.contain(im.convert("RGB"), (876, 578))
                sheet.paste(thumb, (x + (900 - thumb.width) // 2, y + 65))
        target = preview_dir / f"contact-sheet-{start // 8 + 1:02d}.jpg"
        buffer = io.BytesIO()
        sheet.save(buffer, format="JPEG", quality=90)
        write_preserving_existing(target, buffer.getvalue())
        preview_files.append(target.relative_to(ROOT).as_posix())

    roles = dict(Counter(a["role"] for a in assets))
    summary = {
        "pdf_pages": len(reader.pages),
        "image_occurrences": len(occurrences),
        "unique_images": len(assets),
        "reused_occurrences": len(occurrences) - len(assets),
        "unique_formats": dict(Counter(a["format"] for a in assets)),
        "unique_roles": roles,
        "total_unique_image_bytes": sum(a["bytes"] for a in assets),
        "pixel_verified_occurrences": verified_images,
        "jpeg_bitstreams_preserved": dct_preserved,
    }
    manifest = {
        "schema_version": 1,
        "source_pdf": SOURCE.name,
        "source_pdf_sha256": source_hash,
        "page_numbering": "Physical one-based PDF pages, not website PAGE labels",
        "notes": [
            "Embedded images only; no raster screenshots of entire PDF pages.",
            "Deduplication uses exact exported-file SHA-256, with all page occurrences retained.",
            "PDF pages 87 and 88 embed the same image object; their distinct notes remain in the PDF.",
            "UI references are flattened composites, not independent hero photos or HTML page replacements.",
            "Preview contact sheets are resized derivatives for inventory only.",
            "Paths are workspace files, not approved website or source URLs.",
        ],
        "summary": summary,
        "assets": assets,
        "occurrences": occurrences,
        "previews": preview_files,
        "color_profiles": list(profiles.values()),
    }
    write_preserving_existing(OUTPUT / "manifest.json", (json.dumps(manifest, ensure_ascii=False, indent=2) + "\n").encode("utf-8"))

    csv_buffer = io.StringIO(newline="")
    fields = ["pdf_page", "page_image_index", "asset_id", "asset_path", "role", "width", "height", "sha256", "pdf_object_id"]
    writer = csv.DictWriter(csv_buffer, fieldnames=fields)
    writer.writeheader()
    by_id = {a["id"]: a for a in assets}
    for occurrence in occurrences:
        asset = by_id[occurrence["asset_id"]]
        row = {**asset, **occurrence}
        writer.writerow({key: row[key] for key in fields})
    write_preserving_existing(OUTPUT / "manifest.csv", csv_buffer.getvalue().encode("utf-8-sig"))

    rows = []
    for asset in assets:
        path = Path(asset["path"]).relative_to("assets").as_posix()
        pages = ", ".join(map(str, asset["pdf_pages"]))
        rows.append(f"| {pages} | [{asset['title']}]({path}) | {asset['role']} | {asset['width']} × {asset['height']} |")
    preview_links = "\n".join(f"- [Contact sheet {i}]({Path(p).relative_to('assets').as_posix()})" for i, p in enumerate(preview_files, 1))
    readme = f"""# Tài nguyên trích từ blueprint

## Kết quả

- Nguồn: [blueprint khách hàng](<../{SOURCE.name}>), {len(reader.pages)} trang PDF, được giữ nguyên.
- **{len(assets)} ảnh nhúng khác nhau**, tương ứng **{len(occurrences)} lần xuất hiện**; {summary['reused_occurrences']} lần tái sử dụng được trỏ về cùng file, không tạo bản sao thừa.
- Vai trò: **{roles.get('map', 0)} bản đồ độc lập**, **{roles.get('layout-preview', 0)} layout previews nhiều panel**, **{roles.get('ui-reference', 0)} ảnh tham chiếu UI/panel**.
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
- Các local photo, logo và illustration nằm bên trong screenshot chưa phải các file độc lập. Bước trích xuất này không tự crop chúng, không cải thiện độ phân giải nguồn và không khẳng định toàn bộ bộ ảnh đã sẵn sàng cho mọi kích thước màn hình.
- Đường dẫn manifest là đường dẫn file trong workspace; chưa tạo Next.js app/public URLs. Chưa triển khai website.

## Xem nhanh

Contact sheets là ảnh thu nhỏ phục vụ kiểm kê, không dùng làm asset website. Mở file gốc ở bảng dưới để kiểm tra chi tiết.

{preview_links}

## Danh mục ảnh

| Trang PDF | File gốc trích xuất | Vai trò | Kích thước pixel |
|---|---|---|---|
{chr(10).join(rows)}

## Kiểm tra và tái tạo

- Đã kiểm tra mở lại mọi ảnh, dimensions/mode/pixels so với nguồn và SHA-256 các file trích.
- Đã kiểm tra {verified_images}/{len(occurrences)} lần xuất hiện; {dct_preserved} JPEG giữ nguyên bitstream.
- Script: [tools/extract_blueprint_assets.py](../tools/extract_blueprint_assets.py), cần Python có pypdf và Pillow.
- Script không ghi đè file khác nội dung khi chạy lại; báo lỗi để kiểm tra trước. PDF nguồn luôn chỉ đọc.
"""
    write_preserving_existing(ROOT / "assets" / "README.md", readme.encode("utf-8"))
    assert digest(SOURCE.read_bytes()) == source_hash, "Source PDF changed"
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    print("Asset directory:", OUTPUT)
    print("Source PDF unchanged; every occurrence pixel-verified.")


if __name__ == "__main__":
    main()
