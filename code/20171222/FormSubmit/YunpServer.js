const http = require("http");
const fs = require("fs");


class YunpServer {

    constructor(port, staticDir = "/static") {
        this._port = port;
        this._staticDir = staticDir;
        this._pages = [];
    }

    parseUrlParams(urlParamsString) {
        let kvs = urlParamsString.split("&");
        let params = {};
        for (let kvString of kvs) {
            let kv = kvString.split("=");
            params[kv[0]] = kv[1];
        }
        return params;
    }

    parseFormData(req, res) {
        let boundary = /multipart\/form-data; boundary=(.+)/.exec(req.headers['content-type'])[1];
        let index = req.bodyData.indexOf(boundary);
        if (index > -1) {
            while (true) {
                index += boundary.length + 2;
                let start = index;
                let end = req.bodyData.indexOf("\r\n\r\n", start);
                if (end > -1) {
                    let headerString = req.bodyData.slice(start, end).toString();
                    let nameResult = /name="([^"]+)"/.exec(headerString);
                    if (nameResult && nameResult.length >= 2) {
                        let name = nameResult[1];
                        let fileNameResult = /filename="([^"]+)"/.exec(headerString);
                        let fileName;
                        if (fileNameResult && fileNameResult.length >= 2) {
                            fileName = fileNameResult[1];
                        }

                        start = end + 4;
                        index = req.bodyData.indexOf(boundary, start);
                        if (index > -1) {
                            end = index - 4;
                            let bodyBuffer = req.bodyData.slice(start, end);

                            if (!fileName) {
                                req.params = req.params || {};
                                req.params[name] = bodyBuffer.toString();
                            } else {
                                req.files = req.files || {};
                                req.files[name] = {fileName: fileName, data: bodyBuffer};
                            }
                        } else {
                            break;
                        }
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }
        }
    }

    handle404(req, res) {
        res.statusCode = 404;
        res.end("Not found");
    }

    handle501(req, res) {
        res.statusCode = 501;
        res.end("Unsupported http method!");
    }

    addPage(requestUri, callback) {
        this._pages.push({requestUri: requestUri, callback: callback});
    }

    serve() {
        http.createServer((req, res) => {
            if (req.url.startsWith(this._staticDir)) {
                let path = req.url.substring(1);
                if (fs.existsSync(path)) {
                    fs.createReadStream(path).pipe(res);
                } else {
                    this.handle404(req, res);
                }
            } else {
                let pages = this._pages.filter(value => req.url.startsWith(value.requestUri));
                if (pages.length) {
                    let page = pages[0];

                    let index = req.url.indexOf("?");
                    if (index > -1) {
                        let queryString = req.url.substring(index + 1);
                        req.params = this.parseUrlParams(queryString);
                    }

                    switch (req.method) {
                        case "GET":
                            page.callback(req, res);
                            break;
                        case "POST":
                            let buffer = Buffer.alloc(0);
                            req.on("data", data => {
                                buffer = Buffer.concat([buffer, data]);
                            });
                            req.on("end", () => {
                                req.bodyData = buffer;
                                let contentType = req.headers['content-type'];
                                if (contentType.startsWith("application/x-www-form-urlencoded")) {
                                    req.params = this.parseUrlParams(buffer.toString());
                                    page.callback(req, res);
                                } else if (contentType.startsWith("text/plain")) {
                                    req.body = buffer.toString();
                                    page.callback(req, res);
                                } else if (contentType.startsWith("multipart/form-data")) {
                                    this.parseFormData(req, res);
                                    page.callback(req, res);
                                } else {
                                    res.statusCode = 500;
                                    res.end("Unsupported content type");
                                }
                            });
                            break;
                        default:
                            this.handle501(req, res);
                            break;
                    }
                } else {
                    this.handle404(req, res);
                }
            }
        }).listen(this._port);
    }

    get port() {
        return this._port;
    }

    get staticDir() {
        return this._staticDir;
    }
}

module.exports = YunpServer;