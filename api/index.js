const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('test ok');
});

app.listen(4000);
console.log("app running on localhost:4000")