var unirest = require('unirest')

class WalletHandler {
    create_wallet(data, callback) {
        unirest
            .post('https://api.streetcred.id/custodian/v1/api/wallets')
            .headers({ 'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': 'bearer IQiLu-NkPFMqhxpjZ7BoWM_JT8cWQHJYH9CO6EC8hoM', 'X-Streetcred-Subscription-Key': 'cf8273b352b04711b4ad5575ae551e77' })
            .send({ "ownerName": `${data.ownerName}` })
            .then((response) => {
                console.log(response.body)
                callback({ msg: "wallet created successfully", data: response.body })
            })

    }

    wallet_list(data, callback) {
        unirest
            .get('https://api.streetcred.id/custodian/v1/api/wallets')
            .headers({ 'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': 'bearer IQiLu-NkPFMqhxpjZ7BoWM_JT8cWQHJYH9CO6EC8hoM', 'X-Streetcred-Subscription-Key': 'cf8273b352b04711b4ad5575ae551e77' })
            .send()
            .then((response) => {
                console.log(response.body)
                callback(response.body)
            })
    }

    delete_wallet(data, callback) {
        unirest
            .delete('https://api.streetcred.id/wallet/v1/api/wallets?walletId=' + data.walletid)
            .headers({ 'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': 'bearer IQiLu-NkPFMqhxpjZ7BoWM_JT8cWQHJYH9CO6EC8hoM', 'X-Streetcred-Subscription-Key': 'cf8273b352b04711b4ad5575ae551e77' })
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