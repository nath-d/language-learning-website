const User = require("../models/User");
const bcrypt = require('bcryptjs')


const bcryptSalt = bcrypt.genSaltSync(10);

const UserRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    })

    res.json(user)
}

module.exports = { UserRegister }