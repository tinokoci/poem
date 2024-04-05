import http from "http";

let state = {
	count: 0,
};

const server = http.createServer((req, res) => {
	console.log(`Got a request with url: ${req.url}`);

	if (req.url !== "/favicon.ico") {
		res.writeHead(200, { "Content-Type": "text/html" });
		const html = `<html><head></head><title>hello!</title><body>sup! your path: ${req.url}<br>Site accessed: ${++state.count} times</body></html>`;
		res.end(html);
		console.log(`Sent a response back to the url : ${req.url}`)
	}
});

server.listen(5000);

