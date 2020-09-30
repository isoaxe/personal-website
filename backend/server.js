const express = require('express');
const app = express();

const testRoute = require('./routes/test');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(testRoute);

app.listen(3000);
