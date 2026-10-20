# Hướng dẫn kỹ thuật — Next.js, React, Tailwind CSS, shadcn/ui

## 1. Phạm vi và nguồn yêu cầu

Người dùng đã xác nhận **Next.js + React** là công nghệ chính và yêu cầu tham khảo ba nguồn chính thức bên dưới. Đã đọc các mục liên quan ngày **20/10/2026**. Đây là hướng dẫn kỹ thuật của dự án, không phải nội dung UI hoặc yêu cầu bổ sung của blueprint.

- [Next.js Documentation](https://nextjs.org/docs).
- [Tailwind CSS Documentation](https://tailwindcss.com/docs).
- [shadcn/ui Documentation](https://ui.shadcn.com/docs).

[Master Rules](BLUEPRINT_RULES.md), [agent.md](../agent.md) và [cấu trúc blueprint](../structure.md) tiếp tục điều chỉnh nội dung, ảnh, thiết kế, điều hướng và ranh giới demo. Ví dụ, theme, stock image, demo form, animation hoặc backend trong tài liệu thư viện không phải tài nguyên/yêu cầu được duyệt của dự án.

**Cập nhật theo người dùng:** [PROJECT_DECISIONS.md](PROJECT_DECISIONS.md) cho phép tìm nguồn khác cho photo minh họa/trang trí được [inventory](IMAGE_REPLACEMENT_AUDIT.md) xác định. Đây không cho phép dùng ảnh từ template thư viện tùy ý, thay map gốc hoặc thay approved technical illustrations. Ba map gốc luôn giữ nguyên.

**Cập nhật lượt 1:** đã tạo ứng dụng tại root theo yêu cầu người dùng. Phiên bản cài thực tế và cách chạy xem [README](../README.md); [báo cáo lượt 1](CODING_ROUND_01.md) ghi kiểm tra đã chạy. Các ghi chú “chưa có ứng dụng” bên dưới mô tả thời điểm nghiên cứu ban đầu.

## 2. Phiên bản và cấu hình trước triển khai

- Trước code, kiểm tra `package.json`, lockfile và config thực tế; tại thời điểm lập tài liệu chưa có ứng dụng hoặc lockfile để xác định phiên bản cài đặt.
- Không coi phiên bản hiển thị trên website tài liệu là phiên bản dự án đã chọn. Kiểm tra lại tài liệu đúng major version khi triển khai; không tự nâng major hoặc ghi đè cấu hình có sẵn.
- Tailwind và shadcn/ui là các nguồn kỹ thuật được yêu cầu tham khảo. Chỉ cấu hình/thêm dependency khi bước triển khai được yêu cầu và thành phần thực sự cần.
- Các lựa chọn App Router, module organization và component boundaries dưới đây là hướng triển khai kỹ thuật, không làm phát sinh trang, route hay chức năng mới ngoài blueprint.

## 3. Next.js + React

### Layout, route và điều hướng

- Nếu khởi tạo mới, ưu tiên App Router. Dùng layout chung cho header/footer và page cho nội dung theo sitemap đã xác nhận; không quyết định số URL bằng số screenshot.
- Dùng `next/link` cho điều hướng route nội bộ, anchor cho section và liên kết nguồn được cung cấp cho tài liệu ngoài. Giữ đúng nhãn menu/CTA; không tạo đích giả để hoàn thiện routing.
- The Proposal tiếp tục có Compare the Two Plans tới Comparison anchor; hướng dẫn routing không tạo lý do thêm menu Comparison riêng.

Nguồn: [Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages), [Linking and Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating).

### Server và Client Components

- App Router mặc định dùng Server Components cho layout/page. Giữ nội dung, source cards và copy tĩnh ở phía này để hạn chế JavaScript gửi tới trình duyệt.
- Chỉ đặt `use client` ở thành phần cần state/event handlers như mobile menu, đóng/mở demo preview. Không đánh dấu toàn bộ trang/layout là client vì một nút tương tác.
- Props qua server/client boundary phải phù hợp cơ chế serialization của React. Không thêm global state, effects hoặc provider khi chưa có nhu cầu thực tế.
- Trong dự án này, Server Components không đồng nghĩa được triển khai backend thu thập dữ liệu. Không tạo Server Actions/Route Handlers nhận signup, petition, upload hoặc story trong demo.

Nguồn: [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components). Việc giới hạn phạm vi dữ liệu là quy tắc của dự án.

### Hình ảnh và font

- Khi dùng `next/image`, cung cấp đúng kích thước/tỷ lệ hoặc bố trí container phù hợp; alt text mô tả và responsive sizing phải tương ứng layout thực tế.
- Dùng tài nguyên được blueprint phê duyệt và ngoại lệ photo thay thế theo chỉ dẫn người dùng mới nhất. Map gốc không crop/filter/đổi pixel; cách tối ưu/hiển thị phải giữ nguyên nội dung, tỷ lệ và độ nét legend. Không dùng technical pipeline làm biến đổi map; giữ file nguyên gốc và link full-size đã được cung cấp.
- Ba map khóa phải được phục vụ trực tiếp bằng đúng file PNG gốc; không đưa qua pipeline tái mã hóa/nén/chuyển WebP/AVIF. Có thể điều chỉnh kích thước hiển thị theo tỷ lệ, nhưng không tạo file map đã biến đổi hoặc che/cắt thông tin.
- Dùng `next/font` khi phù hợp để tải **Inter** và **Source Serif 4 hoặc Merriweather**. Nếu có file font local được cung cấp thì dùng đúng file; không sao chép font mẫu như Geist từ tutorial thay cho blueprint.

Nguồn kỹ thuật: [Image Optimization](https://nextjs.org/docs/app/getting-started/images), [Font Optimization](https://nextjs.org/docs/app/getting-started/fonts). Các hạn chế sửa ảnh/font xuất phát từ blueprint và Master Rules.

### Tổ chức component của dự án

- Tách page composition, shared layout, UI primitives, content và asset references; tên/độ sâu thư mục sẽ xác định khi triển khai, không tạo kiến trúc thừa trước.
- Giữ English copy nguyên văn trong content modules khi phù hợp, có tham chiếu trang PDF/selected visual để đối chiếu; không dùng content mapping để rút gọn hay viết lại câu chữ.
- State chỉ phục vụ tương tác demo được cho phép. Không lưu thông tin cá nhân hoặc gắn dịch vụ vào form preview.

## 4. Tailwind CSS

- Với Next.js, dùng [hướng dẫn cài đặt cho Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs), không áp dụng hướng dẫn Vite mà trang docs tổng quan có thể mở mặc định.
- Hướng dẫn hiện tại dùng `@tailwindcss/postcss` và CSS import Tailwind. Chỉ áp dụng khi phù hợp phiên bản được chọn; không trộn setup major cũ/mới hoặc tự migrate cấu hình có sẵn.
- Ánh xạ palette/font/spacing của blueprint vào token thống nhất. Tài liệu hiện tại hỗ trợ theme variables qua `@theme`; nếu tham chiếu CSS variables khác, kiểm tra cách dùng `@theme inline`. Không lấy màu/font mặc định làm thiết kế dự án. Nguồn: [Theme Variables](https://tailwindcss.com/docs/theme).
- Viết layout mobile trước và dùng breakpoint variants cho màn hình lớn. Responsive chỉ sắp xếp lại nội dung, không cắt copy/ảnh/legend. Ba bản đồ Home vẫn xếp dọc ở mọi breakpoint. Nguồn: [Responsive Design](https://tailwindcss.com/docs/responsive-design).
- Dùng class hoàn chỉnh trong source hoặc map variant rõ ràng; không nội suy class kiểu `bg-${color}-600` vì Tailwind không phân tích phép nối chuỗi để suy ra utility. Nguồn: [Detecting Classes](https://tailwindcss.com/docs/detecting-classes-in-source-files).
- Không dùng utility để thêm animation/hiệu ứng/trang trí hoặc thay đổi thứ tự section ngoài blueprint. Kiểm tra CSS build thực tế, không chỉ giao diện dev.

## 5. shadcn/ui

- shadcn/ui cung cấp source component có thể chỉnh theo design system. Dùng chọn lọc thành phần thật sự cần, ví dụ button hoặc dialog cho demo preview; không đưa template/blocks/theme của thư viện vào thay layout đã duyệt. Nguồn: [Introduction](https://ui.shadcn.com/docs).
- Khi triển khai, kiểm tra config/import aliases và Tailwind trước khi thêm component. Nếu dự án đã tồn tại, theo phần Existing Project thay vì scaffold đè. Chưa chạy CLI hoặc cài package ở bước lập tài liệu. Nguồn: [Next.js Installation](https://ui.shadcn.com/docs/installation/next).
- Theme qua CSS variables/semantic tokens khi phù hợp. Map background/foreground/primary/border và font về đúng blueprint; token defaults không được tự đổi màu, độ bo, shadow hoặc font trong thiết kế. Nguồn: [Theming](https://ui.shadcn.com/docs/theming).
- Giữ hành vi bàn phím/focus phù hợp khi tùy biến component; đối chiếu tài liệu component cụ thể khi thực sự dùng. Không coi việc dùng thư viện là đã hoàn tất accessibility QA.
- Form/Checkbox/Input trong ví dụ tài liệu không cho phép mở nhập liệu thật trong dự án. Supporter và petition vẫn tách riêng, fields không chỉnh sửa, đủ demo notice và không có submit/save thật.

## 6. Kiểm tra khi triển khai được yêu cầu

- Chạy build, lint và typecheck theo package scripts và phiên bản thực tế; không mặc định một lệnh còn tồn tại ở mọi Next.js version.
- Kiểm tra route/anchor/CTA, asset loading, responsive CSS, hydration và mobile menu/preview bằng bàn phím.
- Đối chiếu copy, ảnh và layout với blueprint trên desktop/mobile; kiểm tra form không nhận/lưu/gửi dữ liệu, không có dịch vụ tương lai được bật.
- Ghi kết quả thật trong [implementation checklist](IMPLEMENTATION_CHECKLIST.md); chỉ đánh dấu pass sau kiểm tra. Tài liệu này chưa xác nhận một ứng dụng đã được cài hoặc build thành công.
