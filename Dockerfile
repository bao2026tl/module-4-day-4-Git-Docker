# Sử dụng image Node.js bản rút gọn (nhẹ, build nhanh)
FROM node:20-alpine

# Khai báo thư mục làm việc bên trong container
WORKDIR /app

# Copy 2 file package.json và package-lock.json vào trước
COPY package*.json ./

# Cài đặt các thư viện (chạy npm install)
RUN npm install

# Copy toàn bộ code còn lại vào container
COPY . .

# Build project NestJS từ TypeScript sang JavaScript (thư mục dist)
RUN npm run build

# Mở cổng 3000 để bên ngoài có thể gọi API
EXPOSE 3000

# Lệnh khởi chạy server khi container bật lên
CMD ["npm", "run", "start:prod"]