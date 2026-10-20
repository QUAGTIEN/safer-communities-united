# GitHub Pages — public static demo

Địa chỉ đã cấu hình: https://quagtien.github.io/safer-communities-united/

Người dùng yêu cầu dùng link GitHub trước: “thôi, nếu vậy tôi tạo link bằng git trước được không”. Phạm vi là xuất bản static demo hiện có qua GitHub Pages; không mở backend, form submission hoặc production campaign. Trạng thái coding hiện hành xem [kế hoạch](CODING_PLAN.md).

## Cách xuất bản

- Repository Pages được đặt `build_type: workflow` (GitHub Actions).
- `.github/workflows/pages.yml` chạy khi push `main` hoặc được chạy thủ công. Build và deploy là hai jobs liên kết; artifact chỉ lấy `out/`, không xuất bản PDF, source archive hoặc docs của repo.
- Runner Ubuntu / Node 24, `npm ci`, `npm run build`. Lệnh build giữ asset sync/checksums trước build và static-export finalizer sau build. Không dùng riêng `next build` để tránh bỏ prebuild/postbuild.
- Build Pages đặt `NEXT_PUBLIC_BASE_PATH=/safer-communities-united`. Next tự prefix navigation/CSS/JS/fonts; asset bindings prefix direct image/full-size URLs, không sửa bytes ảnh.
- Thêm `.nojekyll` vào artifact. Deploy job chỉ có Pages write / ID token write; build job chỉ có contents read.
- Local/Vercel không đặt biến trên nên tiếp tục chạy từ `/`. Không sửa cấu hình tài khoản Vercel hoặc khẳng định lỗi Vercel đã được giải quyết.

Theo dõi build/deploy tại https://github.com/QUAGTIEN/safer-communities-united/actions/workflows/pages.yml . Push mới lên `main` sẽ cập nhật link demo sau khi workflow thành công.

## Kiểm tra khi thiết lập lần đầu (trước lượt 7)

- Build với base path và TypeScript qua.
- Static server mô phỏng subdirectory: chín route HTTP 200, đúng section counts (Home 6, Issues 6, Roads 8, Water 9, Growth 8), bốn route previews giữ nhãn.
- Kiểm tra 320/390/768/1440 px không tràn ngang; sáu desktop menu destinations có active state đúng, mobile menu đóng khi chuyển trang, Issue/Comparison links giữ đúng repo prefix.
- Toàn bộ 112 public image assets HTTP 200 và SHA-256 khớp manifest, gồm ba original maps. Direct image URLs không qua re-encoding hoặc optimizer.
- Không console/runtime errors, HTTP 4xx/5xx, request thoát repo prefix, external/write requests, cookies hoặc web storage trong lượt QA local.
- Shared navigation/footer và nội dung lượt 1–6 giữ nguyên. Giới hạn dữ liệu/ảnh và các preview chưa hoàn thiện vẫn như các báo cáo trước.

QA scripts/screenshots ở `tmp/github-pages-qa/`; [kết quả local](github-pages-checks.json). Kết quả workflow và HTTP thực tế trên link công khai được kiểm tra khi xuất bản, không suy từ build local.

The Facts được bổ sung ở lượt 7; [báo cáo và kiểm tra](CODING_ROUND_07.md) ghi phạm vi mới và giới hạn.

The Proposal & Comparison được bổ sung ở lượt 8; [báo cáo và kiểm tra](CODING_ROUND_08.md) ghi P-01/C-01…C-04, hai route previews còn lại và các giới hạn nguồn/ảnh.
