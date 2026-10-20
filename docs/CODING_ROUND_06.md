# Coding lượt 6 — Growth & Daily Life

Người dùng yêu cầu: “hãy bắt đầu code lượt thứ 6 nhé”. Đã thay `/issues/growth-daily-life` preview bằng tám section L-01…L-08 trong phạm vi First Clickable Demo. Giữ nguyên Home, Issues, Roads, Water và shared Foundation. Bốn route The Facts, The Proposal, Take Action, About vẫn là labelled previews.

## Nội dung đã triển khai

1. **L-01 Then/Today:** hero copy PDF 54, hai map illustrations và các nhãn từ selected PDF 55. Population/housing có nhãn unverified sample data trước hai panel; hình không được coi là lịch sử/GIS đã xác thực.
2. **L-02 Natural Rural Density:** đúng hai panel selected PDF 57; giữ trees, homes, lot lines và narrow rural lanes. “10 homes on 50 acres” chỉ bên trái; right “Same amount of land”. Conceptual qualification hiển thị rõ; năm hệ quả theo PDF 55.
3. **L-03 Housing:** approved heading/body và ba scenario text cards; không tự thêm ba scenario photos. Low-density policy map và Master Assessment source còn thiếu, có labelled preview/qualification.
4. **L-04 Services:** static illustration giữ đủ legend màu, labels, north arrow và scale; thêm transcription HTML để đọc. Năm thumbnail dùng nguyên file nhỏ, đúng labels/caveat mới PDF 57–58, Healthcare 10–30 minutes. Pins/zones không được coi là verified locations hay đo đạc; không routing/location lookup.
5. **L-05 Infrastructure:** giữ heading/message/support copy, bốn mốc 2001/2010/2020/2026 và nhóm chủ đề. Chỉ là preview có nhãn, không measured chart hoặc quantitative series. Master Assessment source chưa được cung cấp, không tự xác minh attribution.
6. **L-06 Comparison:** hai cột, bốn điểm mỗi cột theo table cells PDF 59; selected landscape portions; summary qualification; CTA tới `/the-proposal#growth-housing-comparison`, hiện là route preview của lượt 8.
7. **L-07 Evidence:** sáu category cards; Main Finding/Source/Date giữ nhãn thiếu/chưa xác minh. Hai policy/GIS buttons dùng nguồn được cung cấp, bốn source thiếu mở preview. Parcel/boundary/policy links không được dùng làm bằng chứng cho sample counts hay travel estimates.
8. **L-08 Continuation:** selected artwork copy và visible aerial portion; CTA quay về `/issues#outdated-community-plan`, không thêm route mới.

## Ảnh và nguồn còn thiếu

19 hình dùng trên trang: 11 photo crops hiện có và tám fragments mới (bảy visual regions, một illustrative cover) được crop lossless, kiểm tra pixel equality, parent/source SHA-256 và provenance. Không sửa 43 archive assets, PDF hoặc ba map gốc; không nguồn ảnh mới/AI/upscale/sharpen. Then/Today giữ các graphic annotations, legends và phần comparison-arrow overlay vốn có ở mép panel; không phục hồi phần cảnh bị che.

Các nội dung còn thiếu: verified population/housing counts, historical imagery/GIS provenance, low-density policy map, ba scenario assets độc lập, Master Assessment, measured service locations/travel dataset, selected infrastructure timeline/map và quantitative series, card-level findings/dates/original records. Dùng labelled previews theo D-02/D-06 đã duyệt; không coi demo đã giải quyết các thiếu hụt này.

Ảnh không phóng vượt native dimensions ở DPR 1. Tại 1440 px, 19/19 hình thiếu ngân sách pixel DPR 2; tại 390 px, 12/19 hình thiếu. Đủ pixel không đồng nghĩa chứng nhận độ nét quang học. Bản đồ mobile giữ nguyên toàn hình và có link full-size; legend gốc nhỏ khi thu về mobile, có HTML transcription để đọc. [Transcript](GROWTH_ARTWORK_TRANSCRIPT.md) chỉ phục vụ copy QA, không fact-check.

## Kiểm tra

- `npm run lint`, `npm run typecheck`, `npm run build` qua; static export đủ chín route. Windows RSC postbuild giữ nguyên helper đã có.
- 109 copy leaves: 83 khớp selectable PDF text/table, 26 khớp visually transcribed selected artwork. DOM giữ đủ copy ở mọi viewport.
- Dev và static export qua 14 tổ hợp mỗi bản: 320/390/560/768/1000/1152/1440 CSS px × DPR 1/2. Một h1, tám section đúng thứ tự, sáu evidence cards, hai comparison panels, không tràn ngang.
- 12 source links khớp URL register; bảy section anchors không bị sticky header che; năm lần click CTA/entry gồm breadcrumb, comparison, continuation, Water và Issues.
- Sáu preview dialogs có focus trap, Escape, focus return; skip link và menu mobile hoạt động. Bốn route khác giữ labelled previews; Home/Issues/Roads/Water giữ đủ 6/6/8/9 section.
- 22 served image hashes khớp manifest: 19 hình trên trang và ba original maps. Không cover/filter hoặc đổi tỷ lệ, không browser image-optimization/re-encoding.
- Không form/input, cookie/web storage, write requests hoặc external requests; không runtime/console errors, HTTP 4xx/5xx hoặc lỗi kết nối trong lượt QA cuối. Navigation cancellations `ERR_ABORTED` được ghi riêng, không che lỗi mạng thật.
- Đã xem screenshots desktop/mobile của hero, density, housing, services, infrastructure, comparison, evidence và continuation. QA artifacts ở `tmp/round-06-qa/`, không phải website assets.

[Kết quả/số đo](coding-round-06-checks.json). Local: `http://127.0.0.1:3000/issues/growth-daily-life/`. Không publish, backend hoặc thu thập dữ liệu. Lượt tiếp theo **7 — The Facts**, chưa tự bắt đầu.
