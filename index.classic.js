import { createServer } from "node:http";
/**
hàm createServer từ module node:http.
Đây là module tích hợp sẵn trong Node.js để làm việc 
với giao thức HTTP.
 */
const server = createServer((req, res) => {
  // hàm tạo ra một server HTTP
  // nhận một hàm callback (hay còn gọi là hàm
  // xử lý yêu cầu) với hai tham số req, res
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});
/**
* req (request): Đại diện cho yêu cầu từ client (như trình duyệt web).
* res (response): Đại diện cho phản hồi mà server gửi lại cho client.
- res.writeHead(statusCode, headers): Gửi tiêu đề HTTP và mã trạng thái HTTP
đến client. 
- 200: mã trạng thái HTTP cho "OK", có nghĩa là yêu cầu 
đã được xử lý thành công.
- { "Content-Type": "text/plain" } loại nội dung của phản hồi là văn 
bản thuần (plain text).
- Gửi dữ liệu Hello world và kết thúc
 */

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

/**
 * Hàm này yêu cầu server bắt đầu lắng nghe kết nối ở một cổng và địa chỉ IP cụ thể:
 * 3000 là số cổng mà server sẽ lắng nghe.
 * "127.0.0.1" là địa chỉ IP của máy chủ. Đây là địa chỉ loopback (localhost),
 * có nghĩa là server chỉ có thể được truy cập từ cùng một máy tính.
 * () => { console.log("Listening on 127.0.0.1:3000"); }: Hàm callback được gọi khi
 * server bắt đầu lắng nghe. Hàm này in ra thông báo "Listening on 127.0.0.1:3000"
 * trên console để cho biết rằng server đang hoạt động.
 */
