# Fortress — Võ Phú Vinh | Security Researcher

Trang portfolio cá nhân của **Võ Phú Vinh (Fortress)** — sinh viên An toàn thông tin tại HCMUTE, tập trung vào vulnerability research & responsible disclosure trên các dự án mã nguồn mở.

🔗 **Live:** https://fortress07.github.io/profile/

## Nội dung

- Giới thiệu bản thân & hướng nghiên cứu
- Danh sách CVE đã được ghi nhận, kèm phân tích kỹ thuật và đoạn code gây lỗi
- Timeline các cột mốc disclosure
- Song ngữ Việt / Anh (nút VI/EN trên thanh điều hướng)

## Công nghệ

- HTML / CSS / JavaScript thuần, gói gọn trong một file `index.html` — không build step, không dependency
- Deploy tĩnh bằng GitHub Pages

## Chạy thử local

Chỉ cần mở `index.html` bằng trình duyệt, hoặc chạy một static server bất kỳ:

```bash
npx serve .
```

## Cập nhật nội dung

Các con số thống kê (số CVE, số dự án, số lớp CWE) được đếm tự động từ danh sách card trong section `#cve`. Khi có CVE mới, chỉ cần thêm một `<article class="cve">` mới (kèm chuỗi i18n tương ứng) — mọi con số trên trang tự cập nhật.

Quy trình sửa đổi: tạo branch → commit → mở Pull Request → merge vào `main`. GitHub Pages sẽ tự deploy lại sau khi merge.

## Liên hệ

- Email: vophuvinh15012007@gmail.com
- GitHub: [@fortress07](https://github.com/fortress07)
