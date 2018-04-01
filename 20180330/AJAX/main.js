const Server = require("yunpnodeserver");

let s = new Server();
s.serve();

s.addPage("/ajax", (req, res) => {
    res.end("Hello World");
});


s.addPage("/hello", (req, res) => {
    if (req.params) {
        if (req.params.name) {
            res.end(`Hello ${req.params.name}`);
        } else {
            res.end("Arguments error");
        }
    } else {
        res.end("No content");
    }
});