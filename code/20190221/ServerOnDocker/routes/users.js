var express = require('express');
var router = express.Router();
const {User} = require("../DbConnect");

/* GET users listing. */
router.get('/list', async function (req, res, next) {
    let result = await User.findAll();
    res.render("users/list", {users: result});
});

router.get('/edit/:uid', async function (req, res) {
    let user = await User.findByPk(req.params.uid);
    if (!user) {
        user = {id: 0}
    }
    res.render("users/edit", {user: user});
});

router.post('/edit', async function (req, res) {
    let user = await User.findByPk(req.body.uid);
    if (user) {
        user.username = req.body.username;
        user.userage = req.body.userage;
        await user.save();
    } else {
        user = await User.create({username: req.body.username, userage: req.body.userage});
    }
    res.render("users/edit", {user: user});
});

router.get("/delete/:uid", async function (req, res) {
    await User.destroy({
        where: {
            id: req.params.uid
        }
    });
    res.redirect("/users/list");
});

module.exports = router;
