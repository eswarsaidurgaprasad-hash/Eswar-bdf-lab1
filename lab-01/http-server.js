// Task 3: built-in Node.js HTTP server (without Express).
const http = require('http');

const PORT = process.env.PORT || 3000;

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello');
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 - Page Not Found');
}

http.createServer(handleRequest).listen(PORT, () => {
  console.log(`Built-in HTTP server is listening at http://localhost:${PORT}`);
});
