var express = require('express');
var router = express.Router();
var WalletHandler = require('../model/WalletHandler')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/login', function(req, res, next) {
    if (req.body.username == "admin" && req.body.password == "admin") {
        WalletHandler.wallet_list({}, (data) => {
            data = data ? data : []
            console.log(data)
            res.render('home', { username: req.body.username, token: "this_is _token", walletlist: data });
        })
    } else {
        res.render('index', { msg: 'Invalid credentials' }, );
    }
});
module.exports = router;