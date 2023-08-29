const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is Home Page");
  } else if (req.url === "/about") {
    res.end("This is About Page");
  } else if (req.url === "/contact") {
    res.end("This is Contact Page");
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) throw err;
      console.log("File created and text written to it.");
      res.end("File created and text written to it.");
    });
  } else {
    res.end("Invalid URL");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
