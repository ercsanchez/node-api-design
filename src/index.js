const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req);
  console.log(res);
  if (req.url === "/" && req.method === "GET") {
    console.log('hello from server')
    res.end()
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});