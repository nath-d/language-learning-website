const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { UserRegister, UserLogin, TokenHandler } = require('./controllers/UserController');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const { JsonWebTokenError } = require('jsonwebtoken');

//xDmFk9jgrJfJv9p9

const app = express();



app.use(express.json())
app.use(cookieParser())


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
})

app.post('/signUp', UserRegister);
app.post('/login', UserLogin)
app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.get('/profile', TokenHandler)



app.listen(7001, () => {
    console.log("app running on localhost:7001")
});
