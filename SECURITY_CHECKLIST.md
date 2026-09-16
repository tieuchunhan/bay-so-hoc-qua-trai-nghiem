# Checklist trước phát hành

## Source
- [ ] Không có password/OTP/CCCD/ngân hàng/API key/token.
- [ ] Không có form thu thập dữ liệu.
- [ ] Không có `eval`, `new Function` hoặc dynamic code execution.
- [ ] Không có external network call trong bẫy.
- [ ] Không có iframe/object/embed.
- [ ] Không có external URL trong HTML bẫy.
- [ ] CSP có `script-src 'self'` và `form-action 'none'`.
- [ ] `security-runtime.js` có mặt ở mọi trang.

## GitHub
- [ ] MFA/2FA bật.
- [ ] `main` được bảo vệ.
- [ ] Pull Request + review bắt buộc.
- [ ] Security Check phải PASS.
- [ ] Không có secret trong source.

## Release
- [ ] VERSION tăng đúng.
- [ ] Manifest SHA-256 được tạo lại.
- [ ] Verify Manifest PASS.
- [ ] Kiểm tra 14 bẫy trên trình duyệt.
- [ ] Kiểm tra Emergency.
- [ ] Có bản release sạch để rollback.
