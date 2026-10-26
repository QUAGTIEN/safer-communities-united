# Quy tắc dự án — first version

Thứ tự ưu tiên khi có mâu thuẫn:

1. Chỉ dẫn trực tiếp của người dùng trong phiên làm việc, đã ghi ở [APPROVAL_LOG](APPROVAL_LOG.md).
2. Blueprint 22/10/2026 ([blueprint/](../blueprint/README.md)) — theo thứ tự nội bộ của chính nó: ảnh section được chọn + layout nguồn quyết định **diện mạo**; quy tắc điều hướng quyết định **đích đến** (TXT:11, TXT:58); chỉ dẫn mới nhất thắng chỉ dẫn cũ trong cùng tài liệu.
3. Tài liệu dẫn xuất trong `docs/` (không tạo thêm phê duyệt; nếu khác blueprint thì blueprint đúng và tài liệu phải sửa).

Mâu thuẫn chưa giải quyết được: **không tự thỏa hiệp**, ghi vào [OPEN_QUESTIONS](OPEN_QUESTIONS.md) và hỏi người dùng (TXT:11).

## 1. Nguyên tắc của người dùng (25/10/2026)

- **100% y chang blueprint mô tả.** Không redesign, không viết lại, không tạo ảnh, không bịa nội dung.
- Blueprint 22/10 là master; blueprint cũ và toàn bộ tài liệu/asset cũ đã xóa hoàn toàn, không lưu trữ.
- Dựng lại trên bộ khung kỹ thuật hiện có (Next.js); code trang cũ đã xóa.
- Giữ ba bản đồ gốc làm asset nguồn.

## 2. Checklist triển khai của blueprint (nguyên văn)

<!-- TXT:7-39 -->
```text
SCU design implementation and approval checklist
Read this before building. Reproduce the approved content and selected visual direction faithfully. Build the Home page first and obtain explicit approval of its desktop and mobile versions before expanding to the other pages. This checklist governs the implementation sequence; the approved first-version form exceptions and other demo limits remain in force.
1 Lock the copy and section references
Use the current page-specific on-screen copy verbatim, including claims, qualifiers, labels, captions, source caveats, petition wording and consent text. Do not rewrite, shorten, soften, intensify or silently correct it. Remove only a clearly unnecessary decorative dash separator covered by the agreed cleanup; preserve meaningful punctuation, ranges, hyphenated words and place names. If removal could change meaning or its scope is unclear, flag it for approval. This instruction update makes no advocacy-copy edits.
Before coding, create a section-by-section reference list: page and section, exact on-screen copy, selected image and matching source layout, asset hash, scope, intended behavior and unresolved conflicts. Use the explicitly selected version, including H1 Growth & Housing and the natural rural-lane density illustration. The latest selected section image governs its appearance; the approved navigation rules govern destinations. Do not let a generic footer or palette overwrite a selected reference. Flag a true conflict rather than invent a compromise.
2 Separate design references from usable assets
Classify each supplied image as a standalone map/illustration, a composite layout reference, or a production-ready asset. A screenshot containing text, navigation, buttons and photographs is a reference for editable components, not a complete website asset. Retain the original files and the intentional multi-panel previews. Use supplied map originals; keep conceptual and illustrative labels visible.
Record where each photograph, logo or illustration comes from and whether a clean separate file exists. Do not assume that an image embedded in a composite has a usable full-resolution original. Flag any missing, blurry or inseparable asset. Obtain approval before cropping in a way that changes the selected composition, substituting artwork, generating a replacement or using a visible placeholder. Never invent a real local photograph or evidence.
3 Approve the Home page pilot
Implement the full Home page as editable HTML text and reusable components, with its approved sections, selected images, shared navigation and footer. Match the reference layout, hierarchy, proportions and spacing as closely as the available evidence permits. Small refinements, such as clearer typography or more space between sections, may be proposed while keeping the same overall design and wording. Show each proposed change separately and obtain approval before applying it. Do not use a full-page screenshot as the webpage or cover rasterized text with invisible controls.
Present the desktop and mobile Home page, comparison screenshots, the implementation measurements, and the unresolved-item list. Ask for explicit approval of both layouts and the shared component system. Record the approved version and decisions. Do not build out the remaining pages merely because the Home page runs successfully; a working preview is not visual approval.
Design specifications and measurements
Use Part I, section 4, with each selected page reference. The section-specific approved image and matching source layout establish appearance; generic design guidance is subordinate. A written palette or Word font does not establish the exact measurements of every raster reference.
Confirmed written design specifications
Appearance precedence: reproduce each current selected section image and its matching approved source layout faithfully. Use that section’s approved colors, typography, spacing, imagery and footer treatment; a generic palette must not recolor it. The approved Home opening and O2 overview use their selected charcoal/burgundy treatment. Other selected sections retain their own approved appearance. Shared component behavior does not authorize a site-wide visual redesign. Flag a true unresolved conflict before implementing it.
Typography: use the approved Inter body and Merriweather heading font files, their license notices and the weights and variable-font settings of the matching section source. Verify actual browser font loading and line wrapping; do not silently fall back. Word-document formatting is not a website font specification. Preserve any lettering baked into selected artwork.
Navigation behavior and public-facing menu labels follow Part I, section 3. Use the current selected section reference for its header and footer appearance. Do not replace an approved white footer with a navy footer or add/rearrange visible footer groups solely to satisfy an older generic instruction. The approved navigation destinations remain in force; any genuinely missing destination uses the separately approved fallback. A changed visible treatment needs a preview and approval.
Implementation measurements to confirm on the Home page pilot
Record each specification with its source and status: explicit instruction, matching source-layout value, estimate from a reference, or approved pilot measurement. Record the source canvas separately from browser viewport, device scale and zoom. Do not present estimated dimensions as approved precision.
Typography audit: heading family and fallback, loaded font files, weights, desktop/mobile sizes, line heights, letter spacing, text measure and wrapping for hero, section headings, cards, navigation, body, captions and buttons. Check the actual rendered font, including missing-font fallback and long menu labels.
Layout audit: record desktop, phone and intermediate viewport sizes, content widths, gutters, columns, gaps, section spacing, header/footer dimensions and breakpoints. Only the selected Home opening has a separate phone reference; propose the remaining responsive layouts for approval. Preserve section order, complete copy, controls and readable maps with the approved section-specific crops. A static canvas width is not an approved CSS viewport.
Component and image audit: exact palette use by role; button padding, height, width behavior, border, radius and focus/hover states; image aspect ratios, focal points, cropping, display size and resolution; map and illustration labels; and readable source links. Put measurements that cannot be recovered reliably into the approval list. Changes to artwork require separate approval, even when made to fit a component.
Visual review and release gates
4 Compare before requesting approval
Choose and record fixed desktop and mobile viewport sizes for the pilot. Capture the page at those same sizes on each review, after fonts and images load. Compare each section against its selected reference using side-by-side or overlay views at a consistent scale. Identify unavoidable source-image versus browser-aspect-ratio differences. Do not declare a pixel-perfect match without a valid like-for-like comparison.
Check hierarchy, alignment, text wrapping, spacing, color roles, buttons, image proportions and crops. Then inspect the entire mobile page for overflow, cramped type, broken columns, clipped images and a fixed header covering content. Also test an intermediate width. Keep an explicit mismatch list and resolve it or obtain approval; do not hide defects by changing the approved words or shrinking text until it fits.
Compare rendered editable copy with the current selected on-screen copy, including qualifiers and labels. Exclude superseded instructions and internal notes. Test every route, return link and source destination, semantic headings, keyboard access, visible focus, grouped and labelled controls, error/status announcements, zoom/reflow, contrast and touch use. Decorative search/social icons stay inert. Any visible accessibility correction needs a before-and-after preview and approval.
5 Expand only after approval
After desktop and mobile Home approval, reuse component behavior while preserving each remaining section’s approved composition, colors, header/footer variant and exact copy. Repeat desktop, phone and intermediate-width visual, copy and navigation checks for each page. Reuse does not authorize a global restyle.
Keep the first build a local click-through demo, with the approved first-version Supporter Application, A3 Share Your Story and A6 Petition form exceptions. Preserve the existing static-map, demo-label and no-data-collection requirements outside those approved form specifications. This document does not activate live collection, accounts, actual emails, deployment, publication or external submissions.
Approval record and change notation
Record each review item as approved, needs revision or awaiting decision, with the page/section, version, reference and user decision. An unanswered question is not approval. Required gates are: section-reference and missing-asset decisions; Home desktop and mobile approval; shared design-token approval; then remaining-page visual, copy and navigation approval.
For this current-build-only copy, preserve the selected current text and images. Keep superseded wording and image history in the separate review backup. Show before-and-after images and obtain approval before applying any further visible change. New instructions are blue.
```

## 3. Hướng dẫn chung và phạm vi first version (nguyên văn)

<!-- TXT:56-68 -->
```text
SCU website blueprint | Current build only. Build and approve the Home page on desktop and mobile first; then expand the approved design to the remaining pages, preserving the exact copy, selected images and navigation. New instructions are blue.
How to use this blueprint
Use current page-specific on-screen copy with its selected image and matching source layout. Longer explanations and source notes support detail sections; do not squeeze them into the mockup or discard approved below-viewport passages. Internal editorial and implementation notes are not visitor copy. Each selected section controls appearance; approved navigation rules control destinations. Retain map originals and intentional multi-panel previews.
 The density illustration uses the natural rural-lane version. The Action hero omits the removed “After learning…” paragraph. Keep supporter signup separate from petition signing, and use the complete approved petition including associated policies and Land Development Code Part 3.08.00.
Growth & Housing: use the approved H1 comparison, “Where is the plan for homes people can afford?”, with eight original symbols and no header photograph.
Build now: the full Home pilot as editable HTML and working click-through navigation, then obtain desktop and mobile visual approval before expanding. Maps, library filters and sharing remain within their approved static-preview limits. Implement the three approved email-only form specifications; keep unconnected previews truthful until separately authorized service activation.
Approved first-version form exceptions: the Supporter Application, A3 Share Your Story form and A6 Petition form use selectable controls and typed entries. Each sends its complete approved fields to marinadiesch1@gmail.com through secure server-side email delivery; A3 also sends every accepted selected attachment. Keep the three forms, their declarations and consent choices separate. No dedicated register, database, durable outbox, review portal or automatic publication is included. Their detailed approved specifications below govern implementation.
Keep test records separate. Finalize privacy, retention, provider, contact and access settings before enabling personal-data collection; obtain any required consent. All three form specifications below govern implementation. Public publishing, campaign email and County submissions require separate approval. Sample figures, library records and testimonials remain illustrative. Existing launch checks remain open; they do not prevent a private layout build.
Creator checklist for this demo: link every main menu item and page CTA; keep the selected artwork and current copy; use ordinary source links when a supplied destination exists; use a labelled preview when content or a destination is not yet supplied. Do not invent records, source URLs, successful submissions or live results.
Approved navigation fallbacks: when content or a destination has not been supplied, open a clearly labelled “Not available yet” notice. For illustrative sample cards, “Read the Story” shows only the supplied excerpt and retains its sample label; do not invent a full story. These are developer behavior instructions only. Any new visible notice or excerpt-view layout must be shown for approval before implementation.
First-version scope precedence: the approved A3 and A6 email-only specifications supersede earlier instructions that keep those two forms non-editable or demo-only. The supporter exception remains in force. Sharing uses a static preview only. This blueprint update does not activate data collection, create accounts, configure credentials, send emails or deploy a site; the required provider, privacy, signature and launch checks still apply.
Current build foundation: use reusable semantic components with editable content and separate image assets. The supplied HTML layouts are static visual references, not verified responsive application code; rebuild links, controls and server behavior explicitly. Use stable routes and the Roads & Safety map area. Choose a platform supporting the three approved email-only forms without adding a database, portal or durable outbox.
Acceptance review: verify selected asset hashes and scope; exact visible copy; loaded fonts; desktop/phone/intermediate layouts; every control and return path; source destinations; keyboard, focus, contrast and reflow; and truthful form states. Test validation, duplicate clicks, provider rejection, ambiguous timeouts and attachment rejection using fictional data only within authorized testing. Public-source, factual and photo-rights checks gate publication. Static screenshots are not proof of working behavior.
```

## 4. Tóm tắt thực thi (tiếng Việt, không thay nguyên văn ở trên)

### Nội dung
- Chữ hiển thị lấy **nguyên văn** từ [sections/](sections/README.md): gồm cả claim, qualifier, nhãn, caption, caveat nguồn, petition, consent. Không viết lại, rút gọn, làm mềm, làm mạnh hay tự sửa lỗi. Chỉ được bỏ dấu gạch trang trí rõ ràng thừa; mọi trường hợp không chắc → hỏi.
- Ghi chú nội bộ, chú thích biên tập, “Source notes” dài, ghi chú tiếng Việt **không** là copy website.
- Không bịa bản ghi, URL nguồn, kết quả gửi thành công hay kết quả trực tiếp (TXT:64). Số liệu mẫu, thư viện, lời chứng vẫn là minh họa và phải giữ nhãn (TXT:63).

### Ảnh và asset
- Phân loại mọi ảnh: bản đồ/minh họa độc lập, ảnh tham chiếu layout, hay asset dùng được. Ảnh chụp màn hình chứa text/nút là tham chiếu để dựng component, **không** dùng làm trang (TXT:13, TXT:16).
- Không giả định ảnh trong composite có bản gốc độ phân giải đủ; ghi thiếu/mờ/không tách được. Crop làm đổi composition, thay artwork, tạo ảnh thay thế, dùng placeholder hiển thị → **phải duyệt trước**. Không bao giờ bịa ảnh địa phương hay bằng chứng (TXT:14).
- Ba bản đồ gốc giữ nguyên tuyệt đối (pixel, label, legend, credit, tỷ lệ); chữ in sẵn trong artwork không vẽ lại (TXT:48-49, TXT:1062-1063).
- Không chọn asset theo tên file số ảnh của Word (TXT:48, TXT:53).

### Thiết kế
- Diện mạo theo **ảnh của từng section**; bảng màu chung chỉ là legacy, không được tô lại section đã chọn (TXT:21, TXT:125-139). Font Merriweather (heading) + Inter (body), đúng file và weight; kiểm tra font tải thật (TXT:22).
- Header/footer: hành vi dùng chung, diện mạo theo ảnh section; không tự thêm/sắp xếp nhóm footer (TXT:23, TXT:194-205).
- Mọi thay đổi hiển thị (kể cả tinh chỉnh typography/spacing, sửa accessibility có thay đổi giao diện) → trình before/after và chờ duyệt (TXT:16, TXT:33, TXT:38).

### Quy trình
- Làm **Home pilot** trước, trình desktop + mobile + ảnh so sánh + số đo + danh sách mismatch; có duyệt rõ ràng mới làm trang khác. Câu hỏi chưa trả lời **không** phải là duyệt (TXT:15-17, TXT:38).
- So sánh ở khổ màn hình cố định đã ghi, sau khi font/ảnh tải xong; không tuyên bố pixel-perfect khi chưa so like-for-like (TXT:31).
- Ghi mọi số đo với trạng thái: explicit instruction / source-layout value / estimate / approved pilot measurement (TXT:25).

### Chức năng
- Bản đồ, bộ lọc thư viện, chia sẻ: **tĩnh** trong giới hạn đã duyệt (TXT:60).
- Ba form Supporter / A3 Story / A6 Petition: điều khiển thật, gửi email phía server tới người nhận cố định; không database, register, outbox bền, portal hay tự công bố (TXT:61). Đặc tả: [FORMS_SPEC](FORMS_SPEC.md).
- Blueprint **không** kích hoạt thu thập dữ liệu, tạo tài khoản, cấu hình credentials, gửi email thật hay deploy. Mỗi việc đó cần người dùng cho phép riêng (TXT:36, TXT:62, TXT:65). Công bố công khai, email chiến dịch, nộp cho County cần phê duyệt riêng (TXT:62).
- Đích chưa có → thông báo “Not available yet” (TXT:64).

### Kiểm tra trước khi coi là xong (TXT:67)
Hash asset và phạm vi; chữ hiển thị chính xác; font tải thật; layout desktop/phone/khổ trung gian; mọi điều khiển và đường quay lại; đích nguồn; bàn phím, focus, tương phản, reflow; trạng thái form trung thực; kiểm tra validation, bấm trùng, nhà cung cấp từ chối, timeout mơ hồ, file đính kèm bị từ chối — chỉ với dữ liệu giả trong phạm vi được phép. Screenshot tĩnh không chứng minh hành vi. Chi tiết: [ACCEPTANCE_CHECKLIST](ACCEPTANCE_CHECKLIST.md).
