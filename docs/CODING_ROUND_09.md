# Coding lượt 9 — Take Action

Người dùng yêu cầu “oke, hãy bắt đầu code” sau xác nhận phạm vi lượt 9. `/take-action` đã có đủ A-01…A-08 trong phạm vi demo. Main journey là A-01 → A-02 → A-06 → A-07 → A-08; A-03/A-04/A-05 mở thành ba preview riêng từ action cards, giữ stories ngay sau three actions. Home/Issues/Roads/Water/Growth/Facts/Proposal và shared Foundation giữ nội dung. About còn preview; lượt 10 chưa tự bắt đầu.

## Nội dung và luồng

- **A-01:** current hero heading/intro và selected family/landscape visible portion; không phục hồi đoạn “After learning…” hoặc dùng problem visuals.
- **A-02:** đúng ba selected cards và current text PDF 77–78. Supporter CTA là primary nổi bật, petition là luồng riêng. Hai supplied links SRC-19/SRC-21 giữ nguyên URL; Board minutes và September 23 response là dated records, không tuyên bố trạng thái hiện tại/County chấp thuận.
- **A-03:** một continuous Supporter Application preview từ PDF 76–77, đủ ba audience choices chưa chọn, mission, bốn participation choices, sáu information fields, Email/Text/Call, Consent, SIGNATURE/DATE, original Privacy và return instructions. Không thêm Other/donation/public supporter list; không thay signature bằng checkbox.
- **A-04:** separate non-editable story preview, đầy đủ bảy topics, fields/labels, upload/publication/submit examples theo selected layout. Pictured Yes là disabled illustrative choice, có nhãn không thu thập publication permission; future actual form/consent chưa bật. Upload/Submit mở demo notice, không file input/drop receiver.
- **A-05:** static sharing preview với Facebook/Email/Copy Link và Share This Page composition. Các controls chỉ mở demo notices; không clipboard API/social/email integration. Laptop/popup là native HTML; thiếu independent laptop/screen assets được gắn nhãn, không dùng screenshot nguyên trang thay UI.
- **A-06:** đúng ba illustrative sample stories, nguyên quotes/names/dates và selected photos. Nhãn sample rõ; Read the Story chỉ mở excerpt được cung cấp, không bịa full story. View All Stories là demo preview, không route mới.
- **A-07:** current headline, campaign passage và independent signing explanation; CTA tới toàn văn petition.
- **A-08:** toàn văn September 24 version 3 từ PDF 85 dưới dạng selectable HTML, đúng title/recipient/opening/Why/four requested actions/declaration/independent notice. Giữ associated policies và LDC Part 3.08.00. Toàn văn nằm trước bốn paper detail fields; public-records warning lặp sát signing controls. Optional email area chỉ là disabled artwork example, không required email hoặc subscription. Không phục hồi future required support checkbox, eligibility rules, saved-success screens hoặc real signatures.

`#supporter-application`, `#share-your-story`, `#share-information` mở đúng preview và hỗ trợ deep links; đóng trả focus và xóa preview hash, không lưu dữ liệu. `#petition` là phần đọc đầy đủ trên trang. Supporter consent và petition declaration không gộp; signing không enroll supporter network hoặc tạo statutory voting membership.

## Giới hạn demo và hình ảnh

30 native controls đều disabled: supporter 18, story 6, petition/optional-email illustration 6. Không có form nhận dữ liệu, editable controls, API/Server Action, file acceptance, signature/storage/subscription/share services. Demo notices xuất hiện cạnh các previews và petition fields. Signing button mở đúng “Demo only. No signature has been collected.” Không có success/count giả hoặc County delivery claim.

Chín image assets: tám photo crops cũ và một selected landscape strip mới `[0,948,1536,1024)` từ PDF 82. Crop pixel equality/parent/source/own hashes được kiểm tra; không AI/upscale/sharpen/filter/retouch hoặc phục hồi phần bị che. Original PDF, 43 archive assets và ba original maps bất biến. Các UI/icon/form được dựng bằng React/HTML.

Hero/story chỉ dùng phần ảnh nhìn thấy; full petition background và independent laptop/screen imagery chưa có. Sample photos không phải verified local records hoặc authenticated submissions. Không phóng vượt native dimensions ở DPR 1. Tại 1440 px có 9/9 hình thiếu ngân sách DPR 2; tại 390 px có 7/9 hình thiếu. Không coi đủ pixel là chứng nhận optical sharpness; nguồn lớn hơn vẫn cần về sau.

## Kiểm tra

- TypeScript, root build và Pages-base-path build qua; chín route static export, giữ Windows RSC finalizer.
- 137 copy leaves: 114 khớp selectable PDF, 23 khớp selected artwork transcript. Full ordered petition text khớp approved block PDF 85; không OCR/paraphrase/summary thay toàn văn.
- Dev root và Pages static export: mỗi môi trường 14 tổ hợp 320/390/560/768/1000/1152/1440 px × DPR 1/2. Main page một h1, đúng five-section journey/three cards/three sample stories; ba workflow previews giữ đầy đủ nội dung, không page/modal overflow.
- Mỗi môi trường có 42 preview cases, disabled checks cho toàn bộ controls, thử click audience/fill text không nhận dữ liệu, source links khớp register, ba anchor actions, bốn direct/Home/Proposal/return entry paths. Dialog focus trap/Escape/exact trigger return qua; năm nested upload/submit/share notices và ba sample excerpt dialogs qua; signing notice đúng.
- About preview và 6/6/8/9/8/2/5 sections của Home/Issues/Roads/Water/Growth/Facts/Proposal giữ nguyên. Skip link/mobile menu/reduced-motion scroll qua.
- 12 served hashes khớp: chín Action assets và ba original maps. Native ratio/direct bytes, không cover/filter/re-encoding.
- Không write/external requests, cookies/web storage, popup/file chooser hoặc failed connections; không application runtime/console errors. Navigation cancellations ghi riêng nếu có. Một browser fallback `/favicon.ico` 404 được ghi riêng: Foundation vẫn dùng blank data-URL icon và không có favicon file; không tự tạo logo mới trong lượt 9.
- Đã xem screenshots desktop/mobile của hero/cards/stories/petition và ba previews, gồm phần cuối consent/publication/signing. Scripts/screenshots ở `tmp/round-09-qa/`. [Kết quả/số đo](coding-round-09-checks.json), [artwork transcript](ACTION_ARTWORK_TRANSCRIPT.md).

Dev: `http://127.0.0.1:3000/take-action/`. Demo Pages được cập nhật qua workflow hiện có; chỉ xác nhận công khai sau workflow/live checks. Không chỉnh Vercel, bật dịch vụ production hoặc tự bắt đầu lượt 10.
