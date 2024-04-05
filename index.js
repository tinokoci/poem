import http from "http";
import fs from "fs";

const server = http.createServer(handleRequest);
server.listen(5000);

function handleRequest(req, res) {
  const url = req.url;

  if (url.endsWith(".css")) {
    const fileName = extractFileNameFromUrl(url);
    fs.readFile(`./public/${fileName}`, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
      console.log(`Sent a response back to the request url "${url}" with a css file`)
    });
  }
  else if (url !== "/favicon.ico") {
    fs.readFile("./public/index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
      console.log(`Sent a response back to the request url "${url}" with an html file`)
    });
  }
}

function extractFileNameFromUrl(url) {
  const parts = url.split("/");
  const length = parts.length;
  if (length <= 1) return url;
  return parts[length - 1];
}

