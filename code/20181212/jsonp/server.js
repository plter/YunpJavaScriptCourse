const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    if (request.url.startsWith("/static")) {
        let file = request.url.substring(1);
        if (fs.existsSync(file)) {
            fs.createReadStream(file).pipe(response);
        } else {
            response.end("File not found");
        }
    } else if (request.url.startsWith("/jsonp")) {
        let data = "JavaScript 1";

        let startIndex = request.url.indexOf("?");
        if (startIndex != -1) {
            let query = request.url.substring(startIndex + 1);
            let tokens = query.split("&");
            let params = {};
            if (tokens.length > 0) {
                for (let kvString of tokens) {
                    let kv = kvString.split("=");
                    if (kv.length == 2) {
                        params[kv[0]] = kv[1];
                    }
                }
            }
            // console.log(params);
            response.end(`${params["callback"]}("${data}")`);

        } else {
            response.end("");
        }


    }
}).listen(3000);