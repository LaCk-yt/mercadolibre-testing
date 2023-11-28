const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios").default;


const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Add urlencoded parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(3000, () => { console.log('listening on port 3000')});
