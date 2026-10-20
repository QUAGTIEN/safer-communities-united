# Safer Communities United — Keystone–Odessa

First Clickable Demo theo blueprint khách hàng. **Lượt 1–8 đã hoàn thành trong phạm vi demo.** Home H-01…H-06; Issues I-01…I-06; Roads R-01…R-08; Water W-01…W-09; Growth L-01…L-08; The Facts F-01/F-02; The Proposal P-01 intro preview và C-01…C-04. Take Action/About vẫn labelled previews; lượt 9 chưa bắt đầu. [Báo cáo lượt 8](docs/CODING_ROUND_08.md).

## Link demo GitHub Pages

https://quagtien.github.io/safer-communities-united/

Push lên `main` chạy [workflow Pages](.github/workflows/pages.yml): Node 24 → npm ci → npm run build → publish out/. [Hướng dẫn và kiểm tra](docs/GITHUB_PAGES.md). Link chỉ cập nhật sau khi workflow thành công. Local vẫn chạy ở `/`; base path Pages chỉ bật trong workflow.

## Chạy local

Node.js >= 20.9.0 và npm. Đã kiểm tra bằng Node 24.13.1, npm 11.8.0 trên Windows.

```sh
npm ci
npm run dev
```

Mở URL `Local` mà terminal in ra (mặc định [http://127.0.0.1:3000](http://127.0.0.1:3000)). Dev server chỉ bind loopback. Dừng bằng Ctrl+C trong terminal chạy server.

```sh
npm run build
npm run lint
npm run typecheck
```

Build tạo static export tại `out/`; workflow Pages xuất bản static demo theo yêu cầu mới. `predev` và `prebuild` tự đồng bộ asset và dữ liệu nguồn. Nếu chạy typecheck trước dev/build lần đầu, chạy `npm run assets:sync` trước. `package-lock.json` khóa phiên bản dependency; dùng npm cho dự án này.

`postbuild` chạy `scripts/finalize-static-export.mjs` để bổ sung đúng tên file segment RSC khi Next 16.4.2 export trên Windows (copy đúng byte, không sửa framework). Không bỏ bước này khi phục vụ `out/` bằng static server trên Windows.

## Công nghệ và cấu trúc

- Next.js 16.4.2 App Router, React 19.3.1, TypeScript 5.9.3.
- Tailwind CSS 4.3.3; shadcn/ui Button/Card/Dialog với Radix, đã chỉnh theo blueprint, không dùng template/theme thư viện.
- Inter và Source Serif 4 dùng file WOFF2 local từ Fontsource qua `next/font/local`; trình duyệt không cần tải font từ Google.
- `src/app/`: root layout và 9 route; page/layout mặc định Server Components.
- `src/components/layout/`: wordmark chữ, header/menu responsive, footer và container.
- `src/components/ui/`: component nền tảng; `src/components/demo/`: labelled route/section previews và modal; `src/components/home/`: Home; `src/components/content/`: map figure và source links.
- `src/content/site.ts`, `pages.ts`: nhãn, route, headings và placeholder destinations tách khỏi UI.
- `scripts/sync-assets.mjs`: kiểm tra nguồn bằng SHA-256 rồi copy đúng byte 3 maps/79 photo crops/12 illustrative document-cover fragments/28 screenshot visual regions vào `public/assets/`; tạo `assets.generated.json` và `blueprint.generated.json` chứa bindings và 57 source sections.
- `src/content/home.ts`: copy Home tách khỏi presentation; `src/content/sources.ts`: URL chính xác từ source register. Home giữ plain-text methodology và caveat Water theo D-04.
- `src/content/issues.ts`, `src/components/issues/`, `src/app/issues/issues.css`: sáu section Issues, anchor navigation, timeline và sơ đồ Connections bằng React. Ba source previews giữ trạng thái chưa xác minh; map screenshot từ `visual-fragments.json` bảo toàn pixel/legend.
- `src/content/roads.ts`, `src/components/roads/`, `src/app/issues/roads-safety/roads.css`: tám section Roads, safety anchors, evidence cards và summary comparison. Hero thiếu ảnh dùng labelled preview; Safety finding/metadata chưa xác minh, không thêm crash counts/response-time data. Hai bìa và document thumbnails chỉ là screenshot illustrations, không thay tài liệu gốc.
- `src/content/water.ts`, `src/components/water/`, `src/app/issues/water-septic/water.css`: chín section Water, conceptual illustrations, record-scope caveats, utility-route exceptions và Core Conflict đúng concise copy. Dataset/chart inputs/evidence metadata chưa xác minh có nhãn; không layer map hoặc backend.
- `src/content/growth.ts`, `src/components/growth/`, `src/app/issues/growth-daily-life/growth.css`: tám section Growth, selected density, static services map và comparison/evidence. Sample counts/drive-time caveats giữ rõ; missing policy map/timeline/Master Assessment/datasets dùng labelled previews.
- `src/content/facts.ts`, `src/components/facts/`, `src/app/the-facts/facts.css`: bốn issue groups, năm illustrative library rows, grouped supplied-source links và Evidence → Action. Metadata/purpose unverified giữ nhãn; search/filter/sort/pagination chỉ có demo preview, không fake result count.
- `src/content/proposal.ts`, `src/components/proposal/`, `src/app/the-proposal/proposal.css`: bốn comparisons theo PDF 61–68, đúng Screenshot 110, What Remains diagram và campaign passage. Intro/full-detail documents chưa có dùng labelled previews; policy/source/illustration limits giữ rõ.
- `assets/blueprint/`: archive bất biến; `assets/demo-current/`: crop tạm đã duyệt. Không sửa nguồn trong hai thư mục này khi chỉnh UI.

## Phạm vi và giới hạn

Bổ sung theo yêu cầu sau lượt 6: crossfade khi đổi route, smooth anchor scroll, hỗ trợ reduced-motion; footer thêm thông tin khu vực, social và copyright/Terms/Privacy có nhãn Demo version. [Báo cáo và kiểm tra](docs/NAVIGATION_FOOTER_UPDATE.md). Social URLs/email/legal text thật vẫn là labelled previews.

Giữ nguyên English copy đã chọn, sáu mục menu và Get Involved. Comparison nằm trong The Proposal. Các footer destinations thiếu nội dung mở demo preview, không bịa policy/contact details. Logo độc lập chưa được cung cấp nên dùng wordmark bằng chữ; favicon để trống có chủ ý.

Header dùng sticky để luôn ở trên khi cuộn; menu mobile mở trong luồng bố cục, đẩy nội dung xuống. Dialog có focus trap, Escape và trả focus về nút mở. Có skip link và trạng thái trang hiện hành.

Không có form nhận dữ liệu, API endpoint, Server Action, analytics, database, email/upload/signature services hoặc web storage. Metadata đặt noindex/nofollow. Chỉ xuất bản static demo GitHub Pages theo yêu cầu mới. Các preview không phải xác nhận đã ký/gửi/lưu thành công.

Home dùng ảnh tạm đã chốt, ba bản đồ gốc xếp dọc full-width và liên kết mở file PNG đầy đủ. Bốn card ảnh còn giới hạn độ phân giải ở DPR 2; hero desktop cũng chưa đủ pixel cho DPR 2 ở mọi khung. Không nâng nét/AI/re-encode bản đồ. Community Plan card dùng đúng fragment screenshot và nhãn “Illustrative document preview”; không coi hình đó là official record. Xem số đo trong báo cáo lượt 2.

## Tài liệu

- [Quy tắc dự án](agent.md), [quyết định hiện hành](docs/PROJECT_DECISIONS.md).
- [Kế hoạch 11 lượt](docs/CODING_PLAN.md), [checklist](docs/IMPLEMENTATION_CHECKLIST.md).
- [Báo cáo lượt 1](docs/CODING_ROUND_01.md).
- [Báo cáo lượt 2](docs/CODING_ROUND_02.md), [kết quả kiểm tra Home](docs/coding-round-02-checks.json).
- [Báo cáo lượt 3 và giới hạn nguồn/ảnh](docs/CODING_ROUND_03.md), [kết quả kiểm tra Issues](docs/coding-round-03-checks.json).
- [Báo cáo lượt 4 và giới hạn nguồn/ảnh](docs/CODING_ROUND_04.md), [kết quả kiểm tra Roads](docs/coding-round-04-checks.json).
- [Báo cáo lượt 5 và giới hạn nguồn/ảnh](docs/CODING_ROUND_05.md), [kết quả kiểm tra Water](docs/coding-round-05-checks.json).
- [Báo cáo lượt 6 và giới hạn nguồn/ảnh](docs/CODING_ROUND_06.md), [kết quả kiểm tra Growth](docs/coding-round-06-checks.json).
- [Báo cáo lượt 7 và giới hạn nguồn/ảnh](docs/CODING_ROUND_07.md), [kết quả kiểm tra The Facts](docs/coding-round-07-checks.json).
- [Chất lượng ảnh](docs/IMAGE_QUALITY_REVIEW.md), [cấu trúc blueprint](structure.md).
- [Nguồn component/font và giấy phép](docs/THIRD_PARTY_NOTICES.md).

Tài liệu kỹ thuật áp dụng: [Next.js](https://nextjs.org/docs/app/getting-started/installation), [Tailwind với Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs), [shadcn Radix Button](https://ui.shadcn.com/docs/components/radix/button), [Dialog](https://ui.shadcn.com/docs/components/radix/dialog). Bản Next đã cài cũng có hướng dẫn tại `node_modules/next/dist/docs/`.
