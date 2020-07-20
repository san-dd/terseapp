var unirest = require('unirest')

class WalletHandler {
    create_wallet(data, callback) {
        unirest
            .post('https://api.streetcred.id/custodian/v1/api/wallets')
            .headers({ 'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': 'bearer IQiLu-***********',', 'X-Streetcred-Subscription-Key': '***********',' })
            .send({ "ownerName": `${data.ownerName}` })
            .then((response) => {
                console.log(response.body)
                callback({ msg: "wallet created successfully", data: response.body })
            })

    }

    wallet_list(data, callback) {
        unirest
            .get('https://api.streetcred.id/custodian/v1/api/wallets')
            .headers({ 'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': 'bearer ***********', 'X-Streetcred-Subscription-Key': '***********',' })
            .send()
            .then((response) => {
                console.log(response.body)
                callback(response.body)
            })
    }

    delete_wallet(data, callback) {
        unirest
            .delete('https://api.streetcred.id/wallet/v1/api/wallets?walletId=' + data.walletid)
            .headers({ 'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': 'bearer IQiLu-***********',', 'X-Streetcred-Subscription-Key': '***********',' })
            .send()
            .then((response) => {
                if (response.body) {
                    callback({ success: false, msg: response.body.error })
                } else {
                    callback({ success: true, msg: "wallet deleted successfully", walletlist: [] })
                }
            })
    }
}


module.exports = new WalletHandler
