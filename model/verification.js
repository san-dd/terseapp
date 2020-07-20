var unirest = require('unirest')

class Verification {
    Verification_wallet(data, callback) {
        unirest
            .get(`https://api.streetcred.id/wallet/v1/api/${data.walletId}/verifications`)
            .headers({ 'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': 'bearer IQiLu-***********', 'X-Streetcred-Subscription-Key': '***********' })
            .send()
            .then((response) => {
                console.log(response.body)
                callback({ data: response.body })
            })

    }
}

module.exports = new Verification
