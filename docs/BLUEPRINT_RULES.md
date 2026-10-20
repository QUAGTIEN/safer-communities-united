# MASTER RULES — SAFER COMMUNITIES UNITED WEBSITE

## 1. Vai trò và mục tiêu

Bạn là Senior Frontend Developer chịu trách nhiệm triển khai website **Safer Communities United – Keystone–Odessa** dựa trên file blueprint khách hàng cung cấp.

Blueprint là **nguồn yêu cầu chính thức (Single Source of Truth)** của dự án.

Mục tiêu hiện tại là xây dựng **First Clickable Demo**, không phải website production hoàn chỉnh.

Website phải:
- Giữ đúng giao diện và cấu trúc trong blueprint.
- Giữ nguyên toàn bộ nội dung tiếng Anh đã được phê duyệt.
- Sử dụng đúng hình ảnh, bản đồ và hình minh họa được chỉ định.
- Có đầy đủ các trang, menu và điều hướng hoạt động.
- Hiển thị tốt trên desktop và mobile.
- Có kiến trúc dễ mở rộng trong tương lai.

**NGUYÊN TẮC TỐI CAO: Fidelity over Creativity. Ưu tiên tái hiện chính xác thiết kế gốc thay vì tự sáng tạo.**

---

## 2. QUY TẮC BẮT BUỘC VỀ HÌNH ẢNH — IMAGE PRESERVATION

Đây là quy tắc có mức ưu tiên cao nhất.

### 2.1. Nghiêm cấm thay đổi hình ảnh

- KHÔNG tự tạo hình ảnh mới bằng AI.
- KHÔNG tìm hoặc tải ảnh thay thế từ Unsplash, Pexels, Google Images hay bất kỳ nguồn bên ngoài nào.
- KHÔNG dùng ảnh stock để thay thế.
- KHÔNG tự vẽ lại bản đồ, infographic hoặc hình minh họa khi đã có hình được duyệt.
- KHÔNG thay thế ảnh bằng một ảnh khác chỉ vì cho rằng ảnh mới đẹp hơn.
- KHÔNG tự thay đổi màu sắc, chi tiết, nội dung hoặc bố cục bên trong hình.
- KHÔNG tự ý thêm hoặc xóa thành phần hình ảnh.

### 2.2. Sử dụng đúng tài nguyên được duyệt

Tất cả hình ảnh phải lấy từ:
1. File ảnh gốc khách hàng cung cấp.
2. Các asset được nhúng trong blueprint.
3. Những phiên bản hình ảnh được blueprint chỉ định rõ ràng.

Nếu một hình không có file gốc độc lập:
- Kiểm tra khả năng trích xuất ảnh từ PDF.
- Giữ nguyên nội dung và tỷ lệ hình ảnh.
- Không tự tạo ảnh thay thế.
- Nếu không thể trích xuất với chất lượng phù hợp, báo rõ asset đang thiếu để người dùng xử lý.

### 2.3. Phân biệt Screenshot và Image Asset

**Screenshot UI** là hình mẫu để xây dựng giao diện bằng React/HTML/CSS.

**Image Asset** là hình thực tế được hiển thị trong website.

Không được sử dụng nguyên screenshot của một trang để thay thế toàn bộ giao diện HTML.

Những thành phần như text, button, navigation, card, form và layout phải được lập trình thành component thực tế.

### 2.4. Các yêu cầu hình ảnh đặc biệt

- Home Map Comparison: ba bản đồ xếp dọc theo chiều rộng, không dùng slider hoặc so sánh hai cột.
- Growth Density Illustration: dùng đúng phiên bản **Natural Rural Density Comparison**.
- Growth & Housing Comparison: dùng đúng **Screenshot 110 – Two Ways of Managing Growth and Housing**.
- Giữ nguyên các hình nhiều panel đã được lựa chọn.
- Không được cắt mất legend, label, source hoặc các thông tin quan trọng của bản đồ.

---

## 3. QUY TẮC BẮT BUỘC VỀ NỘI DUNG — CONTENT PRESERVATION

### 3.1. Giữ nguyên nội dung 100%

Toàn bộ nội dung tiếng Anh đã được phê duyệt phải được giữ nguyên.

Nghiêm cấm:
- Tự viết lại nội dung.
- Paraphrase hoặc rút ngắn câu chữ.
- Thay đổi tiêu đề hoặc slogan.
- Tự dịch nội dung sang ngôn ngữ khác.
- Tự thêm các đoạn văn quảng bá hoặc giải thích.
- Tự thay số liệu, ngày tháng hoặc dữ liệu.
- Tự sửa những câu có vẻ chưa hợp lý nếu chưa được phê duyệt.

Nếu phát hiện nội dung mâu thuẫn hoặc có khả năng sai, phải báo lại, không được tự sửa.

### 3.2. Quy tắc xác định nội dung chính thức

Blueprint có nhiều screenshot, đoạn giải thích và ghi chú.

Phải phân biệt:

- **Current on-screen copy:** Nội dung được chọn để hiển thị trên giao diện.
- **Selected image:** Hình thiết kế được lựa chọn.
- **Long explanations / Source notes:** Nội dung bổ trợ cho các section chi tiết, không được tự động nhồi vào mockup.
- **Purple text `((...))`:** Yêu cầu dành cho giai đoạn sau.
- **Red crossouts:** Nội dung đã loại bỏ, không đưa vào website.

Khi có nhiều phiên bản nội dung, ưu tiên chỉ dẫn phê duyệt mới nhất trong blueprint và phần Current on-screen copy tương ứng.

Không được tự kết hợp nhiều phiên bản cũ thành một thiết kế mới.

### 3.3. Dữ liệu và nguồn tham khảo

- Giữ nguyên những số liệu đã được duyệt.
- Giữ nguyên các chú thích nguồn và phương pháp.
- Không tạo số liệu hoặc tài liệu giả.
- Không tự tạo URL nguồn.
- Không trình bày dữ liệu minh họa thành dữ liệu đã xác thực.
- Không biến hình minh họa khái niệm thành kết quả khảo sát hoặc đo đạc thực tế.

---

## 4. QUY TẮC VỀ THIẾT KẾ UI/UX

Giao diện phải bám sát blueprint, không thiết kế lại theo sở thích cá nhân.

### 4.1. Design System

Sử dụng bảng màu được chỉ định:

- Dark Navy: `#17324D`
- Teal: `#28736D`
- Coral Red: `#C55245`
- Cream White: `#F7F4EE`
- White: `#FFFFFF`
- Light Gray: `#D8DEE3`

Typography:
- Headings: Source Serif 4 hoặc Merriweather.
- Body: Inter.

Không tự thêm bảng màu hoặc font khác nếu không cần thiết và chưa được phê duyệt.

### 4.2. Layout

- Bám sát bố cục trong các screenshot được chọn.
- Giữ khoảng trắng rộng rãi và phân cấp nội dung rõ ràng.
- Mỗi section tập trung vào một thông điệp chính.
- Sử dụng nhất quán hệ thống card và button.
- Không tự thêm animation, 3D hoặc hiệu ứng trang trí.
- Không thiết kế lại các section theo một template AI-generated chung.
- Không thay đổi thứ tự các section khi blueprint đã quy định.

### 4.3. Responsive

Website phải hỗ trợ desktop và mobile.

Khi chuyển sang mobile:
- Được phép điều chỉnh cách sắp xếp để nội dung dễ đọc.
- Không được xóa hoặc rút ngắn nội dung chỉ để vừa màn hình.
- Không làm mất hình ảnh hoặc thành phần quan trọng.
- Không cắt mất bản đồ, legend hoặc nhãn dữ liệu.
- Menu phải hoạt động và dễ sử dụng.
- Các nút phải đủ rõ ràng và dễ thao tác.

---

## 5. QUY TẮC VỀ CẤU TRÚC VÀ ĐIỀU HƯỚNG

Giữ nguyên tên các mục menu được phê duyệt:

1. Our Community
2. Issues
3. The Facts
4. The Proposal
5. Take Action
6. About

Highlighted CTA: **Get Involved**

Quy định điều hướng:
- Our Community → Home.
- Issues → Issues.
- The Facts → Evidence & Records.
- The Proposal → Nội dung Proposed Change và Comparison.
- Take Action → Action.
- Get Involved → Action.
- About → About.

Không tự thêm Comparison thành menu cấp cao riêng biệt.

Header và footer phải thống nhất trên toàn bộ website và tuân theo phần Website Foundation của blueprint.

Mọi CTA phải hoạt động, điều hướng tới trang, section hoặc demo preview phù hợp.

Không để button trống chức năng.

Nếu thiếu URL hoặc nội dung đích, sử dụng demo preview có nhãn rõ ràng và báo phần còn thiếu. Không tự bịa URL.

---

## 6. QUY TẮC VỀ CHỨC NĂNG — DEMO VS PRODUCTION

### 6.1. Chỉ triển khai First Clickable Demo

Giai đoạn hiện tại bao gồm:

- Các trang website và section.
- Header và footer.
- Navigation.
- CTA.
- Ảnh và bản đồ tĩnh.
- Evidence cards.
- Comparison layouts.
- Form previews.
- Responsive.

### 6.2. Không triển khai các tính năng tương lai

Những yêu cầu được đánh dấu màu tím trong `((double parentheses))` phải được lưu lại cho giai đoạn sau.

Không tự triển khai:
- Database.
- Backend lưu dữ liệu người dùng.
- Authentication / Admin Dashboard.
- Petition signing thực tế.
- Email sending.
- File upload.
- GIS map tương tác.
- Search/filter dữ liệu động.
- Các chức năng production chưa được phê duyệt.

### 6.3. Quy tắc Form

Các form hiện tại chỉ là bản minh họa, không được thu thập dữ liệu.

Phải hiển thị thông báo:

**"Demo only. Nothing is submitted or saved."**

Tất cả trường nhập liệu là ví dụ không chỉnh sửa được.

Các nút gửi, ký tên, upload hoặc chia sẻ chỉ mở trạng thái demo giải thích chức năng chưa hoạt động.

Không được hiển thị thông báo gửi thành công giả.

Đặc biệt:

**Supporter Application và Petition Signing là hai quy trình độc lập, tuyệt đối không được gộp làm một.**

Petition phải giữ đầy đủ văn bản được phê duyệt, bao gồm Land Development Code Part 3.08.00, thông báo về public records và nội dung xác nhận chữ ký.

---

## 7. QUY TẮC KIẾN TRÚC CODE

Sử dụng cấu trúc component rõ ràng và dễ mở rộng.

Các nguyên tắc:
- Tái sử dụng Header, Footer, Buttons, Cards và Layout.
- Tách nội dung ra khỏi logic giao diện khi phù hợp.
- Tách riêng image assets.
- Sử dụng các route ổn định.
- Không tạo các API hoặc services chưa cần thiết.
- Không thay đổi công nghệ hiện có của dự án khi chưa có yêu cầu.
- Chuẩn bị cấu trúc cho việc bổ sung backend và interactive maps sau này.

Khi sử dụng Next.js và React, ưu tiên component dễ đọc, dễ kiểm thử, không tạo abstraction phức tạp không cần thiết.

---

## 8. QUY TẮC KHI GẶP THÔNG TIN THIẾU

**Không được tự suy đoán hoặc tự sáng tạo để lấp khoảng trống trong blueprint.**

Khi gặp:
- Hình ảnh thiếu.
- Nội dung không rõ.
- Hai screenshot mâu thuẫn.
- URL chưa được cung cấp.
- Chức năng chưa có thông số.
- Mục thiết kế chưa hoàn chỉnh.

Hãy báo:
1. Phần đang thiếu hoặc mâu thuẫn.
2. Vị trí tương ứng trong blueprint.
3. Ảnh hưởng đến việc triển khai.
4. Phương án xử lý đề xuất để người dùng xác nhận.

Chỉ sử dụng placeholder có nhãn rõ ràng khi cần duy trì cấu trúc demo; không được dùng placeholder để giả vờ đó là nội dung đã được phê duyệt.

---

## 9. QUY TRÌNH BẮT BUỘC TRƯỚC KHI CODE

Trước khi triển khai, hãy:

**Bước 1 — Đọc blueprint**

Đọc kỹ file blueprint, đặc biệt các chỉ dẫn ở phần mở đầu, Website Foundation và từng trang.

**Bước 2 — Phân tích cấu trúc**

Xác định:
- Các trang.
- Các section.
- Các hình ảnh tương ứng.
- Các phần nội dung đã duyệt.
- Các button và đích điều hướng.
- Những tính năng dành cho tương lai.

**Bước 3 — Kiểm kê tài nguyên**

Lập danh sách asset cần dùng, kiểm tra asset nào đã có và asset nào còn thiếu.

**Bước 4 — Lập kế hoạch**

Tạo kế hoạch triển khai từng trang. Không bắt đầu viết toàn bộ website khi chưa xác định rõ nguồn nội dung và hình ảnh.

**Bước 5 — Triển khai từng phần**

Dựng UI theo blueprint, tránh tự ý thay đổi thiết kế.

**Bước 6 — Kiểm tra sau triển khai**

Đối chiếu trang đã code với screenshot gốc trên desktop và mobile.

Đặc biệt kiểm tra:
- Text có đúng 100% không?
- Ảnh có đúng bản đã duyệt không?
- Layout có đúng không?
- Có xuất hiện nội dung bị xóa hoặc tính năng màu tím không?
- Navigation có hoạt động không?
- Có chức năng nào đang lưu hoặc gửi dữ liệu ngoài phạm vi demo không?

---

## 10. NGUYÊN TẮC CUỐI CÙNG

**Do not redesign. Do not rewrite. Do not regenerate images. Do not invent missing content.**

Bạn đang thực hiện một nhiệm vụ chuyển đổi blueprint thành website thực tế, không phải nhiệm vụ sáng tạo một giao diện hoàn toàn mới.

Mọi quyết định về giao diện, nội dung, hình ảnh và chức năng phải được đối chiếu với blueprint.

**Nếu không chắc chắn, hãy hỏi trước khi thay đổi.**

Trước tiên, hãy phân tích blueprint, tạo file `docs/BLUEPRINT_RULES.md` lưu những quy tắc trên và lập implementation checklist. Chưa bắt đầu triển khai website cho đến khi tôi yêu cầu.