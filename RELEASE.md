# RELEASE.md

## Phát hành
1. Tạo branch `feature/...`.
2. Sửa nội dung/bẫy.
3. Chạy `python scripts/security-check.py`.
4. Chạy `python scripts/generate-manifest.py`.
5. Chạy `python scripts/verify-manifest.py`.
6. Mở Pull Request.
7. Review nội dung + kiểm tra website.
8. Merge vào `main`.
9. Tạo tag/release theo phiên bản.

## Khi có sự cố
1. Tạm dừng quảng bá/QR.
2. Bật Emergency.
3. Không xóa lịch sử commit.
4. Kiểm tra tài khoản, collaborators, branch rules, workflows và commit gần nhất.
5. Thu hồi/đổi credential nếu cần.
6. Rollback về release sạch.
7. Chạy lại security-check và manifest verification.
8. Kiểm tra thủ công 14 bẫy.
9. Chỉ mở lại khi đã xác minh.
