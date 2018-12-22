const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {

    let file = req.url.substring(1);
    if (fs.existsSync(file)) {
        fs.createReadStream(file).pipe(res);
    } else if (req.url.startsWith("/sse")) {
        res.setHeader("Cache-Control", 'no-cache');
        res.setHeader('Content-Type', 'text/event-stream');

        let count = 0;
        let timerId = setInterval(function () {
            count++;

            // res.write("data: " + count + "\n\n");
            // res.write(`id: ${count}\nevent: count\nretry: 5000\ndata: Hello\n\n`);
            res.write(`event: progress\ndata: ${count}\n\n`);

            if (count >= 100) {
                clearInterval(timerId);
                res.end(`event: complete\ndata: \n\n`);
            }
        }, 100);
    } else {
        res.end("Node server.");
    }
});
server.listen(8000);