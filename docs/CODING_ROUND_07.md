# Coding lượt 7 — The Facts / Evidence & Records

Người dùng yêu cầu “oke, hãy bắt đầu code nhé” sau phần xác nhận phạm vi lượt 7. Đã thay `/the-facts` preview bằng F-01/F-02 theo PDF 69–72. Home, Issues, Roads, Water, Growth và shared Foundation giữ nội dung; The Proposal, Take Action, About vẫn labelled previews. Lượt tiếp theo 8 — The Proposal & Comparison, chưa tự bắt đầu.

## Nội dung

- **F-01:** selected hero heading/intro, bốn cards Roads & Safety / Water & Septic / Growth, Housing & Services / Community Plan & County Framework. Giữ nguyên toàn bộ category copy và bốn CTA tới grouped-source anchors trong F-02. Dùng đúng ba photos và illustrative planning-cover composition; không dùng screenshot nguyên trang thay HTML.
- **F-02:** approved title và current demo instruction; giữ thứ tự năm selected library rows, thumbnails, titles, document types, agency labels, date labels, purpose text và related tags. Mỗi row có nhãn rõ metadata/purpose là minh họa/chưa xác minh. Date vắng trong artwork giữ nhãn not supplied, không tự điền ngày theo URL hoặc suy từ artwork.
- Hai original-document links dùng đúng SRC-10/SRC-21; thumbnail/purpose/metadata chưa được authenticated against linked originals được ghi rõ. Ba water datasets/original records còn thiếu dùng demo dialogs.
- Fixed source catalog ở trong F-02 có bốn anchors tương ứng F-01, gồm đúng 21 supplied URLs; không bịa thêm record descriptions, dates hoặc findings. Các URL khác trang/query có thể cùng một tài liệu, không phải 21 independent records. Các source categories vẫn có thể chưa đủ evidence thật.
- Search/filter/sort/pagination thuộc future scope; demo chỉ có labelled tools preview, không input/select, không actual search/filter, không fake pagination hoặc “124 verified results”. Không hiển thị `[short description]` placeholder như approved copy.
- Giữ Water record-scope caveat: ZIP 33556 administrative records, không phải systems trong Community Plan boundary; 806 records không phải failure counts; phương pháp 3,087 chưa xác minh.
- Selected From Evidence to Action copy và CTA tới `/take-action`; route này hiện vẫn preview của lượt 9.

## Ảnh và các phần còn thiếu

12 hình: tám photo crops hiện có và bốn screenshot fragments mới (ba illustrative document/cover regions, một map thumbnail). Mỗi fragment có crop box/parent SHA/source pages/own SHA và kiểm tra equality với source pixels. Source PDF, 43 archive images và ba original maps bất biến; không ảnh thay mới, AI, upscale, sharpen, filter hoặc phục hồi vùng bị che.

P070-01/P072-01 chỉ là visible faded landscape portions, không phải full heading backgrounds được phục hồi. P072-07 chỉ 286 × 37 px; giữ dạng visible strip nhỏ, không kéo thành toàn bộ banner. Map/document thumbnails chỉ là illustrations, không GIS hoặc authenticated official-record previews. [Artwork transcript](FACTS_ARTWORK_TRANSCRIPT.md) phục vụ copy QA, không fact-check.

Không phóng vượt native pixels ở DPR 1. Tại 1440 và 390 px, cả 12/12 hình thiếu ngân sách pixel DPR 2. Yêu cầu ảnh rõ nét vẫn mở; đủ pixel cũng chưa chứng nhận optical sharpness. Thiếu verified full inventory, card-level source validation/metadata/purposes, original water records/datasets, full unoccluded background assets và higher-resolution sources.

## Kiểm tra

- TypeScript, root build và Pages-base-path build qua; chín route được static export, giữ Windows RSC finalizer.
- 81 copy leaves: 58 khớp selectable PDF 69–71, 23 khớp visually transcribed selected artwork PDF 70/72. Water scope giữ nguyên từ nội dung lượt 5.
- Dev root và static Pages subpath đều qua 14 tổ hợp: 320/390/560/768/1000/1152/1440 px × DPR 1/2; một h1, F-01 rồi F-02, bốn groups, năm records, bốn source groups; đủ copy, không overflow.
- 23 source links = 21 unique supplied URLs, khớp register; không thay URL hoặc coi access status là verified claim. Bốn group anchors không bị header che.
- Bốn dialogs (tools + ba missing originals) có focus trap/Escape/exact trigger focus return. Take Action CTA và hai entry links từ Home đúng; mobile menu/skip link qua.
- Ba route còn lại giữ previews; Home/Issues/Roads/Water/Growth giữ đủ 6/6/8/9/8 sections. Shared footer và transition không đổi.
- 15 served image hashes khớp: 12 hình trên Facts và ba original maps. Direct source URLs giữ native ratio, không cover/filter/re-encoding.
- Không form/input/select/textarea, cookie/web storage, write hoặc external requests; không console/runtime errors, HTTP 4xx/5xx hoặc failed connections trong lượt QA cuối. Navigation `ERR_ABORTED` cancellations được ghi riêng.
- Đã xem screenshots desktop/mobile của overview, library rows, source groups và action banner. QA files nằm trong `tmp/round-07-qa/`, không thuộc application assets.

[Kết quả và số đo](coding-round-07-checks.json). Dev: `http://127.0.0.1:3000/the-facts/`. Public demo được cập nhật qua workflow hiện có tại `https://quagtien.github.io/safer-communities-united/the-facts/`; chỉ xác nhận hoạt động sau khi workflow/live checks qua. Không backend/data collection hoặc tự bắt đầu lượt 8.
