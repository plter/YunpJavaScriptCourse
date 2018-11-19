const http = require("http");
const fs = require("fs");
const SocketIO = require('socket.io');

let server = http.createServer(function (req, res) {
    if (req.url.startsWith("/static")) {
        let file = req.url.substring(1);
        if (fs.existsSync(file)) {
            fs.createReadStream(file).pipe(res);
        } else {
            res.end("File not found");
        }
    } else {
        res.end("Default page.");
    }
});
let io = SocketIO(server);
server.listen(8000);

io.on('connection', function (socket) {
    socket.on('chat', function (data) {
        io.emit('chat', data);
    });
});