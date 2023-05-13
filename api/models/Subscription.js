const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
})

const SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema)
module.exports = SubscriptionModel