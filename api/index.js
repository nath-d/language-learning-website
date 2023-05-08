const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()

//Yz2opU8FNFTr4pYf

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)


app.post('/signUp', (req, res) => {
    const { name, email, password } = req.body;
    res.json({ name, email, password });
});


app.listen(4001);
console.log("app running on localhost:4001")