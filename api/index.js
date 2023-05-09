const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { UserRegister, UserLogin } = require('./controllers/UserController');
require('dotenv').config()

//xDmFk9jgrJfJv9p9

const app = express();



app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
})

app.post('/signUp', UserRegister);
app.post('/login', UserLogin)


app.listen(7001, () => {
    console.log("app running on localhost:7001")
});
