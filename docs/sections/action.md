# Take Action

- **Loại:** later page (TXT:2105-2411). Ảnh mới được duyệt: A1, A2, H3 (supporter), A3, A4, A5, A6.
- **Route:** `/take-action`. Nhãn menu Take Action và nút Get Involved cùng mở trang này (TXT:112).
- **Thứ tự (TXT:2115-2394):** 1. Hero (A1) → 2. Three main actions (A2) [kèm Supporter Application (H3), 02 Share Your Story (A3), 03 Share Information (A4)] → 3. Community Stories (A5) → 4. Final CTA + Petition (A6) → Footer.
- **Ba form first version** (Supporter, A3 Story, A6 Petition) có điều khiển nhập thật và gửi email phía server — đặc tả kỹ thuật, trạng thái và thông báo nằm ở [FORMS_SPEC](../FORMS_SPEC.md). Ba form, tuyên bố và lựa chọn đồng ý **tách biệt hoàn toàn** (TXT:61).
- **Bỏ thông báo demo** trên ba form theo ảnh được duyệt (TXT:2210, TXT:2357). Việc bỏ nhãn demo **không** tự kích hoạt gửi thật (TXT:66).

<!-- TXT:2106-2111 -->
```text
PAGE PURPOSE
This is the final step in the website’s main journey. After visitors have:
seen the problems → understood each issue → viewed the data, maps, and records → understood how the Community Plan affects the community → compared the two planning frameworks → understood the proposed direction for change,
Action moves them toward specific actions.
The page should create the feeling:
“I understand the issue. What can I do now?”
```

## ACT-HERO (A1)

**Ảnh:** `p237-obj578-2046x698.png`.

<!-- TXT:2115-2127 -->
```text
1. HERO — YOUR VOICE CAN HELP SHAPE THE FUTURE OF KEYSTONE–ODESSA
Headline
DEMAND CHANGE. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.
Content
Keystone–Odessa needs a planning framework that puts the health, safety, and welfare of residents first.
Visual
A community-focused image of Keystone–Odessa: residents, families, neighborhoods, or the local landscape.
Avoid reusing “problem” visuals such as crashes, septic, or dangerous roads because Action focuses on community participation.


Approved A1 visual direction: use the Take Action opening below with the family illustration beside the headline, Merriweather headings, Inter body text and the approved warm-white, charcoal and burgundy treatment. Preserve the exact headline, supporting sentence and Take Action link. The previously removed paragraph remains omitted. This approval covers the opening only; the following action options, supporter form and petition keep their existing approved specifications.
New image - approved A1 Take Action opening layout. Current website reference.
 Approved A1 Take Action opening visual layout, existing main copy and source artwork preserved.
```

```text
IMG:p237-obj578-2046x698.png
TAKE ACTION
DEMAND CHANGE. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.
Keystone–Odessa needs a planning framework that puts the health, safety, and welfare of residents first.
Take Action →
```

**Quy tắc:** không có đoạn “After learning…” đã bị loại (TXT:2125). Ảnh gia đình bên cạnh headline (hình minh họa; nguồn/provenance chưa ghi — OQ-19). Đích của “Take Action →” trên chính trang này chưa được quy định — đề xuất cuộn tới Three main actions (OQ-26).

## ACT-CARDS Three main actions (A2)

**Ảnh:** `p246-obj606-2046x1502.png`.

<!-- TXT:2132-2144 -->
```text
2. THREE MAIN ACTIONS
This is the central section of Action. Display it as 3 large blocks, with each block leading to one clear action.
01 — ADD YOUR SUPPORT
Support a safer and more appropriate planning framework for Keystone–Odessa.
Residents can show their support for replacing the current Keystone–Odessa Community Plan policy layer with the Countywide planning framework, together with the necessary protections presented in the Proposal section.
THE COUNTY CAN CHANGE COURSE. The 2024 minutes record the Board’s ability to include the area in the future. Ask commissioners to reopen that decision.
Read the Board’s May 9, 2024 discussion — pages 39–40
Additional record: In its September 23, 2026 response, Planning Commission staff reported that the Board had not requested work on a Keystone–Odessa update. This is a dated status response.
Read the September 23, 2026 agency response
Button
Become a supporter and stay updated →
When clicked, “Become a supporter and stay updated” opens the supporter application directly. “Read and sign the petition” remains a separate existing action; do not add an intermediate choice screen.
This must be the most prominent CTA on the page.
```

<!-- TXT:2219-2238 -->
```text
Current on-screen copy for the selected image
THREE WAYS TO TAKE ACTION
THE COUNTY CAN CHANGE COURSE.
The 2024 minutes record the Board’s ability to include Keystone–Odessa in the future. Ask commissioners to reopen the decision.
Read the May 9, 2024 minutes →
RETIRE THE EXTRA PLAN. KEEP THE PROTECTIONS.
Ask the County to retire the separate Community Plan, reconsider related restrictions and retain enforceable safeguards.
Become a supporter and stay updated →
Read and sign the petition →
SHARE YOUR STORY
Tell us about roads, water and daily life in Keystone–Odessa.
SHARE MY STORY →
SHARE INFORMATION WITH THE COMMUNITY
Help more residents understand the issues affecting Keystone–Odessa.
Facebook • Email • Copy Link
SHARE INFORMATION →
Retain the image. The approved supporter, A3 story and A6 petition email-only specifications apply; sharing uses a static preview.
Approved A2 visual direction: use the three action cards below with larger, clearer panels, Merriweather headings, Inter body text and the approved warm-white, charcoal and burgundy treatment. Preserve the original illustrations, numbered badges, symbols, exact wording and all links. Keep “Become a supporter and stay updated” and “Read and sign the petition” as separate actions, following their existing approved destinations. This is a visual-layout approval; the approved supporter, A3 story and A6 petition email-only specifications apply; sharing uses a static preview only.
New image - approved A2 Three action cards layout. Current website reference.
 Approved A2 Three action cards visual layout, existing main copy and source artwork preserved.
```

```text
IMG:p246-obj606-2046x1502.png
THREE WAYS TO TAKE ACTION
THE COUNTY CAN CHANGE COURSE.
The 2024 minutes record the Board’s ability to include Keystone–Odessa in the future. Ask commissioners to reopen the decision.
Read the May 9, 2024 minutes →
01
RETIRE THE EXTRA PLAN. KEEP THE PROTECTIONS.
Ask the County to retire the separate Community Plan, reconsider related restrictions and retain enforceable safeguards.
Become a supporter and stay updated →
Read and sign the petition →
02
SHARE YOUR STORY
Tell us about roads, water and daily life in Keystone–Odessa.
SHARE MY STORY →
03
SHARE INFORMATION WITH THE COMMUNITY
Help more residents understand the issues affecting Keystone–Odessa.
Facebook • Email • Copy Link
SHARE INFORMATION →
```

**Hành vi:**
- “Become a supporter and stay updated →” mở **trực tiếp** Supporter Application, không qua màn hình chọn; là CTA nổi bật nhất trang (TXT:2143-2144).
- “Read and sign the petition →” mở petition đầy đủ (A6) — hai lối riêng, không gộp.
- “SHARE MY STORY →” mở form A3; “SHARE INFORMATION →” mở panel chia sẻ tĩnh A4.
- “Read the May 9, 2024 minutes →” → `https://publicaccess.hillsclerk.com/br/api/Document/AQ1%C3%89FuRtC3eDigqeOrtc4kvMW8ftGYkmV8UV7PGbail%C3%89bnOYGd0z0L%C3%89KJoPLOL8PlNhL50V8ZqAt6TErl6qsSxc%3D/?OverlayMode=View` (annotation PDF p.237).

**Ghi chú:** text blueprint (TXT:2134-2140) còn có đoạn “Support a safer and more appropriate planning framework…”, “Additional record: … September 23, 2026 response …” và link “Read the September 23, 2026 agency response” (Google Drive: `https://drive.google.com/file/d/1z6o0KhucgGOyLMXBGAMnMYcSHDlrFQQT/view`). Ảnh A2 không hiển thị các đoạn này. Blueprint cấm lộ file Drive riêng (TXT:2093) — OQ-07, OQ-23.

## ACT-SUPPORTER Supporter Application (H3)

**Ảnh:** trạng thái trống `p241-obj589-944x1112.png`; lỗi bắt buộc `p244-obj600-1322x1675.png`; lỗi phone có điều kiện `p245-obj603-1322x250.png`; panel trạng thái `p242-obj592…595`.

<!-- TXT:2145-2190 -->
```text
SUPPORTER APPLICATION — ONE COMBINED FORM
Placement: Action → 01 — ADD YOUR SUPPORT. Offer two separate routes: “Become a supporter and stay updated” opens this combined application; “Read and sign the petition” opens the exact approved petition and its own signing process.
The application below keeps the wording, options, fields, declarations and signature/date from all three supplied paper forms. Only the three audience choices are brought together. The form below is one continuous online form.
First-version supporter form implementation
Implement real selectable checkboxes for the three existing audience choices, allowing whichever choices apply. Start all choices unselected. Make the four participation choices and the Email / Text / Call choices selectable, preserving their exact paper wording. Do not add an “Other” choice or replace SIGNATURE with a consent checkbox.
Implement typed entry controls for the existing paper information fields. Keep STREET ADDRESS optional. PHONE is optional unless Text or Call is selected; then require a phone number and use the approved conditional error below. Preserve all remaining fields, including SIGNATURE and DATE, with an explicit signature entry step and date control. Keep the paper wording, mission, Consent, Privacy and return instructions verbatim. This supporter application is not a petition signature or statutory voting membership.
Keep the original mission, Consent, Privacy and return instructions visible, verbatim. Do not publish a supporter list or add a donation request. Public submission of any supporter list requires the separate permission promised on the paper forms.
After the map comparison, add a “Become a supporter” link to this application. Keep “Read the petition” as a separate link. The opening homepage remains unchanged.
These pages specify the form for the website. They do not activate a live form, collect information or publish the website.
First-version Send behavior: send the completed supporter application, selected choices and entered paper fields to fixed server-side recipient marinadiesch1@gmail.com. Do not use mailto, browser credentials or a caller-supplied recipient. Show the approved confirmation only after the email provider accepts the complete message for sending; this is not inbox arrival, human review or membership acceptance. Preserve entries on failure or an uncertain result. No supporter register, export dashboard or petition record is included; the forms remain separate.
Implementation boundary: the H3 supporter-form design and control states are approved, with the warm state 4 confirmation shown below replacing the earlier technical confirmation wording. Preserve all paper-form wording and the separate petition. Any further visible changes require approval. Delivery-provider setup, deployment, accounts and actual emails are not authorized by this document update.
SAFER COMMUNITIES UNITED
Supporter Application
For Keystone-Odessa residents
☐ I live in Keystone-Odessa.
For people living in communities adjacent to Keystone
☐ I live in a community adjacent to Keystone.
For anyone who travels on Gunn Highway
☐ I travel on Gunn Highway.
Safer Communities United is a Florida nonprofit civic organization working to protect the health, safety, and welfare of the people of Keystone-Odessa. We educate the public and advocate for a lawful County process to retire the Keystone-Odessa Community Plan and apply the otherwise applicable policies of the Hillsborough County Comprehensive Plan.
How I would like to participate
☐ Receive news and campaign updates
☐ Volunteer at community outreach events
☐ Help collect petition signatures
☐ Learn about formal membership if offered
Your information
FULL NAME
____________________________________________________
STREET ADDRESS optional
____________________________________________________
CITY
____________________________________________________
ZIP CODE
____________________________________________________
EMAIL
____________________________________________________
PHONE optional
____________________________________________________
PREFERRED CONTACT
☐ Email     ☐ Text     ☐ Call
Consent
By signing, I ask to join the Safer Communities United supporter network and authorize the organization to contact me about its civic and educational activities. I understand that this form does not create statutory voting membership. Any formal membership will be governed by the corporation's articles, bylaws, and board-approved rules.
SIGNATURE                                      DATE
________________________________   _________________
Privacy: We will use this information only for organizational communications and will not sell it. We will request separate permission before publicly submitting a supporter list. This is not a donation request.
Return this form to the organizer who provided it.
```

```text
IMG:p241-obj589-944x1112.png
Become a supporter and stay updated →
Read and sign the petition →
SAFER COMMUNITIES UNITED
Supporter Application
For Keystone-Odessa residents
I live in Keystone-Odessa.
For people living in communities adjacent to Keystone
I live in a community adjacent to Keystone.
For anyone who travels on Gunn Highway
I travel on Gunn Highway.
Safer Communities United is a Florida nonprofit civic organization working to protect the health, safety, and welfare of the people of Keystone-Odessa. We educate the public and advocate for a lawful County process to retire the Keystone-Odessa Community Plan and apply the otherwise applicable policies of the Hillsborough County Comprehensive Plan.
How I would like to participate
Receive news and campaign updates
Volunteer at community outreach events
Help collect petition signatures
Learn about formal membership if offered
Your information
FULL NAME
STREET ADDRESS optional
CITY
ZIP CODE
EMAIL
PHONE optional
PREFERRED CONTACT
Email  Text  Call
Consent
By signing, I ask to join the Safer Communities United supporter network and authorize the organization to contact me about its civic and educational activities. I understand that this form does not create statutory voting membership. Any formal membership will be governed by the corporation's articles, bylaws, and board-approved rules.
SIGNATURE
DATE
Privacy: We will use this information only for organizational communications and will not sell it. We will request separate permission before publicly submitting a supporter list. This is not a donation request.
Return this form to the organizer who provided it.
Send application
```

Trạng thái, lỗi và quy tắc kiểm tra: [FORMS_SPEC §1](../FORMS_SPEC.md#1-supporter-application-h3).

**Ghi chú:**
- Dùng gạch nối thường “Keystone-Odessa” trong form (đúng chữ giấy), khác “Keystone–Odessa” ở phần khác — giữ nguyên.
- Hai link nhỏ đầu form (Become a supporter… / Read and sign the petition) nằm trong ảnh; đích: neo form hiện tại / petition A6.
- Các tiêu đề panel trạng thái trong ảnh (“2. Required field”, “Keep the entries and point to the missing field.”, “3. Sending”, “Disable Send while the request is in progress.”, “5. Recoverable failure”, “Keep the entries available and offer a retry.”) là **chú thích thiết kế**, không phải copy website.
- Liên kết “Become a supporter” sau khu bản đồ (TXT:2152) → hiện bản đồ nằm ở Roads section 4; inventory Roads không có link này (chỉ có “Explore the evidence” và “Read the petition”). Không tự thêm (OQ-07).

## ACT-STORY 02 Share Your Story (A3)

**Ảnh:** form `p248-obj611-2046x1348.png`; xác nhận `p249`; đang gửi `p250`; lỗi kiểm tra `p251`; gửi lỗi `p252`.

<!-- TXT:2243-2264 -->
```text
02 — SHARE YOUR STORY
Show the community how planning policies affect real life.
Anyone affected by the Keystone–Odessa Community Plan is welcome to share their experience.
Roads & Safety • Water & Septic • Traffic • Housing • Infrastructure • Essential Services • Other Community Issues
Button
SHARE MY STORY →
Click → open the approved interactive Share Your Story form. Its invitation includes everyone affected by the Community Plan; no account or residence-only restriction is added.
Suggested Form
Name
Your Connection to the Area (optional)
Related Issue
Your Story
Upload Photo/Document
Allow the story to be published publicly: Yes / No
Submit Story
Approved A3 form: make the displayed controls interactive and deliver the complete story, actual supplied form values, publication choice and every accepted selected attachment to marinadiesch1@gmail.com through a secure server-side email endpoint. Keep the recipient fixed server-side; do not use mailto, browser-held credentials, a notification-only message or a file portal.
Keep publication choices initially unselected. No or unanswered means private; Yes permits consideration for publication and never triggers automatic publication. Submission does not add the person to the supporter register or mailing list. Keep personal experiences separate from official Evidence & Records.
This section collects the real-life experiences of anyone affected by the Community Plan. Evidence & Records remains the place for official evidence; keep these content types separate.
Validate inputs and files, enforce abuse and size controls, privately scan uploads, and use encrypted transport. Reject unsafe or unaccepted attachments without silently dropping them. Keep processing temporary; no dedicated story database, object store, durable outbox or administrative review portal is approved. Provider and mailbox retention must be disclosed accurately.
Report success only after the provider accepts the complete email with every accepted attachment. Acceptance is not a guarantee of inbox delivery, reading or publication. Preserve the current-page data and identical retry key/payload after an uncertain result; use only the chosen provider’s supported retry window, with no promise of durable recovery.
The approved full form is the selected page image. No provider, account, credentials, deployment or actual submission is created by this blueprint update. Approved A3 feedback for the disconnected private preview: simulate the four selected states with fictional text only. Confirmation: “Thank you for sharing your story!” and “Your experience helps bring community concerns into focus.” Pending: button “Sending…” and message “Sending your story…”. Validation heading: “Please check these fields.” Related Issue: “Choose a related issue.” Your Story: “Enter your story.” Show only applicable errors. Failure: “We couldn’t confirm the send.” and “Your entries are still here. Please try again.” Button: “Try again”. Keep current-page entries on recoverable failure. These states do not imply real email delivery, publication or enrollment. Live email acceptance and security requirements above remain prerequisites, not actions enabled by this preview approval.
Attachment controls must validate and privately scan files before emailing every accepted selected attachment with the full story. No silent omission, public file URLs or substitute review link. Preserve all displayed fields and optional connection wording. Start publication Yes / No choices unselected. Resolve upload limits, service providers, privacy disclosure, costs and testing before live collection; any new visible help or error wording needs approval. The Related Issue dropdown has these seven approved choices, in this order: Roads & Safety; Water & Septic; Traffic; Housing; Infrastructure; Essential Services; Other Community Issues. Preserve the approved closed-field appearance.
```

```text
IMG:p248-obj611-2046x1348.png
SHARE YOUR STORY
Show the community how planning policies affect real life.
Anyone affected by the Keystone–Odessa Community Plan is welcome to share their experience.
Roads & Safety
Water & Septic
Traffic
Housing
Infrastructure
Essential Services
Other Community Issues
SHARE MY STORY →
Share Your Story
Your real-life experience helps show how planning policies affect our community.
Name
Your name
Your Connection to the Area (optional)
For example: resident, worker, commuter, visitor or another connection
Related Issue
Select an issue
Your Story
Tell us about your experience...
Upload Photo/Document (optional)
Choose files or drag and drop
Photos, documents, or other files
Allow the story to be published publicly?
Yes
No
Submit Story
```

Trạng thái và quy tắc: [FORMS_SPEC §2](../FORMS_SPEC.md#2-share-your-story-a3).

**Ghi chú:** form nằm cạnh phần giới thiệu trên trang (ảnh A3); “SHARE MY STORY →” trong section này — hành vi khi form đã hiển thị chưa quy định (đề xuất: cuộn/focus vào form; OQ-26). Ảnh hộp thư “33556” là artwork (OQ-19). Câu chuyện cá nhân tách khỏi Evidence & Records (TXT:2260).

## ACT-SHARE 03 Share Information (A4)

**Ảnh:** section `p254-obj628-2047x1073.png`; panel mở `p255-obj631-1800x944.png`.

<!-- TXT:2283-2297 -->
```text
03 — SHARE INFORMATION WITH THE COMMUNITY
Help everyone affected by the Keystone–Odessa Community Plan understand the issues.
Facebook • Email • Copy Link
Button
SHARE INFORMATION →
Approved A4 interaction: clicking “SHARE INFORMATION →” opens the selected sharing panel over the unchanged page. Match the approved panel title, helper sentence, three choice labels, colours, spacing, dimmed backdrop and × close control. Closing returns to the underlying page. Facebook, Email and Copy Link remain display-only choices in the current private preview: do not open an external share destination, compose or send email, or write to the clipboard. This approval settles the open-state appearance and does not enable actual sharing.
A short sentence can be included:
The more fully the community has access to information, the more people can participate in decisions that affect the future of Keystone–Odessa.
Approved A4 visual direction: use the Share Information with the Community layout below with Merriweather headings, Inter body text and the approved warm-white, charcoal and burgundy treatment. Preserve all wording, sharing choices, symbols and the original device illustration. This approval covers the visual layout only. Keep the existing static-preview instructions; this preview does not submit, upload or send anything.
Approved A4 wording: “Help everyone affected by the Keystone–Odessa Community Plan understand the issues.” The small sharing panel reads “Help everyone affected learn about the issues and get involved.” Only these two sentences change from the previous approved A4 image. All choices and artwork remain unchanged.
New image - approved A4 inclusive sharing invitation. Current website reference.
 Approved A4 inclusive sharing invitation. Current website reference. 

Current image - approved A4 static sharing choices open state. This is an interaction-state reference, not an additional page section.
 Approved A4 static sharing choices open-state reference.
```

```text
IMG:p254-obj628-2047x1073.png
SHARE INFORMATION
Share Information with the Community
Help everyone affected by the Keystone–Odessa Community Plan understand the issues.
You can easily share this website or specific issue pages through:
Facebook
Email
Copy Link
SHARE INFORMATION →
The more fully the community has access to information, the more people can participate in decisions that affect the future of Keystone–Odessa.
```

```text
IMG:p255-obj631-1800x944.png
Share This Page
Help everyone affected learn about the issues and get involved.
Share on Facebook
Share via Email
Copy Link
```

**Quy tắc (TXT:2288):** “SHARE INFORMATION →” mở panel trên trang (nền mờ, nút ×); ba lựa chọn **chỉ hiển thị** — không mở trang chia sẻ ngoài, không soạn/gửi email, không ghi clipboard. Câu “You can easily share this website or specific issue pages through:” chỉ có trong ảnh (OQ-07). Ảnh laptop minh họa có chữ in sẵn giữ nguyên trong ảnh.

## ACT-STORIES 3. Community Stories (A5)

**Ảnh:** section `p258-obj638-2046x1600.png`; panel mở `p259` (Road Safety), `p260` (Water & Septic), `p261` (Everyday Access); thông báo “Not available yet” `p262`.

<!-- TXT:2302-2338 -->
```text
3. COMMUNITY STORIES — VOICES FROM KEYSTONE–ODESSA
Demo: retain the selected story-card design with a visible “Illustrative sample stories” label. Do not present sample quotations as authenticated submissions.
Heading
STORIES FROM THE COMMUNITY
Subheading
Real-life experiences show how planning issues affect the daily lives of Keystone–Odessa residents.
Display about 3 featured stories as cards:
ROAD SAFETY
Short excerpt from the story
Name or “Keystone–Odessa Resident”
Read the Story →
WATER & SEPTIC
Short excerpt from the story
Name or “Odessa Resident”
Read the Story →
EVERYDAY ACCESS
Short excerpt from the story
Name or “Keystone Resident”
Read the Story →
At the End of the Section
VIEW ALL STORIES →. In the private preview, when the full collection is not supplied, open the approved “Not available yet” notice shown after the story states. Use this same notice for other unresolved preview destinations. Preserve the small panel, exact text, dimmed page and × close control; closing returns to the underlying page. Do not invent missing content or redirect to an unrelated destination.
Editorial verification before launch: these resident quotations and dates are sample testimonial cards, not authenticated submissions. Replace with real stories only after publication permission and approval.
Approved A5 visual direction: use the Community Stories layout below with Merriweather headings, Inter body text and the approved colours. Preserve the existing pictures, excerpts, labels, dates, symbols and links. Keep “Illustrative sample stories” prominently visible. These are sample testimonial cards, not authenticated submissions. Replace them with genuine stories only after publication permission and approval, following the existing verification requirements. This approval covers the visual design only. Clicking each “Read the Story” opens the corresponding approved sample-excerpt panel shown after the closed view. Preserve the “Illustrative sample stories” label, exact supplied excerpt, attribution and date in each panel; do not invent a full story or present it as authenticated. The × close control returns to the unchanged page.
New image - approved A5 Community Stories layout. Current website reference.
 Approved A5 Community Stories visual layout, existing main copy and source artwork preserved. 

Current image - approved A5 sample story Road Safety open state. This is an interaction-state reference, not an additional page section.
 Approved A5 sample story Road Safety open-state reference. 

Current image - approved A5 sample story Water & Septic open state. This is an interaction-state reference, not an additional page section.
 Approved A5 sample story Water & Septic open-state reference. 

Current image - approved A5 sample story Everyday Access open state. This is an interaction-state reference, not an additional page section.
 Approved A5 sample story Everyday Access open-state reference. 

Current image - approved unavailable-destination notice open state. This is an interaction-state reference, not an additional page section.
 Approved unavailable-destination notice open-state reference.
```

```text
IMG:p258-obj638-2046x1600.png
COMMUNITY STORIES
STORIES FROM THE COMMUNITY
Real-life experiences show how planning issues affect the daily lives of Keystone–Odessa residents.
Illustrative sample stories
Real people. Real stories. A stronger community.
ROAD SAFETY
“Traffic has increased significantly, and it feels less safe for our children to walk or bike in our neighborhood.”
Keystone–Odessa Resident
September 2026
Read the Story →
WATER & SEPTIC
“Our well water often has a strange taste and odor. We are concerned about our long-term health and the lack of options for public water.”
Odessa Resident
August 2026
Read the Story →
EVERYDAY ACCESS
“We have to drive a long way for groceries, healthcare, and other essential services. It makes daily life more difficult, especially for older residents.”
Keystone Resident
September 2026
Read the Story →
VIEW ALL STORIES →
```

```text
IMG:p259-obj641-1800x1408.png
Illustrative sample stories
ROAD SAFETY
“Traffic has increased significantly, and it feels less safe for our children to walk or bike in our neighborhood.”
Keystone–Odessa Resident
September 2026
```

**Quy tắc:** nhãn “Illustrative sample stories” luôn hiển thị rõ; đây là thẻ lời chứng mẫu, không phải bài gửi đã xác thực; thay bằng câu chuyện thật chỉ sau khi có quyền công bố và được duyệt (TXT:2323-2324). “Read the Story →” mở panel trích đoạn mẫu tương ứng (đúng excerpt, người kể, ngày; không bịa toàn văn). “VIEW ALL STORIES →” mở “Not available yet”. Dòng “Real people. Real stories. A stronger community.” đứng cạnh nhãn mẫu có thể gây hiểu là thật (OQ-27).

## ACT-PETITION 4. Final CTA + Petition (A6)

**Ảnh:** `p267-obj662-793x2046.png` (trang 267–268, **đã thu nhỏ**, chữ nhỏ khó đọc; ảnh trích từ đây phải phóng + làm rõ theo D-007); xác nhận `p269-obj667`; đang gửi `p269-obj668`; lỗi kiểm tra `p270-obj671`; gửi lỗi `p270-obj672`.

<!-- TXT:2343-2357 -->
```text
4. FINAL CTA — TOGETHER TOWARD A SAFER KEYSTONE–ODESSA
This is the final CTA of the entire website journey.
Headline
PUT THE HEALTH, SAFETY, AND WELFARE OF RESIDENTS FIRST.
A short paragraph reconnecting to the Home page message:
PUT PEOPLE FIRST. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN. Read the evidence, read the petition and add your name to the request for the County to initiate the amendment process. Make the community’s demand impossible to ignore.
Implementation: place the existing “PUT PEOPLE FIRST. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.” headline and its complete introductory passage immediately above the original landscape-backed petition section, exactly as shown in the complete selected A6 reference. Implement that introduction and the petition once. Present the complete paper wording before the fields. Use the approved typed-full-name petition signature method. Signing and recordkeeping review, privacy, provider and County-delivery checks still gate live collection.
Primary CTA
READ AND SIGN THE PETITION →
Residents, property owners, workers and community supporters can read the full petition and add their support through its own signing process. Signing does not join the supporter network or create statutory voting membership.
Petition Form 
SIGN THIS PETITION →
Petition flow
Design status: the finished A6 visual and exact Petition_Larger_Text.pdf, September 24 version 3 wording are approved. Preserve the request to remove associated policies and repeal implementing Land Development Code provisions, including Part 3.08.00. This document specifies the build; it does not activate a signature service.
First version: use real controls for the approved petition fields and explicit support choice, then securely send the completed petition to marinadiesch1@gmail.com through a server-side transactional email provider. Remove the displayed draft/demo/launch notices as shown in the finished visual. Keep the public-records statement unchanged in normal charcoal text. Do not create dedicated petition storage, a register or a durable outbox in this version.
```

Toàn văn petition — **September 24 version 3**, `Petition_Larger_Text.pdf` (giữ nguyên, hiển thị đầy đủ dạng text chọn được trước các ô nhập ở mọi khổ màn hình; tóm tắt/link tải không thay thế được — TXT:2360):

<!-- TXT:2361-2374 -->
```text
SAFER COMMUNITIES UNITED
Retire the Keystone Odessa Community Plan
Retire the separate local plan and rely on the Hillsborough County Comprehensive Plan.
TO THE HILLSBOROUGH COUNTY BOARD OF COUNTY COMMISSIONERS
We, the undersigned residents, property owners, workers, and community supporters, respectfully request that Hillsborough County initiate a Comprehensive Plan amendment and complete all legally required analysis, notice, and public hearings to retire the Keystone-Odessa Community Plan as a separate community-specific plan. Our goal is for Keystone-Odessa to rely on the otherwise applicable Hillsborough County Comprehensive Plan as its governing planning framework, while all applicable zoning, environmental, infrastructure, and safety protections remain enforceable.
Why we are asking
We are concerned that the existing plan contains outdated, unclear, or conflicting provisions; restricts some transportation changes without requiring current safety evidence; and omits measurable protections for emergency access, disability access, safe school travel, private wells and septic systems, and flood resilience. Any replacement policy should protect the rural character and natural resources of Keystone-Odessa while placing the health, safety, and welfare of the people first.
What the County should do
• Remove the Keystone-Odessa Community Plan and its associated policies from the Hillsborough County Comprehensive Plan. Repeal implementing Land Development Code provisions, including Part 3.08.00 (Keystone-Odessa Rural Development Standards), through the required public amendment processes. Retain otherwise applicable County protections.
• Rely on the Hillsborough County Comprehensive Plan as the principal planning framework for Keystone-Odessa.
• Use current data on crashes, traffic, emergency response, evacuation, flooding, wells, septic systems, accessibility, housing, and environmental conditions.
• Hold open public meetings and allow all affected residents to participate before making a decision.
By signing, I support the request above. I understand that this petition may be submitted to public agencies and that my printed name, community or ZIP code, signature, and date may become public records.
Independent civic petition - not sponsored by Hillsborough County. Please sign only once.
```

Ô nhập, lựa chọn và thông báo:

<!-- TXT:2376-2393 -->
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
Approved wording shown in full before the fields. Launch checks remain required. Approved A6 feedback in the disconnected private preview is simulated with fictional text only, using the four selected panels after the complete petition views. Confirmation: “Thank you for adding your voice!” and “Together, we can put the community’s health, safety and welfare first.” Pending: “Sending…” and “Sending your petition response…”. Validation heading: “Please check these fields.” Messages: “Enter your printed name.”; “Enter your community or ZIP code.”; “Type your full name to sign.”; “Enter a valid date.”; “Select this checkbox to sign.”; and, only when updates are selected, “Enter a valid email address if you choose updates.” Show only applicable errors. Failure: “We couldn’t confirm the send.” and “Your entries are still here. Please try again.” Button: “Try again”. Retain current-page entries for retry. Email remains visible and optional unless updates are selected. This preview wording does not establish legal sufficiency, County receipt, actual email delivery or subscription; the approved signature method is typed full name, while signing and recordkeeping review and the existing live-launch checks remain in force.
```

Chữ thêm trong ảnh A6 (đọc từ ảnh đã thu nhỏ — cần đối chiếu bản gốc):

```text
IMG:p267-obj662-793x2046.png
PUT PEOPLE FIRST. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.
Read the evidence, read the petition and add your name to the request for the County to initiate the amendment process. Make the community’s demand impossible to ignore.
TOGETHER TOWARD A SAFER KEYSTONE-ODESSA
PUT THE HEALTH, SAFETY, AND WELFARE OF RESIDENTS FIRST.
Read and sign the petition
[toàn văn petition]
Independent civic petition - not sponsored by Hillsborough County. Please sign only once.
Your details
Printed name *
Your printed name
Community or ZIP *
Your community or ZIP code
Signature *
Your signature
Date *
MM / DD / YYYY
I support the petition above. *
By signing, I support the request above. I understand that this petition may be submitted to public agencies and that my printed name, community or ZIP code, signature, and date may become public records.
Optional email updates
Email me campaign updates. I can unsubscribe.
Email — only for updates
Your email address
Separate choice. Not required to sign.
SIGN THIS PETITION →
Signing does not join the supporter network.
Become a supporter and stay updated →
Independent civic petition - not sponsored by Hillsborough County. Please sign only once.
```

**Quy tắc chính (chi tiết ở [FORMS_SPEC §3](../FORMS_SPEC.md#3-petition-a6)):**
- Đoạn mở “PUT PEOPLE FIRST…” đặt ngay trên section petition nền phong cảnh; phần mở và petition chỉ xuất hiện **một lần** (TXT:2349, TXT:2394).
- Tuyên bố ký đặt ngay cạnh điều khiển ký, hiển thị trước khi gửi; cảnh báo public records giữ chữ charcoal thường (TXT:2357, TXT:2378-2379).
- Không thêm điều kiện tuổi/cử tri/cư trú; không gọi là petition chính thức của County hay bảo đảm hiệu lực pháp lý (TXT:2375, TXT:2392).
- Petition không ghi danh vào supporter network; cập nhật email là lựa chọn riêng, ban đầu không tick.
- Primary CTA “READ AND SIGN THE PETITION →” (TXT:2351) không thấy dưới dạng nút trong ảnh A6 (ảnh dùng tiêu đề “Read and sign the petition”) — OQ-07.
- Nền phong cảnh của section petition là artwork; trích tạm từ PDF theo D-007.
