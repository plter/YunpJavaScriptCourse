const express = require("express");
const app = express();

app.use(express.static("static"));
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(3000, () => console.log("Server started at port 3000"));
