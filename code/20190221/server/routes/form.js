var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer({dest: "public/uploads"});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('form', {title: 'Express', args: req.query});
});

router.post("/", upload.single("upfile"), (req, res) => {
    res.render('form', {title: "Handle form request", args: req.body});
});

router.post("/upload_img", upload.single("upfile"), (req, res) => {
    res.render('upload_img', {title: "Upload result", imgSource: `/uploads/${req.file.filename}`});
});

module.exports = router;
