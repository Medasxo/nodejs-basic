const http = require("http");
const port = process.env.PORT || 8080;
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end(data);
    });
  }
  else if(req.url === "/contact-me") {
    fs.readFile("contact-me.html", "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.end(data);
      });
  }
  else{
    fs.readFile("404.html", "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.end(data);
      });
  }
  res.statusCode = 200;
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
