# Cấu hình GitHub cho Bẫy Số

Thiết lập trên repository trước khi công khai:

- Bật MFA/2FA cho tài khoản quản trị.
- `main`: protected/ruleset.
- Require pull request before merging.
- Require at least 1 approval.
- Require status check `Security Check`.
- Restrict force-push.
- Restrict branch deletion.
- Hạn chế quyền push trực tiếp vào `main`.
- Kiểm tra Actions permissions; workflow chỉ dùng quyền tối thiểu `contents: read`.
- Không lưu secret trong source. Secret phải dùng GitHub Actions Secrets/Variables hoặc secret manager phù hợp.

Quy trình:
feature/* → Pull Request → Security Check → Review → main → GitHub Pages.
