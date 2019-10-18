const http = require('http');
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Node!\n');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
