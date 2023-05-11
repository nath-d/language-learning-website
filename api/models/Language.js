const mongoose = require('mongoose')

const LanguageSchema = new mongoose.Schema({
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

const LanguageModel = mongoose.model("Language", LanguageSchema)
module.exports = LanguageModel