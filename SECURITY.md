# SECURITY.md — Bẫy Số B'Lao v1.1

## Mục tiêu
Nền tảng chỉ phục vụ tuyên truyền và mô phỏng. Thiết kế theo nguyên tắc dữ liệu tối thiểu và simulation-only.

## Phạm vi bảo vệ
- Repository/source code.
- Website public.
- 14 tình huống mô phỏng.
- Quy trình phát hành và khôi phục.
- Dữ liệu thống kê (khi triển khai backend).

## Quy tắc bắt buộc
1. Không đưa mật khẩu, OTP, API key, token, dữ liệu ngân hàng, CCCD hoặc dữ liệu nghiệp vụ vào repository.
2. Không tạo form thu thập dữ liệu thật trong các bẫy.
3. Không kết nối các bẫy tới ngân hàng, cổng thanh toán, VNeID, tài khoản mạng xã hội hoặc hệ thống nghiệp vụ.
4. Không push trực tiếp vào `main`.
5. Mọi thay đổi phải qua Pull Request, Security Check và review.
6. Bật MFA/2FA cho tài khoản quản trị GitHub.
7. Giữ một bản release sạch để rollback.
8. Khi nghi ngờ bị can thiệp: tạm dừng website/bẫy, kiểm tra commit và quyền truy cập, rollback, sau đó mới mở lại.

## Nếu website có dấu hiệu bị biến thành “bẫy thật”
- Không tiếp tục quảng bá/QR cho tới khi xác minh.
- Bật Emergency Kill Switch.
- Khóa/đổi thông tin xác thực tài khoản quản trị nếu nghi ngờ bị chiếm quyền.
- Kiểm tra collaborators, branch rules, workflows, recent commits và deployment.
- Khôi phục từ release đã kiểm duyệt.
- Chạy Security Check + Verify Manifest.
- Kiểm tra thủ công website sau khôi phục.

## Báo cáo sự cố
Không gửi mật khẩu, OTP hoặc dữ liệu cá nhân trong báo cáo. Ghi nhận URL, thời điểm, mô tả dấu hiệu, ảnh chụp nếu cần và commit/release liên quan.
