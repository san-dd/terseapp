var unirest = require('unirest')

class Verification {
    Verification_wallet(data, callback) {
        unirest
            .get(`https://api.streetcred.id/wallet/v1/api/${data.walletId}/verifications`)
            .headers({ 'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': 'bearer IQiLu-NkPFMqhxpjZ7BoWM_JT8cWQHJYH9CO6EC8hoM', 'X-Streetcred-Subscription-Key': 'cf8273b352b04711b4ad5575ae551e77' })
            .send()
            .then((response) => {
                console.log(response.body)
                callback({ data: response.body })
            })

    }
}

module.exports = new Verification
var abc = new Verification

abc.Verification_wallet({ "walletId": "Ce8WVuwZSplOv5XPIFvD3ZVh2hzjip46E" }, (res) => {
    console.log("asd", res)
})