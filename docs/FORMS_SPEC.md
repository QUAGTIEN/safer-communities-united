# Đặc tả ba form first version

Nguồn: TXT:61-68, TXT:2145-2217 (Supporter), TXT:2243-2278 (A3), TXT:2343-2411 (A6). Chữ hiển thị của form nằm ở [sections/action.md](sections/action.md); file này là hành vi và yêu cầu kỹ thuật.

## 0. Nguyên tắc chung

<!-- TXT:61-63 -->
```text
Build now: the full Home pilot as editable HTML and working click-through navigation, then obtain desktop and mobile visual approval before expanding. Maps, library filters and sharing remain within their approved static-preview limits. Implement the three approved email-only form specifications; keep unconnected previews truthful until separately authorized service activation.
Approved first-version form exceptions: the Supporter Application, A3 Share Your Story form and A6 Petition form use selectable controls and typed entries. Each sends its complete approved fields to marinadiesch1@gmail.com through secure server-side email delivery; A3 also sends every accepted selected attachment. Keep the three forms, their declarations and consent choices separate. No dedicated register, database, durable outbox, review portal or automatic publication is included. Their detailed approved specifications below govern implementation.
Keep test records separate. Finalize privacy, retention, provider, contact and access settings before enabling personal-data collection; obtain any required consent. All three form specifications below govern implementation. Public publishing, campaign email and County submissions require separate approval. Sample figures, library records and testimonials remain illustrative. Existing launch checks remain open; they do not prevent a private layout build.
```

- **Ba form độc lập:** Supporter, Story, Petition không gộp consent, không ghi danh chéo. Ký petition **không** đưa vào supporter network; gửi story **không** đưa vào supporter/mailing list (TXT:2259, TXT:2359).
- **Người nhận cố định phía server:** `marinadiesch1@gmail.com`. Không `mailto`, không credentials trên trình duyệt, không nhận địa chỉ người nhận từ client (TXT:2154, TXT:2258, TXT:2388).
- **Không lưu trữ:** không database, register, export dashboard, outbox bền, object store, review portal, tự công bố (TXT:61, TXT:2261, TXT:2357).
- **Thành công chỉ khi nhà cung cấp email chấp nhận** toàn bộ thư (A6: phản hồi thành công có email ID). Không báo thành công chỉ vì đã bấm. Xác nhận ≠ đã vào hộp thư, ≠ được duyệt, ≠ thành viên, ≠ County đã nhận (TXT:2207, TXT:2262, TXT:2389).
- **Lỗi / kết quả không chắc:** giữ nguyên dữ liệu trên trang để sửa/thử lại; giữ cùng payload và idempotency key khi thử lại; chỉ thử lại trong cửa sổ idempotency của nhà cung cấp; không hứa phục hồi bền (TXT:2154, TXT:2262, TXT:2390).
- **Bảo mật:** HTTPS; credentials chỉ ở server; cấu hình sender đã xác thực; giới hạn kích thước request và tần suất; chống lạm dụng (TXT:2388, TXT:2261).
- **Chế độ hiện tại:** blueprint **không** tạo provider, tài khoản, credentials, deploy hay gửi thật (TXT:2155, TXT:2263, TXT:2394). Trong **private preview chưa nối dịch vụ**, các trạng thái được **mô phỏng bằng dữ liệu giả** (TXT:2212, TXT:2263, TXT:2393). Bật gửi thật là một bước riêng cần người dùng cho phép.
- **Bản ghi test tách riêng** (TXT:63); thử nghiệm validation, bấm trùng, nhà cung cấp từ chối, timeout mơ hồ, file bị từ chối — chỉ dùng dữ liệu giả (TXT:67).
- **Trước khi thu thập dữ liệu cá nhân thật:** chốt privacy, thời gian lưu giữ, nhà cung cấp, liên hệ, quyền truy cập; xin consent cần thiết (TXT:62). Công bố thời gian lưu của nhà cung cấp và hộp thư (TXT:2261, TXT:2390).
- Lỗi gắn với ô tương ứng, focus ô lỗi đầu tiên, trạng thái được thông báo cho trình đọc màn hình (TXT:33, TXT:2212).

## 1. Supporter Application (H3)

<!-- TXT:2148-2155 -->
```text
First-version supporter form implementation
Implement real selectable checkboxes for the three existing audience choices, allowing whichever choices apply. Start all choices unselected. Make the four participation choices and the Email / Text / Call choices selectable, preserving their exact paper wording. Do not add an “Other” choice or replace SIGNATURE with a consent checkbox.
Implement typed entry controls for the existing paper information fields. Keep STREET ADDRESS optional. PHONE is optional unless Text or Call is selected; then require a phone number and use the approved conditional error below. Preserve all remaining fields, including SIGNATURE and DATE, with an explicit signature entry step and date control. Keep the paper wording, mission, Consent, Privacy and return instructions verbatim. This supporter application is not a petition signature or statutory voting membership.
Keep the original mission, Consent, Privacy and return instructions visible, verbatim. Do not publish a supporter list or add a donation request. Public submission of any supporter list requires the separate permission promised on the paper forms.
After the map comparison, add a “Become a supporter” link to this application. Keep “Read the petition” as a separate link. The opening homepage remains unchanged.
These pages specify the form for the website. They do not activate a live form, collect information or publish the website.
First-version Send behavior: send the completed supporter application, selected choices and entered paper fields to fixed server-side recipient marinadiesch1@gmail.com. Do not use mailto, browser credentials or a caller-supplied recipient. Show the approved confirmation only after the email provider accepts the complete message for sending; this is not inbox arrival, human review or membership acceptance. Preserve entries on failure or an uncertain result. No supporter register, export dashboard or petition record is included; the forms remain separate.
Implementation boundary: the H3 supporter-form design and control states are approved, with the warm state 4 confirmation shown below replacing the earlier technical confirmation wording. Preserve all paper-form wording and the separate petition. Any further visible changes require approval. Delivery-provider setup, deployment, accounts and actual emails are not authorized by this document update.
```

### Trường và lựa chọn

| Nhóm | Điều khiển | Bắt buộc | Ghi chú |
|---|---|---|---|
| Audience | 3 checkbox: I live in Keystone-Odessa. / I live in a community adjacent to Keystone. / I travel on Gunn Highway. | Không | Ban đầu không chọn; cho phép gửi khi không chọn; không thêm lỗi chọn nhóm (TXT:2192) |
| Participation | 4 checkbox (Receive news and campaign updates / Volunteer at community outreach events / Help collect petition signatures / Learn about formal membership if offered) | Không | Ban đầu không chọn |
| FULL NAME | Text | Có | Lỗi: “Enter your full name.” |
| STREET ADDRESS optional | Text | Không | |
| CITY | Text | Theo giấy — xem ghi chú | |
| ZIP CODE | Text | Theo giấy — xem ghi chú | |
| EMAIL | Email | Có | Lỗi: “Enter a valid email address.” |
| PHONE optional | Tel | Chỉ khi chọn Text hoặc Call | Lỗi: “Add a phone number or change your contact preference.” (dưới PHONE) |
| PREFERRED CONTACT | 3 checkbox: Email / Text / Call | Không | Không thêm “Other” |
| SIGNATURE | Text — gõ họ tên đầy đủ | Có | Lỗi: “Type your full name to sign.”; không vẽ chữ ký, không thay bằng checkbox consent (TXT:2192) |
| DATE | Điều khiển ngày riêng | Có | Lỗi: “Enter a valid date.”; không thêm giới hạn khoảng ngày |

Không thêm: kiểm tra số từ của tên, so khớp chữ ký, khung tổng hợp lỗi mới, checkbox consent, bắt buộc trường optional (TXT:2212). CITY/ZIP: blueprint không liệt kê lỗi cho hai ô này → không bắt buộc ở client cho đến khi được xác nhận (OQ-28).

### Trạng thái (chữ nguyên văn)

<!-- TXT:2206-2212 -->
```text
State 4 heading: “Thank you for adding your support!” Message: “Your application has been submitted. We’re happy to have you with us as we work toward a safer community.”
Show this confirmation only after the server receives acceptance from the configured email service to send the completed application to marinadiesch1@gmail.com. This confirms submission for sending, not guaranteed inbox arrival, human review or membership acceptance. Do not show success merely after a click or an unconfirmed request. No supporter database or private register is created in the first version.
Other approved states: button “Send application”; required-name error “Enter your full name.”; in-progress button “Sending…” and message “Sending your application…”. Disable Send while that request is in progress.
Recoverable failure: “We couldn’t confirm the send.” “Your entries are still here. Please try again.” Button: “Try again”. Keep entries available for correction or retry.
All options and consent start unselected. All personal-information, signature and date entries start blank. Keep SIGNATURE and DATE as explicit entries. The approved initial-state reference removes the demo notice; this visual change does not activate delivery or authorize live collection.
Use the approved H3 layout, Merriweather headings, Inter body text and its warm-white, charcoal and burgundy form styling. Preserve every original audience choice, participation choice, information label, mission, Consent, Privacy and return instruction. Supporter signup and petition signing remain separate.
Approved supporter inline validation: preserve the blank initial form and existing feedback states. Keep “Enter your full name.” Add “Enter a valid email address.” below EMAIL, “Type your full name to sign.” below SIGNATURE, and “Enter a valid date.” below DATE, only when the corresponding required field needs attention. If Text or Call is selected with an empty phone field, show “Add a phone number or change your contact preference.” below PHONE. Otherwise PHONE remains optional. Preserve all entered values and selections, focus the first invalid field, and associate each displayed error with its field. Do not add a date range, a name word-count rule, a signature-matching rule, a new error summary, a consent checkbox or an optional-field requirement. All three supporter categories stay optional. In the disconnected private preview, simulate these states with fictional data; this approval does not activate email or collection.
```

- Ảnh: blank `p241`, lỗi `p244`, phone `p245`, panel `p242-obj592…595`.
- Nút “Send application”; khi gửi: nút “Sending…” bị vô hiệu + “Sending your application…”.
- Thành công: “Thank you for adding your support!” / “Your application has been submitted. We’re happy to have you with us as we work toward a safer community.”
- Lỗi: “We couldn’t confirm the send.” / “Your entries are still here. Please try again.” + nút “Try again”.

### Nội dung email gửi đi
Toàn bộ lựa chọn và giá trị đã nhập, đúng nhãn giấy (TXT:2154). Đề xuất bổ sung kỹ thuật (không hiển thị): tên form, phiên bản form, thời điểm server, mã tham chiếu, idempotency key — cần duyệt (OQ-28).

## 2. Share Your Story (A3)

<!-- TXT:2258-2264 -->
```text
Approved A3 form: make the displayed controls interactive and deliver the complete story, actual supplied form values, publication choice and every accepted selected attachment to marinadiesch1@gmail.com through a secure server-side email endpoint. Keep the recipient fixed server-side; do not use mailto, browser-held credentials, a notification-only message or a file portal.
Keep publication choices initially unselected. No or unanswered means private; Yes permits consideration for publication and never triggers automatic publication. Submission does not add the person to the supporter register or mailing list. Keep personal experiences separate from official Evidence & Records.
This section collects the real-life experiences of anyone affected by the Community Plan. Evidence & Records remains the place for official evidence; keep these content types separate.
Validate inputs and files, enforce abuse and size controls, privately scan uploads, and use encrypted transport. Reject unsafe or unaccepted attachments without silently dropping them. Keep processing temporary; no dedicated story database, object store, durable outbox or administrative review portal is approved. Provider and mailbox retention must be disclosed accurately.
Report success only after the provider accepts the complete email with every accepted attachment. Acceptance is not a guarantee of inbox delivery, reading or publication. Preserve the current-page data and identical retry key/payload after an uncertain result; use only the chosen provider’s supported retry window, with no promise of durable recovery.
The approved full form is the selected page image. No provider, account, credentials, deployment or actual submission is created by this blueprint update. Approved A3 feedback for the disconnected private preview: simulate the four selected states with fictional text only. Confirmation: “Thank you for sharing your story!” and “Your experience helps bring community concerns into focus.” Pending: button “Sending…” and message “Sending your story…”. Validation heading: “Please check these fields.” Related Issue: “Choose a related issue.” Your Story: “Enter your story.” Show only applicable errors. Failure: “We couldn’t confirm the send.” and “Your entries are still here. Please try again.” Button: “Try again”. Keep current-page entries on recoverable failure. These states do not imply real email delivery, publication or enrollment. Live email acceptance and security requirements above remain prerequisites, not actions enabled by this preview approval.
Attachment controls must validate and privately scan files before emailing every accepted selected attachment with the full story. No silent omission, public file URLs or substitute review link. Preserve all displayed fields and optional connection wording. Start publication Yes / No choices unselected. Resolve upload limits, service providers, privacy disclosure, costs and testing before live collection; any new visible help or error wording needs approval. The Related Issue dropdown has these seven approved choices, in this order: Roads & Safety; Water & Septic; Traffic; Housing; Infrastructure; Essential Services; Other Community Issues. Preserve the approved closed-field appearance.
```

### Trường

| Điều khiển | Placeholder (ảnh) | Bắt buộc | Lỗi |
|---|---|---|---|
| Name | Your name | Chưa quy định (ảnh lỗi không có Name) — OQ-28 | — |
| Your Connection to the Area (optional) | For example: resident, worker, commuter, visitor or another connection | Không | — |
| Related Issue (select, 7 lựa chọn theo thứ tự: Roads & Safety; Water & Septic; Traffic; Housing; Infrastructure; Essential Services; Other Community Issues) | Select an issue | Có | “Choose a related issue.” |
| Your Story (textarea) | Tell us about your experience... | Có | “Enter your story.” |
| Upload Photo/Document (optional) | Choose files or drag and drop / Photos, documents, or other files | Không | Chữ lỗi file **chưa được duyệt** — mọi chữ hướng dẫn/lỗi mới cần duyệt (TXT:2264) |
| Allow the story to be published publicly? Yes / No (radio) | — | Không | Ban đầu không chọn; No hoặc bỏ trống = riêng tư; Yes chỉ cho phép xem xét công bố, không tự công bố |

### Trạng thái (chữ nguyên văn, TXT:2263)
- Đang gửi: nút “Sending…” + “Sending your story…”.
- Lỗi kiểm tra: tiêu đề “Please check these fields.” + lỗi từng ô (chỉ lỗi áp dụng).
- Thành công: “Thank you for sharing your story!” / “Your experience helps bring community concerns into focus.”
- Lỗi gửi: “We couldn’t confirm the send.” / “Your entries are still here. Please try again.” + “Try again”.

### File đính kèm
- Kiểm tra loại và kích thước, **quét malware riêng tư** trước khi gửi; gửi **mọi** file được chấp nhận cùng story; file bị từ chối phải báo rõ, không âm thầm bỏ; không URL file công khai, không link review thay thế; xử lý tạm thời (TXT:2261, TXT:2264).
- Giới hạn dung lượng/số file, dịch vụ quét, chi phí, công bố privacy: **chưa chốt** (OQ-12).

## 3. Petition (A6)

<!-- TXT:2376-2392 -->
```text
2  Add your details and choose
Use the paper’s four fields: Printed name; Community or ZIP; Signature; Date. Use the approved typed-full-name signature step. Check accessibility and recipient requirements before live collection; signing and recordkeeping review remains required. Do not add a required email, street address, phone number or comment field without a defined need and approval.
Required, initially unticked: ☐ I support the petition above. Keep the paper’s declaration directly beside the signing controls, visible before submission:
By signing, I support the request above. I understand that this petition may be submitted to public agencies and that my printed name, community or ZIP code, signature, and date may become public records.
Footer from both papers: Independent civic petition - not sponsored by Hillsborough County. Please sign only once.
Privacy and confirmation
3  Keep email updates optional
Approved separate optional choice, requiring working unsubscribe controls: ☐ Email me campaign updates. I can unsubscribe. Start unticked. Keep the email field visible from the initial state, matching the approved image. Email is optional unless the updates choice is selected; require a valid email only when selected, and use it only for that choice. Leaving updates unticked must not prevent petition signing. Do not automatically subscribe signers or import supporter-network consent.
4  Explain data use before signing
The paper already warns that printed name, community or ZIP, signature and date may become public records. Keep that warning prominent. Do not promise confidentiality or anonymity. Do not publish signers’ contact details or treat petition consent as permission to display their names on the website.
Complete this privacy notice before launch: “Your submission is managed by [approved organization/contact]. We collect [approved fields] to record your support and [approved submission purpose]. We may provide [exact fields] to [named recipient/public agencies], where they may become public records. [Approved explanation of optional email use, access, retention and correction/withdrawal requests]. Contact: [working contact].” These brackets are decisions to fill in, not approved promises.
5  Submit and confirm the actual result
Button: SIGN THIS PETITION →. Validate the approved fields, explicit support and signature step server-side. Send all entered petition fields, support choice, separate optional-update data, exact petition/consent version, timestamp and correlation reference to fixed recipient marinadiesch1@gmail.com. Keep credentials server-side; use HTTPS, authenticated sender configuration, request-size/rate limits and abuse controls. Do not use mailto or accept a caller-supplied recipient.
Confirm acceptance only after the provider returns a valid successful response with an email identifier for the complete message. This does not establish inbox delivery, County receipt, identity verification or permanent storage. A correlation reference is not a database lookup or recovery guarantee. Keep any user-facing state wording within its separately approved scope.
On failure or uncertain outcome, preserve the current-page fields and immutable payload, timestamp, reference and idempotency key. Retry only within the chosen provider’s supported window; do not silently regenerate a key or promise durable duplicate prevention/recovery. Provider and mailbox retention must be disclosed accurately.
Before enabling signatures
Before enabling signatures: review the typed-full-name signing and recordkeeping process, and resolve the County delivery process, privacy notice, responsible contact, provider/sender setup and any optional update service; obtain any required setup authorization. Test field mapping, consent, failures, ambiguous retries, duplicate controls, mobile layout and keyboard access with fictional data. This independent civic petition is not an official election/ballot petition or proof of legal sufficiency.
```

### Trường

| Điều khiển | Placeholder (ảnh, đã thu nhỏ) | Bắt buộc | Lỗi |
|---|---|---|---|
| Printed name | Your printed name | Có | “Enter your printed name.” |
| Community or ZIP | Your community or ZIP code | Có | “Enter your community or ZIP code.” |
| Signature (gõ họ tên) | Your signature | Có | “Type your full name to sign.” |
| Date | MM / DD / YYYY | Có | “Enter a valid date.” |
| ☐ I support the petition above. | — | Có, ban đầu không tick | “Select this checkbox to sign.” |
| ☐ Email me campaign updates. I can unsubscribe. | — | Không, ban đầu không tick | — |
| Email — only for updates | Your email address | Chỉ khi tick updates | “Enter a valid email address if you choose updates.” |

Không thêm email bắt buộc, địa chỉ, điện thoại, bình luận, điều kiện tuổi/cử tri/cư trú (TXT:2375, TXT:2377).

### Trạng thái (TXT:2393)
- Đang gửi: “Sending…” + “Sending your petition response…”.
- Lỗi kiểm tra: “Please check these fields.” + lỗi áp dụng.
- Thành công: “Thank you for adding your voice!” / “Together, we can put the community’s health, safety and welfare first.”
- Lỗi gửi: “We couldn’t confirm the send.” / “Your entries are still here. Please try again.” + “Try again”.

### Nội dung email gửi đi (TXT:2388)
Mọi trường petition, lựa chọn ủng hộ, dữ liệu cập nhật tùy chọn (tách riêng), **phiên bản petition/consent chính xác** (“Petition_Larger_Text.pdf, September 24 version 3”), timestamp, mã tham chiếu (correlation reference). Validate cả phía server.

### Điều kiện trước khi bật ký thật (TXT:2391-2392)
Rà soát cách ký bằng gõ họ tên và lưu hồ sơ; quy trình giao cho County; privacy notice (TXT:2386 — các chỗ `[...]` phải điền); người liên hệ phụ trách; cấu hình provider/sender; dịch vụ cập nhật tùy chọn có unsubscribe hoạt động (OQ-14); kiểm tra mapping, consent, lỗi, retry mơ hồ, chống trùng, mobile, bàn phím với dữ liệu giả. Petition dân sự độc lập, không phải petition bầu cử/chính thức (OQ-13, OQ-31).

## 4. Không phải form: Share Information (A4)
Panel tĩnh; Facebook / Email / Copy Link chỉ hiển thị, không chia sẻ, không soạn email, không ghi clipboard (TXT:2288).
