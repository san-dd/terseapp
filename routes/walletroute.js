var express = require('express');
var router = express.Router();
var WalletHandler = require('../model/WalletHandler')
var verification = require('../model/verification')
    /* GET users listing. */
router.post('/deletewallet', function(req, res, next) {
    WalletHandler.delete_wallet({ walletid: req.body.walletid }, (deleteres) => {
        WalletHandler.wallet_list({}, (data) => {
            data = data ? data : []
            console.log(data)
            res.render('home', { username: req.body.username, msg: deleteres.msg, walletlist: data });
        })
    })
});

router.post('/createwallet', function(req, res, next) {
    WalletHandler.create_wallet({ ownerName: req.body.ownerName }, (createres) => {
        WalletHandler.wallet_list({}, (data) => {
            data = data ? data : []
            console.log(data)
            res.render('home', { username: req.body.username, msg: createres.msg, walletlist: data });
        })
    })
});

//verifyroute
router.post('/verify', function(req, res, next) {
    verification.Verification_wallet({ walletId: req.body.walletid }, (createres) => {
        WalletHandler.wallet_list({}, (data) => {
            data = data ? data : []
            console.log(data)
            res.render('home', { username: req.body.username, msg1: JSON.stringify(createres), walletlist: data });
        })
    })
});

module.exports = router;