"""Extract exact visible screenshot pixels for the temporary demo photo set.

Run from any directory. No restoration, resizing, color conversion, inpainting,
or external image sourcing. Contact sheets alone are resized review derivatives.
"""
from collections import Counter
from hashlib import sha256
from html import escape
import json
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/demo-current"

# Manually refined against the source screenshots. Pillow boxes are integer
# [left, top, right, bottom), not the audit's approximate percentage locators.
# Flags describe existing source limitations, never a requested image edit.
PLAN = """
P017-01 650 71 1536 508 -
P017-02 45 609 398 754 embedded-icon
P017-03 415 609 763 754 embedded-icon
P017-04 780 609 1112 754 embedded-icon
P019-01 91 530 909 775 -
P021-02 885 592 1064 660 embedded-icon
P021-03 1079 592 1258 660 embedded-icon
P021-04 1274 592 1452 660 embedded-icon
P021-05 885 705 1064 773 embedded-icon
P021-06 1079 705 1258 773 embedded-icon
P021-07 1274 705 1452 773 embedded-icon
P025-02 803 459 1043 576 -
P025-03 1091 486 1345 576 -
P025-04 1388 513 1641 576 -
P025-05 801 747 998 820 -
P025-06 1016 747 1204 820 -
P025-07 1223 747 1425 820 -
P025-08 1442 747 1641 820 -
P027-02 66 431 469 488 partial-scene
P027-03 490 431 866 488 partial-scene
P027-04 889 431 1290 488 partial-scene
P030-01 635 87 1448 507 -
P031-01 32 363 830 643 -
P032-01 659 95 1445 484 illustration-label
P033-01 623 100 1447 477 -
P039-01 41 421 303 639 -
P039-02 340 421 610 639 -
P041-01 25 708 313 896 partial-scene
P041-02 1163 793 1451 896 partial-scene
P049-01 0 547 617 833 baked-gradient
P049-02 696 143 834 278 circular-mask
P049-03 944 143 1082 278 circular-mask
P049-04 1195 143 1333 278 circular-mask
P051-01 0 192 1536 295 baked-gradient
P052-01 500 338 730 441 partial-scene,baked-gradient,baked-tint
P052-02 1160 338 1430 441 partial-scene,baked-gradient
P053-01 41 267 304 368 -
P053-02 323 267 588 368 -
P053-06 810 718 1476 984 partial-scene
P058-02 1355 390 1452 440 -
P058-03 1355 445 1452 495 -
P058-04 1355 500 1452 549 -
P058-05 1355 555 1452 604 -
P058-06 1355 609 1452 658 -
P059-01 0 401 270 738 partial-scene
P059-02 1208 401 1476 738 partial-scene
P060-03 1239 271 1444 422 -
P060-05 789 447 958 599 partial-scene
P060-06 1255 447 1444 599 partial-scene
P060-07 835 623 1476 831 partial-scene,baked-gradient
P063-01 805 53 1070 264 partial-scene
P063-02 42 363 514 553 -
P063-03 559 363 1030 553 -
P065-01 800 70 1536 287 partial-scene,baked-gradient
P067-01 760 70 1536 297 partial-scene,baked-gradient
P067-02 80 369 255 452 -
P067-03 80 463 255 553 -
P067-04 80 564 255 653 -
P067-05 80 664 255 754 -
P067-06 803 464 992 554 -
P067-07 803 565 992 653 -
P067-08 803 665 992 754 -
P068-01 865 70 1536 326 partial-scene,baked-gradient
P070-01 1090 71 1536 308 partial-scene,baked-gradient
P070-02 41 317 395 488 -
P070-03 414 317 760 488 -
P070-04 778 317 1128 488 -
P072-01 1160 0 1536 160 partial-scene,baked-gradient
P072-04 61 520 258 604 -
P072-05 61 631 258 710 -
P072-07 1225 875 1511 912 partial-scene
P074-01 548 424 1672 825 partial-scene
P079-01 67 372 517 606 embedded-icon,embedded-number
P079-02 546 372 991 608 embedded-icon,embedded-number
P079-03 1020 372 1477 608 embedded-icon,embedded-number
P080-01 729 612 1007 901 partial-scene
P082-01 59 311 522 510 -
P082-02 545 311 991 510 -
P082-03 1014 311 1480 510 -
"""


def digest(path):
    return sha256(path.read_bytes()).hexdigest()


def main():
    archive = json.loads((ROOT / "assets/blueprint/manifest.json").read_text("utf-8"))
    audit = json.loads((ROOT / "docs/image-replacement-audit.json").read_text("utf-8"))
    regions = {r["id"]: r for r in audit["regions"] if r["action"] == "replace-photo"}
    plan = {}
    for line in PLAN.strip().splitlines():
        key, *values = line.split()
        assert key not in plan
        plan[key] = (list(map(int, values[:4])), [] if values[4] == "-" else values[4].split(","))
    assert set(plan) | {"P087-01"} == set(regions)

    def verify_originals():
        assert digest(ROOT / archive["source_pdf"]) == archive["source_pdf_sha256"]
        for a in archive["assets"]:
            assert digest(ROOT / a["path"]) == a["sha256"], a["path"]

    verify_originals()
    OUT.mkdir(parents=True, exist_ok=True)
    entries = []
    for key, r in regions.items():
        entry = {"slot_id": key, "label_vi": r["label_vi"], "section_ids": r["section_ids"],
                 "source_pdf_pages": r["all_parent_pdf_pages"],
                 "parent_path": r["parent_asset_path"], "parent_sha256": r["parent_sha256"],
                 "full_hidden_photo_recovered": False, "external_replacement_selected": False}
        assert "/maps/" not in entry["parent_path"]
        assert digest(ROOT / entry["parent_path"]) == entry["parent_sha256"]
        if key == "P087-01":
            entry.update({"path": None, "crop_box_xyxy": None, "flags": ["not-separable"],
                          "status": "reference-only-no-background-exported",
                          "note_vi": "Nền petition bị tiêu đề và form che gần hết. Không xuất cả UI làm ảnh nền, không vá/xóa chữ hoặc ghép các mép ảnh. Giữ screenshot nguồn làm tham chiếu; chưa có nền độc lập đầy đủ."})
        else:
            box, flags = plan[key]
            parent = Image.open(ROOT / entry["parent_path"])
            x0, y0, x1, y1 = box
            assert 0 <= x0 < x1 <= parent.width and 0 <= y0 < y1 <= parent.height, key
            crop = parent.crop(box)
            group = Path(entry["parent_path"]).parent.name
            dest = OUT / "photos" / group / (key.lower() + ".png")
            dest.parent.mkdir(parents=True, exist_ok=True)
            crop.save(dest, format="PNG")
            with Image.open(dest) as decoded:
                assert decoded.mode == crop.mode and decoded.size == crop.size
                assert decoded.tobytes() == crop.tobytes(), key
            entry.update({"path": dest.relative_to(ROOT).as_posix(), "crop_box_xyxy": box,
                          "width": crop.width, "height": crop.height, "mode": crop.mode,
                          "sha256": digest(dest), "flags": flags,
                          "status": "temporary-visible-pixel-crop",
                          "small_source": crop.width < 250 or crop.height < 100,
                          "note_vi": "Chỉ cắt phần pixel đang nhìn thấy trong screenshot; giữ hiệu ứng/icon/nhãn có sẵn nếu có. Không phục hồi phần bị che. Dùng ở kích thước phù hợp nguồn, chưa bảo đảm cho hero lớn."})
        entries.append(entry)

    previews = OUT / "contact-sheets"
    previews.mkdir(exist_ok=True)
    sheets = []
    for start in range(0, len(entries), 16):
        sheet = Image.new("RGB", (1440, 1120), "#efefef")
        draw = ImageDraw.Draw(sheet)
        for i, a in enumerate(entries[start:start + 16]):
            x, y = (i % 4) * 360, (i // 4) * 280
            draw.text((x + 7, y + 6), a["slot_id"], fill="black")
            if a["path"]:
                thumb = Image.open(ROOT / a["path"]).convert("RGB")
                thumb.thumbnail((345, 220))
                sheet.paste(thumb, (x + (360 - thumb.width) // 2, y + 30))
                draw.text((x + 7, y + 254), f'{a["width"]} x {a["height"]} | '+(", ".join(a["flags"]) or "visible crop"), fill="black")
            else:
                draw.text((x + 7, y + 60), "REFERENCE ONLY: no separate background", fill="#a00000")
        dest = previews / f"sheet-{start // 16 + 1:02}.jpg"
        sheet.save(dest, quality=92)
        sheets.append(dest.relative_to(ROOT).as_posix())

    manifest = {
        "schema_version": 1, "date_local": "2026-10-20",
        "purpose": "temporary-exact-visible-photos-for-demo-defer-external-replacement",
        "authority": "direct-user-message: oke, tôi sẽ thay sau nhưng hiện tại bạn lấy y chang ảnh đó thì có được không",
        "coordinate_convention": "Integer source pixels, left/top inclusive, right/bottom exclusive; manually refined from source screenshots, not approximate audit locators.",
        "operations": ["source crop", "lossless PNG encoding"],
        "photo_resizing": False, "retouching": False, "ai_generation": False,
        "provenance_of_photos": "unverified; do not present as verified local documentary photographs",
        "original_pdf_sha256": archive["source_pdf_sha256"],
        "locked_maps": audit["locked_original_maps"],
        "summary": {"photo_slots": len(entries), "exported_crops": len(plan), "reference_only": 1,
                    "all_43_archived_originals_and_pdf_hash_verified": True},
        "contact_sheets_review_only": sheets, "slots": entries,
    }
    (OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    html = ['<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ảnh tạm từ blueprint</title>',
            '<style>body{font:16px system-ui;background:#f7f4ee;color:#17324d;margin:24px}main{max-width:1300px;margin:auto}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px}article{background:white;padding:16px;border:1px solid #d8dee3;border-radius:8px}img{max-width:100%;height:180px;object-fit:contain}code{overflow-wrap:anywhere}p{line-height:1.5}a{color:#17324d}</style><main>',
            '<h1>Ảnh tạm từ blueprint</h1><p>79 vùng ảnh, 80 vị trí đã kiểm kê. Giữ nguyên pixel nhìn thấy, không tạo lại phần bị che. Ba bản đồ gốc dùng trực tiếp từ thư mục blueprint/maps. Ảnh mờ, icon, nhãn và khung tròn có sẵn vẫn giữ nguyên; các mảnh nhỏ chưa đủ làm nền toàn section. Petition chưa tách được nền đầy đủ.</p><p><a href="README.md">Hướng dẫn</a> · <a href="manifest.json">Manifest</a></p><div class="grid">']
    for a in entries:
        html.append('<article id="' + a["slot_id"] + '"><h2>' + a["slot_id"] + '</h2><p>' + escape(a["label_vi"]) + '</p>')
        if a["path"]:
            rel = Path(a["path"]).relative_to("assets/demo-current").as_posix()
            html.append(f'<a href="{rel}"><img src="{rel}" alt="{escape(a["label_vi"], quote=True)}"></a><p>{a["width"]} × {a["height"]} px · <code>{escape(", ".join(a["flags"]) or "visible crop")}</code></p>')
        html.append('<p>' + escape(a["note_vi"]) + '</p><a href="../../' + escape(a["parent_path"], quote=True) + '">Screenshot nguồn · PDF ' + escape(str(a["source_pdf_pages"])) + '</a></article>')
    html.append('</div></main></html>')
    (OUT / "gallery.html").write_text("\n".join(html), encoding="utf-8")
    verify_originals()
    print(json.dumps(manifest["summary"]))
    print("Verified each exported PNG equals its parent pixel crop; original PDF and 43 files unchanged.")
    print("Flags:", dict(Counter(flag for a in entries for flag in a["flags"])))


if __name__ == "__main__":
    main()
