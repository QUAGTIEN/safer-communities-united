# Coding lượt 8 — The Proposal & Comparison

Người dùng yêu cầu “hãy bắt đầu lượt code thứ 8 nhé.” sau phần xác nhận phạm vi. `/the-proposal` có P-01 và C-01…C-04 theo PDF 61–68. Home, Issues, Roads, Water, Growth, The Facts và shared Foundation giữ nội dung. Take Action/About còn labelled previews. Tiếp theo lượt 9 — Take Action, chưa tự bắt đầu.

## Nội dung và điều hướng

- **P-01:** intro có nhãn demo vì chưa có approved public copy/selected layout riêng. Không biến mô tả chức năng hoặc petition thành campaign intro. Giữ Compare the Two Plans tới anchor nội trang và Read the petition tới signing preview của lượt 9.
- **C-01:** hai cột Community Plan/County Framework, hai ảnh đường, bốn hàng Road Design/Gunn Highway/Lighting/Walking and Crossings, result banner và toàn bộ caveat: County policies already apply; thay restrictions không tự approve/fund road projects.
- **C-02:** current text thay bullet draft cũ; bốn paired policy rows, hai intro, KEYSTONE–ODESSA LIMIT / One Water 4.3.7 exclusion, result banner và CTA. Giữ điều kiện documented environmental problem và when conditions are met.
- **C-03:** đúng Screenshot 110, rural heading landscape portion, hai cột/bốn illustrated rows mỗi cột, map thumbnail, result banner và CTA. Giữ rural density limits, general one dwelling per five gross acres với specified exceptions và adequate infrastructure. Giữ selected emphasis bằng HTML strong, không sửa câu.
- **C-04:** REMOVE → REMAINS diagram bằng HTML/icons, selected crossed cover nguyên pixel, sáu nhóm bảo vệ dưới County Comprehensive Plan, message và County framework source CTA. Campaign passage “RETIRE THE EXTRA PLAN. KEEP THE PROTECTIONS.” đặt sau diagram/message composition, dưới phần viewport trong selected mockup. Source note/dates/page references giữ nguyên nhưng chưa independently verified.
- Comparison nằm trong The Proposal: `compare-the-two-plans`, `roads-comparison`, `water-comparison`, `growth-housing-comparison`, `what-remains`. Không thêm route/menu cấp cao. Các entry links có sẵn từ Issues/Roads/Water/Growth tới đúng anchor.
- Ba Full Comparison buttons mở labelled dialogs vì chưa có full policy-by-policy documents. Không quay lại cùng panel rồi giả là bản chi tiết. 12 supplied-source links khớp source register; policy summaries/dates chưa được coi là independently verified.

## Ảnh và giới hạn

19 ảnh: 13 photo crops cũ và sáu exact-pixel fragments mới. Fragments gồm bốn selected banner illustrations, map thumbnail của Screenshot 110 và illustrative crossed cover What Remains. Crop boxes, parent hash/source pages/own hash trong visual/document manifests; pixel equality được kiểm tra lại. Không dùng screenshot nguyên trang thay React; UI text/cards/buttons/diagram labels là HTML, cover artwork có accessible transcription.

Original PDF, 43 archive assets và ba original maps bất biến. Không ảnh ngoài/AI/upscale/sharpen/filter, không vẽ lại map/illustrations hoặc phục hồi cảnh bị che. Heading landscapes chỉ giữ visible portions; map thumbnail/cover/photo provenance chưa xác minh được gắn nhãn, không giả làm GIS/official records/local project designs.

Không phóng vượt native pixels ở DPR 1. Tại 1440 px, 19/19 hình thiếu ngân sách DPR 2; tại 390 px, 17/19 hình thiếu. Đây không phải chứng nhận optical sharpness; nguồn ảnh lớn hơn vẫn cần về sau. Intro copy/layout, full-detail documents và independent policy/source verification còn thiếu.

## Kiểm tra

- TypeScript, root build và Pages-base-path build qua; chín route static export, Windows RSC finalizer giữ nguyên.
- 73 copy leaves: 72 khớp selectable PDF, một label khớp selected artwork transcript. Editorial demo/provenance notices được phân biệt với approved campaign copy.
- Dev root và Pages static export đều kiểm tra 320/390/560/768/1000/1152/1440 px × DPR 1/2: một h1, P-01 rồi C-01…C-04, sáu comparison columns với bốn rows mỗi cột, sáu protections, đủ copy và không overflow.
- Năm nội trang anchors, bốn entry links từ Issues/Roads/Water/Growth, petition preview destination, ba dialog focus traps/Escape/exact trigger focus return, skip link/mobile menu và reduced-motion scroll qua.
- Take Action/About giữ previews; Home/Issues/Roads/Water/Growth/Facts giữ 6/6/8/9/8/2 sections.
- 22 served image hashes khớp manifest: 19 Proposal assets và ba original maps. Direct source bytes/native ratio giữ nguyên, không cover/filter/optimizer.
- Không form/input/select/textarea, cookies/web storage, external/write requests; không runtime/console errors, HTTP 4xx/5xx hoặc failed connections. Navigation ERR_ABORTED cancellations ghi riêng.
- Đã kiểm tra screenshots desktop/mobile, paired rows, What Remains diagram và các phần cuối/campaign. Scripts/screenshots ở `tmp/round-08-qa/`; [kết quả/số đo](coding-round-08-checks.json).

Dev: `http://127.0.0.1:3000/the-proposal/`. Static demo được cập nhật qua workflow Pages hiện có; chỉ xác nhận công khai sau khi workflow/live checks qua. Không chỉnh Vercel, mở backend/data collection hoặc tự bắt đầu lượt 9.
