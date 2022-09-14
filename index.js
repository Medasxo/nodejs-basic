const aboutPage = require("./about.html");
const http = require("http");
const port = process.env.PORT || 8080;
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data);
  });

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
