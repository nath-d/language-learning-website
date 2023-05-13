const Language = require("../models/Language");

const LanguageRegister = async (req, res) => {
    const { name, desc } = req.body;
    try {
        const lang = await Language.create({
            name,
            desc
        })
        res.json(lang)
    } catch (err) {
        res.status(422).json(err)
    }
}

const GetAllLanguages = async (req, res) => {
    try {
        const lang = await Language.find();
        res.send(lang);
    } catch (err) {
        res.status(422).json(err)
    }
}

module.exports = { LanguageRegister, GetAllLanguages }