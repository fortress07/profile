# Fortress — Võ Phú Vinh | Security Researcher

Trang portfolio cá nhân của **Võ Phú Vinh (Fortress)** — sinh viên An toàn thông tin tại HCMUTE, tập trung vào vulnerability research & responsible disclosure trên các dự án mã nguồn mở.

🔗 **Live:** https://fortress07.github.io/profile/

## Nội dung

- Giới thiệu bản thân & hướng nghiên cứu
- Danh sách finding đã được ghi nhận — CVE, advisory publish nhưng không xin CVE, và bug bounty — kèm phân tích kỹ thuật và đoạn code gây lỗi
- Mỗi writeup có ba sơ đồ SVG: cơ chế dự án, đường đi của lỗ hổng, và vị trí chính xác trong code
- Bảng thống kê điểm CVSS ở đầu trang writeup
- Timeline các cột mốc disclosure
- Song ngữ Việt / Anh (nút VI/EN trên thanh điều hướng)

## Công nghệ

- HTML / CSS / JavaScript thuần — không build step, không dependency
- `index.html` (markup) · `styles.css` (giao diện) · `app.js` (i18n, routing, terminal, biểu đồ)
- Deploy tĩnh bằng GitHub Pages

## Chạy thử local

Chỉ cần mở `index.html` bằng trình duyệt, hoặc chạy một static server bất kỳ:

```bash
npx serve .
```

## Cập nhật nội dung

Các con số thống kê (số CVE, số dự án, số lớp CWE), bảng điểm CVSS ở trang writeup và số ảnh trong slideshow đều được đếm tự động từ DOM. Khi có finding mới, chỉ cần thêm một `<article class="cve">` mới (kèm chuỗi i18n tương ứng trong `app.js`) — mọi con số trên trang tự cập nhật.

Quy trình sửa đổi: tạo branch → commit → mở Pull Request → merge vào `main`. GitHub Pages sẽ tự deploy lại sau khi merge.

## Liên hệ

- Email: vophuvinh15012007@gmail.com
- GitHub: [@fortress07](https://github.com/fortress07)
- Facebook: [f0r7r355](https://www.facebook.com/f0r7r355)
