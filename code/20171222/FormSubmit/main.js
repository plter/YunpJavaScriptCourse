const Server = require("./YunpServer");
const fs = require("fs");

let s = new Server(8000);
s.serve();

s.addPage("/hello", (req, res) => {
    res.end(JSON.stringify(req.params));
});
s.addPage("/upload", (req, res) => {
    let textFile = req.files["text_file"];
    if (textFile) {
        fs.writeFile(textFile.fileName, textFile.data);
    }
    let imageFile = req.files["image_file"];
    if (imageFile) {
        fs.writeFile(imageFile.fileName, imageFile.data);
    }

    res.end("Hello");
});