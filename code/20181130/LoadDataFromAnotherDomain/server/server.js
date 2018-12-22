const http = require("http");

http.createServer(((request, response) => {
    if (request.url == '/data') {
        // response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
        response.end("Hello World");
    } else {
        response.end("Nothing");
    }
})).listen(3000);