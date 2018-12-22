const http = require("http");
const fs = require("fs");

function parseUrlParams(urlParamsString) {
    let kvs = urlParamsString.split("&");
    let params = {};
    for (let kvString of kvs) {
        let kv = kvString.split("=");
        params[kv[0]] = kv[1];
    }
    return params;
}

function createServer(callback, port) {
    http.createServer((req, res) => {
        if (req.url.startsWith("/static")) {
            fs.createReadStream(req.url.substring(1)).pipe(res);
        } else if (req.url.startsWith("/hello")) {
            let index = req.url.indexOf("?");
            if (index > -1) {
                let queryString = req.url.substring(index + 1);
                req.params = parseUrlParams(queryString);
            }

            switch (req.method) {
                case "GET":
                    callback(req, res);
                    break;
                case "POST":
                    let buffer = Buffer.alloc(0);
                    req.on("data", data => {
                        buffer = Buffer.concat([buffer, data]);
                    });
                    req.on("end", () => {
                        req.params = parseUrlParams(buffer.toString());
                        callback(req, res);
                    });
                    break;
                default:
                    res.end("Unsupported http method!");
                    break;
            }
        } else {
            res.end("Not found");
        }
    }).listen(port);
}


createServer((req, res) => {
    res.end("Result:" + JSON.stringify(req.params));
}, 8000);

