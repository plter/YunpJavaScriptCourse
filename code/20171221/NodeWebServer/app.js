const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    // res.write("Hello World");
    // res.end();
    // res.end("Hello World");

    if (req.url.startsWith("/static")) {
        fs.createReadStream(req.url.substring(1)).pipe(res);
    } else {
        res.end("Node server");
    }
}).listen(8000);