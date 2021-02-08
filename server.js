const express = require("express");
const app = module.exports = express();
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyparser.urlencoded({extended: false}));

app.use(bodyparser.json());

const port = 8080;
const host = "0.0.0.0";


require('./routes');

app.listen(port, host, function() {
    console.log('Application is started');
    console.log('Listening on port ', port);
});