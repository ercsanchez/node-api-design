const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(res);
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "hello" }));
    res.end();
    return;
    // console.log('hello from server')
    // res.end()
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "nope" }));
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});