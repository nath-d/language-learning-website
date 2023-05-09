const User = require("../models/User");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'jklhfg34jh1234vjk23h4v2j3hk4v24'

const UserRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        })
        res.json(user)
    } catch (err) {
        res.status(422).json(err)
    }
}

const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        email,
    })
    if (user) {
        const passOk = bcrypt.compareSync(password, user.password)
        if (passOk) {
            jwt.sign({
                email: user.email,
                id: user._id,
                name: user.name
            },
                jwtSecret,
                {},
                (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json(user)
                })

        } else {
            res.status(422).json('pass not ok')
        }
    } else {
        res.json('not found')
    }
}
const TokenHandler = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {

    }
    res.json(null)
}

module.exports = { UserRegister, UserLogin, TokenHandler }