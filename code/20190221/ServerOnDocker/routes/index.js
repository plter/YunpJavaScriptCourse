var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.cookies);
    res.render('index', {title: 'Express'});
});


router.get('/count', (req, res) => {
    req.session.count = req.session.count || 0;
    req.session.count++;
    res.send(`Count: ${req.session.count}`);
});

module.exports = router;
