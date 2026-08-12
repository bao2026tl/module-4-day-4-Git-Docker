# 🚀 NestJS + Docker API Project

## 👥 Thông tin nhóm
- **Tên nhóm:** TLAB
- **Thành viên:** Tạ Lê Anh Bảo

## 📖 Giới thiệu dự án
Đây là một dự án RESTful API tối giản được xây dựng bằng framework NestJS, kết hợp với cơ sở dữ liệu PostgreSQL và hệ thống Redis. Toàn bộ hệ thống được đóng gói và vận hành trơn tru bên trong các container thông qua Docker Compose.

Dự án bao gồm các chức năng cơ bản để quản lý người dùng và được tích hợp sẵn giao diện tài liệu API trực quan bằng Swagger.

## 🛠 Công nghệ sử dụng
- **Framework chính:** NestJS (TypeScript)
- **Database ORM:** TypeORM
- **Cơ sở dữ liệu:** PostgreSQL
- **Bộ nhớ đệm (Cache):** Redis
- **Containerization:** Docker & Docker Compose
- **Tài liệu API:** Swagger UI

## ⚙️ Hướng dẫn cài đặt và khởi chạy

### Yêu cầu hệ thống:
- Đảm bảo máy tính đã cài đặt và đang bật phần mềm **Docker Desktop**.

### Các bước chạy dự án:
1. Mở terminal (ví dụ: PowerShell, Command Prompt, hoặc Terminal trong VS Code) tại thư mục gốc của dự án.
2. Gõ lệnh sau và nhấn Enter để tự động build và khởi động toàn bộ hệ thống:
   ```bash
   docker compose up --build

Đợi vài phút cho đến khi terminal hiển thị thông báo Nest application successfully started.

🔗 Kiểm thử API (Swagger UI)
Sau khi hệ thống khởi chạy thành công, mở trình duyệt và truy cập vào đường dẫn dưới đây để xem tài liệu API và tương tác trực tiếp:

👉 http://localhost:3000/api

Các Endpoint hiện có:
GET /users: Lấy danh sách toàn bộ người dùng.

POST /users: Tạo mới một người dùng (cung cấp name và email).

PATCH /users/:id: Cập nhật thông tin người dùng theo ID (chỉ cần gửi lên các trường muốn sửa).