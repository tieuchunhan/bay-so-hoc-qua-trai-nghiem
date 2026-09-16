# Kiến trúc an ninh, an toàn thông tin

## 1. Phân tách
Website GitHub Pages chỉ chứa nội dung công khai và mô phỏng. Dashboard tập trung và dữ liệu người học không đặt trong repository public.

## 2. Hàng rào source
`main` là nhánh phát hành; phát triển qua branch + Pull Request. Security Check phải PASS trước merge. CODEOWNERS yêu cầu review.

## 3. Hàng rào trình duyệt
CSP không dùng `unsafe-inline`; `form-action 'none'`; không iframe/object/embed; chỉ script same-origin; không external network cho bẫy.

## 4. Simulation-only
Các nút chỉ thay đổi giao diện/reveal bài học và ghi tiến trình cục bộ ở mức tối thiểu. Không thu thập giá trị form và không gửi dữ liệu ra ngoài.

## 5. Integrity
Mỗi release có manifest SHA-256. Manifest được kiểm tra trong CI. Khi thay đổi ngoài quy trình, release phải được xác minh lại.

## 6. Emergency
`security/emergency.json` cho phép đưa website vào màn hình bảo trì. Đây là biện pháp ứng phó, không phải ranh giới bảo mật độc lập. Khi vận hành chính thức nên đặt kill switch trên origin/tài khoản độc lập.

## 7. Khôi phục
Giữ release/tag sạch. Khi có sự cố: isolate → preserve evidence → revoke credentials → rollback → verify → redeploy → monitor.
