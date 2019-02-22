const express = require("express");
const router = express.Router();

router.get("/:name/:age", (req, res) => {
    res.render("hello", {data: "Hello World 1", params: req.params, query: req.query})
});

module.exports = router;